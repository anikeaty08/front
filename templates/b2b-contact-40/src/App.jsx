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



      // Billing toggle
      (function () {
        const toggle = document.getElementById('billing-toggle');
        if (!toggle) return;
        // Ensure the toggle has a width to animate the knob
        toggle.classList.add('w-14', 'h-8');
        const knob = document.getElementById('billing-knob');
        let annual = false;

        function updatePrices() {
          document.querySelectorAll('.price-monthly').forEach(el => el.classList.toggle('hidden', annual));
          document.querySelectorAll('.price-annual').forEach(el => el.classList.toggle('hidden', !annual));
          knob.classList.toggle('translate-x-6', annual);
        }

        toggle.addEventListener('click', () => {
          annual = !annual;
          updatePrices();
        });

        updatePrices();
      })();

      // Fill hero corner badge if empty
      (function () {
        const badge = document.querySelector('.absolute.-bottom-4.-left-4 .border.rounded-lg');
        if (badge && badge.innerHTML.trim() === '') {
          badge.innerHTML = '<span class="inline-flex items-center gap-1.5 text-neutral-700"><svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/></svg> 2× faster enrichment</span>';
        }
      })();

      // Footer year
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
      

<div className="w-full border-b bg-orange-50 text-orange-800 border-orange-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 text-center text-[13px]">
        New: CSV enrichment is now 2x faster. Free plan includes 50 verified contacts.
      </div>
</div>

<header className="sticky top-0 z-50 border-b backdrop-blur-md border-neutral-200 bg-white/80">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="h-16 flex items-center justify-between">
<a className="inline-flex items-center gap-2 group" href="#">
<div className="h-7 w-7 rounded-md border grid place-items-center bg-neutral-100 border-neutral-200">
<span className="text-[13px] font-semibold tracking-tight text-neutral-900">SL</span>
</div>
<span className="text-[15px] font-medium tracking-tight text-neutral-900">SearchLeads</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-[14px]">
<a className="transition text-neutral-600 hover:text-neutral-900" href="#features">Features</a>
<a className="transition text-neutral-600 hover:text-neutral-900" href="#enrich">Enrich</a>
<a className="transition text-neutral-600 hover:text-neutral-900" href="#integrations">Integrations</a>
<a className="transition text-neutral-600 hover:text-neutral-900" href="#pricing">Pricing</a>
<a className="transition text-neutral-600 hover:text-neutral-900" href="#security">Privacy</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 rounded-md border px-3.5 py-2 text-[13px] transition border-neutral-300 text-neutral-700 hover:text-neutral-900 hover:border-neutral-400" href="#">
<svg className="lucide lucide-log-in w-4 h-4" data-lucide="log-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 17 5-5-5-5"></path><path d="M15 12H3"></path><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path></svg>
              Sign in
            </a>
<a className="inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-[13px] font-medium transition hover:bg-orange-500 text-white bg-orange-600" href="#">
<svg className="lucide lucide-zap w-4 h-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
              Start free
            </a>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl"></div>
<div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full blur-3xl bg-orange-400/10"></div>
</div>
<div className="sm:px-6 lg:px-8 sm:py-24 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="">
<div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[12px] mb-5 border-orange-200 bg-orange-50 text-orange-800">
<svg className="lucide lucide-database w-3.5 h-3.5 text-orange-600" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
              B2B Contact DB • Verified emails &amp; direct dials
            </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900">
              Find the right buyers. Verify in seconds. Close more deals.
            </h1>
<p className="mt-5 text-[15px] leading-relaxed text-neutral-600">
              Search 320M+ professional contacts and 25M+ companies. Filter by title, seniority, tech stack, funding, and more.
              Export or sync to your CRM with automatic email verification.
            </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-[14px] font-medium transition hover:bg-orange-500 text-white bg-orange-600" href="#">
<svg className="lucide lucide-rocket w-4.5 h-4.5" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
                Start free — 50 credits
              </a>
<a className="inline-flex items-center justify-center gap-2 rounded-md border px-5 py-3 text-[14px] transition border-neutral-300 bg-white text-neutral-700 hover:text-neutral-900 hover:border-neutral-400 hover:bg-neutral-50" href="#">
<svg className="lucide lucide-calendar w-4.5 h-4.5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
                Book a demo
              </a>
</div>
</div>

<div className="relative">
<div className="rounded-xl border p-5 sm:p-6 shadow-2xl border-neutral-200 bg-white">
<div className="flex mb-4 items-center justify-between">
<div className="text-[13px] text-neutral-600">Quick search</div>
<div className="inline-flex items-center gap-2 text-[12px] text-neutral-500">
<svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                  320M+ contacts
                </div>
<span className="inline-flex items-center gap-1.5 text-neutral-600"><svg className="lucide lucide-sparkles w-3.5 h-3.5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg> Enrich CSVs in bulk</span></div>
<div className="space-y-3">
<div className="relative">
<label className="sr-only">Job title</label>
<div className="flex items-center gap-2 rounded-md border px-3 py-2.5 focus-within:border-neutral-300 border-neutral-200 bg-neutral-50">
<svg className="lucide lucide-briefcase w-4.5 h-4.5 text-neutral-400" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
<input className="w-full bg-transparent outline-none text-[14px] placeholder:text-neutral-400" placeholder="Job title e.g. VP Sales" type="text"/>
<button className="inline-flex items-center gap-1.5 rounded px-2 py-1 text-[12px] hover:bg-orange-50 text-neutral-700 hover:text-neutral-900">
<svg className="lucide lucide-plus w-3.5 h-3.5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg> Add
                    </button>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="flex items-center gap-2 rounded-md border px-3 py-2.5 focus-within:border-neutral-300 border-neutral-200 bg-neutral-50">
<svg className="lucide lucide-building-2 w-4.5 h-4.5 text-neutral-400" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>
<input className="w-full bg-transparent outline-none text-[14px] placeholder:text-neutral-400" placeholder="Company" type="text"/>
</div>
<div className="flex items-center gap-2 rounded-md border px-3 py-2.5 focus-within:border-neutral-300 border-neutral-200 bg-neutral-50">
<svg className="lucide lucide-map-pin w-4.5 h-4.5 text-neutral-400" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<input className="w-full bg-transparent outline-none text-[14px] placeholder:text-neutral-400" placeholder="Location" type="text"/>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="flex items-center gap-2 rounded-md border px-3 py-2.5 border-neutral-200 bg-neutral-50">
<svg className="lucide lucide-layers w-4.5 h-4.5 text-neutral-400" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
<select className="w-full bg-transparent outline-none text-[14px] text-neutral-800">
<option className="bg-white text-neutral-800" value="">Seniority</option>
<option className="bg-white text-neutral-800">C-Level</option>
<option className="bg-white text-neutral-800">VP</option>
<option className="bg-white text-neutral-800">Director</option>
<option className="bg-white text-neutral-800">Manager</option>
<option className="bg-white text-neutral-800">IC</option>
</select>
</div>
<div className="flex items-center gap-2 rounded-md border px-3 py-2.5 border-neutral-200 bg-neutral-50">
<svg className="lucide lucide-server w-4.5 h-4.5 text-neutral-400" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
<select className="w-full bg-transparent outline-none text-[14px] text-neutral-800">
<option className="bg-white text-neutral-800" value="">Company size</option>
<option className="bg-white text-neutral-800">1-10</option>
<option className="bg-white text-neutral-800">11-50</option>
<option className="bg-white text-neutral-800">51-200</option>
<option className="bg-white text-neutral-800">201-1000</option>
<option className="bg-white text-neutral-800">1000+</option>
</select>
</div>
</div>
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 text-[12px] text-neutral-600">
<svg className="lucide lucide-mail-check w-4 h-4" data-lucide="mail-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"></path><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path><path d="m16 19 2 2 4-4"></path></svg>
                    Email verification on export
                  </div>
<button className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-[13px] font-medium transition hover:bg-orange-500 text-white bg-orange-600">
<svg className="lucide lucide-search w-4.5 h-4.5" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
                    Search
                  </button>
</div>
</div>
<div className="mt-5 border-t pt-4 border-neutral-200">
<div className="text-[12px] mb-2 text-neutral-600">Sample results</div>
<div className="grid sm:grid-cols-2 gap-3">

<div className="rounded-md border p-3 transition border-neutral-200 bg-white hover:border-neutral-300">
<div className="flex items-center gap-3">
<img alt="" className="w-9 h-9 rounded-full border border-neutral-200" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="min-w-0">
<div className="text-[14px] font-medium tracking-tight text-neutral-900">Maria Chen</div>
<div className="text-[12px] truncate text-neutral-600">VP Sales • HexaCloud</div>
</div>
</div>
<div className="mt-3 flex items-center justify-between text-[12px] text-neutral-600">
<span className="inline-flex items-center gap-1.5"><svg className="lucide lucide-mail w-3.5 h-3.5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>Verified</span>
<span className="inline-flex items-center gap-1.5"><svg className="lucide lucide-phone w-3.5 h-3.5" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>Direct dial</span>
</div>
</div>
<div className="rounded-md border p-3 transition border-neutral-200 bg-white hover:border-neutral-300">
<div className="flex items-center gap-3">
<img alt="" className="w-9 h-9 rounded-full border border-neutral-200" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="min-w-0">
<div className="text-[14px] font-medium tracking-tight text-neutral-900">Aiden Patel</div>
<div className="text-[12px] truncate text-neutral-600">Head of Marketing • DataForge</div>
</div>
</div>
<div className="mt-3 flex items-center justify-between text-[12px] text-neutral-600">
<span className="inline-flex items-center gap-1.5"><svg className="lucide lucide-mail w-3.5 h-3.5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>Verified</span>
<span className="inline-flex items-center gap-1.5"><svg className="lucide lucide-building w-3.5 h-3.5" data-lucide="building" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M12 6h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M16 6h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path><path d="M8 6h.01"></path><path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path><rect height="20" rx="2" width="16" x="4" y="2"></rect></svg>HQ: NYC</span>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-4 -left-4">
</div>
</div>
</div>
</div>
</section>


<section className="border-t border-neutral-200" id="features">
<div className="sm:px-6 lg:px-8 sm:py-24 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">All-in-one B2B contact database</h2>
<p className="mt-3 text-[15px] text-neutral-600">Search, verify, enrich, and sync—built for modern GTM teams that need precision and scale.</p>
</div>
<div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="rounded-lg border p-5 transition border-neutral-200 bg-white hover:border-neutral-300">
<div className="flex items-center gap-2 text-[13px] mb-2 text-neutral-600">
<svg className="lucide lucide-filter w-4.5 h-4.5" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg> Precision filters
            </div>
<h3 className="text-[18px] font-medium tracking-tight text-neutral-900">Segment by title, seniority, industry, tech stack</h3>
<p className="mt-2 text-[14px] text-neutral-600">Stack filters and get only the contacts that match your ICP. Save segments for one-click updates.</p>
</div>
<div className="rounded-lg border p-5 transition border-neutral-200 bg-white hover:border-neutral-300">
<div className="flex items-center gap-2 text-[13px] mb-2 text-neutral-600">
<svg className="lucide lucide-mail-check w-4.5 h-4.5" data-lucide="mail-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"></path><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path><path d="m16 19 2 2 4-4"></path></svg> Verified emails
            </div>
<h3 className="text-[18px] font-medium tracking-tight text-neutral-900">Automatic verification on export</h3>
<p className="mt-2 text-[14px] text-neutral-600">Reduce bounces with real-time checks and confidence scoring visible before you spend credits.</p>
</div>
<div className="rounded-lg border p-5 transition border-neutral-200 bg-white hover:border-neutral-300">
<div className="flex items-center gap-2 text-[13px] mb-2 text-neutral-600">
<svg className="lucide lucide-phone w-4.5 h-4.5" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg> Direct dials
            </div>
<h3 className="text-[18px] font-medium tracking-tight text-neutral-900">Reach decision makers faster</h3>
<p className="mt-2 text-[14px] text-neutral-600">Access high-signal contact channels including direct dials and social profiles where available.</p>
</div>
<div className="rounded-lg border p-5 transition border-neutral-200 bg-white hover:border-neutral-300">
<div className="flex items-center gap-2 text-[13px] mb-2 text-neutral-600">
<svg className="lucide lucide-upload-cloud w-4.5 h-4.5" data-lucide="upload-cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 13v8"></path><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="m8 17 4-4 4 4"></path></svg> Bulk CSV enrich
            </div>
<h3 className="text-[18px] font-medium tracking-tight text-neutral-900">Turn lists into qualified pipelines</h3>
<p className="mt-2 text-[14px] text-neutral-600">Upload a CSV of names or domains and enrich with titles, emails, phone, company insights, and technographics.</p>
</div>
<div className="rounded-lg border p-5 transition border-neutral-200 bg-white hover:border-neutral-300">
<div className="flex items-center gap-2 text-[13px] mb-2 text-neutral-600">
<svg className="lucide lucide-link w-4.5 h-4.5" data-lucide="link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg> CRM &amp; outreach sync
            </div>
<h3 className="text-[18px] font-medium tracking-tight text-neutral-900">Push to your tools with one click</h3>
<p className="mt-2 text-[14px] text-neutral-600">Sync to CRM and outbound platforms while de-duplicating to keep records clean.</p>
</div>
<div className="rounded-lg border p-5 transition border-neutral-200 bg-white hover:border-neutral-300">
<div className="flex items-center gap-2 text-[13px] mb-2 text-neutral-600">
<svg className="lucide lucide-lock w-4.5 h-4.5" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> Privacy-first
            </div>
<h3 className="text-[18px] font-medium tracking-tight text-neutral-900">Compliant by design</h3>
<p className="mt-2 text-[14px] text-neutral-600">Data governance, suppression, and removal controls baked-in for global compliance.</p>
</div>
</div>
</div>
</section>

<section className="border-t border-neutral-200">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
<div className="grid lg:grid-cols-2 gap-10 items-start">
<div className="">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">Enrich your lists at scale</h2>
<p className="mt-3 text-[15px] text-neutral-600">Drop in a CSV, choose fields, and enrich. We’ll verify emails and flag risky addresses before export.</p>
<ul className="mt-6 space-y-3 text-[14px] text-neutral-700">
<li className="inline-flex items-center gap-2"><svg className="lucide lucide-check w-4.5 h-4.5 text-orange-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Name, title, seniority, and department</li>
<li className="inline-flex items-center gap-2"><svg className="lucide lucide-check w-4.5 h-4.5 text-orange-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Company size, industry, HQ, and technographics</li>
<li className="inline-flex items-center gap-2"><svg className="lucide lucide-check w-4.5 h-4.5 text-orange-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Verified emails and optional direct dials</li>
<li className="inline-flex items-center gap-2"><svg className="lucide lucide-check w-4.5 h-4.5 text-orange-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Dupe prevention and do-not-contact handling</li>
</ul>
<div className="mt-7 inline-flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-[13px] font-medium transition hover:bg-orange-500 text-white bg-orange-600" href="#">
<svg className="lucide lucide-upload w-4.5 h-4.5" data-lucide="upload" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v12"></path><path d="m17 8-5-5-5 5"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path></svg>
                Upload CSV
              </a>
<a className="inline-flex items-center gap-2 rounded-md border px-4 py-2.5 text-[13px] transition border-neutral-300 bg-white text-neutral-700 hover:text-neutral-900 hover:border-neutral-400 hover:bg-neutral-50" href="#">
<svg className="lucide lucide-file-text w-4.5 h-4.5" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
                Download sample
              </a>
</div>
<div className="mt-5 text-[12px] text-neutral-500">Free plan includes 1 CSV enrichment up to 500 rows.</div>
</div>
<div className="rounded-xl border p-5 border-neutral-200 bg-white">
<div className="flex items-center justify-between mb-3">
<div className="text-[13px] text-neutral-600">Enrichment preview</div>
<div className="inline-flex items-center gap-2 text-[12px] text-neutral-500">
<svg className="lucide lucide-activity w-4 h-4" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
                Real-time checks
              </div>
</div>
<div className="rounded-md border overflow-hidden border-neutral-200 bg-white">
<div className="grid grid-cols-5 gap-px">
<div className="bg-transparent px-3 py-2 text-[12px] text-neutral-500">Name</div>
<div className="bg-transparent px-3 py-2 text-[12px] text-neutral-500">Title</div>
<div className="bg-transparent px-3 py-2 text-[12px] text-neutral-500">Company</div>
<div className="bg-transparent px-3 py-2 text-[12px] text-neutral-500">Email</div>
<div className="text-[12px] bg-transparent max-w-2xl mx-9 pt-2 pr-3 pb-2 pl-3 text-neutral-500">Status</div>
</div>
<div className="divide-y divide-neutral-200">
<div className="grid grid-cols-5">
<div className="px-3 py-2 text-[13px]">Maria Chen</div>
<div className="px-3 py-2 text-[13px]">VP Sales</div>
<div className="px-3 py-2 text-[13px]">HexaCloud</div>
<div className="px-3 py-2 text-[13px]">maria@hexacloud.com</div>
<div className="text-[13px] inline-flex gap-1.5 mx-9 pt-2 pr-3 pb-2 pl-3 items-center text-orange-600"><svg className="lucide lucide-check-circle w-4 h-4" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> Valid</div>
</div>
<div className="grid grid-cols-5">
<div className="px-3 py-2 text-[13px]">Aiden Patel</div>
<div className="px-3 py-2 text-[13px]">Head of Marketing</div>
<div className="px-3 py-2 text-[13px]">DataForge</div>
<div className="px-3 py-2 text-[13px]">a.patel@dataforge.io</div>
<div className="text-[13px] inline-flex gap-1.5 mr-9 ml-9 pt-2 pr-3 pb-2 pl-3 items-center text-yellow-500">Catch-all-Valid<svg className="lucide lucide-alert-circle w-4 h-4" data-lucide="alert-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg></div></div>
<div className="grid grid-cols-5">
<div className="px-3 py-2 text-[13px]">Leah Park</div>
<div className="px-3 py-2 text-[13px]">Director, RevOps</div>
<div className="px-3 py-2 text-[13px]">NimbusAI</div>
<div className="px-3 py-2 text-[13px]">leah@nimbus.ai</div>
<div className="px-3 py-2 text-[13px] inline-flex items-center gap-1.5 text-rose-500"><svg className="lucide lucide-x-circle w-4 h-4" data-lucide="x-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg> Risky</div>
</div>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="text-[12px] text-neutral-600">Duplicates removed automatically</div>
<button className="inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-[13px] font-medium transition hover:bg-orange-500 text-white bg-orange-600">
<svg className="lucide lucide-download w-4.5 h-4.5" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
                Export CSV
              </button>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-neutral-200" id="integrations">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">Works with your stack</h2>
<p className="mt-3 text-[15px] text-neutral-600">Send contacts where your team works and keep records fresh with two-way sync.</p>
</div>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="rounded-lg border p-4 border-neutral-200 bg-white">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 text-[14px] font-medium tracking-tight text-neutral-900">
<span className="rounded-sm border px-1.5 py-0.5 text-[12px] border-neutral-200 bg-neutral-50 text-neutral-700">SF</span>
                Salesforce
              </div>
<svg className="lucide lucide-chevron-right w-4 h-4 text-neutral-400" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
<p className="mt-2 text-[13px] text-neutral-600">Push leads and companies, map fields, and de-dupe by domain.</p>
</div>
<div className="rounded-lg border p-4 border-neutral-200 bg-white">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 text-[14px] font-medium tracking-tight text-neutral-900">
<span className="rounded-sm border px-1.5 py-0.5 text-[12px] border-neutral-200 bg-neutral-50 text-neutral-700">HB</span>
                HubSpot
              </div>
<svg className="lucide lucide-chevron-right w-4 h-4 text-neutral-400" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
<p className="mt-2 text-[13px] text-neutral-600">Create contacts/companies, update properties, auto-owner assignment.</p>
</div>
<div className="rounded-lg border p-4 border-neutral-200 bg-white">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 text-[14px] font-medium tracking-tight text-neutral-900">
<span className="rounded-sm border px-1.5 py-0.5 text-[12px] border-neutral-200 bg-neutral-50 text-neutral-700">PD</span>
                Pipedrive
              </div>
<svg className="lucide lucide-chevron-right w-4 h-4 text-neutral-400" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
<p className="mt-2 text-[13px] text-neutral-600">Create people/organizations with clean labels and stages.</p>
</div>
<div className="rounded-lg border p-4 border-neutral-200 bg-white">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 text-[14px] font-medium tracking-tight text-neutral-900">
<span className="rounded-sm border px-1.5 py-0.5 text-[12px] border-neutral-200 bg-neutral-50 text-neutral-700">SL</span>
                Salesloft
              </div>
<svg className="lucide lucide-chevron-right w-4 h-4 text-neutral-400" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
<p className="mt-2 text-[13px] text-neutral-600">Add to cadences with verified email gating.</p>
</div>
<div className="rounded-lg border p-4 border-neutral-200 bg-white">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 text-[14px] font-medium tracking-tight text-neutral-900">
<span className="rounded-sm border px-1.5 py-0.5 text-[12px] border-neutral-200 bg-neutral-50 text-neutral-700">OR</span>
                Outreach
              </div>
<svg className="lucide lucide-chevron-right w-4 h-4 text-neutral-400" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
<p className="mt-2 text-[13px] text-neutral-600">Create prospects and throttle adds to avoid send spikes.</p>
</div>
<div className="rounded-lg border p-4 border-neutral-200 bg-white">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 text-[14px] font-medium tracking-tight text-neutral-900">
<span className="rounded-sm border px-1.5 py-0.5 text-[12px] border-neutral-200 bg-neutral-50 text-neutral-700">GH</span>
                Google Sheets
              </div>
<svg className="lucide lucide-chevron-right w-4 h-4 text-neutral-400" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
<p className="mt-2 text-[13px] text-neutral-600">Sync sheets or paste rows for instant enrichment.</p>
</div>
</div>
</div>
</section>

<section className="border-t border-neutral-200" id="pricing">
<div className="sm:px-6 lg:px-8 sm:py-24 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb- pl-4">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">Simple, usage-based pricingh2&gt;
          <p className="mt-3 text-[15px] text-neutral-600">Pay for verified contacts. Switch plans anytime.</p>
</h2></div>

<div className="mt-6 flex items-center gap-3">
<span className="text-[13px] text-neutral-600">Monthly</span>
<button aria-checked="false" aria-label="Toggle billing period" className="relative inline-flex items-center rounded-full border p-1 transition w-14 h-8 border-neutral-300 bg-neutral-100" id="billing-toggle" role="switch" type="button">
<span className="inline-block h-6 w-6 rounded-full border shadow-sm translate-x-0 transition-transform duration-200 ease-in-out bg-white border-neutral-300" id="billing-knob"></span>
<span aria-hidden="true" className="absolute inset-0 rounded-full pointer-events-none"></span>
</button>
<span className="text-[13px] text-neutral-900">Annually</span>
<span className="inline-flex items-center rounded-full px-2 py-0.5 text-[11px bg-orange-100 text-orange-700">Save 20%</span>
</div>

<div className="grid md:grid-cols-3 gap-6 mt-8">

<div className="rounded-xl border p-6 flex flex-col border-neutral-200 bg-white">
<div className="flex items-center justify-between">
<h3 className="text-[18px] font-medium tracking-tight text-neutral-900">Free</h3>
<span className="text-[12px] rounded-full px-2 py-0.5 bg-neutral-100 text-neutral-700">No credit card</span>
</div>
<div className="mt-4">
<div className="text-3xl font-semibold text-neutral-900">$0</div>
<div className="text-[13px] text-neutral-600">forever</div>
</div>
<ul className="mt-5 space-y-2 text-[14px] text-neutral-700">
<li className="inline-flex items-center gap-2"><svg className="w-4.5 h-4.5 text-orange-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 50 verified credits</li>
<li className="inline-flex items-center gap-2"><svg className="w-4.5 h-4.5 text-orange-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 1 CSV enrichment (500 rows)</li>
<li className="inline-flex items-center gap-2"><svg className="w-4.5 h-4.5 text-orange-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Basic filters</li>
</ul>
<div className="mt-6">
<a className="inline-flex w-full items-center justify-center gap-2 rounded-md border px-4 py-2.5 text-[13px] font-medium transition border-neutral-300 bg-white text-neutral-700 hover:border-neutral-400 hover:bg-neutral-50 hover:text-neutral-900" href="#">Start free</a>
</div>
</div>

<div className="relative rounded-xl border p-6 ring-1 ring-transparent transition flex flex-col border-orange-200 bg-orange-50/40 hover:ring-orange-100">
<div className="absolute -top- right-4 rounded-full text-[11px] px-2 py-0.5 bg-orange-600 text-white">Popular</div>
<div className="flex items-center justify-between">
<h3 className="text-[18px] font-medium tracking-tight text-neutral-900">Growth</h3>
</div>
<div className="mt-4">
<div className="price-monthly text-3xl font-semibold text-neutral-900">$79<span className="text-[13px] font-normal text-neutral-600">/mo</span></div>
<div className="price-annual hidden text-3xl font-semibold text-neutral-900">$63<span className="text-[13px] font-normal text-neutral-600">/mo billed yearly</span></div>
<div className="text-[13px] text-neutral-600">1,000 verified credits/month</div>
</div>
<ul className="mt-5 space-y-2 text-[14px] text-neutral-700">
<li className="inline-flex items-center gap-2"><svg className="w-4.5 h-4.5 text-orange-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> All Free features</li>
<li className="inline-flex items-center gap-2"><svg className="w-4.5 h-4.5 text-orange-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Advanced filters &amp; technographics</li>
<li className="inline-flex items-center gap-2"><svg className="w-4.5 h-4.5 text-orange-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> CRM &amp; outreach sync</li>
<li className="inline-flex items-center gap-2"><svg className="w-4.5 h-4.5 text-orange-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Team seats (up to 3)</li>
</ul>
<div className="mt-6">
<a className="inline-flex w-full items-center justify-center gap-2 rounded-md px-4 py-2.5 text-[13px] font-medium transition hover:bg-orange-500 bg-orange-600 text-white" href="#">
                Choose Growth
              </a>
</div>
</div>

<div className="rounded-xl border p-6 flex flex-col border-neutral-200 bg-white">
<div className="flex items-center justify-between">
<h3 className="text-[18px] font-medium tracking-tight text-neutral-900">Scale</h3>
</div>
<div className="mt-4">
<div className="price-monthly text-3xl font-semibold text-neutral-900">$199<span className="text-[13px] font-normal text-neutral-600">/mo</span></div>
<div className="price-annual hidden text-3xl font-semibold text-neutral-900">$159<span className="text-[13px] font-normal text-neutral-600">/mo billed yearly</span></div>
<div className="text-[13px] text-neutral-600">5,000 verified credits/month</div>
</div>
<ul className="mt-5 space-y-2 text-[14px] text-neutral-700">
<li className="inline-flex items-center gap-2"><svg className="w-4.5 h-4.5 text-orange-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Everything in Growth</li>
<li className="inline-flex items-center gap-2"><svg className="w-4.5 h-4.5 text-orange-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Direct dials bundle</li>
<li className="inline-flex items-center gap-2"><svg className="w-4.5 h-4.5 text-orange-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> API access</li>
<li className="inline-flex items-center gap-2"><svg className="w-4.5 h-4.5 text-orange-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Team seats (up to 10)</li>
</ul>
<div className="mt-6">
<a className="inline-flex w-full items-center justify-center gap-2 rounded-md px-4 py-2.5 text-[13px] font-medium transition hover:bg-orange-500 bg-orange-600 text-white" href="#">
                Choose Scale
              </a>
</div>
</div>
</div>

<div className="mt-6 rounded-xl border p-6 border-neutral-200 bg-white">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
<div className="">
<div className="text-[18px] font-medium tracking-tight text-neutral-900">Enterprise</div>
<p className="text-[14px] text-neutral-600">Custom credits, SSO, dedicated support, and tailored SLAs.</p>
</div>
<a className="inline-flex items-center gap-2 rounded-md border px-4 py-2.5 text-[13px] font-medium transition border-neutral-300 bg-white text-neutral-700 hover:border-neutral-400 hover:bg-neutral-50 hover:text-neutral-900" href="#">
              Contact sales
            </a>
</div>
</div>

<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-[13px] text-neutral-700">
<div className="inline-flex items-center gap-2 rounded-md border px-3 py-2 border-neutral-200 bg-neutral-50">
<svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
            Email verification included
          </div>
<div className="inline-flex items-center gap-2 rounded-md border px-3 py-2 border-neutral-200 bg-neutral-50">
<svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
            GDPR/CCPA tools
          </div>
<div className="inline-flex items-center gap-2 rounded-md border px-3 py-2 border-neutral-200 bg-neutral-50">
<svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
            API &amp; webhooks
          </div>
<div className="inline-flex items-center gap-2 rounded-md border px-3 py-2 border-neutral-200 bg-neutral-50">
<svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
            Priority support
          </div>
</div>
</div>
</section>

<section className="border-t border-neutral-200" id="security">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
<div className="grid lg:grid-cols-2 gap-10 items-start">
<div className="">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">Privacy-first by design</h2>
<p className="mt-3 text-[15px] text-neutral-600">We build for compliance from the ground up with strong governance and transparent controls for end users and admins.</p>
<ul className="mt-6 space-y-3 text-[14px] text-neutral-700">
<li className="inline-flex items-start gap-2">
<svg className="mt-0.5 w-4 h-4 text-orange-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
          Data encrypted at rest and in transit (AES-256, TLS 1.2+)
        </li>
<li className="inline-flex items-start gap-2">
<svg className="mt-0.5 w-4 h-4 text-orange-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
          GDPR/CCPA tools including DSAR and suppression
        </li>
<li className="inline-flex items-start gap-2">
<svg className="mt-0.5 w-4 h-4 text-orange-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 2424" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h18M3 6h18M3 18h18"></path></svg>
          Regional data processing and audit logs
        </li>
<li className="inline-flex items-start gap-2">
<svg className="mt-0.5 w-4 h-4 text-orange-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20M2 12h20"></path></svg>
          Opt-out and do-not-contact enforcement
        </li>
</ul>
<div className="mt-7 inline-flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-[13px] font-medium transition hover:bg-orange-500 text-white bg-orange-600" href="#">Read privacy policy</a>
<a className="inline-flex items-center gap-2 rounded-md border px-4 py-2.5 text-[13px] transition border-neutral-300 bg-white text-neutral-700 hover:text-neutral-900 hover:border-neutral-400 hover:bg-neutral-50" href="#">Security overview</a>
</div>
</div>
<div className="rounded-xl border p-6 border-neutral-200 bg-white">
<div className="grid sm:grid-cols-2 gap-4">
<div className="rounded-lg border p-4 border-neutral-200 bg-neutral-50">
<div className="text-[13px] text-neutral-600">Compliance</div>
<div className="mt-1 text-[16px] font-medium tracking-tight text-neutral-900">GDPR, CCPA</div>
<p className="mt-1 text-[13px] text-neutral-600">Request records, suppress data, and manage consent.</p>
</div>
<div className="rounded-lg border p-4 border-neutral-200 bg-neutral-50">
<div className="text-[13px] text-neutral-600">Controls</div>
<div className="mt-1 text-[16px] font-medium tracking-tight text-neutral-900">SSO, SCIM</div>
<p className="mt-1 text-[13px] text-neutral-600">SAML SSO and user provisioning for teams.</p>
</div>
<div className="rounded-lg border p-4 border-neutral-200 bg-neutral-50">
<div className="text-[13px] text-neutral-600">Monitoring</div>
<div className="mt-1 text-[16px] font-medium tracking-tight text-neutral-900">24/7 alerts</div>
<p className="mt-1 text-[13px] text-neutral-600">App and API uptime with public status page.</p>
</div>
<div className="rounded-lg border p-4 border-neutral-200 bg-neutral-50">
<div className="text-[13px] text-neutral-600">Data</div>
<div className="mt-1 text-[16px] font-medium tracking-tight text-neutral-900">Encrypted</div>
<p className="mt-1 text-[13px] text-neutral-600">At rest and in transit with strict access controls.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-neutral-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<div className="rounded-2xl border p-8 sm:p-10 relative overflow-hidden border-neutral-200 bg-white">
<div className="absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl pointer-events-none bg-orange-400/10"></div>
<div className="grid lg:grid-cols-2 gap-8 items-center">
<div className="">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">Ready to fill pipeline with verified contacts?</h3>
<p className="mt-3 text-[15px] text-neutral-600">Start free, then scale as you grow. No contracts, cancel anytime.</p>
<div className="mt-6 inline-flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-[14px] font-medium transition hover:bg-orange-500 bg-orange-600 text-white" href="#">Create account</a>
<a className="inline-flex items-center gap-2 rounded-md border px-5 py-3 text-[14px] transition border-neutral-300 bg-white text-neutral-700 hover:text-neutral-900 hover:border-neutral-400 hover:bg-neutral-50" href="#">Talk to sales</a>
</div>
<div className="mt-4 text-[12px] text-neutral-500">No setup fees. Email verification included on export.</div>
</div>
<div className="rounded-xl border p-5 border-neutral-200 bg-neutral-50">
<div className="text-[13px] mb-2 text-neutral-600">What you get</div>
<ul className="grid sm:grid-cols-2 gap-2 text-[14px] text-neutral-700">
<li className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span> 320M+ contacts</li>
<li className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span> 25M+ companies</li>
<li className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span> CRM integrations</li>
<li className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span> CSV enrichment</li>
<li className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span> Direct dials</li>
<li className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span> Privacy controls</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-neutral-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-[14px]">
<div className="">
<div className="inline-flex items-center gap-2">
<div className="h-7 w-7 rounded-md border grid place-items-center bg-neutral-100 border-neutral-200">
<span className="text-[13px] font-semibold tracking-tight text-neutral-900">SL</span>
</div>
<span className="text-[15px] font-medium tracking-tight text-neutral-900">SearchLeads</span>
</div>
<p className="mt-3 text-[13px] text-neutral-600">Find verified decision makers and sync to your CRM in one click.</p>
</div>
<div className="">
<div className="text-[13px] font-medium tracking-tight text-neutral-900">Product</div>
<ul className="mt-3 space-y-2 text-neutral-600">
<li className=""><a className="transition hover:text-neutral-900" href="#features">Features</a></li>
<li className=""><a className="transition hover:text-neutral-900" href="#integrations">Integrations</a></li>
<li className=""><a className="transition hover:text-neutral-900" href="#pricing">Pricing</a></li>
</ul>
</div>
<div className="">
<div className="text-[13px] font-medium tracking-tight text-neutral-900">Company</div>
<ul className="mt-3 space-y-2 text-neutral-600">
<li className=""><a className="transition hover:text-neutral-900" href="#">About</a></li>
<li className=""><a className="transition hover:text-neutral-900" href="#">Careers</a></li>
<li><a className="transition hover:text-neutral-900" href="#">Contact</a></li>
</ul>
</div>
<div className="">
<div className="text-[13px] font-medium tracking-tight text-neutral-900">Legal</div>
<ul className="mt-3 space-y-2 text-neutral-600">
<li className=""><a className="transition hover:text-neutral-900" href="#security">Privacy</a></li>
<li className=""><a className="transition hover:text-neutral-900" href="#">Terms</a></li>
<li className=""></li>
</ul>
</div>
</div>
<div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<p className="text-[12px] text-neutral-500">© <span id="year">2025</span> SearchLeads, Inc. All rights reserved.</p>
<div className="inline-flex items-center gap-3 text-[12px] text-neutral-500">
<a className="transition hover:text-neutral-800" href="#">Status</a>
<span className="h-3 w-px bg-neutral-200"></span>
<a className="transition hover:text-neutral-800" href="#">Security</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
