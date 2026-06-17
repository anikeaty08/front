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



        // Scroll Reveal Animation
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });

        // Navbar blur effect on scroll
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 20) {
                nav.classList.add('shadow-lg');
                nav.classList.replace('bg-transparent', 'glass');
            } else {
                nav.classList.remove('shadow-lg');
            }
        });
        
        // Simulating Live Data Feed
        const feedContainer = document.getElementById('data-feed');
        const actions = ['Purchase', 'Sign Up', 'Pageview', 'Click', 'Add to Cart'];
        const colors = ['text-emerald-400', 'text-purple-400', 'text-indigo-400', 'text-blue-400', 'text-pink-400'];
        
        setInterval(() => {
            const actionIndex = Math.floor(Math.random() * actions.length);
            const userNum = Math.floor(Math.random() * 9000) + 1000;
            const newItem = document.createElement('div');
            newItem.className = 'flex justify-between animate-fade-in-down';
            newItem.innerHTML = `
                <span class="${colors[actionIndex]}">User_${userNum}</span> 
                <span>${actions[actionIndex]}</span> 
                <span>Just now</span>
            `;
            
            feedContainer.insertBefore(newItem, feedContainer.firstChild);
            if(feedContainer.children.length > 5) {
                feedContainer.removeChild(feedContainer.lastChild);
            }
        }, 2000);
    
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
      

<nav className="fixed top-0 w-full z-50 glass border-b border-white/5 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white">
<iconify-icon height="18" icon="lucide:sparkles" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-slate-100 font-medium tracking-tight text-lg">NEXUS</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#analytics">Analytics</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-white transition-colors" href="#">Enterprise</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium hover:text-white transition-colors" href="#">Sign in</a>
<a className="group relative px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-full transition-all overflow-hidden border border-white/10" href="#">
<span className="relative z-10 flex items-center gap-2">
                        Get Started 
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</span>
<div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/20 to-indigo-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] -z-10 opacity-50 pointer-events-none"></div>
<div className="absolute inset-0 bg-grid -z-20 mask-image-gradient"></div>
<div className="max-w-7xl mx-auto px-6 text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-8 reveal">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Nexus AI 2.0 is now live
            </div>

<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 reveal delay-100">
                Marketing intelligence, <br/>
<span className="text-gradient-primary">reimagined by AI.</span>
</h1>
<p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed reveal delay-200">
                Stop guessing. Start predicting. Nexus analyzes millions of data points to generate actionable marketing strategies in real-time.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 reveal delay-300">
<button className="px-8 py-3.5 bg-white text-slate-950 rounded-full font-medium hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] flex items-center gap-2">
                    Start Free Trial
                </button>
<button className="px-8 py-3.5 bg-slate-800/50 border border-slate-700 text-white rounded-full font-medium hover:bg-slate-800 transition-all hover:border-slate-600 flex items-center gap-2">
<iconify-icon icon="lucide:play-circle" strokeWidth="1.5" width="18"></iconify-icon>
                    Watch Demo
                </button>
</div>

<div className="relative max-w-5xl mx-auto reveal delay-300">
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl blur opacity-20"></div>
<div className="relative bg-slate-900 border border-white/10 rounded-xl shadow-2xl overflow-hidden group">

<div className="h-10 bg-slate-900 border-b border-white/5 flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-slate-700"></div>
<div className="w-3 h-3 rounded-full bg-slate-700"></div>
<div className="w-3 h-3 rounded-full bg-slate-700"></div>
</div>
<div className="mx-auto bg-slate-800/50 rounded-md px-3 py-1 text-xs text-slate-500 flex items-center gap-2 w-64 justify-center">
<iconify-icon icon="lucide:lock" width="10"></iconify-icon>
                            nexus-ai.com/dashboard
                        </div>
</div>

<div className="grid grid-cols-12 h-[500px] md:h-[600px] bg-slate-950/80 p-1">

<div className="col-span-2 border-r border-white/5 hidden md:flex flex-col p-4 gap-6">
<div className="space-y-1">
<div className="p-2 bg-indigo-500/10 text-indigo-400 rounded-lg flex items-center gap-3 text-sm font-medium">
<iconify-icon icon="lucide:layout-dashboard" width="18"></iconify-icon>
                                    Overview
                                </div>
<div className="p-2 hover:bg-white/5 text-slate-400 hover:text-white rounded-lg flex items-center gap-3 text-sm transition-colors cursor-pointer">
<iconify-icon icon="lucide:bar-chart-2" width="18"></iconify-icon>
                                    Analytics
                                </div>
<div className="p-2 hover:bg-white/5 text-slate-400 hover:text-white rounded-lg flex items-center gap-3 text-sm transition-colors cursor-pointer">
<iconify-icon icon="lucide:users" width="18"></iconify-icon>
                                    Audience
                                </div>
<div className="p-2 hover:bg-white/5 text-slate-400 hover:text-white rounded-lg flex items-center gap-3 text-sm transition-colors cursor-pointer">
<iconify-icon icon="lucide:zap" width="18"></iconify-icon>
                                    Automation
                                </div>
</div>
<div className="mt-auto p-4 bg-slate-900/50 rounded-xl border border-white/5">
<div className="flex items-center gap-3 mb-2">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-xs font-medium text-slate-300">System Online</span>
</div>
<div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-green-500 w-[98%]"></div>
</div>
</div>
</div>

<div className="col-span-12 md:col-span-10 p-6 overflow-hidden relative">

<div className="grid grid-cols-3 gap-4 mb-6">
<div className="glass-card p-4 rounded-xl animate-float">
<div className="flex justify-between items-start mb-2">
<span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Total Revenue</span>
<iconify-icon className="text-emerald-400" icon="lucide:trending-up" width="16"></iconify-icon>
</div>
<div className="text-2xl text-white font-medium">$124,592</div>
<div className="text-xs text-emerald-400 mt-1 flex items-center gap-1">
                                        +14.2% <span className="text-slate-500">vs last month</span>
</div>
</div>
<div className="glass-card p-4 rounded-xl animate-float" style={{animationDelay: '0.2s'}}>
<div className="flex justify-between items-start mb-2">
<span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Active Users</span>
<iconify-icon className="text-indigo-400" icon="lucide:users" width="16"></iconify-icon>
</div>
<div className="text-2xl text-white font-medium">8,542</div>
<div className="text-xs text-indigo-400 mt-1 flex items-center gap-1">
                                        +5.4% <span className="text-slate-500">vs last week</span>
</div>
</div>
<div className="glass-card p-4 rounded-xl animate-float" style={{animationDelay: '0.4s'}}>
<div className="flex justify-between items-start mb-2">
<span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Conversion</span>
<iconify-icon className="text-purple-400" icon="lucide:activity" width="16"></iconify-icon>
</div>
<div className="text-2xl text-white font-medium">3.2%</div>
<div className="text-xs text-purple-400 mt-1 flex items-center gap-1">
                                        +1.1% <span className="text-slate-500">vs yesterday</span>
</div>
</div>
</div>

<div className="glass-card rounded-xl p-6 h-64 md:h-80 relative border border-white/5">
<div className="flex justify-between items-center mb-6">
<h3 className="text-sm font-medium text-slate-200">Traffic Overview</h3>
<div className="flex gap-2">
<span className="px-2 py-1 bg-white/5 rounded text-xs text-slate-400">7D</span>
<span className="px-2 py-1 bg-indigo-500/20 text-indigo-300 rounded text-xs border border-indigo-500/20">30D</span>
<span className="px-2 py-1 bg-white/5 rounded text-xs text-slate-400">3M</span>
</div>
</div>

<div className="absolute bottom-6 left-6 right-6 h-40 flex items-end justify-between gap-2">

<div className="w-full bg-indigo-500/20 rounded-sm h-[40%] relative group">
<div className="absolute bottom-0 w-full bg-indigo-500 rounded-sm h-0 group-hover:h-full transition-all duration-500" style={{height: '40%'}}></div>
</div>
<div className="w-full bg-indigo-500/20 rounded-sm h-[65%] relative group">
<div className="absolute bottom-0 w-full bg-indigo-500 rounded-sm h-0 group-hover:h-full transition-all duration-500" style={{height: '65%'}}></div>
</div>
<div className="w-full bg-indigo-500/20 rounded-sm h-[50%] relative group">
<div className="absolute bottom-0 w-full bg-indigo-500 rounded-sm h-0 group-hover:h-full transition-all duration-500" style={{height: '50%'}}></div>
</div>
<div className="w-full bg-indigo-500/20 rounded-sm h-[80%] relative group">
<div className="absolute bottom-0 w-full bg-indigo-500 rounded-sm h-0 group-hover:h-full transition-all duration-500" style={{height: '80%'}}></div>
</div>
<div className="w-full bg-indigo-500/20 rounded-sm h-[60%] relative group">
<div className="absolute bottom-0 w-full bg-indigo-500 rounded-sm h-0 group-hover:h-full transition-all duration-500" style={{height: '60%'}}></div>
</div>
<div className="w-full bg-indigo-500/20 rounded-sm h-[75%] relative group">
<div className="absolute bottom-0 w-full bg-indigo-500 rounded-sm h-0 group-hover:h-full transition-all duration-500" style={{height: '75%'}}></div>
</div>
<div className="w-full bg-indigo-500/20 rounded-sm h-[90%] relative group">
<div className="absolute bottom-0 w-full bg-indigo-500 rounded-sm h-0 group-hover:h-full transition-all duration-500 shadow-[0_0_15px_rgba(99,102,241,0.5)]" style={{height: '90%'}}></div>
</div>
</div>

<div className="absolute inset-0 z-[-1] flex flex-col justify-between p-6 opacity-20 pointer-events-none">
<div className="border-b border-dashed border-slate-500 w-full h-full"></div>
<div className="border-b border-dashed border-slate-500 w-full h-full"></div>
<div className="border-b border-dashed border-slate-500 w-full h-full"></div>
</div>
</div>

<div className="absolute bottom-8 right-8 w-64 glass-card p-4 rounded-xl border border-indigo-500/30 animate-float-delayed">
<div className="flex items-center gap-2 mb-2">
<div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></div>
<span className="text-xs font-semibold text-indigo-300">AI Insight</span>
</div>
<p className="text-xs text-slate-300 leading-relaxed">
                                    Campaign "Alpha" is outperforming benchmarks by 24%. Recommended: Increase budget by $500.
                                </p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-20 border-y border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6 py-8">
<p className="text-center text-xs font-medium text-slate-500 uppercase tracking-widest mb-6">Trusted by innovative teams</p>
<div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-semibold text-white tracking-tight">ACME Corp</span>
<span className="text-xl font-semibold text-white tracking-tight">StarkInd</span>
<span className="text-xl font-semibold text-white tracking-tight">WayneEnt</span>
<span className="text-xl font-semibold text-white tracking-tight">CyberDyne</span>
<span className="text-xl font-semibold text-white tracking-tight">Umbrella</span>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 max-w-2xl reveal">
<h2 className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight">Powerful features <br/>built for growth.</h2>
<p className="text-slate-400 text-lg">Everything you need to analyze, optimize, and scale your marketing efforts.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl glass-card hover:bg-white/[0.02] border border-white/5 hover:border-indigo-500/50 transition-all duration-300 reveal delay-100 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 bg-slate-900 rounded-lg border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
<iconify-icon className="text-indigo-400" icon="lucide:brain-circuit" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 relative z-10">Predictive AI</h3>
<p className="text-slate-400 text-sm leading-relaxed relative z-10">
                        Forecast trends before they happen. Our models analyze historical data to predict future market movements.
                    </p>
</div>

<div className="group p-8 rounded-2xl glass-card hover:bg-white/[0.02] border border-white/5 hover:border-purple-500/50 transition-all duration-300 reveal delay-200 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 bg-slate-900 rounded-lg border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
<iconify-icon className="text-purple-400" icon="lucide:zap" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 relative z-10">Real-time Actions</h3>
<p className="text-slate-400 text-sm leading-relaxed relative z-10">
                        Automate campaign adjustments instantly. Trigger workflows based on live user behavior.
                    </p>
</div>

<div className="group p-8 rounded-2xl glass-card hover:bg-white/[0.02] border border-white/5 hover:border-pink-500/50 transition-all duration-300 reveal delay-300 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 bg-slate-900 rounded-lg border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
<iconify-icon className="text-pink-400" icon="lucide:shield-check" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 relative z-10">Privacy First</h3>
<p className="text-slate-400 text-sm leading-relaxed relative z-10">
                        GDPR compliant by default. Analyze data without compromising user privacy or security.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900/30 border-y border-white/5 relative overflow-hidden" id="analytics">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative reveal">

<div className="relative rounded-xl border border-white/10 bg-slate-950 shadow-2xl overflow-hidden aspect-[4/3]">

<div className="absolute inset-0 z-20 pointer-events-none opacity-20">
<div className="w-full h-[2px] bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,1)] animate-scan"></div>
</div>
<div className="p-6 h-full flex flex-col">
<div className="flex justify-between items-center mb-6">
<span className="text-sm font-medium text-white">Live Visitors</span>
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
<span className="text-xs text-red-400 font-mono">LIVE</span>
</div>
</div>

<div className="flex-1 relative">

<div className="absolute top-[20%] left-[30%] w-3 h-3 bg-indigo-500 rounded-full animate-ping opacity-75"></div>
<div className="absolute top-[20%] left-[30%] w-2 h-2 bg-indigo-400 rounded-full"></div>
<div className="absolute top-[50%] left-[60%] w-3 h-3 bg-purple-500 rounded-full animate-ping opacity-75" style={{animationDelay: '1s'}}></div>
<div className="absolute top-[50%] left-[60%] w-2 h-2 bg-purple-400 rounded-full"></div>
<div className="absolute top-[70%] left-[20%] w-3 h-3 bg-cyan-500 rounded-full animate-ping opacity-75" style={{animationDelay: '0.5s'}}></div>
<div className="absolute top-[70%] left-[20%] w-2 h-2 bg-cyan-400 rounded-full"></div>

<svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
<path d="M100,60 Q200,100 250,150" fill="none" stroke="white" stroke-dasharray="4 4"></path>
<path d="M250,150 Q150,200 80,210" fill="none" stroke="white" stroke-dasharray="4 4"></path>
</svg>
</div>

<div className="mt-auto h-24 overflow-hidden relative mask-image-gradient-b">
<div className="space-y-2 font-mono text-xs text-slate-500" id="data-feed">
<div className="flex justify-between"><span className="text-indigo-400">User_2910</span> <span>New Session</span> <span>0s ago</span></div>
<div className="flex justify-between"><span className="text-emerald-400">User_9211</span> <span>Purchase</span> <span>2s ago</span></div>
<div className="flex justify-between"><span className="text-indigo-400">User_1002</span> <span>Pageview</span> <span>3s ago</span></div>
<div className="flex justify-between"><span className="text-purple-400">User_5592</span> <span>Sign Up</span> <span>5s ago</span></div>
</div>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2 reveal delay-100">
<div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 border border-indigo-500/20">
<iconify-icon icon="lucide:activity" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h2 className="text-3xl md:text-4xl font-medium text-white mb-6 tracking-tight">
                    See the full picture <br/>
<span className="text-slate-500">in milliseconds.</span>
</h2>
<p className="text-slate-400 text-lg mb-8 leading-relaxed">
                    Nexus processes data streams instantly, visualizing user journeys as they happen. No more waiting for end-of-day reports.
                </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-slate-300">
<iconify-icon className="text-indigo-500" icon="lucide:check-circle-2" width="20"></iconify-icon>
<span className="text-sm">Real-time session replay</span>
</li>
<li className="flex items-center gap-3 text-slate-300">
<iconify-icon className="text-indigo-500" icon="lucide:check-circle-2" width="20"></iconify-icon>
<span className="text-sm">Instant anomaly detection</span>
</li>
<li className="flex items-center gap-3 text-slate-300">
<iconify-icon className="text-indigo-500" icon="lucide:check-circle-2" width="20"></iconify-icon>
<span className="text-sm">Automated funnel analysis</span>
</li>
</ul>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-center text-3xl font-medium text-white mb-16 tracking-tight reveal">Loved by data-driven teams</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-card p-6 rounded-xl border border-white/5 reveal delay-100 hover:border-white/10 transition-colors">
<div className="flex gap-1 text-indigo-400 mb-4">
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-slate-300 text-sm mb-6 leading-relaxed">
                        "Nexus completely changed how we allocate our marketing budget. The AI insights are scary accurate."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700"></div>
<div>
<div className="text-white text-xs font-medium">Sarah Jenkins</div>
<div className="text-slate-500 text-xs">CMO at TechFlow</div>
</div>
</div>
</div>

<div className="glass-card p-6 rounded-xl border border-white/5 reveal delay-200 hover:border-white/10 transition-colors">
<div className="flex gap-1 text-indigo-400 mb-4">
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-slate-300 text-sm mb-6 leading-relaxed">
                        "The integration took minutes. We were seeing actionable data on our dashboard almost immediately."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700"></div>
<div>
<div className="text-white text-xs font-medium">Michael Chen</div>
<div className="text-slate-500 text-xs">Product Lead</div>
</div>
</div>
</div>

<div className="glass-card p-6 rounded-xl border border-white/5 reveal delay-300 hover:border-white/10 transition-colors">
<div className="flex gap-1 text-indigo-400 mb-4">
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-slate-300 text-sm mb-6 leading-relaxed">
                        "Finally, a tool that explains 'why' something happened, not just 'what' happened. A game changer."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700"></div>
<div>
<div className="text-white text-xs font-medium">Elena Rodriguez</div>
<div className="text-slate-500 text-xs">Growth Manager</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl font-medium text-white mb-4 tracking-tight">Simple, transparent pricing</h2>
<div className="flex items-center justify-center gap-3 mt-8">
<span className="text-sm text-slate-400">Monthly</span>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer toggle-checkbox" type="checkbox" value=""/>
<div className="w-11 h-6 bg-slate-800 border border-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600 toggle-label"></div>
</label>
<span className="text-sm text-white">Yearly <span className="text-emerald-400 text-xs ml-1">-20%</span></span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

<div className="glass-card p-8 rounded-2xl border border-white/5 reveal delay-100 hover:translate-y-[-5px] transition-transform duration-300">
<h3 className="text-lg font-medium text-white mb-2">Starter</h3>
<div className="text-3xl font-semibold text-white mb-6">$0 <span className="text-sm text-slate-500 font-normal">/mo</span></div>
<p className="text-sm text-slate-400 mb-8">Perfect for hobby projects and small tests.</p>
<button className="w-full py-2.5 rounded-lg border border-white/10 text-white text-sm hover:bg-white/5 transition-colors">Get Started</button>
<div className="mt-8 space-y-3">
<div className="flex items-center gap-3 text-sm text-slate-400">
<iconify-icon className="text-white" icon="lucide:check" width="16"></iconify-icon> 5,000 Events
                        </div>
<div className="flex items-center gap-3 text-sm text-slate-400">
<iconify-icon className="text-white" icon="lucide:check" width="16"></iconify-icon> 1 Team Member
                        </div>
<div className="flex items-center gap-3 text-sm text-slate-400">
<iconify-icon className="text-white" icon="lucide:check" width="16"></iconify-icon> Basic Analytics
                        </div>
</div>
</div>

<div className="relative glass-card p-8 rounded-2xl border border-indigo-500/50 reveal delay-200 shadow-[0_0_40px_rgba(99,102,241,0.1)] hover:translate-y-[-5px] transition-transform duration-300">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-[10px] font-bold text-white uppercase tracking-wider">Most Popular</div>
<h3 className="text-lg font-medium text-white mb-2">Pro</h3>
<div className="text-3xl font-semibold text-white mb-6">$49 <span className="text-sm text-slate-500 font-normal">/mo</span></div>
<p className="text-sm text-slate-400 mb-8">For growing startups and teams.</p>
<button className="w-full py-2.5 rounded-lg bg-indigo-600 text-white text-sm hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/20">Start Free Trial</button>
<div className="mt-8 space-y-3">
<div className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-indigo-400" icon="lucide:check" width="16"></iconify-icon> 100,000 Events
                        </div>
<div className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-indigo-400" icon="lucide:check" width="16"></iconify-icon> 5 Team Members
                        </div>
<div className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-indigo-400" icon="lucide:check" width="16"></iconify-icon> AI Insights
                        </div>
<div className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-indigo-400" icon="lucide:check" width="16"></iconify-icon> Advanced Funnels
                        </div>
</div>
</div>

<div className="glass-card p-8 rounded-2xl border border-white/5 reveal delay-300 hover:translate-y-[-5px] transition-transform duration-300">
<h3 className="text-lg font-medium text-white mb-2">Enterprise</h3>
<div className="text-3xl font-semibold text-white mb-6">Custom</div>
<p className="text-sm text-slate-400 mb-8">For large-scale organizations.</p>
<button className="w-full py-2.5 rounded-lg border border-white/10 text-white text-sm hover:bg-white/5 transition-colors">Contact Sales</button>
<div className="mt-8 space-y-3">
<div className="flex items-center gap-3 text-sm text-slate-400">
<iconify-icon className="text-white" icon="lucide:check" width="16"></iconify-icon> Unlimited Events
                        </div>
<div className="flex items-center gap-3 text-sm text-slate-400">
<iconify-icon className="text-white" icon="lucide:check" width="16"></iconify-icon> Unlimited Seats
                        </div>
<div className="flex items-center gap-3 text-sm text-slate-400">
<iconify-icon className="text-white" icon="lucide:check" width="16"></iconify-icon> Dedicated Support
                        </div>
<div className="flex items-center gap-3 text-sm text-slate-400">
<iconify-icon className="text-white" icon="lucide:check" width="16"></iconify-icon> SSO &amp; Security
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-slate-950 -z-10"></div>
<div className="max-w-4xl mx-auto px-6 text-center reveal">
<h2 className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight">Ready to unlock your <br/>marketing potential?</h2>
<p className="text-lg text-slate-400 mb-10">Join 2,000+ companies using Nexus to make smarter decisions.</p>
<button className="group relative px-8 py-4 bg-white text-slate-950 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
<span className="relative z-10 flex items-center gap-2">
                    Get Started for Free
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="2" width="20"></iconify-icon>
</span>
<div className="absolute inset-0 rounded-full bg-white blur-lg opacity-40 group-hover:opacity-60 transition-opacity"></div>
</button>
</div>
</section>

<footer className="border-t border-white/5 bg-slate-950 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white">
<iconify-icon height="12" icon="lucide:sparkles" width="12"></iconify-icon>
</div>
<span className="text-slate-100 font-medium tracking-tight">NEXUS</span>
</div>
<p className="text-slate-500 text-sm mb-6 max-w-xs">AI-powered marketing intelligence for the modern growth team.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:github" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-4">Product</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Company</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">About</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-slate-600 text-xs">© 2024 Nexus AI Inc. All rights reserved.</p>
<div className="flex items-center gap-2 text-xs text-slate-600">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    All systems operational
                </div>
</div>
</div>
</footer>



    </>
  );
}
