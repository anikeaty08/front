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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<nav className="fixed top-0 w-full bg-neutral-950/80 backdrop-blur-md border-b border-white/5 z-50">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="uppercase flex items-center gap-1 bg-clip-text text-lg font-semibold text-transparent tracking-tighter bg-gradient-to-r from-blue-400 to-emerald-400" href="#">SCALVENGE</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#work">Work</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<a className="glow-button transition-opacity text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full pt-2 pr-5 pb-2 pl-5" href="https://form.typeform.com/to/cRJotgdA">
  Book A Call
</a>
<style className="">
.glow-button {
  position: relative;
  box-shadow: 0 0 15px rgba(16, 185, 129, 0.6),
              0 0 30px rgba(37, 99, 235, 0.5);
  transition: box-shadow 0.3s ease, transform 0.2s ease;
}

.glow-button:hover {
  box-shadow: 0 0 25px rgba(16, 185, 129, 0.9),
              0 0 50px rgba(37, 99, 235, 0.8);
  transform: translateY(-1px);
}
</style>
</div>
</nav>

<section className="md:pt-48 md:pb-32 hero-pattern pt-32 pr-6 pb-20 pl-6 relative">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-950 pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-neutral-300 mb-8 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
                Accepting new partners for Scalvenge
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-[1.1] mb-6 text-balance text-white">
                GET MORE LEADS &amp; ClIENTS BY USING <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">PAID ADS &amp; AUTOMATION.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 font-normal mb-10 max-w-2xl mx-auto text-balance">
                We build predictable revenue engines for med spas, clothing, gyms, car detailing and many more  businesses. Stop guessing, start scaling.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-emerald-500 text-white px-8 py-3.5 rounded-full text-base font-medium hover:opacity-90 transition-opacity shadow-sm flex items-center justify-center gap-2" href="#book">
                    Book a Free Strategy Call
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-full sm:w-auto bg-white/5 text-white border border-white/10 px-8 py-3.5 rounded-full text-base font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm" href="#services">
                    Get a Free Growth Audit
                </a>
</div>
<p className="text-xs text-neutral-500 mt-6">No pressure. Just actionable insights.</p>
</div>
</section>

<section className="border-y border-white/5 bg-white/[0.02] py-10 px-6">
<div className="max-w-7xl mx-auto">
<p className="text-center text-xs font-medium text-neutral-500 mb-6 uppercase tracking-widest">Trusted by local leaders</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40">

<div className="font-semibold tracking-tighter text-xl text-white">AURA SPA</div>
<div className="font-semibold tracking-tighter text-xl text-white">APEX FITNESS</div>
<div className="font-semibold tracking-tighter text-xl text-white">LUMINA DENTAL</div>
<div className="font-semibold tracking-tighter text-xl text-white">ELEVATE REALTY</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="services">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">Core Growth Systems</h2>
<p className="text-base text-neutral-400 font-normal text-balance">We don't do everything. We specialize in the three pillars required to turn strangers into high-paying clients.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl border border-white/10 bg-neutral-900/40 hover:bg-neutral-900/60 hover:border-white/20 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-blue-400" icon="solar:target-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3 text-white">Targeted Paid Ads</h3>
<p className="text-sm text-neutral-400 mb-6 font-normal leading-relaxed">Stop wasting budget on "boosted posts". We build direct-response campaigns on Meta ads designed purely for ROI.</p>
<ul className="space-y-3 text-sm text-neutral-300 font-normal">
<li className="flex items-start gap-2">
<iconify-icon className="text-emerald-400 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                            For businesses wanting immediate volume.
                        </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-emerald-400 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Solves inconsistent lead flow.
                        </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-emerald-400 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Expect qualified traffic within 7 days.
                        </li>
</ul>
</div>

<div className="p-8 rounded-2xl border border-white/10 bg-neutral-900/40 hover:bg-neutral-900/60 hover:border-white/20 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-blue-400" icon="solar:filter-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3 text-white">Conversion Funnels</h3>
<p className="text-sm text-neutral-400 mb-6 font-normal leading-relaxed">Traffic is useless if it doesn't convert. We design high-converting landing pages that compel visitors to book or buy.</p>
<ul className="space-y-3 text-sm text-neutral-300 font-normal">
<li className="flex items-start gap-2">
<iconify-icon className="text-emerald-400 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                            For businesses with low website conversions.
                        </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-emerald-400 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Solves the "browsing but not buying" problem.
                        </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-emerald-400 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Expect 2x-3x higher opt-in rates.
                        </li>
</ul>
</div>

<div className="p-8 rounded-2xl border border-white/10 bg-neutral-900/40 hover:bg-neutral-900/60 hover:border-white/20 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-blue-400" icon="solar:settings-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3 text-white">CRM &amp; Automations</h3>
<p className="text-sm text-neutral-400 mb-6 font-normal leading-relaxed">Speed to lead is everything. We implement SMS/Email follow-ups so you never lose a lead to a slow reply.</p>
<ul className="space-y-3 text-sm text-neutral-300 font-normal">
<li className="flex items-start gap-2">
<iconify-icon className="text-emerald-400 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                            For owners tired of manual follow-ups.
                        </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-emerald-400 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Solves leads slipping through the cracks.
                        </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-emerald-400 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Expect higher show-up rates on bookings.
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-white/[0.02] border-y border-white/5">
<div className="max-w-7xl mx-auto">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-12 text-center text-white">Our 3-Step Growth Protocol</h2>
<div className="grid md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-6 left-12 right-12 h-px bg-white/10 z-0"></div>
<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-12 h-12 bg-neutral-950 border border-white/10 rounded-full flex items-center justify-center text-lg font-medium mb-4 text-neutral-400">1</div>
<h4 className="text-lg font-medium tracking-tight mb-2 text-white">Discovery &amp; Strategy</h4>
<p className="text-sm text-neutral-400 font-normal">We audit your current ecosystem, identify bottlenecks, and map out a custom acquisition funnel.</p>
</div>
<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-emerald-500 text-white rounded-full flex items-center justify-center text-lg font-medium mb-4 shadow-[0_0_15px_rgba(59,130,246,0.5)]">2</div>
<h4 className="text-lg font-medium tracking-tight mb-2 text-white">Build &amp; Launch</h4>
<p className="text-sm text-neutral-400 font-normal">We craft the ad creative, build the landing pages, and wire up the backend automations. Hands-free for you.</p>
</div>
<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-12 h-12 bg-neutral-950 border border-white/10 rounded-full flex items-center justify-center text-lg font-medium mb-4 text-neutral-400">3</div>
<h4 className="text-lg font-medium tracking-tight mb-2 text-white">Scale &amp; Optimize</h4>
<p className="text-sm text-neutral-400 font-normal">We monitor data daily, kill underperforming ads, and scale winners to maximize your return on ad spend.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="work">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">Proof, Not Promises.</h2>
<p className="text-base text-neutral-400 font-normal">Here is how our systems perform in the real world. We focus on metrics that actually impact your bottom line.</p>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="border border-white/10 rounded-2xl p-8 bg-neutral-900/30 flex flex-col h-full">
<div className="inline-flex items-center gap-2 text-xs font-medium text-blue-400 mb-6 uppercase tracking-wider bg-blue-500/10 px-3 py-1.5 rounded-full w-fit border border-blue-500/20">
<iconify-icon icon="solar:buildings-linear"></iconify-icon> Medical Spa
                    </div>
<div className="flex items-baseline gap-2 mb-6">
<span className="text-5xl font-semibold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">42</span>
<span className="text-lg font-medium text-neutral-400">New bookings / mo</span>
</div>
<div className="space-y-4 mb-8 flex-grow">
<div className="">
<p className="text-sm font-medium text-white mb-1">The Problem</p>
<p className="text-sm text-neutral-400 font-normal">Relying solely on word-of-mouth. Empty calendar slots during mid-week.</p>
</div>
<div className="">
<p className="text-sm font-medium text-white mb-1">The Strategy</p>
<p className="text-sm text-neutral-400 font-normal">Meta lead generation campaign offering a first-time facial discount, funneling into an automated SMS booking sequence.</p>
</div>
</div>
<div className="pt-6 border-t border-white/5 mt-auto">
<p className="text-sm italic text-neutral-500 font-normal">"We went from wondering where our next client was coming from to having a 2-week waitlist. The automation does all the heavy lifting."</p>
<p className="text-xs font-medium text-white mt-2">— Sarah J., Owner</p>
</div>
</div>

<div className="border border-white/10 rounded-2xl p-8 bg-neutral-900/30 flex flex-col h-full">
<div className="inline-flex items-center gap-2 text-xs font-medium text-emerald-400 mb-6 uppercase tracking-wider bg-emerald-500/10 px-3 py-1.5 rounded-full w-fit border border-emerald-500/20">
<iconify-icon icon="solar:home-linear"></iconify-icon> Boutique Gym
                    </div>
<div className="flex items-baseline gap-2 mb-6">
<span className="text-5xl font-semibold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">-40%</span>
<span className="text-lg font-medium text-neutral-400">Cost per Acquisition</span>
</div>
<div className="space-y-4 mb-8 flex-grow">
<div className="">
<p className="text-sm font-medium text-white mb-1">The Problem</p>
<p className="text-sm text-neutral-400 font-normal">Running own ads with a generic agency. Getting "leads" but nobody showing up for intro classes.</p>
</div>
<div className="">
<p className="text-sm font-medium text-white mb-1">The Strategy</p>
<p className="text-sm text-neutral-400 font-normal">Rebuilt landing page to qualify intent, implemented 5-minute speed-to-lead automation, and refined audience targeting.</p>
</div>
</div>
<div className="pt-6 border-t border-white/5 mt-auto">
<p className="text-sm italic text-neutral-500 font-normal">"The difference isn't just in the number of leads, it's the quality. People are actually walking through the door ready to sign up."</p>
<p className="text-xs font-medium text-white mt-2">— Mike T., Founder</p>
</div>
</div>
</div>
</div>
</section>

<section className="border-y bg-black border-white/5 pt-24 pr-6 pb-24 pl-6" id="about">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="">
<h2 className="md:text-4xl text-3xl font-semibold text-white tracking-tight mb-6">Our Goal.</h2>
<div className="space-y-4 text-base font-normal text-neutral-400 leading-relaxed">
<p className="">We saw too many  business owners getting burned by massive agencies that over-promised and under-delivered. They were sold vanity metrics—likes, clicks, and impressions—instead of what actually matters: <span className="text-white">revenue</span>.</p>
<p className="">We built Scalvenge with a simple philosophy: <span className="text-white font-medium">Clients buy clarity and confidence, not just a service.</span></p>
<p className="">We want to work with you as a team not just a service provider. We keep our client roster small intentionally so we can integrate deeply into your business, we treat your ad spend like our own, and build systems that stand the test of time.</p>
</div>
<div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-4">
</div>
</div>
<div className="md:h-[500px] overflow-hidden flex group bg-neutral-900/50 h-[400px] border-white/10 border rounded-3xl relative items-center justify-center">
<div className="bg-center z-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/35496d4c-4f4a-428b-8682-0edf895a05c8_3840w.jpg)] bg-cover absolute top-0 right-0 bottom-0 left-0">
</div>

<svg className="group-hover:scale-110 group-hover:text-blue-500/20 transition-all duration-700 z-0 text-9xl text-white/5" data-icon-set="solar" data-solar="code-square-linear" height="128" viewbox="0 0 24 24" width="128" xmlns="http://www.w3.org/2000/svg">f</svg>
<div className="absolute bottom-6 left-6 z-20">
<div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-4">
<p className="text-xs text-emerald-400 font-medium tracking-wide uppercase mb-1">Our Focus</p>
<p className="text-sm text-white font-medium">ROI &gt; Everything Else</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-white/5 border-b pt-24 pr-6 pb-24 pl-6" id="pricing">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">Transparent Pricing.</h2>
<p className="text-base text-neutral-400 font-normal mb-10 text-balance">We don't do cookie-cutter packages. Every business needs a specific engine. However, to ensure we're a good fit, here is our baseline.</p>
<div className="bg-neutral-900/30 border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden">

<div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
<div className="mb-6 relative z-10">
<p className="text-sm font-medium text-blue-400 uppercase tracking-widest mb-2">Growth Partner Retainer</p>
<div className="flex items-center justify-center gap-2">
<span className="text-lg text-neutral-500">Starting at</span>
<span className="text-4xl font-semibold text-white tracking-tighter inline-flex items-baseline gap-2"><span className="text-2xl text-neutral-500 line-through font-medium">$1500</span>$1000</span>
<span className="text-lg text-neutral-500">/mo</span>
</div>
<p className="text-xs text-neutral-500 mt-2">*Excludes ad spend</p>
</div>
<div className="grid sm:grid-cols-2 z-10 text-left max-w-lg border-white/10 border-t mt-8 mr-auto ml-auto pt-8 relative gap-x-4 gap-y-4">
<div className="flex items-start gap-2">
<iconify-icon className="text-emerald-400 mt-0.5 text-lg" icon="solar:check-read-linear"></iconify-icon>
<span className="text-sm text-neutral-300 font-normal">Weekly Reporting</span>
</div>
<div className="flex items-start gap-2">
<iconify-icon className="text-emerald-400 mt-0.5 text-lg" icon="solar:check-read-linear"></iconify-icon>
<span className="text-sm text-neutral-300 font-normal">Ad Management (Facebook &amp; Instagram)</span>
</div>
<div className="flex items-start gap-2">
<iconify-icon className="text-emerald-400 mt-0.5 text-lg" icon="solar:check-read-linear"></iconify-icon>
<span className="text-sm text-neutral-300 font-normal">CRM Build &amp; Automations</span>
</div>
<div className="flex items-start gap-2">
<iconify-icon className="text-emerald-400 mt-0.5 text-lg" icon="solar:check-read-linear"></iconify-icon>
<span className="text-sm text-neutral-300 font-normal">Personal Made Roadmap</span>
</div>
<div className="flex items-start gap-2">
<iconify-icon className="text-emerald-400 mt-1 text-lg" icon="solar:check-read-linear"></iconify-icon>
<span className="text-sm text-neutral-300 font-normal">Website Builder</span>
</div>
</div>
</div>
<p className="text-sm text-neutral-500 mt-8">Custom pricing available for enterprise scaling &amp; high ad budgets.</p>
</div>
</section>

<section className="py-24 px-6 bg-neutral-950">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl font-semibold tracking-tight mb-10 text-center text-white">Common Questions</h2>
<div className="space-y-4">

<details className="group border border-white/10 rounded-xl bg-neutral-900/30 overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-white font-medium text-base hover:bg-white/5 transition-colors">
                        How long until we see results?
                        <iconify-icon className="shrink-0 transition duration-300 group-open:-rotate-45 text-xl text-neutral-500 group-hover:text-white" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-400 font-normal leading-relaxed">
                        We aim to launch your campaigns within 7-10 days of onboarding. Once live, you can expect to see initial lead flow within 48-72 hours. We spend the first 30 days testing and optimizing to find the lowest cost per acquisition.
                    </div>
</details>

<details className="group border border-white/10 rounded-xl bg-neutral-900/30 overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-white font-medium text-base hover:bg-white/5 transition-colors">
                        Do you require long-term contracts?
                        <iconify-icon className="shrink-0 transition duration-300 group-open:-rotate-45 text-xl text-neutral-500 group-hover:text-white" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-400 font-normal leading-relaxed">
                        We typically start with a 3-month initial agreement because ad platforms need time to optimize and gather data. After that, we move to a month-to-month basis. We want to keep you because of results, not legal binding.
                    </div>
</details>

<details className="group border border-white/10 rounded-xl bg-neutral-900/30 overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-white font-medium text-base hover:bg-white/5 transition-colors">
                        What ad budget do I need?
                        <iconify-icon className="shrink-0 transition duration-300 group-open:-rotate-45 text-xl text-neutral-500 group-hover:text-white" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-400 font-normal leading-relaxed">
                        To get meaningful data and results quickly, we recommend a minimum ad spend of $30-$50/day directly to the platforms (Meta/Google). This is separate from our agency retainer.
                    </div>
</details>

<details className="group border border-white/10 rounded-xl bg-neutral-900/30 overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-white font-medium text-base hover:bg-white/5 transition-colors">
                        What makes you different from other agencies?
                        <iconify-icon className="shrink-0 transition duration-300 group-open:-rotate-45 text-xl text-neutral-500 group-hover:text-white" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-400 font-normal leading-relaxed">
                        We don't just generate leads and leave you to figure it out. We build the entire system—from the ad that grabs attention, to the funnel that captures info, to the automated text messages that actually get them to show up. We are full-funnel partners.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5" id="book">
<div className="max-w-6xl mx-auto">
<div className="md:p-16 flex flex-col lg:flex-row lg:items-center overflow-hidden bg-neutral-900/40 border-white/10 border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative gap-x-12 gap-y-12">

<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/10 to-emerald-900/10 pointer-events-none"></div>
<div className="lg:w-1/2 text-white relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-6 text-balance">Ready to stop guessing and start scaling?</h2>
<p className="text-base text-neutral-400 font-normal mb-8 leading-relaxed">
                        Book a free 30-minute discovery call. We'll pop the hood on your current marketing, identify where you're losing money, and map out a plan completly free.
                    </p>
<div className="space-y-6">
<div className="">
<p className="text-sm font-medium text-white mb-2 uppercase tracking-wider">Who this is for:</p>
<ul className="space-y-2 text-sm text-neutral-400 font-normal">
<li className="flex items-center gap-2">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-linear"></iconify-icon> Local businesses with proven offers.
                                </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-linear"></iconify-icon> Capacity to handle 10-30+ new clients/mo.
                                </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-linear"></iconify-icon> Willing to invest in growth.
                                </li>
</ul>
</div>
<div className="">
<p className="text-sm font-medium text-white mb-2 uppercase tracking-wider">Who this is NOT for:</p>
<ul className="space-y-2 text-sm text-neutral-400 font-normal">
<li className="flex items-center gap-2">
<iconify-icon className="text-red-400" icon="solar:close-circle-linear"></iconify-icon> Brand new businesses with zero budget.
                                </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-red-400" icon="solar:close-circle-linear"></iconify-icon> People looking for "get rich quick" hacks.
                                </li>
</ul>
</div>
</div>
</div>
<div className="lg:w-1/2 relative z-10">

<div className="bg-neutral-950 rounded-2xl p-8 h-[400px] flex flex-col items-center justify-center border border-white/10 shadow-2xl relative overflow-hidden">
<div className="absolute inset-0 bg-white/[0.02]"></div>
<iconify-icon className="text-6xl text-blue-500/50 mb-4 relative z-10" icon="solar:calendar-date-linear"></iconify-icon>
<h3 className="z-10 text-xl font-medium text-white mb-2 relative">Select a Date &amp; Time In Calendly</h3>
<p className="text-sm text-neutral-500 text-center z-10 mb-6 relative"></p>
<button className="hover:bg-neutral-200 transition-colors cursor-pointer z-10 text-sm font-medium text-black bg-white rounded-full pt-2.5 pr-6 pb-2.5 pl-6 relative" onclick="window.location.href='https://calendly.com/octaviocardenas24/30min'" role="button">Book Call</button>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-neutral-950 border-t border-white/5 py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex flex-col items-center md:items-start">
<a className="font-semibold tracking-tighter text-lg uppercase flex items-center gap-1 mb-2 text-white" href="#">
<iconify-icon className="text-blue-500" icon="solar:chart-bold-duotone"></iconify-icon>
                    SCALVENGE.
                </a>
<p className="text-xs text-neutral-600">© 2025 Scalvenge. All rights reserved.</p>
</div>
<div className="flex gap-6 text-sm text-neutral-500 font-medium">
<a className="hover:text-white transition-colors relative" href="https://drive.google.com/file/d/1p6B2deHuz2gy6z7vucx7necezo7f5AMT/view?usp=sharing" onclick="document.getElementById('privacy-modal-aura-emnvdsqth15g3nev7').classList.remove('hidden');">Privacy and Terms</a>
</div>
</div>
</footer>

25
    </>
  );
}
