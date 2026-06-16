import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 -z-50 overflow-hidden">
<div className="absolute inset-0" style={{background: 'radial-gradient(1200px 600px at 70% 10%, rgba(30,64,175,0.22), transparent 60%), radial-gradient(900px 500px at 15% 30%, rgba(2,132,199,0.18), transparent 60%), radial-gradient(700px 300px at 50% 100%, rgba(15,23,42,0.6), rgba(2,6,23,1))'}}></div>
<div className="absolute inset-0 opacity-30" style="background-image:
      linear-gradient(to right, rgba(148,163,184,0.08) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(148,163,184,0.08) 1px, transparent 1px);
      background-size: 48px 48px;"></div>
<div className="absolute inset-0 opacity-[0.06]" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&amp', backgroundSize: 'cover', mixBlend: 'overlay'}}></div>
</div>

<header className="sticky top-0 z-40">
<nav className="mx-auto max-w-[75rem] px-4 sm:px-6 lg:px-8">
<div className="flex sm:px-4 sm:py-3 shadow-black/30 outline outline-1 outline-white/5 bg-white/5 border-white/10 border rounded-xl mt-4 pt-2 pr-3 pb-2 pl-3 shadow-sm backdrop-blur-xl items-center justify-between">

<a className="group inline-flex items-center gap-2 rounded-md px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50" href="/">
<div className="text-sm tracking-tight font-semibold text-slate-100" style={{fontFamily: 'Geist, Inter, ui-sans-serif'}}>CQ</div>
<div className="h-6 w-px bg-white/10"></div>
<span className="text-sm text-slate-300/90 group-hover:text-slate-100 transition-colors">CloudQuote</span>
</a>

<div className="hidden md:flex items-center gap-1">
<a className="rounded-md px-3 py-2 text-sm text-slate-300 hover:text-slate-100 hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40" href="/products/api">Data API</a>
<div className="relative">
<button aria-expanded="false" className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm text-slate-300 hover:text-slate-100 hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40" id="docsBtn">
<span>Documentation</span>
<svg className="lucide w-4 h-4 transition-transform duration-200" data-lucide="chevron-down" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="absolute right-0 mt-2 hidden w-56 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-md shadow-black/30 outline outline-1 outline-white/5 overflow-hidden" id="docsMenu">
<a className="block px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/[0.08]" href="/docs">API Reference</a>
<div className="h-px w-full bg-white/10"></div>
<a className="block px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/[0.08]" href="/docs/guides">Guides</a>
<a className="block px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/[0.08]" href="/docs/sdks">SDKs</a>
<a className="block px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/[0.08]" href="/status">System Status</a>
</div>
</div>
</div>

<div className="hidden sm:flex items-center gap-2">
<a className="rounded-md px-3 py-2 text-sm text-slate-300 hover:text-slate-100 hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40" href="/login">Log In</a>
<a className="rounded-lg bg-blue-500/90 text-white px-3 py-2 text-sm font-medium tracking-tight hover:bg-blue-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 shadow-sm shadow-blue-950/40" href="/signup">Sign Up</a>
<a className="rounded-md px-3 py-2 text-sm text-slate-300 hover:text-slate-100 hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40" href="/contact">Contact Us</a>
</div>

<div className="sm:hidden">
<button className="inline-flex items-center gap-2 rounded-md px-2.5 py-2 text-slate-200 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40" id="menuBtn">
<svg className="lucide w-5 h-5" data-lucide="menu" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
<span className="sr-only">Open menu</span>
</button>
</div>
</div>

<div className="mt-2 hidden flex-col gap-1 rounded-xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-xl shadow-sm shadow-black/30 outline outline-1 outline-white/5" id="mobileSheet">
<a className="rounded-md px-3 py-2 text-sm text-slate-300 hover:text-slate-100 hover:bg-white/5 transition" href="/products/api">Data API</a>
<a className="rounded-md px-3 py-2 text-sm text-slate-300 hover:text-slate-100 hover:bg-white/5 transition" href="/docs">Documentation</a>
<div className="h-px w-full bg-white/10 my-1"></div>
<a className="rounded-md px-3 py-2 text-sm text-slate-300 hover:text-slate-100 hover:bg-white/5 transition" href="/login">Log In</a>
<a className="rounded-lg bg-blue-500/90 text-white px-3 py-2 text-sm font-medium tracking-tight hover:bg-blue-500 transition" href="/signup">Sign Up</a>
<a className="rounded-md px-3 py-2 text-sm text-slate-300 hover:text-slate-100 hover:bg-white/5 transition" href="/contact">Contact Us</a>
</div>
</nav>
</header>
<main className="relative">

<section className="relative">
<div className="max-w-[75rem] sm:px-6 lg:px-8 mr-auto ml-auto pt-10 pr-4 pb-6 pl-4">
<div className="mt-0 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
<div>
<h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-100" style={{fontFamily: 'Geist, Inter, ui-sans-serif'}}>Form Components</h1>
<p className="mt-2 text-sm sm:text-base text-slate-300/90 max-w-2xl">A complete, consistent set of inputs and controls for SaaS apps. Copy, compose, and ship.</p>
</div>
<div className="flex items-center gap-2">
<a className="inline-flex items-center gap-2 rounded-lg bg-blue-500/90 text-white px-3.5 py-2 text-xs sm:text-sm font-medium tracking-tight hover:bg-blue-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 shadow-sm shadow-blue-950/40" href="#examples">
<svg className="lucide w-[18px] h-[18px]" data-lucide="component" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 7h13"></path><path d="M6 17h12"></path><path d="M7 3h10"></path><rect height="4" rx="1" width="4" x="3" y="5"></rect><rect height="4" rx="1" width="4" x="17" y="15"></rect></svg>
              Browse components
            </a>
<a className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3.5 py-2 text-xs sm:text-sm font-medium tracking-tight text-slate-200 hover:border-blue-500/50 hover:text-white hover:bg-white/[0.08] transition-colors" href="/docs">
<svg className="lucide w-[18px] h-[18px]" data-lucide="book-open" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M2 3h6a4 4 0 0 1 4 4v14H6a4 4 0 0 0-4 4z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14h6a4 4 0 0 1 4 4z"></path></svg>
              Docs
            </a>
</div>
</div>
</div>
</section>

<section className="relative" id="examples">
<div className="max-w-[75rem] sm:px-6 lg:px-8 mr-auto ml-auto pb-16 pr-4 pl-4">
<div className="grid lg:grid-cols-12 gap-6 lg:gap-8">

<div className="lg:col-span-8 space-y-6">

<div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl outline outline-1 outline-white/5 shadow-sm shadow-black/30">
<div className="px-4 sm:px-5 pt-4 pb-3 border-b border-white/10">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-100" style={{fontFamily: 'Geist, Inter'}}>Text &amp; Identity</h2>
</div>
<div className="px-4 sm:px-5 py-5 space-y-4">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-sm text-slate-200">Full name</label>
<input autocomplete="name" className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100 placeholder-slate-400/70 outline outline-1 outline-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="Jane Doe" type="text"/>
</div>
<div>
<label className="block text-sm text-slate-200">Username</label>
<div className="mt-1 flex items-center rounded-lg border border-white/10 bg-white/5 outline outline-1 outline-white/5 focus-within:ring-2 focus-within:ring-blue-500/40">
<span className="px-3 text-slate-400 text-sm">@</span>
<input autocomplete="username" className="w-full bg-transparent px-2 py-2 text-sm text-slate-100 placeholder-slate-400/70 focus:outline-none" placeholder="janedoe" type="text"/>
</div>
</div>
<div>
<label className="block text-sm text-slate-200">Work email</label>
<input autocomplete="email" className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100 placeholder-slate-400/70 outline outline-1 outline-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="jane@company.com" type="email"/>
</div>
<div>
<label className="block text-sm text-slate-200">Website</label>
<input className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100 placeholder-slate-400/70 outline outline-1 outline-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500/40" inputmode="url" placeholder="https://example.com" type="url"/>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-sm text-slate-200">Password</label>
<div className="mt-1 relative">
<input autocomplete="new-password" className="peer w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 pr-10 text-sm text-slate-100 placeholder-slate-400/70 outline outline-1 outline-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500/40" id="password" placeholder="••••••••" type="password"/>
<button className="absolute inset-y-0 right-0 my-1 mr-1 inline-flex items-center rounded-md px-2 text-slate-300 hover:text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40" id="togglePwd" type="button">
<svg className="lucide w-[18px] h-[18px]" data-lucide="eye" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</div>
<div className="mt-2">
<div className="h-1.5 w-full rounded bg-white/10 overflow-hidden">
<div className="h-full w-0 bg-red-500 transition-all" id="pwdStrengthBar"></div>
</div>
<div className="mt-1 flex items-center justify-between text-xs text-slate-400">
<span id="pwdStrengthLabel">Weak</span>
<span>Use 12+ chars with numbers &amp; symbols</span>
</div>
</div>
</div>
<div>
<label className="block text-sm text-slate-200">Confirm password</label>
<input autocomplete="new-password" className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100 placeholder-slate-400/70 outline outline-1 outline-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500/40" id="confirmPassword" placeholder="••••••••" type="password"/>
<p className="mt-1 text-xs text-slate-400" id="confirmHint">Must match the password above.</p>
</div>
</div>

<div>
<div className="flex items-center justify-between">
<label className="block text-sm text-slate-200">About</label>
<span className="text-xs text-slate-400" id="bioCount">0 / 300</span>
</div>
<textarea className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100 placeholder-slate-400/70 outline outline-1 outline-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500/40" id="bio" maxlength="300" placeholder="Tell us about your use case..." rows="4"></textarea>
</div>
</div>
</div>

<div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl outline outline-1 outline-white/5 shadow-sm shadow-black/30">
<div className="px-4 sm:px-5 pt-4 pb-3 border-b border-white/10">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-100" style={{fontFamily: 'Geist, Inter'}}>Numbers &amp; Finance</h2>
</div>
<div className="px-4 sm:px-5 py-5 space-y-4">
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

<div>
<label className="block text-sm text-slate-200">Seats</label>
<div className="mt-1 flex items-center rounded-lg border border-white/10 bg-white/5 outline outline-1 outline-white/5">
<button className="h-9 w-9 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10" data-step="down" type="button">
<svg className="lucide w-[18px] h-[18px]" data-lucide="minus" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</button>
<input className="h-9 w-full bg-transparent text-center text-sm text-slate-100 focus:outline-none" id="seats" inputmode="numeric" max="999" min="1" type="number" value="5"/>
<button className="h-9 w-9 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10" data-step="up" type="button">
<svg className="lucide w-[18px] h-[18px]" data-lucide="plus" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="M5 12h14"></path></svg>
</button>
</div>
</div>

<div>
<label className="block text-sm text-slate-200">Budget</label>
<div className="mt-1 flex items-center rounded-lg border border-white/10 bg-white/5 outline outline-1 outline-white/5 focus-within:ring-2 focus-within:ring-blue-500/40">
<span className="px-3 text-slate-400 text-sm">$</span>
<input className="w-full bg-transparent px-2 py-2 text-sm text-slate-100 placeholder-slate-400/70 focus:outline-none" id="currency" inputmode="decimal" placeholder="0.00" type="text"/>
<span className="px-3 text-slate-400 text-xs">USD</span>
</div>
</div>

<div>
<label className="block text-sm text-slate-200">Discount</label>
<div className="mt-1 flex items-center rounded-lg border border-white/10 bg-white/5 outline outline-1 outline-white/5 focus-within:ring-2 focus-within:ring-blue-500/40">
<input className="w-full bg-transparent px-3 py-2 text-sm text-slate-100 placeholder-slate-400/70 focus:outline-none" id="percent" inputmode="decimal" placeholder="0" type="text"/>
<span className="px-3 text-slate-400 text-sm">%</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-sm text-slate-200">Phone</label>
<div className="mt-1 grid grid-cols-[120px_1fr] gap-2">
<select className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100 outline outline-1 outline-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500/40" id="phoneCountry">
<option selected="" value="US">US +1</option>
<option value="CA">CA +1</option>
<option value="GB">UK +44</option>
<option value="AU">AU +61</option>
<option value="DE">DE +49</option>
<option value="FR">FR +33</option>
<option value="IN">IN +91</option>
</select>
<div className="flex items-center rounded-lg border border-white/10 bg-white/5 outline outline-1 outline-white/5 focus-within:ring-2 focus-within:ring-blue-500/40">
<span className="px-3 text-slate-400 text-sm" id="dialCode">+1</span>
<input className="w-full bg-transparent px-2 py-2 text-sm text-slate-100 placeholder-slate-400/70 focus:outline-none" id="phone" inputmode="tel" placeholder="(555) 000-0000" type="tel"/>
</div>
</div>
</div>
<div>
<label className="block text-sm text-slate-200">Verification code</label>
<div className="mt-1 flex items-center gap-2">
<input className="otp w-10 h-10 text-center rounded-md border border-white/10 bg-white/5 outline outline-1 outline-white/5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40" inputmode="numeric" maxlength="1"/>
<input className="otp w-10 h-10 text-center rounded-md border border-white/10 bg-white/5 outline outline-1 outline-white/5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40" inputmode="numeric" maxlength="1"/>
<input className="otp w-10 h-10 text-center rounded-md border border-white/10 bg-white/5 outline outline-1 outline-white/5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40" inputmode="numeric" maxlength="1"/>
<input className="otp w-10 h-10 text-center rounded-md border border-white/10 bg-white/5 outline outline-1 outline-white/5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40" inputmode="numeric" maxlength="1"/>
<input className="otp w-10 h-10 text-center rounded-md border border-white/10 bg-white/5 outline outline-1 outline-white/5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40" inputmode="numeric" maxlength="1"/>
<input className="otp w-10 h-10 text-center rounded-md border border-white/10 bg-white/5 outline outline-1 outline-white/5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40" inputmode="numeric" maxlength="1"/>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl outline outline-1 outline-white/5 shadow-sm shadow-black/30">
<div className="px-4 sm:px-5 pt-4 pb-3 border-b border-white/10">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-100" style={{fontFamily: 'Geist, Inter'}}>Dates &amp; Time</h2>
</div>
<div className="px-4 sm:px-5 py-5 space-y-4">
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<div>
<label className="block text-sm text-slate-200">Date</label>
<input className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100 outline outline-1 outline-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500/40" type="date"/>
</div>
<div>
<label className="block text-sm text-slate-200">Time</label>
<input className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100 outline outline-1 outline-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500/40" type="time"/>
</div>
<div>
<label className="block text-sm text-slate-200">Date &amp; time</label>
<input className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100 outline outline-1 outline-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500/40" type="datetime-local"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<div>
<label className="block text-sm text-slate-200">Month</label>
<input className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100 outline outline-1 outline-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500/40" type="month"/>
</div>
<div>
<label className="block text-sm text-slate-200">Week</label>
<input className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100 outline outline-1 outline-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500/40" type="week"/>
</div>
<div>
<label className="block text-sm text-slate-200">Timezone</label>
<select className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100 outline outline-1 outline-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500/40">
<option value="UTC">UTC</option>
<option selected="" value="PST">Pacific (UTC-08:00)</option>
<option value="MST">Mountain (UTC-07:00)</option>
<option value="CST">Central (UTC-06:00)</option>
<option value="EST">Eastern (UTC-05:00)</option>
<option value="IST">India (UTC+05:30)</option>
</select>
</div>
</div>

<div>
<div className="flex items-center justify-between">
<label className="block text-sm text-slate-200">Session length</label>
<div className="text-xs text-slate-400"><span id="durationValue">30</span> min</div>
</div>
<div className="mt-2">
<input className="w-full appearance-none h-2 rounded bg-white/10" id="duration" max="120" min="15" step="15" style={{background: 'linear-gradient(90deg, rgba(59,130,246,0.9) 25%, rgba(255,255,255,0.08) 25%)'}} type="range" value="30"/>
</div>
</div>
</div>
</div>

<div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl outline outline-1 outline-white/5 shadow-sm shadow-black/30">
<div className="px-4 sm:px-5 pt-4 pb-3 border-b border-white/10">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-100" style={{fontFamily: 'Geist, Inter'}}>Selects &amp; Combobox</h2>
</div>
<div className="px-4 sm:px-5 py-5 space-y-5">

<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<div>
<label className="block text-sm text-slate-200">Plan</label>
<select className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100 outline outline-1 outline-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500/40">
<option>Starter</option>
<option selected="">Pro</option>
<option>Business</option>
<option>Enterprise</option>
</select>
</div>
<div>
<label className="block text-sm text-slate-200">Region</label>
<select className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100 outline outline-1 outline-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500/40">
<option selected="">US-East</option>
<option>US-West</option>
<option>EU-West</option>
<option>AP-Southeast</option>
</select>
</div>
<div>
<label className="block text-sm text-slate-200">Environment</label>
<select className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100 outline outline-1 outline-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500/40">
<option>Development</option>
<option selected="">Staging</option>
<option>Production</option>
</select>
</div>
</div>

<div>
<label className="block text-sm text-slate-200">Owner</label>
<div className="relative mt-1">
<button className="w-full inline-flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100 outline outline-1 outline-white/5 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-blue-500/40" id="ownerSelectBtn" type="button">
<span className="text-slate-300" id="ownerSelectLabel">Select a user</span>
<svg className="lucide w-[18px] h-[18px] text-slate-400" data-lucide="chevron-down" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="hidden absolute z-20 mt-2 w-full rounded-lg border border-white/10 bg-slate-900/95 backdrop-blur-xl outline outline-1 outline-white/5 shadow-md shadow-black/30" id="ownerSelectMenu">
<div className="p-2">
<div className="flex items-center gap-2 rounded-md bg-white/5 px-2 py-1.5">
<svg className="lucide w-[16px] h-[16px] text-slate-400" data-lucide="search" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-6-6"></path></svg>
<input className="w-full bg-transparent text-sm text-slate-100 placeholder-slate-400 focus:outline-none" id="ownerSearch" placeholder="Search users..."/>
</div>
</div>
<div className="max-h-60 overflow-auto" id="ownerOptions">
<button className="w-full flex items-center gap-3 px-3 py-2 text-left text-sm text-slate-300 hover:bg-white/[0.06]" data-value="1">
<div className="h-6 w-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500"></div>
<div><div className="text-slate-100">Jane Cooper</div><div className="text-xs text-slate-400">@jane</div></div>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-left text-sm text-slate-300 hover:bg-white/[0.06]" data-value="2">
<div className="h-6 w-6 rounded-full bg-gradient-to-br from-rose-500 to-pink-500"></div>
<div><div className="text-slate-100">Robert Fox</div><div className="text-xs text-slate-400">@rob</div></div>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-left text-sm text-slate-300 hover:bg-white/[0.06]" data-value="3">
<div className="h-6 w-6 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500"></div>
<div><div className="text-slate-100">Courtney Henry</div><div className="text-xs text-slate-400">@court</div></div>
</button>
</div>
</div>
<input id="ownerHidden" name="owner" type="hidden"/>
</div>
</div>

<div>
<label className="block text-sm text-slate-200">Labels</label>
<div className="relative mt-1">
<div className="flex flex-wrap items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2 py-1.5 outline outline-1 outline-white/5 focus-within:ring-2 focus-within:ring-blue-500/40" id="labelCombobox">
<div className="flex flex-wrap items-center gap-1" id="labelChips"></div>
<input className="flex-1 min-w-[120px] bg-transparent px-1 py-1 text-sm text-slate-100 placeholder-slate-400 focus:outline-none" id="labelInput" placeholder="Add label..."/>
<button className="ml-auto inline-flex items-center rounded-md p-1 text-slate-400 hover:text-white hover:bg-white/10" id="labelToggle" type="button">
<svg className="lucide w-[16px] h-[16px]" data-lucide="chevron-down" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>
<div className="hidden absolute z-20 mt-2 w-full rounded-lg border border-white/10 bg-slate-900/95 backdrop-blur-xl outline outline-1 outline-white/5 shadow-md shadow-black/30 max-h-56 overflow-auto" id="labelMenu">
<button className="w-full px-3 py-2 text-left text-sm text-slate-300 hover:bg-white/[0.06]" data-label="Priority">Priority</button>
<button className="w-full px-3 py-2 text-left text-sm text-slate-300 hover:bg-white/[0.06]" data-label="Billing">Billing</button>
<button className="w-full px-3 py-2 text-left text-sm text-slate-300 hover:bg-white/[0.06]" data-label="Security">Security</button>
<button className="w-full px-3 py-2 text-left text-sm text-slate-300 hover:bg-white/[0.06]" data-label="Analytics">Analytics</button>
<button className="w-full px-3 py-2 text-left text-sm text-slate-300 hover:bg-white/[0.06]" data-label="Integrations">Integrations</button>
</div>
<input id="labelsHidden" name="labels" type="hidden"/>
</div>
</div>
</div>
</div>

<div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl outline outline-1 outline-white/5 shadow-sm shadow-black/30">
<div className="px-4 sm:px-5 pt-4 pb-3 border-b border-white/10">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-100" style={{fontFamily: 'Geist, Inter'}}>Uploads &amp; Media</h2>
</div>
<div className="px-4 sm:px-5 py-5 space-y-5">

<div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-4 items-center">
<div>
<div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 ring-2 ring-white/10" id="avatarPreview"></div>
</div>
<div className="flex items-center gap-2">
<label className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium tracking-tight text-slate-200 hover:border-blue-500/50 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer">
<input accept="image/*" className="sr-only" id="avatarInput" type="file"/>
<svg className="lucide w-[16px] h-[16px]" data-lucide="upload" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M3 15v4h18v-4"></path><path d="m17 8-5-5-5 5"></path><path d="M12 3v12"></path></svg>
                      Upload avatar
                    </label>
<button className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-xs text-rose-300 hover:text-rose-200 hover:bg-rose-500/10 border border-white/10" id="avatarRemove" type="button">Remove</button>
</div>
</div>

<div>
<label className="block text-sm text-slate-200">Attachments</label>
<div className="mt-1 flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-white/15 bg-white/5 px-4 py-6 outline outline-1 outline-white/5 hover:border-blue-500/40" id="dropzone">
<svg className="lucide w-5 h-5 text-slate-300" data-lucide="file-up" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H6a2 2 0 0 0-2 2v16l4-4h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"></path><path d="M12 9v7"></path><path d="m15 13-3-3-3 3"></path></svg>
<div className="text-sm text-slate-300/90">Drag files here or</div>
<label className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium tracking-tight text-slate-200 hover:border-blue-500/50 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer">
<input className="sr-only" id="fileInput" multiple="" type="file"/>
                      Browse
                    </label>
<p className="text-xs text-slate-400">Images, PDFs up to 25MB each</p>
</div>
<div className="mt-3 grid sm:grid-cols-2 gap-2" id="fileList"></div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="sm:col-span-2">
<label className="block text-sm text-slate-200">Brand color</label>
<div className="mt-1 flex items-center gap-2">
<input className="h-10 w-12 rounded-lg border border-white/10 bg-white/5 p-0" id="colorInput" type="color" value="#3b82f6"/>
<input className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100 outline outline-1 outline-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500/40" id="colorHex" type="text" value="#3b82f6"/>
</div>
</div>
<div>
<label className="block text-sm text-slate-200">Preview</label>
<div className="mt-1 h-10 w-full rounded-lg border border-white/10 outline outline-1 outline-white/5" id="colorPreview" style={{background: 'linear-gradient(90deg, #3b82f6, #60a5fa)'}}></div>
</div>
</div>
</div>
</div>

<div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl outline outline-1 outline-white/5 shadow-sm shadow-black/30">
<div className="px-4 sm:px-5 pt-4 pb-3 border-b border-white/10">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-100" style={{fontFamily: 'Geist, Inter'}}>Address</h2>
</div>
<div className="px-4 sm:px-5 py-5 space-y-4">
<div>
<label className="block text-sm text-slate-200">Street address</label>
<input autocomplete="street-address" className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100 placeholder-slate-400/70 outline outline-1 outline-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="195 Glenn Way, Suite 250" type="text"/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<div>
<label className="block text-sm text-slate-200">City</label>
<input autocomplete="address-level2" className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100 outline outline-1 outline-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="San Carlos" type="text"/>
</div>
<div>
<label className="block text-sm text-slate-200">State/Province</label>
<select autocomplete="address-level1" className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100 outline outline-1 outline-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500/40">
<option selected="">CA</option>
<option>NY</option>
<option>TX</option>
<option>WA</option>
<option>FL</option>
</select>
</div>
<div>
<label className="block text-sm text-slate-200">ZIP/Postal code</label>
<input autocomplete="postal-code" className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100 outline outline-1 outline-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500/40" inputmode="numeric" placeholder="94070" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-sm text-slate-200">Country</label>
<select autocomplete="country-name" className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100 outline outline-1 outline-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500/40">
<option selected="">United States</option>
<option>Canada</option>
<option>United Kingdom</option>
<option>Germany</option>
<option>France</option>
<option>Australia</option>
<option>India</option>
</select>
</div>
<div>
<label className="block text-sm text-slate-200">Address type</label>
<div className="mt-1 flex items-center gap-3">

<label className="inline-flex items-center gap-2 cursor-pointer">
<input className="peer sr-only" name="addrType" type="radio" value="business"/>
<span className="h-4 w-4 rounded-full border border-white/20 bg-white/5 inline-flex items-center justify-center peer-checked:ring-2 peer-checked:ring-blue-500/50 peer-checked:border-blue-500/60">
<span className="h-2.5 w-2.5 rounded-full bg-blue-500/90 opacity-0 peer-checked:opacity-100 transition"></span>
</span>
<span className="text-sm text-slate-300">Business</span>
</label>
<label className="inline-flex items-center gap-2 cursor-pointer">
<input checked="" className="peer sr-only" name="addrType" type="radio" value="residential"/>
<span className="h-4 w-4 rounded-full border border-white/20 bg-white/5 inline-flex items-center justify-center peer-checked:ring-2 peer-checked:ring-blue-500/50 peer-checked:border-blue-500/60">
<span className="h-2.5 w-2.5 rounded-full bg-blue-500/90 opacity-0 peer-checked:opacity-100 transition"></span>
</span>
<span className="text-sm text-slate-300">Residential</span>
</label>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl outline outline-1 outline-white/5 shadow-sm shadow-black/30">
<div className="px-4 sm:px-5 pt-4 pb-3 border-b border-white/10">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-100" style={{fontFamily: 'Geist, Inter'}}>Security &amp; Keys</h2>
</div>
<div className="px-4 sm:px-5 py-5 space-y-4">
<div>
<label className="block text-sm text-slate-200">API key</label>
<div className="mt-1 relative">
<input className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 pr-20 text-sm text-slate-100 outline outline-1 outline-white/5 focus:outline-none" id="apiKey" type="password" value="sk_live_51Hq...c9T"/>
<div className="absolute right-1 top-1.5 flex items-center gap-1">
<button className="inline-flex items-center rounded-md px-2 py-1 text-xs text-slate-300 hover:text-white hover:bg-white/10" id="revealKey" type="button">
<svg className="lucide w-[16px] h-[16px]" data-lucide="eye" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
<button className="inline-flex items-center rounded-md px-2 py-1 text-xs text-slate-300 hover:text-white hover:bg-white/10" id="copyKey" type="button">
<svg className="lucide w-[16px] h-[16px]" data-lucide="copy" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="13" rx="2" width="13" x="9" y="9"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
</button>
</div>
</div>
</div>
<div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2 outline outline-1 outline-white/5">
<div>
<div className="text-sm text-slate-100">Two-factor authentication</div>
<div className="text-xs text-slate-400">Require 2FA for this account</div>
</div>

<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" id="twoFa" type="checkbox"/>
<span className="w-10 h-6 rounded-full bg-white/10 border border-white/10 inline-flex items-center transition-all peer-checked:bg-blue-500/80 peer-checked:border-blue-500/60">
<span className="h-5 w-5 rounded-full bg-slate-300 translate-x-0.5 transition-all peer-checked:translate-x-[18px] peer-checked:bg-white"></span>
</span>
</label>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium tracking-tight text-slate-200 hover:border-blue-500/50 hover:text-white hover:bg-white/[0.08] transition-colors" id="downloadRecovery" type="button">
<svg className="lucide w-[16px] h-[16px]" data-lucide="download" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path><path d="M12 15V3"></path></svg>
                    Download recovery codes
                  </button>
<span className="text-xs text-emerald-400 hidden" id="downloadToast">Saved.</span>
</div>
</div>
</div>

<div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl outline outline-1 outline-white/5 shadow-sm shadow-black/30">
<div className="px-4 sm:px-5 pt-4 pb-3 border-b border-white/10">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-100" style={{fontFamily: 'Geist, Inter'}}>Feedback</h2>
</div>
<div className="px-4 sm:px-5 py-5 space-y-5">

<div>
<label className="block text-sm text-slate-200">Rate your experience</label>
<div className="mt-2 inline-flex items-center gap-1" id="rating">
<button className="p-1 text-slate-400 hover:text-yellow-300" data-value="1" type="button">
<svg className="lucide" data-lucide="star" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="22" xmlns="http://www.w3.org/2000/svg"><path d="m12 17.27 6.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l4.46 4.73L5.82 21z"></path></svg>
</button>
<button className="p-1 text-slate-400 hover:text-yellow-300" data-value="2" type="button"><svg className="lucide" data-lucide="star" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="22" xmlns="http://www.w3.org/2000/svg"><path d="m12 17.27 6.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l4.46 4.73L5.82 21z"></path></svg></button>
<button className="p-1 text-slate-400 hover:text-yellow-300" data-value="3" type="button"><svg className="lucide" data-lucide="star" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="22" xmlns="http://www.w3.org/2000/svg"><path d="m12 17.27 6.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l4.46 4.73L5.82 21z"></path></svg></button>
<button className="p-1 text-slate-400 hover:text-yellow-300" data-value="4" type="button"><svg className="lucide" data-lucide="star" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="22" xmlns="http://www.w3.org/2000/svg"><path d="m12 17.27 6.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l4.46 4.73L5.82 21z"></path></svg></button>
<button className="p-1 text-slate-400 hover:text-yellow-300" data-value="5" type="button"><svg className="lucide" data-lucide="star" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="22" xmlns="http://www.w3.org/2000/svg"><path d="m12 17.27 6.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l4.46 4.73L5.82 21z"></path></svg></button>
</div>
<input id="ratingValue" type="hidden" value="0"/>
</div>

<div>
<label className="block text-sm text-slate-200">How likely are you to recommend us?</label>
<div className="mt-2 grid grid-cols-11 gap-1" id="nps">

<template id="npsTemplate"></template>
</div>
<input id="npsValue" type="hidden" value=""/>
</div>

<div>
<div className="flex items-center justify-between">
<label className="block text-sm text-slate-200">Satisfaction</label>
<span className="text-xs text-slate-400"><span id="satisfactionLabel">50</span>%</span>
</div>
<input className="mt-2 w-full appearance-none h-2 rounded bg-white/10" id="satisfaction" max="100" min="0" style={{background: 'linear-gradient(90deg, rgba(59,130,246,0.9) 50%, rgba(255,255,255,0.08) 50%)'}} type="range" value="50"/>
</div>
</div>
</div>
</div>

<aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-[96px] self-start">

<div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl outline outline-1 outline-white/5 shadow-sm shadow-black/30">
<div className="px-4 sm:px-5 pt-4 pb-3 border-b border-white/10">
<h3 className="text-lg font-semibold tracking-tight text-slate-100" style={{fontFamily: 'Geist, Inter'}}>Choices</h3>
</div>
<div className="px-4 sm:px-5 py-5 space-y-5">

<div className="grid grid-cols-1 gap-2">
<label className="group rounded-lg border border-white/10 bg-white/5 p-3 outline outline-1 outline-white/5 hover:bg-white/10 cursor-pointer transition">
<input className="peer sr-only" name="planCard" type="radio" value="starter"/>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-gradient-to-br from-slate-500 to-slate-700"></div>
<div>
<div className="text-slate-100 text-sm">Starter</div>
<div className="text-xs text-slate-400">Up to 3 projects</div>
</div>
</div>
<div className="inline-flex items-center gap-2 text-xs text-slate-300">
                        $0
                        <span className="h-5 w-5 rounded-full border border-white/10 inline-flex items-center justify-center peer-checked:border-blue-500/60 peer-checked:ring-2 peer-checked:ring-blue-500/40">
<span className="h-2.5 w-2.5 rounded-full bg-blue-500/90 opacity-0 peer-checked:opacity-100 transition"></span>
</span>
</div>
</div>
</label>
<label className="group rounded-lg border border-white/10 bg-white/5 p-3 outline outline-1 outline-white/5 hover:bg-white/10 cursor-pointer transition">
<input checked="" className="peer sr-only" name="planCard" type="radio" value="pro"/>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-500 to-indigo-500"></div>
<div>
<div className="text-slate-100 text-sm">Pro</div>
<div className="text-xs text-slate-400">Unlimited projects</div>
</div>
</div>
<div className="inline-flex items-center gap-2 text-xs text-slate-300">
                        $29
                        <span className="h-5 w-5 rounded-full border border-white/10 inline-flex items-center justify-center peer-checked:border-blue-500/60 peer-checked:ring-2 peer-checked:ring-blue-500/40">
<span className="h-2.5 w-2.5 rounded-full bg-blue-500/90 opacity-0 peer-checked:opacity-100 transition"></span>
</span>
</div>
</div>
</label>
</div>

<div>
<label className="block text-sm text-slate-200 mb-2">Add-ons</label>
<div className="space-y-2">
<label className="flex items-center gap-3 cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
</label></div></div></div></div></aside></div></div></section></main>
    </>
  );
}
