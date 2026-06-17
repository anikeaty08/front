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
      
    lucide.createIcons({attr:{focusable:false,'aria-hidden':true}});
    document.getElementById('year').textContent=new Date().getFullYear();
  
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
      

<a className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 bg-[#000] text-white px-4 py-2 rounded-md z-50" href="#main">Skip to content</a>

<header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b" style={{borderColor: '#FDD7B3'}}>
<nav aria-label="Main" className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
<a className="flex items-center gap-2 font-semibold hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#000]" href="#hero">
<span aria-hidden="true" className="flex items-center justify-center w-5 h-5 rounded-full" style={{background: '#F0532D'}}>
<i className="w-3 h-3 text-white" data-lucide="sparkles"></i>
</span>
        90 Days | AI My Business
      </a>
<button aria-label="Enroll" className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm md:text-base font-semibold text-white hover:-translate-y-0.5 hover:shadow-lg transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#000]" style={{background: '#000'}}>
        Enroll
        <i aria-hidden="true" className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</nav>
</header>

<main id="main">
<section className="relative overflow-hidden" id="hero">

<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-30" style={{background: '#FF9A15'}}></div>
<div className="absolute -bottom-40 right-0 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-30" style={{background: '#1054FF'}}></div>
</div>
<div className="relative max-w-6xl mx-auto px-6 py-20 md:py-32 grid md:grid-cols-2 gap-10 items-center">

<div>
<h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-6">
            AI your business in <span style={{color: '#F0532D'}}>90 days</span>.
          </h1>
<p className="text-lg sm:text-xl mb-6 max-w-md">
            Two hands-on calls per week + 1-to-1 strategy. Replace workflows with revenue-generating automation.
          </p>
<p className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold tracking-tight mb-10" style={{background: '#FFF7F2', color: '#F0532D'}}>
<i className="w-4 h-4" data-lucide="users"></i>
            Team-Ready Access Included
          </p>
<div className="flex flex-col sm:flex-row gap-4">
<button aria-label="Enroll Now" className="inline-flex items-center gap-3 rounded-md px-6 py-4 text-base font-semibold text-white hover:-translate-y-0.5 hover:shadow-lg transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#000]" style={{background: '#000'}}>
              Enroll Now — 90-Day Sprint
              <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button aria-label="Download Syllabus" className="inline-flex items-center gap-2 rounded-md px-6 py-4 text-base font-semibold border hover:-translate-y-0.5 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#000]" style={{borderColor: '#000'}}>
              Download Syllabus
              <i className="w-4 h-4" data-lucide="download"></i>
</button>
</div>
</div>

<div className="relative">
<img alt="Team collaborating with AI" className="rounded-xl shadow-lg h-72 md:h-96 w-full object-cover" src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute -inset-1 rounded-xl blur-md opacity-30" style={{background: 'linear-gradient(130deg,#F0532D 0%,#FDE7D4 100%)'}}></div>
</div>
</div>
</section>

<section className="bg-[#FFF7F2]/70 py-24" id="program">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center">Program</h2>
<p className="mt-4 text-lg text-center max-w-2xl mx-auto">
          Everything you need to adopt, deploy, and scale AI in 90 days.
        </p>
<div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white border rounded-2xl p-6 hover:shadow-lg transition">
<span className="flex items-center justify-center w-10 h-10 rounded-full mb-4" style={{background: '#F0532D'}}>
<i className="w-5 h-5 text-white" data-lucide="video"></i>
</span>
<h3 className="text-lg font-semibold">Live Group Calls</h3>
<p className="mt-2 text-sm text-[#000]/80">
              2×/week (Mon–Thurs), capped at 10 attendees. 45 min each.
            </p>
</div>
<div className="bg-white border rounded-2xl p-6 hover:shadow-lg transition">
<span className="flex items-center justify-center w-10 h-10 rounded-full mb-4" style={{background: '#1054FF'}}>
<i className="w-5 h-5 text-white" data-lucide="phone"></i>
</span>
<h3 className="text-lg font-semibold">1:1 Strategy Call</h3>
<p className="mt-2 text-sm text-[#000]/80">
              Custom AI roadmap tailored to your business plus prep packet.
            </p>
</div>
<div className="bg-white border rounded-2xl p-6 hover:shadow-lg transition">
<span className="flex items-center justify-center w-10 h-10 rounded-full mb-4" style={{background: '#1C664D'}}>
<i className="w-5 h-5 text-white" data-lucide="message-circle"></i>
</span>
<h3 className="text-lg font-semibold">Private Chat Support</h3>
<p className="mt-2 text-sm text-[#000]/80">
              Dedicated Slack/WhatsApp thread for the full 90 days.
            </p>
</div>
<div className="bg-white border rounded-2xl p-6 hover:shadow-lg transition">
<span className="flex items-center justify-center w-10 h-10 rounded-full mb-4" style={{background: '#F0532D'}}>
<i className="w-5 h-5 text-white" data-lucide="monitor-play"></i>
</span>
<h3 className="text-lg font-semibold">Live-First Delivery</h3>
<p className="mt-2 text-sm text-[#000]/80">
              All value delivered via interactive sessions before hitting the library.
            </p>
</div>
<div className="bg-white border rounded-2xl p-6 hover:shadow-lg transition">
<span className="flex items-center justify-center w-10 h-10 rounded-full mb-4" style={{background: '#1054FF'}}>
<i className="w-5 h-5 text-white" data-lucide="flag"></i>
</span>
<h3 className="text-lg font-semibold">Progress Checkpoints</h3>
<p className="mt-2 text-sm text-[#000]/80">
              Structured ROI check-ins at Day 30, 60, 90.
            </p>
</div>
<div className="bg-white border rounded-2xl p-6 hover:shadow-lg transition">
<span className="flex items-center justify-center w-10 h-10 rounded-full mb-4" style={{background: '#1C664D'}}>
<i className="w-5 h-5 text-white" data-lucide="users"></i>
</span>
<h3 className="text-lg font-semibold">Community Access</h3>
<p className="mt-2 text-sm text-[#000]/80">
              Builder Launch events, discussions, and more for continual growth.
            </p>
</div>
</div>
</div>
</section>

<section className="bg-[#FFF7F2]/80 py-24" id="curriculum">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center">Week-by-Week Breakdown</h2>
<p className="mt-4 text-lg text-center max-w-2xl mx-auto">
          Short sprints, tangible results. Here’s what the next 90 days look like:
        </p>
<div className="mt-16 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
<div className="relative pl-10">
<span className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full" style={{background: '#F0532D'}}>
<i className="w-4 h-4 text-white" data-lucide="play"></i>
</span>
<h3 className="text-xl font-semibold">Weeks 1–2</h3>
<p className="mt-1 text-sm text-[#000]/80">Rapid AI literacy &amp; prompt frameworks</p>
</div>
<div className="relative pl-10">
<span className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full" style={{background: '#1054FF'}}>
<i className="w-4 h-4 text-white" data-lucide="map"></i>
</span>
<h3 className="text-xl font-semibold">Weeks 3–4</h3>
<p className="mt-1 text-sm text-[#000]/80">Process mapping &amp; efficiency scoring</p>
</div>
<div className="relative pl-10">
<span className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full" style={{background: '#1C664D'}}>
<i className="w-4 h-4 text-white" data-lucide="zap"></i>
</span>
<h3 className="text-xl font-semibold">Weeks 5–6</h3>
<p className="mt-1 text-sm text-[#000]/80">Automation pilots &amp; user feedback</p>
</div>
<div className="relative pl-10">
<span className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full" style={{background: '#F0532D'}}>
<i className="w-4 h-4 text-white" data-lucide="settings"></i>
</span>
<h3 className="text-xl font-semibold">Weeks 7–8</h3>
<p className="mt-1 text-sm text-[#000]/80">Scaling infra, security, compliance</p>
</div>
<div className="relative pl-10">
<span className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full" style={{background: '#1054FF'}}>
<i className="w-4 h-4 text-white" data-lucide="server"></i>
</span>
<h3 className="text-xl font-semibold">Weeks 9–10</h3>
<p className="mt-1 text-sm text-[#000]/80">Custom tooling &amp; integrations</p>
</div>
<div className="relative pl-10">
<span className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full" style={{background: '#1C664D'}}>
<i className="w-4 h-4 text-white" data-lucide="award"></i>
</span>
<h3 className="text-xl font-semibold">Weeks 11–12</h3>
<p className="mt-1 text-sm text-[#000]/80">Performance reviews &amp; graduation</p>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-24">
<div className="grid lg:grid-cols-2 gap-12 items-start">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">See the Impact</h2>
<p className="mt-4 text-lg max-w-md">
            Alumni typically unlock a minimum of 15 hours/week and 22 % additional revenue within the first 60 days.
          </p>
<ul className="mt-8 space-y-4">
<li className="flex gap-3">
<i className="w-5 h-5 text-[#F0532D]" data-lucide="clock"></i>
<span className="text-sm">Operational hours reclaimed</span>
</li>
<li className="flex gap-3">
<i className="w-5 h-5 text-[#1054FF]" data-lucide="dollar-sign"></i>
<span className="text-sm">Net-new revenue added</span>
</li>
<li className="flex gap-3">
<i className="w-5 h-5 text-[#1C664D]" data-lucide="smile"></i>
<span className="text-sm">Happier customers &amp; employees</span>
</li>
</ul>
</div>
<div className="rounded-2xl border shadow-sm bg-white max-w-md w-full p-8 lg:mx-auto">
<h3 className="text-2xl font-semibold">90-Day Sprint</h3>
<p className="mt-2 text-sm text-[#000]/80">Hands-on, team-ready cohort</p>
<div className="mt-8 flex items-end gap-2">
<span className="text-4xl font-semibold tracking-tight">$4,800</span>
<span className="text-sm text-[#000]/70">USD</span>
</div>
<ul className="mt-6 space-y-3 text-sm">
<li className="flex gap-2">
<i className="w-4 h-4 text-[#1C664D]" data-lucide="check-circle"></i>
              24 live group sessions (2 / week)
            </li>
<li className="flex gap-2">
<i className="w-4 h-4 text-[#1C664D]" data-lucide="check-circle"></i>
              Unlimited async support
            </li>
<li className="flex gap-2">
<i className="w-4 h-4 text-[#1C664D]" data-lucide="check-circle"></i>
              1-to-1 strategy calls
            </li>
<li className="flex gap-2">
<i className="w-4 h-4 text-[#1C664D]" data-lucide="check-circle"></i>
              Team licence (up to 3 seats)
            </li>
</ul>
<button aria-label="Enroll Now" className="mt-8 w-full inline-flex justify-center items-center gap-2 rounded-lg px-6 py-4 font-semibold text-white hover:-translate-y-0.5 hover:shadow-lg transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#000]" style={{background: '#000'}}>
            Enroll Now
            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</section>

<section className="bg-[#FFF7F2]/80 py-24" id="faq">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center">Frequently Asked Questions</h2>
<div className="mt-12 space-y-4">
<details className="group rounded-lg bg-white shadow-sm border p-4">
<summary className="flex items-center justify-between cursor-pointer">
<span className="font-medium">How much time do I need each week?</span>
<i className="w-4 h-4 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-[#000]/80">
              Roughly 3–4 hours for calls and 2 hours for implementation. Most operators save that back in week one.
            </p>
</details>
<details className="group rounded-lg bg-white shadow-sm border p-4">
<summary className="flex items-center justify-between cursor-pointer">
<span className="font-medium">Do I need coding experience?</span>
<i className="w-4 h-4 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-[#000]/80">
              No. We leverage visual-builder tools and provide code snippets when beneficial.
            </p>
</details>
<details className="group rounded-lg bg-white shadow-sm border p-4">
<summary className="flex items-center justify-between cursor-pointer">
<span className="font-medium">Can my whole team attend?</span>
<i className="w-4 h-4 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-[#000]/80">
              Yes, up to 3 seats are included. Need more? Email us for enterprise options.
            </p>
</details>
</div>
</div>
</section>
</main>

<section className="relative overflow-hidden py-24">
<div className="absolute inset-0 pointer-events-none flex justify-center">
<div className="w-[40rem] h-[40rem] rounded-full blur-3xl opacity-25" style={{background: '#1054FF'}}></div>
</div>
<div className="relative max-w-xl mx-auto px-6 text-center">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Ready to build your AI advantage?</h2>
<p className="mt-4 text-lg text-white/90">The next cohort kicks off soon. Secure your seat today.</p>
<button aria-label="Join the Sprint" className="mt-10 inline-flex items-center gap-3 rounded-xl px-10 py-5 text-lg font-semibold text-[#000] hover:-translate-y-0.5 hover:shadow-2xl transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" style={{background: '#FFF'}}>
        Join the Sprint
        <i className="w-6 h-6" data-lucide="arrow-right"></i>
</button>
</div>
</section>

<footer className="border-t bg-white">
<div className="max-w-6xl mx-auto px-6 py-12 flex flex-col items-center gap-8">
<a className="flex items-center gap-2 font-semibold hover:opacity-80" href="https://frameworkfriday.com" rel="noopener" target="_blank">
<span aria-hidden="true" className="flex items-center justify-center w-5 h-5 rounded-full" style={{background: '#F0532D'}}>
<i className="w-3 h-3 text-white" data-lucide="sparkles"></i>
</span>
        FrameworkFriday.com
      </a>
<nav aria-label="Footer" className="flex flex-wrap justify-center gap-6 text-sm">
<a className="hover:underline" href="#">Blog</a>
<a className="hover:underline" href="#">All-In on AI | Free Community</a>
<a className="hover:underline" href="#">Builder Launch Waitlist</a>
</nav>
<p className="text-xs text-[#000]/60 text-center">© <span id="year"></span> AI My Business. All rights reserved.</p>
</div>
</footer>



    </>
  );
}
