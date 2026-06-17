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
},
colors: {
brand: {
50: '#f0f9ff',
100: '#e0f2fe',
500: '#0ea5e9', // Sky blue
600: '#0284c7',
900: '#0c4a6e',
950: '#082f49',
},
slate: {
850: '#151f2e',
900: '#0f172a',
950: '#020617',
}
},
backgroundImage: {
'hero-pattern': "linear-gradient(to bottom, rgba(2, 6, 23, 0.7), rgba(2, 6, 23, 1)), url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2940&auto=format&fit=crop')",
}
}
}
}



        // Scroll Animation (Intersection Observer)
        document.addEventListener('DOMContentLoaded', () => {
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
        });

        // Fleet Filter Logic
        const filterBtns = document.querySelectorAll('.filter-btn');
        const fleetItems = document.querySelectorAll('.fleet-item');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(b => {
                    b.classList.remove('bg-brand-500/10', 'border-brand-500/50', 'text-white');
                    b.classList.add('bg-slate-900', 'border-slate-800', 'text-slate-400');
                });
                // Add active class to clicked
                btn.classList.remove('bg-slate-900', 'border-slate-800', 'text-slate-400');
                btn.classList.add('bg-brand-500/10', 'border-brand-500/50', 'text-white');

                const filterValue = btn.getAttribute('data-filter');

                fleetItems.forEach(item => {
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                        // Small animation on show
                        item.animate([
                            { opacity: 0, transform: 'scale(0.95)' },
                            { opacity: 1, transform: 'scale(1)' }
                        ], { duration: 300 });
                    } else {
                        item.style.display = 'none';
                    }
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
      

<nav className="fixed transition-all duration-300 bg-slate-950/80 w-full z-50 border-white/5 border-b top-0 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="text-white font-medium tracking-tight text-lg flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded bg-gradient-to-br from-brand-500 to-indigo-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
<span className="font-bold text-xs">ND</span>
</div>
<span className="uppercase tracking-widest text-sm text-slate-100">Novus<span className="text-slate-500">Dynamics</span></span>
</a>

<div className="hidden md:flex gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#about">Mission</a>
<a className="hover:text-white transition-colors" href="#services">Solutions</a>
<a className="hover:text-white transition-colors" href="#fleet">Inventory</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
</div>

<div className="hidden md:block">
<a className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-white text-xs font-medium hover:bg-white hover:text-slate-900 transition-all duration-300" href="#contact">
                    Client Portal
                </a>
</div>

<button className="md:hidden text-white" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>

<div className="hidden absolute top-20 left-0 w-full bg-slate-900 border-b border-slate-800 p-6 flex flex-col gap-4 shadow-2xl" id="mobile-menu">
<a className="text-sm font-medium hover:text-brand-500" href="#about">Mission</a>
<a className="text-sm font-medium hover:text-brand-500" href="#services">Solutions</a>
<a className="text-sm font-medium hover:text-brand-500" href="#fleet">Inventory</a>
<a className="text-sm font-medium hover:text-brand-500" href="#contact">Contact</a>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

<div className="absolute inset-0 bg-hero-pattern bg-cover bg-center bg-no-repeat bg-fixed z-0 opacity-80 scale-105 animate-pulse-slow"></div>
<div className="bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent z-0 absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-600/20 rounded-full blur-[100px] animate-pulse"></div>
<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px]"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
<div className="space-y-8 reveal active">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-400 text-xs font-medium uppercase tracking-wider">
<span className="w-2 h-2 rounded-full bg-brand-400 animate-ping"></span>
                    Logistics • Trade • Strategy
                </div>
<h1 className="text-5xl lg:text-7xl font-medium text-white tracking-tight leading-[1.1]">
                    Defining velocity. <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-indigo-400">Scale without limits.</span>
</h1>
<p className="text-lg text-slate-400 max-w-lg font-light leading-relaxed">
                    End-to-end transport infrastructure, vehicle asset management, and high-level consulting. We move the world's most critical assets.
                </p>
<div className="flex flex-wrap gap-4">
<a className="px-8 py-4 rounded bg-white text-slate-950 text-sm font-medium hover:bg-brand-50 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]" href="#contact">
                        Get Started
                    </a>
<a className="px-8 py-4 rounded border border-white/20 text-white text-sm font-medium hover:bg-white/5 hover:border-white transition-all duration-300 backdrop-blur-sm group flex items-center gap-2" href="#services">
                        View Solutions
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="pt-8 flex items-center gap-8 border-t border-white/10">
<div>
<p className="text-2xl font-semibold text-white">Global</p>
<p className="text-xs text-slate-500 uppercase tracking-wide">Network Reach</p>
</div>
<div className="">
<p className="text-2xl font-semibold text-white">99.9%</p>
<p className="text-xs text-slate-500 uppercase tracking-wide">Delivery Precision</p>
</div>
</div>
</div>

<div className="hidden lg:block relative perspective-1000 group reveal delay-200 active">
<div className="relative w-full aspect-square transform transition-transform duration-700 hover:rotate-y-6 hover:rotate-x-6">

<div className="absolute inset-0 backdrop-blur-xl bg-slate-900/80 rounded-2xl p-6 shadow-2xl border border-white/10 flex flex-col justify-between overflow-hidden group">

<div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-500/20 rounded-full blur-[60px] animate-pulse"></div>
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-900/10 to-transparent pointer-events-none"></div>

<div className="relative z-10 flex justify-between items-start">
<div className="">
<div className="flex items-center gap-2 mb-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-[10px] font-bold tracking-widest text-emerald-400 uppercase font-mono">System Active</span>
</div>
<div className="flex items-baseline gap-2">
<h3 className="text-white font-semibold text-xl tracking-tight">LON</h3>
<div className="flex flex-col items-center px-2 w-16">
<span className="text-[10px] text-slate-500 mb-1 font-mono">1.2ms</span>
<div className="w-full h-px bg-slate-700 relative overflow-hidden rounded-full">
<div className="absolute inset-0 bg-brand-500 w-1/2 animate-[shimmer_2s_infinite]"></div>
</div>
</div>
<h3 className="text-white font-semibold text-xl tracking-tight">NYC</h3>
</div>
</div>
<div className="p-2.5 bg-white/5 rounded-lg border border-white/10 text-brand-400 shadow-inner">
<iconify-icon icon="solar:global-linear" width="20"></iconify-icon>
</div>
</div>

<div className="relative h-32 w-full mt-2 select-none">
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<svg className="absolute inset-0 w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 300 100">
<defs>
<lineargradient id="lineGradient" x1="0" x2="1" y1="0" y2="0">
<stop offset="0%" stop-color="#0ea5e9"></stop>
<stop offset="50%" stop-color="#6366f1"></stop>
<stop offset="100%" stop-color="#ec4899"></stop>
</lineargradient>
<lineargradient id="areaGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#0ea5e9" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#0ea5e9" stop-opacity="0"></stop>
</lineargradient>
<filter height="140%" id="glow" width="140%" x="-20%" y="-20%">
<fegaussianblur result="coloredBlur" stddeviation="3"></fegaussianblur>
<femerge>
<femergenode in="coloredBlur"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
</defs>
<path className="" d="M0,100 L0,60 C40,55 70,85 110,65 C150,45 190,55 230,35 C260,20 280,25 300,10 L300,100 Z" fill="url(#areaGradient)"></path>
<path d="M0,60 C40,55 70,85 110,65 C150,45 190,55 230,35 C260,20 280,25 300,10" fill="none" filter="url(#glow)" stroke="url(#lineGradient)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
<circle fill="#ffffff" filter="url(#glow)" r="3">
<animatemotion calcmode="spline" dur="8s" keysplines="0.4 0 0.2 1" keytimes="0;1" path="M0,60 C40,55 70,85 110,65 C150,45 190,55 230,35 C260,20 280,25 300,10" repeatcount="indefinite"></animatemotion>
</circle>
<circle fill="none" r="8" stroke="#ffffff" stroke-opacity="0.5">
<animatemotion calcmode="spline" dur="8s" keysplines="0.4 0 0.2 1" keytimes="0;1" path="M0,60 C40,55 70,85 110,65 C150,45 190,55 230,35 C260,20 280,25 300,10" repeatcount="indefinite"></animatemotion>
<animate attributename="r" dur="2s" repeatcount="indefinite" values="3;16"></animate>
<animate attributename="opacity" dur="2s" repeatcount="indefinite" values="0.8;0"></animate>
<animate attributename="stroke-width" dur="2s" repeatcount="indefinite" values="1;0"></animate>
</circle>
</svg>
</div>

<div className="grid grid-cols-2 gap-3 mt-4 relative z-10">
<div className="bg-slate-800/40 p-3 rounded-xl border border-white/5 hover:bg-slate-800/60 transition-all duration-300 backdrop-blur-sm group/card hover:border-brand-500/20">
<div className="flex justify-between items-start mb-2">
<div className="p-1.5 rounded-md bg-brand-500/10 text-brand-400 group-hover/card:text-brand-300 transition-colors">
<iconify-icon icon="solar:box-minimalistic-linear"></iconify-icon>
</div>
<span className="text-[10px] font-medium text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">+12%</span>
</div>
<p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Volume</p>
<p className="text-lg font-semibold text-white mt-0.5 tracking-tight">1,248</p>
</div>
<div className="bg-slate-800/40 p-3 rounded-xl border border-white/5 hover:bg-slate-800/60 transition-all duration-300 backdrop-blur-sm group/card hover:border-indigo-500/20">
<div className="flex justify-between items-start mb-2">
<div className="p-1.5 rounded-md bg-indigo-500/10 text-indigo-400 group-hover/card:text-indigo-300 transition-colors">
<iconify-icon icon="solar:graph-up-linear"></iconify-icon>
</div>
<span className="text-[10px] font-medium text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">+8%</span>
</div>
<p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Efficiency</p>
<p className="text-lg font-semibold text-white mt-0.5 tracking-tight">98.5%</p>
</div>
</div>
<style>
                        @keyframes shimmer {
                            0% { transform: translateX(-100%); opacity: 0; }
                            50% { opacity: 1; }
                            100% { transform: translateX(100%); opacity: 0; }
                        }
                        </style>
</div>

<div className="absolute -bottom-6 -left-6 glass px-6 py-4 rounded-xl border border-white/10 shadow-lg animate-bounce-slow">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
<iconify-icon icon="solar:verified-check-linear" width="20"></iconify-icon>
</div>
<div className="">
<p className="text-xs text-slate-400">Compliance</p>
<p className="text-sm font-medium text-white">Verified</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-950 pt-24 pb-24 relative" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="space-y-6 reveal">
<span className="text-brand-500 text-xs font-semibold tracking-widest uppercase">Mission</span>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">Beyond conventional logistics. <br/>Partnering for exponential growth.</h2>
<p className="text-slate-400 leading-relaxed font-light">
<strong>Novus Dynamics</strong> represents the convergence of physical infrastructure and digital intelligence. We don't just move cargo; we integrate logistics with asset acquisition and high-level management consulting.
                    </p>
<p className="text-slate-400 leading-relaxed font-light">
                        Leveraging decades of industry data and a diversified service portfolio, we empower both private entities seeking premium mobility and enterprises requiring robust fleet architecture.
                    </p>
<ul className="space-y-3 mt-4">
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-brand-500 text-lg" icon="solar:shield-check-linear"></iconify-icon>
                            Uncompromising safety protocols
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-brand-500 text-lg" icon="solar:clock-circle-linear"></iconify-icon>
                            Algorithmic precision in timing
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-brand-500 text-lg" icon="solar:users-group-rounded-linear"></iconify-icon>
                            Bespoke client strategy
                        </li>
</ul>
</div>
<div className="grid grid-cols-2 gap-4 reveal delay-100">
<div className="space-y-4 translate-y-8">
<div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-brand-500/50 transition-colors group">
<iconify-icon className="text-3xl text-slate-500 group-hover:text-brand-400 mb-4 transition-colors" icon="solar:cpu-bolt-linear"></iconify-icon>
<h3 className="text-white font-medium mb-1">AI Integration</h3>
<p className="text-xs text-slate-500">Smart routing and predictive maintenance.</p>
</div>
<div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-brand-500/50 transition-colors group">
<iconify-icon className="text-3xl text-slate-500 group-hover:text-brand-400 mb-4 transition-colors" icon="solar:hand-shake-linear"></iconify-icon>
<h3 className="text-white font-medium mb-1">Reliability</h3>
<p className="text-xs text-slate-500">Trusted by Fortune 500 partners.</p>
</div>
</div>
<div className="space-y-4">
<div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-brand-500/50 transition-colors group">
<iconify-icon className="text-3xl text-slate-500 group-hover:text-brand-400 mb-4 transition-colors" icon="solar:wheel-angle-linear"></iconify-icon>
<h3 className="text-white font-medium mb-1">Modern Fleet</h3>
<p className="text-xs text-slate-500">State-of-the-art vehicle inventory.</p>
</div>
<div className="p-6 bg-gradient-to-br from-brand-900/20 to-slate-900 border border-slate-800 rounded-2xl hover:border-brand-500/50 transition-colors group">
<iconify-icon className="text-3xl text-brand-500 mb-4" icon="solar:chart-square-linear"></iconify-icon>
<h3 className="text-white font-medium mb-1">Scalability</h3>
<p className="text-xs text-slate-500">Solutions that grow with you.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 relative" id="services">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-soft-light"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16 reveal">
<span className="text-brand-500 text-xs font-semibold tracking-widest uppercase">Ecosystem</span>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mt-2">Operational Modules</h2>
<p className="text-slate-400 mt-4 max-w-2xl mx-auto font-light text-sm">
                    Our capabilities span the entire spectrum of automotive and logistical needs, categorized by our internal service codes.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative p-8 bg-slate-950 border border-slate-800 hover:border-brand-500/30 rounded-xl transition-all duration-300 hover:-translate-y-2 reveal">
<div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
<div className="flex items-start justify-between mb-6">
<div className="p-3 bg-slate-900 rounded-lg border border-slate-800 group-hover:border-brand-500/50 transition-colors">
<iconify-icon className="text-2xl text-white" icon="solar:truck-linear"></iconify-icon>
</div>
<span className="text-[10px] font-mono text-slate-500 border border-slate-800 px-2 py-1 rounded">MOD 49.4</span>
</div>
<h3 className="text-lg font-medium text-white mb-2 group-hover:text-brand-400 transition-colors">Freight Logistics</h3>
<p className="text-sm text-slate-400 font-light">Domestic and international cargo orchestration. Door-to-door precision.</p>
</div>

<div className="group relative p-8 bg-slate-950 border border-slate-800 hover:border-brand-500/30 rounded-xl transition-all duration-300 hover:-translate-y-2 reveal delay-75">
<div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
<div className="flex items-start justify-between mb-6">
<div className="p-3 bg-slate-900 rounded-lg border border-slate-800 group-hover:border-brand-500/50 transition-colors">
<iconify-icon className="text-2xl text-white" icon="solar:car-linear"></iconify-icon>
</div>
<span className="text-[10px] font-mono text-slate-500 border border-slate-800 px-2 py-1 rounded">MOD 45.1</span>
</div>
<h3 className="text-lg font-medium text-white mb-2 group-hover:text-brand-400 transition-colors">Fleet Acquisition</h3>
<p className="text-sm text-slate-400 font-light">Wholesale and retail sourcing of premium executive and utility vehicles.</p>
</div>

<div className="group relative p-8 bg-slate-950 border border-slate-800 hover:border-brand-500/30 rounded-xl transition-all duration-300 hover:-translate-y-2 reveal delay-100">
<div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
<div className="flex items-start justify-between mb-6">
<div className="p-3 bg-slate-900 rounded-lg border border-slate-800 group-hover:border-brand-500/50 transition-colors">
<iconify-icon className="text-2xl text-white" icon="solar:bicycling-linear"></iconify-icon>
</div>
<span className="text-[10px] font-mono text-slate-500 border border-slate-800 px-2 py-1 rounded">MOD 45.4</span>
</div>
<h3 className="text-lg font-medium text-white mb-2 group-hover:text-brand-400 transition-colors">Rapid Courier Units</h3>
<p className="text-sm text-slate-400 font-light">Motorcycle sales and servicing for high-speed urban delivery networks.</p>
</div>

<div className="group relative p-8 bg-slate-950 border border-slate-800 hover:border-brand-500/30 rounded-xl transition-all duration-300 hover:-translate-y-2 reveal">
<div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
<div className="flex items-start justify-between mb-6">
<div className="p-3 bg-slate-900 rounded-lg border border-slate-800 group-hover:border-brand-500/50 transition-colors">
<iconify-icon className="text-2xl text-white" icon="solar:key-square-linear"></iconify-icon>
</div>
<span className="text-[10px] font-mono text-slate-500 border border-slate-800 px-2 py-1 rounded">MOD 77.1</span>
</div>
<h3 className="text-lg font-medium text-white mb-2 group-hover:text-brand-400 transition-colors">Leasing Solutions</h3>
<p className="text-sm text-slate-400 font-light">Flexible short and long-term rental agreements for corporate clients.</p>
</div>

<div className="group relative p-8 bg-slate-950 border border-slate-800 hover:border-brand-500/30 rounded-xl transition-all duration-300 hover:-translate-y-2 reveal delay-75">
<div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
<div className="flex items-start justify-between mb-6">
<div className="p-3 bg-slate-900 rounded-lg border border-slate-800 group-hover:border-brand-500/50 transition-colors">
<iconify-icon className="text-2xl text-white" icon="solar:clipboard-check-linear"></iconify-icon>
</div>
<span className="text-[10px] font-mono text-slate-500 border border-slate-800 px-2 py-1 rounded">MOD 52.2</span>
</div>
<h3 className="text-lg font-medium text-white mb-2 group-hover:text-brand-400 transition-colors">Supply Chain Mgmt</h3>
<p className="text-sm text-slate-400 font-light">Auxiliary transport services, warehousing, and inventory flow control.</p>
</div>

<div className="group relative p-8 bg-slate-950 border border-slate-800 hover:border-brand-500/30 rounded-xl transition-all duration-300 hover:-translate-y-2 reveal delay-100">
<div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
<div className="flex items-start justify-between mb-6">
<div className="p-3 bg-slate-900 rounded-lg border border-slate-800 group-hover:border-brand-500/50 transition-colors">
<iconify-icon className="text-2xl text-white" icon="solar:presentation-graph-linear"></iconify-icon>
</div>
<span className="text-[10px] font-mono text-slate-500 border border-slate-800 px-2 py-1 rounded">MOD 70.2</span>
</div>
<h3 className="text-lg font-medium text-white mb-2 group-hover:text-brand-400 transition-colors">Strategic Consulting</h3>
<p className="text-sm text-slate-400 font-light">High-level advisory for fleet optimization and business mobility growth.</p>
</div>
</div>
</div>
</section>

<section className="bg-slate-950 pt-24 pb-24" id="fleet">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 reveal">
<div className="">
<span className="text-brand-500 text-xs font-semibold tracking-widest uppercase">Inventory</span>
<h2 className="text-3xl font-medium text-white mt-2">Active Fleet</h2>
</div>

<div className="flex flex-wrap gap-2" id="fleet-filters">
<button className="filter-btn active px-4 py-2 rounded-full border border-brand-500/50 bg-brand-500/10 text-white text-xs font-medium hover:bg-brand-500 hover:border-brand-500 transition-all" data-filter="all">All Units</button>
<button className="filter-btn px-4 py-2 rounded-full border border-slate-800 bg-slate-900 text-slate-400 text-xs font-medium hover:text-white hover:border-slate-600 transition-all" data-filter="cars">Executive</button>
<button className="filter-btn px-4 py-2 rounded-full border border-slate-800 bg-slate-900 text-slate-400 text-xs font-medium hover:text-white hover:border-slate-600 transition-all" data-filter="vans">Cargo</button>
<button className="filter-btn px-4 py-2 rounded-full border border-slate-800 bg-slate-900 text-slate-400 text-xs font-medium hover:text-white hover:border-slate-600 transition-all" data-filter="moto">Rapid</button>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-6 gap-y-6" id="fleet-grid">

<div className="group relative h-72 rounded-xl overflow-hidden cursor-pointer fleet-item" data-category="vans">
<img alt="Van" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1688619104878-1f5bc6293785?w_1600w.jpg"/>
<div className="bg-center bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-0 bg-[url(https://images.unsplash.com/photo-1688619104878-1f5bc6293785?w=800&amp;q=80)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
<p className="text-xs text-brand-400 font-medium mb-1">Cargo / Haulage</p>
<h3 className="text-xl font-medium text-white">Sprinter Logistics Unit</h3>
</div>
</div>

<div className="group relative h-72 rounded-xl overflow-hidden cursor-pointer fleet-item" data-category="cars">
<img alt="Car Rental" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1734940521891-28105a314670?q=80&amp;w=2787&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-0 bg-[url(https://images.unsplash.com/photo-1734940521891-28105a314670?w=800&amp;q=80)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
<p className="text-xs text-brand-400 font-medium mb-1">Executive Lease</p>
<h3 className="text-xl font-medium text-white">Premium Sedan Class</h3>
</div>
</div>

<div className="group relative h-72 rounded-xl overflow-hidden cursor-pointer fleet-item" data-category="moto">
<img alt="Motorcycle" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="bg-center bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-0 bg-[url(https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=800&amp;q=80)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
<p className="text-xs text-brand-400 font-medium mb-1">Urban Rapid</p>
<h3 className="text-xl font-medium text-white">Interceptor Moto</h3>
</div>
</div>

<div className="group relative h-72 rounded-xl overflow-hidden cursor-pointer fleet-item" data-category="vans">
<img alt="Logistic" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?_1600w.jpg"/>
<div className="bg-center bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-0 bg-[url(https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&amp;q=80)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
<p className="text-xs text-brand-400 font-medium mb-1">Global Logistics</p>
<h3 className="text-xl font-medium text-white">Heavy Freight Operations</h3>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 border-y border-slate-800">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
<div className="p-4 reveal">
<div className="text-4xl font-semibold text-white mb-2">11</div>
<div className="text-sm text-slate-500 uppercase tracking-wide">Years Active</div>
</div>
<div className="p-4 reveal delay-75">
<div className="text-4xl font-semibold text-white mb-2">250+</div>
<div className="text-sm text-slate-500 uppercase tracking-wide">Fleet Units</div>
</div>
<div className="p-4 reveal delay-100">
<div className="text-4xl font-semibold text-white mb-2">1.5k</div>
<div className="text-sm text-slate-500 uppercase tracking-wide">Annual Sorties</div>
</div>
<div className="p-4 reveal delay-150">
<div className="text-4xl font-semibold text-white mb-2">24/7</div>
<div className="text-sm text-slate-500 uppercase tracking-wide">Command Center</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-12">
<h2 className="text-2xl font-medium text-white text-center">Trusted Partners</h2>
</div>
<div className="flex gap-6 animate-scroll justify-center flex-wrap md:flex-nowrap px-6">

<div className="min-w-[300px] p-6 bg-slate-900 border border-slate-800 rounded-xl hover:shadow-xl transition-shadow reveal">
<div className="flex items-center gap-1 text-yellow-500 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-400 text-sm mb-4">"The fleet acquisition process was flawless. Vehicles arrived pre-configured for our specific logistical needs."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center text-xs font-bold text-white">MC</div>
<div>
<p className="text-white text-xs font-medium">Marcus Cole</p>
<p className="text-slate-600 text-[10px]">Director, Apex Logistics</p>
</div>
</div>
</div>

<div className="min-w-[300px] p-6 bg-slate-900 border border-slate-800 rounded-xl hover:shadow-xl transition-shadow reveal delay-100">
<div className="flex items-center gap-1 text-yellow-500 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-400 text-sm mb-4">"Novus Dynamics handles our entire urban courier network. Their reliability is unmatched."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center text-xs font-bold text-white">EL</div>
<div>
<p className="text-white text-xs font-medium">Elena Ross</p>
<p className="text-slate-600 text-[10px]">Ops Lead, UrbanFlow</p>
</div>
</div>
</div>

<div className="min-w-[300px] p-6 bg-slate-900 border border-slate-800 rounded-xl hover:shadow-xl transition-shadow reveal delay-200">
<div className="flex items-center gap-1 text-yellow-500 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-400 text-sm mb-4">"Strategic consulting that actually works. They optimized our routes and reduced overhead by 15%."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center text-xs font-bold text-white">TD</div>
<div>
<p className="text-white text-xs font-medium">TechDrive Inc.</p>
<p className="text-slate-600 text-[10px]">Enterprise Partner</p>
</div>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-24 relative" id="contact">

<div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-brand-900/10 rounded-full blur-[120px]"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">
<div className="space-y-8 reveal">
<div className="">
<span className="text-brand-500 text-xs font-semibold tracking-widest uppercase">Contact</span>
<h2 className="text-4xl font-medium text-white mt-2">Initiate Partnership</h2>
<p className="text-slate-400 mt-4 text-sm font-light">
                            Fill out the form or reach our command center directly. We are ready to deploy solutions for transport, sales, and leasing.
                        </p>
</div>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded bg-slate-900 border border-slate-800 flex items-center justify-center text-brand-500">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-slate-500 text-xs uppercase">Direct Line</p>
<a className="text-white text-lg hover:text-brand-400 transition-colors" href="tel:+48000000000">+44 20 7123 4567</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded bg-slate-900 border border-slate-800 flex items-center justify-center text-brand-500">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-slate-500 text-xs uppercase">Email</p>
<a className="text-white text-lg hover:text-brand-400 transition-colors" href="mailto:contact@novus-dynamics.com">contact@novus-dynamics.com</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded bg-slate-900 border border-slate-800 flex items-center justify-center text-brand-500">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-slate-500 text-xs uppercase">Headquarters</p>
<p className="text-white text-lg">London, United Kingdom</p>
</div>
</div>
</div>
</div>

<div className="reveal delay-100 bg-slate-900 border-slate-800 border rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-2xl">
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs text-slate-400">First Name</label>
<input className="w-full bg-slate-950 border border-slate-700 rounded p-3 text-white text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-slate-700" placeholder="John" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs text-slate-400">Last Name</label>
<input className="w-full bg-slate-950 border border-slate-700 rounded p-3 text-white text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-slate-700" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs text-slate-400">Department</label>
<select className="w-full bg-slate-950 border border-slate-700 rounded p-3 text-white text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all">
<option>Freight Logistics</option>
<option>Fleet Acquisition</option>
<option>Leasing</option>
<option>Consulting</option>
<option>Other</option>
</select>
</div>
<div className="space-y-2">
<label className="text-xs text-slate-400">Message</label>
<textarea className="w-full bg-slate-950 border border-slate-700 rounded p-3 text-white text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-slate-700" placeholder="Describe your operational needs..." rows="4"></textarea>
</div>
<button className="w-full py-4 rounded bg-white text-slate-950 font-medium text-sm hover:bg-brand-50 transition-colors flex items-center justify-center gap-2 group" type="button">
                            Transmit Inquiry
                            <iconify-icon className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:plain-3-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<div className="w-full h-64 bg-slate-900 relative grayscale opacity-80 hover:grayscale-0 transition-all duration-700">
<iframe allowfullscreen="" className="filter contrast-125 brightness-75 invert-[0.9] hue-rotate-180" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.7281066703!2d-0.241681206425042!3d51.5287718408761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2suk!4v1600000000000!5m2!1sen!2suk" style={{border: '0'}} width="100%"></iframe>
</div>

<footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<h3 className="text-white font-medium tracking-tight text-lg mb-4">NOVUS DYNAMICS</h3>
<p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                        Professional partner in global logistics, automotive trade, and fleet management. We build trust through precision and scalability.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Navigation</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-brand-400 transition-colors" href="#about">Mission</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#services">Solutions</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#fleet">Inventory</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Service Codes</h4>
<ul className="space-y-2 text-xs text-slate-600 font-mono">
<li>MOD 49.4 - Logistics</li>
<li>MOD 45.1 - Acquisition</li>
<li>MOD 45.4 - Rapid Courier</li>
</ul>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
<p>© 2023 Novus Dynamics. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
