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
      
      // Init icons
      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons();

        // Billing toggle
        const toggle = document.getElementById('billingToggle');
        const knob = document.getElementById('billingKnob');
        let yearly = false;

        const updatePrices = () => {
          document.querySelectorAll('.price').forEach(el => {
            el.textContent = yearly ? el.dataset.yearly : el.dataset.monthly;
          });
          knob.style.transform = yearly ? 'translateX(24px)' : 'translateX(0)';
        };

        toggle.addEventListener('click', () => {
          yearly = !yearly;
          updatePrices();
        });

        updatePrices();
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
      

<header className="relative z-30">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<a className="flex items-center gap-2" href="#">
<div className="h-8 w-8 rounded-md bg-gradient-to-br from-[#B6E388] to-[#7EC27F] shadow-sm" style={{}}></div>
<span className="text-lg font-semibold tracking-tight text-neutral-900 font-montserrat" style={{}}>Pulseboard</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm text-neutral-700" style={{}}>
<a className="hover:text-neutral-900 font-montserrat" href="#" style={{}}>Features</a>
<a className="hover:text-neutral-900 font-montserrat" href="#" style={{}}>Use cases</a>
<a className="hover:text-neutral-900 font-montserrat" href="#" style={{}}>Pricing</a>
<a className="hover:text-neutral-900 font-montserrat" href="#" style={{}}>Docs</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 hover:bg-neutral-50 text-sm font-medium text-neutral-900 font-montserrat bg-white border-neutral-200 border rounded-md pt-2 pr-3 pb-2 pl-3 shadow-sm" href="#" style={{}}>
<svg className="lucide lucide-log-in h-4 w-4" data-lucide="log-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 17 5-5-5-5"></path><path d="M15 12H3"></path><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path></svg>
              Sign in
            </a>
<a className="inline-flex items-center gap-2 rounded-md bg-[#B6E388] px-3.5 py-2.5 text-sm font-medium text-neutral-900 shadow-sm hover:bg-[#A9D97B] font-montserrat" href="#" style={{}}>
<svg className="lucide lucide-rocket h-4 w-4" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
              Get started
            </a>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden">

<div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#EAF7E6] via-[#DFF3D9] to-white"></div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-24">
<div className="mx-auto max-w-3xl text-center">
<p className="inline-flex items-center gap-2 rounded-full border border-[#CFEEC6] bg-white/70 px-3 py-1 text-xs font-medium text-neutral-700 backdrop-blur font-montserrat" style={{}}>
<svg className="lucide lucide-sparkles h-4 w-4 text-[#5ABF6A]" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
            Now with TikTok & Threads scheduling
          </p>
<h1 className="sm:text-5xl md:text-6xl text-4xl font-semibold text-neutral-900 tracking-tight mt-6 font-playfair" style={{}}>
            Plan, publish, and analyze your social channels
          </h1>
<p className="mt-5 text-base md:text-lg text-neutral-700 font-montserrat" style={{}}>
            Schedule posts, collaborate with your team, and grow every channel from one place.
          </p>
<div className="mt-8 flex items-center justify-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-[#B6E388] px-5 py-3 text-sm font-medium text-neutral-900 shadow-sm hover:bg-[#A9D97B] font-montserrat" href="#" style={{}}>
              Start free
              <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-5 py-3 text-sm font-medium text-neutral-900 shadow-sm hover:bg-neutral-50 font-montserrat" href="#" style={{}}>
<svg className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
              Watch demo
            </a>
</div>

<div className="mt-12 grid grid-cols-2 gap-6 opacity-70 sm:grid-cols-4">
<div className="flex items-center justify-center text-sm text-neutral-600 font-montserrat" style={{}}>Instagram</div>
<div className="flex items-center justify-center text-sm text-neutral-600 font-montserrat" style={{}}>TikTok</div>
<div className="flex items-center justify-center text-sm text-neutral-600 font-montserrat" style={{}}>LinkedIn</div>
<div className="flex items-center justify-center text-sm text-neutral-600 font-montserrat" style={{}}>YouTube</div>
</div>
</div>
</div>
</section>

<section className="relative py-16 sm:py-20">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid items-start gap-10 md:grid-cols-2">
<div className="rounded-xl border border-neutral-200 bg-white p-3 shadow-[0_10px_40px_rgba(16,94,87,0.10)]" style={{}}>
<img alt="Social calendar interface" className="h-[380px] w-full rounded-lg object-cover" src="/assets/4f3b6477-f3b8-41b3-982c-556d66864688_1600w.jpg" />
</div>
<div>
<div className="inline-flex items-center gap-2 rounded-full bg-[#E7F6E8] px-3 py-1 text-xs font-medium text-[#0E5A5A] font-montserrat" style={{}}>
<svg className="lucide lucide-search h-4 w-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
              Content planner
            </div>
<h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight font-playfair" style={{}}>Plan content, stay consistent</h2>
<p className="mt-3 text-neutral-700 font-montserrat" style={{}}>
              Visual calendar, drag-and-drop slots, and AI optimization for every channel.
            </p>
<ul className="mt-6 space-y-3">
<li className="flex items-start gap-3">
<svg className="lucide lucide-check-circle-2 mt-0.5 h-5 w-5 text-[#5ABF6A]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-neutral-800 font-montserrat" style={{}}>Auto-schedule at the best times per platform.</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check-circle-2 mt-0.5 h-5 w-5 text-[#5ABF6A]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-neutral-800 font-montserrat" style={{}}>Repurpose posts to fit each channel in one click.</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check-circle-2 mt-0.5 h-5 w-5 text-[#5ABF6A]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-neutral-800 font-montserrat" style={{}}>Track status from draft to approved to published.</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="relative py-10 sm:py-12">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid gap-6 md:grid-cols-2">
<div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-[0_10px_40px_rgba(16,94,87,0.08)]" style={{}}>
<h3 className="text-2xl font-semibold tracking-tight font-playfair" style={{}}>Publish everywhere from one place.</h3>
<p className="mt-2 text-neutral-700 font-montserrat" style={{}}>Create, preview, and queue posts across all your channels.</p>
<ul className="mt-4 space-y-3">
<li className="flex items-center gap-2 text-neutral-800 font-montserrat" style={{}}>
<svg className="lucide lucide-sparkles h-5 w-5 text-[#5ABF6A]" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                AI captions and hashtag suggestions
              </li>
<li className="flex items-center gap-2 text-neutral-800 font-montserrat" style={{}}>
<svg className="lucide lucide-shield-check h-5 w-5 text-[#5ABF6A]" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
                Approval workflows and brand guardrails
              </li>
</ul>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-3 shadow-[0_10px_40px_rgba(16,94,87,0.08)]" style={{}}>
<img alt="Publishing preview" className="h-[260px] w-full rounded-lg object-cover" src="/assets/e96fb5ad-3bd8-4ca6-9ae0-535aee18aa24_1600w.jpg" />
<div className="p-4">
<p className="text-neutral-700 font-montserrat" style={{}}>Export analytics and share read-only calendars with clients.</p>
</div>
</div>
</div>
</div>
</section>

<div className="relative isolate">
<div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white via-[#EAF7E6] to-white opacity-90"></div>
<section className="py-14">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight font-playfair" style={{}}>Don't just take our word for it</h3>
<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
<div className="rounded-xl border border-neutral-200 bg-white p-6 text-left shadow-sm" style={{}}>
<div className="flex items-center gap-3">
<img alt="" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop" />
<div>
<p className="text-sm font-medium text-neutral-900 font-montserrat" style={{}}>Aya R.</p>
<p className="text-xs text-neutral-600 font-montserrat" style={{}}>Creator</p>
</div>
</div>
<p className="mt-4 text-neutral-700 font-montserrat" style={{}}>Helps me plan a month of content in an afternoon.</p>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-6 text-left shadow-sm" style={{}}>
<div className="flex items-center gap-3">
<img alt="" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=256&auto=format&fit=crop" />
<div>
<p className="text-sm font-medium text-neutral-900 font-montserrat" style={{}}>Marco S.</p>
<p className="text-xs text-neutral-600 font-montserrat" style={{}}>Social Media Manager</p>
</div>
</div>
<p className="mt-4 text-neutral-700 font-montserrat" style={{}}>Approvals and scheduling finally in one tool.</p>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-6 text-left shadow-sm" style={{}}>
<div className="flex items-center gap-3">
<img alt="" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=256&auto=format&fit=crop" />
<div className="">
<p className="text-sm font-medium text-neutral-900 font-montserrat" style={{}}>Lin T.</p>
<p className="text-xs text-neutral-600 font-montserrat" style={{}}>Brand Lead</p>
</div>
</div>
<p className="mt-4 text-neutral-700 font-montserrat" style={{}}>Clean UI, strong insights, and easy exports.</p>
</div>
</div>
</div>
</section>
</div>

<section className="py-16 sm:py-20">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<h3 className="text-center text-3xl md:text-4xl font-semibold tracking-tight font-playfair" style={{}}>Everything you need to grow on social</h3>
<div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
<div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm" style={{}}>
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E7F6E8] text-[#0E5A5A]" style={{}}>
<svg className="lucide lucide-upload h-5 w-5" data-lucide="upload" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v12"></path><path d="m17 8-5-5-5 5"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path></svg>
</div>
<h4 className="mt-4 text-lg font-medium tracking-tight font-montserrat" style={{}}>Connect channels</h4>
<p className="mt-2 text-sm text-neutral-700 font-montserrat" style={{}}>Link Instagram, TikTok, LinkedIn, YouTube, and more.</p>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm" style={{}}>
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E7F6E8] text-[#0E5A5A]" style={{}}>
<svg className="lucide lucide-highlighter h-5 w-5" data-lucide="highlighter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 11-6 6v3h9l3-3"></path><path d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"></path></svg>
</div>
<h4 className="mt-4 text-lg font-medium tracking-tight font-montserrat" style={{}}>Calendar scheduling</h4>
<p className="mt-2 text-sm text-neutral-700 font-montserrat" style={{}}>Drag-and-drop posts and auto-queue at peak times.</p>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm" style={{}}>
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E7F6E8] text-[#0E5A5A]" style={{}}>
<svg className="lucide lucide-link-2 h-5 w-5" data-lucide="link-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 17H7A5 5 0 0 1 7 7h2"></path><path d="M15 7h2a5 5 0 1 1 0 10h-2"></path><line x1="8" x2="16" y1="12" y2="12"></line></svg>
</div>
<h4 className="mt-4 text-lg font-medium tracking-tight font-montserrat" style={{}}>Approval workflows</h4>
<p className="mt-2 text-sm text-neutral-700 font-montserrat" style={{}}>Assign reviewers and track status with an audit trail.</p>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm" style={{}}>
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E7F6E8] text-[#0E5A5A]" style={{}}>
<svg className="lucide lucide-clock h-5 w-5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<h4 className="mt-4 text-lg font-medium tracking-tight font-montserrat" style={{}}>Best time to post</h4>
<p className="mt-2 text-sm text-neutral-700 font-montserrat" style={{}}>Recommendations tailored to your audience.</p>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm" style={{}}>
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E7F6E8] text-[#0E5A5A]" style={{}}>
<svg className="lucide lucide-file-text h-5 w-5" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>
<h4 className="mt-4 text-lg font-medium tracking-tight font-montserrat" style={{}}>AI caption generator</h4>
<p className="mt-2 text-sm text-neutral-700 font-montserrat" style={{}}>On‑brand captions with tone and emoji controls.</p>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm" style={{}}>
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E7F6E8] text-[#0E5A5A]" style={{}}>
<svg className="lucide lucide-line-chart h-5 w-5" data-lucide="line-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
</div>
<h4 className="mt-4 text-lg font-medium tracking-tight font-montserrat" style={{}}>Analytics</h4>
<p className="mt-2 text-sm text-neutral-700 font-montserrat" style={{}}>Performance, reach, and content breakdowns.</p>
</div>
</div>
</div>
</section>

<section className="relative border-green-400 pt-20 pb-20">
<div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0E5A5A] to-[#0F6B66]"></div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-white">
<div className="grid items-center gap-10 md:grid-cols-2">
<div>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white font-playfair" style={{}}>Social growth for the AI age</h3>
<p className="mt-3 text-white/80 font-montserrat" style={{}}>
              Plan smarter, collaborate faster, and keep your brand consistent everywhere.
            </p>
</div>
<div className="grid grid-cols-3 gap-6 text-center md:text-left">
<div>
<div className="text-4xl font-semibold tracking-tight font-playfair" style={{}}>5</div>
<div className="mt-1 text-sm text-white/80 font-montserrat" style={{}}>minutes per post</div>
</div>
<div>
<div className="text-4xl font-semibold tracking-tight font-playfair" style={{}}>50</div>
<div className="mt-1 text-sm text-white/80 font-montserrat" style={{}}>posts/day</div>
</div>
<div>
<div className="text-4xl font-semibold tracking-tight font-playfair" style={{}}>50%</div>
<div className="mt-1 text-sm text-white/80 font-montserrat" style={{}}>time saved</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20" id="pricing">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center">
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight font-playfair" style={{}}>Pick a plan that's right for you</h3>

<div className="mt-6 inline-flex items-center gap-3 rounded-full border border-neutral-200 bg-white px-2 py-1 shadow-sm" style={{}}>
<span className="text-sm text-neutral-700 font-montserrat" style={{}}>Monthly</span>
<button className="relative h-6 w-12 rounded-full bg-[#E7F6E8] transition-colors" id="billingToggle" style={{}}>
<span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-[#0E5A5A] transition-transform" id="billingKnob" style={{transform: `translateX(0px)`}}></span>
</button>
<span className="text-sm text-neutral-700 font-montserrat" style={{}}>Yearly</span>
<span className="ml-2 rounded-full bg-[#B6E388] px-2 py-0.5 text-xs font-medium text-neutral-900 font-montserrat" style={{}}>Save 20%</span>
</div>
</div>
<div className="mt-10 grid gap-6 md:grid-cols-4">

<div className="flex flex-col rounded-xl border border-neutral-200 bg-white p-6 shadow-sm" style={{}}>
<h4 className="text-lg font-medium tracking-tight font-montserrat" style={{}}>Basic</h4>
<div className="mt-3 text-3xl font-semibold tracking-tight font-playfair" style={{}}>$0</div>
<p className="mt-1 text-sm text-neutral-600 font-montserrat" style={{}}>For getting started.</p>
<ul className="mt-4 space-y-2 text-sm text-neutral-800" style={{}}>
<li className="flex items-center gap-2 font-montserrat" style={{}}><svg className="lucide lucide-check h-4 w-4 text-[#5ABF6A]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>10 posts/month</li>
<li className="flex items-center gap-2 font-montserrat" style={{}}><svg className="lucide lucide-check h-4 w-4 text-[#5ABF6A]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Basic analytics</li>
</ul>
<a className="mt-6 inline-flex items-center justify-center rounded-md border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50 font-montserrat" href="#" style={{}}>Start</a>
</div>

<div className="flex flex-col shadow-[0_10px_40px_rgba(16,94,87,0.10)] bg-white border-neutral-200 border rounded-xl pt-6 pr-6 pb-6 pl-6" style={{}}>
<h4 className="text-lg font-medium tracking-tight font-montserrat" style={{}}>Pro</h4>
<div className="mt-3 text-3xl font-semibold tracking-tight">
<span className="price font-playfair" data-monthly="$10" data-yearly="$8" style={{}}>$10</span>
<span className="text-base font-normal text-neutral-600 font-montserrat" style={{}}>/mo</span>
</div>
<p className="mt-1 text-sm text-neutral-600 font-montserrat" style={{}}>For growing creators and teams.</p>
<ul className="mt-4 space-y-2 text-sm text-neutral-800" style={{}}>
<li className="flex items-center gap-2 font-montserrat" style={{}}><svg className="lucide lucide-check h-4 w-4 text-[#5ABF6A]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Unlimited scheduling</li>
<li className="flex items-center gap-2 font-montserrat" style={{}}><svg className="lucide lucide-check h-4 w-4 text-[#5ABF6A]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>AI captions & hashtag suggestions</li>
<li className="flex items-center gap-2 font-montserrat" style={{}}><svg className="lucide lucide-check h-4 w-4 text-[#5ABF6A]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Calendar & analytics export</li>
</ul>
<a className="mt-6 inline-flex items-center justify-center rounded-md bg-[#0E5A5A] px-4 py-2 text-sm font-medium text-white hover:bg-[#0F6B66] font-montserrat" href="#" style={{}}>Buy Pro</a>
</div>

<div className="flex flex-col rounded-xl border border-neutral-200 bg-white p-6 shadow-sm" style={{}}>
<h4 className="text-lg font-medium tracking-tight font-montserrat" style={{}}>Team</h4>
<div className="mt-3 text-3xl font-semibold tracking-tight">
<span className="price font-playfair" data-monthly="$25" data-yearly="$20" style={{}}>$25</span>
<span className="text-base font-normal text-neutral-600 font-montserrat" style={{}}>/user/mo</span>
</div>
<p className="mt-1 text-sm text-neutral-600 font-montserrat" style={{}}>For agencies & brands.</p>
<ul className="mt-4 space-y-2 text-sm text-neutral-800" style={{}}>
<li className="flex items-center gap-2 font-montserrat" style={{}}><svg className="lucide lucide-check h-4 w-4 text-[#5ABF6A]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Multiple workspaces</li>
<li className="flex items-center gap-2 font-montserrat" style={{}}><svg className="lucide lucide-check h-4 w-4 text-[#5ABF6A]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Roles & approvals</li>
<li className="flex items-center gap-2 font-montserrat" style={{}}><svg className="lucide lucide-check h-4 w-4 text-[#5ABF6A]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Priority support</li>
</ul>
<a className="mt-6 inline-flex items-center justify-center rounded-md border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50 font-montserrat" href="#" style={{}}>Start team</a>
</div>

<div className="flex flex-col rounded-xl border border-neutral-200 bg-white p-6 shadow-sm" style={{}}>
<h4 className="text-lg font-medium tracking-tight font-montserrat" style={{}}>Enterprise</h4>
<div className="mt-3 text-3xl font-semibold tracking-tight font-playfair" style={{}}>Custom</div>
<p className="mt-1 text-sm text-neutral-600 font-montserrat" style={{}}>Security & scale.</p>
<ul className="mt-4 space-y-2 text-sm text-neutral-800" style={{}}>
<li className="flex items-center gap-2 font-montserrat" style={{}}><svg className="lucide lucide-check h-4 w-4 text-[#5ABF6A]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>SAML SSO</li>
<li className="flex items-center gap-2 font-montserrat" style={{}}><svg className="lucide lucide-check h-4 w-4 text-[#5ABF6A]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Custom workflows</li>
<li className="flex items-center gap-2 font-montserrat" style={{}}><svg className="lucide lucide-check h-4 w-4 text-[#5ABF6A]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>On-prem options</li>
</ul>
<a className="mt-6 inline-flex items-center justify-center rounded-md bg-[#B6E388] px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-[#A9D97B] font-montserrat" href="#" style={{}}>Contact sales</a>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20">
<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
<h3 className="text-center text-3xl md:text-4xl font-semibold tracking-tight font-playfair" style={{}}>Frequently asked questions</h3>
<div className="mt-8 divide-y divide-neutral-200 rounded-xl border border-neutral-200 bg-white" style={{}}>
<details className="group p-6 open:bg-[#F8FBF7]">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="text-neutral-900 font-montserrat" style={{}}>Which platforms do you support?</span>
<svg className="lucide lucide-chevron-down h-5 w-5 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-neutral-700 font-montserrat" style={{}}>Instagram, TikTok, LinkedIn, YouTube, Facebook, and more.</p>
</details>
<details className="group p-6">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="text-neutral-900 font-montserrat" style={{}}>How does scheduling work?</span>
<svg className="lucide lucide-chevron-down h-5 w-5 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-neutral-700 font-montserrat" style={{}}>Queue posts or set exact times; we suggest best times based on your audience.</p>
</details>
<details className="group p-6">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="text-neutral-900 font-montserrat" style={{}}>Is my data private?</span>
<svg className="lucide lucide-chevron-down h-5 w-5 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-neutral-700 font-montserrat" style={{}}>Your documents remain encrypted at rest and in transit.</p>
</details>
</div>
</div>
</section>

<section className="relative pt-20 pb-20">
<div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0E5A5A] to-[#0F6B66]"></div>
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
<h3 className="md:text-3xl text-2xl font-semibold text-white tracking-tight font-playfair" style={{}}>What sets it apart?</h3>
<p className="mt-2 text-white/80 font-montserrat" style={{}}>Smarter timing, cleaner tracking, human control.</p>
<div className="mt-8 grid gap-6 sm:grid-cols-3">
<div className="rounded-xl bg-white p-6 text-left shadow-sm" style={{}}>
<div className="flex items-center gap-2 text-[#0E5A5A]">
<svg className="lucide lucide-check-circle-2 h-5 w-5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm font-medium font-montserrat" style={{}}>Best time to post</span>
</div>
<p className="mt-2 text-sm text-neutral-700 font-montserrat" style={{}}>Recommendations learned from your audience and history.</p>
</div>
<div className="rounded-xl bg-white p-6 text-left shadow-sm" style={{}}>
<div className="flex items-center gap-2 text-[#0E5A5A]">
<i className="h-5 w-5" data-lucide="-circle-2"></i>
<span className="text-sm font-medium font-montserrat" style={{}}>Auto UTM tagging</span>
</div>
<p className="mt-2 text-sm text-neutral-700 font-montserrat" style={{}}>Clean campaign tracking across links and channels.</p>
</div>
<div className="rounded-xl bg-white p-6 text-left shadow-sm" style={{}}>
<div className="flex items-center gap-2 text-[#0E5A5A]">
<svg className="lucide lucide-check-circle-2 h-5 w-5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm font-medium font-montserrat" style={{}}>Human approvals</span>
</div>
<p className="mt-2 text-sm text-neutral-700 font-montserrat" style={{}}>Clear ownership and sign‑off before anything goes live.</p>
</div>
</div>
</div>
</section>

<section className="relative overflow-hidden pt-16 pb-16">
<div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#EAF7E6] via-[#DFF3D9] to-white"></div>
<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight font-playfair" style={{}}>Save time, post smarter. Try it free.</h3>
<div className="mt-6 flex items-center justify-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-[#B6E388] px-5 py-3 text-sm font-medium text-neutral-900 shadow-sm hover:bg-[#A9D97B] font-montserrat" href="#" style={{}}>
            Create account
            <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-5 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-50 font-montserrat" href="#" style={{}}>
<svg className="lucide lucide-message-square h-4 w-4" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
            Talk to sales
          </a>
</div>
</div>
</section>

<footer className="border-t border-neutral-200" style={{}}>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="flex flex-col items-center justify-between gap-6 md:flex-row">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-md bg-gradient-to-br from-[#B6E388] to-[#7EC27F]" style={{}}></div>
<span className="text-sm font-medium font-montserrat" style={{}}>Pulseboard</span>
</div>
<p className="text-xs text-neutral-500 font-montserrat" style={{}}>© 2025 Pulseboard. All rights reserved.</p>
<div className="flex items-center gap-4 text-neutral-600" style={{}}>
<a aria-label="Twitter" className="hover:text-neutral-900" href="#" style={{}}><svg className="lucide lucide-twitter h-5 w-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a aria-label="GitHub" className="hover:text-neutral-900" href="#" style={{}}><svg className="lucide lucide-github h-5 w-5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a>
<a aria-label="Mail" className="hover:text-neutral-900" href="#" style={{}}><svg className="lucide lucide-mail h-5 w-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
