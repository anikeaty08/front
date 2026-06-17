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



        // Initialize Icons
        lucide.createIcons();
    
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
      

<nav className="max-w-[700px] mx-auto px-6 py-6 sm:py-8 flex justify-between items-center opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
<div className="flex items-center gap-2">

<div className="w-6 h-6 bg-[#8B9B7E] rounded-full"></div>
<span className="text-sm font-semibold tracking-tight text-stone-500 uppercase">Wellness &amp; Parenting</span>
</div>
<div className="text-xs text-stone-400 font-medium tracking-wide">5 MIN READ</div>
</nav>

<main className="max-w-[700px] mx-auto px-6 pb-24">

<header className="mb-12 sm:mb-16">
<h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 leading-[1.1] mb-6">
                What no one tells you about mom burnout (and what actually helps)
            </h1>
<h2 className="text-xl sm:text-2xl text-stone-500 font-normal leading-relaxed mb-10">
                Hint: meditation apps and bubble baths aren't the answer.
            </h2>
<div className="relative w-full aspect-[4/3] sm:aspect-[16/9] overflow-hidden rounded-md bg-stone-100 mb-4">
<img alt="Exhausted mother in living room with toys" className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<p className="text-xs text-stone-400 text-center italic mt-2">Photo: Authentic chaos.</p>
</header>

<section className="mb-16 sm:mb-24">
<h3 className="text-2xl font-bold tracking-tight text-stone-900 mb-8">Does this sound familiar?</h3>
<div className="space-y-6 text-lg sm:text-xl text-stone-800 leading-relaxed font-medium">
<p>You wake up already exhausted.</p>
<p>You can't remember the last time you felt like yourself.</p>
<p>You love your kids but some days you're just... surviving.</p>
<p>You hide in the bathroom for 2 minutes of silence.</p>
<p>You feel guilty for wanting ANY time for yourself.</p>
<p>You've forgotten what you even enjoy anymore.</p>
<p className="text-stone-900 font-bold decoration-[#D4A59A]/30 underline decoration-2 underline-offset-4">If you're nodding right now, keep reading.</p>
</div>
</section>

<section className="mb-16 sm:mb-24">
<h3 className="text-2xl font-bold tracking-tight text-stone-900 mb-2">You've tried everything. Nothing worked.</h3>
<p className="text-xl text-[#D4A59A] font-semibold italic mb-10">And it's not your fault.</p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
<div className="bg-[#FAF9F6] p-6 rounded-lg border border-stone-100">
<h4 className="font-bold text-stone-900 mb-2">Therapy</h4>
<p className="text-stone-600 leading-relaxed">Expensive. Impossible to schedule. Feels like a massive commitment.</p>
</div>
<div className="bg-[#FAF9F6] p-6 rounded-lg border border-stone-100">
<h4 className="font-bold text-stone-900 mb-2">Meditation apps</h4>
<p className="text-stone-600 leading-relaxed">Tried once. Felt like another chore. Deleted.</p>
</div>
<div className="bg-[#FAF9F6] p-6 rounded-lg border border-stone-100">
<h4 className="font-bold text-stone-900 mb-2">Exercise</h4>
<p className="text-stone-600 leading-relaxed">Requires energy you don't have.</p>
</div>
<div className="bg-[#FAF9F6] p-6 rounded-lg border border-stone-100">
<h4 className="font-bold text-stone-900 mb-2">Supplements</h4>
<p className="text-stone-600 leading-relaxed">Popped them for a month. Felt nothing.</p>
</div>
</div>
<div className="border-l-4 border-[#8B9B7E] pl-6 py-2">
<p className="text-lg font-bold text-stone-900 mb-2">The truth no one tells you:</p>
<p className="text-lg text-stone-700 leading-relaxed">These weren't built for you. They were built for people with time, energy, and money to spare.</p>
</div>
</section>

<section className="mb-16 sm:mb-24">
<h3 className="text-3xl font-bold tracking-tight text-stone-900 mb-8 leading-tight">The simple self-care method that actually works for tired moms</h3>
<div className="space-y-4 text-lg text-stone-700 leading-relaxed mb-10">
<p>It's not about finding an hour.</p>
<p>It's not about meditation retreats.</p>
<p>It's not about "trying harder."</p>
<p className="mt-6">Research proves it: small daily habits beat big commitments. Every time.</p>
<p>The moms who actually feel better aren't doing MORE. They're doing less — but consistently.</p>
</div>
<div className="bg-stone-900 text-white p-8 sm:p-10 rounded-xl text-center shadow-lg transform rotate-1 transition hover:rotate-0 duration-500">
<p className="text-2xl sm:text-3xl font-bold tracking-tight leading-snug">
                    "5 minutes. Baby steps. That's the secret."
                </p>
</div>
</section>

<section className="mb-16 sm:mb-24">
<h3 className="text-2xl font-bold tracking-tight text-stone-900 mb-6">What if self-care finally adapted to YOU?</h3>
<div className="prose prose-lg prose-stone max-w-none text-stone-700 leading-relaxed">
<p className="mb-6">Picture this:</p>
<p className="mb-6">
                    On your worst days — when you're barely holding it together — you only need to do <span className="bg-[#D4A59A]/20 px-1 rounded">ONE tiny thing</span>. And it counts <span className="font-bold text-stone-900">MORE</span>.
                </p>
<p className="mb-6">On your good days, you do a little extra.</p>
<p className="mb-6">No guilt. No streaks to "break." No pile-up of things you "should" have done.</p>
<p>Just small wins, every single day, that actually add up.</p>
</div>
</section>

<section className="mb-16 sm:mb-24">
<div className="mb-10">
<h3 className="text-4xl sm:text-6xl font-bold text-[#8B9B7E] tracking-tighter mb-4">71%</h3>
<p className="text-xl sm:text-2xl font-bold text-stone-900 leading-tight">
                    Mothers carry 71% of the mental load — 60% more than fathers.
                </p>
</div>
<div className="text-lg text-stone-700 leading-relaxed mb-10 space-y-4">
<p>They handle 79% of the daily tasks. The cleaning. The childcare. The invisible work that never ends.</p>
<p className="font-bold text-stone-900">No wonder they're burned out.</p>
<p>A 2024 study from the University of Bath analyzed 3,000 parents and found the same pattern everywhere: mothers shoulder the overwhelming majority of cognitive household labor — the planning, scheduling, remembering, organizing, anticipating. The work that keeps a family running but never shows up on a to-do list.</p>
<p>The researchers called it "unseen work." But the exhaustion isn't unseen. The burnout isn't unseen. The anxiety, the guilt, the feeling of running on empty — that's very real.</p>
</div>

<blockquote className="bg-[#FAF9F6] p-8 rounded-lg border-l-4 border-[#D4A59A] mb-12">
<p className="text-lg text-stone-800 italic mb-4">"This kind of work is often unseen, but it matters. It can lead to stress, burnout and even impact women's careers. In many cases, resentment can build, creating strain between couples."</p>
<footer className="text-sm font-bold text-stone-900 uppercase tracking-wider">— Dr. Ana Catalano Weeks, University of Bath</footer>
</blockquote>
<p className="text-stone-900 font-bold mb-6">It's not just research. Here's what real moms say:</p>

<div className="relative pl-0 sm:pl-10">
<div className="hidden sm:block absolute left-0 top-0 text-[#8B9B7E] opacity-30">
<svg fill="currentColor" height="32" viewbox="0 0 24 24" width="32"><path d="M14.017 21L14.017 18C14.017 16.896 14.321 15.932 14.929 15.108C15.537 14.284 16.321 13.568 17.281 12.96L20.621 10.84L20.621 21L14.017 21ZM5 21L5 18C5 16.896 5.304 15.932 5.912 15.108C6.52 14.284 7.304 13.568 8.264 12.96L11.604 10.84L11.604 21L5 21ZM17.485 3L21.657 7.172C21.049 7.78 20.541 8.528 20.133 9.416L16.273 11.824L12.565 8.116L16.737 3.944L17.485 3ZM8.469 3L12.641 7.172C12.033 7.78 11.525 8.528 11.117 9.416L7.257 11.824L3.549 8.116L7.721 3.944L8.469 3Z"></path></svg>
</div>
<p className="text-lg sm:text-xl text-stone-800 font-medium leading-relaxed mb-4">
                    "I didn't transform my life overnight. I just started doing ONE tiny thing for myself every day. After a month, I didn't feel like a ghost in my own life anymore. I wish someone had told me sooner — I didn't need an hour. I needed 5 minutes I could actually stick to."
                </p>
<cite className="not-italic text-sm text-stone-500">— Sarah, mom of 2</cite>
</div>
<div className="mt-8 text-center sm:text-left">
<span className="inline-block border border-[#8B9B7E] text-[#8B9B7E] rounded-full px-4 py-1 text-sm font-semibold tracking-wide">Small steps. Real progress. Zero burnout.</span>
</div>
</section>

<section className="mb-16 sm:mb-24">
<h3 className="text-2xl font-bold tracking-tight text-stone-900 mb-8">Why most wellness solutions fail tired moms</h3>
<div className="grid gap-6 mb-10">
<div className="flex items-start gap-3 text-stone-700">
<i className="w-5 h-5 text-red-400 mt-1 shrink-0" data-lucide="x"></i>
<span>They're built for people with endless time.</span>
</div>
<div className="flex items-start gap-3 text-stone-700">
<i className="w-5 h-5 text-red-400 mt-1 shrink-0" data-lucide="x"></i>
<span>They demand 30-minute sessions.</span>
</div>
<div className="flex items-start gap-3 text-stone-700">
<i className="w-5 h-5 text-red-400 mt-1 shrink-0" data-lucide="x"></i>
<span>They punish you for missing a day.</span>
</div>
</div>

<div className="overflow-hidden border border-stone-200 rounded-lg">
<div className="grid grid-cols-2 bg-stone-50 border-b border-stone-200">
<div className="p-4 font-bold text-stone-500 text-sm uppercase tracking-wider">What Failed</div>
<div className="p-4 font-bold text-[#8B9B7E] text-sm uppercase tracking-wider">What Actually Works</div>
</div>
<div className="grid grid-cols-2 border-b border-stone-100 last:border-0 hover:bg-stone-50/50 transition-colors">
<div className="p-4 text-stone-600 text-sm sm:text-base">30-minute sessions</div>
<div className="p-4 text-stone-900 font-medium text-sm sm:text-base bg-[#8B9B7E]/5">5 minutes max</div>
</div>
<div className="grid grid-cols-2 border-b border-stone-100 last:border-0 hover:bg-stone-50/50 transition-colors">
<div className="p-4 text-stone-600 text-sm sm:text-base">Fixed daily goals</div>
<div className="p-4 text-stone-900 font-medium text-sm sm:text-base bg-[#8B9B7E]/5">Adapts to YOUR energy</div>
</div>
<div className="grid grid-cols-2 border-b border-stone-100 last:border-0 hover:bg-stone-50/50 transition-colors">
<div className="p-4 text-stone-600 text-sm sm:text-base">Streaks that break</div>
<div className="p-4 text-stone-900 font-medium text-sm sm:text-base bg-[#8B9B7E]/5">Tasks vanish at midnight.</div>
</div>
<div className="grid grid-cols-2 border-b border-stone-100 last:border-0 hover:bg-stone-50/50 transition-colors">
<div className="p-4 text-stone-600 text-sm sm:text-base">Built for influencers</div>
<div className="p-4 text-stone-900 font-medium text-sm sm:text-base bg-[#8B9B7E]/5">Built for exhausted moms</div>
</div>
</div>
</section>

<section className="mb-16 sm:mb-24">
<h3 className="text-2xl font-bold tracking-tight text-stone-900 mb-6">What's actually working for moms right now</h3>
<p className="text-lg text-stone-700 leading-relaxed mb-6">
                While most wellness apps demand 30 minutes and punish you for missing a day, a different approach is gaining traction.
            </p>
<p className="text-lg text-stone-700 leading-relaxed mb-8">
                It's called <span className="font-bold text-stone-900">Hazelie</span> — a self-care app built specifically for exhausted moms.
            </p>
<div className="flex flex-col md:flex-row gap-8 items-center mb-10">
<div className="flex-1 space-y-4">
<p className="text-stone-900 font-medium">The concept is simple:</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-stone-700">
<i className="w-5 h-5 text-[#8B9B7E]" data-lucide="check"></i>
<span>Check in each day (30 seconds)</span>
</li>
<li className="flex items-center gap-3 text-stone-700">
<i className="w-5 h-5 text-[#8B9B7E]" data-lucide="check"></i>
<span>Complete 1-3 tiny tasks based on energy</span>
</li>
<li className="flex items-center gap-3 text-stone-700">
<i className="w-5 h-5 text-[#8B9B7E]" data-lucide="check"></i>
<span>Watch a virtual forest grow as you progress</span>
</li>
</ul>
</div>

<div className="w-48 sm:w-56 shrink-0 rotate-2 hover:rotate-0 transition-transform duration-500">
<div className="aspect-[9/19] bg-stone-900 rounded-[2rem] p-2 shadow-2xl border-4 border-stone-200">
<div className="h-full w-full bg-white rounded-[1.5rem] overflow-hidden relative">

<div className="bg-[#FAF9F6] h-full p-4 flex flex-col items-center pt-8">
<div className="w-12 h-12 bg-[#8B9B7E]/20 rounded-full flex items-center justify-center mb-4 text-[#8B9B7E]">
<i className="w-6 h-6" data-lucide="leaf"></i>
</div>
<div className="w-3/4 h-2 bg-stone-200 rounded-full mb-2"></div>
<div className="w-1/2 h-2 bg-stone-200 rounded-full mb-8"></div>
<div className="w-full bg-white p-3 rounded-lg shadow-sm border border-stone-100 mb-2">
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded-full border border-[#8B9B7E]"></div>
<div className="w-2/3 h-2 bg-stone-100 rounded-full"></div>
</div>
</div>
<div className="w-full bg-white p-3 rounded-lg shadow-sm border border-stone-100">
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded-full border border-[#8B9B7E]"></div>
<div className="w-1/2 h-2 bg-stone-100 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<p className="text-lg text-stone-700 leading-relaxed mb-6">
                The difference? On your worst days, tasks are easier and worth <span className="font-bold">MORE</span>. No streaks. No guilt. Tasks vanish at midnight — fresh start every morning.
            </p>
<p className="text-lg text-stone-700 leading-relaxed">
                It's designed for moms who have 5 minutes, not 50. And early users are saying it's the first self-care tool that actually stuck.
            </p>
</section>

<section className="mb-12">
<h3 className="text-xl font-bold tracking-tight text-stone-900 mb-4">Early access is now open</h3>
<div className="prose prose-stone text-stone-700 leading-relaxed">
<p>Right now, Hazelie is opening early access to a small group of founding members.</p>
<p>The offer: 12 months of premium features completely free (normally <span className="font-semibold">$40/year</span>).</p>
<p>It's limited to <span className="font-semibold">100 spots</span> — partly to keep the community small while they refine the app, partly because they want real feedback from real moms.</p>
</div>
</section>

<section className="mt-16 bg-[#F5EFE7] rounded-2xl p-8 sm:p-12 relative overflow-hidden">

<div className="absolute -top-24 -right-24 w-64 h-64 bg-white/40 rounded-full blur-3xl"></div>
<div className="relative z-10 max-w-md mx-auto text-center sm:text-left">
<h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 mb-2">Join the founding members</h2>
<div className="flex items-center justify-center sm:justify-start gap-2 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8B9B7E] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#8B9B7E]"></span>
</span>
<p className="text-sm font-medium text-stone-600 uppercase tracking-wide">100 spots available</p>
</div>
<div className="flex flex-col gap-3 mb-8">
<div className="flex flex-col sm:flex-row gap-3">
<input className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#8B9B7E] focus:border-transparent bg-white text-stone-900 placeholder:text-stone-400 transition-all" placeholder="Enter your email" type="email"/>
<button className="w-full sm:w-auto px-6 py-3 bg-[#8B9B7E] hover:bg-[#7A8B6E] text-white font-semibold rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 whitespace-nowrap">
                            Join Waitlist <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
<p className="text-xs text-stone-500 text-center sm:text-left">No spam. Unsubscribe anytime.</p>
</div>
<ul className="space-y-2 text-sm text-stone-700 mb-6 text-left inline-block">
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-[#8B9B7E]" data-lucide="check-circle-2"></i>
                        12 months premium FREE ($40 value)
                    </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-[#8B9B7E]" data-lucide="check-circle-2"></i>
                        First access when app launches
                    </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-[#8B9B7E]" data-lucide="check-circle-2"></i>
                        Direct input on features
                    </li>
</ul>
<p className="text-sm text-[#D4A59A] font-medium italic">This won't stay open long.</p>
</div>
</section>
</main>
<footer className="text-center py-12 border-t border-stone-100">
<p className="text-xs text-stone-400 font-medium tracking-widest uppercase">Hazelie © 2025</p>
</footer>


    </>
  );
}
