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



        lucide.createIcons();
    
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
      

<nav className="fixed w-full z-50 top-0 border-b backdrop-blur-md border-neutral-800 bg-black/80">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="Kealu Logo" className="h-8 w-8 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/72f759b8-64af-486a-9fc6-e68d6d50df85_800w.png"/>
<span className="font-medium text-lg tracking-tight text-white">Kealu Inc</span>
</div>
<div className="hidden md:flex text-sm font-medium gap-x-8 gap-y-8 items-center">
<a className="transition-colors hover:text-white" href="#solution">Solution</a>
<a className="transition-colors hover:text-white" href="#moat">The Moat</a>
<a className="transition-colors hover:text-white" href="#team">Team</a>
<a className="px-4 py-2 rounded-full border transition-all text-white bg-neutral-800 hover:bg-neutral-700 border-neutral-700" href="#ask">Invest</a>
</div>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden pt-32 pb-20 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] rounded-full blur-[120px] -z-10 bg-indigo-900/20"></div>
<div className="max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex text-xs text-neutral-300 bg-neutral-900/50 border-neutral-800 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">🟢 Investors Pitch Deck</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.1] mb-8 text-white">
                The Industrial Revolution <br/>
                for <span className="gradient-text">Intellectual Labor.</span>
</h1>
<p className="md:text-2xl leading-relaxed text-xl font-light text-neutral-400 max-w-2xl mr-auto mb-10 ml-auto">Kealu: Weaponizing Velocity in Deep Tech.</p>
<div className="flex flex-col md:flex-row gap-4 gap-x-4 gap-y-4 items-center justify-center">
</div>
</div>
</section>

<section className="py-24 border-y border-neutral-900 bg-neutral-950/50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 text-white">
                        Time to Result is the <br/> Only Metric That Matters.
                    </h2>
<p className="text-lg mb-6 leading-relaxed text-neutral-400">
                        In high-stakes fields like Deep Tech, Bio, and Fusion, value isn't defined by effort; it's defined by speed.
                    </p>
<div className="space-y-6">
<div className="pl-4 border-l-2 border-blue-500/50">
<h4 className="font-medium text-lg mb-1 text-white">The Pain Point</h4>
<p className="text-neutral-500">Companies currently spend <span className="text-blue-400">80%</span> of funding on iterative simulation and manual verification. Workflows are "slow-moving tankers."</p>
</div>
<div className="pl-4 border-l-2 border-indigo-500">
<h4 className="font-medium text-lg mb-1 text-white">The Opportunity</h4>
<p className="text-neutral-500">We cut that overhead to <span className="text-indigo-400">8%</span>, solving the "Scarcity of Execution."</p>
</div>
</div>
</div>
<div className="relative">

<div className="glass rounded-2xl p-8">
<div className="flex items-end justify-between gap-4 h-64 mb-4">
<div className="w-full rounded-t-lg relative group h-full bg-neutral-800">
<div className="absolute bottom-0 w-full bg-blue-500/20 h-[80%] rounded-t-lg transition-all duration-1000 group-hover:bg-blue-500/30"></div>
<span className="absolute top-4 left-1/2 -translate-x-1/2 font-mono text-xl text-blue-400">80% Overhead</span>
</div>
<div className="w-full rounded-t-lg relative group h-full bg-neutral-800">
<div className="absolute bottom-0 w-full bg-indigo-500 h-[8%] rounded-t-lg shadow-[0_0_20px_rgba(45,212,191,0.5)]"></div>
<span className="absolute -top-8 left-1/2 -translate-x-1/2 font-mono text-xl font-medium text-indigo-400">8% Kealu</span>
</div>
</div>
<p className="text-center text-sm text-neutral-500 font-mono uppercase tracking-widest">Resource Allocation</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="solution">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4 text-white">The "90/90" Transformation</h2>
<p className="text-xl text-neutral-400">A paradigm shift that is <span className="text-indigo-400">90% Faster</span> and <span className="text-indigo-400">90% Cheaper</span>.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass p-8 rounded-2xl hover:border-indigo-500/30 transition-colors">
<div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 bg-neutral-800 text-white">
<svg aria-hidden="true" className="lucide lucide-cpu w-6 h-6" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<h3 className="text-xl font-medium mb-3 text-white">Automated Foundry</h3>
<p className="text-lg leading-relaxed text-neutral-400">
                        We aren't a consultancy; we are a factory. We utilize Frontier Models to generate unique, client-specific architectures at scale.
                    </p>
</div>

<div className="glass p-8 rounded-2xl hover:border-indigo-500/30 transition-colors">
<div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 bg-neutral-800 text-white">
<svg aria-hidden="true" className="lucide lucide-brain-circuit w-6 h-6" data-lucide="brain-circuit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
</div>
<h3 className="text-xl font-medium mb-3 text-white">Proprietary Brain</h3>
<p className="text-lg leading-relaxed text-neutral-400">
                        Clients get a proprietary brain tailored to their specific data without the manual service costs. Fine-tuned on Llama &amp; Mistral.
                    </p>
</div>

<div className="glass p-8 rounded-2xl hover:border-indigo-500/30 transition-colors">
<div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 bg-neutral-800 text-white">
<svg aria-hidden="true" className="lucide lucide-zap w-6 h-6" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-xl font-medium mb-3 text-white">The Sweet Spot</h3>
<p className="text-lg leading-relaxed text-neutral-400">
                        An agentic tool robust enough for oversight but fast enough to compress timelines exponentially.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-y bg-neutral-900/20 border-neutral-800" id="moat">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-16">
<div className="lg:w-1/3">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 text-white">
                        Proprietary Infrastructure is the Moat.
                    </h2>
<p className="text-lg mb-8 text-neutral-400">
                        We don't just use the stack; we own the substrate. By rewriting the kernel architecture, we allow users to bring 10 features to market in one-tenth the time.
                    </p>
<div className="p-6 rounded-xl border bg-neutral-900 border-neutral-800">
<div className="flex items-center gap-4 mb-4">
<div className="bg-indigo-500/10 p-2 rounded-lg">
<svg aria-hidden="true" className="lucide lucide-trending-up w-6 h-6 text-indigo-400" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<div>
<h4 className="font-medium text-white">Exponential Growth</h4>
<p className="text-sm text-neutral-500">Compute = Output</p>
</div>
</div>
<p className="text-sm text-neutral-400">Unlike traditional linear growth where Headcount = Output.</p>
</div>
</div>
<div className="lg:w-2/3">
<h3 className="text-xl font-medium mb-6 flex items-center gap-2 text-white">
<svg aria-hidden="true" className="lucide lucide-shield-check w-5 h-5 text-indigo-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg> 
                        Strategic IP Portfolio (15+ Filings)
                    </h3>
<div className="overflow-hidden border rounded-xl border-neutral-800">
<table className="w-full text-left border-collapse">
<thead className="text-xs uppercase tracking-wider bg-neutral-900 text-neutral-400">
<tr className="">
<th className="p-4 font-medium border-b border-neutral-800">Core Innovation</th>
<th className="p-4 font-medium border-b hidden sm:table-cell border-neutral-800">Patent ID</th>
<th className="p-4 font-medium border-b border-neutral-800">Strategic Advantage</th>
</tr>
</thead>
<tbody className="divide-y divide-neutral-800 bg-black/40">
<tr className="group transition-colors hover:bg-neutral-900/50">
<td className="p-4 font-medium text-white">Kernel-Native Networking</td>
<td className="p-4 text-neutral-500 text-sm font-mono hidden sm:table-cell">KEALU-00001</td>
<td className="p-4 text-sm text-neutral-400">"Zero-Copy Speed." Transforming workloads from O(N) to O(1).</td>
</tr>
<tr className="group transition-colors hover:bg-neutral-900/50">
<td className="p-4 font-medium text-white">Gate-Aware Orchestration</td>
<td className="p-4 text-neutral-500 text-sm font-mono hidden sm:table-cell">KEALU-00010</td>
<td className="p-4 text-sm text-neutral-400">"Enforced Accuracy." Quality Gates ensure high-stakes sign-off.</td>
</tr>
<tr className="group transition-colors hover:bg-neutral-900/50">
<td className="p-4 font-medium text-white">Intra-Unikernel Isolation</td>
<td className="p-4 text-neutral-500 text-sm font-mono hidden sm:table-cell">KEALU-00011</td>
<td className="p-4 text-sm text-neutral-400">"Margin Protection." 10x agent density on bare metal.</td>
</tr>
<tr className="group transition-colors hover:bg-neutral-900/50">
<td className="p-4 font-medium text-white">Distributed Swarm Substrate</td>
<td className="p-4 text-neutral-500 text-sm font-mono hidden sm:table-cell">KEALU-00014</td>
<td className="p-4 text-sm text-neutral-400">"Hive Mind." Zero-Copy Teleportation of massive contexts.</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-24" id="team">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-2 text-white">Built by Architects of High-Frequency Infrastructure.</h2>
<p className="text-lg text-neutral-500">We aren't just app developers; we are infrastructure engineers rewriting the stack.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="border-neutral-800 border-t pt-6">
<h3 className="text-xl font-medium text-white">Roy Reichbach - Founder / CEO</h3>
<p className="text-sm mb-4 text-indigo-400">Ex-High Frequency Trading</p>
<p className="leading-relaxed text-lg text-neutral-400">
                        Expert in low-latency architecture. Previously shipped systems handling massive requests/sec.
                    </p>
</div>

<div className="border-neutral-800 border-t pt-6">
<h3 className="text-xl font-medium text-white"> Stefan Birrer - Founder / CTO</h3>
<p className="text-sm mb-4 text-indigo-400">PhD Distributed Systems</p>
<p className="leading-relaxed text-lg text-neutral-400">
                        Patent holder. Specialized in "Zero-Copy" networking and kernel optimization.
                    </p>
</div>

<div className="border-neutral-800 border-t pt-6">
<h3 className="text-xl font-medium text-white">Fabian E. Bustamante Head of AI Alignment</h3>
<p className="text-sm mb-4 text-indigo-400">Ex-Safety Critical Auto</p>
<p className="leading-relaxed text-lg text-neutral-400">
                        Focused on "Safety-Critical" autonomous navigation and deterministic execution.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-neutral-900/30 to-black">
<div className="max-w-7xl mx-auto px-6">
<h2 className="md:text-4xl text-3xl font-medium text-white tracking-tight text-center mb-16">Capturing Value Across the Ecosystem</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="border rounded-2xl p-8 flex flex-col justify-between border-neutral-800">
<div>
<h3 className="text-xl font-medium mb-2 text-white">Solo Founder</h3>
<div className="text-3xl font-medium mb-4 text-white">$29 - $100<span className="text-neutral-500 text-lg font-normal">/mo</span></div>
<p className="mb-6 text-lg text-neutral-400">"The Trojan Horse". Low barrier to entry to create ecosystem addiction early (PLG).</p>
</div>
<ul className="space-y-3 text-sm text-neutral-400">
<li className="flex items-center gap-2"><svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-neutral-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Standard Access</li>
<li className="flex items-center gap-2"><svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-neutral-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Basic Fine-tuning</li>
</ul>
</div>

<div className="border rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden border-neutral-800 bg-neutral-900/40">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
<div className="">
<h3 className="text-xl font-medium mb-2 text-white">Growth Stage</h3>
<div className="text-3xl font-medium mb-4 text-white">$500 - $2.5k<span className="text-neutral-500 text-lg font-normal">/mo</span></div>
<p className="mb-6 text-lg text-neutral-400">Usage-based pricing scales directly with users, data rows, or API calls.</p>
</div>
<ul className="space-y-3 text-sm text-neutral-400">
<li className="flex items-center gap-2"><svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-indigo-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Usage-based scaling</li>
<li className="flex items-center gap-2"><svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-indigo-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> API Access</li>
</ul>
</div>

<div className="border border-indigo-500/30 rounded-2xl p-8 flex flex-col justify-between bg-indigo-900/10">
<div className="">
<h3 className="text-xl font-medium mb-2 text-white text-indigo-400">Enterprise</h3>
<div className="text-3xl font-medium mb-4 text-white">$50k - $250k<span className="text-neutral-500 text-lg font-normal">/yr</span></div>
<p className="mb-6 text-lg text-neutral-300">High-margin contracts. Automated Platform Fine-Tuning ensuring data sovereignty.</p>
</div>
<ul className="space-y-3 text-sm text-neutral-300">
<li className="flex items-center gap-2"><svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-indigo-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Private Infrastructure</li>
<li className="flex items-center gap-2"><svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-indigo-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> SaaS-level margins</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight mb-12 text-white">The Dual-Sided Flywheel</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-px rounded-2xl overflow-hidden border bg-neutral-800 border-neutral-800">
<div className="p-10 transition-colors bg-black hover:bg-neutral-900/50">
<div className="flex items-center gap-3 mb-4">
<span className="p-2 rounded-lg bg-neutral-800 text-white"><svg aria-hidden="true" className="lucide lucide-users w-5 h-5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg></span>
<h3 className="text-xl font-medium text-white">For Our Clients</h3>
</div>
<p className="text-2xl mb-2 text-white">Velocity.</p>
<p className="text-lg leading-relaxed mb-4 text-neutral-400">10 Features vs 1. Budget previously sunk into labor now funds 10x more shots on goal.</p>
</div>
<div className="p-10 transition-colors bg-black hover:bg-neutral-900/50">
<div className="flex items-center gap-3 mb-4">
<span className="p-2 rounded-lg bg-neutral-800 text-white"><svg aria-hidden="true" className="lucide lucide-bar-chart-3 w-5 h-5" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg></span>
<h3 className="text-xl font-medium text-white">For Kealu Inc</h3>
</div>
<p className="text-2xl mb-2 text-white">Margins.</p>
<p className="text-lg leading-relaxed mb-4 text-neutral-400">90%+ Gross Margins. Automated delivery keeps Cost of Revenue low (~10%).</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/20">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">Solving the "Three Horsemen" of AI Risk</h2>
<p className="text-lg text-neutral-500 mt-2">Our IP doesn't just make us faster; it makes the business model viable.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="space-y-4">
<div className="h-1 w-12 bg-blue-500 rounded-full"></div>
<h3 className="font-medium text-xl text-white">The Margin Trap</h3>
<p className="text-neutral-500 text-sm">Problem: Compute Costs &gt; Revenue</p>
<div className="font-medium text-indigo-400">Solution: Intra-Unikernel Isolation</div>
<p className="text-neutral-400">10x Efficiency. We run 10 agents for the cost of 1 competitor agent.</p>
</div>
<div className="space-y-4">
<div className="h-1 w-12 bg-yellow-500 rounded-full"></div>
<h3 className="font-medium text-xl text-white">The Safety Gap</h3>
<p className="text-neutral-500 text-sm">Problem: "Runaway AI"</p>
<div className="font-medium text-indigo-400">Solution: Gate-Aware Orchestration</div>
<p className="text-neutral-400">We sell "Enforced Accuracy," not just "Best Effort."</p>
</div>
<div className="space-y-4">
<div className="h-1 w-12 bg-cyan-500 rounded-full"></div>
<h3 className="font-medium text-xl text-white">The Context Wall</h3>
<p className="text-neutral-500 text-sm">Problem: Agents forget/burn cash</p>
<div className="font-medium text-indigo-400">Solution: Distributed Swarm Substrate</div>
<p className="text-neutral-400">Persistent Intelligence. Agents share context instantly without re-processing.</p>
</div>
</div>
</div>
</section>

<section className="py-32 border-t relative overflow-hidden border-neutral-800" id="ask">
<div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-black to-black absolute top-0 right-0 bottom-0 left-0"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-xl mb-6 font-medium text-neutral-400">The Ask</h2>
<div className="text-6xl md:text-9xl font-semibold tracking-tighter mb-8 text-white">$50 Million</div>
<p className="text-2xl font-light mb-16 text-neutral-300">To Eliminate the Scarcity of Execution.</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-3xl mx-auto">
<div>
<div className="flex items-end gap-2 mb-2">
<span className="text-4xl font-medium text-indigo-400">40%</span>
<span className="text-neutral-500 text-sm mb-1">Engineering</span>
</div>
<div className="w-full h-1 rounded-full mb-2 bg-neutral-800">
<div className="h-1 rounded-full w-[40%] bg-indigo-400"></div>
</div>
<p className="text-sm text-neutral-400">Ensuring the tool remains the "sweet spot" of credibility.</p>
</div>
<div className="">
<div className="flex items-end gap-2 mb-2">
<span className="text-4xl font-medium text-blue-400">30%</span>
<span className="text-neutral-500 text-sm mb-1">Pilot Integration</span>
</div>
<div className="w-full h-1 rounded-full mb-2 bg-neutral-800">
<div className="h-1 rounded-full w-[30%] bg-blue-400"></div>
</div>
<p className="text-sm text-neutral-400">Validating "Time to Result" in Computational Biology.</p>
</div>
<div>
<div className="flex items-end gap-2 mb-2">
<span className="text-4xl font-medium text-cyan-400">30%</span>
<span className="text-neutral-500 text-sm mb-1">Expansion</span>
</div>
<div className="w-full h-1 rounded-full mb-2 bg-neutral-800">
<div className="h-1 rounded-full w-[30%] bg-cyan-400"></div>
</div>
<p className="text-sm text-neutral-400">Scaling the fleet across Deep Tech sectors.</p>
</div>
</div>
</div>
</section>

<footer className="py-20 border-t border-neutral-900 bg-black">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="flex justify-center mb-8">
<img alt="Kealu" className="h-10 w-10 opacity-80 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8a0437eb-3ab9-437f-b50c-334d310c4887_800w.png" style={{}}/>
</div>
<blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-12 text-neutral-300">
                "We are looking for partners who understand that in deep tech, Proprietary Infrastructure is the Moat, and Velocity is the Result."
            </blockquote>
<p className="text-sm text-neutral-500">© 2026 Kealu Inc. All rights reserved. <br/> Miami, FL</p>
</div>
</footer>


    </>
  );
}
