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
      

<div className="absolute top-0 right-0 w-full md:w-2/3 h-[600px] bg-gradient-to-bl from-[#DE7A3E]/20 via-[#E8DCC4]/20 to-transparent -z-10 blur-3xl pointer-events-none"></div>

<nav className="w-full flex justify-between items-center py-6 px-6 md:px-12 xl:px-24 shrink-0 relative z-20 border-b border-stone-200/50 bg-[#FCFBF8]/80 backdrop-blur-md">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-md bg-stone-900 flex items-center justify-center">
<iconify-icon className="text-stone-50" icon="solar:home-angle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="text-lg font-medium tracking-tighter text-stone-900" style={{fontFamily: '"Plus Jakarta Sans", sans-serif'}}>
                ARC
            </div>
</div>
<a className="flex items-center gap-2 text-sm font-medium text-stone-600 transition-colors hover:text-lime-800" href="#contact">
<iconify-icon icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="">(512) 555-0199</span>
</a>
</nav>

<section className="relative w-full flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 xl:px-24 pb-20 pt-12 lg:pt-20 gap-16 lg:gap-8" style={{backgroundSize: '40px 40px', backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)'}}>

<div className="w-full lg:w-1/2 flex flex-col justify-center max-w-2xl relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E8DCC4]/40 border border-[#DE7A3E]/20 text-[#B25D2A] text-xs font-medium tracking-widest uppercase mb-8 w-max shadow-sm">
<iconify-icon icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon> 
                Proudly serving the Austin area
            </div>
<h1 className="text-6xl lg:text-7xl font-medium tracking-tighter text-stone-900 leading-[1.05]" style={{fontFamily: '"Plus Jakarta Sans", sans-serif'}}>
                The truth about <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-br from-green-400 to-green-600">your Texas roof.</span>
</h1>
<p className="mt-6 text-xl lg:text-2xl font-normal tracking-tight text-stone-600 max-w-lg leading-snug" style={{fontFamily: '"Plus Jakarta Sans", sans-serif'}}>
                We don't sell roofs. We sell clarity. Get an independent, expert assessment before you hire a contractor.
            </p>
<div className="mt-12 flex flex-col gap-5">
<div className="flex items-center gap-4 group">
<div className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform text-lime-800">
<iconify-icon icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-sm font-medium text-stone-800 tracking-tight">Unbiased condition reports</span>
</div>
<div className="flex items-center gap-4 group">
<div className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform text-lime-800">
<iconify-icon icon="solar:document-text-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-sm font-medium text-stone-800 tracking-tight">Detailed forensic analysis</span>
</div>
<div className="flex items-center gap-4 group">
<div className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform text-lime-800">
<iconify-icon icon="solar:calculator-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-sm font-medium text-stone-800 tracking-tight">Fair-market cost estimates</span>
</div>
</div>
</div>

<div className="w-full lg:w-1/2 relative flex items-center justify-center lg:justify-end min-h-[550px] lg:min-h-[700px]">

<div className="absolute right-0 top-1/2 -translate-y-1/2 w-full lg:w-[95%] h-full lg:h-[95%] rounded-[2rem] overflow-hidden shadow-xl shadow-stone-900/5 border border-white hidden md:block">
<div className="z-10 bg-stone-900/10 mix-blend-multiply absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Modern Austin Home with Metal Roof" className="object-center w-full h-full object-cover z-10 scale-105" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>

<div className="shadow-stone-900/10 lg:-translate-x-8 bg-white/90 w-full max-w-md z-20 border-stone-100 border-0 rounded-2xl pt-8 pr-8 pb-8 pl-8 relative shadow-2xl backdrop-blur-xl" style={{contain: 'paint'}}>
<div className="-translate-y-1 w-full h-4 absolute top-0 left-0 bg-gradient-to-br from-green-400 to-green-600"></div>
<h3 className="text-2xl font-medium tracking-tight text-stone-900 mb-2 mt-2" style={{fontFamily: '"Plus Jakarta Sans", sans-serif'}}>Request Assessment</h3>
<p className="text-sm text-stone-500 mb-8 font-medium">Enter your details for a preliminary property review.</p>
<form className="flex flex-col gap-5">
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-stone-500 uppercase tracking-widest">Property Address</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
<iconify-icon icon="solar:home-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<input className="w-full pl-10 pr-4 py-3 bg-[#FCFBF8] border border-stone-200 rounded-xl text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#DE7A3E]/30 focus:border-[#DE7A3E] transition-all shadow-sm" placeholder="1234 Texas Ave, Austin TX" type="text"/>
</div>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-stone-500 uppercase tracking-widest">Primary Concern</label>
<div className="relative">
<select className="w-full px-4 py-3 bg-[#FCFBF8] border border-stone-200 rounded-xl text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#DE7A3E]/30 focus:border-[#DE7A3E] transition-all shadow-sm appearance-none cursor-pointer">
<option>Suspected Hail/Storm Damage</option>
<option>Aging Roof / Replacement Estimate</option>
<option>Active Leak Detection</option>
<option>Pre-Purchase Home Inspection</option>
</select>
<div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-stone-400">
<iconify-icon icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-stone-500 uppercase tracking-widest">First Name</label>
<input className="w-full px-4 py-3 bg-[#FCFBF8] border border-stone-200 rounded-xl text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#DE7A3E]/30 focus:border-[#DE7A3E] transition-all shadow-sm" placeholder="Jane" type="text"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-stone-500 uppercase tracking-widest">Phone</label>
<input className="w-full px-4 py-3 bg-[#FCFBF8] border border-stone-200 rounded-xl text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#DE7A3E]/30 focus:border-[#DE7A3E] transition-all shadow-sm" placeholder="(512) 000-0000" type="tel"/>
</div>
</div>
<button className="mt-4 w-full bg-stone-900 text-stone-50 rounded-xl py-3.5 px-4 text-sm font-medium hover:shadow-lg hover:shadow-[#C25E30]/20 transition-all duration-300 flex items-center justify-center gap-2 group hover:bg-lime-900" type="button">
                        Secure Your Spot
                        <iconify-icon className="group-hover:translate-x-1 transition-transform text-stone-400 group-hover:text-stone-50" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<p className="text-xs text-center text-stone-400 mt-2">No commitment required. 100% confidential.</p>
</form>
</div>
</div>
</section>

<section className="w-full px-6 md:px-12 xl:px-24 py-24 bg-white relative">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent"></div>
<div className="max-w-3xl mb-16">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-stone-900 mb-6" style={{fontFamily: '"Plus Jakarta Sans", sans-serif'}}>Services Offered</h2>
<p className="text-lg text-stone-600 font-normal leading-relaxed">
                Led by Tandra Peters, ARC provides objective, third-party analysis. We don't perform installations, meaning our only incentive is protecting your investment against the unpredictable Texas weather.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

<div className="p-8 rounded-3xl bg-[#FCFBF8] border border-stone-100 hover:border-[#DE7A3E]/30 hover:shadow-lg hover:shadow-stone-900/5 transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-white border border-stone-200 flex items-center justify-center mb-6 shadow-sm group-hover:-translate-y-1 transition-transform text-lime-800">
<iconify-icon className="text-xl" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-stone-900 mb-3" style={{fontFamily: '"Plus Jakarta Sans", sans-serif'}}>Independent Roof Inspections</h3>
<p className="text-sm text-stone-600 leading-relaxed">Comprehensive evaluation of your roof's current condition, remaining lifespan, and required maintenance—delivered entirely without a sales pitch.</p>
</div>

<div className="p-8 rounded-3xl bg-[#FCFBF8] border border-stone-100 hover:border-[#DE7A3E]/30 hover:shadow-lg hover:shadow-stone-900/5 transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-white border border-stone-200 flex items-center justify-center mb-6 shadow-sm group-hover:-translate-y-1 transition-transform text-lime-800">
<iconify-icon className="text-xl" icon="solar:cloud-waterfall-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-stone-900 mb-3" style={{fontFamily: '"Plus Jakarta Sans", sans-serif'}}>Central Texas Storm Damage</h3>
<p className="text-sm text-stone-600 leading-relaxed">Forensic analysis post-hail or wind events to determine legitimate damage, providing clarity and documentation before you file an insurance claim.</p>
</div>

<div className="p-8 rounded-3xl bg-[#FCFBF8] border border-stone-100 hover:border-[#DE7A3E]/30 hover:shadow-lg hover:shadow-stone-900/5 transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-white border border-stone-200 flex items-center justify-center mb-6 shadow-sm group-hover:-translate-y-1 transition-transform text-lime-800">
<iconify-icon className="text-xl" icon="solar:users-group-two-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-stone-900 mb-3" style={{fontFamily: '"Plus Jakarta Sans", sans-serif'}}>Contractor Vetting &amp; Review</h3>
<p className="text-sm text-stone-600 leading-relaxed">Expert review of bids, proposed scopes of work, and contractor credentials to ensure you pay a fair market price for quality craftsmanship.</p>
</div>

<div className="p-8 rounded-3xl bg-[#FCFBF8] border border-stone-100 hover:border-[#DE7A3E]/30 hover:shadow-lg hover:shadow-stone-900/5 transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-white border border-stone-200 flex items-center justify-center mb-6 shadow-sm group-hover:-translate-y-1 transition-transform text-lime-800">
<iconify-icon className="text-xl" icon="solar:home-smile-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-stone-900 mb-3" style={{fontFamily: '"Plus Jakarta Sans", sans-serif'}}>Pre-Purchase Analysis</h3>
<p className="text-sm text-stone-600 leading-relaxed">Detailed roof assessments designed specifically for Hill Country homebuyers and real estate professionals to avoid costly surprises after closing.</p>
</div>
</div>
</section>

<section className="w-full px-6 md:px-12 xl:px-24 py-24 bg-[#FAF9F5] border-t border-stone-200/60">
<div className="flex flex-col lg:flex-row gap-16 justify-between items-start">
<div className="lg:w-1/3 sticky top-12">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-stone-900 mb-6" style={{fontFamily: '"Plus Jakarta Sans", sans-serif'}}>How it works</h2>
<p className="text-sm text-stone-600 leading-relaxed font-normal">
                    A streamlined, transparent process designed to give Austin property owners total control and peace of mind over their roofing project.
                </p>
</div>
<div className="lg:w-2/3 flex flex-col gap-0 relative">

<div className="absolute left-5 top-8 bottom-12 w-px bg-stone-200 hidden sm:block"></div>

<div className="flex flex-col sm:flex-row gap-6 pb-12 relative">
<div className="w-10 h-10 rounded-full bg-white border border-[#DE7A3E]/30 flex-shrink-0 flex items-center justify-center text-sm font-medium shadow-sm relative z-10 text-lime-800">1</div>
<div className="pt-1.5">
<h4 className="text-lg font-medium tracking-tight text-stone-900 mb-2" style={{fontFamily: '"Plus Jakarta Sans", sans-serif'}}>Initial Consultation</h4>
<p className="text-sm text-stone-600 leading-relaxed">We discuss your concerns, property history, and goals. You'll know exactly what our assessment will cover and what outcomes to expect.</p>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-6 pb-12 relative">
<div className="w-10 h-10 rounded-full bg-white border border-[#DE7A3E]/30 flex-shrink-0 flex items-center justify-center text-sm font-medium shadow-sm relative z-10 text-lime-800">2</div>
<div className="pt-1.5">
<h4 className="text-lg font-medium tracking-tight text-stone-900 mb-2" style={{fontFamily: '"Plus Jakarta Sans", sans-serif'}}>On-Site Evaluation</h4>
<p className="text-sm text-stone-600 leading-relaxed">Tandra Peters conducts a thorough, documented inspection of your roofing system, identifying structural issues or damage that commission-based contractors might miss (or invent).</p>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-6 relative">
<div className="w-10 h-10 rounded-full bg-stone-900 border border-stone-800 flex-shrink-0 flex items-center justify-center text-sm font-medium text-stone-50 shadow-sm relative z-10">3</div>
<div className="pt-1.5">
<h4 className="text-lg font-medium tracking-tight text-stone-900 mb-2" style={{fontFamily: '"Plus Jakarta Sans", sans-serif'}}>Actionable Report</h4>
<p className="text-sm text-stone-600 leading-relaxed">You receive a detailed, easy-to-read dossier complete with photographic evidence, estimated lifespan, and unbiased, fair-market repair estimates.</p>
</div>
</div>
</div>
</div>
</section>

<footer className="w-full bg-[#181715] pt-20 pb-10 px-6 md:px-12 xl:px-24 text-stone-400 mt-auto border-t-[6px] border-green-700" id="contact">
<div className="flex flex-col lg:flex-row justify-between gap-16 mb-16">

<div className="max-w-sm">
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 rounded-md bg-stone-800 flex items-center justify-center">
<iconify-icon className="text-stone-300" icon="solar:home-angle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="text-lg font-medium tracking-tighter text-stone-50" style={{fontFamily: '"Plus Jakarta Sans", sans-serif'}}>
                        ARC
                    </div>
</div>
<p className="text-sm leading-relaxed mb-8 font-normal">
                    Austin Roofing Consultant provides truth and transparency in an industry that rarely offers either.
                </p>
<div className="flex items-center gap-4 p-4 rounded-xl bg-[#21201D] border border-stone-800/50">
<div className="w-12 h-12 rounded-full bg-stone-800 border border-stone-700 flex items-center justify-center text-green-600">
<iconify-icon className="text-2xl" icon="solar:user-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-stone-200 tracking-tight">Tandra Peters</p>
<p className="text-xs text-stone-500 mt-0.5">Lead Independent Consultant</p>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-12 lg:gap-24">
<div className="flex flex-col gap-6">
<h4 className="text-xs font-medium text-stone-50 uppercase tracking-widest">Contact Details</h4>
<ul className="flex flex-col gap-4 text-sm font-normal">
<li>
<a className="flex items-center gap-3 transition-colors group hover:text-lime-800" href="tel:5125550199">
<iconify-icon className="text-lg text-stone-500 group-hover:text-[#DE7A3E] transition-colors" icon="solar:phone-linear"></iconify-icon>
<span>(512) 555-0199</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 transition-colors group hover:text-lime-800" href="mailto:tandra@austinroofing.com">
<iconify-icon className="text-lg text-stone-500 group-hover:text-[#DE7A3E] transition-colors" icon="solar:letter-linear"></iconify-icon>
<span>tandra@austinroofing.com</span>
</a>
</li>
<li className="flex items-center gap-3 text-stone-400">
<iconify-icon className="text-lg text-stone-500" icon="solar:map-point-linear"></iconify-icon>
<span>Austin, Texas &amp; Travis County</span>
</li>
</ul>
</div>
<div className="flex flex-col gap-6">
<h4 className="text-xs font-medium text-stone-50 uppercase tracking-widest">Services</h4>
<ul className="flex flex-col gap-4 text-sm font-normal">
<li><a className="transition-colors hover:text-lime-800" href="#">Independent Inspections</a></li>
<li><a className="transition-colors hover:text-lime-800" href="#">Storm Damage Assessment</a></li>
<li><a className="transition-colors hover:text-lime-800" href="#">Contractor Vetting</a></li>
</ul>
</div>
</div>
</div>

<div className="border-t border-stone-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
<p>© 2023 Austin Roofing Consultant. All rights reserved.</p>
<p className="text-stone-500">Operated independently by Tandra Peters</p>
</div>
</footer>

    </>
  );
}
