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
      

<header className="hsc-header">
<div className="top-bar">
<div className="container top-bar-inner">
<div className="top-bar-left">
        The source for all your fluid power needs. Solutions. Period.
      </div>
<div className="top-bar-right">
<a href="#">Register</a>
<a className="btn-signin" href="#">
<iconify-icon height="14" icon="solar:login-2-linear" style={{marginRight: '4px', verticalAlign: 'text-bottom'}} width="14"></iconify-icon>
          Sign In
        </a>
</div>
</div>
</div>
<div className="middle-bar container">
<div className="logo">

<img alt="Hydraulic Supply Company" src="https://www.hydraulic-supply.com/media/logo/stores/1/hsc-logo-new.png" style={{height: '50px'}}/>
</div>
<div className="search-bar">
<input className="" placeholder="Enter keyword, item, model, part #, or category" type="text"/>
<button aria-label="Search" type="button">
<iconify-icon height="18" icon="solar:magnifer-linear" width="18"></iconify-icon>
</button>
</div>
<div className="cart-info">
<iconify-icon height="24" icon="solar:cart-linear" width="24"></iconify-icon>
</div>
</div>
<nav className="nav-bar">
<div className="container nav-bar-inner">
<ul className="nav-links">
<li><a href="#">All Products ˅</a></li>
<li><a href="#">Services</a></li>
<li><a href="#">Branch Locations</a></li>
<li className=""><a className="" href="#">Quick Order</a></li>
<li className=""><a className="" href="#">Help</a></li>
</ul>
<div className="nav-questions">
<strong className="">Questions? (800) 507-9651</strong>
</div>
</div>
</nav>
</header>
<main className="">

<section className="hero-section">
<div className="container">
<div className="hero-content">
<div className="hero-text bg-[url(https://hydraulicsupply-test.epicorcommerce.com/media/crimper-maintenance-program-hero-bkg.png?w=800&amp;q=80)] bg-cover bg-center">
<h1 className="">Crimper Maintenance Program</h1>
<p className="hero-subtext">Restore your FT-1380 crimper back to full working order. Prevent downtime, improve safety, and extend equipment life for one low price.</p>
<div className="hero-ctas">
<a className="btn btn-primary" href="mailto:sales@hydraulic-supply.com">Request Service</a>
<a className="btn btn-outline" href="tel:800-507-9651">Contact Service Team</a>
</div>
</div>
<div className="hero-image">

<div className="flex flex-col h-full w-full justify-between gap-3 p-4 md:p-6 bg-gray-50/50">
<a className="group relative flex flex-col justify-center flex-1 w-full px-5 py-4 bg-white rounded-xl border border-gray-200/75 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#1979c3]/30 hover:bg-blue-50/20 overflow-hidden" href="#">
<div className="flex items-center justify-between mb-1.5">
<h3 className="text-base font-medium text-gray-900 tracking-tight">Emergency Repair</h3>
<svg className="text-gray-400 transition-all duration-300 group-hover:text-[#1979c3] group-hover:translate-x-1" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
<p className="text-sm text-gray-500 font-normal leading-relaxed">24/7 on-site mobile hose replacement and repair services.</p>
</a>
<a className="group relative flex flex-col justify-center flex-1 w-full px-5 py-4 bg-white rounded-xl border border-gray-200/75 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#1979c3]/30 hover:bg-blue-50/20 overflow-hidden" href="#">
<div className="flex items-center justify-between mb-1.5">
<h3 className="text-base font-medium text-gray-900 tracking-tight">Preventative Maintenance</h3>
<svg className="text-gray-400 transition-all duration-300 group-hover:text-[#1979c3] group-hover:translate-x-1" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
<p className="text-sm text-gray-500 font-normal leading-relaxed">Scheduled inspections to keep your equipment running smoothly.</p>
</a>
<a className="group relative flex flex-col justify-center flex-1 w-full px-5 py-4 bg-white rounded-xl border border-gray-200/75 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#1979c3]/30 hover:bg-blue-50/20 overflow-hidden" href="#">
<div className="flex items-center justify-between mb-1.5">
<h3 className="text-base font-medium text-gray-900 tracking-tight">Parts &amp; Accessories</h3>
<svg className="text-gray-400 transition-all duration-300 group-hover:text-[#1979c3] group-hover:translate-x-1" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
<p className="text-sm text-gray-500 font-normal leading-relaxed">Browse our extensive catalog of authentic hydraulic components.</p>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="intro-content section-padding">
<div className="container text-center">
<h2 className="text-[1.625rem] font-extralight text-[#333333] leading-[28.6px] mt-[25px] mb-[20px] tracking-tight">Keep your crimper accurate, reliable, and ready for daily use</h2>
<p className="" style={{fontSize: '1.1rem', maxWidth: '900px', margin: '0 auto', color: '#444', lineHeight: '1.8'}}>
                    Hydraulic hose crimpers are built for long service life, but accuracy and reliability depend on periodic inspection and maintenance. Seals wear, electrical components age, and mechanical parts that see constant load eventually need attention.
                </p>
<p className="" style={{fontSize: '1.1rem', maxWidth: '900px', margin: '15px auto 30px auto', color: '#444', lineHeight: '1.8'}}>
                    The FT-1380 maintenance program is designed to bring machines back to proper working condition through inspection, service, and calibration, helping extend the life of equipment that would otherwise become unreliable or inconsistent in operation.
                </p>
<a className="btn border-[#1979c3] text-[#1979c3] bg-transparent hover:bg-[#14619b] hover:border-[#14619b] hover:text-white active:bg-[#14619b] active:border-[#14619b] active:text-white" href="#">
<iconify-icon height="16" icon="solar:download-linear" style={{marginRight: '8px', verticalAlign: 'text-bottom'}} width="16"></iconify-icon>
                    Download the Crimper Maintenance Program PDF
                </a>
</div>
</section>


<section className="benefits-section section-padding bg-gray-100">
<div className="container">
<h2 className="section-title text-center relative text-[1.625rem] font-extralight text-[#333333] leading-[28.6px] mt-[25px] mb-[20px] tracking-tight">Program Benefits</h2>
<div className="benefits-grid">
<div className="bg-white border border-gray-200 p-6 lg:p-8 transition-all duration-300 hover:border-[#032d60] hover:shadow-lg flex flex-col h-full rounded-sm cursor-pointer">
<div className="flex items-start gap-4">
<div className="shrink-0 mt-0.5 text-[#032d60]">
<svg className="lucide lucide-clock" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
</div>
<div className="flex flex-col">
<h3 className="text-lg font-semibold text-gray-900 mb-2 mt-0">Reduce Unplanned Downtime</h3>
<p className="text-base text-gray-500 leading-relaxed mb-0">Keep your production running smoothly by catching wear and tear before it leads to a breakdown. We also provide a loaner while you wait.</p>
</div>
</div>
</div>
<div className="bg-white border border-gray-200 p-6 lg:p-8 transition-all duration-300 hover:border-[#032d60] hover:shadow-lg flex flex-col h-full rounded-sm cursor-pointer">
<div className="flex items-start gap-4">
<div className="shrink-0 mt-0.5 text-[#032d60]">
<svg className="lucide lucide-shield-check" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<div className="flex flex-col">
<h3 className="text-lg font-semibold text-gray-900 mb-2 mt-0">Extend Equipment Life</h3>
<p className="text-base text-gray-500 leading-relaxed mb-0">With proper maintenance, your FT-1380 crimper can last for decades, maximizing your capital investment.</p>
</div>
</div>
</div>
<div className="bg-white border border-gray-200 p-6 lg:p-8 transition-all duration-300 hover:border-[#032d60] hover:shadow-lg flex flex-col h-full rounded-sm cursor-pointer">
<div className="flex items-start gap-4">
<div className="shrink-0 mt-0.5 text-[#032d60]">
<svg className="lucide lucide-clipboard-check" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect>
<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
<path d="m9 14 2 2 4-4"></path>
</svg>
</div>
<div className="flex flex-col">
<h3 className="text-lg font-semibold text-gray-900 mb-2 mt-0">Improve Safety &amp; Compliance</h3>
<p className="text-base text-gray-500 leading-relaxed mb-0">Regular calibration and inspection ensure every hose assembly meets stringent safety standards.</p>
</div>
</div>
</div>
<div className="bg-white border border-gray-200 p-6 lg:p-8 transition-all duration-300 hover:border-[#032d60] hover:shadow-lg flex flex-col h-full rounded-sm cursor-pointer">
<div className="flex items-start gap-4">
<div className="shrink-0 mt-0.5 text-[#032d60]">
<svg className="lucide lucide-banknote" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<rect height="12" rx="2" width="20" x="2" y="6"></rect>
<circle cx="12" cy="12" r="2"></circle>
<path d="M6 12h.01"></path>
<path d="M18 12h.01"></path>
</svg>
</div>
<div className="flex flex-col">
<h3 className="text-lg font-semibold text-gray-900 mb-2 mt-0">Lower Emergency Costs</h3>
<p className="text-base text-gray-500 leading-relaxed mb-0">Fixed-price proactive maintenance is significantly cheaper than emergency repairs, replacement parts, and expedited shipping.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="included-section section-padding">
<div className="container">
<div className="text-center">
<h2 className="section-title text-[1.625rem] font-extralight text-[#333333] leading-[28.6px] mt-[25px] mb-[20px] tracking-tight">What's Included in the Program</h2>
<p className="section-subtitle">A comprehensive top-to-bottom inspection, calibration, and preventative maintenance checklist for your crimper.</p>
</div>
<div className="included-grid gap-6 items-stretch w-full">
<ul className="flex flex-col gap-3.5 w-full">
<li className="flex transition-colors hover:bg-gray-100/70 bg-gray-50 w-full rounded-sm pt-3 pr-4 pb-3 pl-4 gap-x-3.5 gap-y-3.5 items-center">
<svg className="text-[#1979c3] shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span className="text-gray-800 text-base">Inspect Position Sensor</span>
</li>
<li className="flex items-center gap-3.5 bg-gray-50 py-3 px-4 rounded-sm w-full transition-colors hover:bg-gray-100/70">
<svg className="text-[#1979c3] shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span className="text-gray-800 text-base">Re-Seal Cylinder</span>
</li>
<li className="flex items-center gap-3.5 bg-gray-50 py-3 px-4 rounded-sm w-full transition-colors hover:bg-gray-100/70">
<svg className="text-[#1979c3] shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span className="text-gray-800 text-base">Re-Seal Valve</span>
</li>
<li className="flex items-center gap-3.5 bg-gray-50 py-3 px-4 rounded-sm w-full transition-colors hover:bg-gray-100/70">
<svg className="text-[#1979c3] shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span className="text-gray-800 text-base">Inspect Keypad</span>
</li>
<li className="flex items-center gap-3.5 bg-gray-50 py-3 px-4 rounded-sm w-full transition-colors hover:bg-gray-100/70">
<svg className="text-[#1979c3] shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span className="text-gray-800 text-base">Inspect Main Circuit Board</span>
</li>
<li className="flex items-center gap-3.5 bg-gray-50 py-3 px-4 rounded-sm w-full transition-colors hover:bg-gray-100/70">
<svg className="text-[#1979c3] shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span className="text-gray-800 text-base">Inspect Crimp Switch</span>
</li>
<li className="flex items-center gap-3.5 bg-gray-50 py-3 px-4 rounded-sm w-full transition-colors hover:bg-gray-100/70">
<svg className="text-[#1979c3] shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span className="text-gray-800 text-base">Replace Work Light</span>
</li>
<li className="flex items-center gap-3.5 bg-gray-50 py-3 px-4 rounded-sm w-full transition-colors hover:bg-gray-100/70">
<svg className="text-[#1979c3] shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span className="text-gray-800 text-base">Inspect Tie Rods</span>
</li>
<li className="flex items-center gap-3.5 bg-gray-50 py-3 px-4 rounded-sm w-full transition-colors hover:bg-gray-100/70">
<svg className="text-[#1979c3] shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span className="text-gray-800 text-base">Inspect Pusher</span>
</li>
<li className="flex items-center gap-3.5 bg-gray-50 py-3 px-4 rounded-sm w-full transition-colors hover:bg-gray-100/70">
<svg className="text-[#1979c3] shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span className="text-gray-800 text-base">Inspect Crimp Ring</span>
</li>
</ul>
<ul className="flex flex-col gap-3.5 w-full">
<li className="flex items-center gap-3.5 bg-gray-50 py-3 px-4 rounded-sm w-full transition-colors hover:bg-gray-100/70">
<svg className="text-[#1979c3] shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle className="" cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span className="text-gray-800 text-base">Replace Labels</span>
</li>
<li className="flex items-center gap-3.5 bg-gray-50 py-3 px-4 rounded-sm w-full transition-colors hover:bg-gray-100/70">
<svg className="text-[#1979c3] shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span className="text-gray-800 text-base">Inspect Motor Start Capacitor</span>
</li>
<li className="flex items-center gap-3.5 bg-gray-50 py-3 px-4 rounded-sm w-full transition-colors hover:bg-gray-100/70">
<svg className="text-[#1979c3] shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span className="text-gray-800 text-base">Inspect Motor Run Capacitor</span>
</li>
<li className="flex items-center gap-3.5 bg-gray-50 py-3 px-4 rounded-sm w-full transition-colors hover:bg-gray-100/70">
<svg className="text-[#1979c3] shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span className="text-gray-800 text-base">Inspect Motor Stationary Switch</span>
</li>
<li className="flex items-center gap-3.5 bg-gray-50 py-3 px-4 rounded-sm w-full transition-colors hover:bg-gray-100/70">
<svg className="text-[#1979c3] shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span className="text-gray-800 text-base">Inspect Hoses</span>
</li>
<li className="flex items-center gap-3.5 bg-gray-50 py-3 px-4 rounded-sm w-full transition-colors hover:bg-gray-100/70">
<svg className="text-[#1979c3] shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path className="" d="m9 12 2 2 4-4"></path>
</svg>
<span className="text-gray-800 text-base">Inspect Electrical Box Internals</span>
</li>
<li className="flex items-center gap-3.5 bg-gray-50 py-3 px-4 rounded-sm w-full transition-colors hover:bg-gray-100/70">
<svg className="text-[#1979c3] shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span className="text-gray-800 text-base">Inspect Power Cord</span>
</li>
<li className="flex items-center gap-3.5 bg-gray-50 py-3 px-4 rounded-sm w-full transition-colors hover:bg-gray-100/70">
<svg className="text-[#1979c3] shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span className="text-gray-800 text-base">Top Off Hydraulic Fluid</span>
</li>
<li className="flex items-center gap-3.5 bg-gray-50 py-3 px-4 rounded-sm w-full transition-colors hover:bg-gray-100/70">
<svg className="text-[#1979c3] shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span className="text-gray-800 text-base">Test Pump</span>
</li>
<li className="flex items-center gap-3.5 bg-gray-50 py-3 px-4 rounded-sm w-full transition-colors hover:bg-gray-100/70">
<svg className="text-[#1979c3] shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span className="text-gray-800 text-base">Clean Crimper</span>
</li>
</ul>
<div className="min-h-[400px] overflow-hidden w-full h-full border-gray-200 border rounded-sm relative shadow-sm">
<img alt="Equipment Maintenance Service" className="object-center w-full h-full object-contain absolute top-0 right-0 bottom-0 left-0 border-0 border-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/67e2b8d7-28af-4c51-aa58-43e515721e73_1600w.png"/>
</div>
</div>
<p className="fine-print">*Note: Fixed pricing for crimper maintenance assumes no major problems found. Items such as broken tie rods, worn or damaged crimp ring, or damaged pusher may result in a higher price. Freight charges are customer's responsibility.</p>
</div>
</section>

<section className="split-section section-padding">
<div className="container split-container">
<div className="split-text">
<h2 className="text-[1.625rem] font-extralight text-[#333333] leading-[28.6px] mt-[25px] mb-[20px] tracking-tight">Expert Service You Can Trust</h2>
<p className="">At Hydraulic Supply Company, our factory-trained technicians understand the critical role your crimping equipment plays in your daily operations. We use state-of-the-art diagnostic tools and genuine replacement parts to ensure your machine operates at peak performance.</p>
<p className="">Every serviced crimper is rigorously tested and calibrated prior to return shipment so you can get right back to work with complete confidence.</p>
<a className="btn btn-primary mt-20" href="mailto:sales@hydraulic-supply.com">Contact Service Team</a>
</div>
<div className="split-image">

<img alt="HSC Technician servicing a crimper" className="object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aaa0ca02-507f-440a-ba5d-88fa4ccb569f_1600w.png"/>
</div>
</div>
</section>

<section className="how-it-works-section section-padding bg-light">
<div className="container">
<h2 className="section-title text-[1.625rem] font-extralight text-[#333333] leading-[28.6px] mt-[25px] mb-[20px] tracking-tight">How It Works</h2>
<div className="steps-grid">
<div className="step-card">
<div className="step-number">1</div>
<h4 className="">Enroll</h4>
<p>Contact our customer service team to sign up and lock in your maintenance pricing.</p>
</div>
<div className="step-card">
<div className="step-number">2</div>
<h4 className="">Schedule</h4>
<p className="">We coordinate a convenient time for service and arrange delivery of your temporary loaner crimper.</p>
</div>
<div className="step-card">
<div className="step-number">3</div>
<h4 className="">Maintenance</h4>
<p className="">Send in your crimper. Our technicians perform the comprehensive 20-point inspection and repair.</p>
</div>
<div className="step-card">
<div className="step-number">4</div>
<h4>Return &amp; Support</h4>
<p>Your calibrated, tested crimper is returned to you ready for action. We provide ongoing support.</p>
</div>
</div>
</div>
</section>

<section className="cta-section section-padding">
<div className="container text-center">
<h2 className="text-[1.625rem] font-extralight text-[#333333] leading-[28.6px] mt-[25px] mb-[20px] tracking-tight">Ready to Restore Your Crimper?</h2>
<p>Don't wait for a breakdown. Schedule your maintenance today and keep your operations moving.</p>
<div className="hero-ctas justify-center mt-30">
<a className="btn btn-primary" href="mailto:sales@hydraulic-supply.com">Request Service</a>
<a className="btn btn-secondary" href="tel:800-507-9651">Call (800) 507-9651</a>
</div>
</div>
</section>
</main>

<section className="pre-footer section-padding">
<div className="container pre-footer-inner">
<div className="pre-footer-text">
<h4 style={{fontSize: '1.1rem', marginBottom: '5px', color: '#000'}}>Need help identifying a part?</h4>
<p style={{color: '#333', fontSize: '1rem', marginBottom: '0'}}>Send us a photo and our experts will find it for you.</p>
</div>
<div className="pre-footer-actions">
<a className="btn btn-black" href="#">CONTACT SUPPORT</a>
<a className="btn btn-outline-black" href="#">FIND LOCATIONS</a>
</div>
</div>
</section>

<footer className="hsc-footer">
<div className="container footer-grid">
<div className="footer-col">
<h4>Company Information</h4>
<ul>
<li><a href="#">Company History</a></li>
<li><a href="#">Executive Team</a></li>
<li><a href="#">International</a></li>
<li><a href="#">Affiliates / Resellers</a></li>
<li><a href="#">Careers</a></li>
</ul>
<div className="email-signup" style={{marginTop: '25px'}}>
<h4 style={{fontSize: '0.95rem', marginBottom: '15px', textTransform: 'none', letterSpacing: '0'}}>Sign Up For Our Email!</h4>
<div style={{display: 'flex'}}>
<input placeholder="greg" style={{padding: '8px', width: '140px', border: 'none', color: 'rgb(0, 0, 0)'}} type="email"/>
<button style={{backgroundColor: 'var(--action-blue)', color: '#fff', border: 'none', padding: '8px 15px', cursor: 'pointer', fontWeight: 'bold'}} type="button">Submit</button>
</div>
</div>
</div>
<div className="footer-col">
<h4>HSC Resources</h4>
<ul>
<li><a href="#">Catalogs</a></li>
<li><a href="#">Brands</a></li>
<li><a href="#">Services</a></li>
<li><a href="#">24/7 On-Site Repairs</a></li>
<li><a href="#">Industries</a></li>
</ul>
</div>
<div className="footer-col">
<h4>Top Categories</h4>
<ul>
<li><a href="#">Hydraulic Cylinders</a></li>
<li><a href="#">Hydraulic Pumps</a></li>
<li><a href="#">Hydraulic Motor</a></li>
<li><a href="#">Hydrostatic Transmission</a></li>
<li><a href="#">Hydraulic Pressure Gauge</a></li>
</ul>
</div>
<div className="footer-col">
<h4>Customer Support</h4>
<ul>
<li><a href="#">800-507-9651</a></li>
<li><a href="#">Frequently Asked Questions</a></li>
<li><a href="#">Credit Application</a></li>
<li><a href="#">Supplier Information</a></li>
</ul>
</div>
<div className="footer-col follow-us-col">
<h4>Follow Us</h4>
<div className="social-icons" style={{display: 'flex', gap: '10px', marginBottom: '20px'}}>
<div className="social-circle">f</div>
<div className="social-circle">t</div>
<div className="social-circle">in</div>
<div className="social-circle">yt</div>
</div>
<div style={{color: '#fff', fontSize: '0.8rem', marginBottom: '5px'}}>A Division of</div>
<div style={{fontSize: '1.4rem', fontWeight: '800', fontStyle: 'italic', marginBottom: '20px', color: '#fff', letterSpacing: '-0.5px'}}>MiMOTION</div>
<div style={{backgroundColor: '#d0202e', color: '#fff', display: 'inline-block', padding: '15px', fontSize: '0.75rem', textAlign: 'center', fontWeight: 'bold'}}>
                    Danfoss<br/><span style={{fontWeight: 'normal', fontSize: '0.65rem'}}>Power Solutions<br/>Authorized<br/>Distributor</span>
</div>
</div>
</div>
<div className="footer-bottom">
<div className="container footer-bottom-inner">
<p>Copyright © 2026 Hydraulic Supply Company. All rights Reserved.</p>
<div className="footer-legal-links">
<a href="#">Help</a>
<a href="#">Terms and Conditions</a>
<a href="#">Terms of Use</a>
<a href="#">Privacy Notice</a>
<a href="#">Cookie Settings</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
