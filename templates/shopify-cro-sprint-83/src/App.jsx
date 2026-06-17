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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#09090b]/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="text-sm font-semibold tracking-tighter text-white uppercase">
                GrowthLayer
            </div>
<a className="hidden md:inline-flex text-xs font-medium bg-white text-black px-4 py-2 rounded hover:bg-zinc-200 transition-colors" href="#pricing">
                Start Sprint
            </a>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden bg-grid border-b border-white/5">
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-400 mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                For Shopify stores doing $10K+/month
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
                2X-3X Your Shopify <br className="hidden md:block"/>
                Conversion Rate in <span className="text-zinc-500">60-90 Days</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                So you can finally scale Facebook ads with confidence. We fix the store friction that limits ad scale so paid traffic converts without guesswork.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="w-full md:w-auto px-8 py-3 bg-white text-black font-medium text-sm rounded hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 group" href="#pricing">
                    Start the Conversion Sprint
                    <span className="iconify group-hover:translate-x-0.5 transition-transform" data-height="16" data-icon="lucide:arrow-right" data-width="16" strokeWidth="1.5"></span>
</a>
<a className="w-full md:w-auto px-8 py-3 bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium text-sm rounded hover:bg-zinc-800 transition-all flex items-center justify-center gap-2" href="#audit">
                    Get the Conversion Audit
                </a>
</div>
<p className="mt-8 text-xs text-zinc-500 flex items-center justify-center gap-4">
<span className="flex items-center gap-1"><span className="iconify text-zinc-400" data-icon="lucide:check" strokeWidth="1.5"></span> No full redesign</span>
<span className="flex items-center gap-1"><span className="iconify text-zinc-400" data-icon="lucide:check" strokeWidth="1.5"></span> No guesswork</span>
<span className="flex items-center gap-1"><span className="iconify text-zinc-400" data-icon="lucide:check" strokeWidth="1.5"></span> Done-for-you</span>
</p>
</div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-3xl -z-10 pointer-events-none"></div>
</header>

<section className="py-24 px-6 border-b border-white/5">
<div className="max-w-3xl mx-auto">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-8">Why Scaling Feels Like Gambling</h2>
<div className="prose prose-invert prose-zinc max-w-none text-zinc-400">
<p className="mb-6">
                    If you're spending $3,000+ per month on paid ads, you've hit what we call the 
                    <strong className="text-white font-medium">Ad-Spend Ceiling</strong>.
                </p>
<div className="bg-zinc-900/50 border border-white/10 rounded-lg p-6 mb-8">
<h3 className="text-sm font-medium text-white mb-2 flex items-center gap-2">
<span className="iconify text-orange-500" data-icon="lucide:alert-triangle" strokeWidth="1.5"></span>
                        The Cycle
                    </h3>
<ul className="space-y-2 text-sm">
<li className="flex items-center gap-2">
<span className="text-zinc-600">01.</span> Scale budget → ROAS drops
                        </li>
<li className="flex items-center gap-2">
<span className="text-zinc-600">02.</span> Panic → cut budget
                        </li>
<li className="flex items-center gap-2">
<span className="text-zinc-600">03.</span> ROAS recovers → try again
                        </li>
<li className="flex items-center gap-2 text-zinc-500 italic">
                            Repeat indefinitely...
                        </li>
</ul>
</div>
<p>
                    Your store converts well enough at low volumes (warm traffic). But when you scale, you're pouring cold traffic into a store that hasn't been optimized to handle buyer skepticism. Until you fix that foundation, every dollar you spend testing "scale" is a gamble.
                </p>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-900/30 border-b border-white/5">
<div className="max-w-6xl mx-auto">
<div className="mb-12">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-4">Is Your Store Losing Money?</h2>
<p className="text-zinc-400">Check for these common leaks. Over 70% of paid traffic drops off here:</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-6 border border-white/10 bg-[#09090b] rounded hover:border-zinc-600 transition-colors group">
<div className="w-10 h-10 bg-zinc-900 rounded flex items-center justify-center mb-4 group-hover:bg-white group-hover:text-black transition-colors">
<span className="iconify" data-icon="lucide:shopping-cart" strokeWidth="1.5"></span>
</div>
<h3 className="text-white font-medium mb-2">The Abandonment Leak</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        High add-to-cart rates, but users vanish when shipping or totals appear. Indicates unclear expectations or surprise fees.
                    </p>
</div>

<div className="p-6 border border-white/10 bg-[#09090b] rounded hover:border-zinc-600 transition-colors group">
<div className="w-10 h-10 bg-zinc-900 rounded flex items-center justify-center mb-4 group-hover:bg-white group-hover:text-black transition-colors">
<span className="iconify" data-icon="lucide:smartphone" strokeWidth="1.5"></span>
</div>
<h3 className="text-white font-medium mb-2">The Mobile Friction Leak</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Looks fine on desktop, but feels slow or confusing on mobile. Mobile users scroll fast and trust slow—they abandon instantly if it feels off.
                    </p>
</div>

<div className="p-6 border border-white/10 bg-[#09090b] rounded hover:border-zinc-600 transition-colors group">
<div className="w-10 h-10 bg-zinc-900 rounded flex items-center justify-center mb-4 group-hover:bg-white group-hover:text-black transition-colors">
<span className="iconify" data-icon="lucide:help-circle" strokeWidth="1.5"></span>
</div>
<h3 className="text-white font-medium mb-2">The Generic Leak</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Product pages list features but don't answer the #1 buying hesitation. E.g., "Will this actually work?" or "Will this look good on ME?"
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-white/5">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
<div>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-6">Strategic CRO, Not Random A/B Testing</h2>
<p className="text-zinc-400 mb-6 leading-relaxed">
                        This isn't about red vs. blue buttons. It's about installing the essential conversion foundation: trust signals, objection handlers, and friction removers specific to YOUR product category.
                    </p>
<p className="text-zinc-400 leading-relaxed">
                        We install conversion systems based on 50+ store audits. We know what buyers in your category need to see before they buy.
                    </p>
</div>
<div className="border border-white/10 rounded overflow-hidden">
<div className="bg-zinc-900/50 px-4 py-3 border-b border-white/10 flex justify-between items-center">
<span className="text-xs font-medium text-white uppercase tracking-wider">Category Frameworks</span>
</div>
<div className="divide-y divide-white/5">

<div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="text-sm font-medium text-white">Supplement</div>
<div className="text-xs text-zinc-400 col-span-2">
<strong className="text-zinc-200 block mb-1">Credibility &amp; Transparency</strong>
                                Buyers must trust what they ingest. We install lab certs, doctor endorsements, and deep ingredient sourcing.
                            </div>
</div>

<div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="text-sm font-medium text-white">Fashion/Skin</div>
<div className="text-xs text-zinc-400 col-span-2">
<strong className="text-zinc-200 block mb-1">Social Proof</strong>
                                Buyers need assurance it looks good on others. We install UGC galleries, fit guides, and visual testimonials.
                            </div>
</div>

<div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="text-sm font-medium text-white">High Ticket ($200+)</div>
<div className="text-xs text-zinc-400 col-span-2">
<strong className="text-zinc-200 block mb-1">Risk Reversal</strong>
                                Buyers need financial security. We install "Try before you buy", warranty clarity, and financing badges.
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-white/5 bg-grid">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl font-medium tracking-tight text-white text-center mb-16">The Conversion Sprint</h2>
<div className="relative border-l border-zinc-800 ml-4 md:ml-0 space-y-12">

<div className="relative pl-8 md:pl-12">
<span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-zinc-700 ring-4 ring-[#09090b]"></span>
<h3 className="text-xl font-medium text-white mb-2">Week 1-2: Foundation Installation</h3>
<p className="text-zinc-400 mb-4">We install trust &amp; credibility elements, fix mobile friction, and handle objections specific to your product's risk level.</p>
<ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-zinc-500">
<li className="flex items-center gap-2"><span className="iconify text-zinc-600" data-icon="lucide:arrow-right" width="14"></span> Fix cart abandonment leaks</li>
<li className="flex items-center gap-2"><span className="iconify text-zinc-600" data-icon="lucide:arrow-right" width="14"></span> Answer #1 buying question</li>
<li className="flex items-center gap-2"><span className="iconify text-zinc-600" data-icon="lucide:arrow-right" width="14"></span> Category-appropriate social proof</li>
</ul>
</div>

<div className="relative pl-8 md:pl-12">
<span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-white ring-4 ring-[#09090b]"></span>
<h3 className="text-xl font-medium text-white mb-2">Week 3-8: Testing &amp; Iteration</h3>
<p className="text-zinc-400 mb-4">We launch 3–5 controlled A/B tests on high-leverage changes. We verify revenue impact via dashboard.</p>
<ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-zinc-500">
<li className="flex items-center gap-2"><span className="iconify text-zinc-600" data-icon="lucide:arrow-right" width="14"></span> Iterate winning variants</li>
<li className="flex items-center gap-2"><span className="iconify text-zinc-600" data-icon="lucide:arrow-right" width="14"></span> Pause losers immediately</li>
<li className="flex items-center gap-2"><span className="iconify text-zinc-600" data-icon="lucide:arrow-right" width="14"></span> Document every change</li>
</ul>
</div>

<div className="relative pl-8 md:pl-12">
<span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-zinc-700 ring-4 ring-[#09090b]"></span>
<h3 className="text-xl font-medium text-white mb-2">Week 9-12: Stabilization</h3>
<p className="text-zinc-400 mb-4">Ensure improvements are stable. Verify mobile performance matches desktop. Confirm readiness for 2-3X traffic scale.</p>
</div>
</div>
<div className="mt-16 bg-zinc-900 border border-zinc-800 p-6 rounded text-center">
<p className="text-white font-medium mb-2">You don't learn CRO. You don't manage tests. You don't guess.</p>
<p className="text-sm text-zinc-500">You get a live revenue impact dashboard and Slack access to our team.</p>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-white/5 bg-zinc-900/20">
<div className="max-w-5xl mx-auto">
<div className="flex flex-col md:flex-row gap-12 items-center">
<div className="flex-1">
<div className="inline-block text-emerald-400 text-xs font-semibold tracking-wider uppercase mb-4">Real Example</div>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-6">Ergonomic Furniture Brand</h2>
<p className="text-zinc-400 mb-6">
                        Selling $400-800 items. Spending $6k/month on ads with 1.8% CR. Traffic was strong, but users weren't converting.
                    </p>
<div className="space-y-4 mb-8">
<div className="flex gap-4">
<div className="w-1 h-full min-h-[40px] bg-zinc-800 rounded-full"></div>
<div>
<h4 className="text-white text-sm font-medium">The Fix</h4>
<p className="text-xs text-zinc-500 mt-1">Installed comparison charts, 60-day trial guarantee, and Affirm financing visibility.</p>
</div>
</div>
</div>
</div>
<div className="flex-1 w-full">
<div className="bg-[#09090b] border border-white/10 rounded-xl p-6 md:p-8 relative">

<div className="grid grid-cols-2 gap-6 mb-6 border-b border-white/5 pb-6">
<div>
<div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Conversion Rate</div>
<div className="flex items-end gap-2">
<span className="text-3xl font-medium text-white">4.3%</span>
<span className="text-xs text-emerald-500 mb-1.5 flex items-center">
<span className="iconify" data-icon="lucide:trending-up"></span> 2.4X
                                    </span>
</div>
<div className="text-xs text-zinc-600 mt-1">From 1.8%</div>
</div>
<div>
<div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Net Revenue Increase</div>
<div className="flex items-end gap-2">
<span className="text-3xl font-medium text-white">+$150k</span>
</div>
<div className="text-xs text-zinc-600 mt-1">Per month</div>
</div>
</div>
<p className="text-xs text-zinc-400 italic">
                            "Within 45 days, they scaled ad spend to $12,000/month while maintaining 4.1% conversion rate."
                        </p>

<div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 to-transparent rounded-xl pointer-events-none"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-white/5">
<div className="max-w-6xl mx-auto">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-12 text-center">Expected ROI Breakdown</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-6 border border-white/10 rounded bg-zinc-900/20">
<h3 className="text-sm font-medium text-white mb-4">Conservative Scenario</h3>
<div className="space-y-3 text-sm">
<div className="flex justify-between text-zinc-400">
<span>Improvement</span>
<span className="text-white">2X (2% → 4%)</span>
</div>
<div className="flex justify-between text-zinc-400">
<span>Add. Revenue</span>
<span className="text-white">+$10k/mo</span>
</div>
<div className="pt-3 border-t border-white/5 flex justify-between items-center">
<span className="text-zinc-500 text-xs">Payback Period</span>
<span className="text-emerald-400 font-medium">6 Days</span>
</div>
</div>
</div>

<div className="p-6 border border-white/20 rounded bg-zinc-900/60 relative overflow-hidden">
<div className="absolute top-0 right-0 p-2">
<span className="iconify text-white/10 w-12 h-12" data-icon="lucide:bar-chart-2"></span>
</div>
<h3 className="text-sm font-medium text-white mb-4">Strong Scenario</h3>
<div className="space-y-3 text-sm">
<div className="flex justify-between text-zinc-400">
<span>Improvement</span>
<span className="text-white">2.5X (1.5% → 3.75%)</span>
</div>
<div className="flex justify-between text-zinc-400">
<span>Add. Revenue</span>
<span className="text-white">+$22.5k/mo</span>
</div>
<div className="pt-3 border-t border-white/5 flex justify-between items-center">
<span className="text-zinc-500 text-xs">Payback Period</span>
<span className="text-emerald-400 font-medium">2.6 Days</span>
</div>
</div>
</div>

<div className="p-6 border border-white/10 rounded bg-zinc-900/20">
<h3 className="text-sm font-medium text-white mb-4">Exceptional Scenario</h3>
<div className="space-y-3 text-sm">
<div className="flex justify-between text-zinc-400">
<span>Improvement</span>
<span className="text-white">3X (1.8% → 5.4%)</span>
</div>
<div className="flex justify-between text-zinc-400">
<span>Add. Revenue</span>
<span className="text-white">+$50k/mo</span>
</div>
<div className="pt-3 border-t border-white/5 flex justify-between items-center">
<span className="text-zinc-500 text-xs">Payback Period</span>
<span className="text-emerald-400 font-medium">1.2 Days</span>
</div>
</div>
</div>
</div>
<p className="text-center text-xs text-zinc-500 mt-8 max-w-2xl mx-auto">
                Calculations based on 50+ stores. Assumes current traffic volume. ROI multiplies when you scale ad spend post-optimization.
            </p>
</div>
</section>

<section className="py-24 px-6 border-b border-white/5 bg-zinc-950">
<div className="max-w-2xl mx-auto">
<h2 className="text-2xl font-medium tracking-tight text-white mb-8 text-center">This Is Not For Everyone</h2>
<div className="space-y-4">
<div className="flex gap-4 items-start">
<div className="mt-1 text-emerald-500"><span className="iconify" data-icon="lucide:check-circle-2" width="20"></span></div>
<div>
<h4 className="text-white font-medium text-sm">Revenue &amp; Ad Spend</h4>
<p className="text-xs text-zinc-400 mt-1">Doing at least $10K/mo revenue with $3,000+/mo active paid ad spend. We need volume to test.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="mt-1 text-emerald-500"><span className="iconify" data-icon="lucide:check-circle-2" width="20"></span></div>
<div>
<h4 className="text-white font-medium text-sm">Proven Demand</h4>
<p className="text-xs text-zinc-400 mt-1">At least 50+ orders proving people want this. CRO can't save a product nobody wants.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="mt-1 text-emerald-500"><span className="iconify" data-icon="lucide:check-circle-2" width="20"></span></div>
<div>
<h4 className="text-white font-medium text-sm">Active Campaigns</h4>
<p className="text-xs text-zinc-400 mt-1">Currently running active Meta/Google campaigns. Not paused.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="pricing">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight text-white mb-4">Make Your Store Ready to Scale</h2>
<p className="text-zinc-400 text-sm">Choose the path that fits your current confidence level.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

<div className="p-6 rounded-xl border border-white/5 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors">
<h3 className="text-white font-medium mb-1">Conversion Audit</h3>
<div className="text-2xl font-semibold text-white mb-4">$299</div>
<p className="text-xs text-zinc-400 mb-6 h-10">Get clarity and a roadmap before committing. Fully credited toward sprint if you proceed.</p>
<ul className="space-y-3 mb-8 text-xs text-zinc-300">
<li className="flex gap-2"><span className="iconify text-zinc-500" data-icon="lucide:check"></span> Full store teardown</li>
<li className="flex gap-2"><span className="iconify text-zinc-500" data-icon="lucide:check"></span> Top 10 revenue leaks</li>
<li className="flex gap-2"><span className="iconify text-zinc-500" data-icon="lucide:check"></span> Priority fix roadmap</li>
</ul>
<a className="block w-full py-2.5 text-center rounded border border-zinc-700 text-white text-xs font-medium hover:bg-zinc-800 transition-colors" href="#audit">
                        Get the Audit
                    </a>
</div>

<div className="p-6 rounded-xl border border-white/20 bg-zinc-900 relative shadow-2xl shadow-black/50 transform md:-translate-y-4">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full border border-zinc-200">
                        Most Popular
                    </div>
<h3 className="text-white font-medium mb-1">Conversion Sprint</h3>
<div className="text-2xl font-semibold text-white mb-4">$2,000 <span className="text-xs font-normal text-zinc-500">one-time</span></div>
<p className="text-xs text-zinc-400 mb-6 h-10">Done-for-you foundation to scale ads. Changes live in 8 days. 14-day fit evaluation.</p>
<ul className="space-y-3 mb-8 text-xs text-zinc-300">
<li className="flex gap-2"><span className="iconify text-white" data-icon="lucide:check"></span> Full implementation (Code &amp; Design)</li>
<li className="flex gap-2"><span className="iconify text-white" data-icon="lucide:check"></span> A/B Testing (Week 3-8)</li>
<li className="flex gap-2"><span className="iconify text-white" data-icon="lucide:check"></span> Live Revenue Dashboard</li>
<li className="flex gap-2"><span className="iconify text-white" data-icon="lucide:check"></span> Daily Slack Access</li>
<li className="flex gap-2"><span className="iconify text-white" data-icon="lucide:check"></span> Mobile &amp; Cart Optimization</li>
</ul>
<button className="block w-full py-3 text-center rounded bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors mb-3">
                        Start the Sprint
                    </button>
<div className="text-[10px] text-center text-zinc-500">Only 8 spots per month</div>
</div>

<div className="p-6 rounded-xl border border-white/5 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors">
<h3 className="text-white font-medium mb-1">Fit Call</h3>
<div className="text-2xl font-semibold text-white mb-4">Free</div>
<p className="text-xs text-zinc-400 mb-6 h-10">15-minute qualification chat. Not a sales pitch, just checking if we can help.</p>
<ul className="space-y-3 mb-8 text-xs text-zinc-300">
<li className="flex gap-2"><span className="iconify text-zinc-500" data-icon="lucide:check"></span> Verify traffic requirements</li>
<li className="flex gap-2"><span className="iconify text-zinc-500" data-icon="lucide:check"></span> Discuss timeline</li>
<li className="flex gap-2"><span className="iconify text-zinc-500" data-icon="lucide:check"></span> See if you qualify</li>
</ul>
<a className="block w-full py-2.5 text-center rounded border border-zinc-700 text-white text-xs font-medium hover:bg-zinc-800 transition-colors" href="#call">
                        Book 15-Min Call
                    </a>
</div>
</div>
</div>
</section>

<section className="py-12 px-6 border-t border-white/5">
<div className="max-w-4xl mx-auto text-center">
<h3 className="text-white font-medium mb-4">Low Risk. Clear Terms.</h3>
<p className="text-sm text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                14-Day Fit Evaluation. If you feel this isn't the right fit in the first two weeks, you get a refund (minus audit/setup costs). No long-term lock-ins. No forced continuation.
            </p>
</div>
</section>

<footer className="py-12 px-6 border-t border-white/5 bg-black">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-xs text-zinc-600">
                © GrowthLayer. Specialized Shopify CRO.
            </div>
<div className="flex gap-6">
<div className="text-xs text-zinc-500">
<span className="block text-zinc-700 mb-1">Current Status</span>
<span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Taking Clients for Q4</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
