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



        // Spotlight effect for cards
        const cards = document.querySelectorAll('.spotlight-card');
        cards.forEach(card => {
            card.onmousemove = e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            };
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
      

<header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-6">
<nav aria-label="Main Navigation" className="border-white/[0.08] flex shadow-black/80 bg-[#0A0A0A]/90 w-full max-w-4xl border rounded-full p-1.5 pl-3 shadow-2xl backdrop-blur-md items-center justify-between">
<a className="flex items-center gap-3 pr-4 group shrink-0" href="/">
<div className="flex shadow-red-600/10 group-hover:bg-red-600/20 group-hover:border-red-600/30 transition-all duration-300 bg-red-600/10 w-9 h-9 border-red-600/20 border rounded-xl relative shadow-lg items-center justify-center">
<iconify-icon className="text-red-500" icon="solar:bolt-linear" width="20"></iconify-icon>
</div>
<span className="text-white font-semibold tracking-tight text-base">Blair Singer</span>
</a>
<div className="flex shrink-0 border-white/10 border-l ml-2 pl-4 items-center">
<a className="text-sm hover:bg-red-700 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center gap-1.5 whitespace-nowrap font-semibold text-white bg-red-600 rounded-full pt-2.5 pr-5 pb-2.5 pl-5" href="#booking">
                    Book a Call
                </a>
</div>
</nav>
</header>
<main className="">

<section className="overflow-hidden min-h-[90vh] pt-44 pb-20 relative flex flex-col items-center justify-center">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-red-600/15 blur-[120px] rounded-full pointer-events-none mix-blend-screen z-0"></div>
<div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none"></div>
<div className="z-10 text-center max-w-5xl mx-auto px-6 relative w-full">
<div className="inline-flex gap-2 text-xs uppercase hover:border-red-500/40 transition-colors cursor-default font-semibold text-red-400 tracking-wide bg-red-600/5 border-red-600/20 border rounded-full mb-8 py-1.5 px-4 shadow-[0_0_20px_rgba(220,38,38,0.1)] backdrop-blur-sm items-center">
<span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-signal"></span>
                    Sales Leadership &amp; Team Performance
                </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tight mb-8 leading-[1.05]">
                    Build a High-Performance <br className="hidden md:block"/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">Sales Team.</span>
</h1>
<p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                    Blair Singer helps entrepreneurs and sales leaders develop powerful teams, strong leadership, and unstoppable sales performance.
                </p>

<div className="w-full max-w-4xl mx-auto aspect-video bg-[#050505] border border-white/10 rounded-2xl flex flex-col items-center justify-center relative group overflow-hidden shadow-2xl mb-12">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-red-900/10 pointer-events-none"></div>
<div className="w-16 h-16 rounded-full bg-red-600/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-red-600 transition-all duration-300 border border-red-500/30">
<iconify-icon className="text-red-500 group-hover:text-white transition-colors ml-1" icon="solar:play-bold" width="32"></iconify-icon>
</div>
<span className="text-zinc-600 font-mono text-xs tracking-widest uppercase mb-2">VIDEO PLACEHOLDER</span>
<p className="text-zinc-300 text-sm font-medium">Watch Blair Explain Sales Leadership and Team Performance</p>
</div>
<div className="flex flex-col items-center justify-center">
<a className="group relative inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-red-600 px-8 text-base font-semibold text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_rgba(220,38,38,0.3)] hover:bg-red-500" href="#booking">
                        Book a Strategy Call
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="2" width="20"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="z-20 bg-[#020202] border-y border-white/5 py-12 relative">
<div className="max-w-5xl mx-auto px-6 text-center">
<p className="text-xs text-zinc-500 mb-8 font-mono uppercase tracking-widest">Organizations and entrepreneurs influenced by Blair Singer’s work</p>

<div className="w-full h-24 bg-zinc-900/50 border border-white/5 rounded-xl flex items-center justify-center border-dashed">
<div className="flex flex-col items-center gap-2 text-zinc-600">
<iconify-icon icon="solar:gallery-linear" width="24"></iconify-icon>
<span className="font-mono text-xs tracking-widest uppercase">IMAGE PLACEHOLDER</span>
</div>
</div>
</div>
</section>

<section className="bg-black pt-24 pb-24 relative" id="challenges">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-2xl mb-16">
<div className="text-red-500 font-mono text-xs uppercase tracking-wider mb-2">The Problem</div>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
                        Why Many Sales Teams <span className="text-zinc-500">Struggle to Perform</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="sc-card spotlight-card p-8 rounded-2xl flex flex-col group">
<div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-600/20 flex items-center justify-center text-red-500 mb-6">
<iconify-icon icon="solar:user-cross-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-semibold tracking-tight mb-3">Weak Sales Leadership</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Without strong leadership, teams lack direction. A lack of accountability and clear expectations inevitably leads to missed targets and high turnover.</p>
</div>
<div className="sc-card spotlight-card p-8 rounded-2xl flex flex-col group">
<div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-600/20 flex items-center justify-center text-red-500 mb-6">
<iconify-icon icon="solar:chat-round-unread-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-semibold tracking-tight mb-3">Low Confidence in Conversations</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Salespeople hesitate when communicating value. When teams struggle with objections or closing, revenue is consistently left on the table.</p>
</div>
<div className="sc-card spotlight-card p-8 rounded-2xl flex flex-col group">
<div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-600/20 flex items-center justify-center text-red-500 mb-6">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-semibold tracking-tight mb-3">Team Performance Issues</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Poor culture and communication limit growth. When individuals operate in silos rather than as a cohesive unit, overall performance suffers dramatically.</p>
</div>
<div className="sc-card spotlight-card p-8 rounded-2xl flex flex-col group">
<div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-600/20 flex items-center justify-center text-red-500 mb-6">
<iconify-icon icon="solar:brain-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-semibold tracking-tight mb-3">Mindset Barriers</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Fear and limiting beliefs reduce sales performance. Technical skills matter little if the internal dialogue is preventing execution when it counts.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] border-t border-white/5 relative" id="approach">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 max-w-3xl mx-auto">
<div className="text-red-500 font-mono text-xs uppercase tracking-wider mb-2">The Solution</div>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
                        Why Leaders Learn From Blair Singer
                    </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="group p-6 rounded-2xl border border-white/5 bg-[#0A0A0A] hover:border-red-600/30 transition-all flex flex-col">
<iconify-icon className="text-red-500 mb-4" icon="solar:global-linear" width="28"></iconify-icon>
<h3 className="text-white font-semibold text-lg mb-2">Global Sales Leadership Expert</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Decades of experience developing entrepreneurs and teams to achieve peak performance across borders and industries.</p>
</div>
<div className="group p-6 rounded-2xl border border-white/5 bg-[#0A0A0A] hover:border-red-600/30 transition-all flex flex-col">
<iconify-icon className="text-red-500 mb-4" icon="solar:book-bookmark-linear" width="28"></iconify-icon>
<h3 className="text-white font-semibold text-lg mb-2">Author and Advisor</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Internationally recognized for his work as a Rich Dad Advisor and a leading voice in global sales education.</p>
</div>
<div className="group p-6 rounded-2xl border border-white/5 bg-[#0A0A0A] hover:border-red-600/30 transition-all flex flex-col">
<iconify-icon className="text-red-500 mb-4" icon="solar:cup-star-linear" width="28"></iconify-icon>
<h3 className="text-white font-semibold text-lg mb-2">High-Performance Team Focus</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Specialized training programs designed specifically to build strong, resilient, and highly profitable sales cultures.</p>
</div>
<div className="group p-6 rounded-2xl border border-white/5 bg-[#0A0A0A] hover:border-red-600/30 transition-all flex flex-col">
<iconify-icon className="text-red-500 mb-4" icon="solar:target-linear" width="28"></iconify-icon>
<h3 className="text-white font-semibold text-lg mb-2">Mindset and Skill Development</h3>
<p className="text-zinc-400 text-sm leading-relaxed">A unique approach that perfectly combines deep personal development with tactical, actionable sales mastery.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black border-t border-white/5 relative">
<div className="max-w-5xl mx-auto px-6">
<div className="bg-zinc-900/40 border border-white/10 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent pointer-events-none"></div>

<div className="w-full max-w-2xl mx-auto h-48 bg-[#050505] border border-white/10 rounded-2xl flex flex-col items-center justify-center border-dashed mb-8 relative z-10">
<iconify-icon className="text-zinc-600 mb-2" icon="solar:gallery-linear" width="32"></iconify-icon>
<span className="font-mono text-xs tracking-widest uppercase text-zinc-500">IMAGE PLACEHOLDER</span>
<span className="text-zinc-400 text-xs mt-2">Audience feedback and community insights</span>
</div>
<h3 className="text-xl md:text-2xl font-medium text-white leading-relaxed max-w-3xl mx-auto relative z-10">
                        "Entrepreneurs and sales professionals worldwide follow Blair Singer’s work on leadership, sales mastery, and team development."
                    </h3>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] border-t border-white/5 relative" id="process">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-20">
<div className="text-red-500 font-mono text-xs uppercase tracking-wider mb-2">The Framework</div>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                        How Blair Develops <br/>
<span className="text-zinc-500">High-Performance Teams</span>
</h2>
</div>

<div className="relative pl-8 md:pl-12 border-l border-zinc-800 space-y-20">

<div className="relative group">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#050505] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#050505] group-hover:border-red-500 transition-colors">
<span className="font-mono text-sm">01</span>
</div>
<div className="pl-8 md:pl-12">
<h3 className="text-2xl text-white font-semibold mb-3">Strengthen Leadership Mindset</h3>
<p className="text-zinc-400 text-base leading-relaxed">Build confidence and clarity as a leader. Before you can lead a team to success, you must master your own internal dialogue and establish a vision that inspires action.</p>
</div>
</div>

<div className="relative group">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#050505] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#050505] group-hover:border-red-500 transition-colors">
<span className="font-mono text-sm">02</span>
</div>
<div className="pl-8 md:pl-12">
<h3 className="text-2xl text-white font-semibold mb-3">Develop Sales Skills</h3>
<p className="text-zinc-400 text-base leading-relaxed">Equip teams with practical selling techniques. We move beyond theory to provide frameworks for handling objections, presenting value, and closing with absolute confidence.</p>
</div>
</div>

<div className="relative group">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#050505] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#050505] group-hover:border-red-500 transition-colors">
<span className="font-mono text-sm">03</span>
</div>
<div className="pl-8 md:pl-12">
<h3 className="text-2xl text-white font-semibold mb-3">Build High-Performance Culture</h3>
<p className="text-zinc-400 text-base leading-relaxed">Create accountability, discipline, and results. Transform a group of individuals into a unified force driven by a common code of honor and an unstoppable desire to win.</p>
</div>
</div>
</div>
<div className="mt-20 flex justify-center">
<a className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-8 text-sm font-semibold text-black transition-all hover:bg-zinc-200" href="#booking">
                        Start Building Your Sales Team
                        <iconify-icon icon="solar:arrow-right-linear" strokeWidth="2" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-black border-t border-white/5 relative">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Core Curriculum Areas</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="flex items-center gap-4 p-5 rounded-2xl bg-zinc-900/30 border border-white/5">
<div className="w-8 h-8 rounded-full bg-red-600/10 flex items-center justify-center text-red-500 shrink-0">
<iconify-icon icon="solar:check-read-linear" width="18"></iconify-icon>
</div>
<span className="text-white font-medium text-lg">Sales Leadership Coaching</span>
</div>
<div className="flex items-center gap-4 p-5 rounded-2xl bg-zinc-900/30 border border-white/5">
<div className="w-8 h-8 rounded-full bg-red-600/10 flex items-center justify-center text-red-500 shrink-0">
<iconify-icon icon="solar:check-read-linear" width="18"></iconify-icon>
</div>
<span className="text-white font-medium text-lg">Team Performance Training</span>
</div>
<div className="flex items-center gap-4 p-5 rounded-2xl bg-zinc-900/30 border border-white/5">
<div className="w-8 h-8 rounded-full bg-red-600/10 flex items-center justify-center text-red-500 shrink-0">
<iconify-icon icon="solar:check-read-linear" width="18"></iconify-icon>
</div>
<span className="text-white font-medium text-lg">Sales Mastery Frameworks</span>
</div>
<div className="flex items-center gap-4 p-5 rounded-2xl bg-zinc-900/30 border border-white/5">
<div className="w-8 h-8 rounded-full bg-red-600/10 flex items-center justify-center text-red-500 shrink-0">
<iconify-icon icon="solar:check-read-linear" width="18"></iconify-icon>
</div>
<span className="text-white font-medium text-lg">Mindset Development</span>
</div>
<div className="flex items-center gap-4 p-5 rounded-2xl bg-zinc-900/30 border border-white/5 md:col-span-2 md:justify-center max-w-md mx-auto w-full">
<div className="w-8 h-8 rounded-full bg-red-600/10 flex items-center justify-center text-red-500 shrink-0">
<iconify-icon icon="solar:check-read-linear" width="18"></iconify-icon>
</div>
<span className="text-white font-medium text-lg">Entrepreneur Leadership Coaching</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] border-t border-white/5 relative" id="about">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-12 items-center">

<div className="w-full md:w-1/2 aspect-[4/5] bg-zinc-900 border border-white/10 rounded-3xl flex flex-col items-center justify-center border-dashed relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-tr from-red-900/20 to-transparent pointer-events-none"></div>
<iconify-icon className="text-zinc-600 mb-3" icon="solar:user-circle-linear" width="48"></iconify-icon>
<span className="font-mono text-sm tracking-widest uppercase text-zinc-500">IMAGE PLACEHOLDER</span>
<span className="text-zinc-400 text-xs mt-2">Blair Singer</span>
</div>
<div className="w-full md:w-1/2">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-8">
                            Hi, I’m Blair Singer.
                        </h2>
<div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
<p>
                                For decades I’ve worked with entrepreneurs and sales teams around the world to build leadership strength and high-performance cultures.
                            </p>
<p>
                                My mission is simple: help leaders develop powerful teams that consistently win.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black border-t border-white/5 relative">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Frequently Asked Questions</h2>
</div>
<div className="space-y-4">
<div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/5">
<h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-3">
<iconify-icon className="text-red-500" icon="solar:question-circle-linear"></iconify-icon>
                            Who is this designed for?
                        </h3>
<p className="text-zinc-400 text-sm leading-relaxed pl-8">Entrepreneurs, sales leaders, and business owners building teams.</p>
</div>
<div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/5">
<h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-3">
<iconify-icon className="text-red-500" icon="solar:question-circle-linear"></iconify-icon>
                            Is this leadership training or sales training?
                        </h3>
<p className="text-zinc-400 text-sm leading-relaxed pl-8">Both — combining leadership development with sales mastery.</p>
</div>
<div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/5">
<h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-3">
<iconify-icon className="text-red-500" icon="solar:question-circle-linear"></iconify-icon>
                            Does this work for experienced teams?
                        </h3>
<p className="text-zinc-400 text-sm leading-relaxed pl-8">Yes. The focus is strengthening leadership and team performance at any level.</p>
</div>
<div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/5">
<h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-3">
<iconify-icon className="text-red-500" icon="solar:question-circle-linear"></iconify-icon>
                            What makes Blair’s approach different?
                        </h3>
<p className="text-zinc-400 text-sm leading-relaxed pl-8">The deep integration of mindset, strong leadership principles, and tactical sales performance.</p>
</div>
<div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/5">
<h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-3">
<iconify-icon className="text-red-500" icon="solar:question-circle-linear"></iconify-icon>
                            How do we get started?
                        </h3>
<p className="text-zinc-400 text-sm leading-relaxed pl-8">Book a call to discuss your team's specific needs and goals.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden bg-[#050505] border-t border-white/5" id="booking">
<div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-600/10 blur-[150px] rounded-full pointer-events-none"></div>
<div className="max-w-6xl mx-auto rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#080808] relative z-10 shadow-2xl">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 p-8 md:p-12 lg:p-16 items-center">

<div className="flex flex-col justify-center h-full pt-4 lg:pt-0 mb-12 lg:mb-0">
<h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                            Build Your High-Performance Sales Team
                        </h2>
<p className="text-zinc-400 text-lg mb-8 leading-relaxed max-w-md">
                            Book a conversation to explore how Blair Singer’s leadership and sales frameworks can strengthen your team.
                        </p>
<div>
<button className="inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-red-600 px-8 text-base font-semibold text-white transition-all hover:bg-red-500 shadow-[0_0_30px_rgba(220,38,38,0.2)]">
                                Book My Call
                                <iconify-icon icon="solar:calendar-add-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="relative w-full aspect-square md:aspect-auto md:h-[500px] bg-[#0c0c0c] border border-white/10 rounded-2xl flex flex-col items-center justify-center shadow-2xl ring-1 ring-white/5 border-dashed group">
<div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent pointer-events-none rounded-2xl"></div>
<iconify-icon className="text-zinc-600 mb-4 group-hover:text-red-500 transition-colors" icon="solar:calendar-mark-linear" width="48"></iconify-icon>
<span className="font-mono text-sm tracking-widest uppercase text-zinc-500">CALENDLY PLACEHOLDER</span>
<p className="text-zinc-400 text-xs mt-3">Embed scheduling widget here</p>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-black border-t border-white/5 pt-12 pb-12 text-sm">
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center">
<div className="flex items-center gap-2 text-white font-semibold tracking-tight text-lg mb-4">
<iconify-icon className="text-red-500" icon="solar:bolt-linear" width="20"></iconify-icon>
                Blair Singer
            </div>
<p className="text-zinc-500 mb-6 max-w-sm">
                Developing powerful leaders and high-performance sales teams worldwide.
            </p>
<div className="text-zinc-600 text-xs pt-6 border-t border-white/5 w-full max-w-md">
                © 2024 Blair Singer. All rights reserved.
            </div>
</div>
</footer>


    </>
  );
}
