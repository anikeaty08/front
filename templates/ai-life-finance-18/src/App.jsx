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
      

<div className="blob bg-sky-600 w-96 h-96 rounded-full top-0 left-0 -translate-x-1/2 -translate-y-1/2"></div>
<div className="blob bg-emerald-600 w-[30rem] h-[30rem] rounded-full bottom-0 right-0 translate-x-1/3 translate-y-1/3"></div>

<nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-gradient-to-tr from-sky-400 to-emerald-300 rounded-full flex items-center justify-center">
<div className="w-3 h-3 bg-slate-950 rounded-full"></div>
</div>
<span className="text-lg font-medium text-white tracking-tight">Routina.ai</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#">Features</a>
<a className="hover:text-white transition-colors" href="#">Coaching</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#">Sign in</a>
<button className="bg-white text-slate-950 hover:bg-sky-50 px-4 py-2 rounded-full text-xs font-semibold transition-all">
                    Get App
                </button>
</div>
</div>
</nav>

<main className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
            New: Personal Finance Tracking
        </div>
<h1 className="md:text-7xl lg:text-8xl leading-[1.1] text-5xl font-medium text-white tracking-tighter max-w-5xl mb-8">
            Your health &amp; wealth,<br/>
<span className="bg-gradient-to-b from-sky-200 via-sky-400 to-emerald-500 bg-clip-text text-transparent">managed in one place.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 font-light leading-relaxed">
            The all-in-one coach for your life. Log meals, track spending, monitor workouts, and build wealth just by speaking.
        </p>
<div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
<button className="w-full md:w-auto bg-white text-slate-950 h-12 px-8 rounded-full font-semibold text-sm hover:bg-sky-50 transition-all flex items-center justify-center gap-2">
                Start for free
                <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="w-full md:w-auto glass text-white h-12 px-8 rounded-full font-medium text-sm hover:bg-white/10 transition-all flex items-center justify-center gap-2">
<i className="w-4 h-4 text-sky-400" data-lucide="mic"></i>
                Try Voice Demo
            </button>
</div>

<div className="mt-20 w-full relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
<div className="relative glass rounded-xl border border-white/10 overflow-hidden aspect-[16/9] md:aspect-[21/9] flex items-center justify-center bg-slate-950/50">

<div className="grid grid-cols-12 gap-4 p-8 w-full h-full opacity-90">

<div className="col-span-3 border-r border-white/5 flex flex-col gap-4 hidden md:flex pr-4">
<div className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">Schedule</div>

<div className="glass p-3 rounded-lg border-l-2 border-l-sky-400 flex flex-col gap-1">
<span className="text-xs text-slate-400">08:00 AM</span>
<span className="text-sm text-white font-medium">Morning Meditation</span>
</div>

<div className="glass p-3 rounded-lg border-l-2 border-l-cyan-400 flex flex-col gap-1">
<span className="text-xs text-slate-400">05:30 PM</span>
<span className="text-sm text-white font-medium">Gym Session</span>
</div>

<div className="mt-auto glass-active p-3 rounded-lg flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-sky-500/20 flex items-center justify-center">
<i className="w-4 h-4 text-sky-400" data-lucide="bell"></i>
</div>
<div className="">
<p className="text-xs text-sky-200">Review Budget</p>
<p className="text-[10px] text-sky-400/70">Due now</p>
</div>
</div>
</div>

<div className="col-span-12 md:col-span-6 flex flex-col justify-end pb-4 px-2">
<div className="flex flex-col gap-4 mb-6">

<div className="self-end bg-sky-600/20 border border-sky-500/20 px-4 py-3 rounded-2xl rounded-tr-none max-w-[80%]">
<div className="flex items-center gap-2 mb-1 justify-end">
<p className="text-xs text-sky-300">You (Voice)</p>
<i className="w-3 h-3 text-sky-400" data-lucide="mic"></i>
</div>
<p className="text-sm text-slate-200">Hey Routina, I ran 5k this morning and just bought a $15 salad for lunch. Log it.</p>
</div>

<div className="self-start glass px-4 py-3 rounded-2xl rounded-tl-none max-w-[80%]">
<div className="flex items-center gap-2 mb-1">
<div className="w-4 h-4 bg-gradient-to-tr from-sky-400 to-emerald-300 rounded-full"></div>
<p className="text-xs text-slate-400">Routina</p>
</div>
<p className="text-sm text-slate-200 mt-1">Done! 🏃‍♂️ 5km run added. I've also logged the $15 expense to "Food &amp; Dining". </p>
<div className="mt-3 flex items-center gap-2">
<span className="text-xs bg-white/10 px-2 py-1 rounded text-slate-300 border border-white/5">Burned: ~300 cal</span>
<span className="text-xs bg-emerald-500/10 px-2 py-1 rounded text-emerald-300 border border-emerald-500/20">Spent: $15.00</span>
</div>
</div>
</div>

<div className="h-14 w-full rounded-full bg-slate-900 border border-white/10 flex items-center px-2 justify-between">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors">
<i className="w-5 h-5 text-slate-400" data-lucide="plus"></i>
</div>
<div className="h-full flex-1 flex items-center px-4">
<span className="text-slate-500 text-sm">Type or speak to Routina...</span>
</div>
<div className="w-10 h-10 rounded-full bg-sky-500 hover:bg-sky-400 flex items-center justify-center cursor-pointer transition-colors shadow-lg shadow-sky-500/20">
<i className="w-5 h-5 text-white" data-lucide="mic"></i>
</div>
</div>
</div>

<div className="col-span-3 border-l border-white/5 pl-4 hidden md:flex flex-col gap-4">
<div className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">Daily Goals</div>

<div className="glass p-3 rounded-lg">
<div className="flex justify-between items-center mb-2">
<div className="flex items-center gap-2">
<i className="w-3 h-3 text-sky-400" data-lucide="droplet"></i>
<span className="text-xs text-slate-300">Water</span>
</div>
<span className="text-xs text-sky-400">75%</span>
</div>
<div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
<div className="bg-sky-400 h-full w-[75%] rounded-full"></div>
</div>
</div>

<div className="glass p-3 rounded-lg">
<div className="flex justify-between items-center mb-2">
<div className="flex items-center gap-2">
<i className="w-3 h-3 text-emerald-400" data-lucide="wallet"></i>
<span className="text-xs text-slate-300">Budget</span>
</div>
<span className="text-xs text-emerald-400">$45 left</span>
</div>
<div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
<div className="bg-emerald-400 h-full w-[60%] rounded-full"></div>
</div>
</div>

<div className="glass p-3 rounded-lg">
<div className="flex justify-between items-center mb-2">
<div className="flex items-center gap-2">
<i className="w-3 h-3 text-indigo-400" data-lucide="moon"></i>
<span className="text-xs text-slate-300">Sleep</span>
</div>
<span className="text-xs text-indigo-400">7h 20m</span>
</div>
<div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
<div className="bg-indigo-400 h-full w-[90%] rounded-full"></div>
</div>
</div>

<div className="glass p-3 rounded-lg">
<div className="flex justify-between items-center mb-2">
<div className="flex items-center gap-2">
<i className="w-3 h-3 text-orange-400" data-lucide="footprints"></i>
<span className="text-xs text-slate-300">Steps</span>
</div>
<span className="text-xs text-orange-400">10,420</span>
</div>
<div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
<div className="bg-orange-400 h-full w-[100%] rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-16 w-full pt-8 border-t border-white/5">
<p className="text-center text-sm text-slate-500 mb-8">Helping thousands build better habits &amp; wealth every day</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-lg font-semibold tracking-tighter text-white">Equinox</span>
<span className="text-lg font-semibold tracking-tighter text-white">Mint</span>
<span className="text-lg font-semibold tracking-tighter text-white">WHOOP</span>
<span className="text-lg font-semibold tracking-tighter text-white">YNAB</span>
<span className="text-lg font-semibold tracking-tighter text-white">OURA</span>
</div>
</div>
</main>

<section className="py-20 px-6 border-b border-white/5 bg-gradient-to-b from-transparent to-white/[0.02]">
<div className="max-w-4xl mx-auto text-center">
<i className="w-6 h-6 text-sky-500/50 mx-auto mb-6" data-lucide="quote"></i>
<blockquote className="text-2xl md:text-4xl font-playfair font-medium text-slate-200 leading-snug tracking-tight">
                "You'll never change your life until you change something you do daily. The secret of your success is found in your daily routine."
            </blockquote>
<div className="mt-8 flex items-center justify-center gap-3">
<div className="h-px w-8 bg-slate-700"></div>
<span className="text-xs font-semibold text-sky-400 uppercase tracking-widest">John C. Maxwell</span>
<div className="h-px w-8 bg-slate-700"></div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-4">Your life, organized by AI.</h2>
<p className="text-slate-400 max-w-2xl text-lg">Routina isn't just a tracker; it's an intelligent companion that understands your schedule, health data, and financial goals.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 row-span-2 glass rounded-3xl p-8 md:p-12 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/20 rounded-full blur-[80px] group-hover:bg-sky-500/30 transition-all duration-700"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="">
<div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 border border-white/10">
<i className="text-sky-400" data-lucide="brain"></i>
</div>
<h3 className="text-2xl font-semibold text-white mb-3">Trained on You</h3>
<p className="text-slate-400 leading-relaxed max-w-md">Routina analyzes your patterns over time. It identifies correlations between your health and spending, like how stress impacts your shopping habits.</p>
</div>
<div className="mt-12 bg-slate-900/50 border border-white/5 rounded-xl p-4 flex gap-4 items-center">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-sky-400 to-emerald-300"></div>
<div>
<div className="text-xs text-slate-400">Personal Insight</div>
<div className="text-sm text-white">"You spend 20% more on takeout when you sleep less than 6 hours."</div>
</div>
</div>
</div>
</div>
</div>

<div className="glass rounded-3xl p-8 relative overflow-hidden group md:row-span-2">
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-500/10 to-transparent"></div>
<div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 border border-white/10">
<i className="text-emerald-400" data-lucide="lock"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Bank-Grade Security</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-8">Your financial and health data is sensitive. We use top-tier encryption and never sell your personal information.</p>
<div className="space-y-3">
<div className="flex items-center gap-3 text-sm text-slate-300">
<i className="w-4 h-4 text-emerald-500" data-lucide="check"></i>
<span>End-to-end Encryption</span>
</div>
<div className="flex items-center gap-3 text-sm text-slate-300">
<i className="w-4 h-4 text-emerald-500" data-lucide="check"></i>
<span>Read-only Bank Access</span>
</div>
<div className="flex items-center gap-3 text-sm text-slate-300">
<i className="w-4 h-4 text-emerald-500" data-lucide="check"></i>
<span>Local-first processing</span>
</div>
</div>
</div>

<div className="glass rounded-3xl p-8 relative overflow-hidden group md:col-span-3 flex flex-col md:flex-row items-center gap-8">
<div className="flex-1">
<div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 border border-white/10">
<i className="text-amber-400" data-lucide="mic"></i>
</div>
<h3 className="text-2xl font-semibold text-white mb-3">Conversational Interface</h3>
<p className="text-slate-400 leading-relaxed">Forget complex spreadsheets. Just talk to Routina. "How much did I spend this week?", "Log my gym membership", or "Am I within budget?"</p>
</div>
<div className="flex-1 w-full h-32 md:h-full relative flex items-center justify-center">
<div className="relative w-full max-w-sm bg-slate-900 rounded-lg border border-white/10 p-4 shadow-xl">
<div className="flex gap-3 items-center mb-3">
<div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
<i className="w-4 h-4 text-white" data-lucide="dollar-sign"></i>
</div>
<div>
<div className="text-sm text-white font-medium">Subscription Logged</div>
<div className="text-xs text-slate-400">Gym Membership - $45.00</div>
</div>
</div>
<div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-full animate-[shimmer_2s_infinite]"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-white/[0.02]">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-16 items-center">
<div className="flex-1">
<h4 className="text-sky-400 font-medium tracking-wide text-sm uppercase mb-4">How it works</h4>
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">A life coach in your pocket. 24/7.</h2>
<p className="leading-relaxed text-lg text-slate-400 mb-8">
                        Routina combines the empathy of a friend with the precision of a computer. It tracks your holistic wellbeing: physical, mental, and financial.
                    </p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center shrink-0 text-white font-mono text-sm group-hover:bg-sky-500 transition-colors">1</div>
<div className="">
<h5 className="text-white font-medium mb-1">Voice Input</h5>
<p className="text-slate-500 text-sm">Simply speak your mind. "I'm stressed", "I ran 5k", or "I spent $20".</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center shrink-0 text-white font-mono text-sm">2</div>
<div className="">
<h5 className="text-white font-medium mb-1">Smart Logging</h5>
<p className="text-slate-500 text-sm">Routina categorizes data into Health, Finance, Work, or Personal logs automatically.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center shrink-0 text-white font-mono text-sm">3</div>
<div className="">
<h5 className="text-white font-medium mb-1">Active Coaching</h5>
<p className="text-slate-500 text-sm">Receive timely nudges about budget limits and health goals.</p>
</div>
</li>
</ul>
</div>
<div className="flex-1 w-full">
<div className="relative rounded-2xl border border-white/10 bg-slate-950 p-6 shadow-2xl">

<div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
<span className="text-sm font-medium text-white">Weekly Summary</span>
<span className="text-xs text-sky-400 bg-sky-400/10 px-2 py-1 rounded-full">On Track</span>
</div>

<div className="space-y-4">
<div className="flex gap-4 gap-x-4 gap-y-4 items-center">
<div className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center">
<i className="w-5 h-5 text-sky-400" data-lucide="check-circle"></i>
</div>
<div className="flex-1">
<div className="text-sm text-white font-medium">Daily Habits</div>
<div className="text-xs text-slate-400">5/6 completed today</div>
</div>
</div>

<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
<i className="w-5 h-5 text-emerald-400" data-lucide="wallet"></i>
</div>
<div className="flex-1">
<div className="text-sm text-white font-medium">Budget</div>
<div className="text-xs text-slate-400">$320/$400 weekly spent</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center">
<i className="w-5 h-5 text-indigo-400" data-lucide="brain-circuit"></i>
</div>
<div className="flex-1">
<div className="text-sm text-white font-medium">Mindfulness</div>
<div className="text-xs text-slate-400">15 min session logged</div>
</div>
</div>

<div className="mt-6 p-3 bg-white/5 rounded-lg border border-white/5">
<p className="text-xs text-slate-300 italic">"You've been great with your workouts, but you're nearing your dining out budget. Maybe cook dinner tonight? 🍳"</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-4">Invest in your best self.</h2>
<p className="text-slate-400">Start building better habits and wealth today.</p>

<div className="mt-8 flex items-center justify-center gap-4">
<span className="text-sm text-slate-300">Monthly</span>
<div className="w-12 h-6 bg-slate-800 rounded-full p-1 relative cursor-pointer border border-white/10">
<div className="w-4 h-4 bg-sky-500 rounded-full shadow-md translate-x-6 transition-transform"></div>
</div>
<span className="text-sm text-white font-medium">Yearly <span className="text-sky-400 text-xs ml-1">-20%</span></span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="glass p-8 rounded-2xl border border-white/5 flex flex-col hover:border-white/10 transition-colors">
<h3 className="text-lg font-medium text-white mb-2">Starter</h3>
<div className="text-4xl font-semibold text-white mb-6">$0<span className="text-sm text-slate-500 font-normal">/mo</span></div>
<p className="text-slate-400 text-sm mb-8">Basic tracking for health &amp; finance.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-300">
<i className="w-4 h-4 text-slate-500" data-lucide="check"></i>
                        3 Active Habits
                    </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<i className="w-4 h-4 text-slate-500" data-lucide="check"></i>
                        Manual Expense Log
                    </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<i className="w-4 h-4 text-slate-500" data-lucide="check"></i>
                        Daily Health Log
                    </li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/10 text-white hover:bg-white/5 transition-colors text-sm font-medium">Get App</button>
</div>

<div className="p-8 rounded-2xl bg-sky-600/10 border border-sky-500/50 flex flex-col relative">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sky-500 text-white px-3 py-1 rounded-full text-xs font-medium tracking-wide">RECOMMENDED</div>
<h3 className="text-lg font-medium text-white mb-2">Pro Coach</h3>
<div className="text-4xl font-semibold text-white mb-6">$12<span className="text-sm text-slate-500 font-normal">/mo</span></div>
<p className="text-sky-200 text-sm mb-8">Full AI personalization &amp; bank sync.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white">
<i className="w-4 h-4 text-sky-400" data-lucide="check"></i>
                        Unlimited Habits &amp; Logs
                    </li>
<li className="flex items-center gap-3 text-sm text-white">
<i className="w-4 h-4 text-sky-400" data-lucide="check"></i>
                        Auto-Bank Sync
                    </li>
<li className="flex items-center gap-3 text-sm text-white">
<i className="w-4 h-4 text-sky-400" data-lucide="check"></i>
                        Sync with Wearables
                    </li>
</ul>
<button className="w-full py-3 rounded-lg bg-sky-500 text-white hover:bg-sky-400 transition-colors text-sm font-medium shadow-lg shadow-sky-500/25">Start Free Trial</button>
</div>

<div className="glass p-8 rounded-2xl border border-white/5 flex flex-col hover:border-white/10 transition-colors">
<h3 className="text-lg font-medium text-white mb-2">Lifetime</h3>
<div className="text-4xl font-semibold text-white mb-6">$299<span className="text-sm text-slate-500 font-normal">/once</span></div>
<p className="text-slate-400 text-sm mb-8">Pay once, own it forever.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-300">
<i className="w-4 h-4 text-slate-500" data-lucide="check"></i>
                        All Pro Features
                    </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<i className="w-4 h-4 text-slate-500" data-lucide="check"></i>
                        Early access to Beta
                    </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<i className="w-4 h-4 text-slate-500" data-lucide="check"></i>
                        Priority Support
                    </li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/10 text-white hover:bg-white/5 transition-colors text-sm font-medium">Buy Lifetime</button>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-slate-950 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-5 h-5 bg-gradient-to-tr from-sky-400 to-emerald-300 rounded-full"></div>
<span className="text-white font-medium tracking-tight">Routina.ai</span>
</div>
<p className="text-slate-500 text-sm leading-relaxed">
                        Your personal assistant, friend, and trainer. Designed to help you live better and spend wiser.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Product</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-sky-400 transition-colors" href="#">Download</a></li>
<li><a className="hover:text-sky-400 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-sky-400 transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Support</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-sky-400 transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-sky-400 transition-colors" href="#">Community</a></li>
<li><a className="hover:text-sky-400 transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Legal</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-sky-400 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-sky-400 transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5">
<p className="text-xs text-slate-600">© 2026 Routina AI Inc. All rights reserved.</p>
<div className="flex gap-4">
</div></div></div></footer>
    </>
  );
}
