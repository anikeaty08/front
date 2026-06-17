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
<nav aria-label="Menu principal" className="border-white/[0.08] flex shadow-black/80 bg-[#0A0A0A]/90 w-full max-w-4xl border rounded-full p-1.5 pl-3 shadow-2xl backdrop-blur-md items-center justify-between">
<a aria-label="Unbound Growth Home" className="flex items-center gap-3 pr-4 group shrink-0" href="/">
<div className="flex shadow-lg shadow-green-500/10 overflow-hidden group-hover:bg-green-500/20 group-hover:border-green-500/30 transition-all duration-300 bg-green-500/10 w-9 h-9 border-green-500/20 border rounded-xl relative items-center justify-center">
<iconify-icon aria-hidden="true" className="text-green-500 transition-transform duration-300 group-hover:scale-110" height="20" icon="solar:leaf-bold-duotone" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-white font-semibold tracking-tight text-sm">Unbound Growth</span>
</a>
<div className="flex shrink-0 border-white/10 border-l ml-2 pl-4 items-center">
<a className="text-sm hover:bg-green-600 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center gap-1.5 whitespace-nowrap font-semibold text-black bg-green-500 rounded-full pt-2.5 pr-5 pb-2.5 pl-5" href="#booking">
                    Book a Strategy Call
                    <iconify-icon aria-hidden="true" height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</nav>
</header>
<main className="">

<section className="overflow-hidden min-h-[90vh] pt-44 pb-20 relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-green-600/10 blur-[120px] rounded-full pointer-events-none opacity-50 mix-blend-screen z-0"></div>
<div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none"></div>
<div className="z-10 text-center max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/20 bg-green-500/5 text-green-300 text-xs uppercase font-medium tracking-wide mb-8 hover:border-green-500/40 transition-colors cursor-default shadow-[0_0_20px_rgba(34,197,94,0.1)] backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-signal"></span>
                    Buyer-Focused Selling
                </div>
<h1 className="md:text-7xl lg:text-8xl leading-[1.05] text-5xl font-semibold text-white tracking-tight mb-8">
                    Sell in a Way Buyers<br/> <span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-zinc-500 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">Actually Respond To.</span>
</h1>
<p className="leading-relaxed text-lg font-light text-zinc-400 max-w-2xl mr-auto mb-10 ml-auto">
                    Carole Mahoney helps sales professionals shift from pushy selling to buyer-focused conversations that build trust and create better outcomes.
                </p>
<div className="flex flex-col mb-20 items-center justify-center">
<div className="flex w-full max-w-lg mb-6 pr-4 pl-4 items-center justify-center">
<a className="group relative inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-green-500 px-8 text-base font-semibold text-black transition-all duration-300 hover:bg-green-600 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_rgba(34,197,94,0.2)]" href="#booking">
                            Book a Strategy Call
                            <iconify-icon className="transition-transform duration-300 group-hover:translate-x-1" height="18" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>

<div aria-label="Watch Carole Explain Buyer-Focused Selling" className="w-full max-w-4xl mx-auto relative group cursor-pointer">
<div className="absolute -inset-1 bg-gradient-to-r from-green-500/30 to-green-600/30 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-300 pointer-events-none"></div>
<div className="relative bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-[2rem] aspect-video flex flex-col items-center justify-center overflow-hidden shadow-2xl transition-all duration-300 hover:border-green-500/30">
<div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6 border border-green-500/30 group-hover:scale-110 group-hover:bg-green-500/20 transition-all duration-300 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
<iconify-icon className="text-green-500 ml-1" icon="solar:play-bold" width="32"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-medium tracking-tight mb-3">Watch Carole Explain Buyer-Focused Selling</h3>
<p className="text-zinc-500 font-mono text-xs tracking-widest uppercase border border-white/10 bg-black/50 px-3 py-1 rounded-full">Video Placeholder</p>
</div>
</div>
</div>
</section>

<section className="py-12 border-t border-white/5 bg-[#020202] relative z-20">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm font-medium text-zinc-500 uppercase tracking-wide mb-8">
                    Sales professionals learning buyer-focused selling through Unbound Growth
                </p>

<div className="w-full max-w-5xl mx-auto h-24 border border-dashed border-white/20 rounded-2xl flex items-center justify-center bg-white/5 relative overflow-hidden group">
<div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="text-zinc-400 font-mono text-sm tracking-widest flex items-center gap-2">
<iconify-icon icon="solar:gallery-linear" width="18"></iconify-icon>
                        IMAGE PLACEHOLDER
                    </span>
</div>
</div>
</section>

<section className="py-32 border-t border-white/5 bg-[#050505] relative z-20" id="pain-points">
<div className="max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-500/10 text-red-500 mb-8 border border-red-500/20 shadow-[0_0_20px_rgba(239,68,68,0.1)]">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-16 leading-tight">
                    Why Many Sales Conversations Fail
                </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">

<div className="bg-zinc-900/40 border border-white/5 rounded-[2rem] p-8 hover:bg-zinc-900/80 hover:border-white/10 transition-colors sc-card">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 mb-5">
<iconify-icon icon="solar:face-scan-square-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl text-white font-semibold mb-3 tracking-tight">Sales feels uncomfortable</h3>
<p className="text-zinc-400 leading-relaxed">Many sellers feel pressure to push instead of helping buyers think.</p>
</div>

<div className="bg-zinc-900/40 border border-white/5 rounded-[2rem] p-8 hover:bg-zinc-900/80 hover:border-white/10 transition-colors sc-card">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 mb-5">
<iconify-icon icon="solar:shield-cross-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl text-white font-semibold mb-3 tracking-tight">Buyers resist traditional sales tactics</h3>
<p className="text-zinc-400 leading-relaxed">Prospects disengage when conversations feel transactional.</p>
</div>

<div className="bg-zinc-900/40 border border-white/5 rounded-[2rem] p-8 hover:bg-zinc-900/80 hover:border-white/10 transition-colors sc-card">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 mb-5">
<iconify-icon icon="solar:brain-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl text-white font-semibold mb-3 tracking-tight">Mindset challenges limit performance</h3>
<p className="text-zinc-400 leading-relaxed">Confidence and internal beliefs affect how sellers communicate.</p>
</div>

<div className="bg-zinc-900/40 border border-white/5 rounded-[2rem] p-8 hover:bg-zinc-900/80 hover:border-white/10 transition-colors sc-card">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 mb-5">
<iconify-icon icon="solar:target-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl text-white font-semibold mb-3 tracking-tight">Teams focus on closing instead of understanding</h3>
<p className="text-zinc-400 leading-relaxed">Sales conversations often skip the buyer’s real concerns.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black border-y border-white/5 relative" id="why-carole">
<div className="text-center mb-16 max-w-3xl mx-auto px-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/20 bg-green-500/5 text-green-400 text-xs uppercase font-medium tracking-wide mb-6">
                    The Difference
                </div>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
                    Why Sales Professionals Learn From Carole Mahoney
                </h2>
</div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">

<div className="md:col-span-2 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col justify-between group overflow-hidden">
<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-green-500/5 to-transparent pointer-events-none"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-green-400 mb-6 shadow-lg shadow-black/50">
<iconify-icon aria-hidden="true" icon="solar:user-heart-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-semibold tracking-tight mb-3">Buyer-focused sales philosophy</h3>
<p className="text-zinc-400 text-base leading-relaxed max-w-md">Helping sellers understand how buyers think and decide.</p>
</div>
<div className="mt-8 flex flex-wrap gap-2">
<span className="px-2 py-1 bg-black/50 rounded border border-white/5 text-xs text-zinc-500">Empathy</span>
<span className="px-2 py-1 bg-black/50 rounded border border-white/5 text-xs text-zinc-500">Buyer Journey</span>
<span className="px-2 py-1 bg-black/50 rounded border border-white/5 text-xs text-zinc-500">Decision Dynamics</span>
</div>
</div>

<div className="md:col-span-1 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col group overflow-hidden">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-green-400 mb-6 shadow-lg shadow-black/50">
<iconify-icon aria-hidden="true" icon="solar:chat-round-check-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-semibold tracking-tight mb-3">Sales coaching approach</h3>
<p className="text-zinc-400 text-base leading-relaxed mb-4">Focus on developing better conversations, not scripts.</p>
</div>

<div className="md:col-span-1 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col justify-between overflow-hidden">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 shadow-lg shadow-black/50">
<iconify-icon aria-hidden="true" icon="solar:brain-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-2xl text-white font-semibold tracking-tight mb-2">Mindset-driven performance</h3>
<p className="text-zinc-400 text-base leading-relaxed">Helping salespeople overcome internal barriers.</p>
</div>
</div>

<div className="md:col-span-2 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col md:flex-row items-center justify-between overflow-hidden gap-6">
<div className="relative z-10 max-w-sm">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-green-400 mb-6 shadow-lg shadow-black/50">
<iconify-icon aria-hidden="true" icon="solar:notebook-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-semibold tracking-tight mb-3">Practical frameworks</h3>
<p className="text-zinc-400 text-base leading-relaxed">Strategies designed for real conversations with buyers.</p>
</div>
<div className="flex items-center gap-2 opacity-80 w-full md:w-auto">
<div className="flex-1 px-4 py-3 bg-zinc-900 border border-white/10 rounded-xl text-xs text-zinc-400 text-center">Structure</div>
<iconify-icon aria-hidden="true" className="text-zinc-600" icon="solar:arrow-right-linear" width="16"></iconify-icon>
<div className="flex-1 px-4 py-3 bg-green-900/30 border border-green-500/30 rounded-xl text-xs text-green-300 text-center font-medium shadow-[0_0_15px_rgba(34,197,94,0.1)]">Execution</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] relative z-20">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="w-full aspect-[21/9] md:aspect-[3/1] border border-dashed border-white/20 rounded-3xl flex flex-col items-center justify-center bg-white/5 mb-10 relative overflow-hidden group">
<div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="text-zinc-400 font-mono text-sm flex flex-col items-center gap-2 tracking-widest">
<iconify-icon className="text-zinc-500" icon="solar:gallery-bold-duotone" width="24"></iconify-icon>
                        IMAGE PLACEHOLDER
                    </span>
<span className="absolute bottom-4 left-4 bg-black/60 px-3 py-1 rounded-full text-zinc-400 text-xs border border-white/10 backdrop-blur-md">
                        Sales professionals applying buyer-focused selling
                    </span>
</div>
<div className="flex text-green-500 justify-center gap-1 mb-6">
<iconify-icon aria-hidden="true" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon aria-hidden="true" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon aria-hidden="true" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon aria-hidden="true" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon aria-hidden="true" icon="solar:star-bold" width="20"></iconify-icon>
</div>
<h3 className="text-2xl md:text-3xl text-white font-medium leading-relaxed tracking-tight">
                    "Sales professionals follow Carole Mahoney’s insights to improve how they communicate with buyers and build stronger sales conversations."
                </h3>
</div>
</section>

<section className="py-32 bg-black border-y border-white/5" id="process">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-24">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                        How Unbound Growth <br className="hidden md:block"/> Improves Sales Conversations
                    </h2>
<p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        A structured approach to transforming how you engage, understand, and build trust with your buyers.
                    </p>
</div>

<div className="relative pl-8 md:pl-16 pb-24 border-l border-zinc-800 last:border-0 group scroll-mt-32">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#000] group-hover:border-green-500 transition-colors">
<iconify-icon icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
<div className="lg:col-span-5 pt-1">
<span className="text-green-500 font-mono text-xs uppercase tracking-wide mb-3 block">Step 01</span>
<h3 className="text-3xl text-white font-semibold mb-4 tracking-tight">Understand the Buyer Perspective</h3>
<p className="text-zinc-400 text-base leading-relaxed">
                                Learn how buyers evaluate decisions.
                            </p>
</div>
<div className="lg:col-span-7">
<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 md:p-8 hover:bg-zinc-900/80 hover:border-white/10 transition-colors">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
</div>
<h4 className="text-white text-lg font-medium">Shift the Focus</h4>
</div>
<p className="text-zinc-400 leading-relaxed">Stop thinking about what you need to sell, and start mapping out the journey your buyer goes through when recognizing a problem and seeking a solution.</p>
</div>
</div>
</div>
</div>

<div className="relative pl-8 md:pl-16 pb-24 border-l border-zinc-800 last:border-0 group scroll-mt-32">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#000] group-hover:border-green-400 transition-colors">
<iconify-icon icon="solar:chat-round-line-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
<div className="lg:col-span-5 pt-1">
<span className="text-green-400 font-mono text-xs uppercase tracking-wide mb-3 block">Step 02</span>
<h3 className="text-3xl text-white font-semibold mb-4 tracking-tight">Improve Sales Conversations</h3>
<p className="text-zinc-400 text-base leading-relaxed">
                                Develop questions and dialogue that uncover real needs.
                            </p>
</div>
<div className="lg:col-span-7">
<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 md:p-8 hover:bg-zinc-900/80 hover:border-white/10 transition-colors">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400">
<iconify-icon icon="solar:lightbulb-linear" width="20"></iconify-icon>
</div>
<h4 className="text-white text-lg font-medium">Curiosity Over Pitching</h4>
</div>
<p className="text-zinc-400 leading-relaxed">We provide the frameworks to ask better questions, listen deeply, and structure dialogues that help buyers articulate their true challenges.</p>
</div>
</div>
</div>
</div>

<div className="relative pl-8 md:pl-16 pb-16 border-l border-transparent last:border-0 group scroll-mt-32">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#000] group-hover:border-green-300 transition-colors">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
<div className="lg:col-span-5 pt-1">
<span className="text-green-300 font-mono text-xs uppercase tracking-wide mb-3 block">Step 03</span>
<h3 className="text-3xl text-white font-semibold mb-4 tracking-tight">Build Confidence and Trust</h3>
<p className="text-zinc-400 text-base leading-relaxed">
                                Help sales professionals communicate with clarity and confidence.
                            </p>
</div>
<div className="lg:col-span-7">
<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 md:p-8 hover:bg-zinc-900/80 hover:border-white/10 transition-colors">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-300">
<iconify-icon icon="solar:hand-shake-linear" width="20"></iconify-icon>
</div>
<h4 className="text-white text-lg font-medium">Mindset Mastery</h4>
</div>
<p className="text-zinc-400 leading-relaxed">Identify and overcome the hidden beliefs and emotional barriers that sabotage sales conversations, enabling authentic, peer-to-peer relationships.</p>
</div>
</div>
</div>
</div>

<div className="mt-16 text-center">
<a className="group relative inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-green-500 px-10 text-lg font-semibold text-black transition-all duration-300 hover:bg-green-600 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_rgba(34,197,94,0.2)]" href="#booking">
                        Improve My Sales Conversations
                        <iconify-icon className="transition-transform duration-300 group-hover:translate-x-1" height="20" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] relative border-t border-white/5">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<div className="text-green-500 font-mono text-xs uppercase tracking-wide mb-2">Programs &amp; Resources</div>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">What's Included</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-[2rem] bg-[#0A0A0A] border border-white/10 hover:border-green-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] text-center flex flex-col items-center">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-green-400 mb-6">
<iconify-icon icon="solar:library-linear" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium text-lg">Buyer-Focused Sales Training</h3>
</div>

<div className="group relative p-8 rounded-[2rem] bg-[#0A0A0A] border border-white/10 hover:border-green-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] text-center flex flex-col items-center">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-green-400 mb-6">
<iconify-icon icon="solar:brain-linear" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium text-lg">Sales Mindset Coaching</h3>
</div>

<div className="group relative p-8 rounded-[2rem] bg-[#0A0A0A] border border-white/10 hover:border-green-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] text-center flex flex-col items-center">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-green-400 mb-6">
<iconify-icon icon="solar:documents-linear" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium text-lg">Sales Conversation Frameworks</h3>
</div>

<div className="group relative p-8 rounded-[2rem] bg-[#0A0A0A] border border-white/10 hover:border-green-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] text-center flex flex-col items-center lg:col-start-1 lg:ml-[50%]">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-green-400 mb-6">
<iconify-icon icon="solar:chart-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium text-lg">Sales Leadership Development</h3>
</div>

<div className="group relative p-8 rounded-[2rem] bg-[#0A0A0A] border border-white/10 hover:border-green-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] text-center flex flex-col items-center lg:col-start-2 lg:ml-[50%]">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-green-400 mb-6">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium text-lg">Sales Coaching Programs</h3>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black relative border-t border-white/5" id="about">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="w-full aspect-square md:aspect-[4/3] lg:aspect-square border border-dashed border-white/20 rounded-[2rem] flex flex-col items-center justify-center bg-zinc-900/30 group overflow-hidden relative">
<div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-zinc-600 mb-4" icon="solar:user-circle-bold-duotone" width="48"></iconify-icon>
<span className="text-zinc-400 font-mono text-sm tracking-widest">IMAGE PLACEHOLDER</span>
</div>

<div className="flex flex-col justify-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/20 bg-green-500/5 text-green-400 text-xs uppercase font-medium tracking-wide mb-6 w-fit">
                            Founder
                        </div>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-8">Hi, I'm Carole Mahoney.</h2>
<div className="space-y-6 text-lg text-zinc-400 leading-relaxed font-light">
<p>
                                Through Unbound Growth, I work with sales professionals and teams to improve how they approach conversations with buyers.
                            </p>
<p>
                                My focus is helping sellers develop the mindset and communication skills needed to build trust and guide meaningful buying decisions.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] border-y border-white/5 relative">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">Frequently Asked Questions</h2>
</div>
<div className="space-y-4">

<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 md:p-8 hover:border-white/10 transition-colors">
<h3 className="text-xl text-white font-medium mb-3">Who is this designed for?</h3>
<p className="text-zinc-400 leading-relaxed">Sales professionals and leaders looking to improve sales conversations.</p>
</div>

<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 md:p-8 hover:border-white/10 transition-colors">
<h3 className="text-xl text-white font-medium mb-3">Is this training or coaching?</h3>
<p className="text-zinc-400 leading-relaxed">Both — combining sales coaching with structured learning.</p>
</div>

<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 md:p-8 hover:border-white/10 transition-colors">
<h3 className="text-xl text-white font-medium mb-3">Does this work for experienced sellers?</h3>
<p className="text-zinc-400 leading-relaxed">Yes. The focus is improving mindset and buyer-focused communication.</p>
</div>

<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 md:p-8 hover:border-white/10 transition-colors">
<h3 className="text-xl text-white font-medium mb-3">What makes this approach different?</h3>
<p className="text-zinc-400 leading-relaxed">It focuses on how buyers think rather than pushing sales techniques.</p>
</div>

<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 md:p-8 hover:border-white/10 transition-colors">
<h3 className="text-xl text-white font-medium mb-3">How do we get started?</h3>
<p className="text-zinc-400 leading-relaxed">Book a strategy call.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden bg-black" id="booking">
<div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-600/10 blur-[150px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#080808] relative z-10 shadow-2xl">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 p-8 md:p-12 lg:p-16 items-center">

<div className="flex flex-col justify-center h-full pb-10 lg:pb-0">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/20 bg-green-500/5 text-green-300 text-xs uppercase font-medium tracking-wide mb-6 w-fit">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-signal"></span>
                            Take Action
                        </div>
<h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-[1.1]">
                            Improve Your<br/> Sales Conversations
                        </h2>
<p className="text-zinc-400 text-lg mb-8 leading-relaxed max-w-md">
                            Book a conversation with Carole Mahoney to explore how buyer-focused selling can help improve your sales performance.
                        </p>
</div>

<div className="relative w-full aspect-square md:aspect-[4/3] lg:min-h-[500px] bg-[#0c0c0c] border border-dashed border-white/20 rounded-2xl overflow-hidden shadow-2xl flex flex-col items-center justify-center p-8 text-center group">
<div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-zinc-600 mb-6" icon="solar:calendar-date-bold-duotone" width="48"></iconify-icon>
<span className="text-zinc-400 font-mono text-sm tracking-widest mb-8 uppercase bg-black/50 px-4 py-2 rounded-lg border border-white/5">
                             CALENDLY PLACEHOLDER
                         </span>
<button className="relative z-10 bg-green-500 hover:bg-green-600 text-black font-semibold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                             Book My Call
                         </button>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-black border-t border-white/5 pt-20 pb-10 text-sm">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-16">
<div className="col-span-1 md:col-span-2 pr-0 md:pr-8">
<a aria-label="Unbound Growth Home" className="flex items-center gap-3 text-white font-semibold tracking-tight text-lg mb-6 group" href="/">
<div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg shadow-green-500/5 relative overflow-hidden group-hover:bg-green-500/10 group-hover:border-green-500/20 transition-all duration-300">
<iconify-icon className="text-white group-hover:text-green-500 transition-colors duration-300" icon="solar:leaf-bold-duotone" strokeWidth="1.5" width="20"></iconify-icon>
</div>
                        Unbound Growth
                    </a>
<p className="text-zinc-500 leading-relaxed max-w-xs">
                        Helping sales professionals shift from pushy selling to buyer-focused conversations that build trust and create better outcomes.
                    </p>
</div>
<div className="flex flex-col gap-4 md:col-start-4">
<h4 className="text-white font-medium">Navigation</h4>
<a className="text-zinc-500 hover:text-green-400 transition-colors" href="#pain-points">Challenges</a>
<a className="text-zinc-500 hover:text-green-400 transition-colors" href="#why-carole">Why Carole</a>
<a className="text-zinc-500 hover:text-green-400 transition-colors" href="#process">Process</a>
<a className="text-zinc-500 hover:text-green-400 transition-colors" href="#about">About</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-white font-medium">Resources</h4>
<a className="text-zinc-500 hover:text-green-400 transition-colors" href="#">Buyer-Focused Training</a>
<a className="text-zinc-500 hover:text-green-400 transition-colors" href="#">Mindset Coaching</a>
<a className="text-zinc-500 hover:text-green-400 transition-colors" href="#">Leadership Programs</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-white font-medium">Legal</h4>
<a className="text-zinc-500 hover:text-green-400 transition-colors" href="#">Privacy Policy</a>
<a className="text-zinc-500 hover:text-green-400 transition-colors" href="#">Terms of Service</a>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col justify-center items-center gap-4">
<div className="text-zinc-600 text-xs text-center">
                    © 2024 Unbound Growth. All rights reserved.
                </div>
</div>
</div>
</footer>


    </>
  );
}
