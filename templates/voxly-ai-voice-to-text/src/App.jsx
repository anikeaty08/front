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
      

<div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">

<div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] orb-1 mix-blend-screen"></div>
<div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[120px] orb-2 mix-blend-screen"></div>
<div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-pink-600/15 rounded-full blur-[100px] orb-3 mix-blend-screen"></div>

<div className="absolute inset-0 bg-grid opacity-60"></div>
<div className="absolute inset-0 bg-grain z-50"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050507]/50 to-[#050507]"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 backdrop-blur-md bg-[#050507]/70">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white font-display font-bold text-lg tracking-tight shadow-[0_0_15px_-3px_rgba(168,85,247,0.5)]">
                    V
                </div>
<span className="font-display font-bold text-lg tracking-tight text-white">Voxly</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#demo">Demo</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<button className="group relative px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-xs font-medium text-white transition-all overflow-hidden">
<span className="relative z-10 flex items-center gap-2">
                    Get Started
                    <span className="iconify" data-icon="ph:arrow-right-bold"></span>
</span>
<div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</button>
</div>
</nav>
<main className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

<div className="lg:col-span-7 flex flex-col items-start text-left">

<div className="opacity-0-start reveal-0 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium mb-6 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
</span>
<span>3 free messages included</span>
</div>

<h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl leading-[0.95] tracking-tighter text-white mb-6">
<div className="opacity-0-start reveal-1 overflow-hidden pb-2">Speak messy.</div>
<div className="opacity-0-start reveal-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 pb-2">
                        Get perfect.
                    </div>
</h1>

<p className="opacity-0-start reveal-3 text-lg text-gray-400 max-w-lg mb-8 leading-relaxed font-light">
                    Turn chaotic ramblings into structured, professional text instantly. The AI that understands context, formatting, and intent.
                </p>

<div className="opacity-0-start reveal-4 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
<a className="group relative w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg text-white font-medium text-sm transition-all hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.6)] hover:-translate-y-0.5" href="https://t.me/easywriteai_bot" target="_blank">
<span className="flex items-center justify-center gap-2">
<span className="iconify text-lg" data-icon="ph:telegram-logo-duotone"></span>
                            Open Telegram Bot
                        </span>
</a>
<button className="w-full sm:w-auto px-8 py-3.5 glass-btn-secondary rounded-lg text-white font-medium text-sm transition-all hover:bg-white/10 hover:border-white/20">
<span className="flex items-center justify-center gap-2">
<span className="iconify text-lg" data-icon="ph:windows-logo-duotone"></span>
                            Download for Windows
                        </span>
</button>
</div>

<div className="opacity-0-start reveal-5 flex flex-col sm:flex-row items-start sm:items-center justify-between w-full border-t border-white/5 pt-6 gap-6">
<div className="flex gap-4 text-xs text-gray-400 font-medium">
<div className="flex items-center gap-1.5">
<span className="iconify text-green-400" data-icon="ph:check-circle-fill"></span> No signup
                        </div>
<div className="flex items-center gap-1.5">
<span className="iconify text-green-400" data-icon="ph:check-circle-fill"></span> Instant
                        </div>
<div className="flex items-center gap-1.5">
<span className="iconify text-green-400" data-icon="ph:check-circle-fill"></span> AI-powered
                        </div>
</div>
<div className="flex items-center gap-3 text-xs text-gray-500">
<div className="flex gap-1">
<kbd className="hidden sm:inline-block px-2 py-1 bg-[#1a1a1c] border-b-2 border-white/10 border border-white/5 rounded text-gray-300 font-sans shadow-sm">Alt</kbd>
<kbd className="hidden sm:inline-block px-2 py-1 bg-[#1a1a1c] border-b-2 border-white/10 border border-white/5 rounded text-gray-300 font-sans shadow-sm">Space</kbd>
</div>
<span className="hidden sm:inline">→ record anywhere</span>
</div>
</div>
</div>

<div className="lg:col-span-5 opacity-0-start reveal-side relative h-[400px] w-full">

<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl border border-white/10 backdrop-blur-sm overflow-hidden flex items-center justify-center shadow-2xl">

<div className="relative w-full h-full p-8 flex items-center justify-between gap-4">

<div className="w-1/3 h-40 flex items-center justify-center gap-1 relative z-10">

<div className="w-1.5 bg-purple-500 rounded-full h-8 wave-bar wave-delay-1 shadow-[0_0_10px_#a855f7]"></div>
<div className="w-1.5 bg-indigo-500 rounded-full h-16 wave-bar wave-delay-4 shadow-[0_0_10px_#6366f1]"></div>
<div className="w-1.5 bg-pink-500 rounded-full h-10 wave-bar wave-delay-2 shadow-[0_0_10px_#ec4899]"></div>
<div className="w-1.5 bg-purple-400 rounded-full h-20 wave-bar wave-delay-3 shadow-[0_0_10px_#c084fc]"></div>
<div className="w-1.5 bg-indigo-400 rounded-full h-12 wave-bar wave-delay-1 shadow-[0_0_10px_#818cf8]"></div>

<div className="absolute -bottom-8 text-[10px] tracking-widest uppercase text-purple-400 font-semibold opacity-60">Raw Voice</div>
</div>

<div className="flex-1 h-full relative overflow-hidden opacity-50">
<div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent dashed"></div>

<div className="absolute top-[45%] left-[10%] w-1 h-1 bg-white rounded-full animate-[revealRight_2s_infinite]"></div>
<div className="absolute top-[55%] left-[20%] w-0.5 h-0.5 bg-purple-300 rounded-full animate-[revealRight_2.5s_infinite]"></div>
<div className="absolute top-[40%] left-[30%] w-1 h-1 bg-indigo-300 rounded-full animate-[revealRight_1.8s_infinite]"></div>
</div>

<div className="w-1/2 flex flex-col gap-3 relative z-10">

<div className="h-2.5 w-full bg-white/10 rounded-sm animate-pulse"></div>
<div className="flex gap-2">
<div className="h-2.5 w-4 bg-green-400/80 rounded-sm shadow-[0_0_10px_rgba(74,222,128,0.4)]"></div>
<div className="h-2.5 w-[80%] bg-white/20 rounded-sm"></div>
</div>
<div className="flex gap-2">
<div className="h-2.5 w-4 bg-green-400/80 rounded-sm shadow-[0_0_10px_rgba(74,222,128,0.4)]"></div>
<div className="h-2.5 w-[60%] bg-white/20 rounded-sm"></div>
</div>
<div className="flex gap-2">
<div className="h-2.5 w-4 bg-green-400/80 rounded-sm shadow-[0_0_10px_rgba(74,222,128,0.4)]"></div>
<div className="h-2.5 w-[70%] bg-white/20 rounded-sm"></div>
</div>

<div className="absolute -bottom-8 left-0 w-full text-center text-[10px] tracking-widest uppercase text-green-400 font-semibold opacity-60">Clean Format</div>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent opacity-80 pointer-events-none"></div>
</div>
</div>
</div>

<section className="mt-32" id="demo">
<div className="glass-card rounded-2xl p-1 overflow-hidden group">
<div className="grid grid-cols-1 md:grid-cols-2 bg-[#0a0a0c] rounded-xl overflow-hidden relative">

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-[#151518] border border-white/10 rounded-full p-2 text-white/50 hidden md:block">
<span className="iconify" data-icon="ph:arrow-right-bold"></span>
</div>

<div className="p-8 border-b md:border-b-0 md:border-r border-white/5 relative">
<div className="absolute top-4 left-4 text-xs font-mono text-red-400/70 uppercase tracking-widest">Input</div>
<p className="mt-6 text-gray-400 leading-relaxed text-sm font-light">
                            So I was thinking <span className="text-red-400/60 line-through decoration-red-400/40 bg-red-400/5 px-1 rounded">um</span> maybe we could <span className="text-red-400/60 line-through decoration-red-400/40 bg-red-400/5 px-1 rounded">like</span> schedule the launch for Tuesday? <span className="text-red-400/60 line-through decoration-red-400/40 bg-red-400/5 px-1 rounded">Uh</span> actually make it Wednesday because <span className="text-red-400/60 line-through decoration-red-400/40 bg-red-400/5 px-1 rounded">you know</span> the marketing team needs time.
                        </p>
</div>

<div className="p-8 bg-white/[0.02] relative">
<div className="absolute top-4 left-4 text-xs font-mono text-green-400/70 uppercase tracking-widest">Output</div>
<div className="mt-6 space-y-3">
<div className="flex gap-3 items-start">
<div className="mt-1 min-w-[16px] text-green-400"><span className="iconify" data-icon="ph:check-bold"></span></div>
<p className="text-gray-200 text-sm font-medium">Schedule launch for Wednesday</p>
</div>
<div className="flex gap-3 items-start">
<div className="mt-1 min-w-[16px] text-green-400"><span className="iconify" data-icon="ph:check-bold"></span></div>
<p className="text-gray-200 text-sm font-medium">Marketing team preparation time confirmed</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mt-32 max-w-5xl mx-auto">
<div className="glass-card rounded-2xl p-8 md:p-12 relative overflow-hidden">

<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 relative z-10">
<div>
<h2 className="font-display font-bold text-3xl text-white mb-2 tracking-tight">Speed that pays off.</h2>
<p className="text-gray-400 text-sm">Stop limiting your ideas to your typing speed.</p>
</div>
</div>

<div className="space-y-8 relative z-10">

<div>
<div className="flex justify-between text-sm font-medium text-gray-400 mb-2">
<span className="flex items-center gap-2"><span className="iconify text-gray-500" data-icon="ph:keyboard-duotone"></span> Keyboard Traditional typing</span>
<span>45 wpm</span>
</div>
<div className="h-4 bg-white/5 rounded-full overflow-hidden w-full">
<div className="h-full bg-gray-600 rounded-full opacity-40 w-[18.75%]"></div>
</div>
</div>

<div className="relative">
<div className="flex justify-between items-end mb-2">
<span className="text-white font-medium flex items-center gap-2"><span className="iconify text-purple-400" data-icon="ph:lightning-duotone"></span> With Voxly</span>
<span className="text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">up to 240 wpm</span>
</div>
<div className="h-6 bg-white/5 rounded-full overflow-hidden relative shadow-[0_0_20px_rgba(168,85,247,0.1)] w-full">

<div className="h-full bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 rounded-full w-0 animate-bar relative overflow-hidden">

<div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] animate-shimmer"></div>
</div>
</div>
<p className="mt-2 text-xs text-green-400 flex items-center justify-end gap-1 font-medium">
<span className="iconify" data-icon="ph:trend-up-bold"></span> 5.3x faster
                        </p>
</div>
</div>

<div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[80px] pointer-events-none"></div>
</div>
</section>

<section className="mt-32" id="features">
<h2 className="font-display font-bold text-3xl text-center mb-16 text-white tracking-tight">Everything you need.<br/><span className="text-gray-500 font-normal text-xl">Nothing you don't.</span></h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-card p-6 rounded-xl hover:-translate-y-1 transition-transform duration-300 group hover:border-purple-500/30">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-500/5 border border-purple-500/20 flex items-center justify-center text-purple-300 mb-4 group-hover:scale-110 transition-transform">
<span className="iconify text-xl" data-icon="ph:list-dashes-duotone"></span>
</div>
<h3 className="text-white font-medium mb-2">Smart Formatting</h3>
<p className="text-gray-400 text-sm leading-relaxed">Automatically detects lists, action items, and paragraphs. No more walls of text.</p>
</div>

<div className="glass-card p-6 rounded-xl hover:-translate-y-1 transition-transform duration-300 group hover:border-pink-500/30">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500/20 to-pink-500/5 border border-pink-500/20 flex items-center justify-center text-pink-300 mb-4 group-hover:scale-110 transition-transform">
<span className="iconify text-xl" data-icon="ph:magic-wand-duotone"></span>
</div>
<h3 className="text-white font-medium mb-2">Kills Filler Words</h3>
<p className="text-gray-400 text-sm leading-relaxed">Removes "um", "uh", "like" and stutters instantly. You sound smarter than you are.</p>
</div>

<div className="glass-card p-6 rounded-xl hover:-translate-y-1 transition-transform duration-300 group hover:border-indigo-500/30">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500/20 to-indigo-500/5 border border-indigo-500/20 flex items-center justify-center text-indigo-300 mb-4 group-hover:scale-110 transition-transform">
<span className="iconify text-xl" data-icon="ph:lightning-duotone"></span>
</div>
<h3 className="text-white font-medium mb-2">Instant Speed</h3>
<p className="text-gray-400 text-sm leading-relaxed">Processing takes 2-3 seconds. By the time you switch windows, it's done.</p>
</div>

<div className="glass-card p-6 rounded-xl hover:-translate-y-1 transition-transform duration-300 group hover:border-blue-500/30">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-500/5 border border-blue-500/20 flex items-center justify-center text-blue-300 mb-4 group-hover:scale-110 transition-transform">
<span className="iconify text-xl" data-icon="ph:devices-duotone"></span>
</div>
<h3 className="text-white font-medium mb-2">Cross-Platform</h3>
<p className="text-gray-400 text-sm leading-relaxed">Native Windows app or Telegram bot. Your voice, everywhere you work.</p>
</div>

<div className="glass-card p-6 rounded-xl hover:-translate-y-1 transition-transform duration-300 group hover:border-emerald-500/30">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 border border-emerald-500/20 flex items-center justify-center text-emerald-300 mb-4 group-hover:scale-110 transition-transform">
<span className="iconify text-xl" data-icon="ph:brain-duotone"></span>
</div>
<h3 className="text-white font-medium mb-2">Context Aware</h3>
<p className="text-gray-400 text-sm leading-relaxed">It knows if you're writing a tweet, an email, or code. Formats accordingly.</p>
</div>

<div className="glass-card p-6 rounded-xl hover:-translate-y-1 transition-transform duration-300 group hover:border-orange-500/30">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-500/5 border border-orange-500/20 flex items-center justify-center text-orange-300 mb-4 group-hover:scale-110 transition-transform">
<span className="iconify text-xl" data-icon="ph:lock-key-duotone"></span>
</div>
<h3 className="text-white font-medium mb-2">Private by Default</h3>
<p className="text-gray-400 text-sm leading-relaxed">Audio is processed and immediately deleted. We don't train on your data.</p>
</div>
</div>
</section>

<section className="mt-32 max-w-4xl mx-auto" id="pricing">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="glass-card rounded-2xl p-8 flex flex-col items-start border-white/5 opacity-80 hover:opacity-100 transition-opacity">
<h3 className="text-lg font-medium text-white mb-2">Starter</h3>
<div className="text-3xl font-display font-bold text-white mb-6">$0</div>
<ul className="space-y-4 mb-8 flex-1 w-full">
<li className="flex items-center gap-3 text-sm text-gray-400">
<span className="iconify text-white" data-icon="ph:check"></span> 3 free messages
                         </li>
<li className="flex items-center gap-3 text-sm text-gray-400">
<span className="iconify text-white" data-icon="ph:check"></span> Standard speed
                         </li>
<li className="flex items-center gap-3 text-sm text-gray-400">
<span className="iconify text-white" data-icon="ph:check"></span> Telegram access
                        </li>
</ul>
<button className="w-full py-2.5 rounded-lg border border-white/10 text-white text-sm font-medium hover:bg-white/5 transition-colors">Start Free</button>
</div>

<div className="relative glass-card rounded-2xl p-8 flex flex-col items-start border-purple-500/30 shadow-[0_0_50px_-20px_rgba(168,85,247,0.2)]">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-[10px] font-bold tracking-wide text-white uppercase">Most Popular</div>
<h3 className="text-lg font-medium text-white mb-2">Pro</h3>
<div className="text-3xl font-display font-bold text-white mb-6">$5 <span className="text-sm font-normal text-gray-500">/ USDT</span></div>
<ul className="space-y-4 mb-8 flex-1 w-full">
<li className="flex items-center gap-3 text-sm text-white">
<span className="iconify text-purple-400" data-icon="ph:check-bold"></span> 200 messages / mo
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<span className="iconify text-purple-400" data-icon="ph:check-bold"></span> Priority processing
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<span className="iconify text-purple-400" data-icon="ph:check-bold"></span> Windows App + Telegram
                       </li>
</ul>
<button className="w-full py-2.5 rounded-lg bg-white text-black text-sm font-medium hover:bg-gray-100 transition-colors shadow-lg shadow-purple-500/20">Upgrade Now</button>
</div>
</div>

<div className="mt-12 pt-8 border-t border-white/5">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-4">
<div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold">1</div>
<p className="text-xs text-gray-400">Connect Wallet</p>
<div className="w-8 h-[1px] bg-white/10"></div>
<div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold">2</div>
<p className="text-xs text-gray-400">Send USDT</p>
<div className="w-8 h-[1px] bg-white/10"></div>
<div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold">3</div>
<p className="text-xs text-gray-400">Instant Access</p>
</div>
<div className="text-xs font-medium text-green-400 flex items-center gap-2 bg-green-500/10 px-3 py-1.5 rounded-full border border-green-500/20">
<span className="iconify" data-icon="ph:shield-check-fill"></span> Automatic blockchain verification
                     </div>
</div>
</div>
</section>

<section className="mt-32 relative text-center py-20 overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="relative z-10">
<h2 className="font-display font-extrabold text-4xl md:text-5xl text-white mb-4 tracking-tight">Ready to stop typing?</h2>
<p className="text-gray-400 mb-8">Try 3 messages free. No signup required.</p>
<button className="group relative px-8 py-3 bg-white text-black rounded-full font-medium text-sm hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)]">
                    Start Recording Now
                </button>
</div>
</section>
</main>
<footer className="border-t border-white/5 bg-[#050507] py-10 relative z-10">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
<div className="flex items-center gap-2 mb-4 md:mb-0">
<span className="font-display font-bold text-gray-400">Voxly</span>
<span>© 2024</span>
</div>
<div className="flex gap-6">
<a className="hover:text-gray-400 transition-colors" href="#">Privacy</a>
<a className="hover:text-gray-400 transition-colors" href="#">Terms</a>
<a className="hover:text-gray-400 transition-colors" href="#">Twitter</a>
</div>
</div>
</footer>

    </>
  );
}
