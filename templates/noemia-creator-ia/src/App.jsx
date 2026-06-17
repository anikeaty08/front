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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-tr from-white to-slate-500 flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-black"></div>
</div>
<span className="text-white font-medium tracking-tight text-sm">CREATORFLOW</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors duration-200" href="#features">Features</a>
<a className="hover:text-white transition-colors duration-200" href="#workflow">Workflow</a>
<a className="hover:text-white transition-colors duration-200" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium hover:text-white transition-colors" href="#">Sign in</a>
<a className="bg-white text-black px-4 py-2 rounded-full text-xs font-medium hover:bg-slate-200 transition-colors tracking-wide" href="#">
                    Get Started
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 overflow-hidden">
<div className="glow-effect"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col items-center text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-300 mb-8 hover:bg-white/10 transition cursor-pointer">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
</span>
<span>New: Auto-Reels Generator v2.0</span>
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="12"></iconify-icon>
</div>

<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white max-w-4xl mb-6 leading-[1.1]">
                    Create content at the <br/>
<span className="gradient-text">speed of thought.</span>
</h1>

<p className="text-lg md:text-xl text-slate-500 max-w-2xl mb-10 font-light leading-relaxed">
                    Your personal AI creative director. Generate captions, optimize hashtags, and schedule posts across all platforms in seconds, not hours.
                </p>

<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium text-sm hover:bg-slate-200 transition-all hover:scale-[1.02]">
<iconify-icon icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        Start Generating Free
                    </button>
<button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium text-sm text-white border border-white/10 hover:bg-white/5 transition-all">
<iconify-icon icon="solar:play-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        Watch Demo
                    </button>
</div>
</div>

<div className="mt-20 relative mx-auto max-w-5xl">

<div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-blue-500/10 blur-3xl -z-10 rounded-full opacity-50"></div>
<div className="glass-panel rounded-xl overflow-hidden shadow-2xl shadow-black/50">

<div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-white/10"></div>
<div className="w-3 h-3 rounded-full bg-white/10"></div>
<div className="w-3 h-3 rounded-full bg-white/10"></div>
</div>
<div className="mx-auto text-xs text-slate-600 font-medium">dashboard.creatorflow.ai</div>
</div>

<div className="flex h-[500px] md:h-[600px]">

<div className="w-64 border-r border-white/5 hidden md:flex flex-col p-4 bg-black/20">
<div className="space-y-1">
<div className="flex items-center gap-3 px-3 py-2 text-sm text-white bg-white/10 rounded-lg">
<iconify-icon icon="solar:home-smile-linear" strokeWidth="1.5" width="18"></iconify-icon>
                                    Dashboard
                                </div>
<div className="flex items-center gap-3 px-3 py-2 text-sm text-slate-500 hover:text-slate-300 transition cursor-pointer">
<iconify-icon icon="solar:pen-new-square-linear" strokeWidth="1.5" width="18"></iconify-icon>
                                    Post Generator
                                </div>
<div className="flex items-center gap-3 px-3 py-2 text-sm text-slate-500 hover:text-slate-300 transition cursor-pointer">
<iconify-icon icon="solar:calendar-date-linear" strokeWidth="1.5" width="18"></iconify-icon>
                                    Scheduler
                                </div>
<div className="flex items-center gap-3 px-3 py-2 text-sm text-slate-500 hover:text-slate-300 transition cursor-pointer">
<iconify-icon icon="solar:chart-2-linear" strokeWidth="1.5" width="18"></iconify-icon>
                                    Analytics
                                </div>
</div>
<div className="mt-auto pt-4 border-t border-white/5">
<div className="flex items-center gap-3 px-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600"></div>
<div className="text-xs">
<div className="text-white font-medium">Sarah Creator</div>
<div className="text-slate-500">Pro Plan</div>
</div>
</div>
</div>
</div>

<div className="flex-1 p-6 md:p-8 flex flex-col gap-6 relative">

<div className="flex justify-between items-center">
<div>
<h3 className="text-white font-medium text-lg">New Post</h3>
<p className="text-xs text-slate-500">Let AI draft your next viral hit.</p>
</div>
<button className="text-xs flex items-center gap-1 text-purple-400 bg-purple-400/10 px-3 py-1.5 rounded-full border border-purple-400/20">
<iconify-icon icon="solar:stars-minimalistic-linear" strokeWidth="1.5" width="14"></iconify-icon>
                                    AI Active
                                </button>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">

<div className="flex flex-col gap-4">
<div className="space-y-2">
<label className="text-xs font-medium text-slate-400 uppercase tracking-wider">Content Type</label>
<div className="grid grid-cols-3 gap-2">
<button className="glass-panel py-2 px-3 rounded-lg text-xs font-medium text-white border-white/20">Instagram Reel</button>
<button className="glass-panel py-2 px-3 rounded-lg text-xs font-medium text-slate-500 hover:text-white transition">TikTok</button>
<button className="glass-panel py-2 px-3 rounded-lg text-xs font-medium text-slate-500 hover:text-white transition">LinkedIn</button>
</div>
</div>
<div className="space-y-2 flex-1 flex flex-col">
<label className="text-xs font-medium text-slate-400 uppercase tracking-wider">Context / Topic</label>
<textarea className="w-full flex-1 bg-black/40 border border-white/10 rounded-xl p-4 text-sm text-slate-300 focus:outline-none focus:border-white/20 transition resize-none font-light leading-relaxed placeholder:text-slate-700" placeholder="Describe what you want to post about... e.g. A day in the life of a digital nomad in Bali, focus on productivity and coffee shops."></textarea>
</div>
<button className="w-full bg-white text-black py-3 rounded-xl font-medium text-sm flex items-center justify-center gap-2 hover:bg-slate-200 transition">
                                        Generate Drafts
                                        <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>

<div className="glass-panel rounded-xl p-4 flex flex-col gap-4 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 opacity-80"></div>

<div className="bg-white/5 rounded-lg p-4 border border-white/5 hover:border-white/10 transition">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<div className="p-1 rounded bg-pink-500/20 text-pink-400">
<iconify-icon icon="solar:instagram-linear" strokeWidth="1.5" width="14"></iconify-icon>
</div>
<span className="text-xs font-medium text-white">Viral Style</span>
</div>
<div className="flex gap-1">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
</div>
</div>
<p className="text-sm text-slate-300 font-light leading-relaxed mb-3">
                                            Productivity isn't about working harder, it's about working smarter 🌴💻 Coffee, code, and Bali vibes. Who else is building their dream life this year? 👇
                                        </p>
<div className="flex flex-wrap gap-2">
<span className="text-[10px] text-blue-400">#digitalnomad</span>
<span className="text-[10px] text-blue-400">#balilife</span>
<span className="text-[10px] text-blue-400">#productivity</span>
</div>
</div>

<div className="bg-white/5 rounded-lg p-4 border border-white/5 opacity-50">
<div className="flex items-center gap-2 mb-3">
<div className="w-6 h-6 rounded bg-white/10"></div>
<div className="w-20 h-3 rounded bg-white/10"></div>
</div>
<div className="space-y-2">
<div className="w-full h-2 rounded bg-white/10"></div>
<div className="w-3/4 h-2 rounded bg-white/10"></div>
<div className="w-1/2 h-2 rounded bg-white/10"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-slate-600 uppercase tracking-widest mb-8">Trusted by 10,000+ creators</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale mix-blend-screen">

<span className="text-xl font-bold tracking-tight text-white">VOGUE</span>
<span className="text-xl font-semibold tracking-tighter text-white">hypebeast</span>
<span className="text-xl font-bold italic tracking-wide text-white">WIRED</span>
<span className="text-xl font-medium tracking-widest text-white">COMPLEX</span>
<span className="text-xl font-bold tracking-tight text-white">TheVerge</span>
</div>
</div>
</section>

<section className="py-24 relative" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-4">Built for modern growth.</h2>
<p className="text-slate-500 max-w-xl text-lg font-light">Every tool you need to grow your audience, streamlined into one powerful dashboard.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 glass-panel rounded-3xl p-8 md:p-10 relative overflow-hidden group hover:border-white/20 transition duration-500">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-30 transition transform group-hover:scale-110 duration-700">
<iconify-icon className="text-white" icon="solar:document-add-linear" width="120"></iconify-icon>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 text-white border border-white/10">
<iconify-icon icon="solar:text-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-white mb-3">Context-Aware Generation</h3>
<p className="text-slate-400 font-light max-w-md leading-relaxed">
                            Our AI understands your brand voice. Upload previous posts, and it learns your tone, emojis, and structure to generate captions that sound exactly like you.
                        </p>

<div className="mt-8 flex gap-3">
<div className="bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-xs text-slate-300 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-purple-500"></span> Casual
                            </div>
<div className="bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-xs text-slate-300 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-blue-500"></span> Professional
                            </div>
<div className="bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-xs text-slate-300 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500"></span> Witty
                            </div>
</div>
</div>
</div>

<div className="glass-panel rounded-3xl p-8 relative overflow-hidden group hover:border-white/20 transition duration-500 flex flex-col justify-between">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/10"></div>
<div>
<div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 text-white border border-white/10">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Trend Forecasting</h3>
<p className="text-sm text-slate-400 font-light mb-6">Predict which audio and formats will go viral next week.</p>
</div>

<div className="h-32 flex items-end gap-1.5 opacity-80">
<div className="w-1/6 bg-white/10 h-[40%] rounded-t-sm"></div>
<div className="w-1/6 bg-white/10 h-[60%] rounded-t-sm"></div>
<div className="w-1/6 bg-white/10 h-[30%] rounded-t-sm"></div>
<div className="w-1/6 bg-white/10 h-[70%] rounded-t-sm"></div>
<div className="w-1/6 bg-purple-500 h-[90%] rounded-t-sm relative">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white bg-black px-1.5 py-0.5 rounded border border-white/10">Now</div>
</div>
<div className="w-1/6 bg-white/10 h-[40%] rounded-t-sm"></div>
</div>
</div>

<div className="glass-panel rounded-3xl p-8 relative overflow-hidden group hover:border-white/20 transition duration-500">
<div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 text-white border border-white/10">
<iconify-icon icon="solar:hashtag-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Smart Hashtags</h3>
<p className="text-sm text-slate-400 font-light">Dynamically generates tags based on image recognition and niche competition.</p>
</div>

<div className="md:col-span-2 glass-panel rounded-3xl p-8 md:p-10 relative overflow-hidden group hover:border-white/20 transition duration-500 flex flex-col md:flex-row items-center gap-8">
<div className="flex-1">
<div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 text-white border border-white/10">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-white mb-3">Auto-Pilot Scheduling</h3>
<p className="text-slate-400 font-light leading-relaxed">
                            Don't just schedule. Let our AI determine the exact millisecond your audience is most active and auto-publish for maximum engagement.
                        </p>
</div>
<div className="w-full md:w-1/2 bg-black/30 rounded-xl border border-white/10 p-4">
<div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
<span className="text-xs font-medium text-white">Upcoming</span>
<span className="text-xs text-slate-500">Today</span>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded bg-white/10 flex-shrink-0"></div>
<div>
<div className="text-xs text-white">Reel: Morning Routine</div>
<div className="text-[10px] text-green-400">Scheduled 09:41 AM</div>
</div>
</div>
<div className="flex items-center gap-3 opacity-50">
<div className="w-10 h-10 rounded bg-white/10 flex-shrink-0"></div>
<div>
<div className="text-xs text-white">Photo: Workspace</div>
<div className="text-[10px] text-slate-400">Tomorrow 10:00 AM</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gradient-to-b from-transparent to-black" id="workflow">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl font-medium text-white tracking-tight mb-12">From idea to published in seconds</h2>
<div className="relative">
<div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent md:left-1/2 hidden md:block"></div>

<div className="flex flex-col md:flex-row items-center gap-8 mb-16 relative">
<div className="md:w-1/2 text-right hidden md:block">
<h4 className="text-lg text-white font-medium">Upload or Describe</h4>
<p className="text-sm text-slate-500 mt-1">Drop a photo or just type "Motivational quote about fitness".</p>
</div>
<div className="z-10 w-16 h-16 rounded-full bg-[#050505] border border-white/10 flex items-center justify-center text-white shadow-[0_0_15px_rgba(255,255,255,0.1)]">
<span className="font-medium">1</span>
</div>
<div className="md:w-1/2 text-center md:text-left">
<h4 className="text-lg text-white font-medium md:hidden">Upload or Describe</h4>
<p className="text-sm text-slate-500 mt-1 md:hidden mb-4">Drop a photo or just type "Motivational quote about fitness".</p>
<div className="glass-panel inline-block px-4 py-2 rounded-lg text-xs font-mono text-purple-300">
                            &gt; analyzing image contents...
                        </div>
</div>
</div>

<div className="flex flex-col md:flex-row items-center gap-8 mb-16 relative">
<div className="md:w-1/2 text-right">
<h4 className="text-lg text-white font-medium md:hidden">AI Generation</h4>
<p className="text-sm text-slate-500 mt-1 md:hidden mb-4">Multiple caption options, hashtags, and first comments generated instantly.</p>
<div className="glass-panel inline-flex flex-col items-start p-3 rounded-lg text-xs gap-2">
<div className="h-2 w-32 bg-white/20 rounded"></div>
<div className="h-2 w-24 bg-white/20 rounded"></div>
<div className="h-2 w-40 bg-white/10 rounded"></div>
</div>
</div>
<div className="z-10 w-16 h-16 rounded-full bg-[#050505] border border-white/10 flex items-center justify-center text-white shadow-[0_0_15px_rgba(255,255,255,0.1)]">
<span className="font-medium">2</span>
</div>
<div className="md:w-1/2 text-left hidden md:block">
<h4 className="text-lg text-white font-medium">AI Generation</h4>
<p className="text-sm text-slate-500 mt-1">Multiple caption options, hashtags, and first comments generated instantly.</p>
</div>
</div>

<div className="flex flex-col md:flex-row items-center gap-8 relative">
<div className="md:w-1/2 text-right hidden md:block">
<h4 className="text-lg text-white font-medium">Publish</h4>
<p className="text-sm text-slate-500 mt-1">One click to post to Instagram, TikTok, and Pinterest simultaneously.</p>
</div>
<div className="z-10 w-16 h-16 rounded-full bg-white text-black flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.3)]">
<iconify-icon icon="solar:check-circle-bold" width="24"></iconify-icon>
</div>
<div className="md:w-1/2 text-center md:text-left">
<h4 className="text-lg text-white font-medium md:hidden">Publish</h4>
<p className="text-sm text-slate-500 mt-1 md:hidden mb-4">One click to post to Instagram, TikTok, and Pinterest simultaneously.</p>
<button className="bg-blue-600/20 text-blue-400 px-4 py-1.5 rounded-full text-xs border border-blue-500/20">
                            Published Successfully
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="pricing">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/10 blur-[100px] rounded-full -z-10"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Simple pricing for creators.</h2>
<p className="text-slate-500">Start for free, upgrade as you grow.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">

<div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition">
<h3 className="text-white font-medium text-lg mb-2">Starter</h3>
<div className="text-3xl font-medium text-white mb-6">$0</div>
<p className="text-sm text-slate-500 mb-8">Perfect for hobbyists.</p>
<ul className="space-y-4 text-sm text-slate-400 mb-8">
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> 5 AI posts / month
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Basic Hashtags
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> 1 User
                        </li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/10 text-white font-medium text-sm hover:bg-white/5 transition">Start Free</button>
</div>

<div className="p-8 rounded-2xl border border-purple-500/30 bg-purple-900/10 relative">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-500 text-white px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase">Most Popular</div>
<h3 className="text-white font-medium text-lg mb-2">Influencer Pro</h3>
<div className="text-3xl font-medium text-white mb-6">$29<span className="text-lg text-slate-500 font-normal">/mo</span></div>
<p className="text-sm text-purple-200/70 mb-8">For serious growth.</p>
<ul className="space-y-4 text-sm text-slate-300 mb-8">
<li className="flex items-center gap-3">
<iconify-icon className="text-purple-400" icon="solar:check-circle-bold"></iconify-icon> Unlimited AI posts
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-purple-400" icon="solar:check-circle-bold"></iconify-icon> Trend Forecasting
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-purple-400" icon="solar:check-circle-bold"></iconify-icon> Auto-Scheduling
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-purple-400" icon="solar:check-circle-bold"></iconify-icon> Analytics Suite
                        </li>
</ul>
<button className="w-full py-3 rounded-lg bg-white text-black font-medium text-sm hover:bg-slate-200 transition">Get Pro</button>
</div>

<div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition">
<h3 className="text-white font-medium text-lg mb-2">Agency</h3>
<div className="text-3xl font-medium text-white mb-6">$99<span className="text-lg text-slate-500 font-normal">/mo</span></div>
<p className="text-sm text-slate-500 mb-8">For managing multiple accounts.</p>
<ul className="space-y-4 text-sm text-slate-400 mb-8">
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Everything in Pro
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> 10 Social Accounts
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Team Collaboration
                        </li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/10 text-white font-medium text-sm hover:bg-white/5 transition">Contact Sales</button>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-black">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-8">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-5 h-5 rounded bg-white flex items-center justify-center">
<div className="w-1.5 h-1.5 rounded-full bg-black"></div>
</div>
<span className="text-white font-medium tracking-tight text-sm">CREATORFLOW</span>
</div>
<p className="text-slate-500 text-sm max-w-xs font-light">
                        Empowering the next generation of digital storytellers with artificial intelligence.
                    </p>
</div>
<div className="flex gap-16">
<div>
<h4 className="text-white font-medium text-sm mb-4">Product</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-white transition" href="#">Features</a></li>
<li><a className="hover:text-white transition" href="#">Pricing</a></li>
<li><a className="hover:text-white transition" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-white transition" href="#">Privacy</a></li>
<li><a className="hover:text-white transition" href="#">Terms</a></li>
</ul>
</div>
</div>
</div>
<div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-600">© 2024 CreatorFlow AI Inc. All rights reserved.</p>
<div className="flex gap-4 text-slate-500">
<iconify-icon className="hover:text-white cursor-pointer transition" icon="solar:brand-twitter-linear"></iconify-icon>
<iconify-icon className="hover:text-white cursor-pointer transition" icon="solar:brand-instagram-linear"></iconify-icon>
<iconify-icon className="hover:text-white cursor-pointer transition" icon="solar:brand-github-linear"></iconify-icon>
</div>
</div>
</div>
</footer>

    </>
  );
}
