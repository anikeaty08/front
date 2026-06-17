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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/[0.03] blur-[120px] rounded-full pointer-events-none -z-10"></div>

<header className="fixed top-0 w-full z-50 border-b border-white/[0.05] bg-[#0a0a0a]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="font-semibold tracking-tighter text-lg flex items-center gap-2" href="#">
<div className="w-6 h-6 rounded bg-white text-black flex items-center justify-center text-xs">N</div>
                NEXUS
            </a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#">Platform</a>
<a className="hover:text-white transition-colors" href="#">Solutions</a>
<a className="hover:text-white transition-colors" href="#">Customers</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#">Log in</a>
<a className="bg-white text-black hover:bg-neutral-200 transition-colors text-sm font-medium px-4 py-2 rounded-full" href="#">
                    Start free trial
                </a>
</div>
</div>
</header>

<main className="flex-grow pt-32 pb-24">

<section className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
<a className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-neutral-300 mb-8 hover:bg-white/10 transition-colors" href="#">
<span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
                Introducing Autonomous Ad Buying v2.0
                <iconify-icon height="14" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter max-w-4xl text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 leading-tight">
                Scale your growth with intelligent automation.
            </h1>
<p className="mt-6 text-lg md:text-xl text-neutral-400 max-w-2xl font-normal leading-relaxed">
                Replace manual bidding and A/B testing with predictive AI models. Generate hyper-personalized campaigns that optimize in real-time, driving unprecedented ROI.
            </p>
<div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto bg-white text-black hover:bg-neutral-200 transition-colors text-sm font-medium px-6 py-3 rounded-full flex items-center justify-center gap-2" href="#">
                    Deploy AI Agents
                    <iconify-icon height="18" icon="solar:magic-stick-3-linear" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto bg-transparent border border-white/10 text-white hover:bg-white/5 transition-colors text-sm font-medium px-6 py-3 rounded-full flex items-center justify-center gap-2" href="#">
                    View Demo
                </a>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 mt-20 md:mt-32">
<div className="rounded-2xl border border-white/10 bg-[#111] p-2 md:p-4 shadow-2xl relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10"></div>
<div className="bg-[#0a0a0a] rounded-xl border border-white/5 overflow-hidden flex flex-col md:flex-row h-auto md:h-[400px]">

<div className="w-full md:w-64 border-r border-white/5 p-4 flex flex-col gap-6 hidden md:flex">
<div className="flex flex-col gap-2">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Campaigns</span>
<div className="flex items-center justify-between text-sm px-2 py-1.5 bg-white/5 rounded-md text-white">
<div className="flex items-center gap-2"><iconify-icon className="text-neutral-400" height="16" icon="solar:rocket-linear" width="16"></iconify-icon> Q4 Growth</div>
<div className="w-2 h-2 rounded-full bg-green-500"></div>
</div>
<div className="flex items-center justify-between text-sm px-2 py-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer">
<div className="flex items-center gap-2"><iconify-icon height="16" icon="solar:users-group-rounded-linear" width="16"></iconify-icon> Retargeting</div>
</div>
</div>

<div className="mt-auto bg-white/5 rounded-lg p-3">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-neutral-300">Auto-Bidding AI</span>
<div className="w-8 h-4 bg-white text-black rounded-full flex items-center p-0.5 cursor-pointer">
<div className="w-3 h-3 bg-black rounded-full shadow-sm translate-x-4"></div>
</div>
</div>
<p className="text-xs text-neutral-500">AI is managing daily spend.</p>
</div>
</div>

<div className="flex-1 p-6 flex flex-col">
<div className="flex items-center justify-between mb-8">
<div>
<h3 className="text-lg font-semibold tracking-tight text-white">Performance Overview</h3>
<p className="text-xs text-neutral-400">Real-time data from autonomous campaigns.</p>
</div>
<div className="flex items-center gap-2 text-xs font-medium bg-white/5 border border-white/10 rounded-full px-3 py-1">
<iconify-icon height="14" icon="solar:calendar-linear" width="14"></iconify-icon>
                                Last 7 Days
                            </div>
</div>

<div className="flex-1 flex items-end justify-between gap-2 md:gap-4 relative mt-4">

<div className="absolute inset-0 flex flex-col justify-between pointer-events-none border-t border-white/5 border-dashed">
<div className="w-full border-b border-white/5 border-dashed h-full"></div>
<div className="w-full border-b border-white/5 border-dashed h-full"></div>
<div className="w-full border-b border-white/5 border-dashed h-full"></div>
</div>

<div className="w-full bg-white/10 rounded-t-sm h-[30%] relative group hover:bg-white/20 transition-colors z-10"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">12k</div></div>
<div className="w-full bg-white/10 rounded-t-sm h-[45%] relative group hover:bg-white/20 transition-colors z-10"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">18k</div></div>
<div className="w-full bg-white/20 rounded-t-sm h-[80%] relative group hover:bg-white/30 transition-colors z-10"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">32k</div></div>
<div className="w-full bg-white/10 rounded-t-sm h-[60%] relative group hover:bg-white/20 transition-colors z-10"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">24k</div></div>
<div className="w-full bg-white text-black rounded-t-sm h-[100%] relative group z-10 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-medium px-2 py-1 rounded shadow-lg whitespace-nowrap">42k Conversions</div>
</div>
<div className="w-full bg-white/10 rounded-t-sm h-[75%] relative group hover:bg-white/20 transition-colors z-10"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">30k</div></div>
<div className="w-full bg-white/10 rounded-t-sm h-[50%] relative group hover:bg-white/20 transition-colors z-10"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">20k</div></div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mt-32">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">A complete operating system for growth.</h2>
<p className="text-neutral-400 text-sm md:text-base max-w-2xl mx-auto">Everything you need to acquire, convert, and retain customers, powered by proprietary machine learning models.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-[#111] border border-white/5 rounded-2xl p-8 hover:bg-[#151515] hover:border-white/10 transition-all duration-300 group relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-[50px] rounded-full group-hover:bg-blue-500/10 transition-colors"></div>
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
<iconify-icon height="20" icon="solar:target-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-white mb-2">Predictive Targeting</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Our AI analyzes millions of data points to identify high-intent audiences before they even search for your product.</p>
</div>

<div className="bg-[#111] border border-white/5 rounded-2xl p-8 hover:bg-[#151515] hover:border-white/10 transition-all duration-300 group relative overflow-hidden md:col-span-2">
<div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/5 blur-[80px] rounded-full group-hover:bg-purple-500/10 transition-colors"></div>
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
<iconify-icon height="20" icon="solar:pen-new-square-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-white mb-2">Generative Creative Engine</h3>
<p className="text-sm text-neutral-400 leading-relaxed max-w-md mb-6">Instantly generate thousands of ad variations. The system automatically tests copy, imagery, and formats, doubling down on what converts.</p>

<div className="flex items-center gap-3">
<div className="h-8 w-24 bg-white/5 border border-white/10 rounded-md flex items-center justify-center text-xs text-neutral-500">Variant A</div>
<iconify-icon className="text-neutral-600" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
<div className="h-8 w-24 bg-white/5 border border-white/10 rounded-md flex items-center justify-center text-xs text-neutral-500">Variant B</div>
<iconify-icon className="text-neutral-600" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
<div className="h-8 w-24 bg-white border border-white text-black rounded-md flex items-center justify-center text-xs font-medium shadow-[0_0_15px_rgba(255,255,255,0.15)]">Winner</div>
</div>
</div>

<div className="bg-[#111] border border-white/5 rounded-2xl p-8 hover:bg-[#151515] hover:border-white/10 transition-all duration-300 group relative overflow-hidden md:col-span-2">
<div className="absolute top-1/2 left-0 w-48 h-48 bg-emerald-500/5 blur-[60px] rounded-full group-hover:bg-emerald-500/10 transition-colors"></div>
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
<iconify-icon height="20" icon="solar:chart-square-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-white mb-2">Autonomous Budget Allocation</h3>
<p className="text-sm text-neutral-400 leading-relaxed max-w-md">Stop shifting budgets manually. Nexus AI fluidly moves spend across Meta, Google, TikTok, and LinkedIn based on real-time performance metrics.</p>
</div>

<div className="bg-[#111] border border-white/5 rounded-2xl p-8 hover:bg-[#151515] hover:border-white/10 transition-all duration-300 group relative overflow-hidden">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
<iconify-icon height="20" icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-white mb-2">Privacy First</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Built for the cookieless future. Server-side tracking and probabilistic modeling ensure accurate attribution without compromising user privacy.</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mt-32 border-y border-white/5 py-16">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/5">
<div className="flex flex-col items-center">
<span className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-2">43%</span>
<span className="text-xs text-neutral-500 font-medium uppercase tracking-widest">Avg. CPA Reduction</span>
</div>
<div className="flex flex-col items-center">
<span className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-2">2.8x</span>
<span className="text-xs text-neutral-500 font-medium uppercase tracking-widest">ROAS Increase</span>
</div>
<div className="flex flex-col items-center">
<span className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-2">10k+</span>
<span className="text-xs text-neutral-500 font-medium uppercase tracking-widest">Models Trained</span>
</div>
<div className="flex flex-col items-center">
<span className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-2">24/7</span>
<span className="text-xs text-neutral-500 font-medium uppercase tracking-widest">Optimization</span>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 mt-32 text-center">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-6">Ready to let AI drive your growth?</h2>
<p className="text-neutral-400 text-sm md:text-base mb-10">Join forward-thinking brands that have replaced manual ad ops with autonomous intelligence.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-white text-black hover:bg-neutral-200 transition-colors text-sm font-medium px-8 py-3 rounded-full" href="#">
                    Start 14-day free trial
                </a>
<a className="w-full sm:w-auto bg-transparent border border-white/10 text-white hover:bg-white/5 transition-colors text-sm font-medium px-8 py-3 rounded-full" href="#">
                    Talk to sales
                </a>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-[#0a0a0a] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
<div className="col-span-2">
<a className="font-semibold tracking-tighter text-lg flex items-center gap-2 mb-4" href="#">
<div className="w-5 h-5 rounded bg-white text-black flex items-center justify-center text-[10px]">N</div>
                        NEXUS
                    </a>
<p className="text-xs text-neutral-500 max-w-xs leading-relaxed">
                        The autonomous marketing engine. Stop managing campaigns and start managing growth.
                    </p>
</div>
<div>
<h4 className="text-xs font-medium text-white mb-4 uppercase tracking-widest">Product</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Features</a></li>
<li><a className="hover:text-white transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-white transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-white mb-4 uppercase tracking-widest">Company</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-white mb-4 uppercase tracking-widest">Legal</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-white transition-colors" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-neutral-600">
                    © 2023 Nexus AI Inc. All rights reserved.
                </p>
<div className="flex items-center gap-4 text-neutral-500">
<a className="hover:text-white transition-colors" href="#"><iconify-icon height="18" icon="solar:twitter-linear" width="18"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon height="18" icon="solar:linkedin-linear" width="18"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon height="18" icon="solar:github-linear" width="18"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
