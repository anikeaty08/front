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



        lucide.createIcons({
            attrs: {
                strokeWidth: 1.5
            }
        });
    
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<img alt="ProGrid Logo" className="h-8 w-auto opacity-90 hover:opacity-100 transition-opacity" src="https://i.imgur.com/K1j0aFh.png"/>
<a className="hidden md:inline-flex items-center gap-2 text-sm font-medium bg-white/10 hover:bg-white/15 text-white px-4 py-2 rounded-full border border-white/5 transition-all" href="#apply">
                Apply for January
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
</a>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Race track texture" className="w-full h-full object-cover opacity-20 grayscale mix-blend-overlay" src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950/80 to-neutral-950"></div>
<div className="absolute inset-0 grid-bg opacity-30"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-950/10 text-cyan-400 text-sm font-mono tracking-wide mb-8">
<i className="w-4 h-4" data-lucide="activity"></i>
                QUALIFICATION: SPENDING £50k–£1M/YR ON RACING
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tight leading-[1.1] mb-8">
                You've Already Spent <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">Six Figures.</span>
</h1>
<p className="text-2xl md:text-3xl text-neutral-200 font-medium tracking-tight mb-6">
                Here's How the Next Generation Funds <br className="hidden md:block"/> Their Career Sustainably.
            </p>
<p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                The only system that converts YouTube content into sponsor revenue—without becoming an influencer, compromising your driving, or spending years grinding for views.
            </p>
<div className="bg-neutral-900/50 border border-white/10 rounded-xl p-6 mb-10 max-w-3xl mx-auto text-left">
<p className="text-neutral-300 text-lg">
                    Most drivers burning through six or seven figures learn this too late: <span className="text-white font-semibold">hospitality packages don't scale. Cold emails get 2% response rates. And "follow my journey" content attracts 14-year-olds, not buyers.</span>
</p>
<div className="mt-4 pt-4 border-t border-white/5 text-neutral-400">
                    The New Gen driver has a different playbook. Off the track, you're running a B2B lead generation machine. On track, you're a weapon—fully funded, fully focused.
                </div>
</div>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="w-full md:w-auto bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-lg px-8 py-4 rounded-lg transition-all transform hover:-translate-y-1 flex flex-col items-center shadow-[0_0_20px_rgba(6,182,212,0.3)]" href="#apply">
<span>Apply for January Cohort</span>
<span className="text-xs font-mono opacity-80 mt-1">Four-month intensive • 8 spots remaining</span>
</a>
<a className="group w-full md:w-auto text-neutral-400 hover:text-white px-8 py-4 transition-colors flex items-center justify-center gap-2" href="#how-it-works">
                    See How It Works 
                    <i className="w-4 h-4 group-hover:translate-y-1 transition-transform" data-lucide="arrow-down"></i>
</a>
</div>
</div>
</header>

<div className="border-y border-white/5 bg-neutral-900/30 overflow-hidden py-4">
<div className="max-w-6xl mx-auto px-6 flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center gap-6 text-sm text-neutral-400 font-mono">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-cyan-500" data-lucide="check-circle"></i>
                "Finally, a sponsorship strategy that doesn't involve begging" — Jamie T., F4
            </div>
<div className="hidden md:flex items-center gap-2">
<i className="w-4 h-4 text-cyan-500" data-lucide="check-circle"></i>
                "Signed my first real B2B sponsor in 6 weeks"
            </div>
<div className="hidden md:flex items-center gap-2">
<i className="w-4 h-4 text-cyan-500" data-lucide="check-circle"></i>
                "I film 2 days/month. The system handles the rest."
            </div>
</div>
</div>

<section className="py-24 relative">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-16 text-center">
                If You're Reading This, <br/> You've Already Hit The Wall.
            </h2>
<div className="grid md:grid-cols-3 gap-6 mb-16">

<div className="bg-neutral-900 border border-white/10 rounded-xl p-8 hover:border-red-500/30 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-6 group-hover:bg-red-500/10 transition-colors">
<i className="w-5 h-5 text-neutral-400 group-hover:text-red-400" data-lucide="mail"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Tried Cold Outreach</h3>
<p className="font-mono text-sm text-neutral-500 mb-4">"Please sponsor my racing because I'm fast"</p>
<ul className="space-y-3 text-neutral-400 text-base">
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-red-500 mt-1 shrink-0" data-lucide="x"></i>
                            Response rate: 2-5%
                        </li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-red-500 mt-1 shrink-0" data-lucide="x"></i>
                            Result: Emotional donations
                        </li>
</ul>
</div>

<div className="bg-neutral-900 border border-white/10 rounded-xl p-8 hover:border-red-500/30 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-6 group-hover:bg-red-500/10 transition-colors">
<i className="w-5 h-5 text-neutral-400 group-hover:text-red-400" data-lucide="briefcase"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Hired an Agency</h3>
<p className="font-mono text-sm text-neutral-500 mb-4">"We'll handle your content"</p>
<ul className="space-y-3 text-neutral-400 text-base">
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-red-500 mt-1 shrink-0" data-lucide="x"></i>
                            Cost: £2-5k/month
                        </li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-red-500 mt-1 shrink-0" data-lucide="x"></i>
                            Result: Generic race recaps
                        </li>
</ul>
</div>

<div className="bg-neutral-900 border border-white/10 rounded-xl p-8 hover:border-red-500/30 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-6 group-hover:bg-red-500/10 transition-colors">
<i className="w-5 h-5 text-neutral-400 group-hover:text-red-400" data-lucide="instagram"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Built Personal Brand</h3>
<p className="font-mono text-sm text-neutral-500 mb-4">"Follow my journey to F1"</p>
<ul className="space-y-3 text-neutral-400 text-base">
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-red-500 mt-1 shrink-0" data-lucide="x"></i>
                            Audience: Other drivers
                        </li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-red-500 mt-1 shrink-0" data-lucide="x"></i>
                            Result: Influence without income
                        </li>
</ul>
</div>
</div>
<div className="text-center max-w-2xl mx-auto">
<p className="text-xl text-white">
                    You've tried the broken system. You've watched less talented drivers with better funding get the seats you deserved.
                    <br/><br/>
                    Here's what nobody tells you: <span className="text-cyan-400 font-semibold">The motorsport ladder isn't broken. The funding model is.</span>
</p>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/30 border-y border-white/5">
<div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">
                    The Three Forms of Currency
                    <span className="block text-neutral-500">(And Why You're Playing the Wrong Game)</span>
</h2>
<div className="space-y-8 mt-10">
<div className="flex gap-6">
<div className="text-4xl font-mono text-white/10 font-bold">01</div>
<div>
<h3 className="text-xl font-semibold text-white mb-2">Money (First)</h3>
<p className="text-neutral-400">This opens every door. Without it, talent means nothing.</p>
</div>
</div>
<div className="flex gap-6">
<div className="text-4xl font-mono text-white/10 font-bold">02</div>
<div>
<h3 className="text-xl font-semibold text-white mb-2">Political Power (Second)</h3>
<p className="text-neutral-400">You can buy this with money OR attention. Most drivers can't afford the first option.</p>
</div>
</div>
<div className="flex gap-6">
<div className="text-4xl font-mono text-white/10 font-bold">03</div>
<div>
<h3 className="text-xl font-semibold text-white mb-2">Talent (Third)</h3>
<p className="text-neutral-400">Thanks to sim racing and data, raw speed is now the <span className="text-white">baseline</span>, not the differentiator.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 blur-2xl opacity-30"></div>
<div className="relative bg-black border border-white/10 p-8 md:p-12 rounded-2xl">
<blockquote className="text-2xl md:text-3xl font-medium text-white tracking-tight leading-snug mb-8">
                        "Every driver at professional level is fast. The question is: who can afford to keep racing?"
                    </blockquote>
<div className="space-y-4 text-lg">
<p className="text-neutral-400">
                            Personal brand content requires you to be <span className="text-red-400 font-semibold">80% influencer, 20% driver</span>.
                        </p>
<p className="text-cyan-400 font-medium">
                            B2B content lets you stay 100% driver on track while running a legitimate business off it.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="how-it-works">
<div className="max-w-4xl mx-auto px-6 text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">
                Introducing <span className="text-cyan-400">ProGrid</span>
</h2>
<p className="text-2xl text-neutral-300 mb-8">
                The B2B Content System for Professional Drivers
            </p>
<p className="text-lg text-neutral-400 leading-relaxed max-w-2xl mx-auto">
                ProGrid isn't a course. It's not a social media agency. It's a <strong>four-month intensive</strong> where you build a YouTube channel that generates qualified leads for your sponsor's business.
            </p>
</div>
<div className="max-w-5xl mx-auto px-6">

<div className="overflow-hidden rounded-xl border border-white/10 bg-neutral-900/50">
<div className="grid grid-cols-2 border-b border-white/10 bg-neutral-900">
<div className="p-6 text-center text-sm font-mono text-neutral-500 uppercase tracking-widest">Traditional Sponsorship</div>
<div className="p-6 text-center text-sm font-mono text-cyan-400 uppercase tracking-widest bg-cyan-950/10">ProGrid System</div>
</div>

<div className="grid grid-cols-2 border-b border-white/5 hover:bg-white/5 transition-colors">
<div className="p-6 text-neutral-400 border-r border-white/5">"Please fund my racing"</div>
<div className="p-6 text-white font-medium">"Here's how I'll double your leads"</div>
</div>

<div className="grid grid-cols-2 border-b border-white/5 hover:bg-white/5 transition-colors">
<div className="p-6 text-neutral-400 border-r border-white/5">Hospitality packages (£100k for plastic chairs)</div>
<div className="p-6 text-white font-medium">B2B content engine (no upfront sponsor cost)</div>
</div>

<div className="grid grid-cols-2 border-b border-white/5 hover:bg-white/5 transition-colors">
<div className="p-6 text-neutral-400 border-r border-white/5">Emotional donations</div>
<div className="p-6 text-white font-medium">Performance marketing</div>
</div>

<div className="grid grid-cols-2 border-b border-white/5 hover:bg-white/5 transition-colors">
<div className="p-6 text-neutral-400 border-r border-white/5">Sponsor feels bad for you</div>
<div className="p-6 text-white font-medium">Sponsor sees measurable ROI</div>
</div>

<div className="grid grid-cols-2 hover:bg-white/5 transition-colors">
<div className="p-6 text-neutral-400 border-r border-white/5">You beg for money</div>
<div className="p-6 text-white font-medium">You bring value</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-16 text-center">
                From Broke to Bankable in 90 Days
            </h2>
<div className="relative space-y-12 pl-8 md:pl-0 before:content-[''] before:absolute before:left-8 md:before:left-1/2 before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-cyan-500 before:via-neutral-700 before:to-neutral-900 before:-ml-[0.5px]">

<div className="relative md:w-1/2 md:pr-12 md:ml-auto md:text-left pl-8 md:pl-12">

<div className="absolute left-0 md:-left-[5px] top-2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)] -translate-x-[5px] md:translate-x-0"></div>
<div className="bg-neutral-950 border border-white/10 p-6 rounded-xl">
<div className="text-xs font-mono text-cyan-400 mb-2">WEEK 1-2</div>
<h3 className="text-xl font-semibold text-white mb-3">Identify &amp; Sign Your Sponsor</h3>
<p className="text-neutral-400 mb-4">Not "any sponsor." The right one. You'll learn how to pitch B2B lead generation so sponsors actually respond.</p>
<div className="text-sm font-medium text-white border-t border-white/5 pt-3">Outcome: Signed agreement.</div>
</div>
</div>

<div className="relative md:w-1/2 md:pr-12 md:mr-auto md:text-right pl-8 md:pl-0">

<div className="absolute left-0 md:left-auto md:-right-[6px] top-2 w-3 h-3 rounded-full bg-neutral-700 -translate-x-[5px] md:translate-x-0"></div>
<div className="bg-neutral-950 border border-white/10 p-6 rounded-xl">
<div className="text-xs font-mono text-neutral-500 mb-2">WEEK 3-6</div>
<h3 className="text-xl font-semibold text-white mb-3">Build ICP &amp; Content Strategy</h3>
<p className="text-neutral-400 mb-4">This isn't "make videos." This is B2B marketing. Script your first 3-6 videos using our AI agent system.</p>
<div className="text-sm font-medium text-white border-t border-white/5 pt-3">Outcome: Roadmap targeting buyers.</div>
</div>
</div>

<div className="relative md:w-1/2 md:pr-12 md:ml-auto md:text-left pl-8 md:pl-12">

<div className="absolute left-0 md:-left-[5px] top-2 w-3 h-3 rounded-full bg-neutral-700 -translate-x-[5px] md:translate-x-0"></div>
<div className="bg-neutral-950 border border-white/10 p-6 rounded-xl">
<div className="text-xs font-mono text-neutral-500 mb-2">WEEK 7-10</div>
<h3 className="text-xl font-semibold text-white mb-3">Film &amp; Produce</h3>
<p className="text-neutral-400 mb-4">You're the director. Film once/month. Editor handles post. You use subject matter experts on camera.</p>
<div className="text-sm font-medium text-white border-t border-white/5 pt-3">Outcome: Lead capture live.</div>
</div>
</div>

<div className="relative md:w-1/2 md:pr-12 md:mr-auto md:text-right pl-8 md:pl-0">

<div className="absolute left-0 md:left-auto md:-right-[6px] top-2 w-3 h-3 rounded-full bg-neutral-700 -translate-x-[5px] md:translate-x-0"></div>
<div className="bg-neutral-950 border border-white/10 p-6 rounded-xl">
<div className="text-xs font-mono text-neutral-500 mb-2">WEEK 11-16</div>
<h3 className="text-xl font-semibold text-white mb-3">Optimize &amp; Scale</h3>
<p className="text-neutral-400 mb-4">Analyze what's converting. Refine thumbnails. Build your contact list of motivated buyers to hand to sponsors.</p>
<div className="text-sm font-medium text-white border-t border-white/5 pt-3">Outcome: Predictable lead flow.</div>
</div>
</div>
</div>

<div className="mt-16 bg-gradient-to-r from-neutral-800 to-neutral-900 border border-white/10 rounded-xl p-8 max-w-3xl mx-auto text-center">
<h3 className="text-xl font-semibold text-white mb-4">Post-Program Reality</h3>
<div className="grid md:grid-cols-3 gap-6 text-left md:text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
<div className="pt-4 md:pt-0">
<div className="text-neutral-500 text-sm mb-1">Time Investment</div>
<div className="text-white font-medium">6-8 days/month</div>
</div>
<div className="pt-4 md:pt-0 md:pl-6">
<div className="text-neutral-500 text-sm mb-1">Output</div>
<div className="text-white font-medium">3-4 High-Converting Videos</div>
</div>
<div className="pt-4 md:pt-0 md:pl-6">
<div className="text-neutral-500 text-sm mb-1">Result</div>
<div className="text-cyan-400 font-medium">Fully Funded Racing</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

<div>
<h2 className="text-3xl font-semibold text-white mb-8">This Works If You Are:</h2>
<ul className="space-y-4">
<li className="flex gap-3 text-neutral-300">
<i className="w-6 h-6 text-green-500 shrink-0" data-lucide="check"></i>
<span>Spending £50k–£1M/year on racing (not a billionaire, but not a rental karter)</span>
</li>
<li className="flex gap-3 text-neutral-300">
<i className="w-6 h-6 text-green-500 shrink-0" data-lucide="check"></i>
<span>In professional series: F4, F3, GT, endurance, or higher</span>
</li>
<li className="flex gap-3 text-neutral-300">
<i className="w-6 h-6 text-green-500 shrink-0" data-lucide="check"></i>
<span>Willing to invest 6-8 days/month to build the system</span>
</li>
<li className="flex gap-3 text-neutral-300">
<i className="w-6 h-6 text-green-500 shrink-0" data-lucide="check"></i>
<span>Coachable and ready to learn B2B marketing</span>
</li>
</ul>
</div>

<div className="bg-red-950/10 border border-red-900/20 rounded-xl p-8">
<h2 className="text-3xl font-semibold text-red-200 mb-8">This DOESN'T work if:</h2>
<ul className="space-y-4">
<li className="flex gap-3 text-red-200/80">
<i className="w-6 h-6 text-red-500 shrink-0" data-lucide="x"></i>
<span>You're expecting instant results (this is a 90-day build)</span>
</li>
<li className="flex gap-3 text-red-200/80">
<i className="w-6 h-6 text-red-500 shrink-0" data-lucide="x"></i>
<span>You just want to "be yourself" (this is strategic)</span>
</li>
<li className="flex gap-3 text-red-200/80">
<i className="w-6 h-6 text-red-500 shrink-0" data-lucide="x"></i>
<span>You have unlimited family money and don't need this</span>
</li>
</ul>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5">
<div className="max-w-3xl mx-auto px-6 space-y-12">
<div>
<h3 className="text-xl font-semibold text-white flex items-center gap-3 mb-3">
<i className="text-neutral-500 w-5 h-5" data-lucide="clock"></i>
                    "I don't have time to be a content creator."
                </h3>
<p className="text-neutral-400 pl-8">You're not becoming one. You're the <strong className="text-white">director and producer</strong>. Total time is 6-8 days/month. Less than a single test day. And unlike testing, this pays you back.</p>
</div>
<div>
<h3 className="text-xl font-semibold text-white flex items-center gap-3 mb-3">
<i className="text-neutral-500 w-5 h-5" data-lucide="video"></i>
                    "I'm not good on camera."
                </h3>
<p className="text-neutral-400 pl-8">You don't have to be. We teach you how to install a subject matter expert (your sponsor's CMO or an expert) to deliver the content. You write the scripts, they read the teleprompter.</p>
</div>
<div>
<h3 className="text-xl font-semibold text-white flex items-center gap-3 mb-3">
<i className="text-neutral-500 w-5 h-5" data-lucide="building"></i>
                    "Won't sponsors just hire an agency instead?"
                </h3>
<p className="text-neutral-400 pl-8">Agencies are expensive (£5-10k/month) and generic. You offer production quality + insider access + subject matter expertise. Sponsors don't want to pay agencies. They want ROI.</p>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900">
<div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-start">
<div className="flex-1">
<div className="inline-block px-3 py-1 mb-6 text-xs font-mono text-cyan-400 bg-cyan-950/30 border border-cyan-500/20 rounded">FOUNDER STORY</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">
                    I Was Two Years Away From F2. <br/> Then the Money Ran Out.
                </h2>
<div className="space-y-6 text-lg text-neutral-400">
<p>I'm Cameron. F3 and F4 champion. I spent years climbing the ladder—fast enough to go pro, not rich enough to afford it.</p>
<p>So I did what every broke driver does: I tried everything. Cold emails. Hospitality. Personal brand content. I had the attention, but attention doesn't pay your entry fee.</p>
<div className="pl-4 border-l-2 border-cyan-500 text-white italic">
                        "I realized I was making content for the wrong people. Racing fans don't have budgets."
                    </div>
<p>So I pivoted: B2B lead generation. I used content to attract my sponsor's customers. I handed them qualified leads. They handed me multi-year deals.</p>
<p>Now I'm building ProGrid because no driver should have to figure this out the hard way.</p>
</div>
</div>

<div className="w-full md:w-1/3 aspect-[3/4] bg-neutral-800 rounded-xl border border-white/5 relative overflow-hidden group">
<img alt="Cameron Racing" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
<div className="text-white font-medium">Cameron</div>
<div className="text-sm text-neutral-400">ProGrid Founder</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-16 text-center">The Complete ProGrid System</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="bg-neutral-900/50 p-6 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-colors">
<i className="w-8 h-8 text-cyan-400 mb-4" data-lucide="users"></i>
<h3 className="text-xl font-semibold text-white mb-2">Four-Month Intensive</h3>
<p className="text-neutral-400 text-base">Weekly coaching calls, direct access to the team, and milestone tracking.</p>
</div>
<div className="bg-neutral-900/50 p-6 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-colors">
<i className="w-8 h-8 text-cyan-400 mb-4" data-lucide="book-open"></i>
<h3 className="text-xl font-semibold text-white mb-2">The ProGrid Course</h3>
<p className="text-neutral-400 text-base">Self-paced B2B content strategy framework, ICP development, and production workflows.</p>
</div>
<div className="bg-neutral-900/50 p-6 rounded-xl border border-cyan-500/20 shadow-[0_0_20px_rgba(6,182,212,0.1)]">
<div className="flex items-center gap-2 mb-4">
<i className="w-8 h-8 text-cyan-400" data-lucide="cpu"></i>
<span className="text-xs bg-cyan-900 text-cyan-200 px-2 py-0.5 rounded">SECRET WEAPON</span>
</div>
<h3 className="text-xl font-semibold text-white mb-2">AI Agent System</h3>
<p className="text-neutral-400 text-base">Script-writing agent trained on B2B frameworks. Saves 10-20 hours per script.</p>
</div>
<div className="bg-neutral-900/50 p-6 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-colors">
<i className="w-8 h-8 text-cyan-400 mb-4" data-lucide="layout"></i>
<h3 className="text-xl font-semibold text-white mb-2">Templates &amp; Frameworks</h3>
<p className="text-neutral-400 text-base">Sponsor pitch decks, ICP research templates, video briefs, and CRM setups.</p>
</div>
<div className="bg-neutral-900/50 p-6 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-colors">
<i className="w-8 h-8 text-cyan-400 mb-4" data-lucide="camera"></i>
<h3 className="text-xl font-semibold text-white mb-2">Production Playbook</h3>
<p className="text-neutral-400 text-base">How to batch-film 3 videos in one day. Equipment guides (minimalist). Hiring editors.</p>
</div>
<div className="bg-neutral-900/50 p-6 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-colors">
<i className="w-8 h-8 text-cyan-400 mb-4" data-lucide="message-square"></i>
<h3 className="text-xl font-semibold text-white mb-2">Community Access</h3>
<p className="text-neutral-400 text-base">Private network of drivers. Monthly workshops and peer accountability.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900 border-y border-white/5">
<div className="max-w-4xl mx-auto px-6">
<div className="bg-black border border-white/10 rounded-2xl p-8 md:p-12 mb-16 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<i className="w-48 h-48 text-white" data-lucide="trending-up"></i>
</div>
<h2 className="text-3xl font-semibold text-white mb-2">The Investment: £10,000</h2>
<p className="text-neutral-500 font-mono mb-8">(Less Than One Weekend of Testing)</p>
<div className="space-y-6 mb-8">
<div className="flex items-center gap-4 text-white">
<i className="text-cyan-500 w-6 h-6" data-lucide="check-circle"></i>
<span>Complete ProGrid System + 16 weeks coaching</span>
</div>
<div className="flex items-center gap-4 text-white">
<i className="text-cyan-500 w-6 h-6" data-lucide="check-circle"></i>
<span>AI Agent Access</span>
</div>
<div className="flex items-center gap-4 text-white">
<i className="text-cyan-500 w-6 h-6" data-lucide="check-circle"></i>
<span>A sustainable funding engine. Not a one-time payment.</span>
</div>
</div>
</div>
<div className="text-center space-y-8">
<h2 className="text-3xl font-semibold text-white">Let's Talk About What You've Already Spent.</h2>
<p className="text-xl text-neutral-400">
                    If you're reading this, you've likely spent <span className="text-white">Six to Seven Figures</span> on racing.
                </p>
<div className="bg-neutral-800/50 p-6 rounded-xl inline-block text-left mx-auto">
<div className="text-lg text-neutral-300 font-mono mb-2">ROI CALCULATION:</div>
<div className="space-y-2">
<div className="flex justify-between gap-12 text-neutral-400"><span>ProGrid Cost:</span> <span className="text-white">£10k</span></div>
<div className="flex justify-between gap-12 text-neutral-400"><span>One Season F4:</span> <span className="text-white">~£200k</span></div>
<div className="flex justify-between gap-12 text-neutral-400"><span>One Season F3:</span> <span className="text-white">~£750k</span></div>
</div>
<div className="mt-4 pt-4 border-t border-white/10 text-cyan-400 font-medium text-center">
                        Secure one £50k sponsor = 500% ROI in 10 weeks.
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="apply">
<div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-cyan-950/20 to-neutral-950"></div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-sm font-medium">
<span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                January 2026 Cohort: 8 Spots Remaining
            </div>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6">
                Don't Let Money Be The Reason <br/> You Don't Make It.
            </h2>
<p className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto">
                ProGrid is capped at 12 drivers per cohort because Cameron personally reviews every script. Applications close January 28th.
            </p>
<button className="bg-cyan-500 hover:bg-cyan-400 text-black text-xl font-bold px-12 py-5 rounded-lg shadow-[0_0_30px_rgba(6,182,212,0.4)] transform hover:scale-105 transition-all mb-12">
                Apply Now - January Cohort
            </button>

<div className="max-w-2xl mx-auto text-left bg-neutral-900 border border-white/10 rounded-xl p-8">
<h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
<i className="text-green-500 w-5 h-5" data-lucide="shield-check"></i>
                    30-Day Proof-of-Concept Guarantee
                </h3>
<p className="text-neutral-400 text-sm leading-relaxed">
                    If you complete the first 30 days (Weeks 1-4) and haven't identified a sponsor, pitched an agreement, and developed your strategy, we'll refund 50% of your investment. We split the risk because we invest our time coaching you. If you do the work, it works.
                </p>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-neutral-900/30">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-white mb-12 text-center">Frequently Asked Questions</h2>
<div className="space-y-8">
<div className="border-b border-white/5 pb-6">
<h4 className="text-lg font-medium text-white mb-2">Q: Do I need to be on camera?</h4>
<p className="text-neutral-400">A: No. You can use a subject matter expert, your sponsor's team, or even an actor. You're the director.</p>
</div>
<div className="border-b border-white/5 pb-6">
<h4 className="text-lg font-medium text-white mb-2">Q: What if I don't have a sponsor yet?</h4>
<p className="text-neutral-400">A: We teach you how to find and pitch them in Weeks 1-2. Most drivers sign within the first month.</p>
</div>
<div className="border-b border-white/5 pb-6">
<h4 className="text-lg font-medium text-white mb-2">Q: Is this just a course I buy and watch?</h4>
<p className="text-neutral-400">A: No. This is a four-month intensive with coaching, accountability, and hands-on support.</p>
</div>
<div className="pb-6">
<h4 className="text-lg font-medium text-white mb-2">Q: Can I do this if I'm in GT/endurance/karting?</h4>
<p className="text-neutral-400">A: Yes. ProGrid works for any professional series where you're spending £50k+/year.</p>
</div>
</div>
</div>
</section>

<footer className="bg-black border-t border-white/10 py-12">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 opacity-80">
<img alt="ProGrid Logo" className="h-6 w-auto grayscale" src="https://i.imgur.com/K1j0aFh.png"/>
</div>
<div className="text-neutral-500 text-sm text-center md:text-right">
<p>© 2024 ProGrid™. Built by drivers, for drivers.</p>
<div className="mt-2 space-x-4">
<a className="hover:text-white transition-colors" href="#">cameron@progrid.co</a>
<a className="hover:text-white transition-colors" href="#">@progrid_racing</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
