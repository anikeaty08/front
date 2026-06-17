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
      
<div className="relative min-h-screen overflow-hidden bg-neutral-950">
<div className="absolute inset-0">
<img alt="Bioluminescent Night Jungle Path" className="h-full w-full object-cover opacity-45" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/50ef44de-e32e-4999-8e2b-c53896e99072_1600w.jpg"/>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.22),transparent_28%),radial-gradient(circle_at_20%_30%,rgba(34,211,238,0.14),transparent_22%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.12),transparent_22%),linear-gradient(to_bottom,rgba(2,6,23,0.5),rgba(2,6,23,0.92))]"></div>
<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(34,197,94,0.06),transparent,rgba(6,182,212,0.06))]"></div>
<div className="absolute inset-0 opacity-30" style={{backgroundImage: 'radial-gradient(rgba(163,230,53,0.14)_0.06rem, transparent_0.06rem)', backgroundSize: '1.5rem 1.5rem'}}></div>
</div>
<header className="relative z-10">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
<a className="flex items-center gap-3" href="#">
<div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-lime-300/20 bg-emerald-400/10 backdrop-blur" style={{boxShadow: '0 0 2rem rgba(163,230,53,0.12)'}}>
<iconify-icon className="text-lime-300" height="20" icon="solar:leaf-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-base font-medium text-white">DocCroc</div>
<div className="text-xs font-normal uppercase tracking-[0.2em] text-emerald-100/45">Tumwater, WA</div>
</div>
</a>
<nav className="hidden items-center gap-8 md:flex">
<a className="text-sm font-medium text-white/70 transition hover:text-lime-200" href="#about">About</a>
<a className="text-sm font-medium text-white/70 transition hover:text-lime-200" href="#products">Products</a>
<a className="text-sm font-medium text-white/70 transition hover:text-lime-200" href="#credibility">Certifications</a>
<a className="text-sm font-medium text-white/70 transition hover:text-lime-200" href="#contact">Retail Inquiry</a>
</nav>
<a className="inline-flex items-center gap-2 rounded-full border border-lime-300/30 bg-lime-300/15 px-4 py-2 text-sm font-medium text-lime-100 backdrop-blur transition hover:bg-lime-300/20" href="#contact" style={{boxShadow: '0 0 2rem rgba(163,230,53,0.12)'}}>
<span>Contact sales</span>
<iconify-icon height="16" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
</header>
<main className="relative z-10">
<section className="lg:px-8 lg:pb-20 lg:pt-16 max-w-7xl mr-auto ml-auto pt-10 pr-6 pb-14 pl-6">
<div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] gap-x-12 gap-y-12 items-end">
<div className="max-w-3xl">
<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-lime-300/15 bg-emerald-400/10 px-3 py-2 backdrop-blur" style={{boxShadow: '0 0 1.5rem rgba(34,197,94,0.1)'}}>
<span className="h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_1rem_rgba(163,230,53,0.9)]"></span>
<span className="text-xs font-medium uppercase tracking-[0.22em] text-emerald-50/70">Established Washington producer since I-502</span>
</div>
<h1 className="leading-none sm:text-6xl lg:text-7xl text-5xl font-medium text-white tracking-tight max-w-4xl" style={{fontFamily: '\'Cormorant Garamond\', serif', textShadow: '0 0 2rem rgba(74,222,128,0.18)'}}>
              Trusted cannabis supply, refined for modern retail.
            </h1>
<p className="mt-6 max-w-2xl text-lg font-normal leading-8 text-emerald-50/70">
              DocCroc is a long-standing Washington cannabis brand serving licensed retailers with dependable product quality, transparent testing, and a focused wholesale catalog built around proven demand.
            </p>
<div className="mt-8 flex flex-col gap-4 sm:flex-row">
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-lime-300 px-5 py-3 text-sm font-medium text-neutral-950 transition hover:bg-lime-200" href="#products" style={{boxShadow: '0 0 2rem rgba(163,230,53,0.2)'}}>
                View product catalog
                <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-cyan-400/15" href="#contact" style={{boxShadow: '0 0 2rem rgba(34,211,238,0.08)'}}>
                Retailer inquiry
                <iconify-icon height="16" icon="solar:letter-linear" width="16"></iconify-icon>
</a>
</div>
<div className="mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
<div className="rounded-2xl border border-lime-300/10 bg-emerald-400/10 p-4 backdrop-blur" style={{boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.02), 0 0 2rem rgba(34,197,94,0.06)'}}>
<div className="text-2xl font-medium tracking-tight text-white">25~</div>
<div className="mt-1 text-sm text-emerald-50/55">Active SKUs</div>
</div>
<div className="rounded-2xl border border-lime-300/10 bg-emerald-400/10 p-4 backdrop-blur" style={{boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.02), 0 0 2rem rgba(34,197,94,0.06)'}}>
<div className="text-2xl font-medium tracking-tight text-white">LCB</div>
<div className="mt-1 text-sm text-emerald-50/55">Certified producer</div>
</div>
<div className="rounded-2xl border border-cyan-300/10 bg-cyan-400/10 p-4 backdrop-blur" style={{boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.02), 0 0 2rem rgba(34,211,238,0.06)'}}>
<div className="text-2xl font-medium tracking-tight text-white">Monthly</div>
<div className="mt-1 text-sm text-emerald-50/55">Third-party testing</div>
</div>
<div className="rounded-2xl border border-fuchsia-300/10 bg-fuchsia-400/10 p-4 backdrop-blur" style={{boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.02), 0 0 2rem rgba(217,70,239,0.06)'}}>
<div className="text-2xl font-medium text-white tracking-tight">$1k</div>
<div className="mt-1 text-sm text-emerald-50/55">Minimum delivery threshold</div>
</div>
</div>
</div>
<div className="relative">
</div>
</div>
</section>
<section className="border-y border-emerald-200/10 bg-white/[0.03] backdrop-blur">
<div className="mx-auto grid max-w-7xl gap-6 px-6 py-5 text-sm text-emerald-50/60 lg:grid-cols-3 lg:px-8">
<div className="flex items-center gap-3">
<iconify-icon className="text-lime-300" height="16" icon="solar:delivery-linear" width="16"></iconify-icon>
<span className="">$1,000 minimum order for standard delivery</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-amber-300" height="16" icon="solar:danger-circle-linear" width="16"></iconify-icon>
<span className="">Orders below $1,000 include a $75 delivery fee</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-cyan-300" height="16" icon="solar:shop-linear" width="16"></iconify-icon>
<span>Available exclusively to licensed retailers</span>
</div>
</div>
</section>
<section className="mx-auto max-w-7xl px-6 py-20 lg:px-8" id="about">
<div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
<div className="">
<div className="text-xs font-medium uppercase tracking-[0.24em] text-lime-300">About DocCroc</div>
<h2 className="mt-4 text-4xl font-medium tracking-tight text-white sm:text-5xl" style={{fontFamily: '\'Cormorant Garamond\', serif', textShadow: '0 0 2rem rgba(34,197,94,0.12)'}}>
              Built for retailer confidence, not direct-to-consumer hype.
            </h2>
</div>
<div className="space-y-6">
<p className="text-lg leading-8 text-emerald-50/70">
              Based in Tumwater, Washington, DocCroc has been operating since the early days of legal cannabis in the state. The brand has built its reputation as a reliable wholesale partner with a straightforward catalog, transparent safety standards, and consistent communication with buyers.
            </p>
<p className="text-lg leading-8 text-emerald-50/70">
              Retailers receive a monthly menu and order form based on current strain and trim availability. That flexible supply model keeps the lineup fresh while maintaining strong category anchors across concentrates, flower, and infused formats.
            </p>
</div>
</div>
</section>
<section className="relative" id="products">
<div className="absolute inset-0">
<img alt="Bioluminescent Jungle Flora Illustration" className="h-full w-full object-cover opacity-25" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/868d39ee-6390-470b-931a-f94387ef1c2d_1600w.jpg"/>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.14),transparent_25%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.1),transparent_24%),linear-gradient(to_bottom,rgba(2,6,23,0.7),rgba(2,6,23,0.92))]"></div>
</div>
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pt-20 pr-6 pb-20 pl-6 relative">
<div className="max-w-3xl">
<div className="text-xs font-medium uppercase tracking-[0.24em] text-emerald-300">Product catalog</div>
<h2 className="mt-4 text-4xl font-medium tracking-tight text-white sm:text-5xl" style={{fontFamily: '\'Cormorant Garamond\', serif', textShadow: '0 0 2rem rgba(34,197,94,0.12)'}}>
              Core lines designed to move on shelves.
            </h2>
<p className="mt-5 text-lg leading-8 text-emerald-50/70">
              The live catalog typically includes around 25 SKUs, adjusted monthly. Below is the primary product structure the site can showcase for retail partners.
            </p>
</div>
<div className="mt-12 grid gap-6 lg:grid-cols-4">
<div className="group overflow-hidden bg-gradient-to-b from-emerald-300/10 to-white/[0.03] border-lime-300/10 border rounded-[1.75rem] shadow-2xl backdrop-blur" style={{boxShadow: '0 0 3rem rgba(34,197,94,0.06)'}}>
<div className="p-5">
<div className="flex items-center justify-between">
<span className="text-xs uppercase tracking-[0.24em] text-emerald-50/35">01</span>
<div className="rounded-full border border-lime-300/30 bg-lime-300/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-lime-200">Flagship</div>
</div>
<h3 className="mt-6 text-3xl font-semibold tracking-tight text-white">Shatter</h3>
<p className="mt-3 text-sm leading-7 text-emerald-50/65">DocCroc’s lead product line and primary revenue driver for wholesale accounts.</p>
</div>
<div className="px-5">
<div className="overflow-hidden rounded-[1.5rem] bg-neutral-900">
<img alt="Shatter product" className="transition duration-500 group-hover:scale-105 w-full h-72 object-cover" src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>
<div className="mt-5 grid grid-cols-3 gap-px bg-white/10">
</div>
</div>
<div className="group overflow-hidden rounded-[1.75rem] border border-cyan-300/10 bg-gradient-to-b from-cyan-300/10 to-white/[0.03] shadow-2xl backdrop-blur" style={{boxShadow: '0 0 3rem rgba(34,211,238,0.06)'}}>
<div className="p-5">
<div className="flex items-center justify-between">
<span className="text-xs uppercase tracking-[0.24em] text-emerald-50/35">02</span>
<div className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-cyan-200">Applicator</div>
</div>
<h3 className="mt-6 text-3xl font-semibold tracking-tight text-white">RSO</h3>
<p className="mt-3 text-sm leading-7 text-emerald-50/65">Rick Simpson Oil packaged in syringe-style applicators without a needle.</p>
</div>
<div className="px-5">
<div className="overflow-hidden rounded-[1.5rem] bg-neutral-900">
<img alt="RSO product" className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
<div className="mt-5 grid grid-cols-3 gap-px bg-white/10">
</div>
</div>
<div className="group overflow-hidden bg-gradient-to-b from-amber-300/10 to-white/[0.03] border-amber-300/10 border rounded-[1.75rem] shadow-2xl backdrop-blur" style={{boxShadow: '0 0 3rem rgba(251,191,36,0.05)'}}>
<div className="p-5">
<div className="flex items-center justify-between">
<span className="text-xs uppercase tracking-[0.24em] text-emerald-50/35">03</span>
<div className="rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-amber-200">Shelf staple</div>
</div>
<h3 className="mt-6 text-3xl font-semibold tracking-tight text-white">Kief</h3>
<p className="mt-3 text-sm leading-7 text-emerald-50/65">Fine jarred powder product positioned for customers seeking potency and versatility.</p>
</div>
<div className="px-5">
<div className="overflow-hidden rounded-[1.5rem] bg-neutral-900">
<img alt="Kief product" className="transition duration-500 group-hover:scale-105 w-full h-72 object-cover" src="https://images.unsplash.com/photo-1516222338250-863216ce01ea?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>
<div className="grid grid-cols-3 gap-px bg-white/10 mt-5 gap-x-px gap-y-px">
</div>
</div>
<div className="group overflow-hidden bg-gradient-to-b from-fuchsia-300/10 to-white/[0.03] border-fuchsia-300/10 border rounded-[1.75rem] shadow-2xl backdrop-blur" style={{boxShadow: '0 0 3rem rgba(217,70,239,0.06)'}}>
<div className="p-5">
<div className="flex items-center justify-between">
<span className="text-xs uppercase tracking-[0.24em] text-emerald-50/35">04</span>
<div className="rounded-full border border-fuchsia-400/30 bg-fuchsia-400/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-fuchsia-200">Rotating mix</div>
</div>
<h3 className="text-3xl font-semibold text-white tracking-tight mt-6">Flower + Pre-rolls</h3>
<p className="leading-7 text-sm text-emerald-50/65 mt-3">Strain-varying flower and gram-format pre-rolls updated based on monthly availability.</p>
</div>
<div className="pr-5 pl-5">
<div className="overflow-hidden rounded-[1.5rem] bg-neutral-900">
<img alt="Bioluminescent Jungle Flora Illustration" className="transition duration-500 group-hover:scale-105 w-full h-72 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/868d39ee-6390-470b-931a-f94387ef1c2d_800w.jpg"/>
</div>
</div>
<div className="mt-5 grid grid-cols-3 gap-px bg-white/10">
</div>
</div>
</div>
<div className="mt-8 rounded-[2rem] border border-emerald-200/10 bg-white/[0.04] p-6 backdrop-blur" style={{boxShadow: '0 0 3rem rgba(34,197,94,0.05)'}}>
<div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
<div className="">
<div className="text-sm font-medium text-white">Catalog operations</div>
<p className="mt-2 text-base leading-7 text-emerald-50/65">
                  Retail buyers receive a recurring order menu by email. This site functions as a polished brand and catalog reference point rather than a direct purchasing portal.
                </p>
</div>
<div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
<iconify-icon className="text-emerald-300" height="20" icon="solar:document-text-linear" width="20"></iconify-icon>
<div>
<div className="text-sm font-medium text-white">Monthly menu flow</div>
<div className="text-xs text-emerald-50/45">Excel order sheet supported</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="mx-auto max-w-7xl px-6 py-20 lg:px-8" id="credibility">
<div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
<div>
<div className="text-xs font-medium uppercase tracking-[0.24em] text-lime-300">Certifications &amp; awards</div>
<h2 className="mt-4 text-4xl font-medium tracking-tight text-white sm:text-5xl" style={{fontFamily: '\'Cormorant Garamond\', serif', textShadow: '0 0 2rem rgba(34,197,94,0.12)'}}>
              Proof points that matter to wholesale buyers.
            </h2>
<p className="mt-5 text-lg leading-8 text-emerald-50/70">
              Instead of listing store accounts publicly, the brand story is reinforced through compliance, clean testing, and earned recognition.
            </p>
</div>
<div className="grid gap-5 sm:grid-cols-2">
<div className="rounded-[1.75rem] border border-lime-300/10 bg-white/[0.04] p-6" style={{boxShadow: '0 0 2rem rgba(163,230,53,0.05)'}}>
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-400/10 text-lime-300">
<iconify-icon height="24" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="mt-5 text-xl font-medium tracking-tight text-white">LCB Certified</h3>
<p className="mt-3 text-base leading-7 text-emerald-50/65">Certified by the Washington State Liquor and Cannabis Board.</p>
</div>
<div className="rounded-[1.75rem] border border-emerald-300/10 bg-white/[0.04] p-6" style={{boxShadow: '0 0 2rem rgba(34,197,94,0.05)'}}>
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300">
<iconify-icon height="24" icon="solar:test-tube-linear" width="24"></iconify-icon>
</div>
<h3 className="mt-5 text-xl font-medium tracking-tight text-white">Pesticide-Free</h3>
<p className="mt-3 text-base leading-7 text-emerald-50/65">Verified through recurring third-party testing for safety and potency.</p>
</div>
<div className="rounded-[1.75rem] border border-cyan-300/10 bg-white/[0.04] p-6" style={{boxShadow: '0 0 2rem rgba(34,211,238,0.05)'}}>
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
<iconify-icon height="24" icon="solar:scanner-linear" width="24"></iconify-icon>
</div>
<h3 className="mt-5 text-xl font-medium tracking-tight text-white">Label Accuracy</h3>
<p className="mt-3 text-base leading-7 text-emerald-50/65">Testing reflects THC content accurately as labeled across product lines.</p>
</div>
<div className="rounded-[1.75rem] border border-amber-300/10 bg-white/[0.04] p-6" style={{boxShadow: '0 0 2rem rgba(251,191,36,0.05)'}}>
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-300">
<iconify-icon height="24" icon="solar:cup-star-linear" width="24"></iconify-icon>
</div>
<h3 className="mt-5 text-xl font-medium tracking-tight text-white">Award Recognition</h3>
<p className="mt-3 text-base leading-7 text-emerald-50/65">Including first place at the Highway 420 Cannabis Cup and a Cannabis Forward award.</p>
</div>
</div>
</div>
</section>
<section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8" id="contact">
<div className="overflow-hidden rounded-[2rem] border border-emerald-200/10 bg-white/[0.04] shadow-2xl backdrop-blur" style={{boxShadow: '0 0 3rem rgba(34,197,94,0.06)'}}>
<div className="grid lg:grid-cols-[0.9fr_1.1fr]">
<div className="border-b border-white/10 p-8 lg:border-b-0 lg:border-r lg:p-10">
<div className="text-xs font-medium uppercase tracking-[0.24em] text-lime-300">Retail inquiry</div>
<h2 className="mt-4 text-4xl font-medium tracking-tight text-white sm:text-5xl" style={{fontFamily: '\'Cormorant Garamond\', serif', textShadow: '0 0 2rem rgba(34,197,94,0.12)'}}>
                Open a conversation with DocCroc.
              </h2>
<p className="mt-5 text-lg leading-8 text-emerald-50/70">
                For licensed retailers interested in current availability, order planning, or wholesale onboarding.
              </p>
<div className="mt-8 space-y-4">
<div className="flex items-start gap-3 rounded-2xl border border-lime-300/10 bg-black/20 p-4">
<iconify-icon className="mt-0.5 text-lime-300" height="20" icon="solar:letter-linear" width="20"></iconify-icon>
<div>
<div className="text-sm font-medium text-white">Direct inbox</div>
<div className="mt-1 text-sm text-emerald-50/55">Connor.doccroc@gmail.com</div>
</div>
</div>
<div className="flex items-start gap-3 rounded-2xl border border-cyan-300/10 bg-black/20 p-4">
<iconify-icon className="mt-0.5 text-cyan-300" height="20" icon="solar:map-point-linear" width="20"></iconify-icon>
<div>
<div className="text-sm font-medium text-white">Based in</div>
<div className="mt-1 text-sm text-emerald-50/55">Tumwater, Washington</div>
</div>
</div>
<div className="flex items-start gap-3 rounded-2xl border border-amber-300/10 bg-black/20 p-4">
<iconify-icon className="mt-0.5 text-amber-300" height="20" icon="solar:delivery-linear" width="20"></iconify-icon>
<div>
<div className="text-sm font-medium text-white">Delivery policy</div>
<div className="mt-1 text-sm text-emerald-50/55">$1,000 minimum. Orders below that include a $75 delivery fee.</div>
</div>
</div>
</div>
</div>
<div className="p-8 lg:p-10">
<form action="mailto:Connor.doccroc@gmail.com" className="space-y-5" enctype="text/plain" method="post">
<div className="grid gap-5 sm:grid-cols-2">
<div>
<label className="mb-2 block text-sm font-medium text-white/80">First name</label>
<input className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-base text-white placeholder:text-white/25 outline-none transition focus:border-lime-400/50 focus:bg-black/30" name="First Name" placeholder="Connor" type="text"/>
</div>
<div>
<label className="mb-2 block text-sm font-medium text-white/80">Last name</label>
<input className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-base text-white placeholder:text-white/25 outline-none transition focus:border-lime-400/50 focus:bg-black/30" name="Last Name" placeholder="Smith" type="text"/>
</div>
</div>
<div className="grid gap-5 sm:grid-cols-2">
<div>
<label className="mb-2 block text-sm font-medium text-white/80">Email</label>
<input className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-base text-white placeholder:text-white/25 outline-none transition focus:border-lime-400/50 focus:bg-black/30" name="Email" placeholder="buyer@retailshop.com" type="email"/>
</div>
<div>
<label className="mb-2 block text-sm font-medium text-white/80">Phone</label>
<input className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-base text-white placeholder:text-white/25 outline-none transition focus:border-lime-400/50 focus:bg-black/30" name="Phone" placeholder="(360) 555-0123" type="tel"/>
</div>
</div>
<div>
<label className="mb-2 block text-sm font-medium text-white/80">Company name</label>
<input className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-base text-white placeholder:text-white/25 outline-none transition focus:border-lime-400/50 focus:bg-black/30" name="Company Name" placeholder="Licensed retail business" type="text"/>
</div>
<div>
<label className="mb-2 block text-sm font-medium text-white/80">Order volume range</label>
<div className="relative">
<select className="w-full appearance-none rounded-2xl border border-white/10 bg-black/20 px-4 py-3 pr-12 text-base text-white outline-none transition focus:border-lime-400/50 focus:bg-black/30" name="Order Volume Range">
<option className="text-neutral-900">Less than $1,000 (includes $75 delivery fee)</option>
<option className="text-neutral-900">$1,000 – $2,000</option>
<option className="text-neutral-900">$2,000+</option>
</select>
<iconify-icon className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/40" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</div>
<p className="mt-2 text-sm text-emerald-50/45">Delivery fee applies only to orders under the minimum threshold.</p>
</div>
<div>
<label className="mb-2 block text-sm font-medium text-white/80">Message / additional details</label>
<textarea className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-base text-white placeholder:text-white/25 outline-none transition focus:border-lime-400/50 focus:bg-black/30" name="Message" placeholder="Tell us about your store, product interest, and expected order cadence." rows="5"></textarea>
</div>
<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
<p className="text-sm leading-7 text-emerald-50/45">
                    This form is intended for licensed retail inquiries only.
                  </p>
<button className="inline-flex items-center justify-center gap-2 rounded-full bg-lime-300 px-5 py-3 text-sm font-medium text-neutral-950 transition hover:bg-lime-200" style={{boxShadow: '0 0 2rem rgba(163,230,53,0.18)'}} type="submit">
                    Send inquiry
                    <iconify-icon height="16" icon="solar:plain-linear" width="16"></iconify-icon>
</button>
</div>
</form>
</div>
</div>
</div>
</section>
</main>
<footer className="border-t border-white/10 bg-black/20 backdrop-blur">
<div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-sm text-emerald-50/45 md:flex-row md:items-center md:justify-between lg:px-8">
<div className="flex items-center gap-3">
<iconify-icon className="text-lime-300" height="16" icon="solar:leaf-linear" width="16"></iconify-icon>
<span>DocCroc — Wholesale cannabis supply for licensed Washington retailers.</span>
</div>
<div className="flex items-center gap-6">
<a className="transition hover:text-lime-200" href="#products">Catalog</a>
<a className="transition hover:text-lime-200" href="#credibility">Testing</a>
<a className="transition hover:text-lime-200" href="#contact">Contact</a>
</div>
</div>
</footer>
</div>

    </>
  );
}
