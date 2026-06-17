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



        // 1. Scroll Animations (Intersection Observer)
        const revealElements = document.querySelectorAll('.reveal');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        revealElements.forEach(el => observer.observe(el));

        // 2. Sticky Nav Logic
        const nav = document.getElementById('sticky-nav');
        let lastScroll = 0;
        
        window.addEventListener('scroll', () => {
            const currentScroll = window.scrollY;
            
            // Show if scrolled down > 300px
            if (currentScroll > 300) {
                // If scrolling down, show. If scrolling up, hide.
                // Note: Requirement "Shows on scroll down, hides on scroll up"
                if (currentScroll > lastScroll) {
                    nav.classList.remove('-translate-y-full'); // Show
                } else {
                    nav.classList.add('-translate-y-full'); // Hide
                }
            } else {
                nav.classList.add('-translate-y-full'); // Always hide at top
            }
            lastScroll = currentScroll;
        });

        // 3. Accordion Logic
        const accordions = document.querySelectorAll('.faq-btn');
        accordions.forEach(acc => {
            acc.addEventListener('click', function() {
                const content = this.nextElementSibling;
                const icon = this.querySelector('iconify-icon');
                
                // Close others
                accordions.forEach(other => {
                    if (other !== this) {
                        other.nextElementSibling.style.maxHeight = null;
                        other.querySelector('iconify-icon').style.transform = 'rotate(0deg)';
                        other.querySelector('span').classList.remove('text-indigo-500');
                    }
                });

                // Toggle current
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                    icon.style.transform = 'rotate(0deg)';
                    this.querySelector('span').classList.remove('text-indigo-500');
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                    icon.style.transform = 'rotate(180deg)';
                    this.querySelector('span').classList.add('text-indigo-500');
                }
            });
        });

        // 4. Countdown Logic
        function updateTimer() {
            const now = new Date();
            let year = now.getFullYear();
            let target = new Date(year, 3, 15); // April 15 (Month is 0-indexed)
            
            if (now > target) {
                target = new Date(year + 1, 3, 15);
            }

            const diff = target - now;
            
            const d = Math.floor(diff / (1000 * 60 * 60 * 24));
            const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((diff % (1000 * 60)) / 1000);

            const strLong = `${d} days ${h} hours ${m} minutes ${s} seconds`;
            const strShort = `${d}d ${h}h ${m}m ${s}s`;

            document.getElementById('top-timer').textContent = strLong;
            document.getElementById('float-timer').textContent = strShort;
        }

        setInterval(updateTimer, 1000);
        updateTimer();
    
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
      

<div className="w-full h-[50px] bg-gradient-to-r from-indigo-500 to-indigo-600 text-white flex items-center justify-center sticky top-0 z-[60] overflow-hidden">
<div className="absolute inset-0 bg-white/10 animate-pulse"></div>
<p className="relative z-10 text-sm font-medium tracking-wide">
<span className="font-semibold tabular-nums" id="top-timer">00d 00h 00m 00s</span> until the tax deadline!
        </p>
</div>

<nav className="fixed top-0 left-0 right-0 h-20 glass-nav border-b border-slate-200 z-[50] transform -translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] flex items-center" id="sticky-nav">
<div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
<div className="flex items-center gap-3 group cursor-pointer">
<div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
<span className="font-clash font-semibold text-lg">C</span>
</div>
<span className="font-clash font-semibold text-xl tracking-tight text-slate-900">Cost Seg EZ</span>
</div>
<a className="hidden md:inline-flex items-center justify-center px-7 py-3 rounded-xl bg-indigo-500 text-white font-medium text-sm transition-all duration-300 hover:bg-indigo-600 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/30" href="#estimate">
                Get Instant Estimate <span className="ml-1">→</span>
</a>
</div>
</nav>

<header className="relative pt-24 pb-32 overflow-hidden bg-gradient-to-b from-white to-neutral-50">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col items-center text-center">

<div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-slate-600 tracking-wide">Trusted by 3,000+ real estate investors</span>
</div>

<h1 className="font-clash font-semibold text-5xl md:text-7xl leading-[1.1] tracking-tight text-slate-900 max-w-4xl mb-6 reveal active">
                Estimate your year‑one tax savings in <span className="text-gradient-header">60 seconds</span>
</h1>

<p className="font-inter text-lg md:text-xl leading-relaxed text-slate-600 max-w-2xl mb-12 reveal active delay-100">
                No commitment, no phone call. See exactly how much you could save on your next tax return with our IRS-approved cost segregation calculator.
            </p>

<div className="flex flex-col sm:flex-row items-center gap-4 reveal active delay-200 w-full sm:w-auto">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 rounded-xl bg-indigo-500 text-white font-semibold text-lg shadow-[0_8px_24px_rgba(99,102,241,0.3)] transition-all duration-300 hover:bg-indigo-600 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(99,102,241,0.4)]" href="#estimate">
                    Get FREE Estimate →
                </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 rounded-xl bg-white text-slate-800 border border-slate-200 font-semibold text-lg shadow-sm transition-all duration-300 hover:bg-slate-50 hover:-translate-y-[2px] hover:shadow-md" href="#how-it-works">
                    How It Works
                </a>
</div>
</div>
</header>

<section className="bg-white border-y border-slate-200 py-16 md:py-20">
<div className="container mx-auto px-6 max-w-7xl">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
<div className="reveal">
<div className="font-clash font-semibold text-5xl text-gradient mb-2">$7B+</div>
<div className="font-inter text-slate-600 font-medium">Cost Basis Analyzed</div>
</div>
<div className="reveal" style={{transitionDelay: '100ms'}}>
<div className="font-clash font-semibold text-5xl text-gradient mb-2">3,000+</div>
<div className="font-inter text-slate-600 font-medium">Studies Completed</div>
</div>
<div className="reveal" style={{transitionDelay: '200ms'}}>
<div className="font-clash font-semibold text-5xl text-gradient mb-2">100%</div>
<div className="font-inter text-slate-600 font-medium">IRS Acceptance Rate</div>
</div>
</div>
</div>
</section>

<section className="py-28 bg-neutral-50">
<div className="container mx-auto px-6 max-w-7xl flex flex-col items-center text-center">
<div className="inline-block px-5 py-2 rounded-full bg-indigo-50/50 border border-indigo-100 text-indigo-500 text-sm font-semibold tracking-wider uppercase mb-6">
                The Basics
            </div>
<h2 className="font-clash font-semibold text-4xl md:text-5xl text-slate-900 tracking-tight mb-5">
                Depreciation 101
            </h2>
<div className="bg-white rounded-[20px] p-8 md:p-12 border border-slate-200 shadow-sm max-w-4xl text-left md:text-center transition-all duration-300 hover:shadow-lg reveal">
<p className="font-inter text-lg text-slate-600 leading-[1.75] mb-6">
                    The IRS allows taxpayers to deduct depreciation for the wear and tear of a property.
                </p>
<p className="font-inter text-lg text-slate-600 leading-[1.75]">
                    Most people pick the default option of the straight-line method (27.5 years for residential properties or 39 years for commercial properties, which includes short-term rentals).
                </p>
</div>
</div>
</section>

<section className="py-28 bg-white overflow-hidden">
<div className="container mx-auto px-6 max-w-7xl flex flex-col items-center">
<div className="text-sm font-semibold text-indigo-500 tracking-wider uppercase mb-4">IRS APPROVED STRATEGY</div>
<h2 className="font-clash font-semibold text-4xl md:text-5xl text-slate-900 tracking-tight text-center mb-10">
                Cost Segregation is IRS Approved
            </h2>
<div className="bg-white rounded-[20px] p-8 md:p-12 border border-slate-200 shadow-sm max-w-4xl w-full transition-all duration-300 hover:shadow-lg reveal">
<p className="font-inter text-lg text-slate-600 leading-[1.75] mb-10 text-center">
                    The IRS says that different property components have different useful lives. For example, appliances and carpets typically require more frequent replacement, and so have 5 year useful lives.
                </p>

<div className="relative max-w-3xl mx-auto mb-10 group">
<div className="overflow-hidden rounded-[20px] border border-slate-200 shadow-2xl shadow-indigo-500/10 transition-transform duration-500 group-hover:scale-[1.02]">
<img alt="Property components" className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&amp;h=450&amp;fit=crop&amp;q=85"/>
</div>

<div className="absolute top-[10%] right-[5%] bg-white border border-slate-200 rounded-xl px-6 py-3 shadow-lg animate-float z-10">
<span className="text-indigo-500 font-semibold">5 years</span>
</div>

<div className="absolute bottom-[15%] left-[5%] bg-white border border-slate-200 rounded-xl px-6 py-3 shadow-lg animate-float-delayed z-10">
<span className="text-emerald-500 font-semibold">15 years</span>
</div>
</div>
<div className="space-y-6 text-center max-w-3xl mx-auto">
<p className="font-inter text-lg text-slate-600 leading-[1.75]">
<strong className="font-semibold text-slate-900">A cost seg study identifies and reclassifies property components into shorter useful life buckets for tax purposes.</strong>
</p>
<p className="font-inter text-lg text-slate-600 leading-[1.75]">
                        The result is accelerated depreciation to the property owner - higher depreciation deductions in the earlier years. This results in <strong className="font-semibold text-slate-900">significant tax savings and increased cash flow.</strong>
</p>
<p className="font-inter text-lg text-slate-600 leading-[1.75]">
<strong className="font-semibold text-slate-900">Cost seg studies do not increase your audit risk when done properly.</strong> Cost seg is an IRS-approved strategy, and we've never had a study rejected by the IRS over 20 years.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-28 bg-neutral-50">
<div className="container mx-auto px-6 max-w-7xl flex flex-col items-center">
<div className="text-sm font-semibold text-indigo-500 tracking-wider uppercase mb-4">USE YOUR SAVINGS</div>
<h2 className="font-clash font-semibold text-4xl md:text-5xl text-slate-900 tracking-tight text-center mb-4">
                Investor Outcomes
            </h2>
<p className="font-inter text-xl text-slate-500 text-center max-w-2xl mb-16">
                Smart investors reinvest their tax savings to grow their portfolio faster
            </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">

<div className="group bg-white rounded-[20px] p-10 border border-slate-200 shadow-sm relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl reveal">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
<div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-indigo-50 to-emerald-50 flex items-center justify-center mb-8 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
<span className="text-4xl">🏘️</span>
</div>
<h3 className="font-clash font-semibold text-xl text-slate-900 text-center">Reinvest into the next property</h3>
</div>

<div className="group bg-white rounded-[20px] p-10 border border-slate-200 shadow-sm relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl reveal" style={{transitionDelay: '100ms'}}>
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
<div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-indigo-50 to-emerald-50 flex items-center justify-center mb-8 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
<span className="text-4xl">💳</span>
</div>
<h3 className="font-clash font-semibold text-xl text-slate-900 text-center">Pay down debt faster</h3>
</div>

<div className="group bg-white rounded-[20px] p-10 border border-slate-200 shadow-sm relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl reveal" style={{transitionDelay: '200ms'}}>
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
<div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-indigo-50 to-emerald-50 flex items-center justify-center mb-8 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
<span className="text-4xl">💰</span>
</div>
<h3 className="font-clash font-semibold text-xl text-slate-900 text-center">Increase cash reserves</h3>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="container mx-auto px-6 max-w-4xl text-center reveal">
<div className="text-sm font-semibold text-indigo-500 tracking-wider uppercase mb-4">MAXIMIZE SAVINGS</div>
<h2 className="font-clash font-semibold text-4xl text-slate-900 tracking-tight mb-8">Bonus Depreciation</h2>
<div className="space-y-6">
<p className="font-inter text-lg text-slate-600 leading-relaxed">
<strong className="font-semibold text-slate-900">Bonus depreciation significantly accelerates the depreciation that can be deducted in year 1, materially increasing the tax savings from cost seg.</strong>
</p>
<p className="font-inter text-lg text-slate-600 leading-relaxed">
                    Depending on when you bought your property, you may be able to claim up to 100% bonus depreciation.
                </p>
</div>
</div>
</section>

<section className="py-28 bg-neutral-50">
<div className="container mx-auto px-6 max-w-7xl flex flex-col items-center">
<div className="text-sm font-semibold text-indigo-500 tracking-wider uppercase mb-4">REAL NUMBERS</div>
<h2 className="font-clash font-semibold text-4xl text-slate-900 tracking-tight text-center mb-4">
                Cost Seg Example
            </h2>
<p className="font-inter text-xl text-slate-500 text-center mb-12">
                See how much a typical property owner could save
            </p>
<div className="w-full max-w-3xl bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden reveal">
<div className="divide-y divide-slate-100">
<div className="flex justify-between items-center p-6 md:px-8">
<span className="text-slate-600 font-medium">Purchase price for a short term rental</span>
<span className="text-slate-900 font-semibold tabular-nums">$1,000,000</span>
</div>
<div className="flex justify-between items-center p-6 md:px-8">
<span className="text-slate-600 font-medium">% allocated to land (not depreciable)</span>
<span className="text-slate-900 font-semibold tabular-nums">20%</span>
</div>
<div className="flex justify-between items-center p-6 md:px-8">
<span className="text-slate-600 font-medium">Depreciable basis</span>
<span className="text-slate-900 font-semibold tabular-nums">$800,000</span>
</div>
<div className="flex justify-between items-center p-6 md:px-8">
<span className="text-slate-600 font-medium">Reclass %</span>
<span className="text-slate-900 font-semibold tabular-nums">~ 25%</span>
</div>
<div className="flex justify-between items-center p-6 md:px-8">
<span className="text-slate-600 font-medium">Bonus depreciation eligible assets</span>
<span className="text-slate-900 font-semibold tabular-nums">~ $200,000</span>
</div>

<div className="flex justify-between items-center p-8 bg-emerald-50/40">
<span className="text-emerald-700 font-semibold text-lg">Year 1 tax savings at a 37% tax rate</span>
<span className="text-emerald-700 font-semibold text-xl tabular-nums">~ $74,000</span>
</div>
</div>
</div>
<p className="mt-8 text-slate-400 italic text-center font-inter">
                Higher depreciation → Lower taxable income → Improved cash flow
            </p>
</div>
</section>

<section className="py-28 bg-white" id="estimate">
<div className="container mx-auto px-6 max-w-7xl flex flex-col items-center">
<div className="text-sm font-semibold text-indigo-500 tracking-wider uppercase mb-4">GET STARTED</div>
<h2 className="font-clash font-semibold text-4xl md:text-5xl text-slate-900 tracking-tight text-center mb-4">
                See How Much You Could Save
            </h2>
<p className="font-inter text-xl text-slate-500 text-center mb-12">
                Enter your property details — takes under 60 seconds
            </p>
<div className="w-full max-w-4xl bg-white rounded-3xl border border-slate-200 p-8 md:p-14 shadow-2xl shadow-indigo-500/10 reveal">
<form className="grid grid-cols-1 md:grid-cols-2 gap-7">

<div className="space-y-2">
<label className="block text-sm font-semibold text-slate-900">Name *</label>
<input className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all duration-200" placeholder="John Doe" type="text"/>
</div>

<div className="space-y-2">
<label className="block text-sm font-semibold text-slate-900">Email *</label>
<input className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all duration-200" placeholder="john@example.com" type="email"/>
</div>

<div className="space-y-2">
<label className="block text-sm font-semibold text-slate-900">Phone *</label>
<input className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all duration-200" placeholder="(555) 123-4567" type="tel"/>
</div>

<div className="space-y-2 relative">
<label className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                            Property Type *
                            <span className="group relative flex items-center justify-center w-4 h-4 rounded-full border border-slate-300 text-[10px] text-slate-400 cursor-help tooltip-trigger">?</span>
<span className="tooltip-content absolute left-0 bottom-full mb-2 w-48 p-2 bg-slate-800 text-white text-xs rounded-lg opacity-0 invisible transition-all z-20 pointer-events-none">Select the primary use of the property.</span>
</label>
<div className="relative">
<select className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white text-slate-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all duration-200 appearance-none cursor-pointer">
<option disabled="" selected="">Choose Property Type</option>
<option>Short-Term Rental</option>
<option>Multifamily (5+ units)</option>
<option>Office</option>
<option>Retail</option>
<option>Industrial / Warehouse</option>
<option>Hotel / Hospitality</option>
</select>
<div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="space-y-2">
<label className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                            Depreciable Basis ($)
                            <span className="group relative flex items-center justify-center w-4 h-4 rounded-full border border-slate-300 text-[10px] text-slate-400 cursor-help tooltip-trigger">?</span>
<span className="tooltip-content absolute left-0 bottom-full mb-2 w-48 p-2 bg-slate-800 text-white text-xs rounded-lg opacity-0 invisible transition-all z-20 pointer-events-none">Purchase price minus land value.</span>
</label>
<input className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all duration-200" placeholder="800,000" type="text"/>
</div>

<div className="space-y-2">
<label className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                            Date Placed in Service
                            <span className="group relative flex items-center justify-center w-4 h-4 rounded-full border border-slate-300 text-[10px] text-slate-400 cursor-help tooltip-trigger">?</span>
<span className="tooltip-content absolute left-0 bottom-full mb-2 w-48 p-2 bg-slate-800 text-white text-xs rounded-lg opacity-0 invisible transition-all z-20 pointer-events-none">When the property was ready for use.</span>
</label>
<input className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white text-slate-900 text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all duration-200" type="date"/>
</div>

<div className="space-y-2 relative">
<label className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                            Bonus Depreciation %
                            <span className="group relative flex items-center justify-center w-4 h-4 rounded-full border border-slate-300 text-[10px] text-slate-400 cursor-help tooltip-trigger">?</span>
<span className="tooltip-content absolute left-0 bottom-full mb-2 w-48 p-2 bg-slate-800 text-white text-xs rounded-lg opacity-0 invisible transition-all z-20 pointer-events-none">Percentage allowed based on tax year.</span>
</label>
<div className="relative">
<select className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white text-slate-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all duration-200 appearance-none cursor-pointer">
<option disabled="" selected="">Choose Bonus Depreciation</option>
<option>100%</option>
<option>80%</option>
<option>60%</option>
<option>40%</option>
<option>20%</option>
</select>
<div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="space-y-2">
<label className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                            Federal Tax Rate (%)
                            <span className="group relative flex items-center justify-center w-4 h-4 rounded-full border border-slate-300 text-[10px] text-slate-400 cursor-help tooltip-trigger">?</span>
<span className="tooltip-content absolute left-0 bottom-full mb-2 w-48 p-2 bg-slate-800 text-white text-xs rounded-lg opacity-0 invisible transition-all z-20 pointer-events-none">Your marginal federal income tax bracket.</span>
</label>
<input className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all duration-200" placeholder="37" type="number"/>
</div>

<div className="md:col-span-2 mt-4">
<p className="text-sm text-slate-400 text-center mb-6">
                            There are many factors that impact how a cost segregation study may impact your taxes. Tax savings are provided for estimate purposes only. I have read and agree with the <a className="text-indigo-500 hover:underline" href="#">Terms &amp; Conditions</a>.*
                        </p>
<button className="w-full py-5 rounded-xl bg-indigo-500 text-white font-semibold text-xl shadow-[0_8px_24px_rgba(99,102,241,0.3)] transition-all duration-300 hover:bg-indigo-600 hover:-translate-y-[2px] hover:shadow-[0_12px_30px_rgba(99,102,241,0.4)]" type="button">
                            Get FREE Estimate →
                        </button>
</div>
</form>
</div>
</div>
</section>

<section className="bg-neutral-50 py-20">
<div className="container mx-auto px-6 max-w-7xl text-center">
<div className="text-sm font-semibold text-indigo-500 tracking-wider uppercase mb-4">20 YEARS OF EXCELLENCE</div>
<h2 className="font-clash font-semibold text-3xl md:text-4xl text-slate-900 mb-12">We've Been Trusted by Real Estate Investors Nationwide</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="reveal">
<div className="font-clash font-semibold text-5xl text-gradient mb-2">$7B+</div>
<div className="font-inter text-slate-600 font-medium">Cost Basis Analyzed</div>
</div>
<div className="reveal" style={{transitionDelay: '100ms'}}>
<div className="font-clash font-semibold text-5xl text-gradient mb-2">3,000+</div>
<div className="font-inter text-slate-600 font-medium">Studies Completed</div>
</div>
<div className="reveal" style={{transitionDelay: '200ms'}}>
<div className="font-clash font-semibold text-5xl text-gradient mb-2">100%</div>
<div className="font-inter text-slate-600 font-medium">IRS Acceptance Rate</div>
</div>
</div>
</div>
</section>

<section className="py-28 bg-white">
<div className="container mx-auto px-6 max-w-5xl text-center">
<div className="text-sm font-semibold text-indigo-500 tracking-wider uppercase mb-4">OUR PROMISE</div>
<h2 className="font-clash font-semibold text-4xl text-slate-900 tracking-tight mb-4">We Stand Behind Our Work</h2>
<p className="font-inter text-xl text-slate-500 mb-16">Every study is backed by our guarantees</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-white rounded-[20px] p-12 border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group reveal">
<div className="w-[72px] h-[72px] mx-auto rounded-[18px] bg-gradient-to-br from-indigo-50 to-emerald-50 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
<iconify-icon className="text-indigo-500" icon="solar:shield-check-linear" width="32"></iconify-icon>
</div>
<h3 className="font-clash font-semibold text-2xl text-slate-900 mb-3">Lifetime Audit Protection</h3>
<p className="font-inter text-slate-600 leading-relaxed">We stand behind our work with comprehensive audit protection</p>
</div>

<div className="bg-white rounded-[20px] p-12 border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group reveal" style={{transitionDelay: '100ms'}}>
<div className="w-[72px] h-[72px] mx-auto rounded-[18px] bg-gradient-to-br from-indigo-50 to-emerald-50 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
<iconify-icon className="text-indigo-500" icon="solar:verified-check-linear" width="32"></iconify-icon>
</div>
<h3 className="font-clash font-semibold text-2xl text-slate-900 mb-3">No Studies Rejected</h3>
<p className="font-inter text-slate-600 leading-relaxed">The IRS has accepted 100% of our studies because of our engineering-based methodology</p>
</div>
</div>
</div>
</section>

<section className="py-28 bg-neutral-50" id="how-it-works">
<div className="container mx-auto px-6 max-w-4xl">
<div className="text-center mb-16">
<div className="text-sm font-semibold text-indigo-500 tracking-wider uppercase mb-4">QUESTIONS</div>
<h2 className="font-clash font-semibold text-4xl text-slate-900 tracking-tight">Frequently Asked Questions</h2>
</div>
<div className="space-y-4">

<div className="bg-white rounded-2xl border border-slate-200 overflow-hidden reveal">
<button className="faq-btn w-full px-8 py-6 text-left flex justify-between items-center group">
<span className="font-inter font-semibold text-lg text-slate-900 group-hover:text-indigo-500 transition-colors">What is cost segregation and how does it work?</span>
<iconify-icon className="text-slate-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</button>
<div className="faq-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
<div className="px-8 pb-6 text-slate-600 leading-relaxed">
                            Cost segregation is an IRS-approved tax strategy that reclassifies property components from 27.5/39 year depreciation to 5, 7, or 15 year schedules — unlocking accelerated depreciation and immediate tax savings.
                        </div>
</div>
</div>

<div className="bg-white rounded-2xl border border-slate-200 overflow-hidden reveal">
<button className="faq-btn w-full px-8 py-6 text-left flex justify-between items-center group">
<span className="font-inter font-semibold text-lg text-slate-900 group-hover:text-indigo-500 transition-colors">What types of properties qualify for cost seg?</span>
<iconify-icon className="text-slate-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</button>
<div className="faq-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
<div className="px-8 pb-6 text-slate-600 leading-relaxed">
                            Almost any commercial or residential rental property qualifies — short-term rentals, multifamily, offices, retail, industrial, hotels, and mixed-use properties.
                        </div>
</div>
</div>

<div className="bg-white rounded-2xl border border-slate-200 overflow-hidden reveal">
<button className="faq-btn w-full px-8 py-6 text-left flex justify-between items-center group">
<span className="font-inter font-semibold text-lg text-slate-900 group-hover:text-indigo-500 transition-colors">How much can I expect to save?</span>
<iconify-icon className="text-slate-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</button>
<div className="faq-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
<div className="px-8 pb-6 text-slate-600 leading-relaxed">
                            Typically 15–40% of the depreciable basis can be reclassified. On a $1M property, that could mean $50K–$100K+ in year-one savings depending on your tax rate.
                        </div>
</div>
</div>

<div className="bg-white rounded-2xl border border-slate-200 overflow-hidden reveal">
<button className="faq-btn w-full px-8 py-6 text-left flex justify-between items-center group">
<span className="font-inter font-semibold text-lg text-slate-900 group-hover:text-indigo-500 transition-colors">How much does this cost?</span>
<iconify-icon className="text-slate-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</button>
<div className="faq-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
<div className="px-8 pb-6 text-slate-600 leading-relaxed">
                            Cost depends on property type and complexity. Most studies pay for themselves many times over. Get a free estimate to see your potential ROI.
                        </div>
</div>
</div>

<div className="bg-white rounded-2xl border border-slate-200 overflow-hidden reveal">
<button className="faq-btn w-full px-8 py-6 text-left flex justify-between items-center group">
<span className="font-inter font-semibold text-lg text-slate-900 group-hover:text-indigo-500 transition-colors">Will a cost seg study trigger an IRS audit?</span>
<iconify-icon className="text-slate-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</button>
<div className="faq-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
<div className="px-8 pb-6 text-slate-600 leading-relaxed">
                            No. Cost segregation is fully IRS-approved. Our engineering-based studies follow all guidelines, and we include audit protection with every study.
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-28 bg-white">
<div className="container mx-auto px-6 max-w-6xl text-center">
<div className="text-sm font-semibold text-indigo-500 tracking-wider uppercase mb-4">SIMPLE PROCESS</div>
<h2 className="font-clash font-semibold text-4xl text-slate-900 tracking-tight mb-4">Process and Pricing</h2>
<p className="font-inter text-xl text-slate-500 mb-16">Get started in minutes, save thousands on taxes</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10">

<div className="bg-white rounded-[20px] p-10 border border-slate-200 shadow-sm relative overflow-hidden group hover:-translate-y-2 hover:shadow-xl transition-all duration-300 reveal">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
<div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-indigo-500 to-emerald-500 flex items-center justify-center text-white font-bold text-xl mb-6 shadow-md">1</div>
<h3 className="font-clash font-semibold text-xl text-slate-900 mb-4">Get FREE Estimate</h3>
<p className="text-slate-600 mb-4 leading-relaxed">Input some basic info about your property and get a FREE estimate of the potential tax savings.</p>
<p className="text-sm text-slate-400 italic">Takes 2 minutes</p>
</div>

<div className="bg-white rounded-[20px] p-10 border border-slate-200 shadow-sm relative overflow-hidden group hover:-translate-y-2 hover:shadow-xl transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
<div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-indigo-500 to-emerald-500 flex items-center justify-center text-white font-bold text-xl mb-6 shadow-md">2</div>
<h3 className="font-clash font-semibold text-xl text-slate-900 mb-4">Generate Report</h3>
<p className="text-slate-600 mb-4 leading-relaxed">Input your property details and INSTANTLY generate your cost seg report. Reviewed by engineers.</p>
<p className="text-sm text-slate-400 italic">Takes 15 minutes and starts at ~$795</p>
</div>

<div className="bg-white rounded-[20px] p-10 border border-slate-200 shadow-sm relative overflow-hidden group hover:-translate-y-2 hover:shadow-xl transition-all duration-300 reveal" style={{transitionDelay: '200ms'}}>
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
<div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-indigo-500 to-emerald-500 flex items-center justify-center text-white font-bold text-xl mb-6 shadow-md">3</div>
<h3 className="font-clash font-semibold text-xl text-slate-900 mb-4">Save Money!</h3>
<p className="text-slate-600 mb-4 leading-relaxed">Implement the results into your federal and state tax filings and save money on your income taxes!</p>
<p className="text-sm text-slate-400 italic">~8% savings of purchase price</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50">
<div className="container mx-auto px-6 max-w-6xl">
<div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-[24px] p-12 md:p-20 text-center text-white shadow-2xl relative overflow-hidden group">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.2),_transparent_50%)] animate-pulse-slow"></div>
<h2 className="relative font-clash font-semibold text-4xl md:text-5xl tracking-tight mb-5">Still Have Questions?</h2>
<p className="relative font-inter text-indigo-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                    Schedule a free consultation with our team to see if cost segregation is right for you.
                </p>
<a className="relative inline-flex items-center justify-center px-12 py-5 rounded-xl bg-white text-indigo-600 font-bold text-lg shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" href="#">
                    Schedule A Free Consultation
                </a>
</div>
</div>
</section>

<div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 bg-white border border-slate-200 rounded-2xl p-6 shadow-2xl z-[998] min-w-[260px] transition-all duration-300 hover:-translate-y-1 hover:shadow-indigo-500/10">
<div className="text-xs font-semibold text-slate-400 tracking-wider uppercase mb-2">TAX DEADLINE IN</div>
<div className="font-clash font-semibold text-3xl text-indigo-500 tabular-nums mb-1" id="float-timer">
            00d 00h 00m 00s
        </div>
<div className="text-xs text-slate-500">Don't miss out!</div>
</div>


    </>
  );
}
