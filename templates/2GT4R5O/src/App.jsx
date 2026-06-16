import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<header className="sticky top-0 z-50 backdrop-blur-sm bg-white/70 border-b border-slate-200/60">
<nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<button className="flex items-center gap-2 group" id="nav-logo" onclick="navigate('page-landing')">
<i className="text-[#3AB795]" data-lucide="globe"></i>
<span className="font-semibold tracking-tight text-lg text-slate-900">AccessibilityAI</span>
</button>
<div className="hidden md:flex items-center gap-6">
<button aria-current="page" className="nav-link relative text-sm text-slate-700 hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3AB795] focus-visible:ring-offset-2 focus-visible:ring-offset-white h-11 px-1" data-target="page-results">
<span>Results</span>
<span className="absolute -bottom-2 left-0 right-0 mx-auto h-0.5 w-full rounded bg-[#3AB795]" hidden="" id="active-underline-results"></span>
</button>
<button className="nav-link relative text-sm text-slate-700 hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3AB795] focus-visible:ring-offset-2 focus-visible:ring-offset-white h-11 px-1" data-target="page-settings">
<span>Settings</span>
<span className="absolute -bottom-2 left-0 right-0 mx-auto h-0.5 w-full rounded bg-[#3AB795]" hidden="" id="active-underline-settings"></span>
</button>
<button className="nav-link relative text-sm text-slate-700 hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3AB795] focus-visible:ring-offset-2 focus-visible:ring-offset-white h-11 px-1" data-target="page-landing">
<span>Help</span>
<span className="absolute -bottom-2 left-0 right-0 mx-auto h-0.5 w-full rounded bg-[#3AB795]" hidden="" id="active-underline-help"></span>
</button>
</div>
<div className="relative">
<button aria-expanded="false" aria-haspopup="menu" className="flex items-center gap-2 rounded-full bg-white/60 border border-slate-200/70 shadow-sm h-10 pl-3 pr-2 hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3AB795] focus-visible:ring-offset-2 focus-visible:ring-offset-white" id="avatarBtn">
<div className="w-7 h-7 rounded-full bg-slate-200 grid place-items-center text-slate-700 text-xs font-medium tracking-tight">AA</div>
<i className="text-slate-600" data-lucide="chevron-down"></i>
</button>
<div aria-label="Profile menu" className="absolute right-0 mt-2 w-44 rounded-lg bg-white/80 backdrop-blur-sm border border-slate-200/70 shadow-lg p-1 hidden" id="avatarMenu" role="menu">
<button className="w-full text-left text-sm px-3 py-2 rounded-md hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3AB795]">Profile</button>
<button className="w-full text-left text-sm px-3 py-2 rounded-md hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3AB795]" onclick="navigate('page-settings')">Settings</button>
<button className="w-full text-left text-sm px-3 py-2 rounded-md hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3AB795]">Sign out</button>
</div>
</div>
</nav>
</header>
<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 space-y-12">

<section className="space-y-12" id="page-landing">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div className="order-2 lg:order-1">
<div className="max-w-3xl">
<h1 className="text-5xl sm:text-6xl font-semibold tracking-tight text-slate-900">Improve your site's accessibility instantly</h1>
<p className="mt-4 text-slate-600 text-base sm:text-lg">Get WCAG‑based insights and actionable fixes in minutes.</p>
</div>
<div className="mt-6 max-w-2xl">
<div className="rounded-2xl bg-white/60 backdrop-blur-md border border-slate-200/70 shadow-lg p-6 sm:p-8">
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="url-input">Enter your website URL</label>
<div className="flex flex-col sm:flex-row gap-3">
<div className="relative flex-1">
<input aria-describedby="url-hint url-error" className="w-full h-12 rounded-xl border border-slate-200/80 bg-white/70 px-4 pr-10 text-slate-900 placeholder:text-slate-400 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3AB795] focus-visible:ring-offset-2 focus-visible:ring-offset-white" id="url-input" placeholder="https://example.com" type="url"/>
<i className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" data-lucide="link"></i>
</div>
<button className="inline-flex items-center justify-center gap-2 h-12 min-w-[44px] px-5 rounded-xl bg-[#3AB795] text-white text-sm font-medium shadow-sm hover:bg-[#33a684] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3AB795] focus-visible:ring-offset-2 focus-visible:ring-offset-white" id="scanBtn" type="button">
<i className="text-white" data-lucide="radar"></i>
<span>Scan for A11y</span>
</button>
</div>
<p className="mt-2 text-sm text-slate-500" id="url-hint">We’ll analyze accessibility and show a preview before signup.</p>
<p className="h-5 text-xs text-rose-600 mt-1" id="url-error"></p>
</div>
</div>
<div className="mt-6">
<div className="flex items-center gap-6 text-slate-500">
<span className="text-sm">Trusted by 1000+ websites</span>
<div className="flex items-center gap-4">
<div className="w-20 h-8 rounded-md bg-slate-200/80 border border-slate-200/80"></div>
<div className="w-20 h-8 rounded-md bg-slate-200/80 border border-slate-200/80"></div>
<div className="w-20 h-8 rounded-md bg-slate-200/80 border border-slate-200/80"></div>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="relative">
<div className="absolute -inset-4 blur-2xl bg-[#3AB795]/10 rounded-3xl"></div>
<div className="relative rounded-3xl bg-white/60 backdrop-blur-md border border-slate-200/70 shadow-xl p-4 sm:p-6">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
<span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
<span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
<div className="ml-3 flex-1 h-7 rounded-lg bg-white/70 border border-slate-200/70 px-3 text-xs text-slate-500 grid place-items-center">example.com</div>
</div>
<div className="mt-4 grid sm:grid-cols-2 gap-4">
<div className="rounded-2xl bg-white/70 border border-slate-200/70 p-4">
<div className="flex items-center justify-between">
<span className="text-xs text-slate-500">Accessibility</span>
<span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 border border-amber-200">72</span>
</div>
<div className="mt-3 h-16 grid grid-cols-4 gap-2">
<div className="rounded-lg bg-slate-100 border border-slate-200"></div>
<div className="rounded-lg bg-slate-100 border border-slate-200"></div>
<div className="rounded-lg bg-slate-100 border border-slate-200"></div>
<div className="rounded-lg bg-slate-100 border border-slate-200"></div>
</div>
</div>
<div className="rounded-2xl bg-white/70 border border-slate-200/70 p-4">
<div className="flex items-center justify-between">
<span className="text-xs text-slate-500">WCAG</span>
<span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200">84</span>
</div>
<ul className="mt-3 space-y-2 text-xs text-slate-700">
<li className="flex items-center gap-2"><i className="text-emerald-600" data-lucide="check"></i><span>ARIA landmarks detected</span></li>
<li className="flex items-center gap-2"><i className="text-emerald-600" data-lucide="check"></i><span>Skip links present</span></li>
<li className="flex items-center gap-2"><i className="text-rose-600" data-lucide="x"></i><span>Missing form labels</span></li>
</ul>
</div>
<div className="rounded-2xl bg-white/70 border border-slate-200/70 p-4 sm:col-span-2">
<div className="flex items-center gap-2 text-slate-700 text-sm">
<i className="text-rose-600" data-lucide="alert-octagon"></i>
<span>Top Issues</span>
</div>
<div className="mt-3 grid sm:grid-cols-3 gap-3">
<div className="rounded-xl border border-slate-200 bg-white/70 p-3">
<p className="text-xs text-slate-600">Missing alt text</p>
<p className="text-xs text-slate-500 mt-1">12 elements</p>
</div>
<div className="rounded-xl border border-slate-200 bg-white/70 p-3">
<p className="text-xs text-slate-600">Low contrast</p>
<p className="text-xs text-slate-500 mt-1">5 buttons</p>
</div>
<div className="rounded-xl border border-slate-200 bg-white/70 p-3">
<p className="text-xs text-slate-600">Missing form labels</p>
<p className="text-xs text-slate-500 mt-1">3 pages</p>
</div>
</div>
</div>
</div>
<div className="mt-4 flex items-center justify-between border-t border-slate-200/70 pt-4">
<div className="text-xs text-slate-600">Preview shows a subset of findings</div>
<button className="inline-flex items-center justify-center gap-2 h-10 px-4 rounded-xl bg-[#3AB795] text-white text-xs sm:text-sm font-medium shadow-sm hover:bg-[#33a684]" data-open-signup="">
                  Unlock Full Results
                </button>
</div>
</div>
</div>
</div>
</div>
<div className="rounded-3xl bg-white/60 backdrop-blur-md border border-slate-200/70 shadow p-6 sm:p-8">
<div className="grid sm:grid-cols-3 gap-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-xl bg-[#3AB795]/10 border border-[#3AB795]/20 grid place-items-center text-[#3AB795]">
<i data-lucide="sparkles"></i>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight text-slate-900">One‑click fixes</h3>
<p className="text-sm text-slate-600 mt-1">Copy ready-to-use snippets for common accessibility issues.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-xl bg-[#3AB795]/10 border border-[#3AB795]/20 grid place-items-center text-[#3AB795]">
<i data-lucide="shield-check"></i>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight text-slate-900">WCAG aligned</h3>
<p className="text-sm text-slate-600 mt-1">Checks mapped to AA recommendations out of the box.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-xl bg-[#3AB795]/10 border border-[#3AB795]/20 grid place-items-center text-[#3AB795]">
<i data-lucide="timer"></i>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight text-slate-900">Under 5 minutes</h3>
<p className="text-sm text-slate-600 mt-1">Scan and preview accessibility results without an account.</p>
</div>
</div>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="rounded-2xl bg-white/60 backdrop-blur-md border border-slate-200/70 shadow p-6">
<div className="text-xs text-slate-500">Step 1</div>
<h4 className="mt-1 text-base font-semibold tracking-tight text-slate-900">Enter your URL</h4>
<p className="mt-2 text-sm text-slate-600">Point to a single page or your whole site.</p>
</div>
<div className="rounded-2xl bg-white/60 backdrop-blur-md border border-slate-200/70 shadow p-6">
<div className="text-xs text-slate-500">Step 2</div>
<h4 className="mt-1 text-base font-semibold tracking-tight text-slate-900">Review instant preview</h4>
<p className="mt-2 text-sm text-slate-600">See top accessibility issues and scores right away.</p>
</div>
<div className="rounded-2xl bg-white/60 backdrop-blur-md border border-slate-200/70 shadow p-6">
<div className="text-xs text-slate-500">Step 3</div>
<h4 className="mt-1 text-base font-semibold tracking-tight text-slate-900">Unlock full results</h4>
<p className="mt-2 text-sm text-slate-600">Get all WCAG issues, fixes, and exportable reports.</p>
</div>
</div>
</section>

<section className="hidden" id="page-scan">
<div className="max-w-xl mx-auto">
<div className="relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur-md border border-slate-200/70 shadow-lg p-8 flex flex-col items-center">
<div className="absolute top-0 left-0 right-0 h-1.5">
<div className="h-full w-full bg-gradient-to-r from-emerald-300 via-teal-300 to-emerald-300 opacity-70 animate-pulse"></div>
</div>
<div className="pointer-events-none absolute -top-10 -left-10 w-56 h-56 bg-emerald-400/10 blur-3xl rounded-full"></div>
<div className="pointer-events-none absolute -bottom-12 -right-12 w-64 h-64 bg-teal-400/10 blur-3xl rounded-full"></div>
<div className="relative w-40 h-40">
<div className="absolute -inset-3 rounded-full border-2 border-dashed border-emerald-200/70 animate-spin [animation-duration:8s]"></div>
<div className="absolute -inset-6 rounded-full bg-emerald-400/10 blur-2xl"></div>
<div className="absolute inset-0 animate-spin [animation-duration:6s]">
<span className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-emerald-400 shadow shadow-emerald-300/50"></span>
<span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-teal-400 shadow"></span>
</div>
<div className="absolute inset-0 rounded-full" id="scanProgressCircle" style={{background: 'conic-gradient(#3AB795 0deg, #3AB795 0deg, #e5e7eb 0deg 360deg)'}}></div>
<div className="absolute inset-2 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/70 grid place-items-center">
<div className="text-center">
<div className="text-3xl font-semibold tracking-tight text-slate-900" id="scanProgressPct">0%</div>
<div className="mt-1 inline-flex items-center gap-1 text-xs text-slate-500">
<i className="text-emerald-500 animate-pulse" data-lucide="radar"></i>
<span>Scanning</span>
</div>
</div>
</div>
</div>
<div aria-live="polite" className="w-full mt-8 space-y-3" id="scanStatusRegion">
<div aria-hidden="true" className="h-12 rounded-xl bg-slate-200/60 border border-slate-200/70 animate-pulse [animation-delay:100ms]"></div>
<div aria-hidden="true" className="h-12 rounded-xl bg-slate-200/60 border border-slate-200/70 animate-pulse [animation-delay:200ms]"></div>
<div aria-hidden="true" className="h-12 rounded-xl bg-slate-200/60 border border-slate-200/70 animate-pulse [animation-delay:300ms]"></div>
<p className="text-sm text-slate-600 mt-2 text-center" id="scanStatusMsg">Starting scan…</p>
<div className="mt-6 rounded-xl border border-slate-200/70 bg-white/70 p-4">
<div className="flex items-center gap-2 text-sm text-slate-700">
<i className="text-emerald-600" data-lucide="list-checks"></i>
<span>Checks in progress</span>
</div>
<div className="mt-3 grid sm:grid-cols-3 gap-3">
<div className="rounded-lg border border-slate-200 bg-white/70 p-3 flex items-center justify-between">
<div className="flex items-center gap-2 text-sm text-slate-700">
<i className="text-slate-600" data-lucide="scan-line"></i>
<span>Crawl</span>
</div>
<span className="inline-flex items-center gap-1 text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping [animation-duration:1.5s]"></span>
                    Running
                  </span>
</div>
<div className="rounded-lg border border-slate-200 bg-white/70 p-3 flex items-center justify-between">
<div className="flex items-center gap-2 text-sm text-slate-700">
<i className="text-slate-600" data-lucide="type"></i>
<span>Text Contrast</span>
</div>
<span className="inline-flex items-center gap-1 text-xs text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping [animation-duration:2s]"></span>
                    Checking
                  </span>
</div>
<div className="rounded-lg border border-slate-200 bg-white/70 p-3 flex items-center justify-between">
<div className="flex items-center gap-2 text-sm text-slate-700">
<i className="text-slate-600" data-lucide="image"></i>
<span>Alt Text</span>
</div>
<span className="inline-flex items-center gap-1 text-xs text-sky-700 bg-sky-50 border border-sky-200 px-2 py-0.5 rounded-full">
<i className="text-sky-600" data-lucide="clock"></i>
                    Queued
                  </span>
</div>
</div>
</div>
</div>
<button className="mt-8 inline-flex items-center justify-center gap-2 h-11 min-w-[44px] px-4 rounded-xl border border-slate-300/90 bg-white/70 hover:bg-white text-slate-700 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3AB795] focus-visible:ring-offset-2 focus-visible:ring-offset-white" id="cancelScanBtn">
<i className="text-slate-600 animate-spin [animation-duration:2.2s]" data-lucide="hourglass"></i>
<span>Cancel Scan</span>
</button>
<p className="mt-2 text-xs text-slate-500">Estimated ~2–3 minutes</p>
</div>
</div>
</section>

<div className="fixed inset-0 z-50 hidden items-center justify-center" id="cancelModal">
<div className="absolute inset-0 bg-slate-900/40"></div>
<div aria-labelledby="cancelTitle" aria-modal="true" className="relative w-full max-w-md rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/70 shadow-xl p-6" role="dialog">
<div className="flex items-start gap-3">
<div className="w-10 h-10 rounded-full bg-amber-100 border border-amber-200 grid place-items-center">
<i className="text-amber-600" data-lucide="alert-triangle"></i>
</div>
<div className="flex-1">
<h3 className="text-lg font-semibold tracking-tight text-slate-900" id="cancelTitle">Cancel current scan?</h3>
<p className="mt-1 text-sm text-slate-600">You can restart anytime from the homepage.</p>
</div>
</div>
<div className="mt-6 flex items-center justify-end gap-3">
<button className="h-11 px-4 rounded-xl border border-slate-300/90 bg-white/70 hover:bg-white text-slate-700 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3AB795]" id="cancelDismiss">Keep Scanning</button>
<button className="h-11 px-4 rounded-xl bg-[#3AB795] text-white text-sm font-medium hover:bg-[#33a684] shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3AB795]" id="cancelConfirm">Cancel Scan</button>
</div>
</div>
</div>

<section className="hidden" id="page-preview">
<div className="grid gap-6 md:grid-cols-3">
<div className="rounded-2xl bg-white/60 backdrop-blur-md border border-slate-200/70 shadow p-5 flex flex-col items-center">
<div className="relative w-24 h-24">
<div className="absolute inset-0 rounded-full" style={{background: 'conic-gradient(#3AB795 calc(72*3.6deg), #e5e7eb 0deg)'}}></div>
<div className="absolute inset-2 rounded-full bg-white/80 border border-slate-200/70 grid place-items-center">
<div className="text-center">
<div className="text-xl font-semibold tracking-tight text-slate-900">72</div>
<div className="text-xs text-slate-500">/100</div>
</div>
</div>
</div>
<div className="mt-3 inline-flex items-center gap-2 text-slate-700 text-sm">
<i data-lucide="accessibility"></i>
<span>Accessibility</span>
</div>
</div>
<div className="rounded-2xl bg-white/60 backdrop-blur-md border border-slate-200/70 shadow p-5 flex flex-col items-center">
<div className="relative w-24 h-24">
<div className="absolute inset-0 rounded-full" style={{background: 'conic-gradient(#3AB795 calc(84*3.6deg), #e5e7eb 0deg)'}}></div>
<div className="absolute inset-2 rounded-full bg-white/80 border border-slate-200/70 grid place-items-center">
<div className="text-center">
<div className="text-xl font-semibold tracking-tight text-slate-900">84</div>
<div className="text-xs text-slate-500">/100</div>
</div>
</div>
</div>
<div className="mt-3 inline-flex items-center gap-2 text-slate-700 text-sm">
<i data-lucide="shield-check"></i>
<span>WCAG</span>
</div>
</div>
<div className="rounded-2xl bg-white/60 backdrop-blur-md border border-slate-200/70 shadow p-5 flex flex-col items-center">
<div className="relative w-24 h-24">
<div className="absolute inset-0 rounded-full" style={{background: 'conic-gradient(#3AB795 calc(91*3.6deg), #e5e7eb 0deg)'}}></div>
<div className="absolute inset-2 rounded-full bg-white/80 border border-slate-200/70 grid place-items-center">
<div className="text-center">
<div className="text-xl font-semibold tracking-tight text-slate-900">91</div>
<div className="text-xs text-slate-500">/100</div>
</div>
</div>
</div>
<div className="mt-3 inline-flex items-center gap-2 text-slate-700 text-sm">
<i data-lucide="keyboard"></i>
<span>Keyboard</span>
</div>
</div>
</div>
<div className="mt-6 rounded-2xl bg-white/60 backdrop-blur-md border border-slate-200/70 shadow p-6">
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Top 3 Issues</h3>
<ul className="mt-4 space-y-3">
<li className="flex items-center gap-3 text-slate-700">
<span aria-hidden="true">🖼️</span>
<span>12 images missing descriptions</span>
</li>
<li className="flex items-center gap-3 text-slate-700">
<span aria-hidden="true">🎨</span>
<span>Button colors hard to read</span>
</li>
<li className="flex items-center gap-3 text-slate-700">
<span aria-hidden="true">🔤</span>
<span>Form inputs missing labels</span>
</li>
</ul>
</div>
<div className="mt-6 rounded-2xl bg-white/60 backdrop-blur-md border border-slate-200/70 shadow p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-slate-700">See All Issues &amp; Fixes</p>
<button className="inline-flex items-center justify-center gap-2 h-11 min-w-[44px] px-5 rounded-xl bg-[#3AB795] text-white text-sm font-medium shadow-sm hover:bg-[#33a684] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3AB795] focus-visible:ring-offset-2 focus-visible:ring-offset-white" data-open-signup="">
          Unlock Full Results
        </button>
</div>
</section>

<div className="fixed inset-0 z-50 hidden items-center justify-center" id="signupModal">
<div className="absolute inset-0 bg-slate-900/40"></div>
<div aria-labelledby="signupTitle" aria-modal="true" className="relative w-full max-w-md rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/70 shadow-xl p-6" role="dialog">
<div className="flex items-start justify-between">
<h3 className="text-lg font-semibold tracking-tight text-slate-900" id="signupTitle">Enter email to see all fixes</h3>
<button aria-label="Close modal" className="rounded-lg p-2 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3AB795]" id="closeSignup">
<i className="text-slate-600" data-lucide="x"></i>
</button>
</div>
<div className="mt-4">
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="email-input">Email</label>
<input className="w-full h-10 rounded-xl border border-slate-200/80 bg-white/70 px-4 text-slate-900 placeholder:text-slate-400 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3AB795] focus-visible:ring-offset-2 focus-visible:ring-offset-white" id="email-input" placeholder="you@example.com" type="email"/>
<p className="h-5 mt-1 text-xs text-rose-600" id="email-error"></p>
</div>
<div className="mt-2 flex flex-col gap-3">
<button className="h-11 rounded-xl bg-[#3AB795] text-white text-sm font-medium hover:bg-[#33a684] shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3AB795] focus-visible:ring-offset-2 focus-visible:ring-offset-white" id="getResultsBtn">Get Results</button>
<div className="flex items-center gap-3">
<div className="h-px flex-1 bg-slate-200/80"></div>
<span className="text-xs text-slate-500">Or continue with</span>
<div className="h-px flex-1 bg-slate-200/80"></div>
</div>
<button className="h-11 rounded-xl border border-slate-300/90 bg-white/70 hover:bg-white text-slate-700 text-sm shadow-sm inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3AB795] focus-visible:ring-offset-2 focus-visible:ring-offset-white">
<img alt="" className="w-4 h-4" src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"/>
            Continue with Google
          </button>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden items-center justify-center" id="helpModal">
<div className="absolute inset-0 bg-slate-900/40"></div>
<div aria-labelledby="helpTitle" aria-modal="true" className="relative w-full max-w-lg rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/70 shadow-xl p-6" role="dialog">
<div className="flex items-start justify-between">
<div className="flex items-center gap-2">
<i className="text-slate-600" data-lucide="help-circle"></i>
<h3 className="text-lg font-semibold tracking-tight text-slate-900" id="helpTitle">Help</h3>
</div>
<button aria-label="Close help" className="rounded-lg p-2 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3AB795]" id="closeHelp">
<i className="text-slate-600" data-lucide="x"></i>
</button>
</div>
<div className="mt-4 text-sm text-slate-700" id="helpBody"></div>
<div className="mt-4">
<a className="inline-flex items-center gap-2 text-xs text-slate-700 underline hover:text-slate-900" href="https://www.w3.org/WAI/standards-guidelines/wcag/" rel="noreferrer" target="_blank">
<i data-lucide="external-link"></i> WCAG Reference
          </a>
</div>
</div>
</div>

<section className="hidden" id="page-results">
<div className="relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur-md border border-slate-200/70 shadow p-6">
<div className="pointer-events-none absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-[#3AB795]/10 blur-3xl"></div>
<div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-2xl bg-[#3AB795]/10 border border-[#3AB795]/20 grid place-items-center">
<i className="text-[#3AB795]" data-lucide="globe"></i>
</div>
<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900" id="resultHost">example.com</h2>
<div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-slate-600">
<span className="inline-flex items-center gap-1">
<i data-lucide="calendar"></i>
                  Scanned on <time id="scanDate"></time>
</span>
<span className="inline-flex items-center gap-1">
<i data-lucide="shield-check"></i>
                  WCAG AA
                </span>
<span className="inline-flex items-center gap-1">
<i data-lucide="bot"></i>
                  AI assisted
                </span>
</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="relative w-28 h-28">
<div className="absolute inset-0 rounded-full" style={{background: 'conic-gradient(#10b981 calc(82*3.6deg), #e5e7eb 0deg)'}}></div>
<div className="absolute inset-2 rounded-full bg-white/80 border border-slate-200/70 grid place-items-center">
<div className="text-center">
<div className="text-2xl font-semibold tracking-tight text-slate-900">82</div>
<div className="text-xs text-slate-500">Overall</div>
</div>
</div>
</div>
<div className="hidden sm:block">
<div className="text-xs text-slate-500">Status</div>
<div className="mt-1 inline-flex items-center gap-2 text-sm">
<span className="h-2 w-2 rounded-full bg-amber-500"></span>
<span className="text-slate-700">Needs attention</span>
</div>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center justify-center gap-2 h-10 px-3 rounded-xl border border-slate-300/90 bg-white hover:bg-slate-50 text-slate-700 text-sm shadow-sm" id="downloadBtn">
<i data-lucide="file-text"></i>
<span>Export PDF</span>
</button>
<button className="inline-flex items-center justify-center gap-2 h-10 px-3 rounded-xl border border-slate-300/90 bg-white hover:bg-slate-50 text-slate-700 text-sm shadow-sm" id="scanAnotherBtn">
<i data-lucide="scan"></i>
<span>New Scan</span>
</button>
</div>
</div>
</div>
</div>
<div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
<aside className="lg:col-span-3 space-y-4 lg:sticky lg:top-24 self-start">
<div className="rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200/70 shadow p-3">
<div className="px-2 py-1 text-xs text-slate-500">Quick Filters</div>
<div className="grid gap-2 mt-2">
<button aria-pressed="true" className="filter-btn w-full h-10 px-3 rounded-lg text-sm inline-flex items-center justify-between border border-transparent hover:border-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3AB795]" data-filter="all">
<span className="inline-flex items-center gap-2 text-slate-800">
<i data-lucide="layers"></i> All
                </span>
<span className="text-xs text-slate-500" id="count-all">3</span>
</button>
<button className="filter-btn w-full h-10 px-3 rounded-lg text-sm inline-flex items-center justify-between border border-transparent hover:border-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3AB795]" data-filter="critical">
<span className="inline-flex items-center gap-2 text-rose-600">
<i data-lucide="alert-octagon"></i> Critical Only
                </span>
<span className="text-xs text-slate-500" id="count-critical">1</span>
</button>
<button className="filter-btn w-full h-10 px-3 rounded-lg text-sm inline-flex items-center justify-between border border-transparent hover:border-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3AB795]" data-filter="accessibility">
<span className="inline-flex items-center gap-2 text-slate-800">
<i data-lucide="accessibility"></i> Accessibility
                </span>
<span className="text-xs text-slate-500" id="count-accessibility">1</span>
</button>
<button className="filter-btn w-full h-10 px-3 rounded-lg text-sm inline-flex items-center justify-between border border-transparent hover:border-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3AB795]" data-filter="wcag">
<span className="inline-flex items-center gap-2 text-slate-800">
<i data-lucide="shield-check"></i> WCAG
                </span>
<span className="text-xs text-slate-500" id="count-wcag">1</span>
</button>
<button className="filter-btn w-full h-10 px-3 rounded-lg text-sm inline-flex items-center justify-between border border-transparent hover:border-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3AB795]" data-filter="keyboard">
<span className="inline-flex items-center gap-2 text-slate-800">
<i data-lucide="keyboard"></i> Keyboard
                </span>
<span className="text-xs text-slate-500" id="count-keyboard">1</span>
</button>
</div>
</div>
<div className="rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200/70 shadow p-4">
<div className="text-sm font-medium text-slate-800 tracking-tight">Remediation Plan</div>
<ol className="mt-3 space-y-3 text-sm">
<li className="flex items-start gap-3">
<span className="mt-1 h-2 w-2 rounded-full bg-rose-500"></span>
<div>
<div className="text-slate-800">Add alt text to 12 product images</div>
<div className="text-xs text-slate-500">Impact: High • ETA: 30 min</div>
</div>
</li>
<li className="flex items-start gap-3">
<span className="mt-1 h-2 w-2 rounded-full bg-amber-500"></span>
<div>
<div className="text-slate-800">Fix button contrast on checkout</div>
<div className="text-xs text-slate-500">Impact: Medium • ETA: 10 min</div>
</div>
</li>
<li className="flex items-start gap-3">
<span className="mt-1 h-2 w-2 rounded-full bg-sky-500"></span>
<div>
<div className="text-slate-800">Associate labels with inputs</div>
<div className="text-xs text-slate-500">Impact: Medium • ETA: 20 min</div>
</div>
</li>
</ol>
</div>
</aside>
<section className="lg:col-span-9 space-y-6">
<div className="rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200/70 shadow p-2">
<div className="flex flex-wrap gap-2" id="resultsTabBtns" role="tablist">
<button aria-selected="true" className="px-3 h-9 rounded-lg text-sm inline-flex items-center gap-2 bg-[#3AB795]/10 text-slate-800 border border-[#3AB795]/20" data-tab="overview" role="tab">
<i className="text-[#3AB795]" data-lucide="layout-dashboard"></i> Overview
              </button>
<button aria-selected="false" className="px-3 h-9 rounded-lg text-sm inline-flex items-center gap-2 hover:bg-slate-50 border border-transparent" data-tab="issues" role="tab">
<i data-lucide="triangle-alert"></i> Issues
              </button>
<button aria-selected="false" className="px-3 h-9 rounded-lg text-sm inline-flex items-center gap-2 hover:bg-slate-50 border border-transparent" data-tab="code" role="tab">
<i data-lucide="code-2"></i> Code
              </button>
<button aria-selected="false" className="px-3 h-9 rounded-lg text-sm inline-flex items-center gap-2 hover:bg-slate-50 border border-transparent" data-tab="ai" role="tab">
<i data-lucide="bot"></i> AI
              </button>
</div>
</div>
<div className="space-y-6" id="resultsTabPanels">
<div className="space-y-6" data-tab-panel="overview">
<div className="grid sm:grid-cols-3 gap-4">
<div className="rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200/70 shadow p-4">
<div className="flex items-center justify-between">
<div>
<p className="text-xs text-slate-500">Accessibility</p>
<p className="text-xl font-semibold tracking-tight text-slate-900">72</p>
</div>
<span className="text-xs px-2 py-1 rounded-full bg-amber-100 text-amber-700 border border-amber-200">Needs work</span>
</div>
<div className="mt-3 h-12">
<div className="h-full">
<canvas id="sparkA11y"></canvas>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200/70 shadow p-4">
<div className="flex items-center justify-between">
<div>
<p className="text-xs text-slate-500">WCAG</p>
<p className="text-xl font-semibold tracking-tight text-slate-900">84</p>
</div>
<span className="text-xs px-2 py-1 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200">Good</span>
</div>
<div className="mt-3 h-12">
<div className="h-full">
<canvas id="sparkSEO"></canvas>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200/70 shadow p-4">
<div className="flex items-center justify-between">
<div>
<p className="text-xs text-slate-500">Keyboard</p>
<p className="text-xl font-semibold tracking-tight text-slate-900">91</p>
</div>
<span className="text-xs px-2 py-1 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200">Great</span>
</div>
<div className="mt-3 h-12">
<div className="h-full">
<canvas id="sparkMobile"></canvas>
</div>
</div>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200/70 shadow p-5">
<div className="flex items-center justify-between">
<h3 className="text-base font-semibold tracking-tight text-slate-900">Severity breakdown</h3>
<span className="text-xs text-slate-500">By issue</span>
</div>
<div className="mt-4 h-40">
<div className="h-full">
<canvas id="severityBar"></canvas>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200/70 shadow p-5">
<div className="flex items-center justify-between">
<h3 className="text-base font-semibold tracking-tight text-slate-900">Category distribution</h3>
<span className="text-xs text-slate-500">By type</span>
</div>
<div className="mt-4 h-40 grid grid-cols-2 gap-4 items-center">
<div className="h-full">
<div className="h-full">
<canvas id="categoryDonut"></canvas>
</div>
</div>
<div className="space-y-2 text-sm">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 text-slate-700"><span className="h-2 w-2 rounded-full bg-emerald-500"></span>Accessibility</div>
<span className="text-slate-500" id="legend-accessibility">0</span>
</div>
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 text-slate-700"><span className="h-2 w-2 rounded-full bg-teal-500"></span>WCAG</div>
<span className="text-slate-500" id="legend-wcag">0</span>
</div>
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 text-slate-700"><span className="h-2 w-2 rounded-full bg-sky-500"></span>Keyboard</div>
<span className="text-slate-500" id="legend-keyboard">0</span>
</div>
</div>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200/70 shadow p-5">
<div className="flex items-center gap-2 text-slate-700">
<i className="text-[#3AB795]" data-lucide="stars"></i>
<h3 className="text-base font-semibold tracking-tight text-slate-900">Highlights</h3>
</div>
<ul className="mt-3 grid md:grid-cols-3 gap-3 text-sm">
<li className="rounded-xl border border-slate-200 bg-white/70 p-3 inline-flex items-center justify-between">
<span className="inline-flex items-center gap-2 text-slate-700"><i className="text-emerald-600" data-lucide="check-circle-2"></i> ARIA landmarks present</span>
<span className="text-xs text-slate-500">OK</span>
</li>
<li className="rounded-xl border border-slate-200 bg-white/70 p-3 inline-flex items-center justify-between">
<span className="inline-flex items-center gap-2 text-slate-700"><i className="text-emerald-600" data-lucide="mouse-pointer-2"></i> Visible focus states</span>
<span className="text-xs text-slate-500">OK</span>
</li>
<li className="rounded-xl border border-slate-200 bg-white/70 p-3 inline-flex items-center justify-between">
<span className="inline-flex items-center gap-2 text-slate-700"><i className="text-amber-600" data-lucide="scan"></i> 3 issues to address</span>
<span className="text-xs text-slate-500">Pending</span>
</li>
</ul>
</div>
</div>
<div className="hidden space-y-6" data-tab-panel="issues">
<div className="rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200/70 shadow px-4 py-3 flex items-center justify-between">
<div className="text-sm text-slate-700">Issues</div>
<div className="flex items-center gap-2">
<button className="h-9 px-3 rounded-lg border border-slate-300/80 bg-white/70 text-xs text-slate-700 hover:bg-white inline-flex items-center gap-2">
<i data-lucide="sort-desc"></i>
                    Sort
                  </button>
<button className="h-9 px-3 rounded-lg border border-slate-300/80 bg-white/70 text-xs text-slate-700 hover:bg-white inline-flex items-center gap-2">
<i data-lucide="filter"></i>
                    Filters
                  </button>
</div>
</div>
<div aria-live="polite" className="space-y-4" id="issuesList">
<article aria-labelledby="issue-1-title" className="issue-card rounded-2xl bg-white/60 backdrop-blur-md border border-slate-200/70 shadow p-5 transition-opacity" data-severity="critical" data-type="accessibility" role="region">
<div className="flex items-start justify-between gap-4">
<div className="flex items-start gap-3">
<span className="pill-status text-xs px-2 py-1 rounded-full border bg-rose-50 text-rose-700 border-rose-200">Critical</span>
<h4 className="issue-title text-base font-semibold tracking-tight text-slate-900" id="issue-1-title">Missing alt text on product images</h4>
</div>
<button aria-controls="issue-1-details" aria-expanded="false" className="expand-btn rounded-lg p-2 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3AB795]">
<i data-lucide="chevron-down"></i>
</button>
</div>
<div className="mt-3 flex items-center gap-2 text-sm text-slate-600">
<i className="text-slate-500" data-lucide="map-pin"></i>
<span>/products/summer-collection</span>
</div>
<p className="mt-3 text-sm text-slate-700">Images lack alternative descriptions, making the content inaccessible for screen readers.</p>
<p className="mt-2 text-sm text-slate-700"><span className="text-slate-500">Fix:</span> Add descriptive alt attributes to all product images.</p>
<div className="mt-4 flex flex-wrap items-center gap-3">
<button className="copy-btn h-10 px-3 rounded-lg bg-white/70 border border-slate-300/90 text-slate-700 text-sm hover:bg-white inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3AB795]" data-code='&lt;img src="/shirt.jpg" alt="Blue cotton shirt - front view"&gt;'>
<i data-lucide="copy"></i>
                      Copy Fix Code
                    </button>
<button className="done-btn h-10 px-3 rounded-lg bg-[#3AB795] text-white text-sm hover:bg-[#33a684] inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3AB795]">
<i data-lucide="check-circle-2"></i>
                      Mark Done
                    </button>
<button className="help-btn h-10 px-3 rounded-lg bg-white/70 border border-slate-300/90 text-slate-700 text-sm hover:bg-white inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3AB795]">
<i data-lucide="help-circle"></i>
                      Need Help?
                    </button>
</div>
<div className="details mt-4 hidden" id="issue-1-details">
<div className="rounded-xl border border-slate-200/70 bg-white/60 p-4">
<p className="text-xs text-slate-600">Technical details: Audit matched 12 &lt;img&gt; elements without alt attributes in product grid. Ensure alt reflects the specific product, color, and angle.</p>
</div>
</div>
</article>
<article aria-labelledby="issue-2-title" className="issue-card rounded-2xl bg-white/60 backdrop-blur-md border border-slate-200/70 shadow p-5 transition-opacity" data-severity="major" data-type="wcag" role="region">
<div className="flex items-start justify-between gap-4">
<div className="flex items-start gap-3">
<span className="pill-status text-xs px-2 py-1 rounded-full border bg-amber-50 text-amber-700 border-amber-200">Major</span>
<h4 className="issue-title text-base font-semibold tracking-tight text-slate-900" id="issue-2-title">Button color contrast is insufficient</h4>
</div>
<button aria-controls="issue-2-details" aria-expanded="false" className="expand-btn rounded-lg p-2 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3AB795]">
<i data-lucide="chevron-down"></i>
</button>
</div>
<div className="mt-3 flex items-center gap-2 text-sm text-slate-600">
<i className="text-slate-500" data-lucide="map-pin"></i>
<span>/checkout</span>
</div>
<p className="mt-3 text-sm text-slate-700">Primary button fails WCAG AA contrast ratio against background in light mode.</p>
<p className="mt-2 text-sm text-slate-700"><span className="text-slate-500">Fix:</span> Use a darker shade for text or button background to reach 4.5:1.</p>
<div className="mt-4 flex flex-wrap items-center gap-3">
<button className="copy-btn h-10 px-3 rounded-lg bg-white/70 border border-slate-300/90 text-slate-700 text-sm hover:bg-white inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3AB795]" data-code="button.primary{background:#156f5a} .primary span{color:#fff}">
<i data-lucide="copy"></i>
                      Copy Fix Code
                    </button>
<button className="done-btn h-10 px-3 rounded-lg bg-[#3AB795] text-white text-sm hover:bg-[#33a684] inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3AB795]">
<i data-lucide="check-circle-2"></i>
                      Mark Done
                    </button>
<button className="help-btn h-10 px-3 rounded-lg bg-white/70 border border-slate-300/90 text-slate-700 text-sm hover:bg-white inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3AB795]">
<i data-lucide="help-circle"></i>
                      Need Help?
                    </button>
</div>
<div className="details mt-4 hidden" id="issue-2-details">
<div className="rounded-xl border border-slate-200/70 bg-white/60 p-4">
<p className="text-xs text-slate-600">Technical details: Current ratio is 3.1:1. Consider #156F5A for background or #0B3A30 for text.</p>
</div>
</div>
</article>
<article aria-labelledby="issue-3-title" className="issue-card rounded-2xl bg-white/60 backdrop-blur-md border border-slate-200/70 shadow p-5 transition-opacity" data-severity="minor" data-type="keyboard" role="region">
<div className="flex items-start justify-between gap-4">
<div className="flex items-start gap-3">
<span className="pill-status text-xs px-2 py-1 rounded-full border bg-sky-50 text-sky-700 border-sky-200">Minor</span>
<h4 className="issue-title text-base font-semibold tracking-tight text-slate-900" id="issue-3-title">Form inputs missing labels</h4>
</div>
<button aria-controls="issue-3-details" aria-expanded="false" className="expand-btn rounded-lg p-2 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3AB795]">
<i data-lucide="chevron-down"></i>
</button>
</div>
<div className="mt-3 flex items-center gap-2 text-sm text-slate-600">
<i className="text-slate-500" data-lucide="map-pin"></i>
<span>/account/signup</span>
</div>
<p className="mt-3 text-sm text-slate-700">Some inputs don't have associated labels, which makes forms difficult to navigate for screen reader and keyboard users.</p>
<p className="mt-2 text-sm text-slate-700"><span className="text-slate-500">Fix:</span> Associate each input with a visible label via for/id or aria‑label/aria‑labelledby.</p>
<div className="mt-4 flex flex-wrap items-center gap-3">
<button className="copy-btn h-10 px-3 rounded-lg bg-white/70 border border-slate-300/90 text-slate-700 text-sm hover:bg-white inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3AB795]" data-code='&lt;label htmlFor="email"&gt;Email&lt;/label&gt;
&lt;input id="email" name="email" type="email"&gt;'>
<i data-lucide="copy"></i>
                      Copy Fix Code
                    </button>
<button className="done-btn h-10 px-3 rounded-lg bg-[#3AB795] text-white text-sm hover:bg-[#33a684] inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3AB795]">
<i data-lucide="check-circle-2"></i>
                      Mark Done
                    </button>
<button className="help-btn h-10 px-3 rounded-lg bg-white/70 border border-slate-300/90 text-slate-700 text-sm hover:bg-white inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3AB795]">
<i data-lucide="help-circle"></i>
                      Need Help?
                    </button>
</div>
<div className="details mt-4 hidden" id="issue-3-details">
<div className="rounded-xl border border-slate-200/70 bg-white/60 p-4">
<p className="text-xs text-slate-600">Technical details: 6 inputs lack programmatic labels. Ensure each control is labeled and has a clear focus style.</p>
</div>
</div>
</article>
</div>
<p aria-live="polite" className="sr-only" id="copyStatus"></p>
</div>
<div className="hidden space-y-6" data-tab-panel="code">
<div className="rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200/70 shadow p-5">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2">
<i className="text-[#3AB795]" data-lucide="wrench"></i>
<h3 className="text-base font-semibold tracking-tight text-slate-900">Batch patch: contrast + labels</h3>
</div>
<button className="copy-btn h-9 px-3 rounded-lg bg-white border border-slate-300/80 text-xs text-slate-700 hover:bg-slate-50 inline-flex items-center gap-2" data-code='/* Contrast fix */
.btn.primary{background:#156F5A;color:#fff}
/* Labels */
label[htmlFor="email"],label[htmlFor="name"]{display:inline-block;margin-bottom:.25rem}
input:focus{outline:2px solid #3AB795;outline-offset:2px}'>
<i data-lucide="copy"></i>
                    Copy patch
                  </button>
</div>
<pre className="mt-4 rounded-xl bg-slate-900 text-slate-100 p-4 text-[12px] overflow-x-auto"><code>/* Contrast fix */
.btn.primary{background:#156F5A;color:#fff}

/* Labels */
label[htmlFor="email"],label[htmlFor="name"]{display:inline-block;margin-bottom:.25rem}

input:focus{outline:2px solid #3AB795;outline-offset:2px}</code></pre>
<p className="mt-3 text-xs text-slate-500">Paste into your CSS bundle. Ensure focus outlines are not removed by resets.</p>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200/70 shadow p-5">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2">
<i className="text-[#3AB795]" data-lucide="palette"></i>
<h3 className="text-base font-semibold tracking-tight text-slate-900">Accessible color tokens</h3>
</div>
<button className="copy-btn h-9 px-3 rounded-lg bg-white border border-slate-300/80 text-xs text-slate-700 hover:bg-slate-50 inline-flex items-center gap-2" data-code=":root{--brand:#156F5A;--brand-contrast:#ffffff;--focus:#3AB795}
.btn-primary{background:var(--brand);color:var(--brand-contrast)}
:focus-visible{outline:2px solid var(--focus);outline-offset:2px}">
<i data-lucide="copy"></i>
                      Copy tokens
                    </button>
</div>
<pre className="mt-4 rounded-xl bg-slate-900 text-slate-100 p-4 text-[12px] overflow-x-auto"><code>:root{
  --brand:#</code></pre></div></div></div></div></section></div></section></main>
    </>
  );
}
