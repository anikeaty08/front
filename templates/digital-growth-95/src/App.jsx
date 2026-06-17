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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030712]/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="text-xl font-semibold tracking-tighter text-white flex items-center gap-2" href="#">
<span className="w-8 h-8 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">N</span>
                NEXUS
            </a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#roadmap">Process</a>
<a className="hover:text-white transition-colors" href="#why-us">Why Us</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</div>

<a className="hidden md:flex items-center gap-2 bg-white text-slate-950 px-4 py-2 rounded-full text-xs font-semibold hover:bg-slate-200 transition-colors" href="#consultation">
                Book Free Consultation
                <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>

<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl glow-bg pointer-events-none opacity-60"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-indigo-300 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Accepting new growth partners for Q4
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] mb-6 text-white">
                We Build. We Scale. <br/>
<span className="accent-gradient-text">You Grow.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                The end-to-end digital agency for brands that demand performance. We combine premium development, data-driven marketing, and strategic scaling.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="w-full md:w-auto bg-white text-slate-950 px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-slate-200 transition-all flex items-center justify-center gap-2" href="#consultation">
                    Book Free Consultation
                    <iconify-icon icon="solar:calendar-linear" width="18"></iconify-icon>
</a>
<a className="w-full md:w-auto px-8 py-3.5 rounded-full text-sm font-medium text-white border border-white/10 hover:bg-white/5 transition-all flex items-center justify-center gap-2" href="#services">
                    Explore Solutions
                    <iconify-icon icon="solar:arrow-down-linear" width="18"></iconify-icon>
</a>
</div>

<div className="mt-20 pt-10 border-t border-white/5">
<p className="text-xs text-slate-500 mb-6 uppercase tracking-widest">Trusted by fast-growing brands</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale">

<span className="text-xl font-bold tracking-tight">VANGUARD</span>
<span className="text-xl font-bold tracking-tight">LUMINA</span>
<span className="text-xl font-bold tracking-tight">ELEVATE</span>
<span className="text-xl font-bold tracking-tight">NEXUS</span>
<span className="text-xl font-bold tracking-tight">STRATOS</span>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-slate-950" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Integrated Solutions</h2>
<p className="text-slate-400 max-w-md font-light">We don't just sell services; we provide a complete ecosystem for digital dominance.</p>
</div>
<a className="text-indigo-400 text-sm hover:text-indigo-300 flex items-center gap-1" href="#consultation">
                    Get a custom roadmap <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-2xl hover:border-indigo-500/30 transition-colors group">
<div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:code-circle-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3">Website Development</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6">
                        Custom business &amp; eCommerce builds designed for speed and SEO. Shopify, WordPress, or full custom stacks.
                    </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-slate-300">
<iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> Mobile-First Design
                        </li>
<li className="flex items-center gap-2 text-xs text-slate-300">
<iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> High-Performance Code
                        </li>
</ul>
</div>

<div className="glass-panel p-8 rounded-2xl hover:border-indigo-500/30 transition-colors group">
<div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:graph-up-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3">Digital Marketing</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6">
                        Data-driven acquisition. We build funnels that convert cold traffic into loyal customers via Meta &amp; Google Ads.
                    </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-slate-300">
<iconify-icon className="text-purple-500" icon="solar:check-circle-linear"></iconify-icon> Funnel Architecture
                        </li>
<li className="flex items-center gap-2 text-xs text-slate-300">
<iconify-icon className="text-purple-500" icon="solar:check-circle-linear"></iconify-icon> Conversion Optimization
                        </li>
</ul>
</div>

<div className="glass-panel p-8 rounded-2xl hover:border-indigo-500/30 transition-colors group">
<div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:cart-large-4-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3">eCommerce Guidance</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6">
                        Store setup, pricing strategies, and product research to scale your online store from launch to exit.
                    </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-slate-300">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Scaling Strategy
                        </li>
<li className="flex items-center gap-2 text-xs text-slate-300">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Order Optimization
                        </li>
</ul>
</div>

<div className="glass-panel p-8 rounded-2xl hover:border-indigo-500/30 transition-colors group">
<div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center text-pink-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:videocamera-record-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3">UGC &amp; Content</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6">
                        Short-form content that grips attention. Reels, TikToks, and Shorts planned, scripted, and optimized for reach.
                    </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-slate-300">
<iconify-icon className="text-pink-500" icon="solar:check-circle-linear"></iconify-icon> Scripting &amp; Hooks
                        </li>
<li className="flex items-center gap-2 text-xs text-slate-300">
<iconify-icon className="text-pink-500" icon="solar:check-circle-linear"></iconify-icon> Trend Research
                        </li>
</ul>
</div>

<div className="glass-panel p-8 rounded-2xl hover:border-indigo-500/30 transition-colors group">
<div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3">Influencer Marketing</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6">
                        Full-service campaign management. We source, vet, and manage influencers to amplify your brand voice.
                    </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-slate-300">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Outreach &amp; Negotiation
                        </li>
<li className="flex items-center gap-2 text-xs text-slate-300">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Performance Tracking
                        </li>
</ul>
</div>

<div className="glass-panel p-8 rounded-2xl hover:border-indigo-500/30 transition-colors group">
<div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:settings-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3">Website Management</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6">
                        Peace of mind. We handle security, backups, speed optimization, and regular updates so you can focus on sales.
                    </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-slate-300">
<iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon> 24/7 Security
                        </li>
<li className="flex items-center gap-2 text-xs text-slate-300">
<iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon> Speed Optimization
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="roadmap">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-indigo-400 text-xs font-semibold tracking-widest uppercase mb-2 block">Our Methodology</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Your Path to Growth</h2>
<p className="text-slate-400 font-light">A structured, transparent roadmap from audit to scaling.</p>
</div>
<div className="relative">

<div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-indigo-500/30 to-transparent"></div>

<div className="relative flex flex-col md:flex-row items-center gap-8 mb-16">
<div className="md:w-1/2 md:text-right order-2 md:order-1">
<h3 className="text-xl font-medium text-white mb-2">Discovery &amp; Audit</h3>
<p className="text-sm text-slate-400">We analyze your current positioning, tech stack, and pain points to identify low-hanging fruit.</p>
</div>
<div className="relative z-10 w-12 h-12 rounded-full bg-slate-900 border border-indigo-500/50 flex items-center justify-center text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.3)] order-1 md:order-2 shrink-0">
<iconify-icon icon="solar:magnifer-linear" width="20"></iconify-icon>
</div>
<div className="md:w-1/2 order-3"></div>
</div>

<div className="relative flex flex-col md:flex-row items-center gap-8 mb-16">
<div className="md:w-1/2 order-3 md:order-1"></div>
<div className="relative z-10 w-12 h-12 rounded-full bg-slate-900 border border-indigo-500/50 flex items-center justify-center text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.3)] order-1 md:order-2 shrink-0">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div className="md:w-1/2 order-2 md:order-3">
<h3 className="text-xl font-medium text-white mb-2">Strategy Planning</h3>
<p className="text-sm text-slate-400">We craft a custom roadmap including tech requirements, content pillars, and ad strategies.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center gap-8 mb-16">
<div className="md:w-1/2 md:text-right order-2 md:order-1">
<h3 className="text-xl font-medium text-white mb-2">Execution</h3>
<p className="text-sm text-slate-400">Our team deploys the website, launches campaigns, and initiates the content engine.</p>
</div>
<div className="relative z-10 w-12 h-12 rounded-full bg-slate-900 border border-indigo-500/50 flex items-center justify-center text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.3)] order-1 md:order-2 shrink-0">
<iconify-icon icon="solar:rocket-linear" width="20"></iconify-icon>
</div>
<div className="md:w-1/2 order-3"></div>
</div>

<div className="relative flex flex-col md:flex-row items-center gap-8">
<div className="md:w-1/2 order-3 md:order-1"></div>
<div className="relative z-10 w-12 h-12 rounded-full bg-slate-900 border border-indigo-500/50 flex items-center justify-center text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.3)] order-1 md:order-2 shrink-0">
<iconify-icon icon="solar:chart-square-linear" width="20"></iconify-icon>
</div>
<div className="md:w-1/2 order-2 md:order-3">
<h3 className="text-xl font-medium text-white mb-2">Ongoing Optimization</h3>
<p className="text-sm text-slate-400">We monitor data, A/B test creatives, and refine the strategy to scale ROI continuously.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950" id="why-us">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">Not just an agency.<br/><span className="text-slate-500">A growth partner.</span></h2>
<p className="text-slate-400 font-light mb-8 leading-relaxed">
                        Most agencies execute tasks. We execute vision. We step in as your strategic partner, aligning development, marketing, and content to a single north star: Growth.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-indigo-400 shrink-0">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-white mb-1">Full-Management Approach</h4>
<p className="text-xs text-slate-500">We handle the tech and ads so you can focus on product.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-indigo-400 shrink-0">
<iconify-icon icon="solar:wallet-money-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-white mb-1">Results-Focused Pricing</h4>
<p className="text-xs text-slate-500">Our goals are aligned with your revenue, not just hours worked.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-indigo-400 shrink-0">
<iconify-icon icon="solar:chat-round-line-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-white mb-1">Transparent Communication</h4>
<p className="text-xs text-slate-500">Weekly reports, clear roadmaps, and direct access to your team.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="glass-panel p-8 rounded-2xl relative z-10">
<div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
<div className="text-sm font-medium">Monthly Growth</div>
<div className="text-xs text-green-400 flex items-center gap-1 bg-green-400/10 px-2 py-1 rounded">
                                +127% <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>

<div className="flex items-end gap-2 h-40">
<div className="w-full bg-indigo-500/20 rounded-t h-[30%]"></div>
<div className="w-full bg-indigo-500/30 rounded-t h-[45%]"></div>
<div className="w-full bg-indigo-500/40 rounded-t h-[35%]"></div>
<div className="w-full bg-indigo-500/60 rounded-t h-[60%]"></div>
<div className="w-full bg-indigo-500/80 rounded-t h-[80%]"></div>
<div className="w-full bg-indigo-500 rounded-t h-[95%] relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-slate-950 text-[10px] font-bold px-2 py-1 rounded">
                                    NOW
                                </div>
</div>
</div>
</div>
<div className="absolute -top-10 -right-10 w-full h-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-3xl rounded-full -z-10"></div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="consultation">
<div className="max-w-7xl mx-auto px-6">
<div className="glass-panel rounded-3xl overflow-hidden border-t border-white/10">
<div className="grid grid-cols-1 md:grid-cols-2">
<div className="p-10 md:p-16 bg-slate-900/50">
<h2 className="text-3xl font-medium tracking-tight mb-4">Ready to Scale?</h2>
<p className="text-slate-400 font-light mb-8">
                            Book your free strategy call. We'll analyze your current setup and provide a custom growth roadmap.
                        </p>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-indigo-400" icon="solar:letter-linear"></iconify-icon>
                                hello@nexus-agency.com
                            </div>
<div className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-indigo-400" icon="solar:phone-calling-linear"></iconify-icon>
                                +1 (555) 000-0000
                            </div>
</div>
<div className="p-6 bg-indigo-500/10 rounded-xl border border-indigo-500/20">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-full bg-slate-800 overflow-hidden border border-white/10">
<img alt="Founder" className="w-full h-full object-cover opacity-80" src="https://ui-avatars.com/api/?name=Alex+M&amp;background=random"/>
</div>
<div>
<p className="text-sm font-medium text-white">"We treat every client business as if it were our own equity."</p>
<p className="text-xs text-indigo-300 mt-1">Alex M. — Founder, NEXUS</p>
</div>
</div>
</div>
</div>
<div className="p-10 md:p-16 bg-white/[0.02]">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wide">Name</label>
<input className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-slate-700" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wide">Email</label>
<input className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-slate-700" placeholder="john@company.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wide">Company Website</label>
<input className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-slate-700" placeholder="https://yourbrand.com" type="url"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wide">Primary Goal</label>
<select className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-indigo-500 transition-colors [&amp;&gt;option]:bg-slate-900">
<option>Scaling eCommerce Sales</option>
<option>New Website / Redesign</option>
<option>Brand Awareness / Content</option>
<option>Full Agency Management</option>
</select>
</div>
<button className="w-full bg-white text-slate-950 py-3 rounded text-sm font-semibold hover:bg-slate-200 transition-colors mt-4" type="submit">
                                Schedule Free Consultation
                            </button>
<p className="text-center text-[10px] text-slate-500">No commitment required. 100% Free Strategy Session.</p>
</form>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-2xl font-medium tracking-tight mb-10 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group glass-panel rounded-lg">
<summary className="flex items-center justify-between p-4 cursor-pointer">
<span className="text-sm font-medium">Do you work with startups or only established brands?</span>
<iconify-icon className="text-slate-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-4 pb-4 text-sm text-slate-400 font-light leading-relaxed">
                        We work with both. However, for full-service growth packages, we typically look for brands that have product-market fit and are ready to invest in scaling. For startups, our web development packages are the perfect entry point.
                    </div>
</details>
<details className="group glass-panel rounded-lg">
<summary className="flex items-center justify-between p-4 cursor-pointer">
<span className="text-sm font-medium">What platforms do you build on?</span>
<iconify-icon className="text-slate-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-4 pb-4 text-sm text-slate-400 font-light leading-relaxed">
                        We specialize in Shopify for eCommerce due to its scalability. For service businesses and portfolios, we use WordPress or custom Next.js builds depending on your performance needs.
                    </div>
</details>
<details className="group glass-panel rounded-lg">
<summary className="flex items-center justify-between p-4 cursor-pointer">
<span className="text-sm font-medium">How long does a website build take?</span>
<iconify-icon className="text-slate-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-4 pb-4 text-sm text-slate-400 font-light leading-relaxed">
                        A typical high-performance landing page takes 1-2 weeks. A full custom eCommerce build typically takes 4-8 weeks, depending on complexity and content readiness.
                    </div>
</details>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/5 bg-[#010205]">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="w-6 h-6 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-[10px] font-bold">N</span>
<span className="text-lg font-semibold tracking-tight">NEXUS</span>
</div>
<div className="text-xs text-slate-500">
                © 2024 Nexus Agency. All rights reserved.
            </div>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-instagram-linear" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
</div>
</div>
</footer>

    </>
  );
}
