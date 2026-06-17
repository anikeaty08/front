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
brand: {
50: '#f0fdfa',
100: '#ccfbf1',
500: '#14b8a6', // Teal
600: '#0d9488',
900: '#134e4a',
},
warm: {
500: '#f43f5e', // Rose/Coral
}
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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<span className="bg-brand-50 text-brand-600 p-1.5 rounded-lg group-hover:bg-brand-100 transition-colors">
<span className="iconify" data-height="20" data-icon="lucide:wind" data-width="20" strokeWidth="1.5"></span>
</span>
<span className="text-lg font-semibold tracking-tighter text-slate-900">breth.</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#how-it-works">Method</a>
<a className="hover:text-slate-900 transition-colors" href="#curriculum">Curriculum</a>
<a className="hover:text-slate-900 transition-colors" href="#testimonials">Stories</a>
<a className="hover:text-slate-900 transition-colors" href="#pricing">Pricing</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white transition-all bg-slate-900 rounded-full hover:bg-slate-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2" href="#pricing">
                Start Program
            </a>

<button className="md:hidden p-2 text-slate-500">
<span className="iconify" data-height="24" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
<div className="absolute top-20 left-10 w-96 h-96 bg-brand-100 rounded-full blur-3xl opacity-40 mix-blend-multiply animate-blob"></div>
<div className="absolute top-40 right-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40 mix-blend-multiply animate-blob animation-delay-2000"></div>
</div>
<div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="max-w-xl animate-fade-in">
<div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-slate-50 border border-slate-100 text-xs font-medium text-slate-600">
<span className="flex h-2 w-2 rounded-full bg-brand-500"></span>
                    New cohort starting this week
                </div>
<h1 className="text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1] mb-6">
                    Become a happy <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-teal-400">non-vaper.</span>
</h1>
<p className="text-lg lg:text-xl text-slate-500 leading-relaxed mb-8 max-w-md">
                    No willpower battles. No scary withdrawal. Just a proven psychological shift that makes the desire to vape vanish.
                </p>
<div className="flex flex-col sm:flex-row gap-4 mb-10">
<a className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white transition-all bg-brand-600 rounded-full hover:bg-brand-700 shadow-lg shadow-brand-500/20 hover:shadow-brand-500/30" href="#pricing">
                        Quit Vaping Now
                        <span className="iconify ml-2" data-icon="lucide:arrow-right" strokeWidth="1.5"></span>
</a>
<a className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-slate-600 transition-all bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300" href="#how-it-works">
                        How it works
                    </a>
</div>
<div className="flex items-center gap-4 text-sm text-slate-500">
<div className="flex -space-x-2">
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white grayscale opacity-80" src="https://i.pravatar.cc/100?img=1"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white grayscale opacity-80" src="https://i.pravatar.cc/100?img=5"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white grayscale opacity-80" src="https://i.pravatar.cc/100?img=8"/>
<span className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-medium">+2k</span>
</div>
<p>Join 2,400+ people breathing free.</p>
</div>
</div>

<div className="relative lg:h-[500px] bg-slate-50 rounded-3xl border border-slate-100 p-8 flex flex-col justify-between shadow-2xl shadow-slate-200/50 animate-fade-in delay-200 overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/80 z-10 pointer-events-none"></div>
<div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 mb-4 transform rotate-[-2deg] origin-bottom-left transition hover:rotate-0 duration-500">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<span className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center text-brand-600">
<span className="iconify" data-icon="lucide:check-circle" width="20"></span>
</span>
<div>
<h3 className="font-medium text-slate-900 text-sm">Day 4: The Clarity</h3>
<p className="text-xs text-slate-400">Module 2 • Completed</p>
</div>
</div>
<span className="text-brand-500 text-xs font-medium bg-brand-50 px-2 py-1 rounded-md">100%</span>
</div>
<div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
<div className="bg-brand-500 h-full w-full"></div>
</div>
</div>
<div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 ml-8 transform rotate-[2deg] origin-bottom-right transition hover:rotate-0 duration-500 z-0">
<div className="flex items-start gap-4">
<div className="flex-1">
<p className="text-sm text-slate-600 mb-2">"I just realized I haven't thought about my vape in 6 hours. This feels... different."</p>
<p className="text-xs font-medium text-slate-900">- Sarah, London</p>
</div>
<span className="text-amber-400">
<span className="iconify" data-icon="lucide:star" fill="currentColor" width="16"></span>
</span>
</div>
</div>
<div className="mt-auto relative z-20 text-center">
<div className="inline-flex flex-col items-center">
<span className="text-6xl font-semibold tracking-tighter text-slate-900 mb-1">$0</span>
<span className="text-sm font-medium text-slate-400 uppercase tracking-wide">Saved this month</span>
</div>
</div>
</div>
</div>
</header>

<section className="border-y border-slate-100 py-10 bg-slate-50/50">
<div className="max-w-6xl mx-auto px-6 text-center">
<p className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-8">Backed by science &amp; research from</p>
<div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-bold tracking-tight text-slate-800 flex items-center gap-2"><span className="iconify" data-icon="lucide:activity"></span>HealthDaily</span>
<span className="text-xl font-bold tracking-tight text-slate-800 flex items-center gap-2"><span className="iconify" data-icon="lucide:heart-pulse"></span>Vitality</span>
<span className="text-xl font-bold tracking-tight text-slate-800 flex items-center gap-2"><span className="iconify" data-icon="lucide:brain-circuit"></span>MindShift</span>
<span className="text-xl font-bold tracking-tight text-slate-800 flex items-center gap-2"><span className="iconify" data-icon="lucide:zap"></span>FocusLab</span>
</div>
</div>
</section>

<section className="py-24 bg-white relative">
<div className="max-w-6xl mx-auto px-6">
<div className="max-w-2xl mx-auto text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Does this sound familiar?</h2>
<p className="text-slate-500">You're not weak. You're just caught in a loop. We know exactly how it feels because we've been there.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-warm-500/30 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="iconify text-slate-400 group-hover:text-warm-500 transition-colors" data-icon="lucide:search" width="24"></span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3">The "Pat Pocket" Panic</h3>
<p className="text-sm text-slate-500 leading-relaxed">That instant spike of adrenaline when you can't feel your vape in your pocket. The inability to focus until you find it.</p>
</div>

<div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-warm-500/30 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="iconify text-slate-400 group-hover:text-warm-500 transition-colors" data-icon="lucide:ghost" width="24"></span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3">The Secret Vaper</h3>
<p className="text-sm text-slate-500 leading-relaxed">Hiding in bathrooms, blowing smoke into sleeves, or waiting for your partner to leave the room. The shame is exhausting.</p>
</div>

<div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-warm-500/30 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="iconify text-slate-400 group-hover:text-warm-500 transition-colors" data-icon="lucide:heart-crack" width="24"></span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3">Health Anxiety</h3>
<p className="text-sm text-slate-500 leading-relaxed">Feeling that tightness in your chest or noticing you get winded easily, but pushing the thought away because quitting feels impossible.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="how-it-works">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
<div className="max-w-xl">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-6">The Breth Method</h2>
<p className="text-slate-400 text-lg">Most people try to quit using willpower. That's like trying not to scratch an itch. We remove the itch entirely.</p>
</div>
<a className="text-brand-400 hover:text-brand-300 font-medium inline-flex items-center gap-2 transition-colors" href="#curriculum">
                    View curriculum <span className="iconify" data-icon="lucide:arrow-down" width="16"></span>
</a>
</div>
<div className="grid md:grid-cols-4 gap-8">

<div className="group">
<div className="h-px w-full bg-slate-800 mb-8 group-hover:bg-brand-500 transition-colors duration-500 origin-left"></div>
<span className="block text-5xl font-semibold text-slate-800 mb-4 group-hover:text-brand-500 transition-colors duration-500">01</span>
<h3 className="text-xl font-medium text-white mb-3">Shift Mindset</h3>
<p className="text-sm text-slate-400 leading-relaxed">We dismantle the illusions that vaping relieves stress or boredom. You'll see the device for what it really is: a plastic trap.</p>
</div>

<div className="group">
<div className="h-px w-full bg-slate-800 mb-8 group-hover:bg-brand-500 transition-colors duration-500 origin-left"></div>
<span className="block text-5xl font-semibold text-slate-800 mb-4 group-hover:text-brand-500 transition-colors duration-500">02</span>
<h3 className="text-xl font-medium text-white mb-3">Kill the Fear</h3>
<p className="text-sm text-slate-400 leading-relaxed">Fear of withdrawal keeps you hooked. We explain exactly what's happening chemically so the monster loses its power.</p>
</div>

<div className="group">
<div className="h-px w-full bg-slate-800 mb-8 group-hover:bg-brand-500 transition-colors duration-500 origin-left"></div>
<span className="block text-5xl font-semibold text-slate-800 mb-4 group-hover:text-brand-500 transition-colors duration-500">03</span>
<h3 className="text-xl font-medium text-white mb-3">The Final Vape</h3>
<p className="text-sm text-slate-400 leading-relaxed">You don't quit until you're ready. In the final module, you'll have your last vape with a feeling of relief, not deprivation.</p>
</div>

<div className="group">
<div className="h-px w-full bg-slate-800 mb-8 group-hover:bg-brand-500 transition-colors duration-500 origin-left"></div>
<span className="block text-5xl font-semibold text-slate-800 mb-4 group-hover:text-brand-500 transition-colors duration-500">04</span>
<h3 className="text-xl font-medium text-white mb-3">Freedom</h3>
<p className="text-sm text-slate-400 leading-relaxed">No cravings. No envy of other vapers. Just the clear, calm enjoyment of being a non-vaper for the rest of your life.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="curriculum">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-brand-600 font-medium text-sm tracking-wider uppercase mb-3 block">Inside the program</span>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900">A clear path to fresh air.</h2>
</div>
<div className="space-y-4">

<div className="flex flex-col md:flex-row md:items-center gap-6 p-6 rounded-2xl bg-white border border-slate-100 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-900/5 transition-all cursor-default">
<div className="w-12 h-12 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
<span className="ml-1" data-icon="lucide:play" width="20"></span>
</div>
<div className="flex-1">
<h4 className="text-lg font-medium text-slate-900 mb-1">Module 1: The Nicotine Trap</h4>
<p className="text-sm text-slate-500">Understanding how the addiction tricked your brain's reward system.</p>
</div>
<div className="text-xs font-medium text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">15 mins</div>
</div>

<div className="flex flex-col md:flex-row md:items-center gap-6 p-6 rounded-2xl bg-white border border-slate-100 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-900/5 transition-all cursor-default">
<div className="w-12 h-12 rounded-full bg-slate-50 text-slate-600 flex items-center justify-center shrink-0">
<span className="iconify" data-icon="lucide:lock-open" width="20"></span>
</div>
<div className="flex-1">
<h4 className="text-lg font-medium text-slate-900 mb-1">Module 2: Debunking the Myths</h4>
<p className="text-sm text-slate-500">Why vaping actually <em>causes</em> stress instead of relieving it.</p>
</div>
<div className="text-xs font-medium text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">22 mins</div>
</div>

<div className="flex flex-col md:flex-row md:items-center gap-6 p-6 rounded-2xl bg-white border border-slate-100 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-900/5 transition-all cursor-default">
<div className="w-12 h-12 rounded-full bg-slate-50 text-slate-600 flex items-center justify-center shrink-0">
<span className="iconify" data-icon="lucide:brain" width="20"></span>
</div>
<div className="flex-1">
<h4 className="text-lg font-medium text-slate-900 mb-1">Module 3: Reprogramming</h4>
<p className="text-sm text-slate-500">Audio exercises to change your subconscious associations.</p>
</div>
<div className="text-xs font-medium text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">30 mins</div>
</div>

<div className="flex flex-col md:flex-row md:items-center gap-6 p-6 rounded-2xl bg-white border border-slate-100 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-900/5 transition-all cursor-default">
<div className="w-12 h-12 rounded-full bg-slate-50 text-slate-600 flex items-center justify-center shrink-0">
<span className="iconify" data-icon="lucide:sun" width="20"></span>
</div>
<div className="flex-1">
<h4 className="text-lg font-medium text-slate-900 mb-1">Module 4: The Ritual</h4>
<p className="text-sm text-slate-500">The final guided session where you become free.</p>
</div>
<div className="text-xs font-medium text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">20 mins</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-100" id="testimonials">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-16 text-center">People who "could never quit"</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
<div className="flex gap-1 text-brand-500 mb-4">
<span className="iconify" data-icon="lucide:star" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" fill="currentColor"></span>
</div>
<p className="text-slate-600 mb-6 leading-relaxed">"I was vaping a pod a day. I tried patches, gum, cold turkey. Nothing worked. This program changed how I viewed the vape. I walked away and haven't looked back in 6 months."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://i.pravatar.cc/100?img=12"/>
</div>
<div>
<p className="font-medium text-slate-900 text-sm">Marcus D.</p>
<p className="text-xs text-slate-400">Non-vaper for 6 months</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
<div className="flex gap-1 text-brand-500 mb-4">
<span className="iconify" data-icon="lucide:star" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" fill="currentColor"></span>
</div>
<p className="text-slate-600 mb-6 leading-relaxed">"What I loved was the lack of scare tactics. I didn't feel judged. I just felt... understood. The anxiety I thought the vape was curing was actually CAUSED by the vape."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://i.pravatar.cc/100?img=32"/>
</div>
<div>
<p className="font-medium text-slate-900 text-sm">Elena R.</p>
<p className="text-xs text-slate-400">Non-vaper for 3 weeks</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 md:hidden lg:block">
<div className="flex gap-1 text-brand-500 mb-4">
<span className="iconify" data-icon="lucide:star" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" fill="currentColor"></span>
</div>
<p className="text-slate-600 mb-6 leading-relaxed">"Honestly, it was easier than I expected. The audio sessions really helped rewire my brain. I don't even crave it when I'm out for drinks with friends."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://i.pravatar.cc/100?img=53"/>
</div>
<div>
<p className="font-medium text-slate-900 text-sm">James T.</p>
<p className="text-xs text-slate-400">Non-vaper for 1 year</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-12 text-center">Doubts? Let's clear them up.</h2>
<div className="space-y-4">
<details className="group bg-white border border-slate-200 rounded-xl overflow-hidden open:ring-2 open:ring-brand-100 open:border-brand-500 transition-all duration-300">
<summary className="flex items-center justify-between p-6 cursor-pointer text-lg font-medium text-slate-800">
                        Will I gain weight?
                        <span className="iconify text-slate-400 group-open:rotate-180 transition-transform duration-300" data-icon="lucide:chevron-down" width="20"></span>
</summary>
<div className="px-6 pb-6 text-slate-500 leading-relaxed">
                        This is a common fear. Because our method removes the feeling of "deprivation," you won't feel the need to replace nicotine with food. We tackle the psychological void, so you don't fill it with snacks.
                    </div>
</details>
<details className="group bg-white border border-slate-200 rounded-xl overflow-hidden open:ring-2 open:ring-brand-100 open:border-brand-500 transition-all duration-300">
<summary className="flex items-center justify-between p-6 cursor-pointer text-lg font-medium text-slate-800">
                        What if I've failed before?
                        <span className="iconify text-slate-400 group-open:rotate-180 transition-transform duration-300" data-icon="lucide:chevron-down" width="20"></span>
</summary>
<div className="px-6 pb-6 text-slate-500 leading-relaxed">
                        Most methods fail because they rely on willpower. You're fighting yourself. Breth removes the desire to smoke, so willpower isn't required. Failure in the past wasn't your fault; it was the wrong method.
                    </div>
</details>
<details className="group bg-white border border-slate-200 rounded-xl overflow-hidden open:ring-2 open:ring-brand-100 open:border-brand-500 transition-all duration-300">
<summary className="flex items-center justify-between p-6 cursor-pointer text-lg font-medium text-slate-800">
                        Is this a monthly subscription?
                        <span className="iconify text-slate-400 group-open:rotate-180 transition-transform duration-300" data-icon="lucide:chevron-down" width="20"></span>
</summary>
<div className="px-6 pb-6 text-slate-500 leading-relaxed">
                        No. You pay once for lifetime access. We want you to quit and move on with your life, not keep you in our ecosystem forever.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="pricing">

<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="bg-white text-slate-900 rounded-3xl p-8 lg:p-12 shadow-2xl shadow-brand-500/10 flex flex-col md:flex-row gap-12 items-center">
<div className="flex-1 space-y-6">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-2">Freedom in a box.</h2>
<p className="text-slate-500 text-lg">Everything you need to break the chain. Less than the cost of a month's supply of vapes.</p>
<ul className="space-y-3">
<li className="flex items-center gap-3">
<span className="iconify text-brand-500" data-icon="lucide:check" width="20"></span>
<span className="text-slate-700 font-medium">Full Audio &amp; Video Course</span>
</li>
<li className="flex items-center gap-3">
<span className="iconify text-brand-500" data-icon="lucide:check" width="20"></span>
<span className="text-slate-700 font-medium">Panic Button Relief App</span>
</li>
<li className="flex items-center gap-3">
<span className="iconify text-brand-500" data-icon="lucide:check" width="20"></span>
<span className="text-slate-700 font-medium">Private Community Access</span>
</li>
<li className="flex items-center gap-3">
<span className="iconify text-brand-500" data-icon="lucide:check" width="20"></span>
<span className="text-slate-700 font-medium">Lifetime Updates</span>
</li>
<li className="flex items-center gap-3">
<span className="iconify text-brand-500" data-icon="lucide:check" width="20"></span>
<span className="text-slate-700 font-medium">100% Money-back Guarantee</span>
</li>
</ul>
</div>
<div className="w-full md:w-80 bg-slate-50 rounded-2xl p-8 border border-slate-100 text-center">
<p className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-4">One-time payment</p>
<div className="flex items-baseline justify-center gap-1 mb-2">
<span className="text-4xl font-bold tracking-tight text-slate-900">$97</span>
<span className="text-slate-400">USD</span>
</div>
<p className="text-xs text-slate-400 mb-8">Secure payment via Stripe</p>
<button className="w-full py-4 bg-brand-600 text-white font-semibold rounded-xl hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-500/30 transition-all transform active:scale-95 mb-4">
                        Get Instant Access
                    </button>
<p className="text-xs text-slate-400">Start watching in 2 minutes.</p>
</div>
</div>
</div>
</section>

<footer className="py-12 bg-white border-t border-slate-100">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="bg-slate-100 text-slate-600 p-1.5 rounded-lg">
<span className="iconify" data-height="18" data-icon="lucide:wind" data-width="18" strokeWidth="1.5"></span>
</span>
<span className="text-base font-semibold tracking-tight text-slate-900">breth.</span>
</div>
<div className="text-sm text-slate-400 flex gap-6">
<a className="hover:text-slate-900 transition-colors" href="#">Support</a>
<a className="hover:text-slate-900 transition-colors" href="#">Privacy</a>
<a className="hover:text-slate-900 transition-colors" href="#">Terms</a>
</div>
<div className="text-sm text-slate-400">
                © 2024 Breth Wellness Inc.
            </div>
</div>
</footer>

    </>
  );
}
