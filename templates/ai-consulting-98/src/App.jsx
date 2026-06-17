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
      

<nav className="fixed top-0 w-full z-50 glass-nav border-b border-zinc-100">
<div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
<div className="text-xl font-semibold tracking-tighter">
                AXON<span className="text-indigo-600">.</span>
</div>
<div className="hidden md:flex gap-12 text-sm font-medium text-zinc-500 tracking-wide">
<a className="hover:text-zinc-900 transition-colors" href="#services">Services</a>
<a className="hover:text-zinc-900 transition-colors" href="#industries">Industries</a>
<a className="hover:text-zinc-900 transition-colors" href="#outcomes">Outcomes</a>
<a className="hover:text-zinc-900 transition-colors" href="#insights">Insights</a>
</div>
<button className="bg-zinc-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-indigo-600 transition-all duration-500">
                Start Transformation
            </button>
</div>
</nav>

<section className="min-h-screen flex flex-col justify-center px-6 pt-32 pb-20 max-w-[1440px] mx-auto">
<div className="max-w-6xl">
<span className="inline-block px-4 py-1.5 rounded-full border border-indigo-100 text-indigo-600 text-xs font-medium mb-8 tracking-widest uppercase">
                Pioneering AI-Led Digital
            </span>
<h1 className="text-huge font-semibold tracking-tighter mb-12">
                The New <br/>Standard of <br/><span className="text-zinc-400">Intelligence.</span>
</h1>
<div className="flex flex-col md:flex-row md:items-end gap-12">
<p className="text-xl text-zinc-500 max-w-xl leading-relaxed font-light">
                    We orchestrate complex digital ecosystems with mathematical precision, delivering AI-driven transformation that feels weightless and performs flawlessly.
                </p>
<div className="flex gap-4">
<button className="bg-indigo-600 text-white h-16 w-16 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-500">
<iconify-icon height="24" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
<span className="self-center text-sm font-medium tracking-tight">Explore the methodology</span>
</div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-50 border-y border-zinc-100">
<div className="max-w-[1440px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-20">
<div className="space-y-4">
<h3 className="text-4xl font-semibold tracking-tighter">98.4%</h3>
<p className="text-sm text-zinc-500 uppercase tracking-widest font-medium">Processing Accuracy</p>
<div className="h-px w-full bg-zinc-200"></div>
<p className="text-sm text-zinc-400">Our neural engines surpass industry standards in complex pattern recognition.</p>
</div>
<div className="space-y-4">
<h3 className="text-4xl font-semibold tracking-tighter">400M+</h3>
<p className="text-sm text-zinc-500 uppercase tracking-widest font-medium">Digital Assets Managed</p>
<div className="h-px w-full bg-zinc-200"></div>
<p className="text-sm text-zinc-400">Scalability is baked into the architecture, not added as an afterthought.</p>
</div>
<div className="space-y-4">
<h3 className="text-4xl font-semibold tracking-tighter text-coral-500">Instant</h3>
<p className="text-sm text-zinc-500 uppercase tracking-widest font-medium">Operational ROI</p>
<div className="h-px w-full bg-zinc-200"></div>
<p className="text-sm text-zinc-400">Immediate visibility into transformation milestones through live dashboards.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white" id="services">
<div className="max-w-[1440px] mx-auto px-6">
<div className="mb-24 flex justify-between items-end">
<h2 className="text-5xl font-semibold tracking-tighter">Core Capabilities</h2>
<p className="text-zinc-500 text-lg font-light max-w-xs">End-to-end digital mastery designed for the modern enterprise.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-100 border border-zinc-100">
<div className="bg-white p-12 aspect-square flex flex-col justify-between hover:bg-zinc-50 transition-colors group">
<iconify-icon className="text-indigo-600 text-4xl" icon="solar:cpu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<h4 className="text-xl font-medium tracking-tight mb-4">Neural Architecture</h4>
<p className="text-sm text-zinc-400 leading-relaxed">Designing the backbone of autonomous business operations.</p>
</div>
</div>
<div className="bg-white p-12 aspect-square flex flex-col justify-between hover:bg-zinc-50 transition-colors group">
<iconify-icon className="text-indigo-600 text-4xl" icon="solar:cloud-storage-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<h4 className="text-xl font-medium tracking-tight mb-4">Cloud Orchestration</h4>
<p className="text-sm text-zinc-400 leading-relaxed">Fluid infrastructure that scales with your ambition.</p>
</div>
</div>
<div className="bg-white p-12 aspect-square flex flex-col justify-between hover:bg-zinc-50 transition-colors group">
<iconify-icon className="text-indigo-600 text-4xl" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<h4 className="text-xl font-medium tracking-tight mb-4">Quantum Security</h4>
<p className="text-sm text-zinc-400 leading-relaxed">Invisible, impenetrable defenses for the data-first world.</p>
</div>
</div>
<div className="bg-white p-12 aspect-square flex flex-col justify-between hover:bg-zinc-50 transition-colors group">
<iconify-icon className="text-indigo-600 text-4xl" icon="solar:graph-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<h4 className="text-xl font-medium tracking-tight mb-4">Data Synthesis</h4>
<p className="text-sm text-zinc-400 leading-relaxed">Turning raw entropy into actionable strategic intelligence.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-900 text-white" id="industries">
<div className="max-w-[1440px] mx-auto px-6">
<h2 className="text-5xl font-semibold tracking-tighter mb-24">Sectors in <span className="text-indigo-400">Motion.</span></h2>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12">
<div className="space-y-4">
<span className="text-zinc-600 text-xs font-mono">01</span>
<h5 className="text-lg font-medium tracking-tight">Fintech</h5>
</div>
<div className="space-y-4">
<span className="text-zinc-600 text-xs font-mono">02</span>
<h5 className="text-lg font-medium tracking-tight">HealthTech</h5>
</div>
<div className="space-y-4">
<span className="text-zinc-600 text-xs font-mono">03</span>
<h5 className="text-lg font-medium tracking-tight">Logistics</h5>
</div>
<div className="space-y-4">
<span className="text-zinc-600 text-xs font-mono">04</span>
<h5 className="text-lg font-medium tracking-tight">Energy</h5>
</div>
<div className="space-y-4">
<span className="text-zinc-600 text-xs font-mono">05</span>
<h5 className="text-lg font-medium tracking-tight">GovTech</h5>
</div>
<div className="space-y-4">
<span className="text-zinc-600 text-xs font-mono">06</span>
<h5 className="text-lg font-medium tracking-tight">Aerospace</h5>
</div>
</div>
</div>
</section>

<section className="py-40" id="outcomes">
<div className="max-w-[1440px] mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
<div className="relative aspect-video bg-zinc-100 overflow-hidden group">
<div className="absolute inset-0 bg-indigo-600/5 group-hover:bg-indigo-600/0 transition-all duration-700"></div>
<div className="absolute bottom-10 left-10 text-white z-10">
<p className="text-xs uppercase tracking-widest font-semibold mb-2">Success Story 01</p>
<h4 className="text-2xl font-medium tracking-tight">Global Logistics Optimization</h4>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
</div>
<div className="space-y-8">
<h3 className="text-4xl font-semibold tracking-tighter leading-tight">Reducing Operational Latency by 64% through AI Synthesis.</h3>
<p className="text-lg text-zinc-500 font-light leading-relaxed">
                        For a Fortune 500 logistics provider, we replaced legacy routing systems with a custom-built neural engine that adapts to global disruptions in real-time.
                    </p>
<div className="flex gap-12">
<div>
<span className="block text-2xl font-semibold tracking-tighter">14ms</span>
<span className="text-xs text-zinc-400 uppercase">Latency</span>
</div>
<div>
<span className="block text-2xl font-semibold tracking-tighter">$12M</span>
<span className="text-xs text-zinc-400 uppercase">Annual Saving</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-50" id="insights">
<div className="max-w-[1440px] mx-auto px-6">
<div className="flex justify-between items-center mb-20">
<h2 className="text-4xl font-semibold tracking-tighter">Insights &amp; Intelligence</h2>
<button className="text-sm font-medium border-b border-zinc-900 pb-1">View Library</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<article className="group cursor-pointer">
<div className="mb-6 overflow-hidden aspect-[4/3] bg-zinc-200"></div>
<p className="text-xs text-indigo-600 font-semibold uppercase tracking-widest mb-4">Research</p>
<h4 className="text-xl font-medium tracking-tight group-hover:text-indigo-600 transition-colors">The Ethics of Autonomous Decision Frameworks</h4>
</article>
<article className="group cursor-pointer">
<div className="mb-6 overflow-hidden aspect-[4/3] bg-zinc-200"></div>
<p className="text-xs text-indigo-600 font-semibold uppercase tracking-widest mb-4">Perspective</p>
<h4 className="text-xl font-medium tracking-tight group-hover:text-indigo-600 transition-colors">Why Hybrid Cloud is the Only Enterprise Path</h4>
</article>
<article className="group cursor-pointer">
<div className="mb-6 overflow-hidden aspect-[4/3] bg-zinc-200"></div>
<p className="text-xs text-indigo-600 font-semibold uppercase tracking-widest mb-4">Case Study</p>
<h4 className="text-xl font-medium tracking-tight group-hover:text-indigo-600 transition-colors">Quantum-Ready Security in the Age of LLMs</h4>
</article>
</div>
</div>
</section>

<section className="py-24 border-b border-zinc-100">
<div className="max-w-[1440px] mx-auto px-6">
<div className="flex flex-wrap justify-between items-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
<div className="flex items-center gap-2">
<iconify-icon height="24" icon="solar:star-fall-linear" width="24"></iconify-icon>
<span className="text-sm font-bold tracking-tighter italic uppercase">Global Tech Award 2024</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon height="24" icon="solar:verified-check-linear" width="24"></iconify-icon>
<span className="text-sm font-bold tracking-tighter italic uppercase">ISO 27001 Certified</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon height="24" icon="solar:medal-ribbon-linear" width="24"></iconify-icon>
<span className="text-sm font-bold tracking-tighter italic uppercase">AI Innovation Leader</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon height="24" icon="solar:cup-first-linear" width="24"></iconify-icon>
<span className="text-sm font-bold tracking-tighter italic uppercase">Fortune Tech Partner</span>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white overflow-hidden">
<div className="flex whitespace-nowrap gap-24 animate-marquee">
<span className="text-3xl font-semibold tracking-tighter text-zinc-200 uppercase">Microsoft</span>
<span className="text-3xl font-semibold tracking-tighter text-zinc-200 uppercase">Nvidia</span>
<span className="text-3xl font-semibold tracking-tighter text-zinc-200 uppercase">Snowflake</span>
<span className="text-3xl font-semibold tracking-tighter text-zinc-200 uppercase">Databricks</span>
<span className="text-3xl font-semibold tracking-tighter text-zinc-200 uppercase">AWS</span>
<span className="text-3xl font-semibold tracking-tighter text-zinc-200 uppercase">Google Cloud</span>
<span className="text-3xl font-semibold tracking-tighter text-zinc-200 uppercase">OpenAI</span>
<span className="text-3xl font-semibold tracking-tighter text-zinc-200 uppercase">Microsoft</span>
<span className="text-3xl font-semibold tracking-tighter text-zinc-200 uppercase">Nvidia</span>
<span className="text-3xl font-semibold tracking-tighter text-zinc-200 uppercase">Snowflake</span>
</div>
<style>
            @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
            .animate-marquee {
                animation: marquee 30s linear infinite;
                width: max-content;
            }
        </style>
</section>

<footer className="bg-white pt-40 pb-20 border-t border-zinc-100">
<div className="max-w-[1440px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-24 mb-40">
<div className="col-span-1 md:col-span-2">
<h2 className="text-6xl font-semibold tracking-tighter mb-12">Let's build the <br/><span className="text-indigo-600">invisible machine.</span></h2>
<button className="bg-zinc-900 text-white px-12 py-5 rounded-full text-lg font-medium hover:bg-coral-500 transition-all duration-500">
                        Initiate Consultation
                    </button>
</div>
<div className="space-y-6">
<h5 className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Navigation</h5>
<ul className="space-y-4 text-lg font-light">
<li><a className="hover:text-indigo-600 transition-colors" href="#">Approach</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Case Studies</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Research</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div className="space-y-6">
<h5 className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Connect</h5>
<ul className="space-y-4 text-lg font-light">
<li><a className="hover:text-indigo-600 transition-colors" href="#">LinkedIn</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">X (Twitter)</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">GitHub</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-zinc-100 text-sm text-zinc-400">
<div className="font-semibold tracking-tighter text-zinc-900 text-lg mb-4 md:mb-0">AXON.</div>
<div className="flex gap-8">
<span>© 2024 Axon Systems AG</span>
<a className="hover:text-zinc-900" href="#">Privacy Policy</a>
<a className="hover:text-zinc-900" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
