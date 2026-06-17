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



        document.addEventListener('DOMContentLoaded', () => {
            
            // 1. Spotlight Effect for Cards
            const cardsContainer = document.getElementById('cards-container');
            const cards = document.querySelectorAll('.spotlight-card');

            cardsContainer.onmousemove = e => {
                for(const card of cards) {
                    const rect = card.getBoundingClientRect(),
                          x = e.clientX - rect.left,
                          y = e.clientY - rect.top;

                    card.style.setProperty("--mouse-x", `${x}px`);
                    card.style.setProperty("--mouse-y", `${y}px`);
                };
            }

            // 2. Hero Mouse Parallax & Glow
            const heroGlow = document.getElementById('hero-glow');
            const heroSection = document.querySelector('section');
            
            heroSection.addEventListener('mousemove', (e) => {
                const x = e.clientX / window.innerWidth;
                const y = e.clientY / window.innerHeight;
                
                // Move glow subtly
                heroGlow.style.transform = `translate(calc(-50% + ${(x - 0.5) * 50}px), calc(-50% + ${(y - 0.5) * 50}px))`;
            });

            // 3. Scroll Reveal Observer
            const observerOptions = {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

            // 4. Navbar Transparency Logic
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 20) {
                    navbar.classList.add('border-b', 'border-white/5');
                    navbar.classList.replace('bg-[#030303]/70', 'bg-[#030303]/90');
                } else {
                    navbar.classList.remove('border-b', 'border-white/5');
                    navbar.classList.replace('bg-[#030303]/90', 'bg-[#030303]/70');
                }
            });
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
      

<div className="bg-noise"></div>

<nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-[#030303]/70 backdrop-blur-xl transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<a className="flex items-center gap-3 group" href="#">
<div className="relative w-5 h-5 flex items-center justify-center">
<div className="absolute inset-0 bg-white rounded-sm blur-[2px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
<span className="iconify text-white relative z-10" data-icon="lucide:aperture" data-width="16"></span>
</div>
<span className="text-xs font-medium tracking-tight text-white/90">AETHER</span>
</a>
<div className="hidden md:flex items-center gap-6 text-[13px] font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#expertise">Manifesto</a>
<a className="hover:text-white transition-colors" href="#work">Solutions</a>
<a className="hover:text-white transition-colors" href="#about">Company</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-[13px] text-neutral-400 hover:text-white transition-colors" href="#">Log in</a>
<button className="group relative px-4 py-1.5 rounded-full bg-white text-[13px] font-medium text-black overflow-hidden transition-all hover:scale-[1.02]">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
<span className="relative flex items-center gap-2">
                        Start Building
                        <span className="iconify" data-icon="lucide:arrow-right" data-width="12"></span>
</span>
</button>
</div>
</div>
</nav>

<section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20">

<div className="absolute inset-0 bg-grid-hero pointer-events-none z-0"></div>

<div className="absolute w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none transition-transform duration-100 ease-out z-0" id="hero-glow" style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}></div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
<div className="reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/5 text-[11px] font-medium text-indigo-200/80 mb-8 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.5)]"></span>
                    Engine v2.0 is now live
                </div>
</div>
<h1 className="reveal text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white mb-8 leading-[1.05]">
                Architecting the <br/>
<span className="text-gradient relative inline-block">
                    Invisible
                    
<span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 opacity-0 animate-[shimmer_3s_infinite]"></span>
</span>
</h1>
<p className="reveal text-sm md:text-base text-neutral-400 max-w-lg mx-auto mb-10 leading-relaxed font-light tracking-wide delay-100">
                We build high-performance infrastructure for the next generation of the web. Scalable, secure, and meticulously engineered.
            </p>
<div className="reveal flex flex-col sm:flex-row items-center justify-center gap-4 delay-200">
<button className="w-full sm:w-auto h-10 px-6 rounded-md bg-[#e5e5e5] hover:bg-white text-black text-xs font-medium tracking-wide transition-colors flex items-center justify-center gap-2 group">
<span className="iconify" data-icon="lucide:terminal" data-width="14"></span>
                    Deploy Contract
                </button>
<button className="w-full sm:w-auto h-10 px-6 rounded-md border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 text-xs font-medium tracking-wide transition-all bg-transparent">
                    View Documentation
                </button>
</div>
</div>
</section>

<section className="py-10 border-y border-white/5 bg-black/20 backdrop-blur-sm relative z-10">
<div className="max-w-7xl mx-auto px-6 overflow-hidden relative">
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#030303] to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#030303] to-transparent z-10"></div>
<div className="flex gap-20 whitespace-nowrap animate-scroll opacity-40 hover:opacity-100 transition-opacity duration-700">

<span className="text-sm font-semibold tracking-widest flex items-center gap-3"><span className="iconify" data-icon="lucide:hexagon"></span> PENTAGON</span>
<span className="text-sm font-semibold tracking-widest flex items-center gap-3"><span className="iconify" data-icon="lucide:triangle"></span> DELTA</span>
<span className="text-sm font-semibold tracking-widest flex items-center gap-3"><span className="iconify" data-icon="lucide:circle"></span> ORBIT</span>
<span className="text-sm font-semibold tracking-widest flex items-center gap-3"><span className="iconify" data-icon="lucide:square"></span> BLOCK</span>
<span className="text-sm font-semibold tracking-widest flex items-center gap-3"><span className="iconify" data-icon="lucide:diamond"></span> ETHER</span>
<span className="text-sm font-semibold tracking-widest flex items-center gap-3"><span className="iconify" data-icon="lucide:aperture"></span> LENS</span>

<span className="text-sm font-semibold tracking-widest flex items-center gap-3"><span className="iconify" data-icon="lucide:hexagon"></span> PENTAGON</span>
<span className="text-sm font-semibold tracking-widest flex items-center gap-3"><span className="iconify" data-icon="lucide:triangle"></span> DELTA</span>
<span className="text-sm font-semibold tracking-widest flex items-center gap-3"><span className="iconify" data-icon="lucide:circle"></span> ORBIT</span>
<span className="text-sm font-semibold tracking-widest flex items-center gap-3"><span className="iconify" data-icon="lucide:square"></span> BLOCK</span>
</div>
</div>
</section>

<section className="py-32 relative z-10" id="expertise">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20">
<h2 className="reveal text-3xl font-medium tracking-tight text-white mb-4">Precision Engineering</h2>
<p className="reveal text-sm text-neutral-500 max-w-md delay-100">Our stack is opinionated but flexible. We prioritize type safety, immutability, and edge-first distribution.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="cards-container">

<div className="reveal md:col-span-2 spotlight-card rounded-xl p-8 h-[340px] flex flex-col justify-between group">
<div className="spotlight-border"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6">
<span className="iconify" data-icon="lucide:layers" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Full-Stack Architecture</h3>
<p className="text-sm text-neutral-500 max-w-sm">From Rust-based microservices to React Server Components. We build cohesive systems designed to handle scale from day zero.</p>
</div>

<div className="relative z-10 w-full h-24 mt-4 border border-white/5 rounded-lg bg-[#0a0a0a] overflow-hidden flex items-center px-4 gap-2">
<div className="w-2 h-2 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2 h-2 rounded-full bg-green-500/20 border border-green-500/50"></div>
<div className="ml-4 font-mono text-[10px] text-neutral-500 flex gap-4">
<span>&gt; git push origin main</span>
<span className="text-emerald-500">✓ Deployed 24ms</span>
</div>
</div>
</div>

<div className="reveal spotlight-card rounded-xl p-8 h-[340px] flex flex-col group">
<div className="spotlight-border"></div>
<div className="relative z-10 mb-auto">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6">
<span className="iconify" data-icon="lucide:shield-check" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Security First</h3>
<p className="text-sm text-neutral-500">Audited smart contracts and strict RLS policies ensuring data sovereignty.</p>
</div>
<div className="relative z-10 mt-6 h-32 w-full flex items-end justify-center">
<div className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center relative">
<div className="absolute inset-0 border border-white/20 rounded-full animate-[ping_3s_linear_infinite] opacity-20"></div>
<span className="iconify text-emerald-500" data-icon="lucide:lock" data-width="24"></span>
</div>
</div>
</div>

<div className="reveal spotlight-card rounded-xl p-8 h-[340px] flex flex-col group">
<div className="spotlight-border"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6">
<span className="iconify" data-icon="lucide:zap" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Global Edge</h3>
<p className="text-sm text-neutral-500">Distributed computing closer to your users. Sub-50ms latency worldwide.</p>
</div>
<div className="relative z-10 mt-auto w-full h-32 opacity-50">

<div className="absolute bottom-0 left-0 right-0 h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:10px_10px]"></div>
</div>
</div>

<div className="reveal md:col-span-2 spotlight-card rounded-xl p-8 h-[340px] flex flex-col justify-between group">
<div className="spotlight-border"></div>
<div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
<div className="flex-1">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6">
<span className="iconify" data-icon="lucide:cpu" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Neural Integration</h3>
<p className="text-sm text-neutral-500 max-w-sm">Embedded vector databases and LLM orchestration. We turn static software into adaptive intelligence.</p>
</div>

<div className="w-full md:w-64 h-40 bg-[#0a0a0a] border border-white/5 rounded-lg p-4 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent"></div>
<div className="space-y-2 relative z-10">
<div className="h-1.5 w-1/3 bg-white/10 rounded-full animate-pulse"></div>
<div className="h-1.5 w-2/3 bg-white/10 rounded-full animate-pulse delay-75"></div>
<div className="h-1.5 w-1/2 bg-white/10 rounded-full animate-pulse delay-150"></div>
</div>
<div className="absolute bottom-4 right-4 text-[10px] font-mono text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                                Processing...
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-[#050505] relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
<div className="reveal space-y-2">
<span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">Latency</span>
<div className="text-4xl font-light tracking-tighter text-white">12<span className="text-neutral-600">ms</span></div>
</div>
<div className="hidden md:block w-px h-12 bg-white/10"></div>
<div className="reveal space-y-2 delay-100">
<span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">Uptime</span>
<div className="text-4xl font-light tracking-tighter text-white">99.99<span className="text-neutral-600">%</span></div>
</div>
<div className="hidden md:block w-px h-12 bg-white/10"></div>
<div className="reveal space-y-2 delay-200">
<span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">Throughput</span>
<div className="text-4xl font-light tracking-tighter text-white">10M<span className="text-neutral-600">+</span></div>
</div>
<div className="flex-1 text-right reveal delay-300">
<p className="text-sm text-neutral-400 max-w-xs ml-auto leading-relaxed">
                    "Aether represents the absolute pinnacle of engineering velocity. They didn't just build our product, they architected our future."
                </p>
<div className="mt-4 flex items-center justify-end gap-3">
<div className="w-6 h-6 rounded-full bg-white/10"></div>
<span className="text-xs font-medium text-white">CTO, Nexus Corp</span>
</div>
</div>
</div>
</section>

<section className="py-40 relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none"></div>
<div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
<h2 className="reveal text-4xl md:text-6xl font-medium tracking-tighter text-white mb-6">Ready to scale?</h2>
<p className="reveal text-neutral-500 mb-10 text-sm md:text-base max-w-md mx-auto delay-100">
                Join an exclusive roster of visionary companies. <br/> We are currently accepting applications for Q1.
            </p>
<div className="reveal delay-200 flex flex-col items-center gap-4">
<button className="px-8 py-3 rounded-full bg-white text-black text-sm font-medium hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                    Schedule Consultation
                </button>
<p className="text-[10px] text-neutral-600 font-mono">slots_available: 3</p>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-16 bg-black">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div>
<h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">Product</h4>
<ul className="space-y-2 text-xs text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Features</a></li>
<li><a className="hover:text-white transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-white transition-colors" href="#">Changelog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Docs</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">Company</h4>
<ul className="space-y-2 text-xs text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Customers</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">Legal</h4>
<ul className="space-y-2 text-xs text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-white transition-colors" href="#">Security</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">Social</h4>
<div className="flex gap-4 text-neutral-500">
<a className="hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="16"></span></a>
<a className="hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:github" data-width="16"></span></a>
<a className="hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:slack" data-width="16"></span></a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
<div className="flex items-center gap-2">
<span className="iconify text-white" data-icon="lucide:aperture" data-width="14"></span>
<span className="text-[10px] text-neutral-500">© 2024 Aether Inc. All rights reserved.</span>
</div>
<div className="flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-[10px] font-mono text-neutral-500">All systems operational</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
