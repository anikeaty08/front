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
sans: ['Inter', 'sans-serif'],
},
colors: {
zinc: {
850: '#1f1f22',
950: '#09090b',
}
},
backgroundImage: {
'grid-pattern': "linear-gradient(to right, #27272a 1px, transparent 1px), linear-gradient(to bottom, #27272a 1px, transparent 1px)",
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
      

<div className="fixed inset-0 z-0 pointer-events-none grid-bg bg-grid-pattern opacity-[0.15]"></div>

<nav className="relative z-10 w-full max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
<a className="text-white font-medium tracking-tight text-lg flex items-center gap-2" href="#">
<iconify-icon height="24" icon="solar:box-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
            OUTSIDE THE BOX
        </a>
<a className="hidden md:inline-flex text-sm text-zinc-400 hover:text-white transition-colors" href="#pricing">
            View Packages
        </a>
</nav>

<main className="relative z-10 flex flex-col items-center w-full">

<section className="w-full max-w-4xl mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-32 text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 mb-8 animate-fade-in">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-xs font-medium text-zinc-300">Only 2 slots available for March</span>
<span className="w-px h-3 bg-zinc-700 mx-1"></span>
<div className="flex items-center gap-1 text-xs text-zinc-400">
<iconify-icon className="text-yellow-500" icon="solar:star-bold"></iconify-icon>
                    5.0/5 by 30+ Tech Leaders
                </div>
</div>

<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight mb-6 leading-[1.1]">
                Turn Your Website into a <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">Growth Machine</span>
</h1>
<p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Professional, high-performance Webflow ecosystems delivered in 30 days. No slow agencies, no technical debt, no missed leads... just a world-class site structured for AEO and SEO.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3 bg-white text-black text-sm font-medium rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 group" href="#pricing">
                    View Packages
                    <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3 bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm font-medium rounded-lg hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2" href="#">
                    Book a Discovery Call
                </a>
</div>

<div className="mt-8 flex items-center justify-center gap-6 text-xs text-zinc-500">
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:verified-check-linear"></iconify-icon> 30-Day Delivery Guarantee</span>
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:shield-check-linear"></iconify-icon> 100% Webflow Ownership</span>
</div>
</section>

<section className="w-full border-y border-white/5 bg-white/[0.02]">
<div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
<div className="text-sm font-medium text-zinc-500">Trusted by 30+ forward-thinking companies</div>
<div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-lg font-bold tracking-tighter text-white font-sans">COLDIQ</span>
<span className="text-lg font-bold tracking-tighter text-white font-sans">HYPERSENSE</span>
<span className="text-lg font-bold tracking-tighter text-white font-sans">REPLY</span>
<span className="text-lg font-bold tracking-tighter text-white font-sans">GENERECT</span>
</div>
</div>
</section>

<section className="w-full max-w-6xl mx-auto px-6 py-24">
<div className="mb-12 text-center md:text-left">
<h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-3">The Game Has Changed</h2>
<p className="text-zinc-500 text-sm md:text-base">Why modern founders are switching from traditional models.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0">

<div className="p-8 border border-zinc-800 rounded-2xl md:rounded-r-none md:border-r-0 bg-zinc-900/20">
<h3 className="text-lg font-medium text-zinc-400 mb-6 flex items-center gap-2">
<iconify-icon className="text-zinc-600" icon="solar:buildings-linear"></iconify-icon>
                        Traditional Agency
                    </h3>
<ul className="space-y-6 text-sm">
<li className="flex flex-col gap-1">
<span className="text-zinc-500 text-xs uppercase tracking-wider">Timeline</span>
<span className="text-zinc-300">3-6 Months to Launch</span>
</li>
<li className="flex flex-col gap-1">
<span className="text-zinc-500 text-xs uppercase tracking-wider">Cost</span>
<span className="text-zinc-300">Starting at €15,000+</span>
</li>
<li className="flex flex-col gap-1">
<span className="text-zinc-500 text-xs uppercase tracking-wider">Workflow</span>
<span className="text-zinc-300">Slow, fragmented process</span>
</li>
<li className="flex flex-col gap-1">
<span className="text-zinc-500 text-xs uppercase tracking-wider">Result</span>
<span className="text-zinc-300">Built for 2018 Google</span>
</li>
</ul>
</div>

<div className="p-8 border border-zinc-800 md:border-x border-y md:border-y bg-zinc-900/20 relative z-0">
<h3 className="text-lg font-medium text-zinc-400 mb-6 flex items-center gap-2">
<iconify-icon className="text-zinc-600" icon="solar:users-group-rounded-linear"></iconify-icon>
                        In-House Team
                    </h3>
<ul className="space-y-6 text-sm">
<li className="flex flex-col gap-1">
<span className="text-zinc-500 text-xs uppercase tracking-wider">Timeline</span>
<span className="text-zinc-300">Dev Bottlenecks</span>
</li>
<li className="flex flex-col gap-1">
<span className="text-zinc-500 text-xs uppercase tracking-wider">Cost</span>
<span className="text-zinc-300">€13,000+/mo Salaries</span>
</li>
<li className="flex flex-col gap-1">
<span className="text-zinc-500 text-xs uppercase tracking-wider">Workflow</span>
<span className="text-zinc-300">Recruitment &amp; Management</span>
</li>
<li className="flex flex-col gap-1">
<span className="text-zinc-500 text-xs uppercase tracking-wider">Result</span>
<span className="text-zinc-300">Hard to scale quickly</span>
</li>
</ul>
</div>

<div className="p-8 border border-zinc-700 bg-zinc-900/80 rounded-2xl md:rounded-l-none md:-ml-[1px] relative z-10 shadow-2xl shadow-black/50">
<div className="absolute top-0 right-0 p-4">
<iconify-icon className="text-white text-xl" icon="solar:check-circle-bold"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-6 flex items-center gap-2">
<iconify-icon className="text-white" icon="solar:box-minimalistic-linear"></iconify-icon>
                        FoundationOS
                    </h3>
<ul className="space-y-6 text-sm">
<li className="flex flex-col gap-1">
<span className="text-zinc-500 text-xs uppercase tracking-wider">Timeline</span>
<span className="text-white font-medium">30-Day Rapid Launch</span>
</li>
<li className="flex flex-col gap-1">
<span className="text-zinc-500 text-xs uppercase tracking-wider">Cost</span>
<span className="text-white font-medium">One-time fee: €5,000</span>
</li>
<li className="flex flex-col gap-1">
<span className="text-zinc-500 text-xs uppercase tracking-wider">Workflow</span>
<span className="text-white font-medium">Built for AI &amp; AEO Discovery</span>
</li>
<li className="flex flex-col gap-1">
<span className="text-zinc-500 text-xs uppercase tracking-wider">Result</span>
<span className="text-white font-medium">Full Autonomy (Webflow)</span>
</li>
</ul>
</div>
</div>
</section>

<section className="w-full max-w-6xl mx-auto px-6 py-24 border-t border-white/5">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">FoundationOS: <br/>The Complete Rebuild</h2>
<p className="text-zinc-400 text-base leading-relaxed mb-8">
                        Crafted for founders who need a site that works as hard as their sales team.
                    </p>
<div className="relative w-full h-64 md:h-80 bg-zinc-900 rounded-xl overflow-hidden border border-white/10 group">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/40 via-zinc-900 to-zinc-950"></div>
<div className="absolute inset-4 border border-dashed border-white/10 rounded-lg flex items-center justify-center">
<div className="text-center">
<iconify-icon className="text-5xl text-white/20 mb-2" icon="solar:sitemap-linear"></iconify-icon>
<div className="text-xs text-white/20 font-mono">STRUCTURE_V1.0</div>
</div>
</div>
</div>
</div>
<div className="flex flex-col justify-center space-y-6">

<div className="flex gap-4">
<div className="mt-1">
<div className="w-8 h-8 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-white">
<iconify-icon icon="solar:compass-linear" width="16"></iconify-icon>
</div>
</div>
<div>
<h4 className="text-white font-medium text-base">Strategic Architecture</h4>
<p className="text-sm text-zinc-500 mt-1">Sitemap &amp; copywriting that converts.</p>
</div>
</div>

<div className="flex gap-4">
<div className="mt-1">
<div className="w-8 h-8 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-white">
<iconify-icon icon="solar:magic-stick-3-linear" width="16"></iconify-icon>
</div>
</div>
<div>
<h4 className="text-white font-medium text-base">AI &amp; SEO Optimization</h4>
<p className="text-sm text-zinc-500 mt-1">Semantic markup &amp; schema so ChatGPT can "read" you.</p>
</div>
</div>

<div className="flex gap-4">
<div className="mt-1">
<div className="w-8 h-8 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-white">
<iconify-icon icon="solar:layers-minimalistic-linear" width="16"></iconify-icon>
</div>
</div>
<div>
<h4 className="text-white font-medium text-base">Modular Webflow Build</h4>
<p className="text-sm text-zinc-500 mt-1">Easy to evolve without a developer.</p>
</div>
</div>

<div className="flex gap-4">
<div className="mt-1">
<div className="w-8 h-8 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-white">
<iconify-icon icon="solar:stopwatch-linear" width="16"></iconify-icon>
</div>
</div>
<div>
<h4 className="text-white font-medium text-base">Conversion-Focused UX</h4>
<p className="text-sm text-zinc-500 mt-1">Fast load times and clear funnel-aligned pages.</p>
</div>
</div>

<div className="flex gap-4">
<div className="mt-1">
<div className="w-8 h-8 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-white">
<iconify-icon icon="solar:key-linear" width="16"></iconify-icon>
</div>
</div>
<div>
<h4 className="text-white font-medium text-base">100% Ownership</h4>
<p className="text-sm text-zinc-500 mt-1">Source files, CMS access, and training included.</p>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-zinc-900/30 border-y border-white/5">
<div className="max-w-6xl mx-auto px-6 py-24">
<div className="text-center mb-16">
<h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight">Our 30-Day Sprint</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="relative group">
<div className="text-xs font-mono text-zinc-600 mb-3">DAY 0-7</div>
<h3 className="text-lg font-medium text-white mb-2">Step #1: The Strategy</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Discovery call, onboarding, and messaging/tone development.</p>
<div className="absolute -bottom-8 left-0 w-full h-px bg-gradient-to-r from-zinc-700 to-transparent md:hidden"></div>
</div>

<div className="relative group">
<div className="text-xs font-mono text-zinc-600 mb-3">DAY 8-22</div>
<h3 className="text-lg font-medium text-white mb-2">Step #2: The Blueprint</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Wireframes and UI/UX design. We build for human eyes and AI crawlers.</p>
<div className="absolute -bottom-8 left-0 w-full h-px bg-gradient-to-r from-zinc-700 to-transparent md:hidden"></div>

<div className="hidden md:block absolute top-3 -left-4 w-px h-12 bg-zinc-800 rotate-90 origin-top"></div>
</div>

<div className="relative group">
<div className="text-xs font-mono text-zinc-600 mb-3">DAY 23-30</div>
<h3 className="text-lg font-medium text-white mb-2">Step #3: The Build &amp; Launch</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Webflow development, SEO setup, and QA. We go live with leads flowing in.</p>

<div className="hidden md:block absolute top-3 -left-4 w-px h-12 bg-zinc-800 rotate-90 origin-top"></div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-6xl mx-auto px-6 py-24" id="pricing">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium text-white tracking-tight">Productized Plans</h2>
<p className="text-zinc-500 mt-2">Simple, transparent pricing. No hidden fees.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="glass-card border border-zinc-800 rounded-2xl p-8 flex flex-col">
<div className="mb-6">
<h3 className="text-xl font-medium text-white">FoundationOS</h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-3xl font-medium text-white">€5,000</span>
<span className="text-zinc-500 text-sm">/one-time</span>
</div>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Full Strategic Rebuild
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Multi-page Webflow Site
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> AI &amp; AEO Structured
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> CRM &amp; Calendar Integrations
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> 30-Day Delivery
                        </li>
</ul>
<a className="w-full py-3 border border-zinc-700 text-white rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors text-center" href="#">
                        Get Started
                    </a>
</div>

<div className="glass-card border border-white/20 bg-white/[0.03] rounded-2xl p-8 flex flex-col relative overflow-hidden">
<div className="absolute top-0 right-0 px-3 py-1 bg-white text-black text-xs font-bold rounded-bl-lg">POPULAR</div>
<div className="mb-6">
<h3 className="text-xl font-medium text-white">GrowthOS Partner</h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-3xl font-medium text-white">€5,000</span>
<span className="text-zinc-500 text-sm">/month</span>
</div>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Everything in FoundationOS
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> 3 Months of Strategic Optimization
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Monthly A/B Testing &amp; Copy Updates
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Weekly Strategy &amp; Reporting
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Continuous Support &amp; Scaling
                        </li>
</ul>
<a className="w-full py-3 bg-white text-black rounded-lg text-sm font-medium hover:bg-zinc-200 transition-colors text-center" href="#">
                        Apply for Partnership
                    </a>
</div>
</div>
</section>

<section className="w-full border-y border-white/5 bg-zinc-900/20">
<div className="max-w-4xl mx-auto px-6 py-24 text-center">
<iconify-icon className="text-4xl text-zinc-700 mb-6" icon="solar:quote-up-square-linear"></iconify-icon>
<blockquote className="text-xl md:text-2xl font-light text-zinc-200 leading-relaxed mb-8">
                    "Working with Outside The Box was like hiring a top-tier growth team without the overhead. They took ColdIQ from €2M to €6M ARR by rebuilding our site to actually close deals, not just look pretty."
                </blockquote>
<div className="text-sm font-medium text-white">Founder, ColdIQ</div>
</div>
</section>

<section className="w-full max-w-3xl mx-auto px-6 py-24">
<h2 className="text-2xl font-medium text-white tracking-tight mb-12 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-zinc-900/40 border border-zinc-800 rounded-lg open:bg-zinc-900/80 transition-all">
<summary className="flex justify-between items-center p-4 cursor-pointer">
<span className="text-sm font-medium text-zinc-300">Is this just a redesign?</span>
<iconify-icon className="text-zinc-500 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-4 pb-4 text-sm text-zinc-400 leading-relaxed">
                        No. It's a structural rebuild for AI discovery using modern semantic standards.
                    </div>
</details>
<details className="group bg-zinc-900/40 border border-zinc-800 rounded-lg open:bg-zinc-900/80 transition-all">
<summary className="flex justify-between items-center p-4 cursor-pointer">
<span className="text-sm font-medium text-zinc-300">Will I still control the site?</span>
<iconify-icon className="text-zinc-500 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-4 pb-4 text-sm text-zinc-400 leading-relaxed">
                        Absolutely. You get full ownership on Webflow, including all source files and assets.
                    </div>
</details>
<details className="group bg-zinc-900/40 border border-zinc-800 rounded-lg open:bg-zinc-900/80 transition-all">
<summary className="flex justify-between items-center p-4 cursor-pointer">
<span className="text-sm font-medium text-zinc-300">How are you so fast?</span>
<iconify-icon className="text-zinc-500 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-4 pb-4 text-sm text-zinc-400 leading-relaxed">
                        We use a modular, productized workflow refined over 30+ projects to eliminate wasted time.
                    </div>
</details>
<details className="group bg-zinc-900/40 border border-zinc-800 rounded-lg open:bg-zinc-900/80 transition-all">
<summary className="flex justify-between items-center p-4 cursor-pointer">
<span className="text-sm font-medium text-zinc-300">What is AEO?</span>
<iconify-icon className="text-zinc-500 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-4 pb-4 text-sm text-zinc-400 leading-relaxed">
                        Answer Engine Optimization—making sure ChatGPT and Perplexity recommend you.
                    </div>
</details>
</div>
</section>

<footer className="w-full border-t border-white/5 py-12 text-center text-xs text-zinc-600">
<div className="flex items-center justify-center gap-2 mb-4">
<iconify-icon height="16" icon="solar:box-minimalistic-linear" width="16"></iconify-icon>
                OUTSIDE THE BOX
            </div>
            © 2024 Outside The Box. All rights reserved.
        </footer>
</main>

    </>
  );
}
