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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Space Grotesk', 'sans-serif'],
},
colors: {
brand: {
500: '#FF5722', // ResolveXO Orange
600: '#F4511E',
900: '#1a0904',
},
surface: '#0A0A0A',
},
animation: {
'marquee': 'marquee 40s linear infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
}
}
}
}
}



        // Spotlight Mouse Interaction
        document.addEventListener('mousemove', (e) => {
            document.querySelectorAll('.spotlight-card').forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });

        // Smooth Scroll for Anchors
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
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
      

<div className="fixed inset-0 grid-bg pointer-events-none z-0"></div>
<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-500/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-1 group" href="#">
<span className="font-display font-bold text-2xl tracking-tighter text-white">RESOLVE</span>
<span className="font-display font-bold text-2xl tracking-tighter text-brand-500 group-hover:rotate-12 transition-transform duration-300">XO</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
<a className="hover:text-white transition-colors" href="#expertise">Expertise</a>
<a className="hover:text-white transition-colors" href="#method">The Method</a>
<a className="hover:text-white transition-colors" href="#results">Results</a>
<a className="hover:text-white transition-colors" href="#insights">Insights</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-white hover:text-brand-500 transition-colors" href="#">Client Login</a>
<button className="bg-white text-black hover:bg-brand-500 hover:text-white transition-all duration-300 px-5 py-2.5 rounded-full text-sm font-semibold tracking-tight border border-transparent">
                    Contact Us
                </button>
</div>
</div>
</nav>
<main className="relative z-10 pt-32 pb-20">

<section className="max-w-7xl mx-auto px-6 mb-32 relative">
<div className="flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 animate-fade-in-up">
<span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse"></span>
<span className="text-xs font-mono tracking-wider text-white/80 uppercase">100% Conflict Free Advice</span>
</div>
<h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] mb-8 text-white">
                    Australasia’s leading <br/>
<span className="text-white/40">corporate property</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-orange-300">strategists.</span>
</h1>
<p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed mb-10 font-light">
                    We are the <span className="text-white font-medium">tactical advantage</span> you need to secure commercial and industrial property on the best terms available.
                </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<button className="group relative px-8 py-4 bg-brand-500 text-white rounded-full font-medium text-sm tracking-wide overflow-hidden transition-all hover:bg-brand-600 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,87,34,0.5)]">
<span className="relative z-10 flex items-center gap-2">
                            Start Your Strategy
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</button>
<button className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-medium text-sm tracking-wide hover:bg-white/10 transition-all backdrop-blur-md">
                        View Case Studies
                    </button>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 border-t border-white/10 pt-12">
<div className="text-center md:text-left">
<p className="text-3xl md:text-4xl font-display font-semibold text-white mb-1">100%</p>
<p className="text-xs font-mono text-white/40 uppercase tracking-widest">Conflict Free</p>
</div>
<div className="text-center md:text-left">
<p className="text-3xl md:text-4xl font-display font-semibold text-white mb-1">1M+</p>
<p className="text-xs font-mono text-white/40 uppercase tracking-widest">Sqm Negotiated</p>
</div>
<div className="text-center md:text-left">
<p className="text-3xl md:text-4xl font-display font-semibold text-white mb-1">450+</p>
<p className="text-xs font-mono text-white/40 uppercase tracking-widest">Projects Delivered</p>
</div>
<div className="text-center md:text-left">
<p className="text-3xl md:text-4xl font-display font-semibold text-white mb-1">$500M</p>
<p className="text-xs font-mono text-white/40 uppercase tracking-widest">Client Savings</p>
</div>
</div>
</section>

<div className="w-full border-y border-white/5 bg-white/[0.02] py-6 mb-32 overflow-hidden relative">
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10"></div>
<div className="flex whitespace-nowrap animate-marquee">

<div className="flex gap-16 px-8">
<span className="flex items-center gap-4 text-white/30 font-display font-semibold text-2xl uppercase tracking-tight">Strategy <iconify-icon className="text-brand-500" icon="solar:star-linear"></iconify-icon></span>
<span className="flex items-center gap-4 text-white/30 font-display font-semibold text-2xl uppercase tracking-tight">Negotiation <iconify-icon className="text-brand-500" icon="solar:star-linear"></iconify-icon></span>
<span className="flex items-center gap-4 text-white/30 font-display font-semibold text-2xl uppercase tracking-tight">Workplace <iconify-icon className="text-brand-500" icon="solar:star-linear"></iconify-icon></span>
<span className="flex items-center gap-4 text-white/30 font-display font-semibold text-2xl uppercase tracking-tight">Industrial <iconify-icon className="text-brand-500" icon="solar:star-linear"></iconify-icon></span>
<span className="flex items-center gap-4 text-white/30 font-display font-semibold text-2xl uppercase tracking-tight">Commercial <iconify-icon className="text-brand-500" icon="solar:star-linear"></iconify-icon></span>
<span className="flex items-center gap-4 text-white/30 font-display font-semibold text-2xl uppercase tracking-tight">Change Management <iconify-icon className="text-brand-500" icon="solar:star-linear"></iconify-icon></span>
</div>
<div className="flex gap-16 px-8">
<span className="flex items-center gap-4 text-white/30 font-display font-semibold text-2xl uppercase tracking-tight">Strategy <iconify-icon className="text-brand-500" icon="solar:star-linear"></iconify-icon></span>
<span className="flex items-center gap-4 text-white/30 font-display font-semibold text-2xl uppercase tracking-tight">Negotiation <iconify-icon className="text-brand-500" icon="solar:star-linear"></iconify-icon></span>
<span className="flex items-center gap-4 text-white/30 font-display font-semibold text-2xl uppercase tracking-tight">Workplace <iconify-icon className="text-brand-500" icon="solar:star-linear"></iconify-icon></span>
<span className="flex items-center gap-4 text-white/30 font-display font-semibold text-2xl uppercase tracking-tight">Industrial <iconify-icon className="text-brand-500" icon="solar:star-linear"></iconify-icon></span>
<span className="flex items-center gap-4 text-white/30 font-display font-semibold text-2xl uppercase tracking-tight">Commercial <iconify-icon className="text-brand-500" icon="solar:star-linear"></iconify-icon></span>
<span className="flex items-center gap-4 text-white/30 font-display font-semibold text-2xl uppercase tracking-tight">Change Management <iconify-icon className="text-brand-500" icon="solar:star-linear"></iconify-icon></span>
</div>
</div>
</div>

<section className="max-w-7xl mx-auto px-6 mb-32" id="expertise">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">Total Real Estate Solutions</h2>
<p className="text-white/50 max-w-md">Comprehensive advisory services designed solely for the occupier.</p>
</div>
<button className="hidden md:flex items-center gap-2 text-brand-500 hover:text-white transition-colors text-sm font-medium">
                    Explore all services <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

<div className="md:col-span-2 glass-panel rounded-2xl p-8 spotlight-card group relative">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-0 pointer-events-none"></div>
<div className="absolute top-8 right-8 text-brand-500 bg-brand-500/10 p-3 rounded-xl border border-brand-500/20">
<iconify-icon icon="solar:buildings-2-linear" width="32"></iconify-icon>
</div>
<div className="relative z-10 h-full flex flex-col justify-end">
<h3 className="font-display font-bold text-2xl text-white mb-2">Tenant Representation</h3>
<p className="text-white/60 mb-6 max-w-lg">From site selection to lease execution, we secure the best terms by leveraging market intelligence and conflict-free positioning.</p>

<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-2">
<div className="w-3/4 h-full bg-brand-500"></div>
</div>
<div className="flex justify-between text-xs font-mono text-white/40">
<span>MARKET LEVERAGE</span>
<span>OPTIMIZED</span>
</div>
</div>
</div>

<div className="md:col-span-1 glass-panel rounded-2xl p-8 spotlight-card group flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white mb-6 group-hover:bg-brand-500 group-hover:text-black transition-colors">
<iconify-icon icon="solar:chart-2-linear" width="24"></iconify-icon>
</div>
<h3 className="font-display font-bold text-xl text-white mb-2">Portfolio Strategy</h3>
<p className="text-white/60 text-sm">Align your real estate with business objectives using data-driven insights.</p>
</div>
<div className="mt-4">
<div className="flex items-end gap-1 h-12">
<div className="w-1/5 bg-white/10 h-[40%] rounded-t-sm group-hover:bg-brand-500/40 transition-colors"></div>
<div className="w-1/5 bg-white/10 h-[70%] rounded-t-sm group-hover:bg-brand-500/60 transition-colors"></div>
<div className="w-1/5 bg-white/10 h-[50%] rounded-t-sm group-hover:bg-brand-500/50 transition-colors"></div>
<div className="w-1/5 bg-white/10 h-[100%] rounded-t-sm bg-gradient-to-t from-brand-600 to-brand-500"></div>
<div className="w-1/5 bg-white/10 h-[80%] rounded-t-sm group-hover:bg-brand-500/80 transition-colors"></div>
</div>
</div>
</div>

<div className="md:col-span-1 glass-panel rounded-2xl p-8 spotlight-card group">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white mb-6 group-hover:bg-brand-500 group-hover:text-black transition-colors">
<iconify-icon icon="solar:sofa-2-linear" width="24"></iconify-icon>
</div>
<h3 className="font-display font-bold text-xl text-white mb-2">Workplace Strategy</h3>
<p className="text-white/60 text-sm">Design future-ready environments that enhance culture and productivity.</p>
<div className="mt-6 flex -space-x-2">
<div className="w-8 h-8 rounded-full border border-black bg-white/20"></div>
<div className="w-8 h-8 rounded-full border border-black bg-white/40"></div>
<div className="w-8 h-8 rounded-full border border-black bg-white/60"></div>
</div>
</div>

<div className="md:col-span-2 glass-panel rounded-2xl p-8 spotlight-card group relative overflow-hidden">
<div className="absolute right-0 top-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-900/40 via-transparent to-transparent"></div>
<div className="relative z-10">
<div className="flex items-center justify-between mb-8">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-brand-500 group-hover:text-black transition-colors">
<iconify-icon icon="solar:box-linear" width="24"></iconify-icon>
</div>
<span className="text-xs font-mono text-brand-500 border border-brand-500/30 px-2 py-1 rounded">LOGISTICS &amp; SUPPLY CHAIN</span>
</div>
<h3 className="font-display font-bold text-2xl text-white mb-2">Industrial &amp; Logistics</h3>
<p className="text-white/60 max-w-md">Specialized advisory for manufacturing, distribution, and supply chain real estate needs across the region.</p>
</div>

<div className="absolute bottom-0 right-0 w-64 h-32 opacity-20">
<svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="20" id="grid" patternunits="userSpaceOnUse" width="20">
<path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="1"></path>
</pattern>
</defs>
<rect fill="url(#grid)" height="100%" width="100%"></rect>
</svg>
</div>
</div>
</div>
</section>

<section className="border-t border-white/5 bg-[#080808] py-24 relative" id="method">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

<div className="lg:sticky lg:top-32 h-fit">
<span className="text-brand-500 font-mono text-xs tracking-widest uppercase mb-4 block">/// The Resolve Methodology</span>
<h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6 leading-tight">
                            Precision in every <br/> phase of the lifecycle.
                        </h2>
<p className="text-white/60 text-lg mb-8 leading-relaxed">
                            Our proprietary framework ensures no detail is overlooked. From initial discovery to final occupancy, we provide a structured, transparent path to value.
                        </p>
<div className="flex flex-col gap-4">
<div className="flex items-center gap-4 text-sm text-white/80">
<div className="w-6 h-6 rounded-full bg-brand-500/20 flex items-center justify-center text-brand-500">
<iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
</div>
                                Data-backed leverage
                            </div>
<div className="flex items-center gap-4 text-sm text-white/80">
<div className="w-6 h-6 rounded-full bg-brand-500/20 flex items-center justify-center text-brand-500">
<iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
</div>
                                Complete transparency
                            </div>
<div className="flex items-center gap-4 text-sm text-white/80">
<div className="w-6 h-6 rounded-full bg-brand-500/20 flex items-center justify-center text-brand-500">
<iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
</div>
                                Risk mitigation
                            </div>
</div>
</div>

<div className="flex flex-col gap-8 relative">

<div className="absolute left-8 top-0 bottom-0 w-px bg-white/10 hidden md:block"></div>

<div className="glass-panel p-8 rounded-2xl relative md:ml-16 spotlight-card">
<div className="hidden md:flex absolute -left-[41px] top-10 w-5 h-5 rounded-full bg-[#050505] border-2 border-brand-500 items-center justify-center z-10">
<div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
</div>
<div className="text-xs font-mono text-brand-500 mb-2">PHASE 01</div>
<h3 className="text-2xl font-bold text-white mb-3">Discovery &amp; Strategy</h3>
<p className="text-white/60 text-sm leading-relaxed mb-4">We define your operational requirements, analyze your current position, and develop a bespoke real estate strategy aligned with your business goals.</p>
</div>

<div className="glass-panel p-8 rounded-2xl relative md:ml-16 spotlight-card">
<div className="hidden md:flex absolute -left-[41px] top-10 w-5 h-5 rounded-full bg-[#050505] border-2 border-white/20 items-center justify-center z-10"></div>
<div className="text-xs font-mono text-white/50 mb-2">PHASE 02</div>
<h3 className="text-2xl font-bold text-white mb-3">Market Engagement</h3>
<p className="text-white/60 text-sm leading-relaxed mb-4">We identify on and off-market opportunities, creating competitive tension among landlords to maximize leverage for your organization.</p>
</div>

<div className="glass-panel p-8 rounded-2xl relative md:ml-16 spotlight-card">
<div className="hidden md:flex absolute -left-[41px] top-10 w-5 h-5 rounded-full bg-[#050505] border-2 border-white/20 items-center justify-center z-10"></div>
<div className="text-xs font-mono text-white/50 mb-2">PHASE 03</div>
<h3 className="text-2xl font-bold text-white mb-3">Negotiation &amp; Execution</h3>
<p className="text-white/60 text-sm leading-relaxed mb-4">Our financial analysts and negotiators secure the optimal commercial terms and lease flexibility, protecting your long-term interests.</p>
</div>

<div className="glass-panel p-8 rounded-2xl relative md:ml-16 spotlight-card">
<div className="hidden md:flex absolute -left-[41px] top-10 w-5 h-5 rounded-full bg-[#050505] border-2 border-white/20 items-center justify-center z-10"></div>
<div className="text-xs font-mono text-white/50 mb-2">PHASE 04</div>
<h3 className="text-2xl font-bold text-white mb-3">Fitout &amp; Transition</h3>
<p className="text-white/60 text-sm leading-relaxed mb-4">We oversee the transition, managing fitout delivery and change management to ensure seamless business continuity.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden">
<div className="absolute inset-0 bg-brand-500/5 radial-gradient-bg pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="font-display font-bold text-5xl md:text-7xl text-white mb-8 tracking-tighter">
                    Ready to resolve your <br/>
<span className="text-brand-500">real estate challenges?</span>
</h2>
<p className="text-xl text-white/60 mb-12 font-light">
                    Join the leading organizations across Australasia who trust ResolveXO for unbiased, conflict-free advice.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-bold text-sm tracking-wide hover:bg-gray-200 transition-colors">
                        Book a Consultation
                    </button>
<button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-bold text-sm tracking-wide hover:bg-white/5 transition-colors">
                        Speak to an Advisor
                    </button>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-[#020202] pt-20 pb-10 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="md:col-span-1">
<a className="flex items-center gap-1 mb-6" href="#">
<span className="font-display font-bold text-2xl tracking-tighter text-white">RESOLVE</span>
<span className="font-display font-bold text-2xl tracking-tighter text-brand-500">XO</span>
</a>
<p className="text-xs text-white/40 leading-relaxed max-w-xs">
                            ResolveXO is Australasia's leading independent corporate real estate strategy firm. We are 100% tenant-focused, 100% of the time.
                        </p>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Services</h4>
<ul className="space-y-2 text-xs text-white/50">
<li><a className="hover:text-brand-500 transition-colors" href="#">Tenant Representation</a></li>
<li><a className="hover:text-brand-500 transition-colors" href="#">Portfolio Strategy</a></li>
<li><a className="hover:text-brand-500 transition-colors" href="#">Transaction Management</a></li>
<li><a className="hover:text-brand-500 transition-colors" href="#">Workplace Strategy</a></li>
<li><a className="hover:text-brand-500 transition-colors" href="#">Industrial Advisory</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Company</h4>
<ul className="space-y-2 text-xs text-white/50">
<li><a className="hover:text-brand-500 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-brand-500 transition-colors" href="#">Our Team</a></li>
<li><a className="hover:text-brand-500 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-brand-500 transition-colors" href="#">Insights</a></li>
<li><a className="hover:text-brand-500 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Subscribe</h4>
<p className="text-xs text-white/40 mb-4">Market insights delivered to your inbox.</p>
<div className="flex gap-2">
<input className="bg-white/5 border border-white/10 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-500 w-full transition-colors" placeholder="Email address" type="email"/>
<button className="bg-brand-500 text-white px-3 py-2 rounded hover:bg-brand-600 transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-white/30">© 2024 ResolveXO. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-white/30 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:camera-linear" width="16"></iconify-icon></a>
<a className="text-white/30 hover:text-white transition-colors" href="#"><iconify-icon icon="brandico:linkedin-rect" width="16"></iconify-icon></a>
<a className="text-white/30 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:letter-linear" width="16"></iconify-icon></a>
</div>
</div>
</div>
</footer>
</main>


    </>
  );
}
