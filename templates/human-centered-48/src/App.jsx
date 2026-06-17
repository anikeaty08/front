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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
zinc: {
850: '#1f2023',
925: '#101012', // Custom deep background
}
},
backgroundImage: {
'glow': 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.08) 0%, transparent 40%)',
'card-grad': 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)',
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
}
}
}

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
      

<div className="fixed top-0 left-0 w-full h-screen pointer-events-none z-0">
<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[60vh] bg-white/[0.03] blur-[120px] rounded-full"></div>
</div>

<nav className="relative z-50 w-full max-w-6xl mx-auto px-6 py-8 flex justify-between items-center">
<div className="flex items-center gap-2">
<span className="text-white font-semibold tracking-tighter text-lg uppercase">Skywalker</span>
</div>
<div>
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors duration-300" href="#intro-call">
                Member Area
            </a>
</div>
</nav>

<main className="relative z-10 w-full max-w-4xl mx-auto px-6 mt-16 md:mt-32 text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-zinc-300 tracking-tight">Accepting new projects for Q4</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white leading-[1.1] mb-6">
            Designing software that works with the <span className="text-gradient">human OS.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed mb-10">
            Skywalker Studios delivers branding and product design at the intersection of interface, psychology, and behavior.
        </p>

<div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
<a className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-lg bg-white px-8 font-medium text-black transition-all hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-zinc-900" href="#submit">
<span className="mr-2">Submit your project</span>
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="group inline-flex h-12 items-center justify-center rounded-lg border border-white/10 bg-transparent px-8 font-medium text-white transition-all hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-zinc-700" href="#intro-call">
                Book a paid intro call
            </a>
</div>
<p className="text-xs text-zinc-500 font-medium">
            Projects are reviewed weekly. Availability is intentionally limited.
        </p>

<div className="mt-20 pt-10 border-t border-white/5">
<p className="text-xs text-zinc-500 uppercase tracking-widest mb-6">Trusted by teams at</p>
<div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 text-zinc-400 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-lg font-semibold tracking-tight">MrBeast</span>
<span className="text-lg font-bold tracking-tight">LinkedIn</span>
<span className="text-lg font-medium tracking-tight font-serif italic">Palo</span>
<span className="text-lg font-bold tracking-tight">Ando</span>
<span className="text-lg font-medium tracking-tighter">Cluely</span>
</div>
</div>
</main>

<section className="relative z-10 w-full max-w-6xl mx-auto px-6 mt-32 md:mt-48 mb-32">
<div className="grid md:grid-cols-2 gap-12 items-start">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white leading-tight">
                    Most software fails because it ignores human behavior.
                </h2>
</div>
<div className="space-y-6">
<p className="text-lg text-zinc-400 font-light leading-relaxed">
                    Attention is emotional, habits outperform features, and interfaces teach users how to behave.
                </p>
<p className="text-lg text-zinc-400 font-light leading-relaxed">
                    Skywalker Studios designs products and systems that feel intuitive because they’re built for real human behavior — not trends, templates, or guesswork.
                </p>
</div>
</div>
</section>

<section className="relative z-10 w-full max-w-6xl mx-auto px-6 mb-32">
<div className="flex items-baseline justify-between mb-12 border-b border-white/5 pb-4">
<h2 className="text-2xl font-medium text-white tracking-tight">Services</h2>
<span className="text-xs text-zinc-500">Availability is intentionally limited</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-xl bg-card-grad border border-white/5 hover:border-white/10 transition-colors duration-300">
<div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:presentation-graph-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3">Decks &amp; narratives</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                    Narrative-driven decks for founders, teams, and operators — from investor storytelling to product vision and strategy. Clear structure, sharp visuals, zero fluff.
                </p>
</div>

<div className="group p-8 rounded-xl bg-card-grad border border-white/5 hover:border-white/10 transition-colors duration-300">
<div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:devices-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3">UX design — apps &amp; web</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                    End-to-end product design grounded in human behavior. From 0→1 concepts to scalable systems across platforms, including AI-native UX and agent flows.
                </p>
</div>

<div className="relative group p-8 rounded-xl bg-card-grad border border-white/5 hover:border-white/10 transition-colors duration-300 opacity-75">
<div className="absolute top-6 right-6 inline-flex items-center gap-1.5 px-2 py-1 rounded border border-orange-500/20 bg-orange-500/10">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
<span className="text-[10px] uppercase font-semibold text-orange-400 tracking-wide">Fully booked</span>
</div>
<div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:code-square-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3">Framer development</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                    Design-led Framer builds with production-ready polish. Pixel-perfect implementation of the design vision.
                </p>
</div>
</div>
</section>

<section className="relative z-10 w-full max-w-6xl mx-auto px-6 mb-32">
<h2 className="text-2xl font-medium text-white tracking-tight mb-12">How it works</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-6 left-[16%] right-[16%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0"></div>

<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-sm font-medium text-white mb-6">
                    01
                </div>
<h3 className="text-lg font-medium text-white mb-2">Submit your project</h3>
<p className="text-sm text-zinc-400">Share a short overview of what you’re building and what you need.</p>
</div>

<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-sm font-medium text-white mb-6">
                    02
                </div>
<h3 className="text-lg font-medium text-white mb-2">Paid intro call</h3>
<p className="text-sm text-zinc-400">A 30-minute working session to assess fit, scope, and direction.</p>
</div>

<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-sm font-medium text-white mb-6">
                    03
                </div>
<h3 className="text-lg font-medium text-white mb-2">Project proposal</h3>
<p className="text-sm text-zinc-400">Clear scope, timeline, and fixed pricing before work begins.</p>
</div>
</div>
</section>

<section className="relative z-10 w-full max-w-3xl mx-auto px-6 mb-32" id="intro-call">
<div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-start gap-10">
<div className="flex-1">
<h3 className="text-xl font-medium text-white tracking-tight mb-4">Intro call &amp; deposit</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-6">
                    To protect focus and keep engagements intentional, all new conversations begin with a $200 paid intro call.
                </p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-white mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                        Refunded if there’s no fit
                    </li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-white mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                        Applied toward your project if we proceed
                    </li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-white mt-0.5 shrink-0" icon="solar:filter-linear"></iconify-icon>
                        Filters for teams ready to move
                    </li>
</ul>
</div>
<div className="w-full md:w-auto flex flex-col gap-4 items-stretch shrink-0">
<button className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-6 text-sm font-medium text-black transition-all hover:bg-zinc-200">
                    Book Intro Call ($200)
                </button>
<div className="flex items-center justify-center gap-2 text-[10px] text-zinc-500">
<iconify-icon icon="solar:lock-password-linear"></iconify-icon>
<span>Secure payment via Stripe</span>
</div>
</div>
</div>
</section>

<footer className="relative z-10 w-full max-w-4xl mx-auto px-6 py-24 text-center border-t border-white/5" id="submit">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-8">
            Let’s see if we should work together.
        </h2>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
<button className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-lg bg-white px-8 font-medium text-black transition-all hover:bg-zinc-200">
                Submit your project
            </button>
<button className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-lg border border-white/10 bg-transparent px-8 font-medium text-zinc-300 transition-all hover:bg-white/5 hover:text-white">
                Book a paid intro call
            </button>
</div>
<div className="flex flex-col items-center gap-4">
<span className="text-white font-semibold tracking-tighter text-lg uppercase opacity-30">Skywalker</span>
<p className="text-xs text-zinc-600">
                Skywalker Studios works with a small number of teams at a time.
            </p>
<p className="text-[10px] text-zinc-800 mt-8">
                © 2024 Skywalker Studios. All rights reserved.
            </p>
</div>
</footer>

    </>
  );
}
