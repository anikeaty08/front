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



    !function () {
          if (!window.UnicornStudio) {
            window.UnicornStudio = { isInitialized: !1 };
            var i = document.createElement("script");
            i.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",
            i.onload = function () {
              window.UnicornStudio.isInitialized || (UnicornStudio.init(), window.UnicornStudio.isInitialized = !0)
            },
            (document.head || document.body).appendChild(i)
          }
        }();
  


        // Initialize Icons
        lucide.createIcons();

        // Intersection Observer for Reveal on Scroll
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-node').forEach(el => {
            observer.observe(el);
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component w-full top-0 saturate-150 absolute h-[800px]" data-alpha-mask="80" style={{maskImage: 'linear-gradient(transparent, black 0%, black 80%, transparent)'}}>
<div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="bcBYZIStYXwiogchBNHO"></div>

</div></div>
<canvas height="860" style={{display: 'block', width: '1430px', height: '860px'}} width="1430"></canvas>

<div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
<div className="ambient-glow top-[-20%] left-[-10%] opacity-60"></div>
<div className="ambient-glow bottom-[-20%] right-[-10%] opacity-40" style={{background: 'radial-gradient(circle, rgba(124, 58, 237, 0.08) 0%, rgba(13, 19, 38, 0) 70%)'}}></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0D1326]/80 backdrop-blur-lg">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white tracking-widest font-semibold text-lg hover:text-[#66D3FA] transition-colors" href="#">NORVAN</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#framework">The Axes</a>
<a className="hover:text-white transition-colors" href="#services">Protocol</a>
<a className="hover:text-white transition-colors" href="#trust">Sovereignty</a>
</div>
<div className="flex items-center gap-4">
<a className="bg-[#66D3FA] text-[#0D1326] px-5 py-2 text-xs font-semibold tracking-wide hover:bg-white transition-colors duration-300 flex items-center gap-2" href="#scan">
                    INITIATE SCAN
                </a>
</div>
</div>
</nav>

<section className="min-h-screen flex flex-col text-center z-10 pt-20 pr-4 pl-4 relative items-center justify-center">
<div className="reveal-node active max-w-4xl mr-auto ml-auto space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-[#66D3FA] mb-4">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#66D3FA] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#66D3FA]"></span>
</span>
                System Operational
            </div>
<h1 className="md:text-6xl lg:text-7xl leading-[1.1] text-4xl font-semibold text-white tracking-tight">
                We Don't Just Optimize Your Business. <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#66D3FA] to-white/50">We Install Its Nervous System.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
                Most companies are drowning in tools but starving for intelligence. We architect the invisible layer that connects your operations, data, and workforce into a single living organism.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
<button className="w-full sm:w-auto px-8 py-3.5 bg-[#66D3FA] text-[#0D1326] font-semibold text-sm tracking-wide shadow-[0_0_20px_rgba(102,211,250,0.3)] hover:shadow-[0_0_30px_rgba(102,211,250,0.5)] transition-all duration-300">
                    INITIATE DIMENSIONAL SCAN
                </button>
<button className="w-full sm:w-auto px-8 py-3.5 border border-white/20 text-white font-medium text-sm tracking-wide hover:bg-white/5 backdrop-blur-sm transition-all duration-300">
                    EXPLORE THE FRAMEWORK
                </button>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 animate-pulse">
<span className="text-[10px] tracking-widest uppercase">Scroll</span>
<div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white to-transparent"></div>
</div>
</section>

<section className="relative z-10 py-24 px-6 border-t border-white/5 bg-[#0D1326]/50">
<div className="max-w-3xl mx-auto text-center reveal-node">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">
                You Have AI Tools. 
                <span className="text-slate-500">You Lack Intelligence Architecture.</span>
</h2>
<p className="text-slate-400 text-lg font-light leading-relaxed">
                Buying software is easy. Building a system that learns, evolves, and operates without you is hard. The "Adoption Gap" is real. You are stuck between manual chaos and automated complexity. Norvan bridges the gap. We don't just patch holes; we engineer the machine that fixes itself.
            </p>
</div>
</section>

<section className="relative z-10 py-24 px-6" id="framework">
<div className="max-w-7xl mx-auto">
<div className="mb-16 reveal-node">
<h2 className="text-sm font-semibold text-[#66D3FA] tracking-widest uppercase mb-2">The Framework</h2>
<h3 className="text-3xl font-semibold text-white tracking-tight">5-Axis Intelligence Architecture</h3>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-card p-8 group reveal-node">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400 group-hover:text-blue-300 transition-colors">
<svg className="lucide lucide-scan-line w-5 h-5" data-lucide="scan-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><path d="M7 12h10"></path></svg>
</div>
<div className="flex items-baseline justify-between mb-3">
<h4 className="text-xl font-medium text-white">NorX - The Sight</h4>
</div>
<h5 className="text-sm font-semibold text-slate-300 mb-3">Stop Guessing.</h5>
<p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
                        Most businesses fly blind. We install the sensors that reveal the mathematical truth of where your money is leaking.
                    </p>
<div className="pt-6 border-t border-white/5 text-xs font-mono text-blue-400/80 uppercase tracking-wider">
                        Deliverable: Radical Clarity
                    </div>
</div>

<div className="glass-card p-8 group reveal-node" style={{}}>
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6 text-purple-400 group-hover:text-purple-300 transition-colors">
<svg className="lucide lucide-network w-5 h-5" data-lucide="network" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="6" rx="1" width="6" x="16" y="16"></rect><rect height="6" rx="1" width="6" x="2" y="16"></rect><rect height="6" rx="1" width="6" x="9" y="2"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><path d="M12 12V8"></path></svg>
</div>
<h4 className="text-xl font-medium text-white mb-3">NorY - The Architecture</h4>
<h5 className="text-sm font-semibold text-slate-300 mb-3">Build Once. Scale Forever.</h5>
<p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
                        You cannot scale chaos. We engineer the invisible skeleton—workflows and logic paths—that supports 100 floors of growth without a crack.
                    </p>
<div className="pt-6 border-t border-white/5 text-xs font-mono text-purple-400/80 uppercase tracking-wider">
                        Deliverable: Anti-Fragile Structure
                    </div>
</div>

<div className="glass-card p-8 group reveal-node" style={{}}>
<div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-6 text-cyan-400 group-hover:text-cyan-300 transition-colors">
<svg className="lucide lucide-cpu w-5 h-5" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<h4 className="text-xl font-medium text-white mb-3">NorV - The Engine</h4>
<h5 className="text-sm font-semibold text-slate-300 mb-3">168 Hours a Week. Zero Fatigue.</h5>
<p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
                        A digital workforce that never sleeps. From customer service to CRM management, the machine works so your humans can create.
                    </p>
<div className="pt-6 border-t border-white/5 text-xs font-mono text-cyan-400/80 uppercase tracking-wider">
                        Deliverable: Infinite Velocity
                    </div>
</div>

<div className="glass-card p-8 group reveal-node lg:col-span-1 md:col-span-1">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6 text-emerald-400 group-hover:text-emerald-300 transition-colors">
<svg className="lucide lucide-brain-circuit w-5 h-5" data-lucide="brain-circuit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
</div>
<h4 className="text-xl font-medium text-white mb-3">NorW - The Wisdom</h4>
<h5 className="text-sm font-semibold text-slate-300 mb-3">Clone the Genius. Keep the Soul.</h5>
<p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
                        Stop fearing brain drain. We extract your best team members' expertise and encode it into a permanent institutional brain.
                    </p>
<div className="pt-6 border-t border-white/5 text-xs font-mono text-emerald-400/80 uppercase tracking-wider">
                        Deliverable: Institutional Immortality
                    </div>
</div>

<div className="glass-card p-8 group reveal-node lg:col-span-2 md:col-span-1">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-6 text-orange-400 group-hover:text-orange-300 transition-colors">
<svg className="lucide lucide-radio w-5 h-5" data-lucide="radio" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16.247 7.761a6 6 0 0 1 0 8.478"></path><path d="M19.075 4.933a10 10 0 0 1 0 14.134"></path><path d="M4.925 19.067a10 10 0 0 1 0-14.134"></path><path d="M7.753 16.239a6 6 0 0 1 0-8.478"></path><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div>
<h4 className="text-xl font-medium text-white mb-3">NorZ - The Expression</h4>
<h5 className="text-sm font-semibold text-slate-300 mb-3">Attract. Don't Chase.</h5>
<p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
                                Signal your value with perfect coherence. When your internal reality matches your external signal, marketing becomes magnetic.
                            </p>
</div>
<div className="flex items-end md:justify-end">
<div className="pt-6 text-xs font-mono text-orange-400/80 uppercase tracking-wider">
                                Deliverable: Market Authority
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6 bg-[#0D1326]" id="services">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 reveal-node">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Engagement Protocols</h2>
<p className="text-slate-400 font-light">We do not sell "hours." We sell evolution. Choose your velocity.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

<div className="p-8 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all reveal-node">
<h3 className="text-lg font-medium text-white mb-1">The Dimensional Scan</h3>
<p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-6">Diagnosis before Prescription</p>
<p className="text-sm text-slate-400 font-light mb-8 leading-relaxed">
                        You wouldn't let a surgeon cut without an MRI. We generate a raw "Health Score" (0-100) across all 5 Dimensions. Prove where you bleed revenue before you spend.
                    </p>
<div className="mb-8">
<span className="text-2xl font-semibold text-white">RM 5,000</span>
<span className="text-xs text-slate-500 block mt-1">Credited toward Architecture</span>
</div>
<a className="block w-full py-3 text-center border border-white/10 text-white text-sm font-medium hover:bg-white/5 hover:border-white/20 transition-all" href="#">
                        BOOK YOUR SCAN
                    </a>
</div>

<div className="relative p-8 rounded-xl border border-[#66D3FA]/30 bg-gradient-to-b from-[#66D3FA]/5 to-transparent reveal-node transform md:-translate-y-4">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#66D3FA] text-[#0D1326] text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                        Recommended
                    </div>
<h3 className="text-lg font-medium text-white mb-1">The System Core</h3>
<p className="text-xs font-mono text-[#66D3FA]/80 uppercase tracking-wider mb-6">Manual to Organism</p>
<p className="text-sm text-slate-300 font-light mb-8 leading-relaxed">
                        The full metamorphosis. We map, build, and deploy the Intelligence Layer. NorBot deployment, workflow blueprints, and staff transfer. You get the keys to a machine that runs itself.
                    </p>
<div className="mb-8">
<span className="text-2xl font-semibold text-white">Custom</span>
<span className="text-xs text-slate-500 block mt-1">Project-Based Engagement</span>
</div>
<a className="block w-full py-3 text-center bg-[#66D3FA] text-[#0D1326] text-sm font-semibold shadow-[0_0_15px_rgba(102,211,250,0.25)] hover:shadow-[0_0_25px_rgba(102,211,250,0.4)] transition-all" href="#">
                        REQUEST CONSULTATION
                    </a>
</div>

<div className="p-8 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all reveal-node">
<h3 className="text-lg font-medium text-white mb-1">The IBU</h3>
<p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-6">Enterprise &amp; Holdings</p>
<p className="text-sm text-slate-400 font-light mb-8 leading-relaxed">
                        We become your internal Intelligence Department. A dedicated Norvan cell inside your company to continuously upgrade your architecture.
                    </p>
<div className="mb-8">
<span className="text-2xl font-semibold text-white">Retainer</span>
<span className="text-xs text-slate-500 block mt-1">or Revenue Share Model</span>
</div>
<a className="block w-full py-3 text-center border border-white/10 text-white text-sm font-medium hover:bg-white/5 hover:border-white/20 transition-all" href="#">
                        INQUIRE FOR ACCESS
                    </a>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6 border-y border-white/5" id="trust">
<div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12 reveal-node">
<div className="md:w-1/2">
<div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded-full mb-6 text-white">
<svg className="lucide lucide-lock w-6 h-6" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Sovereignty, Not Dependency.</h2>
<p className="text-slate-400 font-light text-lg leading-relaxed">
                    Most agencies build "black boxes" you can't open. We build glass cathedrals. We install the machine. We hand you the keys. You own your data. You own your workflows. We build you into a sovereign power.
                </p>
</div>
<div className="md:w-1/2 w-full">
<div className="aspect-video rounded-lg border border-white/10 bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center relative overflow-hidden group">
<div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,white,transparent)] bg-[url(default)] bg-cover bg-center"></div>
<div className="text-center z-10">
<span className="text-4xl font-semibold text-[#66D3FA]">100%</span>
<p className="text-xs uppercase tracking-widest text-slate-500 mt-2">Client Ownership</p>
</div>
</div>
</div>
</div>
</section>

<footer className="relative z-10 pt-24 pb-12 px-6 bg-[#0D1326]">
<div className="max-w-7xl mx-auto">
<div className="bg-gradient-to-r from-white/5 to-transparent border border-white/5 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 mb-20 reveal-node">
<div className="text-center md:text-left">
<h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-2">Your Business Has a Score. Do You Know It?</h2>
<p className="text-slate-400 font-light">The average un-optimized business scores a 42/100 on the Intelligence Scale.</p>
</div>
<a className="whitespace-nowrap px-8 py-3 bg-[#66D3FA] text-[#0D1326] font-semibold text-sm tracking-wide hover:bg-white transition-colors" href="#scan">
                    INITIATE SCAN
                </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/5 pt-12">
<div className="col-span-1 md:col-span-2">
<a className="text-white tracking-widest font-semibold text-lg mb-4 block" href="#">NORVAN</a>
<p className="text-slate-500 text-sm max-w-xs font-light">
                        Architecting the invisible layer that connects operations, data, and workforce into a single living organism.
                    </p>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Protocol</h4>
<ul className="space-y-2 text-sm text-slate-500 font-light">
<li><a className="hover:text-[#66D3FA] transition-colors" href="#">The Diagnostic</a></li>
<li><a className="hover:text-[#66D3FA] transition-colors" href="#">The Core</a></li>
<li><a className="hover:text-[#66D3FA] transition-colors" href="#">The IBU</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Connect</h4>
<ul className="space-y-2 text-sm text-slate-500 font-light">
<li><a className="hover:text-[#66D3FA] transition-colors" href="#">LinkedIn</a></li>
<li><a className="hover:text-[#66D3FA] transition-colors" href="#">Twitter / X</a></li>
<li><a className="hover:text-[#66D3FA] transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-12 mt-12 border-t border-white/5 text-xs text-slate-600 font-light">
<p>© 2024 Norvan Intelligence Architecture. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-slate-400" href="#">Privacy Policy</a>
<a className="hover:text-slate-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
