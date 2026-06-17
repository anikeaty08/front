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
      

<nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-10 md:py-8 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent backdrop-blur-[2px]">
<a className="flex items-center gap-3 group" href="#">
<i className="w-6 h-6 text-white group-hover:rotate-180 transition-transform duration-700" data-lucide="aperture" strokeWidth="1.5"></i>
<span className="text-white font-medium tracking-tight text-lg uppercase mix-blend-difference">Formula.AI</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-white/70 mix-blend-difference">
<a className="hover:text-white transition-colors" href="#features">Platform</a>
<a className="hover:text-white transition-colors" href="#marketplace">Marketplace</a>
<a className="hover:text-white transition-colors" href="#enterprise">Enterprise</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-normal text-white/70 hover:text-white transition-colors" href="#signin">Sign In</a>
<button className="flex items-center gap-2 text-sm font-normal text-white bg-white/10 hover:bg-white/20 border border-white/5 backdrop-blur-md px-4 py-2 rounded-full transition-all">
                Menu
            </button>
</div>
</nav>

<header className="relative w-full h-[110vh] min-h-[900px] overflow-hidden flex flex-col justify-end pb-24 md:pb-32">

<div className="absolute inset-0 w-full h-full z-0">

<img alt="Cinematic Surrealism" className="w-full h-full object-cover object-center scale-105 opacity-90" src="https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&amp;w=2800&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 opacity-90"></div>
<div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60"></div>
</div>

<div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-10">
<div className="flex flex-col md:flex-row items-end justify-between gap-12 md:gap-20">
<div className="max-w-4xl">

<div className="mb-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
</span>
<span className="text-[10px] font-medium tracking-widest text-white/80 uppercase">The New Standard</span>
</div>
<h1 className="text-7xl md:text-9xl font-medium tracking-tighter text-white leading-[0.85] mb-8 mix-blend-overlay">
                        Cinematic <br/>
<span className="text-white/90">Reality.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-300/80 font-light max-w-lg leading-relaxed tracking-tight">
                        Transforming imagination into high-fidelity video with the world's most advanced generative engine.
                    </p>
</div>

<div className="flex flex-col items-start gap-6 pb-2">
<button className="group relative flex items-center gap-4 pr-6 pl-2 py-2 rounded-full bg-white text-black hover:bg-zinc-200 transition-all duration-300">
<div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
<i className="w-4 h-4 fill-white ml-0.5" data-lucide="play" strokeWidth="1.5"></i>
</div>
<span className="text-sm font-medium tracking-tight">Watch Showreel</span>
</button>
<div className="flex items-center gap-4 text-xs font-medium text-zinc-500 tracking-wide uppercase">
<span>V. 2.0.4</span>
<span className="w-1 h-1 rounded-full bg-zinc-700"></span>
<span>Render Ready</span>
</div>
</div>
</div>
</div>

<div className="absolute bottom-10 right-10 hidden md:flex items-center gap-8 z-20 pointer-events-none opacity-50">
<div className="flex flex-col gap-1 text-[10px] text-white/60 font-mono text-right">
<span>ISO 800</span>
<span>4500K</span>
<span>24FPS</span>
</div>
<i className="w-12 h-12 text-white/30" data-lucide="focus" strokeWidth="1"></i>
</div>
</header>

<section className="relative py-32 bg-black border-t border-white/5">
<div className="max-w-[1400px] mx-auto px-6 md:px-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
<div className="lg:col-span-4 space-y-8">
<h3 className="text-xs font-medium tracking-[0.2em] text-zinc-500 uppercase">
                        Manifesto
                    </h3>
<p className="text-2xl font-light text-zinc-200 leading-normal tracking-tight">
                        We are building the operating system for the next generation of filmmakers. Where code meets composition.
                    </p>
</div>
<div className="lg:col-span-8 grid md:grid-cols-2 gap-12 border-l border-white/5 pl-0 md:pl-12">
<div className="space-y-4 group">
<div className="w-12 h-12 rounded-lg bg-zinc-900/50 border border-white/5 flex items-center justify-center text-white mb-6 group-hover:border-red-500/50 transition-colors">
<i className="w-5 h-5" data-lucide="wand-2" strokeWidth="1.5"></i>
</div>
<h4 className="text-white font-medium text-lg">Generative Filling</h4>
<p className="text-zinc-500 text-sm leading-relaxed font-light">
                            Expand your sets beyond physical limitations. Our context-aware models extend environments with photorealistic precision.
                        </p>
</div>
<div className="space-y-4 group">
<div className="w-12 h-12 rounded-lg bg-zinc-900/50 border border-white/5 flex items-center justify-center text-white mb-6 group-hover:border-red-500/50 transition-colors">
<i className="w-5 h-5" data-lucide="layers" strokeWidth="1.5"></i>
</div>
<h4 className="text-white font-medium text-lg">Neural Compositing</h4>
<p className="text-zinc-500 text-sm leading-relaxed font-light">
                            Seamlessly blend CGI and live-action footage. Real-time lighting estimation and shadow generation.
                        </p>
</div>
<div className="space-y-4 group">
<div className="w-12 h-12 rounded-lg bg-zinc-900/50 border border-white/5 flex items-center justify-center text-white mb-6 group-hover:border-red-500/50 transition-colors">
<i className="w-5 h-5" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<h4 className="text-white font-medium text-lg">Real-time Rendering</h4>
<p className="text-zinc-500 text-sm leading-relaxed font-light">
                            View final-quality shots on set. Powered by a distributed network of H100 GPUs accessible via API.
                        </p>
</div>
<div className="space-y-4 group">
<div className="w-12 h-12 rounded-lg bg-zinc-900/50 border border-white/5 flex items-center justify-center text-white mb-6 group-hover:border-red-500/50 transition-colors">
<i className="w-5 h-5" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<h4 className="text-white font-medium text-lg">IP Protection</h4>
<p className="text-zinc-500 text-sm leading-relaxed font-light">
                            Enterprise-grade security ensuring your assets never train public models without explicit consent.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-black py-24 relative overflow-hidden" id="features">
<div className="max-w-[1400px] mx-auto px-6 md:px-10">
<div className="rounded-2xl overflow-hidden relative aspect-[16/9] md:aspect-[2.4/1] bg-zinc-900 border border-white/10 group">
<img className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-1000" src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&amp;w=2800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
<div className="absolute inset-0 flex items-center p-8 md:p-20">
<div className="max-w-2xl">
<span className="text-red-500 text-xs font-semibold tracking-widest uppercase mb-4 block">Marketplace</span>
<h2 className="text-4xl md:text-6xl font-medium text-white tracking-tighter mb-6">
                            Connect with top <br/> AI creators.
                        </h2>
<p className="text-zinc-400 text-lg font-light mb-8 max-w-md">
                            A curated marketplace of custom LORAs, models, and workflows vetted for production use.
                        </p>
<a className="inline-flex items-center gap-2 text-white border-b border-white/30 pb-1 hover:border-white transition-colors text-sm font-medium" href="#">
                            Browse Marketplace <i className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-black">
<div className="max-w-[1400px] mx-auto px-6 md:px-10">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group relative bg-zinc-900/20 border border-white/5 hover:border-white/20 p-8 rounded-xl transition-all duration-500 hover:bg-zinc-900/40">
<div className="absolute top-8 right-8 text-zinc-700 group-hover:text-white transition-colors">
<i className="w-8 h-8" data-lucide="move-3d" strokeWidth="1.5"></i>
</div>
<div className="mt-32">
<h4 className="text-white text-xl font-medium mb-3">3D Generation</h4>
<p className="text-zinc-500 text-sm font-light leading-relaxed">
                            Generate production-ready assets with topology suitable for rigging and animation.
                        </p>
</div>
</div>

<div className="group relative bg-zinc-900/20 border border-white/5 hover:border-white/20 p-8 rounded-xl transition-all duration-500 hover:bg-zinc-900/40">
<div className="absolute top-8 right-8 text-zinc-700 group-hover:text-white transition-colors">
<i className="w-8 h-8" data-lucide="film" strokeWidth="1.5"></i>
</div>
<div className="mt-32">
<h4 className="text-white text-xl font-medium mb-3">Style Transfer</h4>
<p className="text-zinc-500 text-sm font-light leading-relaxed">
                            Apply consistent artistic direction across entire sequences with temporal stability.
                        </p>
</div>
</div>

<div className="group relative bg-zinc-900/20 border border-white/5 hover:border-white/20 p-8 rounded-xl transition-all duration-500 hover:bg-zinc-900/40">
<div className="absolute top-8 right-8 text-zinc-700 group-hover:text-white transition-colors">
<i className="w-8 h-8" data-lucide="workflow" strokeWidth="1.5"></i>
</div>
<div className="mt-32">
<h4 className="text-white text-xl font-medium mb-3">Node Workflow</h4>
<p className="text-zinc-500 text-sm font-light leading-relaxed">
                            Visual programming interface for building complex AI pipelines without code.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-zinc-950">
<div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16">
<div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
<p className="text-sm font-medium text-zinc-500 uppercase tracking-widest">Trusting Partners</p>
<div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale">
<span className="text-xl font-semibold tracking-tighter text-white">NVIDIA</span>
<span className="text-xl font-semibold tracking-tighter text-white">OANH</span>
<span className="text-xl font-semibold tracking-tighter text-white">VANTAGE</span>
<span className="text-xl font-semibold tracking-tighter text-white">LIGHTSPEED</span>
</div>
</div>
</div>
</section>

<section className="py-40 relative overflow-hidden bg-black flex items-center justify-center" id="request">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="relative z-10 max-w-3xl mx-auto px-6 text-center space-y-10">
<h2 className="text-5xl md:text-8xl font-medium tracking-tighter text-white">
                Start Creating.
            </h2>
<p className="text-xl text-zinc-400 font-light max-w-xl mx-auto">
                Join the beta program and help shape the tools that will define the next century of cinema.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
<a className="w-full sm:w-auto px-8 py-4 bg-white text-black text-sm font-medium rounded-full transition-all hover:bg-zinc-200 flex items-center justify-center gap-2" href="#">
                    Request Access
                </a>
<a className="w-full sm:w-auto px-8 py-4 border border-zinc-800 text-white text-sm font-medium rounded-full transition-colors hover:border-white flex items-center justify-center gap-2" href="#">
                    Read Documentation
                </a>
</div>
</div>
</section>

<footer className="bg-black border-t border-white/10 pt-20 pb-10">
<div className="max-w-[1400px] mx-auto px-6 md:px-10">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="col-span-1 md:col-span-2">
<a className="flex items-center gap-2 mb-6 text-white" href="#">
<i className="w-6 h-6" data-lucide="aperture" strokeWidth="1.5"></i>
<span className="font-medium text-lg tracking-tight">FORMULA.AI</span>
</a>
<p className="text-zinc-500 text-sm leading-relaxed max-w-sm font-light">
                        Pioneering the intersection of artificial intelligence and cinematic arts. Built for the dreamers and the doers.
                    </p>
</div>
<div>
<h4 className="text-white text-xs font-medium uppercase tracking-wider mb-6">Product</h4>
<ul className="space-y-4 text-sm text-zinc-500 font-light">
<li><a className="hover:text-white transition-colors" href="#">Features</a></li>
<li><a className="hover:text-white transition-colors" href="#">Integration</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-white transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-medium uppercase tracking-wider mb-6">Company</h4>
<ul className="space-y-4 text-sm text-zinc-500 font-light">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Legal</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
<p className="text-xs text-zinc-600 mb-4 md:mb-0 font-light">© 2024 Formula Dot AI Inc.</p>
<div className="flex gap-6">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter" strokeWidth="1.5"></i></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="github" strokeWidth="1.5"></i></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="linkedin" strokeWidth="1.5"></i></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
