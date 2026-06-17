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
      

<header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-6">
<nav aria-label="Main menu" className="border-white/[0.08] flex shadow-black/80 bg-[#0A0A0A]/90 w-full max-w-4xl border rounded-full p-1.5 pl-3 shadow-2xl backdrop-blur-md items-center justify-between">
<a aria-label="Back to home" className="flex items-center gap-3 pr-4 group shrink-0" href="/">
<div className="flex shadow-lg shadow-blue-500/10 overflow-hidden group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-all duration-300 bg-blue-500/10 w-9 h-9 border-blue-500/20 border rounded-xl relative items-center justify-center">
<iconify-icon aria-hidden="true" className="text-blue-500 transition-transform duration-300 group-hover:scale-110" height="20" icon="solar:mailbox-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-white font-semibold tracking-tight text-sm">Outbound Squad</span>
</a>
<div className="flex shrink-0 border-white/10 border-l ml-2 pl-4 items-center">
<a className="text-sm hover:bg-blue-500 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center gap-1.5 whitespace-nowrap font-medium text-white bg-blue-600 rounded-full pt-2.5 pr-5 pb-2.5 pl-5" href="#demo">
                    Fix My Outreach
                </a>
</div>
</nav>
</header>
<main className="">

<section className="overflow-hidden min-h-[90vh] pt-44 pb-20 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none opacity-50 mix-blend-screen z-0"></div>
<div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none"></div>

<div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
<iconify-icon className="chat-bubble" icon="solar:chat-round-line-linear" style={{left: '15%', animationDelay: '0s'}} width="60"></iconify-icon>
<iconify-icon className="chat-bubble" icon="solar:chat-square-linear" style={{left: '80%', animationDelay: '2s'}} width="40"></iconify-icon>
<iconify-icon className="chat-bubble" icon="solar:chat-round-line-linear" style={{left: '30%', animationDelay: '5s'}} width="30"></iconify-icon>
<iconify-icon className="chat-bubble" icon="solar:chat-round-dots-linear" style={{left: '65%', animationDelay: '8s'}} width="50"></iconify-icon>
<iconify-icon className="chat-bubble" icon="solar:chat-square-linear" style={{left: '45%', animationDelay: '11s'}} width="45"></iconify-icon>
</div>
<div className="z-10 text-center max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<h1 className="md:text-6xl lg:text-7xl leading-[1.1] text-5xl font-semibold text-white tracking-tight mb-8">
                    Your Outreach Isn’t Working<br/>
<span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-zinc-500 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">Because It Feels Like Outreach.</span>
</h1>
<p className="leading-relaxed text-lg font-light text-zinc-400 max-w-2xl mr-auto mb-10 ml-auto">
                    Jason Bay helps sales teams start real conversations with prospects instead of sending messages that get ignored.
                </p>

<div className="max-w-4xl mx-auto mt-12 z-10 relative">

<div className="aspect-video bg-zinc-900 border border-white/10 rounded-2xl flex flex-col items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.1)] mb-8 overflow-hidden relative group">
<div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors"></div>
<iconify-icon className="text-blue-500/50 mb-3" icon="solar:play-circle-linear" width="48"></iconify-icon>
<span className="text-zinc-500 font-mono text-sm uppercase tracking-widest">VIDEO PLACEHOLDER</span>
</div>
<div className="text-center mb-8">
<span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-mono tracking-wide border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]">Watch: Why Prospects Ignore Your Messages</span>
</div>

<div className="grid md:grid-cols-2 gap-12 text-left bg-[#0A0A0A]/80 p-8 md:p-10 rounded-[2rem] border border-white/5 backdrop-blur-md shadow-2xl">
<div>
<p className="text-lg text-white font-medium mb-4 leading-relaxed">If your outreach isn’t getting replies, the issue isn’t volume.</p>
<p className="text-zinc-400 mb-6 font-medium">It’s how it feels. Most reps:</p>
<ul className="space-y-4 text-zinc-400 text-sm">
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center shrink-0 mt-0.5"><iconify-icon className="text-red-400" icon="solar:close-circle-linear"></iconify-icon></div>
<span className="leading-relaxed">sound like every other salesperson</span>
</li>
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center shrink-0 mt-0.5"><iconify-icon className="text-red-400" icon="solar:close-circle-linear"></iconify-icon></div>
<span className="leading-relaxed">rely on templates that don’t stand out</span>
</li>
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center shrink-0 mt-0.5"><iconify-icon className="text-red-400" icon="solar:close-circle-linear"></iconify-icon></div>
<span className="leading-relaxed">try to pitch too early</span>
</li>
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center shrink-0 mt-0.5"><iconify-icon className="text-red-400" icon="solar:close-circle-linear"></iconify-icon></div>
<span className="leading-relaxed">focus on personalization instead of relevance</span>
</li>
</ul>
</div>
<div className="flex flex-col h-full">
<p className="text-lg text-white font-medium mb-6 leading-relaxed">In this video, Jason breaks down:</p>
<ul className="space-y-4 text-zinc-400 text-sm mb-8">
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 mt-0.5"><iconify-icon className="text-blue-400" icon="solar:check-circle-linear"></iconify-icon></div>
<span className="leading-relaxed">why most outreach gets ignored</span>
</li>
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 mt-0.5"><iconify-icon className="text-blue-400" icon="solar:check-circle-linear"></iconify-icon></div>
<span className="leading-relaxed">how to make messages feel human</span>
</li>
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 mt-0.5"><iconify-icon className="text-blue-400" icon="solar:check-circle-linear"></iconify-icon></div>
<span className="leading-relaxed">what actually gets responses</span>
</li>
</ul>
<a className="mt-auto group relative inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-blue-600 px-8 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-500 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_rgba(59,130,246,0.3)]" href="#demo">
                                Fix My Outreach
                                <iconify-icon className="transition-transform duration-300 group-hover:translate-x-1" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-[#020202] relative z-20">
<div className="max-w-6xl mx-auto px-6 text-center">
<p className="text-xs font-mono text-zinc-500 uppercase tracking-wide mb-8">Teams improving outbound conversations</p>

<div className="h-16 bg-zinc-900/50 border border-white/5 rounded-xl flex items-center justify-center max-w-4xl mx-auto border-dashed">
<span className="text-zinc-600 font-mono text-xs uppercase tracking-widest flex items-center gap-2">
<iconify-icon icon="solar:gallery-linear"></iconify-icon> IMAGE PLACEHOLDER (CLIENT LOGOS)
                    </span>
</div>
</div>
</section>

<section className="py-32 bg-[#050505]" id="problem">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="md:text-5xl leading-tight text-4xl font-semibold text-white tracking-tight">
                        Why Your Outreach Gets Ignored
                    </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">

<div className="bg-zinc-900/40 border border-white/5 rounded-3xl p-8 hover:bg-zinc-900/80 hover:border-white/10 transition-colors">
<div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-zinc-400 mb-6 border border-white/10">
<iconify-icon icon="solar:copy-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-semibold mb-3 tracking-tight">Messages feel templated</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Prospects recognize patterns instantly. When your message looks like a mass blast, it's treated like one.</p>
</div>

<div className="bg-zinc-900/40 border border-white/5 rounded-3xl p-8 hover:bg-zinc-900/80 hover:border-white/10 transition-colors">
<div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-zinc-400 mb-6 border border-white/10">
<iconify-icon icon="solar:wad-of-money-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-semibold mb-3 tracking-tight">Too focused on selling</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Instead of starting conversations, reps rush to pitch their solution before establishing any context or need.</p>
</div>

<div className="bg-zinc-900/40 border border-white/5 rounded-3xl p-8 hover:bg-zinc-900/80 hover:border-white/10 transition-colors">
<div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-zinc-400 mb-6 border border-white/10">
<iconify-icon icon="solar:user-id-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-semibold mb-3 tracking-tight">Over-personalization</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Mentioning a prospect's college or recent tweet is a detail, but details don't equal business relevance.</p>
</div>

<div className="bg-zinc-900/40 border border-white/5 rounded-3xl p-8 hover:bg-zinc-900/80 hover:border-white/10 transition-colors">
<div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-zinc-400 mb-6 border border-white/10">
<iconify-icon icon="solar:ghost-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-semibold mb-3 tracking-tight">No differentiation</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Messages blend in with everything else in the inbox. Nothing stands out as uniquely valuable to their day.</p>
</div>
</div>
</div>
</section>

<section className="py-32 border-y border-white/5 bg-black relative z-20 overflow-hidden">
<div className="absolute inset-0 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none opacity-50 mix-blend-screen z-0 max-w-3xl mx-auto top-1/2 -translate-y-1/2"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<h2 className="md:text-5xl leading-tight text-4xl font-semibold text-white tracking-tight mb-8">
                    The Problem Isn’t Outreach.<br/>
<span className="text-blue-500">It’s How It Feels.</span>
</h2>
<div className="text-lg text-zinc-400 leading-relaxed space-y-6">
<p>More emails won’t fix this.</p>
<p>More personalization won’t fix this.</p>
<div className="pt-6 border-t border-white/10 mt-8">
<p className="text-white font-medium mb-4">Outreach works when:</p>
<ul className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
<li className="flex items-center gap-2"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> it feels natural</li>
<li className="flex items-center gap-2"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> it sounds human</li>
<li className="flex items-center gap-2"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> it focuses on the buyer</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] relative">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">Conversation-First Outreach</h2>
<p className="text-zinc-400 text-lg max-w-xl mx-auto">Top performers don’t pitch.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)] max-w-5xl mx-auto">
<div className="sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col justify-center text-center items-center group overflow-hidden">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 shadow-lg shadow-black/50 border border-blue-500/20">
<iconify-icon icon="solar:chat-round-call-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-semibold tracking-tight mb-3">Start conversations</h3>
<p className="text-zinc-400 text-sm leading-relaxed">The goal of the first touch isn't to book a meeting, it's to get a reply and open a dialogue.</p>
</div>
<div className="sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col justify-center text-center items-center group overflow-hidden">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 shadow-lg shadow-black/50 border border-blue-500/20">
<iconify-icon icon="solar:shield-minus-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-semibold tracking-tight mb-3">Remove pressure</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Lower the barrier to entry. Make it easy for them to say no, which ironically makes them more likely to engage.</p>
</div>
<div className="sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col justify-center text-center items-center group overflow-hidden">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 shadow-lg shadow-black/50 border border-blue-500/20">
<iconify-icon icon="solar:magnifer-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-semibold tracking-tight mb-3">Create curiosity</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Highlight a problem they didn't know they had, or a new way to solve an old problem.</p>
</div>
</div>
<div className="mt-16 text-center">
<div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-zinc-900/50 border border-white/5">
<span className="text-zinc-400 font-medium">This is what turns:</span>
<div className="flex items-center gap-3">
<span className="text-white font-semibold bg-white/5 px-3 py-1 rounded-lg border border-white/10">Outreach</span>
<iconify-icon className="text-blue-500" icon="solar:arrow-right-linear"></iconify-icon>
<span className="text-blue-400 font-semibold bg-blue-500/10 px-3 py-1 rounded-lg border border-blue-500/20">Replies</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-black relative">
<div className="max-w-4xl mx-auto px-6 text-center">

<div className="aspect-[21/9] bg-zinc-900/50 border border-white/5 rounded-3xl flex items-center justify-center mb-10 border-dashed relative overflow-hidden group">
<div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors"></div>
<div className="flex flex-col items-center gap-3">
<iconify-icon className="text-zinc-600" icon="solar:gallery-linear" width="32"></iconify-icon>
<span className="text-zinc-500 font-mono text-xs uppercase tracking-widest">IMAGE PLACEHOLDER</span>
<span className="text-zinc-600 text-sm">Sales teams improving messaging and responses</span>
</div>
</div>
<p className="text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
                    Sales teams use Jason Bay’s approach to improve how they write outreach and start conversations with prospects.
                </p>
</div>
</section>

<section className="py-32 bg-[#050505] border-y border-white/5" id="process">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-24">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
                        How Jason Improves Outreach
                    </h2>
</div>

<div className="relative pl-8 md:pl-16 pb-24 border-l border-white/10 last:border-0 group">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#050505] group-hover:border-blue-500 transition-colors">
<span className="font-mono text-sm font-semibold text-blue-400">01</span>
</div>
<div className="pt-1">
<h3 className="text-2xl text-white font-semibold mb-4 tracking-tight">Analyze current messaging</h3>
<p className="text-zinc-400 text-base leading-relaxed">
                            We start by tearing down what you're currently sending. We look at open rates, reply rates, and most importantly, the tone and structure of your sequences.
                        </p>
</div>
</div>

<div className="relative pl-8 md:pl-16 pb-24 border-l border-white/10 last:border-0 group">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#050505] group-hover:border-blue-500 transition-colors">
<span className="font-mono text-sm font-semibold text-blue-400">02</span>
</div>
<div className="pt-1">
<h3 className="text-2xl text-white font-semibold mb-4 tracking-tight">Remove sales language and patterns</h3>
<p className="text-zinc-400 text-base leading-relaxed">
                            We strip away the generic pitches, the "hope you're doing well" fluff, and the pressure-heavy CTAs that trigger defensive reactions from buyers.
                        </p>
</div>
</div>

<div className="relative pl-8 md:pl-16 pb-12 border-l border-white/10 last:border-0 group">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#050505] group-hover:border-blue-500 transition-colors">
<span className="font-mono text-sm font-semibold text-blue-400">03</span>
</div>
<div className="pt-1">
<h3 className="text-2xl text-white font-semibold mb-4 tracking-tight">Build conversation-driven outreach</h3>
<p className="text-zinc-400 text-base leading-relaxed">
                            We rewrite your messaging using frameworks designed to sound human, highlight relevance, and open a low-friction dialogue with your exact buyer.
                        </p>
</div>
</div>
<div className="mt-16 text-center md:text-left md:pl-16">
<a className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 transition-colors shadow-[0_0_20px_rgba(59,130,246,0.2)]" href="#demo">
                        Improve My Messaging
                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-black relative">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
<div className="bg-zinc-900/30 border border-white/5 rounded-2xl p-6 text-center hover:bg-zinc-900/60 transition-colors group">
<div className="w-10 h-10 mx-auto rounded-lg bg-white/5 flex items-center justify-center text-zinc-400 mb-4 group-hover:text-blue-400 transition-colors">
<iconify-icon icon="solar:book-linear" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-white block">Outbound Messaging Training</span>
</div>
<div className="bg-zinc-900/30 border border-white/5 rounded-2xl p-6 text-center hover:bg-zinc-900/60 transition-colors group">
<div className="w-10 h-10 mx-auto rounded-lg bg-white/5 flex items-center justify-center text-zinc-400 mb-4 group-hover:text-blue-400 transition-colors">
<iconify-icon icon="solar:sitemap-linear" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-white block">Prospecting Frameworks</span>
</div>
<div className="bg-zinc-900/30 border border-white/5 rounded-2xl p-6 text-center hover:bg-zinc-900/60 transition-colors group">
<div className="w-10 h-10 mx-auto rounded-lg bg-white/5 flex items-center justify-center text-zinc-400 mb-4 group-hover:text-blue-400 transition-colors">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-white block">Cold Email &amp; LinkedIn Strategy</span>
</div>
<div className="bg-zinc-900/30 border border-white/5 rounded-2xl p-6 text-center hover:bg-zinc-900/60 transition-colors group">
<div className="w-10 h-10 mx-auto rounded-lg bg-white/5 flex items-center justify-center text-zinc-400 mb-4 group-hover:text-blue-400 transition-colors">
<iconify-icon icon="solar:microphone-linear" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-white block">Sales Conversation Coaching</span>
</div>
<div className="bg-zinc-900/30 border border-white/5 rounded-2xl p-6 text-center hover:bg-zinc-900/60 transition-colors group">
<div className="w-10 h-10 mx-auto rounded-lg bg-white/5 flex items-center justify-center text-zinc-400 mb-4 group-hover:text-blue-400 transition-colors">
<iconify-icon icon="solar:monitor-linear" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-white block">Outbound Workshops</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] border-t border-white/5 relative" id="about">
<div className="max-w-5xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-12 items-center bg-zinc-900/20 rounded-[2rem] border border-white/5 p-8 md:p-12 overflow-hidden relative">
<div className="absolute right-0 top-0 w-1/2 h-full bg-blue-600/5 blur-[100px] pointer-events-none"></div>

<div className="aspect-square bg-zinc-900 border border-white/10 rounded-2xl flex items-center justify-center border-dashed relative z-10">
<div className="flex flex-col items-center gap-3">
<iconify-icon className="text-zinc-600" icon="solar:user-linear" width="40"></iconify-icon>
<span className="text-zinc-500 font-mono text-xs uppercase tracking-widest text-center px-4">IMAGE PLACEHOLDER<br/>JASON BAY</span>
</div>
</div>
<div className="relative z-10">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-6">Hi, I’m Jason Bay.</h2>
<div className="space-y-4 text-zinc-400 text-base leading-relaxed">
<p>I work with sales teams that are doing outreach but not getting replies.</p>
<p>The issue isn’t effort — it’s how messages come across.</p>
<p>My focus is helping reps create outreach that feels human and actually starts conversations.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black relative">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight">Frequently Asked Questions</h2>
</div>
<div className="space-y-4">

<div className="p-6 rounded-2xl bg-zinc-900/30 border border-white/5 hover:bg-zinc-900/50 transition-colors">
<h4 className="text-white font-medium mb-2">Who is this for?</h4>
<p className="text-zinc-400 text-sm leading-relaxed">SDRs, BDRs, founders, and outbound teams.</p>
</div>

<div className="p-6 rounded-2xl bg-zinc-900/30 border border-white/5 hover:bg-zinc-900/50 transition-colors">
<h4 className="text-white font-medium mb-2">Is this outreach training?</h4>
<p className="text-zinc-400 text-sm leading-relaxed">Yes, focused on messaging and conversations.</p>
</div>

<div className="p-6 rounded-2xl bg-zinc-900/30 border border-white/5 hover:bg-zinc-900/50 transition-colors">
<h4 className="text-white font-medium mb-2">Does this work for experienced reps?</h4>
<p className="text-zinc-400 text-sm leading-relaxed">Yes, especially those struggling with replies.</p>
</div>

<div className="p-6 rounded-2xl bg-zinc-900/30 border border-white/5 hover:bg-zinc-900/50 transition-colors">
<h4 className="text-white font-medium mb-2">What makes this different?</h4>
<p className="text-zinc-400 text-sm leading-relaxed">Focus on human conversations, not templates.</p>
</div>

<div className="p-6 rounded-2xl bg-zinc-900/30 border border-white/5 hover:bg-zinc-900/50 transition-colors">
<h4 className="text-white font-medium mb-2">How do we start?</h4>
<p className="text-zinc-400 text-sm leading-relaxed">Book a call below.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden bg-[#050505] border-t border-white/5" id="demo">
<div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>
<div className="max-w-5xl mx-auto rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#080808] relative z-10 shadow-2xl">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 p-8 md:p-12 items-center">

<div className="flex flex-col justify-center h-full pt-4 lg:pt-0">
<h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-[1.1]">
                            Start More Conversations
                        </h2>
<p className="text-zinc-400 text-lg mb-8 leading-relaxed max-w-sm">
                            Book a call to improve how your outreach connects with prospects.
                        </p>
<div className="mt-4">
<a className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 transition-colors shadow-[0_0_20px_rgba(59,130,246,0.2)]" href="#demo">
                                Book My Call
                                <iconify-icon icon="solar:calendar-linear" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="relative w-full h-full min-h-[400px] bg-zinc-900/50 border border-white/10 rounded-2xl overflow-hidden shadow-inner flex items-center justify-center border-dashed">
<div className="flex flex-col items-center gap-4 opacity-50">
<iconify-icon className="text-white" icon="solar:calendar-mark-linear" width="48"></iconify-icon>
<span className="text-white font-mono text-sm uppercase tracking-widest">CALENDLY PLACEHOLDER</span>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-black border-t border-white/5 pt-12 pb-8 text-sm">
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center gap-6">
<a aria-label="Back to home" className="flex items-center gap-3 text-white font-semibold tracking-tight text-lg group" href="/">
<div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shadow-lg relative overflow-hidden group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all duration-300">
<iconify-icon className="text-white group-hover:text-blue-500 transition-colors duration-300" icon="solar:mailbox-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
                Outbound Squad
            </a>
<div className="text-zinc-600 text-xs text-center">
                © 2024 Outbound Squad. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
