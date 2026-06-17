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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="text-sm font-medium tracking-widest text-white uppercase">
                SwingSense
            </div>
<a className="text-xs font-medium text-white border border-white/10 px-4 py-2 rounded hover:bg-white/5 transition-colors" href="#offer">
                Founding Member Access
            </a>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0 bg-[#0F1210]">

<div className="w-full h-full opacity-80 bg-[url('https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&amp;w=2071&amp;auto=format&amp;fit=crop')] bg-cover bg-center mix-blend-overlay"></div>

<div className="absolute inset-0 bg-gradient-to-b from-[#0F2E1F]/40 via-[#0a1f15]/60 to-[#050505]"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-8 drop-shadow-lg">
                You Practice. <br/>
<span className="text-[#8AA899]">But You Don’t Improve.</span>
</h1>
<p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light drop-shadow-md">
                Progress feels slow because your feedback is inconsistent.
                <br/><br/>
                When someone corrects you in real time, improvement happens fast. But most of your practice happens alone — and that’s when slices repeat, timing drifts, and bad habits compound.
                <br/><br/>
                SwingSense analyzes your hip-to-torso sequencing every swing, so progress continues every time you practice.
            </p>
<div className="flex flex-col items-center gap-4">
<a className="bg-[#Cfb568] hover:bg-[#bda355] text-[#050505] px-8 py-4 text-sm font-medium rounded transition-all duration-300 w-full md:w-auto shadow-lg shadow-[#Cfb568]/10" href="#offer">
                    Become a Founding Member
                </a>
<p className="text-xs text-slate-400 tracking-wide uppercase font-medium">
                    Limited first release. Ships Q3 2026.
                </p>
</div>
</div>
</header>

<section className="py-24 md:py-32 bg-[#050505]">
<div className="max-w-2xl mx-auto px-6">
<div className="border-l-2 border-[#Cfb568]/50 pl-6 md:pl-8">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-8">
                    You’re Not Stuck. <br/>Your Feedback Is Wrong.
                </h2>
<div className="space-y-6 text-lg text-slate-300 font-light leading-relaxed">
<p>
                        You feel like your hips lead.
                        You feel like your tempo is smooth.
                        You feel like you’re rotating correctly.
                    </p>
<p className="text-white font-normal">
                        But feel isn’t fact.
                    </p>
<p>
                        And when you practice alone, you reinforce what feels right — not what is right.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#081610] border-y border-white/5">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">
                    You Can’t Feel <br/>40 Milliseconds.
                </h2>
<p className="text-slate-400 mb-8 font-light leading-relaxed">
                    Most 10–20 handicap golfers initiate their torso before their hips in transition. That 30–50 millisecond error causes:
                </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-slate-300">
<iconify-icon className="text-red-400/80 text-xl" icon="solar:close-circle-linear"></iconify-icon>
                        Over-the-top path
                    </li>
<li className="flex items-center gap-3 text-slate-300">
<iconify-icon className="text-red-400/80 text-xl" icon="solar:close-circle-linear"></iconify-icon>
                        Pulls and slices
                    </li>
<li className="flex items-center gap-3 text-slate-300">
<iconify-icon className="text-red-400/80 text-xl" icon="solar:close-circle-linear"></iconify-icon>
                        Inconsistent contact
                    </li>
</ul>
<p className="text-white font-medium">
                    You can’t feel that difference. But you can measure it.
                </p>
</div>

<div className="relative group">
<div className="aspect-[4/3] bg-[#0F1210] border border-white/10 rounded flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-[#0F2E1F]/20 to-transparent"></div>

<div className="w-3/4 space-y-4 opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700">
<div className="h-2 bg-white/20 rounded w-full"></div>
<div className="h-24 bg-white/10 rounded w-full flex items-end pb-2 px-2 gap-1">
<div className="w-full bg-[#Cfb568] h-[40%]"></div>
<div className="w-full bg-white/20 h-[60%]"></div>
<div className="w-full bg-white/20 h-[50%]"></div>
</div>
<div className="flex justify-between text-xs text-white/40">
<span>HIP VELOCITY</span>
<span>TORSO VELOCITY</span>
</div>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-xs tracking-widest text-white/30 border border-white/10 px-3 py-1 bg-black/50 backdrop-blur-sm">[ Real Sequencing Data UI ]</span>
</div>
</div>
<p className="text-xs text-slate-500 mt-3 text-center tracking-wide">
                    Real swing from 14 handicap test user.
                </p>
</div>
</div>
</section>

<section className="py-24 bg-[#050505]">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">
                    Measure What Actually <br/>Lowers Your Handicap.
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

<div className="bg-[#0A0C0E] border border-white/5 p-8 rounded hover:border-[#Cfb568]/30 transition-colors duration-500">
<div className="w-10 h-10 bg-white/5 rounded flex items-center justify-center mb-6 text-[#Cfb568]">
<iconify-icon icon="solar:running-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-white text-lg font-medium mb-3">Hip Sensor</h3>
<p className="text-slate-400 text-sm font-light">Tracks pelvic rotation speed and initiation timing relative to the ground.</p>
</div>

<div className="bg-[#0A0C0E] border border-white/5 p-8 rounded hover:border-[#Cfb568]/30 transition-colors duration-500">
<div className="w-10 h-10 bg-white/5 rounded flex items-center justify-center mb-6 text-[#Cfb568]">
<iconify-icon icon="solar:user-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-white text-lg font-medium mb-3">Torso Sensor</h3>
<p className="text-slate-400 text-sm font-light">Monitors upper body coil and the precise moment of transition downswing.</p>
</div>

<div className="bg-[#0A0C0E] border border-white/5 p-8 rounded hover:border-[#Cfb568]/30 transition-colors duration-500">
<div className="w-10 h-10 bg-white/5 rounded flex items-center justify-center mb-6 text-[#Cfb568]">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-white text-lg font-medium mb-3">Sequencing Score</h3>
<p className="text-slate-400 text-sm font-light">A single metric telling you if your kinematic sequence was efficient or flawed.</p>
</div>
</div>

<div className="w-full max-w-4xl mx-auto aspect-[16/6] bg-[#0A0C0E] border border-white/5 rounded flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-50"></div>
<div className="text-center">
<span className="block text-xs text-white/30 tracking-widest mb-2">[ Clean Minimalist Diagram ]</span>
<p className="text-xs text-slate-500">Visualizing Hip vs. Torso separation delay</p>
</div>
</div>
<div className="max-w-xl mx-auto mt-12 text-center text-slate-300 font-light">
<p>
                    Your Sequencing Score tells you: Did your hips lead? Or did your torso fire early?
                </p>
</div>
</div>
</section>

<section className="py-24 bg-[#0F1210]">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">
                Real Swings. Real Timing.
            </h2>
<p className="text-slate-400 mb-12 font-light">
                In early testing, golfers who corrected sequencing improved consistency within 2–3 range sessions.
            </p>

<div className="grid grid-cols-1 md:grid-cols-2 gap-1 bg-[#050505] p-1 border border-white/5 rounded">

<div className="aspect-video bg-[#1a1d21] relative flex items-center justify-center">
<span className="text-xs text-white/30 tracking-widest">[ BEFORE VIDEO ]</span>
<div className="absolute bottom-4 left-4 text-left">
<div className="text-red-400 text-xs font-medium uppercase tracking-wider mb-1">Before</div>
<div className="text-white text-sm">Torso leads by 38ms</div>
</div>
</div>

<div className="aspect-video bg-[#1a1d21] relative flex items-center justify-center">
<span className="text-xs text-white/30 tracking-widest">[ AFTER VIDEO ]</span>
<div className="absolute bottom-4 left-4 text-left">
<div className="text-[#Cfb568] text-xs font-medium uppercase tracking-wider mb-1">After</div>
<div className="text-white text-sm">Hips lead by 22ms</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505]">
<div className="max-w-5xl mx-auto px-6">
<h2 className="text-3xl font-medium text-white tracking-tight mb-8 text-center">
                See It In Action.
            </h2>

<div className="w-full aspect-video bg-[#0A0C0E] border border-white/10 rounded flex items-center justify-center group cursor-pointer relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1591491640784-3232eb992d47?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity duration-500"></div>
<div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300 z-10">
<iconify-icon className="text-white text-3xl ml-1" icon="solar:play-bold"></iconify-icon>
</div>
</div>
<div className="flex flex-col items-center mt-6">
<p className="text-slate-400 text-sm font-light">
                    No launch monitor. No ball tracking. Just measurable movement data.
                </p>
</div>

<div className="grid grid-cols-2 gap-4 max-w-lg mx-auto mt-12 opacity-60 hover:opacity-100 transition-opacity">
<div className="aspect-video bg-[#0A0C0E] border border-white/5 rounded flex items-center justify-center">
<span className="text-[10px] text-white/20 tracking-wider uppercase">Testimonial 1</span>
</div>
<div className="aspect-video bg-[#0A0C0E] border border-white/5 rounded flex items-center justify-center">
<span className="text-[10px] text-white/20 tracking-wider uppercase">Testimonial 2</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-[#0F2E1F] to-[#050505] relative overflow-hidden" id="offer">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
<div className="max-w-lg mx-auto px-6 relative z-10">
<div className="bg-[#050505] border border-[#Cfb568]/30 rounded-lg p-8 md:p-12 shadow-2xl shadow-[#0F2E1F]/50">
<div className="text-center mb-8">
<span className="text-[#Cfb568] text-xs font-semibold tracking-widest uppercase border border-[#Cfb568]/20 px-3 py-1 rounded-full bg-[#Cfb568]/5">
                        Founding Access
                    </span>
<h2 className="text-3xl font-medium text-white tracking-tight mt-6 mb-2">
                        Become a Founding Member
                    </h2>
<p className="text-slate-400 text-sm font-light">
                        Secure the first production units.
                    </p>
</div>
<div className="space-y-8 mb-8">

<div className="flex justify-between items-start border-b border-white/5 pb-6">
<div>
<h3 className="text-white font-medium">Founding Hardware Kit</h3>
<div className="text-xs text-slate-500 mt-1">Ships Q3 2026</div>
</div>
<div className="text-right">
<div className="text-xl text-white font-medium">$449</div>
<div className="text-xs text-slate-500 line-through">Public $599</div>
</div>
</div>
<ul className="space-y-2 text-sm text-slate-300 font-light">
<li className="flex items-center gap-3">
<iconify-icon className="text-[#Cfb568]" icon="solar:check-circle-linear"></iconify-icon>
                            3 wearable motion sensors
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#Cfb568]" icon="solar:check-circle-linear"></iconify-icon>
                            Mounting system
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#Cfb568]" icon="solar:check-circle-linear"></iconify-icon>
                            Charging dock &amp; Setup guide
                        </li>
</ul>

<div className="flex justify-between items-start pt-2">
<div>
<h3 className="text-white font-medium">Performance Membership</h3>
<div className="text-xs text-slate-500 mt-1">Locked rate for life</div>
</div>
<div className="text-right">
<div className="text-xl text-white font-medium">$19<span className="text-sm text-slate-500 font-normal">/mo</span></div>
<div className="text-xs text-slate-500 line-through">Public $29/mo</div>
</div>
</div>
<ul className="space-y-2 text-sm text-slate-300 font-light">
<li className="flex items-center gap-3">
<iconify-icon className="text-slate-500" icon="solar:check-circle-linear"></iconify-icon>
                            Sequencing Score &amp; Consistency Tracking
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-slate-500" icon="solar:check-circle-linear"></iconify-icon>
                            Session history
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-slate-500" icon="solar:check-circle-linear"></iconify-icon>
                            Real-time feedback mode
                        </li>
</ul>
</div>
<button className="w-full bg-[#Cfb568] hover:bg-[#bda355] text-[#050505] py-4 text-sm font-semibold rounded transition-colors mb-4">
                    Secure My Founding Access
                </button>
<p className="text-xs text-slate-500 text-center">
                    Fully refundable before shipment. No commitment.
                </p>
</div>
</div>
</section>

<section className="py-24 bg-[#050505]">
<div className="max-w-3xl mx-auto px-6 text-center">
<iconify-icon className="text-emerald-500/50 text-4xl mb-4" icon="solar:shield-check-linear"></iconify-icon>
<h2 className="text-2xl font-medium text-white tracking-tight mb-4">
                Currently in Advanced Testing.
            </h2>
<p className="text-slate-400 font-light mb-8 max-w-xl mx-auto">
                SwingSense is in final hardware refinement and on-course validation.
            </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-lg mx-auto text-sm text-slate-300 border-t border-white/5 pt-8">
<div className="flex gap-3">
<span className="text-emerald-500">•</span> First production hardware
                </div>
<div className="flex gap-3">
<span className="text-emerald-500">•</span> Direct feature feedback access
                </div>
<div className="flex gap-3">
<span className="text-emerald-500">•</span> Lifetime discounted membership
                </div>
<div className="flex gap-3">
<span className="text-emerald-500">•</span> Priority updates
                </div>
</div>
</div>
</section>

<section className="py-24 bg-[#0A0C0E] border-t border-white/5">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-2xl font-medium text-white tracking-tight mb-12">Common Questions</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div>
<h3 className="text-white font-medium mb-2">Is this a launch monitor?</h3>
<p className="text-slate-400 text-sm font-light leading-relaxed">No. It measures your movement — not the ball. It focuses entirely on body biomechanics.</p>
</div>
<div>
<h3 className="text-white font-medium mb-2">Is this for beginners?</h3>
<p className="text-slate-400 text-sm font-light leading-relaxed">Best for golfers 10–20 handicap chasing consistency who understand the basics but struggle with execution.</p>
</div>
<div>
<h3 className="text-white font-medium mb-2">Is setup complicated?</h3>
<p className="text-slate-400 text-sm font-light leading-relaxed">Setup takes under 5 minutes. Sensors clip onto your belt and collar instantly.</p>
</div>
<div>
<h3 className="text-white font-medium mb-2">What if I change my mind?</h3>
<p className="text-slate-400 text-sm font-light leading-relaxed">Founding purchases are fully refundable for any reason before shipment.</p>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/5 bg-[#050505]">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-sm font-medium tracking-widest text-white uppercase opacity-50">
                SwingSense
            </div>
<div className="text-xs text-slate-600">
                © 2024 SwingSense Performance. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
