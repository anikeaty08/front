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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/70 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-neutral-100 rounded-lg flex items-center justify-center text-black">
<span className="font-semibold tracking-tighter text-lg">S</span>
</div>
<span className="text-white font-medium tracking-tight">SalesOS</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#benefits">Benefits</a>
<a className="hover:text-white transition-colors" href="#results">Results</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</div>
<a className="hidden md:inline-flex h-9 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900 px-4 text-sm font-medium text-white transition-colors hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:ring-offset-black" href="#book">
                Book a Call
            </a>
</div>
</nav>

<section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-neutral-800/20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm mb-8">
<span className="flex h-2 w-2 rounded-full bg-green-500"></span>
                New Cohort Applications Open
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
                Stop Pitching. <br/>
<span className="text-neutral-500">Start Closing.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                The modern sales methodology for high-ticket offers. Scale your revenue without pushy tactics or burnout.
            </p>

<div className="relative w-full aspect-video bg-neutral-900 rounded-xl border border-white/10 shadow-[0_0_60px_-15px_rgba(255,255,255,0.05)] overflow-hidden group cursor-pointer mb-8">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-white text-3xl ml-1" icon="solar:play-bold"></iconify-icon>
</div>
</div>
<div className="absolute bottom-6 left-6 text-left">
<p className="text-white font-medium text-sm">VSL: The 3-Step Framework</p>
<p className="text-neutral-500 text-xs">12:45 • Watch now</p>
</div>
</div>

<p className="text-sm text-neutral-500 mb-8 max-w-lg mx-auto">
                Watch the video above to see exactly how we helped 50+ organizations add $1M+ in ARR within 90 days.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4" id="book">
<button className="h-12 px-8 rounded-lg bg-white text-black font-medium hover:bg-neutral-200 transition-colors w-full sm:w-auto">
                    Book a Strategy Call
                </button>
<div className="flex items-center gap-[-8px]">
<div className="flex -space-x-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-black flex items-center justify-center text-xs overflow-hidden"><img alt="User" src="https://i.pravatar.cc/100?img=33"/></div>
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-black flex items-center justify-center text-xs overflow-hidden"><img alt="User" src="https://i.pravatar.cc/100?img=47"/></div>
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-black flex items-center justify-center text-xs overflow-hidden"><img alt="User" src="https://i.pravatar.cc/100?img=12"/></div>
</div>
<span className="text-xs text-neutral-500 ml-4">Limited spots available</span>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-neutral-950/50">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:text-center max-w-2xl md:mx-auto">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Why Your Process is Failing</h2>
<p className="text-neutral-400">Most sales teams struggle with the same invisible bottlenecks. Recognize any of these?</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400 mb-6">
<iconify-icon icon="solar:danger-triangle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Ghosted After Proposal</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Sending endless proposals only to hear silence. You're giving away value before establishing commitment.</p>
</div>

<div className="p-8 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 mb-6">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Long Sales Cycles</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Deals dragging on for months. Indecision is killing your pipeline velocity and morale.</p>
</div>

<div className="p-8 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-400 mb-6">
<iconify-icon icon="solar:wallet-money-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Race to the Bottom</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Constantly fighting on price instead of value. You're treated like a commodity, not a partner.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="benefits">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Re-engineer Your Revenue</h2>
<p className="text-neutral-400">Our system isn't just about scripts. It's about psychology, structure, and predictability.</p>
</div>
<a className="text-white text-sm font-medium hover:text-neutral-300 flex items-center gap-1 group" href="#book">
                    See the roadmap <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-6 rounded-xl border border-white/5 bg-black hover:bg-neutral-900/50 transition-all duration-300">
<div className="mb-4 text-white group-hover:text-blue-400 transition-colors">
<iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Predictable Pipeline</h3>
<p className="text-sm text-neutral-500">Turn your sporadic leads into a mathematical certainty with our qualifying framework.</p>
</div>

<div className="group p-6 rounded-xl border border-white/5 bg-black hover:bg-neutral-900/50 transition-all duration-300">
<div className="mb-4 text-white group-hover:text-purple-400 transition-colors">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Objection Handling</h3>
<p className="text-sm text-neutral-500">Neutralize resistance before it happens using advanced tonality and pacing.</p>
</div>

<div className="group p-6 rounded-xl border border-white/5 bg-black hover:bg-neutral-900/50 transition-all duration-300">
<div className="mb-4 text-white group-hover:text-emerald-400 transition-colors">
<iconify-icon icon="solar:verified-check-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Higher Close Rates</h3>
<p className="text-sm text-neutral-500">Move from 15% to 40%+ closing rates by strictly adhering to the 'Gap Selling' method.</p>
</div>

<div className="group p-6 rounded-xl border border-white/5 bg-black hover:bg-neutral-900/50 transition-all duration-300">
<div className="mb-4 text-white group-hover:text-pink-400 transition-colors">
<iconify-icon icon="solar:clipboard-check-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Repeatable Scripts</h3>
<p className="text-sm text-neutral-500">Access battle-tested scripts that work across industries, from SaaS to Consulting.</p>
</div>

<div className="group p-6 rounded-xl border border-white/5 bg-black hover:bg-neutral-900/50 transition-all duration-300">
<div className="mb-4 text-white group-hover:text-amber-400 transition-colors">
<iconify-icon icon="solar:crown-star-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Authority Positioning</h3>
<p className="text-sm text-neutral-500">Position yourself as the prize, flipping the dynamic so prospects sell themselves to you.</p>
</div>

<div className="group p-6 rounded-xl border border-white/5 bg-black hover:bg-neutral-900/50 transition-all duration-300">
<div className="mb-4 text-white group-hover:text-cyan-400 transition-colors">
<iconify-icon icon="solar:headphones-round-sound-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Call Review Audits</h3>
<p className="text-sm text-neutral-500">Get granular feedback on your recorded calls to identify micro-mistakes.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-neutral-950">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-16 text-center">Inside the Program</h2>
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="space-y-8">

<div className="flex gap-4">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-white">
<iconify-icon icon="solar:monitor-camera-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-white">Live Roleplay Sessions</h3>
<p className="text-sm text-neutral-400 mt-1 leading-relaxed">Weekly live Zoom calls where we simulate tough prospects. You fail here so you don't fail on the real call.</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-white">
<iconify-icon icon="solar:folder-with-files-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-white">The Asset Library</h3>
<p className="text-sm text-neutral-400 mt-1 leading-relaxed">Over 50+ templates including cold email sequences, discovery decks, and proposal calculators.</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-white">
<iconify-icon icon="solar:chat-round-line-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-white">Private Slack Community</h3>
<p className="text-sm text-neutral-400 mt-1 leading-relaxed">Network with top 1% closers. Share wins, ask for advice, and get instant feedback 24/7.</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-white">
<iconify-icon icon="solar:diploma-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-white">Certification</h3>
<p className="text-sm text-neutral-400 mt-1 leading-relaxed">Become a certified partner upon completion, opening doors to placement opportunities.</p>
</div>
</div>
</div>

<div className="relative h-full min-h-[400px] rounded-2xl bg-neutral-900 border border-white/5 overflow-hidden flex flex-col">
<div className="p-4 border-b border-white/5 flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20"></div>
</div>
<div className="p-8 flex-1 flex flex-col justify-center items-center">
<div className="w-full max-w-sm space-y-4">
<div className="h-2 w-2/3 bg-neutral-800 rounded"></div>
<div className="h-2 w-full bg-neutral-800 rounded"></div>
<div className="h-2 w-5/6 bg-neutral-800 rounded"></div>
<div className="flex gap-4 mt-8">
<div className="h-32 w-1/2 bg-neutral-800 rounded-lg border border-white/5"></div>
<div className="h-32 w-1/2 bg-neutral-800 rounded-lg border border-white/5"></div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
</div>
</div>
</div>
</section>

<section className="py-24" id="results">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Client Results</h2>
<p className="text-neutral-400 mb-12 max-w-xl">Don't take our word for it. Hear from sales professionals who transformed their careers.</p>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="aspect-video bg-neutral-900 rounded-xl border border-white/5 relative group cursor-pointer overflow-hidden">
<img alt="Testimonial" className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1632&amp;q=80"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:play-linear" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-4 left-4">
<p className="text-white text-sm font-medium">Sarah Jenkins</p>
<p className="text-neutral-400 text-xs">SaaS AE • +200% Quota</p>
</div>
</div>

<div className="aspect-video bg-neutral-900 rounded-xl border border-white/5 relative group cursor-pointer overflow-hidden">
<img alt="Testimonial" className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1588&amp;q=80"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:play-linear" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-4 left-4">
<p className="text-white text-sm font-medium">Marcus Dell</p>
<p className="text-neutral-400 text-xs">Agency Owner • $50k/mo</p>
</div>
</div>

<div className="aspect-video bg-neutral-900 rounded-xl border border-white/5 relative group cursor-pointer overflow-hidden">
<img alt="Testimonial" className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1587&amp;q=80"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:play-linear" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-4 left-4">
<p className="text-white text-sm font-medium">David Ross</p>
<p className="text-neutral-400 text-xs">Real Estate • Top 1%</p>
</div>
</div>

<div className="aspect-video bg-neutral-900 rounded-xl border border-white/5 relative group cursor-pointer overflow-hidden">
<img alt="Testimonial" className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1587&amp;q=80"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:play-linear" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-4 left-4">
<p className="text-white text-sm font-medium">Elena Wu</p>
<p className="text-neutral-400 text-xs">Consultant • Closed $100k</p>
</div>
</div>

<div className="aspect-video bg-neutral-900 rounded-xl border border-white/5 relative group cursor-pointer overflow-hidden">
<img alt="Testimonial" className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1587&amp;q=80"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:play-linear" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-4 left-4">
<p className="text-white text-sm font-medium">Tom Baker</p>
<p className="text-neutral-400 text-xs">Startup Founder</p>
</div>
</div>

<div className="aspect-video bg-neutral-900 rounded-xl border border-white/5 relative group cursor-pointer overflow-hidden">
<img alt="Testimonial" className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity" src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1587&amp;q=80"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:play-linear" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-4 left-4">
<p className="text-white text-sm font-medium">Rachel Green</p>
<p className="text-neutral-400 text-xs">Enterprise Sales</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-12 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">

<details className="group bg-neutral-900/30 border border-white/5 rounded-xl overflow-hidden open:bg-neutral-900/50 transition-colors">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium select-none">
<span>Is this suitable for beginners?</span>
<iconify-icon className="text-neutral-500 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-400 leading-relaxed">
                        Absolutely. While advanced, we build your foundation from the ground up. If you've never sold before, you have the advantage of not having to unlearn bad habits.
                    </div>
</details>

<details className="group bg-neutral-900/30 border border-white/5 rounded-xl overflow-hidden open:bg-neutral-900/50 transition-colors">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium select-none">
<span>How much time is required weekly?</span>
<iconify-icon className="text-neutral-500 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-400 leading-relaxed">
                        We recommend setting aside 3-5 hours per week. This includes watching the core modules and attending one live roleplay session.
                    </div>
</details>

<details className="group bg-neutral-900/30 border border-white/5 rounded-xl overflow-hidden open:bg-neutral-900/50 transition-colors">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium select-none">
<span>Do you provide leads?</span>
<iconify-icon className="text-neutral-500 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-400 leading-relaxed">
                        We teach you how to generate your own leads and build a self-sustaining pipeline. However, we do have a partner network that hires our certified graduates.
                    </div>
</details>

<details className="group bg-neutral-900/30 border border-white/5 rounded-xl overflow-hidden open:bg-neutral-900/50 transition-colors">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium select-none">
<span>What is the refund policy?</span>
<iconify-icon className="text-neutral-500 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-400 leading-relaxed">
                        We offer a conditional 14-day money-back guarantee. If you do the work, show up to calls, and don't see value, we'll refund you.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent pointer-events-none"></div>
<div className="max-w-2xl mx-auto px-6 relative z-10">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">Ready to dominate your market?</h2>
<p className="text-neutral-400 mb-8">Join 2,000+ sales professionals who have upgraded their operating system.</p>
<button className="h-12 px-8 rounded-lg bg-white text-black font-medium hover:bg-neutral-200 transition-colors shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
                Book a Strategy Call
            </button>
<p className="mt-6 text-xs text-neutral-600">No credit card required for booking.</p>
</div>
</section>

<footer className="border-t border-white/5 bg-black py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-neutral-100 rounded flex items-center justify-center text-black">
<span className="font-semibold tracking-tighter text-xs">S</span>
</div>
<span className="text-neutral-400 font-medium text-sm tracking-tight">SalesOS</span>
</div>
<div className="flex gap-6 text-sm text-neutral-500">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">YouTube</a>
</div>
<div className="text-xs text-neutral-600">
                © 2024 SalesOS Inc. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
