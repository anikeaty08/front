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
      
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons({attr: {'aria-hidden': true, focusable: false}});

  // Dynamic year
  document.getElementById('year').textContent = new Date().getFullYear();

  // ROI chart
  const ctx = document.getElementById('roiChart');
  if (ctx) {
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Week 1', 'Week 4', 'Week 8', 'Week 12'],
        datasets: [{
          data: [0, 30, 60, 95],
          borderColor: '#F0532D',
          backgroundColor: 'rgba(240,83,45,.15)',
          fill: true,
          tension: .4,
          pointRadius: 0
        }]
      },
      options: {
        plugins: {legend: {display: false}},
        scales: {
          x: {grid: {display: false}, ticks: {color: '#9CA3AF'}},
          y: {beginAtZero: true, max: 100, grid: {color: 'rgba(255,255,255,.05)'}, ticks: {color: '#9CA3AF', callback: v => v + '%'}}
        },
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }

  // Copy-link interaction
  const copyBtn = document.getElementById('copyLink');
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(window.location.href);
        copyBtn.innerHTML = '<i data-lucide="check" class="w-4 h-4"></i> Copied!';
        lucide.createIcons();
        setTimeout(() => {copyBtn.innerHTML = '<i data-lucide="copy" class="w-4 h-4"></i> Copy link'; lucide.createIcons();}, 3000);
      } catch {
        copyBtn.textContent = 'Failed to copy';
      }
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
      
<a className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 bg-black text-white px-4 py-2 rounded-md" href="#main">Skip to content</a>
<main id="main">

<section className="relative overflow-hidden" id="hero">

<div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-20" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg width=\\'200\\' height=\\'200\\' viewBox=\\'0 0 200 200\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Ccircle fill=\\'%23111113\\' cx=\\'10\\' cy=\\'10\\' r=\\'0.5\\'/%3E%3C/svg%3E\')', opacity: '.25'}}></div>
<div aria-hidden="true" className="absolute inset-0 pointer-events-none">
<div className="absolute -top-40 -left-32 w-[34rem] h-[34rem] bg-gradient-to-tr from-[#F0532D]/40 via-transparent to-transparent rounded-full blur-[120px]"></div>
<div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-gradient-to-br from-[#F0532D]/20 via-transparent to-transparent rounded-full blur-[140px]"></div>
</div>
<div className="relative max-w-6xl mx-auto px-6 py-24 md:py-36 flex flex-col items-center text-center">
<span className="relative inline-flex items-center mb-6">
<span className="absolute inset-0 rounded-full p-px bg-gradient-to-r from-[#F0532D] via-[#F0532D]/70 to-[#F0532D]/30"></span>
<span className="relative rounded-full bg-[#0B0B0D]/60 backdrop-blur-sm px-5 py-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#F0532D]">Join a private, small group, live online</span>
</span>
<h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-6">Learn How to Go <span className="text-[#F0532D]">AI-First</span>.</h1>
<figure className="w-full max-w-4xl mt-2 mb-10 relative">
<img alt="Team collaborating on technology" className="w-full rounded-xl ring-1 ring-white/10 shadow-2xl object-cover max-h-[520px]" loading="lazy" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&amp;fit=crop&amp;w=2400&amp;q=80"/>
<div aria-hidden="true" className="absolute inset-0 rounded-xl bg-gradient-to-b from-transparent via-[#0B0B0D]/10 to-[#0B0B0D]/50"></div>
</figure>
<p className="text-lg sm:text-xl mb-12 max-w-xl text-white/80">A 90-day, hands-on sprint where you’ll receive personalized, actionable insights from the crew that has generated $250 M+ online while shifting to AI-first ops.</p>
<a className="inline-flex items-center gap-3 rounded-md px-8 py-5 text-lg sm:text-xl font-semibold text-white transition-transform hover:-translate-y-0.5 hover:brightness-125 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F0532D]" href="#apply" style={{background: '#F0532D'}}>
        I’M READY TO GO AI
        <i className="w-6 h-6" data-lucide="arrow-right"></i>
</a>
</div>
</section>

<section className="relative" id="ai-transform">
<div aria-hidden="true" className="absolute inset-0 pointer-events-none">
<div className="absolute top-1/2 -left-32 w-[34rem] h-[34rem] bg-gradient-to-tr from-[#F0532D]/15 via-transparent to-transparent rounded-full blur-[120px]"></div>
</div>
<div className="max-w-6xl mx-auto px-6 py-24 md:py-28">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-14 text-center">Transform to an AI-First Business</h2>
<div className="grid lg:grid-cols-2 gap-12 items-start">

<ol className="relative border-l border-white/10 pl-8 space-y-12">
<li className="group">
<span className="absolute -left-4 top-0 flex items-center justify-center w-7 h-7 rounded-full bg-[#0B0B0D] ring-2 ring-[#F0532D] group-hover:scale-110 transition-transform">
<i className="w-4 h-4 text-[#F0532D]" data-lucide="search"></i>
</span>
<h3 className="font-semibold text-lg mb-1">Deep-Dive Audit</h3>
<p className="text-white/75">We dissect every workflow and expose high-impact AI opportunities.</p>
</li>
<li className="group">
<span className="absolute -left-4 top-0 flex items-center justify-center w-7 h-7 rounded-full bg-[#0B0B0D] ring-2 ring-[#F0532D] group-hover:scale-110 transition-transform">
<i className="w-4 h-4 text-[#F0532D]" data-lucide="zap"></i>
</span>
<h3 className="font-semibold text-lg mb-1">Rapid Automation</h3>
<p className="text-white/75">Deploy agents that reclaim hours and unlock new channels.</p>
</li>
<li className="group">
<span className="absolute -left-4 top-0 flex items-center justify-center w-7 h-7 rounded-full bg-[#0B0B0D] ring-2 ring-[#F0532D] group-hover:scale-110 transition-transform">
<i className="w-4 h-4 text-[#F0532D]" data-lucide="repeat"></i>
</span>
<h3 className="font-semibold text-lg mb-1">Feedback &amp; Optimization</h3>
<p className="text-white/75">Refine, measure, and scale the systems that move the needle most.</p>
</li>
</ol>

<div className="flex flex-col gap-10">

<div className="rounded-xl border border-white/10 p-6">
<h4 className="font-semibold mb-4 flex items-center gap-2 text-[#F0532D]">
<i className="w-5 h-5" data-lucide="trending-up"></i> ROI over 90 Days
            </h4>
<div>
<canvas aria-label="ROI chart" className="!w-full !h-[240px]" id="roiChart" role="img"></canvas>
</div>
</div>

<div className="mx-auto">
<div className="grid grid-cols-2 gap-8 w-full max-w-sm md:max-w-md">
<div className="border border-white/10 rounded-lg p-6 md:p-8">
<h5 className="font-semibold text-lg flex items-center gap-2 mb-1">
<i className="w-5 h-5 text-[#F0532D]" data-lucide="clock"></i> Hours Reclaimed
                </h5>
<p className="text-white/75">Free teams from repetitive tasks.</p>
</div>
<div className="border border-white/10 rounded-lg p-6 md:p-8">
<h5 className="font-semibold text-lg flex items-center gap-2 mb-1">
<i className="w-5 h-5 text-[#F0532D]" data-lucide="dollar-sign"></i> New Revenue
                </h5>
<p className="text-white/75">Launch AI-powered campaigns that scale 10×.</p>
</div>
<div className="border border-white/10 rounded-lg p-6 md:p-8">
<h5 className="font-semibold text-lg flex items-center gap-2 mb-1">
<i className="w-5 h-5 text-[#F0532D]" data-lucide="smile"></i> Happier Customers
                </h5>
<p className="text-white/75">Deliver instant support with human-like accuracy.</p>
</div>
<div className="border border-white/10 rounded-lg p-6 md:p-8">
<h5 className="font-semibold text-lg flex items-center gap-2 mb-1">
<i className="w-5 h-5 text-[#F0532D]" data-lucide="shield"></i> Future-Proof
                </h5>
<p className="text-white/75">Stay ready for an AI-dominated market.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-white/10" id="founders">
<div aria-hidden="true" className="absolute inset-0 pointer-events-none">
<div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[34rem] h-[34rem] bg-gradient-to-br from-[#F0532D]/20 via-transparent to-transparent rounded-full blur-[120px]"></div>
</div>
<div className="max-w-6xl mx-auto px-6 py-20 md:py-24 text-center">
<p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto mb-8">
        Lucas and the Framework Friday Tiger Team have generated <strong className="font-semibold text-white">$250 M+</strong> in revenue and reclaimed <strong className="font-semibold text-white">1 000+ operator hours</strong> (and climbing) by replacing manual tasks with intelligent systems.
      </p>
<p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12">
        Mission: Empower businesses to thrive in an AI-driven world by removing repetition and elevating the uniquely human work that remains.
      </p>
<a className="inline-flex items-center gap-3 rounded-md px-8 py-5 text-lg sm:text-xl font-semibold text-white transition-transform hover:-translate-y-0.5 hover:brightness-125 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F0532D]" href="#apply" style={{background: '#F0532D'}}>
        I’M READY TO GO AI
        <i className="w-6 h-6" data-lucide="arrow-right"></i>
</a>
</div>
</section>

<section className="relative" id="apply">
<div aria-hidden="true" className="absolute inset-0 pointer-events-none">
<div className="absolute -top-32 right-0 w-[30rem] h-[30rem] bg-gradient-to-br from-[#F0532D]/25 via-transparent to-transparent rounded-full blur-[120px]"></div>
</div>
<div className="max-w-4xl mx-auto px-6 py-24 md:py-28 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">BOOK A CALL BELOW TO SEE IF YOU’RE A FIT</h2>
<p className="text-lg md:text-xl text-white/80 mb-12">Tell us a bit about your goals, then lock in a time.</p>

<div className="rounded-xl border border-white/10 overflow-hidden mb-12">
<form className="grid sm:grid-cols-2 gap-6 p-8 bg-[#0B0B0D]/50 backdrop-blur-sm">
<label className="text-left flex flex-col gap-2 w-full">
<span className="text-sm font-semibold">Name</span>
<input className="rounded-md bg-[#1B1B1E] border border-white/10 px-4 py-3 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#F0532D]" name="name" placeholder="Your name" required="" type="text"/>
</label>
<label className="text-left flex flex-col gap-2 w-full">
<span className="text-sm font-semibold">Email</span>
<input className="rounded-md bg-[#1B1B1E] border border-white/10 px-4 py-3 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#F0532D]" name="email" placeholder="you@example.com" required="" type="email"/>
</label>
<div className="sm:col-span-2 flex justify-center">
<button className="inline-flex items-center gap-2 rounded-md px-6 py-3 font-semibold transition-transform hover:-translate-y-0.5 hover:brightness-110" style={{background: '#F0532D'}} type="submit">
              Submit
              <i className="w-4 h-4" data-lucide="send"></i>
</button>
</div>
</form>
</div>
<div className="rounded-xl border border-white/10 overflow-hidden">
<div className="calendly-inline-widget w-full" data-url="https://calendly.com/your-link/30min" style={{minWidth: '320px', height: '700px'}}></div>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 py-24 md:py-28" id="faqs">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-14">Frequently Asked Questions</h2>
<div className="space-y-6">

<details className="group border border-white/10 rounded-lg p-6 transition-colors">
<summary className="flex items-center justify-between cursor-pointer list-none text-lg font-semibold">
          What is the “All-in on AI” Community?
          <i className="w-5 h-5 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-4 text-white/75">A live-support platform where operators learn, clone, and iterate agentic workflows &amp; AI solutions.</p>
</details>
<details className="group border border-white/10 rounded-lg p-6 transition-colors">
<summary className="flex items-center justify-between cursor-pointer list-none text-lg font-semibold">
          Difference between the community and the 90-Day program?
          <i className="w-5 h-5 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-4 text-white/75">All-in on AI (free) is the open community; AI Your Business in 90 Days is the paid, cohort-style sprint for companies ready to go AI-first.</p>
</details>
<details className="group border border-white/10 rounded-lg p-6 transition-colors">
<summary className="flex items-center justify-between cursor-pointer list-none text-lg font-semibold">
          How do I join?
          <i className="w-5 h-5 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-4 text-white/75">Free tier: allinonai.frameworkfriday.com — Paid cohort: apply on this page.</p>
</details>
<details className="group border border-white/10 rounded-lg p-6 transition-colors">
<summary className="flex items-center justify-between cursor-pointer list-none text-lg font-semibold">
          Will there be live coaching?
          <i className="w-5 h-5 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-4 text-white/75">Yes—two deep dives per week, plus DM &amp; community threads.</p>
</details>
<details className="group border border-white/10 rounded-lg p-6 transition-colors">
<summary className="flex items-center justify-between cursor-pointer list-none text-lg font-semibold">
          Who is this for?
          <i className="w-5 h-5 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-4 text-white/75">Founders ($1–50 M ARR) and ops leads who value leverage over head-count.</p>
</details>
<details className="group border border-white/10 rounded-lg p-6 transition-colors">
<summary className="flex items-center justify-between cursor-pointer list-none text-lg font-semibold">
          Can I hire the team to build for me?
          <i className="w-5 h-5 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-4 text-white/75">We don’t take clients directly; we only build inside our own portfolio—but we share every template openly.</p>
</details>
<details className="group border border-white/10 rounded-lg p-6 transition-colors">
<summary className="flex items-center justify-between cursor-pointer list-none text-lg font-semibold">
          How much does it cost?
          <i className="w-5 h-5 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-4 text-white/75">$999 for a limited-time beta cohort (future price: $3 999). The direct access you get would normally cost far more.</p>
</details>
</div>
</section>

<section className="relative bg-[#F0532D] text-[#0B0B0D]">
<div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Ready to replace busy-work with AI-powered leverage?<br className="hidden md:block"/>Join the next 90-day sprint.</h2>
<a className="inline-flex items-center gap-3 rounded-md px-8 py-5 text-lg font-semibold text-[#0B0B0D] bg-white/80 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" href="#apply">
        APPLY NOW — 90-DAY SPRINT
        <i className="w-6 h-6" data-lucide="arrow-right"></i>
</a>
</div>
</section>

<footer className="border-t border-white/10">
<div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
<p className="text-sm text-white/60">© <span id="year"></span> All-in on AI. All rights reserved.</p>

<div className="flex items-center gap-4">
<button className="flex items-center gap-2 text-sm hover:text-white/90" id="copyLink">
<i className="w-4 h-4" data-lucide="copy"></i> Copy link
        </button>
<a className="flex items-center gap-2 text-sm hover:text-white/90" href="https://twitter.com/intent/tweet?text=Check+out+this+90-day+AI+program+that’s+helping+companies+go+AI-first+👉+{URL}" rel="noopener" target="_blank">
<i className="w-4 h-4" data-lucide="twitter"></i> Tweet
        </a>
</div>
<nav className="flex gap-6 text-sm">
<a className="hover:text-white/90" href="#hero">Home</a>
<a className="hover:text-white/90" href="#apply">Apply</a>
<a className="hover:text-white/90" href="#faqs">FAQs</a>
</nav>
</div>
</footer>
</main>



    </>
  );
}
