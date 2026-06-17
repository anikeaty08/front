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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'Helvetica Now', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
obsidian: '#0B0D10',
paper: '#F2F2F2',
accent: '#F60261',
charcoal: '#1A1D21',
border: '#2A2E35'
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
},
animation: {
'marquee': 'marquee 40s linear infinite',
'fade-up': 'fadeUp 0.8s ease-out forwards',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-50%)' },
},
fadeUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}

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
      

<div className="fixed inset-0 grid-bg pointer-events-none z-0"></div>
<div className="relative z-10 flex flex-col lg:flex-row min-h-screen max-w-[1800px] mx-auto border-r border-border border-l">

<aside className="lg:w-72 lg:fixed lg:h-screen flex flex-col z-50 bg-obsidian/95 backdrop-blur-md border-b lg:border-b-0 lg:border-r border-border p-8 justify-between">
<div>
<div className="mb-12">
<a className="block text-xl tracking-tighter font-semibold group uppercase" href="#">
                        Capital<span className="text-accent">Digital</span>
</a>
<p className="text-[10px] text-neutral-500 font-mono mt-2 uppercase tracking-widest">Visual Equity for SaaS</p>
</div>
<nav className="space-y-1">
<a className="block py-2 text-sm text-neutral-400 hover:text-white hover:translate-x-1 transition-all uppercase tracking-wide" href="#hero">Thesis</a>
<a className="block py-2 text-sm text-neutral-400 hover:text-white hover:translate-x-1 transition-all uppercase tracking-wide" href="#work">Work</a>
<a className="block py-2 text-sm text-neutral-400 hover:text-white hover:translate-x-1 transition-all uppercase tracking-wide" href="#services">Services</a>
<a className="block py-2 text-sm text-neutral-400 hover:text-white hover:translate-x-1 transition-all uppercase tracking-wide" href="#pricing">Retainer</a>
</nav>
</div>
<div className="hidden lg:block space-y-4">
<div className="h-px w-full bg-border"></div>
<div className="text-xs text-neutral-500 font-mono">
<p>Status: <span className="text-emerald-500">Accepting 2 Clients</span></p>
<p className="mt-2">NYC / LDN / ZRH</p>
</div>
</div>
</aside>

<main className="flex-1 lg:ml-72 flex flex-col">

<section className="min-h-[90vh] flex flex-col justify-center px-6 lg:px-16 pt-20 lg:pt-0 border-b border-border relative overflow-hidden" id="hero">
<div className="max-w-4xl z-10 animate-fade-up">
<h1 className="text-5xl lg:text-7xl xl:text-8xl font-medium leading-[0.9] tracking-tighter mb-8 text-white">
                        Your brand is<br/>not design.<br/>
<span className="text-neutral-500">It’s an asset.</span>
</h1>
<p className="text-lg lg:text-xl text-neutral-400 max-w-2xl leading-relaxed mb-10 font-light">
                        We build <span className="text-white border-b border-accent/50 pb-0.5">Visual Equity</span> for SaaS and consulting firms that need their digital presence to justify premium pricing, accelerate trust, and close deals before the call.
                    </p>
<button className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white transition-all duration-200 bg-accent hover:bg-white hover:text-obsidian focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-obsidian focus:ring-accent rounded-sm uppercase tracking-wider">
<span className="mr-2">Book a strategy call</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</button>
</div>

<div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[80%] opacity-20 pointer-events-none hidden lg:block">
<div className="w-full h-full border border-neutral-700 bg-neutral-900/50 transform skew-y-12 translate-x-20 rounded-sm"></div>
<div className="absolute top-10 left-10 w-full h-full border border-neutral-600 bg-neutral-800/50 transform skew-y-12 translate-x-20 rounded-sm"></div>
</div>
</section>

<section className="py-20 border-b border-border overflow-hidden" id="work">
<div className="px-6 lg:px-16 mb-12 flex justify-between items-end">
<h2 className="text-3xl lg:text-4xl tracking-tighter">Design that signals <br/><span className="text-neutral-500">value instantly.</span></h2>
<div className="flex gap-2">
<button className="w-12 h-12 border border-border flex items-center justify-center hover:bg-white hover:text-obsidian transition-colors rounded-sm" onclick="document.getElementById('gallery-scroll').scrollBy({left: -400, behavior: 'smooth'})">
<iconify-icon icon="lucide:arrow-left" width="20"></iconify-icon>
</button>
<button className="w-12 h-12 border border-border flex items-center justify-center hover:bg-white hover:text-obsidian transition-colors rounded-sm" onclick="document.getElementById('gallery-scroll').scrollBy({left: 400, behavior: 'smooth'})">
<iconify-icon icon="lucide:arrow-right" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="flex gap-8 overflow-x-auto px-6 lg:px-16 pb-12 no-scrollbar scroll-smooth" id="gallery-scroll">

<div className="min-w-[400px] lg:min-w-[600px] group">
<div className="aspect-[16/10] bg-charcoal border border-border group-hover:border-accent transition-colors relative overflow-hidden rounded-sm mb-4">
<div className="absolute inset-4 bg-obsidian border border-neutral-800 flex items-center justify-center">
<div className="text-center">
<iconify-icon className="text-neutral-700 mb-4" icon="lucide:layout" width="48"></iconify-icon>
<p className="text-neutral-500 font-mono text-xs uppercase">SaaS Homepage Interface</p>
</div>
</div>
</div>
<p className="text-sm font-mono text-neutral-400">01 / SaaS Marketing Site</p>
<h3 className="text-lg font-medium mt-1">Engineered for immediate trust</h3>
</div>

<div className="min-w-[400px] lg:min-w-[600px] group">
<div className="aspect-[16/10] bg-charcoal border border-border group-hover:border-accent transition-colors relative overflow-hidden rounded-sm mb-4">
<div className="absolute inset-4 bg-obsidian border border-neutral-800 flex items-center justify-center">
<div className="text-center">
<iconify-icon className="text-neutral-700 mb-4" icon="lucide:credit-card" width="48"></iconify-icon>
<p className="text-neutral-500 font-mono text-xs uppercase">Pricing Tier Architecture</p>
</div>
</div>
</div>
<p className="text-sm font-mono text-neutral-400">02 / Pricing Architecture</p>
<h3 className="text-lg font-medium mt-1">Justifying premium tiers</h3>
</div>

<div className="min-w-[400px] lg:min-w-[600px] group">
<div className="aspect-[16/10] bg-charcoal border border-border group-hover:border-accent transition-colors relative overflow-hidden rounded-sm mb-4">
<div className="absolute inset-4 bg-obsidian border border-neutral-800 flex items-center justify-center">
<div className="text-center">
<iconify-icon className="text-neutral-700 mb-4" icon="lucide:file-text" width="48"></iconify-icon>
<p className="text-neutral-500 font-mono text-xs uppercase">Consultant One-Pager</p>
</div>
</div>
</div>
<p className="text-sm font-mono text-neutral-400">03 / Authority One-Pagers</p>
<h3 className="text-lg font-medium mt-1">High-status positioning</h3>
</div>
</div>
</section>

<section className="grid lg:grid-cols-2 border-b border-border">

<div className="p-8 lg:p-20 border-b lg:border-b-0 lg:border-r border-border">
<div className="inline-block px-3 py-1 border border-accent/30 text-accent text-xs uppercase tracking-widest mb-8">The Gap</div>
<h3 className="text-3xl lg:text-4xl font-medium tracking-tighter mb-6">Strong businesses lose deals because of perception.</h3>
<p className="text-neutral-400 leading-relaxed mb-8">
                        When your digital presence looks generic, the market assumes you are. That hesitation shows up as price resistance, longer sales cycles, and constant justification.
                    </p>
<div className="bg-charcoal p-6 border border-border rounded-sm">
<div className="flex items-center gap-4 text-sm text-neutral-400 font-mono">
<div className="flex-1 border-r border-border pr-4">
<span className="block text-white mb-1">Generic Site</span>
<span className="text-red-500">Low Trust Signal</span>
</div>
<div className="flex-1 pl-4">
<span className="block text-white mb-1">High Status</span>
<span className="text-emerald-500">Price Elasticity</span>
</div>
</div>
</div>
</div>

<div className="p-8 lg:p-20 bg-neutral-900/30">
<div className="inline-block px-3 py-1 border border-neutral-700 text-neutral-400 text-xs uppercase tracking-widest mb-8">The Fix</div>
<h3 className="text-3xl lg:text-4xl font-medium tracking-tighter mb-6">Visual Equity fixes what marketing can’t.</h3>
<p className="text-neutral-400 leading-relaxed mb-8">
                        We don’t redesign aesthetics. We engineer belief. Every page is built to remove doubt, increase perceived value, and make your pricing feel obvious.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-accent mt-1" icon="lucide:check"></iconify-icon>
<span className="text-neutral-300">Design for valuation, not just decoration</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-accent mt-1" icon="lucide:check"></iconify-icon>
<span className="text-neutral-300">Information hierarchy that controls the narrative</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-accent mt-1" icon="lucide:check"></iconify-icon>
<span className="text-neutral-300">Assets that pre-handle sales objections</span>
</li>
</ul>
</div>
</section>

<section className="py-16 border-b border-border bg-charcoal/20">
<div className="px-6 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-10">
<div className="max-w-md">
<h4 className="text-xl font-medium mb-2">Built on valuation logic.</h4>
<p className="text-sm text-neutral-500 font-mono">Not trending dribbble shots.</p>
</div>
<div className="flex flex-wrap gap-8 opacity-40 grayscale">

<iconify-icon className="text-white" icon="simple-icons:stripe" width="60"></iconify-icon>
<iconify-icon className="text-white" icon="simple-icons:vercel" width="60"></iconify-icon>
<iconify-icon className="text-white" icon="simple-icons:linear" width="60"></iconify-icon>
<iconify-icon className="text-white" icon="simple-icons:auth0" width="60"></iconify-icon>
</div>
<div className="border-l border-border pl-8 italic text-neutral-400 max-w-xs text-sm">
                        "Perception determines valuation. If you look expensive, you are expensive."
                        <span className="block mt-2 text-white not-italic font-mono text-xs">— Kevin O’Leary</span>
</div>
</div>
</section>

<section className="py-20 border-b border-border" id="services">
<div className="px-6 lg:px-16 mb-16">
<h2 className="text-3xl lg:text-4xl tracking-tighter mb-4">What we design</h2>
<p className="text-neutral-500 max-w-xl">If it affects trust, perception, or conversion — it belongs here. We specialize in high-stakes digital touchpoints.</p>
</div>
<div className="grid grid-cols-2 lg:grid-cols-4 border-t border-border">

<div className="p-8 border-r border-b border-border hover:bg-charcoal transition-colors group">
<iconify-icon className="text-neutral-600 group-hover:text-accent mb-4 text-2xl transition-colors" icon="lucide:monitor"></iconify-icon>
<h4 className="text-sm font-medium uppercase tracking-wide">SaaS Websites</h4>
</div>
<div className="p-8 border-r border-b border-border hover:bg-charcoal transition-colors group">
<iconify-icon className="text-neutral-600 group-hover:text-accent mb-4 text-2xl transition-colors" icon="lucide:layout-template"></iconify-icon>
<h4 className="text-sm font-medium uppercase tracking-wide">Landing Pages</h4>
</div>
<div className="p-8 border-r border-b border-border hover:bg-charcoal transition-colors group">
<iconify-icon className="text-neutral-600 group-hover:text-accent mb-4 text-2xl transition-colors" icon="lucide:dollar-sign"></iconify-icon>
<h4 className="text-sm font-medium uppercase tracking-wide">Pricing Pages</h4>
</div>
<div className="p-8 border-b border-border hover:bg-charcoal transition-colors group">
<iconify-icon className="text-neutral-600 group-hover:text-accent mb-4 text-2xl transition-colors" icon="lucide:briefcase"></iconify-icon>
<h4 className="text-sm font-medium uppercase tracking-wide">Consulting Sites</h4>
</div>
<div className="p-8 border-r border-b border-border hover:bg-charcoal transition-colors group">
<iconify-icon className="text-neutral-600 group-hover:text-accent mb-4 text-2xl transition-colors" icon="lucide:file-badge"></iconify-icon>
<h4 className="text-sm font-medium uppercase tracking-wide">Authority One-Pagers</h4>
</div>
<div className="p-8 border-r border-b border-border hover:bg-charcoal transition-colors group">
<iconify-icon className="text-neutral-600 group-hover:text-accent mb-4 text-2xl transition-colors" icon="lucide:git-merge"></iconify-icon>
<h4 className="text-sm font-medium uppercase tracking-wide">Funnels &amp; Flows</h4>
</div>
<div className="p-8 border-r border-b border-border hover:bg-charcoal transition-colors group">
<iconify-icon className="text-neutral-600 group-hover:text-accent mb-4 text-2xl transition-colors" icon="lucide:presentation"></iconify-icon>
<h4 className="text-sm font-medium uppercase tracking-wide">Investor Decks</h4>
</div>
<div className="p-8 border-b border-border hover:bg-charcoal transition-colors group">
<iconify-icon className="text-neutral-600 group-hover:text-accent mb-4 text-2xl transition-colors" icon="lucide:component"></iconify-icon>
<h4 className="text-sm font-medium uppercase tracking-wide">Design Systems</h4>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-16 border-b border-border" id="pricing">
<div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
<div className="lg:w-1/2">
<h2 className="text-4xl lg:text-5xl tracking-tighter mb-6">Simple pricing.<br/>Zero ambiguity.</h2>
<p className="text-neutral-400 text-lg mb-8">
                            A flat monthly retainer to handle all your visual equity needs. No hiring, no overhead, no delays.
                        </p>
<div className="flex gap-4">
<div className="flex items-center gap-2 text-sm text-neutral-500 font-mono">
<span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                                Available Now
                           </div>
</div>
</div>
<div className="lg:w-1/2 w-full">
<div className="bg-charcoal border border-border p-8 lg:p-10 sharp-card relative">
<div className="absolute top-0 right-0 p-4">
<iconify-icon className="text-accent" icon="lucide:star"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-2">Visual Equity Retainer</h3>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl font-semibold text-white">$3,500</span>
<span className="text-neutral-500">/ month</span>
</div>
<button className="w-full bg-white text-obsidian font-semibold py-4 uppercase tracking-wider text-sm hover:bg-neutral-200 transition-colors mb-8">
                                Subscribe to Plan
                            </button>
<ul className="space-y-4 border-t border-border pt-8 text-neutral-300">
<li className="flex items-center gap-3">
<iconify-icon className="text-neutral-500" icon="lucide:check-circle"></iconify-icon>
                                    Unlimited design requests
                                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-neutral-500" icon="lucide:check-circle"></iconify-icon>
                                    One active request at a time
                                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-neutral-500" icon="lucide:check-circle"></iconify-icon>
                                    48–72 hour turnaround
                                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-neutral-500" icon="lucide:check-circle"></iconify-icon>
                                    SaaS &amp; Consulting specialization
                                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-neutral-500" icon="lucide:check-circle"></iconify-icon>
                                    Pause or cancel anytime
                                </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 lg:px-16 border-b border-border">
<div className="max-w-3xl mx-auto">
<h2 className="text-2xl font-medium mb-10 text-center uppercase tracking-widest text-neutral-500">Frequently Asked</h2>
<div className="space-y-4">

<div className="border border-border bg-charcoal/20 p-6 cursor-pointer group" onclick="this.querySelector('.ans').classList.toggle('hidden'); this.querySelector('.icon').classList.toggle('rotate-180')">
<div className="flex justify-between items-center">
<h3 className="text-lg font-medium">Is it really unlimited?</h3>
<iconify-icon className="icon transition-transform text-neutral-500" icon="lucide:chevron-down"></iconify-icon>
</div>
<div className="ans hidden mt-4 text-neutral-400 leading-relaxed pt-4 border-t border-border">
                                Yes. You can add as many requests to your queue as you'd like. We handle them sequentially (one by one) to ensure deep focus and maximum quality output.
                            </div>
</div>

<div className="border border-border bg-charcoal/20 p-6 cursor-pointer group" onclick="this.querySelector('.ans').classList.toggle('hidden'); this.querySelector('.icon').classList.toggle('rotate-180')">
<div className="flex justify-between items-center">
<h3 className="text-lg font-medium">How fast is delivery?</h3>
<iconify-icon className="icon transition-transform text-neutral-500" icon="lucide:chevron-down"></iconify-icon>
</div>
<div className="ans hidden mt-4 text-neutral-400 leading-relaxed pt-4 border-t border-border">
                                Most standard requests (landing page sections, ad creative, one-pagers) are delivered within 48–72 hours. Complex full-page designs may be broken into milestones.
                            </div>
</div>

<div className="border border-border bg-charcoal/20 p-6 cursor-pointer group" onclick="this.querySelector('.ans').classList.toggle('hidden'); this.querySelector('.icon').classList.toggle('rotate-180')">
<div className="flex justify-between items-center">
<h3 className="text-lg font-medium">Is this just "design"?</h3>
<iconify-icon className="icon transition-transform text-neutral-500" icon="lucide:chevron-down"></iconify-icon>
</div>
<div className="ans hidden mt-4 text-neutral-400 leading-relaxed pt-4 border-t border-border">
                                No. We build Visual Equity. This is perception engineering combined with conversion rate optimization logic. We don't just make it pretty; we make it sell.
                            </div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 lg:px-16 text-center">
<h2 className="text-4xl lg:text-6xl tracking-tighter mb-8 text-white">Stop losing deals<br/>to perception.</h2>
<p className="text-neutral-400 max-w-xl mx-auto mb-10 text-lg">
                    We don’t sell design. We qualify partnerships.<br/>
                    The call determines fit — not pressure.
                </p>
<button className="px-10 py-5 bg-accent text-white font-semibold text-lg uppercase tracking-wider hover:bg-white hover:text-obsidian transition-colors rounded-sm">
                    Book a Strategy Call
                </button>
</section>

<footer className="border-t border-border py-10 px-6 lg:px-16 flex flex-col md:flex-row justify-between items-center gap-6 bg-charcoal/20">
<div className="text-sm font-mono text-neutral-500">
                    © 2025 CAPITAL DIGITAL. NY / LON.
                </div>
<div className="flex gap-6 text-sm font-medium uppercase tracking-wide">
<a className="text-neutral-400 hover:text-white transition-colors" href="#">Twitter</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#">Email</a>
</div>
</footer>
</main>
</div>

    </>
  );
}
