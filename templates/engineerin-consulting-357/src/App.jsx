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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-black">
<iconify-icon icon="lucide:layers" strokeWidth="2.5" width="16"></iconify-icon>
</div>
<span className="font-medium tracking-tighter text-lg text-white group-hover:opacity-80 transition-opacity">Axiomwise.</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#benchmark">The 4-Hour Benchmark</a>
<a className="hover:text-white transition-colors" href="#services">Expertise</a>
<a className="hover:text-white transition-colors" href="#sleeper-cell">The Sleeper Cell</a>
<a className="hover:text-white transition-colors" href="#work">Impact</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:flex text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-slate-200 transition-colors tracking-tight items-center gap-2" href="#contact">
                    Start Audit
                    <iconify-icon icon="lucide:arrow-right" strokeWidth="2" width="14"></iconify-icon>
</a>
<button className="md:hidden text-white">
<iconify-icon icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden pt-32 pb-20 relative">

<div className="absolute inset-0 grid-bg -z-10"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-300 mb-8 animate-fade-in-up">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Engineering Operations &amp; Behavioral Risk Mitigation
            </div>
<h1 className="md:text-7xl lg:text-8xl leading-[1.1] text-5xl font-medium text-white tracking-tighter mb-8 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                Engineering the <br/>
<span className="text-gradient">Human Systems</span>
</h1>
<p className="md:text-xl leading-relaxed text-lg font-light text-slate-400 max-w-2xl mr-auto mb-10 ml-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                We don't just solve engineering problems; we eliminate the organizational friction that prevents great designs from reaching the market. 
                <span className="text-slate-300 block mt-2">Integrating Management 3.0 &amp; Behavioral Economics.</span>
</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white text-black rounded-full font-medium hover:bg-slate-200 transition-all flex items-center justify-center gap-2 group" href="#services">
                    Explore Our Expertise
                    <iconify-icon className="group-hover:translate-y-1 transition-transform" icon="lucide:arrow-down" width="16"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white/5 text-white border border-white/10 rounded-full font-medium hover:bg-white/10 transition-all" href="#sleeper-cell">
                    Meet the Sleeper Cell
                </a>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-slate-500 tracking-widest uppercase mb-8">De-Risking Innovation Across Industries</p>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center justify-center gap-2 text-white font-semibold text-lg tracking-tight">
<iconify-icon icon="lucide:truck" width="24"></iconify-icon> Heavy Truck
                </div>
<div className="flex items-center justify-center gap-2 text-white font-semibold text-lg tracking-tight">
<iconify-icon icon="lucide:train" width="24"></iconify-icon> Rail
                </div>
<div className="flex items-center justify-center gap-2 text-white font-semibold text-lg tracking-tight">
<iconify-icon icon="lucide:droplet" width="24"></iconify-icon> Oil &amp; Gas
                </div>
<div className="flex items-center justify-center gap-2 text-white font-semibold text-lg tracking-tight">
<iconify-icon icon="lucide:activity" width="24"></iconify-icon> Medtech
                </div>
<div className="flex items-center justify-center gap-2 text-white font-semibold text-lg tracking-tight">
<iconify-icon icon="lucide:battery-charging" width="24"></iconify-icon> Energy
                </div>
<div className="flex items-center justify-center gap-2 text-white font-semibold text-lg tracking-tight">
<iconify-icon icon="lucide:recycle" width="24"></iconify-icon> Circular Econ
                </div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="benchmark">
<div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/5 blur-3xl -z-10"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-medium mb-6">
<iconify-icon icon="lucide:shield-check" width="14"></iconify-icon>
                        Social Proof &amp; Behavioral Economics
                    </div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-white mb-6">
                        The 4-Hour Trust Benchmark
                    </h2>
<p className="text-xl text-slate-300 font-light mb-8">
                        How transparency wins over physics.
                    </p>
<div className="space-y-8 relative">
<div className="absolute left-3 top-2 bottom-2 w-0.5 bg-white/10"></div>
<div className="relative pl-10">
<div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-slate-900 border border-white/20 flex items-center justify-center text-xs text-white">1</div>
<h4 className="text-white font-medium mb-2">The Challenge</h4>
<p className="text-slate-400 text-sm leading-relaxed">
                                A world-leading truck manufacturer was skeptical. Competitors had failed harsh-vibration tests for years. They didn't believe a solution existed.
                            </p>
</div>
<div className="relative pl-10">
<div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-slate-900 border border-white/20 flex items-center justify-center text-xs text-white">2</div>
<h4 className="text-white font-medium mb-2">The Insight</h4>
<p className="text-slate-400 text-sm leading-relaxed">
                                Our team analyzed the <span className="text-white">Housing Interaction</span>. We engineered a geometry where plastic surfaces acted as "vibration dampers," preventing energy amplification at contact points.
                            </p>
</div>
<div className="relative pl-10">
<div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold shadow-[0_0_15px_rgba(59,130,246,0.5)]">3</div>
<h4 className="text-white font-medium mb-2">The Result</h4>
<p className="text-slate-400 text-sm leading-relaxed">
                                We showed raw data, previous failures, and the exact physics. A multi-day audit was cut to <span className="text-white font-semibold">4 hours</span>. The customer said: "We fully trust you now." This sparked a 20-year strategic partnership.
                            </p>
</div>
</div>
</div>
<div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden border border-white/10 group">
<img alt="Data Analytics Dashboard" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/92d0c40f-f813-47fd-a53a-5def9c2ca85c_1600w.webp"/>
<div className="bg-gradient-to-t from-black via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-8 left-8 right-8">
<div className="text-base font-bold text-emerald-400 font-mono mb-2">OUR MOTTO:</div>
<p className="text-white text-lg font-medium leading-tight">We don't just sell design features. We sell the mitigation of technical failure.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-white/[0.01]" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:flex justify-between items-end">
<div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white mb-4">Strategic Engagements</h2>
<p className="text-slate-400 max-w-md text-lg font-light">De-risking innovation from concept to 30-year lifecycle.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="col-span-1 md:col-span-2 p-8 rounded-3xl bg-white/[0.02] border border-white/5 card-hover transition-all duration-300 group">
<div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:network" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Strategic Interface &amp; De-Risking</h3>
<p className="text-slate-400 font-light leading-relaxed max-w-lg">
                        We translate your business vision into a de-risked engineering roadmap. Acting as your "Fractional VP of Engineering," we audit your current process, identify "invisible" behavioral bottlenecks, and ensure technical integrity.
                    </p>
</div>

<div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 card-hover transition-all duration-300 group">
<div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:recycle" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Circular Engineering (CE)</h3>
<p className="text-slate-400 font-light leading-relaxed">
                        Designing for the 30-Year Horizon. We help you transition to "Product-as-a-Service" models by engineering for extreme durability and modularity.
                    </p>
</div>

<div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 card-hover transition-all duration-300 group">
<div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:users-2" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Operations Scale-Up</h3>
<p className="text-slate-400 font-light leading-relaxed">
                        Implementing Management 3.0. We build autonomous, high-trust engineering "swarms" that deliver without micro-management.
                    </p>
</div>

<div className="col-span-1 md:col-span-2 p-8 rounded-3xl bg-white/[0.02] border border-white/5 card-hover transition-all duration-300 group">
<div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:boxes" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Sleeper Cell Execution</h3>
<p className="text-slate-400 font-light leading-relaxed max-w-lg">
                        Need to surge capacity? Our "Sleeper Cell" of elite engineers integrates directly into your workflow to deliver critical design packages. Automotive rigor with startup agility.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5" id="sleeper-cell">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white mb-6">The "Sleeper Cell"</h2>
<p className="text-slate-400 max-w-2xl mx-auto font-light text-lg">
                    Not a generic agency. A combat-proven unit that has collaborated for years. <br/>
<span className="text-white">Zero ramp-up time. Zero friction. Pure execution.</span>
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 group hover:bg-white/[0.04] transition-colors">
<div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-white mb-4 font-semibold text-lg border border-white/10 group-hover:border-blue-500/50 transition-colors">A</div>
<h3 className="text-lg font-medium text-white">Andrzej</h3>
<div className="text-xs font-medium text-blue-400 uppercase tracking-wider mb-4">The Architect</div>
<p className="text-sm text-slate-400 leading-relaxed">
                        25 years scaling global R&amp;D from 2 to 100+ specialists. Architect of revenue platforms that defined industry standards for Volvo &amp; Scania. Specialist in Management 3.0 &amp; Behavioral Economics.
                    </p>
</div>

<div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 group hover:bg-white/[0.04] transition-colors">
<div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-white mb-4 font-semibold text-lg border border-white/10 group-hover:border-emerald-500/50 transition-colors">W</div>
<h3 className="text-lg font-medium text-white">Wiola</h3>
<div className="text-xs font-medium text-emerald-400 uppercase tracking-wider mb-4">The Scaler</div>
<p className="text-sm text-slate-400 leading-relaxed">
                        Automotive veteran. Expert in GD&amp;T and DFMEA. Known for delivering complex programs without additional resources by bridging the gap between technical judgment and people leadership.
                    </p>
</div>

<div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 group hover:bg-white/[0.04] transition-colors">
<div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-white mb-4 font-semibold text-lg border border-white/10 group-hover:border-purple-500/50 transition-colors">M</div>
<h3 className="text-lg font-medium text-white">Monika</h3>
<div className="text-xs font-medium text-purple-400 uppercase tracking-wider mb-4">The Process Owner</div>
<p className="text-sm text-slate-400 leading-relaxed">
                        Oil &amp; Gas and Automotive veteran. Former Program Manager handling complex global workflows. Expert in high-pressure subsea systems and API standards.
                    </p>
</div>

<div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 group hover:bg-white/[0.04] transition-colors">
<div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-white mb-4 font-semibold text-lg border border-white/10 group-hover:border-orange-500/50 transition-colors">M</div>
<h3 className="text-lg font-medium text-white">Mariusz</h3>
<div className="text-xs font-medium text-orange-400 uppercase tracking-wider mb-4">The Validator</div>
<p className="text-sm text-slate-400 leading-relaxed">
                        Rail &amp; Heavy Industry authority. The "Ambiguity Detector" who instills "fail-fast" prototyping cultures. Bridges heavy rail durability with automotive cost-discipline.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white/[0.01]" id="work">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white mb-16 text-center">Impact &amp; Results</h2>
<div className="space-y-24">

<div className="group grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/3] group-hover:shadow-[0_0_50px_-12px_rgba(255,255,255,0.1)] transition-all">
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
<img alt="Process Optimization" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1706275031984-4b20358a7e5c?w=1600&amp;q=80"/>
</div>
<div className="order-last md:order-first pl-4 md:pl-0 pr-4">
<div className="text-blue-400 font-medium mb-4 text-sm tracking-wide uppercase">Rail &amp; Power Distribution</div>
<h3 className="text-3xl font-medium text-white mb-4 tracking-tight">Cost &amp; Maintenance Turnaround</h3>
<p className="text-slate-400 font-light leading-relaxed mb-8 text-lg">
                            Redesigned a complex High Voltage Switchgear for a traction vehicle. Introduced modular architecture that reduced assembly weight by 15% and cut cabling costs by 20%.
                        </p>
<ul className="flex flex-wrap gap-2 mb-8">
<li className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300">DFM Principle</li>
<li className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300">Modular Design</li>
<li className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300">Cost Reduction</li>
</ul>
</div>
</div>

<div className="group grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="pl-4 pr-4 md:pl-0">
<div className="text-indigo-400 font-medium mb-4 text-sm tracking-wide uppercase">Heavy Rail</div>
<h3 className="text-3xl font-medium text-white mb-4 tracking-tight">The "Impossible" Deadline</h3>
<p className="text-slate-400 font-light leading-relaxed mb-8 text-lg">
                            Neutralized supply chain risk for a Freight Locomotive by pivoting from "Outsourced Rocket Science" to "In-House Pragmatism". Engineered design changes that allowed internal production, meeting a rigid deadline.
                        </p>
<ul className="flex flex-wrap gap-2 mb-8">
<li className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300">Risk Mitigation</li>
<li className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300">Supply Chain</li>
<li className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300">Fail-Fast</li>
</ul>
</div>
<div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/3] group-hover:shadow-[0_0_50px_-12px_rgba(255,255,255,0.1)] transition-all">
<div className="bg-gradient-to-t from-black/60 to-transparent z-10 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Engineering Detail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
</div>
</div>

<div className="group grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/3] group-hover:shadow-[0_0_50px_-12px_rgba(255,255,255,0.1)] transition-all">
<div className="bg-gradient-to-t from-black/60 to-transparent z-10 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Subsea Engineering" className="group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover z-10" src="https://images.unsplash.com/photo-1758129949419-c296cead04c3?w=1600&amp;q=80"/>
</div>
<div className="order-last md:order-first pl-4 md:pl-0 pr-4">
<div className="text-purple-400 font-medium mb-4 text-sm tracking-wide uppercase">Oil &amp; Gas / Subsea</div>
<h3 className="text-3xl font-medium text-white mb-4 tracking-tight">API Standards &amp; Process Control</h3>
<p className="leading-relaxed text-lg font-light text-slate-400 mb-8">
<span className="text-white font-normal">Monika's Execution:</span> Managed the delivery of a critical Subsea Production System under strict API 17D standards. Coordinated high-pressure cross-functional teams to ensure zero non-compliance issues while navigating global supply chain disruptions.
                        </p>
<ul className="flex flex-wrap gap-2 mb-8">
<li className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300">API 17D</li>
<li className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300">Program Management</li>
<li className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300">Process Rigor</li>
</ul>
</div>
</div>

<div className="group grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="pl-4 pr-4 md:pl-0">
<div className="text-emerald-400 font-medium mb-4 text-sm tracking-wide uppercase">Automotive Interior</div>
<h3 className="text-3xl font-medium text-white mb-4 tracking-tight">The "Squeak &amp; Rattle" Rescue</h3>
<p className="text-slate-400 font-light leading-relaxed mb-8 text-lg">
<span className="text-white font-normal">Wiola's Turnaround:</span> Saved a luxury vehicle cockpit program from costly tooling redesigns. Applied advanced GD&amp;T analysis to re-calculate tolerance stacks, eliminating persistent fitment issues and reducing scrap rates by 40% in the pilot phase.
                        </p>
<ul className="flex flex-wrap gap-2 mb-8">
<li className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300">GD&amp;T Specialist</li>
<li className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300">Quality Assurance</li>
<li className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300">Cost Avoidance</li>
</ul>
</div>
<div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/3] group-hover:shadow-[0_0_50px_-12px_rgba(255,255,255,0.1)] transition-all">
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
<img alt="Automotive Quality" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1679461278173-52339063e5c1?w=1600&amp;q=80"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-white/[0.02]">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/10 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-white mb-6">Ready to de-risk your innovation?</h2>
<p className="text-slate-400 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto">
                Partner with a team that has successfully navigated the "Manager's Dilemma" for 25 years. We build the systems that build the machines.
            </p>
<div className="flex justify-center">
<a className="px-8 py-4 bg-white text-black rounded-full font-medium hover:scale-105 transition-transform duration-200 flex items-center gap-2" href="#contact">
                    Start a Conversation
                    <iconify-icon icon="lucide:arrow-right" width="18"></iconify-icon>
</a>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-[#050507] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
<div className="col-span-1 lg:col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-black">
<iconify-icon icon="lucide:layers" width="12"></iconify-icon>
</div>
<span className="font-medium tracking-tighter text-white">Axiomwise.</span>
</a>
<p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-6">
                        Engineering Operations &amp; Behavioral Risk Mitigation.<br/>
                        Helping brands navigate manufacturing complexity with engineered trust.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="18"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:mail" width="18"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Expertise</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">Strategic Interface</a></li>
<li><a className="hover:text-white transition-colors" href="#">Circular Engineering</a></li>
<li><a className="hover:text-white transition-colors" href="#">Management 3.0</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Industries</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">Automotive</a></li>
<li><a className="hover:text-white transition-colors" href="#">Rail &amp; Heavy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Oil &amp; Gas</a></li>
</ul>
</div>
<div className="col-span-1 lg:col-span-2">
<h4 className="text-white font-medium mb-4 text-sm">Insights</h4>
<p className="text-slate-500 text-xs mb-4">Subscribe for insights on Behavioral Economics in Engineering.</p>
<form className="flex gap-2">
<input className="bg-white/5 border border-white/10 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-white/30 w-full placeholder-slate-600" placeholder="email@address.com" type="email"/>
<button className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-slate-200 transition-colors">
                            Join
                        </button>
</form>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
<div>© 2026 Axiomwise Engineering. All rights reserved.</div>
<div className="flex gap-6">
<a className="hover:text-slate-400 transition-colors" href="#">Privacy</a>
<a className="hover:text-slate-400 transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
