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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-2xl font-semibold tracking-tighter text-slate-900 flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-rose-200 to-sky-200 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
<iconify-icon className="text-slate-700" icon="solar:cat-linear"></iconify-icon> 
</div>
                BunBank
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#how-it-works">How it works</a>
<a className="hover:text-slate-900 transition-colors" href="#features">The App</a>
<a className="hover:text-slate-900 transition-colors" href="#parents">For Parents</a>
<a className="hover:text-slate-900 transition-colors" href="#shop">Shop</a>
</div>
<a className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-all hover:shadow-lg hover:-translate-y-0.5" href="#shop">
                Get BunBank
            </a>
</div>
</nav>

<section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 opacity-60">
<div className="absolute top-20 left-10 w-[30rem] h-[30rem] bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-[pulse_8s_ease-in-out_infinite]"></div>
<div className="absolute top-40 right-10 w-[35rem] h-[35rem] bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-[pulse_10s_ease-in-out_infinite_reverse]"></div>
<div className="absolute -bottom-20 left-1/2 w-[40rem] h-[40rem] bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
</div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-slate-100 shadow-sm text-sm font-medium text-slate-600 mb-8 backdrop-blur-sm">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
</span>
                Now shipping for the holidays
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 max-w-4xl mx-auto leading-tight mb-8">
                Smart savings for <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-purple-400 to-sky-400">magical little minds.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
                Meet BunBank, the AI-powered bunny that makes learning about money joyful, emotional, and fun. Designed for kids 5–10 to build healthy habits that last a lifetime.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-slate-900 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-slate-800 transition-all hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2" href="#shop">
                    Meet the Bunny
                    <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto bg-white text-slate-700 px-8 py-4 rounded-full text-base font-medium border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center justify-center gap-2" href="#how-it-works">
<iconify-icon className="text-lg" icon="solar:play-circle-linear"></iconify-icon>
                    See how it works
                </a>
</div>

<div className="mt-20 relative h-[400px] w-full max-w-5xl mx-auto bg-white/40 backdrop-blur-md rounded-[3rem] border border-white/60 shadow-xl overflow-hidden flex items-center justify-center group">
<div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent"></div>

<div className="relative z-10 w-64 h-72 bg-gradient-to-b from-white to-slate-50 rounded-[3rem] shadow-2xl border border-slate-100 flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-700 ease-out">
<div className="w-24 h-24 bg-rose-100 rounded-full flex items-center justify-center mb-6">
<iconify-icon className="text-5xl text-rose-400" icon="solar:smile-circle-linear"></iconify-icon>
</div>
<div className="text-center px-6">
<div className="h-2 w-16 bg-slate-200 rounded-full mx-auto mb-3"></div>
<div className="h-1.5 w-12 bg-slate-200 rounded-full mx-auto"></div>
</div>
</div>

<div className="absolute top-20 left-20 w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center shadow-lg border border-amber-200 animate-[bounce_4s_ease-in-out_infinite] delay-75">
<iconify-icon className="text-2xl text-amber-500" icon="solar:wad-of-money-linear"></iconify-icon>
</div>
<div className="absolute bottom-32 right-32 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center shadow-lg border border-teal-200 animate-[bounce_5s_ease-in-out_infinite_reverse]">
<iconify-icon className="text-xl text-teal-500" icon="solar:star-fall-minimalistic-linear"></iconify-icon>
</div>
<div className="absolute top-40 right-40 w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center shadow-lg border border-purple-200 animate-[bounce_6s_ease-in-out_infinite] delay-150">
<iconify-icon className="text-xl text-purple-500" icon="solar:heart-angle-linear"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Money lessons, made magical.</h2>
<p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto font-medium">Three simple steps to start building healthy financial habits with a smile.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-rose-50/50 rounded-3xl p-10 border border-rose-100/50 relative overflow-hidden group">
<div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-8 border border-rose-100 group-hover:-translate-y-2 transition-transform duration-300">
<iconify-icon className="text-2xl text-rose-500" icon="solar:wad-of-money-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">1. Feed the Bunny</h3>
<p className="text-sm text-slate-600 font-medium leading-relaxed">Kids drop real coins or log digital chores. BunBank senses the savings and lights up with a happy glow.</p>
</div>

<div className="bg-sky-50/50 rounded-3xl p-10 border border-sky-100/50 relative overflow-hidden group">
<div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-8 border border-sky-100 group-hover:-translate-y-2 transition-transform duration-300">
<iconify-icon className="text-2xl text-sky-500" icon="solar:smile-circle-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">2. Watch it React</h3>
<p className="text-sm text-slate-600 font-medium leading-relaxed">Powered by gentle AI, the bunny expresses emotions—celebrating goals and encouraging patience when waiting.</p>
</div>

<div className="bg-teal-50/50 rounded-3xl p-10 border border-teal-100/50 relative overflow-hidden group">
<div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-8 border border-teal-100 group-hover:-translate-y-2 transition-transform duration-300">
<iconify-icon className="text-2xl text-teal-500" icon="solar:chart-2-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">3. Grow Together</h3>
<p className="text-sm text-slate-600 font-medium leading-relaxed">The companion app turns savings into interactive stories, teaching kids the value of setting and reaching goals.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 overflow-hidden" id="features">
<div className="max-w-7xl mx-auto px-6">

<div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
<div className="w-full lg:w-1/2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-xs font-semibold text-purple-700 mb-6 uppercase tracking-wider">
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon> AI Emotions
                    </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6 leading-tight">
                        It feels what they save.
                    </h2>
<p className="text-base text-slate-600 font-medium mb-8 leading-relaxed">
                        BunBank isn't just a container; it's a companion. Using simple, child-friendly AI, it gives emotional feedback. It dances when a goal is reached, and offers gentle, encouraging sighs if savings are removed too early, teaching the emotional weight of financial choices.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm font-medium text-slate-700">
<iconify-icon className="text-xl text-teal-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Visual and audio cues for positive reinforcement.
                        </li>
<li className="flex items-start gap-3 text-sm font-medium text-slate-700">
<iconify-icon className="text-xl text-teal-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Teaches delayed gratification naturally.
                        </li>
</ul>
</div>
<div className="w-full lg:w-1/2 relative">

<div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 grid grid-cols-2 gap-4 relative z-10">
<div className="col-span-2 bg-gradient-to-br from-rose-50 to-orange-50 p-6 rounded-2xl border border-rose-100 flex items-center gap-4">
<div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center">
<iconify-icon className="text-3xl text-rose-500" icon="solar:confetti-minimalistic-linear"></iconify-icon>
</div>
<div>
<p className="text-xs font-semibold text-rose-500 uppercase tracking-wider mb-1">Goal Reached!</p>
<p className="text-sm font-semibold text-slate-800">New Bicycle Fund</p>
</div>
</div>
<div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
<iconify-icon className="text-3xl text-slate-400 mb-3 mx-auto" icon="solar:hourglass-linear"></iconify-icon>
<p className="text-xs font-medium text-slate-500">Patience Mode Active</p>
</div>
<div className="bg-sky-50 p-6 rounded-2xl border border-sky-100 text-center">
<iconify-icon className="text-3xl text-sky-500 mb-3 mx-auto" icon="solar:hand-stars-linear"></iconify-icon>
<p className="text-xs font-medium text-slate-600">Weekly Chore Bonus</p>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -z-10"></div>
</div>
</div>

<div className="flex flex-col lg:flex-row-reverse items-center gap-16">
<div className="w-full lg:w-1/2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-xs font-semibold text-teal-700 mb-6 uppercase tracking-wider">
<iconify-icon icon="solar:smartphone-update-linear"></iconify-icon> Parent &amp; Child App
                    </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6 leading-tight">
                        See the magic on screen.
                    </h2>
<p className="text-base text-slate-600 font-medium mb-8 leading-relaxed">
                        The BunBank app has two modes: a colorful, story-driven dashboard for kids to track their dreams, and a secure parent portal to manage allowance, set tasks, and view learning progress.
                    </p>
<a className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-teal-600 transition-colors" href="#">
                        Explore app features <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="w-full lg:w-1/2 relative">
<div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden relative z-10 aspect-[4/3]">

<div className="absolute inset-0 bg-slate-50 p-6 flex flex-col">
<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-teal-200 rounded-full flex items-center justify-center text-teal-800 font-semibold text-sm">L</div>
<div>
<p className="text-xs font-medium text-slate-500">Hello,</p>
<p className="text-sm font-semibold text-slate-800">Leo's Dashboard</p>
</div>
</div>
<iconify-icon className="text-xl text-slate-400" icon="solar:bell-linear"></iconify-icon>
</div>
<div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 mb-4 flex-1">
<p className="text-xs font-medium text-slate-500 mb-2">Total Savings</p>
<h3 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">$42.50</h3>
<div className="space-y-2">
<div className="flex justify-between text-xs font-medium">
<span className="text-slate-600">Lego Set Goal</span>
<span className="text-teal-600">85%</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
<div className="bg-teal-400 h-2 rounded-full w-[85%]"></div>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
<iconify-icon className="text-xl text-sky-500 mb-2" icon="solar:checklist-minimalistic-linear"></iconify-icon>
<p className="text-xs font-semibold text-slate-800">Tasks</p>
<p className="text-[10px] text-slate-500">2 pending</p>
</div>
<div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
<iconify-icon className="text-xl text-amber-500 mb-2" icon="solar:star-linear"></iconify-icon>
<p className="text-xs font-semibold text-slate-800">Badges</p>
<p className="text-[10px] text-slate-500">4 unlocked</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="parents">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Loved by parents. <br/> Adored by kids.</h2>
</div>
<div className="columns-1 md:columns-3 gap-6 space-y-6">

<div className="break-inside-avoid bg-slate-50 rounded-3xl p-8 border border-slate-100">
<div className="flex gap-1 mb-4">
<iconify-icon className="text-amber-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-amber-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-amber-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-amber-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-amber-400" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-700 font-medium mb-6 leading-relaxed">"Finally, a piggy bank that actually teaches something. My 7-year-old completely stopped asking for toys at the store because she wants to 'feed her bunny' for a bigger goal."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-700 font-semibold text-xs">SM</div>
<div>
<p className="text-xs font-semibold text-slate-900">Sarah M.</p>
<p className="text-[10px] text-slate-500">Mom of two</p>
</div>
</div>
</div>

<div className="break-inside-avoid bg-slate-50 rounded-3xl p-8 border border-slate-100">
<div className="flex gap-1 mb-4">
<iconify-icon className="text-amber-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-amber-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-amber-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-amber-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-amber-400" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-700 font-medium mb-6 leading-relaxed">"The AI reactions are genius. When my son took money out early, the bunny looked a little sad, and it sparked such a great conversation about patience."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-700 font-semibold text-xs">JD</div>
<div>
<p className="text-xs font-semibold text-slate-900">James D.</p>
<p className="text-[10px] text-slate-500">Dad of a 6yr old</p>
</div>
</div>
</div>

<div className="break-inside-avoid bg-slate-50 rounded-3xl p-8 border border-slate-100">
<div className="flex gap-1 mb-4">
<iconify-icon className="text-amber-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-amber-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-amber-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-amber-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-amber-400" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-700 font-medium mb-6 leading-relaxed">"It's premium quality. Not a cheap plastic toy, but a beautifully designed device that looks great in her bedroom. The app is incredibly easy to use."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-semibold text-xs">EL</div>
<div>
<p className="text-xs font-semibold text-slate-900">Elena L.</p>
<p className="text-[10px] text-slate-500">Verified Buyer</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white" id="shop">
<div className="max-w-5xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="bg-slate-800/50 p-10 rounded-[3rem] border border-slate-700 aspect-square flex flex-col items-center justify-center relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-tr from-rose-500/10 to-sky-500/10 opacity-50 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10 w-48 h-56 bg-slate-50 rounded-[2.5rem] shadow-2xl flex items-center justify-center transition-all duration-500">
<iconify-icon className="text-6xl text-slate-300" icon="solar:smile-circle-linear"></iconify-icon>
</div>

<div className="absolute top-10 right-10 bg-white text-slate-900 px-4 py-2 rounded-full text-sm font-semibold shadow-xl rotate-3">
                        Free App Included
                    </div>
</div>

<div>
<h2 className="text-4xl font-semibold tracking-tight mb-4">BunBank Starter Kit</h2>
<p className="text-slate-400 text-base font-medium mb-8">Everything you need to start the magical journey of financial literacy. Includes the smart bunny, charging cable, and lifetime access to the core app.</p>
<div className="flex items-end gap-4 mb-8">
<span className="text-5xl font-semibold tracking-tight">$89</span>
<span className="text-slate-400 text-sm mb-2 line-through">$120</span>
</div>

<div className="mb-8">
<p className="text-sm font-medium text-slate-300 mb-3">Choose a color</p>
<div className="flex gap-4">

<label className="cursor-pointer relative">
<input checked="" className="peer sr-only" name="color" type="radio"/>
<div className="w-8 h-8 rounded-full bg-rose-200 ring-2 ring-transparent peer-checked:ring-white peer-checked:ring-offset-2 peer-checked:ring-offset-slate-900 transition-all"></div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only" name="color" type="radio"/>
<div className="w-8 h-8 rounded-full bg-teal-200 ring-2 ring-transparent peer-checked:ring-white peer-checked:ring-offset-2 peer-checked:ring-offset-slate-900 transition-all"></div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only" name="color" type="radio"/>
<div className="w-8 h-8 rounded-full bg-sky-200 ring-2 ring-transparent peer-checked:ring-white peer-checked:ring-offset-2 peer-checked:ring-offset-slate-900 transition-all"></div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only" name="color" type="radio"/>
<div className="w-8 h-8 rounded-full bg-purple-200 ring-2 ring-transparent peer-checked:ring-white peer-checked:ring-offset-2 peer-checked:ring-offset-slate-900 transition-all"></div>
</label>
</div>
</div>
<button className="w-full bg-white text-slate-900 py-4 rounded-full text-base font-semibold hover:bg-slate-100 transition-colors shadow-lg shadow-white/10 mb-6">
                        Add to Cart
                    </button>
<div className="grid grid-cols-2 gap-4 border-t border-slate-800 pt-6">
<div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
<iconify-icon className="text-lg" icon="solar:box-linear"></iconify-icon>
                            Free shipping over $50
                        </div>
<div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
<iconify-icon className="text-lg" icon="solar:shield-check-linear"></iconify-icon>
                            1-year warranty
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Questions parents ask</h2>
</div>
<div className="space-y-4">

<details className="group bg-white rounded-2xl border border-slate-100 shadow-sm [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-slate-900 text-sm">
                        Is BunBank safe for younger kids?
                        <span className="transition group-open:rotate-180">
<iconify-icon className="text-lg text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-600 font-medium leading-relaxed">
                        Absolutely. BunBank is made from durable, non-toxic, child-safe materials. The coin slot is designed to prevent small fingers from getting stuck, and the electronic components are securely sealed.
                    </div>
</details>

<details className="group bg-white rounded-2xl border border-slate-100 shadow-sm [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-slate-900 text-sm">
                        Does it require a subscription?
                        <span className="transition group-open:rotate-180">
<iconify-icon className="text-lg text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-600 font-medium leading-relaxed">
                        The core app and basic AI features are completely free for life. We offer an optional "BunBank Plus" subscription for parents who want advanced financial literacy curriculums and extended family linking, but it's not required to enjoy the main features.
                    </div>
</details>

<details className="group bg-white rounded-2xl border border-slate-100 shadow-sm [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-slate-900 text-sm">
                        How does it know what was saved?
                        <span className="transition group-open:rotate-180">
<iconify-icon className="text-lg text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-600 font-medium leading-relaxed">
                        BunBank uses a smart optical sensor in the slot to accurately recognize standard US coins. For bills or digital allowances, parents can easily log the amounts in the companion app, which instantly syncs with the bunny's balance.
                    </div>
</details>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-12">
<div className="max-w-4xl mx-auto px-6">
<div className="bg-gradient-to-br from-rose-100 via-white to-sky-100 rounded-[3rem] p-12 md:p-16 text-center border border-slate-100 shadow-lg relative overflow-hidden">

<div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full mix-blend-overlay opacity-50 -translate-y-1/2 translate-x-1/2"></div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4 relative z-10">Raise money-smart kids.</h2>
<p className="text-base text-slate-600 font-medium mb-8 max-w-lg mx-auto relative z-10">Join 10,000+ parents receiving our weekly bite-sized tips on teaching financial literacy through play.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto relative z-10">
<input className="flex-1 px-6 py-4 rounded-full border border-slate-200 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 text-sm transition-all" placeholder="Parent's email address" required="" type="email"/>
<button className="bg-slate-900 text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-slate-800 transition-colors whitespace-nowrap" type="submit">
                        Subscribe
                    </button>
</form>
</div>
</div>
</section>

<footer className="bg-white py-12 border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-gradient-to-tr from-rose-200 to-sky-200 flex items-center justify-center">
<iconify-icon className="text-slate-700 text-xs" icon="solar:cat-linear"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tighter text-slate-900">BunBank</span>
</div>
<div className="flex flex-wrap justify-center gap-8 text-xs font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Shop</a>
<a className="hover:text-slate-900 transition-colors" href="#">Our Story</a>
<a className="hover:text-slate-900 transition-colors" href="#">Parenting Blog</a>
<a className="hover:text-slate-900 transition-colors" href="#">Support</a>
<a className="hover:text-slate-900 transition-colors" href="#">Privacy</a>
</div>
<div className="flex items-center gap-4">
<a className="text-slate-400 hover:text-rose-400 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:camera-linear"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-sky-400 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
</a>
</div>
</div>
<div className="text-center mt-8 text-[10px] text-slate-400 font-medium">
            © 2024 BunBank Inc. All rights reserved. Designed for magical minds.
        </div>
</footer>

    </>
  );
}
