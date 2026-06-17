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
      

<nav className="fixed w-full z-50 top-0 left-0 border-b border-slate-200/80 bg-slate-50/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tighter text-slate-900" href="#">
                SWINGSENSE
            </a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#pricing">
                Pricing
            </a>
</div>
</nav>

<header className="pt-32 pb-20 px-6">
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-slate-600 tracking-wide uppercase">For 10–20 Handicap Golfers</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-slate-900 mb-8 leading-[1.1]">
                Stop Guessing Your Swing.<br className="hidden md:block"/>
<span className="text-slate-400">Start Fixing What’s Actually Costing You Strokes.</span>
</h1>
<p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                SwingSense is a 3-sensor motion tracker that shows where your swing breaks down (hips, torso, lead arm) so 10–20 handicap golfers can build consistency, hit more greens, and shoot lower without endless “tips.”
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
<a className="w-full sm:w-auto px-8 py-3 bg-slate-900 text-white rounded-lg font-medium text-sm hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10 flex items-center justify-center gap-2" href="#callback">
                    Get a Call Back <span className="opacity-60 font-normal">(Free Swing Setup)</span>
</a>
<a className="w-full sm:w-auto px-8 py-3 bg-white border border-slate-200 text-slate-600 rounded-lg font-medium text-sm hover:border-slate-300 hover:text-slate-900 transition-all" href="#pricing">
                    See Pricing
                </a>
</div>
<div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 border-t border-slate-200/60 pt-8 max-w-3xl mx-auto">
<div className="flex items-center gap-2 text-left">
<div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:graph-new-linear" width="16"></iconify-icon>
</div>
<span className="text-xs md:text-sm text-slate-500 font-medium">Know your real swing sequence</span>
</div>
<div className="flex items-center gap-2 text-left">
<div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:target-linear" width="16"></iconify-icon>
</div>
<span className="text-xs md:text-sm text-slate-500 font-medium">Train consistency with metrics</span>
</div>
<div className="flex items-center gap-2 text-left">
<div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:banknote-2-linear" width="16"></iconify-icon>
</div>
<span className="text-xs md:text-sm text-slate-500 font-medium">Stop wasting buckets on bad habits</span>
</div>
</div>
<p className="mt-6 text-xs text-slate-400 font-medium tracking-wide uppercase">
                Built for real golfers chasing consistent ball-striking, not perfection.
            </p>
</div>
</header>

<section className="bg-white border-y border-slate-200 py-24 px-6">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-12 text-center">
                If You’re a 10–20 Handicap, You Don’t Need More Tips — <span className="text-emerald-600">You Need Clarity.</span>
</h2>
<div className="grid md:grid-cols-2 gap-6 mb-12">
<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
<iconify-icon className="text-orange-500 mb-4" icon="solar:danger-circle-linear" width="28"></iconify-icon>
<h3 className="text-base font-medium text-slate-900 mb-2">Inconsistent Contact</h3>
<p className="text-sm text-slate-600 leading-relaxed">One good shot… then 3 that don’t match it. You feel like you’re rotating, but video is confusing.</p>
</div>
<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
<iconify-icon className="text-orange-500 mb-4" icon="solar:playback-speed-linear" width="28"></iconify-icon>
<h3 className="text-base font-medium text-slate-900 mb-2">YouTube Overload</h3>
<p className="text-sm text-slate-600 leading-relaxed">You try a YouTube fix and your timing gets worse. Your misses are predictable, but you don't know why.</p>
</div>
</div>
<div className="text-center p-6 bg-slate-900 rounded-xl shadow-lg">
<p className="text-lg font-medium text-white">
                    SwingSense turns “I think” into measurable feedback so you can train one thing at a time.
                </p>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16 max-w-2xl mx-auto">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">What SwingSense Does</h2>
<p className="text-slate-600">You wear three tiny sensors (hip, torso, lead arm). SwingSense measures your rotation and timing so you can see whether your swing is driven by proper sequence or compensations.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 mb-6">
<iconify-icon icon="solar:sort-from-top-to-bottom-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3">Sequence &amp; Timing</h3>
<p className="text-sm text-slate-500 leading-relaxed">See if your hips lead, or if your torso/arms take over early. Fix the sequence, fix the strike.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 mb-6">
<iconify-icon icon="solar:refresh-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3">Rotation Consistency</h3>
<p className="text-sm text-slate-500 leading-relaxed">Learn what “repeatable” actually feels like and build a swing you can trust under pressure.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 mb-6">
<iconify-icon icon="solar:transfer-horizontal-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3">Practice That Transfers</h3>
<p className="text-sm text-slate-500 leading-relaxed">Train with clear metrics and targets instead of random swing thoughts that vanish on the course.</p>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center justify-center px-6 py-2.5 bg-white border border-slate-300 text-slate-900 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors" href="#callback">
                    Get a Call Back
                </a>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-y border-slate-200">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-16 text-center">How It Works</h2>
<div className="relative grid md:grid-cols-3 gap-12">

<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-slate-100 z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 bg-white border border-slate-200 rounded-full flex items-center justify-center mb-6 shadow-sm">
<span className="text-2xl font-medium text-emerald-600">1</span>
</div>
<h3 className="font-medium text-slate-900 mb-2">Strap the sensors</h3>
<p className="text-sm text-slate-500">Hip, torso, and lead arm placement takes seconds.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 bg-white border border-slate-200 rounded-full flex items-center justify-center mb-6 shadow-sm">
<span className="text-2xl font-medium text-emerald-600">2</span>
</div>
<h3 className="font-medium text-slate-900 mb-2">Make a few swings</h3>
<p className="text-sm text-slate-500">Go from slow motion to normal speed.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 bg-white border border-slate-200 rounded-full flex items-center justify-center mb-6 shadow-sm">
<span className="text-2xl font-medium text-emerald-600">3</span>
</div>
<h3 className="font-medium text-slate-900 mb-2">Get feedback</h3>
<p className="text-sm text-slate-500">Instant clarity on timing and rotation leaks.</p>
</div>
</div>
<p className="text-center text-xs text-slate-400 mt-12 font-medium tracking-wide uppercase">
                No complicated setup. Designed for fast, repeatable practice.
            </p>
</div>
</section>

<section className="py-24 px-6 bg-slate-900 text-white">
<div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-medium tracking-tight mb-6">Why This Helps 10–20 Handicaps More Than Anything Else</h2>
<p className="text-slate-400 text-lg mb-8">Less guesswork. More consistency. Lower scores.</p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-400 mt-1 shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-slate-300 text-sm">You don’t need tour-level micro changes — you need repeatable sequencing.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-400 mt-1 shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-slate-300 text-sm">Your biggest drops come from: better contact + fewer big misses.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-400 mt-1 shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-slate-300 text-sm">SwingSense highlights the one leak that drives your misses (and tracks improvement).</span>
</li>
</ul>
</div>
<div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
<h3 className="font-medium text-white mb-6">What You Can Expect</h3>
<div className="space-y-6">
<div>
<div className="text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-1">Awareness</div>
<p className="text-slate-300 text-sm">More awareness of what your body is doing (not just what it feels like).</p>
</div>
<div>
<div className="text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-1">Plan</div>
<p className="text-slate-300 text-sm">A simple practice plan built around timing + rotation.</p>
</div>
<div>
<div className="text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-1">Speed</div>
<p className="text-slate-300 text-sm">Faster progress because you stop chasing random fixes.</p>
</div>
</div>
<div className="mt-8 pt-6 border-t border-slate-700 text-[10px] text-slate-500 leading-tight">
                    Disclaimer: Results vary by golfer, practice time, and instruction. SwingSense provides measurement and training feedback — not magic.
                </div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50" id="pricing">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-12 text-center">Pricing</h2>
<div className="grid md:grid-cols-2 gap-6">

<div className="bg-white rounded-2xl p-8 border border-slate-200 relative flex flex-col h-full">
<div className="mb-6">
<h3 className="font-medium text-slate-900">Starter</h3>
<p className="text-sm text-slate-500 mb-4">Recommended for solo practice</p>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-semibold tracking-tight text-slate-900">$249</span>
<span className="text-sm text-slate-400 font-normal">/ one-time</span>
</div>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon>
                            3-sensor set (hip/torso/arm)
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon>
                            Basic swing metrics + logging
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon>
                            Setup guidance on call
                        </li>
</ul>
<a className="block w-full text-center px-6 py-3 bg-white border border-slate-200 text-slate-900 rounded-lg font-medium text-sm hover:border-slate-900 transition-colors" href="#callback">
                        Get Started — Call Me
                    </a>
</div>

<div className="bg-white rounded-2xl p-8 border border-emerald-500 ring-1 ring-emerald-500 relative flex flex-col h-full shadow-lg shadow-emerald-900/5">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-full tracking-wide">
                        Best Value
                    </div>
<div className="mb-6">
<h3 className="font-medium text-slate-900">Coach+ Bundle</h3>
<p className="text-sm text-slate-500 mb-4">For serious improvement</p>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-semibold tracking-tight text-slate-900">$399</span>
<span className="text-sm text-slate-400 font-normal">/ one-time</span>
</div>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-2 text-sm text-slate-900">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon>
<span className="font-medium">Everything in Starter</span>
</li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon>
                            Advanced insights + progress tracking
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon>
                            Priority setup &amp; calibration session
                        </li>
</ul>
<a className="block w-full text-center px-6 py-3 bg-slate-900 text-white rounded-lg font-medium text-sm hover:bg-slate-800 transition-colors" href="#callback">
                        Talk to Us
                    </a>
</div>
</div>
<p className="text-center text-xs text-slate-500 mt-6">
                Want help deciding? Request a callback and we’ll recommend the best setup.
            </p>
</div>
</section>

<section className="py-24 px-6 bg-white border-t border-slate-200" id="callback">
<div className="max-w-md mx-auto">
<div className="text-center mb-8">
<h2 className="text-2xl font-medium tracking-tight text-slate-900 mb-2">Request a Call Back</h2>
<p className="text-sm text-slate-500">Free setup help + fit check. No obligation.</p>
</div>
<form className="space-y-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Name</label>
<input className="custom-input w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all placeholder:text-slate-400" placeholder="Your name" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Email</label>
<input className="custom-input w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all placeholder:text-slate-400" placeholder="you@example.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Phone</label>
<input className="custom-input w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all placeholder:text-slate-400" placeholder="(555) 555-5555" type="tel"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="relative">
<label className="block text-xs font-medium text-slate-700 mb-1.5">Handicap</label>
<select className="custom-input w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all text-slate-900">
<option>5–9</option>
<option selected="">10–20</option>
<option>21+</option>
</select>
<div className="pointer-events-none absolute top-[34px] right-3 text-slate-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</div>
</div>
<div className="relative">
<label className="block text-xs font-medium text-slate-700 mb-1.5">Biggest Miss</label>
<select className="custom-input w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all text-slate-900">
<option>Slice</option>
<option>Hook</option>
<option>Fat</option>
<option>Thin</option>
<option>Inconsistent</option>
</select>
<div className="pointer-events-none absolute top-[34px] right-3 text-slate-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Message (Optional)</label>
<textarea className="custom-input w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all placeholder:text-slate-400 min-h-[80px]" placeholder="Any specific questions?"></textarea>
</div>
<button className="w-full bg-slate-900 text-white rounded-lg px-4 py-3.5 text-sm font-medium hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10" type="button">
                    Request Call Back
                </button>
<p className="text-center text-xs text-slate-400">
                    We’ll reply within 24–48 hours with next steps and setup guidance.
                </p>
</form>
</div>
</section>

<section className="py-24 px-6 bg-slate-50">
<div className="max-w-3xl mx-auto">
<h2 className="text-2xl font-medium tracking-tight text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
<div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
<div>
<h3 className="text-sm font-medium text-slate-900 mb-2">Is this for beginners?</h3>
<p className="text-sm text-slate-500 leading-relaxed">Best for golfers who can already swing but want consistency — especially 10–20 handicaps.</p>
</div>
<div>
<h3 className="text-sm font-medium text-slate-900 mb-2">Do I need a coach?</h3>
<p className="text-sm text-slate-500 leading-relaxed">No — but it works great alongside coaching because it makes changes measurable.</p>
</div>
<div>
<h3 className="text-sm font-medium text-slate-900 mb-2">How long does setup take?</h3>
<p className="text-sm text-slate-500 leading-relaxed">Just a few minutes. You’ll get a simple mounting guide.</p>
</div>
<div>
<h3 className="text-sm font-medium text-slate-900 mb-2">Is it heavy or uncomfortable?</h3>
<p className="text-sm text-slate-500 leading-relaxed">Designed to be light and wearable for range sessions without impeding your swing.</p>
</div>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t border-slate-200 bg-white">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<span className="text-sm font-semibold tracking-tight text-slate-900">SWINGSENSE</span>
</div>
<div className="text-xs text-slate-400">
                © SwingSense — Built for golfers chasing consistency.
            </div>
<div className="flex items-center gap-6">
<a className="text-xs text-slate-500 hover:text-slate-900 transition-colors" href="#">Privacy</a>
<a className="text-xs text-slate-500 hover:text-slate-900 transition-colors" href="#">Terms</a>
<a className="text-xs text-slate-500 hover:text-slate-900 transition-colors" href="#">Contact</a>
</div>
</div>
</footer>

    </>
  );
}
