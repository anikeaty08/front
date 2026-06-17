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
      

<nav className="glass-nav fixed top-0 w-full z-50 transition-all duration-300">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="h-6 w-6 bg-neutral-100 rounded flex items-center justify-center text-black">
<iconify-icon height="16" icon="lucide:shield-check" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span className="text-neutral-200 font-medium tracking-tighter text-sm group-hover:text-white transition-colors">SENTINEL<span className="text-neutral-600">.GTM</span></span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="text-neutral-400 hover:text-white transition-colors" href="#">Advisory</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#">Intelligence</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#">Strategies</a>
</div>
<a className="hidden md:flex items-center gap-2 text-xs font-medium bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded-full text-neutral-200 transition-all" href="#">
<span>Book Consultation</span>
<iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="12"></iconify-icon>
</a>

<button className="md:hidden text-neutral-400">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<main className="flex-grow pt-32 pb-24 px-6 relative overflow-hidden">

<div className="absolute top-0 right-0 -z-10 opacity-20 transform translate-x-1/3 -translate-y-1/4 pointer-events-none">
<svg fill="none" height="600" viewbox="0 0 600 600" width="600" xmlns="http://www.w3.org/2000/svg">
<circle cx="300" cy="300" fill="url(#paint0_radial_1_2)" r="300"></circle>
<defs>
<radialgradient cx="0" cy="0" gradienttransform="translate(300 300) rotate(90) scale(300)" gradientunits="userSpaceOnUse" id="paint0_radial_1_2" r="1">
<stop stop-color="#4F46E5"></stop>
<stop offset="1" stop-color="#0a0a0a" stop-opacity="0"></stop>
</radialgradient>
</defs>
</svg>
</div>
<div className="max-w-5xl mx-auto">

<header className="mb-16 md:mb-24 max-w-3xl">
<div className="flex items-center gap-3 mb-6">
<span className="text-xs font-medium text-indigo-400 uppercase tracking-widest border border-indigo-500/20 bg-indigo-500/5 px-2 py-1 rounded">Strategy</span>
<span className="text-xs text-neutral-500">5 min read</span>
</div>
<h1 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
                    Know Your Turf.
                </h1>
<p className="text-xl md:text-2xl text-neutral-400 font-light leading-snug tracking-tight">
                    Why Kevin McCallister Outsmarts State-Sponsored Hackers.
                </p>
<div className="mt-8 flex items-center gap-4 border-t border-neutral-800 pt-6">
<div className="h-10 w-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 border border-neutral-700">
<iconify-icon icon="lucide:user" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-neutral-200">Director of Intelligence</div>
<div className="text-xs text-neutral-500">October 24, 2023</div>
</div>
</div>
</header>

<div className="grid grid-cols-1 md:grid-cols-12 gap-12">

<article className="md:col-span-8 space-y-12">

<div className="prose-lg">
<p className="leading-relaxed text-neutral-300 font-light text-lg">
                            There’s a tired trope in cybersecurity upper management meetings: <span className="text-white font-normal">"Attackers move fast and only need to be right once."</span>
</p>
<p className="mt-6 leading-relaxed text-neutral-300 font-light text-lg">
                            Well, in the oddest yet most obvious way of relation, meet <strong className="text-white font-medium">Kevin McCallister</strong>. The ultimate underdog who defended his home against actual felons armed with crowbars, ladders, and some seriously bad luck. No fancy malware, zero-day exploits, or multi-million-dollar botnets, just Kevin’s deep knowledge of every carpet, creaky floorboard, and hidden trap in his turf.
                        </p>
</div>

<div className="border-l-2 border-indigo-500/50 bg-neutral-900/30 p-6 md:p-8 rounded-r-lg my-8">
<iconify-icon className="text-indigo-400 mb-4 opacity-50" icon="lucide:quote" strokeWidth="1.5" width="24"></iconify-icon>
<p className="text-xl font-light text-neutral-200 italic tracking-tight">
                            "You don’t outgun attackers by moving faster, you out-think them by knowing every nook and cranny."
                        </p>
</div>

<div className="space-y-6">
<h2 className="text-2xl font-medium tracking-tight text-white flex items-center gap-3">
<iconify-icon className="text-neutral-600" icon="lucide:map" strokeWidth="1.5" width="20"></iconify-icon>
                            Kevin’s Secret Weapon? Turf Knowledge.
                        </h2>
<p className="leading-relaxed text-neutral-400 text-lg font-light">
                            He knew his home like the back of his hand, when to duck, where to trip invaders, how to buy time. This genius house defense wasn’t flashy, but it worked. 
                        </p>
<p className="leading-relaxed text-neutral-400 text-lg font-light">
                            Now pause. Your network isn’t that cluttered upstairs attic or basement; it’s your turf. You need topographic mastery combined with clever, layered defenses that silently watch and quietly react.
                        </p>
</div>

<hr className="border-neutral-800"/>

<div className="space-y-6">
<h2 className="text-2xl font-medium tracking-tight text-white flex items-center gap-3">
<iconify-icon className="text-neutral-600" icon="lucide:shield-alert" strokeWidth="1.5" width="20"></iconify-icon>
                            Underfunded Defenders, Take Note
                        </h2>
<p className="leading-relaxed text-neutral-400 text-lg font-light">
                            You don’t need a battalion sized budget or tech wizardry. Just as Kevin layered paint cans, slippery steps, and harrowing glass to slow the Wet Bandits, your tiered network segmentation, honeypots, active logging, and micro-containment can do the same to <span className="text-white">Advanced Persistent Threats</span>.
                        </p>
</div>

<div className="bg-gradient-to-br from-neutral-900 to-black border border-neutral-800 rounded-xl p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon height="64" icon="lucide:lightbulb" width="64"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">So, next time someone drops the “one-shot rule”</h3>
<p className="text-neutral-400 font-light leading-relaxed">
                            Scratch your head and think of Kevin’s booby traps. Forget being the first to hit; adapt to make the hit irrelevant.
                        </p>
<div className="mt-6">
<a className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors" href="#">
                                Explore Defensive Architectures 
                                <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</a>
</div>
</div>
</article>

<aside className="md:col-span-4 space-y-8">
<div className="sticky top-24">

<div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 backdrop-blur-sm">
<h4 className="text-sm font-medium text-white uppercase tracking-wider mb-4">Advisory Services</h4>
<p className="text-sm text-neutral-400 mb-6 leading-relaxed">
                                Don't let your network be a cluttered attic. We help organizations build layered, resilient defenses.
                            </p>
<button className="w-full bg-white text-black hover:bg-neutral-200 transition-colors font-medium text-sm py-2.5 px-4 rounded-lg flex items-center justify-center gap-2">
<iconify-icon icon="lucide:calendar" strokeWidth="1.5" width="16"></iconify-icon>
                                Schedule Audit
                            </button>
</div>

<div className="mt-8">
<h4 className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-4">Topics</h4>
<div className="flex flex-wrap gap-2">
<span className="text-xs text-neutral-400 border border-neutral-800 px-2 py-1 rounded hover:border-neutral-600 cursor-pointer transition-colors">Network Security</span>
<span className="text-xs text-neutral-400 border border-neutral-800 px-2 py-1 rounded hover:border-neutral-600 cursor-pointer transition-colors">Defense in Depth</span>
<span className="text-xs text-neutral-400 border border-neutral-800 px-2 py-1 rounded hover:border-neutral-600 cursor-pointer transition-colors">Strategy</span>
</div>
</div>

<div className="mt-8 pt-8 border-t border-neutral-800">
<h4 className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-4">Briefing</h4>
<div className="flex flex-col gap-3">
<input className="bg-black border border-neutral-800 rounded px-3 py-2 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-indigo-500/50 transition-colors w-full" placeholder="Email address" type="email"/>
<button className="text-xs font-medium text-neutral-400 hover:text-white flex items-center gap-1 transition-colors self-start">
                                    Subscribe <iconify-icon icon="lucide:chevron-right" width="12"></iconify-icon>
</button>
</div>
</div>
</div>
</aside>
</div>
</div>
</main>

<footer className="border-t border-neutral-900 bg-black py-12 px-6">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 opacity-50">
<iconify-icon className="text-neutral-400" height="16" icon="lucide:shield" width="16"></iconify-icon>
<span className="text-xs font-medium text-neutral-400 tracking-tight">SENTINEL.GTM</span>
</div>
<div className="flex gap-6 text-xs text-neutral-500">
<a className="hover:text-neutral-300 transition-colors" href="#">Privacy</a>
<a className="hover:text-neutral-300 transition-colors" href="#">Terms</a>
<a className="hover:text-neutral-300 transition-colors" href="#">Twitter</a>
<a className="hover:text-neutral-300 transition-colors" href="#">LinkedIn</a>
</div>
<div className="text-xs text-neutral-600">
                © 2023 Sentinel Advisory.
            </div>
</div>
</footer>

    </>
  );
}
