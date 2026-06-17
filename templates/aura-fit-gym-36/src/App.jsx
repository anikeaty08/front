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
      
<header className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md">
<div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
<a className="text-lg font-semibold tracking-tighter text-white uppercase" href="#">AURA</a>
<nav className="hidden md:flex items-center gap-8 text-sm font-normal text-zinc-400">
<a className="hover:text-white transition-colors" href="#">Equipment</a>
<a className="hover:text-white transition-colors" href="#">Classes</a>
<a className="hover:text-white transition-colors" href="#">Trainers</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex text-sm font-normal text-white hover:text-zinc-300 transition-colors" href="#">Sign in</a>
<a className="inline-flex items-center justify-center rounded-md bg-white text-black px-4 py-2 text-sm font-medium hover:bg-zinc-200 transition-colors" href="#">Join Now</a>
<button className="md:hidden flex items-center justify-center text-white">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</button>
</div>
</div>
</header>
<main className="flex-1">

<section className="relative overflow-hidden pt-24 pb-32 flex flex-col items-center justify-center text-center px-4">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-zinc-800/30 rounded-full blur-[100px] pointer-events-none"></div>
<div className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-xs font-normal text-zinc-300 backdrop-blur-sm mb-8">
<span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 mr-2 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                New facility open in Downtown
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white max-w-4xl mb-6 leading-tight">
                Engineering your <br className="hidden md:block"/> peak performance.
            </h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 font-normal leading-relaxed">
                Precision equipment, data-driven personal training, and a community of high-performers. Experience fitness, refined.
            </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="inline-flex items-center justify-center rounded-md bg-white text-black px-6 py-3 text-base font-medium hover:bg-zinc-200 transition-colors gap-2" href="#">
                    Start your trial
                    <iconify-icon height="20" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center rounded-md border border-zinc-800 bg-zinc-950 px-6 py-3 text-base font-normal text-white hover:bg-zinc-900 transition-colors gap-2" href="#">
                    Explore classes
                </a>
</div>
</section>

<section className="py-24 border-t border-zinc-800/50 bg-zinc-950 relative">
<div className="container mx-auto px-4 md:px-6">
<div className="mb-16 max-w-3xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Optimized for results.</h2>
<p className="text-base text-zinc-400 font-normal">Everything you need to build strength, increase endurance, and recover faster, all in one state-of-the-art facility.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="group p-6 rounded-2xl border border-zinc-800/60 bg-zinc-900/20 hover:bg-zinc-900/50 hover:border-zinc-700 transition-all duration-300">
<div className="h-12 w-12 rounded-lg border border-zinc-800 bg-zinc-950 flex items-center justify-center mb-6 text-zinc-300 group-hover:text-white transition-colors">
<iconify-icon height="24" icon="solar:dumbbell-large-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-2">Elite Equipment</h3>
<p className="text-sm text-zinc-400 font-normal leading-relaxed">Calibrated plates, competition benches, and the latest intelligent cardio machines to track your metrics effortlessly.</p>
</div>
<div className="group p-6 rounded-2xl border border-zinc-800/60 bg-zinc-900/20 hover:bg-zinc-900/50 hover:border-zinc-700 transition-all duration-300">
<div className="h-12 w-12 rounded-lg border border-zinc-800 bg-zinc-950 flex items-center justify-center mb-6 text-zinc-300 group-hover:text-white transition-colors">
<iconify-icon height="24" icon="solar:heart-pulse-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-2">Recovery Zone</h3>
<p className="text-sm text-zinc-400 font-normal leading-relaxed">Cold plunges, infrared saunas, and percussion therapy tools to accelerate your body's natural recovery process.</p>
</div>
<div className="group p-6 rounded-2xl border border-zinc-800/60 bg-zinc-900/20 hover:bg-zinc-900/50 hover:border-zinc-700 transition-all duration-300">
<div className="h-12 w-12 rounded-lg border border-zinc-800 bg-zinc-950 flex items-center justify-center mb-6 text-zinc-300 group-hover:text-white transition-colors">
<iconify-icon height="24" icon="solar:stopwatch-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-2">24/7 Access</h3>
<p className="text-sm text-zinc-400 font-normal leading-relaxed">Train precisely on your schedule. Secure, round-the-clock facility access linked directly to your digital pass.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-zinc-800/50 bg-zinc-900/10">
<div className="container mx-auto px-4 md:px-6 flex flex-col lg:flex-row gap-16 items-start">
<div className="lg:w-1/3 lg:sticky lg:top-32">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Curated sessions.</h2>
<p className="text-base text-zinc-400 font-normal mb-8 leading-relaxed">Join specialized, small-group classes led by elite coaches. Programs are scalable for all experience levels.</p>
<a className="inline-flex items-center text-sm font-medium text-white hover:text-zinc-300 transition-colors gap-1 border-b border-zinc-700 hover:border-zinc-500 pb-1 w-max" href="#">
                        View full schedule
                        <iconify-icon height="16" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
</a>
</div>
<div className="lg:w-2/3 flex flex-col gap-4 w-full">
<div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-xl border border-zinc-800/60 bg-zinc-900/40 hover:border-zinc-600 transition-all duration-300 group cursor-pointer">
<div className="mb-4 sm:mb-0">
<div className="flex items-center gap-3 mb-2">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Strength</span>
<span className="h-1 w-1 rounded-full bg-zinc-700"></span>
<span className="text-xs font-normal text-zinc-400">45 Min</span>
</div>
<h4 className="text-lg font-medium tracking-tight text-white group-hover:text-zinc-200 transition-colors">Hypertrophy Base</h4>
</div>
<div className="flex items-center justify-between sm:justify-end gap-6 sm:gap-4 w-full sm:w-auto">
<div className="flex -space-x-2">
<div className="h-8 w-8 rounded-full bg-zinc-800 border-2 border-zinc-900 flex items-center justify-center text-xs font-medium text-zinc-300">JL</div>
<div className="h-8 w-8 rounded-full bg-zinc-800 border-2 border-zinc-900 flex items-center justify-center text-xs font-medium text-zinc-300">MS</div>
</div>
<button className="h-9 px-5 rounded-md border border-zinc-700 text-sm font-medium text-white hover:bg-zinc-800 transition-colors">Book</button>
</div>
</div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-xl border border-zinc-800/60 bg-zinc-900/40 hover:border-zinc-600 transition-all duration-300 group cursor-pointer">
<div className="mb-4 sm:mb-0">
<div className="flex items-center gap-3 mb-2">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Conditioning</span>
<span className="h-1 w-1 rounded-full bg-zinc-700"></span>
<span className="text-xs font-normal text-zinc-400">60 Min</span>
</div>
<h4 className="text-lg font-medium tracking-tight text-white group-hover:text-zinc-200 transition-colors">Engine Builder</h4>
</div>
<div className="flex items-center justify-between sm:justify-end gap-6 sm:gap-4 w-full sm:w-auto">
<div className="flex -space-x-2">
<div className="h-8 w-8 rounded-full bg-zinc-800 border-2 border-zinc-900 flex items-center justify-center text-xs font-medium text-zinc-300">AK</div>
</div>
<button className="h-9 px-5 rounded-md border border-zinc-700 text-sm font-medium text-white hover:bg-zinc-800 transition-colors">Book</button>
</div>
</div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-xl border border-zinc-800/60 bg-zinc-900/40 hover:border-zinc-600 transition-all duration-300 group cursor-pointer">
<div className="mb-4 sm:mb-0">
<div className="flex items-center gap-3 mb-2">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Mobility</span>
<span className="h-1 w-1 rounded-full bg-zinc-700"></span>
<span className="text-xs font-normal text-zinc-400">30 Min</span>
</div>
<h4 className="text-lg font-medium tracking-tight text-white group-hover:text-zinc-200 transition-colors">Active Recovery</h4>
</div>
<div className="flex items-center justify-between sm:justify-end gap-6 sm:gap-4 w-full sm:w-auto">
<div className="flex -space-x-2">
<div className="h-8 w-8 rounded-full bg-zinc-800 border-2 border-zinc-900 flex items-center justify-center text-xs font-medium text-zinc-300">TR</div>
<div className="h-8 w-8 rounded-full bg-zinc-800 border-2 border-zinc-900 flex items-center justify-center text-xs font-medium text-zinc-300">JL</div>
</div>
<button className="h-9 px-5 rounded-md border border-zinc-700 text-sm font-medium text-white hover:bg-zinc-800 transition-colors">Book</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-zinc-800/50 bg-zinc-950">
<div className="container mx-auto px-4 md:px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Transparent pricing.</h2>
<p className="text-base text-zinc-400 font-normal">No initiation fees, no hidden cancellation costs. Just straightforward access to premium fitness.</p>
<div className="mt-8 inline-flex items-center rounded-full border border-zinc-800 p-1 bg-zinc-900/50">
<button className="rounded-full bg-zinc-800 px-4 py-1.5 text-xs font-medium text-white shadow-sm transition-colors">Monthly</button>
<button className="rounded-full px-4 py-1.5 text-xs font-normal text-zinc-400 hover:text-white transition-colors">
                            Annually <span className="text-zinc-500 ml-1">-20%</span>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-8 flex flex-col hover:border-zinc-700 transition-colors">
<h3 className="text-xl font-medium tracking-tight text-white mb-2">Standard</h3>
<p className="text-sm text-zinc-400 font-normal mb-6">Essential access for independent training routines.</p>
<div className="mb-6 flex items-baseline text-white">
<span className="text-4xl font-semibold tracking-tight">$80</span>
<span className="text-sm font-normal text-zinc-500 ml-1">/mo</span>
</div>
<ul className="flex flex-col gap-4 flex-1 mb-8">
<li className="flex items-start gap-3 text-sm font-normal text-zinc-300">
<iconify-icon className="text-zinc-500 shrink-0 mt-0.5" height="20" icon="solar:check-circle-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
                                24/7 Facility Access
                            </li>
<li className="flex items-start gap-3 text-sm font-normal text-zinc-300">
<iconify-icon className="text-zinc-500 shrink-0 mt-0.5" height="20" icon="solar:check-circle-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
                                Full Equipment Floor
                            </li>
<li className="flex items-start gap-3 text-sm font-normal text-zinc-300">
<iconify-icon className="text-zinc-500 shrink-0 mt-0.5" height="20" icon="solar:check-circle-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
                                Locker Rooms &amp; Showers
                            </li>
</ul>
<button className="w-full rounded-md border border-zinc-700 bg-transparent px-4 py-2.5 text-sm font-medium text-white hover:bg-zinc-800 transition-colors">Select Standard</button>
</div>

<div className="rounded-2xl border border-zinc-600 bg-zinc-900/80 p-8 flex flex-col relative shadow-2xl shadow-zinc-900/50">
<div className="absolute top-0 right-8 -translate-y-1/2">
<span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-medium text-black">Most Popular</span>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-2">Premium</h3>
<p className="text-sm text-zinc-400 font-normal mb-6">Unrestricted access including classes and full recovery.</p>
<div className="mb-6 flex items-baseline text-white">
<span className="text-4xl font-semibold tracking-tight">$150</span>
<span className="text-sm font-normal text-zinc-500 ml-1">/mo</span>
</div>
<ul className="flex flex-col gap-4 flex-1 mb-8">
<li className="flex items-start gap-3 text-sm font-normal text-zinc-300">
<iconify-icon className="text-white shrink-0 mt-0.5" height="20" icon="solar:check-circle-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
                                Everything in Standard
                            </li>
<li className="flex items-start gap-3 text-sm font-normal text-zinc-300">
<iconify-icon className="text-white shrink-0 mt-0.5" height="20" icon="solar:check-circle-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
                                Unlimited Group Classes
                            </li>
<li className="flex items-start gap-3 text-sm font-normal text-zinc-300">
<iconify-icon className="text-white shrink-0 mt-0.5" height="20" icon="solar:check-circle-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
                                Full Recovery Zone Access
                            </li>
<li className="flex items-start gap-3 text-sm font-normal text-zinc-300">
<iconify-icon className="text-white shrink-0 mt-0.5" height="20" icon="solar:check-circle-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
                                2 Guest Passes Monthly
                            </li>
</ul>
<button className="w-full rounded-md bg-white px-4 py-2.5 text-sm font-medium text-black hover:bg-zinc-200 transition-colors">Select Premium</button>
</div>
</div>
</div>
</section>
</main>
<footer className="border-t border-zinc-800/80 bg-zinc-950 py-12">
<div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<a className="text-lg font-semibold tracking-tighter text-white uppercase" href="#">AURA</a>
<p className="text-sm font-normal text-zinc-500">© 2024 Aura Fitness. All rights reserved.</p>
<div className="flex gap-4">
<a aria-label="Location" className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon height="20" icon="solar:map-point-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
</a>
<a aria-label="Contact" className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon height="20" icon="solar:letter-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
