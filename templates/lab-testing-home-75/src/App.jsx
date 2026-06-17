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



      lucide.createIcons();
    
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
      

<header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
<div className="flex items-center gap-8">
<a className="flex items-center gap-2" href="#">
<div className="flex h-8 w-8 items-center justify-center text-horizon-blue">
<svg className="lucide lucide-microscope h-6 w-6" data-lucide="microscope" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 18h8"></path><path d="M3 22h18"></path><path d="M14 22a7 7 0 1 0 0-14h-1"></path><path d="M9 14h2"></path><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"></path><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"></path></svg>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900 font-manrope">
              Horizon Analytical
            </span>
</a>
<nav className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium text-slate-600 hover:text-horizon-blue transition-colors font-manrope" href="#services">Testing Services</a>
<a className="text-sm font-medium text-slate-600 hover:text-horizon-blue transition-colors font-manrope" href="#verify">Verify COA</a>
<a className="text-sm font-medium text-slate-600 hover:text-horizon-blue transition-colors font-manrope" href="#how-it-works">How It Works</a>
<a className="text-sm font-medium text-slate-600 hover:text-horizon-blue transition-colors font-manrope" href="#resources">Resources</a>
</nav>
</div>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex text-xs font-medium text-slate-600 hover:text-slate-900 font-manrope" href="#">Log in</a>
<a className="inline-flex h-9 items-center justify-center rounded-lg px-4 text-xs font-medium text-white transition-colors bg-horizon-blue hover:bg-horizon-blue-dark font-manrope" href="#quote">
            Get Quote
          </a>
</div>
</div>
</header>
<main className="">

<section className="pt-20 pb-16 sm:pt-28 sm:pb-24 overflow-hidden">
<div className="mx-auto max-w-7xl px-4 sm:px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="max-w-2xl">
<h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight text-slate-900 mb-6 leading-[1.1] font-montserrat font-medium">
                Lab-Verified Results <br/>
<span className="text-horizon-blue font-montserrat font-medium">Your Customers Trust</span>
</h1>
<p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-lg font-manrope">
                Get certified HPLC/MS testing in 48 hours. Display verified COAs on your product pages. Build the confidence that drives sales and keeps your customers coming back.
              </p>
<div className="flex flex-wrap gap-4">
<a className="inline-flex h-11 items-center justify-center rounded-lg px-6 text-sm font-semibold text-white transition-colors bg-horizon-blue hover:bg-horizon-blue-dark shadow-sm font-manrope" href="#quote">
                  Get Your First COA
                </a>
<a className="inline-flex h-11 items-center justify-center rounded-lg border border-gray-200 bg-white px-6 text-sm font-semibold text-slate-700 hover:bg-gray-50 transition-colors font-manrope" href="#how-it-works">
                  See How It Works
                </a>
</div>
</div>

<div className="relative lg:ml-auto w-full max-w-lg">
<div className="relative rounded-2xl bg-gray-50 border border-gray-100 p-8 shadow-2xl shadow-gray-200/50">

<div className="absolute top-0 right-0 -mt-6 -mr-6 w-24 h-24 bg-blue-50 rounded-full blur-2xl opacity-60"></div>
<div className="absolute bottom-0 left-0 -mb-6 -ml-6 w-32 h-32 bg-green-50 rounded-full blur-2xl opacity-60"></div>
<div className="relative flex flex-col items-center">

<div className="w-32 h-48 bg-white rounded-lg shadow-md border border-gray-100 flex items-center justify-center mb-4 relative z-10">
<img alt="Supplement Bottle" className="h-40 object-contain" src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&amp;fit=crop&amp;q=80&amp;w=300"/>

<div className="absolute -right-12 top-8 bg-white/95 backdrop-blur rounded-lg shadow-lg border border-horizon-green/20 p-3 flex items-center gap-3 animate-fade-in-up">
<div className="h-8 w-8 rounded-full bg-green-50 flex items-center justify-center text-horizon-green">
<svg className="lucide lucide-check-circle-2 w-5 h-5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="text-left">
<div className="text-[10px] uppercase tracking-wide font-bold text-horizon-green font-manrope">Verified Potency</div>
<div className="text-xs font-semibold text-slate-900 font-manrope">99.8% Pure</div>
</div>
</div>
</div>

<div className="w-full bg-white rounded border border-gray-200 p-4 shadow-sm mt-4 relative z-0 transform -translate-y-2">
<div className="flex justify-between items-center border-b border-gray-100 pb-2 mb-2">
<div className="text-[10px] text-gray-400 font-manrope">CERTIFICATE OF ANALYSIS</div>
<div className="text-[10px] font-mono text-gray-500 font-manrope">#HA-9921</div>
</div>
<div className="space-y-2">
<div className="h-2 bg-gray-100 rounded w-3/4"></div>
<div className="h-2 bg-gray-100 rounded w-1/2"></div>
<div className="flex gap-2 mt-2">
<div className="h-4 w-16 bg-blue-50 rounded text-[10px] flex items-center justify-center text-horizon-blue font-medium font-manrope">PASSED</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-gray-100 border-t pt-20 pb-20">
<div className="sm:px-6 font-manrope max-w-7xl mr-auto ml-auto pt-20 pb-20 relative">

<div className="flex flex-col items-center text-center mb-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E3F1FF] border border-blue-100 text-[#035DB8] text-xs font-semibold mb-6 font-manrope backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#035DB8] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#035DB8]"></span>
</span>
            Our Capabilities
        </div>
<h2 className="text-4xl md:text-5xl font-medium text-slate-900 mb-6 tracking-tight font-montserrat leading-[1.1]">
            The Horizon
            <span className="text-[#035DB8]">Advantage</span>
</h2>
<p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed font-manrope">
            We go beyond standard testing to provide a partnership built on speed, transparency, and unwavering support for your growing brand.
        </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 bg-white rounded-2xl border border-slate-100 hover:border-[#E3F1FF] hover:shadow-xl hover:shadow-[#035DB8]/5 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#E3F1FF]/50 to-transparent rounded-bl-full -mr-4 -mt-4 transition-transform duration-500 group-hover:scale-150"></div>
<div className="w-12 h-12 rounded-xl bg-[#E3F1FF] text-[#035DB8] flex items-center justify-center mb-6 group-hover:bg-[#035DB8] group-hover:text-white transition-colors duration-300 relative z-10">
<svg className="lucide lucide-headset transition-transform duration-300 group-hover:scale-110" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 11v3a8 8 0 0 0 16 0v-3"></path><path d="M12 6A8 8 0 0 0 4 14.33a7.9 7.9 0 0 0 1.5 4.67"></path><path d="M20 14.33A7.9 7.9 0 0 0 21.5 19"></path><path d="M22 19a2 2 0 0 1-2 2h-1.5"></path><path d="M5.5 21H4a2 2 0 0 1-2-2v-4.67"></path></svg>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 font-montserrat relative z-10">Long-term Support | 24-7</h3>
<p className="text-sm leading-relaxed text-slate-500 font-manrope relative z-10">
                Questions aren’t limited to business hours. Neither is our response. We are here to support your business and testing needs long term.
            </p>
</div>

<div className="group p-8 bg-white rounded-2xl border border-slate-100 hover:border-[#E3F1FF] hover:shadow-xl hover:shadow-[#035DB8]/5 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#E3F1FF]/50 to-transparent rounded-bl-full -mr-4 -mt-4 transition-transform duration-500 group-hover:scale-150"></div>
<div className="w-12 h-12 rounded-xl bg-[#E3F1FF] text-[#035DB8] flex items-center justify-center mb-6 group-hover:bg-[#035DB8] group-hover:text-white transition-colors duration-300 relative z-10">
<svg className="lucide lucide-shield-check transition-transform duration-300 group-hover:scale-110" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 font-montserrat relative z-10">Data Customers Can Trust</h3>
<p className="text-sm leading-relaxed text-slate-500 font-manrope relative z-10">
                Eliminate uncertainty for consumers with clear, transparent lab results.
            </p>
</div>

<div className="group p-8 bg-white rounded-2xl border border-slate-100 hover:border-[#E3F1FF] hover:shadow-xl hover:shadow-[#035DB8]/5 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#E3F1FF]/50 to-transparent rounded-bl-full -mr-4 -mt-4 transition-transform duration-500 group-hover:scale-150"></div>
<div className="w-12 h-12 rounded-xl bg-[#E3F1FF] text-[#035DB8] flex items-center justify-center mb-6 group-hover:bg-[#035DB8] group-hover:text-white transition-colors duration-300 relative z-10">
<svg className="lucide lucide-zap transition-transform duration-300 group-hover:scale-110" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 font-montserrat relative z-10">Fast Turnaround Times</h3>
<p className="text-sm leading-relaxed text-slate-500 font-manrope relative z-10">
                Waiting costs money. Efficient testing keeps inventory flowing and release timelines intact.
            </p>
</div>
</div>
</div>
</section>

<section className="py-16 bg-slate-50 border-y border-gray-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
<h2 className="text-2xl text-slate-900 mb-10 font-montserrat font-medium">Trusted by Leading Brands</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
<div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
<div className="text-4xl text-horizon-blue mb-2 font-montserrat font-medium">340+</div>
<div className="text-sm font-medium text-slate-600 font-manrope">Brands Using Horizon</div>
</div>
<div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
<div className="text-4xl text-horizon-blue mb-2 font-montserrat font-medium">50k+</div>
<div className="text-sm font-medium text-slate-600 font-manrope">Samples Tested</div>
</div>
<div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
<div className="text-4xl text-horizon-blue mb-2 font-montserrat font-medium">99.2%</div>
<div className="text-sm font-medium text-slate-600 font-manrope">Accuracy Rate</div>
</div>
</div>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 font-bold text-slate-800 text-lg font-manrope"><iconify-icon icon="lucide:leaf"></iconify-icon> NatureBot</div>
<div className="flex items-center gap-2 font-bold text-slate-800 text-lg font-manrope"><iconify-icon icon="lucide:droplet"></iconify-icon> PureOils</div>
<div className="flex items-center gap-2 font-bold text-slate-800 text-lg font-manrope"><iconify-icon icon="lucide:sun"></iconify-icon> VitaLife</div>
<div className="flex items-center gap-2 font-bold text-slate-800 text-lg font-manrope"><iconify-icon icon="lucide:activity"></iconify-icon> BioSync</div>
<div className="flex items-center gap-2 font-bold text-slate-800 text-lg font-manrope"><iconify-icon icon="lucide:heart"></iconify-icon> WellnessCo</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="how-it-works">
<div className="mx-auto max-w-7xl px-4 sm:px-6">
<div className="text-center mb-16">
<h2 className="text-3xl text-slate-900 font-montserrat font-medium">From Sample to Certificate in 48 Hours</h2>
<p className="mt-4 text-slate-500 font-manrope">Streamlined process designed for speed and transparency.</p>
</div>
<div className="relative">

<div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 hidden md:block z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">

<div className="bg-white p-6 rounded-xl border border-gray-200 text-center group hover:border-horizon-blue transition-colors">
<div className="w-10 h-10 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-horizon-blue font-bold mb-4 group-hover:bg-horizon-blue group-hover:text-white transition-colors font-manrope">1</div>
<h3 className="text-sm font-bold text-slate-900 mb-2 font-manrope">Sample Intake</h3>
<p className="text-xs text-slate-500 mb-3 font-manrope">You submit your sample securely online</p>
<span className="inline-block px-2 py-1 bg-gray-50 rounded text-[10px] font-medium text-slate-400 border border-gray-200 font-manrope">~ 2 Hours</span>
</div>

<div className="bg-white p-6 rounded-xl border border-gray-200 text-center group hover:border-horizon-blue transition-colors">
<div className="w-10 h-10 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-horizon-blue font-bold mb-4 group-hover:bg-horizon-blue group-hover:text-white transition-colors font-manrope">2</div>
<h3 className="text-sm font-bold text-slate-900 mb-2 font-manrope">Analysis</h3>
<p className="text-xs text-slate-500 mb-3 font-manrope">We run precision testing (HPLC/MS)</p>
<span className="inline-block px-2 py-1 bg-blue-50 rounded text-[10px] font-medium text-horizon-blue border border-blue-100 font-manrope">24 Hours</span>
</div>

<div className="bg-white p-6 rounded-xl border border-gray-200 text-center group hover:border-horizon-blue transition-colors">
<div className="w-10 h-10 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-horizon-blue font-bold mb-4 group-hover:bg-horizon-blue group-hover:text-white transition-colors font-manrope">3</div>
<h3 className="text-sm font-bold text-slate-900 mb-2 font-manrope">QA Review</h3>
<p className="text-xs text-slate-500 mb-3 font-manrope">PhD chemist validates every result</p>
<span className="inline-block px-2 py-1 bg-gray-50 rounded text-[10px] font-medium text-slate-400 border border-gray-200 font-manrope">20 Hours</span>
</div>

<div className="bg-white p-6 rounded-xl border border-gray-200 text-center group hover:border-horizon-blue transition-colors">
<div className="w-10 h-10 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-horizon-blue font-bold mb-4 group-hover:bg-horizon-blue group-hover:text-white transition-colors font-manrope">4</div>
<h3 className="text-sm font-bold text-slate-900 mb-2 font-manrope">COA Generation</h3>
<p className="text-xs text-slate-500 mb-3 font-manrope">You receive verified certificate</p>
<span className="inline-block px-2 py-1 bg-green-50 rounded text-[10px] font-medium text-horizon-green border border-green-100 font-manrope">Ready</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-y border-gray-200" id="verify">
<div className="mx-auto max-w-7xl px-4 sm:px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-horizon-blue text-xs font-semibold mb-6 font-manrope">
<svg className="lucide lucide-shield w-3 h-3" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg> Instant Verification
              </div>
<h2 className="text-3xl text-slate-900 mb-4 font-montserrat font-medium">Verify Any Horizon COA in Seconds</h2>
<p className="text-slate-600 mb-8 font-manrope">
                Your customers can instantly confirm the authenticity of any lab result. No account needed. 
                This differentiator builds customer confidence, eliminating doubt and reducing inquiries.
              </p>
<div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 max-w-md">
<label className="block text-xs font-semibold text-slate-700 mb-2 font-manrope">Enter Lot Number</label>
<div className="flex gap-2 mb-4">
<input className="flex-1 h-10 rounded-lg border border-gray-300 px-3 text-sm focus:border-horizon-blue focus:ring-1 focus:ring-horizon-blue outline-none" placeholder="e.g. COA-2026-8921" type="text" value="COA-24-9921"/>
<button className="h-10 px-4 bg-horizon-blue text-white rounded-lg text-sm font-semibold hover:bg-horizon-blue-dark font-manrope">Verify</button>
</div>

<div className="bg-green-50 border border-green-100 rounded-lg p-4 flex gap-3 items-start">
<div className="mt-0.5 text-horizon-green"><svg className="lucide lucide-check-circle w-5 h-5" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg></div>
<div>
<div className="text-sm font-bold text-slate-900 font-manrope">Verified &amp; Certified Authenticity</div>
<div className="text-xs text-slate-600 mt-1">
<span className="block font-manrope">Lot: 24-9921</span>
<span className="block font-manrope">Status: PASSED (99.8% Purity)</span>
<span className="block text-gray-400 mt-1 font-manrope">Date: Jan 21, 2026</span>
</div>
</div>
</div>
</div>
</div>
<div className="relative">

<div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden relative">
<div className="relative w-full h-[460px] bg-slate-900 overflow-hidden group">

<img alt="Supplement Bottle" className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute inset-0 z-0">
<img alt="Amber supplement bottle with softgels" className="w-full h-full object-cover object-center transform scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-black/10"></div>
</div>

<div className="absolute bottom-6 right-6 sm:right-8 sm:bottom-8 w-[calc(100%-3rem)] max-w-[340px] bg-white/95 backdrop-blur-xl rounded-xl p-5 shadow-2xl border border-white/40 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-900/20">

<div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-3">
<div className="flex items-center gap-2">
<div className="text-horizon-blue">
<svg className="lucide lucide-flask-conical" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"></path><path d="M8.5 2h7"></path><path d="M7 16h10"></path></svg>
</div>
<div className="h-3 w-px bg-gray-200"></div>
<span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-manrope">Just Verified</span>
</div>
<span className="text-[10px] text-slate-400 font-manrope font-medium">May 5, 2026</span>
</div>

<h3 className="text-lg font-bold text-slate-900 leading-tight mb-1 font-manrope">Dietary Supplement</h3>
<p className="text-xs text-slate-500 mb-5 font-manrope">Premium Omega-3 Softgels</p>

<div className="space-y-2.5 bg-slate-50/50 rounded-lg p-3 border border-slate-100">
<div className="flex justify-between items-center text-sm">
<span className="text-slate-500 font-medium text-xs font-manrope">Lot Number</span>
<span className="font-mono text-slate-700 text-xs tracking-tight">#5671231</span>
</div>
<div className="h-px w-full bg-slate-100"></div>
<div className="flex justify-between items-center text-sm">
<span className="text-slate-500 font-medium text-xs font-manrope">Purity (HPLC / MS)</span>
<div className="flex items-center gap-1.5">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="font-bold text-slate-900 text-sm font-manrope">&gt;99.5%</span>
</div>
</div>
</div>

<div className="absolute -top-3 -right-3 bg-horizon-blue text-white p-2 rounded-lg shadow-lg shadow-blue-500/30 flex flex-col items-center justify-center w-12 h-12 border border-white/10">
<svg className="lucide lucide-shield-check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>

<div className="absolute -bottom-2 right-4 bg-emerald-50 text-emerald-700 border border-emerald-100 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-sm font-manrope">
       Compliant
    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="mx-auto max-w-5xl px-4 sm:px-6">
<div className="text-center mb-12">
<h2 className="text-3xl text-slate-900 mb-4 font-montserrat font-medium">Comprehensive Testing Capabilities</h2>
<p className="text-slate-500 max-w-2xl mx-auto font-manrope">All tests include detailed analysis, compliance documentation, and a verified certificate of analysis.</p>
</div>
<div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
<div className="overflow-x-auto">
<table className="w-full text-left text-sm">
<thead className="bg-gray-50 border-b border-gray-200">
<tr className="">
<th className="px-6 py-4 font-semibold text-slate-900 font-manrope">Test Type</th>
<th className="px-6 py-4 font-semibold text-slate-900 font-manrope">Status</th>
<th className="px-6 py-4 font-semibold text-slate-900 font-manrope">Turnaround</th>
<th className="px-6 py-4 font-semibold text-slate-900 text-right font-manrope">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4 font-medium text-slate-700 font-manrope">HPLC / MS Purity</td>
<td className="px-6 py-4"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-50 text-horizon-green font-manrope">Available</span></td>
<td className="px-6 py-4 text-slate-500 font-manrope">48 hours</td>
<td className="px-6 py-4 text-right"><a className="text-horizon-blue hover:text-horizon-blue-dark font-medium text-xs font-manrope" href="#quote">Book Test</a></td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4 font-medium text-slate-700 font-manrope">Chemical Identity</td>
<td className="px-6 py-4"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-50 text-horizon-green font-manrope">Available</span></td>
<td className="px-6 py-4 text-slate-500 font-manrope">48 hours</td>
<td className="px-6 py-4 text-right"><a className="text-horizon-blue hover:text-horizon-blue-dark font-medium text-xs font-manrope" href="#quote">Book Test</a></td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4 font-medium text-slate-700 font-manrope">mg Quantification</td>
<td className="px-6 py-4"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-50 text-horizon-green font-manrope">Available</span></td>
<td className="px-6 py-4 text-slate-500 font-manrope">48 hours</td>
<td className="px-6 py-4 text-right"><a className="text-horizon-blue hover:text-horizon-blue-dark font-medium text-xs font-manrope" href="#quote">Book Test</a></td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4 font-medium text-slate-700 font-manrope">Endotoxin</td>
<td className="px-6 py-4"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-50 text-horizon-green font-manrope">Available</span></td>
<td className="px-6 py-4 text-slate-500 font-manrope">5 business days</td>
<td className="px-6 py-4 text-right"><a className="text-horizon-blue hover:text-horizon-blue-dark font-medium text-xs font-manrope" href="#quote">Book Test</a></td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4 font-medium text-slate-700 font-manrope">Sterility</td>
<td className="px-6 py-4"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-50 text-horizon-green font-manrope">Available</span></td>
<td className="px-6 py-4 text-slate-500 font-manrope">7 business days</td>
<td className="px-6 py-4 text-right"><a className="text-horizon-blue hover:text-horizon-blue-dark font-medium text-xs font-manrope" href="#quote">Book Test</a></td>
</tr>
<tr className="bg-slate-50/50">
<td className="px-6 py-4 font-medium text-slate-400 font-manrope">Heavy Metals</td>
<td className="px-6 py-4"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-500 font-manrope">Coming Soon</span></td>
<td className="px-6 py-4 text-slate-400 font-manrope">Q2 2026</td>
<td className="px-6 py-4 text-right"><span className="text-gray-300 text-xs font-manrope">Notify Me</span></td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="text-center mt-8">
<p className="text-sm text-slate-500 font-manrope">Don't see what you need? <a className="text-horizon-blue font-medium hover:underline font-manrope" href="#quote">Contact us for custom testing options.</a></p>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-gray-200 overflow-hidden">
<div className="mx-auto max-w-7xl px-4 sm:px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="order-2 lg:order-1">
<h2 className="text-3xl text-slate-900 mb-6 font-montserrat font-medium">Track Orders in Real-Time</h2>
<p className="text-slate-600 mb-10 text-lg font-manrope">Your all-in-one hub for submitting samples, monitoring progress, and downloading certified results.</p>
<div className="space-y-8">
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-horizon-blue">
<svg className="lucide lucide-upload-cloud w-4 h-4" data-lucide="upload-cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 13v8"></path><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="m8 17 4-4 4 4"></path></svg>
</div>
</div>
<div className="">
<h3 className="text-base font-semibold text-slate-900 font-manrope">Submit Samples</h3>
<p className="text-sm text-slate-500 mt-1 leading-relaxed font-manrope">Upload batch information, customer details, and testing requirements. Secure, organized, professional.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-horizon-blue">
<svg className="lucide lucide-activity w-4 h-4" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
</div>
<div className="">
<h3 className="text-base font-semibold text-slate-900 font-manrope">Monitor Progress</h3>
<p className="text-sm text-slate-500 mt-1 leading-relaxed font-manrope">See exactly where your samples are. No guessing. No back-and-forth emails.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-horizon-blue">
<svg className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</div>
</div>
<div className="">
<h3 className="text-base font-semibold text-slate-900 font-manrope">Download Results</h3>
<p className="text-sm text-slate-500 mt-1 leading-relaxed font-manrope">Get results instantly when complete. Automatically organized by product, lot, and date.</p>
</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2 relative">
<div className="relative bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">

<div className="border-b border-gray-100 p-4 flex justify-between items-center bg-gray-50">
<div className="flex gap-4">
<div className="font-semibold text-sm text-slate-800 font-manrope">Orders</div>
<div className="font-medium text-sm text-slate-400 font-manrope">History</div>
</div>
<div className="h-6 w-6 rounded-full bg-gray-200"></div>
</div>

<div className="p-6">
<div className="flex justify-between items-center mb-6">
<h4 className="font-bold text-slate-800 font-manrope">Active Samples</h4>
<button className="bg-horizon-blue text-white text-xs px-3 py-1.5 rounded font-manrope">New Order</button>
</div>
<div className="space-y-3">

<div className="flex items-center justify-between p-3 bg-white border border-gray-100 rounded shadow-sm relative">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-blue-50 flex items-center justify-center text-horizon-blue"><svg className="lucide lucide-beaker w-4 h-4" data-lucide="beaker" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 3h15"></path><path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"></path><path d="M6 14h12"></path></svg></div>
<div>
<div className="text-xs font-bold text-slate-800 font-manrope">Batch #9921</div>
<div className="text-[10px] text-slate-500 font-manrope">Submitted 2h ago</div>
</div>
</div>
<div className="text-xs font-medium text-orange-500 bg-orange-50 px-2 py-1 rounded font-manrope">In Analysis</div>

<div className="absolute -left-4 top-1/2 -translate-x-full -translate-y-1/2 hidden xl:flex items-center">
<div className="text-[10px] bg-horizon-blue text-white px-2 py-1 rounded shadow-lg whitespace-nowrap font-manrope">Real-time status</div>
<div className="w-2 h-0.5 bg-horizon-blue"></div>
<div className="w-1.5 h-1.5 rounded-full bg-horizon-blue"></div>
</div>
</div>

<div className="flex items-center justify-between p-3 bg-white border border-gray-100 rounded shadow-sm">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-blue-50 flex items-center justify-center text-horizon-blue"><svg className="lucide lucide-package w-4 h-4" data-lucide="package" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path></svg></div>
<div>
<div className="text-xs font-bold text-slate-800 font-manrope">Batch #9920</div>
<div className="text-[10px] text-slate-500 font-manrope">Submitted 24h ago</div>
</div>
</div>
<div className="text-xs font-medium text-horizon-blue bg-blue-50 px-2 py-1 rounded font-manrope">QA Review</div>
</div>

<div className="flex items-center justify-between p-3 bg-white border border-gray-100 rounded shadow-sm opacity-60">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-gray-50 flex items-center justify-center text-gray-400"><svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<div>
<div className="text-xs font-bold text-slate-800 font-manrope">Batch #9919</div>
<div className="text-[10px] text-slate-500 font-manrope">Completed</div>
</div>
</div>
<div className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded font-manrope">Download COA</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24">
<div className="mx-auto max-w-7xl px-4 sm:px-6">

<div className="mb-12 md:mb-16">
<h2 className="text-4xl md:text-5xl font-montserrat font-medium text-slate-900 mb-6 tracking-tight">Meet Horizon Analytical</h2>
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
<p className="text-lg text-slate-500 max-w-2xl font-manrope leading-relaxed">
          Our lab is staffed exclusively by PhD-level chemists with decades of combined experience in analytical testing. Precision isn't just a goal—it's our standard.
        </p>
<a className="group inline-flex items-center gap-2 text-horizon-blue font-semibold text-sm hover:text-blue-700 transition-colors font-manrope" href="#team">
          View full team directory
          <svg className="lucide lucide-arrow-right transition-transform group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20 gap-x-4 gap-y-4">

<div className="relative h-[480px] rounded-2xl overflow-hidden group cursor-pointer bg-slate-900">
<img alt="Dr. Sarah Chen" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/90"></div>

<div className="absolute top-6 left-6">
<div className="flex items-center gap-2 text-white font-manrope text-sm font-medium backdrop-blur-md bg-white/10 px-3 py-1.5 rounded-full border border-white/20">
<svg className="lucide lucide-flask-conical" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"></path><path d="M8.5 2h7"></path><path d="M7 16h10"></path></svg>
            Lead Chemist
          </div>
</div>

<div className="absolute bottom-8 left-6 right-6">
<div className="text-4xl lg:text-5xl font-montserrat font-medium text-white mb-3 tracking-tight">15 Years</div>
<p className="text-slate-300 font-manrope text-sm leading-relaxed mb-4">Specializing in HPLC/MS methodology and cannabinoid profiling.</p>
<div className="border-t border-white/20 pt-4">
<p className="text-white font-semibold font-manrope">Dr. Sarah Chen, PhD</p>
<p className="text-slate-400 text-xs font-manrope">Analytical Chemistry, Stanford</p>
</div>
</div>
</div>

<div className="relative h-[480px] rounded-2xl overflow-hidden group cursor-pointer bg-slate-900">
<img alt="Dr. James Wilson" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/90"></div>

<div className="absolute top-6 left-6">
<div className="flex items-center/10 px-3 py-1.5 rounded-full border border-white/20">
<svg className="lucide lucide-microscope" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M6 18h8"></path><path d="M3 22h18"></path><path d="M14 22a7 7 0 1 0 0-14h-1"></path><path d="M9 14h2"></path><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"></path><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"></path></svg>
            Lab Director
          </div>
</div>

<div className="absolute bottom-8 left-6 right-6">
<div className="text-4xl lg:text-5xl font-montserrat font-medium text-white mb-3 tracking-tight">50k+</div>
<p className="text-slate-300 font-manrope text-sm leading-relaxed mb-4">Samples processed with zero regulatory audit findings since 2018.</p>
<div className="border-t border-white/20 pt-4">
<p className="text-white font-semibold font-manrope">Dr. James Wilson, PhD</p>
<p className="text-slate-400 text-xs font-manrope">Biochemistry, MIT</p>
</div>
</div>
</div>

<div className="relative h-[480px] rounded-2xl overflow-hidden group cursor-pointer bg-slate-900">
<img alt="Dr. Elena Rodriguez" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/90"></div>

<div className="absolute top-6 left-6">
<div className="flex items-center gap-2 text-white font-manrope text-sm font-medium backdrop-blur-md bg-white/10 px-3 py-1.5 rounded-full border border-white/20">
<svg className="lucide lucide-shield-check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
            Compliance
          </div>
</div>

<div className="absolute bottom-8 left-6 right-6">
<div className="text-4xl lg:text-5xl font-montserrat font-medium text-white mb-3 tracking-tight">100%</div>
<p className="text-slate-300 font-manrope text-sm leading-relaxed mb-4">Accuracy rate in FDA blind proficiency testing rounds.</p>
<div className="border-t border-white/20 pt-4">
<p className="text-white font-semibold font-manrope">Dr. Elena Rodriguez</p>
<p className="text-slate-400 text-xs font-manrope">Regulatory Science, Johns Hopkins</p>
</div>
</div>
</div>

<div className="relative h-[480px] rounded-2xl overflow-hidden group cursor-pointer bg-slate-900">
<img absolute="" alt="Michael Chang" duration-700="" group-hover:opacity-100"="" group-hover:scale-105="" h-full="" inset-0="" object-cover="" opacity-90="" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" transition-transform="" w-full=""/>
<div className="absolute inset-0">
<img alt="Male Chemist" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/90"></div>
</div>

<div className="absolute top-6 left-6">
<div className="flex items-center gap-2 text-white font-manrope text-sm font-medium backdrop-blur-md bg-white/10 px-3 py-1.5 rounded-full border border-white/20">
<svg className="lucide lucide-activity" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
            Operations
          </div>
</div>

<div className="absolute bottom-8 left-6 right-6">
<div className="text-4xl lg:text-5xl font-montserrat font-medium text-white mb-3 tracking-tight">48 Hrs</div>
<p className="text-slate-300 font-manrope text-sm leading-relaxed mb-4">Average turnaround time maintained across all purity testing.</p>
<div className="border-t border-white/20 pt-4">
<p className="text-white font-semibold font-manrope">Michael Chang, PhD</p>
<p className="text-slate-400 text-xs font-manrope">Organic Chemistry, UC Berkeley</p>
</div>
</div>
</div>
</div>

<div className="absolute bottom-8 left-6 right-6">
<div className="border-t border-white/20 pt-4">
</div>
</div>
</div>


</section>

<section className="border-y overflow-hidden bg-slate-50 border-gray-200 pt-24 pb-24">
<div className="sm:px-6 max-w-7xl mr-auto ml-auto pr-4 pl-4">

<div className="max-w-3xl mb-12">
<h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6 font-manrope tracking-tight leading-[1.1]">
      Lab Results That Drive 
      <span className="text-horizon-blue">Business Growth</span>
</h2>
<p className="text-lg text-slate-600 font-manrope leading-relaxed mb-8">
<span className="text-horizon-blue font-bold text-xl">67%</span> Increased Customer Confidence with transparent, verified lab results. Fintech and Finance solutions integrated.
    </p>
<div className="flex flex-wrap gap-4">
<button className="bg-horizon-blue text-white px-6 py-2.5 rounded-lg font-semibold text-sm shadow-sm hover:bg-blue-700 transition-colors font-manrope">
        Request Testing
      </button>
<button className="bg-white text-slate-700 border border-slate-200 px-6 py-2.5 rounded-lg font-semibold text-sm shadow-sm hover:bg-slate-50 transition-colors font-manrope">
        Schedule Demo
      </button>
</div>
</div>

<div className="relative w-full bg-[#F0F4F8] rounded-2xl overflow-hidden pt-12 px-4 md:px-12 border border-slate-100">

<div className="relative mx-auto max-w-[1000px] bg-white rounded-t-2xl shadow-2xl shadow-slate-900/10 border border-slate-200/60 ring-1 ring-black/5">

<div className="bg-white rounded-t-xl overflow-hidden flex h-[500px] md:h-[600px] w-full">

<div className="hidden md:flex w-60 flex-col border-r border-slate-100 bg-white">
<div className="p-5 flex items-center gap-3 mb-4">
<div className="w-8 h-8 bg-blue-50 text-horizon-blue rounded-lg flex items-center justify-center">
<svg className="lucide lucide-flask-conical" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"></path><path d="M8.5 2h7"></path><path d="M7 16h10"></path></svg>
</div>
<span className="text-sm font-bold text-slate-900 font-manrope">Horizon Lab</span>
</div>
<div className="px-3 space-y-1">
<div className="px-3 py-2 bg-slate-50 rounded-lg flex items-center gap-3 text-slate-900 text-sm font-semibold font-manrope border border-slate-200/50">
<svg className="lucide lucide-layout-grid" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
              Overview
            </div>
<div className="px-3 py-2 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-lg flex items-center justify-between group cursor-pointer transition-colors font-manrope">
<div className="flex items-center gap-3 text-sm font-medium">
<svg className="lucide lucide-test-tube" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2"></path><path d="M8.5 2h7"></path><path d="M14.5 16h-5"></path></svg>
                Active Tests
              </div>
<span className="bg-blue-100 text-horizon-blue text-[10px] font-bold px-1.5 py-0.5 rounded-full">3</span>
</div>
<div className="px-3 py-2 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-lg flex items-center gap-3 text-sm font-medium transition-colors font-manrope">
<svg className="lucide lucide-file-text" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" x2="8" y1="13" y2="13"></line><line x1="16" x2="8" y1="17" y2="17"></line><line x1="10" x2="8" y1="9" y2="9"></line></svg>
              Results &amp; COAs
            </div>
</div>
<div className="mt-auto p-4 border-t border-slate-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-400 to-indigo-500"></div>
<div>
<div className="text-xs font-bold text-slate-900 font-manrope">Dr. Sarah Chen</div>
<div className="text-[10px] text-slate-500 font-manrope">Lab Director</div>
</div>
</div>
</div>
</div>

<div className="flex-1 flex flex-col min-w-0 bg-slate-50/30">
<div className="p-6 md:p-8 overflow-y-auto">
<div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
<div className="">
<h3 className="text-xl font-bold text-slate-900 font-manrope">Admin Dashboard</h3>
<p className="text-sm text-slate-500 font-manrope mt-1">Manage your testing pipeline and verification status.</p>
</div>
<div className="flex gap-3">
<button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 font-manrope shadow-sm">
                  Filter View
                </button>
<button className="px-4 py-2 bg-horizon-blue text-white rounded-lg text-sm font-medium hover:bg-blue-700 font-manrope shadow-sm flex items-center gap-2">
<svg className="lucide lucide-plus" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="M5 12h14"></path></svg>
                  New Sample
                </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">

<div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 relative overflow-hidden group">
<div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-2 font-manrope">Processing</div>
<div className="flex items-center justify-between mb-2">
<div className="text-2xl font-bold text-slate-900 font-manrope">12 Samples</div>
<svg className="lucide lucide-activity text-blue-200" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-blue-50 text-horizon-blue font-manrope">Weekdays 12-1pm</span>
</div>

<div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 relative overflow-hidden group">
<div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-2 font-manrope">Completed</div>
<div className="flex items-center justify-between mb-2">
<div className="text-2xl font-bold text-slate-900 font-manrope">842 Tests</div>
<div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">
<svg className="lucide lucide-check" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
</div>
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-green-50 text-green-600 font-manrope">99.8% Accuracy</span>
</div>

<div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 relative overflow-hidden group">
<div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-2 font-manrope">Attention Needed</div>
<div className="flex items-center justify-between mb-2">
<div className="text-2xl font-bold text-slate-900 font-manrope">1 Review</div>
<div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center text-red-500">
<svg className="lucide lucide-alert-circle" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>
</div>
</div>
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-red-50 text-red-500 font-manrope">Verification incomplete</span>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
<div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
<h4 className="text-sm font-bold text-slate-900 font-manrope">Recent Submissions</h4>
<svg className="lucide lucide-more-horizontal text-slate-400 cursor-pointer" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm">
<thead className="bg-slate-50 border-b border-slate-100 text-slate-500 font-medium">
<tr className="">
<th className="px-6 py-3 font-manrope text-xs font-semibold">Sample ID</th>
<th className="px-6 py-3 font-manrope text-xs font-semibold">Type</th>
<th className="px-6 py-3 font-manrope text-xs font-semibold">Status</th>
<th className="px-6 py-3 font-manrope text-xs font-semibold text-right">Turnaround</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">

<tr className="group hover:bg-slate-50/50">
<td className="px-6 py-4 font-medium text-slate-900 font-manrope flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-horizon-blue"></div>
                           #HA-2024-8821
                        </td>
<td className="px-6 py-4 text-slate-600 font-manrope">Potency (HPLC)</td>
<td className="px-6 py-4"><span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-horizon-blue font-manrope">In Progress</span></td>
<td className="px-6 py-4 text-right text-slate-500 font-manrope">18h remaining</td>
</tr>

<tr className="group hover:bg-slate-50/50">
<td className="px-6 py-4 font-medium text-slate-900 font-manrope flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                           #HA-2024-8820
                        </td>
<td className="px-6 py-4 text-slate-600 font-manrope">Heavy Metals</td>
<td className="px-6 py-4"><span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 font-manrope">Complete</span></td>
<td className="px-6 py-4 text-right font-manrope"><a className="text-horizon-blue hover:underline font-medium" href="#">Download COA</a></td>
</tr>

<tr className="group hover:bg-slate-50/50">
<td className="px-6 py-4 font-medium text-slate-900 font-manrope flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-orange-400"></div>
                           #HA-2024-8819
                        </td>
<td className="px-6 py-4 text-slate-600 font-manrope">Microbial</td>
<td className="px-6 py-4"><span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-700 font-manrope">Pending Review</span></td>
<td className="px-6 py-4 text-right text-slate-500 font-manrope">2h remaining</td>
</tr>
</tbody>
</table>
</div>
<div className="px-6 py-3 border-t border-slate-100 bg-slate-50/50 flex justify-end">
<div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-sm border border-slate-200">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-xs font-medium text-slate-700 font-manrope">Live System Status: <span className="font-bold">Operational</span></span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 pb-8 gap-x-6 gap-y-6">

<div className="col-span-1 md:col-span-2 lg:col-span-4 flex items-center justify-between pb-2 border-b border-gray-100 mb-2">
<div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 font-manrope">
<svg className="lucide lucide-mouse-pointer-click" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m9 9 5 12 1.8-5.2L21 14Z"></path><path d="M7.2 2.2 8 5.1"></path><path d="m5.1 8-2.9-.8"></path><path d="M14 4.1 12 6"></path><path d="m6 12-1.9 2"></path></svg>
            Select a module to preview
        </div>
<div className="hidden sm:flex items-center gap-1.5">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-horizon-blue opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-horizon-blue"></span>
</span>
<span className="text-[10px] font-semibold text-horizon-blue font-manrope">Live Interactive Demo</span>
</div>
</div>

<button className="relative h-full text-left group bg-white p-6 rounded-xl border border-blue-200 shadow-xl shadow-blue-900/5 transition-all duration-300 outline-none ring-1 ring-blue-500/10">

<div className="absolute top-0 left-0 right-0 h-1 bg-horizon-blue rounded-t-xl"></div>
<div className="flex items-start justify-between mb-4">
<div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-horizon-blue shadow-sm">
<svg className="lucide lucide-layout-grid" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect className="" height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
</div>
<div className="px-2 py-1 bg-blue-50 text-horizon-blue text-[10px] font-bold uppercase tracking-wider rounded-md font-manrope flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-horizon-blue animate-pulse"></div>
                Viewing
            </div>
</div>
<h3 className="text-sm font-bold text-slate-900 font-manrope mb-2">Admin Portals</h3>
<p className="text-xs text-slate-600 leading-relaxed font-manrope">
            Centralized management for all your lab operations and testing workflows.
        </p>
</button>

<button className="relative h-full text-left group bg-white/50 p-6 rounded-xl border border-slate-200 hover:bg-white hover:border-blue-300 hover:shadow-lg hover:shadow-blue-900/5 hover:-translate-y-0.5 transition-all duration-300 outline-none">
<div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-200 rounded-t-xl transition-colors"></div>
<div className="flex items-start justify-between mb-4">
<div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-horizon-blue group-hover:bg-blue-50 transition-colors">
<svg className="lucide lucide-sliders-horizontal" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><line x1="21" x2="14" y1="4" y2="4"></line><line x1="10" x2="3" y1="4" y2="4"></line><line x1="21" x2="12" y1="12" y2="12"></line><line x1="8" x2="3" y1="12" y2="12"></line><line x1="21" x2="16" y1="20" y2="20"></line><line x1="12" x2="3" y1="20" y2="20"></line><line x1="14" x2="14" y1="2" y2="6"></line><line x1="8" x2="8" y1="10" y2="14"></line><line x1="16" x2="16" y1="18" y2="22"></line></svg>
</div>
<div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2 py-1 bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-wider rounded-md font-manrope">
                Preview
            </div>
</div>
<h3 className="text-sm font-bold text-slate-700 group-hover:text-slate-900 font-manrope mb-2 transition-colors">Complete Control</h3>
<p className="text-xs text-slate-400 leading-relaxed font-manrope group-hover:text-slate-600 transition-colors">
            Full oversight of sample lifecycle, compliance status, and result verification.
        </p>
</button>

<button className="relative h-full text-left group bg-white/50 p-6 rounded-xl border border-slate-200 hover:bg-white hover:border-blue-300 hover:shadow-lg hover:shadow-blue-900/5 hover:-translate-y-0.5 transition-all duration-300 outline-none">
<div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-200 rounded-t-xl transition-colors"></div>
<div className="flex items-start justify-between mb-4">
<div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-horizon-blue group-hover:bg-blue-50 transition-colors">
<svg className="lucide lucide-activity" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2 py-1 bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-wider rounded-md font-manrope">
                Preview
            </div>
</div>
<h3 className="text-sm font-bold text-slate-700 group-hover:text-slate-900 font-manrope mb-2 transition-colors">Track Orders</h3>
<p className="text-xs text-slate-400 leading-relaxed font-manrope group-hover:text-slate-600 transition-colors">
            Real-time visibility into testing progress with live status updates.
        </p>
</button>

<button className="relative h-full text-left group bg-white/50 p-6 rounded-xl border border-slate-200 hover:bg-white hover:border-blue-300 hover:shadow-lg hover:shadow-blue-900/5 hover:-translate-y-0.5 transition-all duration-300 outline-none">
<div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-200 rounded-t-xl transition-colors"></div>
<div className="flex items-start justify-between mb-4">
<div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-horizon-blue group-hover:bg-blue-50 transition-colors">
<svg className="lucide lucide-shield-check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2 py-1 bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-wider rounded-md font-manrope">
                Preview
            </div>
</div>
<h3 className="text-sm font-bold text-slate-700 group-hover:text-slate-900 font-manrope mb-2 transition-colors">Verify Results</h3>
<p className="text-xs text-slate-400 leading-relaxed font-manrope group-hover:text-slate-600 transition-colors">
            Instant certificate verification for compliance assurance.
        </p>
</button>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#E3F1FF] pt-24 pb-24 relative" id="quote">

<div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/60 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-[600px] h-[600px] bg-blue-200/50 rounded-full blur-[100px] pointer-events-none"></div>
<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="max-w-xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-[#035DB8] text-xs font-medium mb-8 font-manrope backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#035DB8] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#035DB8]"></span>
</span>
               Accepting New Partners
            </div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-[#035DB8] mb-6 font-montserrat leading-[1.1]">
               Precision testing for 
               <span className="text-slate-900">modern brands.</span>
</h2>
<p className="text-lg text-slate-600 mb-10 leading-relaxed font-manrope">
               Stop guessing. Start knowing. Join 340+ innovative companies using Horizon to certify quality, ensure compliance, and build unshakeable consumer trust.
            </p>
<div className="space-y-4 mb-12">
<div className="flex items-start gap-4 group">
<div className="mt-1 flex-shrink-0 w-8 h-8 rounded-lg bg-white border border-blue-100 flex items-center justify-center text-[#035DB8] shadow-sm">
<svg className="lucide lucide-zap" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
</div>
<div className="">
<h3 className="text-[#035DB8] font-medium font-manrope">48-Hour Turnaround</h3>
<p className="text-sm text-slate-600 font-manrope">Get results faster than any other lab in the region.</p>
</div>
</div>
<div className="flex items-start gap-4 group">
<div className="mt-1 flex-shrink-0 w-8 h-8 rounded-lg bg-white border border-blue-100 flex items-center justify-center text-[#035DB8] shadow-sm">
<svg className="lucide lucide-microscope" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M6 18h8"></path><path d="M3 22h18"></path><path d="M14 22a7 7 0 1 0 0-14h-1"></path><path d="M9 14h2"></path><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"></path><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"></path></svg>
</div>
<div className="">
<h3 className="text-[#035DB8] font-medium font-manrope">PhD-Verified Accuracy</h3>
<p className="text-sm text-slate-600 font-manrope">Every result is reviewed by a qualified scientist.</p>
</div>
</div>
</div>
<div className="flex items-center gap-4 text-sm text-slate-600 font-manrope border-t border-blue-200 pt-8">
<div className="flex -space-x-2">
<img alt="User" className="w-8 h-8 rounded-full border-2 border-[#E3F1FF]" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-[#E3F1FF]" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-[#E3F1FF]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<p className="">Trusted by <span className="text-[#035DB8] font-semibold">500+ lab managers</span></p>
</div>
</div>

<div className="relative">

<div className="absolute -inset-1 bg-gradient-to-b from-blue-400/20 to-transparent rounded-2xl blur-lg opacity-50"></div>
<div className="relative bg-white border border-blue-100 rounded-2xl p-8 shadow-xl">
<div className="mb-8">
<h3 className="text-2xl font-medium tracking-tight text-slate-900 font-montserrat">Speak to an Expert</h3>
<p className="text-sm text-slate-500 mt-2 font-manrope">Choose the fastest way to connect with our lab team.</p>
</div>
<form className="space-y-6">

<div className="space-y-3">
<label className="flex items-center gap-2 text-[11px] uppercase tracking-wider font-semibold text-slate-500 font-manrope">
<svg className="lucide lucide-phone" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        Get a Callback
                     </label>
<div className="flex gap-3">
<input className="flex-1 bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#035DB8] focus:ring-1 focus:ring-[#035DB8] transition-all font-manrope" placeholder="(555) 000-0000" type="tel"/>
<button className="bg-[#035DB8] hover:bg-blue-700 text-white px-6 rounded-lg font-medium transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 font-manrope text-sm whitespace-nowrap" type="button">
                           Call Me
                        </button>
</div>
</div>

<div className="relative py-4">
<div className="absolute inset-0 flex items-center">
<div className="w-full border-t border-slate-100"></div>
</div>
<div className="relative flex justify-center">
<span className="bg-white px-4 text-xs text-slate-400 font-manrope uppercase tracking-wider font-medium">Or</span>
</div>
</div>

<div className="space-y-3">
<label className="flex items-center gap-2 text-[11px] uppercase tracking-wider font-semibold text-slate-500 font-manrope">
<svg className="lucide lucide-mail" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                        Email Us
                     </label>
<a className="group relative w-full h-12 bg-white border border-slate-200 hover:border-blue-200 hover:bg-blue-50/50 text-slate-700 hover:text-[#035DB8] rounded-lg font-medium transition-all font-manrope flex items-center justify-center gap-2 overflow-hidden shadow-sm" href="mailto:partners@horizonanalytical.com">
<span>Send an Email</span>
<svg className="lucide lucide-arrow-up-right text-slate-400 group-hover:text-[#035DB8] transition-colors" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
<div className="bg-slate-50 rounded-lg p-4 border border-slate-100 mt-4">
<div className="flex items-center gap-2 mb-1">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-xs font-semibold text-slate-700 font-manrope">Online Now</span>
</div>
<p className="text-xs text-slate-500 font-manrope leading-relaxed">
                        Our lab managers typically respond to inquiries within <span className="text-slate-900 font-medium">15 minutes</span> during business hours (EST).
                     </p>
</div>
</form>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
<div className="mx-auto max-w-7xl px-4 sm:px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="lg:col-span-1">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="flex h-8 w-8 items-center justify-center text-horizon-blue">
<svg className="lucide lucide-microscope h-6 w-6" data-lucide="microscope" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 18h8"></path><path d="M3 22h18"></path><path d="M14 22a7 7 0 1 0 0-14h-1"></path><path d="M9 14h2"></path><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"></path><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"></path></svg>
</div>
<span className="text-lg font-semibold text-white font-manrope">Horizon</span>
</a>
<p className="text-xs text-slate-500 leading-relaxed font-manrope">Fast, Accurate, Transparent Lab Testing for the modern era.</p>
</div>
<div className="">
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4 font-manrope">Product</h4>
<ul className="space-y-3 text-xs text-slate-400">
<li className=""><a className="hover:text-white transition-colors font-manrope" href="#services">Testing Services</a></li>
<li><a className="hover:text-white transition-colors font-manrope" href="#verify">Verify COA</a></li>
<li className=""><a className="hover:text-white transition-colors font-manrope" href="#quote">Pricing</a></li>
<li><a className="hover:text-white transition-colors font-manrope" href="#how-it-works">How It Works</a></li>
</ul>
</div>
<div className="">
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4 font-manrope">Resources</h4>
<ul className="space-y-3 text-xs text-slate-400">
<li><a className="hover:text-white transition-colors font-manrope" href="#">For Brands</a></li>
<li><a className="hover:text-white transition-colors font-manrope" href="#">Sample Submission Guide</a></li>
<li><a className="hover:text-white transition-colors font-manrope" href="#">Blog &amp; Insights</a></li>
</ul>
</div>
<div className="">
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4 font-manrope">Company</h4>
<ul className="space-y-3 text-xs text-slate-400">
<li><a className="hover:text-white transition-colors font-manrope" href="#">About Horizon</a></li>
<li><a className="hover:text-white transition-colors font-manrope" href="#">Our Team</a></li>
<li><a className="hover:text-white transition-colors font-manrope" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4 font-manrope">Legal</h4>
<ul className="space-y-3 text-xs text-slate-400">
<li><a className="hover:text-white transition-colors font-manrope" href="#">Terms of Service</a></li>
<li><a className="hover:text-white transition-colors font-manrope" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors font-manrope" href="#">Compliance</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-xs text-slate-500 font-manrope">© 2026 Horizon Analytical. Last Updated: Jan 2026 | ISO 17025 Accredited</div>
<div className="flex gap-4">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><svg className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
</div>
</div>
</div>
</footer>

<iframe className="html2canvas-container" data-html2canvas-ignore="true" height="1309" scrolling="no" style={{visibility: 'hidden', position: 'fixed', left: '-10000px', top: '0px', border: '0px'}} width="1234"></iframe>
    </>
  );
}
