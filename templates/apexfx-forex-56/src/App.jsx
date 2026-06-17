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



      // Initialize icons with stroke width 1.5
      document.addEventListener('DOMContentLoaded', function () {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        var y = document.getElementById('year');
        if (y) y.textContent = new Date().getFullYear();

        // Video poster -> iframe swap
        var poster = document.getElementById('videoPoster');
        var wrapper = document.getElementById('videoWrapper');
        if (poster && wrapper) {
          poster.addEventListener('click', function () {
            var iframe = document.createElement('iframe');
            iframe.setAttribute('title', 'Forex Education Intro');
            iframe.setAttribute('src', 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&modestbranding=1&rel=0');
            iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
            iframe.setAttribute('allowfullscreen', 'true');
            iframe.className = 'w-full aspect-video';
            wrapper.innerHTML = '';
            wrapper.appendChild(iframe);
          });
        }
      });
    
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
      

<section className="relative min-h-[88vh] flex flex-col" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1518186233392-c232efbf2373?q=80&amp', backgroundSize: 'cover', backgroundPosition: 'center'}}>
<div className="absolute inset-0 bg-neutral-950/70"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/40 to-neutral-950/95"></div>

<header className="relative z-20">
<div className="mx-auto max-w-7xl px-6 lg:px-8 py-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-emerald-400/10 ring-1 ring-emerald-400/20 flex items-center justify-center">
<span className="text-emerald-400 text-lg font-semibold tracking-tight">AF</span>
</div>
<span className="text-neutral-100 text-base font-medium tracking-tight">ApexFX</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
<a className="hover:text-neutral-100 transition-colors" href="#metrics">Metrics</a>
<a className="hover:text-neutral-100 transition-colors" href="#event">Event</a>
<a className="hover:text-neutral-100 transition-colors" href="#video">Video</a>
<a className="hover:text-neutral-100 transition-colors" href="#quote">Quote</a>
<a className="hover:text-neutral-100 transition-colors" href="#cta">Get Started</a>
</nav>
<div className="hidden md:flex items-center gap-3">
<a className="text-sm text-neutral-300 hover:text-neutral-100 transition-colors" href="#">Sign in</a>
<a className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-4 py-2.5 text-sm font-medium text-neutral-900 hover:bg-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60" href="#">
<i data-lucide="user-plus"></i>
                Open Account
              </a>
</div>
<button className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-300 hover:text-neutral-100 hover:bg-neutral-800/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60">
<i data-lucide="menu"></i>
</button>
</div>
</div>
</header>

<div className="relative z-10 flex-1">
<div className="mx-auto max-w-7xl px-6 lg:px-8 pt-10 md:pt-16 lg:pt-24">
<div className="max-w-2xl">
<span className="inline-flex items-center gap-2 rounded-full bg-neutral-900/70 ring-1 ring-white/10 px-3 py-1.5 text-xs text-neutral-300">
<i data-lucide="shield-check"></i> Regulated brokerage • Education-first
            </span>
<h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight">
              Trade Confidently. Learn Relentlessly.
            </h1>
<p className="mt-4 text-base sm:text-lg text-neutral-300">
              ApexFX combines a powerful Forex trading experience with a comprehensive academy. Master risk, refine entries, and grow sustainably.
            </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
<a className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-500 px-5 py-3 text-sm font-medium text-neutral-900 hover:bg-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60" href="#cta">
<i data-lucide="line-chart"></i>
                Start Trading
              </a>
<a className="inline-flex items-center justify-center gap-2 rounded-md bg-neutral-900/70 px-5 py-3 text-sm font-medium text-neutral-100 ring-1 ring-white/10 hover:bg-neutral-800/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60" href="#video">
<i data-lucide="play-circle"></i>
                Watch Intro Class
              </a>
</div>

<div className="mt-10 sm:mt-12">
<p className="text-xs text-neutral-400">Trusted by traders at</p>
<div className="mt-4 grid grid-cols-3 sm:grid-cols-5 gap-4 sm:gap-6 items-center">
<div className="h-8 rounded-md bg-neutral-900/60 ring-1 ring-white/10 flex items-center justify-center">
<span className="text-neutral-400 text-xs font-medium tracking-tight">NTX</span>
</div>
<div className="h-8 rounded-md bg-neutral-900/60 ring-1 ring-white/10 flex items-center justify-center">
<span className="text-neutral-400 text-xs font-medium tracking-tight">QRM</span>
</div>
<div className="h-8 rounded-md bg-neutral-900/60 ring-1 ring-white/10 flex items-center justify-center">
<span className="text-neutral-400 text-xs font-medium tracking-tight">ALP</span>
</div>
<div className="hidden sm:flex h-8 rounded-md bg-neutral-900/60 ring-1 ring-white/10 items-center justify-center">
<span className="text-neutral-400 text-xs font-medium tracking-tight">VTX</span>
</div>
<div className="hidden sm:flex h-8 rounded-md bg-neutral-900/60 ring-1 ring-white/10 items-center justify-center">
<span className="text-neutral-400 text-xs font-medium tracking-tight">HLD</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="relative z-10 mt-8">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>
</div>
</section>

<section className="relative py-14 sm:py-16" id="metrics">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="rounded-lg bg-neutral-900/60 ring-1 ring-white/10 p-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-emerald-400/10 ring-1 ring-emerald-400/20 text-emerald-400 flex items-center justify-center">
<i data-lucide="activity"></i>
</div>
<div>
<p className="text-xs text-neutral-400">Average Spread (EUR/USD)</p>
<p className="text-xl font-semibold tracking-tight">0.1–0.3 pip</p>
</div>
</div>
</div>
<div className="rounded-lg bg-neutral-900/60 ring-1 ring-white/10 p-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-emerald-400/10 ring-1 ring-emerald-400/20 text-emerald-400 flex items-center justify-center">
<i data-lucide="user-check"></i>
</div>
<div>
<p className="text-xs text-neutral-400">Traders Trained</p>
<p className="text-xl font-semibold tracking-tight">12,500+</p>
</div>
</div>
</div>
<div className="rounded-lg bg-neutral-900/60 ring-1 ring-white/10 p-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-emerald-400/10 ring-1 ring-emerald-400/20 text-emerald-400 flex items-center justify-center">
<i data-lucide="shield"></i>
</div>
<div>
<p className="text-xs text-neutral-400">Funds Segregated</p>
<p className="text-xl font-semibold tracking-tight">Tier‑1 Banks</p>
</div>
</div>
</div>
<div className="rounded-lg bg-neutral-900/60 ring-1 ring-white/10 p-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-emerald-400/10 ring-1 ring-emerald-400/20 text-emerald-400 flex items-center justify-center">
<i data-lucide="clock"></i>
</div>
<div>
<p className="text-xs text-neutral-400">Support</p>
<p className="text-xl font-semibold tracking-tight">24/5 Live Desk</p>
</div>
</div>
</div>
</div>

<div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>
</section>

<section className="relative py-14 sm:py-16" id="event">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
<div className="rounded-xl bg-neutral-900/60 ring-1 ring-white/10 p-6 sm:p-8">
<div className="flex items-center gap-2 text-emerald-400 text-sm">
<i data-lucide="calendar"></i>
<span className="font-medium">Upcoming Live Event</span>
</div>
<h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-white">Pro Forex Workshop: Risk, Timing, Execution</h2>
<p className="mt-2 text-neutral-300 text-sm">
              A 2-hour intensive covering risk models, session timing, and execution routines. Includes live chart breakdowns and Q&amp;A.
            </p>
<dl className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-neutral-800 ring-1 ring-white/10 flex items-center justify-center text-neutral-300">
<i data-lucide="clock-8"></i>
</div>
<div>
<dt className="text-neutral-400">Date &amp; Time</dt>
<dd className="font-medium">Oct 28, 7:00 PM GMT</dd>
</div>
</div>
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-neutral-800 ring-1 ring-white/10 flex items-center justify-center text-neutral-300">
<i data-lucide="globe"></i>
</div>
<div>
<dt className="text-neutral-400">Format</dt>
<dd className="font-medium">Live Webinar (Zoom)</dd>
</div>
</div>
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-neutral-800 ring-1 ring-white/10 flex items-center justify-center text-neutral-300">
<i data-lucide="graduation-cap"></i>
</div>
<div>
<dt className="text-neutral-400">Level</dt>
<dd className="font-medium">Beginner → Intermediate</dd>
</div>
</div>
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-neutral-800 ring-1 ring-white/10 flex items-center justify-center text-neutral-300">
<i data-lucide="ticket"></i>
</div>
<div>
<dt className="text-neutral-400">Seats</dt>
<dd className="font-medium">Limited — Free</dd>
</div>
</div>
</dl>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-500 px-5 py-3 text-sm font-medium text-neutral-900 hover:bg-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60" href="#">
<i data-lucide="badge-check"></i>
                Reserve My Seat
              </a>
<a className="inline-flex items-center justify-center gap-2 rounded-md bg-neutral-900/70 px-5 py-3 text-sm font-medium text-neutral-100 ring-1 ring-white/10 hover:bg-neutral-800/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60" href="#">
<i data-lucide="file-text"></i>
                View Agenda
              </a>
</div>
</div>
<div className="relative rounded-xl overflow-hidden ring-1 ring-white/10 bg-neutral-900/60">
<img alt="Traders learning during a workshop" className="h-full w-full object-cover opacity-90" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-tr from-neutral-950/60 via-transparent to-transparent"></div>
<div className="absolute bottom-4 right-4 rounded-md bg-neutral-950/80 ring-1 ring-white/10 px-3 py-2 text-xs text-neutral-300 flex items-center gap-2">
<i data-lucide="mic-2"></i> Live Q&amp;A Included
            </div>
</div>
</div>
</div>
</section>

<section className="relative py-14 sm:py-16" id="video">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="max-w-2xl">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Watch: The 3 Pillars of Consistent FX Trading</h3>
<p className="mt-2 text-neutral-300 text-sm">
            A 10‑minute primer on risk frameworks, market structure, and execution. Perfect starting point before joining the live workshop.
          </p>
</div>
<div className="mt-6">
<div className="relative rounded-xl overflow-hidden ring-1 ring-white/10 bg-neutral-900/60" id="videoWrapper">

<button className="group relative w-full overflow-hidden" id="videoPoster">
<img alt="Video poster for Forex education" className="w-full h-[220px] sm:h-[360px] object-cover opacity-90" src="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="inline-flex items-center gap-3 rounded-full bg-neutral-950/80 ring-1 ring-white/10 px-5 py-3 text-sm text-neutral-100 group-hover:bg-neutral-900/80 transition">
<i className="text-emerald-400" data-lucide="play"></i>
                  Play Intro Class
                </div>
</div>
</button>

</div>
</div>
</div>
</section>

<section className="relative py-14 sm:py-16" id="quote">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="rounded-xl bg-neutral-900/60 ring-1 ring-white/10 p-6 sm:p-10">
<div className="flex flex-col md:flex-row md:items-center gap-6">
<div className="flex-shrink-0">
<img alt="Founder portrait" className="h-16 w-16 rounded-full ring-1 ring-white/10 object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1">
<div className="text-emerald-400">
<i data-lucide="quote"></i>
</div>
<blockquote className="mt-3">
<p className="text-lg sm:text-xl font-medium tracking-tight text-white">
                  Consistency isn’t about predicting the market; it’s about managing risk with discipline and letting probabilities play out.
                </p>
</blockquote>
<div className="mt-3">
<p className="text-sm text-neutral-300 font-medium">Ava Reed</p>
<p className="text-xs text-neutral-400">Founder &amp; Head of Education, ApexFX</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-14 sm:py-16" id="cta">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="rounded-2xl ring-1 ring-white/10 bg-gradient-to-tr from-neutral-900 via-neutral-900 to-neutral-900/80 p-6 sm:p-10">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
<div className="lg:col-span-2">
<h4 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Open your account and get our FX Starter Course free</h4>
<p className="mt-2 text-neutral-300 text-sm">
                Sign up today and access the Starter Course covering risk, structure, and execution. No minimum deposit to begin learning.
              </p>
<ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
<li className="flex items-center gap-2 text-neutral-300">
<span className="h-6 w-6 rounded-md bg-emerald-400/10 ring-1 ring-emerald-400/20 text-emerald-400 flex items-center justify-center">
<i data-lucide="check"></i>
</span>
                  Raw spreads, deep liquidity
                </li>
<li className="flex items-center gap-2 text-neutral-300">
<span className="h-6 w-6 rounded-md bg-emerald-400/10 ring-1 ring-emerald-400/20 text-emerald-400 flex items-center justify-center">
<i data-lucide="check"></i>
</span>
                  Daily London/NY session recaps
                </li>
<li className="flex items-center gap-2 text-neutral-300">
<span className="h-6 w-6 rounded-md bg-emerald-400/10 ring-1 ring-emerald-400/20 text-emerald-400 flex items-center justify-center">
<i data-lucide="check"></i>
</span>
                  Segregated client funds
                </li>
<li className="flex items-center gap-2 text-neutral-300">
<span className="h-6 w-6 rounded-md bg-emerald-400/10 ring-1 ring-emerald-400/20 text-emerald-400 flex items-center justify-center">
<i data-lucide="check"></i>
</span>
                  Academy community access
                </li>
</ul>
</div>
<div className="lg:pl-6">
<form className="rounded-xl bg-neutral-950/60 ring-1 ring-white/10 p-5 space-y-4">
<div>
<label className="block text-xs text-neutral-400 mb-1">Full name</label>
<input className="w-full rounded-md bg-neutral-900 text-neutral-100 placeholder-neutral-500 text-sm px-3 py-2.5 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-400/60" placeholder="Jane Doe" type="text"/>
</div>
<div>
<label className="block text-xs text-neutral-400 mb-1">Email</label>
<input className="w-full rounded-md bg-neutral-900 text-neutral-100 placeholder-neutral-500 text-sm px-3 py-2.5 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-400/60" placeholder="jane@youremail.com" type="email"/>
</div>
<div>
<label className="block text-xs text-neutral-400 mb-1">Phone (optional)</label>
<input className="w-full rounded-md bg-neutral-900 text-neutral-100 placeholder-neutral-500 text-sm px-3 py-2.5 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-400/60" placeholder="+1 555 000 0000" type="tel"/>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-emerald-500 px-5 py-2.5 text-sm font-medium text-neutral-900 hover:bg-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60" type="submit">
<i data-lucide="arrow-right-circle"></i>
                  Create My Account
                </button>
<p className="text-[11px] text-neutral-400">
                  By continuing you agree to our Terms and acknowledge our Risk Disclosure.
                </p>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="relative border-t border-white/10">
<div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
<div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
<div>
<p className="text-sm text-neutral-300 font-medium mb-3">Product</p>
<ul className="space-y-2 text-sm text-neutral-400">
<li><a className="hover:text-neutral-100 transition-colors" href="#">Trading Platforms</a></li>
<li><a className="hover:text-neutral-100 transition-colors" href="#">Account Types</a></li>
<li><a className="hover:text-neutral-100 transition-colors" href="#">Pricing &amp; Spreads</a></li>
<li><a className="hover:text-neutral-100 transition-colors" href="#">Funding</a></li>
</ul>
</div>
<div>
<p className="text-sm text-neutral-300 font-medium mb-3">Education</p>
<ul className="space-y-2 text-sm text-neutral-400">
<li><a className="hover:text-neutral-100 transition-colors" href="#">Starter Course</a></li>
<li><a className="hover:text-neutral-100 transition-colors" href="#">Live Workshops</a></li>
<li><a className="hover:text-neutral-100 transition-colors" href="#">Strategy Library</a></li>
<li><a className="hover:text-neutral-100 transition-colors" href="#">Community</a></li>
</ul>
</div>
<div>
<p className="text-sm text-neutral-300 font-medium mb-3">Company</p>
<ul className="space-y-2 text-sm text-neutral-400">
<li><a className="hover:text-neutral-100 transition-colors" href="#">About</a></li>
<li><a className="hover:text-neutral-100 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-neutral-100 transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-neutral-100 transition-colors" href="#">Press</a></li>
</ul>
</div>
<div>
<p className="text-sm text-neutral-300 font-medium mb-3">Legal</p>
<ul className="space-y-2 text-sm text-neutral-400">
<li><a className="hover:text-neutral-100 transition-colors" href="#">Terms of Use</a></li>
<li><a className="hover:text-neutral-100 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-neutral-100 transition-colors" href="#">Risk Disclosure</a></li>
<li><a className="hover:text-neutral-100 transition-colors" href="#">Compliance</a></li>
</ul>
</div>
</div>
<div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-emerald-400/10 ring-1 ring-emerald-400/20 flex items-center justify-center">
<span className="text-emerald-400 text-lg font-semibold tracking-tight">AF</span>
</div>
<span className="text-neutral-300 text-sm">© <span id="year"></span> ApexFX. All rights reserved.</span>
</div>
<div className="flex items-center gap-4 text-neutral-300">
<a className="rounded-md p-2 hover:bg-neutral-800/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60" href="#">
<i data-lucide="twitter"></i>
</a>
<a className="rounded-md p-2 hover:bg-neutral-800/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60" href="#">
<i data-lucide="linkedin"></i>
</a>
<a className="rounded-md p-2 hover:bg-neutral-800/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60" href="#">
<i data-lucide="youtube"></i>
</a>
</div>
</div>
<p className="mt-6 text-[11px] leading-5 text-neutral-400">
          Risk Warning: Trading Forex and leveraged products involves significant risk and may not be suitable for all investors. You could lose more than your initial investment. Ensure you fully understand the risks involved and seek independent advice if necessary.
        </p>
</div>
</footer>


    </>
  );
}
