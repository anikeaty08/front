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



        // Scripts
    
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
      
<div className="noise-bg"></div>

<nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-black/50 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-white font-medium tracking-tighter text-lg">FORGE</span>
<div className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse"></div>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-light">
<a className="hover:text-white transition-colors duration-300" href="#">Revenue</a>
<a className="hover:text-white transition-colors duration-300" href="#">Scalability</a>
<a className="hover:text-white transition-colors duration-300" href="#">Investments</a>
<a className="hover:text-white transition-colors duration-300" href="#">Enterprise</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-light hover:text-white transition-colors" href="#">Log in</a>
<a className="text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition-all" href="#">Start Earning</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-16 md:pt-48 md:pb-24 px-6 overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-orange-500/10 to-transparent rounded-full blur-[100px] -z-10 opacity-60"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
<span className="iconify text-orange-400" data-icon="lucide:trending-up" data-width="12"></span>
<span className="text-xs tracking-wide text-zinc-300">The Revenue Engine for Creator Empires</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-6">
                Build your empire.<br/>
<span className="text-zinc-500">Multiply your wealth.</span>
</h1>
<p className="text-lg md:text-xl font-light text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                Forge acts as your financial command center. We automate high-ticket sales, optimize revenue streams, and scale your net worth without adding headcount.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
<div className="relative w-full group">
<input className="w-full bg-zinc-900/50 border border-white/10 rounded-full py-3 px-5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all" placeholder="ceo@empire.com" type="email"/>
<div className="absolute inset-0 rounded-full ring-1 ring-white/5 pointer-events-none group-hover:ring-white/10 transition-all"></div>
</div>
<button className="w-full sm:w-auto px-6 py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 whitespace-nowrap">
                    Scale Now
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-zinc-950/50 overflow-hidden relative mb-24">

<div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-gradient-to-r from-[#050505] to-transparent pointer-events-none"></div>
<div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-gradient-to-l from-[#050505] to-transparent pointer-events-none"></div>
<div className="flex w-max gap-6 animate-scroll hover:[animation-play-state:paused] items-center">


<div className="w-[380px] p-5 rounded-xl bg-zinc-900/30 border border-white/5 flex-shrink-0 hover:border-white/10 transition-colors cursor-default backdrop-blur-sm">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full grayscale opacity-80" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="text-white text-sm font-medium">Sarah Jenkins</div>
<div className="text-zinc-500 text-[10px] uppercase tracking-wide">Lifestyle &amp; Tech</div>
</div>
</div>
<div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs px-2 py-1 rounded-md flex items-center gap-1">
                        +$42k/mo
                    </div>
</div>
<p className="text-sm text-zinc-300 font-light leading-relaxed">"Honestly, Forge isn't just a tool. My revenue nearly doubled in Q3 because they identified a sponsorship leak I didn't see. It feels like having a CFO in my pocket."</p>
</div>

<div className="w-[380px] p-5 rounded-xl bg-zinc-900/30 border border-white/5 flex-shrink-0 hover:border-white/10 transition-colors cursor-default backdrop-blur-sm">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full grayscale opacity-80" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="text-white text-sm font-medium">Marcus Chen</div>
<div className="text-zinc-500 text-[10px] uppercase tracking-wide">Finance Creator</div>
</div>
</div>
<div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs px-2 py-1 rounded-md flex items-center gap-1">
                        $1.2M YTD
                    </div>
</div>
<p className="text-sm text-zinc-300 font-light leading-relaxed">"I was drowning in ops. Forge came in, automated the entire high-ticket funnel, and now I just focus on content. They are literally my business partner now."</p>
</div>

<div className="w-[380px] p-5 rounded-xl bg-zinc-900/30 border border-white/5 flex-shrink-0 hover:border-white/10 transition-colors cursor-default backdrop-blur-sm">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full grayscale opacity-80" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="text-white text-sm font-medium">Elara Vane</div>
<div className="text-zinc-500 text-[10px] uppercase tracking-wide">Digital Artist</div>
</div>
</div>
<div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs px-2 py-1 rounded-md flex items-center gap-1">
                        +180% Growth
                    </div>
</div>
<p className="text-sm text-zinc-300 font-light leading-relaxed">"Other platforms take a cut and do nothing. Forge actively helps me expand into merchandise and licensing. They negotiate deals I wouldn't even know how to start."</p>
</div>

<div className="w-[380px] p-5 rounded-xl bg-zinc-900/30 border border-white/5 flex-shrink-0 hover:border-white/10 transition-colors cursor-default backdrop-blur-sm">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full grayscale opacity-80" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="text-white text-sm font-medium">David Okonjo</div>
<div className="text-zinc-500 text-[10px] uppercase tracking-wide">Fitness Coach</div>
</div>
</div>
<div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs px-2 py-1 rounded-md flex items-center gap-1">
                        $85k Launch
                    </div>
</div>
<p className="text-sm text-zinc-300 font-light leading-relaxed">"The data insights are insane, but the real value is the strategy. We pivoted my offering based on Forge's analysis and had our biggest launch ever."</p>
</div>

<div className="w-[380px] p-5 rounded-xl bg-zinc-900/30 border border-white/5 flex-shrink-0 hover:border-white/10 transition-colors cursor-default backdrop-blur-sm">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full grayscale opacity-80" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="text-white text-sm font-medium">Jessica Lee</div>
<div className="text-zinc-500 text-[10px] uppercase tracking-wide">Educator</div>
</div>
</div>
<div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs px-2 py-1 rounded-md flex items-center gap-1">
                        +205% Rev
                    </div>
</div>
<p className="text-sm text-zinc-300 font-light leading-relaxed">"Finally, a partner that cares about my bottom line. Forge isn't software; it's an engine that turned my hobby into a multi-million dollar asset."</p>
</div>


<div className="w-[380px] p-5 rounded-xl bg-zinc-900/30 border border-white/5 flex-shrink-0 hover:border-white/10 transition-colors cursor-default backdrop-blur-sm">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full grayscale opacity-80" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="text-white text-sm font-medium">Sarah Jenkins</div>
<div className="text-zinc-500 text-[10px] uppercase tracking-wide">Lifestyle &amp; Tech</div>
</div>
</div>
<div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs px-2 py-1 rounded-md flex items-center gap-1">
                        +$42k/mo
                    </div>
</div>
<p className="text-sm text-zinc-300 font-light leading-relaxed">"Honestly, Forge isn't just a tool. My revenue nearly doubled in Q3 because they identified a sponsorship leak I didn't see. It feels like having a CFO in my pocket."</p>
</div>

<div className="w-[380px] p-5 rounded-xl bg-zinc-900/30 border border-white/5 flex-shrink-0 hover:border-white/10 transition-colors cursor-default backdrop-blur-sm">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full grayscale opacity-80" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="text-white text-sm font-medium">Marcus Chen</div>
<div className="text-zinc-500 text-[10px] uppercase tracking-wide">Finance Creator</div>
</div>
</div>
<div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs px-2 py-1 rounded-md flex items-center gap-1">
                        $1.2M YTD
                    </div>
</div>
<p className="text-sm text-zinc-300 font-light leading-relaxed">"I was drowning in ops. Forge came in, automated the entire high-ticket funnel, and now I just focus on content. They are literally my business partner now."</p>
</div>

<div className="w-[380px] p-5 rounded-xl bg-zinc-900/30 border border-white/5 flex-shrink-0 hover:border-white/10 transition-colors cursor-default backdrop-blur-sm">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full grayscale opacity-80" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="text-white text-sm font-medium">Elara Vane</div>
<div className="text-zinc-500 text-[10px] uppercase tracking-wide">Digital Artist</div>
</div>
</div>
<div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs px-2 py-1 rounded-md flex items-center gap-1">
                        +180% Growth
                    </div>
</div>
<p className="text-sm text-zinc-300 font-light leading-relaxed">"Other platforms take a cut and do nothing. Forge actively helps me expand into merchandise and licensing. They negotiate deals I wouldn't even know how to start."</p>
</div>

<div className="w-[380px] p-5 rounded-xl bg-zinc-900/30 border border-white/5 flex-shrink-0 hover:border-white/10 transition-colors cursor-default backdrop-blur-sm">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full grayscale opacity-80" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="text-white text-sm font-medium">David Okonjo</div>
<div className="text-zinc-500 text-[10px] uppercase tracking-wide">Fitness Coach</div>
</div>
</div>
<div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs px-2 py-1 rounded-md flex items-center gap-1">
                        $85k Launch
                    </div>
</div>
<p className="text-sm text-zinc-300 font-light leading-relaxed">"The data insights are insane, but the real value is the strategy. We pivoted my offering based on Forge's analysis and had our biggest launch ever."</p>
</div>

<div className="w-[380px] p-5 rounded-xl bg-zinc-900/30 border border-white/5 flex-shrink-0 hover:border-white/10 transition-colors cursor-default backdrop-blur-sm">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full grayscale opacity-80" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="text-white text-sm font-medium">Jessica Lee</div>
<div className="text-zinc-500 text-[10px] uppercase tracking-wide">Educator</div>
</div>
</div>
<div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs px-2 py-1 rounded-md flex items-center gap-1">
                        +205% Rev
                    </div>
</div>
<p className="text-sm text-zinc-300 font-light leading-relaxed">"Finally, a partner that cares about my bottom line. Forge isn't software; it's an engine that turned my hobby into a multi-million dollar asset."</p>
</div>
</div>
</section>

<section className="px-6 pb-24">
<div className="max-w-6xl mx-auto">
<div className="relative rounded-2xl border border-white/10 bg-[#0A0A0A] overflow-hidden shadow-2xl shadow-orange-900/5">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>

<div className="h-10 border-b border-white/5 flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-zinc-800"></div>
<div className="w-3 h-3 rounded-full bg-zinc-800"></div>
<div className="w-3 h-3 rounded-full bg-zinc-800"></div>
</div>

<div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-12 gap-6">

<div className="hidden md:block col-span-2 space-y-6">
<div className="space-y-1">
<div className="text-xs text-zinc-600 font-medium mb-2 uppercase tracking-widest">Financials</div>
<div className="flex items-center gap-2 text-zinc-300 text-sm py-1"><span className="iconify" data-icon="lucide:layout-dashboard" data-width="14"></span> Overview</div>
<div className="flex items-center gap-2 text-zinc-500 text-sm py-1"><span className="iconify" data-icon="lucide:banknote" data-width="14"></span> Cashflow</div>
<div className="flex items-center gap-2 text-zinc-500 text-sm py-1"><span className="iconify" data-icon="lucide:line-chart" data-width="14"></span> Projections</div>
</div>
<div className="space-y-1">
<div className="text-xs text-zinc-600 font-medium mb-2 uppercase tracking-widest">Assets</div>
<div className="flex items-center gap-2 text-zinc-500 text-sm py-1"><span className="iconify" data-icon="lucide:shopping-bag" data-width="14"></span> Products</div>
<div className="flex items-center gap-2 text-zinc-500 text-sm py-1"><span className="iconify" data-icon="lucide:users" data-width="14"></span> Memberships</div>
</div>
</div>

<div className="col-span-12 md:col-span-10">
<div className="flex justify-between items-end mb-8">
<div>
<h3 className="text-white text-lg font-medium">Net Revenue</h3>
<p className="text-zinc-500 text-sm">Consolidated earnings across all channels.</p>
</div>
<div className="text-right">
<div className="text-2xl text-white font-light tracking-tight">$124,592.00</div>
<div className="text-emerald-500 text-xs flex items-center justify-end gap-1">
<span className="iconify" data-icon="lucide:trending-up" data-width="12"></span> +12.4%
                                </div>
</div>
</div>

<div className="h-48 w-full relative mb-8">

<div className="absolute bottom-0 left-0 w-full h-full flex items-end justify-between px-2 gap-2">
<div className="w-full bg-zinc-800/30 rounded-t-sm h-[40%] hover:bg-orange-500/20 transition-colors duration-500"></div>
<div className="w-full bg-zinc-800/30 rounded-t-sm h-[55%] hover:bg-orange-500/20 transition-colors duration-500"></div>
<div className="w-full bg-zinc-800/30 rounded-t-sm h-[45%] hover:bg-orange-500/20 transition-colors duration-500"></div>
<div className="w-full bg-zinc-800/30 rounded-t-sm h-[70%] hover:bg-orange-500/20 transition-colors duration-500"></div>
<div className="w-full bg-zinc-800/30 rounded-t-sm h-[60%] hover:bg-orange-500/20 transition-colors duration-500"></div>
<div className="w-full bg-zinc-800/30 rounded-t-sm h-[85%] hover:bg-orange-500/20 transition-colors duration-500"></div>
<div className="w-full bg-white/10 rounded-t-sm h-[75%] relative group">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                        Proj. $140k
                                    </div>
</div>
<div className="w-full border-t border-dashed border-zinc-700 h-[90%] rounded-t-sm opacity-30"></div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

<div className="bg-zinc-900/50 rounded-xl p-4 border border-white/5">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
<span className="iconify" data-icon="lucide:dollar-sign" data-width="16"></span>
</div>
<div>
<div className="text-sm text-zinc-200">Upsell Opportunity</div>
<div className="text-xs text-zinc-500">High Impact</div>
</div>
</div>
</div>
<p className="text-xs text-zinc-400 leading-relaxed">
                                    Course completion rate is 92%. Unlock "Mastermind Access" upsell for $2,500 to the top 10% of engaged users.
                                </p>
<div className="mt-3 flex gap-2">
<button className="text-xs bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-md transition-colors">Launch Upsell</button>
</div>
</div>

<div className="bg-zinc-900/50 rounded-xl p-4 border border-white/5">
<div className="flex items-center justify-between mb-3">
<div className="text-sm text-zinc-200">Revenue Pipelines</div>
<span className="iconify text-zinc-600" data-icon="lucide:more-horizontal" data-width="16"></span>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between text-xs">
<span className="text-zinc-400 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>High-Ticket Sales</span>
<span className="text-white">$42k</span>
</div>
<div className="w-full bg-zinc-800 rounded-full h-1">
<div className="bg-purple-500 h-1 rounded-full" style={{width: '84%'}}></div>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-zinc-400 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>Sponsorships</span>
<span className="text-white">$18k</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">Autonomous Wealth Generation.</h2>
<p className="text-xl text-zinc-500 font-light max-w-2xl">
                    Stop trading time for money. Forge builds the infrastructure to capitalize on your audience and automate your income.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel rounded-2xl p-8 hover:bg-zinc-900/80 transition-all duration-500 group">
<div className="h-10 w-10 rounded-lg bg-zinc-800/50 flex items-center justify-center border border-white/5 mb-6 group-hover:scale-110 transition-transform duration-500">
<span className="iconify text-white" data-icon="lucide:coins" data-width="20"></span>
</div>
<h3 className="text-lg text-white font-medium mb-3">Smart Pricing</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed">
                        Dynamic pricing models that adjust based on demand and user purchasing power to maximize total cart value automatically.
                    </p>
</div>

<div className="glass-panel rounded-2xl p-8 hover:bg-zinc-900/80 transition-all duration-500 group">
<div className="h-10 w-10 rounded-lg bg-zinc-800/50 flex items-center justify-center border border-white/5 mb-6 group-hover:scale-110 transition-transform duration-500">
<span className="iconify text-white" data-icon="lucide:gem" data-width="20"></span>
</div>
<h3 className="text-lg text-white font-medium mb-3">Premium Tiers</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed">
                        Instantly deploy high-ticket mastermind groups and exclusive content vaults. We handle the billing, access, and retention.
                    </p>
</div>

<div className="glass-panel rounded-2xl p-8 hover:bg-zinc-900/80 transition-all duration-500 group">
<div className="h-10 w-10 rounded-lg bg-zinc-800/50 flex items-center justify-center border border-white/5 mb-6 group-hover:scale-110 transition-transform duration-500">
<span className="iconify text-white" data-icon="lucide:brain-circuit" data-width="20"></span>
</div>
<h3 className="text-lg text-white font-medium mb-3">Predictive Sales</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed">
                        Our AI identifies which followers are ready to buy and what they want, sending personalized offers that convert at 3x industry standards.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-black">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[600px]">

<div className="col-span-1 md:col-span-2 row-span-2 rounded-3xl border border-zinc-800 bg-zinc-900/20 p-8 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="px-2 py-0.5 rounded border border-orange-500/30 bg-orange-500/10 text-[10px] text-orange-300 uppercase tracking-wider">Alpha</div>
</div>
<h3 className="text-2xl text-white font-medium tracking-tight mb-2">Automated Brand Deals</h3>
<p className="text-zinc-400 font-light text-sm max-w-sm">
                                Let Forge negotiate your worth. We match you with premium brands and handle the contract to maximize your payout.
                            </p>
</div>

<div className="mt-8 flex items-center justify-center">
<div className="relative w-full max-w-[300px] h-[200px]">
<div className="absolute inset-0 flex items-center justify-between">
<div className="h-16 w-16 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center z-10">
<span className="iconify text-white" data-icon="lucide:user" data-width="24"></span>
</div>
<div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-700 via-orange-500 to-zinc-700 relative overflow-hidden">
<div className="absolute inset-0 bg-white w-1/2 blur-sm animate-[shimmer_2s_infinite]"></div>
</div>
<div className="h-16 w-16 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center z-10">
<span className="iconify text-white" data-icon="lucide:briefcase" data-width="24"></span>
</div>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black border border-orange-500/50 px-3 py-1 rounded-full text-xs text-orange-300 shadow-[0_0_15px_rgba(249,115,22,0.3)]">
                                    $50k Offer
                                </div>
</div>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-2 rounded-3xl border border-zinc-800 bg-zinc-900/20 p-8 relative overflow-hidden group">
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl text-white font-medium tracking-tight mb-2">Global Payments</h3>
<p className="text-zinc-400 font-light text-sm">Accept crypto, wire, and fiat instantly.</p>
</div>
<span className="iconify text-zinc-600 group-hover:text-white transition-colors" data-icon="lucide:globe" data-width="24"></span>
</div>
<div className="mt-6 flex gap-3 overflow-hidden opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500">

<div className="w-12 h-8 rounded bg-white/10 border border-white/10"></div>
<div className="w-12 h-8 rounded bg-white/10 border border-white/10"></div>
<div className="w-12 h-8 rounded bg-white/10 border border-white/10"></div>
<div className="w-12 h-8 rounded bg-white/10 border border-white/10"></div>
</div>
</div>
</div>

<div className="col-span-1 rounded-3xl border border-zinc-800 bg-zinc-900/20 p-6 relative overflow-hidden group hover:border-zinc-700 transition-colors">
<div className="h-full flex flex-col justify-between">
<span className="iconify text-emerald-400 mb-4" data-icon="lucide:shield-check" data-width="24"></span>
<div>
<h3 className="text-lg text-white font-medium mb-1">Asset Protection</h3>
<p className="text-xs text-zinc-500">Secure your IP &amp; Earnings.</p>
</div>
</div>
</div>

<div className="col-span-1 rounded-3xl border border-zinc-800 bg-zinc-900/20 p-6 relative overflow-hidden group hover:border-zinc-700 transition-colors">
<div className="h-full flex flex-col justify-between">
<span className="iconify text-purple-400 mb-4" data-icon="lucide:arrow-up-right" data-width="24"></span>
<div>
<h3 className="text-lg text-white font-medium mb-1">Scalability</h3>
<p className="text-xs text-zinc-500">Infinite infrastructure.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-zinc-950">
<div className="max-w-4xl mx-auto px-6 text-center">
<span className="iconify text-zinc-600 mx-auto mb-8" data-icon="lucide:quote" data-width="32"></span>
<h3 className="text-2xl md:text-3xl font-light text-zinc-200 leading-relaxed mb-8">
                "Forge replaced my entire operations team. It manages my course launches, optimizes my funnels, and negotiated a 6-figure deal with zero input. It's an unfair advantage."
            </h3>
<div className="flex items-center justify-center gap-4">
<div className="h-10 w-10 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-500 border border-white/10"></div>
<div className="text-left">
<div className="text-white text-sm font-medium">Elena Ross</div>
<div className="text-zinc-500 text-xs">Entrepreneur • $3M/yr Revenue</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-black to-zinc-900"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-3xl mx-auto relative z-10 text-center">
<h2 className="text-4xl md:text-6xl font-medium text-white tracking-tight mb-8">Ready to scale?</h2>
<p className="text-zinc-400 mb-10 text-lg font-light">Join the invite-only network of creators building billion-dollar micro-enterprises.</p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<button className="px-8 py-4 bg-white text-black text-sm font-medium rounded-full hover:bg-zinc-200 transition-all w-full md:w-auto">
                    Request Access
                </button>
<button className="px-8 py-4 bg-transparent border border-zinc-700 text-white text-sm font-medium rounded-full hover:bg-zinc-800 transition-all w-full md:w-auto">
                    View Demo
                </button>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-black pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
<div className="col-span-2 md:col-span-2">
<span className="text-white font-medium tracking-tighter text-lg block mb-6">FORGE</span>
<p className="text-zinc-500 text-xs font-light max-w-xs">
                        The financial and operational nervous system for the modern creator empire.
                    </p>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-white text-xs font-medium uppercase tracking-wider">Product</h4>
<a className="text-zinc-500 text-sm hover:text-white transition-colors" href="#">Revenue</a>
<a className="text-zinc-500 text-sm hover:text-white transition-colors" href="#">Ventures</a>
<a className="text-zinc-500 text-sm hover:text-white transition-colors" href="#">Monetization</a>
<a className="text-zinc-500 text-sm hover:text-white transition-colors" href="#">AI Agents</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-white text-xs font-medium uppercase tracking-wider">Company</h4>
<a className="text-zinc-500 text-sm hover:text-white transition-colors" href="#">About</a>
<a className="text-zinc-500 text-sm hover:text-white transition-colors" href="#">Careers</a>
<a className="text-zinc-500 text-sm hover:text-white transition-colors" href="#">Manifesto</a>
<a className="text-zinc-500 text-sm hover:text-white transition-colors" href="#">Contact</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-white text-xs font-medium uppercase tracking-wider">Legal</h4>
<a className="text-zinc-500 text-sm hover:text-white transition-colors" href="#">Privacy</a>
<a className="text-zinc-500 text-sm hover:text-white transition-colors" href="#">Terms</a>
<a className="text-zinc-500 text-sm hover:text-white transition-colors" href="#">Security</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-white text-xs font-medium uppercase tracking-wider">Social</h4>
<div className="flex gap-4">
<span className="iconify text-zinc-500 hover:text-white cursor-pointer" data-icon="lucide:twitter" data-width="18"></span>
<span className="iconify text-zinc-500 hover:text-white cursor-pointer" data-icon="lucide:instagram" data-width="18"></span>
<span className="iconify text-zinc-500 hover:text-white cursor-pointer" data-icon="lucide:linkedin" data-width="18"></span>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
<p className="text-zinc-600 text-xs font-light">© 2024 Forge Inc. All rights reserved.</p>
<div className="flex items-center gap-2 mt-4 md:mt-0">
<div className="h-2 w-2 rounded-full bg-emerald-500"></div>
<span className="text-zinc-500 text-xs">Systems Operational</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
