import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons();

        // Simple Pricing Switcher Logic
        function switchPricing(plan) {
            const bg = document.getElementById('toggle-bg');
            if (plan === 'yearly') {
                bg.style.left = '50%';
            } else {
                bg.style.left = '0';
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-grain fixed inset-0 z-50 opacity-40 mix-blend-overlay"></div>

<nav className="fixed top-0 left-0 right-0 z-40 flex justify-center py-6">
<div className="glass-panel rounded-full px-6 py-3 flex items-center justify-between w-[90%] max-w-5xl shadow-2xl">
<div className="flex items-center gap-2">
<div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(234,88,12,0.4)]">
<span className="text-2xl text-white pb-1" style={{fontFamily: 'var(--font-logo)'}}>P</span>
</div>
<span className="font-semibold text-lg tracking-tight hidden sm:block">PitchwithAI</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors duration-300" href="#features">Capabilities</a>
<a className="hover:text-white transition-colors duration-300" href="#how-it-works">Workflow</a>
<a className="hover:text-white transition-colors duration-300" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<button className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">Login</button>
<button className="bg-white text-black text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-neutral-200 transition-colors shadow-lg shadow-white/10">
                    Start Campaign
                </button>
</div>
</div>
</nav>

<header className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">

<div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-orange-900/20 rounded-full blur-[120px] -z-10"></div>
<div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] -z-10"></div>
<div className="max-w-4xl mx-auto text-center z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-orange-400 mb-8 animate-reveal">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                AI Sales Agent v2.0 is live
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-8 leading-[0.95] text-gradient animate-reveal delay-100">
                Sales on <br/>
<span className="text-white/40 italic font-serif">Autopilot.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-xl mx-auto mb-10 leading-relaxed animate-reveal delay-200">
                Stop manually prospecting. PitchwithAI autonomously finds leads, writes hyper-personalized outreach, and books meetings while you sleep.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-reveal delay-300">
<button className="group relative px-8 py-4 bg-white text-black rounded-full font-semibold text-sm transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] overflow-hidden">
<span className="relative z-10 flex items-center gap-2">
                        Get Started Free <i className="w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</span>
</button>
<button className="px-8 py-4 glass-button rounded-full text-neutral-300 font-medium text-sm hover:text-white flex items-center gap-2 group">
<i className="w-4 h-4 text-neutral-500 group-hover:text-orange-400 transition-colors" data-lucide="play-circle"></i>
                    Watch the Demo
                </button>
</div>
</div>

<div className="mt-20 w-full max-w-5xl relative animate-reveal delay-500">
<div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[80%] h-[200px] bg-orange-500/20 blur-[100px] rounded-full -z-10"></div>
<div className="glass-panel rounded-2xl p-1 border-t border-white/20 shadow-2xl">
<div className="bg-[#0a0a0a] rounded-xl overflow-hidden border border-white/5 aspect-[16/9] relative">

<div className="h-12 border-b border-white/5 flex items-center px-6 gap-4">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="flex-1 text-center">
<div className="inline-block px-4 py-1 rounded-full bg-white/5 text-[10px] text-neutral-500 font-mono tracking-wider">CAMPAIGN_ACTIVE_01</div>
</div>
</div>

<div className="grid grid-cols-12 h-full">

<div className="col-span-3 border-r border-white/5 p-4 hidden sm:block">
<div className="space-y-4">
<div className="h-2 w-20 bg-neutral-800 rounded mb-6"></div>
<div className="space-y-2">
<div className="flex items-center gap-3 p-2 rounded bg-white/5 border border-white/5">
<div className="w-4 h-4 rounded bg-orange-500/50"></div>
<div className="h-2 w-16 bg-neutral-700 rounded"></div>
</div>
<div className="flex items-center gap-3 p-2">
<div className="w-4 h-4 rounded border border-white/10"></div>
<div className="h-2 w-20 bg-neutral-800 rounded"></div>
</div>
<div className="flex items-center gap-3 p-2">
<div className="w-4 h-4 rounded border border-white/10"></div>
<div className="h-2 w-14 bg-neutral-800 rounded"></div>
</div>
</div>
</div>
</div>

<div className="col-span-12 sm:col-span-9 p-8 relative">

<div className="absolute top-10 right-10 flex flex-col gap-3">
<div className="glass-panel p-3 rounded-lg flex items-center gap-3 animate-float">
<div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
<i className="w-4 h-4" data-lucide="linkedin"></i>
</div>
<div>
<div className="text-xs text-neutral-400">Connection Sent</div>
<div className="text-xs text-white font-medium">CTO @ Stripe</div>
</div>
</div>
<div className="glass-panel p-3 rounded-lg flex items-center gap-3 animate-float delay-200" style={{animationDuration: '7s'}}>
<div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
<i className="w-4 h-4" data-lucide="mail"></i>
</div>
<div>
<div className="text-xs text-neutral-400">Email Opened</div>
<div className="text-xs text-white font-medium">VP Sales @ Linear</div>
</div>
</div>
</div>
<div className="space-y-6 max-w-md">
<div className="h-8 w-48 bg-neutral-800 rounded"></div>
<div className="space-y-3">
<div className="h-3 w-full bg-neutral-900 rounded overflow-hidden">
<div className="h-full w-2/3 bg-gradient-to-r from-neutral-800 to-neutral-700 animate-pulse"></div>
</div>
<div className="h-3 w-5/6 bg-neutral-900 rounded"></div>
<div className="h-3 w-4/6 bg-neutral-900 rounded"></div>
</div>
<div className="pt-8 flex gap-4">
<div className="p-4 rounded-lg bg-neutral-900 border border-white/5 w-32">
<div className="text-xs text-neutral-500 mb-1">Leads Found</div>
<div className="text-xl font-mono text-white">1,240</div>
</div>
<div className="p-4 rounded-lg bg-neutral-900 border border-white/5 w-32">
<div className="text-xs text-neutral-500 mb-1">Replies</div>
<div className="text-xl font-mono text-orange-400">18.4%</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-12 border-y border-white/5 bg-black/40 overflow-hidden relative">
<div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10"></div>
<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10"></div>
<div className="flex whitespace-nowrap w-max animate-[ticker_30s_linear_infinite]">
<div className="flex gap-20 items-center px-10 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-xl font-bold tracking-tighter font-sans">ACME CORP</span>
<span className="text-xl font-semibold tracking-tight font-serif">Globex</span>
<span className="text-xl font-mono tracking-tight">Soylent</span>
<span className="text-xl font-bold tracking-tight italic">Umbrella</span>
<span className="text-xl font-semibold tracking-tight">Initech</span>
<span className="text-xl font-bold tracking-tighter font-sans">Massive Dynamic</span>
<span className="text-xl font-bold tracking-tighter font-sans">ACME CORP</span>
<span className="text-xl font-semibold tracking-tight font-serif">Globex</span>
<span className="text-xl font-mono tracking-tight">Soylent</span>
<span className="text-xl font-bold tracking-tight italic">Umbrella</span>
<span className="text-xl font-semibold tracking-tight">Initech</span>
<span className="text-xl font-bold tracking-tighter font-sans">Massive Dynamic</span>
</div>
</div>
</section>

<section className="py-32 px-6 relative" id="features">
<div className="max-w-6xl mx-auto">
<div className="mb-20 md:text-center max-w-3xl mx-auto">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 text-white">
                    The engine room for <br/> <span className="text-neutral-500">modern revenue teams.</span>
</h2>
<p className="text-neutral-400 text-lg">Forget templates. Our AI analyzes your prospect's recent news, LinkedIn posts, and company reports to craft messages that actually get read.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 group relative rounded-3xl p-8 bg-neutral-900/30 border border-white/5 hover:border-white/10 transition-colors overflow-hidden min-h-[400px]">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center mb-6 text-white">
<i className="w-5 h-5" data-lucide="search"></i>
</div>
<h3 className="text-2xl font-medium text-white mb-3">Deep Search Prospecting</h3>
<p className="text-neutral-400 max-w-md">Filter 500M+ profiles by technology stack, funding rounds, and hiring intent. The AI builds your list automatically.</p>
</div>

<div className="mt-10 relative">
<div className="flex gap-3 overflow-hidden mask-linear-fade">
<div className="bg-neutral-800/80 rounded-lg p-4 w-64 border border-white/5 backdrop-blur-sm">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-full bg-purple-500/20"></div>
<div>
<div className="h-2 w-20 bg-white/20 rounded mb-1"></div>
<div className="h-2 w-12 bg-white/10 rounded"></div>
</div>
</div>
<div className="space-y-2">
<div className="text-[10px] text-neutral-500 flex justify-between">
<span>Match Score</span>
<span className="text-green-400">98%</span>
</div>
<div className="h-1 w-full bg-neutral-700 rounded-full overflow-hidden">
<div className="h-full w-[98%] bg-green-400"></div>
</div>
</div>
</div>
<div className="bg-neutral-800/80 rounded-lg p-4 w-64 border border-white/5 backdrop-blur-sm opacity-60">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-full bg-blue-500/20"></div>
<div>
<div className="h-2 w-20 bg-white/20 rounded mb-1"></div>
<div className="h-2 w-12 bg-white/10 rounded"></div>
</div>
</div>
<div className="space-y-2">
<div className="text-[10px] text-neutral-500 flex justify-between">
<span>Match Score</span>
<span className="text-green-400">94%</span>
</div>
<div className="h-1 w-full bg-neutral-700 rounded-full overflow-hidden">
<div className="h-full w-[94%] bg-green-400"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-1 group relative rounded-3xl p-8 bg-neutral-900/30 border border-white/5 hover:border-white/10 transition-colors overflow-hidden">
<div className="relative z-10 h-full flex flex-col">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center mb-6 text-white">
<i className="w-5 h-5" data-lucide="pen-tool"></i>
</div>
<h3 className="text-2xl font-medium text-white mb-3">Human-Level Copy</h3>
<p className="text-neutral-400 mb-8">Context-aware generation that references specific details about the prospect.</p>
<div className="flex-1 bg-black/40 rounded-xl p-4 font-mono text-xs text-neutral-300 border border-white/5 shadow-inner relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-orange-500"></div>
<p className="leading-relaxed opacity-80">
                                "Hey Sarah,<br/><br/>
                                Saw PitchwithAI just raised Series A—congrats!<br/><br/>
                                Given you're scaling the sales team..."
                            </p>
<div className="mt-2 inline-block w-2 h-4 bg-orange-500 animate-pulse"></div>
</div>
</div>
</div>

<div className="md:col-span-1 group relative rounded-3xl p-8 bg-neutral-900/30 border border-white/5 hover:border-white/10 transition-colors">
<div className="relative z-10">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center mb-6 text-white">
<i className="w-5 h-5" data-lucide="share-2"></i>
</div>
<h3 className="text-2xl font-medium text-white mb-3">Omnichannel</h3>
<p className="text-neutral-400 mb-6">Seamlessly weave between Email, LinkedIn, and Phone steps.</p>
<div className="flex justify-around items-center mt-8">
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-neutral-800 relative z-10">
<i className="w-5 h-5 text-neutral-400" data-lucide="mail"></i>
</div>
<div className="h-[1px] w-8 bg-neutral-700"></div>
<div className="w-12 h-12 rounded-full border border-orange-500/30 flex items-center justify-center bg-orange-900/10 relative z-10 shadow-[0_0_15px_rgba(249,115,22,0.3)]">
<i className="w-5 h-5 text-orange-500" data-lucide="linkedin"></i>
</div>
<div className="h-[1px] w-8 bg-neutral-700"></div>
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-neutral-800 relative z-10">
<i className="w-5 h-5 text-neutral-400" data-lucide="phone"></i>
</div>
</div>
</div>
</div>

<div className="md:col-span-2 group relative rounded-3xl p-8 bg-neutral-900/30 border border-white/5 hover:border-white/10 transition-colors overflow-hidden">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
<div className="relative z-10">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center mb-6 text-white">
<i className="w-5 h-5" data-lucide="bar-chart-2"></i>
</div>
<h3 className="text-2xl font-medium text-white mb-3">Predictive Analytics</h3>
<p className="text-neutral-400">Know which campaigns will succeed before you launch them. Optimization based on millions of data points.</p>
</div>
<div className="relative h-40 md:h-full w-full flex items-center justify-center">

<div className="flex items-end gap-2 h-32 w-full px-4">
<div className="w-full bg-neutral-800 rounded-t-sm h-[30%] group-hover:h-[40%] transition-all duration-700 delay-100"></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[50%] group-hover:h-[65%] transition-all duration-700 delay-75"></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[40%] group-hover:h-[45%] transition-all duration-700 delay-150"></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[70%] group-hover:h-[80%] transition-all duration-700 delay-200"></div>
<div className="w-full bg-orange-500 rounded-t-sm h-[55%] group-hover:h-[90%] transition-all duration-700 shadow-[0_0_20px_rgba(249,115,22,0.4)]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden" id="pricing">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent to-neutral-800"></div>
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20">
<h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6 text-white">
                    ROI in <span className="text-orange-500">Days</span>, Not Months.
                </h2>
<p className="text-neutral-400 text-lg max-w-2xl mx-auto mb-10">
                    Cheaper than an SDR. Smarter than a template. Costs less than a lost deal.
                </p>

<div className="inline-flex bg-neutral-900 p-1 rounded-full border border-white/10 relative">
<div className="w-1/2 h-full absolute left-0 bg-neutral-800 rounded-full transition-all duration-300" id="toggle-bg"></div>
<button className="relative z-10 px-6 py-2 text-sm font-medium text-white rounded-full" onclick="switchPricing('monthly')">Monthly</button>
<button className="relative z-10 px-6 py-2 text-sm font-medium text-neutral-400 hover:text-white rounded-full" onclick="switchPricing('yearly')">Yearly <span className="text-[10px] text-orange-400 ml-1">-20%</span></button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">

<div className="glass-panel rounded-3xl p-8 border border-white/5 flex flex-col">
<div className="mb-6">
<h3 className="text-lg font-medium text-white mb-2">Solo Pilot</h3>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-medium text-white tracking-tight">$49</span>
<span className="text-neutral-500">/mo</span>
</div>
<p className="text-neutral-400 text-sm mt-4">Perfect for founders doing their own sales.</p>
</div>
<div className="h-px w-full bg-white/5 mb-6"></div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<i className="w-4 h-4 text-neutral-500" data-lucide="check"></i> 500 AI Credits
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<i className="w-4 h-4 text-neutral-500" data-lucide="check"></i> Email Automation
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<i className="w-4 h-4 text-neutral-500" data-lucide="check"></i> Basic Analytics
                        </li>
</ul>
<button className="w-full py-3 rounded-xl bg-neutral-800 text-white font-medium text-sm hover:bg-neutral-700 transition-colors border border-white/5">
                        Start Free Trial
                    </button>
</div>

<div className="glass-panel rounded-3xl p-8 border border-orange-500/30 bg-gradient-to-b from-orange-900/10 to-transparent relative md:-mt-8 shadow-[0_0_40px_-10px_rgba(249,115,22,0.2)]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full tracking-wide uppercase">
                        Most Popular
                    </div>
<div className="mb-6">
<h3 className="text-lg font-medium text-white mb-2">Growth Engine</h3>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-medium text-white tracking-tight">$149</span>
<span className="text-neutral-500">/mo</span>
</div>
<p className="text-neutral-300 text-sm mt-4">Full power for closing teams.</p>
</div>
<div className="h-px w-full bg-white/10 mb-6"></div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white">
<i className="w-4 h-4 text-orange-500" data-lucide="check"></i> Unlimited AI Credits
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<i className="w-4 h-4 text-orange-500" data-lucide="check"></i> Multi-channel (Email + LI)
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<i className="w-4 h-4 text-orange-500" data-lucide="check"></i> Intent Data Signals
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<i className="w-4 h-4 text-orange-500" data-lucide="check"></i> CRM Integration
                        </li>
</ul>
<button className="w-full py-3 rounded-xl bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-colors shadow-lg shadow-white/10">
                        Get Growth
                    </button>
</div>

<div className="glass-panel rounded-3xl p-8 border border-white/5 flex flex-col">
<div className="mb-6">
<h3 className="text-lg font-medium text-white mb-2">Scale</h3>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-medium text-white tracking-tight">Custom</span>
</div>
<p className="text-neutral-400 text-sm mt-4">For large organizations requiring API access.</p>
</div>
<div className="h-px w-full bg-white/5 mb-6"></div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<i className="w-4 h-4 text-neutral-500" data-lucide="check"></i> API Access
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<i className="w-4 h-4 text-neutral-500" data-lucide="check"></i> White-glove Onboarding
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<i className="w-4 h-4 text-neutral-500" data-lucide="check"></i> Dedicated Success Manager
                        </li>
</ul>
<button className="w-full py-3 rounded-xl bg-neutral-800 text-white font-medium text-sm hover:bg-neutral-700 transition-colors border border-white/5">
                        Contact Sales
                    </button>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 border-t border-white/5">
<div className="max-w-4xl mx-auto text-center relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-orange-500/30 blur-[80px] rounded-full pointer-events-none"></div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8 text-white relative z-10">
                Ready to fill your calendar?
            </h2>
<div className="flex flex-col items-center gap-6 relative z-10">
<button className="px-10 py-4 bg-white text-black rounded-full font-semibold text-sm transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                    Start Your 14-Day Free Trial
                </button>
<p className="text-xs text-neutral-500 uppercase tracking-widest">No Credit Card Required</p>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t border-white/5 bg-black text-neutral-500 text-sm">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-neutral-800 rounded flex items-center justify-center">
<span className="text-xs text-white pb-0.5" style={{fontFamily: 'var(--font-logo)'}}>P</span>
</div>
<span className="font-medium text-neutral-300">PitchwithAI</span>
</div>
<div className="flex gap-8">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
<div>
                © 2024 PitchwithAI Inc.
            </div>
</div>
</footer>


    </>
  );
}
