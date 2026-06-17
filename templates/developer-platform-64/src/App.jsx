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



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });
    
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="spline-container absolute top-0 left-0 w-full h-full z-0"><iframe frameborder="0" height="100%" id="aura-spline" src="https://my.spline.design/glowingplanetparticles-HmCVKutonlFn3Oqqe6DI9nWi/" width="100%"></iframe></div></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#08090A]/80 backdrop-blur-xl">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-5 h-5 bg-zinc-100 rounded-full flex items-center justify-center">
<div className="w-2.5 h-2.5 bg-[#08090A] rounded-full"></div>
</div>
<span className="text-sm font-semibold text-white tracking-tight">VEXEL</span>
</div>
<div className="hidden md:flex items-center gap-6 text-xs font-medium text-zinc-400">
<a className="hover:text-white transition-colors duration-200" href="#features">Features</a>
<a className="hover:text-white transition-colors duration-200" href="#method">Method</a>
<a className="hover:text-white transition-colors duration-200" href="#pricing">Pricing</a>
<a className="hover:text-white transition-colors duration-200" href="#faq">FAQ</a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors hidden sm:block" href="#">Log in</a>
<a className="text-xs font-medium bg-white text-black px-3 py-1.5 rounded-full hover:bg-zinc-200 transition-colors" href="#">Sign up</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium text-indigo-300 mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Vexel 2.0 is now available
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-gradient mb-6 leading-[1.1]">
                Build. Ship. Scale.<br/>
<span className="text-white/40">All in One.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                From real-time collaboration to global deployments, get everything your team needs to build secure, high-performance apps — in one unified workflow.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="h-10 px-6 rounded-full bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-all flex items-center gap-2">
                    Get Started <span className="text-zinc-400">— It's Free</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="h-10 px-6 rounded-full border border-white/10 bg-white/5 text-zinc-300 text-sm font-medium hover:bg-white/10 transition-all flex items-center gap-2 backdrop-blur-sm">
<i className="w-4 h-4 text-zinc-400" data-lucide="play-circle"></i>
                    Watch Video
                </button>
</div>
<p className="mt-6 text-xs text-zinc-500">No credit card required. Up and running in 2 minutes.</p>
</div>

<div className="max-w-5xl mx-auto mt-20 px-6 relative">
<div className="absolute inset-0 bg-gradient-to-t from-[#08090A] via-transparent to-transparent z-10 h-full w-full"></div>
<div className="border border-white/10 bg-[#0C0D0F] rounded-xl overflow-hidden shadow-2xl shadow-indigo-500/10">
<div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-[#08090A]">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="text-[10px] text-zinc-500 font-mono ml-4">vexel-platform — deploy</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5 h-64 md:h-80">

<div className="p-6 relative overflow-hidden group">
<div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="flex items-center gap-2 text-xs text-indigo-400 mb-4 font-mono">
<i className="w-3 h-3" data-lucide="code-2"></i> main.tsx
                        </div>
<div className="space-y-2 font-mono text-[10px] md:text-xs text-zinc-500">
<p><span className="text-purple-400">export</span> <span className="text-blue-400">default</span> <span className="text-yellow-200">function</span> <span className="text-blue-300">App</span>() {</p>
<p className="pl-4"><span className="text-purple-400">return</span> (</p>
<p className="pl-8 text-zinc-600">&lt;div className="hero"&gt;</p>
<p className="pl-12 text-zinc-400">Build faster.</p>
<p className="pl-8 text-zinc-600">&lt;/div&gt;</p>
<p className="pl-4">);</p>
<p>}</p>
</div>

<div className="absolute top-[120px] left-[140px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[9px] border border-emerald-500/30 flex items-center gap-1">
<div className="w-1 h-1 bg-emerald-400 rounded-full"></div> Sarah is typing...
                        </div>
</div>

<div className="p-6 flex flex-col justify-center items-center relative">
<div className="w-px h-full absolute left-1/2 top-0 bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent"></div>
<div className="z-10 bg-[#0C0D0F] border border-white/10 p-3 rounded-lg w-full max-w-[180px] mb-4 shadow-lg">
<div className="flex items-center justify-between mb-2">
<span className="text-[10px] text-zinc-400">Build</span>
<i className="w-3 h-3 text-emerald-500" data-lucide="check-circle-2"></i>
</div>
<div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full w-full bg-emerald-500/50"></div>
</div>
</div>
<div className="z-10 bg-[#0C0D0F] border border-zinc-700/50 p-3 rounded-lg w-full max-w-[180px] shadow-[0_0_15px_rgba(99,102,241,0.15)] border-indigo-500/30">
<div className="flex items-center justify-between mb-2">
<span className="text-[10px] text-indigo-200">Deploying...</span>
<i className="w-3 h-3 text-indigo-400 animate-spin" data-lucide="loader-2"></i>
</div>
<div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full w-3/4 bg-indigo-500"></div>
</div>
</div>
</div>

<div className="p-6 relative flex items-center justify-center">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent"></div>
<div className="grid grid-cols-2 gap-3 w-full">
<div className="bg-white/5 border border-white/5 rounded p-3 flex flex-col items-center">
<span className="text-[10px] text-zinc-500 mb-1">US-East</span>
<span className="text-xs font-mono text-emerald-400">14ms</span>
</div>
<div className="bg-white/5 border border-white/5 rounded p-3 flex flex-col items-center">
<span className="text-[10px] text-zinc-500 mb-1">EU-West</span>
<span className="text-xs font-mono text-emerald-400">22ms</span>
</div>
<div className="bg-white/5 border border-white/5 rounded p-3 flex flex-col items-center">
<span className="text-[10px] text-zinc-500 mb-1">Asia-Pac</span>
<span className="text-xs font-mono text-emerald-400">45ms</span>
</div>
<div className="bg-white/5 border border-white/5 rounded p-3 flex flex-col items-center">
<span className="text-[10px] text-zinc-500 mb-1">SA-East</span>
<span className="text-xs font-mono text-emerald-400">31ms</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-white/[0.01]">
<div className="max-w-6xl mx-auto px-6 py-12">
<p className="text-center text-xs font-medium text-zinc-500 mb-8 uppercase tracking-widest">Trusted by engineering teams worldwide</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 group">
<div className="w-5 h-5 bg-white rounded-sm rotate-45 group-hover:bg-blue-400 transition-colors"></div>
<span className="font-bold text-lg text-white tracking-tighter">ACME</span>
</div>
<div className="flex items-center gap-2 group">
<div className="w-5 h-5 rounded-full border-2 border-white group-hover:border-purple-400 transition-colors"></div>
<span className="font-bold text-lg text-white tracking-tighter">Orbital</span>
</div>
<div className="flex items-center gap-2 group">
<div className="flex gap-0.5">
<div className="w-2 h-5 bg-white group-hover:bg-green-400 transition-colors"></div>
<div className="w-2 h-5 bg-white group-hover:bg-green-400 transition-colors"></div>
</div>
<span className="font-bold text-lg text-white tracking-tighter">Starlight</span>
</div>
<div className="flex items-center gap-2 group">
<div className="w-5 h-5 bg-white rounded-bl-xl rounded-tr-xl group-hover:bg-orange-400 transition-colors"></div>
<span className="font-bold text-lg text-white tracking-tighter">Nexus</span>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-6xl mx-auto px-6">
<div className="max-w-2xl mb-16">
<h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 tracking-tight">Still cobbling together tools?</h3>
<p className="text-zinc-400 leading-relaxed">
                Juggling multiple tools—code editors, CI/CD pipelines, hosting services—slows you down. 
                Setting up infrastructure and managing permissions shouldn't take weeks. That’s wasted time and energy.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center mb-4 text-red-400">
<i className="w-5 h-5" data-lucide="shuffle"></i>
</div>
<h4 className="text-sm font-semibold text-white mb-2">Context Switching</h4>
<p className="text-sm text-zinc-500 leading-relaxed">Diverse tools that don’t sync kill productivity. Stop jumping between tabs to check deployment status.</p>
</div>
<div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4 text-orange-400">
<i className="w-5 h-5" data-lucide="settings-2"></i>
</div>
<h4 className="text-sm font-semibold text-white mb-2">Config Overhead</h4>
<p className="text-sm text-zinc-500 leading-relaxed">Time wasted on YAML files and AWS permissions instead of building core product features.</p>
</div>
<div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-4 text-yellow-400">
<i className="w-5 h-5" data-lucide="alert-triangle"></i>
</div>
<h4 className="text-sm font-semibold text-white mb-2">Security Risks</h4>
<p className="text-sm text-zinc-500 leading-relaxed">Fragmented security and compliance creates risk of leaks or misconfigurations in production.</p>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/20 border-y border-white/5" id="features">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16 text-center">
<h3 className="text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight">Meet Vexel</h3>
<p className="text-zinc-400">Your unified dev-to-deployment platform.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-2 gap-4 h-auto md:h-[600px]">

<div className="md:col-span-4 row-span-2 rounded-2xl border border-white/10 bg-[#0C0D0F] overflow-hidden relative group">
<div className="absolute top-0 right-0 p-8 w-full z-10">
<div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-4 text-indigo-400">
<i className="w-5 h-5" data-lucide="users"></i>
</div>
<h4 className="text-xl font-semibold text-white mb-2">Real-time Collaboration</h4>
<p className="text-sm text-zinc-400 max-w-sm">Write code together, in real time. Pair program, review diffs, and resolve comments without leaving the editor.</p>
</div>

<div className="absolute bottom-0 left-0 w-full h-1/2 md:h-2/3 bg-zinc-900/50 border-t border-white/5 p-6 backdrop-blur-sm">
<div className="space-y-3 font-mono text-xs">
<div className="flex gap-2">
<span className="text-zinc-600">12</span>
<span className="text-purple-400">const</span> <span className="text-blue-300">collaborate</span> = <span className="text-yellow-200">async</span> () =&gt; {
                            </div>
<div className="flex gap-2 relative bg-indigo-500/10 -mx-6 px-6 py-1 border-l-2 border-indigo-500">
<span className="text-zinc-600">13</span>
<span className="pl-4 text-zinc-300">await team.connect();</span>
<div className="absolute right-4 top-1.5 flex -space-x-2">
<div className="w-5 h-5 rounded-full bg-blue-500 border border-[#0C0D0F]"></div>
<div className="w-5 h-5 rounded-full bg-green-500 border border-[#0C0D0F]"></div>
</div>
</div>
<div className="flex gap-2">
<span className="text-zinc-600">14</span>
<span className="pl-4 text-zinc-300">return "Shipped";</span>
</div>
<div className="flex gap-2">
<span className="text-zinc-600">15</span>
<span>}</span>
</div>
</div>
</div>
</div>

<div className="md:col-span-2 rounded-2xl border border-white/10 bg-[#0C0D0F] p-8 flex flex-col justify-between group hover:border-white/20 transition-colors">
<div>
<i className="w-6 h-6 text-emerald-400 mb-4" data-lucide="globe-2"></i>
<h4 className="text-base font-semibold text-white mb-1">Global Edge Network</h4>
<p className="text-xs text-zinc-500">Runs close to users everywhere. Low latency by default.</p>
</div>
<div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4">
<span className="text-[10px] text-zinc-600">Latency</span>
<span className="text-xs font-mono text-emerald-400">&lt; 30ms</span>
</div>
</div>

<div className="md:col-span-2 rounded-2xl border border-white/10 bg-[#0C0D0F] p-8 flex flex-col justify-between group hover:border-white/20 transition-colors relative overflow-hidden">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-500/20 blur-[40px] rounded-full group-hover:bg-blue-500/30 transition-all"></div>
<div>
<i className="w-6 h-6 text-blue-400 mb-4" data-lucide="zap"></i>
<h4 className="text-base font-semibold text-white mb-1">Instant Deployments</h4>
<p className="text-xs text-zinc-500">Push to Git and go live instantly. Zero config.</p>
</div>
<div className="mt-6 flex items-center gap-2">
<div className="px-2 py-1 rounded bg-zinc-800 border border-white/5 text-[10px] text-zinc-400 font-mono">git push</div>
<i className="w-3 h-3 text-zinc-600" data-lucide="arrow-right"></i>
<div className="px-2 py-1 rounded bg-green-500/10 border border-green-500/20 text-[10px] text-green-400 font-medium">Live</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
<div className="p-6 rounded-2xl border border-white/10 bg-[#0C0D0F]">
<div className="flex items-center gap-3 mb-3">
<i className="w-5 h-5 text-zinc-400" data-lucide="shield-check"></i>
<h4 className="text-sm font-semibold text-white">Enterprise Security</h4>
</div>
<p className="text-xs text-zinc-500">SOC2-ready, SSO, and RBAC out of the box.</p>
</div>
<div className="p-6 rounded-2xl border border-white/10 bg-[#0C0D0F]">
<div className="flex items-center gap-3 mb-3">
<i className="w-5 h-5 text-purple-400" data-lucide="sparkles"></i>
<h4 className="text-sm font-semibold text-white">AI Assistant</h4>
</div>
<p className="text-xs text-zinc-500">Generate and optimize code with context-aware AI.</p>
</div>
<div className="p-6 rounded-2xl border border-white/10 bg-[#0C0D0F]">
<div className="flex items-center gap-3 mb-3">
<i className="w-5 h-5 text-zinc-400" data-lucide="layers"></i>
<h4 className="text-sm font-semibold text-white">Full-Stack</h4>
</div>
<p className="text-xs text-zinc-500">Support for Node, Python, Go, Rust, and more.</p>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-6xl mx-auto px-6" id="method">
<div className="text-center mb-16">
<h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-4">From idea to live in 3 steps</h3>
</div>
<div className="relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent border-t border-dashed border-zinc-800"></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

<div className="relative flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-2xl bg-[#0C0D0F] border border-white/10 flex items-center justify-center mb-6 relative z-10 shadow-lg group-hover:border-indigo-500/50 transition-colors">
<div className="text-3xl font-bold text-zinc-700 group-hover:text-indigo-500 transition-colors">1</div>
</div>
<h4 className="text-lg font-medium text-white mb-2">Code Together</h4>
<p className="text-sm text-zinc-500">Real-time editing with your team in a cloud-based environment.</p>
</div>

<div className="relative flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-2xl bg-[#0C0D0F] border border-white/10 flex items-center justify-center mb-6 relative z-10 shadow-lg group-hover:border-purple-500/50 transition-colors">
<div className="text-3xl font-bold text-zinc-700 group-hover:text-purple-500 transition-colors">2</div>
</div>
<h4 className="text-lg font-medium text-white mb-2">Push to Git</h4>
<p className="text-sm text-zinc-500">We detect the commit, build the container, and run tests automatically.</p>
</div>

<div className="relative flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-2xl bg-[#0C0D0F] border border-white/10 flex items-center justify-center mb-6 relative z-10 shadow-lg group-hover:border-emerald-500/50 transition-colors">
<div className="text-3xl font-bold text-zinc-700 group-hover:text-emerald-500 transition-colors">3</div>
</div>
<h4 className="text-lg font-medium text-white mb-2">Go Live</h4>
<p className="text-sm text-zinc-500">Instantly propagated to 35+ edge regions globally. Secure by default.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-zinc-900/10" id="pricing">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16 md:flex justify-between items-end">
<div>
<h3 className="text-3xl font-semibold text-white tracking-tight mb-2">Flexible pricing</h3>
<p className="text-zinc-400">Start free with no credit card. Scale as you grow.</p>
</div>
<div className="mt-4 md:mt-0">
<div className="inline-flex rounded-full bg-white/5 p-1 border border-white/5">
<button className="px-4 py-1.5 rounded-full bg-zinc-800 text-xs text-white font-medium shadow-sm">Monthly</button>
<button className="px-4 py-1.5 rounded-full text-xs text-zinc-500 font-medium hover:text-white">Yearly</button>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl border border-white/5 bg-[#0C0D0F] flex flex-col">
<div className="mb-4">
<h4 className="text-lg font-medium text-white">Starter</h4>
<div className="mt-2 flex items-baseline gap-1">
<span className="text-3xl font-bold text-white">$0</span>
<span className="text-zinc-500 text-sm">/mo</span>
</div>
</div>
<p className="text-sm text-zinc-500 mb-6">Perfect for hobby projects and experiments.</p>
<ul className="space-y-3 mb-8 text-sm text-zinc-400 flex-1">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-zinc-600" data-lucide="check"></i> 1 Seat</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-zinc-600" data-lucide="check"></i> 3 Projects</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-zinc-600" data-lucide="check"></i> Community Support</li>
</ul>
<button className="w-full py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium text-white hover:bg-white/10 transition-colors">Start Free</button>
</div>

<div className="p-8 rounded-2xl border border-indigo-500/30 bg-[#0C0D0F] relative shadow-[0_0_40px_-10px_rgba(99,102,241,0.15)] flex flex-col">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</div>
<div className="mb-4">
<h4 className="text-lg font-medium text-white">Team</h4>
<div className="mt-2 flex items-baseline gap-1">
<span className="text-3xl font-bold text-white">$29</span>
<span className="text-zinc-500 text-sm">/mo</span>
</div>
</div>
<p className="text-sm text-zinc-500 mb-6">For growing teams shipping production apps.</p>
<ul className="space-y-3 mb-8 text-sm text-zinc-300 flex-1">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-indigo-400" data-lucide="check"></i> 5 Seats</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-indigo-400" data-lucide="check"></i> Unlimited Projects</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-indigo-400" data-lucide="check"></i> Instant Rollbacks</li>
</ul>
<button className="w-full py-2 rounded-lg bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors">Get Started</button>
</div>

<div className="p-8 rounded-2xl border border-white/5 bg-[#0C0D0F] flex flex-col">
<div className="mb-4">
<h4 className="text-lg font-medium text-white">Enterprise</h4>
<div className="mt-2 flex items-baseline gap-1">
<span className="text-3xl font-bold text-white">Custom</span>
</div>
</div>
<p className="text-sm text-zinc-500 mb-6">Advanced security and control for large orgs.</p>
<ul className="space-y-3 mb-8 text-sm text-zinc-400 flex-1">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-zinc-600" data-lucide="check"></i> Unlimited Seats</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-zinc-600" data-lucide="check"></i> SSO &amp; SAML</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-zinc-600" data-lucide="check"></i> Audit Logs</li>
</ul>
<button className="w-full py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium text-white hover:bg-white/10 transition-colors">Contact Sales</button>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-3xl mx-auto px-6" id="faq">
<h3 className="text-2xl font-semibold text-white mb-8 text-center">Got questions?</h3>
<div className="space-y-4">
<details className="group bg-[#0C0D0F] border border-white/5 rounded-lg open:bg-white/[0.02] transition-colors">
<summary className="flex items-center justify-between p-4 cursor-pointer">
<span className="text-sm font-medium text-zinc-200">Is there a free tier?</span>
<i className="w-4 h-4 text-zinc-500 group-open:rotate-45 transition-transform" data-lucide="plus"></i>
</summary>
<div className="px-4 pb-4 text-sm text-zinc-500 leading-relaxed">
                    Yes, our Starter plan is completely free forever. It includes 1 seat, 3 projects, and community support. You can upgrade anytime as you scale.
                </div>
</details>
<details className="group bg-[#0C0D0F] border border-white/5 rounded-lg open:bg-white/[0.02] transition-colors">
<summary className="flex items-center justify-between p-4 cursor-pointer">
<span className="text-sm font-medium text-zinc-200">Can I migrate existing projects?</span>
<i className="w-4 h-4 text-zinc-500 group-open:rotate-45 transition-transform" data-lucide="plus"></i>
</summary>
<div className="px-4 pb-4 text-sm text-zinc-500 leading-relaxed">
                    Absolutely. Connect your GitHub or GitLab repository, and we will automatically detect your framework and configure the build settings.
                </div>
</details>
<details className="group bg-[#0C0D0F] border border-white/5 rounded-lg open:bg-white/[0.02] transition-colors">
<summary className="flex items-center justify-between p-4 cursor-pointer">
<span className="text-sm font-medium text-zinc-200">What security certifications do you have?</span>
<i className="w-4 h-4 text-zinc-500 group-open:rotate-45 transition-transform" data-lucide="plus"></i>
</summary>
<div className="px-4 pb-4 text-sm text-zinc-500 leading-relaxed">
                    We are SOC2 Type II compliant. We also support SSO, SAML, and granular Role-Based Access Control (RBAC) on our Enterprise plans.
                </div>
</details>
<details className="group bg-[#0C0D0F] border border-white/5 rounded-lg open:bg-white/[0.02] transition-colors">
<summary className="flex items-center justify-between p-4 cursor-pointer">
<span className="text-sm font-medium text-zinc-200">Which frameworks are supported?</span>
<i className="w-4 h-4 text-zinc-500 group-open:rotate-45 transition-transform" data-lucide="plus"></i>
</summary>
<div className="px-4 pb-4 text-sm text-zinc-500 leading-relaxed">
                    We support all major frameworks including Next.js, React, Vue, Svelte, Node.js, Python (Django/Flask), Go, and Rust. Dockerfiles are also supported for custom environments.
                </div>
</details>
</div>
</section>

<section className="py-24 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent pointer-events-none"></div>
<div className="max-w-2xl mx-auto px-6 relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">Ready to build faster?</h2>
<p className="text-zinc-400 mb-10 text-lg">Join hundreds of teams already shipping production-grade apps with confidence. No setup. No mess.</p>
<button className="h-12 px-8 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                Get Started — It's Free
            </button>
</div>
</section>

<footer className="border-t border-white/5 bg-[#08090A] pt-16 pb-8">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
<div className="flex items-center gap-2">
<div className="w-4 h-4 bg-zinc-100 rounded-full flex items-center justify-center">
<div className="w-2 h-2 bg-[#08090A] rounded-full"></div>
</div>
<span className="text-sm font-semibold text-white tracking-tight">VEXEL</span>
</div>
<div className="flex gap-8 text-sm text-zinc-500">
<a className="hover:text-white transition-colors" href="#">Docs</a>
<a className="hover:text-white transition-colors" href="#">Community</a>
<a className="hover:text-white transition-colors" href="#">Changelog</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">GitHub</a>
</div>
</div>
<div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
<p>© 2024 Vexel Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-zinc-400" href="#">Privacy Policy</a>
<a className="hover:text-zinc-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
