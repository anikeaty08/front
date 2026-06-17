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
      

<div className="bg-slate-900 text-slate-300 py-2 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
<div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-base">
<div className="flex items-center gap-2 mb-2 sm:mb-0">
<i className="w-4 h-4 text-orange-500" data-lucide="shield-check" strokeWidth="1.5"></i>
<span>Veteran-Owned &amp; Operated in Houston, TX</span>
</div>
<div className="flex items-center gap-4">
<a className="flex items-center gap-1 hover:text-white transition-colors" href="#">
<i className="w-4 h-4 text-sky-500" data-lucide="phone" strokeWidth="1.5"></i>
<span className="font-medium">281-555-0199</span>
</a>
</div>
</div>
</div>

<header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

<div className="flex-shrink-0 flex items-center gap-2">
<div className="bg-slate-900 p-2 rounded flex items-center justify-center">
<i className="w-6 h-6 text-orange-500" data-lucide="thermometer-sun" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col">
<span className="text-2xl font-semibold tracking-tight text-slate-900 leading-none">THE GENERAL</span>
<span className="text-base tracking-widest text-sky-600 font-medium leading-tight">Heating &amp; Air</span>
</div>
</div>

<nav className="hidden md:flex items-center gap-8">
<a className="text-lg font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="text-lg font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#about">About Us</a>
<a className="text-lg font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#reviews">Reviews</a>
<a className="text-lg font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#learning">Learning Center</a>
</nav>

<div className="hidden md:flex items-center">
<a className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg text-lg font-medium transition-all shadow-sm shadow-orange-500/20" href="#contact">
                    Book Service
                </a>
</div>

<div className="md:hidden">
<button className="text-slate-600 p-2">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>
</header>

<section className="relative bg-slate-900 pt-20 pb-32 overflow-hidden">

<div className="absolute inset-0 opacity-20">
<img alt="HVAC Background" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/60"></div>
</div>
<div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-2 leading-tight">
<span className="text-orange-500 block">STOP WASTING MONEY</span>
<span className="text-sky-400">on your HVAC System</span>
</h1>
<p className="mt-8 text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Learn the insider knowledge most HVAC companies <em className="text-white not-italic border-b border-orange-500">never</em> share, and protect your home from unnecessary repairs, poor installs, and skyrocketing bills.
            </p>
<div className="mt-12 flex flex-col items-center gap-4">
<h3 className="text-2xl font-semibold text-white tracking-tight flex items-center gap-2">
                    GET MY FREE GUIDE <i className="w-6 h-6 text-sky-400" data-lucide="arrow-down-circle" strokeWidth="1.5"></i>
</h3>
<a className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-xl font-medium transition-all shadow-lg shadow-orange-500/30 w-full sm:w-auto" href="#guide">
                    7 Hidden Mistakes Houston Homeowners Don't Realize They're Making
                </a>
</div>
<div className="mt-12 flex items-center justify-center gap-6 text-slate-400 text-base">
<span className="flex items-center gap-2"><i className="w-5 h-5 text-sky-500" data-lucide="check" strokeWidth="1.5"></i> Instant Access</span>
<span className="flex items-center gap-2"><i className="w-5 h-5 text-sky-500" data-lucide="check" strokeWidth="1.5"></i> 100% Free</span>
<span className="flex items-center gap-2"><i className="w-5 h-5 text-sky-500" data-lucide="check" strokeWidth="1.5"></i> No Fluff</span>
</div>
</div>
</section>

<section className="bg-slate-900 border-t border-slate-800 py-20 relative overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-300 mb-8">
                COMING SOON to the Cypress, Katy and surrounding communities
            </h2>
<div className="py-8">
<h2 className="text-5xl md:text-7xl font-semibold tracking-tight text-white leading-none mb-2">
                    THE GENERAL
                </h2>
<h2 className="text-5xl md:text-7xl font-semibold tracking-tight leading-none mb-8">
<span className="text-orange-500">Heating</span> <span className="text-white">and</span> <span className="text-sky-500">Air</span>
</h2>
</div>
<p className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed max-w-3xl mx-auto">
                A <span className="text-sky-400">Veteran-Owned HVAC</span> Company Built on <br className="hidden md:block"/>
<span className="text-orange-500">Precision, Integrity, and Professionalism</span>
</p>
</div>
</section>

<section className="py-24 bg-white relative" id="guide">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">
<div className="absolute inset-0 bg-slate-100 rounded-3xl translate-x-4 translate-y-4"></div>
<img alt="HVAC Technician" className="relative rounded-3xl shadow-xl w-full h-[500px] object-cover grayscale opacity-90 mix-blend-multiply" src="https://images.unsplash.com/photo-1581094288338-2314dddb31b5?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-tr from-sky-900/40 to-transparent rounded-3xl"></div>
</div>
<div className="order-1 lg:order-2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-base font-medium mb-6">
<i className="w-4 h-4" data-lucide="book-open" strokeWidth="1.5"></i> Free Resource
                    </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
                        Inside this free guide, you'll discover...
                    </h2>
<p className="text-lg text-slate-600 mb-8 leading-relaxed">
                        The 7 hidden HVAC mistakes that cost Houston homeowners thousands every year — including:
                    </p>
<ul className="space-y-4 mb-10 text-lg text-slate-700">
<li className="flex items-start gap-3">
<i className="w-6 h-6 text-orange-500 shrink-0 mt-0.5" data-lucide="alert-triangle" strokeWidth="1.5"></i>
<span>The <strong>#1 cause</strong> of expensive repairs most companies won't tell you.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-6 h-6 text-orange-500 shrink-0 mt-0.5" data-lucide="search" strokeWidth="1.5"></i>
<span>How to spot a bad installation before it becomes a major problem.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-6 h-6 text-orange-500 shrink-0 mt-0.5" data-lucide="shield-off" strokeWidth="1.5"></i>
<span>How to avoid being upsold or misdiagnosed by technicians.</span>
</li>
</ul>
<div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-8">
<p className="text-lg italic text-slate-600">
                            "These aren't 'tips.' They're the things homeowners wish they knew <span className="font-medium">before something went wrong.</span>"
                        </p>
</div>
<button className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all w-full sm:w-auto shadow-sm shadow-sky-500/20">
                        Send Me the Guide Now
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">Comprehensive HVAC Solutions</h2>
<p className="text-lg text-slate-600">From emergency summer breakdowns to pre-winter tune-ups, we handle it all with military precision.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-14 h-14 bg-sky-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-7 h-7 text-sky-500" data-lucide="snowflake" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">AC Repair</h3>
<p className="text-lg text-slate-600 mb-6">Fast, accurate diagnostics and repairs to get your cold air flowing again when Texas heat strikes.</p>
<a className="text-sky-600 font-medium flex items-center gap-1 hover:text-sky-700" href="#">Learn more <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i></a>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-7 h-7 text-orange-500" data-lucide="flame" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">Heating</h3>
<p className="text-lg text-slate-600 mb-6">Furnace repair, heat pump service, and winterization to keep your family warm during cold snaps.</p>
<a className="text-orange-600 font-medium flex items-center gap-1 hover:text-orange-700" href="#">Learn more <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i></a>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-7 h-7 text-slate-700" data-lucide="wrench" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">Installation</h3>
<p className="text-lg text-slate-600 mb-6">Flawless, code-compliant installations of high-efficiency systems that lower your monthly energy bills.</p>
<a className="text-slate-700 font-medium flex items-center gap-1 hover:text-slate-900" href="#">Learn more <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i></a>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-7 h-7 text-green-600" data-lucide="leaf" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">Air Quality</h3>
<p className="text-lg text-slate-600 mb-6">Duct cleaning, UV lights, and advanced filtration to ensure your family breathes safe, clean air indoors.</p>
<a className="text-green-600 font-medium flex items-center gap-1 hover:text-green-700" href="#">Learn more <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i></a>
</div>
</div>
</div>
</section>

<section className="py-32 bg-slate-900 text-center px-4 sm:px-6 lg:px-8 relative">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800 to-slate-900"></div>
<div className="max-w-4xl mx-auto relative z-10">
<h2 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-2 leading-none">TRUST</h2>
<h2 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-12 leading-none">THE GENERAL</h2>
<p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-10">
                As a veteran-led team, we believe in doing things the right way: <br className="hidden md:block"/>
<span className="text-orange-500 font-medium">Clear communication, honest guidance, and respect for your home.</span>
</p>
<p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-3xl mx-auto">
                We are currently in our <strong className="text-white font-medium">pre-launch phase</strong> and will begin serving the Houston area soon. Until then, our focus is providing homeowners with trusted information, practical checklists, and clarity you can use right now to make informed decisions long before you ever need a technician.
            </p>
<p className="text-lg text-slate-300 font-medium mb-12">
                We created this guide to help homeowners protect their comfort and avoid the common issues we see every day in the HVAC industry.
            </p>
<div className="flex flex-col items-center">
<button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-lg text-xl font-medium transition-all shadow-lg shadow-orange-500/20 mb-4">
                    Download the Free Guide
                </button>
<p className="text-base text-slate-500">(No fluff. No spam. Just the facts Houston homeowners should know.)</p>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-4">The Standard of Excellence</h2>
<p className="text-lg text-slate-600 max-w-2xl mx-auto">We bring the discipline, attention to detail, and integrity of military service directly to your home's comfort systems.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="text-center">
<div className="w-20 h-20 mx-auto bg-slate-50 rounded-full border border-slate-100 flex items-center justify-center mb-6 shadow-sm">
<i className="w-10 h-10 text-orange-500" data-lucide="crosshair" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">Precision</h3>
<p className="text-lg text-slate-600">We don't guess. We use advanced diagnostics to pinpoint exact issues, ensuring repairs are done right the first time, preventing future breakdowns.</p>
</div>
<div className="text-center">
<div className="w-20 h-20 mx-auto bg-slate-50 rounded-full border border-slate-100 flex items-center justify-center mb-6 shadow-sm">
<i className="w-10 h-10 text-sky-500" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">Integrity</h3>
<p className="text-lg text-slate-600">Upfront pricing, no hidden fees, and zero pushy sales tactics. We recommend what you need, nothing more, treating your home like our own.</p>
</div>
<div className="text-center">
<div className="w-20 h-20 mx-auto bg-slate-50 rounded-full border border-slate-100 flex items-center justify-center mb-6 shadow-sm">
<i className="w-10 h-10 text-slate-700" data-lucide="briefcase" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">Professionalism</h3>
<p className="text-lg text-slate-600">Clean uniforms, marked vehicles, on-time arrivals, and a commitment to leaving your home cleaner than we found it. That's the General's promise.</p>
</div>
</div>
</div>
</section>

<section className="py-16 bg-slate-100 border-y border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h3 className="text-xl font-medium text-slate-500 mb-8 uppercase tracking-widest">Proudly Servicing The Greater Houston Area</h3>
<div className="flex flex-wrap justify-center gap-3 md:gap-6">
<span className="bg-white px-4 py-2 rounded-full text-lg text-slate-700 font-medium shadow-sm border border-slate-200">Houston</span>
<span className="bg-white px-4 py-2 rounded-full text-lg text-slate-700 font-medium shadow-sm border border-slate-200 border-orange-200 ring-1 ring-orange-500/20">Cypress</span>
<span className="bg-white px-4 py-2 rounded-full text-lg text-slate-700 font-medium shadow-sm border border-slate-200 border-sky-200 ring-1 ring-sky-500/20">Katy</span>
<span className="bg-white px-4 py-2 rounded-full text-lg text-slate-700 font-medium shadow-sm border border-slate-200">Sugar Land</span>
<span className="bg-white px-4 py-2 rounded-full text-lg text-slate-700 font-medium shadow-sm border border-slate-200">Spring</span>
<span className="bg-white px-4 py-2 rounded-full text-lg text-slate-700 font-medium shadow-sm border border-slate-200">The Woodlands</span>
</div>
</div>
</section>

<section className="py-12 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 text-xl font-semibold text-slate-800"><i className="w-8 h-8" data-lucide="award"></i> Licensed &amp; Insured</div>
<div className="flex items-center gap-2 text-xl font-semibold text-slate-800"><i className="w-8 h-8" data-lucide="thumbs-up"></i> 100% Guarantee</div>
<div className="flex items-center gap-2 text-xl font-semibold text-slate-800"><i className="w-8 h-8" data-lucide="clock"></i> 24/7 Emergency</div>
<div className="flex items-center gap-2 text-xl font-semibold text-slate-800"><i className="w-8 h-8 fill-current" data-lucide="star"></i> 5-Star Rated</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden">
<div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-sky-900/30 to-transparent"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">Stop Breakdowns Before They Happen</h2>
<p className="text-xl text-slate-300 mb-8 leading-relaxed">Join the <span className="text-orange-500 font-medium">General's Guard Maintenance Club</span>. Regular tune-ups are proven to extend the lifespan of your system, lower utility bills, and prevent costly emergency repairs.</p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3 text-lg"><i className="w-6 h-6 text-sky-400" data-lucide="check-circle-2" strokeWidth="1.5"></i> 2 Comprehensive Tune-ups per year</li>
<li className="flex items-center gap-3 text-lg"><i className="w-6 h-6 text-sky-400" data-lucide="check-circle-2" strokeWidth="1.5"></i> Priority scheduling (jump to the front of the line)</li>
<li className="flex items-center gap-3 text-lg"><i className="w-6 h-6 text-sky-400" data-lucide="check-circle-2" strokeWidth="1.5"></i> 15% discount on all repairs</li>
<li className="flex items-center gap-3 text-lg"><i className="w-6 h-6 text-sky-400" data-lucide="check-circle-2" strokeWidth="1.5"></i> No overtime charges, ever</li>
</ul>
<button className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all">
                        View Club Plans
                    </button>
</div>
<div className="relative">
<div className="bg-slate-800 rounded-3xl p-8 md:p-12 border border-slate-700 shadow-2xl relative z-10">
<div className="absolute top-0 right-0 bg-orange-500 text-white text-base font-bold px-4 py-1 rounded-bl-xl rounded-tr-3xl uppercase tracking-wider">Most Popular</div>
<h3 className="text-3xl font-semibold mb-2">Annual Protection</h3>
<div className="flex items-baseline gap-2 mb-6">
<span className="text-5xl font-bold">$19</span>
<span className="text-xl text-slate-400">/month</span>
</div>
<p className="text-lg text-slate-400 mb-8 border-b border-slate-700 pb-8">Total peace of mind for your home's most expensive appliance.</p>
<button className="w-full bg-sky-500 hover:bg-sky-600 text-white py-4 rounded-lg text-lg font-medium transition-all">
                            Sign Up Today
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-slate-200" id="learning">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 text-center mb-16">Your Learning Center</h2>

<div className="bg-slate-50 rounded-2xl p-8 md:p-10 border border-slate-200 hover:border-sky-300 transition-colors group">
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-4 group-hover:text-sky-600 transition-colors">
                    Why Indoor Air Quality Matters in Cypress, TX (And Why It Became Personal for Us)
                </h3>
<p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    You can see dirty water. You can't see dirty air. If you're a homeowner in Cypress, Katy, Sugar Land, or 77433 and you've never thought about your indoor air quality before — this is a good place to start.
                    <a className="text-sky-500 hover:text-sky-600 font-medium" href="#">...more</a>
</p>
<div className="flex items-center gap-4 text-base text-slate-500">
<span className="bg-slate-200 px-3 py-1 rounded-full text-slate-700 font-medium text-sm">Air Quality</span>
<span>19 February 2026</span>
<span className="flex items-center gap-1"><i className="w-4 h-4" data-lucide="clock"></i> 2 min read</span>
</div>
</div>

<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 text-lg font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">
                    View all articles <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</section>

<section className="bg-sky-50 py-12 border-b border-sky-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-4">
<div className="bg-white p-3 rounded-full shadow-sm">
<i className="w-8 h-8 text-sky-500" data-lucide="credit-card" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-xl font-semibold text-slate-900">Flexible Financing Available</h3>
<p className="text-lg text-slate-600">Don't let budget constraints delay your comfort. Options starting at 0% APR.</p>
</div>
</div>
<button className="bg-white border border-slate-200 text-slate-800 hover:bg-slate-50 px-6 py-3 rounded-lg text-lg font-medium transition-all whitespace-nowrap shadow-sm">
                See Options
            </button>
</div>
</section>

<section className="relative bg-slate-900 py-24 overflow-hidden">

<div className="absolute inset-0 opacity-30 mix-blend-luminosity">
<img alt="Happy Family" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1542013936693-884638332954?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
</div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/80 to-slate-900"></div>
<div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-12">
                FOLLOW US for more homeowners HVAC tips and info
            </h2>
<div className="flex justify-center gap-6 md:gap-8">
<a className="w-14 h-14 bg-[#0A66C2] rounded flex items-center justify-center hover:scale-110 transition-transform" href="#">
<i className="w-8 h-8 text-white" data-lucide="linkedin" strokeWidth="1.5"></i>
</a>
<a className="w-14 h-14 bg-[#1877F2] rounded flex items-center justify-center hover:scale-110 transition-transform" href="#">
<i className="w-8 h-8 text-white" data-lucide="facebook" strokeWidth="1.5"></i>
</a>
<a className="w-14 h-14 bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#833AB4] rounded flex items-center justify-center hover:scale-110 transition-transform" href="#">
<i className="w-8 h-8 text-white" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a className="w-14 h-14 bg-black rounded flex items-center justify-center hover:scale-110 transition-transform border border-slate-700" href="#">
<svg className="w-8 h-8 text-white" fill="currentColor" viewbox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.04.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.23-.9 4.45-2.42 6.06-1.5 1.59-3.66 2.5-5.88 2.57-2.22.07-4.48-.46-6.3-1.63-1.81-1.16-3.04-3.08-3.46-5.18-.42-2.11-.08-4.33 1-6.19 1.08-1.85 2.87-3.23 4.93-3.83 2.05-.6 4.31-.5 6.27.35.25.11.49.25.72.39v4.14c-.65-.34-1.37-.53-2.1-.54-1.27-.02-2.55.33-3.56 1.09-1.01.76-1.66 1.94-1.8 3.22-.14 1.28.23 2.58.98 3.59.75 1.01 1.95 1.63 3.22 1.7 1.28.07 2.57-.27 3.58-1.02 1.01-.75 1.64-1.92 1.74-3.2.05-1.04.02-2.08.02-3.12v-15z"></path></svg>
</a>
<a className="w-14 h-14 bg-[#FF0000] rounded flex items-center justify-center hover:scale-110 transition-transform" href="#">
<i className="w-8 h-8 text-white" data-lucide="youtube" strokeWidth="1.5"></i>
</a>
</div>
</div>
</section>

<footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="bg-slate-800 p-2 rounded">
<i className="w-8 h-8 text-orange-500" data-lucide="thermometer-sun" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col">
<span className="text-3xl font-semibold tracking-tight text-white leading-none">THE GENERAL</span>
<span className="text-lg tracking-widest text-sky-500 font-medium leading-tight">Heating &amp; Air</span>
</div>
</div>
<p className="text-lg text-slate-400 max-w-md">Providing precision HVAC services to Houston and surrounding areas with military-grade integrity and professionalism.</p>
</div>

<div>
<h4 className="text-white font-semibold mb-4 text-lg">Quick Links</h4>
<ul className="space-y-3">
<li><a className="text-slate-400 hover:text-white transition-colors text-base" href="#">Services</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors text-base" href="#">About Us</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors text-base" href="#">Maintenance Club</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors text-base" href="#">Financing</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors text-base" href="#">Learning Center</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-semibold mb-4 text-lg">Contact Us</h4>
<ul className="space-y-3 text-slate-400 text-base">
<li className="flex items-start gap-2">
<i className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" data-lucide="map-pin" strokeWidth="1.5"></i>
<span>Serving Cypress, Katy, Sugar Land, and Greater Houston</span>
</li>
<li className="flex items-center gap-2">
<i className="w-5 h-5 text-sky-500 shrink-0" data-lucide="phone" strokeWidth="1.5"></i>
<span>281-555-0199</span>
</li>
<li className="flex items-center gap-2">
<i className="w-5 h-5 text-sky-500 shrink-0" data-lucide="mail" strokeWidth="1.5"></i>
<span>service@generalhvac.com</span>
</li>
<li className="flex items-center gap-2 mt-4 text-slate-500 text-sm">
<i className="w-4 h-4" data-lucide="file-text" strokeWidth="1.5"></i>
<span>TACLB123456789E</span>
</li>
</ul>
</div>
</div>

<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-center text-sm text-slate-500">
<p>© Copyright Cypress, Texas 2026. All rights reserved.</p>
</div>
</div>
</footer>




    </>
  );
}
