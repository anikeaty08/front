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
      

<div className="bg-[#F4CD38] text-[#13294B] border-b border-[#13294B]/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex justify-center md:justify-end items-center gap-6 text-sm font-medium">
<span className="hidden md:inline font-medium">24/7 Emergency Hotline</span>
<a className="flex items-center gap-2 font-semibold hover:opacity-75 transition-opacity" href="tel:8012859048">
<i className="w-4 h-4" data-lucide="phone" strokeWidth="1.5"></i>
                (801) 285-9048
            </a>
</div>
</div>

<nav className="bg-[#13294B] text-white relative z-40 border-b border-white/5 shadow-lg">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between md:justify-end lg:justify-between">

<div className="absolute -top-6 left-4 md:left-8 z-50 flex-shrink-0">
<a className="relative block w-28 h-28 md:w-36 md:h-36 group" href="#">
<div className="flex flex-col transition-transform group-hover:scale-105 bg-[#13294B] border-white border-4 rounded-full absolute top-0 right-0 bottom-0 left-0 shadow-xl items-center justify-center overflow-hidden">
<img alt="Let's Fix Plumbing Logo" className="w-full h-full object-cover cursor-pointer" onclick="window.location.href='https://www.letsfixplumbing.com/'" role="button" src="https://assets.cdn.filesafe.space/01RaWM3T6W5QnXZffRel/media/69a22b15524b717ee57927f5.webp"/>
</div>
<div className="absolute bottom-1 -left-2 -right-2 bg-[#F4CD38] text-[#13294B] text-center py-1.5 rounded shadow-md transform -rotate-3 border-2 border-white">
<span className="block md:text-lg leading-none uppercase text-base font-semibold tracking-tight">Let's Fix</span>
<span className="block text-xs md:text-sm font-medium leading-none tracking-tight opacity-90 uppercase mt-0.5">Plumbing</span>
</div>
</a>
</div>
<div className="w-28 md:w-36 lg:hidden"></div> 

<div className="hidden lg:flex flex-grow gap-8 text-sm font-medium pl-20 gap-x-8 gap-y-8 items-center justify-center">
<a className="text-[#F4CD38] hover:text-[#F4CD38] transition-colors" href="#">Home</a>
<a className="hover:text-[#F4CD38] transition-colors text-white" href="https://www.letsfixplumbing.com/about-us/">About Us</a>
<a className="hover:text-[#F4CD38] transition-colors flex items-center gap-1 group text-white" href="#">
                    Plumbing 
                    <i className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" data-lucide="chevron-down" strokeWidth="1.5"></i>
</a>
<a className="hover:text-[#F4CD38] transition-colors flex items-center gap-1 group text-white" href="https://www.letsfixplumbing.com/tankless-water-heater/">
                    Drain &amp; Sewer 
                    <i className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" data-lucide="chevron-down" strokeWidth="1.5"></i>
</a>
<a className="hover:text-[#F4CD38] transition-colors text-white" href="https://www.letsfixplumbing.com/recent-projects/">Projects</a>
<a className="hover:text-[#F4CD38] transition-colors text-white" href="https://www.letsfixplumbing.com/specials/">Specials</a>
<a className="hover:text-[#F4CD38] transition-colors text-white" href="https://www.letsfixplumbing.com/blog/">Blog</a>
<a className="hover:text-[#F4CD38] transition-colors text-white" href="#">Contact Us</a>
</div>

<div className="flex-shrink-0">
<a className="flex items-center gap-2 hover:bg-[#e0bc2f] transition-all hover:shadow-lg text-sm font-semibold text-[#13294B] bg-[#F4CD38] rounded pt-2.5 pr-6 pb-2.5 pl-6 shadow-md" href="/#book-now">
<i className="w-4 h-4" data-lucide="calendar" strokeWidth="1.5"></i>
                    Schedule Online
                </a>
</div>
</div>
</nav>
<main className="flex-grow">

<section className="md:pt-24 md:pb-48 overflow-hidden z-0 bg-[#13294B] pt-16 pb-32 relative">

<div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{background: 'repeating-conic-gradient(from 0deg, #ffffff 0deg 10deg, transparent 10deg 20deg)'}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

<div className="w-full lg:w-5/12 pt-8 flex flex-col items-start text-left">
<div className="md:text-9xl leading-none text-8xl font-semibold text-[#F4CD38] tracking-tighter mb-2">$49</div>
<h1 className="md:text-5xl lg:text-6xl uppercase leading-[1.1] text-4xl font-semibold text-white tracking-tight mb-10">Drain Clearing<br/>Special</h1>

<a className="inline-block group relative" href="/#scheduler">
<div className="absolute inset-0 bg-[#ADC3D9] transition-transform transform group-hover:scale-[1.03]" style={{clipPath: 'polygon(0 0, 100% 0, 92% 100%, 0 100%)'}}></div>
<span className="block md:text-xl uppercase cursor-pointer text-lg font-semibold text-[#13294B] tracking-tight pt-4 pr-12 pb-4 pl-8 relative" onclick="document.getElementById('scheduler').scrollIntoView({behavior: 'smooth'})">
                            Book This Offer Now!
                        </span>
</a>
</div>

<div className="w-full lg:w-7/12 relative mt-8 lg:mt-0">
<div className="aspect-[16/9] lg:aspect-[4/3] rounded-sm overflow-hidden shadow-2xl relative border-2 border-white/10">
<img alt="Let's Fix Plumbing Team Ready to Serve" className="object-center w-full h-full object-cover" src="https://assets.cdn.filesafe.space/01RaWM3T6W5QnXZffRel/media/69a22b08524b7145767926c1.png"/>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full z-20 leading-none pointer-events-none">
<svg className="w-full h-16 md:h-28 block" preserveaspectratio="none" viewbox="0 0 1440 120">

<polygon fill="#F4CD38" points="0,60 1440,0 1440,120 0,120"></polygon>

<polygon fill="#ffffff" points="0,90 1440,30 1440,120 0,120"></polygon>
</svg>
</div>
</section>

<section className="md:py-28 bg-white border-slate-100 border-b pt-20 pb-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
<div className="flex flex-col items-start">
<div className="w-12 h-12 rounded bg-[#13294B] flex items-center justify-center text-[#F4CD38] mb-6 shadow-sm">
<i className="w-6 h-6" data-lucide="dollar-sign" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-slate-900 tracking-tight mb-3">Upfront $49 Pricing</h3>
<p className="leading-relaxed text-base text-slate-600">No bait and switch. The price you see is the price you pay to clear standard residential drain blockages.</p>
</div>
<div className="flex flex-col items-start">
<div className="w-12 h-12 rounded bg-[#13294B] flex items-center justify-center text-[#F4CD38] mb-6 shadow-sm">
<i className="w-6 h-6" data-lucide="user-check" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">Expert Technicians</h3>
<p className="text-base text-slate-600 leading-relaxed">Our plumbers are background-checked, highly trained, and equipped with the latest drain cleaning technology.</p>
</div>
<div className="flex flex-col items-start">
<div className="w-12 h-12 rounded bg-[#13294B] flex items-center justify-center text-[#F4CD38] mb-6 shadow-sm">
<i className="w-6 h-6" data-lucide="home" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">Respect for Your Home</h3>
<p className="text-base text-slate-600 leading-relaxed">We wear shoe covers, lay down drop cloths, and leave your home as clean as we found it.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 sm:p-12">
<h2 className="uppercase text-3xl font-medium text-[#13294B] tracking-tight text-center mb-8">What's included in the $49 Special?</h2>
<ul className="space-y-5 max-w-2xl mx-auto">
<li className="flex items-start gap-4">
<i className="text-[#F4CD38] w-6 h-6 flex-shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-lg text-slate-700">Professional cabling/snaking of one primary clogged drain.</span>
</li>
<li className="flex items-start gap-4">
<i className="text-[#F4CD38] w-6 h-6 flex-shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-lg text-slate-700">Flow test to ensure water is draining properly.</span>
</li>
<li className="flex items-start gap-4">
<i className="text-[#F4CD38] w-6 h-6 flex-shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-lg text-slate-700">Complimentary visual inspection of exposed plumbing.</span>
</li>
<li className="flex items-start gap-3 pt-6 mt-6 border-t border-slate-100">
<i className="text-slate-400 w-5 h-5 flex-shrink-0 mt-0.5" data-lucide="info" strokeWidth="1.5"></i>
<span className="text-sm text-slate-500 leading-relaxed">Valid for residential customers only during normal business hours. Accessible cleanout required. Cannot be combined with other offers. If roots or broken pipes are discovered, additional work may be required and will be quoted upfront.</span>
</li>
</ul>
</div>
</div>
</section>

<section className="scroll-mt-20 bg-white border-slate-100 border-t pt-24 pb-24" id="scheduler">
<div className="sm:px-6 lg:px-8 max-w-5xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center mb-12">
<h2 className="uppercase text-4xl font-semibold text-[#13294B] tracking-tight mb-4" id="book-now">Book Your Appointment</h2>
<p className="text-lg text-slate-600 max-w-2xl mr-auto ml-auto">Select a convenient time below to lock in your $49 drain cleaning special. Confirmation is instant.</p>
</div>
<div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden ring-1 ring-black/5">
<iframe className="" src="https://go.servicetitan.com/webscheduler?tenantid=4419851930" style={{width: '100%', height: '700px', border: 'none'}} title="Schedule ServiceTitan Appointment"></iframe>
</div>
</div>
</section>
</main>

<footer className="bg-[#13294B] text-white py-16 border-t border-[#13294B]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
<span className="font-semibold tracking-tight text-2xl text-[#F4CD38] uppercase mb-6">Let's Fix Plumbing</span>
<p className="text-base text-slate-300 mb-8 text-center max-w-md leading-relaxed">Your trusted neighborhood plumbing experts. Fixing leaks, clearing drains, and restoring peace of mind.</p>
<div className="flex items-center gap-6 text-slate-400 mb-10">
<a className="w-12 h-12 rounded border border-slate-600 flex items-center justify-center hover:bg-white/10 hover:text-white hover:border-white/20 transition-all" href="#"><i className="w-5 h-5" data-lucide="facebook" strokeWidth="1.5"></i></a>
<a className="w-12 h-12 rounded border border-slate-600 flex items-center justify-center hover:bg-white/10 hover:text-white hover:border-white/20 transition-all" href="#"><i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i></a>
<a className="w-12 h-12 rounded border border-slate-600 flex items-center justify-center hover:bg-white/10 hover:text-white hover:border-white/20 transition-all" href="#"><i className="w-5 h-5" data-lucide="map-pin" strokeWidth="1.5"></i></a>
</div>
<div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-slate-500">
<span>© 2024 Let's Fix Plumbing. All rights reserved.</span>
<span className="hidden sm:inline opacity-50">•</span>
<span>License #PLB-123456</span>
</div>
</div>
</footer>


    </>
  );
}
