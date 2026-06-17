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
slate: {
850: '#151f2e',
900: '#0f172a',
950: '#020617',
}
},
animation: {
'float': 'float 10s ease-in-out infinite',
'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0) scale(1)' },
'50%': { transform: 'translateY(-20px) scale(1.05)' },
}
}
}
}
}



        // Spotlight Effect Logic
        document.addEventListener('DOMContentLoaded', () => {
            const cards = document.querySelectorAll('.spotlight-card');
            
            cards.forEach(card => {
                card.onmousemove = e => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    card.style.setProperty('--mouse-x', `${x}px`);
                    card.style.setProperty('--mouse-y', `${y}px`);
                }
            });

            // Scroll Reveal Observer
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target); // Only animate once
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal-up');
            revealElements.forEach(el => observer.observe(el));
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
      

<nav className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white text-lg font-medium tracking-tight flex items-center gap-2 group" href="#">
<span className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-white border border-white/10 group-hover:bg-white/20 transition-colors">
                    T
                </span>
                TITAN GATE <span className="text-slate-500">EQUITY</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-normal">
<a className="hover:text-white transition-colors duration-300" href="#philosophy">Philosophy</a>
<a className="hover:text-white transition-colors duration-300" href="#strategies">Strategies</a>
<a className="hover:text-white transition-colors duration-300" href="#approach">Approach</a>
<a className="hover:text-white transition-colors duration-300" href="#insights">Insights</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm hover:text-white transition-colors duration-300" href="#">Client Login</a>
<a className="text-xs font-medium bg-white text-slate-950 px-4 py-2 rounded-full hover:bg-slate-200 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]" href="#">
                    Contact Us
                </a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 subtle-grid pointer-events-none"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none animate-float"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="reveal-up inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 mb-8 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Accepting Qualified Investors
            </div>
<h1 className="reveal-up delay-100 text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight mb-8 max-w-5xl mx-auto leading-[1.1]">
                Preserving wealth across <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">generations.</span>
</h1>
<p className="reveal-up delay-200 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed mb-10">
                We provide institutional-grade private equity strategies tailored for ultra-high-net-worth individuals and family offices. Discipline, integrity, and long-term vision.
            </p>
<div className="reveal-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3 bg-white text-slate-950 rounded-full text-sm font-medium hover:bg-slate-200 transition-all flex items-center justify-center gap-2 group hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                    View Investment Strategies
                    <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-8 py-3 bg-white/5 border border-white/10 text-white rounded-full text-sm font-medium hover:bg-white/10 transition-all hover:border-white/20">
                    Our Philosophy
                </button>
</div>
</div>
</header>

<section className="border-y border-white/5 bg-slate-900/50 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="reveal-up text-center md:text-left">
<div className="text-3xl font-medium text-white tracking-tight mb-1">$500M+</div>
<div className="text-xs text-slate-500 uppercase tracking-widest font-medium">Assets Under Mgmt</div>
</div>
<div className="reveal-up delay-100 text-center md:text-left">
<div className="text-3xl font-medium text-white tracking-tight mb-1">15+</div>
<div className="text-xs text-slate-500 uppercase tracking-widest font-medium">Years Experience</div>
</div>
<div className="reveal-up delay-200 text-center md:text-left">
<div className="text-3xl font-medium text-white tracking-tight mb-1">Global</div>
<div className="text-xs text-slate-500 uppercase tracking-widest font-medium">Investment Reach</div>
</div>
<div className="reveal-up delay-300 text-center md:text-left">
<div className="text-3xl font-medium text-white tracking-tight mb-1">Top 1%</div>
<div className="text-xs text-slate-500 uppercase tracking-widest font-medium">Performance Tier</div>
</div>
</div>
</section>

<section className="py-24 relative" id="philosophy">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
<div className="reveal-up">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">
                        Navigating complexity with <span className="text-slate-500">precision and prudence.</span>
</h2>
<p className="text-slate-400 leading-relaxed font-light mb-8">
                        At Titan Gate Equity, we believe that true wealth preservation requires more than just participation in the markets; it requires a defensive yet opportunistic approach to asset allocation. We focus on asymmetric risk-return profiles.
                    </p>
<div className="space-y-6">
<div className="flex gap-4 group">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
<iconify-icon className="text-white text-lg group-hover:scale-110 transition-transform duration-300" icon="lucide:shield-check" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-white font-medium mb-1">Capital Preservation First</h3>
<p className="text-sm text-slate-500">Our primary mandate is to protect principal through rigorous due diligence and risk structuring.</p>
</div>
</div>
<div className="flex gap-4 group">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
<iconify-icon className="text-white text-lg group-hover:scale-110 transition-transform duration-300" icon="lucide:trending-up" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-white font-medium mb-1">Compounding Growth</h3>
<p className="text-sm text-slate-500">We target consistent, compounding returns over long time horizons rather than short-term volatility.</p>
</div>
</div>
<div className="flex gap-4 group">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
<iconify-icon className="text-white text-lg group-hover:scale-110 transition-transform duration-300" icon="lucide:users" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-white font-medium mb-1">Aligned Interests</h3>
<p className="text-sm text-slate-500">We invest alongside our partners. Our capital is committed to every deal we syndicate.</p>
</div>
</div>
</div>
</div>

<div className="reveal-up delay-200 relative h-full min-h-[400px] w-full bg-gradient-to-br from-slate-900 to-slate-950 border border-white/5 rounded-2xl overflow-hidden p-8 flex items-center justify-center group spotlight-card">
<div className="spotlight-border"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent)]"></div>

<div className="grid grid-cols-2 gap-4 w-full max-w-sm relative z-10">
<div className="h-32 bg-white/5 rounded-lg border border-white/5 backdrop-blur-sm group-hover:bg-white/10 transition-all duration-500 relative overflow-hidden group-hover:-translate-y-1">
<div className="absolute bottom-4 left-4 right-4 h-1 bg-emerald-500/20 rounded-full overflow-hidden">
<div className="h-full w-[0%] bg-emerald-500 rounded-full transition-all duration-1000 ease-out group-hover:w-[70%]"></div>
</div>
</div>
<div className="h-32 bg-white/5 rounded-lg border border-white/5 backdrop-blur-sm group-hover:bg-white/10 transition-all duration-500 delay-75 flex items-center justify-center group-hover:-translate-y-1">
<iconify-icon className="text-4xl text-white/20 group-hover:text-emerald-400 transition-colors duration-500" icon="lucide:bar-chart-2" strokeWidth="1.5"></iconify-icon>
</div>
<div className="h-32 bg-white/5 rounded-lg border border-white/5 backdrop-blur-sm group-hover:bg-white/10 transition-all duration-500 delay-100 flex items-center justify-center col-span-2 group-hover:-translate-y-1">
<div className="flex items-center gap-8 text-white/20">
<iconify-icon className="text-2xl group-hover:text-indigo-400 transition-colors duration-500 delay-75" icon="lucide:globe" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-2xl group-hover:text-indigo-400 transition-colors duration-500 delay-150" icon="lucide:landmark" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-2xl group-hover:text-indigo-400 transition-colors duration-500 delay-200" icon="lucide:briefcase" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900/20 border-t border-white/5" id="strategies">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 reveal-up">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Investment Strategies</h2>
<p className="text-slate-400 font-light max-w-xl">
                        Diverse exposure across asset classes to ensure robust portfolio construction.
                    </p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm text-white hover:text-slate-300 transition-colors mt-4 md:mt-0 group" href="#">
                    Explore all funds <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="reveal-up group spotlight-card p-8 rounded-xl bg-slate-950 border border-white/5 relative">
<div className="spotlight-border"></div>
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity transform group-hover:scale-110 duration-700">
<iconify-icon className="text-6xl text-slate-500" icon="lucide:building-2" strokeWidth="1"></iconify-icon>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 border border-indigo-500/20 group-hover:bg-indigo-500/20 transition-colors">
<iconify-icon className="text-xl" icon="lucide:building" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Real Estate Private Equity</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6">
                            Acquisition and development of high-yield commercial and multi-family properties in emerging markets.
                        </p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-xs text-slate-500">
<iconify-icon className="text-emerald-500" icon="lucide:check"></iconify-icon> Value-Add Opportunities
                            </li>
<li className="flex items-center gap-2 text-xs text-slate-500">
<iconify-icon className="text-emerald-500" icon="lucide:check"></iconify-icon> Tax-Efficient Structures
                            </li>
</ul>
<a className="text-sm text-white font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                            Learn more <iconify-icon icon="lucide:chevron-right" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>

<div className="reveal-up delay-100 group spotlight-card p-8 rounded-xl bg-slate-950 border border-white/5 relative">
<div className="spotlight-border"></div>
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity transform group-hover:scale-110 duration-700">
<iconify-icon className="text-6xl text-slate-500" icon="lucide:line-chart" strokeWidth="1"></iconify-icon>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 mb-6 border border-amber-500/20 group-hover:bg-amber-500/20 transition-colors">
<iconify-icon className="text-xl" icon="lucide:pie-chart" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Private Credit</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6">
                            Direct lending solutions providing liquidity to established middle-market companies with strong cash flows.
                        </p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-xs text-slate-500">
<iconify-icon className="text-emerald-500" icon="lucide:check"></iconify-icon> Senior Secured Debt
                            </li>
<li className="flex items-center gap-2 text-xs text-slate-500">
<iconify-icon className="text-emerald-500" icon="lucide:check"></iconify-icon> Quarterly Distributions
                            </li>
</ul>
<a className="text-sm text-white font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                            Learn more <iconify-icon icon="lucide:chevron-right" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>

<div className="reveal-up delay-200 group spotlight-card p-8 rounded-xl bg-slate-950 border border-white/5 relative">
<div className="spotlight-border"></div>
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity transform group-hover:scale-110 duration-700">
<iconify-icon className="text-6xl text-slate-500" icon="lucide:rocket" strokeWidth="1"></iconify-icon>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
<iconify-icon className="text-xl" icon="lucide:sprout" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Venture &amp; Growth</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6">
                            Strategic equity investments in disruptive technologies and scalable business models at early-growth stages.
                        </p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-xs text-slate-500">
<iconify-icon className="text-emerald-500" icon="lucide:check"></iconify-icon> Technology &amp; Healthcare
                            </li>
<li className="flex items-center gap-2 text-xs text-slate-500">
<iconify-icon className="text-emerald-500" icon="lucide:check"></iconify-icon> Operational Support
                            </li>
</ul>
<a className="text-sm text-white font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                            Learn more <iconify-icon icon="lucide:chevron-right" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="reveal-up text-2xl font-medium text-white tracking-tight mb-12">Built on a foundation of integrity</h2>
<div className="reveal-up delay-100 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
<div className="bg-slate-950 p-8 flex flex-col items-center justify-center gap-3 group hover:bg-slate-900 transition-colors cursor-default">
<iconify-icon className="text-2xl text-slate-500 group-hover:text-emerald-400 transition-colors duration-300" icon="lucide:file-check" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-slate-400 group-hover:text-white transition-colors">Audited Financials</span>
</div>
<div className="bg-slate-950 p-8 flex flex-col items-center justify-center gap-3 group hover:bg-slate-900 transition-colors cursor-default">
<iconify-icon className="text-2xl text-slate-500 group-hover:text-emerald-400 transition-colors duration-300" icon="lucide:lock" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-slate-400 group-hover:text-white transition-colors">Secure Custody</span>
</div>
<div className="bg-slate-950 p-8 flex flex-col items-center justify-center gap-3 group hover:bg-slate-900 transition-colors cursor-default">
<iconify-icon className="text-2xl text-slate-500 group-hover:text-emerald-400 transition-colors duration-300" icon="lucide:search" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-slate-400 group-hover:text-white transition-colors">Transparent Reporting</span>
</div>
<div className="bg-slate-950 p-8 flex flex-col items-center justify-center gap-3 group hover:bg-slate-900 transition-colors cursor-default">
<iconify-icon className="text-2xl text-slate-500 group-hover:text-emerald-400 transition-colors duration-300" icon="lucide:users-2" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-slate-400 group-hover:text-white transition-colors">Dedicated Advisory</span>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-4xl mx-auto px-6 reveal-up">
<div className="relative rounded-2xl bg-gradient-to-b from-white/[0.08] to-transparent border border-white/5 p-12 text-center overflow-hidden">
<div className="absolute inset-0 bg-slate-950/50"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px] animate-pulse-slow"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Partner with Titan Gate</h2>
<p className="text-slate-400 font-light mb-8 max-w-lg mx-auto">
                        Access exclusive opportunities and begin your journey towards generational wealth preservation.
                    </p>
<form className="max-w-md mx-auto space-y-4 text-left">
<div>
<label className="sr-only" htmlFor="email">Email address</label>
<div className="flex gap-2">
<input className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all" id="email" placeholder="Enter your email address" type="email"/>
<button className="bg-white text-slate-950 px-6 py-3 rounded-lg text-sm font-medium hover:bg-slate-200 transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] whitespace-nowrap" type="button">
                                    Request Access
                                </button>
</div>
</div>
<p className="text-xs text-slate-600 text-center">
                            By clicking "Request Access", you agree to our Terms of Service.
                        </p>
</form>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-slate-950 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
<div className="lg:col-span-2">
<a className="text-white text-base font-medium tracking-tight flex items-center gap-2 mb-6 group" href="#">
<span className="w-6 h-6 rounded bg-white/10 flex items-center justify-center text-white text-xs border border-white/10 group-hover:bg-white/20 transition-colors">T</span>
                        TITAN GATE
                    </a>
<p className="text-sm text-slate-500 leading-relaxed max-w-xs mb-6">
                        Titan Gate Equity is a premier private equity firm dedicated to preserving and growing wealth for institutional and private clients globally.
                    </p>
<div className="flex gap-4">
<a className="text-slate-500 hover:text-white transition-colors hover:scale-110 transform" href="#"><iconify-icon icon="lucide:twitter" width="18"></iconify-icon></a>
<a className="text-slate-500 hover:text-white transition-colors hover:scale-110 transform" href="#"><iconify-icon icon="lucide:linkedin" width="18"></iconify-icon></a>
<a className="text-slate-500 hover:text-white transition-colors hover:scale-110 transform" href="#"><iconify-icon icon="lucide:mail" width="18"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Firm</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-white transition-colors hover:translate-x-1 inline-block" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors hover:translate-x-1 inline-block" href="#">Team</a></li>
<li><a className="hover:text-white transition-colors hover:translate-x-1 inline-block" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors hover:translate-x-1 inline-block" href="#">Press</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Strategies</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-white transition-colors hover:translate-x-1 inline-block" href="#">Real Estate</a></li>
<li><a className="hover:text-white transition-colors hover:translate-x-1 inline-block" href="#">Private Credit</a></li>
<li><a className="hover:text-white transition-colors hover:translate-x-1 inline-block" href="#">Venture</a></li>
<li><a className="hover:text-white transition-colors hover:translate-x-1 inline-block" href="#">Infrastructure</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-white transition-colors hover:translate-x-1 inline-block" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors hover:translate-x-1 inline-block" href="#">Terms of Service</a></li>
<li><a className="hover:text-white transition-colors hover:translate-x-1 inline-block" href="#">Disclosures</a></li>
<li><a className="hover:text-white transition-colors hover:translate-x-1 inline-block" href="#">Client Portal</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-600">
                    © 2024 Titan Gate Equity. All rights reserved.
                </p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-xs text-slate-500">Systems Operational</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
