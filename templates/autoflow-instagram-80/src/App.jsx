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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030304]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="iconify text-white" data-height="20" data-icon="lucide:zap" data-width="20"></span>
<span className="text-white font-medium tracking-tight text-sm">AUTOFLOW</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#">Features</a>
<a className="hover:text-white transition-colors" href="#">Workflows</a>
<a className="hover:text-white transition-colors" href="#">Customers</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium hover:text-white transition-colors hidden sm:block" href="#">Log in</a>
<button className="bg-white text-black text-sm font-medium px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors flex items-center gap-2">
                    Get Started
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-fuchsia-300 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-fuchsia-500"></span>
</span>
                Now with AI-powered engagement
            </div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight mb-6 leading-[1.1]">
                Scale your Instagram <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-indigo-400">without the grind.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Build sophisticated automation workflows to engage followers, schedule content, and auto-reply to DMs. Grow your audience while you sleep.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-white text-black h-12 px-8 rounded-full font-medium hover:bg-neutral-200 transition-all flex items-center justify-center gap-2">
                    Start 14-day free trial
                </button>
<button className="w-full sm:w-auto text-white border border-white/10 bg-white/5 h-12 px-8 rounded-full font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:play-circle" data-width="18"></span>
                    Watch Demo
                </button>
</div>
</div>

<div className="max-w-6xl mx-auto mt-20 relative">

<div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-500 to-indigo-500 rounded-xl blur-3xl opacity-20"></div>
<div className="glass-panel rounded-xl overflow-hidden relative">

<div className="h-10 border-b border-white/5 flex items-center px-4 gap-2 bg-neutral-900/50">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
</div>

<div className="grid grid-cols-12 h-[600px] md:h-[500px]">

<div className="col-span-2 border-r border-white/5 bg-neutral-900/30 p-4 hidden md:flex flex-col gap-1">
<div className="text-xs font-semibold text-neutral-500 mb-4 px-2 tracking-wider">MENU</div>
<div className="flex items-center gap-3 px-3 py-2 bg-white/5 rounded-md text-white text-sm">
<span className="iconify" data-icon="lucide:layout-grid" data-width="16"></span> Dashboard
                        </div>
<div className="flex items-center gap-3 px-3 py-2 text-neutral-400 hover:text-white transition-colors text-sm">
<span className="iconify" data-icon="lucide:workflow" data-width="16"></span> Workflows
                        </div>
<div className="flex items-center gap-3 px-3 py-2 text-neutral-400 hover:text-white transition-colors text-sm">
<span className="iconify" data-icon="lucide:message-circle" data-width="16"></span> Auto DMs
                        </div>
<div className="flex items-center gap-3 px-3 py-2 text-neutral-400 hover:text-white transition-colors text-sm">
<span className="iconify" data-icon="lucide:users" data-width="16"></span> Audience
                        </div>
</div>

<div className="col-span-12 md:col-span-10 p-6 md:p-8 bg-neutral-900/20">
<div className="flex justify-between items-end mb-8">
<div>
<h2 className="text-xl text-white font-medium">Active Workflows</h2>
<p className="text-sm text-neutral-500 mt-1">Manage your automation triggers.</p>
</div>
<button className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs px-3 py-1.5 rounded-md font-medium transition-colors">
                                + New Workflow
                            </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="gradient-border p-4 hover:bg-white/5 transition-colors group cursor-default">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-fuchsia-500/10 rounded-lg text-fuchsia-400">
<span className="iconify" data-icon="lucide:user-plus" data-width="20"></span>
</div>

<div className="relative inline-block w-10 mr-2 align-middle select-none">
<input checked="" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-[#1a1a1a] appearance-none cursor-pointer transition-all duration-300 left-0 checked:right-0 checked:border-green-400" id="toggle1" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-neutral-700 cursor-pointer transition-colors duration-300 checked:bg-green-500/20" htmlFor="toggle1"></label>
</div>
</div>
<h3 className="text-white text-sm font-medium mb-1">New Follower Welcome</h3>
<p className="text-xs text-neutral-500 mb-4">Send DM 15 mins after follow.</p>
<div className="flex items-center gap-2 text-[10px] text-neutral-400 border-t border-white/5 pt-3">
<span className="iconify" data-icon="lucide:activity" data-width="12"></span> 1.2k run count
                                </div>
</div>

<div className="gradient-border p-4 hover:bg-white/5 transition-colors group cursor-default">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
<span className="iconify" data-icon="lucide:heart" data-width="20"></span>
</div>
<div className="relative inline-block w-10 mr-2 align-middle select-none">
<input checked="" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-[#1a1a1a] appearance-none cursor-pointer transition-all duration-300 left-0 checked:right-0 checked:border-green-400" id="toggle2" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-neutral-700 cursor-pointer transition-colors duration-300 checked:bg-green-500/20" htmlFor="toggle2"></label>
</div>
</div>
<h3 className="text-white text-sm font-medium mb-1">Story Mentions</h3>
<p className="text-xs text-neutral-500 mb-4">Repost and thank via DM.</p>
<div className="flex items-center gap-2 text-[10px] text-neutral-400 border-t border-white/5 pt-3">
<span className="iconify" data-icon="lucide:activity" data-width="12"></span> 843 run count
                                </div>
</div>

<div className="gradient-border p-4 hover:bg-white/5 transition-colors group cursor-default opacity-60">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-amber-500/10 rounded-lg text-amber-400">
<span className="iconify" data-icon="lucide:shopping-bag" data-width="20"></span>
</div>
<div className="relative inline-block w-10 mr-2 align-middle select-none">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-neutral-500 border-4 border-[#1a1a1a] appearance-none cursor-pointer transition-all duration-300 left-0" id="toggle3" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-neutral-700 cursor-pointer transition-colors duration-300" htmlFor="toggle3"></label>
</div>
</div>
<h3 className="text-white text-sm font-medium mb-1">Abandoned Cart Recovery</h3>
<p className="text-xs text-neutral-500 mb-4">Nudge users who commented.</p>
<div className="flex items-center gap-2 text-[10px] text-neutral-400 border-t border-white/5 pt-3">
<span className="iconify" data-icon="lucide:pause-circle" data-width="12"></span> Paused
                                </div>
</div>
</div>

<div className="mt-8">
<h3 className="text-sm text-neutral-300 font-medium mb-4">Engagement Overview</h3>
<div className="flex items-end gap-2 h-32 w-full">
<div className="flex-1 bg-white/5 rounded-t-sm hover:bg-fuchsia-500/40 transition-colors h-[40%]"></div>
<div className="flex-1 bg-white/5 rounded-t-sm hover:bg-fuchsia-500/40 transition-colors h-[60%]"></div>
<div className="flex-1 bg-white/5 rounded-t-sm hover:bg-fuchsia-500/40 transition-colors h-[45%]"></div>
<div className="flex-1 bg-white/5 rounded-t-sm hover:bg-fuchsia-500/40 transition-colors h-[80%] relative group">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                        +24%
                                    </div>
</div>
<div className="flex-1 bg-white/5 rounded-t-sm hover:bg-fuchsia-500/40 transition-colors h-[70%]"></div>
<div className="flex-1 bg-fuchsia-600 rounded-t-sm shadow-[0_0_15px_rgba(192,38,211,0.5)] h-[90%]"></div>
<div className="flex-1 bg-white/5 rounded-t-sm hover:bg-fuchsia-500/40 transition-colors h-[75%]"></div>
</div>
<div className="flex justify-between text-[10px] text-neutral-600 mt-2 font-mono">
<span>MON</span>
<span>TUE</span>
<span>WED</span>
<span>THU</span>
<span>FRI</span>
<span>SAT</span>
<span>SUN</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-neutral-900/30">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm text-neutral-500 font-medium mb-8">POWERING THE FASTEST GROWING BRANDS</p>
<div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale">

<div className="flex items-center gap-2 font-bold text-xl tracking-tight text-white"><span className="iconify" data-icon="lucide:hexagon" data-width="24"></span> ACME</div>
<div className="flex items-center gap-2 font-bold text-xl tracking-tight text-white"><span className="iconify" data-icon="lucide:triangle" data-width="24"></span> VORTEX</div>
<div className="flex items-center gap-2 font-bold text-xl tracking-tight text-white"><span className="iconify" data-icon="lucide:circle-dashed" data-width="24"></span> SPHERE</div>
<div className="flex items-center gap-2 font-bold text-xl tracking-tight text-white"><span className="iconify" data-icon="lucide:box" data-width="24"></span> CUBE</div>
<div className="flex items-center gap-2 font-bold text-xl tracking-tight text-white"><span className="iconify" data-icon="lucide:droplet" data-width="24"></span> LIQUID</div>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto">
<div className="mb-20">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">Everything you need to grow.</h2>
<p className="text-xl text-neutral-400 font-light max-w-2xl">Powerful tools designed to turn your Instagram profile into a 24/7 sales and engagement machine.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="col-span-1 md:col-span-2 group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="p-8 relative z-10">
<h3 className="text-xl font-medium text-white mb-2">Visual Workflow Builder</h3>
<p className="text-neutral-400">Drag and drop triggers and actions to create complex automation sequences in seconds.</p>
</div>
<div className="relative h-64 mt-4 ml-8 border-t border-l border-white/10 rounded-tl-xl bg-[#030304] overflow-hidden">

<div className="absolute top-8 left-8 flex flex-col items-center gap-6">
<div className="flex items-center gap-3 bg-neutral-900 border border-white/10 px-4 py-2 rounded-lg text-xs text-white shadow-lg">
<span className="p-1 bg-pink-500 rounded text-white"><span className="iconify" data-icon="lucide:instagram" data-width="12"></span></span>
                            Trigger: Keyword "EBOOK"
                        </div>
<div className="h-6 w-[1px] bg-white/20"></div>
<div className="flex items-center gap-3 bg-neutral-900 border border-white/10 px-4 py-2 rounded-lg text-xs text-white shadow-lg">
<span className="p-1 bg-blue-500 rounded text-white"><span className="iconify" data-icon="lucide:send" data-width="12"></span></span>
                            Action: Send DM
                        </div>
<div className="h-6 w-[1px] bg-white/20"></div>
<div className="flex items-center gap-3 bg-neutral-900 border border-dashed border-white/20 px-4 py-2 rounded-lg text-xs text-neutral-500">
<span className="iconify" data-icon="lucide:plus" data-width="12"></span>
                            Add Step
                        </div>
</div>
</div>
</div>

<div className="col-span-1 group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]">
<div className="p-8">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white mb-6 border border-white/10">
<span className="iconify" data-icon="lucide:bar-chart-2" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Deep Analytics</h3>
<p className="text-neutral-400 text-sm">Track conversion rates from comments to DMs to sales with pixel-perfect accuracy.</p>
</div>
<div className="px-8 pb-8">
<div className="flex items-end gap-1 h-24 mt-4">
<div className="w-full bg-neutral-800 rounded-t h-[30%]"></div>
<div className="w-full bg-neutral-800 rounded-t h-[50%]"></div>
<div className="w-full bg-white rounded-t h-[70%] shadow-[0_0_15px_rgba(255,255,255,0.2)]"></div>
<div className="w-full bg-neutral-800 rounded-t h-[45%]"></div>
<div className="w-full bg-neutral-800 rounded-t h-[60%]"></div>
</div>
</div>
</div>

<div className="col-span-1 group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]">
<div className="p-8">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white mb-6 border border-white/10">
<span className="iconify" data-icon="lucide:bot" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white mb-2">AI Smart Replies</h3>
<p className="text-neutral-400 text-sm">Context-aware responses that sound like you, ensuring 24/7 engagement.</p>
</div>
</div>

<div className="col-span-1 md:col-span-2 group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]">
<div className="flex flex-col md:flex-row h-full">
<div className="p-8 md:w-1/2 flex flex-col justify-center">
<h3 className="text-xl font-medium text-white mb-2">Smart Scheduling</h3>
<p className="text-neutral-400">Visualize your grid before you post. Drag, drop, and auto-publish at peak times.</p>
<div className="mt-6">
<a className="text-fuchsia-400 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all" href="#">Learn more <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span></a>
</div>
</div>
<div className="md:w-1/2 bg-[#030304] border-t md:border-t-0 md:border-l border-white/10 p-6 flex items-center justify-center">
<div className="grid grid-cols-3 gap-2 w-48 opacity-70">
<div className="aspect-square bg-neutral-800 rounded-md"></div>
<div className="aspect-square bg-neutral-800 rounded-md"></div>
<div className="aspect-square bg-neutral-800 rounded-md"></div>
<div className="aspect-square bg-neutral-800 rounded-md"></div>
<div className="aspect-square bg-gradient-to-tr from-fuchsia-600 to-indigo-600 rounded-md shadow-lg border border-white/20"></div>
<div className="aspect-square bg-neutral-800 rounded-md"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight text-center mb-4">Simple pricing.</h2>
<p className="text-neutral-400 text-center mb-16">Start free, upgrade as you grow.</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02]">
<h3 className="text-lg font-medium text-white mb-2">Starter</h3>
<div className="text-3xl font-bold text-white mb-4">$0 <span className="text-sm font-normal text-neutral-500">/mo</span></div>
<p className="text-sm text-neutral-400 mb-6">Perfect for creators just starting out.</p>
<button className="w-full py-2 rounded-lg border border-white/10 hover:bg-white/5 text-white text-sm font-medium transition-colors mb-8">Get Started</button>
<ul className="space-y-3 text-sm text-neutral-400">
<li className="flex items-center gap-2"><span className="iconify text-white" data-icon="lucide:check" data-width="14"></span> 1 Instagram Account</li>
<li className="flex items-center gap-2"><span className="iconify text-white" data-icon="lucide:check" data-width="14"></span> 100 Auto DMs/mo</li>
<li className="flex items-center gap-2"><span className="iconify text-white" data-icon="lucide:check" data-width="14"></span> Basic Analytics</li>
</ul>
</div>

<div className="relative p-8 rounded-2xl border border-fuchsia-500/30 bg-white/[0.04] shadow-[0_0_40px_rgba(192,38,211,0.1)]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wide uppercase">Most Popular</div>
<h3 className="text-lg font-medium text-white mb-2">Growth</h3>
<div className="text-3xl font-bold text-white mb-4">$29 <span className="text-sm font-normal text-neutral-500">/mo</span></div>
<p className="text-sm text-neutral-400 mb-6">For brands scaling their presence.</p>
<button className="w-full py-2 rounded-lg bg-white text-black hover:bg-neutral-200 text-sm font-medium transition-colors mb-8">Start Free Trial</button>
<ul className="space-y-3 text-sm text-neutral-300">
<li className="flex items-center gap-2"><span className="iconify text-fuchsia-400" data-icon="lucide:check" data-width="14"></span> 3 Instagram Accounts</li>
<li className="flex items-center gap-2"><span className="iconify text-fuchsia-400" data-icon="lucide:check" data-width="14"></span> Unlimited Auto DMs</li>
<li className="flex items-center gap-2"><span className="iconify text-fuchsia-400" data-icon="lucide:check" data-width="14"></span> Keyword Triggers</li>
<li className="flex items-center gap-2"><span className="iconify text-fuchsia-400" data-icon="lucide:check" data-width="14"></span> Visual Builder</li>
</ul>
</div>

<div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02]">
<h3 className="text-lg font-medium text-white mb-2">Agency</h3>
<div className="text-3xl font-bold text-white mb-4">$99 <span className="text-sm font-normal text-neutral-500">/mo</span></div>
<p className="text-sm text-neutral-400 mb-6">Manage multiple clients effortlessly.</p>
<button className="w-full py-2 rounded-lg border border-white/10 hover:bg-white/5 text-white text-sm font-medium transition-colors mb-8">Contact Sales</button>
<ul className="space-y-3 text-sm text-neutral-400">
<li className="flex items-center gap-2"><span className="iconify text-white" data-icon="lucide:check" data-width="14"></span> Unlimited Accounts</li>
<li className="flex items-center gap-2"><span className="iconify text-white" data-icon="lucide:check" data-width="14"></span> Team Collaboration</li>
<li className="flex items-center gap-2"><span className="iconify text-white" data-icon="lucide:check" data-width="14"></span> White Label Reporting</li>
</ul>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-fuchsia-900/10 to-transparent"></div>
<div className="max-w-3xl mx-auto text-center relative z-10">
<h2 className="text-4xl md:text-6xl font-medium text-white tracking-tight mb-8">Ready to automate?</h2>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-white text-black h-12 px-8 rounded-full font-medium hover:bg-neutral-200 transition-all">
                    Start building for free
                </button>
</div>
<p className="mt-6 text-sm text-neutral-500">No credit card required. Cancel anytime.</p>
</div>
</section>

<footer className="border-t border-white/5 bg-[#030304] pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<span className="iconify text-white" data-icon="lucide:zap" data-width="20"></span>
<span className="text-white font-medium tracking-tight text-sm">AUTOFLOW</span>
</div>
<p className="text-sm text-neutral-500">Automate your Instagram growth with the power of AI.</p>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Product</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Features</a></li>
<li><a className="hover:text-white transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-white transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Company</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-600 border-t border-white/5 pt-8">
<p>© 2023 Autoflow Inc. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="16"></span></a>
<a className="hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="16"></span></a>
<a className="hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:github" data-width="16"></span></a>
</div>
</div>
</footer>

    </>
  );
}
