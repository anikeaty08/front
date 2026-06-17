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



        function toggleModal(id) {
            const modal = document.getElementById(id);
            if (modal.classList.contains('hidden')) {
                modal.classList.remove('hidden');
                modal.classList.add('flex');
                document.body.style.overflow = 'hidden';
            } else {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
                document.body.style.overflow = '';
            }
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
      

<div className="fixed inset-0 z-0 grid-bg pointer-events-none"></div>
<div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[80vh] z-0 glow-green opacity-40 pointer-events-none"></div>

<nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-black/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-4 h-4 border border-vector-green rotate-45 flex items-center justify-center">
<div className="w-1 h-1 bg-vector-green"></div>
</div>
<span className="font-mono text-lg tracking-tight font-medium text-white">VECTOR</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
<a className="hover:text-white transition-colors" href="#mechanics">The Mechanics</a>
<a className="hover:text-white transition-colors" href="#engine">Engine</a>
<a className="hover:text-white transition-colors" href="#pricing">Enterprise</a>
<a className="hover:text-white transition-colors" href="#">Changelog</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-xs font-mono text-gray-500 hover:text-vector-green transition-colors" href="#">Log In</a>
<a className="group relative px-4 py-2 text-xs font-mono font-medium overflow-hidden border border-white/20 hover:border-vector-green transition-colors cursor-pointer" href="#" onclick="toggleModal('waitlist-modal')">
<span className="relative z-10 group-hover:text-vector-green transition-colors">INITIALIZE &gt;</span>
<div className="absolute inset-0 bg-white/5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
</a>
</div>
</div>
</nav>

<main className="relative z-10 pt-32 pb-20 md:pt-40 md:pb-32 px-6">
<div className="max-w-5xl mx-auto text-center flex flex-col items-center">

<div className="mb-10 relative group">
<div className="absolute inset-0 bg-white/20 blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700"></div>
<iconify-icon className="text-7xl md:text-8xl text-white relative z-10" icon="ri:twitter-x-fill"></iconify-icon>
</div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-vector-green mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-vector-green opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-vector-green"></span>
</span>
                GROWTH PHYSICS ENGINE V 2.0.4
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-mono font-medium tracking-tighter leading-tight mb-8">
                Master the <span className="font-serif-italic text-vector-green">$150x$</span> <br/>
                Multiplier.
            </h1>
<p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed mb-10">
                The X algorithm weights a Reply-to-Reply (RR) 150 times more than a like. Vector is the first precision engine designed to trigger that specific signal.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16 w-full md:w-auto">
<button className="w-full md:w-auto px-8 py-3 bg-vector-green text-black font-mono text-sm font-semibold hover:bg-white transition-colors flex items-center justify-center gap-2" onclick="toggleModal('waitlist-modal')">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
                    Join the Waitlist
                </button>
<button className="w-full md:w-auto px-8 py-3 border border-white/20 text-white font-mono text-sm font-medium hover:border-white transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:formula-linear" strokeWidth="1.5"></iconify-icon>
                    Explain the Math
                </button>
</div>

<div className="w-full max-w-md mx-auto glass-panel rounded-lg overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
<div className="bg-white/5 border-b border-white/10 px-6 py-3 flex justify-between items-center">
<div className="flex items-center gap-2 text-xs font-mono text-gray-400 uppercase tracking-wider">
<iconify-icon className="text-sm" icon="solar:tuning-linear"></iconify-icon>
                        2026 Algorithm Weights
                    </div>
<div className="h-1.5 w-1.5 rounded-full bg-vector-green"></div>
</div>
<div className="flex flex-col">

<div className="flex justify-between items-center px-6 py-3 border-b border-white/5 hover:bg-white/[0.02] transition-colors">
<span className="text-sm text-gray-300 font-light">Like</span>
<span className="font-mono text-sm text-gray-500">1x</span>
</div>

<div className="flex justify-between items-center px-6 py-3 border-b border-white/5 hover:bg-white/[0.02] transition-colors">
<span className="text-sm text-gray-300 font-light">Bookmark</span>
<span className="font-mono text-sm text-gray-400">10x</span>
</div>

<div className="flex justify-between items-center px-6 py-3 border-b border-white/5 hover:bg-white/[0.02] transition-colors">
<span className="text-sm text-gray-300 font-light">Repost</span>
<span className="font-mono text-sm text-gray-300">20x</span>
</div>

<div className="flex justify-between items-center px-6 py-4 bg-vector-green/5 border-l-2 border-vector-green relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-vector-green/10 to-transparent opacity-50"></div>
<span className="text-sm text-white font-medium relative z-10 flex items-center gap-2">
                            Reply-to-Reply
                            <iconify-icon className="text-vector-green" icon="solar:bolt-linear"></iconify-icon>
</span>
<span className="font-mono text-sm text-vector-green font-bold relative z-10">150x</span>
</div>
</div>
<div className="px-6 py-4 bg-black/40 border-t border-white/10">
<p className="text-xs text-gray-500 font-mono text-center italic leading-relaxed">
                        "We don't optimize for vanity metrics. We optimize for the variable that actually moves the needle."
                    </p>
</div>
</div>
<div className="mt-20 flex flex-col items-center">
<p className="text-xs text-gray-600 font-mono mb-6 uppercase tracking-widest">Trusting the math</p>
<div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale">
<span className="font-bold tracking-tight text-xl">ACME CORP</span>
<span className="font-bold tracking-tight text-xl font-mono">StarkInd</span>
<span className="font-bold tracking-tight text-xl italic">WayneEnt</span>
<span className="font-bold tracking-tight text-xl">Cyberdyne</span>
<span className="font-bold tracking-tight text-xl font-serif">Tyrell</span>
</div>
</div>
</div>
</main>

<section className="relative z-10 py-20 px-6 border-y border-white/5 bg-black/40" id="mechanics">
<div className="max-w-7xl mx-auto">
<div className="mb-16 text-center md:text-left">
<h2 className="text-3xl md:text-4xl font-mono font-medium tracking-tight mb-4">The Mechanics of itsvectors.com</h2>
<p className="text-gray-400 font-light text-lg max-w-2xl">
                    A three-stage precision loop designed to maximize algorithmic lift.
                </p>
</div>

<div className="relative grid md:grid-cols-3 gap-8 md:gap-12">

<div className="hidden md:block absolute top-[3.25rem] left-[16%] right-[16%] h-px border-t border-dashed border-white/20 -z-10"></div>

<div className="relative group">
<div className="w-26 h-26 mb-8 flex items-center justify-center">
<div className="w-20 h-20 rounded-full border border-white/10 bg-black flex items-center justify-center group-hover:border-vector-green/50 transition-colors z-10 relative">
<iconify-icon className="text-4xl text-gray-400 group-hover:text-vector-green transition-colors" icon="solar:radar-2-linear"></iconify-icon>
</div>
</div>
<div className="glass-panel p-6 rounded-sm border-l border-white/10 group-hover:border-l-vector-green transition-all h-full">
<div className="flex items-center gap-3 mb-4">
<span className="text-xs font-mono text-vector-green border border-vector-green/30 px-2 py-0.5 rounded">01</span>
<h3 className="text-lg font-mono font-medium text-white">Signal Interception</h3>
</div>
<p className="text-sm text-gray-400 leading-relaxed font-light">
                            We monitor 100 high-authority 'Whales' in real-time using X-API lists. We detect signal before the noise begins.
                        </p>
</div>
</div>

<div className="relative group">
<div className="w-26 h-26 mb-8 flex items-center justify-center">
<div className="w-20 h-20 rounded-full border border-white/10 bg-black flex items-center justify-center group-hover:border-vector-green/50 transition-colors z-10 relative">
<iconify-icon className="text-4xl text-gray-400 group-hover:text-vector-green transition-colors" icon="solar:graph-new-linear"></iconify-icon>
</div>
</div>
<div className="glass-panel p-6 rounded-sm border-l border-white/10 group-hover:border-l-vector-green transition-all h-full">
<div className="flex items-center gap-3 mb-4">
<span className="text-xs font-mono text-vector-green border border-vector-green/30 px-2 py-0.5 rounded">02</span>
<h3 className="text-lg font-mono font-medium text-white">Velocity Scoring</h3>
</div>
<p className="text-sm text-gray-400 leading-relaxed font-light">
                            Our engine identifies which tweets are mathematically projected to go viral within the first 300 seconds of posting.
                        </p>
</div>
</div>

<div className="relative group">
<div className="w-26 h-26 mb-8 flex items-center justify-center">
<div className="w-20 h-20 rounded-full border border-white/10 bg-black flex items-center justify-center group-hover:border-vector-green/50 transition-colors z-10 relative">
<iconify-icon className="text-4xl text-gray-400 group-hover:text-vector-green transition-colors" icon="solar:magnet-linear"></iconify-icon>
</div>
</div>
<div className="glass-panel p-6 rounded-sm border-l border-white/10 group-hover:border-l-vector-green transition-all h-full">
<div className="flex items-center gap-3 mb-4">
<span className="text-xs font-mono text-vector-green border border-vector-green/30 px-2 py-0.5 rounded">03</span>
<h3 className="text-lg font-mono font-medium text-white">The Bait Generator</h3>
</div>
<p className="text-sm text-gray-400 leading-relaxed font-light">
                            We generate 3 specialized 'Reply-to-Reply' baits (Contrarian, Data-driven, or Binary Question) designed to force the OP to reply to you, triggering the 150x boost.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6" id="features">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl md:text-5xl font-mono font-medium tracking-tight mb-4">Core Architecture</h2>
<p className="text-gray-400 font-light">Built for the next generation of social engineering.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group glass-panel p-8 rounded-sm hover:border-vector-green/50 transition-all duration-300">
<iconify-icon className="text-3xl text-gray-400 group-hover:text-vector-green transition-colors mb-6" icon="solar:graph-up-linear"></iconify-icon>
<h3 className="text-lg font-mono font-medium mb-3 text-white">Linear Projection</h3>
<p className="text-sm text-gray-400 leading-relaxed font-light">
                        Comprehensive library for analyzing velocity, engagement depth, and viral coefficients.
                    </p>
</div>

<div className="group glass-panel p-8 rounded-sm hover:border-vector-green/50 transition-all duration-300">
<iconify-icon className="text-3xl text-gray-400 group-hover:text-vector-green transition-colors mb-6" icon="solar:satellite-linear"></iconify-icon>
<h3 className="text-lg font-mono font-medium mb-3 text-white">Whale Indexing</h3>
<p className="text-sm text-gray-400 leading-relaxed font-light">
                        Real-time tracking of high-value accounts for lightning-fast interaction opportunities.
                    </p>
</div>

<div className="group glass-panel p-8 rounded-sm hover:border-vector-green/50 transition-all duration-300">
<iconify-icon className="text-3xl text-gray-400 group-hover:text-vector-green transition-colors mb-6" icon="solar:refresh-circle-linear"></iconify-icon>
<h3 className="text-lg font-mono font-medium mb-3 text-white">Real-time Sync</h3>
<p className="text-sm text-gray-400 leading-relaxed font-light">
                        Deterministic state synchronization engine for instant feed updates.
                    </p>
</div>

<div className="group glass-panel p-8 rounded-sm hover:border-vector-green/50 transition-all duration-300">
<iconify-icon className="text-3xl text-gray-400 group-hover:text-vector-green transition-colors mb-6" icon="solar:shield-keyhole-linear"></iconify-icon>
<h3 className="text-lg font-mono font-medium mb-3 text-white">Secure Runtime</h3>
<p className="text-sm text-gray-400 leading-relaxed font-light">
                        Sandboxed execution environment ensuring account safety within your core infrastructure.
                    </p>
</div>

<div className="group glass-panel p-8 rounded-sm hover:border-vector-green/50 transition-all duration-300">
<iconify-icon className="text-3xl text-gray-400 group-hover:text-vector-green transition-colors mb-6" icon="solar:database-linear"></iconify-icon>
<h3 className="text-lg font-mono font-medium mb-3 text-white">Data Persistence</h3>
<p className="text-sm text-gray-400 leading-relaxed font-light">
                        Efficient storage for your highest converting reply templates and analytics.
                    </p>
</div>

<div className="group glass-panel p-8 rounded-sm hover:border-vector-green/50 transition-all duration-300">
<iconify-icon className="text-3xl text-gray-400 group-hover:text-vector-green transition-colors mb-6" icon="solar:tuning-square-2-linear"></iconify-icon>
<h3 className="text-lg font-mono font-medium mb-3 text-white">Plugin System</h3>
<p className="text-sm text-gray-400 leading-relaxed font-light">
                        Extensible architecture allowing custom prompt engineering and analysis tools.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-white/5 bg-white/[0.02]">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
<div>
<div className="text-4xl md:text-5xl font-mono text-white mb-2 tracking-tighter">150<span className="text-vector-green text-2xl">x</span></div>
<div className="text-xs text-gray-500 uppercase tracking-widest">Weight Multiplier</div>
</div>
<div>
<div className="text-4xl md:text-5xl font-mono text-white mb-2 tracking-tighter">300<span className="text-vector-green text-2xl">s</span></div>
<div className="text-xs text-gray-500 uppercase tracking-widest">Velocity Window</div>
</div>
<div>
<div className="text-4xl md:text-5xl font-mono text-white mb-2 tracking-tighter">100<span className="text-vector-green text-2xl">%</span></div>
<div className="text-xs text-gray-500 uppercase tracking-widest">Deterministic</div>
</div>
<div>
<div className="text-4xl md:text-5xl font-mono text-white mb-2 tracking-tighter">0</div>
<div className="text-xs text-gray-500 uppercase tracking-widest">Fluff</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 px-6">
<div className="max-w-4xl mx-auto glass-panel p-12 md:p-16 text-center border border-white/10 rounded-xl relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-vector-green shadow-[0_0_50px_20px_rgba(0,255,65,0.2)]"></div>
<h2 className="text-3xl md:text-5xl font-mono font-medium tracking-tight mb-6">Ready to integrate?</h2>
<p className="text-gray-400 font-light mb-10 max-w-lg mx-auto">
                Join thousands of growth engineers leveraging the physics of the algorithm.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="px-8 py-4 bg-white text-black font-mono text-sm font-semibold hover:bg-gray-200 transition-colors cursor-pointer" onclick="toggleModal('waitlist-modal')">
                    Start Building Now
                </button>
<button className="px-8 py-4 border border-white/20 text-white font-mono text-sm font-medium hover:text-vector-green hover:border-vector-green transition-colors">
                    Contact Sales
                </button>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-black pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-3 h-3 bg-vector-green"></div>
<span className="font-mono text-lg tracking-tight font-medium">VECTOR</span>
</div>
<p className="text-xs text-gray-500 leading-relaxed">
                        The definitive coordinate system for modern growth engineering and simulation.
                    </p>
</div>
<div>
<h4 className="text-sm font-mono text-white mb-4">Product</h4>
<ul className="space-y-3 text-xs text-gray-500">
<li><a className="hover:text-vector-green transition-colors" href="#">Core Engine</a></li>
<li><a className="hover:text-vector-green transition-colors" href="#">Physics Plugin</a></li>
<li><a className="hover:text-vector-green transition-colors" href="#">Renderer</a></li>
<li><a className="hover:text-vector-green transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-mono text-white mb-4">Resources</h4>
<ul className="space-y-3 text-xs text-gray-500">
<li><a className="hover:text-vector-green transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-vector-green transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-vector-green transition-colors" href="#">Community</a></li>
<li><a className="hover:text-vector-green transition-colors" href="#">GitHub</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-mono text-white mb-4">Legal</h4>
<ul className="space-y-3 text-xs text-gray-500">
<li><a className="hover:text-vector-green transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-vector-green transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-vector-green transition-colors" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-8 text-xs text-gray-600 font-mono">
<p>© 2024 Vector Inc. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Discord</a>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[100] hidden items-center justify-center" id="waitlist-modal">

<div className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer" onclick="toggleModal('waitlist-modal')"></div>

<div className="relative z-10 w-full max-w-md mx-4 glass-panel border border-white/10 rounded-lg p-8 shadow-2xl shadow-black">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-xl font-mono font-medium text-white mb-1">Join the waitlist</h3>
<p className="text-xs text-gray-400 font-light">Secure your spot in the queue.</p>
</div>
<button className="text-gray-500 hover:text-white transition-colors" onclick="toggleModal('waitlist-modal')">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
<form className="space-y-4" onsubmit="event.preventDefault(); toggleModal('waitlist-modal');">
<div className="space-y-1">
<label className="text-xs font-mono text-gray-400 uppercase" htmlFor="email">Email Address</label>
<input className="w-full bg-black/50 border border-white/10 text-white text-sm px-4 py-3 focus:outline-none focus:border-vector-green focus:ring-1 focus:ring-vector-green/50 placeholder:text-gray-700 font-mono rounded-sm transition-all" id="email" placeholder="growth@example.com" required="" type="email"/>
</div>
<button className="w-full bg-vector-green text-black font-mono text-sm font-semibold py-3 px-4 hover:bg-white transition-colors flex items-center justify-center gap-2" type="submit">
                    REQUEST ACCESS
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="2"></iconify-icon>
</button>
</form>
<div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between text-[10px] text-gray-500 font-mono uppercase">
<span>Current Queue: 14,203</span>
<span>ETA: 2 Weeks</span>
</div>
</div>
</div>


    </>
  );
}
