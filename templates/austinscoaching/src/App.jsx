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



      lucide.createIcons({
        attrs: {
          'stroke-width': 1.5
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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tighter flex items-center gap-3" href="#">

<div className="relative w-8 h-8 rounded-full overflow-hidden border border-neutral-200 bg-neutral-100">
<img alt="Austin Okai" className="w-full h-full object-cover" src="austin-okai.jpg"/>
</div>
          AustinOkai.
        </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-500">
<a className="hover:text-neutral-900 transition-colors" href="#reality">
            The Reality
          </a>
<a className="hover:text-neutral-900 transition-colors" href="#profit-drivers">
            Profit Drivers
          </a>
<a className="hover:text-neutral-900 transition-colors" href="#execution">
            Execution &amp; Booking
          </a>
</div>
<a className="text-sm font-medium bg-neutral-900 text-white px-4 py-2 rounded-full hover:bg-neutral-800 transition-all shadow-lg shadow-neutral-500/20" href="#execution">
          Book Consultation
        </a>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="absolute inset-0 bg-grid -z-10 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-50 border border-neutral-200 text-xs font-medium text-neutral-600 mb-8">
<span className="w-2 h-2 rounded-full bg-neutral-900 animate-pulse"></span>
          No fluff. Just ROI.
        </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-neutral-900 mb-8 leading-[1.1]">
          Business is not a hobby.
          <br/>
<span className="text-neutral-400">It's for making money.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
          Stop playing business. If it doesn't lead to a sale or a higher profit margin, cut it. I build the systems that strip away the noise so you can focus on what matters: selling.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-neutral-900 text-white rounded-lg font-medium hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 shadow-xl shadow-neutral-900/10" href="#execution">
<svg className="lucide lucide-calendar-check w-4 h-4" data-lucide="calendar-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
            Select Your Track
          </a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white border border-neutral-200 text-neutral-700 rounded-lg font-medium hover:bg-neutral-50 transition-all flex items-center justify-center gap-2" href="#reality">
            Why You're Stuck
          </a>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50 border-y border-neutral-200" id="reality">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-semibold tracking-tight mb-6">
              You're Burning Cash on "Nice-to-Haves"
            </h2>
<p className="text-neutral-500 mb-8 leading-relaxed">
              Most entrepreneurs treat business like a creative outlet. They buy tools they don't use and build processes for customers they don't have. That is a hobby, not a business.
            </p>
<div className="space-y-4">
<div className="flex items-start gap-4">
<div className="mt-1 bg-red-50 text-red-600 p-1.5 rounded border border-red-100">
<svg className="lucide lucide-trending-down w-4 h-4" data-lucide="trending-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 17h6v-6"></path><path d="m22 17-8.5-8.5-5 5L2 7"></path></svg>
</div>
<div>
<h3 className="font-medium text-neutral-900">Zero Sales Focus</h3>
<p className="text-sm text-neutral-500 mt-1">
                    Spending time on "branding" while your sales pipeline is empty.
                  </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 bg-red-50 text-red-600 p-1.5 rounded border border-red-100">
<svg className="lucide lucide-banknote w-4 h-4" data-lucide="banknote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="2" width="20" x="2" y="6"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg>
</div>
<div>
<h3 className="font-medium text-neutral-900">Operational Bloat</h3>
<p className="text-sm text-neutral-500 mt-1">
                    Paying for subscriptions that don't directly generate revenue.
                  </p>
</div>
</div>
</div>
</div>
<div className="relative group">
<div className="absolute inset-0 bg-gradient-to-tr from-neutral-200 to-neutral-100 rounded-2xl transform rotate-3 group-hover:rotate-2 transition-transform duration-500"></div>
<div className="relative bg-white border border-neutral-200 rounded-2xl p-8 shadow-sm">
<div className="flex items-center gap-3 mb-6 border-b border-neutral-100 pb-6">
<div className="w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center text-white">
<svg className="lucide lucide-target w-5 h-5" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<div>
<h3 className="font-semibold text-lg tracking-tight">
                    The Austin Okai Standard
                  </h3>
<p className="text-xs text-neutral-400">
                    Profit-First Architecture
                  </p>
</div>
</div>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-neutral-600">
<svg className="lucide lucide-bar-chart-3 w-4 h-4 text-neutral-900" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
<span>Systems Built for Conversion</span>
</li>
<li className="flex items-center gap-3 text-sm text-neutral-600">
<svg className="lucide lucide-scissors w-4 h-4 text-neutral-900" data-lucide="scissors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12 12 12"></path><path d="M20 4 8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8 20 20"></path></svg>
<span>Ruthless Cost Cutting</span>
</li>
<li className="flex items-center gap-3 text-sm text-neutral-600">
<svg className="lucide lucide-zap w-4 h-4 text-neutral-900" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span>Automated Revenue Collection</span>
</li>
<li className="flex items-center gap-3 text-sm text-neutral-600">
<svg className="lucide lucide-lock w-4 h-4 text-neutral-900" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
<span>Protecting Your Margins</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="profit-drivers">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Only Pay for What Pays You.
          </h2>
<p className="text-neutral-500 max-w-xl">
            We don't do aesthetics for the sake of it. We implement engines that drive cash flow.
          </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-8 border border-neutral-200 rounded-xl hover:border-neutral-400 transition-colors duration-300">
<div className="w-12 h-12 bg-neutral-50 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-wallet-2 w-6 h-6 text-neutral-900" data-lucide="wallet-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 14h.01"></path><path d="M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14"></path></svg>
</div>
<h3 className="text-lg font-semibold mb-3 tracking-tight">
              Expense Elimination
            </h3>
<p className="text-sm text-neutral-500 leading-relaxed">
              I audit your tools. If it's not bringing in a customer or keeping one, it's gone. We replace expensive SaaS with lean, owned solutions.
            </p>
</div>

<div className="group p-8 border border-neutral-200 rounded-xl hover:border-neutral-400 transition-colors duration-300">
<div className="w-12 h-12 bg-neutral-50 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-repeat w-6 h-6 text-neutral-900" data-lucide="repeat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m17 2 4 4-4 4"></path><path d="M3 11v-1a4 4 0 0 1 4-4h14"></path><path d="m7 22-4-4 4-4"></path><path d="M21 13v1a4 4 0 0 1-4 4H3"></path></svg>
</div>
<h3 className="text-lg font-semibold mb-3 tracking-tight">
              Sales Automation
            </h3>
<p className="text-sm text-neutral-500 leading-relaxed">
              Manual follow-ups are for amateurs. We automate the path from lead to invoice so you make money while you sleep.
            </p>
</div>

<div className="group p-8 border border-neutral-200 rounded-xl hover:border-neutral-400 transition-colors duration-300">
<div className="w-12 h-12 bg-neutral-50 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-briefcase w-6 h-6 text-neutral-900" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
</div>
<h3 className="text-lg font-semibold mb-3 tracking-tight">
              High-Ticket Positioning
            </h3>
<p className="text-sm text-neutral-500 leading-relaxed">
              We structure your digital presence to justify higher prices. Look like a corporation, operate with the agility of a startup.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-neutral-100 scroll-mt-20" id="execution">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Select Your Track
          </h2>
<p className="text-neutral-500 max-w-2xl mx-auto">
            Choose the strategy session that fits your current business stage. 
            Identify. Strategize. Implement.
          </p>
</div>
<div className="grid lg:grid-cols-2 gap-8 items-start">

<div className="flex flex-col h-full group p-8 md:p-10 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-neutral-300 transition-colors">
<div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-neutral-100 flex items-center justify-center mb-6">
<svg className="lucide lucide-rocket w-7 h-7 text-neutral-900" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
</div>
<h3 className="text-2xl font-semibold mb-2 tracking-tight">
              Business Startup Kit Track
            </h3>
<p className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-4">
              For New Ventures
            </p>
<p className="text-neutral-600 leading-relaxed mb-6">
              We dissect your vision and build a concrete launch strategy together. You leave with a step-by-step Business Launch Kit designed for immediate execution, ensuring you don't just start, but start profitable.
            </p>
<div className="mt-auto border-t border-neutral-200 pt-6 w-full">
<div className="text-xs font-semibold uppercase text-neutral-400 mb-3 tracking-wider">Book Session</div>

<iframe className="tidycal-embed" id="tidycal-embed-sru6o" scrolling="no" src="https://tidycal.com/austin/60-minute-meeting?embed=1" style={{border: 'none', width: '1px', minWidth: '100%', height: '892px', overflow: 'hidden', minHeight: '500px'}} title="TidyCal"></iframe>
</div>
</div>

<div className="flex flex-col h-full group p-8 md:p-10 rounded-2xl bg-neutral-900 text-white shadow-xl shadow-neutral-900/10">
<div className="w-14 h-14 bg-neutral-800 rounded-xl flex items-center justify-center mb-6 border border-neutral-700">
<svg className="lucide lucide-trending-up w-7 h-7 text-white" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<h3 className="text-2xl font-semibold mb-2 tracking-tight">
              Revenue Scaling Blueprint Track
            </h3>
<p className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-4">
              For Stalled Businesses
            </p>
<p className="text-neutral-300 leading-relaxed mb-6">
              We identify exactly where you're stalled and remove the bottlenecks. Together, we build your scaling roadmap, delivering a tailored Revenue Blueprint so you can break through the plateau and multiply your cash flow immediately.
            </p>
<div className="mt-auto border-t border-neutral-800 pt-6 w-full">
<div className="text-xs font-semibold uppercase text-neutral-500 mb-3 tracking-wider">Book Session</div>

<iframe className="tidycal-embed" id="tidycal-embed-tvosb" scrolling="no" src="https://tidycal.com/austin/revenue-blueprint?embed=1" style={{border: 'none', width: '1px', minWidth: '100%', height: '873px', overflow: 'hidden', minHeight: '500px'}} title="TidyCal"></iframe>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50 border-t border-neutral-200">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="order-2 md:order-1">
<h2 className="text-3xl font-semibold tracking-tight mb-6 text-neutral-900">
              Meet Austin Okai
            </h2>
<p className="text-neutral-500 mb-6 font-light leading-relaxed">
<span className="text-neutral-900 font-medium">I am not into fluffs.</span> 
              I am focused on one thing: what makes you money. You don't get into business for a hobby; you get into it for selling and making profits. That's the experience you get working with me.
            </p>
<p className="text-neutral-500 mb-8 font-light leading-relaxed">
              If you want a friend to tell you your ideas are nice, go elsewhere. If you want a strategist to tell you how to monetize your efforts and cut your losses, we should talk.
            </p>
<div className="flex gap-4">
<div className="flex flex-col">
<span className="text-2xl font-semibold text-neutral-900">100%</span>
<span className="text-xs text-neutral-400 uppercase tracking-widest mt-1">
                  Sales Focused
                </span>
</div>
<div className="w-px bg-neutral-200 h-12"></div>
<div className="flex flex-col">
<span className="text-2xl font-semibold text-neutral-900">0%</span>
<span className="text-xs text-neutral-400 uppercase tracking-widest mt-1">
                  Fluff
                </span>
</div>
</div>
</div>
<div className="order-1 md:order-2 flex justify-center md:justify-end">

<div className="w-72 h-80 md:w-80 md:h-96 bg-black shadow-2xl shadow-neutral-300 rounded-2xl overflow-hidden relative border border-neutral-200 group">

<img alt="Austin Okai" className="object-top group-hover:scale-105 transition-transform duration-700 ease-out opacity-95 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://www.aura.build/editor/austin-okai.jpg"/>

<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-neutral-100 py-12">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div>
<span className="text-sm font-semibold tracking-tight text-neutral-900">
            AustinOkai.
          </span>
<p className="text-xs text-neutral-500 mt-1">
            Profits over Everything.
          </p>
</div>
<div className="flex gap-6">
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#">
<svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#">
<svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#">
<svg className="lucide lucide-mail w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</a>
</div>
<div className="text-xs text-neutral-400">
          © 2023 Austin Okai.
        </div>
</div>
</footer>



    </>
  );
}
