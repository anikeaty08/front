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
      

<div className="grid grid-cols-12 bg-slate-50 w-full max-w-screen-2xl rounded-[2.5rem] relative shadow-2xl overflow-hidden min-h-[90vh]">

<div className="absolute inset-0 bg-white/40 pointer-events-none z-0"></div>

<div className="col-span-12 flex flex-col z-10 h-full overflow-y-auto no-scrollbar">

<header className="sticky top-0 z-50 bg-slate-50/80 backdrop-blur-md px-6 py-5 lg:px-10 border-b border-slate-200/60 flex flex-wrap items-center justify-between gap-4">

<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white shadow-lg shadow-slate-900/20">
<span className="iconify text-xl" data-icon="lucide:hammer" data-strokeWidth="1.5"></span>
</div>
<div>
<h1 className="text-xl text-slate-900 font-semibold tracking-tight leading-none">Wade’s</h1>
<p className="text-xs text-slate-500 font-medium tracking-wide uppercase mt-0.5">Maintenance Services</p>
</div>
</div>

<nav className="hidden md:flex items-center bg-white shadow-sm border border-slate-200 rounded-full p-1 gap-1">
<a className="px-5 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-full transition-all text-sm font-medium" href="#services">Services</a>
<a className="px-5 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-full transition-all text-sm font-medium" href="#real-estate">For Agents</a>
<a className="px-5 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-full transition-all text-sm font-medium" href="#area">Service Area</a>
</nav>

<a className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-full transition-all shadow-md hover:shadow-lg group" href="tel:0407962196">
<span className="iconify text-lg group-hover:animate-pulse" data-icon="lucide:phone" data-strokeWidth="1.5"></span>
<span className="text-sm font-medium">0407 962 196</span>
</a>
</header>

<main className="p-6 lg:p-10 flex flex-col gap-8">

<div className="relative overflow-hidden rounded-[2rem] bg-slate-900 text-white min-h-[400px] lg:min-h-[480px] flex flex-col justify-center px-8 py-12 lg:px-16 lg:py-16 shadow-xl">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
<div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>

<div className="relative z-10 max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs font-medium mb-6 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            Serving Frenchville &amp; Rockhampton
                        </div>
<h2 className="text-4xl lg:text-6xl font-semibold tracking-tight mb-6 leading-[1.1]">
                            Reliable property maintenance for homes &amp; rentals.
                        </h2>
<p className="text-lg text-slate-300 font-medium leading-relaxed mb-8 max-w-lg">
                            Wade’s Maintenance Services is your straightforward, dependable local operator for repairs, upkeep, and handyman tasks.
                        </p>
<div className="flex flex-wrap gap-4">
<a className="px-7 py-3.5 bg-white text-slate-900 rounded-full font-semibold text-sm hover:bg-slate-100 transition shadow-lg flex items-center gap-2" href="tel:0407962196">
                                Call Now
                                <span className="iconify" data-icon="lucide:arrow-right" data-strokeWidth="1.5"></span>
</a>
<a className="px-7 py-3.5 bg-transparent border border-white/30 text-white rounded-full font-medium text-sm hover:bg-white/10 transition backdrop-blur-sm" href="mailto:wadesmaintenance@bigpond.com">
                                Email Enquiry
                            </a>
</div>
</div>

<div className="hidden lg:flex absolute bottom-12 right-12 bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-3xl max-w-xs">
<div className="flex gap-4 items-start">
<div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
<span className="iconify text-xl" data-icon="lucide:check-circle" data-strokeWidth="1.5"></span>
</div>
<div>
<h3 className="text-white font-medium text-sm">Real Estate Preferred</h3>
<p className="text-slate-400 text-xs mt-1 leading-normal">Trusted by local property managers for timely communication and quality work.</p>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-8 flex flex-col gap-6" id="services">

<div className="flex items-center justify-between px-2">
<h3 className="text-xl font-semibold text-slate-900 tracking-tight">Our Services</h3>
<span className="text-xs font-medium text-slate-500 bg-white border border-slate-200 px-3 py-1 rounded-full shadow-sm">Fully Insured</span>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

<div className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-700 mb-4 border border-slate-100 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<span className="iconify text-2xl" data-icon="lucide:wrench" data-strokeWidth="1.5"></span>
</div>
<h4 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">General Maintenance</h4>
<p className="text-sm text-slate-500 leading-relaxed">
                                    Comprehensive property upkeep for homes and businesses. From fixing doors to general patching and repairs.
                                </p>
</div>

<div className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-700 mb-4 border border-slate-100 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<span className="iconify text-2xl" data-icon="lucide:home" data-strokeWidth="1.5"></span>
</div>
<h4 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Rental Properties</h4>
<p className="text-sm text-slate-500 leading-relaxed">
                                    Specialized support for landlords and agents. Pre-lease repairs, bond maintenance, and routine inspections.
                                </p>
</div>

<div className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-700 mb-4 border border-slate-100 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<span className="iconify text-2xl" data-icon="lucide:hammer" data-strokeWidth="1.5"></span>
</div>
<h4 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Repairs &amp; Upkeep</h4>
<p className="text-sm text-slate-500 leading-relaxed">
                                    One-off jobs or ongoing maintenance schedules. We fix what's broken and keep your property value high.
                                </p>
</div>

<div className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-700 mb-4 border border-slate-100 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<span className="iconify text-2xl" data-icon="lucide:clipboard-check" data-strokeWidth="1.5"></span>
</div>
<h4 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Make Goods</h4>
<p className="text-sm text-slate-500 leading-relaxed">
                                    Preparing properties for sale or new tenants. Fast turnaround times to get your investment earning again.
                                </p>
</div>
</div>

<div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2rem] p-8 text-white relative overflow-hidden shadow-lg" id="real-estate">
<div className="absolute top-0 right-0 p-12 opacity-10">
<span className="iconify text-[12rem]" data-icon="lucide:building-2"></span>
</div>
<div className="relative z-10">
<div className="flex items-center gap-3 mb-4">
<span className="px-3 py-1 rounded-full bg-white/10 text-xs font-medium border border-white/20">Property Managers &amp; Landlords</span>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4">The Agent's Choice</h3>
<p className="text-slate-300 text-sm leading-relaxed max-w-lg mb-6">
                                    We understand the pressures of property management. Our service is built on clear communication, showing up on time, and providing digital invoices quickly. We act as a professional extension of your agency.
                                </p>
<ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<li className="flex items-center gap-2 text-sm text-slate-200">
<span className="iconify text-emerald-400" data-icon="lucide:check"></span> Digital Capability Statement
                                    </li>
<li className="flex items-center gap-2 text-sm text-slate-200">
<span className="iconify text-emerald-400" data-icon="lucide:check"></span> Quick Response Times
                                    </li>
<li className="flex items-center gap-2 text-sm text-slate-200">
<span className="iconify text-emerald-400" data-icon="lucide:check"></span> Quality Follow-through
                                    </li>
<li className="flex items-center gap-2 text-sm text-slate-200">
<span className="iconify text-emerald-400" data-icon="lucide:check"></span> Professional Conduct
                                    </li>
</ul>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col gap-6">

<div className="bg-white rounded-[2rem] p-6 border border-slate-200 shadow-sm">
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-5">Why Choose Wade’s</h3>
<div className="flex flex-col gap-5">
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0 border border-indigo-100">
<span className="iconify text-sm" data-icon="lucide:map-pin"></span>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Local Operator</h4>
<p className="text-xs text-slate-500 mt-1">Based in Frenchville, serving the Rockhampton community for years.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0 border border-indigo-100">
<span className="iconify text-sm" data-icon="lucide:shield-check"></span>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Dependable</h4>
<p className="text-xs text-slate-500 mt-1">We turn up when we say we will. No chasing required.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0 border border-indigo-100">
<span className="iconify text-sm" data-icon="lucide:message-square"></span>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Easy to Deal With</h4>
<p className="text-xs text-slate-500 mt-1">No sales jargon. Just straightforward advice and honest quotes.</p>
</div>
</div>
</div>
</div>

<div className="bg-slate-50 rounded-[2rem] p-6 border border-slate-200" id="area">
<div className="flex items-center gap-2 mb-4 text-slate-900">
<span className="iconify" data-icon="lucide:navigation" data-strokeWidth="1.5"></span>
<h3 className="text-lg font-semibold tracking-tight">Service Area</h3>
</div>
<div className="relative aspect-video bg-slate-200 rounded-xl overflow-hidden mb-4 border border-slate-300/50">

<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58437.4957388145!2d150.4801!3d-23.3750!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6bc3013840741c8d%3A0x500eef17f20fdf0!2sRockhampton%20QLD!5e0!3m2!1sen!2sau!4v1600000000000!5m2!1sen!2sau" style={{border: '0', filter: 'grayscale(1) contrast(1.2) opacity(0.7)'}} width="100%"></iframe>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-600">Frenchville</span>
<span className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-600">Rockhampton City</span>
<span className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-600">Berserker</span>
<span className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-600">Kawana</span>
<span className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-600">Surrounding Suburbs</span>
</div>
</div>

<div className="bg-slate-900 rounded-[2rem] p-6 text-white text-center flex flex-col items-center justify-center gap-4 shadow-xl">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-1">
<span className="iconify text-xl" data-icon="lucide:phone-call"></span>
</div>
<div>
<h3 className="font-semibold text-lg">Need a job done?</h3>
<p className="text-slate-400 text-xs mt-1">Call for a no-obligation chat.</p>
</div>
<a className="w-full py-3 bg-white text-slate-900 rounded-xl font-semibold text-sm hover:bg-slate-100 transition" href="tel:0407962196">
                                0407 962 196
                            </a>
<a className="text-xs text-slate-400 hover:text-white transition underline underline-offset-4" href="mailto:wadesmaintenance@bigpond.com">
                                wadesmaintenance@bigpond.com
                            </a>
</div>
</div>
</div>

<footer className="mt-8 border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs font-medium">
<p>© 2024 Wade’s Maintenance Services. All rights reserved.</p>
<div className="flex gap-4">
<span>ABN: [On Request]</span>
<span>Located in Frenchville, QLD 4701</span>
</div>
</footer>
</main>
</div>
</div>

    </>
  );
}
