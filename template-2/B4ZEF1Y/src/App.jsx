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
      
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
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
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/crystalball-2xfDjbH6YAl4dFHRGQCWobQt" width="100%"></iframe></div>

<div className="w-full bg-violet-50/80 border-b border-violet-100">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2 text-center text-sm text-violet-800">
        HIPAA-compliant referrals with real-time updates. 24/7 Admissions.
      </div>
</div>

<header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200/70">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-violet-600 text-white flex items-center justify-center tracking-tight text-sm font-semibold">SH</div>
<div className="flex flex-col leading-none">
<span className="text-base font-semibold tracking-tight">Serenity Hospice</span>
<span className="text-xs text-slate-500">Referral App</span>
</div>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#features">Features</a>
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#how">How it works</a>
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#security">Security</a>
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#faq">FAQ</a>
</nav>
<div className="hidden md:flex items-center gap-3">
<a className="px-4 py-2 rounded-md border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-sm text-slate-800 transition-colors" href="#demo">Request demo</a>
<a className="px-4 py-2 rounded-md bg-violet-600 hover:bg-violet-700 text-white text-sm shadow-sm" href="#refer">Refer now</a>
</div>
<button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-slate-200 hover:bg-slate-50">
<svg className="lucide lucide-menu h-5 w-5 text-slate-700" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</header>

<section className="relative overflow-hidden">
<div aria-hidden="true" className="absolute inset-0 pointer-events-none">
<div className="absolute -top-24 -right-16 h-72 w-72 rounded-full bg-violet-100 blur-3xl opacity-60"></div>
<div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-fuchsia-100 blur-3xl opacity-60"></div>
</div>
<div className="max-w-7xl sm:px-6 lg:px-8 md:py-24 mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div>
<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900" style={{animation: `fadeInUp .8s ease both .0s`}}>
              Compassionate hospice referrals in minutes
            </h1>
<p className="mt-4 text-base sm:text-lg text-slate-600" style={{animation: `fadeInUp .8s ease both .08s`}}>
              A secure, mobile-first way for clinicians and families to request hospice care, track status, and share documents—anytime.
            </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3" style={{animation: `fadeInUp .8s ease both .16s`}}>
<a className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-violet-600 hover:bg-violet-700 text-white text-sm shadow-sm" href="#refer">
<svg className="lucide lucide-send h-5 w-5 mr-2" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
                Start a referral
              </a>
<a className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-800 text-sm" href="#demo">
<svg className="lucide lucide-calendar h-5 w-5 mr-2" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
                Book a quick demo
              </a>
</div>
<div className="mt-6 flex items-center gap-4 text-xs text-slate-600" style={{animation: `fadeInUp .8s ease both .24s`}}>
<div className="inline-flex items-center gap-2">
<svg className="lucide lucide-shield-check h-4 w-4 text-violet-600" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
                HIPAA-compliant
              </div>
<div className="inline-flex items-center gap-2">
<svg className="lucide lucide-clock h-4 w-4 text-violet-600" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
                24/7 admissions
              </div>
<div className="inline-flex items-center gap-2">
<svg className="lucide lucide-smartphone h-4 w-4 text-violet-600" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
                iOS & Android
              </div>
</div>
</div>

<div className="relative" style={{animation: `blurIn .9s ease both .15s`}}>
<div className="mx-auto max-w-sm">
<div className="relative rounded-[2rem] border border-slate-200 bg-white shadow-xl p-3">
<div className="absolute -top-2 left-1/2 -translate-x-1/2 h-6 w-32 rounded-full bg-slate-200/80"></div>
<div className="rounded-[1.5rem] border border-slate-200 overflow-hidden">

<div className="flex items-center justify-between px-4 py-2 bg-slate-50 border-b border-slate-200">
<span className="text-xs text-slate-500">9:41</span>
<div className="flex items-center gap-2 text-slate-500">
<svg className="lucide lucide-wifi h-4 w-4" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<svg className="lucide lucide-battery-medium h-4 w-4" data-lucide="battery-medium" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 14v-4"></path><path d="M22 14v-4"></path><path d="M6 14v-4"></path><rect height="12" rx="2" width="16" x="2" y="6"></rect></svg>
</div>
</div>

<div className="px-4 py-3 border-b border-slate-200 bg-white">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded bg-violet-600 text-white text-[10px] font-semibold tracking-tight flex items-center justify-center">SH</div>
<span className="text-sm font-medium text-slate-800">New Referral</span>
</div>
<span className="text-[11px] text-emerald-600 inline-flex items-center">
<svg className="lucide lucide-lock h-3.5 w-3.5 mr-1" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> Secure
                      </span>
</div>
</div>

<div className="p-4 bg-white space-y-3">
<div className="space-y-1.5">
<label className="text-[11px] text-slate-600">Patient Name</label>
<input className="w-full rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-violet-200 focus:border-violet-400 text-sm px-3 py-2" placeholder="Jane Doe" />
</div>
<div className="grid grid-cols-2 gap-3">
<div className="space-y-1.5">
<label className="text-[11px] text-slate-600">DOB</label>
<input className="w-full rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-violet-200 focus:border-violet-400 text-sm px-3 py-2" placeholder="MM/DD/YYYY" />
</div>
<div className="space-y-1.5">
<label className="text-[11px] text-slate-600">Diagnosis</label>
<input className="w-full rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-violet-200 focus:border-violet-400 text-sm px-3 py-2" placeholder="e.g., CHF" />
</div>
</div>
<div className="space-y-1.5">
<label className="text-[11px] text-slate-600">Referring Clinician</label>
<input className="w-full rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-violet-200 focus:border-violet-400 text-sm px-3 py-2" placeholder="Your name" />
</div>
<div className="space-y-1.5">
<label className="text-[11px] text-slate-600">Notes</label>
<textarea className="w-full rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-violet-200 focus:border-violet-400 text-sm px-3 py-2" placeholder="Brief clinical summary..." rows="3"></textarea>
</div>
<div className="flex items-center justify-between pt-1">
<button className="inline-flex items-center px-3 py-2 text-xs rounded-md border border-slate-200 hover:bg-slate-50">
<svg className="lucide lucide-paperclip h-4 w-4 mr-1.5" data-lucide="paperclip" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path></svg>
                        Attach file
                      </button>
<button className="inline-flex items-center px-4 py-2 text-xs rounded-md bg-violet-600 hover:bg-violet-700 text-white">
<svg className="lucide lucide-send h-4 w-4 mr-1.5" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
                        Submit
                      </button>
</div>
</div>

<div className="flex items-center justify-around py-2 border-t border-slate-200 bg-slate-50">
<button className="text-[11px] text-slate-600 inline-flex items-center gap-1">
<svg className="lucide lucide-home h-4 w-4" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg> Home
                    </button>
<button className="text-[11px] text-violet-700 inline-flex items-center gap-1">
<svg className="lucide lucide-file-plus-2 h-4 w-4" data-lucide="file-plus-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M3 15h6"></path><path d="M6 12v6"></path></svg> New
                    </button>
<button className="text-[11px] text-slate-600 inline-flex items-center gap-1">
<svg className="lucide lucide-bell h-4 w-4" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg> Updates
                    </button>
</div>
</div>
</div>
<div className="absolute -left-6 -bottom-6 hidden md:block" style={{animation: `slideIn .9s ease both .25s`}}>
<div className="rounded-xl border border-slate-200 bg-white shadow-md px-4 py-3">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-violet-600/10 flex items-center justify-center text-violet-700">
<svg className="lucide lucide-sparkles h-4 w-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div>
<p className="text-xs text-slate-800">Average referral time</p>
<p className="text-sm font-medium text-slate-900">Under 3 minutes</p>
</div>
</div>
</div>
</div>
<div className="absolute -right-6 -top-6 hidden md:block" style={{animation: `slideIn .9s ease both .3s`}}>
<div className="rounded-xl border border-slate-200 bg-white shadow-md px-4 py-3">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-emerald-600/10 flex items-center justify-center text-emerald-700">
<svg className="lucide lucide-check-circle h-4 w-4" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
<div>
<p className="text-xs text-slate-800">Approval rate</p>
<p className="text-sm font-medium text-slate-900">99.2%</p>
</div>
</div>
</div>
</div>
</div>
</div> 
</div>
</div>
</section>

<section className="py-14 md:py-20 border-t border-slate-200" id="features">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Designed for fast, secure referrals</h2>
<p className="mt-2 text-slate-600">Everything you need to get patients the care they deserve—without the back-and-forth.</p>
</div>
<div className="mt-10 grid md:grid-cols-3 gap-6">
<div className="rounded-xl border border-slate-200 p-6 bg-white hover:shadow-sm transition-shadow" style={{animation: `fadeInUp .8s ease both .05s`}}>
<div className="h-9 w-9 rounded-md bg-violet-600/10 text-violet-700 flex items-center justify-center mb-4">
<svg className="lucide lucide-file-plus-2 h-5 w-5" data-lucide="file-plus-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M3 15h6"></path><path d="M6 12v6"></path></svg>
</div>
<h3 className="text-lg font-medium tracking-tight">Simple referral form</h3>
<p className="mt-2 text-sm text-slate-600">Create a referral in minutes with smart defaults, attachments, and status tracking.</p>
</div>
<div className="rounded-xl border border-slate-200 p-6 bg-white hover:shadow-sm transition-shadow" style={{animation: `fadeInUp .8s ease both .1s`}}>
<div className="h-9 w-9 rounded-md bg-violet-600/10 text-violet-700 flex items-center justify-center mb-4">
<svg className="lucide lucide-shield-check h-5 w-5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-lg font-medium tracking-tight">HIPAA-grade security</h3>
<p className="mt-2 text-sm text-slate-600">End-to-end encryption, access controls, and audit logs keep PHI protected.</p>
</div>
<div className="rounded-xl border border-slate-200 p-6 bg-white hover:shadow-sm transition-shadow" style={{animation: `fadeInUp .8s ease both .15s`}}>
<div className="h-9 w-9 rounded-md bg-violet-600/10 text-violet-700 flex items-center justify-center mb-4">
<svg className="lucide lucide-bell h-5 w-5" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</div>
<h3 className="text-lg font-medium tracking-tight">Real-time updates</h3>
<p className="mt-2 text-sm text-slate-600">Get notified at each step—intake, eligibility, and admission—so everyone stays aligned.</p>
</div>
</div>
</div>
</section>

<section className="py-14 md:py-20 border-t border-slate-200" id="how">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-10 items-start">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">How it works</h2>
<p className="mt-2 text-slate-600">From referral to admission—clear, predictable, and secure.</p>
<div className="mt-8 space-y-6">
<div className="flex gap-4" style={{animation: `fadeInUp .8s ease both .05s`}}>
<div className="h-10 w-10 rounded-lg border border-slate-200 flex items-center justify-center text-violet-700 bg-white">1</div>
<div>
<h4 className="text-base font-medium tracking-tight">Create a referral</h4>
<p className="text-sm text-slate-600">Enter patient details, diagnosis, and notes on mobile or desktop. Attach clinical documents as needed.</p>
</div>
</div>
<div className="flex gap-4" style={{animation: `fadeInUp .8s ease both .1s`}}>
<div className="h-10 w-10 rounded-lg border border-slate-200 flex items-center justify-center text-violet-700 bg-white">2</div>
<div>
<h4 className="text-base font-medium tracking-tight">We verify eligibility</h4>
<p className="text-sm text-slate-600">Our team reviews and coordinates with family and providers, keeping you informed at each step.</p>
</div>
</div>
<div className="flex gap-4" style={{animation: `fadeInUp .8s ease both .15s`}}>
<div className="h-10 w-10 rounded-lg border border-slate-200 flex items-center justify-center text-violet-700 bg-white">3</div>
<div>
<h4 className="text-base font-medium tracking-tight">Admission and support</h4>
<p className="text-sm text-slate-600">We schedule admission promptly and provide ongoing updates and resources for families.</p>
</div>
</div>
</div>
<div className="mt-8 flex items-center gap-3" style={{animation: `fadeInUp .8s ease both .2s`}}>
<a className="inline-flex items-center px-5 py-3 rounded-md bg-violet-600 hover:bg-violet-700 text-white text-sm shadow-sm" href="#refer">
<svg className="lucide lucide-send h-5 w-5 mr-2" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
                Start a referral
              </a>
<a className="inline-flex items-center px-5 py-3 rounded-md border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-800 text-sm" href="#demo">
<svg className="lucide lucide-play-circle h-5 w-5 mr-2" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                See it in action
              </a>
</div>
</div>
<div>
<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm" style={{animation: `blurIn .85s ease both .1s`}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="Nurse" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=240&auto=format&fit=crop" style={{}} />
<div>
<p className="text-sm font-medium text-slate-900">Intake Team</p>
<p className="text-xs text-slate-500">Average response: 6 min</p>
</div>
</div>
<span className="inline-flex items-center text-xs text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-md px-2 py-1">
<svg className="lucide lucide-activity h-4 w-4 mr-1" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg> Live
                </span>
</div>
<div className="mt-5 space-y-4">
<div className="flex items-start gap-3">
<div className="h-8 w-8 rounded-full bg-violet-600/10 flex items-center justify-center text-violet-700">
<svg className="lucide lucide-file-text h-4 w-4" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<p className="text-sm font-medium text-slate-900">Referral received</p>
<span className="text-xs text-slate-500">2:14 PM</span>
</div>
<p className="text-sm text-slate-600">We’re reviewing eligibility and benefits.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="h-8 w-8 rounded-full bg-amber-600/10 flex items-center justify-center text-amber-700">
<svg className="lucide lucide-messages-square h-4 w-4" data-lucide="messages-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path><path d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1"></path></svg>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<p className="text-sm font-medium text-slate-900">Family contacted</p>
<span className="text-xs text-slate-500">2:21 PM</span>
</div>
<p className="text-sm text-slate-600">Introduced hospice services and next steps.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="h-8 w-8 rounded-full bg-emerald-600/10 flex items-center justify-center text-emerald-700">
<svg className="lucide lucide-calendar-check-2 h-4 w-4" data-lucide="calendar-check-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"></path><path d="M3 10h18"></path><path d="m16 20 2 2 4-4"></path></svg>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<p className="text-sm font-medium text-slate-900">Admission scheduled</p>
<span className="text-xs text-slate-500">2:47 PM</span>
</div>
<p className="text-sm text-slate-600">RN evaluation at 6:00 PM today.</p>
</div>
</div>
</div>
<div className="mt-5 flex items-center justify-end gap-2">
<button className="inline-flex items-center px-3 py-2 rounded-md border border-slate-200 hover:bg-slate-50 text-xs text-slate-800">
<svg className="lucide lucide-download h-4 w-4 mr-1.5" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
                  Export timeline
                </button>
<button className="inline-flex items-center px-3 py-2 rounded-md bg-violet-600 hover:bg-violet-700 text-white text-xs">
<svg className="lucide lucide-share-2 h-4 w-4 mr-1.5" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
                  Share update
                </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-14 md:py-20 border-t border-slate-200" id="security">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-3 gap-6">
<div className="md:col-span-1">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Privacy and security first</h2>
<p className="mt-2 text-slate-600">We protect PHI with strict safeguards across people, process, and technology.</p>
</div>
<div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
<div className="rounded-xl border border-slate-200 p-6 bg-white" style={{animation: `fadeInUp .8s ease both .05s`}}>
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-violet-600/10 text-violet-700 flex items-center justify-center">
<svg className="lucide lucide-lock h-5 w-5" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
<h3 className="text-base font-medium tracking-tight">Encryption</h3>
</div>
<p className="mt-2 text-sm text-slate-600">Data encrypted in transit and at rest using modern standards.</p>
</div>
<div className="rounded-xl border border-slate-200 p-6 bg-white" style={{animation: `fadeInUp .8s ease both .1s`}}>
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-violet-600/10 text-violet-700 flex items-center justify-center">
<svg className="lucide lucide-key-round h-5 w-5" data-lucide="key-round" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</div>
<h3 className="text-base font-medium tracking-tight">Access control</h3>
</div>
<p className="mt-2 text-sm text-slate-600">Role-based access, SSO support, and detailed audit logs.</p>
</div>
<div className="rounded-xl border border-slate-200 p-6 bg-white" style={{animation: `fadeInUp .8s ease both .15s`}}>
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-violet-600/10 text-violet-700 flex items-center justify-center">
<svg className="lucide lucide-file-lock-2 h-5 w-5" data-lucide="file-lock-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v1"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><rect height="5" rx="1" width="8" x="2" y="13"></rect><path d="M8 13v-2a2 2 0 1 0-4 0v2"></path></svg>
</div>
<h3 className="text-base font-medium tracking-tight">HIPAA compliance</h3>
</div>
<p className="mt-2 text-sm text-slate-600">BAA available, policies and procedures aligned to regulatory standards.</p>
</div>
<div className="rounded-xl border border-slate-200 p-6 bg-white" style={{animation: `fadeInUp .8s ease both .2s`}}>
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-violet-600/10 text-violet-700 flex items-center justify-center">
<svg className="lucide lucide-shield h-5 w-5" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<h3 className="text-base font-medium tracking-tight">24/7 monitoring</h3>
</div>
<p className="mt-2 text-sm text-slate-600">Proactive monitoring and rapid incident response procedures.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-14 md:py-20 border-t border-slate-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">What our partners say</h2>
<p className="mt-2 text-slate-600">Trusted by clinicians and care coordinators across hospitals and practices.</p>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-6">
</div>
</div>
</section>

<section className="py-14 md:py-20 border-t border-slate-200" id="refer">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-10">
<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm" style={{animation: `fadeInUp .8s ease both .05s`}}>
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-violet-600/10 text-violet-700 flex items-center justify-center">
<svg className="lucide lucide-send h-5 w-5" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</div>
<h3 className="text-lg font-medium tracking-tight">Start a referral</h3>
</div>
<p className="mt-1 text-sm text-slate-600">A coordinator will contact you shortly after submission.</p>
<form className="mt-5 grid grid-cols-1 gap-4">
<div>
<label className="block text-xs text-slate-600 mb-1">Your name</label>
<input className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-200 focus:border-violet-400" placeholder="Full name" />
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs text-slate-600 mb-1">Email</label>
<input className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-200 focus:border-violet-400" placeholder="you@hospital.org" type="email" />
</div>
<div>
<label className="block text-xs text-slate-600 mb-1">Phone</label>
<input className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-200 focus:border-violet-400" placeholder="(555) 123-4567" type="tel" />
</div>
</div>
<div>
<label className="block text-xs text-slate-600 mb-1">Patient initials</label>
<input className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-200 focus:border-violet-400" placeholder="J.D." />
</div>
<div>
<label className="block text-xs text-slate-600 mb-1">Notes</label>
<textarea className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-200 focus:border-violet-400" placeholder="Brief clinical summary..." rows="4"></textarea>
</div>
<div className="flex items-center justify-between">
<p className="text-xs text-slate-500 inline-flex items-center">
<svg className="lucide lucide-lock h-3.5 w-3.5 mr-1" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  Secured and encrypted
                </p>
<button className="inline-flex items-center px-4 py-2 rounded-md bg-violet-600 hover:bg-violet-700 text-white text-sm" type="button">
                  Submit referral
                </button>
</div>
</form>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm" id="demo" style={{animation: `fadeInUp .8s ease both .1s`}}>
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-violet-600/10 text-violet-700 flex items-center justify-center">
<svg className="lucide lucide-calendar h-5 w-5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</div>
<h3 className="text-lg font-medium tracking-tight">Request a quick demo</h3>
</div>
<p className="mt-1 text-sm text-slate-600">We’ll walk you through workflows for your team.</p>
<form className="mt-5 grid grid-cols-1 gap-4">
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs text-slate-600 mb-1">First name</label>
<input className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-200 focus:border-violet-400" />
</div>
<div>
<label className="block text-xs text-slate-600 mb-1">Last name</label>
<input className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-200 focus:border-violet-400" />
</div>
</div>
<div>
<label className="block text-xs text-slate-600 mb-1">Organization</label>
<input className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-200 focus:border-violet-400" placeholder="Hospital / Practice" />
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs text-slate-600 mb-1">Email</label>
<input className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-200 focus:border-violet-400" placeholder="you@org.com" type="email" />
</div>
<div>
<label className="block text-xs text-slate-600 mb-1">Role</label>
<input className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-200 focus:border-violet-400" placeholder="e.g., Case Manager" />
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-xs text-slate-500">
<svg className="lucide lucide-shield h-3.5 w-3.5" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg> We never sell your data
                </div>
<button className="inline-flex items-center px-4 py-2 rounded-md border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-800 text-sm" type="button">
                  Schedule demo
                </button>
</div>
</form>
<div className="mt-6 border-t border-slate-200 pt-6">
<p className="text-xs text-slate-600">Prefer mobile? Download the app:</p>
<div className="mt-3 flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 hover:bg-slate-50" href="#">
<svg className="lucide lucide-apple h-4 w-4" data-lucide="apple" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6.528V3a1 1 0 0 1 1-1h0"></path><path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"></path></svg>
<span className="text-xs font-medium">App Store</span>
</a>
<a className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 hover:bg-slate-50" href="#">
<svg className="lucide lucide-store h-4 w-4" data-lucide="store" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"></path><path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"></path><path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"></path></svg>
<span className="text-xs font-medium">Google Play</span>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-14 md:py-20 border-t border-slate-200" id="faq">
<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Frequently asked questions</h2>
<div className="mt-8 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
<details className="p-5 group">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-sm font-medium text-slate-900">Who can submit a referral?</span>
<svg className="lucide lucide-chevron-down h-5 w-5 text-slate-500 group-open:rotate-180 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-slate-600">Clinicians, case managers, social workers, and family members can submit referrals.</p>
</details>
<details className="p-5 group">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-sm font-medium text-slate-900">How quickly will you respond?</span>
<svg className="lucide lucide-chevron-down h-5 w-5 text-slate-500 group-open:rotate-180 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-slate-600">Our average intake response time is under 10 minutes, 24/7.</p>
</details>
<details className="p-5 group">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-sm font-medium text-slate-900">Is the app secure and compliant?</span>
<svg className="lucide lucide-chevron-down h-5 w-5 text-slate-500 group-open:rotate-180 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-slate-600">Yes. We follow HIPAA standards, sign BAAs, encrypt data in transit and at rest, and maintain audit logs.</p>
</details>
<details className="p-5 group">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-sm font-medium text-slate-900">Can we integrate with our EHR?</span>
<svg className="lucide lucide-chevron-down h-5 w-5 text-slate-500 group-open:rotate-180 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-slate-600">We support flexible integrations. Contact us to discuss your EHR and workflow needs.</p>
</details>
</div>
</div>
</section>

<footer className="border-t border-slate-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="grid md:grid-cols-3 gap-8">
<div>
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-violet-600 text-white flex items-center justify-center tracking-tight text-sm font-semibold">SH</div>
<span className="text-base font-medium">Serenity Hospice</span>
</div>
<p className="mt-3 text-sm text-slate-600 max-w-sm">Compassionate hospice care, guided by timely referrals and clear communication.</p>
</div>
<div>
<h4 className="text-sm font-medium tracking-tight">Contact</h4>
<ul className="mt-3 space-y-2 text-sm text-slate-600">
<li className="flex items-center"><svg className="lucide lucide-mail h-4 w-4 mr-2 text-slate-500" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg> intake@serenityhospice.org</li>
<li className="flex items-center"><svg className="lucide lucide-phone h-4 w-4 mr-2 text-slate-500" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg> (800) 555‑0129</li>
<li className="flex items-center"><svg className="lucide lucide-map-pin h-4 w-4 mr-2 text-slate-500" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> 1200 Care Way, Suite 200</li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium tracking-tight">Resources</h4>
<ul className="mt-3 space-y-2 text-sm text-slate-600">
<li><a className="hover:text-slate-900" href="#security">Security</a></li>
<li><a className="hover:text-slate-900" href="#faq">FAQ</a></li>
<li><a className="hover:text-slate-900" href="#demo">Request demo</a></li>
</ul>
</div>
</div>
<div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-500">© <span id="year">2025</span> Serenity Hospice. All rights reserved.</p>
<div className="flex items-center gap-4 text-xs text-slate-500">
<a className="hover:text-slate-700" href="#">Privacy</a>
<a className="hover:text-slate-700" href="#">Terms</a>
<a className="hover:text-slate-700" href="#">Compliance</a>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-3 inset-x-3 md:hidden">
<div className="rounded-xl border border-slate-200 bg-white shadow-lg px-3 py-2.5 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-full bg-violet-600/10 text-violet-700 flex items-center justify-center">
<svg className="lucide lucide-send h-4 w-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</div>
<div className="leading-tight">
<p className="text-xs font-medium text-slate-900">Start a referral</p>
<p className="text-[11px] text-slate-500">Average time: 3 minutes</p>
</div>
</div>
<a className="inline-flex items-center px-3 py-2 rounded-md bg-violet-600 hover:bg-violet-700 text-white text-xs" href="#refer">Begin</a>
</div>
</div>



    </>
  );
}
