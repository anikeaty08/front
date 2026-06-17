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



        function showBlog() {
            document.getElementById('home-view').classList.add('hidden');
            document.getElementById('blog-view').classList.remove('hidden');
            window.scrollTo(0, 0);
        }

        function showHome() {
            document.getElementById('blog-view').classList.add('hidden');
            document.getElementById('home-view').classList.remove('hidden');
            window.scrollTo(0, 0);
        }
    
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
      

<div className="noise-bg"></div>

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-zinc-800/20 blur-[120px] rounded-full pointer-events-none -z-10 ghost-glow"></div>

<nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="flex h-14 max-w-6xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="flex items-center gap-2 group cursor-pointer" href="#" onclick="showHome()">
<iconify-icon className="text-zinc-100 transition-transform group-hover:rotate-12" icon="solar:ghost-smile-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-medium text-zinc-100 tracking-tighter cursor-pointer" onclick="window.location.href='/'" role="button">GHOST</span>
</a>

<div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide">
<a className="hover:text-zinc-100 transition-colors" href="#features" onclick="showHome()">Protocol</a>
<a className="hover:text-zinc-100 transition-colors" href="#log" onclick="showHome()">Log</a>
<a className="hover:text-zinc-100 transition-colors" href="#pricing" onclick="showHome()">Access</a>
</div>

<div className="flex items-center gap-4">
<a className="text-xs font-medium hover:text-zinc-100 transition-colors" href="#">Log in</a>
<a className="text-xs font-medium bg-zinc-100 text-black px-3 py-1.5 rounded hover:bg-zinc-200 transition-colors tracking-tight" href="#">
                    Start Vanishing
                </a>
</div>
</div>
</nav>

<div className="fade-enter w-full" id="home-view">

<main className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-500"></span>
</span>
<span className="text-xs font-medium text-zinc-400 tracking-wide uppercase">System Operational</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-zinc-100 tracking-tighter mb-8 leading-[0.95]">
                    Leave no <span className="text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-600">trace.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-500 max-w-xl mx-auto mb-10 font-light leading-relaxed">
                    The invisible layer for modern deployment. Ghost anonymizes your digital footprint, securing your infrastructure with spectral routing.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="group relative px-6 py-3 bg-zinc-100 text-black text-sm font-medium rounded-lg hover:bg-white transition-all overflow-hidden w-full sm:w-auto">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                        Deploy Instance
                    </button>
<button className="px-6 py-3 border border-zinc-800 text-zinc-300 text-sm font-medium rounded-lg hover:bg-zinc-900 transition-colors w-full sm:w-auto flex items-center justify-center gap-2">
<iconify-icon icon="solar:code-linear" strokeWidth="1.5" width="16"></iconify-icon>
                        View Documentation
                    </button>
</div>
</div>

<div className="mt-24 max-w-5xl mx-auto">
<div className="relative rounded-xl border border-white/5 bg-zinc-900/20 backdrop-blur-sm overflow-hidden p-1">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent opacity-50"></div>

<div className="h-10 border-b border-white/5 bg-black/40 flex items-center px-4 justify-between">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-800 border border-white/5"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-800 border border-white/5"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-800 border border-white/5"></div>
</div>
<div className="text-[10px] uppercase tracking-widest text-zinc-600 font-medium">ghost-cli — v2.4.0</div>
</div>

<div className="p-8 grid md:grid-cols-2 gap-12 items-center">

<div className="space-y-6">
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-400 uppercase tracking-wide">Stealth Mode</label>
<div className="flex items-center justify-between p-4 rounded-lg bg-zinc-900/50 border border-white/5">
<div className="flex items-center gap-3">
<div className="p-2 rounded bg-zinc-800/50 text-zinc-400">
<iconify-icon icon="solar:eye-closed-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm text-zinc-200 font-medium">Invisibility</span>
<span className="text-xs text-zinc-500">Mask all outgoing requests</span>
</div>
</div>

<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-zinc-400 border-4 border-zinc-900 appearance-none cursor-pointer transition-all duration-300 left-0 checked:left-[50%] checked:bg-white" id="toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-zinc-800 cursor-pointer" htmlFor="toggle"></label>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-400 uppercase tracking-wide">Signal Strength</label>

<div className="h-12 flex items-center px-4 rounded-lg bg-zinc-900/50 border border-white/5">
<iconify-icon className="text-zinc-500 mr-3" icon="solar:wifi-router-linear" strokeWidth="1.5" width="18"></iconify-icon>
<div className="w-full h-1 bg-zinc-800 rounded-full relative">
<div className="absolute top-0 left-0 h-full w-3/4 bg-zinc-400 rounded-full"></div>
<div className="absolute top-1/2 -translate-y-1/2 left-3/4 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.3)] cursor-pointer"></div>
</div>
</div>
</div>
</div>

<div className="font-mono text-xs leading-6 text-zinc-500">
<p><span className="text-zinc-300">➜</span> <span className="text-purple-400">~</span> ghost init --stealth</p>
<p className="mt-2">Initializing spectral network...</p>
<p>Encrypting payload <span className="text-zinc-700">...................</span> <span className="text-green-500">Done</span></p>
<p>Rerouting traffic <span className="text-zinc-700">....................</span> <span className="text-green-500">Done</span></p>
<p>Establishing node connection <span className="text-zinc-700">.........</span> <span className="text-green-500">Done</span></p>
<p className="mt-2 text-zinc-300">Ghost Protocol active. You are invisible.</p>
<div className="h-4 w-2 bg-zinc-500 animate-pulse mt-1 inline-block"></div>
</div>
</div>
</div>
</div>
</main>

<section className="pt-24 pr-6 pb-24 pl-6 relative" id="features">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-medium text-zinc-100 tracking-tight mb-4">Architecture of the unseen.</h2>
<p className="text-zinc-500 font-light">Built on cryptographic primitives that ensure your data remains yours alone. No backdoors, no logs, no compromise.</p>
</div>
<div className="flex gap-2">
<button className="h-10 w-10 flex items-center justify-center rounded-full border border-white/10 hover:bg-zinc-900 transition-colors">
<iconify-icon icon="solar:arrow-left-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="h-10 w-10 flex items-center justify-center rounded-full border border-white/10 hover:bg-zinc-900 transition-colors">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">

<div className="md:col-span-2 relative group overflow-hidden rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors p-8">
<div className="absolute inset-0 bg-gradient-to-br from-zinc-800/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="">
<div className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center mb-6 border border-white/5">
<iconify-icon className="text-zinc-200" icon="solar:shield-keyhole-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-zinc-200 mb-2 tracking-tight">Zero-Knowledge Proofs</h3>
<p className="text-sm text-zinc-500 font-light max-w-sm">
                                    Validate transactions and interactions without revealing the underlying data. Mathematics guarantees your privacy, not policy.
                                </p>
</div>
<div className="flex gap-2 mt-4 opacity-50 group-hover:opacity-80 transition-opacity">
<div className="h-1 w-12 bg-zinc-700 rounded-full"></div>
<div className="h-1 w-8 bg-zinc-600 rounded-full"></div>
<div className="h-1 w-16 bg-zinc-800 rounded-full"></div>
</div>
</div>
</div>
<div className="relative group overflow-hidden rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors p-8">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity transform group-hover:scale-110 duration-700">
<iconify-icon icon="solar:globe-linear" strokeWidth="1" width="120"></iconify-icon>
</div>
<div className="relative z-10 h-full flex flex-col justify-end">
<iconify-icon className="text-zinc-200 mb-4" icon="solar:routing-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h3 className="text-lg font-medium text-zinc-200 mb-2 tracking-tight">Global Mesh</h3>
<p className="text-sm text-zinc-500 font-light">Routing through 400+ nodes worldwide.</p>
</div>
</div>
<div className="relative group overflow-hidden rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors p-8">
<div className="flex items-center justify-center h-full">
<div className="relative w-32 h-32 rounded-full border border-dashed border-zinc-700 flex items-center justify-center group-hover:rotate-45 transition-transform duration-700">
<div className="w-24 h-24 rounded-full border border-zinc-600 flex items-center justify-center">
<iconify-icon className="text-zinc-200" icon="solar:lock-password-unlocked-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="md:col-span-2 relative group overflow-hidden rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors p-8">
<div className="relative z-10 h-full flex flex-col sm:flex-row sm:items-center justify-between gap-6">
<div className="max-w-xs">
<div className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center mb-6 border border-white/5">
<iconify-icon className="text-zinc-200" icon="solar:server-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-zinc-200 mb-2 tracking-tight">Disposable Infrastructure</h3>
<p className="text-sm text-zinc-500 font-light">Spin up servers that exist for milliseconds. Execute code, return result, vanish.</p>
</div>
<div className="flex-1 bg-black/40 rounded-lg border border-white/5 p-4 font-mono text-[10px] text-zinc-400">
<div className="flex justify-between border-b border-white/5 pb-2 mb-2"><span>Instance ID</span><span className="text-zinc-600">Region</span></div>
<div className="flex justify-between mb-1"><span className="text-zinc-300">ghost-ephemeral-01</span><span className="text-zinc-500">us-east</span></div>
<div className="flex justify-between mb-1 opacity-50"><span className="text-zinc-300">ghost-ephemeral-02</span><span className="text-zinc-500">eu-west</span></div>
<div className="flex justify-between opacity-25"><span className="text-zinc-300">ghost-ephemeral-03</span><span className="text-zinc-500">ap-northeast</span></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-zinc-900/10" id="log">
<div className="max-w-4xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
<div>
<h2 className="text-3xl font-medium text-zinc-100 tracking-tight mb-2">Transmission Log</h2>
<p className="text-zinc-500 font-light text-sm">Updates from the shadow network.</p>
</div>
<a className="hover:text-zinc-100 transition-colors flex items-center gap-1 text-xs font-medium text-zinc-400" href="/blog" onclick="showBlog()">
                        View Archive <iconify-icon icon="solar:arrow-right-up-linear" width="12"></iconify-icon>
</a>
</div>
<div className="space-y-1">

<a className="group flex flex-col md:flex-row md:items-center hover:bg-zinc-900/30 transition-colors -mx-2 border-white/5 rounded-lg border-b pt-5 pr-2 pb-5 pl-2" href="/post" onclick="showBlog()">
<div className="md:w-32 text-xs font-mono text-zinc-600 mb-2 md:mb-0 group-hover:text-zinc-500 transition-colors">Oct 24, 2024</div>
<div className="flex-1">
<h3 className="text-base font-medium text-zinc-300 group-hover:text-zinc-100 transition-colors tracking-tight">Introducing Phantom Protocol V2</h3>
<p className="text-sm text-zinc-500 mt-1 font-light line-clamp-1">Upgrading the zero-knowledge proof generation speed by 400% with recursive STARKs.</p>
</div>
<div className="hidden md:flex items-center text-zinc-600 group-hover:text-zinc-100 transition-colors transform group-hover:translate-x-1 duration-300">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</a>

<a className="group flex flex-col md:flex-row md:items-center py-5 border-b border-white/5 hover:bg-zinc-900/30 transition-colors rounded-lg px-2 -mx-2" href="#blog-post" onclick="showBlog()">
<div className="md:w-32 text-xs font-mono text-zinc-600 mb-2 md:mb-0 group-hover:text-zinc-500 transition-colors">Oct 12, 2024</div>
<div className="flex-1">
<h3 className="text-base font-medium text-zinc-300 group-hover:text-zinc-100 transition-colors tracking-tight">On Invisible Infrastructure</h3>
<p className="text-sm text-zinc-500 mt-1 font-light line-clamp-1">Why modern distributed systems must default to anonymity to survive censorship.</p>
</div>
<div className="hidden md:flex items-center text-zinc-600 group-hover:text-zinc-100 transition-colors transform group-hover:translate-x-1 duration-300">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</a>

<a className="group flex flex-col md:flex-row md:items-center py-5 border-b border-white/5 hover:bg-zinc-900/30 transition-colors rounded-lg px-2 -mx-2" href="#blog-post" onclick="showBlog()">
<div className="md:w-32 text-xs font-mono text-zinc-600 mb-2 md:mb-0 group-hover:text-zinc-500 transition-colors">Sep 28, 2024</div>
<div className="flex-1">
<h3 className="text-base font-medium text-zinc-300 group-hover:text-zinc-100 transition-colors tracking-tight">Mesh Network Latency Report</h3>
<p className="text-sm text-zinc-500 mt-1 font-light line-clamp-1">Analyzing round-trip times across our 400 global shadow nodes.</p>
</div>
<div className="hidden md:flex items-center text-zinc-600 group-hover:text-zinc-100 transition-colors transform group-hover:translate-x-1 duration-300">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5" id="pricing">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-5xl font-medium text-zinc-100 tracking-tighter mb-6">Ready to go dark?</h2>
<p className="text-zinc-500 mb-10 max-w-lg mx-auto font-light">
                    Join thousands of developers building on the invisible web. Start for free, scale as you vanish.
                </p>
<form className="flex flex-col sm:flex-row items-center justify-center gap-2 max-w-md mx-auto">
<input className="w-full sm:w-auto flex-1 bg-zinc-900 border border-zinc-800 text-zinc-200 text-sm px-4 py-3 rounded-lg focus:outline-none focus:border-zinc-600 placeholder:text-zinc-600 transition-colors" placeholder="enter@email.com" type="email"/>
<button className="w-full sm:w-auto px-6 py-3 bg-zinc-100 text-black text-sm font-medium rounded-lg hover:bg-zinc-200 transition-colors whitespace-nowrap" type="submit">
                        Get Access
                    </button>
</form>
<p className="mt-4 text-[10px] text-zinc-600 uppercase tracking-widest">No credit card required</p>
</div>
</section>
</div>

<article className="hidden fade-enter w-full min-h-screen" id="blog-view">

<div className="absolute top-0 left-0 w-full h-[500px] grid-pattern pointer-events-none -z-10 mask-gradient" style={{WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)'}}></div>
<div className="max-w-3xl mx-auto px-6 pt-32 pb-24">

<nav className="flex items-center gap-2 text-xs font-medium text-zinc-500 mb-10">
<a className="hover:text-zinc-300 transition-colors" href="#" onclick="showHome()">Log</a>
<span className="text-zinc-700">/</span>
<span className="text-zinc-300">Engineering</span>
</nav>

<header className="mb-12">
<h1 className="text-3xl md:text-5xl lg:text-5xl font-semibold text-zinc-100 tracking-tight leading-[1.1] mb-6">
                    Introducing Phantom Protocol V2: Faster Zero-Knowledge Proofs
                </h1>
<div className="flex items-center justify-between border-b border-white/5 pb-8">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10 overflow-hidden flex items-center justify-center">
<span className="text-xs font-medium text-zinc-400">AC</span>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-zinc-200">Alex Chen</span>
<span className="text-xs text-zinc-500">Lead Cryptographer</span>
</div>
</div>
<div className="text-xs text-zinc-500 font-mono text-right">
<div>Oct 24, 2024</div>
<div>5 min read</div>
</div>
</div>
</header>

<div className="prose prose-invert max-w-none">
<p className="text-lg text-zinc-300 leading-8 font-light mb-8">
                    Today we are deploying the most significant update to the Ghost network since our genesis block. Phantom Protocol V2 introduces recursive STARKs, effectively reducing the proof generation time by <span className="text-zinc-100 font-normal">400%</span> while maintaining the same cryptographic guarantees.
                </p>
<h2 className="text-2xl font-medium text-zinc-100 mt-12 mb-6 tracking-tight">The Scalability Bottleneck</h2>
<p className="text-zinc-400 leading-7 mb-6 font-light">
                    In V1, every transaction required a distinct proof generated on the client side. While secure, this introduced latency for high-frequency trading applications running on our invisible infrastructure. The bottleneck wasn't the network speed, but the math itself.
                </p>

<div className="bg-zinc-900/40 border-l-2 border-zinc-500 p-6 my-8 rounded-r-lg">
<h4 className="text-sm font-medium text-zinc-200 mb-2 flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:info-circle-linear"></iconify-icon>
                        Why STARKs?
                    </h4>
<p className="text-sm text-zinc-400 leading-6">
                        Unlike SNARKs, Scalable Transparent Arguments of Knowledge (STARKs) do not require a trusted setup, making them ideal for decentralized anonymous networks where trust is minimized.
                    </p>
</div>
<p className="text-zinc-400 leading-7 mb-6 font-light">
                    We realized that by aggregating proofs into a single validity tree, we could amortize the computational cost across thousands of simultaneous requests.
                </p>
<h2 className="text-2xl font-medium text-zinc-100 mt-12 mb-6 tracking-tight">Recursive Aggregation</h2>
<p className="text-zinc-400 leading-7 mb-6 font-light">
                    Our new architecture implements a folding scheme. Instead of linear verification, we generate proofs of proofs. This recursive structure allows us to verify entire blocks of invisible traffic in milliseconds.
                </p>

<div className="w-full aspect-video rounded-xl bg-zinc-900/50 border border-white/5 flex items-center justify-center relative overflow-hidden my-10 group cursor-pointer">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkiLz48L3N2Zz4=')] opacity-50"></div>
<div className="flex flex-col items-center gap-3 relative z-10 transition-transform duration-500 group-hover:scale-105">
<div className="w-12 h-12 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center">
<iconify-icon className="text-zinc-400" icon="solar:graph-new-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Figure 1: Recursive Folding Scheme</span>
</div>
</div>

<div className="my-10 rounded-lg border border-white/5 bg-[#0A0A0A] overflow-hidden group">
<div className="flex items-center justify-between px-4 py-3 bg-white/[0.02] border-b border-white/5">
<span className="text-[10px] uppercase font-mono text-zinc-500">circuit_verifier.rs</span>
<button className="text-zinc-500 hover:text-zinc-300 transition-colors opacity-0 group-hover:opacity-100">
<iconify-icon icon="solar:copy-linear" width="14"></iconify-icon>
</button>
</div>
<div className="p-6 overflow-x-auto">
<pre className="text-xs font-mono leading-6 text-zinc-300"><span className="text-purple-400">fn</span> <span className="text-blue-400">verify_recursive_proof</span>(proof: <span className="text-zinc-400">&amp;Proof</span>) -&gt; <span className="text-zinc-400">Result</span>&lt;<span className="text-zinc-400">bool</span>&gt; {
    <span className="text-zinc-500">// Initialize the folding scheme configuration</span>
    <span className="text-purple-400">let</span> verifier = <span className="text-zinc-400">Plonky2Verifier</span>::<span className="text-blue-400">new</span>(config);
    
    <span className="text-purple-400">if</span> !verifier.<span className="text-blue-400">check</span>(proof.public_inputs) {
        <span className="text-purple-400">return</span> <span className="text-zinc-400">Err</span>(<span className="text-green-400">"Invalid STARK trace detected"</span>);
    }
    
    <span className="text-zinc-500">// Recursively verify inner proofs</span>
    <span className="text-purple-400">for</span> inner <span className="text-purple-400">in</span> proof.inner_proofs {
        verifier.<span className="text-blue-400">verify</span>(inner)?;
    }
    
    <span className="text-zinc-400">Ok</span>(<span className="text-purple-400">true</span>)
}</pre>
</div>
</div>
<h3 className="text-xl font-medium text-zinc-200 mt-10 mb-4 tracking-tight">Performance Benchmarks</h3>
<ul className="list-none space-y-3 mb-8 text-zinc-400 font-light pl-0">
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-600 mt-1 shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span><strong className="text-zinc-300 font-medium">Latency:</strong> Reduced from 450ms to 85ms per batch.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-600 mt-1 shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span><strong className="text-zinc-300 font-medium">Throughput:</strong> Increased to 12,000 TPS on Layer 2.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-600 mt-1 shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span><strong className="text-zinc-300 font-medium">Cost:</strong> Gas fees reduced by 90% via aggregation.</span>
</li>
</ul>
<p className="text-zinc-400 leading-7 font-light">
                    This update is live on the testnet today and will roll out to mainnet nodes over the next 48 hours. No action is required for existing instances.
                </p>
</div>

<div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex gap-4">
<button className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 hover:text-zinc-200 hover:bg-white/5 transition-all">
<iconify-icon icon="solar:share-linear" width="16"></iconify-icon>
</button>
<button className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 hover:text-zinc-200 hover:bg-white/5 transition-all">
<iconify-icon icon="brandico:twitter-bird" width="14"></iconify-icon>
</button>
<button className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 hover:text-zinc-200 hover:bg-white/5 transition-all">
<iconify-icon icon="solar:link-linear" width="16"></iconify-icon>
</button>
</div>
<div className="text-xs font-mono text-zinc-600">
                    Hash: <span className="text-zinc-500">0x7f...3a9c</span>
</div>
</div>

<div className="mt-16 bg-zinc-900/20 border border-white/5 p-8 rounded-xl flex flex-col sm:flex-row items-start gap-6">
<div className="w-14 h-14 rounded-full bg-zinc-800 border border-white/10 overflow-hidden flex-shrink-0">

<div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800"></div>
</div>
<div>
<h4 className="text-zinc-200 font-medium mb-2">About Alex Chen</h4>
<p className="text-sm text-zinc-500 leading-6 font-light mb-4">
                        Alex is a cryptographer and distributed systems engineer. Previously at Ethereum Foundation. He focuses on zero-knowledge protocols and privacy-preserving architecture.
                    </p>
<a className="text-xs font-medium text-zinc-300 hover:text-white flex items-center gap-1" href="#">
                        Follow on Twitter <iconify-icon icon="solar:arrow-right-up-linear" width="12"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="border-t border-white/5 bg-zinc-900/10 py-20">
<div className="max-w-6xl mx-auto px-6">
<h3 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-10">Related Transmissions</h3>
<div className="grid md:grid-cols-2 gap-6">

<a className="group block p-6 rounded-xl border border-white/5 bg-black hover:border-white/10 transition-colors" href="#">
<div className="flex items-center gap-2 text-xs font-mono text-zinc-600 mb-4">
<span>Engineering</span>
<span>•</span>
<span>Oct 12</span>
</div>
<h4 className="text-lg font-medium text-zinc-200 mb-2 group-hover:text-white transition-colors">On Invisible Infrastructure</h4>
<p className="text-sm text-zinc-500 font-light leading-relaxed">Why modern distributed systems must default to anonymity to survive censorship.</p>
</a>

<a className="group block p-6 rounded-xl border border-white/5 bg-black hover:border-white/10 transition-colors" href="#">
<div className="flex items-center gap-2 text-xs font-mono text-zinc-600 mb-4">
<span>Research</span>
<span>•</span>
<span>Sep 28</span>
</div>
<h4 className="text-lg font-medium text-zinc-200 mb-2 group-hover:text-white transition-colors">Mesh Network Latency Report</h4>
<p className="text-sm text-zinc-500 font-light leading-relaxed">Analyzing round-trip times across our 400 global shadow nodes.</p>
</a>
</div>
</div>
</div>
</article>

<footer className="border-t border-white/5 bg-black pt-16 pb-8 mt-auto">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-12">
<div className="flex flex-col gap-4">
<a className="flex items-center gap-2" href="#" onclick="showHome()">
<iconify-icon className="text-zinc-500" icon="solar:ghost-smile-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-medium tracking-tight text-zinc-200">GHOST</span>
</a>
<p className="text-xs text-zinc-600 max-w-[200px]">
                    Constructed for the shadows. <br/>
                    © 2024 Ghost Inc.
                </p>
</div>
<div className="flex gap-16">
<div className="flex flex-col gap-3">
<h4 className="text-xs font-medium text-zinc-200">Product</h4>
<a className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors" href="#features" onclick="showHome()">Features</a>
<a className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Integrations</a>
<a className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Security</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-xs font-medium text-zinc-200">Company</h4>
<a className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors" href="#log" onclick="showHome()">Manifesto</a>
<a className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors" href="#log" onclick="showHome()">Changelog</a>
<a className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Contact</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-xs font-medium text-zinc-200">Legal</h4>
<a className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Privacy</a>
<a className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
