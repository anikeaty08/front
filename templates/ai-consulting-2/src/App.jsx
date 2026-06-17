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
      

<div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden flex justify-center">
<div className="absolute top-[-20%] w-full max-w-5xl aspect-square bg-indigo-500/10 rounded-full blur-[120px] opacity-70 animate-float"></div>
<div className="absolute bottom-[-20%] left-[-10%] w-3/4 aspect-square bg-cyan-500/10 rounded-full blur-[120px] opacity-50 animate-float-delayed"></div>
</div>

<div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
<div className="absolute w-1 h-1 bg-indigo-500/40 rounded-full blur-[1px]" style={{left: '10%', animation: 'drift 15s infinite linear'}}></div>
<div className="absolute w-1.5 h-1.5 bg-cyan-500/40 rounded-full blur-[1px]" style={{left: '25%', animation: 'drift-reverse 22s infinite linear 2s'}}></div>
<div className="absolute w-2 h-2 bg-purple-500/30 rounded-full blur-[2px]" style={{left: '45%', animation: 'drift 18s infinite linear 5s'}}></div>
<div className="absolute w-1 h-1 bg-white/30 rounded-full blur-[1px]" style={{left: '60%', animation: 'drift-reverse 25s infinite linear 1s'}}></div>
<div className="absolute w-1.5 h-1.5 bg-indigo-400/40 rounded-full blur-[1px]" style={{left: '80%', animation: 'drift 20s infinite linear 7s'}}></div>
<div className="absolute w-2 h-2 bg-cyan-400/30 rounded-full blur-[2px]" style={{left: '90%', animation: 'drift-reverse 17s infinite linear 3s'}}></div>
<div className="absolute w-1 h-1 bg-purple-400/40 rounded-full blur-[1px]" style={{left: '5%', animation: 'drift 24s infinite linear 8s'}}></div>
<div className="absolute w-1.5 h-1.5 bg-white/20 rounded-full blur-[1px]" style={{left: '35%', animation: 'drift-reverse 19s infinite linear 4s'}}></div>
<div className="absolute w-2 h-2 bg-indigo-500/30 rounded-full blur-[2px]" style={{left: '70%', animation: 'drift 21s infinite linear 6s'}}></div>
<div className="absolute w-1 h-1 bg-cyan-500/40 rounded-full blur-[1px]" style={{left: '55%', animation: 'drift-reverse 16s infinite linear 9s'}}></div>
<div className="absolute w-1.5 h-1.5 bg-purple-500/30 rounded-full blur-[1px]" style={{left: '85%', animation: 'drift 23s infinite linear 2s'}}></div>
<div className="absolute w-1 h-1 bg-white/30 rounded-full blur-[1px]" style={{left: '15%', animation: 'drift-reverse 20s infinite linear 5s'}}></div>
</div>

<header className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-zinc-950/60 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="font-medium tracking-tighter text-lg text-zinc-100" href="#">
                A G E N T I X
            </a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-zinc-100 transition-colors" href="#approach">Approach</a>
<a className="hover:text-zinc-100 transition-colors" href="#services">Services</a>
<a className="hover:text-zinc-100 transition-colors" href="#security">Training</a>
<a className="hover:text-zinc-100 transition-colors" href="#magazine">Beyond the Box</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex hover:text-zinc-100 transition-colors text-sm font-medium" href="#">Login</a>
<a className="inline-flex items-center justify-center h-9 px-4 rounded-full bg-zinc-100 text-zinc-950 text-sm font-medium hover:bg-white transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]" href="#">
                    Get an ROI Assessment
                </a>
</div>
</div>
</header>
<main className="pt-32 pb-24">

<section className="max-w-5xl mx-auto px-6 text-center flex flex-col items-center pt-16 pb-24 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
      Bridging the Gen AI Divide
    </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-zinc-100 mb-6 max-w-4xl leading-[1.1]">
      Bring Agentic Workflows <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-500">to Production.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 font-light leading-relaxed">
      We master process engineering to move your organization from fragile AI prototypes to robust, autonomous workflows
      that deliver measurable ROI.
    </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-6 rounded-full bg-zinc-100 text-zinc-950 text-base font-medium hover:bg-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-105 active:scale-95" href="#">
        Start Your Transformation
      </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-6 rounded-full bg-white/5 border border-white/10 text-zinc-100 text-base font-medium hover:bg-white/10 transition-colors gap-2 hover:border-white/20" href="#research">
<iconify-icon icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
        Read Latest Research
      </a>
</div>
</section>


<section className="max-w-7xl mx-auto px-6 py-24 relative" id="approach">
<div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none">
</div>
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-100 mb-4">The Gen AI Divide</h2>
<p className="text-base text-zinc-400 max-w-2xl mx-auto">Understanding why 80% of AI initiatives never leave the lab,
        and how process engineering creates the bridge to sustainable value.</p>
</div>
<div className="grid md:grid-cols-2 gap-8 relative">

<div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2">
</div>
<div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-white/10 bg-zinc-950 flex items-center justify-center text-zinc-500 z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>

<div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors group">
<div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-2xl" icon="solar:test-tube-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-zinc-100 mb-3">The Fragile Prototype</h3>
<ul className="space-y-4 text-sm text-zinc-400">
<li className="flex items-start gap-3">
<iconify-icon className="text-red-400/70 mt-0.5 text-base shrink-0" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Isolated scripts lacking integration with core systems.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-red-400/70 mt-0.5 text-base shrink-0" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Unpredictable outputs without guardrails or human-in-the-loop.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-red-400/70 mt-0.5 text-base shrink-0" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Cannot scale due to unmapped dependencies and costs.</span>
</li>
</ul>
</div>

<div className="p-8 rounded-3xl bg-gradient-to-b from-indigo-500/[0.05] to-transparent border border-indigo-500/20 relative overflow-hidden group hover:border-indigo-500/40 transition-colors">
<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-3xl rounded-full pointer-events-none group-hover:bg-indigo-500/20 transition-colors duration-500">
</div>
<div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 relative z-10 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500">
<iconify-icon className="text-2xl" icon="solar:rocket-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-zinc-100 mb-3 relative z-10">Agentic Production</h3>
<ul className="space-y-4 text-sm text-zinc-300 relative z-10">
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-400 mt-0.5 text-base shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Engineered processes mapped for autonomous execution.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-400 mt-0.5 text-base shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Robust architecture with monitoring, fallbacks, and security.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-400 mt-0.5 text-base shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Measurable ROI tracked through specific workflow efficiencies.</span>
</li>
</ul>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5" id="services">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-100 mb-4">How We Enable Your Organization
        </h2>
<p className="text-base text-zinc-400">We don't just build; we educate and equip your team. From process engineering
          to comprehensive training on data privacy and safety, we embed secure agentic capabilities into your DNA.</p>
</div>
</div>

<div className="grid md:grid-cols-3 gap-6">

<div className="group p-8 rounded-3xl bg-zinc-900/40 border border-cyan-500/20 hover:bg-zinc-900/60 transition-all duration-300 relative overflow-hidden" id="security">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50">
</div>

<div className="absolute inset-0 w-full h-[20%] bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent animate-scanline pointer-events-none">
</div>
<div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 relative z-10">
<iconify-icon className="text-xl" icon="solar:shield-keyhole-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-100 mb-3 relative z-10">Security &amp; Privacy Training
        </h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-4 relative z-10">We equip your workforce with the critical
          knowledge to operate AI safely. Master strict data privacy protocols, prevent data leakage, and uphold
          enterprise-grade security standards.</p>
</div>

<div className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-300">
<div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-300 mb-6 group-hover:border-indigo-500/30 group-hover:text-indigo-400 transition-colors">
<iconify-icon className="text-xl" icon="solar:structure-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-100 mb-3">Process Engineering</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Deconstructing your existing operations to identify bottlenecks
          and design logic flows suitable for safe, robust agentic delegation.</p>
</div>

<div className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-300">
<div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-300 mb-6 group-hover:border-blue-500/30 group-hover:text-blue-400 transition-colors">
<iconify-icon className="text-xl" icon="solar:cpu-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-100 mb-3">Architectural Blueprints</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Deploying tested tech stacks. From scalable orchestrators to
          isolated vector databases, we provide the foundation for secure AI.</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5" id="magazine">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
<div className="">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-100 mb-4">Beyond the Box</h2>
<p className="text-base text-zinc-400 max-w-xl">Our digital magazine and research hub. Deep dives into the reality
        of deploying agentic systems in enterprise environments.</p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-zinc-100 hover:text-indigo-400 transition-colors group" href="#">
      View all publications
      <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<a className="group flex flex-col rounded-3xl bg-zinc-900/50 border border-white/5 overflow-hidden hover:border-white/10 transition-colors hover:-translate-y-1 duration-300" href="#">
<div className="h-48 bg-zinc-900 relative overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity">
</div>
<iconify-icon className="group-hover:text-indigo-500/30 group-hover:scale-110 transition-all duration-500 text-6xl text-zinc-800" height="60" icon="solar:document-medicine-linear" strokeWidth="1.5" style={{color: 'rgb(99, 102, 241)'}} width="60"></iconify-icon>
<span className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-medium backdrop-blur-md">Research</span>
</div>
<div className="p-6 flex flex-col flex-1">
<h3 className="text-lg font-medium tracking-tight text-zinc-100 mb-2 group-hover:text-indigo-300 transition-colors">
          The State of Agentic ROI in 2024</h3>
<p className="text-sm text-zinc-400 line-clamp-2 mb-6 flex-1">A comprehensive analysis of 50 enterprise
          implementations, measuring actual cost savings versus initial projections.</p>
<div className="flex items-center text-xs font-medium text-zinc-500 mt-auto group-hover:text-indigo-400 transition-colors">
<span className="">Read paper</span>
<iconify-icon className="ml-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</a>

<a className="group flex flex-col rounded-3xl bg-zinc-900/50 border border-white/5 overflow-hidden hover:border-white/10 transition-colors hover:-translate-y-1 duration-300" href="#">
<div className="h-48 bg-zinc-900 relative overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity">
</div>
<iconify-icon className="text-6xl text-zinc-800 group-hover:text-cyan-500/20 group-hover:scale-110 transition-all duration-500" icon="solar:layers-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-white/5 text-zinc-300 border border-white/10 text-xs font-medium backdrop-blur-md">Article</span>
</div>
<div className="p-6 flex flex-col flex-1">
<h3 className="text-lg font-medium tracking-tight text-zinc-100 mb-2 group-hover:text-cyan-300 transition-colors">
          Designing Human-in-the-Loop Workflows</h3>
<p className="text-sm text-zinc-400 line-clamp-2 mb-6 flex-1">Why full autonomy is a myth for critical processes,
          and how to design UI for effective agent supervision.</p>
<div className="flex items-center text-xs font-medium text-zinc-500 mt-auto group-hover:text-cyan-400 transition-colors">
<span>Read article</span>
<iconify-icon className="ml-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</a>

<a className="group flex flex-col rounded-3xl bg-zinc-900/50 border border-white/5 overflow-hidden hover:border-white/10 transition-colors hover:-translate-y-1 duration-300" href="#">
<div className="h-48 bg-zinc-900 relative overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity">
</div>
<iconify-icon className="text-6xl text-zinc-800 group-hover:text-purple-500/20 group-hover:scale-110 transition-all duration-500" icon="solar:shield-warning-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-white/5 text-zinc-300 border border-white/10 text-xs font-medium backdrop-blur-md">Article</span>
</div>
<div className="p-6 flex flex-col flex-1">
<h3 className="text-lg font-medium tracking-tight text-zinc-100 mb-2 group-hover:text-purple-300 transition-colors">
          Containing Hallucinations in Core Systems</h3>
<p className="text-sm text-zinc-400 line-clamp-2 mb-6 flex-1">Architectural patterns to sanitize inputs and
          validate outputs before agents interact with legacy databases.</p>
<div className="flex items-center text-xs font-medium text-zinc-500 mt-auto group-hover:text-purple-400 transition-colors">
<span>Read article</span>
<iconify-icon className="ml-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</a>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 py-24">
<div className="relative rounded-3xl overflow-hidden border border-white/10 bg-zinc-900/50 p-10 md:p-16 text-center flex flex-col items-center group">
<div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-transparent pointer-events-none group-hover:from-indigo-500/20 transition-colors duration-700">
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square border border-white/5 rounded-full animate-[pulse-ring_6s_cubic-bezier(0.4,0,0.6,1)_infinite] pointer-events-none">
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] aspect-square border border-white/5 rounded-full animate-[pulse-ring_6s_cubic-bezier(0.4,0,0.6,1)_infinite_2s] pointer-events-none">
</div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-100 mb-4 relative z-10">Ready to upskill your
        AI teams?</h2>
<p className="text-base text-zinc-400 mb-8 max-w-xl relative z-10">Stop iterating on fragile scripts. Let's map your
        workflows, train your team on safety and privacy, and build a secure, production-grade agentic system.</p>
<a className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-zinc-100 text-zinc-950 text-base font-medium hover:bg-white transition-all hover:scale-105 active:scale-95 relative z-10 shadow-[0_0_30px_rgba(255,255,255,0.1)]" href="#">
        Schedule a Consultation
      </a>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-zinc-950 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<span className="font-medium tracking-tighter text-sm text-zinc-100">A G E N T I X</span>
<span className="text-zinc-600 text-sm">© 2024</span>
</div>
<div className="flex gap-6 text-sm text-zinc-400">
<a className="hover:text-zinc-100 transition-colors" href="#">Imprint</a>
<a className="hover:text-zinc-100 transition-colors" href="#">Privacy</a>
<a className="hover:text-zinc-100 transition-colors" href="#">Terms</a>
<a className="hover:text-zinc-100 transition-colors flex items-center gap-1" href="#">
                    LinkedIn <iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
