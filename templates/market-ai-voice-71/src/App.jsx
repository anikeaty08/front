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



        /* --- AI Text Reveal Engine --- */
        document.addEventListener('DOMContentLoaded', () => {
            const processTextElement = (el) => {
                if (el.classList.contains('ai-processed') || !el.textContent.trim()) return;
                const isHeading = ['H1', 'H2', 'H3', 'H4'].includes(el.tagName);
                const text = el.innerText; 
                el.classList.add('ai-content', 'ai-processed');
                el.innerHTML = '';
                if (isHeading) {
                    text.split('').forEach((char, index) => {
                        const span = document.createElement('span');
                        span.textContent = char;
                        span.className = 'ai-char';
                        if (char === ' ') span.innerHTML = '&nbsp;';
                        span.style.setProperty('--ai-index', index);
                        el.appendChild(span);
                    });
                } else {
                    text.split(/(\s+)/).forEach((word, i) => {
                        if (word.trim().length === 0) el.appendChild(document.createTextNode(word));
                        else {
                            const span = document.createElement('span');
                            span.textContent = word;
                            span.className = 'ai-word';
                            span.style.setProperty('--ai-index', i);
                            el.appendChild(span);
                        }
                    });
                }
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('ai-active');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

            document.querySelectorAll('.ai-observe').forEach(el => {
                processTextElement(el);
                observer.observe(el);
            });
            document.querySelectorAll('.fade-up-block').forEach(el => observer.observe(el));
        });

        /* --- Navbar Scroll --- */
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) navbar.classList.add('bg-black/90', 'shadow-lg');
            else navbar.classList.remove('bg-black/90', 'shadow-lg');
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
      

<div className="grid-lines">
<div className="grid-line"></div>
<div className="grid-line hidden md:block"></div>
<div className="grid-line hidden md:block"></div>
<div className="grid-line"></div>
<div className="grid-line"></div>
</div>

<div className="fixed top-0 w-full h-[100vh] pointer-events-none opacity-40 z-0">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,_#2a1002_0%,_#000000_60%)]"></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5 transition-all duration-500" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-lg font-semibold tracking-tight text-white">MARKET<span className="text-orange-500">.AI</span></span>
</div>
<div className="hidden lg:flex items-center gap-6 text-xs font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#product">Product</a>
<a className="hover:text-white transition-colors" href="#solutions">Solutions</a>
<a className="hover:text-white transition-colors" href="#developers">Developers</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-white transition-colors" href="#company">Company</a>
</div>
<div className="flex items-center gap-3">
<a className="hidden md:block text-xs font-medium hover:text-white text-neutral-400 transition-colors" href="#">Log In</a>
<a className="bg-white text-black hover:bg-neutral-200 text-xs font-medium px-4 py-2 rounded-full transition-all" href="#">
                    Start Trial
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="section-number top-32 right-6 md:right-12">01</div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-sm rounded-full px-3 py-1 mb-8 ai-observe mx-auto">
<span className="flex h-1.5 w-1.5 rounded-full bg-orange-500 relative"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span></span>
<span className="text-[10px] font-medium text-white/80 uppercase tracking-widest">Voice AI 2.0 Live</span>
</div>
<h1 className="text-5xl lg:text-8xl font-medium tracking-tight leading-[1.1] mb-6 text-white ai-observe">
                Deploy Human-Like<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-200">Voice AI Agents.</span>
</h1>
<p className="text-lg text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed ai-observe font-light">
                Automate millions of inbound and outbound calls with &lt;500ms latency. 
                Seamlessly integrated with your CRM for sales, support, and operations.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 ai-observe">
<button className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-3.5 rounded-lg font-medium transition-all flex items-center gap-2 text-sm shadow-lg shadow-orange-900/20">
                    Get Started Free <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="glass-panel text-white hover:bg-white/5 px-8 py-3.5 rounded-lg font-medium transition-all flex items-center gap-2 text-sm">
<iconify-icon icon="solar:play-circle-linear" width="18"></iconify-icon> Listen to Demo
                </button>
</div>

<div className="border-y border-white/5 bg-white/[0.02] py-8 w-screen relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw]">
<div className="max-w-7xl mx-auto px-6 mb-4">
<p className="text-xs text-neutral-500 uppercase tracking-widest text-center">Trusted by forward-thinking enterprises</p>
</div>
<div className="marquee-container opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<div className="marquee-content flex gap-16 px-4">
<span className="text-xl font-bold font-mono">ACME CORP</span>
<span className="text-xl font-bold font-mono">STRIPE</span>
<span className="text-xl font-bold font-mono">VERCEL</span>
<span className="text-xl font-bold font-mono">LINEAR</span>
<span className="text-xl font-bold font-mono">RAYCAST</span>
<span className="text-xl font-bold font-mono">AIRBNB</span>
<span className="text-xl font-bold font-mono">UBER</span>

<span className="text-xl font-bold font-mono">ACME CORP</span>
<span className="text-xl font-bold font-mono">STRIPE</span>
<span className="text-xl font-bold font-mono">VERCEL</span>
<span className="text-xl font-bold font-mono">LINEAR</span>
<span className="text-xl font-bold font-mono">RAYCAST</span>
<span className="text-xl font-bold font-mono">AIRBNB</span>
<span className="text-xl font-bold font-mono">UBER</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative border-b border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="ai-observe">
<span className="text-orange-500 font-medium text-xs tracking-widest uppercase mb-4 block">Workflow</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-8">Launch your first AI workforce in minutes, not months.</h2>
<div className="space-y-8 relative">
<div className="absolute left-3.5 top-2 bottom-2 w-px bg-neutral-800"></div>
<div className="relative pl-12">
<div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-neutral-900 border border-neutral-700 text-xs flex items-center justify-center font-mono">01</div>
<h3 className="text-white font-medium mb-1">Create AI Agent</h3>
<p className="text-neutral-500 text-sm">Select a persona, voice, and knowledge base. Customize tone and vocabulary.</p>
</div>
<div className="relative pl-12">
<div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-neutral-900 border border-neutral-700 text-xs flex items-center justify-center font-mono">02</div>
<h3 className="text-white font-medium mb-1">Connect Phone Number</h3>
<p className="text-neutral-500 text-sm">Claim a local or toll-free number instantly, or port your existing telephony.</p>
</div>
<div className="relative pl-12">
<div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-neutral-900 border border-neutral-700 text-xs flex items-center justify-center font-mono">03</div>
<h3 className="text-white font-medium mb-1">Build Flow Logic</h3>
<p className="text-neutral-500 text-sm">Use our visual node editor to define call paths, data collection, and API triggers.</p>
</div>
<div className="relative pl-12">
<div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-orange-600 text-white border border-orange-500 text-xs flex items-center justify-center font-mono">04</div>
<h3 className="text-white font-medium mb-1">Launch &amp; Track</h3>
<p className="text-neutral-500 text-sm">Start campaigns. Monitor real-time sentiment analysis and call recording transcripts.</p>
</div>
</div>
</div>
<div className="fade-up-block glass-panel rounded-xl p-6 border border-white/10 relative overflow-hidden h-[500px] flex flex-col">
<div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500"></div>
</div>
<div className="text-[10px] text-neutral-500 font-mono">agent_config.json</div>
</div>

<div className="flex-1 flex gap-4">
<div className="w-12 border-r border-white/5 flex flex-col items-center gap-4 pt-2 text-neutral-500">
<iconify-icon icon="solar:user-linear" width="20"></iconify-icon>
<iconify-icon className="text-orange-500" icon="solar:phone-calling-linear" width="20"></iconify-icon>
<iconify-icon icon="solar:graph-linear" width="20"></iconify-icon>
<iconify-icon icon="solar:settings-linear" width="20"></iconify-icon>
</div>
<div className="flex-1 space-y-4">
<div className="h-8 bg-white/5 rounded w-1/3"></div>
<div className="grid grid-cols-2 gap-4">
<div className="h-32 bg-white/5 rounded border border-white/5 p-4">
<div className="h-4 w-20 bg-white/10 rounded mb-2"></div>
<div className="h-2 w-full bg-white/5 rounded mb-1"></div>
<div className="h-2 w-2/3 bg-white/5 rounded"></div>
</div>
<div className="h-32 bg-white/5 rounded border border-white/5 p-4 flex items-center justify-center">
<div className="w-16 h-16 rounded-full border border-orange-500/30 flex items-center justify-center text-orange-500 relative">
<iconify-icon icon="solar:microphone-2-linear" width="24"></iconify-icon>
<div className="absolute inset-0 rounded-full animate-ping bg-orange-500/20"></div>
</div>
</div>
</div>
<div className="h-40 bg-white/5 rounded border border-white/5 p-4 font-mono text-[10px] text-neutral-400 overflow-hidden">
<span className="text-blue-400">const</span> agent = <span className="text-purple-400">new</span> VoiceAgent({<br/>
                                  voice: <span className="text-green-400">'en-US-Neural2-J'</span>,<br/>
                                  latency: <span className="text-orange-400">400</span>, <span className="text-neutral-600">// ms</span><br/>
                                  context: <span className="text-green-400">'Sales Qualification'</span>,<br/>
                                  tools: [<span className="text-green-400">'calendar_api'</span>, <span className="text-green-400">'crm_sync'</span>]<br/>
                                });<br/><br/>
                                agent.connect(); <span className="text-neutral-500 animate-pulse">_</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 border-b border-white/5 relative" id="product">
<div className="section-number top-24 left-6">02</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<span className="text-orange-500 font-medium text-xs tracking-widest uppercase mb-3 block">Mission Control</span>
<h2 className="text-3xl lg:text-5xl font-medium tracking-tight mb-4">Real-time Visibility &amp; Control</h2>
<p className="text-neutral-400 max-w-2xl mx-auto">Monitor live calls, intervene when necessary, and analyze transcripts with LLM-powered insights.</p>
</div>

<div className="fade-up-block bg-[#0A0A0A] border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden ring-1 ring-white/10">

<div className="h-14 border-b border-neutral-800 flex items-center justify-between px-6 bg-[#0F0F0F]">
<div className="flex items-center gap-4">
<span className="text-sm font-medium text-white">Campaign: Q4 Outreach</span>
<span className="px-2 py-0.5 rounded text-[10px] bg-green-500/10 text-green-500 border border-green-500/20 uppercase">Active</span>
</div>
<div className="flex gap-4 text-xs text-neutral-400">
<div className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div> 14 Agents Live</div>
<div className="flex items-center gap-2"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 24m Avg Duration</div>
</div>
</div>

<div className="grid grid-cols-12 h-[600px]">

<div className="col-span-1 lg:col-span-2 border-r border-neutral-800 bg-[#0C0C0C] p-4 hidden md:block">
<div className="space-y-1">
<div className="p-2 rounded bg-neutral-800 text-white text-xs font-medium flex items-center gap-3">
<iconify-icon icon="solar:widget-linear"></iconify-icon> Overview
                            </div>
<div className="p-2 rounded hover:bg-neutral-800/50 text-neutral-400 hover:text-white text-xs font-medium flex items-center gap-3 transition-colors">
<iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> Agents
                            </div>
<div className="p-2 rounded hover:bg-neutral-800/50 text-neutral-400 hover:text-white text-xs font-medium flex items-center gap-3 transition-colors">
<iconify-icon icon="solar:chat-line-linear"></iconify-icon> Logs
                            </div>
<div className="p-2 rounded hover:bg-neutral-800/50 text-neutral-400 hover:text-white text-xs font-medium flex items-center gap-3 transition-colors">
<iconify-icon icon="solar:card-linear"></iconify-icon> Billing
                            </div>
</div>
</div>

<div className="col-span-12 md:col-span-11 lg:col-span-7 bg-[#050505] p-6 overflow-y-auto">
<div className="grid grid-cols-3 gap-4 mb-8">
<div className="bg-neutral-900/50 border border-neutral-800 p-4 rounded-lg">
<div className="text-neutral-500 text-[10px] uppercase mb-1">Total Calls</div>
<div className="text-2xl font-semibold text-white">1,248</div>
<div className="text-green-500 text-[10px] flex items-center gap-1 mt-1"><iconify-icon icon="solar:graph-up-linear"></iconify-icon> +12%</div>
</div>
<div className="bg-neutral-900/50 border border-neutral-800 p-4 rounded-lg">
<div className="text-neutral-500 text-[10px] uppercase mb-1">Conversion Rate</div>
<div className="text-2xl font-semibold text-white">24.8%</div>
<div className="text-green-500 text-[10px] flex items-center gap-1 mt-1"><iconify-icon icon="solar:graph-up-linear"></iconify-icon> +4%</div>
</div>
<div className="bg-neutral-900/50 border border-neutral-800 p-4 rounded-lg">
<div className="text-neutral-500 text-[10px] uppercase mb-1">Cost / Lead</div>
<div className="text-2xl font-semibold text-white">$1.42</div>
<div className="text-orange-500 text-[10px] flex items-center gap-1 mt-1"><iconify-icon icon="solar:graph-down-linear"></iconify-icon> -15%</div>
</div>
</div>
<h3 className="text-sm font-medium text-white mb-4">Live Interactions</h3>
<div className="space-y-2">

<div className="group flex items-center justify-between p-3 rounded-lg border border-neutral-800 bg-neutral-900/20 hover:bg-neutral-900/50 transition-colors cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-orange-500/10 text-orange-500 flex items-center justify-center border border-orange-500/20">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-white">+1 (555) 012-3456</div>
<div className="text-[10px] text-neutral-500">Agent: Sarah (Sales) • 02:14</div>
</div>
</div>
<div className="flex items-center gap-3">
<span className="px-2 py-0.5 rounded text-[10px] bg-blue-500/10 text-blue-400 border border-blue-500/20">Negotiating</span>
<button className="text-neutral-500 hover:text-white transition-colors"><iconify-icon icon="solar:menu-dots-linear"></iconify-icon></button>
</div>
</div>

<div className="group flex items-center justify-between p-3 rounded-lg border border-neutral-800 bg-neutral-900/20 hover:bg-neutral-900/50 transition-colors cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center border border-green-500/20">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-white">+1 (555) 987-6543</div>
<div className="text-[10px] text-neutral-500">Agent: Mike (Support) • 05:22</div>
</div>
</div>
<div className="flex items-center gap-3">
<span className="px-2 py-0.5 rounded text-[10px] bg-green-500/10 text-green-400 border border-green-500/20">Resolved</span>
<button className="text-neutral-500 hover:text-white transition-colors"><iconify-icon icon="solar:menu-dots-linear"></iconify-icon></button>
</div>
</div>

<div className="group flex items-center justify-between p-3 rounded-lg border border-neutral-800 bg-neutral-900/20 hover:bg-neutral-900/50 transition-colors cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center border border-red-500/20">
<iconify-icon icon="solar:close-circle-linear"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-white">+1 (555) 444-1111</div>
<div className="text-[10px] text-neutral-500">Agent: Sarah (Sales) • 00:45</div>
</div>
</div>
<div className="flex items-center gap-3">
<span className="px-2 py-0.5 rounded text-[10px] bg-red-500/10 text-red-400 border border-red-500/20">Dropped</span>
<button className="text-neutral-500 hover:text-white transition-colors"><iconify-icon icon="solar:menu-dots-linear"></iconify-icon></button>
</div>
</div>
</div>
</div>

<div className="col-span-3 border-l border-neutral-800 bg-[#0C0C0C] p-4 hidden lg:block">
<h4 className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-4">Transcript Analysis</h4>
<div className="space-y-4">
<div className="p-3 bg-neutral-900 rounded border border-neutral-800">
<div className="flex gap-2 mb-2">
<div className="w-4 h-4 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center text-[10px]">AI</div>
<p className="text-[11px] text-neutral-300">Hello, I'm calling from Market.AI regarding your request.</p>
</div>
<div className="flex gap-2">
<div className="w-4 h-4 rounded bg-neutral-700 text-neutral-300 flex items-center justify-center text-[10px]">U</div>
<p className="text-[11px] text-neutral-300">Yes, I wanted to know about the API pricing.</p>
</div>
</div>
<div className="border-t border-neutral-800 pt-4">
<div className="text-[10px] text-neutral-500 mb-2">Sentiment</div>
<div className="w-full bg-neutral-800 h-1 rounded-full overflow-hidden">
<div className="bg-green-500 w-[75%] h-full"></div>
</div>
</div>
<div className="border-t border-neutral-800 pt-4">
<div className="text-[10px] text-neutral-500 mb-2">Extracted Data</div>
<div className="flex flex-wrap gap-2">
<span className="text-[10px] bg-neutral-800 px-2 py-1 rounded text-neutral-300">Interest: High</span>
<span className="text-[10px] bg-neutral-800 px-2 py-1 rounded text-neutral-300">Budget: &gt;$5k</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<span className="text-orange-500 font-medium text-xs tracking-widest uppercase mb-4 block">Use Cases</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-12">Engineered for every industry.</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group border border-neutral-800 bg-neutral-900/20 p-6 rounded-xl hover:border-orange-500/30 transition-all cursor-default">
<div className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center mb-4 text-orange-500 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:cart-large-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Sales &amp; Qualification</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-4">
                        Qualify leads 24/7. AI agents ask pre-screening questions, update CRM, and book meetings for closers only when criteria are met.
                    </p>
<div className="text-[10px] text-neutral-500 font-mono bg-neutral-900 p-2 rounded border border-neutral-800">
                        KPI: 3x increase in qualified leads
                    </div>
</div>

<div className="group border border-neutral-800 bg-neutral-900/20 p-6 rounded-xl hover:border-orange-500/30 transition-all cursor-default">
<div className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center mb-4 text-blue-500 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:stethoscope-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Healthcare</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-4">
                        Automate patient appointment scheduling, reminders, and prescription refill requests with HIPAA-compliant voice agents.
                    </p>
<div className="text-[10px] text-neutral-500 font-mono bg-neutral-900 p-2 rounded border border-neutral-800">
                        KPI: 40% reduction in no-shows
                    </div>
</div>

<div className="group border border-neutral-800 bg-neutral-900/20 p-6 rounded-xl hover:border-orange-500/30 transition-all cursor-default">
<div className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center mb-4 text-green-500 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:buildings-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Real Estate</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-4">
                        Instantly respond to property inquiries. Agents can provide property details, schedule viewings, and follow up with buyers.
                    </p>
<div className="text-[10px] text-neutral-500 font-mono bg-neutral-900 p-2 rounded border border-neutral-800">
                        KPI: 0 missed inquiry calls
                    </div>
</div>

<div className="group border border-neutral-800 bg-neutral-900/20 p-6 rounded-xl hover:border-orange-500/30 transition-all cursor-default">
<div className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center mb-4 text-purple-500 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:headphones-round-sound-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">SaaS Support</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-4">
                        Tier 1 support automation. Handle password resets, billing questions, and basic troubleshooting without human intervention.
                    </p>
<div className="text-[10px] text-neutral-500 font-mono bg-neutral-900 p-2 rounded border border-neutral-800">
                        KPI: 70% automated resolution
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-neutral-900 bg-[#050505]" id="developers">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-16">
<div className="md:w-1/3">
<span className="text-orange-500 font-medium text-xs tracking-widest uppercase mb-4 block">Architecture</span>
<h2 className="text-3xl font-medium tracking-tight mb-6">Built for scale and security.</h2>
<p className="text-neutral-400 text-sm mb-6">
                        Our multi-tenant architecture ensures data isolation, while our global edge network delivers low-latency voice processing.
                    </p>
<ul className="space-y-3 text-sm text-neutral-300">
<li className="flex items-center gap-2"><iconify-icon className="text-green-500" icon="solar:shield-check-linear"></iconify-icon> SOC2 Type II Certified</li>
<li className="flex items-center gap-2"><iconify-icon className="text-blue-500" icon="solar:server-linear"></iconify-icon> 99.99% Uptime SLA</li>
<li className="flex items-center gap-2"><iconify-icon className="text-orange-500" icon="solar:lock-password-linear"></iconify-icon> End-to-End Encryption</li>
</ul>
<div className="mt-8">
<a className="text-orange-500 text-sm hover:underline flex items-center gap-1" href="#">Read API Documentation <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon></a>
</div>
</div>
<div className="md:w-2/3">

<div className="relative w-full aspect-[16/9] border border-neutral-800 rounded-xl bg-neutral-900/30 flex items-center justify-center p-8">
<div className="flex items-center justify-between w-full max-w-lg relative z-10">

<div className="flex flex-col items-center gap-2 text-center">
<div className="w-16 h-16 bg-neutral-800 border border-neutral-700 rounded-lg flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:phone-linear" width="32"></iconify-icon>
</div>
<span className="text-[10px] text-neutral-500 uppercase">Telephony<br/>(Twilio/Sip)</span>
</div>

<div className="flex-1 h-px bg-neutral-700 mx-2 relative"><div className="absolute right-0 -top-1 w-2 h-2 border-t border-r border-neutral-700 rotate-45"></div></div>

<div className="flex flex-col items-center gap-2 text-center">
<div className="w-16 h-16 bg-orange-900/20 border border-orange-500/50 rounded-lg flex items-center justify-center shadow-[0_0_30px_rgba(249,115,22,0.1)]">
<iconify-icon className="text-orange-500" icon="solar:cpu-linear" width="32"></iconify-icon>
</div>
<span className="text-[10px] text-orange-500 font-medium uppercase">Orchestrator<br/>(LLM + Logic)</span>
</div>

<div className="flex-1 h-px bg-neutral-700 mx-2 relative"><div className="absolute right-0 -top-1 w-2 h-2 border-t border-r border-neutral-700 rotate-45"></div></div>

<div className="flex flex-col items-center gap-2 text-center">
<div className="w-16 h-16 bg-neutral-800 border border-neutral-700 rounded-lg flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:database-linear" width="32"></iconify-icon>
</div>
<span className="text-[10px] text-neutral-500 uppercase">Your CRM<br/>(Webhooks)</span>
</div>
</div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(249,115,22,0.05)_0%,_transparent_70%)]"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">Transparent Pricing</h2>
<p className="text-neutral-400">Scale as you grow. No hidden fees.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-[#0A0A0A] border border-neutral-800 rounded-xl p-6 flex flex-col">
<h3 className="text-lg font-medium text-white mb-2">Starter</h3>
<div className="text-3xl font-semibold mb-6">$49<span className="text-sm font-normal text-neutral-500">/mo</span></div>
<ul className="space-y-3 text-sm text-neutral-400 mb-8 flex-1">
<li className="flex gap-2"><iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> 500 AI Minutes</li>
<li className="flex gap-2"><iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> 2 Active Agents</li>
<li className="flex gap-2"><iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Standard Voices</li>
<li className="flex gap-2"><iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Email Support</li>
</ul>
<button className="w-full border border-neutral-700 text-white py-2 rounded-lg hover:bg-neutral-800 transition-colors text-sm">Start Trial</button>
</div>

<div className="bg-[#0F0F0F] border border-orange-500/30 rounded-xl p-6 flex flex-col relative">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-600 text-white px-3 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wide">Popular</div>
<h3 className="text-lg font-medium text-white mb-2">Pro</h3>
<div className="text-3xl font-semibold mb-6">$199<span className="text-sm font-normal text-neutral-500">/mo</span></div>
<ul className="space-y-3 text-sm text-neutral-400 mb-8 flex-1">
<li className="flex gap-2"><iconify-icon className="text-orange-500" icon="solar:check-circle-bold"></iconify-icon> 2,500 AI Minutes</li>
<li className="flex gap-2"><iconify-icon className="text-orange-500" icon="solar:check-circle-bold"></iconify-icon> 10 Active Agents</li>
<li className="flex gap-2"><iconify-icon className="text-orange-500" icon="solar:check-circle-bold"></iconify-icon> Ultra-low Latency</li>
<li className="flex gap-2"><iconify-icon className="text-orange-500" icon="solar:check-circle-bold"></iconify-icon> Webhooks &amp; API</li>
</ul>
<button className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-500 transition-colors text-sm font-medium">Get Started</button>
</div>

<div className="bg-[#0A0A0A] border border-neutral-800 rounded-xl p-6 flex flex-col">
<h3 className="text-lg font-medium text-white mb-2">Agency</h3>
<div className="text-3xl font-semibold mb-6">$499<span className="text-sm font-normal text-neutral-500">/mo</span></div>
<ul className="space-y-3 text-sm text-neutral-400 mb-8 flex-1">
<li className="flex gap-2"><iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> 10,000 AI Minutes</li>
<li className="flex gap-2"><iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Unlimited Agents</li>
<li className="flex gap-2"><iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> White-label Dashboard</li>
<li className="flex gap-2"><iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Sub-accounts</li>
</ul>
<button className="w-full border border-neutral-700 text-white py-2 rounded-lg hover:bg-neutral-800 transition-colors text-sm">Contact Sales</button>
</div>

<div className="bg-[#0A0A0A] border border-neutral-800 rounded-xl p-6 flex flex-col">
<h3 className="text-lg font-medium text-white mb-2">Enterprise</h3>
<div className="text-3xl font-semibold mb-6">Custom</div>
<ul className="space-y-3 text-sm text-neutral-400 mb-8 flex-1">
<li className="flex gap-2"><iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Unlimited Volume</li>
<li className="flex gap-2"><iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Dedicated Infra</li>
<li className="flex gap-2"><iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Custom LLM Training</li>
<li className="flex gap-2"><iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> SLA &amp; Priority Support</li>
</ul>
<button className="w-full border border-neutral-700 text-white py-2 rounded-lg hover:bg-neutral-800 transition-colors text-sm">Contact Sales</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 border-t border-neutral-900">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-16 items-center">
<div className="lg:w-1/2">
<span className="text-orange-500 font-medium text-xs tracking-widest uppercase mb-4 block">Developers</span>
<h2 className="text-3xl font-medium tracking-tight mb-6">Control calls with JSON.</h2>
<p className="text-neutral-400 leading-relaxed mb-8">
                        Our REST API allows you to trigger outbound calls, update agent context in real-time, and retrieve call analysis programmatically. Integration takes minutes.
                    </p>
<div className="flex gap-4">
<div className="flex items-center gap-2 text-sm text-white"><iconify-icon icon="logos:python" width="20"></iconify-icon> Python SDK</div>
<div className="flex items-center gap-2 text-sm text-white"><iconify-icon icon="logos:javascript" width="20"></iconify-icon> Node.js SDK</div>
</div>
</div>
<div className="lg:w-1/2 w-full">
<div className="bg-[#0d0d0d] rounded-xl border border-white/10 p-6 font-mono text-xs overflow-x-auto">
<div className="flex gap-2 mb-4">
<div className="w-3 h-3 rounded-full bg-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/50"></div>
</div>
<p className="text-purple-400">curl <span className="text-white">-X POST</span> https://api.market.ai/v1/calls \</p>
<p className="pl-4 text-white">-H <span className="text-green-400">"Authorization: Bearer YOUR_API_KEY"</span> \</p>
<p className="pl-4 text-white">-H <span className="text-green-400">"Content-Type: application/json"</span> \</p>
<p className="pl-4 text-white">-d '{</p>
<p className="pl-8 text-blue-300">"phone_number": <span className="text-green-400">"+15550199876"</span>,</p>
<p className="pl-8 text-blue-300">"agent_id": <span className="text-green-400">"agt_8x92m29"</span>,</p>
<p className="pl-8 text-blue-300">"context": {</p>
<p className="pl-12 text-blue-300">"customer_name": <span className="text-green-400">"Alex"</span>,</p>
<p className="pl-12 text-blue-300">"account_status": <span className="text-green-400">"overdue"</span></p>
<p className="pl-8 text-blue-300">}</p>
<p className="pl-4 text-white">}'</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-black border-t border-neutral-900 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
<div className="col-span-2">
<span className="text-xl font-bold tracking-tight text-white mb-6 block">MARKET.AI</span>
<p className="text-neutral-500 text-sm max-w-xs mb-6">
                        The enterprise voice AI platform for modern business. Automate without compromise.
                    </p>
</div>
<div>
<h4 className="font-medium text-white mb-6 text-sm">Product</h4>
<ul className="space-y-4 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Agents</a></li>
<li><a className="hover:text-white transition-colors" href="#">Flow Builder</a></li>
<li><a className="hover:text-white transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-white transition-colors" href="#">Security</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-white mb-6 text-sm">Resources</h4>
<ul className="space-y-4 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-white transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Community</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-white mb-6 text-sm">Company</h4>
<ul className="space-y-4 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-white transition-colors" href="#">Legal</a></li>
</ul>
</div>
</div>
<div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-600">
<p>© 2024 Market.AI Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
