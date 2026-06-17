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
            const reveals = document.querySelectorAll('.reveal');
            
            const revealOnScroll = () => {
                const windowHeight = window.innerHeight;
                const elementVisible = 150;
                
                reveals.forEach((reveal) => {
                    const elementTop = reveal.getBoundingClientRect().top;
                    if (elementTop < windowHeight - elementVisible) {
                        reveal.classList.add('active');
                    }
                });
            };

            window.addEventListener('scroll', revealOnScroll);
            revealOnScroll(); // Trigger once on load
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
      

<header className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white font-medium text-lg tracking-tight flex items-center gap-2 group" href="#">
<div className="relative w-6 h-6 rounded-md flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-purple-600 group-hover:scale-110 transition-transform duration-300"></div>
<span className="relative text-xs text-white font-bold">B</span>
</div>
                Biteyc
            </a>
<nav className="hidden lg:flex items-center gap-8 text-sm font-normal">
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#case-studies">Case Studies</a>
<a className="hover:text-white transition-colors" href="#process">How It Works</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all hover:border-white/20" href="#contact">
                    Client Login
                </a>
<a className="inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-neutral-950 bg-white rounded-full hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]" href="#contact">
                    Start Scaling
                </a>
</div>
</div>
</header>
<main>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex flex-col justify-center">

<div className="absolute inset-0 bg-grid z-0"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none opacity-50"></div>
<div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none opacity-30"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-white/10 text-neutral-300 text-xs font-medium mb-8 hover:border-indigo-500/50 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                    Accepting new enterprise partners for Q4
                </div>

<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight leading-[1.05] mb-8 reveal">
                    Scale Revenue via<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-purple-300 animate-gradient">Intelligent Systems</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light reveal delay-100">
                    We architect the infrastructure that allows businesses to grow without hiring. 
                    Merging <span className="text-white font-normal">high-ROAS advertising</span> with <span className="text-white font-normal">autonomous AI workflows</span>.
                </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal delay-200">
<a className="w-full sm:w-auto px-8 py-4 bg-white text-neutral-950 text-sm font-medium rounded-full hover:scale-105 hover:shadow-lg hover:shadow-white/20 transition-all duration-300" href="#contact">
                        Book Strategy Call
                    </a>
<a className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/10 text-white text-sm font-medium rounded-full hover:bg-white/5 transition-colors flex items-center justify-center gap-2 group" href="#case-studies">
                        View Case Studies
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="mt-20 relative mx-auto max-w-5xl reveal delay-300">
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-20"></div>
<div className="relative bg-neutral-950 border border-white/10 rounded-xl overflow-hidden shadow-2xl">

<div className="h-10 border-b border-white/5 bg-neutral-900/50 flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
</div>
<div className="ml-4 h-4 w-32 bg-white/5 rounded-full"></div>
</div>

<div className="grid md:grid-cols-3 divide-x divide-white/5 border-b border-white/5">

<div className="p-6">
<div className="text-xs text-neutral-500 font-mono mb-1">TOTAL REVENUE</div>
<div className="text-2xl text-white font-medium mb-2">₹4,230,500</div>
<div className="flex items-center gap-1 text-green-400 text-xs">
<iconify-icon icon="lucide:trending-up"></iconify-icon>
                                    +24.5% vs last month
                                </div>
</div>

<div className="p-6">
<div className="text-xs text-neutral-500 font-mono mb-1">AUTO-QUALIFIED LEADS</div>
<div className="text-2xl text-white font-medium mb-2">1,204</div>
<div className="flex items-center gap-1 text-green-400 text-xs">
<iconify-icon icon="lucide:zap"></iconify-icon>
                                    98% Automation Rate
                                </div>
</div>

<div className="p-6">
<div className="text-xs text-neutral-500 font-mono mb-1">ROAS</div>
<div className="text-2xl text-white font-medium mb-2">4.8x</div>
<div className="flex items-center gap-1 text-indigo-400 text-xs">
<iconify-icon icon="lucide:target"></iconify-icon>
                                    Platform: Meta + Google
                                </div>
</div>
</div>

<div className="p-6 h-64 bg-neutral-900/10 relative flex items-end gap-2 px-10 pb-0">

<div className="absolute inset-0 border-b border-white/5 pointer-events-none" style={{top: '25%'}}></div>
<div className="absolute inset-0 border-b border-white/5 pointer-events-none" style={{top: '50%'}}></div>
<div className="absolute inset-0 border-b border-white/5 pointer-events-none" style={{top: '75%'}}></div>

<div className="w-full bg-indigo-500/20 rounded-t-sm h-[30%] hover:bg-indigo-500/40 transition-colors relative group"><div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-neutral-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">120</div></div>
<div className="w-full bg-indigo-500/20 rounded-t-sm h-[45%] hover:bg-indigo-500/40 transition-colors relative group"><div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-neutral-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">240</div></div>
<div className="w-full bg-indigo-500/20 rounded-t-sm h-[35%] hover:bg-indigo-500/40 transition-colors relative group"><div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-neutral-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">180</div></div>
<div className="w-full bg-indigo-500/20 rounded-t-sm h-[55%] hover:bg-indigo-500/40 transition-colors relative group"><div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-neutral-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">310</div></div>
<div className="w-full bg-indigo-500/20 rounded-t-sm h-[65%] hover:bg-indigo-500/40 transition-colors relative group"><div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-neutral-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">400</div></div>
<div className="w-full bg-indigo-500/20 rounded-t-sm h-[60%] hover:bg-indigo-500/40 transition-colors relative group"><div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-neutral-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">380</div></div>
<div className="w-full bg-indigo-500/20 rounded-t-sm h-[80%] hover:bg-indigo-500/40 transition-colors relative group"><div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-neutral-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">520</div></div>
<div className="w-full bg-indigo-500/60 rounded-t-sm h-[95%] shadow-[0_0_20px_rgba(99,102,241,0.5)] relative group"><div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-neutral-950 font-bold text-[10px] py-1 px-2 rounded">Current</div></div>
</div>
</div>
</div>
</div>
</section>

<div className="py-10 border-y border-white/5 bg-neutral-900/30">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-neutral-500 uppercase tracking-widest mb-8">Integrated Ecosystems</p>
<div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<iconify-icon icon="logos:meta-icon" width="28"></iconify-icon>
<iconify-icon icon="logos:google-icon" width="28"></iconify-icon>
<iconify-icon icon="logos:tiktok-icon" width="28"></iconify-icon>
<iconify-icon icon="logos:hubspot" width="28"></iconify-icon>
<iconify-icon icon="logos:salesforce" width="36"></iconify-icon>
<iconify-icon icon="logos:openai-icon" width="28"></iconify-icon>
<iconify-icon className="text-purple-500" icon="simple-icons:make" width="28"></iconify-icon>
</div>
</div>
</div>

<section className="py-32 bg-neutral-950" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-20 items-center">
<div className="reveal">
<h2 className="text-3xl font-medium text-white tracking-tight mb-8">Not just an agency.<br/>A growth operating system.</h2>
<div className="space-y-6 text-neutral-400 leading-relaxed font-light text-lg">
<p>
                                Traditional agencies throw ads at a wall. Software houses build tools that no one uses. <span className="text-white font-medium">Biteyc sits in the middle.</span>
</p>
<p>
                                We believe that customer acquisition is an engineering problem. By combining algorithmic advertising with bespoke AI infrastructure, we create self-sustaining growth loops.
                            </p>
<p>
                                Your ads bring the traffic. Our AI agents qualify, nurture, and close. You sleep, your business scales.
                            </p>
</div>
<div className="mt-10 grid grid-cols-2 gap-6">
<div className="p-4 rounded-xl bg-white/5 border border-white/10">
<div className="text-3xl font-semibold text-white mb-1">40%</div>
<div className="text-xs text-neutral-500 uppercase tracking-wide">Avg. Cost Reduction</div>
</div>
<div className="p-4 rounded-xl bg-white/5 border border-white/10">
<div className="text-3xl font-semibold text-white mb-1">24/7</div>
<div className="text-xs text-neutral-500 uppercase tracking-wide">System Uptime</div>
</div>
</div>
</div>
<div className="relative reveal delay-200">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-2xl blur-3xl"></div>
<div className="relative bg-neutral-900 border border-white/10 rounded-2xl p-8 overflow-hidden group">

<div className="flex items-center justify-between mb-8">
<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 mb-2 border border-blue-500/30">
<iconify-icon icon="lucide:mouse-pointer-2" width="20"></iconify-icon>
</div>
<span className="text-xs text-neutral-400">Traffic</span>
</div>
<div className="flex-1 h-px bg-white/10 mx-4 relative">
<div className="absolute inset-0 bg-indigo-500 w-1/2 animate-[shimmer_2s_infinite]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-neutral-800 rounded-full border border-white/10 text-[10px] text-white whitespace-nowrap z-10">
                                        Biteyc Logic Layer
                                    </div>
</div>
<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 mb-2 border border-green-500/30">
<iconify-icon icon="lucide:dollar-sign" width="20"></iconify-icon>
</div>
<span className="text-xs text-neutral-400">Revenue</span>
</div>
</div>

<div className="bg-black/50 rounded-lg p-4 font-mono text-xs text-neutral-400 space-y-2 border border-white/5 h-48 overflow-hidden relative">
<div className="flex gap-2 text-emerald-500">
<iconify-icon icon="lucide:chevron-right"></iconify-icon>
<span>Initializing ad_spend optimizer...</span>
</div>
<div className="flex gap-2 text-white">
<iconify-icon className="text-neutral-600" icon="lucide:check"></iconify-icon>
<span>Meta API Connected</span>
</div>
<div className="flex gap-2 text-white">
<iconify-icon className="text-neutral-600" icon="lucide:check"></iconify-icon>
<span>Lead detected: ID_9942</span>
</div>
<div className="flex gap-2 text-indigo-400">
<iconify-icon icon="lucide:bot"></iconify-icon>
<span>AI Agent engaging via WhatsApp...</span>
</div>
<div className="flex gap-2 text-white">
<iconify-icon className="text-neutral-600" icon="lucide:check"></iconify-icon>
<span>Appointment Booked: Tomorrow 2pm</span>
</div>
<div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-neutral-900 to-transparent"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-neutral-900/20 border-t border-white/5" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20 max-w-2xl reveal">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Core Capabilities</h2>
<p className="text-neutral-400 text-lg font-light">Comprehensive digital solutions designed to modernize your infrastructure.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-neutral-950 border border-white/5 hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(79,70,229,0.1)] transition-all duration-300 reveal">
<div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-8 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:bot" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">AI Automation</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-6 font-light">
                            Eliminate manual data entry and support. We build custom agents that handle support, qualify leads, and update your CRM instantly.
                        </p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 text-[10px] bg-white/5 rounded text-neutral-400 border border-white/5">Chatbots</span>
<span className="px-2 py-1 text-[10px] bg-white/5 rounded text-neutral-400 border border-white/5">Workflow Ops</span>
</div>
</div>

<div className="group p-8 rounded-2xl bg-neutral-950 border border-white/5 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] transition-all duration-300 reveal delay-100">
<div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-8 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:crosshair" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Precision Ads</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-6 font-light">
                            Stop burning cash on broad targeting. We use API conversions to feed high-quality data back to ad platforms for lower CPA.
                        </p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 text-[10px] bg-white/5 rounded text-neutral-400 border border-white/5">Meta/IG</span>
<span className="px-2 py-1 text-[10px] bg-white/5 rounded text-neutral-400 border border-white/5">Google PPC</span>
</div>
</div>

<div className="group p-8 rounded-2xl bg-neutral-950 border border-white/5 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-300 reveal delay-200">
<div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-8 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:layout-template" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Funnel Architecture</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-6 font-light">
                            Traffic needs a destination. We design high-converting landing pages and email sequences that turn clicks into clients.
                        </p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 text-[10px] bg-white/5 rounded text-neutral-400 border border-white/5">Landing Pages</span>
<span className="px-2 py-1 text-[10px] bg-white/5 rounded text-neutral-400 border border-white/5">Copywriting</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">

<div className="absolute right-0 top-1/4 w-1/3 h-1/2 bg-gradient-to-b from-indigo-500/10 to-transparent blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative reveal">

<div className="bg-neutral-900 border border-white/10 rounded-xl p-6 shadow-2xl relative z-10">
<div className="flex justify-between items-center mb-8">
<div>
<h4 className="text-white font-medium">Campaign Performance</h4>
<p className="text-xs text-neutral-500">Last 30 Days</p>
</div>
<div className="flex gap-2">
<span className="w-3 h-3 rounded-full bg-indigo-500"></span>
<span className="text-xs text-neutral-400">Paid Traffic</span>
<span className="w-3 h-3 rounded-full bg-neutral-700 ml-2"></span>
<span className="text-xs text-neutral-400">Organic</span>
</div>
</div>

<div className="relative h-64 w-full border-l border-b border-white/10">

<svg className="absolute inset-0 h-full w-full overflow-visible" preserveaspectratio="none">
<defs>
<lineargradient id="gradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: 'rgba(99, 102, 241, 0.3)', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: 'rgba(99, 102, 241, 0)', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
<path d="M0,200 Q80,180 150,120 T300,80 T450,110 T600,20" fill="url(#gradient)" stroke="none"></path>
<path d="M0,200 Q80,180 150,120 T300,80 T450,110 T600,20" fill="none" stroke="#6366f1" strokeWidth="2"></path>
</svg>

<div className="absolute top-[20px] right-0 flex flex-col items-center">
<div className="bg-indigo-500 text-white text-[10px] font-bold px-2 py-1 rounded mb-2">ROI 420%</div>
<div className="w-3 h-3 bg-indigo-500 rounded-full border-4 border-neutral-900 shadow-lg"></div>
</div>
</div>

<div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/5">
<div>
<div className="text-xs text-neutral-500 mb-1">CPA</div>
<div className="text-white font-mono">₹124.00</div>
</div>
<div>
<div className="text-xs text-neutral-500 mb-1">CTR</div>
<div className="text-white font-mono">2.8%</div>
</div>
<div>
<div className="text-xs text-neutral-500 mb-1">Conv. Rate</div>
<div className="text-white font-mono">12.5%</div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-indigo-500/20 blur-3xl -z-10 translate-y-10"></div>
</div>
<div className="order-1 lg:order-2 reveal delay-100">
<h2 className="text-3xl font-medium text-white tracking-tight mb-6">Data that informs strategy.</h2>
<p className="text-neutral-400 leading-relaxed mb-6 font-light">
                        Gut feelings don't scale. We rely on hard data. Our systems provide real-time dashboards so you can see exactly where every rupee goes.
                    </p>
<ul className="space-y-4 mt-8">
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center mt-0.5">
<iconify-icon className="text-indigo-400" icon="lucide:check" width="14"></iconify-icon>
</div>
<div>
<h4 className="text-white text-sm font-medium">Attribution Modeling</h4>
<p className="text-xs text-neutral-500 mt-1">Know exactly which ad brought the customer.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center mt-0.5">
<iconify-icon className="text-indigo-400" icon="lucide:check" width="14"></iconify-icon>
</div>
<div>
<h4 className="text-white text-sm font-medium">Predictive LTV</h4>
<p className="text-xs text-neutral-500 mt-1">AI estimation of long-term customer value.</p>
</div>
</li>
</ul>
</div>
</div>
</section>

<section className="py-32 bg-neutral-900/30 border-y border-white/5" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">How We Work</h2>
<p className="text-neutral-400">From chaos to clarity in four steps.</p>
</div>
<div className="relative grid md:grid-cols-4 gap-8">

<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>

<div className="relative z-10 text-center group reveal">
<div className="w-24 h-24 mx-auto bg-neutral-950 border border-white/10 rounded-full flex items-center justify-center mb-6 group-hover:border-indigo-500/50 transition-colors shadow-xl">
<div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white font-medium">1</div>
</div>
<h3 className="text-white font-medium mb-2">Audit &amp; Strategy</h3>
<p className="text-xs text-neutral-400 max-w-[200px] mx-auto leading-relaxed">Deep dive into your current funnel and identifying leaks.</p>
</div>

<div className="relative z-10 text-center group reveal delay-100">
<div className="w-24 h-24 mx-auto bg-neutral-950 border border-white/10 rounded-full flex items-center justify-center mb-6 group-hover:border-indigo-500/50 transition-colors shadow-xl">
<div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white font-medium">2</div>
</div>
<h3 className="text-white font-medium mb-2">Build &amp; Integrate</h3>
<p className="text-xs text-neutral-400 max-w-[200px] mx-auto leading-relaxed">Setting up AI agents, CRMs, and ad accounts.</p>
</div>

<div className="relative z-10 text-center group reveal delay-200">
<div className="w-24 h-24 mx-auto bg-neutral-950 border border-white/10 rounded-full flex items-center justify-center mb-6 group-hover:border-indigo-500/50 transition-colors shadow-xl">
<div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white font-medium">3</div>
</div>
<h3 className="text-white font-medium mb-2">Launch</h3>
<p className="text-xs text-neutral-400 max-w-[200px] mx-auto leading-relaxed">Go live with campaigns and automated workflows.</p>
</div>

<div className="relative z-10 text-center group reveal delay-300">
<div className="w-24 h-24 mx-auto bg-neutral-950 border border-white/10 rounded-full flex items-center justify-center mb-6 group-hover:border-indigo-500/50 transition-colors shadow-xl">
<div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white font-medium">4</div>
</div>
<h3 className="text-white font-medium mb-2">Scale</h3>
<p className="text-xs text-neutral-400 max-w-[200px] mx-auto leading-relaxed">Iterate based on data, increasing budget on winners.</p>
</div>
</div>
</div>
</section>

<section className="py-32" id="case-studies">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-2">Client Success</h2>
<p className="text-neutral-400">Real businesses, verified results.</p>
</div>
<div className="flex gap-2">

<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10"><iconify-icon icon="lucide:arrow-left"></iconify-icon></button>
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10"><iconify-icon icon="lucide:arrow-right"></iconify-icon></button>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 rounded-2xl hover:translate-y-[-5px] transition-transform duration-300">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 bg-neutral-800 rounded-full overflow-hidden">

<div className="w-full h-full bg-neutral-700 flex items-center justify-center text-xs text-neutral-400">RS</div>
</div>
<div>
<div className="text-white font-medium text-sm">Rahul Sharma</div>
<div className="text-neutral-500 text-xs">CEO, TechFlow</div>
</div>
</div>
<div className="mb-6 flex gap-1">
<iconify-icon className="text-yellow-500 w-4" icon="lucide:star"></iconify-icon>
<iconify-icon className="text-yellow-500 w-4" icon="lucide:star"></iconify-icon>
<iconify-icon className="text-yellow-500 w-4" icon="lucide:star"></iconify-icon>
<iconify-icon className="text-yellow-500 w-4" icon="lucide:star"></iconify-icon>
<iconify-icon className="text-yellow-500 w-4" icon="lucide:star"></iconify-icon>
</div>
<p className="text-neutral-300 text-sm leading-relaxed mb-6 font-light">
                            "Biteyc completely transformed our lead gen. The AI chatbot they installed qualifies leads 24/7. We woke up to 15 booked appointments the first week."
                        </p>
<div className="pt-6 border-t border-white/5 flex gap-4">
<div>
<div className="text-xs text-neutral-500">ROAS</div>
<div className="text-indigo-400 font-mono font-medium">4.2x</div>
</div>
<div>
<div className="text-xs text-neutral-500">Time Saved</div>
<div className="text-green-400 font-mono font-medium">20hr/wk</div>
</div>
</div>
</div>

<div className="p-8 bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 rounded-2xl hover:translate-y-[-5px] transition-transform duration-300">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 bg-neutral-800 rounded-full overflow-hidden">
<div className="w-full h-full bg-neutral-700 flex items-center justify-center text-xs text-neutral-400">PP</div>
</div>
<div>
<div className="text-white font-medium text-sm">Priya Patel</div>
<div className="text-neutral-500 text-xs">Founder, EcomStore</div>
</div>
</div>
<div className="mb-6 flex gap-1">
<iconify-icon className="text-yellow-500 w-4" icon="lucide:star"></iconify-icon>
<iconify-icon className="text-yellow-500 w-4" icon="lucide:star"></iconify-icon>
<iconify-icon className="text-yellow-500 w-4" icon="lucide:star"></iconify-icon>
<iconify-icon className="text-yellow-500 w-4" icon="lucide:star"></iconify-icon>
<iconify-icon className="text-yellow-500 w-4" icon="lucide:star"></iconify-icon>
</div>
<p className="text-neutral-300 text-sm leading-relaxed mb-6 font-light">
                            "Their ad targeting is surgical. We stopped wasting money on broad audiences. The reporting dashboard is also a game changer for us."
                        </p>
<div className="pt-6 border-t border-white/5 flex gap-4">
<div>
<div className="text-xs text-neutral-500">Revenue</div>
<div className="text-indigo-400 font-mono font-medium">+45%</div>
</div>
<div>
<div className="text-xs text-neutral-500">CPA</div>
<div className="text-green-400 font-mono font-medium">-30%</div>
</div>
</div>
</div>

<div className="p-8 bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 rounded-2xl hover:translate-y-[-5px] transition-transform duration-300">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 bg-neutral-800 rounded-full overflow-hidden">
<div className="w-full h-full bg-neutral-700 flex items-center justify-center text-xs text-neutral-400">VS</div>
</div>
<div>
<div className="text-white font-medium text-sm">Vikram Singh</div>
<div className="text-neutral-500 text-xs">Director, RealEstate Pro</div>
</div>
</div>
<div className="mb-6 flex gap-1">
<iconify-icon className="text-yellow-500 w-4" icon="lucide:star"></iconify-icon>
<iconify-icon className="text-yellow-500 w-4" icon="lucide:star"></iconify-icon>
<iconify-icon className="text-yellow-500 w-4" icon="lucide:star"></iconify-icon>
<iconify-icon className="text-yellow-500 w-4" icon="lucide:star"></iconify-icon>
<iconify-icon className="text-yellow-500 w-4" icon="lucide:star"></iconify-icon>
</div>
<p className="text-neutral-300 text-sm leading-relaxed mb-6 font-light">
                            "Implementation was seamless. They integrated with our existing HubSpot setup and automated the follow-ups. Highly professional."
                        </p>
<div className="pt-6 border-t border-white/5 flex gap-4">
<div>
<div className="text-xs text-neutral-500">Leads</div>
<div className="text-indigo-400 font-mono font-medium">350/mo</div>
</div>
<div>
<div className="text-xs text-neutral-500">Setup</div>
<div className="text-green-400 font-mono font-medium">5 Days</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-neutral-900/30 border-t border-white/5" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Transparent Investment</h2>
<p className="text-neutral-400">Choose the velocity of your growth.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 items-start">

<div className="p-8 rounded-2xl border border-white/10 bg-neutral-950 flex flex-col hover:border-white/20 transition-colors">
<h3 className="text-lg font-medium text-white mb-2">Starter</h3>
<p className="text-xs text-neutral-400 mb-6 h-10">Perfect for small teams ready to automate basics.</p>
<div className="text-4xl font-semibold text-white mb-6">₹25k<span className="text-sm text-neutral-500 font-normal">/mo</span></div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-neutral-300 font-light"><iconify-icon className="text-neutral-500" icon="lucide:check"></iconify-icon> 1 Ad Channel</li>
<li className="flex items-center gap-3 text-sm text-neutral-300 font-light"><iconify-icon className="text-neutral-500" icon="lucide:check"></iconify-icon> Basic Chatbot</li>
<li className="flex items-center gap-3 text-sm text-neutral-300 font-light"><iconify-icon className="text-neutral-500" icon="lucide:check"></iconify-icon> Monthly Reporting</li>
<li className="flex items-center gap-3 text-sm text-neutral-300 font-light"><iconify-icon className="text-neutral-500" icon="lucide:check"></iconify-icon> Email Support</li>
</ul>
<a className="block w-full py-3 text-center text-sm font-medium text-white bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors" href="#contact">Get Started</a>
</div>

<div className="p-8 rounded-2xl border border-indigo-500 bg-neutral-900/50 relative flex flex-col shadow-2xl shadow-indigo-500/10 scale-105 z-10">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-indigo-600 text-white text-[10px] uppercase tracking-wide font-bold rounded-full">Most Popular</div>
<h3 className="text-lg font-medium text-white mb-2">Growth</h3>
<p className="text-xs text-neutral-400 mb-6 h-10">For scaling businesses needing aggressive results.</p>
<div className="text-4xl font-semibold text-white mb-6">₹50k<span className="text-sm text-neutral-500 font-normal">/mo</span></div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white font-normal"><iconify-icon className="text-indigo-400" icon="lucide:check-circle-2"></iconify-icon> 2 Ad Channels</li>
<li className="flex items-center gap-3 text-sm text-white font-normal"><iconify-icon className="text-indigo-400" icon="lucide:check-circle-2"></iconify-icon> Advanced CRM AI</li>
<li className="flex items-center gap-3 text-sm text-white font-normal"><iconify-icon className="text-indigo-400" icon="lucide:check-circle-2"></iconify-icon> Bi-Weekly Strategy</li>
<li className="flex items-center gap-3 text-sm text-white font-normal"><iconify-icon className="text-indigo-400" icon="lucide:check-circle-2"></iconify-icon> Custom Funnel Design</li>
</ul>
<a className="block w-full py-3 text-center text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/25" href="#contact">Get Started</a>
</div>

<div className="p-8 rounded-2xl border border-white/10 bg-neutral-950 flex flex-col hover:border-white/20 transition-colors">
<h3 className="text-lg font-medium text-white mb-2">Scale</h3>
<p className="text-xs text-neutral-400 mb-6 h-10">Full-service partnership for market domination.</p>
<div className="text-4xl font-semibold text-white mb-6">₹90k<span className="text-sm text-neutral-500 font-normal">/mo</span></div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-neutral-300 font-light"><iconify-icon className="text-neutral-500" icon="lucide:check"></iconify-icon> Omni-channel Ads</li>
<li className="flex items-center gap-3 text-sm text-neutral-300 font-light"><iconify-icon className="text-neutral-500" icon="lucide:check"></iconify-icon> Custom LLM Tuning</li>
<li className="flex items-center gap-3 text-sm text-neutral-300 font-light"><iconify-icon className="text-neutral-500" icon="lucide:check"></iconify-icon> 24/7 Priority Support</li>
<li className="flex items-center gap-3 text-sm text-neutral-300 font-light"><iconify-icon className="text-neutral-500" icon="lucide:check"></iconify-icon> Dedicated Manager</li>
</ul>
<a className="block w-full py-3 text-center text-sm font-medium text-white bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors" href="#contact">Contact Sales</a>
</div>
</div>
</div>
</section>

<section className="py-32">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16">

<div className="lg:col-span-5">
<h2 className="text-3xl font-medium text-white tracking-tight mb-8">How We Deliver</h2>
<div className="space-y-8">
<div className="flex gap-4 group">
<div className="w-12 h-12 rounded-xl bg-neutral-900 border border-white/10 flex-shrink-0 flex items-center justify-center group-hover:border-indigo-500/50 transition-colors">
<iconify-icon className="text-yellow-400" icon="lucide:zap" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Rapid Deployment</h4>
<p className="text-sm text-neutral-400 font-light">We don't do 3-month onboarding. We aim to be live within 7-10 days.</p>
</div>
</div>
<div className="flex gap-4 group">
<div className="w-12 h-12 rounded-xl bg-neutral-900 border border-white/10 flex-shrink-0 flex items-center justify-center group-hover:border-indigo-500/50 transition-colors">
<iconify-icon className="text-green-400" icon="lucide:shield-check" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Guaranteed Performance</h4>
<p className="text-sm text-neutral-400 font-light">We define KPIs upfront. If we don't hit them, we work for free until we do.</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7 space-y-4">
<details className="group bg-neutral-900/50 border border-white/10 rounded-xl open:border-indigo-500/30 transition-all duration-300">
<summary className="flex cursor-pointer items-center justify-between p-6 text-white font-medium hover:bg-white/5 rounded-xl transition-colors select-none">
                            What industries do you work with?
                            <span className="transition-transform duration-300 group-open:rotate-180">
<iconify-icon icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-neutral-400 text-sm leading-relaxed font-light">
                            We specialize in service-based businesses (Real Estate, Consulting, Agency) and E-commerce brands scaling past ₹5L/mo. Our systems are industry-agnostic but work best where high-volume lead qualification is needed.
                        </div>
</details>
<details className="group bg-neutral-900/50 border border-white/10 rounded-xl open:border-indigo-500/30 transition-all duration-300">
<summary className="flex cursor-pointer items-center justify-between p-6 text-white font-medium hover:bg-white/5 rounded-xl transition-colors select-none">
                            Do I own the ad accounts and data?
                            <span className="transition-transform duration-300 group-open:rotate-180">
<iconify-icon icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-neutral-400 text-sm leading-relaxed font-light">
                            100%. We believe in total transparency. You have full admin access to your Ad Accounts, CRM, and API keys. We work inside your ecosystem, we don't hold it hostage.
                        </div>
</details>
<details className="group bg-neutral-900/50 border border-white/10 rounded-xl open:border-indigo-500/30 transition-all duration-300">
<summary className="flex cursor-pointer items-center justify-between p-6 text-white font-medium hover:bg-white/5 rounded-xl transition-colors select-none">
                            What is the minimum ad budget?
                            <span className="transition-transform duration-300 group-open:rotate-180">
<iconify-icon icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-neutral-400 text-sm leading-relaxed font-light">
                            To get statistically significant results for our AI optimization to work, we recommend a minimum ad spend of ₹30,000/month, separate from our service fee.
                        </div>
</details>
</div>
</div>
</section>

<section className="py-32 relative" id="contact">
<div className="absolute inset-0 bg-grid mask-gradient opacity-50 z-0"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="bg-neutral-950 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
<div className="text-center mb-10">
<h2 className="text-3xl font-medium text-white tracking-tight mb-2">Start Your Transformation</h2>
<p className="text-neutral-400">Fill out the form below. We'll respond within 2 hours.</p>
</div>
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Name</label>
<input className="w-full bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-neutral-700" placeholder="Your Name" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Company</label>
<input className="w-full bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-neutral-700" placeholder="Company Name" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Email</label>
<input className="w-full bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-neutral-700" placeholder="you@company.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Budget Range (Monthly)</label>

<div className="relative pt-6 pb-2">
<input className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-indigo-500" max="100" min="1" type="range" value="50"/>
<div className="flex justify-between text-[10px] text-neutral-500 mt-2 font-mono">
<span>₹20k</span>
<span>₹1L+</span>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Message</label>
<textarea className="w-full bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none placeholder:text-neutral-700" placeholder="Tell us about your current bottlenecks..." rows="3"></textarea>
</div>
<div className="flex items-center gap-2 mb-4">
<div className="relative flex items-center">
<input className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-white/10 bg-neutral-900 checked:bg-indigo-500 checked:border-indigo-500 transition-all" id="terms" type="checkbox"/>
<iconify-icon className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100" icon="lucide:check" width="12"></iconify-icon>
</div>
<label className="text-xs text-neutral-500 cursor-pointer select-none" htmlFor="terms">I agree to the processing of my data.</label>
</div>
<button className="w-full py-4 bg-white text-neutral-950 font-medium rounded-lg hover:bg-neutral-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]" type="button">
                            Submit Application
                        </button>
</form>
<div className="mt-8 flex justify-center gap-8 text-neutral-500">
<a className="flex items-center gap-2 hover:text-white transition-colors text-sm" href="mailto:hello.biteyc@gmail.com">
<iconify-icon icon="lucide:mail" width="16"></iconify-icon> hello.biteyc@gmail.com
                        </a>
<a className="flex items-center gap-2 hover:text-white transition-colors text-sm" href="tel:8433299471">
<iconify-icon icon="lucide:phone" width="16"></iconify-icon> 8433299471
                        </a>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/10 bg-black pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-20">
<div className="md:col-span-1">
<a className="text-white font-medium text-lg tracking-tight flex items-center gap-2 mb-6" href="#">
<div className="w-6 h-6 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-md flex items-center justify-center text-xs text-white font-bold">B</div>
                        Biteyc
                    </a>
<p className="text-neutral-500 text-sm leading-relaxed">
                        The growth engine for modern businesses. Automation, Advertising, and Analytics in one unified workflow.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-6 text-sm">Product</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-white transition-colors" href="#process">Methodology</a></li>
<li><a className="hover:text-white transition-colors" href="#pricing">Pricing</a></li>
<li><a className="hover:text-white transition-colors" href="#case-studies">Success Stories</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6 text-sm">Company</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6 text-sm">Connect</h4>
<div className="flex gap-4 text-neutral-500 mb-6">
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white transition-all" href="#"><iconify-icon icon="lucide:twitter" width="16"></iconify-icon></a>
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white transition-all" href="#"><iconify-icon icon="lucide:linkedin" width="16"></iconify-icon></a>
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white transition-all" href="#"><iconify-icon icon="lucide:instagram" width="16"></iconify-icon></a>
</div>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-600">
<p>© 2024 Biteyc Inc. All rights reserved.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span>All Systems Operational</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
