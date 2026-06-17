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
      

<nav className="fixed top-0 w-full z-50 border-b border-zinc-100 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-zinc-900 text-white flex items-center justify-center rounded-lg group-hover:bg-zinc-800 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:layers" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
<path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
<path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
</g>
</svg>
</div>
<span className="text-sm font-semibold text-zinc-900 tracking-tighter">
            Selfie Events
          </span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#services">
            Services
          </a>
<a className="hover:text-zinc-900 transition-colors" href="#process">
            Process
          </a>
<a className="hover:text-zinc-900 transition-colors" href="#portfolio">
            Gallery
          </a>
<a className="hover:text-zinc-900 transition-colors" href="#pricing">
            Pricing
          </a>
</div>
<a className="hidden md:flex items-center gap-2 text-xs font-medium bg-zinc-900 text-white px-4 py-2 rounded-full hover:bg-zinc-800 transition-all shadow-sm ring-1 ring-zinc-900/5 hover:shadow-md" href="#contact">
          Book Consultation
          <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>

<button className="md:hidden text-zinc-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</nav>

<section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden">
<div className="absolute inset-0 -z-10">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-zinc-100 to-transparent rounded-[100%] blur-3xl opacity-60"></div>
</div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex gap-2 bg-zinc-50 border-zinc-200 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-zinc-600 tracking-wide">
            Accepting bookings from 2023
          </span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-zinc-900 mb-6 max-w-4xl mx-auto leading-[0.95]">
          Events crafted with
          <br className="hidden md:block"/>
<span className="text-zinc-400">precision &amp; art.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto font-light leading-relaxed mb-10">
          Selfie Events delivers premium event management with a focus on
          efficiency. We eliminate the unnecessary to provide high-value
          experiences for discerning clients.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="h-12 px-8 rounded-lg bg-zinc-900 text-white font-medium text-sm flex items-center justify-center hover:bg-zinc-800 transition-all w-full sm:w-auto shadow-lg shadow-zinc-200" href="#contact">
            Start Planning
          </a>
<a className="h-12 px-8 rounded-lg bg-white border border-zinc-200 text-zinc-700 font-medium text-sm flex items-center justify-center hover:bg-zinc-50 hover:border-zinc-300 transition-all w-full sm:w-auto" href="#portfolio">
            View Portfolio
          </a>
</div>
</div>
</section>

<section className="border-y border-zinc-100 bg-zinc-50/50 py-12">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col items-center justify-center text-center">
<span className="text-3xl font-semibold tracking-tight text-zinc-900">
            150+
          </span>
<span className="text-xs text-zinc-500 uppercase tracking-widest mt-2">
            Events Executed
          </span>
</div>
<div className="flex flex-col items-center justify-center text-center">
<span className="text-3xl font-semibold tracking-tight text-zinc-900">
            30%
          </span>
<span className="text-xs text-zinc-500 uppercase tracking-widest mt-2">
            Avg. Cost Saving
          </span>
</div>
<div className="flex flex-col items-center justify-center text-center">
<span className="text-3xl font-semibold tracking-tight text-zinc-900">
            100%
          </span>
<span className="text-xs text-zinc-500 uppercase tracking-widest mt-2">
            Client Satisfaction
          </span>
</div>
<div className="flex flex-col items-center justify-center text-center">
<span className="text-3xl font-semibold tracking-tight text-zinc-900">
            24/7
          </span>
<span className="text-xs text-zinc-500 uppercase tracking-widest mt-2">
            Dedicated Support
          </span>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-900 mb-4">
            Orchestrated to perfection.
          </h2>
<p className="text-zinc-500 max-w-xl text-lg font-light">
            We specialize in weddings, corporate gatherings, and private
            parties, balancing aesthetic beauty with logistical rigor.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl border border-zinc-100 bg-zinc-50/50 hover:bg-white hover:border-zinc-200 hover:shadow-xl hover:shadow-zinc-100/50 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl border border-zinc-200 flex items-center justify-center mb-6 text-zinc-700 shadow-sm group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:gem" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M10.5 3L8 9l4 13l4-13l-2.5-6"></path>
<path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3zM2 9h20"></path>
</g>
</svg>
</div>
<h3 className="text-xl font-medium text-zinc-900 mb-3 tracking-tight">
              Weddings &amp; Unions
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed">
              End-to-end planning for modern weddings. We handle vendor
              negotiations, decor sourcing, and day-of coordination to ensure
              your budget goes further without compromising elegance.
            </p>
</div>

<div className="group p-8 rounded-2xl border border-zinc-100 bg-zinc-50/50 hover:bg-white hover:border-zinc-200 hover:shadow-xl hover:shadow-zinc-100/50 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl border border-zinc-200 flex items-center justify-center mb-6 text-zinc-700 shadow-sm group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:briefcase" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
<rect height="14" rx="2" width="20" x="2" y="6"></rect>
</g>
</svg>
</div>
<h3 className="text-xl font-medium text-zinc-900 mb-3 tracking-tight">
              Corporate Events
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed">
              Professional conferences, retreats, and product launches. We focus
              on brand alignment and seamless execution, allowing you to focus
              on your stakeholders.
            </p>
</div>

<div className="group p-8 rounded-2xl border border-zinc-100 bg-zinc-50/50 hover:bg-white hover:border-zinc-200 hover:shadow-xl hover:shadow-zinc-100/50 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl border border-zinc-200 flex items-center justify-center mb-6 text-zinc-700 shadow-sm group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:palette" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 22a1 1 0 0 1 0-20a10 9 0 0 1 10 9a5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path>
<circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle>
<circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle>
<circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle>
<circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle>
</g>
</svg>
</div>
<h3 className="text-xl font-medium text-zinc-900 mb-3 tracking-tight">
              Private Arts &amp; Parties
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed">
              Curated birthdays, anniversaries, and art exhibitions. Unique
              themes designed with a creative touch, managed with absolute
              discretion and fiscal responsibility.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 text-white grainy-bg relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">
              High standards.Sensible costs.
            </h2>
<p className="text-zinc-400 text-lg font-light leading-relaxed mb-8">
              The event industry is often opaque and overpriced. Selfie Events
              was founded to provide the higher middle class with a transparent,
              efficient alternative.
            </p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<span className="mt-1 text-emerald-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check-circle-2" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12l2 2l4-4"></path>
</g>
</svg>
</span>
<div>
<h4 className="text-white font-medium mb-1">
                    Transparent Budgeting
                  </h4>
<p className="text-sm text-zinc-400">
                    Every expense is tracked. No hidden fees or markup on vendor
                    costs.
                  </p>
</div>
</li>
<li className="flex items-start gap-4">
<span className="mt-1 text-emerald-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check-circle-2" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12l2 2l4-4"></path>
</g>
</svg>
</span>
<div>
<h4 className="text-white font-medium mb-1">Vendor Network</h4>
<p className="text-sm text-zinc-400">
                    Access to a curated list of high-quality, reasonably priced
                    artisans and suppliers.
                  </p>
</div>
</li>
<li className="flex items-start gap-4">
<span className="mt-1 text-emerald-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check-circle-2" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12l2 2l4-4"></path>
</g>
</svg>
</span>
<div className="">
<h4 className="text-white font-medium mb-1">The "Art" Factor</h4>
<p className="text-sm text-zinc-400">
                    We don't just organize; we design. Tasteful aesthetics that
                    look expensive but aren't.
                  </p>
</div>
</li>
</ul>
</div>
<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl"></div>
<div className="relative bg-zinc-800 rounded-xl border border-zinc-700 p-8 shadow-2xl">
<div className="flex items-center justify-between mb-8 border-b border-zinc-700 pb-4">
<span className="text-sm font-medium text-zinc-300">
                  Estimated Event Cost Savings
                </span>
<svg aria-hidden="true" className="iconify text-zinc-500 iconify--lucide" data-icon="lucide:trending-down" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M16 17h6v-6"></path>
<path d="m22 17l-8.5-8.5l-5 5L2 7"></path>
</g>
</svg>
</div>
<div className="space-y-6">
<div className="">
<div className="flex justify-between text-xs mb-2">
<span className="text-zinc-400">Standard Agency</span>
<span className="text-zinc-400">Rs25,000</span>
</div>
<div className="h-2 w-full bg-zinc-700 rounded-full overflow-hidden">
<div className="h-full bg-zinc-500 w-full"></div>
</div>
</div>
<div className="">
<div className="flex justify-between text-xs mb-2">
<span className="text-white font-medium">Selfie Events</span>
<span className="font-medium text-emerald-400">Rs18,000</span>
</div>
<div className="h-2 w-full bg-zinc-700 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-[66%] shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-zinc-700">
<p className="text-xs text-zinc-400 italic">
                  "Selfie Events saved us nearly 35% on our wedding budget while
                  delivering a look that felt twice as expensive."
                </p>
<div className="mt-2 flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-zinc-600 flex items-center justify-center text-[10px] text-white">
                    AK
                  </div>
<span className="text-xs text-zinc-500">Arjun K., Chennai</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="portfolio">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div className="">
<h2 className="text-3xl font-medium tracking-tight text-zinc-900">
              Our Work
            </h2>
<p className="text-zinc-500 mt-2 text-sm">
              A glimpse into recent low-cost, high-impact events.
            </p>
</div>
<a className="text-sm font-medium text-zinc-900 flex items-center gap-1 hover:text-zinc-600 transition-colors" href="#">
            View Full Gallery
            <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-96 md:h-[500px]">

<div className="relative group overflow-hidden rounded-xl bg-zinc-100 col-span-1 lg:col-span-2 row-span-2">
<div className="absolute inset-0 bg-gradient-to-tr from-rose-100 to-teal-50 opacity-80"></div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-32 h-32 rounded-full border border-zinc-900/10 backdrop-blur-sm"></div>
</div>
<div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest bg-white/80 px-2 py-1 rounded-sm backdrop-blur-md">
                Wedding
              </span>
<h3 className="text-xl font-medium text-zinc-900 mt-2">
                The Riverside Gala
              </h3>
</div>
</div>

<div className="relative group overflow-hidden rounded-xl bg-zinc-100">
<div className="absolute inset-0 bg-gradient-to-bl from-blue-50 to-indigo-100 opacity-80"></div>
<div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest bg-white/80 px-2 py-1 rounded-sm backdrop-blur-md">
                Corporate
              </span>
<h3 className="text-lg font-medium text-zinc-900 mt-2">
                Tech Summit '23
              </h3>
</div>
</div>

<div className="relative group overflow-hidden rounded-xl bg-zinc-100">
<div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-100 opacity-80"></div>
<div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest bg-white/80 px-2 py-1 rounded-sm backdrop-blur-md">
                Private
              </span>
<h3 className="text-lg font-medium text-zinc-900 mt-2">
                Garden Soirée
              </h3>
</div>
</div>

<div className="relative group overflow-hidden rounded-xl bg-zinc-100 lg:col-span-2">
<div className="absolute inset-0 bg-gradient-to-r from-zinc-100 to-zinc-200 opacity-80"></div>
<div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest bg-white/80 px-2 py-1 rounded-sm backdrop-blur-md">
                Exhibition
              </span>
<h3 className="text-lg font-medium text-zinc-900 mt-2">
                Modern Art Collective
              </h3>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-zinc-100 bg-zinc-50" id="pricing">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-3xl font-medium tracking-tight text-zinc-900 mb-6">
          Simple, Flat-Fee Pricing
        </h2>
<p className="text-zinc-500 mb-12 font-light">
          We charge a flat management fee based on the complexity of your event,
          not a percentage of your total spend. This aligns our incentives with
          yours: saving money.
        </p>
<div className="bg-white rounded-2xl shadow-xl shadow-zinc-200/50 border border-zinc-200 overflow-hidden">
<div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-zinc-100">
<div className="p-8 hover:bg-zinc-50 transition-colors text-left">
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg font-medium text-zinc-900">Essential</h3>
<svg aria-hidden="true" className="iconify text-zinc-400 iconify--lucide" data-icon="lucide:zap" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<p className="text-sm text-zinc-500 mb-6 min-h-[40px]">
                Perfect for private parties and small gatherings requiring
                coordination.
              </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-zinc-600">
<svg aria-hidden="true" className="iconify text-zinc-900 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                  Vendor Coordination
                </li>
<li className="flex items-center gap-3 text-sm text-zinc-600">
<svg aria-hidden="true" className="iconify text-zinc-900 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                  Day-of Management
                </li>
<li className="flex items-center gap-3 text-sm text-zinc-600">
<svg aria-hidden="true" className="iconify text-zinc-900 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                  Budget Tracking
                </li>
</ul>
<a className="block w-full py-2.5 text-center rounded-lg border border-zinc-200 text-zinc-900 text-sm font-medium hover:border-zinc-300 hover:bg-zinc-50 transition-all" href="#contact">
                Get Quote
              </a>
</div>
<div className="p-8 hover:bg-zinc-50 transition-colors text-left relative">
<div className="absolute top-0 right-0 bg-zinc-900 text-white text-[10px] uppercase font-bold px-2 py-1 rounded-bl-lg">
                Popular
              </div>
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg font-medium text-zinc-900">Premium</h3>
<svg aria-hidden="true" className="iconify text-zinc-400 iconify--lucide" data-icon="lucide:star" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<p className="text-sm text-zinc-500 mb-6 min-h-[40px]">
                Comprehensive planning for weddings and corporate events.
              </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-zinc-600">
<svg aria-hidden="true" className="iconify text-zinc-900 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                  Everything in Essential
                </li>
<li className="flex items-center gap-3 text-sm text-zinc-600">
<svg aria-hidden="true" className="iconify text-zinc-900 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                  Design &amp; Styling (The Arts)
                </li>
<li className="flex items-center gap-3 text-sm text-zinc-600">
<svg aria-hidden="true" className="iconify text-zinc-900 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                  Vendor Negotiations
                </li>
</ul>
<a className="block w-full py-2.5 text-center rounded-lg bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition-all shadow-md" href="#contact">
                Get Quote
              </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="contact">
<div className="max-w-xl mx-auto px-6">
<div className="text-center mb-10">
<h2 className="text-3xl font-medium tracking-tight text-zinc-900">
            Let's plan something efficient.
          </h2>
<p className="text-zinc-500 mt-2 text-sm">
            Fill out the form below for a free initial cost estimate.
          </p>
</div>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-700 ml-1" htmlFor="name">
                Name
              </label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-300 transition-all" id="name" placeholder="Jane Doe" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-700 ml-1" htmlFor="email">
                Email
              </label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-300 transition-all" id="email" placeholder="jane@example.com" type="email"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-700 ml-1" htmlFor="type">
              Event Type
            </label>
<div className="relative">
<select className="w-full appearance-none bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-300 transition-all" id="type">
<option>Wedding</option>
<option>Corporate Event</option>
<option>Private Party</option>
<option>Art Exhibition</option>
<option>Other</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-zinc-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-down" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-700 ml-1" htmlFor="message">
              Details
            </label>
<textarea className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-300 transition-all resize-none" id="message" placeholder="Tell us about your estimated budget and date..." rows="4"></textarea>
</div>
<button className="w-full bg-zinc-900 text-white font-medium rounded-lg px-4 py-3.5 text-sm mt-2 hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-zinc-200" type="button">
            Send Inquiry
            <svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform iconify--lucide" data-icon="lucide:send" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</form>
</div>
</section>

<footer className="bg-white border-t border-zinc-100 py-12 mt-auto">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-zinc-200 text-zinc-900 flex items-center justify-center rounded-md">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:layers" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
<path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
<path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
</g>
</svg>
</div>
<span className="text-sm font-semibold tracking-tight text-zinc-900">
            Selfie Events
          </span>
</div>
<p className="text-xs text-zinc-400 text-center md:text-right">
          © 2024 Selfie Events. All rights reserved.
          <br/>
<span className="opacity-60">
            Designed for efficiency. Built with care.
          </span>
</p>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
</g>
</svg>
</a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:mail" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
</g>
</svg>
</a>
</div>
</div>
</footer>

    </>
  );
}
