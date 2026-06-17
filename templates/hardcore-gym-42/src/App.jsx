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
      

<nav className="fixed w-full z-50 bg-neutral-950/90 backdrop-blur-sm border-b border-neutral-900">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter text-white uppercase flex items-center gap-2" href="#">
<i className="w-6 h-6 text-red-600" data-lucide="dumbbell"></i>
                IRONFORGE
            </a>
<div className="hidden md:flex gap-8 text-xs font-medium tracking-widest uppercase text-neutral-400">
<a className="hover:text-red-500 transition-colors" href="#essence">About</a>
<a className="hover:text-red-500 transition-colors" href="#infrastructure">Infrastructure</a>
<a className="hover:text-red-500 transition-colors" href="#methodology">Method</a>
<a className="hover:text-red-500 transition-colors" href="#plans">Plans</a>
</div>
<a className="hidden md:block bg-white text-black px-6 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-neutral-200 transition-colors rounded-none" href="#plans">
                Start Now
            </a>

<button className="md:hidden text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<section className="relative h-screen flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Hardcore Training" className="w-full h-full object-cover opacity-40 grayscale" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent"></div>

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 border border-neutral-800 bg-neutral-900/50 mb-8 backdrop-blur-sm">
<span className="w-2 h-2 bg-red-600"></span>
<span className="text-xs uppercase tracking-widest text-neutral-300 font-medium">Forging Elite Strength Since 2014</span>
</div>
<h1 className="text-5xl md:text-8xl font-semibold uppercase tracking-tighter text-white mb-6 leading-none">
                Forge Your <br/> <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-600">Legacy</span>
</h1>
<p className="text-neutral-400 text-sm md:text-lg max-w-xl mx-auto mb-10 font-light leading-relaxed">
                Raw strength. Unmatched discipline. The training ground for those who refuse mediocrity. Enter the void and build yourself anew.
            </p>
<div className="flex flex-col md:flex-row gap-4 justify-center items-center">
<a className="w-full md:w-auto bg-red-600 text-white px-8 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-red-700 transition-all rounded-none border border-red-600" href="#plans">
                    Join The Ranks
                </a>
<a className="w-full md:w-auto bg-transparent text-white px-8 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-neutral-900 transition-all rounded-none border border-neutral-700" href="#essence">
                    Explore Facility
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
<i className="w-6 h-6 text-neutral-500" data-lucide="chevron-down"></i>
</div>
</section>

<section className="py-24 bg-neutral-950 border-b border-neutral-900" id="essence">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-5xl font-semibold uppercase tracking-tighter text-white mb-6">
                    Discipline Over <span className="text-red-600">Motivation</span>
</h2>
<div className="space-y-6 text-neutral-400 font-light text-sm md:text-base leading-relaxed">
<p>
                        IronForge isn't a social club. It is a cathedral of iron designed for one purpose: total reconstruction of the self through physical exertion.
                    </p>
<p>
                        We strip away the amenities that distract you. No juice bars, no sauna chats. Just cold steel, heavy plates, and a community bound by the shared suffering of growth.
                    </p>
</div>
<div className="grid grid-cols-2 gap-6 mt-12">
<div className="border-l-2 border-red-600 pl-4">
<span className="block text-3xl font-semibold text-white tracking-tight">24/7</span>
<span className="text-xs uppercase tracking-widest text-neutral-500">Access Control</span>
</div>
<div className="border-l-2 border-red-600 pl-4">
<span className="block text-3xl font-semibold text-white tracking-tight">5K+</span>
<span className="text-xs uppercase tracking-widest text-neutral-500">Lbs of Plates</span>
</div>
</div>
</div>
<div className="relative h-96 w-full">
<div className="absolute top-4 -right-4 w-full h-full border border-neutral-800 z-0"></div>
<img alt="Gym Atmosphere" className="relative z-10 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="py-24 bg-black" id="infrastructure">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<span className="text-red-600 text-xs font-semibold uppercase tracking-widest mb-2 block">The Armory</span>
<h2 className="text-3xl md:text-4xl font-semibold uppercase tracking-tighter text-white">
                        Built for <br/> Heavy Lifting
                    </h2>
</div>
<p className="text-neutral-400 text-sm max-w-sm text-right md:text-left font-light">
                    Industrial grade equipment. Calibrated plates. Deadlift platforms. No frills, just function.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-1">

<div className="group relative aspect-[4/5] bg-neutral-900 overflow-hidden border border-neutral-900 hover:border-red-600 transition-colors duration-300">
<img alt="Weights" className="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 grayscale" src="https://images.unsplash.com/photo-1596357395217-80de13130e92?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent">
<h3 className="text-lg font-semibold uppercase tracking-tight text-white mb-1">Free Weights</h3>
<p className="text-xs text-neutral-400 uppercase tracking-widest">Dumbbells up to 150lbs</p>
</div>
</div>

<div className="group relative aspect-[4/5] bg-neutral-900 overflow-hidden border border-neutral-900 hover:border-red-600 transition-colors duration-300">
<img alt="Racks" className="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 grayscale" src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent">
<h3 className="text-lg font-semibold uppercase tracking-tight text-white mb-1">Power Racks</h3>
<p className="text-xs text-neutral-400 uppercase tracking-widest">Monolifts &amp; Comp Benches</p>
</div>
</div>

<div className="group relative aspect-[4/5] bg-neutral-900 overflow-hidden border border-neutral-900 hover:border-red-600 transition-colors duration-300">
<img alt="Conditioning" className="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 grayscale" src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent">
<h3 className="text-lg font-semibold uppercase tracking-tight text-white mb-1">The Yard</h3>
<p className="text-xs text-neutral-400 uppercase tracking-widest">Sleds, Tires, Yokes</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 border-t border-neutral-900" id="methodology">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
<div className="lg:col-span-4">
<h2 className="text-3xl font-semibold uppercase tracking-tighter text-white mb-6">
                        The Iron <br/> Methodology
                    </h2>
<p className="text-neutral-400 text-sm font-light leading-relaxed mb-8">
                        We blend old-school intensity with modern biomechanics. Our space is optimized for compound movements and progressive overload. No gimmicks.
                    </p>
<a className="text-red-600 uppercase text-xs font-semibold tracking-widest border-b border-red-600 pb-1 hover:text-white hover:border-white transition-colors" href="#plans">
                        View Membership Options
                    </a>
</div>
<div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-800 border border-neutral-800">

<div className="bg-neutral-950 p-8 hover:bg-neutral-900 transition-colors">
<i className="w-8 h-8 text-white mb-6" data-lucide="anchor"></i>
<h3 className="text-lg font-medium text-white mb-3 uppercase tracking-tight">Foundation First</h3>
<p className="text-neutral-500 text-sm font-light leading-relaxed">
                            Mastering the big three: Squat, Bench, Deadlift. Technique is paramount before intensity is applied.
                        </p>
</div>

<div className="bg-neutral-950 p-8 hover:bg-neutral-900 transition-colors">
<i className="w-8 h-8 text-white mb-6" data-lucide="flame"></i>
<h3 className="text-lg font-medium text-white mb-3 uppercase tracking-tight">High Intensity</h3>
<p className="text-neutral-500 text-sm font-light leading-relaxed">
                            Controlled aggression. Training to failure. Expanding the limits of your central nervous system.
                        </p>
</div>

<div className="bg-neutral-950 p-8 hover:bg-neutral-900 transition-colors">
<i className="w-8 h-8 text-white mb-6" data-lucide="users"></i>
<h3 className="text-lg font-medium text-white mb-3 uppercase tracking-tight">The Tribe</h3>
<p className="text-neutral-500 text-sm font-light leading-relaxed">
                            Iron sharpens iron. Surround yourself with individuals who push you to be stronger, not comfortable.
                        </p>
</div>

<div className="bg-neutral-950 p-8 hover:bg-neutral-900 transition-colors">
<i className="w-8 h-8 text-white mb-6" data-lucide="brain-circuit"></i>
<h3 className="text-lg font-medium text-white mb-3 uppercase tracking-tight">Mindset</h3>
<p className="text-neutral-500 text-sm font-light leading-relaxed">
                            The weight doesn't care how you feel. Discipline is doing what needs to be done, regardless of emotion.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black relative" id="plans">

<div className="absolute top-0 right-0 w-1/3 h-full bg-neutral-900/20 skew-x-12 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-4xl font-semibold uppercase tracking-tighter text-white mb-4">Membership</h2>
<p className="text-neutral-500 text-sm uppercase tracking-widest">Commit to the process</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="border border-neutral-800 bg-neutral-950 p-8 flex flex-col justify-between hover:border-neutral-600 transition-colors">
<div>
<h3 className="text-xl font-medium text-white uppercase tracking-tight mb-2">Standard</h3>
<div className="text-4xl font-semibold text-white tracking-tighter mb-6">$49<span className="text-lg text-neutral-500 font-normal">/mo</span></div>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm text-neutral-400">
<i className="w-5 h-5 text-neutral-600 shrink-0" data-lucide="check"></i>
                                Open Gym Access (6AM - 10PM)
                            </li>
<li className="flex items-start gap-3 text-sm text-neutral-400">
<i className="w-5 h-5 text-neutral-600 shrink-0" data-lucide="check"></i>
                                Locker Room Access
                            </li>
<li className="flex items-start gap-3 text-sm text-neutral-400">
<i className="w-5 h-5 text-neutral-600 shrink-0" data-lucide="check"></i>
                                Free Weights Area
                            </li>
</ul>
</div>
<a className="block w-full text-center border border-neutral-700 text-white py-4 text-xs font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition-all rounded-none" href="#">
                        Select Standard
                    </a>
</div>

<div className="border-2 border-red-600 bg-neutral-950 p-8 flex flex-col justify-between relative">
<div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-bold uppercase px-3 py-1 tracking-widest">
                        Most Popular
                    </div>
<div>
<h3 className="text-xl font-medium text-white uppercase tracking-tight mb-2">Iron Elite</h3>
<div className="text-4xl font-semibold text-white tracking-tighter mb-6">$79<span className="text-lg text-neutral-500 font-normal">/mo</span></div>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm text-white">
<i className="w-5 h-5 text-red-600 shrink-0" data-lucide="check"></i>
                                24/7 Keycard Access
                            </li>
<li className="flex items-start gap-3 text-sm text-white">
<i className="w-5 h-5 text-red-600 shrink-0" data-lucide="check"></i>
                                Guest Privileges (Weekends)
                            </li>
<li className="flex items-start gap-3 text-sm text-white">
<i className="w-5 h-5 text-red-600 shrink-0" data-lucide="check"></i>
                                Powerlifting Zone Priority
                            </li>
<li className="flex items-start gap-3 text-sm text-white">
<i className="w-5 h-5 text-red-600 shrink-0" data-lucide="check"></i>
                                1 Free PT Session / Month
                            </li>
</ul>
</div>
<a className="block w-full text-center bg-red-600 text-white py-4 text-xs font-semibold uppercase tracking-widest hover:bg-red-700 transition-all rounded-none" href="#">
                        Join Elite
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 border-t border-neutral-900">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-2xl font-semibold uppercase tracking-tighter text-white mb-12 text-center">Frequently Asked</h2>
<div className="space-y-4">

<details className="group bg-neutral-900 border border-neutral-800 open:border-red-600/50 transition-colors">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-white uppercase text-sm tracking-wide">
<span>Is there a contract?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-neutral-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-neutral-400 text-sm font-light p-6 pt-0 leading-relaxed border-t border-transparent group-open:border-neutral-800">
                        We offer both month-to-month and 12-month commitment plans. The Elite plan offers a discount for annual commitment.
                    </div>
</details>

<details className="group bg-neutral-900 border border-neutral-800 open:border-red-600/50 transition-colors">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-white uppercase text-sm tracking-wide">
<span>Do you offer personal training?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-neutral-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-neutral-400 text-sm font-light p-6 pt-0 leading-relaxed border-t border-transparent group-open:border-neutral-800">
                        Yes. Our coaches are elite powerlifters and bodybuilders, not generic fitness instructors. They focus on strength mechanics and hypertrophy.
                    </div>
</details>

<details className="group bg-neutral-900 border border-neutral-800 open:border-red-600/50 transition-colors">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-white uppercase text-sm tracking-wide">
<span>What is the dress code?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-neutral-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-neutral-400 text-sm font-light p-6 pt-0 leading-relaxed border-t border-transparent group-open:border-neutral-800">
                        Wear what you lift in. No sandals. Shirts required on benches. Chalk is encouraged.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-black border-t border-neutral-900 py-16">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="col-span-1 md:col-span-2">
<a className="text-2xl font-semibold tracking-tighter text-white uppercase flex items-center gap-2 mb-6" href="#">
<i className="w-6 h-6 text-red-600" data-lucide="dumbbell"></i>
                    IRONFORGE
                </a>
<p className="text-neutral-500 text-sm max-w-xs font-light mb-6">
                    Forging strength, discipline, and community since 2014. The premier destination for serious training.
                </p>
<div className="flex gap-4">
<a className="text-neutral-400 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
</div>
</div>
<div>
<h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-6">Location</h4>
<address className="text-neutral-500 text-sm font-light not-italic leading-relaxed">
                    892 Industrial Pkwy<br/>
                    Sector 4, Building B<br/>
                    Steel City, NY 10012
                </address>
</div>
<div>
<h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-6">Contact</h4>
<p className="text-neutral-500 text-sm font-light leading-relaxed">
                    info@ironforgegym.com<br/>
                    (555) 019-2834
                </p>
<div className="mt-4">
<span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
<span className="text-neutral-400 text-xs">Open Now</span>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-neutral-900 text-center md:text-left">
<p className="text-neutral-600 text-xs uppercase tracking-widest">© 2024 IronForge Gym. All Rights Reserved.</p>
</div>
</footer>


    </>
  );
}
