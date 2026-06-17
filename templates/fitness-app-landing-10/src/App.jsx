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
      

<nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
<a className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity" href="#">
<div className="flex h-6 w-6 items-center justify-center rounded bg-lime-400 text-black">
<iconify-icon icon="lucide:activity" strokeWidth="2.5" width="16"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tight">PULSE</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#features">
            Features
          </a>
<a className="hover:text-white transition-colors" href="#schedule">
            Schedule
          </a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#">
            Log in
          </a>
<a className="rounded-full bg-white px-4 py-2 text-xs font-medium text-black transition hover:bg-neutral-200" href="#">
            Get App
          </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-lime-500/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="relative mx-auto max-w-7xl px-6 text-center">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
</span>
<span className="text-xs font-medium text-neutral-300">
            New: iOS 17 &amp; Android Widgets Available
          </span>
</div>
<h1 className="mx-auto max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl lg:text-8xl bg-gradient-to-b from-white via-white to-neutral-500 bg-clip-text text-transparent">
          Forge your body.
          <br className="hidden md:block"/>
          Master your mind.
        </h1>
<p className="mx-auto mt-8 max-w-2xl text-lg text-neutral-500 md:text-xl leading-relaxed">
          Scientific training programs designed for peak performance. Track
          metrics, analyze recovery, and optimize your physiology with Pulse.
        </p>
<div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
<button className="group flex h-12 items-center justify-center gap-2 rounded-full bg-lime-400 px-8 text-sm font-medium text-black transition hover:bg-lime-300 focus:ring-2 focus:ring-lime-400 focus:ring-offset-2 focus:ring-offset-black">
            Start for free
            <iconify-icon className="transition-transform group-hover:translate-x-1" icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
<button className="flex h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-neutral-900 px-8 text-sm font-medium text-white transition hover:bg-neutral-800">
<iconify-icon icon="lucide:play-circle" width="16"></iconify-icon>
            Watch workflow
          </button>
</div>
</div>
</section>

<section className="relative border-y border-white/5 bg-neutral-900/20 py-24">
<div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="order-2 lg:order-1">
<h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Pocket-sized
            <span className="text-lime-400">precision.</span>
</h2>
<p className="mt-4 text-neutral-400 leading-relaxed">
            Carry your coach in your pocket. Our mobile interface is designed
            for use in the gym, with high-contrast modes and haptic feedback
            timers.
          </p>
<div className="mt-8 space-y-6">

<div className="flex items-start gap-4">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-black text-lime-400">
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-white">
                  Live Heart Rate Zones
                </h3>
<p className="mt-1 text-sm text-neutral-500">
                  Connects with Apple Watch, Garmin &amp; Android.
                </p>
</div>
</div>

<div className="flex items-start gap-4">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-black text-lime-400">
<iconify-icon icon="lucide:bar-chart-2" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-white">
                  Progressive Overload
                </h3>
<p className="mt-1 text-sm text-neutral-500">
                  Auto-calculated weights based on past sets.
                </p>
</div>
</div>
</div>

<div className="mt-10 rounded-xl border border-white/10 bg-black p-6">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium uppercase tracking-wider text-neutral-500">
                Intensity Goal
              </span>
<span className="text-xs font-semibold text-lime-400">85%</span>
</div>
<input className="w-full appearance-none bg-transparent" max="100" min="0" type="range" value="85"/>
<div className="mt-2 flex justify-between text-[10px] text-neutral-600 font-mono">
<span>RECOVERY</span>
<span>MAINTENANCE</span>
<span>PEAK</span>
</div>
</div>
</div>

<div className="order-1 lg:order-2 flex justify-center lg:justify-end">
<div className="relative h-[600px] w-[320px] rounded-[3rem] border-8 border-neutral-800 bg-black shadow-2xl overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 rounded-b-xl bg-neutral-800 z-20"></div>

<div className="h-full w-full bg-black p-6 flex flex-col pt-12">

<div className="flex justify-between items-center mb-8">
<div>
<p className="text-xs text-neutral-500">MONDAY, OCT 24</p>
<h3 className="text-xl font-semibold text-white tracking-tight">
                    Push Day
                  </h3>
</div>
<div className="h-8 w-8 rounded-full bg-lime-400/10 flex items-center justify-center text-lime-400">
<iconify-icon icon="lucide:user" width="16"></iconify-icon>
</div>
</div>

<div className="grid grid-cols-2 gap-3 mb-6">
<div className="bg-neutral-900 rounded-2xl p-4 border border-white/5">
<iconify-icon className="text-orange-500 mb-2" icon="lucide:flame" width="20"></iconify-icon>
<div className="text-2xl font-medium text-white tracking-tight">
                    420
                  </div>
<div className="text-[10px] text-neutral-500 uppercase">
                    Kcal Burned
                  </div>
</div>
<div className="bg-neutral-900 rounded-2xl p-4 border border-white/5">
<iconify-icon className="text-blue-500 mb-2" icon="lucide:timer" width="20"></iconify-icon>
<div className="text-2xl font-medium text-white tracking-tight">
                    45:10
                  </div>
<div className="text-[10px] text-neutral-500 uppercase">
                    Duration
                  </div>
</div>
</div>

<div className="space-y-3 flex-1 overflow-hidden">
<p className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-2">
                  Up Next
                </p>

<div className="flex items-center gap-3 p-3 rounded-xl bg-neutral-900/50 border border-white/5">
<div className="h-10 w-10 rounded bg-white/5 flex items-center justify-center">
<iconify-icon className="text-white" icon="lucide:dumbbell" width="18"></iconify-icon>
</div>
<div className="flex-1">
<div className="text-sm font-medium text-white">
                      Bench Press
                    </div>
<div className="text-xs text-neutral-500">
                      4 sets x 8-12 reps
                    </div>
</div>
<div className="h-5 w-5 rounded-full border border-neutral-600"></div>
</div>

<div className="flex items-center gap-3 p-3 rounded-xl bg-neutral-900/50 border border-white/5">
<div className="h-10 w-10 rounded bg-white/5 flex items-center justify-center">
<iconify-icon className="text-white" icon="lucide:arrow-up" width="18"></iconify-icon>
</div>
<div className="flex-1">
<div className="text-sm font-medium text-white">Incline DB</div>
<div className="text-xs text-neutral-500">3 sets x 10 reps</div>
</div>
<div className="h-5 w-5 rounded-full border border-neutral-600"></div>
</div>
</div>

<div className="mt-auto flex justify-between pt-6 border-t border-white/5 text-neutral-500">
<iconify-icon className="text-lime-400" icon="lucide:home" width="20"></iconify-icon>
<iconify-icon icon="lucide:calendar" width="20"></iconify-icon>
<iconify-icon icon="lucide:message-square" width="20"></iconify-icon>
<iconify-icon icon="lucide:settings" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 mx-auto max-w-7xl" id="features">
<div className="mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Engineered for results.
        </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/30 p-8 transition hover:border-white/20 hover:bg-neutral-900/50">
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white">
<iconify-icon icon="lucide:layers" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="mb-2 text-lg font-medium text-white">
            Structured Programs
          </h3>
<p className="text-sm leading-relaxed text-neutral-400">
            Programs ranging from hypertrophy to marathon prep, curated by elite
            coaches.
          </p>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/30 p-8 transition hover:border-white/20 hover:bg-neutral-900/50">
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white">
<iconify-icon icon="lucide:pie-chart" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="mb-2 text-lg font-medium text-white">Analytics</h3>
<p className="text-sm leading-relaxed text-neutral-400">
            Visualize your volume load, 1RM estimates, and recovery trends over
            time.
          </p>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/30 p-8 transition hover:border-white/20 hover:bg-neutral-900/50">
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white">
<iconify-icon icon="lucide:users" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="mb-2 text-lg font-medium text-white">Community</h3>
<p className="text-sm leading-relaxed text-neutral-400">
            Join leaderboards, share PRs, and find workout partners in your
            local area.
          </p>
</div>
</div>
</section>

<section className="relative border-t border-white/10 bg-neutral-900/20 py-24" id="membership">
<div className="mx-auto max-w-7xl px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Free for everyone.
            </h2>
<p className="mt-2 text-neutral-400">
              Democratizing elite fitness technology. No subscriptions, ever.
            </p>
</div>

</div>
<div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-neutral-900/30 p-12 text-center relative overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-xs h-40 bg-lime-500/10 blur-[100px] rounded-full pointer-events-none"></div>
<h3 className="text-2xl font-semibold text-white">
            All features included
          </h3>
<div className="mt-6 flex items-baseline justify-center gap-1 text-white">
<span className="text-6xl font-bold tracking-tight">Free</span>
<span className="text-xl text-neutral-500 font-medium">/ forever</span>
</div>
<p className="mx-auto mt-6 max-w-lg text-neutral-400 text-lg">
            We believe fitness should be accessible to everyone. Pulse is
            supported by optional community donations and merchandise.
          </p>
<ul className="mt-10 mb-10 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-neutral-300">
<li className="flex items-center gap-2">
<iconify-icon className="text-lime-400" icon="lucide:check" width="18"></iconify-icon>
              Unlimited Workouts
            </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-lime-400" icon="lucide:check" width="18"></iconify-icon>
              AI Coaching
            </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-lime-400" icon="lucide:check" width="18"></iconify-icon>
              Advanced Analytics
            </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-lime-400" icon="lucide:check" width="18"></iconify-icon>
              No Ads
            </li>
</ul>
<button className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-lime-400 px-10 text-sm font-medium text-black transition hover:bg-lime-300 shadow-[0_0_20px_rgba(190,242,100,0.3)]">
            Download Now
          </button>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-black pt-16 pb-12">
<div className="mx-auto max-w-7xl px-6">
<div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 text-white">
<div className="flex h-5 w-5 items-center justify-center rounded bg-lime-400 text-black">
<iconify-icon icon="lucide:activity" width="12"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tight">PULSE</span>
</div>
<p className="mt-4 max-w-xs text-sm text-neutral-500">
              Designing the future of human performance. Based in San Francisco.
            </p>
</div>
<div>
<h4 className="text-sm font-medium text-white">Product</h4>
<ul className="mt-4 space-y-2 text-sm text-neutral-500">
<li>
<a className="hover:text-white transition" href="#">Workouts</a>
</li>
<li>
<a className="hover:text-white transition" href="#">Nutrition</a>
</li>
<li>
<a className="hover:text-white transition" href="#">Download</a>
</li>
<li>
<a className="hover:text-white transition" href="#">Changelog</a>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white">Company</h4>
<ul className="mt-4 space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-white transition" href="#">About</a></li>
<li><a className="hover:text-white transition" href="#">Blog</a></li>
<li>
<a className="hover:text-white transition" href="#">Careers</a>
</li>
<li>
<a className="hover:text-white transition" href="#">Contact</a>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white">Legal</h4>
<ul className="mt-4 space-y-2 text-sm text-neutral-500">
<li>
<a className="hover:text-white transition" href="#">Privacy</a>
</li>
<li><a className="hover:text-white transition" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
<p className="text-xs text-neutral-600">
            © 2023 Pulse Fitness Inc. All rights reserved.
          </p>
<div className="flex gap-4 text-neutral-600">
<a className="hover:text-white transition" href="#">
<iconify-icon icon="lucide:twitter" width="16"></iconify-icon>
</a>
<a className="hover:text-white transition" href="#">
<iconify-icon icon="lucide:instagram" width="16"></iconify-icon>
</a>
<a className="hover:text-white transition" href="#">
<iconify-icon icon="lucide:github" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
