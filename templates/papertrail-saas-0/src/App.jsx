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
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
serif: ['"Playfair Display"', 'serif'],
sans: ['"Manrope"', 'sans-serif'],
},
colors: {
bg: '#0D0B14',
card: '#13101E',
primary: '#F2F0FF',
secondary: '#9080B0',
border: '#2A2040',
violet: '#7C3AED',
emerald: '#10B981',
warning: '#F59E0B',
danger: '#EF4444',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="w-full max-w-[1280px] bg-bg rounded-xl border border-violet shadow-md overflow-hidden flex flex-col h-[90vh] mx-auto relative relative z-10">

<div className="h-12 border-b border-border flex items-center px-4 gap-3 bg-card shrink-0 relative z-20">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-border"></div>
<div className="w-3 h-3 rounded-full bg-border"></div>
<div className="w-3 h-3 rounded-full bg-border"></div>
</div>
<div className="flex-1 flex justify-center">
<div className="flex items-center gap-2 bg-bg border border-border rounded-md px-32 py-1.5 text-xs text-secondary max-w-md w-full justify-center">
<iconify-icon className="text-[14px]" icon="solar:lock-keyhole-linear"></iconify-icon>
<span>www.usepapertrail.app</span>
</div>
</div>
<div className="w-[52px]"></div> 
</div>

<div className="flex-1 overflow-y-auto overflow-x-hidden frame-scroll relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-violet opacity-[0.03] blur-[120px] rounded-full pointer-events-none z-0"></div>

<nav className="sticky top-0 z-50 backdrop-blur-md bg-bg/80 border-b border-border/50 px-6 py-4 flex justify-between items-center">
<a className="font-sans font-medium text-primary tracking-tighter text-lg uppercase flex items-center gap-2" href="#">
<iconify-icon className="text-violet text-xl" icon="solar:documents-linear"></iconify-icon>
                    PAPERTRAIL
                </a>
<div className="hidden md:flex items-center gap-8 text-sm">
<a className="hover:text-primary transition-colors" href="#features">Features</a>
<a className="hover:text-primary transition-colors" href="#pricing">Pricing</a>
</div>
<a className="bg-violet hover:bg-[#6D28D9] text-white text-xs px-4 py-2 rounded-md transition-colors font-medium" href="#waitlist">
                    Get on the list
                </a>
</nav>
<main className="relative z-10">

<section className="px-6 pt-32 pb-24 max-w-4xl mx-auto text-center flex flex-col items-center animate-sequence">
<div className="flex flex-wrap justify-center gap-2 mb-8">
<span className="px-3 py-1 border border-border rounded-full text-xs bg-card">Passport</span>
<span className="px-3 py-1 border border-border rounded-full text-xs bg-card">Insurance</span>
<span className="px-3 py-1 border border-border rounded-full text-xs bg-card">Debit Card</span>
<span className="px-3 py-1 border border-border rounded-full text-xs bg-card">Visa</span>
<span className="px-3 py-1 border border-violet/30 text-violet rounded-full text-xs bg-violet/5">closed beta</span>
</div>
<h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-primary font-normal tracking-tight leading-tight mb-6 max-w-3xl">
                        Never let a document expire again.
                    </h1>
<p className="text-sm md:text-lg mb-10 max-w-2xl leading-relaxed">
                        Passports, insurance, licenses, visas, plus the bills and supplier emails that pile up in your inbox. Add them once. We'll remind you before the date, by email, push, or your calendar.
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto bg-violet hover:bg-[#6D28D9] text-white px-6 py-3 rounded-md text-sm font-medium transition-colors text-center shadow-md shadow-violet/20" href="#waitlist">
                            Get on the list
                        </a>
<a className="w-full sm:w-auto px-6 py-3 rounded-md text-sm font-medium hover:text-primary transition-colors text-center flex items-center justify-center gap-2" href="#features">
                            See how it works <iconify-icon icon="solar:arrow-down-linear"></iconify-icon>
</a>
</div>
</section>

<section className="px-6 pb-32 max-w-5xl mx-auto animate-sequence">
<div className="bg-card border border-border rounded-xl p-6 shadow-xl relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-violet/5 to-transparent pointer-events-none"></div>
<div className="flex items-center justify-between border-b border-border pb-4 mb-4 relative z-10">
<h3 className="font-serif text-xl tracking-tight text-primary">Your Documents</h3>
<button className="bg-bg border border-border text-xs px-3 py-1.5 rounded-md hover:border-secondary transition-colors flex items-center gap-2">
<iconify-icon icon="solar:add-circle-linear"></iconify-icon> Add New
                            </button>
</div>
<div className="space-y-1 relative z-10">

<div className="flex items-center justify-between p-3 rounded-lg hover:bg-bg/50 transition-colors group cursor-default">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-md bg-bg border border-border flex items-center justify-center text-secondary group-hover:text-primary transition-colors">
<iconify-icon className="text-xl" icon="solar:passport-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-primary">British Passport</p>
<p className="text-xs text-secondary">Identity</p>
</div>
</div>
<div className="flex items-center gap-4">
<span className="text-xs text-secondary hidden sm:block">Expires in 4 years</span>
<span className="px-2.5 py-1 bg-emerald/10 text-emerald text-xs rounded-md border border-emerald/20">Valid</span>
</div>
</div>

<div className="flex items-center justify-between p-3 rounded-lg bg-bg/30 hover:bg-bg/50 transition-colors group cursor-default border border-border/50">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-md bg-bg border border-border flex items-center justify-center text-warning group-hover:text-warning transition-colors">
<iconify-icon className="text-xl" icon="solar:shield-warning-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-primary">Car Insurance</p>
<p className="text-xs text-secondary">Direct Line</p>
</div>
</div>
<div className="flex items-center gap-4">
<span className="text-xs text-secondary hidden sm:block">Oct 24, 2026</span>
<span className="px-2.5 py-1 bg-warning/10 text-warning text-xs rounded-md border border-warning/20">28 days left</span>
</div>
</div>

<div className="flex items-center justify-between p-3 rounded-lg hover:bg-bg/50 transition-colors group cursor-default">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-md bg-bg border border-border flex items-center justify-center text-danger group-hover:text-danger transition-colors">
<iconify-icon className="text-xl" icon="solar:bill-list-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-primary">Energy Tariff</p>
<p className="text-xs text-secondary">Octopus Energy</p>
</div>
</div>
<div className="flex items-center gap-4">
<span className="text-xs text-secondary hidden sm:block">Tomorrow</span>
<span className="px-2.5 py-1 bg-danger/10 text-danger text-xs rounded-md border border-danger/20">Due soon</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-border bg-bg/50">
<div className="max-w-7xl mx-auto px-6 overflow-hidden">
<div className="flex flex-wrap justify-center gap-6 md:gap-8">
<div className="max-w-xs text-center md:text-left">
<div className="flex text-violet text-sm mb-2 md:justify-start justify-center">★★★★★</div>
<p className="text-sm text-primary mb-3 leading-relaxed">"Caught my car insurance before it lapsed. I had no idea it was that close."</p>
<p className="text-xs text-secondary font-medium uppercase tracking-widest">Tunde, Lagos</p>
</div>
<div className="max-w-xs text-center md:text-left hidden md:block">
<div className="flex text-violet text-sm mb-2 md:justify-start justify-center">★★★★★</div>
<p className="text-sm text-primary mb-3 leading-relaxed">"Six documents, one place. I'm not juggling spreadsheets anymore."</p>
<p className="text-xs text-secondary font-medium uppercase tracking-widest">Kefilwe, Johannesburg</p>
</div>
<div className="max-w-xs text-center md:text-left hidden lg:block">
<div className="flex text-violet text-sm mb-2 md:justify-start justify-center">★★★★★</div>
<p className="text-sm text-primary mb-3 leading-relaxed">"Energy, broadband, insurance renewals: I forward the PDFs and actually see what's due."</p>
<p className="text-xs text-secondary font-medium uppercase tracking-widest">Bolu, UK</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-6xl mx-auto" id="features">
<h2 className="font-serif text-3xl md:text-4xl text-primary font-normal tracking-tight text-center mb-16">
                        You've got better things to do.<br/><span className="text-secondary">PaperTrail fills the gap.</span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">

<div className="bg-card border border-border p-6 rounded-xl hover:border-violet/50 transition-colors">
<div className="w-10 h-10 rounded-full bg-bg border border-border flex items-center justify-center mb-4 text-primary">
<iconify-icon className="text-xl" icon="solar:car-broken-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-primary mb-2">Oops, your car insurance ran out</h3>
<p className="text-sm leading-relaxed">It ended weeks ago. No one sent you a big red alert. So now you're driving and quietly hoping nothing happens.</p>
</div>

<div className="bg-card border border-border p-6 rounded-xl hover:border-violet/50 transition-colors">
<div className="w-10 h-10 rounded-full bg-bg border border-border flex items-center justify-center mb-4 text-primary">
<iconify-icon className="text-xl" icon="solar:plane-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-primary mb-2">Your passport was "fine." The airline disagreed.</h3>
<p className="text-sm leading-relaxed">You had months left on the calendar. They had a rule you didn't know about. Suddenly your holiday plan wobbles.</p>
</div>

<div className="bg-card border border-border p-6 rounded-xl hover:border-violet/50 transition-colors">
<div className="w-10 h-10 rounded-full bg-bg border border-border flex items-center justify-center mb-4 text-primary">
<iconify-icon className="text-xl" icon="solar:card-broken-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-primary mb-2">Card declined. Queue behind you. Fun.</h3>
<p className="text-sm leading-relaxed">The new card is still in the mail. The old one picked today to retire. The beep at the till is louder than it should be.</p>
</div>
</div>
<p className="text-center text-sm md:text-base max-w-2xl mx-auto border border-border bg-card p-4 rounded-lg">
                        PaperTrail exists for exactly that gap. You add the document once, and we keep the dates on your radar.
                    </p>
</section>

<section className="py-24 px-6 bg-card border-y border-border relative overflow-hidden">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-violet/5 to-transparent rounded-full blur-[80px]"></div>
<div className="max-w-5xl mx-auto relative z-10">
<div className="text-center mb-16">
<h2 className="font-serif text-3xl md:text-4xl text-primary font-normal tracking-tight mb-4">Three steps. Less last-minute panic.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-px bg-border"></div>
<div className="relative pt-8 md:pt-0">
<div className="absolute top-0 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 w-16 h-16 bg-bg border border-border rounded-full flex items-center justify-center text-xl text-primary font-serif z-10 md:-translate-y-8">01</div>
<div className="text-center md:text-left mt-16 md:mt-12">
<h3 className="text-lg font-medium text-primary mb-3">Get it into PaperTrail</h3>
<p className="text-sm leading-relaxed">Snap a photo, forward a bill or supplier email to The Drop, or import a CSV if you're migrating a list.</p>
</div>
</div>
<div className="relative pt-8 md:pt-0">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-bg border border-border rounded-full flex items-center justify-center text-xl text-primary font-serif z-10 md:-translate-y-8">02</div>
<div className="text-center mt-16 md:mt-12">
<h3 className="text-lg font-medium text-primary mb-3">Glance, tweak, confirm</h3>
<p className="text-sm leading-relaxed">We pull out the expiry, type, and issuer. You sanity-check it and tap done. No retyping walls of text.</p>
</div>
</div>
<div className="relative pt-8 md:pt-0">
<div className="absolute top-0 left-1/2 md:left-full md:-translate-x-full -translate-x-1/2 w-16 h-16 bg-bg border border-border rounded-full flex items-center justify-center text-xl text-primary font-serif z-10 md:-translate-y-8">03</div>
<div className="text-center md:text-right mt-16 md:mt-12">
<h3 className="text-lg font-medium text-primary mb-3">We nudge you on your terms</h3>
<p className="text-sm leading-relaxed">Pick email, push, or calendar. Optional: track renewal steps when it's more than one trip to the counter.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto">
<div className="text-center mb-16 max-w-2xl mx-auto">
<h2 className="font-serif text-3xl md:text-4xl text-primary font-normal tracking-tight mb-4">Less mental load. Same paperwork.</h2>
<p className="text-sm md:text-base">IDs, insurance, household bills, contract dates: one place to see what's due before it costs you.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-fr">

<div className="bg-card border border-border p-6 rounded-xl md:col-span-2 flex flex-col justify-between group">
<div className="mb-6">
<iconify-icon className="text-2xl text-violet mb-4 block" icon="solar:scanner-linear"></iconify-icon>
<h3 className="text-lg font-medium text-primary mb-2">Scan, don't retype</h3>
<p className="text-sm leading-relaxed">Point the camera at a card or page. We read the dates and labels so you're not doing data entry at midnight.</p>
</div>

<div className="h-24 border border-border/50 rounded-lg bg-bg overflow-hidden relative flex items-center justify-center group-hover:border-violet/30 transition-colors">
<div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-violet/20 animate-pulse"></div>
<iconify-icon className="text-3xl text-border" icon="solar:document-text-linear"></iconify-icon>
</div>
</div>

<div className="bg-card border border-border p-6 rounded-xl flex flex-col justify-start">
<iconify-icon className="text-2xl text-primary mb-4 block" icon="solar:widget-3-linear"></iconify-icon>
<h3 className="text-lg font-medium text-primary mb-2">Dashboard Recap</h3>
<p className="text-sm leading-relaxed">A short recap on your dashboard (what's fine, coming up, overdue) without digging.</p>
</div>

<div className="bg-card border border-border p-6 rounded-xl flex flex-col justify-start">
<iconify-icon className="text-2xl text-primary mb-4 block" icon="solar:inbox-in-linear"></iconify-icon>
<h3 className="text-lg font-medium text-primary mb-2">The Drop</h3>
<p className="text-sm leading-relaxed">Forward supplier PDFs and emails to your private address. We stage, you confirm.</p>
</div>

<div className="bg-card border border-border p-6 rounded-xl flex flex-col justify-start">
<iconify-icon className="text-2xl text-primary mb-4 block" icon="solar:share-circle-linear"></iconify-icon>
<h3 className="text-lg font-medium text-primary mb-2">Share securely</h3>
<p className="text-sm leading-relaxed">Send a time-limited link. Add a password or watermark on images for extra care.</p>
</div>

<div className="bg-card border border-border p-6 rounded-xl md:col-span-2 lg:col-span-1 xl:col-span-2 flex flex-col justify-start">
<iconify-icon className="text-2xl text-primary mb-4 block" icon="solar:checklist-minimalistic-linear"></iconify-icon>
<h3 className="text-lg font-medium text-primary mb-2">Multi-step renewals</h3>
<p className="text-sm leading-relaxed">Passport-style workflows: appointments, forms, pickup. Lay them out, reorder, and tick through as you go.</p>
</div>

<div className="bg-card border border-border p-6 rounded-xl flex flex-col justify-start">
<iconify-icon className="text-2xl text-primary mb-4 block" icon="solar:calendar-date-linear"></iconify-icon>
<h3 className="text-lg font-medium text-primary mb-2">Calendar sync</h3>
<p className="text-sm leading-relaxed">Push dates to Google, Outlook, or Apple Calendar.</p>
</div>
</div>
</section>

<section className="py-32 px-6 border-y border-border bg-bg/50 relative overflow-hidden" id="pricing">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet/5 via-bg to-bg pointer-events-none"></div>
<div className="max-w-4xl mx-auto relative z-10 text-center mb-12">
<h2 className="font-serif text-3xl md:text-4xl text-primary font-normal tracking-tight mb-4">One plan. Try it free first.</h2>
<p className="text-sm">7 days free, no card to start.</p>
</div>
<div className="max-w-md mx-auto relative">

<div className="absolute -inset-[1px] bg-gradient-to-b from-violet to-border rounded-2xl opacity-50"></div>
<div className="bg-card rounded-2xl p-8 relative h-full flex flex-col">
<div className="mb-6 border-b border-border pb-6 text-center">
<h3 className="text-xl font-serif text-primary tracking-tight mb-2">PaperTrail Premium</h3>
<div className="flex items-baseline justify-center gap-1">
<span className="text-4xl font-sans font-medium text-primary">$3.99</span>
<span className="text-sm text-secondary">/month</span>
</div>
<p className="text-xs text-secondary mt-2">Or $40/year (2 months free)</p>
</div>
<ul className="space-y-4 text-sm flex-1 mb-8">
<li className="flex items-start gap-3"><iconify-icon className="text-emerald mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon> <span className="text-primary">Unlimited documents</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-emerald mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon> <span>Camera capture (skip the typing)</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-emerald mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon> <span>Reminders by email, push &amp; calendar</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-emerald mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon> <span>The Drop: forward bills &amp; PDFs</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-emerald mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon> <span>Secure links with password &amp; watermark</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-emerald mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon> <span>Multi-step renewal tracking</span></li>
</ul>
<a className="w-full block text-center bg-primary text-bg hover:bg-white px-4 py-3 rounded-md text-sm font-medium transition-colors" href="#waitlist">
                                Get on the list
                            </a>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-2xl mx-auto text-center" id="waitlist">
<div className="flex justify-center gap-2 mb-6 text-2xl text-border">
<iconify-icon icon="solar:passport-linear"></iconify-icon>
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
<iconify-icon icon="solar:card-2-linear"></iconify-icon>
</div>
<h2 className="font-serif text-3xl md:text-4xl text-primary font-normal tracking-tight mb-4">Your passport won't renew itself.</h2>
<p className="text-sm mb-10 leading-relaxed">Add the ID, the policy, or the bill you keep meaning to deal with. We'll nudge you while there's still time to act. <br/><br/> Closed beta for now. Leave your email — we'll nudge you when the trial opens. One email. No spam.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onsubmit="event.preventDefault();">
<input className="flex-1 bg-card border border-border text-primary placeholder-secondary focus:border-violet focus:ring-1 focus:ring-violet rounded-md px-4 py-3 text-sm outline-none transition-all" placeholder="Email address" required="" type="email"/>
<button className="bg-violet hover:bg-[#6D28D9] text-white px-6 py-3 rounded-md text-sm font-medium transition-colors sm:w-auto w-full shrink-0" type="submit">
                            Save my spot
                        </button>
</form>
</section>

<section className="py-24 px-6 max-w-3xl mx-auto border-t border-border">
<h2 className="font-serif text-2xl md:text-3xl text-primary font-normal tracking-tight mb-10">Questions? We have straight answers.</h2>
<div className="space-y-4">
<details className="group border-b border-border pb-4">
<summary className="cursor-pointer text-primary font-medium text-sm md:text-base flex justify-between items-center pr-2">
                                What is The Drop?
                                <iconify-icon className="chevron text-secondary" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="mt-4 text-sm text-secondary leading-relaxed pl-2 border-l-2 border-border">It's a private email address unique to your account. Forward any supplier email or PDF bill to it, and we'll automatically stage the document in your PaperTrail dashboard for you to confirm.</p>
</details>
<details className="group border-b border-border pb-4">
<summary className="cursor-pointer text-primary font-medium text-sm md:text-base flex justify-between items-center pr-2">
                                Can I use PaperTrail for household bills and supplier emails?
                                <iconify-icon className="chevron text-secondary" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="mt-4 text-sm text-secondary leading-relaxed pl-2 border-l-2 border-border">Absolutely. If it has a date—like an energy tariff ending, a broadband contract, or a yearly subscription—it belongs here.</p>
</details>
<details className="group border-b border-border pb-4">
<summary className="cursor-pointer text-primary font-medium text-sm md:text-base flex justify-between items-center pr-2">
                                Do you store my full card number?
                                <iconify-icon className="chevron text-secondary" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="mt-4 text-sm text-secondary leading-relaxed pl-2 border-l-2 border-border">No. We only extract and store the expiry date and a label (like "Visa ending in 4242") so you know which card is expiring. The full number is never saved.</p>
</details>
<details className="group border-b border-border pb-4">
<summary className="cursor-pointer text-primary font-medium text-sm md:text-base flex justify-between items-center pr-2">
                                What's included in the subscription?
                                <iconify-icon className="chevron text-secondary" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="mt-4 text-sm text-secondary leading-relaxed pl-2 border-l-2 border-border">Everything. Unlimited documents, camera capture, The Drop email forwarding, calendar sync, multi-step renewal tracking, and secure sharing links.</p>
</details>
</div>
</section>
</main>

<footer className="bg-card border-t border-border py-12 px-6 mt-12 relative z-10">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12 md:gap-8">
<div>
<a className="font-sans font-medium text-primary tracking-tighter text-lg uppercase flex items-center gap-2 mb-4" href="#">
<iconify-icon className="text-violet" icon="solar:documents-linear"></iconify-icon>
                            PAPERTRAIL
                        </a>
<p className="text-xs max-w-xs">Built for people who'd rather not think about paperwork twice.</p>
</div>
<div className="flex gap-12 sm:gap-24">
<div>
<h4 className="text-primary font-medium text-sm mb-4">Product</h4>
<ul className="space-y-2 text-xs">
<li><a className="hover:text-primary transition-colors" href="#features">Features</a></li>
<li><a className="hover:text-primary transition-colors" href="#pricing">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-primary font-medium text-sm mb-4">Legal</h4>
<ul className="space-y-2 text-xs">
<li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Cookie Policy</a></li>
</ul>
</div>
<div>
<h4 className="text-primary font-medium text-sm mb-4">Connect</h4>
<ul className="space-y-2 text-xs">
<li><a className="hover:text-primary transition-colors" href="#">Twitter / X</a></li>
</ul>
</div>
</div>
</div>
<div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-border/50 text-xs text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
<p>© 2026 PaperTrail.</p>
<div className="flex items-center gap-2 text-border">
<iconify-icon className="text-lg" icon="solar:shield-check-linear"></iconify-icon>
<span>Secure by design</span>
</div>
</div>
</footer>
</div>
</div>

    </>
  );
}
