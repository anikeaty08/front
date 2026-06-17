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



        function updateEstimates(value) {
            // Format budget
            const formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                maximumFractionDigits: 0
            });
            document.getElementById('budget-display').innerText = formatter.format(value);

            // Calculate mock metrics
            const baseReach = 340; 
            const reachLow = Math.floor(value * baseReach);
            const reachHigh = Math.floor(value * baseReach * 1.4);
            
            const kFormatter = (num) => {
                return Math.abs(num) > 999999 
                    ? Math.sign(num)*((Math.abs(num)/1000000).toFixed(1)) + 'M'
                    : Math.sign(num)*((Math.abs(num)/1000).toFixed(0)) + 'k';
            }

            document.getElementById('reach-display').innerText = `${kFormatter(reachLow)} - ${kFormatter(reachHigh)}`;
            
            // Update impressions and clicks with bar width animation
            const impressions = value * 960;
            const clicks = value * 18;
            
            document.getElementById('imp-display').innerText = kFormatter(impressions);
            document.getElementById('click-display').innerText = new Intl.NumberFormat('en-US').format(clicks);

            // Simple width calculation for visual bar effect
            const maxBudget = 10000;
            const percentage = (value / maxBudget) * 100;
            
            // Update bar widths relative to budget (visual trick)
            document.getElementById('imp-bar').style.width = Math.min(percentage * 0.8 + 20, 100) + '%';
            document.getElementById('click-bar').style.width = Math.min(percentage * 0.6 + 15, 100) + '%';
        }

        // Scroll Reveal Observer
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        // Optional: stop observing once revealed
                        // observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach(el => {
                observer.observe(el);
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer">
<div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
<div className="w-2 h-2 bg-black rounded-full"></div>
</div>
<span className="text-white font-medium tracking-tighter text-base">ADVEX</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#">Platform</a>
<a className="hover:text-white transition-colors" href="#">Solutions</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
<a className="hover:text-white transition-colors" href="#">Developers</a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium hover:text-white transition-colors hidden sm:block" href="#">Log in</a>
<button className="bg-white text-black text-xs font-medium px-3 py-1.5 rounded-full hover:bg-neutral-200 transition-all hover:scale-105 active:scale-95">
                    Start Campaign
                </button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex flex-col justify-center lg:block lg:min-h-0">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-600/10 rounded-[100%] blur-[100px] pointer-events-none animate-blob"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center max-w-3xl mx-auto mb-16">
<div className="animate-enter inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8 hover:bg-white/10 transition-colors cursor-default">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-indigo-500"></span>
</span>
<span className="text-xs font-medium text-indigo-200">Advex AI 2.0 is now live</span>
</div>
<h1 className="animate-enter delay-100 text-5xl md:text-7xl font-medium text-white tracking-tight mb-6 leading-[1.1]">
                    Target precision.<br/>
<span className="text-neutral-500">Scale without limits.</span>
</h1>
<p className="animate-enter delay-200 text-lg text-neutral-400 mb-8 max-w-xl mx-auto font-light leading-relaxed">
                    Deploy intelligent ad campaigns across the open web with real-time bidding and privacy-first targeting infrastructure.
                </p>
<div className="animate-enter delay-300 flex items-center justify-center gap-4">
<button className="group bg-white text-black h-10 px-6 rounded-full text-sm font-medium hover:bg-neutral-200 transition-all flex items-center gap-2 hover:pl-5 hover:pr-7">
                        Create Account <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<button className="text-neutral-300 h-10 px-6 rounded-full text-sm font-medium hover:text-white border border-white/10 hover:bg-white/5 transition-colors">
                        View Documentation
                    </button>
</div>
</div>

<div className="max-w-5xl mx-auto glass-panel rounded-xl overflow-hidden shadow-2xl shadow-indigo-900/20 animate-enter delay-500 transform transition-transform hover:scale-[1.005] duration-500">

<div className="border-b border-white/10 bg-black/40 px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="text-xs font-mono text-neutral-500 flex items-center gap-2">
<span className="iconify" data-icon="lucide:lock" data-width="12"></span> advex.app/campaigns/new
                    </div>
</div>
<div className="grid md:grid-cols-12 min-h-[500px]">

<div className="md:col-span-3 border-r border-white/10 bg-black/20 p-4 hidden md:block">
<div className="space-y-1">
<div className="px-3 py-2 bg-white/5 rounded-md text-white text-xs font-medium flex items-center gap-3 border-l-2 border-indigo-500">
<span className="iconify" data-icon="lucide:layout-grid" data-width="16"></span> Overview
                            </div>
<div className="group px-3 py-2 text-neutral-500 hover:text-white text-xs font-medium flex items-center gap-3 transition-colors cursor-pointer">
<span className="iconify group-hover:text-indigo-400 transition-colors" data-icon="lucide:bar-chart-2" data-width="16"></span> Analytics
                            </div>
<div className="group px-3 py-2 text-neutral-500 hover:text-white text-xs font-medium flex items-center gap-3 transition-colors cursor-pointer">
<span className="iconify group-hover:text-indigo-400 transition-colors" data-icon="lucide:users" data-width="16"></span> Audiences
                            </div>
<div className="group px-3 py-2 text-neutral-500 hover:text-white text-xs font-medium flex items-center gap-3 transition-colors cursor-pointer">
<span className="iconify group-hover:text-indigo-400 transition-colors" data-icon="lucide:credit-card" data-width="16"></span> Billing
                            </div>
</div>
<div className="mt-8 text-xs font-medium text-neutral-600 uppercase tracking-widest px-3 mb-2">Active Campaigns</div>
<div className="space-y-3 px-3">
<div className="flex items-center gap-2 text-neutral-400 text-xs group cursor-pointer">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 group-hover:scale-125 transition-transform"></div>
<span className="group-hover:text-white transition-colors">Q4 Growth</span>
</div>
<div className="flex items-center gap-2 text-neutral-400 text-xs group cursor-pointer">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500 group-hover:scale-125 transition-transform"></div>
<span className="group-hover:text-white transition-colors">Retargeting</span>
</div>
</div>
</div>

<div className="md:col-span-9 p-8 bg-[#080808]">
<div className="flex justify-between items-end mb-8">
<div>
<h3 className="text-white font-medium text-lg">New Campaign</h3>
<p className="text-neutral-500 text-sm mt-1">Configure your outreach parameters.</p>
</div>
<div className="flex items-center gap-3">
<span className="text-xs text-neutral-500">Auto-save on</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-neutral-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600 border border-neutral-700"></div>
</label>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="space-y-6">

<div>
<label className="block text-xs font-medium text-neutral-400 mb-2">Campaign Name</label>
<input className="w-full bg-neutral-900 border border-neutral-800 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500/50 transition-colors placeholder-neutral-600 focus:ring-1 focus:ring-indigo-500/20" type="text" value="Summer Launch 2024"/>
</div>

<div>
<label className="block text-xs font-medium text-neutral-400 mb-2">Objective</label>
<div className="relative group">
<div className="w-full bg-neutral-900 border border-neutral-800 rounded-md px-3 py-2 text-sm text-white flex justify-between items-center cursor-pointer hover:border-neutral-700 transition-colors">
<div className="flex items-center gap-2">
<span className="iconify text-indigo-400" data-icon="lucide:zap" data-width="14"></span>
                                                Conversion Optimization
                                            </div>
<span className="iconify text-neutral-500" data-icon="lucide:chevron-down" data-width="14"></span>
</div>
</div>
</div>

<div className="pt-2">
<div className="flex justify-between items-center mb-4">
<label className="text-xs font-medium text-neutral-400">Daily Budget</label>
<span className="text-sm font-medium text-white transition-all duration-300" id="budget-display">$2,500</span>
</div>
<input className="w-full" id="budget-slider" max="10000" min="100" oninput="updateEstimates(this.value)" step="100" type="range" value="2500"/>
<div className="flex justify-between mt-2 text-[10px] text-neutral-600 font-mono">
<span>$100</span>
<span>$10k</span>
</div>
</div>
</div>

<div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-6 flex flex-col justify-between relative overflow-hidden group hover:border-neutral-700 transition-colors duration-300">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform group-hover:scale-110">
<span className="iconify text-indigo-500" data-icon="lucide:activity" data-width="64"></span>
</div>
<div>
<div className="text-xs text-neutral-500 uppercase tracking-wider font-medium mb-1">Estimated Reach</div>
<div className="text-3xl font-semibold text-white tracking-tight transition-all duration-300" id="reach-display">850k - 1.2M</div>
<div className="text-xs text-emerald-500 mt-2 flex items-center gap-1">
<span className="iconify" data-icon="lucide:trending-up" data-width="12"></span>
                                        +12% vs market avg
                                    </div>
</div>
<div className="mt-8 space-y-3">
<div className="flex justify-between text-xs">
<span className="text-neutral-500">Impressions</span>
<span className="text-neutral-300 font-medium transition-all duration-300" id="imp-display">2.4M</span>
</div>
<div className="w-full bg-neutral-800 h-1 rounded-full overflow-hidden">
<div className="bg-indigo-500 h-full w-[70%] transition-all duration-1000 ease-out" id="imp-bar"></div>
</div>
<div className="flex justify-between text-xs">
<span className="text-neutral-500">Est. Clicks</span>
<span className="text-neutral-300 font-medium transition-all duration-300" id="click-display">45,000</span>
</div>
<div className="w-full bg-neutral-800 h-1 rounded-full overflow-hidden">
<div className="bg-purple-500 h-full w-[45%] transition-all duration-1000 ease-out" id="click-bar"></div>
</div>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-neutral-800 flex justify-end gap-3">
<button className="px-4 py-2 text-xs font-medium text-neutral-400 hover:text-white transition-colors">Cancel</button>
<button className="group bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-md text-xs font-medium transition-all shadow-[0_0_15px_rgba(79,70,229,0.3)] hover:shadow-[0_0_20px_rgba(79,70,229,0.5)] active:scale-95">
                                Launch Campaign
                            </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 reveal">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Infrastructure for growth</h2>
<p className="text-neutral-400 max-w-xl">Everything you need to convert traffic into revenue, built on a unified platform.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="reveal group p-6 rounded-xl border border-white/5 bg-neutral-900/20 hover:bg-neutral-900/40 transition-all duration-300 hover:border-white/10 hover:-translate-y-1 hover-card-gradient relative overflow-hidden">
<div className="w-10 h-10 rounded-lg bg-neutral-800/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-white/5">
<span className="iconify text-white" data-icon="lucide:target" data-width="20"></span>
</div>
<h3 className="text-white font-medium text-sm mb-2">Micro-Targeting</h3>
<p className="text-neutral-500 text-sm leading-relaxed">Pinpoint audiences based on behavioral signals, context, and first-party data integration.</p>
</div>

<div className="reveal group p-6 rounded-xl border border-white/5 bg-neutral-900/20 hover:bg-neutral-900/40 transition-all duration-300 hover:border-white/10 hover:-translate-y-1 hover-card-gradient relative overflow-hidden" style={{transitionDelay: '100ms'}}>
<div className="w-10 h-10 rounded-lg bg-neutral-800/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-white/5">
<span className="iconify text-white" data-icon="lucide:cpu" data-width="20"></span>
</div>
<h3 className="text-white font-medium text-sm mb-2">Real-time Bidding</h3>
<p className="text-neutral-500 text-sm leading-relaxed">Algorithmic bidding engine that adjusts to market conditions in milliseconds to optimize ROI.</p>
</div>

<div className="reveal group p-6 rounded-xl border border-white/5 bg-neutral-900/20 hover:bg-neutral-900/40 transition-all duration-300 hover:border-white/10 hover:-translate-y-1 hover-card-gradient relative overflow-hidden" style={{transitionDelay: '200ms'}}>
<div className="w-10 h-10 rounded-lg bg-neutral-800/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-white/5">
<span className="iconify text-white" data-icon="lucide:shield-check" data-width="20"></span>
</div>
<h3 className="text-white font-medium text-sm mb-2">Fraud Protection</h3>
<p className="text-neutral-500 text-sm leading-relaxed">Enterprise-grade bot detection ensures your budget is spent on real humans, not scripts.</p>
</div>

<div className="reveal group p-6 rounded-xl border border-white/5 bg-neutral-900/20 hover:bg-neutral-900/40 transition-all duration-300 hover:border-white/10 hover:-translate-y-1 hover-card-gradient relative overflow-hidden">
<div className="w-10 h-10 rounded-lg bg-neutral-800/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-white/5">
<span className="iconify text-white" data-icon="lucide:globe" data-width="20"></span>
</div>
<h3 className="text-white font-medium text-sm mb-2">Global CDN</h3>
<p className="text-neutral-500 text-sm leading-relaxed">Deliver creative assets from edge locations worldwide for instant load times.</p>
</div>

<div className="reveal md:col-span-2 group p-6 rounded-xl border border-white/5 bg-neutral-900/20 hover:bg-neutral-900/40 transition-all duration-300 hover:border-white/10 hover:-translate-y-1 hover-card-gradient relative overflow-hidden flex flex-col justify-center" style={{transitionDelay: '100ms'}}>
<div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-indigo-900/10 to-transparent pointer-events-none group-hover:from-indigo-900/20 transition-colors duration-500"></div>
<div className="w-10 h-10 rounded-lg bg-neutral-800/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-white/5 relative z-10">
<span className="iconify text-white" data-icon="lucide:workflow" data-width="20"></span>
</div>
<h3 className="text-white font-medium text-sm mb-2 relative z-10">Automated Workflows</h3>
<p className="text-neutral-500 text-sm leading-relaxed max-w-md relative z-10">Set rules for budget allocation, creative rotation, and pausing underperforming assets automatically. No manual intervention required.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#080808]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="text-3xl font-medium text-white tracking-tight mb-6">Transparent pricing.<br/>No hidden fees.</h2>
<div className="space-y-6">
<div className="flex items-start gap-4 group">
<div className="mt-1 transition-transform group-hover:scale-110 duration-300">
<span className="iconify text-indigo-500" data-icon="lucide:check-circle-2" data-width="20"></span>
</div>
<div>
<h4 className="text-white text-sm font-medium">Pay for performance</h4>
<p className="text-neutral-500 text-sm mt-1">Only pay when users take action. Our CPA model aligns our incentives with yours.</p>
</div>
</div>
<div className="flex items-start gap-4 group">
<div className="mt-1 transition-transform group-hover:scale-110 duration-300">
<span className="iconify text-indigo-500" data-icon="lucide:check-circle-2" data-width="20"></span>
</div>
<div>
<h4 className="text-white text-sm font-medium">Real-time Attribution</h4>
<p className="text-neutral-500 text-sm mt-1">See exactly which dollar drove which sale. Granular reporting down to the pixel.</p>
</div>
</div>
</div>
<div className="mt-8">
<a className="text-white text-sm font-medium border-b border-white pb-0.5 hover:text-indigo-400 hover:border-indigo-400 transition-colors" href="#">View full pricing details</a>
</div>
</div>
<div className="reveal bg-neutral-900 border border-white/5 rounded-2xl p-8 relative transform transition-transform hover:scale-[1.01]" style={{transitionDelay: '200ms'}}>
<div className="absolute -top-4 -right-4 bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-full shadow-lg animate-pulse">Enterprise Ready</div>
<div className="flex flex-col gap-8">
<div className="group">
<div className="text-neutral-500 text-xs uppercase tracking-wider mb-1 group-hover:text-indigo-400 transition-colors">Ad Requests / Sec</div>
<div className="text-4xl font-mono text-white tracking-tighter group-hover:translate-x-1 transition-transform">142,093</div>
</div>
<div className="h-px bg-white/10 w-full"></div>
<div className="group">
<div className="text-neutral-500 text-xs uppercase tracking-wider mb-1 group-hover:text-indigo-400 transition-colors">Avg. ROI</div>
<div className="text-4xl font-mono text-white tracking-tighter group-hover:translate-x-1 transition-transform">485%</div>
</div>
<div className="h-px bg-white/10 w-full"></div>
<div className="group">
<div className="text-neutral-500 text-xs uppercase tracking-wider mb-1 group-hover:text-indigo-400 transition-colors">Active Publishers</div>
<div className="text-4xl font-mono text-white tracking-tighter group-hover:translate-x-1 transition-transform">50k+</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 pt-16 pb-12 bg-black">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
<div className="col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-black rounded-full"></div>
</div>
<span className="text-white font-medium tracking-tighter text-sm">ADVEX</span>
</div>
<p className="text-neutral-500 text-sm max-w-xs">
                        The operating system for modern digital advertising. Built for speed, privacy, and scale.
                    </p>
</div>
<div>
<h4 className="text-white font-medium text-xs mb-4">Product</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-200" href="#">Exchange</a></li>
<li><a className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-200" href="#">DSP</a></li>
<li><a className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-200" href="#">DMP</a></li>
<li><a className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-200" href="#">Creative Studio</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-xs mb-4">Company</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-200" href="#">About</a></li>
<li><a className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-200" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-200" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-200" href="#">Press</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-xs mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-200" href="#">Privacy</a></li>
<li><a className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-200" href="#">Terms</a></li>
<li><a className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-200" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
<div className="text-xs text-neutral-600">© 2024 Advex Inc. All rights reserved.</div>
<div className="flex gap-4 mt-4 md:mt-0">
<span className="iconify text-neutral-500 hover:text-white cursor-pointer transition-colors hover:scale-110 transform duration-200" data-icon="lucide:twitter" data-width="16"></span>
<span className="iconify text-neutral-500 hover:text-white cursor-pointer transition-colors hover:scale-110 transform duration-200" data-icon="lucide:github" data-width="16"></span>
<span className="iconify text-neutral-500 hover:text-white cursor-pointer transition-colors hover:scale-110 transform duration-200" data-icon="lucide:linkedin" data-width="16"></span>
</div>
</div>
</div>
</footer>



    </>
  );
}
