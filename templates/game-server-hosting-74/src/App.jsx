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



        // Simple logic to move the toggle visual dot
        const toggleCheckbox = document.querySelector('.toggle-checkbox');
        const dot = document.querySelector('.dot');
        
        toggleCheckbox.addEventListener('change', () => {
            if (toggleCheckbox.checked) {
                dot.style.transform = 'translateX(100%)';
            } else {
                dot.style.transform = 'translateX(0)';
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-violet-500/20 group-hover:shadow-violet-500/40 transition-all duration-300">
<span className="iconify" data-icon="lucide:zap" data-strokeWidth="2.5" data-width="16"></span>
</div>
<span className="text-white font-semibold tracking-tighter text-xl">AURA</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium hover:text-white transition-colors" href="#">Minecraft</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#">VPS</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#">Web</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#">Dedicated</a>
</div>

<div className="hidden md:flex items-center gap-4">
<a className="text-sm font-medium hover:text-white transition-colors" href="#">Login</a>
<a className="px-4 py-2 text-sm font-medium text-white bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all" href="#">
                    Get Started
                </a>
</div>

<button className="md:hidden text-slate-300 hover:text-white">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 bg-grid pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
</div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-violet-600/20 rounded-full blur-[120px] pointer-events-none opacity-50 mix-blend-screen"></div>
<div className="relative max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-8">
<span className="flex h-2 w-2 rounded-full bg-violet-400 animate-pulse"></span>
                New: Ryzen 9 7950X Nodes Available
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight mb-6 leading-[1.1]">
                Deploy servers <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-white">at lightspeed.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Premium Minecraft hosting, scalable VPS, and dedicated power. 
                Built on next-gen infrastructure for 99.99% uptime and zero lag.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white text-slate-950 font-medium hover:bg-slate-200 transition-colors flex items-center justify-center gap-2" href="#pricing">
<span className="iconify" data-icon="lucide:rocket" data-width="18"></span>
                    Start Hosting
                </a>
<a className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-white font-medium hover:bg-slate-800 transition-colors flex items-center justify-center gap-2" href="#">
                    View Locations
                    <span className="iconify" data-icon="lucide:map-pin" data-width="18"></span>
</a>
</div>

<div className="mt-20 pt-10 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8">
<div>
<div className="text-3xl font-semibold text-white tracking-tight">24/7</div>
<div className="text-sm text-slate-500 mt-1">Expert Support</div>
</div>
<div>
<div className="text-3xl font-semibold text-white tracking-tight">10Tbps</div>
<div className="text-sm text-slate-500 mt-1">DDoS Mitigation</div>
</div>
<div>
<div className="text-3xl font-semibold text-white tracking-tight">15+</div>
<div className="text-sm text-slate-500 mt-1">Global Locations</div>
</div>
<div>
<div className="text-3xl font-semibold text-white tracking-tight">&lt;1ms</div>
<div className="text-sm text-slate-500 mt-1">Network Latency</div>
</div>
</div>
</div>
</header>

<section className="py-24 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Infrastructure for every need</h2>
<p className="text-slate-400 max-w-xl">Whether you are running a small SMP or a massive network, we have the hardware to back you up.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-3xl bg-slate-900/40 border border-white/5 hover:border-violet-500/30 transition-all duration-500 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-slate-800 border border-white/5 flex items-center justify-center text-violet-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:gamepad-2" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-white mb-3">Minecraft Hosting</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6">
                            High-performance servers with one-click modpack installers. Powered by Ryzen 9 processors.
                        </p>
<ul className="space-y-2 mb-8">
<li className="flex items-center gap-2 text-xs text-slate-300">
<span className="iconify text-violet-400" data-icon="lucide:check" data-width="14"></span> Unlimited Slots
                            </li>
<li className="flex items-center gap-2 text-xs text-slate-300">
<span className="iconify text-violet-400" data-icon="lucide:check" data-width="14"></span> NVMe Storage
                            </li>
<li className="flex items-center gap-2 text-xs text-slate-300">
<span className="iconify text-violet-400" data-icon="lucide:check" data-width="14"></span> Automated Backups
                            </li>
</ul>
<a className="inline-flex items-center text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors group-hover:translate-x-1 duration-300" href="#">
                            Configure Server <span className="iconify ml-1" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>
</div>

<div className="group relative p-8 rounded-3xl bg-slate-900/40 border border-white/5 hover:border-blue-500/30 transition-all duration-500 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-slate-800 border border-white/5 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:server" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-white mb-3">Cloud VPS</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6">
                            Full root access KVM VPS. Scalable resources for bots, databases, or custom game servers.
                        </p>
<ul className="space-y-2 mb-8">
<li className="flex items-center gap-2 text-xs text-slate-300">
<span className="iconify text-blue-400" data-icon="lucide:check" data-width="14"></span> Full Root Access
                            </li>
<li className="flex items-center gap-2 text-xs text-slate-300">
<span className="iconify text-blue-400" data-icon="lucide:check" data-width="14"></span> Dedicated IP
                            </li>
<li className="flex items-center gap-2 text-xs text-slate-300">
<span className="iconify text-blue-400" data-icon="lucide:check" data-width="14"></span> Instant Deployment
                            </li>
</ul>
<a className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors group-hover:translate-x-1 duration-300" href="#">
                            View Plans <span className="iconify ml-1" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>
</div>

<div className="group relative p-8 rounded-3xl bg-slate-900/40 border border-white/5 hover:border-emerald-500/30 transition-all duration-500 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-slate-800 border border-white/5 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:globe" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-white mb-3">Web Hosting</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6">
                            Lightning fast cPanel hosting for your community forums, stores, and landing pages.
                        </p>
<ul className="space-y-2 mb-8">
<li className="flex items-center gap-2 text-xs text-slate-300">
<span className="iconify text-emerald-400" data-icon="lucide:check" data-width="14"></span> Free SSL Certificates
                            </li>
<li className="flex items-center gap-2 text-xs text-slate-300">
<span className="iconify text-emerald-400" data-icon="lucide:check" data-width="14"></span> One-Click Installs
                            </li>
<li className="flex items-center gap-2 text-xs text-slate-300">
<span className="iconify text-emerald-400" data-icon="lucide:check" data-width="14"></span> LiteSpeed Web Server
                            </li>
</ul>
<a className="inline-flex items-center text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors group-hover:translate-x-1 duration-300" href="#">
                            Get Online <span className="iconify ml-1" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-slate-900/20">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium mb-6">
<span className="iconify" data-icon="lucide:shield-check" data-width="14"></span>
                        Security First
                    </div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">
                        Unmatched protection <br/> against attacks.
                    </h2>
<p className="text-slate-400 mb-8 leading-relaxed">
                        Don't let skids ruin your playtime. Our custom 12Tbps Anycast network filters traffic instantly, ensuring your server stays online even during massive volumetric attacks.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 border border-white/5">
<span className="iconify text-white" data-icon="lucide:cpu" data-width="20"></span>
</div>
<div>
<h4 className="text-white font-medium mb-1">Layer 3/4 &amp; 7 Protection</h4>
<p className="text-xs text-slate-500 leading-relaxed">Comprehensive filtering for TCP/UDP floods and HTTP requests.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 border border-white/5">
<span className="iconify text-white" data-icon="lucide:activity" data-width="20"></span>
</div>
<div>
<h4 className="text-white font-medium mb-1">Real-time Mitigation</h4>
<p className="text-xs text-slate-500 leading-relaxed">Attacks are detected and scrubbed in under 10 seconds.</p>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full"></div>
<div className="relative bg-slate-950 border border-slate-800 rounded-2xl p-6 shadow-2xl">
<div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
<span className="text-sm font-medium text-white">Live Traffic Analysis</span>
<div className="flex gap-2">
<span className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></span>
<span className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></span>
<span className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></span>
</div>
</div>

<div className="h-40 flex items-end justify-between gap-2 px-2">
<div className="w-full bg-slate-800/50 rounded-t-sm h-[30%]"></div>
<div className="w-full bg-slate-800/50 rounded-t-sm h-[50%]"></div>
<div className="w-full bg-slate-800/50 rounded-t-sm h-[40%]"></div>
<div className="w-full bg-red-500/20 border-t border-red-500/50 rounded-t-sm h-[80%] relative group">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-red-500 text-white text-[10px] px-2 py-1 rounded">Attack Blocked</div>
</div>
<div className="w-full bg-slate-800/50 rounded-t-sm h-[45%]"></div>
<div className="w-full bg-slate-800/50 rounded-t-sm h-[35%]"></div>
<div className="w-full bg-slate-800/50 rounded-t-sm h-[60%]"></div>
</div>
<div className="mt-4 flex justify-between text-xs text-slate-500 font-mono">
<span>10:00</span>
<span>10:05</span>
<span>10:10</span>
<span>10:15</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Transparent Pricing</h2>
<p className="text-slate-400 mb-8">Choose the perfect plan for your community.</p>

<div className="flex items-center justify-center gap-3">
<span className="text-sm font-medium text-white">Monthly</span>
<label className="flex items-center cursor-pointer relative" htmlFor="billing-toggle">
<input className="sr-only toggle-checkbox" id="billing-toggle" type="checkbox"/>
<div className="w-11 h-6 bg-slate-800 rounded-full border border-slate-700 toggle-label transition-colors"></div>
<div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition transform duration-200 ease-in-out"></div>
</label>
<span className="text-sm font-medium text-slate-500">Yearly <span className="text-violet-400 text-xs ml-1">-20%</span></span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="p-8 rounded-3xl bg-slate-900/30 border border-white/5 flex flex-col">
<div className="mb-6">
<h3 className="text-lg font-medium text-white">Starter</h3>
<p className="text-xs text-slate-500 mt-1">Perfect for friends &amp; family.</p>
</div>
<div className="mb-6">
<span className="text-4xl font-semibold text-white tracking-tight">$4</span>
<span className="text-sm text-slate-500">/mo</span>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-300">
<span className="iconify text-slate-600" data-icon="lucide:check-circle-2" data-width="16"></span> 2GB RAM
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<span className="iconify text-slate-600" data-icon="lucide:check-circle-2" data-width="16"></span> Unlimited Slots
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<span className="iconify text-slate-600" data-icon="lucide:check-circle-2" data-width="16"></span> Standard Support
                        </li>
</ul>
<a className="w-full py-2.5 rounded-lg border border-slate-700 text-white text-sm font-medium hover:bg-slate-800 hover:border-slate-600 transition-all text-center" href="#">
                        Select Plan
                    </a>
</div>

<div className="relative p-8 rounded-3xl bg-slate-900/80 border border-violet-500/50 shadow-2xl shadow-violet-500/10 flex flex-col transform md:-translate-y-4">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-violet-600 rounded-full text-[10px] font-bold text-white uppercase tracking-wider">Most Popular</div>
<div className="mb-6">
<h3 className="text-lg font-medium text-white">Professional</h3>
<p className="text-xs text-violet-200/60 mt-1">For growing communities.</p>
</div>
<div className="mb-6">
<span className="text-4xl font-semibold text-white tracking-tight">$12</span>
<span className="text-sm text-slate-500">/mo</span>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white">
<span className="iconify text-violet-400" data-icon="lucide:check-circle-2" data-width="16"></span> 6GB RAM
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<span className="iconify text-violet-400" data-icon="lucide:check-circle-2" data-width="16"></span> NVMe Storage
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<span className="iconify text-violet-400" data-icon="lucide:check-circle-2" data-width="16"></span> Priority Support
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<span className="iconify text-violet-400" data-icon="lucide:check-circle-2" data-width="16"></span> Free Dedicated IP
                        </li>
</ul>
<a className="w-full py-2.5 rounded-lg bg-violet-600 text-white text-sm font-medium hover:bg-violet-500 transition-all text-center shadow-lg shadow-violet-500/25" href="#">
                        Select Plan
                    </a>
</div>

<div className="p-8 rounded-3xl bg-slate-900/30 border border-white/5 flex flex-col">
<div className="mb-6">
<h3 className="text-lg font-medium text-white">Extreme</h3>
<p className="text-xs text-slate-500 mt-1">Maximum performance.</p>
</div>
<div className="mb-6">
<span className="text-4xl font-semibold text-white tracking-tight">$24</span>
<span className="text-sm text-slate-500">/mo</span>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-300">
<span className="iconify text-slate-600" data-icon="lucide:check-circle-2" data-width="16"></span> 12GB RAM
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<span className="iconify text-slate-600" data-icon="lucide:check-circle-2" data-width="16"></span> Dedicated Threads
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<span className="iconify text-slate-600" data-icon="lucide:check-circle-2" data-width="16"></span> 24/7 VIP Support
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<span className="iconify text-slate-600" data-icon="lucide:check-circle-2" data-width="16"></span> Off-site Backups
                        </li>
</ul>
<a className="w-full py-2.5 rounded-lg border border-slate-700 text-white text-sm font-medium hover:bg-slate-800 hover:border-slate-600 transition-all text-center" href="#">
                        Select Plan
                    </a>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-slate-950 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="w-6 h-6 rounded bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:zap" data-strokeWidth="3" data-width="12"></span>
</div>
<span className="text-white font-semibold tracking-tighter text-lg">AURA</span>
</a>
<p className="text-sm text-slate-500 max-w-xs mb-6">
                        Next-generation hosting infrastructure designed for gaming performance and reliability.
                    </p>
<div className="flex gap-4">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="18"></span></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:github" data-width="18"></span></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:discord" data-width="18"></span></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Services</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-violet-400 transition-colors" href="#">Minecraft Hosting</a></li>
<li><a className="hover:text-violet-400 transition-colors" href="#">Game VPS</a></li>
<li><a className="hover:text-violet-400 transition-colors" href="#">Dedicated Servers</a></li>
<li><a className="hover:text-violet-400 transition-colors" href="#">Web Hosting</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Company</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-violet-400 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-violet-400 transition-colors" href="#">Data Centers</a></li>
<li><a className="hover:text-violet-400 transition-colors" href="#">Status</a></li>
<li><a className="hover:text-violet-400 transition-colors" href="#">Partners</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Legal</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-violet-400 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-violet-400 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-violet-400 transition-colors" href="#">Refund Policy</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-600">© 2024 Aura Hosting LLC. All rights reserved.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="text-xs text-emerald-500 font-medium">All Systems Operational</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
