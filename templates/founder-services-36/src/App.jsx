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
      

<nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="text-white tracking-tighter font-medium text-lg">ATLANTA<span className="text-zinc-500">BUILT</span></div>
<a className="text-xs font-medium text-white border border-white/10 px-4 py-2 rounded-full hover:bg-white/5 transition-colors" href="#podcast">
                Book Episode
            </a>
</div>
</nav>

<section className="pt-40 pb-24 md:pt-52 md:pb-32 px-6">
<div className="max-w-3xl mx-auto text-center">
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white tracking-tighter leading-[1.1] mb-8 text-glow">
                Atlanta-Built. <br className="hidden md:block"/>
                Operator-Tested. <br className="hidden md:block"/>
<span className="text-zinc-500">Performance-Led.</span>
</h1>
<p className="text-lg md:text-xl font-light text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-12">
                We work with founders at the top of their industry who don’t need motivation — they need <span className="text-zinc-200 font-normal">clarity, leverage, and execution that converts</span>.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm font-medium tracking-tight text-zinc-500">
<span className="flex items-center gap-2">
<iconify-icon icon="solar:layers-minimalistic-linear" width="16"></iconify-icon> Three ways to work together.
                </span>
<span className="hidden md:block w-1 h-1 bg-zinc-800 rounded-full"></span>
<span className="flex items-center gap-2 text-zinc-300">
<iconify-icon icon="solar:chat-round-line-linear" width="16"></iconify-icon> One way to start a conversation.
                </span>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5" id="podcast">
<div className="max-w-5xl mx-auto">
<div className="grid md:grid-cols-2 gap-16 items-start">

<div className="space-y-8 pt-4">
<div className="space-y-4">
<h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight">Start with a conversation.</h2>
<p className="font-light leading-relaxed">
                            Some founders don’t want to pitch. <br/>
                            They want to <span className="text-zinc-200">be seen, heard, and positioned</span>.
                        </p>
<p className="font-light leading-relaxed">
                            That’s why we offer a podcast entry point.
                            <br/><br/>
<span className="text-white font-normal">You can book a podcast episode directly.</span>
</p>
</div>
<ul className="space-y-3 font-light text-sm">
<li className="flex items-center gap-3 text-zinc-300">
<iconify-icon className="text-zinc-600 text-lg" icon="solar:close-circle-linear"></iconify-icon>
                            No application.
                        </li>
<li className="flex items-center gap-3 text-zinc-300">
<iconify-icon className="text-zinc-600 text-lg" icon="solar:close-circle-linear"></iconify-icon>
                            No sales call disguised as content.
                        </li>
<li className="flex items-center gap-3 text-white">
<iconify-icon className="text-white text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            Just a real conversation.
                        </li>
</ul>
</div>

<div className="bg-zinc-900/40 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-500 relative group overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="solar:microphone-3-linear" width="120"></iconify-icon>
</div>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-6 text-white/80">
<iconify-icon icon="solar:microphone-3-linear" width="20"></iconify-icon>
<span className="text-xs font-medium tracking-widest uppercase">Podcast Entry Point</span>
</div>
<h3 className="text-2xl font-medium text-white tracking-tight mb-2">Founder Podcast Episode</h3>
<p className="text-sm text-zinc-500 mb-8">Book directly via Calendly.</p>
<div className="space-y-6 text-sm mb-10">
<div>
<p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-3">Focus</p>
<p className="text-zinc-300 font-light">Your work. Your perspective. Your positioning as a founder or operator.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div>
<p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-3">What this is</p>
<ul className="space-y-2 font-light text-zinc-400">
<li className="flex items-start gap-2"><iconify-icon className="mt-0.5 shrink-0" icon="solar:check-read-linear"></iconify-icon> Professional recording</li>
<li className="flex items-start gap-2"><iconify-icon className="mt-0.5 shrink-0" icon="solar:check-read-linear"></iconify-icon> Articulate thinking</li>
<li className="flex items-start gap-2"><iconify-icon className="mt-0.5 shrink-0" icon="solar:check-read-linear"></iconify-icon> Peer introduction</li>
</ul>
</div>
<div>
<p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-3">What this is not</p>
<ul className="space-y-2 font-light text-zinc-400">
<li className="flex items-start gap-2"><iconify-icon className="mt-0.5 shrink-0" icon="solar:forbidden-circle-linear"></iconify-icon> A pitch session</li>
<li className="flex items-start gap-2"><iconify-icon className="mt-0.5 shrink-0" icon="solar:forbidden-circle-linear"></iconify-icon> A funnel</li>
<li className="flex items-start gap-2"><iconify-icon className="mt-0.5 shrink-0" icon="solar:forbidden-circle-linear"></iconify-icon> A setup call</li>
</ul>
</div>
</div>
</div>
<div className="p-4 bg-zinc-950/50 rounded-lg border border-white/5 mb-8">
<p className="text-xs text-zinc-400 font-light italic text-center">
                                "If there’s alignment after the episode, we’ll talk. If not, you leave with content and clarity."
                            </p>
</div>
<button className="w-full bg-white text-black font-medium py-3 rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
<iconify-icon icon="solar:calendar-add-linear" width="18"></iconify-icon>
                            Book Episode
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-zinc-900/20">
<div className="max-w-5xl mx-auto">
<div className="mb-16 md:text-center max-w-2xl mx-auto">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">How we work</h2>
<p className="font-light text-zinc-400">
                    We don’t start relationships by selling. We start them by <span className="text-white">listening</span>.
                    Everything downstream exists to support founders who already have momentum.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="flex flex-col p-6 rounded-xl border border-white/10 bg-[#0A0A0A] hover:border-white/20 transition-colors">
<div className="mb-6">
<iconify-icon className="text-white mb-4 text-2xl" icon="solar:lightbulb-linear"></iconify-icon>
<h3 className="text-lg font-medium text-white tracking-tight">Consulting</h3>
<p className="text-xs font-medium text-zinc-500 uppercase tracking-widest mt-1">Weekly Strategic</p>
</div>
<div className="mb-6 pb-6 border-b border-white/5">
<span className="text-3xl font-medium text-white tracking-tight">$450</span><span className="text-sm text-zinc-500"> / month</span>
<p className="text-xs text-zinc-500 mt-2 font-light">Four private sessions. Flat rate.</p>
</div>
<ul className="space-y-3 mb-8 flex-grow">
<li className="flex items-start gap-2 text-sm font-light"><iconify-icon className="mt-0.5 text-zinc-500" icon="solar:check-read-linear"></iconify-icon> Weekly 60-min calls</li>
<li className="flex items-start gap-2 text-sm font-light"><iconify-icon className="mt-0.5 text-zinc-500" icon="solar:check-read-linear"></iconify-icon> Offer &amp; positioning refinement</li>
<li className="flex items-start gap-2 text-sm font-light"><iconify-icon className="mt-0.5 text-zinc-500" icon="solar:check-read-linear"></iconify-icon> Messaging clarity</li>
<li className="flex items-start gap-2 text-sm font-light"><iconify-icon className="mt-0.5 text-zinc-500" icon="solar:check-read-linear"></iconify-icon> Strategic decision support</li>
</ul>
<div className="pt-4 mt-auto">
<p className="text-xs text-zinc-500 italic">For founders who need thinking pressure, not more information.</p>
</div>
</div>

<div className="flex flex-col p-6 rounded-xl border border-white/10 bg-[#0A0A0A] hover:border-white/20 transition-colors">
<div className="mb-6">
<iconify-icon className="text-white mb-4 text-2xl" icon="solar:videocamera-record-linear"></iconify-icon>
<h3 className="text-lg font-medium text-white tracking-tight">Reels</h3>
<p className="text-xs font-medium text-zinc-500 uppercase tracking-widest mt-1">Authority Package</p>
</div>
<div className="mb-6 pb-6 border-b border-white/5">
<span className="text-3xl font-medium text-white tracking-tight">$850</span>
<p className="text-xs text-zinc-500 mt-2 font-light">7 strategy-driven reels.</p>
</div>
<ul className="space-y-3 mb-8 flex-grow">
<li className="flex items-start gap-2 text-sm font-light"><iconify-icon className="mt-0.5 text-zinc-500" icon="solar:check-read-linear"></iconify-icon> Elevate perception</li>
<li className="flex items-start gap-2 text-sm font-light"><iconify-icon className="mt-0.5 text-zinc-500" icon="solar:check-read-linear"></iconify-icon> Clarify positioning</li>
<li className="flex items-start gap-2 text-sm font-light"><iconify-icon className="mt-0.5 text-zinc-500" icon="solar:check-read-linear"></iconify-icon> Make offer feel inevitable</li>
</ul>
<div className="pt-4 mt-auto">
<p className="text-xs text-zinc-500 italic">These are authority assets, not content filler.</p>
</div>
</div>

<div className="flex flex-col p-6 rounded-xl border border-white/10 bg-[#0A0A0A] hover:border-white/20 transition-colors">
<div className="mb-6">
<iconify-icon className="text-white mb-4 text-2xl" icon="solar:clapperboard-edit-linear"></iconify-icon>
<h3 className="text-lg font-medium text-white tracking-tight">Narrative</h3>
<p className="text-xs font-medium text-zinc-500 uppercase tracking-widest mt-1">Commercial Projects</p>
</div>
<div className="mb-6 pb-6 border-b border-white/5">
<span className="text-sm text-zinc-500 align-top mr-1">from</span><span className="text-3xl font-medium text-white tracking-tight">$2,000</span>
<p className="text-xs text-zinc-500 mt-2 font-light">Long-term positioning work.</p>
</div>
<ul className="space-y-3 mb-8 flex-grow">
<li className="flex items-start gap-2 text-sm font-light"><iconify-icon className="mt-0.5 text-zinc-500" icon="solar:check-read-linear"></iconify-icon> Brand narrative projects</li>
<li className="flex items-start gap-2 text-sm font-light"><iconify-icon className="mt-0.5 text-zinc-500" icon="solar:check-read-linear"></iconify-icon> Attention is rented</li>
<li className="flex items-start gap-2 text-sm font-light"><iconify-icon className="mt-0.5 text-zinc-500" icon="solar:check-read-linear"></iconify-icon> Perception compounds</li>
</ul>
<div className="pt-4 mt-auto">
<p className="text-xs text-zinc-500 italic">For founders who understand the asset value of perception.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5">
<div className="max-w-3xl mx-auto">
<h2 className="text-2xl font-medium text-white tracking-tight mb-8">How people move through this</h2>
<div className="relative pl-8 border-l border-white/10 space-y-12">
<div className="relative">
<span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full bg-zinc-900 border border-zinc-700"></span>
<p className="text-white font-medium mb-1">There is no forced path.</p>
<p className="text-sm font-light text-zinc-500">All paths are valid. None are pushed.</p>
</div>
<div className="relative">
<span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center">
<span className="h-1 w-1 rounded-full bg-zinc-500"></span>
</span>
<p className="text-zinc-300 font-light">Book a podcast episode and leave it there.</p>
</div>
<div className="relative">
<span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center">
<span className="h-1 w-1 rounded-full bg-zinc-500"></span>
</span>
<p className="text-zinc-300 font-light">Book an episode, then choose to work together.</p>
</div>
<div className="relative">
<span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center">
<span className="h-1 w-1 rounded-full bg-zinc-500"></span>
</span>
<p className="text-zinc-300 font-light">Skip the podcast and go straight into consulting or production.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-[#080808]">
<div className="max-w-xl mx-auto text-center">
<h2 className="text-3xl font-medium text-white tracking-tight mb-12">Start where it feels clean.</h2>
<div className="grid gap-4 text-left">
<a className="group flex items-center justify-between p-4 rounded-lg bg-zinc-900/50 border border-white/5 hover:border-white/20 hover:bg-zinc-900 transition-all" href="#">
<span className="text-zinc-400 group-hover:text-white transition-colors">Want conversation</span>
<span className="flex items-center gap-2 text-white font-medium">Book the podcast <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</a>
<a className="group flex items-center justify-between p-4 rounded-lg bg-zinc-900/50 border border-white/5 hover:border-white/20 hover:bg-zinc-900 transition-all" href="#">
<span className="text-zinc-400 group-hover:text-white transition-colors">Want clarity</span>
<span className="flex items-center gap-2 text-white font-medium">Consulting <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</a>
<a className="group flex items-center justify-between p-4 rounded-lg bg-zinc-900/50 border border-white/5 hover:border-white/20 hover:bg-zinc-900 transition-all" href="#">
<span className="text-zinc-400 group-hover:text-white transition-colors">Want presence</span>
<span className="flex items-center gap-2 text-white font-medium">Reels <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</a>
<a className="group flex items-center justify-between p-4 rounded-lg bg-zinc-900/50 border border-white/5 hover:border-white/20 hover:bg-zinc-900 transition-all" href="#">
<span className="text-zinc-400 group-hover:text-white transition-colors">Want positioning</span>
<span className="flex items-center gap-2 text-white font-medium">Narrative <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</a>
</div>
<div className="mt-16 pt-8 border-t border-white/5 flex justify-between items-center text-xs text-zinc-600">
<span>© 2024 Atlanta-Built</span>
<div className="flex gap-4">
<a className="hover:text-zinc-400 transition-colors" href="#">Twitter</a>
<a className="hover:text-zinc-400 transition-colors" href="#">LinkedIn</a>
</div>
</div>
</div>
</section>

    </>
  );
}
