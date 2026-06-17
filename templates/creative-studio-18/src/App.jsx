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



      // Theme handling
      const root = document.documentElement;
      const toggle = document.getElementById('themeToggle');
      function setTheme(t) {
        if (t === 'dark') root.classList.add('dark'); else root.classList.remove('dark');
        localStorage.theme = t;
        // Toggle icon state via data attribute for group selector
        if (toggle) toggle.classList.toggle('dark', t === 'dark');
      }
      const preferred = localStorage.theme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      setTheme(preferred);
      toggle?.addEventListener('click', () => setTheme(root.classList.contains('dark') ? 'light' : 'dark'));

      // Lucide
      lucide.createIcons();

      // Chart.js
      const ctx = document.getElementById('metricsChart').getContext('2d');
      const gradient = ctx.createLinearGradient(0, 0, 0, 180);
      gradient.addColorStop(0, 'rgba(34,197,94,0.35)');
      gradient.addColorStop(1, 'rgba(34,197,94,0.02)');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          datasets: [{
            data: [12, 15, 18, 22, 28, 31, 39],
            fill: true,
            backgroundColor: gradient,
            borderColor: '#22c55e',
            borderWidth: 2,
            tension: 0.4,
            pointRadius: 2,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: { grid: { display: false }, ticks: { color: getComputedStyle(document.body).color } },
            y: { grid: { color: 'rgba(0,0,0,0.06)' }, ticks: { color: getComputedStyle(document.body).color }, beginAtZero: true }
          },
          plugins: { legend: { display: false }, tooltip: { mode: 'index', intersect: false } },
        }
      });

      // Year
      document.getElementById('year').textContent = new Date().getFullYear();
    
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
      

<div className="min-h-screen">

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-neutral-900/60 bg-white/80 dark:bg-neutral-900/70 border-b border-black/5 dark:border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="inline-flex size-9 items-center justify-center rounded-full ring-black/10 ring-1 shadow-sm">
<svg className="lucide lucide-compass text-neutral-900" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</span>
<span className="text-lg font-semibold tracking-tight">Northstar Studio</span>
</div>
<nav className="hidden md:flex items-center gap-6 text-sm font-medium">
<a className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors" href="#services">Services</a>
<a className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors" href="#work">Work</a>
<a className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors" href="#features">Features</a>
<a className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors" href="#resources">Resources</a>
</nav>
<div className="flex items-center gap-2">
<button className="group inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 px-3.5 h-9 text-sm font-medium hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-neutral-900 transition-colors dark" id="themeToggle">
<svg className="lucide lucide-moon size-4 group-[.dark]:hidden" data-lucide="moon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path></svg>
<svg className="lucide lucide-sun size-4 hidden group-[.dark]:block" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
<span className="hidden sm:inline">Theme</span>
</button>
<a className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-4 h-9 text-sm font-semibold hover:opacity-90 transition-opacity" href="#cta">
              Start Today
              <svg className="lucide lucide-arrow-right size-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</header>

<section className="relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="relative overflow-hidden rounded-3xl mt-6 bg-neutral-200 dark:bg-neutral-900 ring-1 ring-black/5 dark:ring-white/10">
<img alt="Abstract 3D canyon render" className="absolute inset-0 h-full w-full object-cover opacity-80" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="sm:p-10 md:p-16 lg:p-20 bg-center z-10 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/7e379e5b-6a90-406c-9724-db7b49a28754_1600w.webp)] bg-cover pt-6 pr-6 pb-6 pl-6 relative shadow-lg">
<div className="flex items-center gap-3">
<span className="inline-flex items-center gap-1.5 text-xs font-medium bg-white/80 dark:bg-black/40 text-neutral-700 dark:text-neutral-200 px-2.5 py-1 rounded-full ring-1 ring-black/10 dark:ring-white/10">
<svg className="lucide lucide-sparkles size-3.5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                  New: Fractional Brand Team
                </span>
</div>
<h1 className="sm:text-5xl lg:text-6xl leading-[1.05] text-4xl font-thin text-slate-950 tracking-tight max-w-3xl mt-6">
                A creative guild advancing category-defining products and stories.
              </h1>
<p className="dark:text-neutral-300 sm:mt-6 sm:text-lg text-base font-normal text-neutral-900 max-w-2xl mt-4">
                We architect brands, interfaces, and launch systems that make teams faster and messages clearer—then we scale them with motion and content.
              </p>
<div className="mt-8 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-5 h-11 text-sm font-semibold hover:opacity-90" href="#work">
                  View Work
                  <svg className="lucide lucide-play size-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</a>
<a className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/15 bg-white/70 dark:bg-black/30 backdrop-blur px-5 h-11 text-sm font-medium hover:bg-white dark:hover:bg-black" href="#contact">
                  Book a Call
                  <svg className="lucide lucide-calendar size-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</a>
</div>
</div>

<div className="absolute right-4 bottom-4 sm:right-6 sm:bottom-6">
<div className="flex items-center gap-3 rounded-2xl bg-white/85 dark:bg-neutral-950/80 p-3 ring-1 ring-black/10 dark:ring-white/10 backdrop-blur">
<img alt="Phone render" className="size-12 rounded-xl object-cover" src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium">Case: NomadPay</p>
<p className="text-xs text-neutral-600 dark:text-neutral-400">Card OS + motion system</p>
</div>
<button className="ml-1 inline-flex size-8 items-center justify-center rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900">
<svg className="lucide lucide-arrow-right size-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>

<div className="flex items-center gap-2 mt-3">
<a className="inline-flex size-8 items-center justify-center rounded-full bg-white dark:bg-neutral-900 ring-1 ring-black/10 dark:ring-white/10" href="#">
<svg className="lucide lucide-twitter size-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="inline-flex size-8 items-center justify-center rounded-full bg-white dark:bg-neutral-900 ring-1 ring-black/10 dark:ring-white/10" href="#">
<svg className="lucide lucide-linkedin size-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="inline-flex size-8 items-center justify-center rounded-full bg-white dark:bg-neutral-900 ring-1 ring-black/10 dark:ring-white/10" href="#">
<svg className="lucide lucide-github size-4" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 mt-14" id="services">
<div className="grid lg:grid-cols-3 gap-6">

<div className="lg:col-span-1">
<div className="flex items-center gap-3 text-xs font-medium text-neutral-600 dark:text-neutral-300">
<span className="inline-flex size-6 items-center justify-center rounded-full ring-1 ring-black/10 dark:ring-white/10">01</span>
              Discovery to Launch
            </div>
<h2 className="sm:text-4xl text-3xl font-thin tracking-tight mt-4">Empowering visionary teams from day zero.</h2>
<p className="sm:text-base dark:text-neutral-300 text-sm font-light text-neutral-700 mt-3">
              From narrative to interface, we craft the critical path: brand foundations, design systems, and revenue-centric experiments.
            </p>
<div className="mt-6 flex gap-3">
<a className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-4 h-10 text-sm font-semibold" href="#cta">
                Start a project
                <svg className="lucide lucide-arrow-up-right size-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
<a className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 px-4 h-10 text-sm font-medium" href="#features">
                How we work
                <svg className="lucide lucide-chevron-right size-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</div>

<article className="rounded-3xl overflow-hidden ring-1 ring-black/5 dark:ring-white/10 bg-neutral-100/70 dark:bg-neutral-900/60">
<div className="relative h-60">
<img alt="Visionary 3D form" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6349c101-35ce-4a60-9089-5c6846f43153_800w.webp)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-4 left-4 right-4 text-white">
<p className="text-xs font-medium uppercase tracking-wide/loose opacity-80">Our Vision</p>
<h3 className="text-2xl font-light tracking-tight">Beautiful, measurable outcomes</h3>
</div>
</div>
<div className="[--fx-filter:blur(2px)_liquid-glass(1.3,10)_saturate(1.25)_noise(0.5,1,0)] px-5 py-5">
<p className="dark:text-neutral-300 text-sm font-normal text-neutral-700">
                We blend research, brand narrative, and systems thinking to accelerate product-market resonance.
              </p>
<div className="mt-4 flex items-center justify-between">
<button className="inline-flex items-center gap-2 text-sm font-semibold">
                  Learn more
                  <svg className="lucide lucide-chevron-right size-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
<span className="text-3xl font-semibold text-neutral-400 dark:text-neutral-600">01</span>
</div>
</div>
</article>

<article className="rounded-3xl overflow-hidden ring-1 ring-black/5 dark:ring-white/10 bg-neutral-100/70 dark:bg-neutral-900/60">
<div className="relative h-60">
<img alt="Next-gen visual" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/13228397-4902-4381-9fa8-ed372338450d_800w.webp)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-4 left-4 right-4 text-white">
<p className="text-xs font-medium uppercase tracking-wide/loose opacity-80">Our Values</p>
<h3 className="text-2xl font-light tracking-tight">Modern craft, timeless clarity</h3>
</div>
</div>
<div className="p-5">
<p className="dark:text-neutral-300 text-sm font-normal text-neutral-700">
                We design for longevity and speed—clear interfaces, scalable tokens, and motion that informs.
              </p>
<div className="mt-4 flex items-center justify-between">
<button className="inline-flex items-center gap-2 text-sm font-semibold">
                  Learn more
                  <svg className="lucide lucide-chevron-right size-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
<span className="text-3xl font-semibold text-neutral-400 dark:text-neutral-600">02</span>
</div>
</div>
</article>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 mt-16" id="features">
<div className="rounded-3xl bg-white dark:bg-neutral-900 ring-1 ring-black/5 dark:ring-white/10 p-6 sm:p-10">
<div className="text-center max-w-3xl mx-auto">
<p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Features</p>
<h2 className="sm:text-4xl text-3xl font-thin tracking-tight mt-2">A team of designers, strategists, and technologists.</h2>
<p className="sm:text-base dark:text-neutral-300 text-sm font-light text-neutral-700 mt-3">
              We bridge narrative and functionality—brand identity, interface systems, and content engines that compound.
            </p>
</div>
<div className="mt-8 grid lg:grid-cols-3 gap-6">

<div className="lg:col-span-2">
<div className="relative overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-800 ring-1 ring-black/5 dark:ring-white/10">
<img alt="Motion teaser" className="sm:h-80 w-full h-64 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<button className="absolute inset-0 m-auto size-16 rounded-full bg-white/90 text-neutral-900 backdrop-blur flex items-center justify-center ring-1 ring-black/10 hover:scale-105 transition">
<svg className="lucide lucide-play size-6" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</button>
<span className="absolute left-4 bottom-4 inline-flex items-center gap-2 rounded-full bg-black/60 text-white px-3 py-1 text-xs font-medium">
<svg className="lucide lucide-quote size-3.5" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
                  "Can't imagine shipping without them."
                </span>
</div>
</div>

<div className="rounded-2xl ring-1 ring-black/5 dark:ring-white/10 p-5 bg-neutral-50 dark:bg-neutral-900/60">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-neutral-600 dark:text-neutral-300">Woodmetal</span>
<svg className="lucide lucide-badge-check size-4 text-emerald-500" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-2xl font-thin tracking-tight mt-2">Ryan Sato</h3>
<p className="mt-1 text-sm font-medium text-neutral-600 dark:text-neutral-300">COO, Woodmetal Robotics</p>
<p className="dark:text-neutral-300 text-sm font-light text-neutral-700 mt-3">
                "Northstar rebuilt our product story and interface in six weeks. Activation climbed 28% in the first month."
              </p>
<div className="mt-4 flex items-center gap-3">
<img alt="Ryan headshot" className="size-10 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="flex-1 h-9 rounded-full bg-neutral-200/70 dark:bg-neutral-800/80 flex items-center px-3 text-xs font-medium">
<i className="size-4 opacity-70" data-lucide="waveform"></i>
<span className="ml-2">Podcast: Designing Operations</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 mt-16" id="work">
<div className="grid lg:grid-cols-3 gap-6">
<div className="rounded-3xl p-6 ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-neutral-900">
<p className="text-sm font-medium text-neutral-600 dark:text-neutral-300">Metrics</p>
<h3 className="mt-2 text-2xl font-semibold tracking-tight">Growth at a glance</h3>
<p className="mt-2 text-sm font-medium text-neutral-700 dark:text-neutral-300">
              Launch playbooks that compound—content velocity, conversion, and retention.
            </p>
<div className="mt-4 rounded-xl bg-neutral-100 dark:bg-neutral-800 p-3">
<div className="relative h-44">
<div className="absolute inset-0">
<div className="h-full w-full">
<canvas className="" height="352" id="metricsChart" style={{display: 'block', boxSizing: 'border-box', height: '176px', width: '322.7px'}} width="645"></canvas>
</div>
</div>
</div>
</div>
<div className="mt-4 grid grid-cols-3 gap-3 text-center">
<div className="rounded-lg bg-neutral-100 dark:bg-neutral-800 p-3">
<p className="text-2xl font-semibold tracking-tight">+28%</p>
<p className="text-xs font-medium text-neutral-600 dark:text-neutral-300">Activation</p>
</div>
<div className="rounded-lg bg-neutral-100 dark:bg-neutral-800 p-3">
<p className="text-2xl font-semibold tracking-tight">3.4x</p>
<p className="text-xs font-medium text-neutral-600 dark:text-neutral-300">Velocity</p>
</div>
<div className="rounded-lg bg-neutral-100 dark:bg-neutral-800 p-3">
<p className="text-2xl font-semibold tracking-tight">92%</p>
<p className="text-xs font-medium text-neutral-600 dark:text-neutral-300">CSAT</p>
</div>
</div>
</div>

<div className="rounded-3xl overflow-hidden ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-neutral-900">
<img alt="Mountain brandscape" className="w-full h-40 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="p-6">
<h4 className="text-xl font-semibold tracking-tight">Brand Systems</h4>
<p className="mt-2 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                Strategy, identity, motion language, and content guides that scale across surfaces.
              </p>
<div className="mt-4 flex items-center gap-2 text-sm font-semibold">
<svg className="lucide lucide-layers size-4" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
                Tokenized, themeable libraries
              </div>
</div>
</div>
<div className="rounded-3xl overflow-hidden ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-neutral-900">
<img alt="Team collaborating" className="w-full h-40 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="p-6">
<h4 className="text-xl font-semibold tracking-tight">Product &amp; Web</h4>
<p className="mt-2 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                Interface design, marketing sites, and motion prototypes shipped with code-ready specs.
              </p>
<div className="mt-4 flex items-center gap-2 text-sm font-semibold">
<svg className="lucide lucide-code2 size-4" data-lucide="code2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
                Design to dev without friction
              </div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 mt-16 mb-20" id="cta">
<div className="relative overflow-hidden rounded-3xl bg-gradient-to-tr from-neutral-900 via-neutral-800 to-neutral-700 dark:from-neutral-100 dark:via-neutral-200 dark:to-neutral-300 text-white dark:text-neutral-900">
<img alt="Minimal texture" className="absolute inset-0 h-full w-full object-cover opacity-15 mix-blend-overlay" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="relative p-8 sm:p-12">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
<div>
<h3 className="text-3xl sm:text-4xl font-semibold tracking-tight">Ready to build momentum?</h3>
<p className="mt-2 text-sm sm:text-base font-medium opacity-90">Kick off with a one-week sprint: audit, narrative, and design direction.</p>
</div>
<div className="flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-full bg-white text-neutral-900 px-5 h-11 text-sm font-semibold" href="#contact">
                  Book intro call
                  <svg className="lucide lucide-phone-call size-4" data-lucide="phone-call" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 2a9 9 0 0 1 9 9"></path><path d="M13 6a5 5 0 0 1 5 5"></path><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</a>
<a className="inline-flex items-center gap-2 rounded-full bg-black/20 dark:bg-white/30 px-5 h-11 text-sm font-medium" href="#resources">
                  Download deck
                  <svg className="lucide lucide-download size-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</a>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-black/5 dark:border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
<div className="grid md:grid-cols-4 gap-8">
<div className="md:col-span-2">
<div className="flex items-center gap-3">
<span className="inline-flex size-8 items-center justify-center rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900">
<svg className="lucide lucide-compass" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</span>
<span className="font-semibold tracking-tight">Northstar Studio</span>
</div>
<p className="mt-3 text-sm font-medium text-neutral-700 dark:text-neutral-300 max-w-md">
                Independent studio partnering with product-led teams worldwide.
              </p>
</div>
<div>
<p className="text-sm font-semibold tracking-tight">Navigation</p>
<ul className="mt-3 space-y-2 text-sm font-medium">
<li><a className="hover:underline" href="#services">Services</a></li>
<li><a className="hover:underline" href="#work">Work</a></li>
<li><a className="hover:underline" href="#features">Features</a></li>
<li><a className="hover:underline" href="#pricing">Pricing</a></li>
</ul>
</div>
<div>
<p className="text-sm font-semibold tracking-tight">Contact</p>
<ul className="mt-3 space-y-2 text-sm font-medium">
<li className="flex items-center gap-2"><svg className="lucide lucide-mail size-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg> hello@northstar.build</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-map-pin size-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Remote • GMT–8 / GMT+1</li>
</ul>
<div className="mt-4 flex gap-2">
<a className="inline-flex size-9 items-center justify-center rounded-full ring-1 ring-black/10 dark:ring-white/10" href="#">
<svg className="lucide lucide-twitter size-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="inline-flex size-9 items-center justify-center rounded-full ring-1 ring-black/10 dark:ring-white/10" href="#">
<svg className="lucide lucide-linkedin size-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="inline-flex size-9 items-center justify-center rounded-full ring-1 ring-black/10 dark:ring-white/10" href="#">
<svg className="lucide lucide-dribbble size-4" data-lucide="dribbble" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path><path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path></svg>
</a>
</div>
</div>
</div>
<div className="mt-8 text-xs font-medium text-neutral-600 dark:text-neutral-400">
            © <span id="year">2025</span> Northstar Studio. All rights reserved.
          </div>
</div>
</footer>
</div>





    </>
  );
}
