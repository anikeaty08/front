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
      

<div className="fixed inset-0 z-[-1] pointer-events-none bg-grid opacity-30"></div>
<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-900/20 blur-[120px] rounded-full z-[-1]"></div>

<nav className="fixed top-0 w-full z-50 glass">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-white font-medium tracking-tighter text-lg flex items-center gap-2" href="#">
<span className="iconify text-orange-500" data-icon="lucide:box" data-width="20"></span>
                    POSTMAN
                </a>
<div className="hidden md:flex items-center gap-6 text-sm font-normal text-neutral-400">
<a className="hover:text-white transition-colors duration-200" href="#">Product</a>
<a className="hover:text-white transition-colors duration-200" href="#">Solutions</a>
<a className="hover:text-white transition-colors duration-200" href="#">Pricing</a>
<a className="hover:text-white transition-colors duration-200" href="#">Enterprise</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="text-sm text-neutral-400 hover:text-white transition-colors hidden sm:block" href="#">Log in</a>
<a className="group relative px-4 py-1.5 rounded-full bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-all overflow-hidden" href="#">
<span className="relative z-10">Get Started</span>
</a>
</div>
</div>
</nav>

<main className="relative pt-32 pb-20 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 animate-fade-in-up">
<span className="flex h-2 w-2 rounded-full bg-orange-500"></span>
<span className="text-xs font-medium text-neutral-300">New: AI Sequence Generator 2.0</span>
<span className="iconify text-neutral-500 ml-1" data-icon="lucide:arrow-right" data-width="12"></span>
</div>

<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
                Scale your outreach <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-100">without the spam.</span>
</h1>

<p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Postman is the intelligent infrastructure for high-volume email sending.
                Automate warmup, rotate inboxes, and land in the primary tab every time.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<button className="h-12 px-8 rounded-full bg-white text-black font-medium hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center gap-2">
                    Start Sending Free
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<button className="h-12 px-8 rounded-full border border-white/10 text-neutral-300 hover:bg-white/5 transition-colors font-medium flex items-center gap-2">
<span className="iconify" data-icon="lucide:play-circle" data-width="16"></span>
                    View Demo
                </button>
</div>

<div className="relative max-w-5xl mx-auto">

<div className="absolute -inset-1 bg-gradient-to-b from-orange-500/20 to-transparent opacity-50 blur-2xl rounded-xl"></div>
<div className="relative rounded-xl border border-white/10 bg-[#0a0a0a] shadow-2xl overflow-hidden shine-effect">

<div className="h-10 border-b border-white/5 flex items-center px-4 gap-2 bg-[#0a0a0a]">
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
<div className="ml-4 px-3 py-1 bg-neutral-900 rounded-md border border-white/5 text-[10px] text-neutral-500 font-mono">
                            postman.so/campaigns/active
                        </div>
</div>

<div className="grid grid-cols-12 h-[500px] text-left">

<div className="col-span-2 border-r border-white/5 p-4 hidden sm:block bg-[#080808]">
<div className="space-y-1">
<div className="p-2 rounded-md bg-white/5 text-neutral-200 text-xs font-medium flex items-center gap-2">
<span className="iconify" data-icon="lucide:inbox" data-width="14"></span> Inbox
                                </div>
<div className="p-2 rounded-md hover:bg-white/5 text-neutral-500 text-xs font-medium flex items-center gap-2 transition-colors">
<span className="iconify" data-icon="lucide:users" data-width="14"></span> Contacts
                                </div>
<div className="p-2 rounded-md hover:bg-white/5 text-neutral-500 text-xs font-medium flex items-center gap-2 transition-colors">
<span className="iconify" data-icon="lucide:bar-chart-2" data-width="14"></span> Analytics
                                </div>
<div className="p-2 rounded-md hover:bg-white/5 text-neutral-500 text-xs font-medium flex items-center gap-2 transition-colors">
<span className="iconify" data-icon="lucide:zap" data-width="14"></span> Automation
                                </div>
</div>
</div>

<div className="col-span-12 sm:col-span-10 p-6 sm:p-8">
<div className="flex justify-between items-end mb-8">
<div>
<p className="text-xs text-orange-500 font-medium mb-1">Live Campaign</p>
<h3 className="text-xl text-white font-medium tracking-tight">Q4 Outreach Sequence</h3>
</div>
<div className="flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-xs text-neutral-400">Sending now</span>
</div>
</div>

<div className="grid grid-cols-3 gap-4 mb-8">
<div className="p-4 rounded-lg border border-white/5 bg-white/[0.02]">
<p className="text-xs text-neutral-500 mb-1">Delivered</p>
<p className="text-2xl text-white font-medium tracking-tight">98.2%</p>
</div>
<div className="p-4 rounded-lg border border-white/5 bg-white/[0.02]">
<p className="text-xs text-neutral-500 mb-1">Open Rate</p>
<p className="text-2xl text-white font-medium tracking-tight">64.5%</p>
</div>
<div className="p-4 rounded-lg border border-white/5 bg-white/[0.02]">
<p className="text-xs text-neutral-500 mb-1">Reply Rate</p>
<p className="text-2xl text-white font-medium tracking-tight">12.8%</p>
</div>
</div>

<div className="h-48 w-full border border-white/5 bg-white/[0.01] rounded-lg flex items-end justify-between p-4 px-6 gap-2">
<div className="w-full bg-orange-500/20 rounded-t-sm h-[40%] relative group">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-neutral-800 text-[10px] px-2 py-1 rounded border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">124</div>
</div>
<div className="w-full bg-orange-500/30 rounded-t-sm h-[60%] relative group">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-neutral-800 text-[10px] px-2 py-1 rounded border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">256</div>
</div>
<div className="w-full bg-orange-500/40 rounded-t-sm h-[45%]"></div>
<div className="w-full bg-orange-500/30 rounded-t-sm h-[70%]"></div>
<div className="w-full bg-orange-500/50 rounded-t-sm h-[85%]"></div>
<div className="w-full bg-orange-500/60 rounded-t-sm h-[65%]"></div>
<div className="w-full bg-orange-500/70 rounded-t-sm h-[90%]"></div>
<div className="w-full bg-orange-500/80 rounded-t-sm h-[75%]"></div>
<div className="w-full bg-orange-500 rounded-t-sm h-[95%] shadow-[0_0_15px_rgba(249,115,22,0.5)]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-12 border-y border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-sm text-neutral-500 mb-8">Trusted by growth teams at top companies</p>
<div className="flex flex-wrap justify-center gap-12 grayscale opacity-50">

<div className="flex items-center gap-2 text-white font-semibold tracking-tighter text-lg"><span className="h-4 w-4 bg-white rounded-full"></span>ACME</div>
<div className="flex items-center gap-2 text-white font-semibold tracking-tighter text-lg"><span className="h-4 w-4 border-2 border-white rotate-45"></span>KINETIC</div>
<div className="flex items-center gap-2 text-white font-semibold tracking-tighter text-lg"><span className="h-4 w-4 bg-white rounded-sm"></span>LUMOS</div>
<div className="flex items-center gap-2 text-white font-semibold tracking-tighter text-lg"><span className="h-4 w-4 rounded-full border border-white"></span>ORBIT</div>
<div className="flex items-center gap-2 text-white font-semibold tracking-tighter text-lg"><span className="h-4 w-4 bg-white" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></span>VERTEX</div>
</div>
</div>
</section>

<section className="py-24 relative">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-center mb-4 text-white">Everything you need to send</h2>
<p className="text-neutral-400 text-center max-w-xl mx-auto mb-16 text-lg font-light">
                Powerful tools designed to maximize deliverability and engagement, all in one unified platform.
            </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 group relative p-8 rounded-2xl border border-white/10 bg-[#0a0a0a] overflow-hidden hover:border-white/20 transition-all duration-300">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-30 transition-opacity">
<span className="iconify w-32 h-32 text-orange-500" data-icon="lucide:sparkles"></span>
</div>
<div className="relative z-10">
<div className="h-10 w-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6 border border-orange-500/20">
<span className="iconify" data-icon="lucide:pen-tool" data-width="20"></span>
</div>
<h3 className="text-xl text-white font-medium mb-2">Generative Personalization</h3>
<p className="text-neutral-400 font-light mb-8 max-w-md">
                            Our AI analyzes your prospect's LinkedIn and website to craft unique first lines that triple reply rates.
                        </p>

<div className="bg-neutral-900 rounded-lg border border-white/5 p-4 max-w-md">
<div className="flex items-center gap-2 mb-3">
<span className="h-2 w-2 rounded-full bg-blue-500"></span>
<span className="text-[10px] uppercase tracking-wider text-neutral-500">AI Input</span>
</div>
<div className="space-y-2">
<div className="h-2 bg-neutral-800 rounded w-3/4 animate-pulse"></div>
<div className="h-2 bg-neutral-800 rounded w-full animate-pulse delay-75"></div>
<div className="h-2 bg-neutral-800 rounded w-1/2 animate-pulse delay-150"></div>
</div>
</div>
</div>
</div>

<div className="group relative p-8 rounded-2xl border border-white/10 bg-[#0a0a0a] overflow-hidden hover:border-white/20 transition-all duration-300">
<div className="relative z-10">
<div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6 border border-blue-500/20">
<span className="iconify" data-icon="lucide:refresh-ccw" data-width="20"></span>
</div>
<h3 className="text-xl text-white font-medium mb-2">Smart Rotation</h3>
<p className="text-neutral-400 font-light text-sm mb-6">
                            Automatically rotate between multiple sender identities to stay under spam radar.
                        </p>

<div className="flex items-center justify-between p-3 bg-neutral-900 rounded-lg border border-white/5 mb-2">
<span className="text-xs text-neutral-300">Auto-Rotation</span>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-neutral-700 checked:right-0 checked:border-blue-500" id="toggle1" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-neutral-800 cursor-pointer" htmlFor="toggle1"></label>
</div>
</div>
<div className="flex items-center justify-between p-3 bg-neutral-900 rounded-lg border border-white/5 opacity-50">
<span className="text-xs text-neutral-300">Warmup Mode</span>
<div className="w-8 h-4 rounded-full bg-neutral-800 border border-neutral-700"></div>
</div>
</div>
</div>

<div className="group relative p-8 rounded-2xl border border-white/10 bg-[#0a0a0a] overflow-hidden hover:border-white/20 transition-all duration-300">
<div className="relative z-10">
<div className="h-10 w-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 mb-6 border border-green-500/20">
<span className="iconify" data-icon="lucide:activity" data-width="20"></span>
</div>
<h3 className="text-xl text-white font-medium mb-2">Live Analytics</h3>
<p className="text-neutral-400 font-light text-sm mb-6">
                            Real-time tracking of opens, clicks, and replies with granular detail.
                        </p>
<div className="flex items-end justify-between h-20 px-2 gap-1">
<div className="w-full bg-green-900/40 rounded-t h-[40%]"></div>
<div className="w-full bg-green-900/40 rounded-t h-[70%]"></div>
<div className="w-full bg-green-500 rounded-t h-[100%] shadow-[0_0_10px_rgba(34,197,94,0.3)]"></div>
<div className="w-full bg-green-900/40 rounded-t h-[60%]"></div>
<div className="w-full bg-green-900/40 rounded-t h-[80%]"></div>
</div>
</div>
</div>

<div className="md:col-span-2 group relative p-8 rounded-2xl border border-white/10 bg-[#0a0a0a] overflow-hidden hover:border-white/20 transition-all duration-300">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-30 transition-opacity">
<span className="iconify w-32 h-32 text-purple-500" data-icon="lucide:globe"></span>
</div>
<div className="relative z-10">
<div className="h-10 w-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500 mb-6 border border-purple-500/20">
<span className="iconify" data-icon="lucide:server" data-width="20"></span>
</div>
<h3 className="text-xl text-white font-medium mb-2">Global Infrastructure</h3>
<p className="text-neutral-400 font-light mb-8 max-w-md">
                            Servers distributed across 12 regions to ensure lowest latency and highest deliverability.
                        </p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="flex items-center gap-2 p-2 rounded bg-white/5 border border-white/5">
<span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
<span className="text-xs text-neutral-300 font-mono">us-east-1</span>
</div>
<div className="flex items-center gap-2 p-2 rounded bg-white/5 border border-white/5">
<span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
<span className="text-xs text-neutral-300 font-mono">eu-west-2</span>
</div>
<div className="flex items-center gap-2 p-2 rounded bg-white/5 border border-white/5">
<span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
<span className="text-xs text-neutral-300 font-mono">ap-south-1</span>
</div>
<div className="flex items-center gap-2 p-2 rounded bg-white/5 border border-white/5">
<span className="h-1.5 w-1.5 rounded-full bg-yellow-500"></span>
<span className="text-xs text-neutral-300 font-mono">sa-east-1</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#080808] border-y border-white/5">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Configure your engine</h2>
<p className="text-neutral-400">Total control over your sending limits and speed.</p>
</div>
<div className="bg-[#0c0c0c] border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">

<div className="mb-10">
<div className="flex justify-between mb-4">
<label className="text-sm font-medium text-neutral-200">Daily Emails per Inbox</label>
<span className="text-sm font-mono text-orange-500">50</span>
</div>
<input className="w-full" max="100" min="10" type="range" value="50"/>
<div className="flex justify-between mt-2 text-[10px] text-neutral-600 font-mono uppercase">
<span>Conservative</span>
<span>Aggressive</span>
</div>
</div>

<div className="mb-10">
<div className="flex justify-between mb-4">
<label className="text-sm font-medium text-neutral-200">Warmup Duration</label>
<span className="text-sm font-mono text-orange-500">14 Days</span>
</div>
<input className="w-full" max="30" min="1" type="range" value="14"/>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<label className="flex items-start gap-3 p-4 rounded-lg border border-white/5 bg-white/[0.02] cursor-pointer hover:bg-white/[0.04] transition-colors">
<input checked="" className="mt-1 h-4 w-4 rounded border-neutral-700 bg-neutral-800 text-orange-500 focus:ring-orange-500 focus:ring-offset-black" type="checkbox"/>
<div>
<span className="block text-sm font-medium text-white">Spin Syntax</span>
<span className="block text-xs text-neutral-500 mt-1">Randomize sentence structures.</span>
</div>
</label>
<label className="flex items-start gap-3 p-4 rounded-lg border border-white/5 bg-white/[0.02] cursor-pointer hover:bg-white/[0.04] transition-colors">
<input className="mt-1 h-4 w-4 rounded border-neutral-700 bg-neutral-800 text-orange-500 focus:ring-orange-500 focus:ring-offset-black" type="checkbox"/>
<div>
<span className="block text-sm font-medium text-white">Link Tracking</span>
<span className="block text-xs text-neutral-500 mt-1">Monitor click-through rates.</span>
</div>
</label>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-orange-900/10 blur-[100px] pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">Ready to scale?</h2>
<p className="text-lg text-neutral-400 mb-10">Join 10,000+ companies using Postman to power their revenue engine.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="h-12 px-8 rounded-full bg-white text-black font-medium hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)] w-full sm:w-auto">
                    Get Started Free
                </button>
<button className="h-12 px-8 rounded-full border border-white/10 text-neutral-300 hover:bg-white/5 transition-colors font-medium w-full sm:w-auto">
                    Contact Sales
                </button>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-[#050505] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<a className="text-white font-medium tracking-tighter text-lg flex items-center gap-2 mb-4" href="#">
<span className="iconify text-orange-500" data-icon="lucide:box" data-width="20"></span>
                        POSTMAN
                    </a>
<p className="text-sm text-neutral-500 max-w-xs">
                        The AI-native email infrastructure for modern sales teams. Design, send, and analyze in one place.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Product</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Features</a></li>
<li><a className="hover:text-white transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-white transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Company</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Resources</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-white transition-colors" href="#">Community</a></li>
<li><a className="hover:text-white transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-white transition-colors" href="#">Status</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Legal</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-white transition-colors" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
<p className="text-xs text-neutral-600">© 2024 Postman Inc. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="16"></span></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:github" data-width="16"></span></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="16"></span></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
