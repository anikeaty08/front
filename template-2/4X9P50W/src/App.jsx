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
      

<div className="fixed inset-0 -z-10">
<div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(56,189,248,0.18),transparent),radial-gradient(900px_500px_at_90%_10%,rgba(168,85,247,0.15),transparent),radial-gradient(900px_400px_at_50%_110%,rgba(34,197,94,0.12),transparent)]"></div>
<div className="absolute inset-x-0 top-[-30%] h-[60vh] blur-3xl opacity-60 pointer-events-none" style={{background: `conic-gradient(from 180deg at 50% 50%, rgba(59,130,246,0.3), rgba(192,132,252,0.25), rgba(20,184,166,0.25), rgba(56,189,248,0.3))`}}></div>
<div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.35),transparent_20%,transparent_80%,rgba(0,0,0,0.45))]"></div>
</div>

<div className="hidden fixed inset-0 z-50 flex items-center justify-center p-4" id="popup-modal">
<div className="absolute inset-0 bg-black/60 backdrop-blur-md"></div>
<div className="relative w-full max-w-md">
<div className="relative rounded-2xl bg-slate-900/80 border border-white/10 shadow-2xl overflow-hidden">
<div className="absolute inset-0 pointer-events-none opacity-40" style={{background: `radial-gradient(600px 300px at 20% 0%, rgba(56,189,248,.25), transparent), radial-gradient(500px 260px at 100% 0%, rgba(168,85,247,.25), transparent)`}}></div>
<div className="relative p-8 text-center">
<div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/15 ring-1 ring-cyan-400/30 text-cyan-300">
<svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.998 15.998 0 011.622-3.385m5.043.025a15.998 15.998 0 001.622-3.385m3.388 1.62a15.998 15.998 0 01-1.622 3.385m0 0a15.998 15.998 0 00-3.388 1.62m-5.043-.025a15.998 15.998 0 01-1.622-3.385" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<h3 className="text-xl font-semibold tracking-tight" style={{fontFamily: `'Plus Jakarta Sans', 'Inter', sans-serif`}}>Once-in-a-Lifetime Deal!</h3>
<p className="mt-2 text-slate-300">
            Get a fully functional, professional website for only
            <span className="font-semibold text-cyan-300">R399</span>. This limited time offer includes a <span className="font-semibold text-slate-100">free domain!</span>
</p>
<div className="mt-6 grid grid-cols-2 gap-3">
<a className="inline-flex items-center justify-center w-full rounded-lg bg-cyan-500 text-slate-900 font-medium py-2.5 px-4 shadow-sm hover:shadow-cyan-500/20 hover:bg-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-cyan-400" href="https://wa.me/27816045689?text=Hi!%20I'd%20like%20to%20claim%20the%20R399%20website%20offer." target="_blank">
              Claim Offer
            </a>
<button className="inline-flex items-center justify-center w-full rounded-lg bg-white/5 text-slate-200 font-medium py-2.5 px-4 border border-white/10 hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-slate-400" id="close-popup">
              Maybe Later
            </button>
</div>
<button className="absolute top-4 right-4 text-slate-400 hover:text-slate-200 transition-colors" id="close-popup-x">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</button>
</div>
</div>
</div>
</div>

<header className="fixed top-0 left-0 right-0 z-40">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mt-4 flex items-center justify-between rounded-xl bg-white/5 backdrop-blur-md border border-white/10 px-4 sm:px-6 h-16">
<a className="text-xl sm:text-2xl tracking-tighter text-white/90 hover:text-white transition-colors font-medium" href="#" style={{fontFamily: `'Plus Jakarta Sans', 'Inter', sans-serif`}}>BizPop</a>
<nav className="hidden md:flex items-center gap-8">
<a className="hover:text-white transition-colors text-sm font-medium text-slate-300" href="#portfolio">Portfolio</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#about">About</a>
</nav>
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium text-slate-900 bg-white hover:bg-slate-100 shadow-sm ring-1 ring-white/60 transition-colors" href="https://wa.me/27816045689?text=I'm%20interested%20in%20getting%20a%20quote%20for%20a%20website." target="_blank">
          Get a Quote
        </a>
<button className="md:hidden text-slate-300 hover:text-white transition-colors">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
</button>
</div>
</div>
</header>
<main className="relative">

<section className="relative pt-32 sm:pt-40 pb-20">
<div className="absolute inset-x-0 top-24 mx-auto max-w-5xl h-48 blur-2xl opacity-60 pointer-events-none" style={{background: `radial-gradient(600px 200px at 50% 50%, rgba(56,189,248,.35), transparent)`}}></div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
<h1 className="text-4xl sm:text-6xl tracking-tight text-white/95 font-semibold leading-[1.05]" style={{fontFamily: `'Plus Jakarta Sans', 'Inter', sans-serif`}}>
          Stunning Websites That <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400">Get You Noticed</span>
</h1>
<p className="mt-6 max-w-2xl mx-auto text-lg text-slate-300">
          We build beautiful, high-performing websites that establish your credibility, attract customers, and grow your business.
        </p>
<div className="mt-10 flex justify-center gap-4">
<a className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-base font-medium text-slate-900 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-sm ring-1 ring-cyan-200" href="#portfolio">
            View Our Work
          </a>
<a className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-base font-medium text-white/90 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors" href="#services">
            Our Services
          </a>
</div>
<div className="mt-16 md:mt-20 max-w-4xl mx-auto">
<ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 text-left">
<li className="group flex items-start gap-3">
<div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-md bg-cyan-500/15 ring-1 ring-cyan-400/30 text-cyan-300">
<svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-slate-300"><span className="font-medium text-white/90">Establish Credibility & Trust</span> with a professional online hub.</p>
</li>
<li className="group flex items-start gap-3">
<div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-md bg-indigo-500/15 ring-1 ring-indigo-400/30 text-indigo-300">
<svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<p className="text-slate-300"><span className="font-medium text-white/90">Reach a Wider Audience</span> 24/7, beyond your local area.</p>
</li>
<li className="group flex items-start gap-3">
<div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-md bg-fuchsia-500/15 ring-1 ring-fuchsia-400/30 text-fuchsia-300">
<svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 3 8 9l4 13 4-13-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z"></path><path d="M2 9h20"></path></svg>
</div>
<p className="text-slate-300"><span className="font-medium text-white/90">Showcase Your Work & Services</span> with a stunning portfolio.</p>
</li>
<li className="group flex items-start gap-3">
<div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-md bg-emerald-500/15 ring-1 ring-emerald-400/30 text-emerald-300">
<svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<p className="text-slate-300"><span className="font-medium text-white/90">Generate Leads & Increase Sales</span> by converting visitors.</p>
</li>
</ul>
</div>
</div>
</section>

<section className="relative py-20 sm:py-24" id="portfolio">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-white/95" style={{fontFamily: `'Plus Jakarta Sans', 'Inter', sans-serif`}}>Our Recent Projects</h2>
<p className="mt-4 text-lg text-slate-300">From local services to artist portfolios, we design for impact.</p>
</div>
<div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

<div className="group relative">
<div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-cyan-400/20 via-indigo-400/10 to-fuchsia-400/20 blur opacity-70 group-hover:opacity-100 transition"></div>
<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
<img alt="AquaFix Plumbing Website" className="w-full h-64 md:h-80 object-cover transform group-hover:scale-[1.04] transition duration-500" src="https://images.unsplash.com/photo-1582582494705-f8ce0b0c24f0?auto=format&fit=crop&w=1770&q=80" />
<div className="p-5">
<h3 className="text-lg font-medium text-white/90">AquaFix Plumbing</h3>
<p className="mt-1 text-slate-300">A clean, trustworthy site for a local plumbing service.</p>
</div>
</div>
</div>

<div className="group relative">
<div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-cyan-400/20 via-indigo-400/10 to-fuchsia-400/20 blur opacity-70 group-hover:opacity-100 transition"></div>
<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
<img alt="PowerPro Electrical Website" className="w-full h-64 md:h-80 object-cover transform group-hover:scale-[1.04] transition duration-500" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?auto=format&fit=crop&w=1770&q=80" />
<div className="p-5">
<h3 className="text-lg font-medium text-white/90">PowerPro Electrical</h3>
<p className="mt-1 text-slate-300">A professional design for electrical contractors.</p>
</div>
</div>
</div>

<div className="group relative">
<div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-cyan-400/20 via-indigo-400/10 to-fuchsia-400/20 blur opacity-70 group-hover:opacity-100 transition"></div>
<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
<img alt="BuildCraft Construction Website" className="w-full h-64 md:h-80 object-cover transform group-hover:scale-[1.04] transition duration-500" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?auto=format&fit=crop&w=1770&q=80" />
<div className="p-5">
<h3 className="text-lg font-medium text-white/90">BuildCraft Construction</h3>
<p className="mt-1 text-slate-300">A robust portfolio for a construction company.</p>
</div>
</div>
</div>

<div className="group relative">
<div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-cyan-400/20 via-indigo-400/10 to-fuchsia-400/20 blur opacity-70 group-hover:opacity-100 transition"></div>
<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
<img alt="Maya Chen Artist Portfolio" className="w-full h-64 md:h-80 object-cover transform group-hover:scale-[1.04] transition duration-500" src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=1770&q=80" />
<div className="p-5">
<h3 className="text-lg font-medium text-white/90">Maya Chen Art</h3>
<p className="mt-1 text-slate-300">An elegant, minimalist portfolio for a visual artist.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative sm:py-24 pt-20 pb-20" id="services">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center max-w-2xl mx-auto">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-white/95" style={{fontFamily: `'Plus Jakarta Sans', 'Inter', sans-serif`}}>Grow Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-indigo-400">Online Presence</span></h2>
<p className="mt-4 text-lg text-slate-300">Beyond the website, we offer essential add-on services to help your business thrive online.</p>
</div>
<div className="mt-14 max-w-5xl mx-auto">
<div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl">

<div className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between hover:bg-white/[0.06] transition-colors">
<div className="flex items-center gap-4">
<div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-cyan-500/15 ring-1 ring-cyan-400/30 text-cyan-300">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<div className="">
<h3 className="text-lg font-medium text-white/90">Domain Purchase & Linking</h3>
<p className="text-sm text-slate-300">We'll find and secure the perfect domain name for you and link it to your Google Business Profile.</p>
</div>
</div>
<div className="mt-4 sm:mt-0 text-lg font-semibold text-white/90">R200</div>
</div>

<div className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between hover:bg-white/[0.06] transition-colors">
<div className="flex items-center gap-4">
<div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-indigo-500/15 ring-1 ring-indigo-400/30 text-indigo-300">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
</div>
<div className="">
<h3 className="text-lg font-medium text-white/90">Logo Design & Integration</h3>
<p className="text-sm text-slate-300">A custom logo in hi-res format to represent your brand, integrated on your site.</p>
</div>
</div>
<div className="mt-4 sm:mt-0 text-lg font-semibold text-white/90">R300</div>
</div>

<div className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between hover:bg-white/[0.06] transition-colors">
<div className="flex items center gap-4">
<div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-fuchsia-500/15 ring-1 ring-fuchsia-400/30 text-fuchsia-300">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
</div>
<div className="">
<h3 className="text-lg font-medium text-white/90">Google Business Setup</h3>
<p className="text-sm text-slate-300">Get found on Google Maps and local search results.</p>
</div>
</div>
<div className="mt-4 sm:mt-0 text-lg font-semibold text-white/90">R250</div>
</div>

<div className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between hover:bg-white/[0.06] transition-colors">
<div className="flex items-center gap-4">
<div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-emerald-500/15 ring-1 ring-emerald-400/30 text-emerald-300">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="5" rx="1" width="5" x="3" y="3"></rect><rect height="5" rx="1" width="5" x="16" y="3"></rect><rect height="5" rx="1" width="5" x="3" y="16"></rect><path d="M21 16h-3a2 2 0 0 0-2 2v3"></path><path d="M21 21v.01"></path><path d="M12 7v3a2 2 0 0 1-2 2H7"></path><path d="M3 12h.01"></path><path d="M12 3h.01"></path><path d="M12 16v.01"></path><path d="M16 12h1"></path><path d="M21 12v.01"></path><path d="M12 21v-1"></path></svg>
</div>
<div className="">
<h3 className="text-lg font-medium text-white/90">QR Card for Google Reviews</h3>
<p className="text-sm text-slate-300">Be able to provide a QR code to present to easily collect valuable customer reviews.</p>
</div>
</div>
<div className="mt-4 sm:mt-0 text-lg font-semibold text-white/90">R150</div>
</div>

<div className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between hover:bg-white/[0.06] transition-colors">
<div className="flex items-center gap-4">
<div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-sky-500/15 ring-1 ring-sky-400/30 text-sky-300">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="18" x="3" y="3"></rect><rect height="7" rx="1" width="9" x="3" y="14"></rect><rect height="7" rx="1" width="5" x="16" y="14"></rect></svg>
</div>
<div className="">
<h3 className="text-lg font-medium text-white/90">Business Flyer Design</h3>
<p className="text-sm text-slate-300">Professional flyers for your marketing campaigns.</p>
</div>
</div>
<div className="mt-4 sm:mt-0 text-lg font-semibold text-white/90">R300</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-20 sm:py-24" id="about">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
<div className="">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-white/95" style={{fontFamily: `'Plus Jakarta Sans', 'Inter', sans-serif`}}>
              Crafting Digital Experiences <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-indigo-400">for 5+ Years</span>
</h2>
<p className="mt-4 text-lg text-slate-300">
              For over five years, BizPop has been dedicated to helping businesses establish a powerful online presence. We believe a great website is more than just code; it's a digital storefront, a brand statement, and a growth engine.
            </p>
<p className="mt-4 text-lg text-slate-300">
              Our mission is to empower small and medium-sized businesses with the digital tools they need to succeed in a competitive world.
            </p>
</div>
<div className="mt-10 lg:mt-0">
<div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md">
<div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-tr from-cyan-400/20 via-indigo-400/10 to-fuchsia-400/20 blur pointer-events-none"></div>
<div className="relative">
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
<img alt="BizPop Team" className="aspect-[4/3] w-full object-cover" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1770&q=80" />
</div>
<div className="absolute bottom-0 left-0 p-6">
<p className="text-xl font-semibold text-white">Your Partner in Digital Growth</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative">
<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
<div className="relative overflow-hidden rounded-2xl p-10 sm:p-16 text-center border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-900/80 backdrop-blur-lg shadow-2xl">
<div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-tr from-cyan-400/25 via-indigo-400/20 to-fuchsia-400/25 blur opacity-80 pointer-events-none"></div>
<div className="relative">
<h2 className="text-3xl tracking-tight font-semibold text-white" style={{fontFamily: `'Plus Jakarta Sans', 'Inter', sans-serif`}}>Ready to Launch Your Website?</h2>
<p className="mt-4 text-lg text-slate-300">Let's build something amazing together. Get in touch for a free, no-obligation consultation.</p>
<div className="mt-8">
<a className="inline-flex items-center justify-center hover:bg-cyan-300 transition-colors text-base font-medium text-slate-900 bg-cyan-400 ring-cyan-200 ring-1 rounded-lg pt-3 pr-8 pb-3 pl-8 shadow-sm" href="https://wa.me/27816045689?text=I'm%20interested%20in%20starting%20a%20website%20project." target="_blank">
                Start Your Project
              </a>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="relative border-t border-white/10 bg-white/5">
<div className="mx-auto max-w-7xl py-10 px-4 sm:px-6 lg:px-8">
<div className="flex justify-center space-x-6">
<a className="text-slate-400 hover:text-cyan-300 transition-colors" href="https://facebook.com" target="_blank">
<span className="sr-only">Facebook</span>
<svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="text-slate-400 hover:text-cyan-300 transition-colors" href="https://instagram.com" target="_blank">
<span className="sr-only">Instagram</span>
<svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="text-slate-400 hover:text-cyan-300 transition-colors" href="https://twitter.com" target="_blank">
<span className="sr-only">Twitter</span>
<svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.4 9 4 0 0 4-3 6-7"></path></svg>
</a>
</div>
</div>
</footer>

    </>
  );
}
