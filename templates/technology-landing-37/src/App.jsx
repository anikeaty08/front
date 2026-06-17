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
      

<header className="fixed top-0 w-full border-b border-white/5 bg-zinc-950/80 backdrop-blur-md z-50">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-base font-semibold tracking-tighter text-white" href="#">NVX</a>
<nav className="hidden md:flex gap-6 text-sm text-zinc-400 font-light">
<a className="hover:text-zinc-100 transition-colors" href="#">Products</a>
<a className="hover:text-zinc-100 transition-colors" href="#">Solutions</a>
<a className="hover:text-zinc-100 transition-colors" href="#">Pricing</a>
<a className="hover:text-zinc-100 transition-colors" href="#">Docs</a>
</nav>
</div>
<div className="flex items-center gap-4">
<a className="text-sm text-zinc-400 hover:text-white transition-colors hidden sm:block font-light" href="#">Log in</a>
<a className="text-xs bg-white text-black px-4 py-1.5 rounded-full font-medium hover:bg-zinc-200 transition-colors" href="#">Sign Up</a>
</div>
</div>
</header>

<main className="pt-32 pb-20 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="flex flex-col text-center max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-300 mb-8 backdrop-blur-sm shadow-sm shadow-black/50">
<span className="flex h-1.5 w-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]"></span>
                v2.0 is now available
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter max-w-4xl mx-auto leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-500">
                Design the future<br/>with absolute precision.
            </h1>
<p className="mt-6 text-base md:text-lg text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
                Streamline your product development with our next-generation infrastructure. Built for modern teams demanding peak performance and elegant simplicity.
            </p>
<div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
<a className="flex items-center justify-center gap-2 bg-white text-black px-6 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-200 transition-all shadow-lg shadow-white/10" href="#">
                    Start deploying
                    <iconify-icon height="16" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
<a className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-sm font-light border border-white/10 bg-white/[0.03] text-zinc-300 hover:bg-white/[0.08] hover:text-white transition-all backdrop-blur-sm" href="#">
<iconify-icon height="18" icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    View documentation
                </a>
</div>

<div className="mt-20 w-full max-w-5xl mx-auto rounded-xl border border-white/10 bg-zinc-900/40 backdrop-blur-2xl p-2 shadow-2xl shadow-black/80 relative">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10 rounded-xl pointer-events-none"></div>
<div className="w-full aspect-[16/9] md:aspect-[21/9] rounded-lg bg-[#0a0a0a] border border-white/5 overflow-hidden flex flex-col relative z-0">

<div className="h-10 border-b border-white/5 flex items-center justify-between px-4 bg-white/[0.02]">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
</div>
<div className="h-4 w-32 bg-white/5 rounded-full"></div>
</div>

<div className="flex-1 p-6 flex gap-6">

<div className="w-48 hidden lg:flex flex-col gap-3 pr-4">
<div className="h-5 w-full bg-white/5 rounded flex items-center px-2 gap-2">
<div className="w-3 h-3 rounded-sm bg-white/10"></div>
<div className="h-2 w-16 bg-white/10 rounded-full"></div>
</div>
<div className="h-5 w-4/5 bg-white/[0.02] rounded flex items-center px-2 gap-2">
<div className="w-3 h-3 rounded-sm bg-white/5"></div>
<div className="h-2 w-12 bg-white/5 rounded-full"></div>
</div>
<div className="h-5 w-5/6 bg-white/[0.02] rounded flex items-center px-2 gap-2">
<div className="w-3 h-3 rounded-sm bg-white/5"></div>
<div className="h-2 w-14 bg-white/5 rounded-full"></div>
</div>
</div>

<div className="flex-1 flex flex-col gap-4">
<div className="flex gap-4">
<div className="h-8 w-24 bg-white/10 rounded-md border border-white/5"></div>
<div className="h-8 w-24 bg-white/[0.02] rounded-md border border-white/5"></div>
</div>
<div className="flex-1 border border-white/5 rounded-lg bg-gradient-to-br from-white/[0.03] to-transparent p-4 relative overflow-hidden">

<svg className="absolute bottom-0 left-0 w-full h-full text-indigo-500/20" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0,100 C20,80 40,100 60,60 C80,20 100,40 100,40 L100,100 Z" fill="currentColor" opacity="0.5"></path>
<path d="M0,100 C30,90 50,50 70,70 C90,90 100,30 100,30" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
</svg>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-24 relative border-t border-white/5 bg-zinc-950">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-4">Architected for scale</h2>
<p className="text-sm md:text-base text-zinc-400 font-light">Every component is engineered to eliminate friction. Focus entirely on building your product while we handle the complexity.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="group p-6 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/10 transition-all duration-300 cursor-default">
<div className="w-10 h-10 rounded-lg bg-zinc-900/50 border border-white/5 flex items-center justify-center mb-5 text-zinc-400 group-hover:text-white transition-colors">
<iconify-icon height="20" icon="solar:bolt-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-zinc-200 mb-2">Global Edge Network</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">Deploy your code to our global edge network in seconds. Experience zero-latency routing worldwide.</p>
</div>

<div className="group p-6 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/10 transition-all duration-300 cursor-default">
<div className="w-10 h-10 rounded-lg bg-zinc-900/50 border border-white/5 flex items-center justify-center mb-5 text-zinc-400 group-hover:text-white transition-colors">
<iconify-icon height="20" icon="solar:shield-keyhole-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-zinc-200 mb-2">Impenetrable Security</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">Automated DDoS protection, SOC2 compliance, and end-to-end encryption come standard.</p>
</div>

<div className="group p-6 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/10 transition-all duration-300 cursor-default">
<div className="w-10 h-10 rounded-lg bg-zinc-900/50 border border-white/5 flex items-center justify-center mb-5 text-zinc-400 group-hover:text-white transition-colors">
<iconify-icon height="20" icon="solar:chart-square-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-zinc-200 mb-2">Instant Telemetry</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">Monitor application health, traffic spikes, and user metrics in absolute real-time.</p>
</div>

<div className="group p-6 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/10 transition-all duration-300 cursor-default">
<div className="w-10 h-10 rounded-lg bg-zinc-900/50 border border-white/5 flex items-center justify-center mb-5 text-zinc-400 group-hover:text-white transition-colors">
<iconify-icon height="20" icon="solar:layers-minimalistic-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-zinc-200 mb-2">Branch Previews</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">Every git push automatically generates a live preview URL for seamless team reviews.</p>
</div>

<div className="group p-6 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/10 transition-all duration-300 cursor-default lg:col-span-2 relative overflow-hidden">
<div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-indigo-500/5 to-transparent pointer-events-none"></div>
<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between h-full gap-6">
<div className="max-w-md">
<div className="w-10 h-10 rounded-lg bg-zinc-900/50 border border-white/5 flex items-center justify-center mb-5 text-zinc-400 group-hover:text-indigo-400 transition-colors">
<iconify-icon height="20" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-zinc-200 mb-2">AI-Assisted Workflow</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">Utilize our native AI models to optimize code, generate tests, and automate infrastructure provisioning autonomously.</p>
</div>
<div className="w-full md:w-auto flex-1 bg-zinc-900/30 border border-white/5 rounded-xl p-4 font-mono text-xs text-zinc-400 overflow-hidden">
<div className="flex gap-2 mb-2 border-b border-white/5 pb-2">
<span className="text-zinc-500">Terminal</span>
</div>
<p><span className="text-indigo-400">~</span> nvx deploy --production</p>
<p className="text-zinc-500 mt-1">Analyzing dependencies...</p>
<p className="text-zinc-500">Optimizing build output...</p>
<p className="text-emerald-400 mt-1">✓ Deployment successful in 1.2s</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#0a0a0a]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-4">Obsessive attention to detail</h2>
<p className="text-sm md:text-base text-zinc-400 font-light mb-8 max-w-md leading-relaxed">Interact with an interface that feels tactile and responsive. We've refined every component to ensure your workflow feels completely frictionless.</p>
<div className="space-y-4">
<div className="flex items-center gap-3">
<div className="flex items-center justify-center w-5 h-5 rounded-full bg-white/5 border border-white/10 text-white">
<iconify-icon height="12" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="text-sm text-zinc-300 font-light">Keyboard-first accessibility</span>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center justify-center w-5 h-5 rounded-full bg-white/5 border border-white/10 text-white">
<iconify-icon height="12" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="text-sm text-zinc-300 font-light">Sub-millisecond interaction delay</span>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center justify-center w-5 h-5 rounded-full bg-white/5 border border-white/10 text-white">
<iconify-icon height="12" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="text-sm text-zinc-300 font-light">Custom variable font support</span>
</div>
</div>
</div>

<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 md:p-8 relative overflow-hidden">
<div className="space-y-6 relative z-10">

<div className="space-y-2">
<p className="text-xs font-medium text-zinc-500 tracking-wide uppercase px-1">Configuration</p>

<div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
<div className="flex gap-3 items-center">
<iconify-icon className="text-zinc-400" height="18" icon="solar:server-linear" width="18"></iconify-icon>
<div>
<p className="text-sm font-medium text-zinc-200">Auto-scaling</p>
<p className="text-xs text-zinc-500 font-light mt-0.5">Dynamically adjust instance count</p>
</div>
</div>
<div className="relative w-9 h-5 bg-indigo-500 rounded-full cursor-pointer shadow-inner">
<div className="absolute left-[2px] top-[2px] w-4 h-4 bg-white rounded-full translate-x-4 shadow-sm"></div>
</div>
</div>

<div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
<div className="flex justify-between items-center mb-2 px-1">
<p className="text-sm font-medium text-zinc-200">Deployment Region</p>
</div>
<div className="flex justify-between items-center bg-zinc-950/50 border border-white/5 rounded-lg px-3 py-2 cursor-pointer hover:border-white/10 transition-colors shadow-inner">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.8)]"></div>
<span className="text-xs text-zinc-300 font-light">US-East (N. Virginia)</span>
</div>
<iconify-icon className="text-zinc-500" height="14" icon="solar:alt-arrow-down-linear" width="14"></iconify-icon>
</div>
</div>

<div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
<div className="flex justify-between items-center mb-3 px-1">
<p className="text-sm font-medium text-zinc-200">Memory Limit</p>
<p className="text-xs font-mono text-zinc-400">16 GB</p>
</div>
<div className="w-full h-1 bg-zinc-800 rounded-full relative mx-1 w-[calc(100%-8px)]">
<div className="absolute left-0 top-0 h-full w-3/4 bg-white rounded-full"></div>
<div className="absolute left-3/4 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-white rounded-full shadow-md cursor-grab active:cursor-grabbing border border-zinc-200 hover:scale-110 transition-transform"></div>
</div>
<div className="flex justify-between text-[10px] text-zinc-600 mt-2 px-1 font-mono">
<span>2 GB</span>
<span>32 GB</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden border-t border-white/5 bg-zinc-950">
<div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-indigo-500/10 to-transparent pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white mb-6">Start building today.</h2>
<p className="text-sm md:text-base text-zinc-400 font-light mb-10">Join innovative teams shipping faster and more reliably. Deploy your first project in under a minute.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors shadow-lg shadow-white/10" href="#">Deploy to NVX</a>
<a className="px-6 py-2.5 rounded-full text-sm font-light text-white border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] transition-colors" href="#">Contact Sales</a>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-zinc-950">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-4">
<div className="text-base font-semibold tracking-tighter text-white">NVX</div>
<div className="w-px h-4 bg-white/10"></div>
<span className="text-xs text-zinc-600 font-light">© 2024 NVX Inc. All rights reserved.</span>
</div>
<div className="flex gap-6 text-xs text-zinc-500 font-light">
<a className="hover:text-zinc-300 transition-colors" href="#">Privacy</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Terms</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Twitter</a>
<a className="hover:text-zinc-300 transition-colors" href="#">GitHub</a>
</div>
</div>
</footer>

    </>
  );
}
