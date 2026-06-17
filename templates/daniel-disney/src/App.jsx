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
<nav aria-label="Main menu" className="border-white/[0.08] flex shadow-black/80 bg-[#0A0A0A]/90 w-full max-w-5xl border rounded-full p-1.5 pl-3 shadow-2xl backdrop-blur-md items-center justify-between">
<a className="flex items-center gap-3 pr-4 group shrink-0" href="/">
<div className="flex shadow-lg shadow-yellow-400/10 overflow-hidden group-hover:bg-yellow-400/20 group-hover:border-yellow-400/30 transition-all duration-300 bg-yellow-400/10 w-9 h-9 border-yellow-400/20 border rounded-xl relative items-center justify-center">
<iconify-icon className="text-yellow-400 transition-transform duration-300 group-hover:scale-110" height="20" icon="solar:user-id-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-white font-semibold tracking-tight text-sm uppercase">Daniel Disney</span>
</a>
<div className="flex shrink-0 border-white/10 border-l ml-2 pl-4 items-center">
<a className="text-sm hover:bg-yellow-300 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center gap-1.5 whitespace-nowrap font-semibold text-black bg-yellow-400 rounded-full pt-2.5 pr-5 pb-2.5 pl-5" href="#demo">
                    Fix My LinkedIn Strategy
                    <iconify-icon height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</nav>
</header>
<main>

<section className="overflow-hidden min-h-[95vh] pt-44 pb-20 relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-yellow-600/10 blur-[120px] rounded-full pointer-events-none opacity-40 mix-blend-screen z-0"></div>
<div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none"></div>

<div className="absolute inset-0 overflow-hidden pointer-events-none z-0 mix-blend-lighten">
<div className="feed-block left-[5%] top-[10%]" style={{animationDelay: '-5s'}}></div>
<div className="feed-block right-[5%] top-[30%]" style={{animationDelay: '-12s'}}></div>
<div className="feed-block left-[15%] top-[60%]" style={{animationDelay: '-2s'}}></div>
<div className="feed-block right-[15%] top-[70%]" style={{animationDelay: '-17s'}}></div>
<div className="feed-block left-[40%] top-[80%]" style={{animationDelay: '-8s'}}></div>
</div>
<div className="z-10 text-center max-w-6xl mx-auto px-6 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-400/20 bg-yellow-400/5 text-yellow-300 text-xs uppercase font-medium tracking-wide mb-8 shadow-[0_0_20px_rgba(250,204,21,0.1)] backdrop-blur-sm cursor-default">
<span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-signal"></span>
                    Watch: Why LinkedIn Isn't Driving Sales
                </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.1] font-semibold text-white tracking-tight mb-8 max-w-4xl mx-auto">
                    You’re Using LinkedIn But <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-600 drop-shadow-[0_0_30px_rgba(250,204,21,0.2)]">Not Generating Pipeline.</span>
</h1>
<p className="leading-relaxed text-lg font-light text-zinc-400 max-w-2xl mx-auto mb-16">
                    Most salespeople post, connect, and message without results. Daniel Disney shows how to turn LinkedIn into a real sales channel.
                </p>

<div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 text-left bg-black/40 backdrop-blur-xl border border-white/5 rounded-3xl p-6 md:p-10 z-20 relative">

<div className="lg:col-span-7 flex flex-col">
<div className="w-full aspect-video bg-[#050505] border border-white/10 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden group shadow-[0_0_40px_rgba(250,204,21,0.05)] cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-16 h-16 rounded-full bg-yellow-400 text-black flex items-center justify-center shadow-[0_0_30px_rgba(250,204,21,0.3)] group-hover:scale-110 transition-transform mb-4">
<iconify-icon icon="solar:play-bold" width="32"></iconify-icon>
</div>
<span className="text-zinc-500 font-mono text-sm tracking-wide">[VIDEO PLACEHOLDER]</span>
</div>
</div>

<div className="lg:col-span-5 flex flex-col justify-center">
<p className="text-white text-xl font-medium tracking-tight mb-6">If you’re active on LinkedIn but not getting results, the issue isn’t effort. <br/><span className="text-yellow-400">It’s approach.</span></p>
<div className="text-zinc-400 space-y-4 mb-8 text-base leading-relaxed">
<p>Most people:</p>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-600 shrink-0 mt-0.5" icon="solar:close-circle-linear" width="20"></iconify-icon>
                                    post content without strategy
                                </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-600 shrink-0 mt-0.5" icon="solar:close-circle-linear" width="20"></iconify-icon>
                                    send messages that feel like outreach
                                </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-600 shrink-0 mt-0.5" icon="solar:close-circle-linear" width="20"></iconify-icon>
                                    focus on activity instead of engagement
                                </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-600 shrink-0 mt-0.5" icon="solar:close-circle-linear" width="20"></iconify-icon>
                                    don’t convert visibility into conversations
                                </li>
</ul>
<p className="pt-2">In this video, Daniel breaks down why activity fails, how to create content that converts, and how to start sales conversations.</p>
</div>
<a className="group relative inline-flex h-14 w-full items-center justify-center gap-2.5 rounded-full bg-yellow-400 px-8 text-base font-semibold text-black transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_rgba(250,204,21,0.2)] hover:shadow-[0_0_50px_rgba(250,204,21,0.4)]" href="#demo">
                            Fix My LinkedIn Strategy
                            <iconify-icon className="transition-transform duration-300 group-hover:translate-x-1" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-[#020202] relative z-20 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-8">Sales professionals improving LinkedIn performance</p>
<div className="w-full h-24 border border-white/10 border-dashed rounded-2xl flex items-center justify-center bg-white/[0.02]">
<span className="text-zinc-500 font-mono text-sm">[IMAGE PLACEHOLDER - CLIENT LOGOS STRIP]</span>
</div>
</div>
</section>

<section className="py-32 bg-[#050505] relative z-20" id="problem">
<div className="max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-zinc-900 text-yellow-400 mb-8 border border-white/10 shadow-[0_0_20px_rgba(250,204,21,0.1)]">
<iconify-icon icon="solar:danger-triangle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-16">
                    Why LinkedIn Isn’t Driving Results
                </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
<div className="p-8 rounded-[2rem] bg-zinc-900/40 border border-white/5 hover:border-white/10 transition-colors">
<h3 className="text-xl text-white font-medium mb-3">Posting without purpose</h3>
<p className="text-zinc-400 text-base leading-relaxed">Content doesn’t lead to conversations. Visibility alone does not equal sales.</p>
</div>
<div className="p-8 rounded-[2rem] bg-zinc-900/40 border border-white/5 hover:border-white/10 transition-colors">
<h3 className="text-xl text-white font-medium mb-3">Messages feel like sales</h3>
<p className="text-zinc-400 text-base leading-relaxed">Prospects disengage quickly when the approach feels generic and automated.</p>
</div>
<div className="p-8 rounded-[2rem] bg-zinc-900/40 border border-white/5 hover:border-white/10 transition-colors">
<h3 className="text-xl text-white font-medium mb-3">Engagement doesn’t convert</h3>
<p className="text-zinc-400 text-base leading-relaxed">Likes and comments are great, but visibility doesn’t automatically become pipeline.</p>
</div>
<div className="p-8 rounded-[2rem] bg-zinc-900/40 border border-white/5 hover:border-white/10 transition-colors">
<h3 className="text-xl text-white font-medium mb-3">No clear system</h3>
<p className="text-zinc-400 text-base leading-relaxed">Activity lacks direction, leading to burnout and abandoned outreach strategies.</p>
</div>
</div>
</div>
</section>

<section className="py-32 border-y border-white/5 bg-yellow-400 text-black relative z-20">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8 text-black">
                    LinkedIn Isn’t About Activity.<br/>It’s About Conversion.
                </h2>
<div className="text-xl font-medium leading-relaxed max-w-2xl mx-auto space-y-4 text-black/80">
<p>More posts won’t fix this.</p>
<p>More connections won’t fix this.</p>
<p className="pt-4 font-semibold text-black">Results improve when:</p>
</div>
<div className="mt-8 flex flex-col md:flex-row justify-center gap-4 text-sm font-medium">
<span className="px-6 py-3 bg-black text-yellow-400 rounded-full">Content creates interest</span>
<span className="px-6 py-3 bg-black text-yellow-400 rounded-full">Messaging feels natural</span>
<span className="px-6 py-3 bg-black text-yellow-400 rounded-full">Conversations are intentional</span>
</div>
</div>
</section>

<section className="py-32 bg-[#050505] border-b border-white/5" id="process">
<div className="max-w-6xl mx-auto px-6">

<div className="text-center mb-24" id="mechanism">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                        Social Selling That <span className="text-yellow-400">Converts</span>
</h2>
<p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Top performers don’t just show up. They create meaningful content, engage intentionally, and turn visibility into conversations. This is what turns LinkedIn into pipeline.
                    </p>
</div>
<div className="max-w-4xl mx-auto">

<div className="relative pl-8 md:pl-16 pb-24 border-l border-zinc-800 last:border-0 group scroll-mt-32">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#050505] group-hover:border-yellow-400 transition-colors">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="pt-1">
<span className="text-yellow-400 font-mono text-xs uppercase tracking-wide mb-3 block">Step 01</span>
<h3 className="text-3xl text-white font-semibold mb-4 tracking-tight">Analyze current LinkedIn activity</h3>
<p className="text-zinc-400 text-base leading-relaxed max-w-2xl">
                                We dissect what you're currently doing. We look at your profile, your posts, and your outreach to find the exact bottlenecks stopping you from generating pipeline.
                            </p>
</div>
</div>

<div className="relative pl-8 md:pl-16 pb-24 border-l border-zinc-800 last:border-0 group scroll-mt-32">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#050505] group-hover:border-yellow-400 transition-colors">
<iconify-icon icon="solar:pen-new-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="pt-1">
<span className="text-yellow-400 font-mono text-xs uppercase tracking-wide mb-3 block">Step 02</span>
<h3 className="text-3xl text-white font-semibold mb-4 tracking-tight">Build content &amp; messaging strategy</h3>
<p className="text-zinc-400 text-base leading-relaxed max-w-2xl">
                                Create a systematic approach to what you post and who you message. Frameworks that feel natural, establish authority, and compel prospects to engage without feeling "sold" to.
                            </p>
</div>
</div>

<div className="relative pl-8 md:pl-16 pb-12 border-l border-zinc-800 last:border-0 group scroll-mt-32">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#050505] group-hover:border-yellow-400 transition-colors">
<iconify-icon icon="solar:routing-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="pt-1">
<span className="text-yellow-400 font-mono text-xs uppercase tracking-wide mb-3 block">Step 03</span>
<h3 className="text-3xl text-white font-semibold mb-4 tracking-tight">Convert engagement into conversations</h3>
<p className="text-zinc-400 text-base leading-relaxed max-w-2xl">
                                Visibility isn't enough. We implement strict processes to catch engagement signals and transition casual interactions into structured sales conversations and booked meetings.
                            </p>
</div>
</div>
<div className="mt-12 pl-8 md:pl-16">
<a className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-yellow-400 px-8 text-base font-semibold text-black transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_rgba(250,204,21,0.2)]" href="#demo">
                            Improve My LinkedIn
                        </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black border-y border-white/5 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">What's Included</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">

<div className="md:col-span-2 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col justify-between overflow-hidden">
<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-yellow-400/5 to-transparent pointer-events-none"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-yellow-400 mb-6 shadow-lg shadow-black/50">
<iconify-icon icon="solar:video-library-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-semibold tracking-tight mb-3">LinkedIn Sales Training &amp; Workshops</h3>
<p className="text-zinc-400 text-base leading-relaxed max-w-md">Comprehensive training designed for B2B sales professionals. Learn exactly how to leverage LinkedIn to find, connect, and convert your ideal prospects.</p>
</div>
</div>

<div className="md:col-span-1 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col overflow-hidden">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 mb-6 shadow-lg shadow-black/50">
<iconify-icon icon="solar:share-circle-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-semibold tracking-tight mb-3">Social Selling Frameworks</h3>
<p className="text-zinc-400 text-base leading-relaxed">Stop guessing. Get proven frameworks that structure your daily social selling routine for maximum efficiency and pipeline generation.</p>
</div>

<div className="md:col-span-1 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col justify-between overflow-hidden">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 mb-6 shadow-lg shadow-black/50">
<iconify-icon icon="solar:document-text-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-2xl text-white font-semibold tracking-tight mb-2">Content Strategy Guidance</h3>
<p className="text-zinc-400 text-base leading-relaxed">Know exactly what to post. Build authority and create content that drives inbound interest from target accounts.</p>
</div>
</div>

<div className="md:col-span-2 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col md:flex-row items-center justify-between overflow-hidden gap-6">
<div className="relative z-10 max-w-sm">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-yellow-400 mb-6 shadow-lg shadow-black/50">
<iconify-icon icon="solar:chat-round-line-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-semibold tracking-tight mb-3">Messaging Systems</h3>
<p className="text-zinc-400 text-base leading-relaxed">Templates and systems for outreach that doesn't feel like spam. Start meaningful conversations that seamlessly transition to sales calls.</p>
</div>
<div className="flex items-center gap-2 opacity-80">
<div className="px-3 py-2 bg-zinc-900 border border-white/10 rounded text-xs text-zinc-400">Connection</div>
<iconify-icon className="text-zinc-600" icon="solar:arrow-right-linear" width="16"></iconify-icon>
<div className="px-3 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded text-xs text-yellow-400">Value Msg</div>
<iconify-icon className="text-zinc-600" icon="solar:arrow-right-linear" width="16"></iconify-icon>
<div className="px-3 py-2 bg-zinc-900 border border-white/10 rounded text-xs text-white">Call Booked</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] relative" id="about">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

<div className="order-2 md:order-1 flex flex-col justify-center">
<span className="text-yellow-400 font-mono text-xs uppercase tracking-wide mb-4">About Daniel</span>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                            Hi, I’m Daniel Disney.
                        </h2>
<div className="text-zinc-400 text-lg leading-relaxed space-y-6">
<p>I work with sales professionals who are active on LinkedIn but not seeing results.</p>
<p>The issue isn’t effort — it’s how LinkedIn is used. Most reps push too hard or blend in completely.</p>
<p>My focus is helping you turn activity into conversations and conversations into sales.</p>
</div>
</div>

<div className="order-1 md:order-2">
<div className="w-full aspect-[4/5] md:aspect-square bg-zinc-900 border border-white/10 rounded-3xl flex items-center justify-center p-8 relative overflow-hidden group shadow-2xl">
<div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="text-zinc-500 font-mono text-sm">[IMAGE PLACEHOLDER: DANIEL DISNEY]</span>
</div>
</div>
</div>

<div className="mt-32 pt-16 border-t border-white/5 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
<div className="md:col-span-5">
<h3 className="text-2xl text-white font-semibold tracking-tight mb-4">Professionals improving social selling</h3>
<p className="text-zinc-400 text-base leading-relaxed">
                            Sales professionals use Daniel Disney’s approach to improve how they use LinkedIn for outreach, engagement, and pipeline.
                        </p>
</div>
<div className="md:col-span-7 w-full h-32 border border-white/10 border-dashed rounded-2xl flex items-center justify-center bg-white/[0.02]">
<span className="text-zinc-500 font-mono text-sm">[IMAGE PLACEHOLDER: SOCIAL PROOF / REVIEWS]</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black border-t border-white/5 relative" id="faq">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight">Frequently Asked Questions</h2>
</div>
<div className="grid grid-cols-1 gap-4">
<div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5">
<h4 className="text-lg text-white font-medium mb-2">Who is this for?</h4>
<p className="text-zinc-400 text-base">Sales professionals, SDRs, BDRs, founders, and teams using LinkedIn for outbound and social selling.</p>
</div>
<div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5">
<h4 className="text-lg text-white font-medium mb-2">Is this LinkedIn training?</h4>
<p className="text-zinc-400 text-base">Yes, but specifically focused on sales, conversation generation, and building real pipeline.</p>
</div>
<div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5">
<h4 className="text-lg text-white font-medium mb-2">Does this work for experienced reps?</h4>
<p className="text-zinc-400 text-base">Yes, especially those who are active but not seeing tangible sales results from their efforts.</p>
</div>
<div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5">
<h4 className="text-lg text-white font-medium mb-2">What makes this different?</h4>
<p className="text-zinc-400 text-base">A relentless focus on conversion, not just vanity metrics or mindless activity.</p>
</div>
<div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5">
<h4 className="text-lg text-white font-medium mb-2">How do we start?</h4>
<p className="text-zinc-400 text-base">Book a call below to discuss your current LinkedIn strategy and see how we can improve it.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden bg-[#050505]" id="demo">
<div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-600/10 blur-[150px] rounded-full pointer-events-none"></div>
<div className="max-w-6xl mx-auto rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#080808] relative z-10 shadow-2xl">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 p-8 md:p-12 lg:p-16 items-center">

<div className="flex flex-col justify-center h-full pt-4 lg:pt-12">
<h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-[1.1]">
                            Turn LinkedIn Into Pipeline
                        </h2>
<p className="text-zinc-400 text-lg mb-8 leading-relaxed max-w-md">
                            Book a call to improve how you generate sales through LinkedIn. Let's build a strategy that works.
                        </p>
<div className="mt-4">

<button className="lg:hidden inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-yellow-400 px-8 text-base font-semibold text-black shadow-[0_0_30px_rgba(250,204,21,0.2)]">
                                Book My Call
                            </button>
</div>
</div>

<div className="relative w-full min-h-[500px] lg:min-h-[600px] bg-[#0c0c0c] border border-white/10 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/5 flex items-center justify-center p-8 text-center">
<div className="flex flex-col items-center gap-4">
<iconify-icon className="text-zinc-700" icon="solar:calendar-bold-duotone" width="48"></iconify-icon>
<span className="text-zinc-500 font-mono text-sm">[CALENDLY PLACEHOLDER]</span>
<p className="text-xs text-zinc-600 max-w-xs mt-2">Embed your Calendly or Cal.com widget here</p>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-black border-t border-white/5 pt-12 pb-10 text-sm">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<a className="flex items-center gap-3 text-white font-semibold tracking-tight text-lg group uppercase" href="/">
<div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg shadow-yellow-400/5 relative overflow-hidden group-hover:bg-yellow-400/10 group-hover:border-yellow-400/20 transition-all duration-300">
<iconify-icon className="text-white group-hover:text-yellow-400 transition-colors duration-300" icon="solar:user-id-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
                    Daniel Disney
                </a>
<div className="flex gap-6">
<a className="text-zinc-500 hover:text-yellow-400 transition-colors" href="https://uk.linkedin.com/in/danieldisney" rel="noopener noreferrer" target="_blank">LinkedIn</a>
<a className="text-zinc-500 hover:text-yellow-400 transition-colors" href="https://www.youtube.com/channel/UCC7NS8LX7gv0n-3f5RGcmQQ" rel="noopener noreferrer" target="_blank">YouTube</a>
<a className="text-zinc-500 hover:text-yellow-400 transition-colors" href="https://danieldisney.online/" rel="noopener noreferrer" target="_blank">Website</a>
</div>
</div>
<div className="pt-8 mt-8 border-t border-white/5 text-center md:text-left">
<div className="text-zinc-600 text-xs">
                    © 2024 Daniel Disney. All rights reserved.
                </div>
</div>
</div>
</footer>


    </>
  );
}
