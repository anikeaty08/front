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
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-black/80 backdrop-blur-md border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex flex-col justify-center">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-white text-black flex items-center justify-center rounded-sm font-black">
<iconify-icon icon="solar:microphone-3-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-white font-black tracking-tighter text-xl">RDR TALKS</span>
</div>
<span className="text-[10px] text-slate-400 font-medium tracking-wide uppercase mt-0.5 ml-1">Creating Success One Content at a Time</span>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-bold text-black bg-white px-5 py-2.5 rounded-full hover:bg-slate-200 transition-colors" href="#apply">
                Apply as a Guest
                <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden">

<div className="absolute inset-0 z-0 pointer-events-none">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-900/20 blur-[120px] rounded-full"></div>
<div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-900/10 blur-[100px] rounded-full"></div>

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
</div>

<div className="relative z-20 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">

<h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.95] mb-8 uppercase">
                Turn Your Story <br/>
                Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Credibility.</span> <br/>
                Turn Credibility <br/>
                Into <span className="text-white relative inline-block">
                    Influence.
                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-purple-600" preserveaspectratio="none" viewbox="0 0 100 10">
<path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="3"></path>
</svg>
</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 font-medium leading-relaxed">
                RDR TALKS is a premium, strategy-driven talk show for Filipino entrepreneurs, leaders, and creators who want more than exposure — they want authority, trust, and long-term impact.
            </p>

<a className="group relative inline-flex items-center justify-center bg-white hover:bg-slate-100 text-black text-lg font-bold px-10 py-5 rounded-lg transition-all hover:-translate-y-1 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] uppercase tracking-tight" href="#apply">
                👉 Apply as a Guest
            </a>
</div>
</header>

<div className="relative py-12 bg-neutral-900/50 border-y border-white/5 overflow-hidden z-30">
<div className="flex overflow-hidden whitespace-nowrap">
<div className="flex animate-marquee text-white/20 font-black text-6xl uppercase tracking-tighter">
<span className="mx-8">Authority</span>
<span className="mx-8">Trust</span>
<span className="mx-8">Impact</span>
<span className="mx-8">Credibility</span>
<span className="mx-8">Influence</span>
<span className="mx-8">Legacy</span>
<span className="mx-8">Positioning</span>

<span className="mx-8">Authority</span>
<span className="mx-8">Trust</span>
<span className="mx-8">Impact</span>
<span className="mx-8">Credibility</span>
<span className="mx-8">Influence</span>
<span className="mx-8">Legacy</span>
<span className="mx-8">Positioning</span>
</div>
</div>
</div>

<section className="py-24 md:py-32 bg-black border-b border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-start">
<div>
<span className="text-purple-400 font-bold tracking-widest uppercase text-sm mb-4 block">The Platform</span>
<h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-8 leading-tight">
                        What RDR TALKS Is
                    </h2>
<p className="text-2xl text-slate-200 font-medium mb-8">
                        RDR TALKS is not a casual interview show.
                    </p>
<div className="p-8 bg-white/5 border border-white/10 rounded-2xl relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<p className="text-slate-300 text-lg relative z-10 font-medium italic">
                            “Every episode is built to answer one strategic question: <br/>
<span className="text-white font-bold not-italic text-xl block mt-4 border-l-4 border-purple-500 pl-4">Why should people trust you?”</span>
</p>
</div>
</div>
<div className="space-y-8">
<p className="text-lg text-slate-400 font-medium">It is a positioning platform designed to:</p>
<div className="grid gap-4">
<div className="flex gap-4 items-start p-4 rounded-xl hover:bg-white/5 transition-colors">
<div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-white">
<iconify-icon icon="solar:shield-star-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-white font-bold text-lg">Establish Authority</h3>
<p className="text-slate-400 text-sm mt-1">Establish personal and professional authority within your niche.</p>
</div>
</div>
<div className="flex gap-4 items-start p-4 rounded-xl hover:bg-white/5 transition-colors">
<div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-white">
<iconify-icon icon="solar:chat-line-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-white font-bold text-lg">Strategic Storytelling</h3>
<p className="text-slate-400 text-sm mt-1">Tell your story with clarity, structure, and intent.</p>
</div>
</div>
<div className="flex gap-4 items-start p-4 rounded-xl hover:bg-white/5 transition-colors">
<div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-white">
<iconify-icon icon="solar:refresh-circle-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-white font-bold text-lg">Evergreen Assets</h3>
<p className="text-slate-400 text-sm mt-1">Create evergreen content you can reuse across platforms.</p>
</div>
</div>
<div className="flex gap-4 items-start p-4 rounded-xl hover:bg-white/5 transition-colors">
<div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-white">
<iconify-icon icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-white font-bold text-lg">Strengthen Credibility</h3>
<p className="text-slate-400 text-sm mt-1">Build trust with clients, partners, and audiences.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505]">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6">Who This Is For</h2>
<p className="text-slate-400 text-lg">If you are building reputation, influence, or legacy—this platform is for you.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-neutral-900 border border-white/10 p-8 rounded-2xl text-center group hover:border-purple-500/50 transition-colors">
<div className="w-14 h-14 mx-auto bg-purple-500/10 text-purple-400 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:rocket-2-linear" width="30"></iconify-icon>
</div>
<h3 className="text-white font-bold text-lg mb-2">Entrepreneurs &amp; Founders</h3>
</div>

<div className="bg-neutral-900 border border-white/10 p-8 rounded-2xl text-center group hover:border-purple-500/50 transition-colors">
<div className="w-14 h-14 mx-auto bg-purple-500/10 text-purple-400 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:case-round-linear" width="30"></iconify-icon>
</div>
<h3 className="text-white font-bold text-lg mb-2">CEOs, Executives, &amp; Decision-Makers</h3>
</div>

<div className="bg-neutral-900 border border-white/10 p-8 rounded-2xl text-center group hover:border-purple-500/50 transition-colors">
<div className="w-14 h-14 mx-auto bg-purple-500/10 text-purple-400 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:medal-star-linear" width="30"></iconify-icon>
</div>
<h3 className="text-white font-bold text-lg mb-2">Industry Experts &amp; Professionals</h3>
</div>

<div className="bg-neutral-900 border border-white/10 p-8 rounded-2xl text-center group hover:border-purple-500/50 transition-colors">
<div className="w-14 h-14 mx-auto bg-purple-500/10 text-purple-400 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:user-speak-linear" width="30"></iconify-icon>
</div>
<h3 className="text-white font-bold text-lg mb-2">Creators Building Personal Brands</h3>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black border-y border-white/5 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
<div className="lg:col-span-5">
<h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-8">
                        Why RDR TALKS <br/> Is Different
                    </h2>
<div className="space-y-6">
<div className="p-6 bg-red-500/10 border border-red-500/20 rounded-xl">
<p className="text-red-300 font-bold uppercase text-xs tracking-wider mb-2">The Norm</p>
<p className="text-white text-lg font-medium">Most shows focus on conversation.</p>
</div>
<div className="p-6 bg-green-500/10 border border-green-500/20 rounded-xl">
<p className="text-green-300 font-bold uppercase text-xs tracking-wider mb-2">The RDR Way</p>
<p className="text-white text-xl font-bold">RDR TALKS focuses on positioning.</p>
</div>
</div>
<p className="text-slate-400 mt-8 font-medium italic">
                        "This is content you can leverage, not just post."
                    </p>
</div>
<div className="lg:col-span-7">
<div className="grid gap-6">

<div className="flex items-center gap-6 p-6 bg-neutral-900/50 rounded-2xl border border-white/5">
<div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shrink-0">
<iconify-icon icon="solar:book-2-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-white font-bold text-lg">Authority-first storytelling</h4>
<p className="text-slate-400 text-sm">(not surface-level chika)</p>
</div>
</div>

<div className="flex items-center gap-6 p-6 bg-neutral-900/50 rounded-2xl border border-white/5">
<div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shrink-0">
<iconify-icon icon="solar:compass-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-white font-bold text-lg">Guided conversations</h4>
<p className="text-slate-400 text-sm">Highlights expertise and insight.</p>
</div>
</div>

<div className="flex items-center gap-6 p-6 bg-neutral-900/50 rounded-2xl border border-white/5">
<div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shrink-0">
<iconify-icon icon="solar:videocamera-record-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-white font-bold text-lg">Studio-grade production</h4>
<p className="text-slate-400 text-sm">For credibility and brand safety.</p>
</div>
</div>

<div className="flex items-center gap-6 p-6 bg-neutral-900/50 rounded-2xl border border-white/5">
<div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shrink-0">
<iconify-icon icon="solar:layers-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-white font-bold text-lg">Multi-platform release</h4>
<p className="text-slate-400 text-sm">Long-form + short-form clips.</p>
</div>
</div>

<div className="flex items-center gap-6 p-6 bg-neutral-900/50 rounded-2xl border border-white/5">
<div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shrink-0">
<iconify-icon icon="solar:infinite-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-white font-bold text-lg">Evergreen value</h4>
<p className="text-slate-400 text-sm">Content that works long after release.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505]">
<div className="max-w-4xl mx-auto px-6">
<div className="bg-gradient-to-b from-neutral-900 to-black border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 blur-[80px] rounded-full pointer-events-none"></div>
<h2 className="text-3xl md:text-4xl font-black text-white mb-8 text-center">What You Get as a Guest</h2>
<p className="text-center text-slate-400 mb-12">Each approved guest receives:</p>
<div className="grid md:grid-cols-2 gap-8 mb-12">
<ul className="space-y-4">
<li className="flex items-start gap-3 text-slate-200">
<iconify-icon className="text-purple-500 mt-1 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span className="font-medium">One full-length RDR TALKS episode</span>
</li>
<li className="flex items-start gap-3 text-slate-200">
<iconify-icon className="text-purple-500 mt-1 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span className="font-medium">Short-form clips (reels / shorts / highlights)</span>
</li>
<li className="flex items-start gap-3 text-slate-200">
<iconify-icon className="text-purple-500 mt-1 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span className="font-medium">Professionally guided hosting and narrative flow</span>
</li>
</ul>
<div>
<p className="text-white font-bold mb-4 flex items-center gap-2">
<iconify-icon icon="solar:folder-with-files-linear"></iconify-icon> Content assets usable for:
                        </p>
<ul className="space-y-2 pl-6 border-l border-white/10">
<li className="text-slate-400 text-sm">Marketing &amp; ads</li>
<li className="text-slate-400 text-sm">PR &amp; credibility decks</li>
<li className="text-slate-400 text-sm">Speaking engagements</li>
<li className="text-slate-400 text-sm">Social media authority building</li>
</ul>
</div>
</div>
<div className="bg-white/5 rounded-xl p-4 text-center">
<p className="text-sm text-slate-300">
<iconify-icon className="inline-block relative top-[2px] mr-1" icon="solar:star-linear"></iconify-icon>
                        Optional upgrades available for amplification and strategic reuse.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-5xl font-black text-white text-center mb-16">How It Works</h2>
<div className="relative">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">

<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-black border-2 border-white text-white flex items-center justify-center font-bold mb-4 text-xl">1</div>
<h3 className="text-white font-bold mb-1">Apply</h3>
<p className="text-slate-500 text-sm">As a Guest</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-black border-2 border-white/30 text-white flex items-center justify-center font-bold mb-4 text-xl">2</div>
<h3 className="text-white font-bold mb-1">Curation</h3>
<p className="text-slate-500 text-sm">&amp; Alignment Call</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-black border-2 border-white/30 text-white flex items-center justify-center font-bold mb-4 text-xl">3</div>
<h3 className="text-white font-bold mb-1">Recording</h3>
<p className="text-slate-500 text-sm">Day</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-black border-2 border-white/30 text-white flex items-center justify-center font-bold mb-4 text-xl">4</div>
<h3 className="text-white font-bold mb-1">Production</h3>
<p className="text-slate-500 text-sm">Post-processing</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-black border-2 border-white/30 text-white flex items-center justify-center font-bold mb-4 text-xl">5</div>
<h3 className="text-white font-bold mb-1">Release</h3>
<p className="text-slate-500 text-sm">&amp; Distribution</p>
</div>
</div>
</div>
<p className="text-center text-slate-500 mt-12 text-sm uppercase tracking-wide">Slots are intentionally limited to protect quality and positioning.</p>
</div>
</section>

<section className="py-20 bg-neutral-900 border-y border-white/5 text-center">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">Why RDR Business Solutions</h2>
<p className="text-slate-400 mb-8 leading-relaxed">
                Produced by RDR Business Solutions, known for building shows with business intent, turning stories into authority and opportunity, and working with founders, executives, and public figures.
            </p>
<p className="text-3xl md:text-4xl font-black text-white tracking-tight">
                "We don’t just create content. <br/>
<span className="text-purple-500">We engineer influence.</span>"
            </p>
</div>
</section>

<footer className="py-24 relative text-center bg-black overflow-hidden" id="apply">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black opacity-50 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-8 leading-tight">
                If your story deserves to be taken seriously, <br/>
                it deserves to be told properly.
            </h2>
<a className="inline-flex items-center justify-center bg-white hover:bg-slate-200 text-black text-xl font-bold px-12 py-6 rounded-lg transition-transform hover:-translate-y-1 uppercase tracking-tight mb-12" href="#">
                👉 Apply as a Guest
            </a>
<p className="text-slate-600 text-xs uppercase tracking-widest">© 2024 RDR Talks. All rights reserved.</p>
</div>
</footer>

    </>
  );
}
