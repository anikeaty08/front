import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    document.getElementById("year").textContent = new Date().getFullYear();
    lucide.createIcons();

    // Re-use fade/slide observers
    document.querySelectorAll(".animate-fade-in").forEach((el, idx) => {
      el.style.opacity = 0;
      el.style.transform = 'translateY(16px)';
      el.style.transition = 'opacity .6s ease '+(idx*0.1)+'s, transform .6s ease '+(idx*0.1)+'s';
      const obs = new IntersectionObserver(([e]) => {
        if(e.isIntersecting){ el.style.opacity=1; el.style.transform='translateY(0)'; obs.unobserve(el);}
      },{threshold:.2});
      obs.observe(el);
    });
    document.querySelectorAll(".animate-slide-in-right").forEach((el, idx) => {
      el.style.opacity = 0;
      el.style.transform = 'translateX(32px)';
      el.style.transition='opacity .6s ease '+(idx*0.1)+'s, transform .6s ease '+(idx*0.1)+'s';
      const obs=new IntersectionObserver(([e])=>{if(e.isIntersecting){el.style.opacity=1;el.style.transform='translateX(0)';obs.unobserve(el);}},{threshold:.2});
      obs.observe(el);
    });

    // Activity chart
    new Chart(document.getElementById('activityChart').getContext('2d'), {
      type:'bar',
      data:{
        labels:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
        datasets:[{
          data:[8,12,9,14,11,22,18],
          backgroundColor:'rgba(16,185,129,.3)',
          borderColor:'#10B981',
          borderWidth:2,
          borderRadius:6
        }]
      },
      options:{
        responsive:true,
        maintainAspectRatio:false,
        plugins:{legend:{display:false}},
        scales:{
          x:{ticks:{color:'#94a3b8'},grid:{display:false}},
          y:{ticks:{color:'#94a3b8'},grid:{color:'rgba(148,163,184,.1)'}}
        }
      }
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/50">
<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
<a className="text-xl font-semibold tracking-tight text-emerald-400" href="#">SC</a>
<nav className="hidden items-center gap-8 md:flex">
<a className="hover:text-emerald-400 transition" href="#communities">Communities</a>
<a className="hover:text-emerald-400 transition" href="#features">Benefits</a>
<a className="hover:text-emerald-400 transition" href="#pricing">Pricing</a>
<a className="hover:text-emerald-400 transition" href="#faq">FAQ</a>
</nav>
<div className="flex items-center gap-3">
<button className="rounded-md border border-slate-700 px-4 py-2 text-sm font-medium hover:border-emerald-400 hover:text-emerald-300 transition">Sign in</button>
<button className="hidden rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-black hover:bg-emerald-400 md:block transition">Join a Circle</button>
</div>
</div>
</header>

<section className="relative overflow-hidden">
<div className="absolute inset-0 -z-10">
<img alt="" className="h-full w-full object-cover opacity-20" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-transparent"></div>
</div>
<div className="mx-auto flex max-w-7xl flex-col px-4 py-20 lg:flex-row lg:items-center lg:py-32">

<div className="max-w-xl space-y-6">
<h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl animate-fade-in">
          Micro-Communities for <span className="text-emerald-400">Maximum Play</span>
</h1>
<p className="text-slate-400 animate-fade-in" style={{animationDelay: '.15s'}}>
          Discover local sports circles that match your skill level, schedule, and goals—then get outside, level-up together, and celebrate every win in real life.
        </p>
<div className="flex flex-col gap-4 sm:flex-row animate-fade-in" style={{animationDelay: '.3s'}}>
<button className="rounded-md bg-emerald-500 px-6 py-3 text-base font-semibold text-black hover:bg-emerald-400 transition">Find My Circle</button>
<button className="rounded-md border border-slate-700 px-6 py-3 text-base font-medium hover:border-emerald-400 hover:text-emerald-300 transition">How It Works</button>
</div>
<div className="mt-8 flex items-center gap-2 text-xs text-slate-500 animate-fade-in" style={{animationDelay: '.45s'}}>
<i className="h-4 w-4 stroke-[1.5]" data-lucide="map-pin"></i>
<span>Thousands of circles worldwide</span>
</div>
</div>

<div className="mt-14 w-full lg:mt-0 lg:ml-auto lg:max-w-sm animate-slide-in-right">
<div className="rounded-xl border border-slate-800/80 bg-gradient-to-b from-white/5 to-white/0 p-6 backdrop-blur">
<h3 className="mb-4 text-lg font-medium text-slate-200">Weekly Community Activity</h3>
<div className="relative h-52">
<canvas id="activityChart"></canvas>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 mt-28" id="communities">
<h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">Browse Nearby Circles</h2>
<p className="mx-auto mt-4 max-w-2xl text-center text-slate-400">Hand-curated micro-communities built around your favorite sports, parks and playing styles.</p>
<div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

<a className="group relative overflow-hidden rounded-xl border border-slate-800 bg-gradient-to-b from-white/5 to-white/0 transition hover:border-emerald-400/60" href="#">
<img alt="" className="h-40 w-full object-cover transition duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="p-6">
<h3 className="mb-1 text-lg font-medium">Morning Basketball Crew</h3>
<p className="text-sm text-slate-400">5×5 pick-ups at Central Park court, Tues &amp; Thurs.</p>
<span className="mt-4 inline-flex items-center gap-1 text-xs text-emerald-400">
<i className="h-3.5 w-3.5 stroke-[1.5]" data-lucide="users"></i> 32 members
          </span>
</div>
</a>
<a className="group relative overflow-hidden rounded-xl border border-slate-800 bg-gradient-to-b from-white/5 to-white/0 transition hover:border-emerald-400/60" href="#">
<img alt="" className="h-40 w-full object-cover transition duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&amp;fit=crop&amp;w=800&amp;q=60"/>
<div className="p-6">
<h3 className="mb-1 text-lg font-medium">Weekend Tennis Doubles</h3>
<p className="text-sm text-slate-400">Rotating partners, rankings &amp; drills every Sat.</p>
<span className="mt-4 inline-flex items-center gap-1 text-xs text-emerald-400">
<i className="h-3.5 w-3.5 stroke-[1.5]" data-lucide="users"></i> 18 members
          </span>
</div>
</a>
<a className="group relative overflow-hidden rounded-xl border border-slate-800 bg-gradient-to-b from-white/5 to-white/0 transition hover:border-emerald-400/60" href="#">
<img alt="" className="h-40 w-full object-cover transition duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="p-6">
<h3 className="mb-1 text-lg font-medium">Trail-Running Pack</h3>
<p className="text-sm text-slate-400">Sunrise runs &amp; post-run coffee, Sun &amp; Wed.</p>
<span className="mt-4 inline-flex items-center gap-1 text-xs text-emerald-400">
<i className="h-3.5 w-3.5 stroke-[1.5]" data-lucide="users"></i> 44 members
          </span>
</div>
</a>
</div>
</section>

<div className="mx-auto max-w-7xl px-4">
<div className="my-20 h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
</div>

<section className="mx-auto max-w-7xl px-4" id="features">
<h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">Why Micro-Communities?</h2>
<p className="mx-auto mt-4 max-w-2xl text-center text-slate-400">Small, focused groups make it easier to stay motivated, learn faster and form real-life friendships.</p>
<div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
<div className="group rounded-xl border border-slate-800 bg-gradient-to-b from-white/5 to-white/0 p-6 transition hover:border-emerald-400/60">
<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-emerald-500/10 text-emerald-400">
<i className="h-5 w-5 stroke-[1.5]" data-lucide="target"></i>
</div>
<h3 className="mb-2 text-lg font-medium">Personalized Goals</h3>
<p className="text-slate-400">Circles tailor drills and challenges around your current skill level.</p>
</div>
<div className="group rounded-xl border border-slate-800 bg-gradient-to-b from-white/5 to-white/0 p-6 transition hover:border-emerald-400/60">
<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-emerald-500/10 text-emerald-400">
<i className="h-5 w-5 stroke-[1.5]" data-lucide="handshake"></i>
</div>
<h3 className="mb-2 text-lg font-medium">Real Connections</h3>
<p className="text-slate-400">Meet teammates who share your schedule, city, and passion.</p>
</div>
<div className="group rounded-xl border border-slate-800 bg-gradient-to-b from-white/5 to-white/0 p-6 transition hover:border-emerald-400/60">
<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-emerald-500/10 text-emerald-400">
<i className="h-5 w-5 stroke-[1.5]" data-lucide="trophy"></i>
</div>
<h3 className="mb-2 text-lg font-medium">Friendly Competition</h3>
<p className="text-slate-400">Weekly leaderboards keep everyone motivated without the stress.</p>
</div>
<div className="group rounded-xl border border-slate-800 bg-gradient-to-b from-white/5 to-white/0 p-6 transition hover:border-emerald-400/60">
<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-emerald-500/10 text-emerald-400">
<i className="h-5 w-5 stroke-[1.5]" data-lucide="clock"></i>
</div>
<h3 className="mb-2 text-lg font-medium">Flexible Scheduling</h3>
<p className="text-slate-400">Pick sessions that align with work, school or family commitments.</p>
</div>
<div className="group rounded-xl border border-slate-800 bg-gradient-to-b from-white/5 to-white/0 p-6 transition hover:border-emerald-400/60">
<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-emerald-500/10 text-emerald-400">
<i className="h-5 w-5 stroke-[1.5]" data-lucide="activity"></i>
</div>
<h3 className="mb-2 text-lg font-medium">Progress Tracking</h3>
<p className="text-slate-400">Integrated stat-tracking &amp; drills so you watch yourself improve.</p>
</div>
<div className="group rounded-xl border border-slate-800 bg-gradient-to-b from-white/5 to-white/0 p-6 transition hover:border-emerald-400/60">
<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-emerald-500/10 text-emerald-400">
<i className="h-5 w-5 stroke-[1.5]" data-lucide="message-circle"></i>
</div>
<h3 className="mb-2 text-lg font-medium">Circle Chat</h3>
<p className="text-slate-400">Plan matches, share tips and celebrate milestones together.</p>
</div>
</div>
</section>

<section className="mx-auto mt-28 max-w-7xl px-4">
<h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">3 Steps to Hit the Court</h2>
<div className="relative mt-16 flex flex-col gap-16 md:flex-row md:gap-0">
<div className="absolute inset-0 flex items-center justify-center md:justify-start">
<span className="h-full w-px bg-slate-700 md:h-px md:w-full"></span>
</div>
<div className="relative flex flex-col items-center md:w-1/3 md:flex-row md:items-start">
<div className="flex h-12 w-12 items-center justify-center rounded-full border border-emerald-400 bg-black/40 backdrop-blur">
<span className="text-lg font-semibold text-emerald-400">1</span>
</div>
<div className="mt-4 md:ml-6 md:mt-0">
<h3 className="text-lg font-medium">Create Your Profile</h3>
<p className="mt-1 text-slate-400">Tell us your sport, level &amp; availability.</p>
</div>
</div>
<div className="relative flex flex-col items-center md:w-1/3 md:flex-row md:items-start">
<div className="flex h-12 w-12 items-center justify-center rounded-full border border-emerald-400 bg-black/40 backdrop-blur">
<span className="text-lg font-semibold text-emerald-400">2</span>
</div>
<div className="mt-4 md:ml-6 md:mt-0">
<h3 className="text-lg font-medium">Join a Circle</h3>
<p className="mt-1 text-slate-400">Request invite or accept one from friends.</p>
</div>
</div>
<div className="relative flex flex-col items-center md:w-1/3 md:flex-row md:items-start">
<div className="flex h-12 w-12 items-center justify-center rounded-full border border-emerald-400 bg-black/40 backdrop-blur">
<span className="text-lg font-semibold text-emerald-400">3</span>
</div>
<div className="mt-4 md:ml-6 md:mt-0">
<h3 className="text-lg font-medium">Play &amp; Progress</h3>
<p className="mt-1 text-slate-400">Track stats, set challenges, share victories.</p>
</div>
</div>
</div>
</section>

<section className="mx-auto mt-28 max-w-7xl px-4" id="pricing">
<h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">Simple Pricing</h2>
<p className="mx-auto mt-4 max-w-xl text-center text-slate-400">Most circles are free—upgrade for premium stats and coaching tools.</p>
<div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">


</div>
</section>



<section className="mx-auto mt-28 max-w-3xl px-4" id="faq">
<h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">Frequently Asked</h2>
<div className="mt-10 space-y-4">
<details className="group rounded-lg border border-slate-800 bg-white/5 p-6 transition">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="font-medium text-slate-200">How do I find circles near me?</span>
<i className="h-5 w-5 stroke-[1.5] transition group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-4 text-slate-400">Enable location or enter your city; we’ll surface the nearest active circles.</p>
</details>
<details className="group rounded-lg border border-slate-800 bg-white/5 p-6 transition">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="font-medium text-slate-200">Are all circles competitive?</span>
<i className="h-5 w-5 stroke-[1.5] transition group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-4 text-slate-400">Not at all—circles range from casual pick-up to ranked leagues. Choose what fits you.</p>
</details>
<details className="group rounded-lg border border-slate-800 bg-white/5 p-6 transition">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="font-medium text-slate-200">Can I host my own circle?</span>
<i className="h-5 w-5 stroke-[1.5] transition group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-4 text-slate-400">Absolutely—create a private or public circle in minutes and invite friends.</p>
</details>
</div>
</section>

<section className="mx-auto mt-32 max-w-7xl px-4">
<div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-emerald-500/5 via-white/5 to-white/0 p-10 text-center backdrop-blur sm:p-16">
<h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">Ready to meet your next play crew?</h2>
<p className="mx-auto mt-4 max-w-xl text-slate-400">Sign up now and join a circle before next weekend rolls around.</p>
<button className="mt-8 rounded-md bg-emerald-500 px-8 py-4 text-base font-semibold text-black hover:bg-emerald-400 transition">Find My Circle</button>
<div className="absolute -right-8 -top-8 h-44 w-44 rounded-full bg-emerald-400/10 blur-3xl"></div>
</div>
</section>

<footer className="mx-auto mt-32 max-w-7xl px-4 pb-16 pt-20" id="contact">
<div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
<div>
<a className="text-2xl font-semibold tracking-tight text-emerald-400" href="#">SC</a>
<p className="mt-2 max-w-xs text-sm text-slate-400">Micro-communities built to get you off the couch and onto the court.</p>
</div>

</div>
<div className="mt-12 flex items-center justify-between border-t border-slate-800 pt-8 text-xs text-slate-500">
<span>© <span id="year"></span> Sports Circles. All rights reserved.</span>
<div className="flex items-center gap-4">
<a className="hover:text-emerald-400 transition" href="#"><i className="h-4 w-4 stroke-[1.5]" data-lucide="twitter"></i></a>
<a className="hover:text-emerald-400 transition" href="#"><i className="h-4 w-4 stroke-[1.5]" data-lucide="instagram"></i></a>
<a className="hover:text-emerald-400 transition" href="#"><i className="h-4 w-4 stroke-[1.5]" data-lucide="dribbble"></i></a>
</div>
</div>
</footer>



    </>
  );
}
