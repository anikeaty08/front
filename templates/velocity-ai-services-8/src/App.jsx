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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-4">
<a className="text-white text-lg font-medium tracking-tight flex items-center gap-2" href="#">
<span className="opacity-50 font-light">RVS MEDIA</span>
<span className="h-4 w-[1px] bg-white/20"></span>
<span>VELOCITY AI</span>
</a>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-light text-neutral-400">
<a className="hover:text-white transition-colors" href="#approach">Approach</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#impact">Impact</a>
<a className="hover:text-white transition-colors" href="#architecture">Architecture</a>
</div>
<a className="group relative inline-flex h-9 items-center justify-center overflow-hidden rounded-md border border-white/10 bg-white/5 px-4 font-medium text-white transition-all hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black" href="#contact">
<span className="text-xs tracking-tight">Talk to experts</span>
<iconify-icon className="ml-2 transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="absolute inset-0 bg-grid opacity-20 pointer-events-none z-0"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex gap-2 text-xs text-green-300 tracking-wide bg-green-500/10 border-green-500/30 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
  Bold Innovation. Real Business Outcomes.
</div>
<h1 className="md:text-7xl lg:text-8xl bg-clip-text glow-text text-5xl font-medium text-transparent tracking-tighter bg-gradient-to-b from-white via-white to-white/50 mb-6">
                Turn Ideas into <br className="hidden md:block"/> Intelligent Impact.
            </h1>
<p className="text-lg md:text-xl text-neutral-400 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                Velocity AI by RVS Media helps forward-thinking organisations harness artificial intelligence intelligently and at scale. Move from vision to execution faster.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="hover:bg-neutral-200 transition-all flex items-center gap-2 font-medium text-black tracking-tight bg-white h-12 rounded-full pr-8 pl-8" href="#contact">
                    Start your journey
                    <iconify-icon className="" icon="solar:rocket-linear" width="18"></iconify-icon>
</a>
<a className="h-12 px-8 rounded-full border border-white/10 bg-white/5 text-white font-medium tracking-tight hover:bg-white/10 transition-all flex items-center gap-2" href="#how-it-works">
                    How it works
                </a>
</div>
</div>
</header>

<section className="py-24 border-t border-white/5 relative bg-neutral-950">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="md:text-4xl text-3xl font-medium tracking-tight mb-8">Not just hype. <span className="text-purple-400">Lasting value.</span></h2>
<p className="leading-relaxed text-lg font-light text-neutral-400 mb-12">
                Velocity AI isn’t about chasing trends. It’s about embedding intelligence into every aspect of your operations and products. By combining cutting-edge AI, human expertise, and proven delivery frameworks, we drive growth, efficiency, and competitive advantage.
            </p>
</div>
</section>

<section className="overflow-hidden pt-24 pb-24 relative" id="approach">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="mb-16">
<h3 className="uppercase text-sm font-medium text-purple-400 tracking-widest mb-3">The Continuum</h3>
<h2 className="md:text-5xl text-3xl font-medium text-white tracking-tight">AI-Powered Enterprise Outcomes</h2>
<p className="font-light text-neutral-400 max-w-xl mt-4">
                    We guide you along a delivery continuum that balances innovation with control.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">

<div className="group hover:border-purple-500/30 transition-all duration-500 purple-glow bg-[#0A0A0A] border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6">
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Human Expertise</h3>
<p className="text-sm font-light text-neutral-400">Deep domain knowledge aligned with strategic business context.</p>
</div>

<div className="group p-6 rounded-2xl border border-white/10 bg-[#0A0A0A] hover:border-purple-500/30 transition-all duration-500 purple-glow">
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:cpu-bolt-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Intelligent Automation</h3>
<p className="text-sm font-light text-neutral-400">Streamlining workflows and reducing manual operational load.</p>
</div>

<div className="group p-6 rounded-2xl border border-white/10 bg-[#0A0A0A] hover:border-purple-500/30 transition-all duration-500 purple-glow">
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
<iconify-icon className="" icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Scalable Engineering</h3>
<p className="text-sm font-light text-neutral-400">Robust infrastructure built to handle enterprise-grade demand.</p>
</div>

<div className="group hover:border-purple-500/30 transition-all duration-500 purple-glow bg-[#0A0A0A] border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6">
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
<iconify-icon className="" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Secure Deployment</h3>
<p className="text-sm font-light text-neutral-400">Trust, compliance, and governance baked into every release.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/30 border-y border-white/5" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
<div className="sticky top-32">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">End-to-End AI Development</h2>
<p className="text-neutral-400 font-light text-lg mb-8">
                        Velocity AI accelerates your AI product journey — from ideation, design, development, and testing, right through to secure deployment.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-purple-400 mt-1" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-neutral-300 font-light">Unlock real value, not just prototypes</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-purple-400 mt-1" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-neutral-300 font-light">Full lifecycle management</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-purple-400 mt-1" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-neutral-300 font-light">Enterprise-grade security standards</span>
</li>
</ul>
</div>
<div className="grid gap-4">

<div className="p-8 bg-neutral-950 border border-white/5 rounded-xl hover:border-white/10 transition-colors">
<div className="flex items-center justify-between mb-4">
<h3 className="text-xl font-medium text-white">Automate Workflows</h3>
<iconify-icon className="text-neutral-500" icon="solar:refresh-circle-linear" width="24"></iconify-icon>
</div>
<p className="text-neutral-400 font-light leading-relaxed">Eliminate repetitive tasks and technical bottlenecks through intelligent process automation.</p>
</div>

<div className="p-8 bg-neutral-950 border border-white/5 rounded-xl hover:border-white/10 transition-colors">
<div className="flex items-center justify-between mb-4">
<h3 className="text-xl font-medium text-white">Embed Intelligence</h3>
<iconify-icon className="text-neutral-500" icon="solar:programming-linear" width="24"></iconify-icon>
</div>
<p className="text-neutral-400 font-light leading-relaxed">Infuse AI capabilities directly into your core products and operational dashboards.</p>
</div>

<div className="p-8 bg-neutral-950 border border-white/5 rounded-xl hover:border-white/10 transition-colors">
<div className="flex items-center justify-between mb-4">
<h3 className="text-xl font-medium text-white">Upgrade Legacy Systems</h3>
<iconify-icon className="text-neutral-500" icon="solar:database-linear" width="24"></iconify-icon>
</div>
<p className="text-neutral-400 font-light leading-relaxed">Modernize aging infrastructure with smart automation layers and API integrations.</p>
</div>

<div className="p-8 bg-neutral-950 border border-white/5 rounded-xl hover:border-white/10 transition-colors">
<div className="flex items-center justify-between mb-4">
<h3 className="text-xl font-medium text-white">GenAI Integration</h3>
<iconify-icon className="text-neutral-500" icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<p className="text-neutral-400 font-light leading-relaxed">Safely integrate advanced generative AI models (LLMs) to unlock creative and analytical potential.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="impact">
<div className="max-w-7xl mx-auto px-6 text-center mb-16">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">Real Business Impact</h2>
<p className="text-neutral-400 font-light">Outcomes that matter. Measured by your success.</p>
</div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="relative group">
<div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
<div className="relative p-8 border border-white/10 rounded-2xl h-full bg-[#050505]">
<div className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-4">3x</div>
<h3 className="text-lg font-medium text-white mb-2">Increase Productivity</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed">Deliver more with less by automating processes and boosting team performance across the board.</p>
</div>
</div>
<div className="relative group">
<div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
<div className="relative p-8 border border-white/10 rounded-2xl h-full bg-[#050505]">
<div className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-4">50%</div>
<h3 className="text-lg font-medium text-white mb-2">Faster Time-to-Market</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed">Bring AI-driven solutions to life faster, capturing market opportunities before competitors do.</p>
</div>
</div>
<div className="relative group">
<div className="absolute inset-0 bg-gradient-to-b from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
<div className="relative p-8 border border-white/10 rounded-2xl h-full bg-[#050505]">
<div className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-4">↓40%</div>
<h3 className="text-lg font-medium text-white mb-2">Lower Operational Costs</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed">Significantly reduce manual effort through intelligent automation, testing, and system optimisation.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/20">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight">Industry Outcomes</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="flex flex-col p-8 rounded-xl bg-neutral-950 border border-white/5">
<iconify-icon className="text-purple-400 mb-6" icon="solar:monitor-smartphone-linear" width="32"></iconify-icon>
<h3 className="text-xl font-medium text-white mb-3">Software &amp; Tech</h3>
<p className="text-neutral-400 font-light text-sm leading-relaxed">Rapidly launch AI assistants and automation frameworks that scale with demand.</p>
</div>

<div className="flex flex-col p-8 rounded-xl bg-neutral-950 border border-white/5">
<iconify-icon className="text-purple-400 mb-6" icon="solar:heart-pulse-linear" width="32"></iconify-icon>
<h3 className="text-xl font-medium text-white mb-3">Healthcare</h3>
<p className="text-neutral-400 font-light text-sm leading-relaxed">Automate data workflows, improve insight delivery, and enhance patient outcomes.</p>
</div>

<div className="flex flex-col p-8 rounded-xl bg-neutral-950 border border-white/5">
<iconify-icon className="text-purple-400 mb-6" icon="solar:factory-2-linear" width="32"></iconify-icon>
<h3 className="text-xl font-medium text-white mb-3">Energy &amp; Industrial</h3>
<p className="text-neutral-400 font-light text-sm leading-relaxed">Increase engineering efficiency and improve test coverage for safety-critical systems.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative border-t border-white/5" id="architecture">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">A Smarter AI Architecture</h2>
<p className="text-neutral-400 font-light text-lg mb-8 leading-relaxed">
                    Deploying enterprise AI is complex. Velocity AI balances best-in-class models with a reusable, secure architecture designed for global scale.
                </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/5">
<iconify-icon className="text-white" icon="solar:cloud-check-linear" width="14"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm">Hybrid Deployment</h4>
<p className="text-neutral-500 font-light text-sm mt-1">Cloud or on-premises flexibility.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/5">
<iconify-icon className="text-white" icon="solar:link-circle-linear" width="14"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm">Secure Integration</h4>
<p className="text-neutral-500 font-light text-sm mt-1">Connect seamlessly with existing legacy systems.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/5">
<iconify-icon className="text-white" icon="solar:document-add-linear" width="14"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm">Built-in Governance</h4>
<p className="text-neutral-500 font-light text-sm mt-1">Reusable components that adhere to compliance standards.</p>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur opacity-20"></div>
<div className="relative bg-[#050505] border border-white/10 rounded-2xl p-8 overflow-hidden">

<div className="grid grid-cols-2 gap-4 mb-4">
<div className="h-24 rounded-lg bg-neutral-900 border border-dashed border-neutral-700 flex items-center justify-center flex-col gap-2">
<iconify-icon className="text-neutral-600" icon="solar:database-linear" width="20"></iconify-icon>
<span className="text-xs text-neutral-500 font-mono">DATA LAYER</span>
</div>
<div className="h-24 rounded-lg bg-neutral-900 border border-dashed border-neutral-700 flex items-center justify-center flex-col gap-2">
<iconify-icon className="text-neutral-600" icon="solar:server-linear" width="20"></iconify-icon>
<span className="text-xs text-neutral-500 font-mono">INFRASTRUCTURE</span>
</div>
</div>
<div className="h-32 rounded-lg bg-neutral-800/50 border border-purple-500/30 flex items-center justify-center flex-col gap-3 relative overflow-hidden mb-4">
<div className="absolute inset-0 bg-grid opacity-10"></div>
<iconify-icon className="text-purple-400" icon="solar:brain-linear" width="32"></iconify-icon>
<span className="text-sm text-white font-medium tracking-wide">VELOCITY AI CORE</span>
</div>
<div className="grid grid-cols-3 gap-4">
<div className="h-16 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center">
<span className="text-[10px] text-neutral-400 font-mono">API</span>
</div>
<div className="h-16 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center">
<span className="text-[10px] text-neutral-400 font-mono">SDK</span>
</div>
<div className="h-16 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center">
<span className="text-[10px] text-neutral-400 font-mono">WEBHOOKS</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 text-center">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-8">Deliver with Confidence</h2>
<p className="text-neutral-400 font-light text-lg mb-12">
                Most organisations struggle to turn prototypes into production systems. RVS Media + Velocity AI helps you unlock value quickly while maintaining IP and data security. We don't stop at deployment — we help you embed AI as a strategic asset.
            </p>
<div className="flex flex-wrap justify-center gap-4">
<div className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-sm text-neutral-300 font-light">Deep Engineering Expertise</div>
<div className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-sm text-neutral-300 font-light">Secure Architectures</div>
<div className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-sm text-neutral-300 font-light">Tailored for Enterprise</div>
<div className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-sm text-neutral-300 font-light">Fast Time-to-Market</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden" id="contact">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-purple-600/20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-5xl md:text-6xl font-medium tracking-tighter text-white mb-6">Let’s Turn Ideas <br/> Into Impact.</h2>
<p className="text-xl text-neutral-400 font-light mb-10 max-w-2xl mx-auto">
                Whether you’re automating workflows, modernising products, or building AI-native solutions, RVS Media + Velocity AI helps you move forward with confidence.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="h-14 px-10 rounded-full bg-white text-black font-medium text-lg tracking-tight hover:bg-neutral-200 transition-all w-full sm:w-auto">
                    Talk to our AI experts
                </button>
<button className="h-14 px-10 rounded-full bg-black border border-white/20 text-white font-medium text-lg tracking-tight hover:bg-white/5 transition-all w-full sm:w-auto">
                    Explore Velocity AI
                </button>
</div>
</div>
</section>

<footer className="border-t border-white/10 py-12 bg-black">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-gradient-to-br from-purple-500 to-blue-600"></div>
<div className="text-sm font-medium tracking-tight text-white">Velocity AI <span className="text-neutral-500 font-light">by RVS Media</span></div>
</div>
<div className="text-neutral-500 text-xs font-light">
                © 2023 RVS Media. All rights reserved.
            </div>
<div className="flex gap-6">
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brands-linkedin-linear" width="20"></iconify-icon></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brands-twitter-linear" width="20"></iconify-icon></a>
</div>
</div>
</footer>

    </>
  );
}
