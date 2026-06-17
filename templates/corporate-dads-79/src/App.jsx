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
      

<header className="relative w-full h-[95vh] md:h-screen flex flex-col justify-between overflow-hidden rounded-b-[2.5rem] bg-zinc-900">

<div className="absolute inset-0 z-0">
<img alt="Corporate Dad Fitness" className="w-full h-full object-cover object-center opacity-80 brightness-[0.6]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/72c678e6-ab08-4911-a2b2-4da342305985_3840w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30"></div>
</div>

<nav className="relative z-20 flex w-full items-center justify-between px-6 py-6 md:px-12">
<div className="text-xl font-medium tracking-tight text-white">
                Chris Menz
            </div>
<a className="group flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-zinc-200" href="#">
<span>Apply Now</span>
<i className="h-4 w-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</a>
</nav>

<div className="relative z-10 flex flex-1 flex-col justify-center px-6 md:px-12">
<div className="max-w-3xl">

<div className="mb-8 flex flex-wrap items-center gap-4">
<div className="flex -space-x-3">
<img alt="" className="inline-block h-10 w-10 rounded-full ring-2 ring-zinc-900 object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img alt="" className="inline-block h-10 w-10 rounded-full ring-2 ring-zinc-900 object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<img alt="" className="inline-block h-10 w-10 rounded-full ring-2 ring-zinc-900 object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-xs font-medium text-white ring-2 ring-zinc-900">+50</div>
</div>
<div className="text-sm font-normal text-zinc-300">
<span className="block text-white font-medium">Next Cohort: Oct 1st</span>
                        Join 500+ corporate dads reclaiming their health.
                    </div>
</div>

<h1 className="font-medium text-5xl md:text-7xl leading-[1.1] tracking-tight text-white mb-6">
                    Lose 12–26 lbs in<br className="hidden md:block"/> 
                    90 days without<br className="hidden md:block"/>
                    sacrificing time.
                </h1>

<p className="mb-8 max-w-xl text-lg text-zinc-300 md:text-xl font-light">
                    A proven coaching system built specifically for high-performing corporate dads who want sustainable fat loss and elite energy levels.
                </p>

<div className="flex items-center gap-6">
<a className="group flex items-center gap-2 text-sm font-medium text-white underline decoration-zinc-500 underline-offset-4 transition hover:decoration-white hover:text-zinc-200" href="#stories">
                        SEE SUCCESS STORIES
                    </a>
</div>
</div>
</div>

<div className="relative z-20 flex w-full flex-col-reverse items-center justify-between gap-6 px-6 py-8 md:flex-row md:px-12">

<div className="hidden md:block md:w-1/3">

<span className="text-xs text-zinc-500 uppercase tracking-widest">Est. 2024</span>
</div>

<div className="flex md:w-1/3 justify-center">
<button className="flex items-center gap-3 rounded-full bg-zinc-100 px-5 py-2 pr-2 text-sm font-medium text-zinc-900 shadow-xl transition hover:bg-white">
<span className="pl-1">MENU</span>
<span className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 text-white">
<i className="h-4 w-4" data-lucide="menu"></i>
</span>
</button>
</div>

<div className="w-full md:w-1/3 text-center md:text-right">
<p className="text-sm md:text-base text-zinc-400 font-normal leading-relaxed max-w-xs ml-auto">
                    Personalized training, nutrition guidance, and results-driven programs designed for your schedule.
                </p>
</div>
</div>
</header>

<section className="bg-zinc-950 px-6 py-24 md:py-32">
<div className="mx-auto max-w-4xl text-center">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-tight">
                At Chris Menz Coaching, we believe fitness is more than workouts. It's about <span className="text-zinc-500">building a lifestyle that fuels your business and family.</span>
</h2>
</div>
</section>

<section className="bg-zinc-950 px-6 pb-24">
<div className="mx-auto max-w-7xl">
<div className="mb-12 flex items-end justify-between border-b border-zinc-800 pb-6">
<h3 className="text-xl font-medium tracking-tight text-white">The System</h3>
<span className="text-sm text-zinc-500">01 — 03</span>
</div>
<div className="grid gap-8 md:grid-cols-3">

<div className="group relative overflow-hidden rounded-2xl bg-zinc-900/50 p-8 transition hover:bg-zinc-900">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800 text-white group-hover:bg-white group-hover:text-black transition-colors">
<i className="h-6 w-6" data-lucide="activity"></i>
</div>
<h4 className="mb-3 text-2xl font-medium text-white">Metabolic Reset</h4>
<p className="text-lg text-zinc-400 font-light leading-relaxed">
                        Optimize your hormones and metabolism specifically for men over 35. Burn fat while you sleep without starvation diets.
                    </p>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-zinc-900/50 p-8 transition hover:bg-zinc-900">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800 text-white group-hover:bg-white group-hover:text-black transition-colors">
<i className="h-6 w-6" data-lucide="clock"></i>
</div>
<h4 className="mb-3 text-2xl font-medium text-white">Time-Efficient Training</h4>
<p className="text-lg text-zinc-400 font-light leading-relaxed">
                        3-4 workouts per week, 45 minutes max. Designed for the busy executive schedule. Gym or home options available.
                    </p>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-zinc-900/50 p-8 transition hover:bg-zinc-900">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800 text-white group-hover:bg-white group-hover:text-black transition-colors">
<i className="h-6 w-6" data-lucide="zap"></i>
</div>
<h4 className="mb-3 text-2xl font-medium text-white">Elite Energy Protocol</h4>
<p className="text-lg text-zinc-400 font-light leading-relaxed">
                        Eliminate afternoon crashes and brain fog. Unlock sustained focus for high-stakes meetings and family time.
                    </p>
</div>
</div>
</div>
</section>

<section className="relative overflow-hidden bg-zinc-900 py-24 px-6" id="stories">
<div className="absolute inset-0 opacity-20">
<img alt="Background" className="h-full w-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-900/90 to-zinc-900"></div>
<div className="relative z-10 mx-auto max-w-7xl">
<div className="mb-16 md:w-1/2">
<h3 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">Real Dads. Real Results.</h3>
<p className="text-xl text-zinc-400 font-light">Join the community of high-performers who stopped making excuses and started making progress.</p>
</div>
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

<div className="glass-panel rounded-xl p-8">
<div className="mb-6 flex items-center gap-4">
<img alt="Client" className="h-12 w-12 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div>
<div className="text-lg font-medium text-white">Mark D.</div>
<div className="text-sm text-zinc-400">CEO, Tech Sector</div>
</div>
</div>
<p className="text-lg text-zinc-300 font-light">"Down 22 lbs in 10 weeks. The best part? I didn't have to give up client dinners or weekend time with my kids. Chris understands the corporate lifestyle."</p>
</div>

<div className="glass-panel rounded-xl p-8">
<div className="mb-6 flex items-center gap-4">
<img alt="Client" className="h-12 w-12 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div>
<div className="text-lg font-medium text-white">Jason R.</div>
<div className="text-sm text-zinc-400">VP of Sales</div>
</div>
</div>
<p className="text-lg text-zinc-300 font-light">"My energy levels used to crash at 2 PM. Now I'm powered up all day. The workouts fit perfectly into my morning routine before the house wakes up."</p>
</div>

<div className="glass-panel rounded-xl p-8 md:hidden lg:block">
<div className="mb-6 flex items-center gap-4">
<img alt="Client" className="h-12 w-12 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div>
<div className="text-lg font-medium text-white">David L.</div>
<div className="text-sm text-zinc-400">Financial Director</div>
</div>
</div>
<p className="text-lg text-zinc-300 font-light">"I was skeptical about online coaching, but Chris's accountability is unmatched. It feels like he's right there in the gym with you. Best investment I've made."</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 text-center">
<div className="mx-auto max-w-3xl">
<h2 className="mb-6 text-4xl md:text-5xl font-medium tracking-tight text-white">Ready to reclaim your edge?</h2>
<p className="mb-10 text-xl text-zinc-400 font-light">Apply for a free strategy call to see if you qualify for the program.</p>
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-medium text-black transition hover:bg-zinc-200" href="#">
                Apply for Free Strategy Call
                <i className="h-5 w-5" data-lucide="arrow-right"></i>
</a>
</div>
</section>

<footer className="border-t border-zinc-900 bg-zinc-950 py-12 px-6">
<div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
<div className="text-lg font-medium text-white">Chris Menz</div>
<div className="flex gap-8 text-sm text-zinc-500">
<a className="hover:text-white transition" href="#">Instagram</a>
<a className="hover:text-white transition" href="#">LinkedIn</a>
<a className="hover:text-white transition" href="#">Contact</a>
</div>
<div className="text-sm text-zinc-600">
                © 2024 Lifestyle Transformations.
            </div>
</div>
</footer>


    </>
  );
}
