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
<nav aria-label="Main menu" className="border-white/[0.08] flex shadow-black/80 bg-[#0A0A0A]/90 w-full max-w-5xl border rounded-full p-1.5 pl-4 shadow-2xl backdrop-blur-md items-center justify-between">
<a aria-label="Home" className="flex items-center gap-3 group shrink-0" href="/">
<span className="text-white font-semibold tracking-tight text-base">Simon Hazeldine</span>
</a>
<div className="flex shrink-0 ml-2 items-center">
<a className="text-sm hover:bg-blue-700 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 whitespace-nowrap font-semibold text-white bg-blue-600 rounded-full py-2.5 px-6 shadow-[0_0_20px_rgba(29,78,216,0.3)]" href="#book">
                    Book a Call
                    <iconify-icon aria-hidden="true" icon="solar:arrow-right-linear" strokeWidth="2" width="16"></iconify-icon>
</a>
</div>
</nav>
</header>
<main className="">

<section className="overflow-hidden min-h-screen pt-44 pb-20 relative flex flex-col items-center justify-center">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none opacity-60 mix-blend-screen z-0"></div>
<div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none"></div>
<div className="z-10 text-center max-w-5xl mx-auto px-6 relative w-full">
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tight mb-8 leading-[1.05]">
                    Transform Your<br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-blue-600 drop-shadow-[0_0_30px_rgba(29,78,216,0.3)]">Sales Performance</span>
</h1>
<p className="text-lg md:text-xl font-normal text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                    Simon Hazeldine helps sales leaders and teams improve performance through modern sales transformation strategies grounded in buyer psychology and consultative selling.
                </p>
<div className="flex flex-col items-center justify-center mb-16">
<a className="group relative inline-flex h-14 items-center justify-center gap-3 rounded-full bg-blue-600 px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_rgba(29,78,216,0.4)] ring-1 ring-white/10" href="#book">
                        Book a Sales Strategy Call
                        <iconify-icon className="transition-transform duration-300 group-hover:translate-x-1" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>

<div className="w-full max-w-4xl mx-auto aspect-video bg-[#0a0a0a] border border-white/10 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden group shadow-2xl sc-card">
<div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent z-0"></div>
<div className="w-20 h-20 rounded-full bg-blue-600/20 border border-blue-500/50 flex items-center justify-center text-blue-500 backdrop-blur-sm z-10 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 cursor-pointer shadow-[0_0_30px_rgba(29,78,216,0.3)]">
<iconify-icon className="translate-x-0.5" icon="solar:play-bold" width="32"></iconify-icon>
</div>
<span className="mt-6 text-zinc-500 font-mono text-xs uppercase tracking-widest z-10 bg-black/50 px-4 py-2 rounded-full border border-white/5 backdrop-blur-md">
                        [VIDEO PLACEHOLDER] Watch Simon Explain Sales Transformation
                    </span>
</div>
</div>
</section>

<section className="z-20 bg-[#020202] border-y border-white/5 py-16 relative">
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
<p className="text-center text-xs text-zinc-600 mb-8 font-mono uppercase tracking-widest">
                    Organizations and leaders influenced by Simon Hazeldine’s work
                </p>

<div className="w-full max-w-4xl h-24 bg-zinc-900/50 border border-white/5 rounded-xl flex items-center justify-center text-zinc-600 font-mono text-sm relative overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-[bg-pan_3s_linear_infinite]"></div>
                    [IMAGE PLACEHOLDER] Client Logos Grid
                </div>
</div>
</section>

<section className="bg-black pt-24 pb-24 relative" id="pain-points">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
                        Why Many Sales Teams Struggle to<br/>
<span className="text-zinc-500">Achieve Consistent Results</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">

<div className="sc-card p-8 rounded-2xl flex flex-col items-start spotlight-card">
<div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500 border border-red-500/20 mb-6">
<iconify-icon icon="solar:graph-down-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-semibold tracking-tight mb-3">Inconsistent Sales Performance</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Teams struggle to deliver predictable results, leading to missed targets and revenue uncertainty.</p>
</div>

<div className="sc-card p-8 rounded-2xl flex flex-col items-start spotlight-card">
<div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 border border-orange-500/20 mb-6">
<iconify-icon icon="solar:user-cross-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-semibold tracking-tight mb-3">Weak Buyer Engagement</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Sales conversations fail to connect with modern buyers, resulting in stalled deals and ghosting.</p>
</div>

<div className="sc-card p-8 rounded-2xl flex flex-col items-start spotlight-card">
<div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-500 border border-yellow-500/20 mb-6">
<iconify-icon icon="solar:route-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-semibold tracking-tight mb-3">Lack of Sales Strategy</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Without clear, structured frameworks, teams operate reactively rather than proactively guiding the sale.</p>
</div>

<div className="sc-card p-8 rounded-2xl flex flex-col items-start spotlight-card">
<div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500 border border-purple-500/20 mb-6">
<iconify-icon icon="solar:crown-cross-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-semibold tracking-tight mb-3">Leadership Challenges</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Sales leaders struggle to drive sustained performance, coach effectively, and motivate their teams.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] border-t border-white/5 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
                        Why Sales Leaders Learn<br/>
<span className="text-blue-500">From Simon Hazeldine</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group p-8 rounded-3xl bg-zinc-900/40 border border-white/10 hover:border-blue-500/30 transition-all cursor-default relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/10 transition-colors"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20 mb-5">
<iconify-icon icon="solar:rocket-linear" width="22"></iconify-icon>
</div>
<h3 className="text-white font-semibold text-xl mb-2 tracking-tight">Sales Transformation Expertise</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Helping organizations improve sales strategy and performance through proven, modern methodologies.</p>
</div>
</div>

<div className="group p-8 rounded-3xl bg-zinc-900/40 border border-white/10 hover:border-blue-500/30 transition-all cursor-default relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/10 transition-colors"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20 mb-5">
<iconify-icon icon="solar:brain-linear" width="22"></iconify-icon>
</div>
<h3 className="text-white font-semibold text-xl mb-2 tracking-tight">Buyer Psychology Insights</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Understanding deeply how modern buyers think, evaluate, and ultimately make purchasing decisions.</p>
</div>
</div>

<div className="group p-8 rounded-3xl bg-zinc-900/40 border border-white/10 hover:border-blue-500/30 transition-all cursor-default relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/10 transition-colors"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20 mb-5">
<iconify-icon icon="solar:handshake-linear" width="22"></iconify-icon>
</div>
<h3 className="text-white font-semibold text-xl mb-2 tracking-tight">Consultative Selling Approach</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Moving beyond transactional selling to build stronger, value-driven relationships with customers.</p>
</div>
</div>

<div className="group p-8 rounded-3xl bg-zinc-900/40 border border-white/10 hover:border-blue-500/30 transition-all cursor-default relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/10 transition-colors"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20 mb-5">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="22"></iconify-icon>
</div>
<h3 className="text-white font-semibold text-xl mb-2 tracking-tight">Sales Leadership Development</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Helping leaders build high-performing teams, create coaching cultures, and drive accountability.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black border-t border-white/5 relative">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<div className="w-full aspect-square md:aspect-[4/3] bg-zinc-900 border border-white/10 rounded-3xl flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-blue-600/5"></div>
<span className="text-zinc-600 font-mono text-xs uppercase tracking-widest bg-black/50 px-4 py-2 rounded-full border border-white/5">
                            [IMAGE PLACEHOLDER]<br/>Client Feedback
                        </span>
</div>
<div className="flex flex-col justify-center">
<iconify-icon className="text-blue-500/20 mb-6" icon="solar:quote-left-bold" width="48"></iconify-icon>
<p className="text-2xl md:text-3xl font-medium text-white leading-snug tracking-tight mb-8">
                            "Sales leaders across industries follow Simon Hazeldine’s insights on sales transformation, buyer psychology, and consultative selling."
                        </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center border border-white/10 text-zinc-500 font-mono text-xs">
                                IMG
                            </div>
<div>
<div className="text-white font-semibold text-base">Client Feedback</div>
<div className="text-zinc-500 text-sm">Leadership Insights</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] border-y border-white/5" id="process">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                        How Simon Hazeldine<br/>
<span className="text-blue-500">Improves Sales Performance</span>
</h2>
</div>
<div className="relative">

<div className="absolute left-[27px] top-4 bottom-4 w-px bg-zinc-800 hidden md:block"></div>

<div className="relative pl-0 md:pl-20 pb-16 group">
<div className="hidden md:flex absolute left-0 top-0 w-14 h-14 rounded-full bg-[#050505] border border-zinc-700 items-center justify-center text-white z-10 group-hover:border-blue-500 group-hover:text-blue-500 transition-colors shadow-[0_0_0_8px_#050505]">
<span className="font-mono text-lg font-semibold">01</span>
</div>
<div className="bg-zinc-900/30 border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors">
<span className="md:hidden text-blue-500 font-mono text-sm mb-2 block">Step 01</span>
<h3 className="text-2xl text-white font-semibold mb-3 tracking-tight">Assess Sales Strategy</h3>
<p className="text-zinc-400 text-base leading-relaxed">We begin by identifying gaps in your current sales capability and engagement models. Understanding where you are is critical before mapping where you need to go.</p>
</div>
</div>

<div className="relative pl-0 md:pl-20 pb-16 group">
<div className="hidden md:flex absolute left-0 top-0 w-14 h-14 rounded-full bg-[#050505] border border-zinc-700 items-center justify-center text-white z-10 group-hover:border-blue-500 group-hover:text-blue-500 transition-colors shadow-[0_0_0_8px_#050505]">
<span className="font-mono text-lg font-semibold">02</span>
</div>
<div className="bg-zinc-900/30 border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors" style={{boxShadow: '0 0 40px rgba(29, 78, 216, 0.05)', borderColor: 'rgba(29, 78, 216, 0.2)'}}>
<span className="md:hidden text-blue-500 font-mono text-sm mb-2 block">Step 02</span>
<h3 className="text-2xl text-white font-semibold mb-3 tracking-tight">Develop Sales Transformation Strategy</h3>
<p className="text-zinc-400 text-base leading-relaxed">Implement modern sales frameworks tailored to your market. This integrates consultative selling techniques and deep buyer psychology to elevate conversations.</p>
</div>
</div>

<div className="relative pl-0 md:pl-20 group">
<div className="hidden md:flex absolute left-0 top-0 w-14 h-14 rounded-full bg-[#050505] border border-zinc-700 items-center justify-center text-white z-10 group-hover:border-blue-500 group-hover:text-blue-500 transition-colors shadow-[0_0_0_8px_#050505]">
<span className="font-mono text-lg font-semibold">03</span>
</div>
<div className="bg-zinc-900/30 border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors">
<span className="md:hidden text-blue-500 font-mono text-sm mb-2 block">Step 03</span>
<h3 className="text-2xl text-white font-semibold mb-3 tracking-tight">Strengthen Sales Leadership</h3>
<p className="text-zinc-400 text-base leading-relaxed">Equip leaders with the tools and mindset required to drive sustainable performance, coach their teams effectively, and maintain the transformation.</p>
</div>
</div>
</div>
<div className="mt-16 flex justify-center">
<a className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-8 text-sm font-semibold text-black transition-all hover:scale-[1.02] active:scale-[0.98]" href="#book">
                        Improve Your Sales Performance
                    </a>
</div>
</div>
</section>

<section className="py-24 bg-black relative border-b border-white/5">
<div className="max-w-5xl mx-auto px-6">
<h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-12 text-center">Core Pillars of Implementation</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 flex items-start gap-4 hover:bg-zinc-900 transition-colors">
<iconify-icon className="text-blue-500 shrink-0" icon="solar:check-circle-bold" width="24"></iconify-icon>
<span className="text-zinc-200 font-medium text-sm pt-0.5">Sales Transformation Consulting</span>
</div>
<div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 flex items-start gap-4 hover:bg-zinc-900 transition-colors">
<iconify-icon className="text-blue-500 shrink-0" icon="solar:check-circle-bold" width="24"></iconify-icon>
<span className="text-zinc-200 font-medium text-sm pt-0.5">Sales Performance Training</span>
</div>
<div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 flex items-start gap-4 hover:bg-zinc-900 transition-colors">
<iconify-icon className="text-blue-500 shrink-0" icon="solar:check-circle-bold" width="24"></iconify-icon>
<span className="text-zinc-200 font-medium text-sm pt-0.5">Buyer Psychology Frameworks</span>
</div>
<div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 flex items-start gap-4 hover:bg-zinc-900 transition-colors">
<iconify-icon className="text-blue-500 shrink-0" icon="solar:check-circle-bold" width="24"></iconify-icon>
<span className="text-zinc-200 font-medium text-sm pt-0.5">Consultative Selling Strategies</span>
</div>
<div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 flex items-start gap-4 hover:bg-zinc-900 transition-colors sm:col-span-2 lg:col-span-1">
<iconify-icon className="text-blue-500 shrink-0" icon="solar:check-circle-bold" width="24"></iconify-icon>
<span className="text-zinc-200 font-medium text-sm pt-0.5">Sales Leadership Development</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] relative" id="about">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

<div className="w-full aspect-[3/4] max-w-md mx-auto bg-zinc-900 border border-white/10 rounded-3xl flex items-center justify-center relative overflow-hidden shadow-2xl">
<div className="absolute inset-0 bg-blue-600/10"></div>
<span className="text-zinc-600 font-mono text-xs uppercase tracking-widest bg-black/50 px-4 py-2 rounded-full border border-white/5 text-center leading-relaxed">
                            [IMAGE PLACEHOLDER]<br/>Simon Hazeldine
                        </span>
</div>
<div className="flex flex-col">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-8">
                            Hi, I’m Simon Hazeldine.
                        </h2>
<div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
<p>
                                I work with sales leaders and organizations to transform sales performance through modern strategies, buyer psychology insights, and consultative selling.
                            </p>
<p>
                                My goal is simple: help teams strengthen customer engagement and achieve sustainable growth.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black border-t border-white/5 relative" id="faq">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Frequently Asked Questions</h2>
</div>
<div className="space-y-4">
<div className="p-6 rounded-2xl bg-zinc-900/30 border border-white/5">
<h3 className="text-white font-medium text-lg mb-2">Who is this designed for?</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Sales leaders and B2B sales teams seeking stronger, more consistent performance.</p>
</div>
<div className="p-6 rounded-2xl bg-zinc-900/30 border border-white/5">
<h3 className="text-white font-medium text-lg mb-2">Is this training or consulting?</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Both — combining strategic insight with practical, hands-on implementation.</p>
</div>
<div className="p-6 rounded-2xl bg-zinc-900/30 border border-white/5">
<h3 className="text-white font-medium text-lg mb-2">Does this work for experienced teams?</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Yes. The focus is improving modern selling capability and leadership effectiveness, which benefits teams at any experience level.</p>
</div>
<div className="p-6 rounded-2xl bg-zinc-900/30 border border-white/5">
<h3 className="text-white font-medium text-lg mb-2">What makes Simon’s approach different?</h3>
<p className="text-zinc-400 text-sm leading-relaxed">The deep integration of buyer psychology with actionable sales transformation frameworks.</p>
</div>
<div className="p-6 rounded-2xl bg-zinc-900/30 border border-white/5">
<h3 className="text-white font-medium text-lg mb-2">How do we get started?</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Book a strategy call to discuss your specific challenges and objectives.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden bg-[#050505] border-t border-white/5" id="book">
<div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>
<div className="max-w-6xl mx-auto rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#080808] relative z-10 shadow-2xl">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 md:p-12 lg:p-16 items-center">

<div className="flex flex-col justify-center">
<h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-[1.1]">
                            Transform Your<br/>Sales Performance
                        </h2>
<p className="text-zinc-400 text-lg mb-8 leading-relaxed max-w-md">
                            Book a conversation with Simon Hazeldine to explore how his sales transformation approach can improve your team’s results.
                        </p>
<div>
<button className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-blue-600 px-8 text-base font-semibold text-white transition-all hover:bg-blue-700 hover:scale-[1.02] shadow-[0_0_30px_rgba(29,78,216,0.3)]">
                                Book My Call
                            </button>
</div>
</div>

<div className="relative w-full h-[500px] bg-[#0c0c0c] border border-white/10 rounded-2xl flex items-center justify-center overflow-hidden shadow-inner ring-1 ring-white/5 group">
<div className="absolute inset-0 bg-blue-600/5 group-hover:bg-blue-600/10 transition-colors"></div>
<div className="text-center z-10 relative">
<iconify-icon className="text-blue-500/50 mb-4 mx-auto block" icon="solar:calendar-date-bold" width="48"></iconify-icon>
<span className="text-zinc-500 font-mono text-sm uppercase tracking-widest">
                                [CALENDLY PLACEHOLDER]
                            </span>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-black border-t border-white/5 py-12 text-sm text-center">
<div className="max-w-7xl mx-auto px-6">
<p className="text-zinc-600">
                © 2024 Simon Hazeldine. All rights reserved.
            </p>
</div>
</footer>


    </>
  );
}
