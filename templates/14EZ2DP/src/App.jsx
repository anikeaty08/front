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



      // Lucide icons + year
      window.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        document.getElementById('year').textContent = new Date().getFullYear();
      });

      // Simple scroll-reveal animations
      const els = document.querySelectorAll('[data-animate]');
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });

      els.forEach((el) => {
        el.classList.add('opacity-0', 'translate-y-6', 'transition', 'duration-700');
        io.observe(el);
      });

      // Toggle for "Why" extras to reduce clutter
      const toggleBtn = document.getElementById('toggle-why');
      const extraItems = document.querySelectorAll('.why-extra');
      let expanded = false;

      toggleBtn?.addEventListener('click', () => {
        expanded = !expanded;
        extraItems.forEach((item) => item.classList.toggle('hidden', !expanded));
        toggleBtn.innerHTML = expanded
          ? '<i data-lucide="chevrons-up" class="w-5 h-5"></i> Show fewer'
          : '<i data-lucide="chevrons-down" class="w-5 h-5"></i> Show all benefits (11 more)';
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
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
      

<header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-black/5">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<a className="flex items-center gap-3" href="#">

<img alt="Leave Dates" className="h-7 w-auto" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium hover:opacity-80 transition" href="#pricing">Pricing</a>
<a className="text-sm font-medium hover:opacity-80 transition" href="#about">About</a>
<a className="text-sm font-medium hover:opacity-80 transition" href="#blog">Blog</a>
<a className="text-sm font-medium hover:opacity-80 transition" href="#support">Support</a>
<a className="text-sm font-medium hover:opacity-80 transition" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center rounded-full bg-[#92D4F2] text-[#1D1E1B] px-5 py-2.5 text-sm font-semibold shadow-sm hover:shadow-md hover:-translate-y-0.5 transition will-change-transform" href="#start">Start Free Trial</a>
<button aria-label="Menu" className="md:hidden inline-flex items-center justify-center rounded-full w-9 h-9 border border-black/10">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</button>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden" id="start">

<div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#92D4F2]/40 blur-3xl"></div>
<div className="pointer-events-none absolute top-40 -right-20 h-72 w-72 rounded-full bg-[#96EBDC]/40 blur-3xl"></div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
<div className="space-y-6" data-animate="">
<div className="inline-flex items-center gap-2 rounded-full bg-[#F8DD7D] px-3 py-1 text-xs font-medium">New • Joyful time‑off tracking</div>

<div className="inline-flex items-center gap-2 rounded-full bg-[#1D1E1B] text-white px-3 py-1 text-xs font-medium shadow-sm ring-1 ring-black/10">
<i className="w-4 h-4 text-yellow-400" data-lucide="zap"></i>
              Hook: Cut HR admin by 70% in your first week
            </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
              Time‑off tracking without the sheeet show
            </h1>
<p className="text-base sm:text-lg text-[#1D1E1B]/80">
              Ditch the spreadsheet. Get the super simple annual leave planner with instant approvals, wall‑chart calendars, and smart integrations.
            </p>
<div className="flex flex-col sm:flex-row gap-3 sm:items-center">
<a className="inline-flex items-center justify-center rounded-full bg-[#92D4F2] text-[#1D1E1B] px-6 py-3 text-sm font-semibold shadow-sm hover:shadow-md hover:-translate-y-0.5 transition" href="#pricing">Start Free Trial</a>
<div className="flex items-center text-sm text-[#1D1E1B]/60 gap-2">
<svg className="w-4 h-4 text-[#1D1E1B]/50" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 5v14l11-7z"></path></svg>
                60‑second tour below
              </div>
</div>
<div className="flex items-center gap-6 pt-2">
<div className="flex items-center gap-1">
<i className="w-4 h-4 text-yellow-400" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-400" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-400" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-400" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-400" data-lucide="star-half"></i>
</div>
<p className="text-sm"><span className="font-semibold">4.8/5</span> on Capterra • 300+ teams worldwide</p>
</div>
</div>
<div className="relative" data-animate="">

<div className="relative rounded-2xl overflow-hidden ring-1 ring-black/10 shadow-2xl">
<video autoplay="" className="w-full h-full object-cover" loop="" muted="" playsinline="" poster="assets/hero-poster.jpg" src="assets/hero-tour.mp4"></video>
<div className="absolute top-3 left-3 inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-medium shadow">
<i className="w-4 h-4" data-lucide="play-circle"></i> Autoplay preview
              </div>
</div>

<div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-2 rounded-xl bg-[#C8B4F0] px-4 py-3 shadow-md ring-1 ring-black/10">
<i className="w-5 h-5" data-lucide="trophy"></i>
<span className="text-sm font-medium">Award‑winning ease of use</span>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-16 lg:py-24">
<div className="pointer-events-none absolute inset-x-0 -top-10 h-24 bg-gradient-to-b from-[#F8DD7D]/40 to-transparent"></div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
<div className="space-y-4" data-animate="">
<div className="rounded-2xl bg-[#F8DD7D]/50 p-2 ring-1 ring-black/10">

<img alt="Spreadsheet chaos" className="rounded-xl w-full h-72 object-cover object-center" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">From spreadsheet chaos…</h2>
<p className="text-[#1D1E1B]/80">Version conflicts, manual balances, approvals lost in chat — hello, sheeet show.</p>
</div>
<div className="space-y-4" data-animate="">
<div className="rounded-2xl bg-[#96EBDC]/40 p-2 ring-1 ring-black/10">

<img alt="Leave Dates wall chart" className="rounded-xl w-full h-72 object-cover object-center" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
</div>
<h3 className="text-3xl sm:text-4xl font-semibold tracking-tight">…to a joyful wall‑chart everyone gets</h3>
<p className="text-[#1D1E1B]/80">Instant balances, one‑click approvals, calendars that update themselves. Whooop.</p>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24" id="features">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-12" data-animate="">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Everything you need, nothing you don’t</h2>
<p className="text-[#1D1E1B]/70 mt-3">Designed to be delightful from day one.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="rounded-2xl border border-black/10 p-6 hover:-translate-y-1 hover:shadow-lg transition" data-animate="">
<div className="inline-flex items-center justify-center rounded-xl bg-[#92D4F2]/40 w-11 h-11 mb-4">
<i className="w-5 h-5" data-lucide="calendar"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">Wall Chart Calendar</h3>
<p className="text-sm text-[#1D1E1B]/70 mt-2">See who’s off at a glance. Filters for teams, types, and locations.</p>
</div>
<div className="rounded-2xl border border-black/10 p-6 hover:-translate-y-1 hover:shadow-lg transition" data-animate="">
<div className="inline-flex items-center justify-center rounded-xl bg-[#96EBDC]/40 w-11 h-11 mb-4">
<i className="w-5 h-5" data-lucide="wallet"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">Leave Balances</h3>
<p className="text-sm text-[#1D1E1B]/70 mt-2">Accruals, carry‑over, and custom leave types baked in.</p>
</div>
<div className="rounded-2xl border border-black/10 p-6 hover:-translate-y-1 hover:shadow-lg transition" data-animate="">
<div className="inline-flex items-center justify-center rounded-xl bg-[#F8DD7D]/50 w-11 h-11 mb-4">
<i className="w-5 h-5" data-lucide="check-circle-2"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">Instant Approvals</h3>
<p className="text-sm text-[#1D1E1B]/70 mt-2">Managers approve in one tap with smart conflict warnings.</p>
</div>
<div className="rounded-2xl border border-black/10 p-6 hover:-translate-y-1 hover:shadow-lg transition" data-animate="">
<div className="inline-flex items-center justify-center rounded-xl bg-[#C8B4F0]/40 w-11 h-11 mb-4">
<i className="w-5 h-5" data-lucide="cable"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">Integrations</h3>
<p className="text-sm text-[#1D1E1B]/70 mt-2">Google, Outlook, Slack, Zapier — auto‑sync calendars and notifications.</p>
</div>
<div className="rounded-2xl border border-black/10 p-6 hover:-translate-y-1 hover:shadow-lg transition" data-animate="">
<div className="inline-flex items-center justify-center rounded-xl bg-[#92D4F2]/40 w-11 h-11 mb-4">
<i className="w-5 h-5" data-lucide="smartphone"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">Mobile Access</h3>
<p className="text-sm text-[#1D1E1B]/70 mt-2">Request, approve, and view balances on the go.</p>
</div>
<div className="rounded-2xl border border-black/10 p-6 hover:-translate-y-1 hover:shadow-lg transition" data-animate="">
<div className="inline-flex items-center justify-center rounded-xl bg-[#96EBDC]/40 w-11 h-11 mb-4">
<i className="w-5 h-5" data-lucide="globe-2"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">Public Holidays</h3>
<p className="text-sm text-[#1D1E1B]/70 mt-2">Built‑in calendars for 150+ countries. No more manual updates.</p>
</div>
</div>
<div className="text-center mt-10" data-animate="">
<a className="inline-flex items-center justify-center rounded-full bg-[#92D4F2] text-[#1D1E1B] px-6 py-3 text-sm font-semibold shadow-sm hover:shadow-md hover:-translate-y-0.5 transition" href="#pricing">Start Free Trial</a>
</div>
</div>
</section>

<section className="py-16 lg:py-24" id="why">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-12" data-animate="">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Why People Want to Use Leave Dates</h2>
<p className="text-[#1D1E1B]/70 mt-3">A quick rundown of what teams love.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="rounded-2xl border border-black/10 bg-white p-4 hover:-translate-y-0.5 hover:shadow transition" data-animate="">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-green-600" data-lucide="check-circle-2"></i>
<p className="text-sm text-[#1D1E1B]/80">No more messy spreadsheets → Stop wasting time updating clunky Excel files or shared calendars.</p>
</div>
</div>
<div className="rounded-2xl border border-black/10 bg-white p-4 hover:-translate-y-0.5 hover:shadow transition" data-animate="">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-green-600" data-lucide="check-circle-2"></i>
<p className="text-sm text-[#1D1E1B]/80">Clarity at a glance → See instantly who’s off and when with the Wall Chart Calendar.</p>
</div>
</div>
<div className="rounded-2xl border border-black/10 bg-white p-4 hover:-translate-y-0.5 hover:shadow transition" data-animate="">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-green-600" data-lucide="zap"></i>
<p className="text-sm text-[#1D1E1B]/80">Faster requests &amp; approvals → Employees book time off in seconds, managers approve with one click.</p>
</div>
</div>
<div className="rounded-2xl border border-black/10 bg-white p-4 hover:-translate-y-0.5 hover:shadow transition" data-animate="">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-green-600" data-lucide="wallet"></i>
<p className="text-sm text-[#1D1E1B]/80">Accurate leave balances → Automatic tracking of allowances, TOIL, and entitlements.</p>
</div>
</div>
<div className="rounded-2xl border border-black/10 bg-white p-4 hover:-translate-y-0.5 hover:shadow transition" data-animate="">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-green-600" data-lucide="refresh-ccw"></i>
<p className="text-sm text-[#1D1E1B]/80">Always up to date → Calendars auto-sync across Google, Outlook, Slack, and Zapier.</p>
</div>
</div>
<div className="rounded-2xl border border-black/10 bg-white p-4 hover:-translate-y-0.5 hover:shadow transition" data-animate="">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-green-600" data-lucide="smartphone"></i>
<p className="text-sm text-[#1D1E1B]/80">Works anywhere → Mobile-friendly for requests, approvals, and updates on the go.</p>
</div>
</div>

<div className="why-extra hidden rounded-2xl border border-black/10 bg-white p-4 hover:-translate-y-0.5 hover:shadow transition" data-animate="">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-green-600" data-lucide="timer"></i>
<p className="text-sm text-[#1D1E1B]/80">Reduce admin burden → Save HR/managers hours of repetitive tracking and chasing.</p>
</div>
</div>
<div className="why-extra hidden rounded-2xl border border-black/10 bg-white p-4 hover:-translate-y-0.5 hover:shadow transition" data-animate="">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-green-600" data-lucide="globe-2"></i>
<p className="text-sm text-[#1D1E1B]/80">Built-in public holidays → 150+ countries pre-loaded — no need to set them manually.</p>
</div>
</div>
<div className="why-extra hidden rounded-2xl border border-black/10 bg-white p-4 hover:-translate-y-0.5 hover:shadow transition" data-animate="">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-green-600" data-lucide="users"></i>
<p className="text-sm text-[#1D1E1B]/80">Improved teamwork → Everyone knows who’s off, preventing clashes and confusion.</p>
</div>
</div>
<div className="why-extra hidden rounded-2xl border border-black/10 bg-white p-4 hover:-translate-y-0.5 hover:shadow transition" data-animate="">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-green-600" data-lucide="bell"></i>
<p className="text-sm text-[#1D1E1B]/80">Notifications &amp; reminders → Weekly summaries, daily alerts, and instant status updates.</p>
</div>
</div>
<div className="why-extra hidden rounded-2xl border border-black/10 bg-white p-4 hover:-translate-y-0.5 hover:shadow transition" data-animate="">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-green-600" data-lucide="eye"></i>
<p className="text-sm text-[#1D1E1B]/80">Boost transparency → Staff can check their leave allowance anytime without asking HR.</p>
</div>
</div>
<div className="why-extra hidden rounded-2xl border border-black/10 bg-white p-4 hover:-translate-y-0.5 hover:shadow transition" data-animate="">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-green-600" data-lucide="layers"></i>
<p className="text-sm text-[#1D1E1B]/80">Supports all leave types → Vacation, sick leave, maternity, paternity, compassionate, unpaid, etc.</p>
</div>
</div>
<div className="why-extra hidden rounded-2xl border border-black/10 bg-white p-4 hover:-translate-y-0.5 hover:shadow transition" data-animate="">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-green-600" data-lucide="shield-check"></i>
<p className="text-sm text-[#1D1E1B]/80">Security &amp; compliance → GDPR-compliant with encrypted data for peace of mind.</p>
</div>
</div>
<div className="why-extra hidden rounded-2xl border border-black/10 bg-white p-4 hover:-translate-y-0.5 hover:shadow transition" data-animate="">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-green-600" data-lucide="trending-up"></i>
<p className="text-sm text-[#1D1E1B]/80">Scales with your business → From 5 users free → to growing teams with advanced features.</p>
</div>
</div>
<div className="why-extra hidden rounded-2xl border border-black/10 bg-white p-4 hover:-translate-y-0.5 hover:shadow transition" data-animate="">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-green-600" data-lucide="smile"></i>
<p className="text-sm text-[#1D1E1B]/80">Happy employees → Simple, self-service system promotes work-life balance and reduces stress.</p>
</div>
</div>
<div className="why-extra hidden rounded-2xl border border-black/10 bg-white p-4 hover:-translate-y-0.5 hover:shadow transition" data-animate="">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-green-600" data-lucide="badge-dollar-sign"></i>
<p className="text-sm text-[#1D1E1B]/80">Affordable pricing → From just $1 per user/month — great value vs competitors.</p>
</div>
</div>
<div className="why-extra hidden rounded-2xl border border-black/10 bg-white p-4 hover:-translate-y-0.5 hover:shadow transition md:col-span-2 lg:col-span-3" data-animate="">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-green-600" data-lucide="sparkles"></i>
<p className="text-sm text-[#1D1E1B]/80">Joyful brand personality → Light, playful design that makes admin less of a chore (“whooop” factor).</p>
</div>
</div>
</div>

<div className="text-center mt-8" data-animate="">
<button className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold ring-1 ring-black/10 hover:ring-black/20 hover:-translate-y-0.5 transition" id="toggle-why">
<i className="w-5 h-5" data-lucide="chevrons-down"></i>
            Show all benefits (11 more)
          </button>
</div>
</div>
</section>

<section className="relative py-16 lg:py-24 bg-[#C8B4F0]/20">
<div className="pointer-events-none absolute inset-x-0 -top-10 h-24 bg-gradient-to-b from-[#C8B4F0]/20 to-transparent"></div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
<div className="lg:col-span-1 space-y-6" data-animate="">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Loved by teams of all sizes</h2>
<p className="text-[#1D1E1B]/70">“We swapped spreadsheets for Leave Dates and never looked back.”</p>

<div className="flex items-center gap-4">
<img alt="Award badge" className="h-12 w-auto" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<img alt="Award badge" className="h-12 w-auto" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
</div>

<div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="rounded-2xl bg-white p-6 border border-black/10 shadow-sm" data-animate="">
<div className="flex items-center gap-3">
<img alt="Customer" className="w-10 h-10 rounded-full object-cover filter grayscale" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div>
<p className="text-sm font-semibold">Operations Lead</p>
<div className="flex gap-0.5 text-yellow-400">
<i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i>
</div>
</div>
</div>
<p className="text-sm mt-4 text-[#1D1E1B]/80">Rollout took minutes. Approvals are instant and the wall chart is crystal clear.</p>
</div>
<div className="rounded-2xl bg-white p-6 border border-black/10 shadow-sm" data-animate="">
<div className="flex items-center gap-3">
<img alt="Customer" className="w-10 h-10 rounded-full object-cover filter grayscale" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div>
<p className="text-sm font-semibold">People Manager</p>
<div className="flex gap-0.5 text-yellow-400">
<i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star-half"></i>
</div>
</div>
</div>
<p className="text-sm mt-4 text-[#1D1E1B]/80">Balances are always right. No more spreadsheet drama — just whooop.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-12" data-animate="">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">How it works</h2>
<p className="text-[#1D1E1B]/70 mt-3">From request to calendar in three joyful steps.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="rounded-2xl border border-black/10 p-6" data-animate="">
<div className="inline-flex items-center justify-center rounded-xl bg-[#92D4F2]/40 w-11 h-11 mb-3">
<i className="w-5 h-5" data-lucide="send"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">1. Request leave</h3>
<p className="text-sm text-[#1D1E1B]/70 mt-1">Employee picks dates and type. Balances show instantly.</p>
</div>
<div className="rounded-2xl border border-black/10 p-6" data-animate="">
<div className="inline-flex items-center justify-center rounded-xl bg-[#F8DD7D]/50 w-11 h-11 mb-3">
<i className="w-5 h-5" data-lucide="badge-check"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">2. Approve</h3>
<p className="text-sm text-[#1D1E1B]/70 mt-1">Manager approves in one click with conflict warnings.</p>
</div>
<div className="rounded-2xl border border-black/10 p-6" data-animate="">
<div className="inline-flex items-center justify-center rounded-xl bg-[#96EBDC]/40 w-11 h-11 mb-3">
<i className="w-5 h-5" data-lucide="refresh-ccw"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">3. Calendars update</h3>
<p className="text-sm text-[#1D1E1B]/70 mt-1">Team wall‑chart and connected calendars stay in sync.</p>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24" id="pricing">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-12" data-animate="">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Simple, friendly pricing</h2>
<p className="text-[#1D1E1B]/70 mt-3">Start free — upgrade anytime.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="rounded-2xl border border-black/10 p-8 bg-white shadow-sm" data-animate="">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight">Free</h3>
<span className="inline-flex items-center rounded-full bg-[#96EBDC]/50 px-3 py-1 text-xs font-medium">Best for small teams</span>
</div>
<p className="mt-2 text-sm text-[#1D1E1B]/70">Up to 5 users</p>
<p className="mt-6 text-4xl font-semibold tracking-tight">$0</p>
<ul className="mt-6 space-y-2 text-sm">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-green-600" data-lucide="check"></i> Wall chart calendar</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-green-600" data-lucide="check"></i> Leave balances</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-green-600" data-lucide="check"></i> Public holidays</li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#92D4F2] text-[#1D1E1B] px-5 py-3 text-sm font-semibold shadow-sm hover:shadow-md transition" href="#start">Try Free — No Credit Card Required</a>
</div>

<div className="rounded-2xl border border-black/10 p-8 bg-[#F8DD7D]/30 shadow-sm" data-animate="">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight">Pro</h3>
<span className="inline-flex items-center rounded-full bg-white/70 px-3 py-1 text-xs font-medium ring-1 ring-black/10">Most popular</span>
</div>
<p className="mt-2 text-sm text-[#1D1E1B]/70">Everything in Free, plus integrations and approvals</p>
<div className="mt-6 flex items-end gap-3">
<p className="text-4xl font-semibold tracking-tight">$1</p>
<p className="text-sm mb-1 text-[#1D1E1B]/70">per user/month</p>
</div>
<p className="text-sm text-[#1D1E1B]/70">or $9/user/year</p>
<ul className="mt-6 space-y-2 text-sm">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-green-600" data-lucide="check"></i> Google, Outlook, Slack, Zapier</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-green-600" data-lucide="check"></i> Instant approvals</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-green-600" data-lucide="check"></i> Advanced policies &amp; accruals</li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#92D4F2] text-[#1D1E1B] px-5 py-3 text-sm font-semibold shadow-sm hover:shadow-md transition" href="#start">Start Free Trial</a>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 bg-[#96EBDC]/20">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
<div className="space-y-6" data-animate="">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Works where your team already is</h2>
<div className="flex flex-wrap items-center gap-4">

<img alt="Google" className="h-8 w-auto" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<img alt="Outlook" className="h-8 w-auto" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<img alt="Slack" className="h-8 w-auto" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<img alt="Zapier" className="h-8 w-auto" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
</div>
<div className="space-y-4" data-animate="">
<div className="flex items-start gap-3">
<div className="rounded-lg bg-white w-9 h-9 inline-flex items-center justify-center ring-1 ring-black/10">
<i className="w-5 h-5" data-lucide="shield-check"></i>
</div>
<div>
<p className="font-semibold tracking-tight">GDPR compliant</p>
<p className="text-sm text-[#1D1E1B]/70">Hosted in the EU with data processing agreements available.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="rounded-lg bg-white w-9 h-9 inline-flex items-center justify-center ring-1 ring-black/10">
<i className="w-5 h-5" data-lucide="lock"></i>
</div>
<div>
<p className="font-semibold tracking-tight">Encryption &amp; SSO</p>
<p className="text-sm text-[#1D1E1B]/70">TLS in transit, AES at rest, and single sign‑on for peace of mind.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-16 lg:py-24">
<div className="pointer-events-none absolute inset-x-0 -top-10 h-24 bg-gradient-to-b from-[#92D4F2]/30 to-transparent"></div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
<div className="max-w-3xl mx-auto" data-animate="">
<h2 className="text-3xl sm:text-5xl font-semibold tracking-tight">Put the whooop into ‘out of office’</h2>
<p className="text-[#1D1E1B]/70 mt-3">Start your free trial and see how simple time‑off can be.</p>
<a className="mt-6 inline-flex items-center justify-center rounded-full bg-[#92D4F2] text-[#1D1E1B] px-8 py-4 text-sm font-semibold shadow-sm hover:shadow-md hover:-translate-y-0.5 transition" href="#pricing">Start Your Free Trial Today →</a>
</div>
</div>
</section>

<footer className="border-t border-black/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="space-y-4">
<img alt="Leave Dates" className="h-6 w-auto" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<p className="text-sm text-[#1D1E1B]/70">The joyful leave planner for modern teams.</p>
<div className="flex items-center gap-3">
<a className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-black/10 hover:bg-black/5" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-black/10 hover:bg-black/5" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
<a className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-black/10 hover:bg-black/5" href="#"><i className="w-4 h-4" data-lucide="github"></i></a>
</div>
</div>
<div className="space-y-2">
<p className="text-sm font-semibold tracking-tight">Product</p>
<a className="block text-sm text-[#1D1E1B]/70 hover:text-[#1D1E1B]" href="#pricing">Pricing</a>
<a className="block text-sm text-[#1D1E1B]/70 hover:text-[#1D1E1B]" href="#about">About</a>
<a className="block text-sm text-[#1D1E1B]/70 hover:text-[#1D1E1B]" href="#blog">Blog</a>
</div>
<div className="space-y-2">
<p className="text-sm font-semibold tracking-tight">Company</p>
<a className="block text-sm text-[#1D1E1B]/70 hover:text-[#1D1E1B]" href="#support">Support</a>
<a className="block text-sm text-[#1D1E1B]/70 hover:text-[#1D1E1B]" href="#contact">Contact</a>
<a className="block text-sm text-[#1D1E1B]/70 hover:text-[#1D1E1B]" href="#">Status</a>
</div>
<div className="space-y-3">
<p className="text-sm font-semibold tracking-tight">Get the app</p>

<img alt="Download on the App Store" className="h-10 w-auto" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<img alt="Get it on Google Play" className="h-10 w-auto" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
</div>
<div className="pt-8 mt-8 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-[#1D1E1B]/60">© <span id="year"></span> Leave Dates. All rights reserved.</p>
<div className="flex items-center gap-4 text-xs text-[#1D1E1B]/60">
<a className="hover:text-[#1D1E1B]" href="#">Privacy</a>
<a className="hover:text-[#1D1E1B]" href="#">Terms</a>
<a className="hover:text-[#1D1E1B]" href="#">Security</a>
</div>
</div>
</div>
</footer>




    </>
  );
}
