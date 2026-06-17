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



{
"@context": "https://schema.org",
"@type": "Organization",
"name": "Core Via Venture Solutions",
"url": "https://www.coreviaventure.com/",
"logo": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=640&auto=format&fit=crop",
"sameAs": [
"https://www.linkedin.com/company/coreviaventure",
"https://twitter.com/coreviaventure"
],
"foundingDate": "2014-01-01"
}



      document.addEventListener("DOMContentLoaded", function () {
        if (window.lucide) {
          window.lucide.createIcons();
        }

        const mobileBtn = document.getElementById("mobileMenuBtn");
        const mobileMenu = document.getElementById("mobileMenu");
        if (mobileBtn && mobileMenu) {
          mobileBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
          });
        }

        const yearSpan = document.getElementById("yearSpan");
        if (yearSpan) {
          yearSpan.textContent = new Date().getFullYear();
        }

        const ctx = document.getElementById("insightsChart");
        if (ctx) {
          new Chart(ctx, {
            type: "line",
            data: {
              labels: ["Q1", "Q2", "Q3", "Q4"],
              datasets: [
                {
                  data: [52, 48, 61, 67],
                  borderColor: "#059669",
                  backgroundColor: "rgba(16,185,129,0.08)",
                  fill: true,
                  tension: 0.35,
                  pointRadius: 2.5
                }
              ]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: { legend: { display: false } },
              scales: {
                x: { display: true, grid: { display: false } },
                y: { display: false, beginAtZero: true }
              }
            }
          });
        }

        const csTrack = document.getElementById("csTrack");
        const prevBtn = document.getElementById("csPrev");
        const nextBtn = document.getElementById("csNext");
        let csIndex = 0;
        const cardWidth = 420;

        function updateCs() {
          if (!csTrack) return;
          csTrack.style.transform = `translateX(-${csIndex * cardWidth}px)`;
        }

        if (prevBtn && nextBtn && csTrack) {
          prevBtn.addEventListener("click", () => {
            csIndex = Math.max(0, csIndex - 1);
            updateCs();
          });
          nextBtn.addEventListener("click", () => {
            const maxIndex = csTrack.children.length - 1;
            csIndex = Math.min(maxIndex, csIndex + 1);
            updateCs();
          });
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
      

<div className="text-sm text-white text-center bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-700 pt-2 pb-2" style={{}}>
</div><header className="sticky z-50 bg-white/80 border-slate-200 border-b top-0 backdrop-blur">
<div className="max-w-7xl mx-auto px-4">
<div className="flex h-16 items-center justify-between">
<a className="flex items-center gap-3 group" href="#home">
<div className="flex items-center gap-2">
<img alt="Cvv Solutions logo mark" className="bg-slate-50 w-auto h-8 object-contain rounded-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2d25adf5-d9a0-4811-88ea-864174a01c42_320w.png"/>
<span className="inline-flex items-center">
</span>
</div>
<div className="hidden sm:flex flex-col leading-tight">
<span className="text-xs text-slate-500">Core Via Venture Solutions</span>
</div>
</a>
<nav className="hidden md:flex items-center gap-7 text-sm">
<a className="text-slate-700 hover:text-slate-900" href="#home" style={{}}>Home</a>
<a className="text-slate-700 hover:text-slate-900" href="#about" style={{}}>About</a>
<a className="text-slate-700 hover:text-slate-900" href="#services" style={{}}>Services</a>
<a className="text-slate-700 hover:text-slate-900" href="#insights" style={{}}>Insights</a>
<a className="text-slate-700 hover:text-slate-900" href="#portal" style={{}}>Client Portal</a>
<a className="text-slate-700 hover:text-slate-900" href="#contact" style={{}}>Contact</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 px-4 h-10 rounded-md bg-slate-900 text-white hover:bg-slate-800 transition" href="#contact">
<svg className="lucide lucide-calendar h-4 w-4 stroke-[1.5]" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="text-sm font-medium">Book Consultation</span>
</a>
<button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-slate-200" id="mobileMenuBtn">
<svg className="lucide lucide-menu h-5 w-5 stroke-[1.5]" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</div>
<div className="md:hidden hidden border-t border-slate-200 bg-white" id="mobileMenu">
<div className="px-4 py-3 flex flex-col gap-3 text-sm">
<a className="py-2" href="#home">Home</a>
<a className="py-2" href="#about">About</a>
<a className="py-2" href="#services">Services</a>
<a className="py-2" href="#insights">Insights</a>
<a className="py-2" href="#portal">Client Portal</a>
<a className="py-2" href="#contact">Contact</a>
<a className="inline-flex items-center gap-2 px-4 h-10 rounded-md bg-slate-900 text-white w-max" href="#contact">
<svg className="lucide lucide-calendar h-4 w-4 stroke-[1.5]" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="text-sm font-medium">Book Consultation</span>
</a>
</div>
</div>
</header>


<section className="relative overflow-hidden" id="home">
<div className="absolute inset-0">
<img alt="" className="w-full h-full object-cover opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="bg-gradient-to-br from-emerald-700/70 via-teal-700/60 to-sky-800/70 absolute top-0 right-0 bottom-0 left-0" style={{}}></div>
<svg className="absolute -right-24 -bottom-24 w-[700px] h-[700px] opacity-40" fill="none" viewbox="0 0 600 600">
<defs>
<lineargradient id="g1" x1="0" x2="1" y1="0" y2="1">
<stop offset="0%" stop-color="#34d399"></stop>
<stop offset="100%" stop-color="#0284c7"></stop>
</lineargradient>
</defs>
<g stroke="url(#g1)">
<circle cx="300" cy="300" r="220" strokeWidth="1"></circle>
<circle cx="300" cy="300" r="160" strokeWidth="1"></circle>
<circle cx="300" cy="300" r="100" strokeWidth="1"></circle>
<g>
<line x1="80" x2="520" y1="300" y2="300"></line>
<line x1="300" x2="300" y1="80" y2="520"></line>
<line x1="140" x2="460" y1="140" y2="460"></line>
<line x1="460" x2="140" y1="140" y2="460"></line>
</g>
<g fill="url(#g1)">
<circle cx="300" cy="80" r="6"></circle>
<circle cx="520" cy="300" r="6"></circle>
<circle cx="300" cy="520" r="6"></circle>
<circle cx="80" cy="300" r="6"></circle>
</g>
</g>
</svg>
</div>
<div className="md:py-28 lg:py-32 max-w-7xl mr-auto ml-auto pt-24 pr-4 pb-24 pl-4 relative">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div className="text-white">
<span className="inline-flex items-center gap-2 text-emerald-200/90 bg-white/10 px-3 py-1 rounded-full ring-1 ring-white/20">
<svg className="lucide lucide-shield-check h-4 w-4 stroke-[1.5]" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-xs font-medium">Trusted partner for finance leaders</span>
</span>
<h1 className="md:text-5xl lg:text-6xl leading-tight text-4xl font-semibold tracking-tight mt-5">
              Empowering Growth Through Precision &amp; Insight
            </h1>
<p className="mt-5 text-white/90 max-w-2xl text-base">
              We help organizations align strategy, finance, and operations. From compliant accounting to forward-looking advisory, our experts translate complexity into clarity.
            </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center gap-2 px-5 h-11 rounded-md bg-white text-slate-900 hover:bg-slate-100 transition" href="#services" style={{}}>
<svg className="lucide lucide-pie-chart h-4 w-4 stroke-[1.5]" data-lucide="pie-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path></svg>
<span className="text-sm font-medium">Explore Services</span>
</a>
<a className="inline-flex items-center gap-2 px-5 h-11 rounded-md bg-gradient-to-r from-emerald-500 to-sky-600 text-white hover:from-emerald-600 hover:to-sky-700 transition" href="#contact" style={{}}>
<svg className="lucide lucide-arrow-right h-4 w-4 stroke-[1.5]" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
<span className="text-sm font-medium">Talk to an Advisor</span>
</a>
</div>
<div className="mt-10 grid grid-cols-2 gap-6 max-w-xl">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-md bg-white/10 flex items-center justify-center ring-1 ring-white/15">
<svg className="lucide lucide-badge-check h-4 w-4 stroke-[1.5]" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="">
<p className="text-sm font-medium">SOC 2 aligned</p>
<p className="text-xs text-white/80">Security-by-design operations</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-md bg-white/10 flex items-center justify-center ring-1 ring-white/15">
<svg className="lucide lucide-clock h-4 w-4 stroke-[1.5]" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div>
<p className="text-sm font-medium">24/5 global coverage</p>
<p className="text-xs text-white/80">Real-time support across time zones</p>
</div>
</div>
</div>
</div>
<div className="bg-white/95 rounded-xl p-6 md:p-7 shadow-xl ring-1 ring-slate-200 backdrop-blur">
<h3 className="text-xl font-semibold tracking-tight">Get a tailored roadmap</h3>
<p className="text-sm text-slate-600 mt-1 text-base" style={{}}>Share a few details and we’ll send a custom action plan within 24 hours.</p>
<form className="mt-5 space-y-4" data-endpoint="/api/leads" id="leadForm">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="">
<label className="text-sm text-slate-600" style={{}}>First name</label>
<input className="mt-1 w-full h-10 rounded-md border border-slate-300 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-base" name="firstName" required=""/>
</div>
<div className="">
<label className="text-sm text-slate-600" style={{}}>Last name</label>
<input className="mt-1 w-full h-10 rounded-md border border-slate-300 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-base" name="lastName" required=""/>
</div>
<div className="sm:col-span-2">
<label className="text-sm text-slate-600" style={{}}>Work email</label>
<input className="mt-1 w-full h-10 rounded-md border border-slate-300 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-base" name="email" required="" type="email"/>
</div>
<div className="sm:col-span-2">
<label className="text-sm text-slate-600" style={{}}>Company</label>
<input className="mt-1 w-full h-10 rounded-md border border-slate-300 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-base" name="company"/>
</div>
<div className="sm:col-span-2">
<label className="text-sm text-slate-600" style={{}}>Primary need</label>
<select className="mt-1 w-full h-10 rounded-md border border-slate-300 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white text-base" name="need">
<option>Accounting &amp; Taxation</option>
<option>Financial Planning &amp; Advisory</option>
<option>Business Management &amp; Strategy</option>
</select>
</div>
<div className="sm:col-span-2">
<label className="text-sm text-slate-600" style={{}}>Message</label>
<textarea className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-base" name="message" placeholder="Tell us about your goals" rows="3"></textarea>
</div>
</div>
<input id="utmField" name="utm" type="hidden"/>
<button className="w-full h-11 rounded-md bg-slate-900 text-white hover:bg-slate-800 transition inline-flex items-center justify-center gap-2">
<svg className="lucide lucide-send h-4 w-4 stroke-[1.5]" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
<span className="text-sm font-medium">Request Action Plan</span>
</button>
<p className="text-xs text-slate-500" id="leadFormMsg"></p>
</form>
</div>
</div>
</div>
</section>

<section className="py-10 border-t border-slate-200 bg-slate-50">
<div className="max-w-7xl mx-auto px-4">
<p className="text-xs uppercase tracking-wide text-slate-500 text-center">Preferred by finance leaders at growth-focused organizations</p>
<div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 grayscale opacity-80">
</div>
</div>
</section>

<section className="py-20" id="services">
<div className="max-w-7xl mx-auto px-4">
<div className="flex items-end justify-between gap-6">
<div className="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Services that connect numbers to outcomes</h2>
<p className="mt-2 text-slate-600 max-w-2xl text-base" style={{}}>From day-one accuracy to board-level strategy, our teams ship clarity at every step.</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-slate-900 hover:opacity-80" href="#contact" style={{}}>
<span className="text-sm font-medium">Get a proposal</span>
<svg className="lucide lucide-arrow-right h-4 w-4 stroke-[1.5]" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="mt-10 grid md:grid-cols-3 gap-6">
<div className="group rounded-xl border border-slate-200 p-6 hover:shadow-lg transition">
<div className="h-10 w-10 rounded-md bg-gradient-to-br from-emerald-500 to-emerald-600 text-white flex items-center justify-center">
<svg className="lucide lucide-book-open h-5 w-5 stroke-[1.5]" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight">Bookkeeping &amp; Ledger Maintenance</h3>
<p className="mt-2 text-sm text-slate-600 text-base" style={{}}>Accurate recording of daily financial transactions, ledger postings, reconciliations, and periodic reporting.</p>
<ul className="mt-4 text-sm text-slate-600 space-y-2 text-base" style={{}}>
<li className="flex items-center gap-2"><svg className="lucide lucide-check-circle-2 h-4 w-4 text-emerald-600 stroke-[1.5]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>Daily transaction recording</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check-circle-2 h-4 w-4 text-emerald-600 stroke-[1.5]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>Bank &amp; cash reconciliation</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check-circle-2 h-4 w-4 text-emerald-600 stroke-[1.5]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>Accounts receivable/payable tracking</li>
</ul>
<a className="mt-5 inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800" href="#contact">
<span className="text-sm font-medium">Get a consultation</span>
<svg className="lucide lucide-chevron-right h-4 w-4 stroke-[1.5]" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
<div className="group rounded-xl border border-slate-200 p-6 hover:shadow-lg transition">
<div className="h-10 w-10 rounded-md bg-gradient-to-br from-sky-500 to-sky-600 text-white flex items-center justify-center" style={{}}>
<svg className="lucide lucide-file-text h-5 w-5 stroke-[1.5]" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight">Financial Statement Preparation</h3>
<p className="mt-2 text-sm text-slate-600 text-base" style={{}}>Preparation of Balance Sheet, Profit &amp; Loss, and Cash Flow statements as per accounting standards.</p>
<ul className="mt-4 text-sm text-slate-600 space-y-2 text-base" style={{}}>
<li className="flex items-center gap-2"><svg className="lucide lucide-check-circle-2 h-4 w-4 text-sky-600 stroke-[1.5]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>Monthly/Quarterly/Year-end reports</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check-circle-2 h-4 w-4 text-sky-600 stroke-[1.5]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>Variance analysis</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check-circle-2 h-4 w-4 text-sky-600 stroke-[1.5]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>Management-ready statements</li>
</ul>
<a className="mt-5 inline-flex items-center gap-2 text-sky-700 hover:text-sky-800" href="#contact" style={{}}>
<span className="text-sm font-medium">Get a consultation</span>
<svg className="lucide lucide-chevron-right h-4 w-4 stroke-[1.5]" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
<div className="group rounded-xl border border-slate-200 p-6 hover:shadow-lg transition">
<div className="h-10 w-10 rounded-md bg-gradient-to-br from-teal-500 to-emerald-600 text-white flex items-center justify-center">
<svg className="lucide lucide-receipt h-5 w-5 stroke-[1.5]" data-lucide="receipt" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 17.5v-11"></path></svg>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight">Income Tax Filing (ITR)</h3>
<p className="mt-2 text-sm text-slate-600 text-base" style={{}}>End-to-end ITR preparation and electronic filing for individuals, professionals, and businesses.</p>
<ul className="mt-4 text-sm text-slate-600 space-y-2 text-base" style={{}}>
<li className="flex items-center gap-2"><svg className="lucide lucide-check-circle-2 h-4 w-4 text-teal-600 stroke-[1.5]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>Form selection &amp; computation</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check-circle-2 h-4 w-4 text-teal-600 stroke-[1.5]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>Deductions optimization</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check-circle-2 h-4 w-4 text-teal-600 stroke-[1.5]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>E-filing &amp; acknowledgments</li>
</ul>
<a className="mt-5 inline-flex items-center gap-2 text-teal-700 hover:text-teal-800" href="#contact" style={{}}>
<span className="text-sm font-medium">Get a consultation</span>
<svg className="lucide lucide-chevron-right h-4 w-4 stroke-[1.5]" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
<div className="group rounded-xl border border-slate-200 p-6 hover:shadow-lg transition">
<div className="h-10 w-10 rounded-md bg-gradient-to-br from-emerald-500 to-emerald-600 text-white flex items-center justify-center">
<i className="h-5 w-5 stroke-[1.5]" data-lucide="receipt-percent"></i>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight">GST Registration &amp; Filing</h3>
<p className="mt-2 text-sm text-slate-600 text-base" style={{}}>Seamless GST registration, monthly/quarterly returns, reconciliations, and compliance advisory.</p>
<ul className="mt-4 text-sm text-slate-600 space-y-2 text-base" style={{}}>
<li className="flex items-center gap-2"><svg className="lucide lucide-check-circle-2 h-4 w-4 text-emerald-600 stroke-[1.5]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>GSTIN registration</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check-circle-2 h-4 w-4 text-emerald-600 stroke-[1.5]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>GSTR-1, 3B, 9, 9C</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check-circle-2 h-4 w-4 text-emerald-600 stroke-[1.5]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>ITC reconciliation</li>
</ul>
<a className="mt-5 inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800" href="#contact">
<span className="text-sm font-medium">Get a consultation</span>
<svg className="lucide lucide-chevron-right h-4 w-4 stroke-[1.5]" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
<div className="group rounded-xl border border-slate-200 p-6 hover:shadow-lg transition">
<div className="h-10 w-10 rounded-md bg-gradient-to-br from-sky-500 to-sky-600 text-white flex items-center justify-center" style={{}}>
<svg className="lucide lucide-banknote h-5 w-5 stroke-[1.5]" data-lucide="banknote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="2" width="20" x="2" y="6"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight">TDS Compliance &amp; Returns</h3>
<p className="mt-2 text-sm text-slate-600 text-base" style={{}}>Computation, deduction, deposit, and return filing with timely reminders and compliance support.</p>
<ul className="mt-4 text-sm text-slate-600 space-y-2 text-base" style={{}}>
<li className="flex items-center gap-2"><svg className="lucide lucide-check-circle-2 h-4 w-4 text-sky-600 stroke-[1.5]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>TDS/TCS computation</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check-circle-2 h-4 w-4 text-sky-600 stroke-[1.5]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>Challan payments</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check-circle-2 h-4 w-4 text-sky-600 stroke-[1.5]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>Quarterly statements</li>
</ul>
<a className="mt-5 inline-flex items-center gap-2 text-sky-700 hover:text-sky-800" href="#contact" style={{}}>
<span className="text-sm font-medium">Get a consultation</span>
<svg className="lucide lucide-chevron-right h-4 w-4 stroke-[1.5]" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
<div className="group rounded-xl border border-slate-200 p-6 hover:shadow-lg transition">
<div className="h-10 w-10 rounded-md bg-gradient-to-br from-teal-500 to-emerald-600 text-white flex items-center justify-center">
<svg className="lucide lucide-shield-check h-5 w-5 stroke-[1.5]" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight">Audit Services (Statutory, Internal, Tax)</h3>
<p className="mt-2 text-sm text-slate-600 text-base" style={{}}>Risk-based audits to strengthen controls, ensure compliance, and improve financial reliability.</p>
<ul className="mt-4 text-sm text-slate-600 space-y-2 text-base" style={{}}>
<li className="flex items-center gap-2"><svg className="lucide lucide-check-circle-2 h-4 w-4 text-teal-600 stroke-[1.5]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>Process &amp; control review</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check-circle-2 h-4 w-4 text-teal-600 stroke-[1.5]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>Documentation &amp; evidence</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check-circle-2 h-4 w-4 text-teal-600 stroke-[1.5]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>Actionable recommendations</li>
</ul>
<a className="mt-5 inline-flex items-center gap-2 text-teal-700 hover:text-teal-800" href="#contact" style={{}}>
<span className="text-sm font-medium">Get a consultation</span>
<svg className="lucide lucide-chevron-right h-4 w-4 stroke-[1.5]" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</div>
<div className="mt-14">
<div className="flex items-center justify-between">
<h3 className="text-2xl font-semibold tracking-tight">Client success</h3>
<div className="flex gap-2">
<button className="h-9 w-9 rounded-md border border-slate-200 flex items-center justify-center" id="csPrev">
<svg className="lucide lucide-chevron-left h-4 w-4 stroke-[1.5]" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="h-9 w-9 rounded-md border border-slate-200 flex items-center justify-center" id="csNext">
<svg className="lucide lucide-chevron-right stroke-[1.5] w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(15, 23, 42)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>
<div className="mt-6 overflow-hidden">
<div className="flex gap-6 transition-transform" id="csTrack">
<article className="min-w-[300px] md:min-w-[380px] lg:min-w-[420px] rounded-xl border border-slate-200 overflow-hidden bg-white">
<img alt="" className="h-40 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="p-6">
<p className="text-xs text-emerald-700 font-medium">SaaS / Series B</p>
<h4 className="mt-1 text-lg font-semibold tracking-tight">Cutting CAC-to-LTV by 18% via pricing analytics</h4>
<p className="mt-2 text-sm text-slate-600 text-base" style={{}}>Built revenue model and pricing experiments; established margin guardrails and weekly dashboards.</p>
</div>
</article>
<article className="min-w-[300px] md:min-w-[380px] lg:min-w-[420px] rounded-xl border border-slate-200 overflow-hidden bg-white">
<img alt="" className="h-40 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="p-6">
<p className="text-xs text-sky-700 font-medium" style={{}}>Manufacturing</p>
<h4 className="mt-1 text-lg font-semibold tracking-tight">Closed books 3x faster with automated reconciliations</h4>
<p className="mt-2 text-sm text-slate-600 text-base" style={{}}>Automation and controls framework reduced errors while improving compliance posture.</p>
</div>
</article>
<article className="min-w-[300px] md:min-w-[380px] lg:min-w-[420px] rounded-xl border border-slate-200 overflow-hidden bg-white">
<img alt="" className="h-40 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="p-6">
<p className="text-xs text-teal-700 font-medium" style={{}}>Healthcare</p>
<h4 className="mt-1 text-lg font-semibold tracking-tight">Forecast accuracy improved from 62% to 91%</h4>
<p className="mt-2 text-sm text-slate-600 text-base" style={{}}>Scenario-based FP&amp;A with leading indicators and supply constraints integrated.</p>
</div>
</article>
</div>
</div>
</div>
</div>
</section>

<section className="border-y bg-slate-50 border-slate-200 pt-20 pb-20" id="about">
<div className="max-w-7xl mx-auto px-4">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="">
<span className="inline-flex items-center gap-2 text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full ring-1 ring-emerald-100">
<svg className="lucide lucide-target h-4 w-4 stroke-[1.5]" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
<span className="text-xs font-medium">Our Purpose</span>
</span>
<h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">🏢 About Core Via Venture Solutions</h2>
<p className="mt-3 text-slate-700 text-base" style={{}}>At Core Via Venture Solutions, we specialize in delivering bespoke accounting, financial advisory, and strategic management services tailored to the evolving needs of modern enterprises. Our ethos is rooted in precision, transparency, and transformative insight—empowering clients to navigate fiscal complexity with confidence and clarity.</p>
<p className="mt-3 text-slate-700 text-base" style={{}}>We operate at the intersection of financial acumen and operational excellence, offering solutions that transcend conventional consultancy. Whether you're a burgeoning startup or an established enterprise, our multidisciplinary expertise ensures your business is not only compliant but future-ready.</p>
<ul className="mt-6 space-y-3 text-sm text-slate-700 text-base" style={{}}>
<li className="flex items-start gap-3"><svg className="lucide lucide-aperture h-5 w-5 text-emerald-600 stroke-[1.5]" data-lucide="aperture" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m14.31 8 5.74 9.94"></path><path d="M9.69 8h11.48"></path><path d="m7.38 12 5.74-9.94"></path><path d="M9.69 16 3.95 6.06"></path><path d="M14.31 16H2.83"></path><path d="m16.62 12-5.74 9.94"></path></svg>Integrity as a default setting</li>
<li className="flex items-start gap-3"><svg className="lucide lucide-cpu h-5 w-5 text-sky-600 stroke-[1.5]" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>Insight through intelligent systems</li>
<li className="flex items-start gap-3"><svg className="lucide lucide-users h-5 w-5 text-teal-600 stroke-[1.5]" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>Partnership over transactions</li>
</ul>
</div>
<div className="grid sm:grid-cols-3 gap-6">
<div className="sm:col-span-2 rounded-xl overflow-hidden border border-slate-200">
<img alt="" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="space-y-6">
<div className="rounded-xl overflow-hidden border border-slate-200">
<img alt="" className="w-full h-40 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="rounded-xl overflow-hidden border border-slate-200">
<img alt="" className="w-full h-40 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
</div>
</div>
</div>
<div className="mt-14">
<h3 className="text-2xl font-semibold tracking-tight">Leadership</h3>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 mt-6 gap-x-6 gap-y-6">
<div className="rounded-xl border border-slate-200 p-5">
<img alt="" className="w-32 h-32 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9c5a3025-ac01-4faf-83fb-dfc69d9357e1_320w.jpg"/>
<h4 className="font-semibold tracking-tight mt-4">Yogesh Uikey </h4>
<p className="text-sm text-slate-600 text-base" style={{}}>Director, Accounting</p>
</div>
</div>
</div>
</div>
</section>

<section className="pt-20 pb-20" id="insights">
<div className="max-w-7xl mx-auto px-4">
<div className="flex items-end justify-between gap-6">
<div className="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Latest Insights</h2>
<p className="text-base text-slate-600 max-w-2xl mt-2">Perspectives on markets, policy, and performance. Subscribe for quarterly reports.</p>
</div>
<div className="hidden md:flex items-center gap-2">
<button className="px-3 h-9 rounded-md border border-slate-200 text-sm">All</button>
<button className="px-3 h-9 rounded-md border border-slate-200 text-sm">Accounting</button>
<button className="px-3 h-9 rounded-md border border-slate-200 text-sm">Advisory</button>
<button className="px-3 h-9 rounded-md border border-slate-200 text-sm">Strategy</button>
</div>
</div>
<div className="mt-8 grid lg:grid-cols-3 gap-6">
<article className="rounded-xl border border-slate-200 overflow-hidden">
<div className="p-6">
<p className="text-xs text-emerald-700 font-medium">Indicator</p>
<h3 className="mt-1 text-xl font-semibold tracking-tight">Market Confidence Index — Q3</h3>
<p className="mt-2 text-sm text-slate-600 text-base" style={{}}>Confidence rebounded on inflation cooling and resilient labor data.</p>
<div className="mt-4">
<div className="rounded-lg border border-slate-200 p-3">
<div className="relative h-40">
<div className="absolute inset-0">
<div className="h-full">
<div className="h-full">
<div className="">
<canvas aria-label="Market Confidence Line Chart" className="" height="187" id="insightsChart" role="img" style={{display: 'block', boxSizing: 'border-box', height: '150px', width: '801.6px'}} width="1002"></canvas>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<a className="mt-4 inline-flex items-center gap-2 text-slate-900" href="#" style={{}}>
<span className="text-sm font-medium">Read methodology</span>
<svg className="lucide lucide-external-link h-4 w-4 stroke-[1.5]" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</a>
</div>
</article>
<article className="rounded-xl border border-slate-200 overflow-hidden">
<img alt="" className="h-40 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="p-6">
<p className="text-xs text-sky-700 font-medium" style={{}}>Advisory</p>
<h3 className="mt-1 text-lg font-semibold tracking-tight">The FP&amp;A playbook for capital efficiency</h3>
<p className="mt-2 text-sm text-slate-600 text-base" style={{}}>Five levers to expand runway without sacrificing growth.</p>
<a className="mt-4 inline-flex items-center gap-2 text-slate-900" href="#" style={{}}>
<span className="text-sm font-medium">Explore</span>
<svg className="lucide lucide-arrow-right h-4 w-4 stroke-[1.5]" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</article>
<article className="rounded-xl border border-slate-200 overflow-hidden">
<img alt="" className="h-40 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="p-6">
<p className="text-xs text-teal-700 font-medium" style={{}}>Strategy</p>
<h3 className="mt-1 text-lg font-semibold tracking-tight">Operating models for multi-entity scale</h3>
<p className="mt-2 text-sm text-slate-600 text-base" style={{}}>How to design shared services without losing agility.</p>
<a className="mt-4 inline-flex items-center gap-2 text-slate-900" href="#" style={{}}>
<span className="text-sm font-medium">Explore</span>
<svg className="lucide lucide-arrow-right h-4 w-4 stroke-[1.5]" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</article>
</div>
<div className="mt-14">
<div className="flex items-center justify-between">
<h3 className="text-2xl font-semibold tracking-tight">Downloadable resources</h3>
<a className="text-sm inline-flex items-center gap-2 text-slate-900" href="#" style={{}}>
<span className="font-medium">See all</span>
<svg className="lucide lucide-arrow-right h-4 w-4 stroke-[1.5]" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="mt-6 grid md:grid-cols-3 gap-6">
<div className="rounded-xl border border-slate-200 p-5 flex items-start gap-4">
<div className="h-10 w-10 rounded-md bg-slate-900 text-white flex items-center justify-center">
<svg className="lucide lucide-file-text h-5 w-5 stroke-[1.5]" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>
<div className="flex-1">
<h4 className="font-semibold tracking-tight">KPI Dashboard Template</h4>
<p className="text-sm text-slate-600 text-base" style={{}}>Spreadsheet with benchmarks and cohort views.</p>
<a className="mt-2 inline-flex items-center gap-2 text-emerald-700" href="#">
<svg className="lucide lucide-download h-4 w-4 stroke-[1.5]" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
<span className="text-sm font-medium">Download</span>
</a>
</div>
</div>
<div className="rounded-xl border border-slate-200 p-5 flex items-start gap-4">
<div className="h-10 w-10 rounded-md bg-slate-900 text-white flex items-center justify-center">
<svg className="lucide lucide-file-text h-5 w-5 stroke-[1.5]" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>
<div className="flex-1">
<h4 className="font-semibold tracking-tight">Close Checklist</h4>
<p className="text-sm text-slate-600 text-base" style={{}}>Month-end steps for audit readiness.</p>
<a className="mt-2 inline-flex items-center gap-2 text-emerald-700" href="#">
<svg className="lucide lucide-download h-4 w-4 stroke-[1.5]" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
<span className="text-sm font-medium">Download</span>
</a>
</div>
</div>
<div className="rounded-xl border border-slate-200 p-5 flex items-start gap-4">
<div className="h-10 w-10 rounded-md bg-slate-900 text-white flex items-center justify-center">
<svg className="lucide lucide-file-text h-5 w-5 stroke-[1.5]" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>
<div className="flex-1">
<h4 className="font-semibold tracking-tight">Board Pack Template</h4>
<p className="text-sm text-slate-600 text-base" style={{}}>Metrics, narrative, and risk summary.</p>
<a className="mt-2 inline-flex items-center gap-2 text-emerald-700" href="#">
<svg className="lucide lucide-download h-4 w-4 stroke-[1.5]" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
<span className="text-sm font-medium">Download</span>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-y border-slate-200" id="portal">
<div className="max-w-7xl mx-auto px-4">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="">
<span className="inline-flex items-center gap-2 text-sky-700 bg-sky-50 px-3 py-1 rounded-full ring-1 ring-sky-100" style={{}}>
<svg className="lucide lucide-lock h-4 w-4 stroke-[1.5]" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
<span className="text-xs font-medium">Secure Client Portal</span>
</span>
<h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">Documents, tasks, and real-time support</h2>
<p className="mt-3 text-slate-700 text-base" style={{}}>Exchange sensitive files, approve workflows, and chat with your team—protected with encryption and access controls.</p>
<ul className="mt-6 space-y-3 text-sm text-slate-700 text-base" style={{}}>
<li className="flex items-start gap-3"><svg className="lucide lucide-shield-check h-5 w-5 text-emerald-600 stroke-[1.5]" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>Multi-factor sign-in</li>
<li className="flex items-start gap-3"><svg className="lucide lucide-hard-drive h-5 w-5 text-sky-600 stroke-[1.5]" data-lucide="hard-drive" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="22" x2="2" y1="12" y2="12"></line><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" x2="6.01" y1="16" y2="16"></line><line x1="10" x2="10.01" y1="16" y2="16"></line></svg>Audit trail and versioning</li>
<li className="flex items-start gap-3"><svg className="lucide lucide-bot h-5 w-5 text-teal-600 stroke-[1.5]" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>AI assistant for quick answers</li>
</ul>
</div>
<div className="rounded-xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
<h3 className="text-xl font-semibold tracking-tight">Client Login</h3>
<form className="mt-4 space-y-4" id="portalLogin">
<div>
<label className="text-sm text-slate-600" style={{}}>Email</label>
<input className="mt-1 w-full h-10 rounded-md border border-slate-300 px-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-base" required="" style={{}} type="email"/>
</div>
<div className="">
<label className="text-sm text-slate-600" style={{}}>Password</label>
<input className="mt-1 w-full h-10 rounded-md border border-slate-300 px-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-base" required="" style={{}} type="password"/>
</div>
<div className="flex items-center justify-between">
<label className="inline-flex items-center gap-2 cursor-pointer select-none">
<span className="relative inline-flex h-4 w-4 items-center justify-center">
<input className="peer sr-only" type="checkbox"/>
<span className="h-4 w-4 rounded border border-slate-300 peer-checked:border-emerald-600 peer-checked:bg-emerald-600 flex items-center justify-center">
<svg className="h-3 w-3 text-white opacity-0 peer-checked:opacity-100" fill="none" viewbox="0 0 24 24"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</span>
</span>
<span className="text-sm text-slate-600" style={{}}>Remember me</span>
</label>
<a className="text-sm text-sky-700" href="#" style={{}}>Forgot password?</a>
</div>
<button className="w-full h-11 rounded-md bg-slate-900 text-white hover:bg-slate-800 transition inline-flex items-center justify-center gap-2">
<svg className="lucide lucide-log-in h-4 w-4 stroke-[1.5]" data-lucide="log-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 17 5-5-5-5"></path><path d="M15 12H3"></path><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path></svg>
<span className="text-sm font-medium">Sign in</span>
</button>
<p className="text-xs text-slate-500">By signing in you agree to the Terms and Privacy Policy.</p>
</form>
</div>
</div>
</div>
</section>

<section className="py-20">
<div className="max-w-7xl mx-auto px-4">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center">What our clients say</h2>
<div className="mt-10 grid md:grid-cols-3 gap-6">
<div className="rounded-xl border border-slate-200 p-6">
<div className="flex items-center gap-3">
<svg className="lucide lucide-star h-5 w-5 text-amber-500 stroke-[1.5]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-5 w-5 text-amber-500 stroke-[1.5]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-5 w-5 text-amber-500 stroke-[1.5]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-5 w-5 text-amber-500 stroke-[1.5]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-5 w-5 text-amber-500 stroke-[1.5]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="mt-4 text-slate-700 text-base" style={{}}>“Their FP&amp;A engine changed how we plan. We see risks months earlier and adjust with confidence.”</p>
<p className="mt-3 text-sm text-slate-500 text-base">VP Finance, Technology</p>
</div>
<div className="rounded-xl border border-slate-200 p-6">
<div className="flex items-center gap-3">
<svg className="lucide lucide-star h-5 w-5 text-amber-500 stroke-[1.5]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-5 w-5 text-amber-500 stroke-[1.5]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-5 w-5 text-amber-500 stroke-[1.5]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-5 w-5 text-amber-500 stroke-[1.5]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-5 w-5 text-amber-500 stroke-[1.5]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="mt-4 text-slate-700 text-base" style={{}}>“Audit was the smoothest in years. Their controls and documentation were rock solid.”</p>
<p className="mt-3 text-sm text-slate-500 text-base">CFO, Manufacturing</p>
</div>
<div className="rounded-xl border border-slate-200 p-6">
<div className="flex items-center gap-3">
<svg className="lucide lucide-star h-5 w-5 text-amber-500 stroke-[1.5]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-5 w-5 text-amber-500 stroke-[1.5]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-5 w-5 text-amber-500 stroke-[1.5]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-5 w-5 text-amber-500 stroke-[1.5]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-5 w-5 text-amber-500 stroke-[1.5]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="mt-4 text-slate-700 text-base" style={{}}>“They operate like an extension of our team—strategic and dependable.”</p>
<p className="mt-3 text-sm text-slate-500 text-base">Founder, Healthcare</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-y border-slate-200" id="contact">
<div className="max-w-7xl mx-auto px-4">
<div className="grid lg:grid-cols-2 gap-x-10 gap-y-10 items-start">
<div className="">
<span className="inline-flex items-center gap-2 text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full ring-1 ring-emerald-100">
<svg className="lucide lucide-messages-square h-4 w-4 stroke-[1.5]" data-lucide="messages-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path><path d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1"></path></svg>
<span className="text-xs font-medium">Contact</span>
</span>
<h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">Let’s build your financial operating system</h2>
<p className="mt-3 text-slate-700 text-base" style={{}}>Tell us about your current stack, your goals, and your timeline. We’ll follow up with a short discovery call and a tailored recommendations memo.</p>
<div className="mt-6 space-y-4">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-md bg-emerald-50 text-emerald-700 flex items-center justify-center">
<svg className="lucide lucide-phone h-4 w-4 stroke-[1.5]" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<div className="">
<p className="text-sm font-medium">Call</p>
<p className="text-sm text-slate-600" style={{}}><a className="hover:text-slate-900 transition" href="tel:+919174283824" style={{}}>+91 9174-283-824</a></p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-md bg-sky-50 text-sky-700 flex items-center justify-center" style={{}}>
<svg className="lucide lucide-mail h-4 w-4 stroke-[1.5]" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<div className="">
<p className="text-sm font-medium">Email</p>
<p className="text-sm text-slate-600">Coreviaventuresolutions@gmail.com</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-md bg-slate-900 text-white flex items-center justify-center">
<svg className="lucide lucide-map-pin h-4 w-4 stroke-[1.5]" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div className="">
<p className="text-sm font-medium">Office</p>
<p className="text-sm text-slate-600">Mumbai · Bengaluru · Remote-first</p>
</div>
</div>
</div>
</div>
<div className="rounded-xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
<h3 className="text-xl font-semibold tracking-tight">Share your requirements</h3>
<form className="mt-4 space-y-4" id="contactForm">
<div className="grid sm:grid-cols-2 gap-4">
<div className="">
<label className="text-sm text-slate-600" style={{}}>Name</label>
<input className="mt-1 w-full h-10 rounded-md border border-slate-300 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-base" required=""/>
</div>
<div className="">
<label className="text-sm text-slate-600" style={{}}>Company</label>
<input className="mt-1 w-full h-10 rounded-md border border-slate-300 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-base"/>
</div>
</div>
<div className="">
<label className="text-sm text-slate-600" style={{}}>Work email</label>
<input className="mt-1 w-full h-10 rounded-md border border-slate-300 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-base" required="" type="email"/>
</div>
<div className="">
<label className="text-sm text-slate-600" style={{}}>How can we help?</label>
<textarea className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-base" placeholder="Share a brief overview of your requirements" rows="4"></textarea>
</div>
<button className="w-full h-11 rounded-md bg-slate-900 text-white hover:bg-slate-800 transition inline-flex items-center justify-center gap-2">
<svg className="lucide lucide-send h-4 w-4 stroke-[1.5]" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
<span className="text-sm font-medium">Submit</span>
</button>
<p className="text-xs textlate-500" id="contactFormMsg"></p>
</form>
</div>
</div>
</div>
</section>

    Footer --&gt;
    <footer className="py-10 bg-white">
<div className="max-w-7xl mx-auto px-4">
<div className="flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-3">
<img alt="Cvv Solutions logo mark" className="bg-slate-50 w-auto h-7 object-cover bg-center rounded-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5a62d497-e36f-4b47-b172-955e479b5142_320w.png"/>
<span className="text-sm font-semibold tracking-tight">Cvv Solutions</span>
</div>
<p className="text-xs text-slate-500">© <span id="yearSpan">2026</span> Core Via Venture Solutions. All rights reserved.</p>
</div>
</div>
</footer>


    </>
  );
}
