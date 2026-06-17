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



  document.addEventListener('DOMContentLoaded', function () {
    if (window.lucide && typeof lucide.createIcons === 'function') {
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
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
      
<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(34,197,94,0)_0%,rgba(34,211,238,0.08)_30%,rgba(2,6,23,0)_70%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_10%_50%,rgba(34,211,238,0.08)_0%,rgba(2,6,23,0)_45%)]"></div>
</div>
<header className="sticky top-0 z-40">
<div className="mx-auto max-w-7xl px-6">
<div className="flex border rounded-2xl mt-4 mb-6 pt-3 pr-4 pb-3 pl-4 backdrop-blur-xl items-center justify-between bg-black/5 border-black/10">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-lg border ring-1 shadow-sm border-black/10 bg-black/10 ring-black/10">
<span className="text-sm font-semibold tracking-tight font-sans text-red-600">TC</span>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium leading-none tracking-tight font-sans text-stone-950">Total Capital Inc.</span>
<span className="text-xs font-sans text-stone-600">San Fernando Valley</span>
</div>
</div>
<nav className="hidden items-center gap-6 md:flex">
<a className="text-sm transition-colors font-sans text-stone-700 hover:text-stone-900" href="#problems">Problems</a>
<a className="text-sm transition-colors font-sans text-stone-700 hover:text-stone-900" href="#solutions">Solutions</a>
<a className="text-sm transition-colors font-sans text-stone-700 hover:text-stone-900" href="#benefits">Benefits</a>
<a className="text-sm transition-colors font-sans text-stone-700 hover:text-stone-900" href="#steps">Steps</a>
<a className="text-sm transition-colors font-sans text-stone-700 hover:text-stone-900" href="#reasons">Why Us</a>
<a className="text-sm transition-colors font-sans text-stone-700 hover:text-stone-900" href="#features">Features</a>
<a className="text-sm transition-colors font-sans text-stone-700 hover:text-stone-900" href="#faq">FAQ</a>
<a className="text-sm transition-colors font-sans text-stone-700 hover:text-stone-900" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-2">
<a className="hidden rounded-lg border px-3 py-2 text-sm backdrop-blur transition md:block font-sans border-black/10 bg-black/5 text-stone-800 hover:bg-black/10 hover:text-black hover:border-black/20" href="#list">
          List your property
        </a>
<a className="inline-flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-sm font-medium transition shadow ring-1 font-sans text-stone-100 hover:bg-red-600 ring-red-700/40" href="#contact">
          Get Matched Now
          <i className="h-4 w-4" data-lucide="rocket"></i>
</a>
</div>
</div>
</div>
</header>
<section className="relative">
<div className="mx-auto max-w-7xl px-6">
<div className="mx-auto mb-6 flex max-w-fit items-center gap-2 rounded-full border px-3 py-1.5 backdrop-blur border-black/10 bg-black/5">
<span className="inline-flex items-center rounded-full bg-red-500/20 px-2 py-0.5 text-[11px] font-medium ring-1 ring-inset font-sans text-red-700 ring-red-600/20">For renters &amp; businesses in the SF Valley</span>
<a className="inline-flex items-center gap-1 text-xs font-medium transition font-sans text-red-700 hover:text-red-800" href="#contact">
        Talk to a local specialist
        <i className="h-3.5 w-3.5" data-lucide="arrow-up-right"></i>
</a>
</div>
<div className="grid items-center gap-12 pb-8 pt-4 lg:grid-cols-12">
<div className="relative z-10 space-y-6 lg:col-span-7">
<h1 className="text-[40px] leading-[1.05] tracking-tight sm:text-[52px] md:text-[64px] lg:text-[72px] xl:text-[80px] font-bricolage font-semibold text-stone-950" style={{fontFamily: '\'Space Grotesk\', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, \'Helvetica Neue\', Arial', fontWeight: '600'}}>
          Your perfect Valley rental—found in days, not weeks.
        </h1>
<p className="max-w-2xl text-base font-sans text-stone-700">
          Lease directly with Total Capital Inc.—the owner, property manager, and broker of our portfolio. Transparent pricing, instant tours, and concierge support so you can move with confidence.
        </p>
<p className="max-w-2xl text-sm font-sans text-stone-600">
          Owned and professionally managed rentals across the San Fernando Valley—from homes to offices.
        </p>
<div className="flex flex-col gap-3 sm:flex-row">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-500 px-5 py-3 text-sm font-medium shadow ring-1 transition font-sans text-stone-100 ring-red-700/40 hover:bg-red-600" href="#contact">
            Get Matched Now
            <i className="h-[18px] w-[18px]" data-lucide="sparkles"></i>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl border px-5 py-3 text-sm font-medium backdrop-blur transition font-sans border-black/10 bg-black/5 text-stone-800 hover:bg-black/10 hover:text-black hover:border-black/20" href="#list">
            List your property
            <i className="h-[18px] w-[18px]" data-lucide="home"></i>
</a>
</div>
<div className="mt-6 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-3">
<div className="rounded-xl border p-3 backdrop-blur border-black/10 bg-black/5">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-orange-700" data-lucide="timer"></i>
<p className="text-xs font-sans text-stone-700">Average time to match</p>
</div>
<p className="mt-2 text-lg font-semibold tracking-tight font-sans text-stone-950">5 days</p>
</div>
<div className="rounded-xl border p-3 backdrop-blur border-black/10 bg-black/5">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-orange-700" data-lucide="badge-check"></i>
<p className="text-xs font-sans text-stone-700">Verified listings</p>
</div>
<p className="mt-2 text-lg font-semibold tracking-tight font-sans text-stone-950">1,200+</p>
</div>
<div className="rounded-xl border p-3 backdrop-blur border-black/10 bg-black/5">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-orange-700" data-lucide="smile"></i>
<p className="text-xs font-sans text-stone-700">Happy move‑ins</p>
</div>
<p className="mt-2 text-lg font-semibold tracking-tight font-sans text-stone-950">2,500+</p>
</div>
</div>
</div>
<div className="relative lg:col-span-5">
<div className="relative rounded-3xl border p-4 backdrop-blur-xl shadow-2xl border-black/10 bg-black/5">
<div className="rounded-2xl border bg-gradient-to-b p-4 border-black/10 from-black/10 to-black/5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-pink-600/80"></span>
<span className="text-xs font-sans text-stone-700">Availability Snapshot</span>
</div>
<span className="text-xs font-sans text-red-700">San Fernando Valley</span>
</div>
<div className="mt-4 grid grid-cols-3 gap-3">
<div className="rounded-xl border p-3 border-black/10 bg-black/5">
<div className="flex items-center justify-between">
<span className="text-[11px] font-sans text-stone-600">Neighborhoods</span>
<i className="h-4 w-4 text-orange-700" data-lucide="map"></i>
</div>
<p className="mt-2 text-xl font-semibold tracking-tight font-sans text-stone-950">17</p>
</div>
<div className="rounded-xl border p-3 border-black/10 bg-black/5">
<div className="flex items-center justify-between">
<span className="text-[11px] font-sans text-stone-600">Available Now</span>
<i className="h-4 w-4 text-orange-700" data-lucide="circle-dot"></i>
</div>
<p className="mt-2 text-xl font-semibold tracking-tight font-sans text-stone-950">356</p>
</div>
<div className="rounded-xl border p-3 border-black/10 bg-black/5">
<div className="flex items-center justify-between">
<span className="text-[11px] font-sans text-stone-600">Avg. Rent</span>
<i className="h-4 w-4 text-orange-700" data-lucide="banknote"></i>
</div>
<p className="mt-2 text-xl font-semibold tracking-tight font-sans text-stone-950">$2.4k</p>
</div>
</div>
<div className="mt-4 rounded-xl border p-3 border-black/10 bg-black/5">
<div className="flex items-center gap-2 text-xs font-sans text-stone-700">
<i className="h-4 w-4 text-orange-700" data-lucide="line-chart"></i>
                Demand this month
              </div>
<div className="mt-2 h-28 rounded-lg border bg-gradient-to-b border-black/10 from-black/10 to-black/0">
<div className="h-full w-full rounded-lg bg-[#b6afaf] bg-slate-50"></div>
</div>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-3">
<div className="rounded-xl border p-3 border-black/10 bg-black/5">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-orange-700" data-lucide="calendar-clock"></i>
<p className="text-xs font-sans text-stone-700">Same‑day tours</p>
</div>
<p className="mt-2 text-lg font-semibold tracking-tight font-sans text-stone-950">98% slots</p>
</div>
<div className="rounded-xl border p-3 border-black/10 bg-black/5">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-orange-700" data-lucide="shield-check"></i>
<p className="text-xs font-sans text-stone-700">Scam protection</p>
</div>
<p className="mt-2 text-lg font-semibold tracking-tight font-sans text-stone-950">Guaranteed</p>
</div>
</div>
</div>
</div>
</div>
<div className="mt-2 border-t pt-8 border-black/10">
<p className="text-center text-xs font-sans text-stone-600">Trusted by tenants, businesses, and partners across the Valley</p>
<div className="mt-4 grid grid-cols-2 items-center justify-center gap-6 sm:grid-cols-4 md:grid-cols-6">
<div className="mx-auto h-8 w-28 rounded-md border backdrop-blur flex items-center justify-center border-black/10 bg-black/5"><span className="text-[11px] tracking-tight font-sans text-stone-700">VALLEY PM</span></div>
<div className="mx-auto h-8 w-28 rounded-md border backdrop-blur flex items-center justify-center border-black/10 bg-black/5"><span className="text-[11px] tracking-tight font-sans text-stone-700">NORTHRIDGE</span></div>
<div className="mx-auto h-8 w-28 rounded-md border backdrop-blur flex items-center justify-center border-black/10 bg-black/5"><span className="text-[11px] tracking-tight font-sans text-stone-700">STUDIOCITY</span></div>
<div className="mx-auto h-8 w-28 rounded-md border backdrop-blur flex items-center justify-center border-black/10 bg-black/5"><span className="text-[11px] tracking-tight font-sans text-stone-700">RESEDA</span></div>
<div className="mx-auto h-8 w-28 rounded-md border backdrop-blur flex items-center justify-center border-black/10 bg-black/5"><span className="text-[11px] tracking-tight font-sans text-stone-700">ENCINO</span></div>
<div className="mx-auto h-8 w-28 rounded-md border backdrop-blur flex items-center justify-center border-black/10 bg-black/5"><span className="text-[11px] tracking-tight font-sans text-stone-700">SHERMAN O.</span></div>
</div>
</div>
</div>
</section>
<section className="relative py-16" id="problems">
<div className="mx-auto max-w-7xl px-6">
<div className="mx-auto max-w-3xl text-center">
<h2 className="text-[34px] sm:text-[40px] md:text-[48px] tracking-tight font-bricolage font-semibold text-stone-950" style={{fontFamily: '\'Space Grotesk\'', fontWeight: '600'}}>The real pain points businesses face when leasing space</h2>
<p className="mt-3 text-base font-sans text-stone-700">If any of these feel familiar, you’re not alone.</p>
</div>
<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
<div className="rounded-2xl border p-5 backdrop-blur border-black/10 bg-black/5">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-orange-700" data-lucide="lock"></i>
<p className="text-sm font-medium font-sans text-stone-800">Locked into costly commitments</p>
</div>
<p className="mt-2 text-sm font-sans text-stone-700">Long‑term lease commitments lock us in with heavy financial burdens, even when business slows or changes direction unexpectedly.</p>
</div>
<div className="rounded-2xl border p-5 backdrop-blur border-black/10 bg-black/5">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-orange-700" data-lucide="receipt"></i>
<p className="text-sm font-medium font-sans text-stone-800">Fees and rent hikes</p>
</div>
<p className="mt-2 text-sm font-sans text-stone-700">Unexpected fees and escalating rent prices make budgeting impossible and create constant anxiety.</p>
</div>
<div className="rounded-2xl border p-5 backdrop-blur border-black/10 bg-black/5">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-orange-700" data-lucide="phone-off"></i>
<p className="text-sm font-medium font-sans text-stone-800">Unresponsive management</p>
</div>
<p className="mt-2 text-sm font-sans text-stone-700">Landlords and property managers are unresponsive or dismissive to maintenance issues and tenant needs.</p>
</div>
<div className="rounded-2xl border p-5 backdrop-blur border-black/10 bg-black/5">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-orange-700" data-lucide="ruler"></i>
<p className="text-sm font-medium font-sans text-stone-800">Space mismatch</p>
</div>
<p className="mt-2 text-sm font-sans text-stone-700">Space doesn’t match our business needs—too small, poorly designed, or missing essentials like reliable internet or security.</p>
</div>
<div className="rounded-2xl border p-5 backdrop-blur border-black/10 bg-black/5">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-orange-700" data-lucide="file-warning"></i>
<p className="text-sm font-medium font-sans text-stone-800">Confusing, one‑sided contracts</p>
</div>
<p className="mt-2 text-sm font-sans text-stone-700">Complex and confusing lease contracts with terms favoring landlords make us feel like we signed away control of our business space.</p>
</div>
</div>
</div>
</section>
<section className="relative py-20" id="solutions">
<div className="mx-auto max-w-7xl px-6">
<div className="mx-auto max-w-3xl text-center">
<h2 className="text-[34px] sm:text-[40px] md:text-[48px] tracking-tight font-bricolage font-semibold text-stone-950" style={{fontFamily: '\'Space Grotesk\', ui-sans-serif', fontWeight: '600'}}>
        One place for every kind of Valley rental
      </h2>
<p className="mt-3 text-base font-sans text-stone-700">
        Residential and commercial spaces we own, manage, and broker—with local experts guiding every step.
      </p>
</div>
<div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
<div className="group rounded-2xl border p-6 backdrop-blur-xl transition border-black/10 bg-black/5 hover:border-black/20">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/15 ring-1 ring-red-600/20 text-red-700">
<i className="h-5 w-5" data-lucide="house"></i>
</div>
<h3 className="mt-4 text-lg tracking-tight font-sans text-stone-950" style={{fontFamily: '\'Space Grotesk\'', fontWeight: '600'}}>Homes &amp; Townhouses</h3>
<p className="mt-2 text-sm font-sans text-stone-700">Backyard, parking, and pet‑friendly filters built‑in.</p>
<ul className="mt-4 space-y-2 text-sm text-stone-700">
<li className="flex items-center gap-2 font-sans"><i className="h-4 w-4 text-orange-700" data-lucide="check"></i> Neighborhood guides</li>
<li className="flex items-center gap-2 font-sans"><i className="h-4 w-4 text-orange-700" data-lucide="check"></i> Tour bundles</li>
</ul>
</div>
<div className="group rounded-2xl border p-6 backdrop-blur-xl transition border-black/10 bg-black/5 hover:border-black/20">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/15 ring-1 ring-red-600/20 text-red-700">
<i className="h-5 w-5" data-lucide="building-2"></i>
</div>
<h3 className="mt-4 text-lg tracking-tight font-sans text-stone-950" style={{fontFamily: '\'Space Grotesk\'', fontWeight: '600'}}>Apartments &amp; Condos</h3>
<p className="mt-2 text-sm font-sans text-stone-700">Modern amenities, gated communities, and flexible lease terms.</p>
<ul className="mt-4 space-y-2 text-sm text-stone-700">
<li className="flex items-center gap-2 font-sans"><i className="h-4 w-4 text-orange-700" data-lucide="check"></i> Specials &amp; incentives</li>
<li className="flex items-center gap-2 font-sans"><i className="h-4 w-4 text-orange-700" data-lucide="check"></i> Virtual tours</li>
</ul>
</div>
<div className="group rounded-2xl border p-6 backdrop-blur-xl transition border-black/10 bg-black/5 hover:border-black/20">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/15 ring-1 ring-red-600/20 text-red-700">
<i className="h-5 w-5" data-lucide="briefcase"></i>
</div>
<h3 className="mt-4 text-lg tracking-tight font-sans text-stone-950" style={{fontFamily: '\'Space Grotesk\'', fontWeight: '600'}}>Office &amp; Retail</h3>
<p className="mt-2 text-sm font-sans text-stone-700">From studios to storefronts with traffic and zoning insights.</p>
<ul className="mt-4 space-y-2 text-sm text-stone-700">
<li className="flex items-center gap-2 font-sans"><i className="h-4 w-4 text-orange-700" data-lucide="check"></i> NNN clarity</li>
<li className="flex items-center gap-2 font-sans"><i className="h-4 w-4 text-orange-700" data-lucide="check"></i> Foot‑traffic data</li>
</ul>
</div>
<div className="group rounded-2xl border p-6 backdrop-blur-xl transition border-black/10 bg-black/5 hover:border-black/20">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/15 ring-1 ring-red-600/20 text-red-700">
<i className="h-5 w-5" data-lucide="shuffle"></i>
</div>
<h3 className="mt-4 text-lg tracking-tight font-sans text-stone-950" style={{fontFamily: '\'Space Grotesk\'', fontWeight: '600'}}>Short‑term</h3>
<p className="mt-2 text-sm font-sans text-stone-700">Monthly and furnished options ready when you are.</p>
<ul className="mt-4 space-y-2 text-sm text-stone-700">
<li className="flex items-center gap-2 font-sans"><i className="h-4 w-4 text-orange-700" data-lucide="check"></i> Furnished sets</li>
<li className="flex items-center gap-2 font-sans"><i className="h-4 w-4 text-orange-700" data-lucide="check"></i> No long commitments</li>
</ul>
</div>
</div>
</div>
</section>
<section className="relative pb-20" id="benefits">
<div className="mx-auto max-w-7xl px-6">
<div className="mx-auto max-w-3xl text-center">
<h2 className="text-[28px] sm:text-[36px] md:text-[44px] tracking-tight font-bricolage font-semibold text-stone-950" style={{fontFamily: '\'Space Grotesk\'', fontWeight: '600'}}>Your dream outcome</h2>
<p className="mt-2 text-base font-sans text-stone-700">What an ideal space and agreement look like for your business.</p>
</div>
<div className="mt-10 grid gap-6 md:grid-cols-3">
<div className="relative rounded-2xl border p-6 backdrop-blur-xl border-black/10 bg-black/5">
<div className="flex items-center justify-between">
<h3 className="text-lg tracking-tight font-sans text-stone-950" style={{fontFamily: '\'Space Grotesk\'', fontWeight: '600'}}>Flexible, scalable lease</h3>
<span className="rounded-full px-2 py-0.5 text-xs ring-1 font-sans bg-black/5 text-stone-700 ring-black/10">Grow without penalties</span>
</div>
<p className="mt-2 text-sm font-sans text-stone-700">Terms that move with your business, not against it.</p>
<ul className="mt-4 space-y-2 text-sm text-stone-700">
<li className="flex items-center gap-2 font-sans"><i className="h-4 w-4 text-orange-700" data-lucide="check"></i> Scale up or down without heavy fees</li>
<li className="flex items-center gap-2 font-sans"><i className="h-4 w-4 text-orange-700" data-lucide="check"></i> Clear exit options</li>
</ul>
<a className="mt-5 inline-flex w-full items-center justify-center rounded-xl border px-4 py-2.5 text-sm font-medium transition font-sans border-black/10 bg-black/5 text-stone-800 hover:bg-black/10 hover:text-black" href="#contact">Get Matched Now</a>
</div>
<div className="relative rounded-2xl border bg-red-500/10 p-6 backdrop-blur-xl ring-1 border-red-600/30 ring-red-600/20">
<div className="flex items-center justify-between">
<h3 className="text-lg tracking-tight font-sans text-stone-950" style={{fontFamily: '\'Space Grotesk\'', fontWeight: '600'}}>Professional, reliable space</h3>
<span className="rounded-full bg-red-500/20 px-2 py-0.5 text-xs ring-1 font-sans text-red-800 ring-red-600/30">Productivity‑ready</span>
</div>
<p className="mt-2 text-sm font-sans text-stone-700">Private offices that support focus and client‑facing work.</p>
<ul className="mt-4 space-y-2 text-sm text-stone-700">
<li className="flex items-center gap-2 font-sans"><i className="h-4 w-4 text-orange-700" data-lucide="check"></i> High‑speed internet, security, maintenance</li>
<li className="flex items-center gap-2 font-sans"><i className="h-4 w-4 text-orange-700" data-lucide="check"></i> Amenities that boost productivity</li>
</ul>
<a className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-red-500 px-4 py-2.5 text-sm font-medium transition font-sans text-stone-100 hover:bg-red-600" href="#contact">Get Matched Now</a>
</div>
<div className="relative rounded-2xl border p-6 backdrop-blur-xl border-black/10 bg-black/5">
<div className="flex items-center justify-between">
<h3 className="text-lg tracking-tight font-sans text-stone-950" style={{fontFamily: '\'Space Grotesk\'', fontWeight: '600'}}>Transparent and brand‑ready</h3>
<span className="rounded-full px-2 py-0.5 text-xs ring-1 font-sans bg-black/5 text-stone-700 ring-black/10">Confidence, end to end</span>
</div>
<p className="mt-2 text-sm font-sans text-stone-700">Straightforward terms and spaces you can make your own.</p>
<ul className="mt-4 space-y-2 text-sm text-stone-700">
<li className="flex items-center gap-2 font-sans"><i className="h-4 w-4 text-orange-700" data-lucide="check"></i> No hidden fees; responsive communication</li>
<li className="flex items-center gap-2 font-sans"><i className="h-4 w-4 text-orange-700" data-lucide="check"></i> Customization allowed; great locations clients notice</li>
</ul>
<a className="mt-5 inline-flex w-full items-center justify-center rounded-xl border px-4 py-2.5 text-sm font-medium transition font-sans border-black/10 bg-black/5 text-stone-800 hover:bg-black/10 hover:text-black" href="#contact">Get Matched Now</a>
</div>
</div>
</div>
</section>
<section className="relative pb-20">
<div className="mx-auto max-w-7xl px-6">
<div className="mx-auto max-w-3xl text-center">
<h2 className="text-[28px] sm:text-[36px] md:text-[44px] tracking-tight font-bricolage font-semibold text-stone-950" style={{fontFamily: '\'Space Grotesk\'', fontWeight: '600'}}>What Valley renters say</h2>
</div>
<div className="mt-8 grid gap-6 md:grid-cols-3">
<div className="rounded-2xl border p-6 backdrop-blur border-black/10 bg-black/5">
<p className="text-sm font-sans text-stone-700">Booked three tours the same day and signed by the weekend. Zero surprises on price. Best renting experience I’ve had.</p>
<div className="mt-4 flex items-center gap-3">
<img alt="Client" className="h-9 w-9 rounded-full object-cover ring-1 ring-black/10" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div>
<p className="text-sm font-medium font-sans text-stone-800">Amelia Gray</p>
<p className="text-xs font-sans text-stone-600">Sherman Oaks</p>
</div>
</div>
</div>
<div className="rounded-2xl border p-6 backdrop-blur border-black/10 bg-black/5">
<p className="text-sm font-sans text-stone-700">We needed a small retail space. They handled everything—zoning, showings, and the lease. Took 8 days start to finish.</p>
<div className="mt-4 flex items-center gap-3">
<img alt="Client" className="h-9 w-9 rounded-full object-cover ring-1 ring-black/10" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=160&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium font-sans text-stone-800">Marcus Lee</p>
<p className="text-xs font-sans text-stone-600">North Hollywood</p>
</div>
</div>
</div>
<div className="rounded-2xl border p-6 backdrop-blur border-black/10 bg-black/5">
<p className="text-sm font-sans text-stone-700">Loved the verified listings and one application for all. Saved time and stress during a busy move.</p>
<div className="mt-4 flex items-center gap-3">
<img alt="Client" className="h-9 w-9 rounded-full object-cover ring-1 ring-black/10" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div>
<p className="text-sm font-medium font-sans text-stone-800">Sophia Patel</p>
<p className="text-xs font-sans text-stone-600">Encino</p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="relative py-20" id="steps">
<div className="mx-auto max-w-7xl px-6">
<div className="mx-auto max-w-3xl text-center">
<h2 className="text-[28px] sm:text-[36px] md:text-[44px] tracking-tight font-bricolage font-semibold text-stone-950" style={{fontFamily: '\'Space Grotesk\'', fontWeight: '600'}}>3 simple steps</h2>
<p className="mt-2 text-base font-sans text-stone-700">From match to move‑in without the stress.</p>
</div>
<ol className="mx-auto mt-10 max-w-3xl space-y-6">
<li className="relative rounded-2xl border p-5 backdrop-blur border-black/10 bg-black/5">
<div className="flex items-start gap-4">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/15 ring-1 ring-red-600/20 text-red-700">
<i className="h-5 w-5" data-lucide="mouse-pointer-click"></i>
</div>
<div>
<h3 className="text-base tracking-tight font-sans text-stone-950" style={{fontFamily: '\'Space Grotesk\'', fontWeight: '600'}}>Step 1 — Get Matched Now</h3>
<p className="mt-1 text-sm font-sans text-stone-700">Tell us your must‑haves and budget. We’ll send curated options within hours.</p>
</div>
</div>
</li>
<li className="relative rounded-2xl border p-5 backdrop-blur border-black/10 bg-black/5">
<div className="flex items-start gap-4">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/15 ring-1 ring-red-600/20 text-red-700">
<i className="h-5 w-5" data-lucide="list-checks"></i>
</div>
<div>
<h3 className="text-base tracking-tight font-sans text-stone-950" style={{fontFamily: '\'Space Grotesk\'', fontWeight: '600'}}>Step 2 — Tour &amp; apply in one place</h3>
<p className="mt-1 text-sm font-sans text-stone-700">Book tours, compare costs, and submit one secure application to multiple properties.</p>
</div>
</div>
</li>
<li className="relative rounded-2xl border p-5 backdrop-blur border-black/10 bg-black/5">
<div className="flex items-start gap-4">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/15 ring-1 ring-red-600/20 text-red-700">
<i className="h-5 w-5" data-lucide="party-popper"></i>
</div>
<div>
<h3 className="text-base tracking-tight font-sans text-stone-950" style={{fontFamily: '\'Space Grotesk\'', fontWeight: '600'}}>Step 3 — Move in happy</h3>
<p className="mt-1 text-sm font-sans text-stone-700">We help finalize the lease and set up utilities so you can just bring the boxes.</p>
</div>
</div>
</li>
</ol>
</div>
</section>
<section className="relative pb-20" id="reasons">
<div className="mx-auto max-w-7xl px-6">
<div className="mx-auto max-w-3xl text-center">
<h2 className="text-[28px] sm:text-[36px] md:text-[44px] tracking-tight font-bricolage font-semibold text-stone-950" style={{fontFamily: '\'Space Grotesk\'', fontWeight: '600'}}>What you’ve tried that didn’t work</h2>
<p className="mt-2 text-base font-sans text-stone-700">Common paths that led to frustration—and why.</p>
</div>
<div className="mt-8 grid gap-4 md:grid-cols-2">
<div className="flex items-start gap-3 rounded-xl border p-4 border-black/10 bg-black/5"><i className="mt-0.5 h-5 w-5 text-orange-700" data-lucide="file-search"></i><p className="text-sm font-sans text-stone-700">Signing leases without professional legal review led to hidden clauses and unfair terms discovered too late.</p></div>
<div className="flex items-start gap-3 rounded-xl border p-4 border-black/10 bg-black/5"><i className="mt-0.5 h-5 w-5 text-orange-700" data-lucide="users"></i><p className="text-sm font-sans text-stone-700">Switching between shared coworking spaces for flexibility, but ending up in noisy, overcrowded environments.</p></div>
<div className="flex items-start gap-3 rounded-xl border p-4 border-black/10 bg-black/5"><i className="mt-0.5 h-5 w-5 text-orange-700" data-lucide="hand"></i><p className="text-sm font-sans text-stone-700">Attempting to negotiate directly with landlords felt one‑sided because they hold most of the power.</p></div>
<div className="flex items-start gap-3 rounded-xl border p-4 border-black/10 bg-black/5"><i className="mt-0.5 h-5 w-5 text-orange-700" data-lucide="wrench"></i><p className="text-sm font-sans text-stone-700">Trying to customize or renovate space but getting blocked by lease terms or lack of cooperation.</p></div>
<div className="flex items-start gap-3 rounded-xl border p-4 border-black/10 bg-black/5"><i className="mt-0.5 h-5 w-5 text-orange-700" data-lucide="search"></i><p className="text-sm font-sans text-stone-700">Relying on online listings alone without expert advice led to wasted time and missed opportunities.</p></div>
</div>
</div>
</section>
<section className="relative pb-20" id="features">
<div className="mx-auto max-w-7xl px-6">
<div className="mx-auto max-w-3xl text-center">
<h2 className="text-[28px] sm:text-[36px] md:text-[44px] tracking-tight font-bricolage font-semibold text-stone-950" style={{fontFamily: '\'Space Grotesk\'', fontWeight: '600'}}>Everything you need to rent smarter</h2>
<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
<div className="rounded-xl border p-4 border-black/10 bg-black/5"><div className="flex items-center gap-2"><i className="h-5 w-5 text-orange-700" data-lucide="sparkle"></i><p className="text-sm font-medium font-sans text-stone-800">Instant Match</p></div><p className="mt-1 text-xs font-sans text-stone-600">Personalized results in minutes.</p></div>
<div className="rounded-xl border p-4 border-black/10 bg-black/5"><div className="flex items-center gap-2"><i className="h-5 w-5 text-orange-700" data-lucide="video"></i><p className="text-sm font-medium font-sans text-stone-800">Virtual Tours</p></div><p className="mt-1 text-xs font-sans text-stone-600">HD walkthroughs before you book.</p></div>
<div className="rounded-xl border p-4 border-black/10 bg-black/5"><div className="flex items-center gap-2"><i className="h-5 w-5 text-orange-700" data-lucide="shield"></i><p className="text-sm font-medium font-sans text-stone-800">ID Verification</p></div><p className="mt-1 text-xs font-sans text-stone-600">Safer tours and applications.</p></div>
<div className="rounded-xl border p-4 border-black/10 bg-black/5"><div className="flex items-center gap-2"><i className="h-5 w-5 text-orange-700" data-lucide="file-text"></i><p className="text-sm font-medium font-sans text-stone-800">One App</p></div><p className="mt-1 text-xs font-sans text-stone-600">Apply once, reuse everywhere.</p></div>
<div className="rounded-xl border p-4 border-black/10 bg-black/5"><div className="flex items-center gap-2"><i className="h-5 w-5 text-orange-700" data-lucide="bell-ring"></i><p className="text-sm font-medium font-sans text-stone-800">Alerts</p></div><p className="mt-1 text-xs font-sans text-stone-600">Be first to know when matches appear.</p></div>
<div className="rounded-xl border p-4 border-black/10 bg-black/5"><div className="flex items-center gap-2"><i className="h-5 w-5 text-orange-700" data-lucide="ruler"></i><p className="text-sm font-medium font-sans text-stone-800">Fit Score</p></div><p className="mt-1 text-xs font-sans text-stone-600">Scored by your must‑haves.</p></div>
<div className="rounded-xl border p-4 border-black/10 bg-black/5"><div className="flex items-center gap-2"><i className="h-5 w-5 text-orange-700" data-lucide="receipt"></i><p className="text-sm font-medium font-sans text-stone-800">Transparent Pricing</p></div><p className="mt-1 text-xs font-sans text-stone-600">All fees visible up front.</p></div>
<div className="rounded-xl border p-4 border-black/10 bg-black/5"><div className="flex items-center gap-2"><i className="h-5 w-5 text-orange-700" data-lucide="git-branch"></i><p className="text-sm font-medium font-sans text-stone-800">Application Status</p></div><p className="mt-1 text-xs font-sans text-stone-600">Track progress in real time.</p></div>
<div className="rounded-xl border p-4 border-black/10 bg-black/5"><div className="flex items-center gap-2"><i className="h-5 w-5 text-orange-700" data-lucide="phone"></i><p className="text-sm font-medium font-sans text-stone-800">Text Support</p></div><p className="mt-1 text-xs font-sans text-stone-600">Talk to a person, fast.</p></div>
<div className="rounded-xl border p-4 border-black/10 bg-black/5"><div className="flex items-center gap-2"><i className="h-5 w-5 text-orange-700" data-lucide="plane"></i><p className="text-sm font-medium font-sans text-stone-800">Move‑in Concierge</p></div><p className="mt-1 text-xs font-sans text-stone-600">Utilities and parking setup.</p></div>
</div>
</div>
</div></section>
<section className="relative pb-20" id="faq">
<div className="mx-auto max-w-7xl px-6">
<div className="mx-auto max-w-3xl text-center">
<h2 className="text:[28px] sm:text-[36px] md:text-[44px] tracking-tight font-bricolage font-semibold text-stone-950" style={{fontFamily: '\'Space Grotesk\'', fontWeight: '600'}}>FAQs</h2>
<p className="mt-2 text-base font-sans text-stone-700">Quick answers before you tour.</p>
</div>
<div className="mx-auto mt-6 max-w-3xl space-y-3 text-sm text-stone-700">
<details className="rounded-lg border p-3 border-black/10 bg-black/5">
<summary className="cursor-pointer select-none font-sans text-stone-800">How fast can I see places?</summary>
<p className="mt-2 text-sm font-sans text-stone-700">Most tours are confirmed the same day. Request morning or evening slots—whatever works for you.</p>
</details>
<details className="rounded-lg border p-3 border-black/10 bg-black/5">
<summary className="cursor-pointer select-none font-sans text-stone-800">Do you charge renters any fees?</summary>
<p className="mt-2 text-sm font-sans text-stone-700">No. Our service is free for renters. You’ll only pay standard application fees set by properties.</p>
</details>
<details className="rounded-lg border p-3 border-black/10 bg-black/5">
<summary className="cursor-pointer select-none font-sans text-stone-800">Is my application reused?</summary>
<p className="mt-2 text-sm font-sans text-stone-700">Yes—submit once and reuse it across multiple properties securely with e‑sign support.</p>
</details>
<details className="rounded-lg border p-3 border-black/10 bg-black/5">
<summary className="cursor-pointer select-none font-sans text-stone-800">Can you help with offices and retail?</summary>
<p className="mt-2 text-sm font-sans text-stone-700">Absolutely. We handle commercial tours, NNN details, and negotiate terms with landlords.</p>
</details>
</div>
</div>
</section>
<section className="relative pb-16">
<div className="mx-auto max-w-7xl px-6">
<div className="rounded-3xl border p-8 backdrop-blur-xl border-black/10 bg-black/5">
<div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
<div>
<h3 className="text-[24px] tracking-tight font-bricolage font-semibold text-stone-950" style={{fontFamily: '\'Space Grotesk\'', fontWeight: '600'}}>Ready to find your place in the Valley?</h3>
<p className="mt-1 text-base font-sans text-stone-700">Get curated matches and book tours today—move in with confidence.</p>
</div>
<a className="inline-flex items-center gap-2 rounded-xl bg-red-500 px-5 py-3 text-sm font-medium transition shadow ring-1 font-sans text-stone-100 hover:bg-red-600 ring-red-700/40" href="#contact">
          Get Matched Now
          <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</section>
<section className="relative pb-24" id="contact">
<div className="mx-auto max-w-7xl px-6">
<div className="grid gap-8 lg:grid-cols-2">
<div className="rounded-3xl border p-8 backdrop-blur-xl border-black/10 bg-black/5">
<h3 className="text-[24px] tracking-tight font-bricolage font-semibold text-stone-950" style={{fontFamily: '\'Space Grotesk\'', fontWeight: '600'}}>Tell us what you’re looking for</h3>
<p className="mt-2 text-base font-sans text-stone-700">We’ll send tailored options within hours.</p>
<form className="mt-6 space-y-4">
<div className="grid gap-4 sm:grid-cols-2">
<div className="space-y-2">
<label className="text-xs font-sans text-stone-700">Full name</label>
<input className="w-full rounded-xl border px-3 py-2.5 text-sm placeholder:text-stone-500 outline-none ring-0 focus:border-white/20 focus:outline-none border-black/10 bg-black/5 text-stone-900" placeholder="Jane Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-sans text-stone-700">Email</label>
<input className="w-full rounded-xl border px-3 py-2.5 text-sm placeholder:text-stone-500 outline-none ring-0 focus:border-white/20 focus:outline-none border-black/10 bg-black/5 text-stone-900" placeholder="you@email.com" type="email"/>
</div>
</div>
<div className="grid gap-4 sm:grid-cols-2">
<div className="space-y-2">
<label className="text-xs font-sans text-stone-700">Property type</label>
<select className="w-full appearance-none rounded-xl border px-3 py-2.5 text-sm outline-none focus:border-white/20 border-black/10 bg-black/5 text-stone-900">
<option className="font-sans bg-stone-100">Home</option>
<option className="font-sans bg-stone-100">Apartment</option>
<option className="font-sans bg-stone-100">Office</option>
<option className="font-sans bg-stone-100">Retail</option>
<option className="font-sans bg-stone-100">Studio</option>
</select>
</div>
<div className="space-y-2">
<label className="text-xs text-stone-3 00 font-sans">Monthly budget</label>
<select className="w-full appearance-none rounded-xl border px-3 py-2.5 text-sm outline-none focus:border-white/20 border-black/10 bg-black/5 text-stone-900">
<option className="font-sans bg-stone-100">Under $2,000</option>
<option className="font-sans bg-stone-100">$2,000–$3,000</option>
<option className="font-sans bg-stone-100">$3,000–$5,000</option>
<option className="font-sans bg-stone-100">$5,000+</option>
</select>
</div>
</div>
<div className="grid gap-4 sm:grid-cols-2">
<div className="space-y-2">
<label className="text-xs font-sans text-stone-700">Move‑in date</label>
<input className="w-full rounded-xl border px-3 py-2.5 text-sm placeholder:text-stone-500 outline-none ring-0 focus:border-white/20 focus:outline-none border-black/10 bg-black/5 text-stone-900" type="date"/>
</div>
<div className="space-y-2">
<label className="text-xs font-sans text-stone-700">Neighborhood(s)</label>
<input className="w-full rounded-xl border px-3 py-2.5 text-sm placeholder:text-stone-500 outline-none ring-0 focus:border-white/20 focus:outline-none border-black/10 bg-black/5 text-stone-900" placeholder="Sherman Oaks, Northridge…" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-sans text-stone-700">Must‑haves</label>
<textarea className="w-full rounded-xl border px-3 py-2.5 text-sm placeholder:text-stone-500 outline-none focus:border-white/20 border-black/10 bg-black/5 text-stone-900" placeholder="Beds/baths, pets, parking, size, amenities…" rows="4"></textarea>
</div>
<label className="flex items-center gap-3">
<input className="peer sr-only" type="checkbox"/>
<span className="inline-flex h-5 w-5 items-center justify-center rounded-md border ring-1 transition peer-checked:bg-red-500 peer-checked:ring-red-400/40 border-black/15 bg-black/5 ring-black/10">
<svg className="h-3.5 w-3.5 opacity-0 transition peer-checked:opacity-100 text-black" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5"></path></svg>
</span>
<span className="text-xs font-sans text-stone-700">I agree to be contacted about my matches.</span>
</label>
<div className="flex items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-xl bg-red-500 px-5 py-2.5 text-sm font-medium transition shadow ring-1 font-sans text-stone-100 hover:bg-red-600 ring-red-700/40" type="submit">
              Get Matched Now
              <i className="h-[18px] w-[18px]" data-lucide="rocket"></i>
</button>
<a className="inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm transition font-sans border-black/10 bg-black/5 text-stone-800 hover:bg-black/10" href="mailto:hello@sfvrentals.com">
              Email us
              <i className="h-4 w-4" data-lucide="mail"></i>
</a>
</div>
</form>
</div>
<div className="flex flex-col gap-6">
<div className="rounded-2xl border p-6 backdrop-blur border-black/10 bg-black/5">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-500/15 ring-1 ring-red-600/20 text-red-700">
<i className="h-5 w-5" data-lucide="gift"></i>
</div>
<div>
<p className="text-sm font-medium font-sans text-stone-800">What you’ll get</p>
<p className="text-xs font-sans text-stone-600">Tailored options within hours</p>
</div>
</div>
<ul className="mt-4 grid gap-2 text-sm sm:grid-cols-2 text-stone-700">
<li className="flex items-center gap-2 font-sans"><i className="h-4 w-4 text-orange-700" data-lucide="check"></i> Curated matches</li>
<li className="flex items-center gap-2 font-sans"><i className="h-4 w-4 text-orange-700" data-lucide="check"></i> Same‑day tours</li>
<li className="flex items-center gap-2 font-sans"><i className="h-4 w-4 text-orange-700" data-lucide="check"></i> Transparent costs</li>
<li className="flex items-center gap-2 font-sans"><i className="h-4 w-4 text-orange-700" data-lucide="check"></i> Lease support</li>
</ul>
</div>
<div className="rounded-2xl border p-6 backdrop-blur border-black/10 bg-black/5">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-500/15 ring-1 ring-red-600/20 text-red-700">
<i className="h-5 w-5" data-lucide="help-circle"></i>
</div>
<div>
<p className="text-sm font-medium font-sans text-stone-800">More questions?</p>
<p className="text-xs font-sans text-stone-600">We’re here to help</p>
</div>
</div>
<div className="mt-4 space-y-3 text-sm text-stone-700">
<details className="rounded-lg border p-3 border-black/10 bg-black/5">
<summary className="cursor-pointer select-none font-sans text-stone-800">Who owns and manages the properties?</summary>
<p className="mt-2 text-sm font-sans text-stone-700">Total Capital Inc. owns, manages, and brokers all properties in our portfolio. You’re leasing directly with us.</p>
</details>
<details className="rounded-lg border p-3 border-black/10 bg-black/5">
<summary className="cursor-pointer select-none font-sans text-stone-800">Do you handle credit checks?</summary>
<p className="mt-2 text-sm font-sans text-stone-700">We provide secure screening with your consent and share results with properties you choose.</p>
</details>
</div>
</div>
</div>
</div>
</div>
</section>
<footer className="border-t py-10 border-black/10">
<div className="mx-auto max-w-7xl px-6">
<div className="grid items-start gap-8 md:grid-cols-4">
<div className="space-y-3">
<div className="flex items-center gap-2">
<div className="flex h-9 w-9 items-center justify-center rounded-lg border ring-1 border-black/10 bg-black/10 ring-black/10">
<span className="text-sm font-semibold tracking-tight font-sans text-red-600">TC</span>
</div>
<span className="text-sm font-sans text-stone-800">Total Capital Inc.</span>
</div>
<p className="text-sm font-sans text-stone-600">Homes, apartments, and offices across the San Fernando Valley—owned, managed, and brokered in‑house.</p>
</div>
<div>
<p className="text-xs font-medium font-sans text-stone-700">Explore</p>
<ul className="mt-3 space-y-2 text-sm text-stone-700">
<li><a className="transition-colors font-sans hover:text-stone-900" href="#solutions">Solutions</a></li>
<li><a className="transition-colors font-sans hover:text-stone-900" href="#benefits">Benefits</a></li>
<li><a className="transition-colors font-sans hover:text-stone-900" href="#steps">Steps</a></li>
<li><a className="transition-colors font-sans hover:text-stone-900" href="#features">Features</a></li>
</ul>
</div>
<div>
<p className="text-xs font-medium font-sans text-stone-700">Help</p>
<ul className="mt-3 space-y-2 text-sm text-stone-700">
<li><a className="transition-colors font-sans hover:text-stone-900" href="#faq">FAQs</a></li>
<li><a className="transition-colors font-sans hover:text-stone-900" href="#contact">Contact</a></li>
<li><a className="transition-colors font-sans hover:text-stone-900" href="#list">List property</a></li>
</ul>
</div>
<div>
<p className="text-xs font-medium font-sans text-stone-700">Legal</p>
<ul className="mt-3 space-y-2 text-sm text-stone-700">
<li><a className="transition-colors font-sans hover:text-stone-900" href="#">Terms</a></li>
<li><a className="transition-colors font-sans hover:text-stone-900" href="#">Privacy</a></li>
</ul>
</div>
</div>
<div className="mt-8 border-t pt-4 border-black/10">
<p className="text-xs font-sans text-stone-600">© 2025 Total Capital Inc. All rights reserved.</p>
</div>
</div>
</footer>


    </>
  );
}
