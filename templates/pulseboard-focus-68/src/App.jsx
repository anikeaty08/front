import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



          // Left iPhone could host additional interactions in a real app.
        


          // Hero-specific JavaScript placeholder; could handle CTA tracking, etc.
        


          // Right iPhone can host pricing toggle logic in a real scenario.
        


      const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -10% 0px',
      };

      const scrollEls = document.querySelectorAll('.animate-on-scroll');
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-animating');
          }
        });
      }, observerOptions);
      scrollEls.forEach((el) => io.observe(el));

      // Simple parallax for background
      const parallax = document.getElementById('parallax-bg');
      window.addEventListener('scroll', () => {
        const y = window.scrollY || window.pageYOffset;
        const offset = y * -0.06;
        parallax.style.transform = `translateY(${offset}px)`;
      });

      // Initialize lucide icons if needed
      if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.35),transparent_55%),radial-gradient(circle_at_bottom,_rgba(244,114,182,0.25),transparent_55%)]" id="parallax-bg" style={{transition: 'transform 0.15s ease-out', maskImage: 'linear-gradient(to right, transparent, black 18%, black 82%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 18%, black 82%, transparent)'}}></div>

<main className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 lg:gap-24 relative" style={{padding: '3rem 1.5rem'}}>

<section className="animate-on-scroll rounded-[3rem] bg-neutral-900/90 border border-neutral-800 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] overflow-hidden relative" id="iphone-left" style={{width: '393px', height: '852px', maxWidth: '100%', animation: 'fadeSlideInLeft 0.9s ease-out 0.1s both'}}>

<div className="absolute top-3 inset-x-0 flex justify-center pointer-events-none">
<div className="h-3 w-24 rounded-full bg-black/70"></div>
</div>

<div className="flex flex-col h-full bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">

<div className="px-6 pt-10 pb-4 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="inline-flex items-center justify-center rounded-full bg-gradient-to-tr from-sky-500 to-indigo-500 h-8 w-8 text-xs font-semibold tracking-tight">
                PB
              </span>
<div className="flex flex-col leading-tight">
<span className="text-base font-medium tracking-tight">Pulseboard</span>
<span className="text-xs text-neutral-400">Today • Focus mode</span>
</div>
</div>
<button className="h-9 w-9 flex items-center justify-center rounded-full bg-neutral-800/80 border border-neutral-700/80">
<iconify-icon className="text-neutral-300" icon="mingcute:settings-3-fill" style={{fontSize: '1.1rem'}}></iconify-icon>
</button>
</div>

<div className="px-6 pb-4 space-y-3">
<p className="text-lg font-medium tracking-tight text-neutral-50">
              See your priorities at a glance.
            </p>
<p className="text-sm text-neutral-300">
              One scrollable view for all your tasks, rituals, and upcoming goals—designed to keep you
              in flow.
            </p>
</div>

<div className="px-4 pb-6 flex-1 overflow-hidden">
<div className="h-full w-full rounded-3xl bg-neutral-900/80 border border-neutral-800/80 p-4 flex flex-col gap-3" style={{maskImage: 'linear-gradient(to bottom, black 70%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent)'}}>

<div className="rounded-2xl border border-sky-500/40 bg-gradient-to-br from-sky-950/90 via-neutral-950 to-neutral-900 p-4 flex items-center gap-3">
<div className="h-10 w-10 rounded-xl bg-sky-500/15 border border-sky-400/40 flex items-center justify-center">
<iconify-icon className="text-sky-300" icon="solar:radar-2-bold-duotone" style={{fontSize: '1.4rem'}}></iconify-icon>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-neutral-50">Deep Focus Session</p>
<p className="text-xs text-neutral-400">Next block: 42 minutes • 3 tasks</p>
</div>
<span className="text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-1 rounded-full">
                  +32%
                </span>
</div>

<div className="flex gap-3">
<div className="flex-1 rounded-2xl border border-purple-500/35 bg-gradient-to-br from-purple-900/70 to-neutral-900 p-3">
<div className="flex items-center justify-between mb-2">
<p className="text-xs text-neutral-300">Morning Ritual</p>
<span className="text-[0.7rem] text-neutral-400">06:30 • 45m</span>
</div>
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-xl bg-purple-500/15 border border-purple-400/40 flex items-center justify-center">
<iconify-icon className="text-purple-200" icon="solar:sun-2-bold-duotone" style={{fontSize: '1.1rem'}}></iconify-icon>
</div>
<p className="text-xs text-neutral-200">Plan day • Journaling • Stretch</p>
</div>
</div>
<div className="w-[34%] rounded-2xl border border-emerald-500/35 bg-gradient-to-br from-emerald-900/70 to-neutral-900 p-3 flex flex-col justify-between">
<p className="text-xs text-neutral-300 mb-1">Streak</p>
<p className="text-xl font-medium text-emerald-300 leading-none">14</p>
<p className="text-[0.7rem] text-neutral-400 mt-1">days in focus</p>
</div>
</div>

<div className="space-y-2 mt-1">
<p className="text-xs text-neutral-400 px-1">Next Focus Blocks</p>
<div className="rounded-2xl border border-neutral-800 bg-neutral-900/80 px-3 py-2 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-7 w-7 rounded-full bg-sky-500/10 border border-sky-400/40 flex items-center justify-center">
<iconify-icon className="text-sky-300" icon="mingcute:task-2-fill" style={{fontSize: '1.1rem'}}></iconify-icon>
</span>
<div>
<p className="text-xs text-neutral-100 leading-tight">Ship roadmap draft</p>
<p className="text-[0.7rem] text-neutral-500">Today • 55m</p>
</div>
</div>
<span className="text-[0.7rem] rounded-full border border-neutral-700 px-2 py-[2px] text-neutral-300">Deep</span>
</div>
<div className="rounded-2xl border border-neutral-800 bg-neutral-900/80 px-3 py-2 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-7 w-7 rounded-full bg-amber-500/10 border border-amber-400/40 flex items-center justify-center">
<iconify-icon className="text-amber-300" icon="solar:bell-bing-bold-duotone" style={{fontSize: '1.1rem'}}></iconify-icon>
</span>
<div>
<p className="text-xs text-neutral-100 leading-tight">Weekly review</p>
<p className="text-[0.7rem] text-neutral-500">Tomorrow • 35m</p>
</div>
</div>
<span className="text-[0.7rem] rounded-full border border-neutral-700 px-2 py-[2px] text-neutral-300">Light</span>
</div>
</div>
</div>
</div>

<div className="px-8 pb-6 pt-3">
<div className="flex items-center justify-between rounded-full bg-neutral-900 border border-neutral-800 px-4 py-2">
<button className="flex flex-col items-center gap-1">
<iconify-icon className="text-sky-400" icon="mingcute:home-5-fill" style={{fontSize: '1.3rem'}}></iconify-icon>
<span className="text-[0.65rem] text-sky-400">Home</span>
</button>
<button className="flex flex-col items-center gap-1">
<iconify-icon className="text-neutral-500" icon="mingcute:calendar-2-fill" style={{fontSize: '1.2rem'}}></iconify-icon>
<span className="text-[0.65rem] text-neutral-400">Calendar</span>
</button>
<button className="flex flex-col items-center gap-1">
<iconify-icon className="text-neutral-500" icon="mingcute:pie-chart-2-fill" style={{fontSize: '1.2rem'}}></iconify-icon>
<span className="text-[0.65rem] text-neutral-400">Stats</span>
</button>
<button className="flex flex-col items-center gap-1">
<iconify-icon className="text-neutral-500" icon="mingcute:user-4-fill" style={{fontSize: '1.2rem'}}></iconify-icon>
<span className="text-[0.65rem] text-neutral-400">You</span>
</button>
</div>
</div>
</div>


</section>

<section className="animate-on-scroll rounded-[3rem] bg-neutral-900/95 border border-neutral-700 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] overflow-hidden relative" id="iphone-hero" style={{width: '393px', height: '852px', maxWidth: '100%', animation: 'fadeSlideInUp 0.9s ease-out 0.2s both'}}>

<div className="absolute top-3 inset-x-0 flex justify-center pointer-events-none z-20">
<div className="h-3 w-24 rounded-full bg-black/70"></div>
</div>

<div className="absolute inset-0 -z-10 bg-[url(https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&amp;fit=crop&amp;w=1200&amp;q=80)] bg-cover bg-center" style={{maskImage: 'linear-gradient(to right, transparent, black 22%, black 78%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 22%, black 78%, transparent)'}}></div>
<div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/75 via-neutral-950/90 to-black/90"></div>

<div className="flex flex-col h-full">

<div className="px-6 pt-10 pb-6 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-tr from-sky-500 via-indigo-500 to-emerald-400 h-9 w-9 text-xs font-semibold tracking-tight border border-white/20">
                PB
              </span>
<div className="flex flex-col leading-tight">
<span className="text-lg font-medium tracking-tight">Pulseboard</span>
<span className="text-xs text-neutral-300">Rhythm for your deep work</span>
</div>
</div>
<span className="text-[0.7rem] rounded-full border border-emerald-400/50 bg-emerald-500/10 text-emerald-200 px-2 py-[2px]">
              v1.3 • iOS
            </span>
</div>

<div className="px-6 space-y-4">
<h1 className="text-3xl sm:text-4xl md:text-5xl leading-[1.05] font-light text-neutral-50 tracking-tighter animate-on-scroll" style={{animation: 'fadeSlideInUp 0.9s ease-out 0.25s both'}}>
              Turn your schedule into a calm, visual rhythm.
            </h1>
<p className="text-base sm:text-lg text-neutral-200 max-w-[32ch] animate-on-scroll" style={{animation: 'fadeSlideInUp 0.9s ease-out 0.3s both'}}>
              Pulseboard is a time-blocking app that turns tasks into visual pulses, so you can stay in
              flow without juggling lists.
            </p>

<div className="flex items-center gap-4 text-xs sm:text-sm text-neutral-300 mt-1 animate-on-scroll" style={{animation: 'fadeSlideInUp 0.9s ease-out 0.35s both'}}>
<div className="flex items-center gap-2">
<iconify-icon className="text-sky-300" icon="solar:users-group-rounded-bold-duotone" style={{fontSize: '1.2rem'}}></iconify-icon>
<span>32,417 makers planning with Pulseboard</span>
</div>
</div>
</div>

<div className="px-6 mt-6 flex flex-col gap-3 animate-on-scroll" style={{animation: 'fadeSlideInUp 0.9s ease-out 0.4s both'}}>
<div className="flex flex-col sm:flex-row gap-3">

<a className="inline-flex items-center justify-center rounded-full text-sm font-medium tracking-tight" href="#" style={{backgroundImage: 'linear-gradient(135deg, #38bdf8, #6366f1, #22c55e)', padding: '2px'}}>
<span className="flex items-center justify-center gap-2 rounded-full bg-neutral-950/95 text-neutral-50 h-11 w-full sm:w-auto px-5">
<iconify-icon className="text-sky-300" icon="mingcute:flash-fill" style={{fontSize: '1.2rem'}}></iconify-icon>
                  Start a focus day
                </span>
</a>

<a className="inline-flex items-center justify-center rounded-full text-sm font-medium tracking-tight" href="#" style={{backgroundImage: 'linear-gradient(135deg, rgba(148,163,184,0.9), rgba(30,64,175,0.9))', padding: '1.5px'}}>
<span className="flex items-center justify-center gap-2 rounded-full bg-neutral-950/90 text-neutral-100 h-11 w-full sm:w-auto px-5">
<iconify-icon className="text-indigo-300" icon="solar:play-circle-bold-duotone" style={{fontSize: '1.3rem'}}></iconify-icon>
                  Watch 90s walkthrough
                </span>
</a>
</div>
<p className="text-xs text-neutral-400">
              No account required. Try offline for 7 focus days.
            </p>
</div>

<div className="mt-6 px-4 flex-1 flex items-end justify-center animate-on-scroll" style={{animation: 'fadeSlideInUp 0.9s ease-out 0.48s both'}}>
<div className="w-full rounded-3xl border border-neutral-800/80 bg-neutral-950/80 backdrop-blur-sm p-4 flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-2xl bg-gradient-to-tr from-sky-500/30 via-indigo-500/30 to-emerald-500/30 border border-sky-300/60 flex items-center justify-center">
<iconify-icon className="text-sky-50" icon="solar:clock-circle-bold-duotone" style={{fontSize: '1.4rem'}}></iconify-icon>
</div>
<div>
<p className="text-xs text-neutral-300">Average weekly reclaimed time</p>
<p className="text-lg font-medium text-neutral-50">+5.7 hours</p>
</div>
</div>
<div className="flex flex-col items-end gap-1">
<p className="text-xs text-emerald-400">92% feel less scattered</p>
<div className="flex -space-x-2">
<div className="h-7 w-7 rounded-full border border-neutral-800 bg-[url('https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&amp;fit=crop&amp;w=120&amp;q=80')] bg-cover bg-center"></div>
<div className="h-7 w-7 rounded-full border border-neutral-800 bg-[url('https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&amp;fit=crop&amp;w=120&amp;q=80')] bg-cover bg-center"></div>
<div className="h-7 w-7 rounded-full border border-neutral-800 bg-[url('https://images.unsplash.com/photo-1525130413817-d45c1d127c42?auto=format&amp;fit=crop&amp;w=120&amp;q=80')] bg-cover bg-center"></div>
</div>
</div>
</div>
</div>

<div className="mt-4 px-4 pb-6">
<div className="rounded-full border border-neutral-800 bg-neutral-950/90 py-2 overflow-hidden" id="hero-marquee" style={{maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)'}}>
<div className="flex items-center gap-5 whitespace-nowrap will-change-transform" style={{animation: 'marquee 18s linear infinite'}}>
<div className="flex items-center gap-2 px-4">
<iconify-icon className="text-neutral-200" icon="mingcute:apple-fill" style={{fontSize: '1.1rem'}}></iconify-icon>
<span className="text-[0.7rem] text-neutral-300">Native iOS app</span>
</div>
<div className="flex items-center gap-2 px-4">
<iconify-icon className="text-emerald-300" icon="solar:shield-check-bold-duotone" style={{fontSize: '1.1rem'}}></iconify-icon>
<span className="text-[0.7rem] text-neutral-300">Private by default</span>
</div>
<div className="flex items-center gap-2 px-4">
<iconify-icon className="text-sky-300" icon="solar:cloud-sync-bold-duotone" style={{fontSize: '1.1rem'}}></iconify-icon>
<span className="text-[0.7rem] text-neutral-300">iCloud sync</span>
</div>

<div className="flex items-center gap-2 px-4">
<iconify-icon className="text-neutral-200" icon="mingcute:apple-fill" style={{fontSize: '1.1rem'}}></iconify-icon>
<span className="text-[0.7rem] text-neutral-300">Native iOS app</span>
</div>
<div className="flex items-center gap-2 px-4">
<iconify-icon className="text-emerald-300" icon="solar:shield-check-bold-duotone" style={{fontSize: '1.1rem'}}></iconify-icon>
<span className="text-[0.7rem] text-neutral-300">Private by default</span>
</div>
<div className="flex items-center gap-2 px-4">
<iconify-icon className="text-sky-300" icon="solar:cloud-sync-bold-duotone" style={{fontSize: '1.1rem'}}></iconify-icon>
<span className="text-[0.7rem] text-neutral-300">iCloud sync</span>
</div>
</div>
</div>
</div>
</div>


</section>

<section className="animate-on-scroll rounded-[3rem] bg-neutral-900/90 border border-neutral-800 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] overflow-hidden relative" id="iphone-right" style={{width: '393px', height: '852px', maxWidth: '100%', animation: 'fadeSlideInRight 0.9s ease-out 0.25s both'}}>

<div className="absolute top-3 inset-x-0 flex justify-center pointer-events-none">
<div className="h-3 w-24 rounded-full bg-black/70"></div>
</div>

<div className="flex flex-col h-full bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">

<div className="px-6 pt-10 pb-4 flex items-center justify-between">
<div className="flex flex-col leading-tight">
<span className="text-sm text-neutral-400">Plans</span>
<span className="text-lg font-medium tracking-tight">Choose your rhythm</span>
</div>
<span className="text-[0.7rem] px-2 py-[2px] rounded-full border border-neutral-700 text-neutral-300 bg-neutral-900">Monthly • Yearly</span>
</div>

<div className="px-4 space-y-4">

<div className="rounded-3xl border border-neutral-800 bg-neutral-900/90 p-4 flex flex-col gap-3 animate-on-scroll" style={{animation: 'fadeSlideInUp 0.9s ease-out 0.28s both'}}>
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-medium text-neutral-50">Solo Focus</p>
<p className="text-xs text-neutral-400">For trying Pulseboard on your own.</p>
</div>
<div className="text-right">
<p className="text-lg font-medium text-neutral-50">$0</p>
<p className="text-[0.7rem] text-neutral-400">for 7 focus days</p>
</div>
</div>
<ul className="space-y-1 text-xs text-neutral-300">
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                  Up to 12 focus blocks per day
                </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                  Offline-first planning
                </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                  Local-only data
                </li>
</ul>
</div>

<div className="rounded-3xl border border-sky-400/60 bg-gradient-to-br from-sky-950/90 via-neutral-950 to-neutral-900 p-4 flex flex-col gap-3 animate-on-scroll" style={{animation: 'fadeSlideInUp 0.9s ease-out 0.34s both'}}>
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-medium text-neutral-50">Team Pulse</p>
<p className="text-xs text-neutral-300">For teams syncing their weeks.</p>
</div>
<div className="text-right">
<p className="text-lg font-medium text-neutral-50">$6.90</p>
<p className="text-[0.7rem] text-neutral-300">per seat / mo</p>
</div>
</div>
<ul className="space-y-1 text-xs text-neutral-200">
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>
                  Shared focus calendars
                </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>
                  Weekly focus analytics
                </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>
                  Priority support within 24h
                </li>
</ul>
<button className="mt-2 inline-flex items-center justify-center rounded-full text-xs font-medium tracking-tight" style={{backgroundImage: 'linear-gradient(135deg, #38bdf8, #6366f1, #22c55e)', padding: '1.5px'}}>
<span className="flex items-center justify-center gap-2 rounded-full bg-neutral-950 text-neutral-50 h-9 w-full">
<iconify-icon className="text-emerald-300" icon="mingcute:check-2-fill" style={{fontSize: '1.1rem'}}></iconify-icon>
                  Start 14-day team trial
                </span>
</button>
</div>
</div>

<div className="mt-5 px-4 flex-1 flex items-end">
<div className="w-full rounded-3xl border border-neutral-800 bg-neutral-900/90 p-4 flex gap-3 animate-on-scroll" style={{animation: 'fadeSlideInUp 0.9s ease-out 0.42s both'}}>
<div className="h-10 w-10 rounded-full border border-neutral-700 bg-[url('https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&amp;fit=crop&amp;w=120&amp;q=80')] bg-cover bg-center"></div>
<div className="flex-1">
<p className="text-xs text-neutral-200">
                  “Pulseboard replaced three of our planning tools. The team finally looks at the same
                  week—and we hit 2 more ship cycles last quarter.”
                </p>
<p className="mt-2 text-[0.7rem] text-neutral-400">
                  Laila H • Product Lead at Northline
                </p>
</div>
</div>
</div>

<div className="px-6 pb-6 pt-3 text-[0.7rem] text-neutral-500">
            Cancel anytime. No calendars modified without confirmation.
          </div>
</div>


</section>
</main>



    </>
  );
}
