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
      

<div className="fixed inset-0 grid-bg pointer-events-none z-0"></div>
<div className="fixed inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none z-0"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-900 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:magnet-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-white font-medium tracking-tight">MagnetEngine</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#comparison">Why Us</a>
<a className="hover:text-white transition-colors" href="#demo">Process</a>
</div>
<a className="group relative px-4 py-2 bg-white text-black text-sm font-medium rounded-full overflow-hidden transition-all hover:bg-zinc-200" href="https://cal.com/" target="_blank">
<span className="relative z-10 flex items-center gap-2">
                    Book a Demo
                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</a>
</div>
</nav>

<main className="relative z-10 pt-32 pb-20 px-6">
<div className="max-w-4xl mx-auto text-center space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-xs font-medium">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                V2.0 Now Available
            </div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight leading-[1.1]">
                Stop prospecting manually. <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-white">Clone yourself with AI.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
                Automate your lead generation. MagnetEngine filters high-quality prospects and generates hyper-personalized DMs that get replies, not blocks.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4">
<a className="w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-all shadow-[0_0_20px_-5px_rgba(37,99,235,0.5)] flex items-center justify-center gap-2 group" href="https://cal.com/" target="_blank">
                    Start Automating
                    <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:calendar-add-linear" width="18"></iconify-icon>
</a>
<a className="w-full md:w-auto px-8 py-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 font-medium rounded-lg transition-all flex items-center justify-center gap-2" href="#how-it-works">
<iconify-icon icon="solar:play-circle-linear" width="18"></iconify-icon>
                    Watch Workflow
                </a>
</div>

<div className="mt-16 relative mx-auto max-w-4xl rounded-xl border border-white/10 bg-zinc-900/50 backdrop-blur-xl shadow-2xl overflow-hidden group">

<div className="h-8 border-b border-white/5 bg-zinc-900 flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
<div className="ml-auto text-xs text-zinc-600 flex items-center gap-1">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
                        License Verified
                    </div>
</div>

<div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5 h-[400px]">

<div className="p-6 space-y-4 bg-black/20">
<div className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Lead Source</div>
<div className="space-y-3">
<div className="p-3 rounded-lg bg-blue-900/10 border border-blue-500/20 flex items-center gap-3">
<iconify-icon className="text-blue-400" icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
<div>
<div className="text-sm text-white">Competitor Followers</div>
<div className="text-xs text-zinc-500">2,403 leads found</div>
</div>
</div>
<div className="p-3 rounded-lg border border-white/5 opacity-50 flex items-center gap-3 grayscale">
<iconify-icon className="text-zinc-400" icon="solar:hashtag-linear" width="20"></iconify-icon>
<div>
<div className="text-sm text-zinc-300">Hashtag Search</div>
<div className="text-xs text-zinc-600">Idle</div>
</div>
</div>
</div>
</div>

<div className="p-6 space-y-4 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none"></div>
<div className="flex items-center justify-between">
<div className="text-xs font-medium text-zinc-500 uppercase tracking-widest">AI Engine</div>
<span className="text-[10px] bg-green-500/10 text-green-400 px-2 py-0.5 rounded border border-green-500/20">Active</span>
</div>
<div className="space-y-4 mt-4">

<div className="flex gap-3 items-start animate-pulse">
<div className="w-8 h-8 rounded-full bg-zinc-800 border border-white/5 flex items-center justify-center shrink-0">
<iconify-icon className="text-zinc-400" icon="solar:user-linear"></iconify-icon>
</div>
<div className="space-y-2 w-full">
<div className="h-2 w-24 bg-zinc-800 rounded"></div>
<div className="h-2 w-full bg-zinc-800 rounded"></div>
<div className="h-2 w-3/4 bg-zinc-800 rounded"></div>
</div>
</div>

<div className="p-3 bg-zinc-900 rounded border border-white/10 mt-4">
<div className="flex items-center gap-2 text-xs text-blue-300 mb-2">
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon>
                                    Analyzing Bio &amp; Context...
                                </div>
<div className="text-xs text-zinc-400 leading-relaxed font-mono">
                                    &gt; Detected: Course Creator<br/>
                                    &gt; Pain Point: Scaling ads<br/>
                                    &gt; Strategy: Soft approach
                                </div>
</div>
</div>
</div>

<div className="p-6 space-y-4 bg-black/20">
<div className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Personalized DM</div>
<div className="p-4 rounded-xl bg-gradient-to-br from-zinc-900 to-black border border-white/10 shadow-lg relative">
<div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
<div className="flex gap-3 mb-3">
<div className="w-8 h-8 rounded-full bg-zinc-800"></div>
<div>
<div className="text-sm font-medium text-white">To: @alex_marketing</div>
<div className="text-xs text-zinc-500">Just now</div>
</div>
</div>
<p className="text-sm text-zinc-300 leading-relaxed">
                                "Hey Alex, saw your recent reel about ad fatigue. Loved the point about creative testing..."
                            </p>
<div className="mt-3 flex gap-2">
<span className="text-[10px] px-2 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">High Relevance</span>
</div>
</div>
<div className="flex justify-center">
<button className="text-xs text-zinc-500 hover:text-white flex items-center gap-1 transition-colors">
                                View all 42 generated <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-24 border-t border-white/5 relative bg-zinc-950/50">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="space-y-6">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">The "Old Way" is killing your conversion rate.</h2>
<p className="text-zinc-400 leading-relaxed">
                        Copy-pasting scripts doesn't work anymore. Prospects smell automation from a mile away. If you aren't personalizing, you're just spamming.
                    </p>
<ul className="space-y-4 mt-6">
<li className="flex items-center gap-3 text-zinc-400">
<iconify-icon className="text-red-500 text-xl" icon="solar:close-circle-linear"></iconify-icon>
<span>Hours wasted manually checking profiles</span>
</li>
<li className="flex items-center gap-3 text-zinc-400">
<iconify-icon className="text-red-500 text-xl" icon="solar:close-circle-linear"></iconify-icon>
<span>Generic "Hey, quick question" messages ignored</span>
</li>
<li className="flex items-center gap-3 text-zinc-400">
<iconify-icon className="text-red-500 text-xl" icon="solar:close-circle-linear"></iconify-icon>
<span>Inconsistent lead flow and empty calendars</span>
</li>
</ul>
</div>

<div className="relative">
<div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-blue-500/20 rounded-2xl blur-lg opacity-50"></div>
<div className="relative bg-black border border-white/10 rounded-xl p-8 grid gap-8">

<div className="space-y-2 opacity-50">
<div className="flex justify-between text-sm">
<span className="text-red-400 font-medium">Generic Bot</span>
<span className="text-zinc-600">Sent</span>
</div>
<div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-500 text-sm">
                                "Hi there! I help coaches get clients. Want to see my case study?"
                            </div>
<div className="flex items-center gap-2 text-xs text-red-500/70">
<iconify-icon icon="solar:forbidden-circle-linear"></iconify-icon> Blocked / Ignored
                            </div>
</div>

<div className="space-y-2">
<div className="flex justify-between text-sm">
<span className="text-blue-400 font-medium flex items-center gap-2">
<iconify-icon icon="solar:stars-linear"></iconify-icon> MagnetEngine
                                </span>
<span className="text-zinc-500">Sent</span>
</div>
<div className="p-4 rounded-lg bg-gradient-to-r from-blue-900/10 to-transparent border border-blue-500/30 text-zinc-200 text-sm shadow-[0_0_15px_-5px_rgba(59,130,246,0.2)]">
                                "Hey Sarah, just finished reading your thread on organic reach. The point about 'velocity' was super insightful—curious if you're applying that to your email flows too?"
                            </div>
<div className="flex items-center gap-2 text-xs text-green-400">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon> Reply Received (12 mins ago)
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="features">
<div className="max-w-6xl mx-auto space-y-16">
<div className="text-center max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Intelligent automation, not just a script.</h2>
<p className="text-zinc-400">Powerful features designed to replace your manual prospecting workflow entirely.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass rounded-2xl p-8 hover:bg-white/5 transition-colors group">
<div className="w-12 h-12 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center mb-6 group-hover:border-blue-500/30 transition-colors">
<iconify-icon className="text-zinc-400 group-hover:text-blue-400 text-2xl transition-colors" icon="solar:filter-linear"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-3">Precision Filtering</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Don't waste credits on bad leads. Filter thousands of prospects by criteria to find the top 1% who are ready to buy.</p>
</div>

<div className="glass rounded-2xl p-8 hover:bg-white/5 transition-colors group relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="w-12 h-12 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center mb-6 group-hover:border-blue-500/30 transition-colors">
<iconify-icon className="text-zinc-400 group-hover:text-blue-400 text-2xl transition-colors" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-3">AI Personalization</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Compatible with OpenAI, Claude, and Gemini. It reads bios and posts to craft messages that feel 100% human-written.</p>
</div>

<div className="glass rounded-2xl p-8 hover:bg-white/5 transition-colors group">
<div className="w-12 h-12 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center mb-6 group-hover:border-blue-500/30 transition-colors">
<iconify-icon className="text-zinc-400 group-hover:text-blue-400 text-2xl transition-colors" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-3">Plug-and-Play</h3>
<p className="text-sm text-zinc-400 leading-relaxed">No complex setup. Secure license system ensures you own your data. Export directly to Google Sheets instantly.</p>
</div>

<div className="md:col-span-3 glass rounded-2xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
<div className="flex-1 space-y-6 relative z-10">
<h3 className="text-2xl text-white font-medium">Same results. Half the price. No course needed.</h3>
<p className="text-zinc-400">Most gurus sell you a $2,000 course on how to prospect. We just give you the software that does it for you.</p>
<div className="flex items-center gap-6 pt-2">
<div className="space-y-1">
<div className="text-2xl text-white font-medium">10x</div>
<div className="text-xs text-zinc-500 uppercase tracking-wide">Faster Outreach</div>
</div>
<div className="w-px h-12 bg-white/10"></div>
<div className="space-y-1">
<div className="text-2xl text-white font-medium">100%</div>
<div className="text-xs text-zinc-500 uppercase tracking-wide">Done For You</div>
</div>
</div>
</div>

<div className="flex-1 w-full relative">
<div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full"></div>
<div className="relative bg-black/40 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
<div className="flex items-end gap-4 h-32 pb-6 border-b border-white/5">
<div className="w-full bg-zinc-800 rounded-t-sm h-[20%] relative group">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity">Manual</div>
</div>
<div className="w-full bg-zinc-700 rounded-t-sm h-[35%] relative group"></div>
<div className="w-full bg-blue-900 rounded-t-sm h-[60%] relative group"></div>
<div className="w-full bg-blue-500 rounded-t-sm h-[95%] relative shadow-[0_0_20px_rgba(59,130,246,0.5)] group">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-blue-400 font-bold whitespace-nowrap">With MagnetEngine</div>
</div>
</div>
<div className="mt-4 flex justify-between text-xs text-zinc-500 font-medium uppercase tracking-wider">
<span>Calls Booked</span>
<span className="text-blue-400">+240% Increase</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5 bg-zinc-950">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-2xl text-white font-medium mb-12">Trusted by coaches &amp; agencies scaling to $50k/mo</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center justify-center gap-2">
<iconify-icon className="text-2xl" icon="solar:graph-up-linear"></iconify-icon>
<span className="font-semibold text-lg">Vortex</span>
</div>
<div className="flex items-center justify-center gap-2">
<iconify-icon className="text-2xl" icon="solar:crown-line-linear"></iconify-icon>
<span className="font-semibold text-lg">Empire</span>
</div>
<div className="flex items-center justify-center gap-2">
<iconify-icon className="text-2xl" icon="solar:case-linear"></iconify-icon>
<span className="font-semibold text-lg">AgencyFlow</span>
</div>
<div className="flex items-center justify-center gap-2">
<iconify-icon className="text-2xl" icon="solar:rocket-linear"></iconify-icon>
<span className="font-semibold text-lg">ScaleUp</span>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black"></div>
<div className="max-w-3xl mx-auto text-center relative z-10 space-y-8">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight">Ready to fill your calendar?</h2>
<p className="text-xl text-zinc-400 font-light">
                Join the waiting list or book a call to see if your niche qualifies for MagnetEngine.
            </p>
<div className="flex flex-col items-center gap-6">
<a className="px-10 py-4 bg-white text-black hover:bg-zinc-200 text-lg font-medium rounded-full transition-all flex items-center gap-2" href="https://cal.com/" target="_blank">
                    Book Your Demo
                    <iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</a>
<p className="text-sm text-zinc-600">
<span className="text-green-500">●</span> 2 slots left for this week
                </p>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-black">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-zinc-800 rounded flex items-center justify-center text-zinc-400">
<iconify-icon icon="solar:magnet-linear" width="14"></iconify-icon>
</div>
<span className="text-zinc-400 text-sm font-medium">MagnetEngine</span>
</div>
<div className="flex gap-8 text-sm text-zinc-600">
<a className="hover:text-zinc-300 transition-colors" href="#">Privacy</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Terms</a>
<a className="hover:text-zinc-300 transition-colors" href="mailto:aminupsellz@gmail.com">Contact</a>
</div>
<div className="text-sm text-zinc-700">
                © 2024 MagnetEngine. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
