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



      // Current year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Reveal animations for elements with data-animate
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0','translate-y-4','blur-sm');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });

      document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));

      // Smooth scroll for in-page anchors
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          const id = this.getAttribute('href');
          if (id && id.length > 1) {
            const target = document.querySelector(id);
            if (target) {
              e.preventDefault();
              target.scrollIntoView({ behavior: 'smooth', block: 'start' });
              history.pushState(null, '', id);
            }
          }
        });
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
      <div className="absolute top-0 w-full -z-10 h-[860px] bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1729575846511-f499d2e17d79?w=3840&amp'}}></div>


<div className="fixed inset-0 -z-10">
<div className="absolute inset-0 bg-[radial-gradient(1200px_500px_at_20%_10%,rgba(20,184,166,0.08),transparent),radial-gradient(800px_400px_at_90%_20%,rgba(20,184,166,0.06),transparent)]"></div>
<div className="absolute inset-0 bg-slate-50/30"></div>
<div className="absolute inset-0 backdrop-blur-[2px]"></div>
<div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b to-transparent from-white/40"></div>
<div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t to-transparent from-white/40"></div>
</div>

<main className="relative min-h-screen flex flex-col">

<header className="sm:px-6 lg:px-10 pt-6 pr-4 pb-2 pl-4">
<div className="mx-auto max-w-7xl">
<div className="flex items-center justify-between rounded-xl border backdrop-blur-xl shadow-md px-4 sm:px-6 py-3 border-cyan-200/80 bg-black/5">
<div className="flex items-center gap-3">

<div className="flex h-9 w-9 items-center justify-center rounded-md bg-green-500/15 border shadow-md border-cyan-200">
<span className="font-medium tracking-tight text-green-600 font-sans" style={{fontFamily: '\'Space Grotesk\', ui-sans-serif, system-ui', fontSize: '15px'}}>E&amp;E</span>
</div>
<div className="hidden sm:flex flex-col">
<span className="text-slate-900 font-sans" style={{fontFamily: '\'Space Grotesk\', ui-sans-serif, system-ui', fontWeight: '500', letterSpacing: '-0.02em'}}>E &amp; E Roofing</span>
<span className="text-[11px] text-slate-600 font-sans" style={{fontFamily: 'Inter, ui-sans-serif, system-ui'}}>CA Lic #1087571</span>
</div>
</div>
<nav className="hidden md:flex items-center gap-6 text-sm">
<a className="transition-colors text-slate-700 hover:text-green-600 font-sans" href="#problems">Problems</a>
<a className="transition-colors text-slate-700 hover:text-green-600 font-sans" href="#solutions">Solutions</a>
<a className="transition-colors text-slate-700 hover:text-green-600 font-sans" href="#benefits">Benefits</a>
<a className="transition-colors text-slate-700 hover:text-green-600 font-sans" href="#reviews">Testimonials</a>
<a className="transition-colors text-slate-700 hover:text-green-600 font-sans" href="#steps">3 Steps</a>
<a className="transition-colors text-slate-700 hover:text-green-600 font-sans" href="#reasons">Why Us</a>
<a className="transition-colors text-slate-700 hover:text-green-600 font-sans" href="#features">Features</a>
<a className="transition-colors text-slate-700 hover:text-green-600 font-sans" href="#faq">FAQ</a>
<a className="transition-colors text-slate-700 hover:text-green-600 font-sans" href="#contact">CTA</a>
</nav>
<div className="flex items-center gap-2">
<a className="group inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm shadow-md backdrop-blur-xl hover:border-green-500/40 transition-colors border-cyan-200 bg-black/5 text-slate-800 hover:bg-black/10" href="tel:+18055900908">
<svg className="lucide lucide-phone w-4 h-4 text-teal-600" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span className="hidden sm:inline font-sans" style={{fontFamily: 'Inter, ui-sans-serif, system-ui'}}>(805) 590-0908</span>
</a>
<a className="inline-flex items-center gap-2 rounded-lg border border-green-500/20 bg-green-500/15 px-3.5 py-2 text-sm shadow-md backdrop-blur-xl hover:bg-green-500/25 hover:outline hover:outline-1 hover:outline-green-500/30 transition-all text-green-700 hover:text-green-800" href="#quote">
<svg className="lucide lucide-sparkles w-4 h-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="font-sans" style={{fontFamily: 'Inter, ui-sans-serif, system-ui'}}>Free Estimate</span>
</a>
</div>
</div>
</div>
</header>

<section className="flex-1 flex sm:py-8 lg:py-10 pt-6 pb-6 items-center">
<div className="w-full px-4 sm:px-6 lg:px-10">
<div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">

<div className="space-y-8">

<div className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 shadow-md backdrop-blur-xl w-max transition-all duration-700 border-cyan-200 bg-black/5" data-animate="" style={{}}>
<svg className="lucide lucide-users w-4 h-4 text-teal-600" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
<span className="text-xs text-slate-700 font-sans" style={{fontFamily: 'Inter, ui-sans-serif, system-ui'}}>For homeowners in Ventura, Santa Barbara, and the Valley</span>
</div>

<h1 className="transition-all duration-700 font-semibold text-slate-900 tracking-tight font-bricolage" data-animate="" style={{fontFamily: '"Space Grotesk", ui-sans-serif, system-ui', fontWeight: '500', letterSpacing: '-0.02em', fontSize: 'clamp(48px, 6vw, 64px)', lineHeight: '1.05'}}>A leak‑free, worry‑free roof —installed right the first time</h1>

<p className="transition-all duration-700 text-slate-700 max-w-xl" data-animate="" style={{fontFamily: 'Inter, ui-sans-serif, system-ui', fontSize: 'clamp(16px, 2vw, 20px)'}}>
                We inspect your roof, show clear photos, and give a plan you can trust. Licensed, bonded, and insured. Fast 24–48 hour response. Clean, safe crew. Up to 10‑year warranty.
              </p>

<div className="flex flex-wrap items-center gap-3 transition-all duration-700" data-animate="" style={{}}>
<a className="inline-flex items-center justify-center gap-2 rounded-xl border border-green-500/30 bg-green-500/15 px-5 py-3 shadow-md backdrop-blur-xl hover:bg-green-500/25 hover:border-green-500/50 hover:shadow-lg transition-all text-green-800 hover:text-green-900" href="#quote">
<svg className="lucide lucide-clipboard-plus w-5 h-5" data-lucide="clipboard-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect><path className="" d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="M9 14h6"></path><path d="M12 17v-6"></path></svg>
<span className="text-[15px] font-sans" style={{fontFamily: 'Inter, ui-sans-serif, system-ui'}}>Request Free Estimate</span>
</a>
<a className="inline-flex items-center justify-center gap-2 hover:border-green-500/40 hover:shadow-lg transition-all hover:bg-black/10 text-slate-800 bg-black/5 border-cyan-200 border rounded-xl pt-3 pr-5 pb-3 pl-5 shadow-md backdrop-blur-xl" href="tel:+18182001334">
<svg className="lucide lucide-phone-call w-5 h-5 text-teal-600" data-lucide="phone-call" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M13 2a9 9 0 0 1 9 9"></path><path className="" d="M13 6a5 5 0 0 1 5 5"></path><path className="" d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span className="text-[15px] font-sans" style={{fontFamily: 'Inter, ui-sans-serif, system-ui'}}>Call Tarzana (818) 200-1334</span>
</a>
</div>
<p className="text-[13px] transition-all duration-700 text-slate-600 font-sans" data-animate="" style={{fontFamily: 'Inter, ui-sans-serif, system-ui'}}>
                Click “Request Free Estimate” to get a same‑day call back and a written estimate with photos.
              </p>

<div className="flex flex-wrap gap-2 transition-all duration-700" data-animate="" style={{}}>
<span className="inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-[13px] backdrop-blur-xl shadow-md border-cyan-200 bg-black/5 text-slate-700 font-sans">
<svg className="lucide lucide-home w-4 h-4 text-teal-600" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
                  Residential Roofing
                </span>
<span className="inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-[13px] backdrop-blur-xl shadow-md border-cyan-200 bg-black/5 text-slate-700 font-sans">
<svg className="lucide lucide-hammer w-4 h-4 text-teal-600" data-lucide="hammer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"></path><path d="m18 15 4-4"></path><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path></svg>
                  Repairs &amp; Maintenance
                </span>
<span className="inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-[13px] backdrop-blur-xl shadow-md border-cyan-200 bg-black/5 text-slate-700 font-sans">
<svg className="lucide lucide-search w-4 h-4 text-teal-600" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
                  Inspections &amp; Reports
                </span>
<span className="inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-[13px] backdrop-blur-xl shadow-md border-cyan-200 bg-black/5 text-slate-700 font-sans">
<svg className="lucide lucide-cloud-rain-wind w-4 h-4 text-teal-600" data-lucide="cloud-rain-wind" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="m9.2 22 3-7"></path><path d="m9 13-3 7"></path><path d="m17 13-3 7"></path></svg>
                  Storm &amp; Leak Response
                </span>
</div>
</div>

<div className="relative">
<div className="relative overflow-hidden rounded-2xl border shadow-md backdrop-blur-xl transition-all duration-700 border-cyan-200 bg-black/5" data-animate="" style={{}}>
<div className="absolute inset-0 bg-gradient-to-tr to-green-500/10 pointer-events-none from-slate-50/40 via-slate-100/0"></div>
<img alt="Rooftop installation" className="md:h-[60vh] w-full h-[52vh] object-cover" src="https://irp.cdn-website.com/013b6f78/dms3rep/multi/IMG_0697.jpg?w=800&amp;q=80"/>

<div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
<div className="grid grid-cols-3 gap-2 sm:gap-3">
<div className="rounded-xl border px-3 py-2.5 backdrop-blur-xl shadow-md border-cyan-200 bg-slate-100/60">
<div className="flex items-center gap-2">
<svg className="lucide lucide-clock w-4 h-4 text-teal-600" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-[11px] text-slate-600 font-sans" style={{fontFamily: 'Inter, ui-sans-serif, system-ui'}}>Response</span>
</div>
<div className="text-slate-900 font-sans" style={{fontFamily: '\'Space Grotesk\', ui-sans-serif, system-ui', fontWeight: '500', letterSpacing: '-0.02em'}}>24–48h</div>
</div>
<div className="rounded-xl border px-3 py-2.5 backdrop-blur-xl shadow-md border-cyan-200 bg-slate-100/60">
<div className="flex items-center gap-2">
<svg className="lucide lucide-star w-4 h-4 text-teal-600" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-[11px] text-slate-600 font-sans" style={{fontFamily: 'Inter, ui-sans-serif, system-ui'}}>Warranty</span>
</div>
<div className="text-slate-900 font-sans" style={{fontFamily: '\'Space Grotesk\', ui-sans-serif, system-ui', fontWeight: '500', letterSpacing: '-0.02em'}}>Up to 10yr</div>
</div>
<div className="rounded-xl border px-3 py-2.5 backdrop-blur-xl shadow-md border-cyan-200 bg-slate-100/60">
<div className="flex items-center gap-2">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-teal-600" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-[11px] text-slate-600 font-sans" style={{fontFamily: 'Inter, ui-sans-serif, system-ui'}}>Licensed</span>
</div>
<div className="text-slate-900 font-sans" style={{fontFamily: '\'Space Grotesk\', ui-sans-serif, system-ui', fontWeight: '500', letterSpacing: '-0.02em'}}>CA #1087571</div>
</div>
</div>
</div>
</div>
</div> 
</div>
</div>
</section>

<section className="px-4 sm:px-6 lg:px-10 pt-6 pb-8" id="problems">
<div className="max-w-7xl mr-auto ml-auto" data-element-id="aura-emfwv1zjr">
<div className="flex items-end justify-between mb-4 transition-all duration-700" data-animate="" style={{transitionDelay: '50ms'}}>
<h2 className="tracking-tight text-slate-900 font-bricolage font-semibold" style={{fontFamily: '\'Space Grotesk\', ui-sans-serif, system-ui', fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: '500', letterSpacing: '-0.02em'}}>Your roof problems, solved</h2>
<div className="text-sm text-slate-600 font-sans" style={{fontFamily: 'Inter, ui-sans-serif, system-ui'}}>Clear fixes from an expert, local crew</div>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="rounded-xl border p-4 shadow-md backdrop-blur-xl transition-all duration-700 border-cyan-200 bg-black/5" data-animate="" style={{transitionDelay: '100ms'}}>
<div className="flex items-start gap-3">
<svg className="w-5 h-5 mt-0.5 text-teal-600" data-lucide="droplets" fill="none" height="24" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a5 5 0 0 0 5-5c0-3-5-9-5-9s-5 6-5 9a5 5 0 0 0 5 5"></path><path d="M9.5 16.5A2.5 2.5 0 0 1 7 14"></path></svg>
<div className="">
<div className="text-slate-800 font-sans" style={{fontFamily: 'Inter', fontWeight: '500'}}>Leaks and stains</div>
<p className="mt-1 text-[14px] text-slate-600 font-sans" style={{fontFamily: 'Inter'}}>We find the source fast, show photos, and stop the leak. Same‑day tarping if needed.</p>
</div>
</div>
</div>
<div className="rounded-xl border p-4 shadow-md backdrop-blur-xl transition-all duration-700 border-cyan-200 bg-black/5" data-animate="" style={{transitionDelay: '200ms'}}>
<div className="flex items-start gap-3">
<svg className="w-5 h-5 mt-0.5 text-teal-600" data-lucide="wind" fill="none" height="24" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.59 4.59A2 2 0 1 1 12 2"></path><path d="M8 2a4 4 0 0 0 0 8h10"></path><path d="M17.71 17.71A2 2 0 1 0 20 16"></path><path d="M3 16h12"></path></svg>
<div>
<div className="text-slate-800 font-sans" style={{fontFamily: 'Inter', fontWeight: '500'}}>Storm damage</div>
<p className="mt-1 text-[14px] text-slate-600 font-sans" style={{fontFamily: 'Inter'}}>Blown shingles, lifted tiles, or clogged gutters—we secure it and prevent further damage.</p>
</div>
</div>
</div>
<div className="rounded-xl border p-4 shadow-md backdrop-blur-xl transition-all duration-700 border-cyan-200 bg-black/5" data-animate="" style={{transitionDelay: '300ms'}}>
<div className="flex items-start gap-3">
<svg className="w-5 h-5 mt-0.5 text-teal-600" data-lucide="alert-triangle" fill="none" height="24" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
<div className="">
<div className="text-slate-800 font-sans" style={{fontFamily: 'Inter', fontWeight: '500'}}>Old or failing roofs</div>
<p className="mt-1 text-[14px] text-slate-600 font-sans" style={{fontFamily: 'Inter'}}>We replace to code, improve ventilation, and set you up for years of dry, safe living.</p>
</div>
</div>
</div>
<div className="rounded-xl border p-4 shadow-md backdrop-blur-xl transition-all duration-700 border-cyan-200 bg-black/5" data-animate="" style={{transitionDelay: '400ms'}}>
<div className="flex items-start gap-3">
<svg className="w-5 h-5 mt-0.5 text-teal-600" data-lucide="shield-x" fill="none" height="24" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<div className="">
<div className="text-slate-800 font-sans" style={{fontFamily: 'Inter', fontWeight: '500'}}>Confusing bids</div>
<p className="mt-1 text-[14px] text-slate-600 font-sans" style={{fontFamily: 'Inter'}}>We break down materials, labor, and timing—no hidden fees, no jargon.</p>
</div>
</div>
</div>
<div className="rounded-xl border p-4 shadow-md backdrop-blur-xl transition-all duration-700 border-cyan-200 bg-black/5" data-animate="" style={{transitionDelay: '500ms'}}>
<div className="flex items-start gap-3">
<svg className="w-5 h-5 mt-0.5 text-teal-600" data-lucide="clock-alert" fill="none" height="24" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8v4l3 3"></path><circle cx="12" cy="12" r="10"></circle></svg>
<div>
<div className="text-slate-800 font-sans" style={{fontFamily: 'Inter', fontWeight: '500'}}>Missed deadlines</div>
<p className="mt-1 text-[14px] text-slate-600 font-sans" style={{fontFamily: 'Inter'}}>We schedule, show up, and finish on time—then clean up like we were never there.</p>
</div>
</div>
</div>
<div className="rounded-xl border p-4 shadow-md backdrop-blur-xl transition-all-700 border-cyan-200 bg-black/5" data-animate="" style={{transitionDelay: '600ms'}}>
<div className="flex items-start gap-3">
<svg className="w-5 h-5 mt-0.5 text-teal-600" data-lucide="file-question" fill="none" height="24" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M9 9h6"></path><path d="M9 13h3"></path><path d="M17 9h.01"></path></svg>
<div className="">
<div className="text-slate-800 font-sans" style={{fontFamily: 'Inter', fontWeight: '500'}}>Insurance or escrow</div>
<p className="mt-1 text-[14px] text-slate-600 font-sans" style={{fontFamily: 'Inter'}}>We provide photo reports, clear scopes, and help you satisfy lenders and adjusters.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="px-4 sm:px-6 lg:px-10 pt-6 pb-8" id="solutions">
<div className="max-w-7xl mr-auto ml-auto transition-all duration-700 opacity-0 translate-y-4 blur-sm" data-animate="" data-element-id="aura-emfwv4vvr" style={{transitionDelay: '25ms'}}>
<div className="flex items-end justify-between mb-4 transition-all duration-700 opacity-0 translate-y-4 blur-sm" data-animate="" style={{transitionDelay: '50ms'}}>
<h2 className="tracking-tight text-slate-900 font-bricolage font-semibold" style={{fontFamily: '\'Space Grotesk\', ui-sans-serif, system-ui', fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: '500', letterSpacing: '-0.02em'}}>Our solution, in action</h2>
<p className="text-sm text-slate-600 font-sans" style={{fontFamily: 'Inter, ui-sans-serif, system-ui'}}>Inspect • Plan • Protect • Install • Guarantee</p>
</div>
<div className="grid md:grid-cols-3 gap-4">
<div className="group relative overflow-hidden rounded-2xl border shadow-md backdrop-blur-xl transition-all duration-700 opacity-0 translate-y-4 blur-sm border-cyan-200 bg-black/5" data-animate="" style={{transitionDelay: '100ms'}}>
<img alt="Shingle roof replacement" className="h-56 w-full object-cover" src="https://lirp.cdn-website.com/013b6f78/dms3rep/multi/opt/photo_4985667105022127959_y-b2708b43-640w.jpg?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-90 from-slate-50/70 via-slate-100/0"></div>
<div className="absolute bottom-0 p-4">
<div className="inline-flex items-center gap-2 rounded-lg border px-2.5 py-1.5 border-cyan-200 bg-slate-100/70">
<svg className="w-4 h-4 text-teal-600" data-lucide="house" fill="none" height="24" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="text-[13px] font-sans" style={{fontFamily: 'Inter, ui-sans-serif, system-ui'}}>Ventura • Shingle Re‑Roof</span>
</div>
</div>
</div>
<div className="group relative overflow-hidden rounded-2xl border shadow-md backdrop-blur-xl transition-all duration-700 opacity-0 translate-y-4 blur-sm border-cyan-200 bg-black/5" data-animate="" style={{transitionDelay: '200ms'}}>
<img alt="Tile roof repair" className="h-56 w-full object-cover" src="https://irp.cdn-website.com/013b6f78/dms3rep/multi/photo_4985667105022127960_y-d8c2f9c4.jpg?w=800&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-90 from-slate-50/70 via-slate-100/0"></div>
<div className="absolute bottom-0 p-4">
<div className="inline-flex items-center gap-2 rounded-lg border px-2.5 py-1.5 border-cyan-200 bg-slate-100/70">
<svg className="w-4 h-4 text-teal-600" data-lucide="brick-wall" fill="none" height="24" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M12 9v6"></path><path d="M16 15v6"></path><path d="M16 3v6"></path><path d="M3 15h18"></path><path d="M3 9h18"></path><path d="M8 15v6"></path><path d="M8 3v6"></path></svg>
<span className="text-[13px] font-sans" style={{fontFamily: 'Inter, ui-sans-serif, system-ui'}}>Oxnard • Tile Repair</span>
</div>
</div>
</div>
<div className="group relative overflow-hidden rounded-2xl border shadow-md backdrop-blur-xl transition-all duration-700 opacity-0 translate-y-4 blur-sm border-cyan-200 bg-black/5" data-animate="" style={{transitionDelay: '300ms'}}>
<img alt="Flat roof cool coating" className="h-56 w-full object-cover" src="https://lirp.cdn-website.com/013b6f78/dms3rep/multi/opt/photo_4985667105022127956_y-9ae826d6-640w.jpg?w=800&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-90 from-slate-50/70 via-slate-100/0"></div>
<div className="absolute bottom-0 p-4">
<div className="inline-flex items-center gap-2 rounded-lg border px-2.5 py-1.5 border-cyan-200 bg-slate-100/70">
<svg className="w-4 h-4 text-teal-600" data-lucide="paint-roller" fill="none" height="24" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="6" rx="2" width="16" x="2" y="2"></rect><path d="M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"></path><rect height="6" rx="1" width="4" x="8" y="16"></rect></svg>
<span className="text-[13px] font-sans" style={{fontFamily: 'Inter, ui-sans-serif, system-ui'}}>Santa Barbara • Cool Roof</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="px-4 sm:px-6 lg:px-10 pt-6 pb-8" id="benefits">
<div className="mx-auto max-w-7xl">
<div className="flex items-end justify-between mb-4">
<h2 className="tracking-tight text-slate-900 font-bricolage font-semibold" style={{fontFamily: '\'Space Grotesk\', ui-sans-serif, system-ui', fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: '500', letterSpacing: '-0.02em'}}>Why homeowners love working with us</h2>
<div className="text-sm text-slate-600 font-sans" style={{fontFamily: 'Inter, ui-sans-serif, system-ui'}}>Features that deliver real benefits</div>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="rounded-xl border p-4 shadow-md backdrop-blur-xl transition-all duration-700 border-cyan-200 bg-black/5" data-animate="">
<div className="flex items-center justify-between">
<span className="text-slate-800 font-sans" style={{fontFamily: '\'Space Grotesk\', ui-sans-serif, system-ui', fontWeight: '500', letterSpacing: '-0.01em'}}>New Roofs</span>
<svg className="w-5 h-5 text-teal-600" data-lucide="layers" fill="none" height="24" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<p className="mt-2 text-[13px] text-slate-600 font-sans" style={{fontFamily: 'Inter'}}>Asphalt, tile, and cool roofs—built to code so you save energy and sleep easy.</p>
</div>
<div className="rounded-xl border p-4 shadow-md backdrop-blur-xl transition-all duration-700 border-cyan-200 bg-black/5" data-animate="">
<div className="flex items-center justify-between">
<span className="text-slate-800 font-sans" style={{fontFamily: '\'Space Grotesk\', ui-sans-serif, system-ui', fontWeight: '500', letterSpacing: '-0.01em'}}>Repairs</span>
<svg className="w-5 h-5 text-teal-600" data-lucide="wrench" fill="none" height="24" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path></svg>
</div>
<p className="mt-2 text-[13px] text-slate-600 font-sans" style={{fontFamily: 'Inter'}}>Stop leaks fast. Better flashing and ventilation protect your home and attic.</p>
</div>
<div className="rounded-xl border p-4 shadow-md backdrop-blur-xl transition-all duration-700 border-cyan-200 bg-black/5" data-animate="">
<div className="flex items-center justify-between">
<span className="text-slate-800 font-sans" style={{fontFamily: '\'Space Grotesk\', ui-sans-serif, system-ui', fontWeight: '500', letterSpacing: '-0.01em'}}>Inspections</span>
<svg className="w-5 h-5 text-teal-600" data-lucide="file-search" fill="none" height="24" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"></path><path d="m9 18-1.5-1.5"></path><circle cx="5" cy="14" r="3"></circle></svg>
</div>
<p className="mt-2 text-[13px] text-slate-600 font-sans" style={{fontFamily: 'Inter'}}>Photo reports and clear notes so you can make fast, smart decisions.</p>
</div>
<div className="rounded-xl border p-4 shadow-md backdrop-blur-xl transition-all duration-700 border-cyan-200 bg-black/5" data-animate="">
<div className="flex items-center justify-between">
<span className="text-slate-800 font-sans" style={{fontFamily: '\'Space Grotesk\', ui-sans-serif, system-ui', fontWeight: '500', letterSpacing: '-0.01em'}}>Emergency</span>
<svg className="w-5 h-5 text-teal-600" data-lucide="life-buoy" fill="none" height="24" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m4.93 4.93 4.24 4.24"></path><path d="m14.83 9.17 4.24-4.24"></path><path d="m14.83 14.83 4.24 4.24"></path><path d="m9.17 14.83-4.24 4.24"></path><circle cx="12" cy="12" r="4"></circle></svg>
</div>
<p className="mt-2 text-[13px] text-slate-600 font-sans" style={{fontFamily: 'Inter'}}>Tarping and temporary dry‑in within 24–48 hours so your home stays protected.</p>
</div>
</div>
</div>
</section>

<section className="px-4 sm:px-6 lg:px-10 pt-6 pb-8" id="reviews">
<div className="mx-auto max-w-7xl">
<div className="flex items-end justify-between mb-4">
<h2 className="tracking-tight text-slate-900 font-bricolage font-semibold" style={{fontFamily: '\'Space Grotesk\', ui-sans-serif, system-ui', fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: '500', letterSpacing: '-0.02em'}}>What homeowners say</h2>
<div className="text-sm text-slate-600 font-sans" style={{fontFamily: 'Inter, ui-sans-serif, system-ui'}}>5.0 average across recent jobs</div>
</div>
<div className="grid md:grid-cols-3 gap-4">
<div className="rounded-xl border p-4 shadow-md backdrop-blur-xl transition-all duration-700 border-cyan-200 bg-black/5" data-animate="">
<div className="flex items-center gap-3">
<img alt="Reviewer" className="h-9 w-9 rounded-full object-cover ring-1 ring-cyan-200" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&amp;q=80" style={{}}/>
<div>
<div className="text-slate-800 font-sans" style={{fontFamily: 'Inter, ui-sans-serif, system-ui', fontWeight: '500'}}>Marisol G.</div>
<div className="text-[12px] text-slate-600 font-sans" style={{fontFamily: 'Inter, ui-sans-serif, system-ui'}}>Ventura, CA</div>
</div>
</div>
<p className="mt-3 text-[14px] text-slate-700 font-sans" style={{fontFamily: 'Inter, ui-sans-serif, system-ui'}}>
                Fast response after a storm leak. They tarped the same day and repaired flashing—no issues since.
              </p>
<div className="mt-3 inline-flex items-center gap-1 text-green-700">
<svg className="w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
<div className="rounded-xl border p-4 shadow-md backdrop-blur-xl transition-all duration-700 border-cyan-200 bg-black/5" data-animate="">
<div className="flex items-center gap-3">
<img alt="Reviewer" className="h-9 w-9 rounded-full object-cover ring-1 ring-cyan-200" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=200&amp;q=80"/>
<div>
<div className="text-slate-800 font-sans" style={{fontFamily: 'Inter, ui-sans-serif, system-ui', fontWeight: '500'}}>Daniel P.</div>
<div className="text-[12px] text-slate-600 font-sans" style={{fontFamily: 'Inter, ui-sans-serif, system-ui'}}>Oxnard, CA</div>
</div>
</div>
<p className="mt-3 text-[14px] text-slate-700 font-sans" style={{fontFamily: 'Inter, ui-sans-serif, system-ui'}}>
                New shingle roof looks great and passed inspection easily. Crew was tidy and on time.
              </p>
<div className="mt-3 inline-flex items-center gap-1 text-green-700">
<svg className="w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg <svg="" again.="" an="" className="w-4 h-4" continuing="" data-lucide="star" error="" fill="none" generation.="" height="24" occurred="" please="" stroke="currentColor" style={{strokeWidth: '1.5'}} the="" try="" viewbox="0 0 24 24" while="" width="24" xmlns=""><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
<div className="rounded-xl border p-4 shadow-md backdrop-blur-xl transition-all duration-700 border-cyan-200 bg-black/5" data-animate="">
<div className="flex items-center gap-3">
<img alt="Reviewer" className="h-9 w-9 rounded-full object-cover ring-1 ring-cyan-200" src="https://images.unsplash.com/photo-1521575107034-e0fa0b594529?w=200&amp;q=80" style={{}}/>
<div>
<div className="text-slate-800 font-sans" style={{fontFamily: 'Inter, ui-sans-serif, system-ui', fontWeight: '500'}}>Hannah L.</div>
<div className="text-[12px] text-slate-600 font-sans" style={{fontFamily: 'Inter, ui-sans-serif, system-ui'}}>Santa Barbara, CA</div>
</div>
</div>
<p className="mt-3 text-[14px] text-slate-700 font-sans" style={{fontFamily: 'Inter, ui-sans-serif, system-ui'}}>
                Clear photos and a fair price. They finished in two days and left the yard spotless. Highly recommend.
              </p>
<div aria-label="5 out of 5 stars" className="mt-3 inline-flex items-center gap-1 text-green-700">
<svg className="w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
</div>
</div>
</section>

<section className="px-4 sm:px-6 lg:px-10 pt-6 pb-10" id="steps">
<div className="mx-auto max-w-7xl">
<div className="flex items-end justify-between mb-4">
<h2 className="tracking-tight text-slate-900 font-bricolage font-semibold" style={{fontFamily: '\'Space Grotesk\', ui-sans-serif, system-ui', fontSize: 'clamp(24px,3vw,32px)', fontWeight: '500', letterSpacing: '-0.02em'}}>Your roof in 3 simple steps</h2>
<p className="text-sm text-slate-600 font-sans" style={{fontFamily: 'Inter, ui-sans-serif'}}>Clear, fast, and on budget</p>
</div>
<ol className="grid md:grid-cols-3 gap-4">
<li className="relative rounded-xl border p-5 shadow-md backdrop-blur-xl transition-all duration-700 border-cyan-200 bg-black/5" data-animate="">
<div className="absolute -top-3 left-5 inline-flex h-7 w-7 items-center justify-center rounded-full border border-green-500/30 bg-green-500/15 text-sm shadow-md text-green-700 font-sans">1</div>
<div className="mt-2 flex items-center gap-2">
<svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><path d="M8 13l3 3 6-6"></path><circle cx="8" cy="7" r="1"></circle><circle cx="12" cy="7" r="1"></circle><circle cx="16" cy="7" r="1"></circle></svg>
<h3 className="font-medium text-slate-900 font-sans" style={{fontFamily: 'Inter'}}>Inspect and report</h3>
</div>
<p className="mt-2 text-[14px] text-slate-600 font-sans" style={{fontFamily: 'Inter'}}>We visit fast, take photos, and explain what’s going on in plain language.</p>
</li>
<li className="relative rounded-xl border p-5 shadow-md backdrop-blur-xl transition-all duration-700 border-cyan-200 bg-black/5" data-animate="" style={{}}>
<div className="absolute -top-3 left-5 inline-flex h-7 w-7 items-center justify-center rounded-full border border-green-500/30 bg-green-500/15 text-sm shadow-md text-green-700 font-sans">2</div>
<div className="mt-2 flex items-center gap-2">
<svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7h18"></path><path d="M6 3h12v4H6z"></path><path d="M3 7v11a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V7"></path><path d="M8 11h8"></path><path d="M8 15h5"></path></svg>
<h3 className="font-medium text-slate-900 font-sans" style={{fontFamily: 'Inter'}}>Choose repair or re‑roof</h3>
</div>
<p className="mt-2 text-[14px] text-slate-600 font-sans" style={{fontFamily: 'Inter'}}>Get a clear estimate with options and timing. No surprises or hidden fees.</p>
</li>
<li className="relative rounded-xl border p-5 shadow-md backdrop-blur-xl transition-all duration-700 border-cyan-200 bg-black/5" data-animate="" style={{}}>
<div className="absolute -top-3 left-5 inline-flex h-7 w-7 items-center justify-center rounded-full border border-green-500/30 bg-green-500/15 text-sm shadow-md text-green-700 font-sans">3</div>
<div className="mt-2 flex items-center gap-2">
<svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 21h18"></path><path d="M7 21V8l5-3 5 3v13"></path><path d="M7 13h10"></path><path d="M10 16h4"></path></svg>
<h3 className="font-medium text-slate-900 font-sans" style={{fontFamily: 'Inter'}}>Install and guarantee</h3>
</div>
<p className="mt-2 text-[14px] text-slate-600 font-sans" style={{fontFamily: 'Inter'}}>We do the work right, clean up, and back it with up to a 10‑year warranty.</p>
</li>
</ol>
</div>
</section>

<section className="px-4 sm:px-6 lg:px-10 pt-6 pb-10" id="reasons">
<div className="mx-auto max-w-7xl">
<div className="flex items-end justify-between mb-4">
<h2 className="tracking-tight text-slate-900 font-bricolage font-semibold" style={{fontFamily: '\'Space Grotesk\', ui-sans-serif', fontSize: 'clamp(24px,3vw,32px)', fontWeight: '500', letterSpacing: '-0.02em'}}>Why choose E &amp; E Roofing</h2>
<p className="text-sm text-slate-600 font-sans" style={{fontFamily: 'Inter'}}>Local. Licensed. Transparent.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="rounded-xl border p-5 shadow-md backdrop-blur-xl border-cyan-200 bg-black/5">
<div className="flex items-center gap-2">
<svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<h3 className="font-medium text-slate-900 font-sans" style={{fontFamily: 'Inter'}}>Licensed, bonded, insured</h3>
</div>
<p className="mt-2 text-[14px] text-slate-600 font-sans" style={{fontFamily: 'Inter'}}>We follow code, pull permits when needed, and document the job.</p>
</div>
<div className="rounded-xl border p-5 shadow-md backdrop-blur-xl border-cyan-200 bg-black/5">
<div className="flex items-center gap-2">
<svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h6l3-9 3 18 3-9h3"></path></svg>
<h3 className="font-medium text-slate-900 font-sans" style={{fontFamily: 'Inter'}}>Fast storm response</h3>
</div>
<p className="mt-2 text-[14px] text-slate-600 font-sans" style={{fontFamily: 'Inter'}}>Tarping and temporary dry‑ins within 24–48 hours when weather hits.</p>
</div>
<div className="rounded-xl border p-5 shadow-md backdrop-blur-xl border-cyan-200 bg-black/5">
<div className="flex items-center gap-2">
<svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7h18"></path><path d="M3 12h18"></path><path d="M3 17h18"></path></svg>
<h3 className="font-medium text-slate-900 font-sans" style={{fontFamily: 'Inter'}}>Clear, written estimates</h3>
</div>
<p className="mt-2 text-[14px] text-slate-600 font-sans" style={{fontFamily: 'Inter'}}>Line‑item breakdowns with photos so you understand the scope.</p>
</div>
<div className="rounded-xl border p-5 shadow-md backdrop-blur-xl border-cyan-200 bg-black/5">
<div className="flex items-center gap-2">
<svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><path d="M7 4h10v6H7z"></path></svg>
<h3 className="font-medium text-slate-900 font-sans" style={{fontFamily: 'Inter'}}>Clean and respectful crews</h3>
</div>
<p className="mt-2 text-[14px] text-slate-600 font-sans" style={{fontFamily: 'Inter'}}>We protect landscaping, magnets for nails, and daily cleanup.</p>
</div>
<div className="rounded-xl border p-5 shadow-md backdrop-blur-xl border-cyan-200 bg-black/5">
<div className="flex items-center gap-2">
<svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v18"></path><path d="M4 7h16"></path><path d="M4 17h16"></path></svg>
<h3 className="font-medium text-slate-900 font-sans" style={{fontFamily: 'Inter'}}>Quality materials</h3>
</div>
<p className="mt-2 text-[14px] text-slate-600 font-sans" style={{fontFamily: 'Inter'}}>We use code‑approved products and proper ventilation for long life.</p>
</div>
<div className="rounded-xl border p-5 shadow-md backdrop-blur-xl border-cyan-200 bg-black/5">
<div className="flex items-center gap-2">
<svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 10h-3l-4 8-4-16-3 8H3"></path></svg>
<h3 className="font-medium text-slate-900 font-sans" style={{fontFamily: 'Inter'}}>Photo updates</h3>
</div>
<p className="mt-2 text-[14px] text-slate-600 font-sans" style={{fontFamily: 'Inter'}}>We keep you informed with progress photos and texts.</p>
</div>
</div>
</div>
</section>

<section className="px-4 sm:px-6 lg:px-10 pt-6 pb-10" id="features">
<div className="mx-auto max-w-7xl">
<div className="flex items-end justify-between mb-4">
<h2 className="tracking-tight text-slate-900 font-bricolage font-semibold" style={{fontFamily: '\'Space Grotesk\', ui-sans-serif', fontSize: 'clamp(24px,3vw,32px)', fontWeight: '500', letterSpacing: '-0.02em'}}>What’s included with every job</h2>
<p className="text-sm text-slate-600 font-sans" style={{fontFamily: 'Inter'}}>No shortcuts—ever</p>
</div>
<div className="grid md:grid-cols-2 gap-4">
<div className="rounded-2xl border p-5 shadow-md backdrop-blur-xl border-cyan-200 bg-black/5">
<div className="flex items-center gap-2 mb-2">
<svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<h3 className="font-medium text-slate-900 font-sans" style={{fontFamily: 'Inter'}}>Professional prep and protection</h3>
</div>
<ul className="space-y-1.5 text-[14px] text-slate-600" style={{fontFamily: 'Inter'}}>
<li className="font-sans">• Property protection and safety setup</li>
<li className="font-sans">• Deck inspection and plywood replacement as needed</li>
<li className="font-sans">• Proper underlayment and flashing details</li>
<li className="font-sans">• Attic ventilation per code</li>
</ul>
</div>
<div className="rounded-2xl border p-5 shadow-md backdrop-blur-xl border-cyan-200 bg-black/5">
<div className="flex items-center gap-2 mb-2">
<svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h18"></path><path d="M3 6h18"></path><path d="M3 18h18"></path></svg>
<h3 className="font-medium text-slate-900 font-sans" style={{fontFamily: 'Inter'}}>Clear paperwork and warranty</h3>
</div>
<ul className="space-y-1.5 text-[14px] text-slate-600" style={{fontFamily: 'Inter'}}>
<li className="font-sans">• Written estimate and change orders</li>
<li className="font-sans">• Photo report before, during, and after</li>
<li className="font-sans">• Up to 10‑year workmanship warranty</li>
<li className="font-sans">• Help with insurance and escrow docs</li>
</ul>
</div>
</div>
</div>
</section>

<section className="px-4 sm:px-6 lg:px-10 pt-6 pb-12" id="faq">
<div className="mx-auto max-w-7xl">
<div className="flex items-end justify-between mb-4">
<h2 className="tracking-tight text-slate-900 font-bricolage font-semibold" style={{fontFamily: '\'Space Grotesk\', ui-sans-serif', fontSize: 'clamp(24px,3vw,32px)', fontWeight: '500', letterSpacing: '-0.02em'}}>Frequently asked questions</h2>
<p className="text-sm text-slate-600 font-sans" style={{fontFamily: 'Inter'}}>Quick answers</p>
</div>
<div className="grid md:grid-cols-2 gap-4">
<details className="group rounded-xl border p-4 shadow-md backdrop-blur-xl border-cyan-200 bg-black/5">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="font-medium text-slate-800 font-sans" style={{fontFamily: 'Inter'}}>How fast can you come out?</span>
<span className="group-open:rotate-180 transition-transform text-slate-600">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<p className="mt-2 text-[14px] text-slate-600 font-sans" style={{fontFamily: 'Inter'}}>Usually within 24–48 hours. During storms, we prioritize active leaks and can install a tarp the same day.</p>
</details>
<details className="group rounded-xl border p-4 shadow-md backdrop-blur-xl border-cyan-200 bg-black/5">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="font-medium text-slate-800 font-sans" style={{fontFamily: 'Inter'}}>Do you work with tile, shingle, and flat roofs?</span>
<span className="group-open:rotate-180 transition-transform text-slate-600">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<p className="mt-2 text-[14px] text-slate-600 font-sans" style={{fontFamily: 'Inter'}}>Yes. We repair and replace asphalt shingles, clay and concrete tile, and low‑slope systems with cool‑roof options.</p>
</details>
<details className="group rounded-xl border p-4 shadow-md backdrop-blur-xl border-cyan-200 bg-black/5">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="font-medium text-slate-800 font-sans" style={{fontFamily: 'Inter'}}>Will you help with insurance or escrow?</span>
<span className="group-open:rotate-180 transition-transform text-slate-600">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<p className="mt-2 text-[14px] text-slate-600 font-sans" style={{fontFamily: 'Inter'}}>We provide photos, scopes, and invoices that meet lender and adjuster requirements. We can speak with them if needed.</p>
</details>
<details className="group rounded-xl border p-4 shadow-md backdrop-blur-xl border-cyan-200 bg-black/5">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="font-medium text-slate-800 font-sans" style={{fontFamily: 'Inter'}}>How long does a roof replacement take?</span>
<span className="group-open:rotate-180 transition-transform text-slate-600">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<p className="mt-2 text-[14px] text-slate-600 font-sans" style={{fontFamily: 'Inter'}}>Most homes take 1–3 days depending on size, material, and wood repair needs. We’ll give you exact timing up front.</p>
</details>
</div>
</div>
</section>

<section className="sm:px-6 lg:px-10 pt-4 pr-4 pb-14 pl-4" id="contact">
<div className="mx-auto max-w-7xl">
<div className="grid lg:grid-cols-2 gap-6 items-stretch">

<div className="relative overflow-hidden rounded-2xl border shadow-md backdrop-blur-xl border-cyan-200 bg-black/5">
<div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 pointer-events-none via-slate-100/0 to-slate-50/30"></div>
<div className="p-6 sm:p-8">
<h3 className="tracking-tight text-slate-900 font-bricolage font-semibold" style={{fontFamily: '\'Space Grotesk\', ui-sans-serif', fontSize: 'clamp(22px,2.6vw,28px)', fontWeight: '500', letterSpacing: '-0.02em'}}>
                  Ready for a leak‑free roof?
                </h3>
<p className="mt-2 text-slate-700 font-sans" style={{fontFamily: 'Inter'}}>Call now or request your free estimate. We’ll respond the same day.</p>
<div className="mt-5 grid sm:grid-cols-2 gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-3 hover:border-green-500/40 transition-colors border-cyan-200 bg-black/5 text-slate-800 hover:bg-black/10 font-sans" href="tel:+18055900908">
<svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.09 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.78.59 2.63a2 2 0 0 1-.45 2.11L8 9a16 16 0 0 0 6 6l.54-.2a2 2 0 0 1 2.11.45c.85.27 1.73.47 2.63.59A2 2 0 0 1 22 16.92z"></path></svg>
                    Ventura (805) 590‑0908
                  </a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-3 hover:border-green-500/40 transition-colors border-cyan-200 bg-black/5 text-slate-800 hover:bg-black/10 font-sans" href="tel:+18182001334">
<svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.09 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.78.59 2.63a2 2 0 0 1-.45 2.11L8 9a16 16 0 0 0 6 6l.54-.2a2 2 0 0 1 2.11.45c.85.27 1.73.47 2.63.59A2 2 0 0 1 22 16.92z"></path></svg>
                    Tarzana (818) 200‑1334
                  </a>
</div>
<div className="mt-6 inline-flex items-center gap-2 rounded-lg border border-green-500/20 bg-green-500/10 px-3 py-1.5 text-[13px] text-green-800 font-sans">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
                  Same‑day call back guaranteed
                </div>
</div>
<img alt="Crew on roof with safety gear" className="w-full h-48 object-cover border-t border-cyan-200" src="https://irp.cdn-website.com/013b6f78/dms3rep/multi/photo_4985667105022127960_y-d8c2f9c4.jpg?w=800&amp;q=80" style={{}}/>
</div>

<div className="rounded-2xl border p-6 sm:p-8 shadow-md backdrop-blur-xl border-cyan-200 bg-black/5" id="quote">
<h3 className="tracking-tight text-slate-900 font-bricolage font-semibold" style={{fontFamily: '\'Space Grotesk\', ui-sans-serif', fontSize: 'clamp(20px,2.4vw,26px)', fontWeight: '500', letterSpacing: '-0.01em'}}>Request your free estimate</h3>
<p className="mt-1 text-[14px] text-slate-600 font-sans" style={{fontFamily: 'Inter'}}>Tell us a bit about your roof. We’ll reach out today.</p>
<form action="#" className="mt-5 grid grid-cols-1 gap-3" method="post" onsubmit="event.preventDefault(); this.reset(); document.getElementById('form-success').classList.remove('hidden');">
<div className="grid sm:grid-cols-2 gap-3">
<label className="block">
<span className="text-[13px] text-slate-700 font-sans" style={{fontFamily: 'Inter'}}>Full name</span>
<input className="mt-1 w-full rounded-lg border px-3 py-2 placeholder-slate-500 outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/30 border-cyan-200 bg-slate-100/70 text-slate-800" name="name" placeholder="Jane Doe" required="" type="text"/>
</label>
<label className="block">
<span className="text-[13px] text-slate-700 font-sans" style={{fontFamily: 'Inter'}}>Phone</span>
<input className="mt-1 w-full rounded-lg border px-3 py-2 placeholder-slate-500 outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/30 border-cyan-200 bg-slate-100/70 text-slate-800" name="phone" placeholder="(805) 555‑1234" required="" type="tel"/>
</label>
</div>
<label className="block">
<span className="text-[13px] text-slate-700 font-sans" style={{fontFamily: 'Inter'}}>Email</span>
<input className="mt-1 w-full rounded-lg border px-3 py-2 placeholder-slate-500 outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/30 border-cyan-200 bg-slate-100/70 text-slate-800" name="email" placeholder="you@email.com" required="" type="email"/>
</label>
<label className="block">
<span className="text-[13px] text-slate-700 font-sans" style={{fontFamily: 'Inter'}}>Address (for scheduling)</span>
<input className="mt-1 w-full rounded-lg border px-3 py-2 placeholder-slate-500 outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/30 border-cyan-200 bg-slate-100/70 text-slate-800" name="address" placeholder="123 Main St, Ventura" type="text"/>
</label>
<label className="block">
<span className="text-[13px] text-slate-700 font-sans" style={{fontFamily: 'Inter'}}>What’s going on?</span>
<textarea className="mt-1 w-full rounded-lg border px-3 py-2 placeholder-slate-500 outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/30 border-cyan-200 bg-slate-100/70 text-slate-800" name="message" placeholder="Leak, missing shingles, old roof, etc." rows="4"></textarea>
</label>
<div className="grid sm:grid-cols-2 gap-3">
<label className="inline-flex items-center gap-2 text-[13px] text-slate-700 font-sans">
<input className="h-4 w-4 rounded text-green-500 focus:ring-green-500/40 border-cyan-300 bg-slate-100" name="emergency" type="checkbox"/>
                    It’s an emergency leak
                  </label>
<label className="inline-flex items-center gap-2 text-[13px] text-slate-700 font-sans">
<input className="h-4 w-4 rounded text-green-500 focus:ring-green-500/40 border-cyan-300 bg-slate-100" name="photos" type="checkbox"/>
                    I can text photos
                  </label>
</div>
<div aria-hidden="true" className="hidden">
<input autocomplete="off" name="company" tabindex="-1" type="text"/>
</div>
<button className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl border border-green-500/30 bg-green-500/15 px-5 py-2.5 hover:bg-green-500/25 hover:border-green-500/50 transition-all text-green-800 hover:text-green-900 font-sans" type="submit">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 2 11 13"></path><path d="M22 2 15 22 11 13 2 9l20-7z"></path></svg>
                  Send request
                </button>
<p className="hidden text-[13px] text-green-700 font-sans" id="form-success">Thanks! We’ll call you shortly to schedule.</p>
<p className="text-[12px] text-slate-500 font-sans">By submitting, you agree to be contacted about your project.</p>
</form>
</div>
</div>
</div>
</section>

<footer className="mt-auto px-4 sm:px-6 lg:px-10 pb-8 pt-6">
<div className="mx-auto max-w-7xl rounded-2xl border p-5 shadow-md backdrop-blur-xl border-cyan-200 bg-black/5">
<div className="grid md:grid-cols-3 gap-6">
<div>
<div className="flex items-center gap-2">
<div className="flex h-9 w-9 items-center justify-center rounded-md bg-green-500/15 border shadow-md border-cyan-200">
<span className="font-medium tracking-tight text-green-600 font-sans" style={{fontFamily: '\'Space Grotesk\'', fontSize: '15px'}}>E&amp;E</span>
</div>
<div>
<div className="text-slate-900 font-sans" style={{fontFamily: '\'Space Grotesk\'', fontWeight: '500'}}>E &amp; E Roofing</div>
<div className="text-[12px] text-slate-600 font-sans" style={{fontFamily: 'Inter'}}>CA License #1087571</div>
</div>
</div>
<p className="mt-3 text-[14px] text-slate-600 font-sans" style={{fontFamily: 'Inter'}}>Serving Ventura County, Santa Barbara County, and the San Fernando Valley.</p>
</div>
<div>
<h4 className="font-medium text-slate-800 font-sans" style={{fontFamily: 'Inter'}}>Quick links</h4>
<nav className="mt-2 grid grid-cols-2 gap-2 text-[14px]">
<a className="text-slate-600 hover:text-green-700 font-sans" href="#problems">Problems</a>
<a className="text-slate-600 hover:text-green-700 font-sans" href="#solutions">Solutions</a>
<a className="text-slate-600 hover:text-green-700 font-sans" href="#benefits">Benefits</a>
<a className="text-slate-600 hover:text-green-700 font-sans" href="#reviews">Testimonials</a>
<a className="text-slate-600 hover:text-green-700 font-sans" href="#steps">3 Steps</a>
<a className="text-slate-600 hover:text-green-700 font-sans" href="#reasons">Why Us</a>
<a className="text-slate-600 hover:text-green-700 font-sans" href="#features">Features</a>
<a className="text-slate-600 hover:text-green-700 font-sans" href="#faq">FAQ</a>
</nav>
</div>
<div>
<h4 className="font-medium text-slate-800 font-sans" style={{fontFamily: 'Inter'}}>Contact</h4>
<ul className="mt-2 space-y-2 text-[14px]">
<li><a className="text-slate-600 hover:text-green-700 font-sans" href="tel:+18055900908">Ventura: (805) 590‑0908</a></li>
<li><a className="text-slate-600 hover:text-green-700 font-sans" href="tel:+18182001334">Tarzana: (818) 200‑1334</a></li>
<li><a className="text-slate-600 hover:text-green-700 font-sans" href="mailto:hello@eeroofing.example">Email: hello@eeroofing.example</a></li>
</ul>
<div className="mt-3 inline-flex items-center gap-2 rounded-lg border px-2.5 py-1.5 text-[12px] border-cyan-200 bg-black/5 text-slate-600 font-sans">
<svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
                Mon–Sat • 7:00a–6:00p
              </div>
</div>
</div>
<div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-3 border-t pt-4 border-cyan-200">
<p className="text-[12px] text-slate-500 font-sans">© <span className="font-sans" id="year">2025</span> E &amp; E Roofing. All rights reserved.</p>
<p className="text-[12px] text-slate-500 font-sans">Made with care in Southern California.</p>
</div>
</div>
</footer>
</main>



    </>
  );
}
