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
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[20%] w-[40rem] h-[40rem] bg-indigo-900/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[20%] w-[30rem] h-[30rem] bg-purple-900/10 rounded-full blur-[100px]"></div>
</div>

<nav className="fixed w-full z-50 top-0 border-b border-white/5 glass">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-white font-medium tracking-tight text-lg flex items-center gap-2" href="#">
<div className="w-6 h-6 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded flex items-center justify-center text-white text-xs font-semibold">E</div>
                    EASYSLICE
                </a>
<div className="hidden md:flex gap-6 text-sm text-neutral-400">
<a className="hover:text-white transition-colors duration-200" href="#features">Features</a>
<a className="hover:text-white transition-colors duration-200" href="#how-it-works">How it works</a>
<a className="hover:text-white transition-colors duration-200" href="#pricing">Pricing</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="text-sm text-neutral-400 hover:text-white transition-colors hidden sm:block" href="#">Log in</a>
<a className="text-sm bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-neutral-200 transition-colors" href="#">Get Started</a>
</div>
</div>
</nav>

<section className="pt-32 pb-20 px-6 relative">
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-indigo-300 mb-8">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                New: AI Face Tracking 2.0
            </div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight mb-6 leading-[1.1]">
                Turn long videos into <br/>
<span className="gradient-text">viral shorts in seconds.</span>
</h1>
<p className="text-lg text-neutral-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                Easy Slice analyzes your content, detects the best moments, and auto-crops them into vertical clips with AI-generated captions.
            </p>

<div className="max-w-lg mx-auto relative group mb-12">
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
<div className="relative flex items-center bg-neutral-900 border border-white/10 rounded-lg p-1.5 shadow-2xl">
<div className="pl-3 text-neutral-500">
<iconify-icon icon="solar:link-circle-linear" width="20"></iconify-icon>
</div>
<input className="w-full bg-transparent border-none text-white text-sm px-3 focus:outline-none focus:ring-0 placeholder-neutral-600 h-10" placeholder="Paste YouTube link here..." type="text"/>
<button className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm px-4 py-2 rounded font-medium transition-colors flex items-center gap-2">
                        Slice It
                        <iconify-icon icon="solar:magic-stick-3-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="mt-16 relative mx-auto max-w-5xl rounded-xl border border-white/10 bg-neutral-900/50 backdrop-blur overflow-hidden shadow-2xl glow">
<div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-neutral-900">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="p-1 grid grid-cols-12 gap-1 h-[400px]">

<div className="hidden md:block col-span-2 bg-neutral-900/50 border-r border-white/5 p-4">
<div className="space-y-4">
<div className="h-2 w-20 bg-neutral-800 rounded"></div>
<div className="h-20 w-full bg-neutral-800/50 rounded border border-white/5"></div>
<div className="h-20 w-full bg-neutral-800/50 rounded border border-white/5"></div>
<div className="h-20 w-full bg-neutral-800/50 rounded border border-white/5"></div>
</div>
</div>

<div className="col-span-12 md:col-span-7 bg-black flex items-center justify-center relative">
<div className="aspect-[9/16] h-[300px] bg-neutral-800 rounded-lg overflow-hidden relative border border-white/10 shadow-lg">
<div className="absolute inset-0 flex items-center justify-center">
<iconify-icon className="text-white/20" icon="solar:play-circle-linear" width="48"></iconify-icon>
</div>

<div className="absolute bottom-12 left-0 right-0 text-center px-4">
<span className="bg-black/50 backdrop-blur px-2 py-1 rounded text-white font-semibold text-sm">Wait, is that real?</span>
</div>
</div>

<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 text-white/50">
<iconify-icon icon="solar:skip-previous-linear" width="20"></iconify-icon>
<iconify-icon className="text-white" icon="solar:pause-linear" width="20"></iconify-icon>
<iconify-icon icon="solar:skip-next-linear" width="20"></iconify-icon>
</div>
</div>

<div className="hidden md:block col-span-3 bg-neutral-900/50 border-l border-white/5 p-4 space-y-6">
<div>
<div className="flex justify-between items-center mb-2">
<span className="text-xs text-neutral-400">Virality Score</span>
<span className="text-xs text-green-400">92/100</span>
</div>
<div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full w-[92%] bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"></div>
</div>
</div>
<div className="space-y-3">
<div className="text-xs text-neutral-400">Output Settings</div>
<div className="flex items-center justify-between p-2 rounded bg-neutral-800/30 border border-white/5">
<span className="text-xs text-neutral-300 flex items-center gap-2">
<iconify-icon icon="solar:closed-caption-linear"></iconify-icon> Captions
                                </span>

<div className="w-8 h-4 bg-indigo-600 rounded-full relative cursor-pointer">
<div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm"></div>
</div>
</div>
<div className="flex items-center justify-between p-2 rounded bg-neutral-800/30 border border-white/5">
<span className="text-xs text-neutral-300 flex items-center gap-2">
<iconify-icon icon="solar:face-scan-square-linear"></iconify-icon> Face Track
                                </span>
<div className="w-8 h-4 bg-indigo-600 rounded-full relative cursor-pointer">
<div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-white/5 bg-neutral-900/20">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs text-neutral-500 uppercase tracking-widest mb-8 font-medium">Powering content for</p>
<div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale mix-blend-screen">

<span className="text-xl font-bold tracking-tighter text-white">VERCEL</span>
<span className="text-xl font-bold tracking-tighter text-white">STRIPE</span>
<span className="text-xl font-bold tracking-tighter text-white">ACME CORP</span>
<span className="text-xl font-bold tracking-tighter text-white">LINEAR</span>
<span className="text-xl font-bold tracking-tighter text-white">RAYCAST</span>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="features">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Everything you need to go viral.</h2>
<p className="text-neutral-400 text-lg">Powerful AI tools packaged in a simple interface.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="col-span-1 md:col-span-2 group relative rounded-2xl border border-white/10 bg-neutral-900 p-8 overflow-hidden hover:border-white/20 transition-colors">
<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-neutral-800 border border-white/10 flex items-center justify-center mb-6 text-indigo-400">
<iconify-icon icon="solar:videocamera-record-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Active Speaker Detection</h3>
<p className="text-sm text-neutral-400 max-w-sm leading-relaxed">Our AI automatically identifies who is speaking and dynamically crops the video to keep them in frame, perfect for podcasts and interviews.</p>
</div>

<div className="mt-8 relative h-32 w-full bg-neutral-800/50 rounded border border-white/5 overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-indigo-500/50 rounded-lg">
<div className="absolute -top-2 -left-2 w-1 h-1 bg-indigo-500"></div>
<div className="absolute -top-2 -right-2 w-1 h-1 bg-indigo-500"></div>
<div className="absolute -bottom-2 -left-2 w-1 h-1 bg-indigo-500"></div>
<div className="absolute -bottom-2 -right-2 w-1 h-1 bg-indigo-500"></div>
</div>
</div>
</div>

<div className="col-span-1 group relative rounded-2xl border border-white/10 bg-neutral-900 p-8 overflow-hidden hover:border-white/20 transition-colors">
<div className="w-10 h-10 rounded-lg bg-neutral-800 border border-white/10 flex items-center justify-center mb-6 text-purple-400">
<iconify-icon icon="solar:text-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Auto Captions</h3>
<p className="text-sm text-neutral-400 leading-relaxed">97% accurate transcription. Stylize your captions with one click to match popular creators.</p>
<div className="mt-6 flex flex-col gap-2">
<div className="w-full h-8 rounded bg-neutral-800/50 border border-white/5 flex items-center px-3 text-[10px] text-white">
<span className="text-yellow-400 font-bold mr-1">Wow</span> that was incredible!
                    </div>
<div className="w-full h-8 rounded bg-neutral-800/50 border border-white/5 flex items-center px-3 text-[10px] text-white">
<span className="bg-indigo-500 px-1 rounded mr-1">Secret</span> to growth.
                    </div>
</div>
</div>

<div className="col-span-1 group relative rounded-2xl border border-white/10 bg-neutral-900 p-8 overflow-hidden hover:border-white/20 transition-colors">
<div className="w-10 h-10 rounded-lg bg-neutral-800 border border-white/10 flex items-center justify-center mb-6 text-green-400">
<iconify-icon icon="solar:chart-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Virality Score</h3>
<p className="text-sm text-neutral-400 leading-relaxed">AI ranks your clips based on hook strength, pacing, and emotional impact before you post.</p>
<div className="mt-6 flex items-end gap-2 h-16">
<div className="w-1/4 bg-neutral-800 h-[40%] rounded-t"></div>
<div className="w-1/4 bg-neutral-800 h-[60%] rounded-t"></div>
<div className="w-1/4 bg-neutral-800 h-[30%] rounded-t"></div>
<div className="w-1/4 bg-gradient-to-t from-green-900 to-green-500 h-[80%] rounded-t relative">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-green-400 font-mono">9.8</div>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-2 group relative rounded-2xl border border-white/10 bg-neutral-900 p-8 overflow-hidden hover:border-white/20 transition-colors">
<div className="absolute top-0 left-0 w-64 h-64 bg-pink-500/10 rounded-full blur-[80px] pointer-events-none"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-neutral-800 border border-white/10 flex items-center justify-center mb-6 text-pink-400">
<iconify-icon icon="solar:layers-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Multi-Platform Export</h3>
<p className="text-sm text-neutral-400 max-w-sm leading-relaxed">Export for TikTok, Reels, and Shorts simultaneously. Custom aspect ratios and safe zones included.</p>
</div>
<div className="mt-8 flex gap-4 justify-start">
<div className="h-24 w-16 border border-white/10 rounded bg-neutral-800/50 flex items-center justify-center">
<iconify-icon className="text-neutral-500" icon="solar:plain-linear"></iconify-icon>
</div>
<div className="h-24 w-16 border border-white/10 rounded bg-neutral-800/50 flex items-center justify-center">
<iconify-icon className="text-neutral-500" icon="solar:plain-linear"></iconify-icon>
</div>
<div className="h-24 w-16 border border-white/10 rounded bg-neutral-800/50 flex items-center justify-center">
<iconify-icon className="text-neutral-500" icon="solar:plain-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5" id="pricing">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Simple pricing.</h2>
<p className="text-neutral-400 text-lg">Start for free. Upgrade for power.</p>

<div className="flex items-center justify-center gap-4 mt-8">
<span className="text-sm text-white">Monthly</span>
<div className="w-12 h-6 bg-neutral-800 rounded-full border border-white/10 relative p-1 cursor-pointer">
<div className="w-4 h-4 bg-indigo-500 rounded-full absolute left-1"></div>
</div>
<span className="text-sm text-neutral-500">Yearly</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="p-8 rounded-2xl border border-white/10 bg-neutral-900/50 hover:border-white/20 transition-all">
<div className="mb-6">
<h3 className="text-lg font-medium text-white">Starter</h3>
<div className="flex items-baseline gap-1 mt-2">
<span className="text-3xl font-medium text-white">$0</span>
<span className="text-sm text-neutral-500">/mo</span>
</div>
<p className="text-xs text-neutral-400 mt-2">Perfect for trying it out.</p>
</div>
<button className="w-full py-2.5 rounded-lg border border-white/10 bg-white/5 text-sm font-medium text-white hover:bg-white/10 transition-colors mb-8">Get Started</button>
<ul className="space-y-4 text-sm text-neutral-400">
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> 60 mins upload/mo
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> 720p export
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Watermarked
                        </li>
</ul>
</div>

<div className="p-8 rounded-2xl border border-indigo-500/30 bg-neutral-900 relative">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full">Most Popular</div>
<div className="mb-6">
<h3 className="text-lg font-medium text-white">Creator</h3>
<div className="flex items-baseline gap-1 mt-2">
<span className="text-3xl font-medium text-white">$29</span>
<span className="text-sm text-neutral-500">/mo</span>
</div>
<p className="text-xs text-neutral-400 mt-2">For growing channels.</p>
</div>
<button className="w-full py-2.5 rounded-lg bg-indigo-600 text-sm font-medium text-white hover:bg-indigo-500 transition-colors mb-8 shadow-lg shadow-indigo-900/20">Upgrade Now</button>
<ul className="space-y-4 text-sm text-neutral-300">
<li className="flex items-center gap-3">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> 300 mins upload/mo
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> 1080p export
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> No Watermark
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> AI Face Tracking
                        </li>
</ul>
</div>

<div className="p-8 rounded-2xl border border-white/10 bg-neutral-900/50 hover:border-white/20 transition-all">
<div className="mb-6">
<h3 className="text-lg font-medium text-white">Agency</h3>
<div className="flex items-baseline gap-1 mt-2">
<span className="text-3xl font-medium text-white">$99</span>
<span className="text-sm text-neutral-500">/mo</span>
</div>
<p className="text-xs text-neutral-400 mt-2">For high volume needs.</p>
</div>
<button className="w-full py-2.5 rounded-lg border border-white/10 bg-white/5 text-sm font-medium text-white hover:bg-white/10 transition-colors mb-8">Contact Sales</button>
<ul className="space-y-4 text-sm text-neutral-400">
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Unlimited uploads
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> 4K export
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> API Access
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-4xl mx-auto relative rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 text-center px-6 py-16">
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-indigo-500/10 to-transparent pointer-events-none"></div>
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6 relative z-10">Ready to go viral?</h2>
<p className="text-neutral-400 mb-8 max-w-lg mx-auto relative z-10">Join 10,000+ creators saving hours of editing time every single week.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
<button className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-neutral-200 transition-colors">Start for free</button>
<button className="px-8 py-3 bg-black border border-neutral-700 text-white rounded-full font-medium hover:bg-neutral-800 transition-colors">View Demo</button>
</div>
</div>
</section>

<footer className="border-t border-white/5 pt-16 pb-8 px-6 bg-black">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="text-white font-medium tracking-tight text-lg flex items-center gap-2 mb-4" href="#">
<div className="w-5 h-5 bg-neutral-800 rounded flex items-center justify-center text-white text-[10px] font-semibold">E</div>
                    EASYSLICE
                </a>
<p className="text-neutral-500 text-sm">AI-powered video repurposing for the modern creator.</p>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Product</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Features</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-white transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Company</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Legal</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-neutral-600 text-xs">© 2024 EasySlice AI. All rights reserved.</p>
<div className="flex gap-4 text-neutral-500">
<iconify-icon className="hover:text-white cursor-pointer transition-colors" icon="solar:cat-linear"></iconify-icon>
<iconify-icon className="hover:text-white cursor-pointer transition-colors" icon="solar:bomb-linear"></iconify-icon>
</div>
</div>
</footer>

    </>
  );
}
