import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    document.addEventListener('DOMContentLoaded', () => {
      // Initialize open states
      document.querySelectorAll('#faq [data-accordion-item]').forEach(item => {
        const open = item.hasAttribute('data-open');
        const btn = item.querySelector('[data-accordion="faq"]');
        const a = item.querySelector('[data-qa="a"]');
        const plus = item.querySelector('[data-icon="plus"]');
        const minus = item.querySelector('[data-icon="minus"]');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        a.classList.toggle('hidden', !open);
        plus.classList.toggle('hidden', open);
        minus.classList.toggle('hidden', !open);
      });

      // Toggle behavior
      document.querySelectorAll('#faq [data-accordion="faq"]').forEach(btn => {
        btn.addEventListener('click', () => {
          const item = btn.closest('[data-accordion-item]');
          const content = item.querySelector('[data-qa="a"]');
          const plus = item.querySelector('[data-icon="plus"]');
          const minus = item.querySelector('[data-icon="minus"]');
          const expanded = btn.getAttribute('aria-expanded') === 'true';
          btn.setAttribute('aria-expanded', String(!expanded));
          content.classList.toggle('hidden');
          plus.classList.toggle('hidden');
          minus.classList.toggle('hidden');
        });
      });

      // Render icons (safe to call multiple times)
      if (window.lucide && typeof lucide.createIcons === 'function') {
        lucide.createIcons();
      }
    });
  


      // Render icons
      window.lucide && lucide.createIcons();

      // Mobile menu toggle
      const menuBtn = document.getElementById('menuBtn');
      const mobileNav = document.getElementById('mobileNav');
      if (menuBtn && mobileNav) {
        let open = false;
        menuBtn.addEventListener('click', () => {
          open = !open;
          mobileNav.classList.toggle('hidden', !open);
          menuBtn.innerHTML = open
            ? '<i data-lucide="x" class="h-5 w-5 text-white/90"></i>'
            : '<i data-lucide="menu" class="h-5 w-5 text-white/90"></i>';
          lucide.createIcons();
        });
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<header className="relative">
<div className="absolute inset-0">
<img alt="Dawn over distant mountains" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7aa3f483-3978-4416-8322-fa9964864dcb_3840w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80"></div>
</div>
<nav className="relative z-10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<a className="flex items-center gap-2" href="#">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/15 backdrop-blur">
<svg className="lucide lucide-compass h-4 w-4 text-white/90" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</span>
<span className="uppercase text-lg font-semibold tracking-tighter font-bricolage">NomadIQ</span>
</a>

<div className="hidden md:flex items-center gap-2">
<a className="px-3 py-1.5 rounded-full bg-white/5 ring-1 ring-white/15 text-sm font-medium text-white/90 hover:bg-white/10 transition font-geist" href="#">Discover</a>
<a className="px-3 py-1.5 rounded-full bg-white/5 ring-1 ring-white/15 text-sm font-medium text-white/70 hover:text-white/90 hover:bg-white/10 transition font-geist" href="#">Toolkit</a>
<a className="px-3 py-1.5 rounded-full bg-white/5 ring-1 ring-white/15 text-sm font-medium text-white/70 hover:text-white/90 hover:bg-white/10 transition font-geist" href="#">Journal</a>
<a className="px-3 py-1.5 rounded-full bg-white/5 ring-1 ring-white/15 text-sm font-medium text-white/70 hover:text-white/90 hover:bg-white/10 transition font-geist" href="#">Library</a>
</div>

<div className="hidden md:flex items-center gap-3">
<a className="text-sm font-medium text-white/80 hover:text-white transition font-geist" href="#">Sign in</a>
<a className="inline-flex items-center gap-2 rounded-full bg-white text-gray-900 px-4 py-2 text-sm font-semibold hover:bg-white/90 transition font-geist" href="#">
                
                Get started
              </a>
</div>

<button aria-label="Open menu" className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/15 hover:bg-white/15 transition" id="menuBtn">
<svg className="lucide lucide-menu h-5 w-5 text-white/90" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>

<div className="md:hidden hidden border-t border-white/10 mt-2 pt-2 pb-3" id="mobileNav">
<div className="grid gap-2">
<a className="px-3 py-2 rounded-lg bg-white/5 ring-1 ring-white/10 text-sm font-medium text-white/90 font-geist" href="#">Discover</a>
<a className="px-3 py-2 rounded-lg bg-white/5 ring-1 ring-white/10 text-sm font-medium text-white/80 font-geist" href="#">Toolkit</a>
<a className="px-3 py-2 rounded-lg bg-white/5 ring-1 ring-white/10 text-sm font-medium text-white/80 font-geist" href="#">Journal</a>
<a className="px-3 py-2 rounded-lg bg-white/5 ring-1 ring-white/10 text-sm font-medium text-white/80 font-geist" href="#">Library</a>
<div className="flex items-center justify-between gap-2 pt-2">
<a className="text-sm font-medium text-white/80 font-geist" href="#">Sign in</a>
<a className="inline-flex items-center gap-2 rounded-full bg-white text-gray-900 px-4 py-2 text-sm font-semibold hover:bg-white/90 transition font-geist" href="#">
<svg className="lucide lucide-sparkles h-4 w-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                  Get started
                </a>
</div>
</div>
</div>
</div>
</nav>

<section className="relative z-10">
<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-28 pb-24 lg:pb-40 text-center">
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/20 backdrop-blur">
<svg className="lucide lucide-route h-4 w-4 text-white/80" data-lucide="route" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="19" r="3"></circle><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path><circle cx="18" cy="5" r="3"></circle></svg>
<span className="text-xs font-medium text-white/80 font-geist">Adaptive trip planning</span>
</div>
<h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl text-white font-geist font-light tracking-tighter" style={{}}>
            Go anywhere, effortlessly.
          </h1>
<p className="mx-auto mt-4 max-w-3xl text-base sm:text-lg text-white/80 font-geist">
            NomadIQ learns your rhythm—pace, mood, curiosity—to craft routes that feel natural. Every journey is personal, seamless, and unmistakably yours.
          </p>
<div className="flex gap-3 mt-[300px] items-center justify-center">
<a className="inline-flex items-center gap-2 rounded-full bg-white text-gray-900 px-5 py-3 text-sm sm:text-base font-semibold hover:bg-white/90 transition font-geist" href="#">
              
              Plan my trip
            </a>
<a className="inline-flex items-center gap-2 sm:text-base hover:bg-white/15 ring-1 ring-white/15 transition text-sm font-medium text-white font-geist bg-white/10 rounded-full pt-3 pr-5 pb-3 pl-5 backdrop-blur" href="#">
              
              See how it works
            </a>
</div>
<div className="mt-8 flex items-center justify-center gap-2 text-xs text-white/60">
<svg className="lucide lucide-lock h-4 w-4" data-icon-replaced="true" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '12px', height: '12px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
<span className="uppercase tracking-wider font-geist">Private by design</span>
</div>
</div>
</section>
</header>

<section className="relative z-10 -mt-12 -top-20 pb-24">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4 backdrop-blur">
<div className="flex gap-3 items-start">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/15">
<svg className="lucide lucide-sparkles h-4 w-4 text-white/90" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</span>
<div className="">
<p className="text-sm font-semibold tracking-tight font-geist">AI routecraft</p>
<p className="text-xs text-white/70 font-geist">Smart suggestions that match your vibe.</p>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4 backdrop-blur">
<div className="flex gap-3 items-start">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/15">
<svg className="lucide lucide-clock h-4 w-4 text-white/90" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</span>
<div className="">
<p className="text-sm font-semibold tracking-tight font-geist">Real‑time timing</p>
<p className="text-xs text-white/70 font-geist">Shifts with weather and crowds.</p>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4 backdrop-blur">
<div className="flex gap-3 items-start">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/15">
<svg className="lucide lucide-wallet h-4 w-4 text-white/90" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
</span>
<div className="">
<p className="text-sm font-semibold tracking-tight font-geist">Budget aware</p>
<p className="text-xs text-white/70 font-geist">Optimize for value without the guesswork.</p>
</div>
</div>
</div>
<div className="ring-1 ring-white/10 bg-white/5 rounded-2xl pt-4 pr-4 pb-4 pl-4 backdrop-blur">
<div className="flex gap-3 items-start">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/15">
<svg className="lucide lucide-shield-check h-4 w-4 text-white/90" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</span>
<div className="">
<p className="text-sm font-semibold tracking-tight font-geist">Privacy first</p>
<p className="text-xs text-white/70 font-geist">Your trip data stays with you.</p>
</div>
</div>
</div>
</div>
</div>
</section><section className="sm:p-8 bg-white/5 ring-1 ring-white/10 backdrop-blur rounded-3xl mx-8 pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center gap-2 text-sm text-white/70">
<svg className="lucide lucide-route h-4 w-4" data-lucide="route" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="19" r="3"></circle><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path><circle cx="18" cy="5" r="3"></circle></svg>
<span className="font-normal font-geist">Your Journey</span>
</div>
<div className="mt-2">
<h2 className="text-[44px] sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] font-medium text-white tracking-tighter font-geist">The path unfolds.</h2>
<p className="mt-1 text-sm sm:text-base text-white/70 font-normal font-geist">Every adventure begins with a single step forward</p>
</div>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

<article className="sm:p-6 flex flex-col min-h-[420px] bg-white/10 ring-1 ring-white/15 backdrop-blur rounded-2xl pt-5 pr-5 pb-5 pl-5 justify-between">
<div className="space-y-5">
<div className="flex items-center gap-3">
<div className="h-12 w-12 rounded-full bg-white/20 ring-1 ring-white/25 flex items-center justify-center">
<svg className="lucide lucide-compass h-5 w-5 text-white/90" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div>
<h3 className="text-lg font-semibold text-white font-geist tracking-tight">01. Discover</h3>
<p className="text-xs text-white/60 font-geist uppercase tracking-wider">Exploration Phase</p>
</div>
</div>
<p className="text-sm text-white/80 font-geist">Tell us your vibe and let NomadIQ understand what makes you tick. Every journey starts with knowing yourself.</p>
<div className="flex items-center gap-2 text-white/60">
<svg className="lucide lucide-clock h-4 w-4" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-xs font-geist">2-3 minutes</span>
</div>
</div>
<div className="mt-4 h-1.5 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-white/40 rounded-full" style={{width: '25%'}}></div>
</div>
</article>

<article className="sm:p-6 flex flex-col min-h-[420px] bg-white/10 ring-1 ring-white/15 backdrop-blur rounded-2xl pt-5 pr-5 pb-5 pl-5 justify-between">
<div className="space-y-5">
<div className="flex items-center gap-3">
<div className="h-12 w-12 rounded-full bg-white/20 ring-1 ring-white/25 flex items-center justify-center">
<svg className="lucide lucide-sparkles h-5 w-5 text-white/90" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div className="">
<h3 className="text-lg font-semibold text-white font-geist tracking-tight">02. Plan</h3>
<p className="text-xs text-white/60 font-geist uppercase tracking-wider">AI Crafting</p>
</div>
</div>
<p className="text-sm text-white/80 font-geist">Watch as your perfect itinerary takes shape. Our AI weaves together places, timing, and experiences that match your rhythm.</p>
<div className="flex items-center gap-2">
<div className="flex -space-x-1">
<div className="h-6 w-6 rounded-full bg-white/20 ring-2 ring-white/20 flex items-center justify-center">
<svg className="lucide lucide-map-pin h-3 w-3 text-white/70" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div className="h-6 w-6 rounded-full bg-white/20 ring-2 ring-white/20 flex items-center justify-center">
<svg className="lucide lucide-calendar h-3 w-3 text-white/70" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</div>
<div className="h-6 w-6 rounded-full bg-white/20 ring-2 ring-white/20 flex items-center justify-center">
<svg className="lucide lucide-heart h-3 w-3 text-white/70" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</div>
</div>
<span className="text-xs text-white/60 font-geist">Personalized suggestions</span>
</div>
</div>
<div className="mt-4 h-1.5 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-white/40 rounded-full" style={{width: '50%'}}></div>
</div>
</article>

<article className="sm:p-6 flex flex-col min-h-[420px] bg-white/10 ring-1 ring-white/15 backdrop-blur rounded-2xl pt-5 pr-5 pb-5 pl-5 justify-between">
<div className="space-y-5">
<div className="flex items-center gap-3">
<div className="h-12 w-12 rounded-full bg-white/20 ring-1 ring-white/25 flex items-center justify-center">
<svg className="lucide lucide-camera h-5 w-5 text-white/90" data-lucide="camera" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></svg>
</div>
<div className="">
<h3 className="text-lg font-semibold text-white font-geist tracking-tight">03. Experience</h3>
<p className="text-xs text-white/60 font-geist uppercase tracking-wider">Live the Journey</p>
</div>
</div>
<p className="text-sm text-white/80 font-geist">Your adventure unfolds naturally. Real-time adjustments keep you flowing with the rhythm of discovery.</p>
<div className="space-y-2">
<div className="flex items-center gap-2 text-white/60">
<div className="h-2 w-2 rounded-full bg-green-400"></div>
<span className="text-xs font-geist">Real-time updates</span>
</div>
<div className="flex items-center gap-2 text-white/60">
<div className="h-2 w-2 rounded-full bg-blue-400"></div>
<span className="text-xs font-geist">Adaptive routing</span>
</div>
<div className="flex items-center gap-2 text-white/60">
<div className="h-2 w-2 rounded-full bg-purple-400"></div>
<span className="text-xs font-geist">Seamless flow</span>
</div>
</div>
</div>
<div className="mt-4 h-1.5 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-white/40 rounded-full" style={{width: '75%'}}></div>
</div>
</article>

<article className="sm:p-6 flex flex-col min-h-[420px] bg-white/10 ring-1 ring-white/15 backdrop-blur rounded-2xl pt-5 pr-5 pb-5 pl-5 justify-between">
<div className="space-y-5">
<div className="flex items-center gap-3">
<div className="h-12 w-12 rounded-full bg-white/20 ring-1 ring-white/25 flex items-center justify-center">
<svg className="lucide lucide-book-open h-5 w-5 text-white/90" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
</div>
<div className="">
<h3 className="text-lg font-semibold text-white font-geist tracking-tight">04. Reflect</h3>
<p className="text-xs text-white/60 font-geist uppercase tracking-wider">Journey's End</p>
</div>
</div>
<p className="text-sm text-white/80 font-geist">Capture memories and insights. Your experiences help NomadIQ learn and make every future journey even better.</p>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 ring-1 ring-white/15">
<svg className="lucide lucide-star h-3 w-3 text-white/70" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-xs text-white/70 font-geist">Smart learning</span>
</div>
</div>
<div className="mt-4 h-1.5 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-white/40 rounded-full" style={{width: '100%'}}></div>
</div>
</article>
</div>
<div className="mt-8 text-center">
<button className="inline-flex items-center gap-2 rounded-full bg-white text-neutral-900 px-6 py-3 text-sm font-semibold hover:bg-white/90 transition font-geist">
<svg className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
            Begin your journey
        </button>
<p className="mt-2 text-xs text-white/60 font-geist">Start exploring in under 60 seconds</p>
</div>
</section><section className="max-w-7xl sm:px-6 sm:mt-20 mr-auto mb-24 ml-auto pr-4 pl-4" id="faq">
<div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10 bg-white/5 backdrop-blur">
<div className="relative sm:p-8 pt-6 pr-6 pb-6 pl-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

<div className="md:col-span-5">
<h2 className="text-[56px] sm:text-[80px] leading-none font-semibold text-white tracking-tighter font-geist">
            Questions.</h2>
<p className="mt-3 text-sm sm:text-base text-white/80 font-geist">
            Find answers to common questions about NomadIQ, our adaptive trip planning, and how we can help craft your perfect journey.
          </p>
<a className="mt-5 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium tracking-tight text-white/90 bg-white/10 hover:bg-white/15 ring-1 ring-white/15 backdrop-blur" href="#contact">
<span className="font-geist">Get in touch</span>
<svg className="lucide lucide-message-circle w-4 h-4 stroke-1.5" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</a>
</div>

<div className="md:col-span-7">
<div className="space-y-3">

<div className="rounded-2xl ring-1 ring-white/10 bg-white/5 backdrop-blur" data-accordion-item="" data-open="true">
<button aria-expanded="true" className="w-full flex items-center justify-between gap-4 p-5 text-left" data-accordion="faq" type="button">
<span className="text-base sm:text-lg font-semibold tracking-tight text-white font-geist">How does NomadIQ learn my travel preferences?</span>
<span className="shrink-0">
<svg className="lucide lucide-plus w-5 h-5 stroke-1.5 text-white/70 hidden" data-icon="plus" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="lucide lucide-minus w-5 h-5 stroke-1.5 text-white/70" data-icon="minus" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</span>
</button>
<div className="px-5 pb-5 text-sm text-white/70 font-geist" data-qa="a">
                NomadIQ analyzes your pace, interests, and past choices to understand your travel rhythm. It starts with a brief onboarding questionnaire, then refines suggestions based on your feedback and interactions. The more you use it, the better it gets at matching your vibe.
              </div>
</div>

<div className="rounded-2xl ring-1 ring-white/10 bg-white/5 backdrop-blur" data-accordion-item="">
<button aria-expanded="false" className="w-full flex items-center justify-between gap-4 p-5 text-left" data-accordion="faq" type="button">
<span className="text-base sm:text-lg font-semibold tracking-tight text-white font-geist">Can I use NomadIQ for group trips?</span>
<span className="shrink-0">
<svg className="lucide lucide-plus w-5 h-5 stroke-1.5 text-white/70" data-icon="plus" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="lucide lucide-minus w-5 h-5 stroke-1.5 text-white/70 hidden" data-icon="minus" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</span>
</button>
<div className="px-5 pb-5 text-sm text-white/70 font-geist hidden" data-qa="a">
                Absolutely. NomadIQ can balance different group preferences and find activities that work for everyone. You can share planning responsibilities, vote on options, and create itineraries that keep the whole group happy without the usual coordination headaches.
              </div>
</div>

<div className="rounded-2xl ring-1 ring-white/10 bg-white/5 backdrop-blur" data-accordion-item="">
<button aria-expanded="false" className="w-full flex items-center justify-between gap-4 p-5 text-left" data-accordion="faq" type="button">
<span className="text-base sm:text-lg font-semibold tracking-tight text-white font-geist">What happens if my plans change during travel?</span>
<span className="shrink-0">
<svg className="lucide lucide-plus w-5 h-5 stroke-1.5 text-white/70" data-icon="plus" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="lucide lucide-minus w-5 h-5 stroke-1.5 text-white/70 hidden" data-icon="minus" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</span>
</button>
<div className="px-5 pb-5 text-sm text-white/70 font-geist hidden" data-qa="a">
                That's where NomadIQ shines. It adapts in real-time to weather changes, crowds, closures, or simply if you're feeling spontaneous. Tap "replan" and it'll instantly suggest alternatives that fit your current mood and location. Flexibility is built into every suggestion.
              </div>
</div>

<div className="rounded-2xl ring-1 ring-white/10 bg-white/5 backdrop-blur" data-accordion-item="">
<button aria-expanded="false" className="w-full flex items-center justify-between gap-4 p-5 text-left" data-accordion="faq" type="button">
<span className="text-base sm:text-lg font-semibold tracking-tight text-white font-geist">Does NomadIQ work offline?</span>
<span className="shrink-0">
<svg className="lucide lucide-plus w-5 h-5 stroke-1.5 text-white/70" data-icon="plus" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="lucide lucide-minus w-5 h-5 stroke-1.5 text-white/70 hidden" data-icon="minus" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</span>
</button>
<div className="px-5 pb-5 text-sm text-white/70 font-geist hidden" data-qa="a">
                Core features work offline once your trip is downloaded. You'll have access to your itinerary, maps, saved places, and emergency contacts. Real-time updates and new suggestions require connection, but you won't be stranded without your plans.
              </div>
</div>

<div className="rounded-2xl ring-1 ring-white/10 bg-white/5 backdrop-blur" data-accordion-item="">
<button aria-expanded="false" className="w-full flex items-center justify-between gap-4 p-5 text-left" data-accordion="faq" type="button">
<span className="text-base sm:text-lg font-semibold tracking-tight text-white font-geist">How does budget optimization work?</span>
<span className="shrink-0">
<svg className="lucide lucide-plus w-5 h-5 stroke-1.5 text-white/70" data-icon="plus" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="lucide lucide-minus w-5 h-5 stroke-1.5 text-white/70 hidden" data-icon="minus" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</span>
</button>
<div className="px-5 pb-5 text-sm text-white/70 font-geist hidden" data-qa="a">
                Set your budget range and NomadIQ finds the sweet spots—great experiences that won't break the bank. It tracks pricing patterns, suggests optimal timing for bookings, and balances splurges with savings so you get maximum value from every trip dollar.
              </div>
</div>

<div className="rounded-2xl ring-1 ring-white/10 bg-white/5 backdrop-blur" data-accordion-item="">
<button aria-expanded="false" className="w-full flex items-center justify-between gap-4 p-5 text-left" data-accordion="faq" type="button">
<span className="text-base sm:text-lg font-semibold tracking-tight text-white font-geist">What makes NomadIQ different from other trip planners?</span>
<span className="shrink-0">
<svg className="lucide lucide-plus w-5 h-5 stroke-1.5 text-white/70" data-icon="plus" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="lucide lucide-minus w-5 h-5 stroke-1.5 text-white/70 hidden" data-icon="minus" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</span>
</button>
<div className="px-5 pb-5 text-sm text-white/70 font-geist hidden" data-qa="a">
                Most planners give you lists and leave you to figure it out. NomadIQ understands your personal travel rhythm and creates experiences that feel natural to you. It's adaptive, intuitive, and privacy-focused—your data never leaves your device unless you choose to share it.
              </div>
</div>
</div>
</div>
</div>
</div>
</div>

</section><section className="w-full mr-auto mb-8 ml-auto">
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4">
<div className="relative overflow-hidden ring-1 ring-white/10 bg-white/5 rounded-3xl backdrop-blur">

<div className="relative z-10 md:p-12 lg:p-16 pt-8 pr-8 pb-8 pl-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

<div className="lg:col-span-5">
<div className="rounded-2xl bg-white/95 backdrop-blur ring-1 ring-white/20 shadow-lg p-6">
<div className="flex items-center justify-between">
<div className="">
<p className="text-[11px] text-neutral-500 font-geist uppercase tracking-wider">NomadIQ Support</p>
<h3 className="mt-1 text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 font-geist">
                    Have a question?
                  </h3>
</div>
<div className="h-9 w-9 rounded-lg bg-neutral-900 text-white flex items-center justify-center">
<svg className="lucide lucide-message-square h-4 w-4" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
</div>
</div>
<form action="#" className="mt-6 space-y-4" method="POST">
<div className="">
<label className="block text-xs text-neutral-600 font-geist" htmlFor="ct-name">Your name<span className="text-neutral-400"> *</span></label>
<input className="mt-1 w-full pl-3 pr-3 py-2.5 text-sm rounded-xl ring-1 ring-black/10 focus:ring-2 focus:ring-neutral-900 outline-none bg-white placeholder:text-neutral-400 font-geist" id="ct-name" name="name" placeholder="Jane Doe" required="" type="text"/>
</div>
<div className="">
<label className="block text-xs text-neutral-600 font-geist" htmlFor="ct-email">Email<span className="text-neutral-400"> *</span></label>
<div className="relative mt-1">
<svg className="lucide lucide-mail h-4 w-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<input className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl ring-1 ring-black/10 focus:ring-2 focus:ring-neutral-900 outline-none bg-white placeholder:text-neutral-400 font-geist" id="ct-email" name="email" placeholder="you@example.com" required="" type="email"/>
</div>
</div>
<div className="">
<label className="block text-xs text-neutral-600 font-geist" htmlFor="ct-msg">Message</label>
<textarea className="mt-1 w-full resize-y pl-3 pr-3 py-2.5 text-sm rounded-xl ring-1 ring-black/10 focus:ring-2 focus:ring-neutral-900 outline-none bg-white placeholder:text-neutral-400 font-geist" id="ct-msg" name="message" placeholder="How can we help?" rows="4"></textarea>
</div>
<button className="w-full inline-flex items-center justify-center rounded-xl bg-neutral-900 text-white px-4 py-3 text-sm font-semibold hover:bg-neutral-800 transition-colors font-geist" type="submit">
                  Send message
                  <svg className="lucide lucide-arrow-right h-4 w-4 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<p className="text-[11px] text-neutral-500 font-geist">By submitting, you agree to our Terms and Privacy Policy.</p>
</form>
</div>
</div>

<div className="lg:col-span-7">
<h2 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] font-semibold text-white tracking-tight font-geist">Let's talk.</h2>
<p className="text-base sm:text-lg max-w-2xl text-white/80 mt-4 font-geist">
              Tell us about your travel needs—support, partnerships, or bulk bookings. We reply within one business day.
            </p>
<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg bg-white/10 backdrop-blur ring-1 ring-white/15 flex items-center justify-center text-white/90">
<svg className="lucide lucide-clock-3 h-4 w-4" data-lucide="clock-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6h4"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div className="">
<p className="text-white font-semibold text-sm font-geist">Quick response</p>
<p className="text-white/70 text-xs font-geist">Most messages receive a reply in under 24h.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg bg-white/10 backdrop-blur ring-1 ring-white/15 flex items-center justify-center text-white/90">
<svg className="lucide lucide-route h-4 w-4" data-lucide="route" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="19" r="3"></circle><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path><circle cx="18" cy="5" r="3"></circle></svg>
</div>
<div className="">
<p className="text-white font-semibold text-sm font-geist">Clear next steps</p>
<p className="text-white/70 text-xs font-geist">We'll follow up with a concise plan and timeline.</p>
</div>
</div>
</div>

<div className="mt-8">
<div className="inline-flex items-center gap-3 rounded-2xl bg-white/95 backdrop-blur ring-1 ring-white/20 shadow-lg p-3">
<img alt="Team lead" className="h-12 w-12 rounded-xl object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/09f960eb-611f-430b-86b4-1d5a280d6eb8_800w.jpg"/>
<div className="min-w-0">
<p className="text-[11px] text-neutral-500 leading-none font-geist uppercase tracking-wider">Team Lead</p>
<p className="text-neutral-900 font-semibold tracking-tight truncate font-geist">Ava Kim</p>
</div>
<a className="ml-1 inline-flex items-center gap-2 rounded-xl bg-neutral-900 text-white px-3 py-2 text-xs font-semibold hover:bg-neutral-800 transition-colors font-geist" href="mailto:hello@nomadiq.com">
                  Ask directly
                  <svg className="lucide lucide-message-circle h-3.5 w-3.5" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section><footer className="max-w-7xl mr-auto ml-auto pr-6 pb-12 pl-6">
<div className="p-12 lg:p-16 border border-white/10 rounded-3xl bg-white/[0.03] backdrop-blur-2xl">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
<div className="lg:col-span-1">
<div className="flex items-center mb-6">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/15 backdrop-blur">
<svg className="h-4 w-4 text-white/90" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
</span>
<span className="ml-2 uppercase text-lg font-semibold tracking-tighter font-bricolage text-white">NomadIQ</span>
</div>
<p className="text-sm text-white/60 leading-relaxed mb-8 font-geist">
          Adaptive trip planning that learns your travel rhythm. Go anywhere, effortlessly, with journeys crafted just for you.
        </p>
<div className="flex items-center gap-4">
<a aria-label="Twitter" className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/5 bg-white/[0.03]" href="#">
<svg className="text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</a>
<a aria-label="LinkedIn" className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/5 bg-white/[0.03]" href="#">
<svg className="text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
<a aria-label="Instagram" className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/5 bg-white/[0.03]" href="#">
<svg className="text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</a>
</div>
</div>
<div className="">
<h4 className="text-sm font-medium text-white mb-6 uppercase tracking-wide font-geist">Discover</h4>
<ul className="space-y-4">
<li>
<a className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-geist" href="#">AI Trip Planning</a>
</li>
<li>
<a className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-geist" href="#">Smart Routing</a>
</li>
<li>
<a className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-geist" href="#">Budget Optimization</a>
</li>
<li>
<a className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-geist" href="#">Real-time Updates</a>
</li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-medium text-white mb-6 uppercase tracking-wide font-geist">Toolkit</h4>
<ul className="space-y-4">
<li>
<a className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-geist" href="#">Trip Builder</a>
</li>
<li>
<a className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-geist" href="#">Travel Journal</a>
</li>
<li>
<a className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-geist" href="#">Offline Maps</a>
</li>
<li>
<a className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-geist" href="#">Group Planning</a>
</li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-medium text-white mb-6 uppercase tracking-wide font-geist">Support</h4>
<ul className="space-y-4">
<li>
<a className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-geist" href="#">Help Center</a>
</li>
<li>
<a className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-geist" href="#">Contact Us</a>
</li>
<li>
<a className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-geist" href="#">Community</a>
</li>
<li>
<a className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-geist" href="#">Travel Resources</a>
</li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-12 mb-12">
<div className="max-w-2xl mx-auto text-center">
<h4 className="text-lg font-medium text-white mb-4 font-geist">Stay in the flow</h4>
<p className="text-sm text-white/60 mb-6 font-geist">Get travel insights, new features, and destination inspiration delivered to your inbox.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<input className="flex-1 max-w-md px-4 py-3 rounded-xl text-sm text-white placeholder-white/40 border border-white/10 focus:border-blue-500/30 focus:outline-none transition-all duration-300 bg-white/5 font-geist" placeholder="Enter your email address" type="email"/>
<button className="px-8 py-3 rounded-xl text-sm font-medium text-white border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 bg-blue-500/15 font-geist">Subscribe</button>
</div>
</div>
</div>
</div>
<div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex flex-wrap items-center gap-6 text-xs text-white/40">
<span className="font-geist">© 2024 NomadIQ. All rights reserved.</span>
<a className="hover:text-white/60 transition-colors duration-300 font-geist" href="#">Privacy Policy</a>
<a className="hover:text-white/60 transition-colors duration-300 font-geist" href="#">Terms of Service</a>
</div>
<div className="flex items-center gap-4 text-xs text-white/40">
<span className="flex items-center gap-2 font-geist">
<svg className="text-white/70" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
        Private by design
      </span>
<span className="flex items-center gap-2 font-geist">
<svg className="text-green-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
        100% Adaptive
      </span>
</div>
</div>
</footer>



    </>
  );
}
