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
      

<nav className="fixed top-0 w-full z-50 glass-nav">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white shadow-lg shadow-orange-500/20 group-hover:shadow-orange-500/40 transition duration-300">
<iconify-icon icon="lucide:bot" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-white font-medium tracking-tighter text-lg">ORBITAL</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors duration-200" href="#">Solutions</a>
<a className="hover:text-white transition-colors duration-200" href="#">Integrations</a>
<a className="hover:text-white transition-colors duration-200" href="#">Resources</a>
<a className="hover:text-white transition-colors duration-200" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-white hover:text-orange-400 transition-colors" href="#">Sign in</a>
<a className="group relative inline-flex h-9 items-center justify-center overflow-hidden rounded-md bg-white px-4 font-medium text-neutral-950 transition-all duration-300 hover:bg-orange-50 hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-neutral-950" href="#">
<span className="text-sm">Get Started</span>
<iconify-icon className="ml-2 -mr-1 transition-transform duration-300 group-hover:translate-x-1" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] hero-glow opacity-60 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900/80 border border-white/10 mb-8 animate-fade-in-up">
<span className="flex h-2 w-2 rounded-full bg-orange-500"></span>
<span className="text-xs font-medium text-neutral-300 tracking-wide uppercase">New: GPT-4o Integration</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tighter mb-6 leading-[1.1]">
                Customer support on <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-red-500">autopilot.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Build intelligent AI chatbots that understand context, resolve tickets instantly, and integrate seamlessly with your existing stack. No code required.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<button className="h-12 px-8 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-medium transition-all duration-200 shadow-[0_0_20px_-5px_rgba(234,88,12,0.5)] flex items-center gap-2">
                    Start Building Free
                    <iconify-icon icon="lucide:zap" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<button className="h-12 px-8 rounded-lg border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-800 text-white font-medium transition-all duration-200 flex items-center gap-2 backdrop-blur-sm">
<iconify-icon icon="lucide:play-circle" strokeWidth="1.5" width="18"></iconify-icon>
                    Watch Demo
                </button>
</div>

<div className="relative max-w-5xl mx-auto">
<div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl blur-xl opacity-50"></div>
<div className="relative rounded-xl border border-white/10 bg-neutral-900/80 backdrop-blur-xl shadow-2xl overflow-hidden">

<div className="h-10 border-b border-white/5 bg-neutral-900 flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
</div>
</div>

<div className="grid md:grid-cols-[280px_1fr_280px] h-[500px] text-left">

<div className="hidden md:block border-r border-white/5 bg-neutral-900/50 p-4">
<div className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-4">Workflows</div>
<div className="space-y-1">
<div className="p-2 rounded bg-orange-500/10 text-orange-400 text-sm font-medium flex items-center gap-2 border border-orange-500/20">
<iconify-icon icon="lucide:message-square" width="16"></iconify-icon>
                                    Customer Support
                                </div>
<div className="p-2 rounded hover:bg-white/5 text-neutral-400 text-sm font-medium flex items-center gap-2 transition cursor-pointer">
<iconify-icon icon="lucide:shopping-cart" width="16"></iconify-icon>
                                    Order Tracking
                                </div>
<div className="p-2 rounded hover:bg-white/5 text-neutral-400 text-sm font-medium flex items-center gap-2 transition cursor-pointer">
<iconify-icon icon="lucide:calendar" width="16"></iconify-icon>
                                    Booking Agent
                                </div>
</div>
</div>

<div className="flex flex-col bg-neutral-950/50 relative">
<div className="flex-1 p-6 space-y-6 overflow-hidden">

<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white shrink-0">
<iconify-icon icon="lucide:bot" width="16"></iconify-icon>
</div>
<div className="space-y-2 max-w-[85%]">
<div className="p-4 rounded-2xl rounded-tl-none bg-neutral-800/80 text-sm text-neutral-200 border border-white/5 leading-relaxed">
                                            Hello! I'm Orbital AI. I noticed your shipment #4921 is delayed. Would you like me to process a 20% discount on your next order as compensation?
                                        </div>
</div>
</div>

<div className="flex gap-4 flex-row-reverse">
<div className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center text-neutral-400 shrink-0">
<iconify-icon icon="lucide:user" width="16"></iconify-icon>
</div>
<div className="space-y-2 max-w-[85%]">
<div className="p-4 rounded-2xl rounded-tr-none bg-orange-600 text-sm text-white shadow-lg shadow-orange-900/20 leading-relaxed">
                                            Yes, please do that. Also, when will it arrive?
                                        </div>
</div>
</div>

<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white shrink-0">
<iconify-icon icon="lucide:bot" width="16"></iconify-icon>
</div>
<div className="flex items-center gap-2 mt-2">
<div className="flex gap-1">
<span className="w-1.5 h-1.5 bg-neutral-600 rounded-full animate-bounce"></span>
<span className="w-1.5 h-1.5 bg-neutral-600 rounded-full animate-bounce delay-100"></span>
<span className="w-1.5 h-1.5 bg-neutral-600 rounded-full animate-bounce delay-200"></span>
</div>
<span className="text-xs text-neutral-500">Processing refund &amp; tracking...</span>
</div>
</div>
</div>

<div className="p-4 border-t border-white/5 bg-neutral-900">
<div className="relative">
<input className="w-full bg-neutral-950 border border-neutral-800 rounded-lg py-3 px-4 text-sm text-white focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 placeholder-neutral-600" disabled="" placeholder="Type a message..." type="text"/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-neutral-500 hover:text-orange-500 transition">
<iconify-icon icon="lucide:send" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="hidden md:block border-l border-white/5 bg-neutral-900/50 p-4">
<div className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-4">Live Context</div>
<div className="space-y-4">
<div className="p-3 rounded border border-white/5 bg-neutral-800/30">
<div className="text-xs text-neutral-500 mb-1">Customer Sentiment</div>
<div className="flex items-center gap-2 text-green-400 text-sm font-medium">
<iconify-icon icon="lucide:smile" width="14"></iconify-icon>
                                         Positive (84%)
                                     </div>
</div>
<div className="p-3 rounded border border-white/5 bg-neutral-800/30">
<div className="text-xs text-neutral-500 mb-1">Intent Detected</div>
<div className="flex items-center gap-2 text-orange-400 text-sm font-medium">
<iconify-icon icon="lucide:package-search" width="14"></iconify-icon>
                                         Shipment Inquiry
                                     </div>
</div>
<div className="p-3 rounded border border-white/5 bg-neutral-800/30">
<div className="text-xs text-neutral-500 mb-1">Action Taken</div>
<div className="text-neutral-300 text-xs font-mono bg-neutral-950 p-1.5 rounded mt-1 border border-white/5">
                                         API.refund({ 
                                            amount: '20%',
                                            user: 'uid_291'
                                         })
                                     </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-white/5 bg-neutral-900/30">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-sm font-medium text-neutral-500 mb-8">POWERING AUTOMATION FOR NEXT-GEN TEAMS</p>
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex justify-center items-center gap-2 text-lg font-semibold text-white tracking-tight">
<iconify-icon icon="lucide:triangle" width="20"></iconify-icon> ACME Corp
                </div>
<div className="flex justify-center items-center gap-2 text-lg font-semibold text-white tracking-tight">
<iconify-icon icon="lucide:box" width="20"></iconify-icon> Stripe
                </div>
<div className="flex justify-center items-center gap-2 text-lg font-semibold text-white tracking-tight">
<iconify-icon icon="lucide:hexagon" width="20"></iconify-icon> Vercel
                </div>
<div className="flex justify-center items-center gap-2 text-lg font-semibold text-white tracking-tight">
<iconify-icon icon="lucide:wind" width="20"></iconify-icon> Tailwind
                </div>
<div className="flex justify-center items-center gap-2 text-lg font-semibold text-white tracking-tight">
<iconify-icon icon="lucide:layers" width="20"></iconify-icon> Linear
                </div>
</div>
</div>
</section>

<section className="py-24 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:text-center max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tighter mb-4">
                    Intelligent features for <br/> modern support teams.
                </h2>
<p className="text-neutral-400">
                    Everything you need to automate conversations, from visual flow builders to deep analytics integration.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-2xl border border-white/5 bg-neutral-900/40 hover:bg-neutral-900/60 transition-colors duration-300 card-gradient overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center text-orange-500 mb-6 border border-white/5 shadow-inner">
<iconify-icon icon="lucide:git-branch" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Visual Flow Builder</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        Drag and drop to create complex conversation paths. No coding skills required to build sophisticated logic.
                    </p>
</div>

<div className="group relative p-8 rounded-2xl border border-white/5 bg-neutral-900/40 hover:bg-neutral-900/60 transition-colors duration-300 card-gradient overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center text-orange-500 mb-6 border border-white/5 shadow-inner">
<iconify-icon icon="lucide:brain-circuit" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Context Aware AI</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        Our AI remembers past interactions and user data to provide personalized, human-like responses.
                    </p>
</div>

<div className="group relative p-8 rounded-2xl border border-white/5 bg-neutral-900/40 hover:bg-neutral-900/60 transition-colors duration-300 card-gradient overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center text-orange-500 mb-6 border border-white/5 shadow-inner">
<iconify-icon icon="lucide:blocks" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">1-Click Integrations</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        Connect with Shopify, Slack, Salesforce, and 50+ other tools instantly to automate actions.
                    </p>
</div>
</div>

<div className="grid md:grid-cols-2 gap-6 mt-6">
<div className="p-8 rounded-2xl border border-white/5 bg-neutral-900/40 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-30 transition-opacity">
<iconify-icon className="text-orange-500 rotate-12" icon="lucide:bar-chart-2" width="120"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Real-time Analytics</h3>
<p className="text-sm text-neutral-500 leading-relaxed max-w-sm mb-6">
                        Track resolution times, CSAT scores, and AI performance in a single dashboard.
                    </p>
<div className="h-32 w-full bg-neutral-950/50 rounded-lg border border-white/5 p-4 relative">

<div className="flex items-end justify-between h-full gap-2">
<div className="w-full bg-neutral-800/50 rounded-t h-[30%]"></div>
<div className="w-full bg-neutral-800/50 rounded-t h-[50%]"></div>
<div className="w-full bg-neutral-800/50 rounded-t h-[40%]"></div>
<div className="w-full bg-orange-600/80 rounded-t h-[75%] relative shadow-[0_0_15px_-2px_rgba(249,115,22,0.5)]"></div>
<div className="w-full bg-neutral-800/50 rounded-t h-[60%]"></div>
</div>
</div>
</div>
<div className="p-8 rounded-2xl border border-white/5 bg-neutral-900/40 relative overflow-hidden flex flex-col justify-between">
<div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Multilingual Support</h3>
<p className="text-sm text-neutral-500 leading-relaxed max-w-sm">
                            Automatically translate and converse in over 95 languages without extra configuration.
                        </p>
</div>
<div className="mt-8 flex gap-3 overflow-hidden">
<div className="px-3 py-1.5 rounded-full border border-white/10 bg-neutral-800/50 text-xs text-neutral-300">English</div>
<div className="px-3 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/10 text-xs text-orange-400">Spanish</div>
<div className="px-3 py-1.5 rounded-full border border-white/10 bg-neutral-800/50 text-xs text-neutral-300">French</div>
<div className="px-3 py-1.5 rounded-full border border-white/10 bg-neutral-800/50 text-xs text-neutral-300">German</div>
<div className="px-3 py-1.5 rounded-full border border-white/10 bg-neutral-800/50 text-xs text-neutral-300">Japanese</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950/30 border border-orange-500/20 mb-6">
<span className="text-xs font-medium text-orange-400 tracking-wide uppercase">Developer First</span>
</div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tighter mb-6">
                    Embed in minutes.<br/> Customize forever.
                </h2>
<p className="text-neutral-400 mb-8 leading-relaxed">
                    Add Orbital to your site with a single script tag. Use our robust API to trigger events, update user context, or fetch conversation history programmatically.
                </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 shrink-0">
<iconify-icon icon="lucide:check" width="12"></iconify-icon>
</div>
<span className="text-sm text-neutral-300">Lightweight 4kb SDK</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 shrink-0">
<iconify-icon icon="lucide:check" width="12"></iconify-icon>
</div>
<span className="text-sm text-neutral-300">Type-safe Node.js &amp; Python clients</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 shrink-0">
<iconify-icon icon="lucide:check" width="12"></iconify-icon>
</div>
<span className="text-sm text-neutral-300">Webhooks for every event</span>
</li>
</ul>
</div>

<div className="relative group">
<div className="absolute -inset-2 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
<div className="relative rounded-xl border border-white/10 bg-[#0D0D0D] p-6 font-mono text-sm overflow-hidden shadow-2xl">
<div className="flex items-center justify-between mb-4 border-b border-white/5 pb-4">
<div className="flex gap-2 text-xs text-neutral-500">
<span className="text-orange-400">index.js</span>
</div>
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-neutral-800"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-800"></div>
</div>
</div>
<div className="space-y-1.5 text-xs md:text-sm">
<div className="flex">
<span className="text-neutral-600 w-6 select-none">1</span>
<span className="text-purple-400">import</span> <span className="text-white">{ Orbital }</span> <span className="text-purple-400">from</span> <span className="text-green-400">'@orbital/sdk'</span>;
                        </div>
<div className="flex">
<span className="text-neutral-600 w-6 select-none">2</span>
</div>
<div className="flex">
<span className="text-neutral-600 w-6 select-none">3</span>
<span className="text-neutral-500">// Initialize the AI agent</span>
</div>
<div className="flex">
<span className="text-neutral-600 w-6 select-none">4</span>
<span className="text-purple-400">const</span> <span className="text-blue-400">agent</span> <span className="text-white">=</span> <span className="text-purple-400">new</span> <span className="text-yellow-300">Orbital</span><span className="text-white">({</span>
</div>
<div className="flex">
<span className="text-neutral-600 w-6 select-none">5</span>
<span className="pl-4 text-white">apiKey:</span> <span className="text-green-400">'orb_live_592...'</span><span className="text-white">,</span>
</div>
<div className="flex">
<span className="text-neutral-600 w-6 select-none">6</span>
<span className="pl-4 text-white">theme:</span> <span className="text-green-400">'dark'</span>
</div>
<div className="flex">
<span className="text-neutral-600 w-6 select-none">7</span>
<span className="text-white">});</span>
</div>
<div className="flex">
<span className="text-neutral-600 w-6 select-none">8</span>
</div>
<div className="flex">
<span className="text-neutral-600 w-6 select-none">9</span>
<span className="text-purple-400">await</span> <span className="text-blue-400">agent</span><span className="text-white">.</span><span className="text-yellow-300">identify</span><span className="text-white">({</span>
</div>
<div className="flex">
<span className="text-neutral-600 w-6 select-none">10</span>
<span className="pl-4 text-white">userId:</span> <span className="text-green-400">'user_123'</span><span className="text-white">,</span>
</div>
<div className="flex">
<span className="text-neutral-600 w-6 select-none">11</span>
<span className="pl-4 text-white">email:</span> <span className="text-green-400">'alex@company.com'</span>
</div>
<div className="flex">
<span className="text-neutral-600 w-6 select-none">12</span>
<span className="text-white">});</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tighter mb-4">Simple, transparent pricing.</h2>
<p className="text-neutral-400">Scale as you grow. No hidden fees.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="p-8 rounded-2xl border border-white/5 bg-neutral-900/40 flex flex-col">
<div className="mb-4 text-lg font-medium text-white">Starter</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-bold text-white tracking-tight">$0</span>
<span className="text-neutral-500">/mo</span>
</div>
<p className="text-sm text-neutral-400 mb-8">Perfect for hobby projects and testing.</p>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex gap-3 text-sm text-neutral-300"><iconify-icon className="text-orange-500" icon="lucide:check"></iconify-icon> 50 Conversations/mo</li>
<li className="flex gap-3 text-sm text-neutral-300"><iconify-icon className="text-orange-500" icon="lucide:check"></iconify-icon> Basic Analytics</li>
<li className="flex gap-3 text-sm text-neutral-300"><iconify-icon className="text-orange-500" icon="lucide:check"></iconify-icon> 1 Agent</li>
</ul>
<button className="w-full py-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white font-medium text-sm transition-colors">Get Started</button>
</div>

<div className="p-8 rounded-2xl border border-orange-500/30 bg-neutral-900/60 flex flex-col relative shadow-[0_0_40px_-10px_rgba(249,115,22,0.1)]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-full text-[10px] font-bold text-white uppercase tracking-wider">Most Popular</div>
<div className="mb-4 text-lg font-medium text-white">Pro</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-bold text-white tracking-tight">$49</span>
<span className="text-neutral-500">/mo</span>
</div>
<p className="text-sm text-neutral-400 mb-8">For growing startups and support teams.</p>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex gap-3 text-sm text-white"><iconify-icon className="text-orange-500" icon="lucide:check"></iconify-icon> 2,000 Conversations/mo</li>
<li className="flex gap-3 text-sm text-white"><iconify-icon className="text-orange-500" icon="lucide:check"></iconify-icon> Advanced Analytics</li>
<li className="flex gap-3 text-sm text-white"><iconify-icon className="text-orange-500" icon="lucide:check"></iconify-icon> Unlimited Agents</li>
<li className="flex gap-3 text-sm text-white"><iconify-icon className="text-orange-500" icon="lucide:check"></iconify-icon> Custom Branding</li>
</ul>
<button className="w-full py-2.5 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-medium text-sm transition-colors shadow-lg shadow-orange-900/20">Start Free Trial</button>
</div>

<div className="p-8 rounded-2xl border border-white/5 bg-neutral-900/40 flex flex-col">
<div className="mb-4 text-lg font-medium text-white">Scale</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-bold text-white tracking-tight">$199</span>
<span className="text-neutral-500">/mo</span>
</div>
<p className="text-sm text-neutral-400 mb-8">For large volume organizations.</p>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex gap-3 text-sm text-neutral-300"><iconify-icon className="text-orange-500" icon="lucide:check"></iconify-icon> Unlimited Conversations</li>
<li className="flex gap-3 text-sm text-neutral-300"><iconify-icon className="text-orange-500" icon="lucide:check"></iconify-icon> Dedicated Support</li>
<li className="flex gap-3 text-sm text-neutral-300"><iconify-icon className="text-orange-500" icon="lucide:check"></iconify-icon> SLA &amp; SSO</li>
</ul>
<button className="w-full py-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white font-medium text-sm transition-colors">Contact Sales</button>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-orange-900/20 via-neutral-950 to-neutral-950 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-8">
                Ready to automate your support?
            </h2>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="h-12 px-8 rounded-lg bg-white text-neutral-950 font-medium hover:bg-orange-50 transition-colors flex items-center gap-2">
                    Get Started Now
                    <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
<button className="h-12 px-8 rounded-lg text-neutral-400 hover:text-white font-medium transition-colors">
                    Talk to an expert
                </button>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-neutral-950 pt-16 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white">
<iconify-icon icon="lucide:bot" width="14"></iconify-icon>
</div>
<span className="text-white font-medium tracking-tighter">ORBITAL</span>
</div>
<p className="text-sm text-neutral-500 max-w-xs">
                        Building the future of automated customer communication. Intelligent, fast, and human-centric.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Product</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-orange-500 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Company</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-orange-500 transition-colors" href="#">About</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Legal</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-orange-500 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="text-xs text-neutral-600">
                    © 2023 Orbital Inc. All rights reserved.
                </div>
<div className="flex items-center gap-4 text-neutral-500">
<a className="hover:text-white transition" href="#"><iconify-icon icon="lucide:twitter" width="18"></iconify-icon></a>
<a className="hover:text-white transition" href="#"><iconify-icon icon="lucide:github" width="18"></iconify-icon></a>
<a className="hover:text-white transition" href="#"><iconify-icon icon="lucide:linkedin" width="18"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
