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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030303]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 text-white tracking-tighter font-medium text-lg">
<span className="w-2 h-2 rounded-full bg-red-500 animate-pulse-slow"></span>
                CUTS
            </div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-tight">
<a className="hover:text-white transition-colors duration-200" href="#work">Work</a>
<a className="hover:text-white transition-colors duration-200" href="#process">Process</a>
<a className="hover:text-white transition-colors duration-200" href="#pricing">Pricing</a>
</div>
<a className="hidden md:flex items-center gap-2 text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition-all" href="#contact">
                Start Project
                <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">

<div className="absolute inset-0 w-full h-full overflow-hidden -z-10 pointer-events-none">

<div className="absolute inset-0 hero-grid opacity-50"></div>

<div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
<div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-32 left-1/3 w-[500px] h-[500px] bg-blue-500/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"></div>
</div>
<div className="max-w-5xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-zinc-300 mb-8 backdrop-blur-sm">
<iconify-icon className="text-indigo-400" icon="solar:stars-linear"></iconify-icon>
                Accepting new clients for Q4
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white mb-6 leading-[0.9]">
                We craft stories<br/>
<span className="text-zinc-600">frame by frame.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-xl mx-auto font-light leading-relaxed mb-10">
                Premium video editing agency for visionaries. We turn raw footage into cinematic narratives that capture attention and drive action.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<button className="w-full md:w-auto px-8 py-3 bg-white text-black rounded-full font-medium text-sm tracking-tight hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:play-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
                    View Showreel
                </button>
<button className="w-full md:w-auto px-8 py-3 border border-zinc-800 text-white rounded-full font-medium text-sm tracking-tight hover:bg-white/5 transition-colors">
                    Book a Call
                </button>
</div>
</div>

<div className="mt-20 max-w-6xl mx-auto relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
<div className="relative rounded-xl border border-white/10 bg-[#0A0A0A] overflow-hidden shadow-2xl">

<div className="h-8 border-b border-white/5 flex items-center px-4 gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
</div>

<div className="aspect-video bg-zinc-900/50 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>

<div className="absolute bottom-0 w-full h-1/3 border-t border-white/10 bg-[#050505] p-4 flex flex-col gap-3">
<div className="flex justify-between text-[10px] text-zinc-600 font-mono">
<span>00:00:00</span>
<span>00:00:15</span>
<span>00:00:30</span>
<span>00:00:45</span>
</div>
<div className="flex flex-col gap-1">
<div className="h-8 bg-indigo-900/30 border border-indigo-500/30 rounded w-3/4 relative">
<span className="absolute left-2 top-2 text-[8px] text-indigo-300">Video Track 1</span>
</div>
<div className="h-8 bg-emerald-900/30 border border-emerald-500/30 rounded w-1/2 ml-20 relative">
<span className="absolute left-2 top-2 text-[8px] text-emerald-300">Audio Track</span>
</div>
</div>
<div className="absolute top-0 bottom-0 left-1/3 w-px bg-red-500 z-10">
<div className="absolute -top-1 -left-1.5 w-3 h-3 bg-red-500 rotate-45"></div>
</div>
</div>
<button className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:scale-110 transition-transform">
<iconify-icon icon="solar:play-linear" width="32"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-zinc-500 mb-8 uppercase tracking-widest">Trusted by creators from</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale">
<div className="text-lg font-bold tracking-tighter text-white">stripe</div>
<div className="text-lg font-bold tracking-tighter text-white">Linear</div>
<div className="text-lg font-bold tracking-tighter text-white">▲ Vercel</div>
<div className="text-lg font-bold tracking-tighter text-white">RAYCAST</div>
<div className="text-lg font-bold tracking-tighter text-white">ARC</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="work">
<div className="max-w-7xl mx-auto">
<div className="mb-16 md:flex justify-between items-end">
<div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white mb-4">Post-production suite.</h2>
<p className="text-zinc-400 font-light max-w-md">Everything you need to ship high-quality video content at scale.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm text-white border-b border-white/20 pb-1 hover:border-white transition-colors" href="#">
                    View full capabilities
                    <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="glass-panel p-8 rounded-2xl md:col-span-2 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
<iconify-icon className="text-white" icon="solar:clapperboard-edit-linear" width="120"></iconify-icon>
</div>
<div className="relative z-10 h-full flex flex-col justify-between min-h-[240px]">
<div>
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10 text-white">
<iconify-icon icon="solar:scissors-square-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-2 tracking-tight">Advanced Editing</h3>
<p className="text-sm text-zinc-400 font-light max-w-sm">From pacing to narrative structure. We cut the fluff and keep the engagement high using modern retention techniques.</p>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="relative z-10 h-full flex flex-col justify-between min-h-[240px]">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10 text-white">
<iconify-icon icon="solar:magic-stick-3-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-xl text-white font-medium mb-2 tracking-tight">VFX &amp; Motion</h3>
<p className="text-sm text-zinc-400 font-light">Custom assets, 2D/3D motion graphics, and seamless composites.</p>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl relative overflow-hidden group">
<div className="relative z-10 h-full flex flex-col justify-between min-h-[240px]">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10 text-white">
<iconify-icon icon="solar:palette-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-xl text-white font-medium mb-2 tracking-tight">Color Grading</h3>
<p className="text-sm text-zinc-400 font-light">Industry standard DaVinci Resolve grading to match your brand identity.</p>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl md:col-span-2 relative overflow-hidden group">
<div className="absolute -right-10 -bottom-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px]"></div>
<div className="relative z-10 grid md:grid-cols-2 gap-8 items-center h-full">
<div>
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10 text-white">
<iconify-icon icon="solar:soundwave-square-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-2 tracking-tight">Sound Design</h3>
<p className="text-sm text-zinc-400 font-light">Immersive SFX, audio cleaning, and mixing. Good video is nothing without great audio.</p>
</div>

<div className="flex items-center justify-center gap-1 h-16">
<div className="w-1 bg-white/20 h-4 rounded-full animate-[pulse_1s_ease-in-out_infinite]"></div>
<div className="w-1 bg-white/40 h-8 rounded-full animate-[pulse_1.2s_ease-in-out_infinite]"></div>
<div className="w-1 bg-indigo-500 h-12 rounded-full animate-[pulse_0.8s_ease-in-out_infinite]"></div>
<div className="w-1 bg-white/40 h-6 rounded-full animate-[pulse_1.5s_ease-in-out_infinite]"></div>
<div className="w-1 bg-white/20 h-4 rounded-full animate-[pulse_1.1s_ease-in-out_infinite]"></div>
<div className="w-1 bg-white/20 h-8 rounded-full animate-[pulse_0.9s_ease-in-out_infinite]"></div>
<div className="w-1 bg-indigo-500 h-10 rounded-full animate-[pulse_1.3s_ease-in-out_infinite]"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white mb-6">Built for speed.<br/>Designed for quality.</h2>
<p className="text-zinc-400 font-light mb-8">We've refined our workflow to eliminate bottlenecks. No more endless email threads or missing files.</p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="flex-none w-8 h-8 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center font-mono text-xs">01</div>
<div>
<h4 className="text-white font-medium mb-1">Upload Footage</h4>
<p className="text-sm text-zinc-500">Drop your raw files into your dedicated portal.</p>
</div>
</div>
<div className="w-px h-8 bg-zinc-800 ml-4"></div>
<div className="flex gap-4">
<div className="flex-none w-8 h-8 rounded-full bg-zinc-800 border border-white/5 text-zinc-400 flex items-center justify-center font-mono text-xs">02</div>
<div>
<h4 className="text-white font-medium mb-1">We Edit</h4>
<p className="text-sm text-zinc-500">First draft delivered within 48 hours.</p>
</div>
</div>
<div className="w-px h-8 bg-zinc-800 ml-4"></div>
<div className="flex gap-4">
<div className="flex-none w-8 h-8 rounded-full bg-zinc-800 border border-white/5 text-zinc-400 flex items-center justify-center font-mono text-xs">03</div>
<div>
<h4 className="text-white font-medium mb-1">Review &amp; Ship</h4>
<p className="text-sm text-zinc-500">Frame-accurate feedback tool. Unlimited revisions.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-square rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 relative">

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-64 h-64 border border-white/5 rounded-full flex items-center justify-center relative animate-[spin_10s_linear_infinite]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-indigo-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
</div>
<div className="absolute w-48 h-48 border border-white/5 rounded-full flex items-center justify-center animate-[spin_15s_linear_infinite_reverse]">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
</div>
<div className="text-center z-10">
<h3 className="text-3xl font-medium text-white tracking-tighter">48h</h3>
<p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">Avg Turnaround</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="pricing">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white mb-4">Transparent Pricing.</h2>
<p className="text-zinc-400 font-light">Pause or cancel anytime. No hidden contracts.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

<div className="border border-white/10 rounded-2xl p-8 bg-black hover:border-white/20 transition-colors flex flex-col">
<div className="mb-8">
<h3 className="text-lg font-medium text-white mb-2">Creator</h3>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-medium tracking-tight text-white">$1,999</span>
<span className="text-sm text-zinc-500">/mo</span>
</div>
<p className="text-sm text-zinc-500 mt-4 h-10">Perfect for YouTubers and content creators.</p>
</div>
<button className="w-full py-2.5 border border-white/10 rounded-lg text-sm font-medium text-white hover:bg-white hover:text-black transition-all mb-8">
                        Get Started
                    </button>
<ul className="space-y-4 text-sm text-zinc-400 flex-1">
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon>
                            4 Videos / month
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon>
                            48h Turnaround
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon>
                            Dedicated Editor
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon>
                            Basic Thumbnails
                        </li>
</ul>
</div>

<div className="border border-indigo-500/30 rounded-2xl p-8 bg-zinc-900/40 relative flex flex-col">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-indigo-500 text-white text-[10px] font-medium tracking-wide uppercase rounded-full">
                        Most Popular
                    </div>
<div className="mb-8">
<h3 className="text-lg font-medium text-white mb-2">Pro</h3>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-medium tracking-tight text-white">$3,499</span>
<span className="text-sm text-zinc-500">/mo</span>
</div>
<p className="text-sm text-zinc-500 mt-4 h-10">For agencies and brands scaling output.</p>
</div>
<button className="w-full py-2.5 bg-white rounded-lg text-sm font-medium text-black hover:bg-zinc-200 transition-all mb-8 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                        Get Started
                    </button>
<ul className="space-y-4 text-sm text-zinc-300 flex-1">
<li className="flex items-center gap-3">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-bold"></iconify-icon>
                            8 Videos / month
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-bold"></iconify-icon>
                            24h Turnaround (Shorts)
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-bold"></iconify-icon>
                            Advanced Motion Graphics
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-bold"></iconify-icon>
                            Source Files Included
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-bold"></iconify-icon>
                            Slack Channel Access
                        </li>
</ul>
</div>

<div className="border border-white/10 rounded-2xl p-8 bg-black hover:border-white/20 transition-colors flex flex-col">
<div className="mb-8">
<h3 className="text-lg font-medium text-white mb-2">Enterprise</h3>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-medium tracking-tight text-white">Custom</span>
</div>
<p className="text-sm text-zinc-500 mt-4 h-10">High volume production needs.</p>
</div>
<button className="w-full py-2.5 border border-white/10 rounded-lg text-sm font-medium text-white hover:bg-white hover:text-black transition-all mb-8">
                        Contact Sales
                    </button>
<ul className="space-y-4 text-sm text-zinc-400 flex-1">
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon>
                            Unlimited Requests
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon>
                            Multiple Editors
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon>
                            Priority Support
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon>
                            Custom Workflow Integration
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-900/10 pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="text-5xl md:text-8xl font-medium tracking-tighter text-white mb-8">Ready to cut?</h2>
<div className="flex flex-col md:flex-row items-center justify-center gap-6">
<a className="px-8 py-4 bg-white text-black rounded-full font-medium text-base tracking-tight hover:bg-zinc-200 transition-colors w-full md:w-auto" href="#">
                    Book Strategy Call
                </a>
</div>
<p className="mt-8 text-zinc-500 text-sm">No credit card required for consultation.</p>
</div>
</section>

<footer className="border-t border-white/5 bg-[#020202] py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-2 text-white tracking-tighter font-medium text-xl">
<span className="w-2 h-2 rounded-full bg-red-500"></span>
                CUTS
            </div>
<div className="flex gap-8 text-sm text-zinc-500 font-medium">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
<p className="text-xs text-zinc-600">
                © 2024 Cuts Agency. All rights reserved.
            </p>
</div>
</footer>

    </>
  );
}
