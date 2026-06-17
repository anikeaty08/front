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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



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
      

<div className="bg-[#1A1A1A] text-gray-300 py-2.5 px-4 md:px-8 border-b border-gray-800 flex justify-between items-center text-xs">
<div className="flex items-center gap-4">
<span>Save up to 20% on moves booked this month.</span>
</div>
<div className="hidden md:flex items-center gap-6">
<a className="flex items-center gap-1.5 hover:text-white transition-colors" href="#">
<i className="w-3.5 h-3.5 text-orange-500" data-lucide="phone"></i>
                (123) 456-7890
            </a>
<a className="flex items-center gap-1.5 hover:text-white transition-colors" href="#">
<i className="w-3.5 h-3.5 text-orange-500" data-lucide="mail"></i>
                hello@shifty.com
            </a>
</div>
</div>

<nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm px-4 md:px-8 py-4 flex justify-between items-center">
<a className="flex items-center gap-2" href="#">
<div className="text-orange-500">
<i className="w-8 h-8" data-lucide="boxes"></i>
</div>
<span className="text-2xl font-medium tracking-tight">Shifty</span>
</a>
<div className="hidden lg:flex items-center gap-8 text-base font-medium text-gray-700">
<a className="hover:text-orange-500 transition-colors" href="#">Home</a>
<a className="hover:text-orange-500 transition-colors" href="#">About</a>
<a className="flex items-center gap-1 text-orange-500 transition-colors" href="#">Services <i className="w-4 h-4" data-lucide="chevron-down"></i></a>
<a className="flex items-center gap-1 hover:text-orange-500 transition-colors" href="#">Pages <i className="w-4 h-4" data-lucide="chevron-down"></i></a>
<a className="flex items-center gap-1 hover:text-orange-500 transition-colors" href="#">Blog <i className="w-4 h-4" data-lucide="chevron-down"></i></a>
<a className="hover:text-orange-500 transition-colors" href="#">Contact</a>
</div>
<a className="hidden md:flex items-center bg-orange-500 hover:bg-orange-600 text-white rounded-full pl-5 pr-2 py-2 text-sm font-medium transition-colors" href="#">
            Free Quote
            <div className="bg-gray-900 rounded-full p-1.5 ml-3">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</div>
</a>
<button className="lg:hidden text-gray-900"><i className="w-6 h-6" data-lucide="menu"></i></button>
</nav>

<header className="relative h-[480px] flex items-center justify-center">
<div className="absolute inset-0 z-0">
<img alt="Moving boxes" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80"/>
<div className="absolute inset-0 bg-black/60"></div>
</div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 text-center md:text-left">
<div className="text-gray-300 text-sm font-medium mb-6 flex items-center justify-center md:justify-start gap-2">
<a className="hover:text-white transition-colors" href="#">Home</a> / 
                <a className="hover:text-white transition-colors" href="#">Services</a> / 
                <span className="text-white">Local Home Moving</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6 max-w-3xl leading-tight">
                Local Home Moving<br/>Done Right, Every Time
            </h1>
<p className="text-lg text-gray-200 max-w-2xl mx-auto md:mx-0">
                Safe, organized, and efficient moving within your city. From packing the first box to placing the last piece of furniture — our expert crew handles every detail so you don't have to.
            </p>
</div>
</header>

<section className="max-w-7xl mx-auto px-4 md:px-8 py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

<div className="lg:col-span-2">
<div className="inline-block px-3 py-1.5 border border-gray-200 rounded-full text-xs font-medium text-gray-600 mb-6">
                About This Service
            </div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-6">
                Stress-Free Local Moving for Your Home
            </h2>
<div className="space-y-6 text-base text-gray-600 mb-16 leading-relaxed">
<p>Our local home moving service focuses on one goal: helping you move safely, efficiently, and without unnecessary stress. Whether you're moving a studio apartment nearby or a large family home across town, our experienced crew handles every move with the same careful attention.</p>
<p>We operate within a 50-mile radius of your city, offering same-day and next-day availability with flexible time slots that fit your life — not the other way around. From disassembling furniture at your old home to placing it exactly where you want it at the new one, we handle every step.</p>
<p>All local moves include protective padding, fully equipped trucks, and basic liability coverage as standard. You can layer on additional services — packing, assembly, storage — as needed. Our pricing is transparent, fixed, and confirmed before we begin.</p>
</div>
<div className="inline-block px-3 py-1.5 border border-gray-200 rounded-full text-xs font-medium text-gray-600 mb-6">
                Why Choose Us
            </div>
<h3 className="text-3xl font-medium tracking-tight text-gray-900 mb-8">
                What Makes Our Local Moving Stand Out
            </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="border border-gray-200 rounded-xl p-6 md:p-8 relative overflow-hidden group hover:border-orange-200 transition-colors bg-white">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500"></div>
<div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500 mb-6">
<i className="w-5 h-5" data-lucide="clock"></i>
</div>
<h4 className="text-xl font-medium tracking-tight text-gray-900 mb-3">Same-Day Availability</h4>
<p className="text-sm text-gray-500 leading-relaxed">Need to move fast? We have on-call crews ready for same-day and next-day local bookings when schedule permits.</p>
</div>

<div className="border border-gray-200 rounded-xl p-6 md:p-8 relative overflow-hidden group hover:border-orange-200 transition-colors bg-white">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-transparent group-hover:bg-orange-500 transition-colors"></div>
<div className="w-10 h-10 rounded-lg bg-gray-50 group-hover:bg-orange-50 flex items-center justify-center text-gray-400 group-hover:text-orange-500 transition-colors mb-6">
<i className="w-5 h-5" data-lucide="shield-check"></i>
</div>
<h4 className="text-xl font-medium tracking-tight text-gray-900 mb-3">Fully Insured Crew</h4>
<p className="text-sm text-gray-500 leading-relaxed">Every mover on our team is background-checked, trained, and covered by full liability insurance. Your items are protected.</p>
</div>

<div className="border border-gray-200 rounded-xl p-6 md:p-8 relative overflow-hidden group hover:border-orange-200 transition-colors bg-white">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-transparent group-hover:bg-orange-500 transition-colors"></div>
<div className="w-10 h-10 rounded-lg bg-gray-50 group-hover:bg-orange-50 flex items-center justify-center text-gray-400 group-hover:text-orange-500 transition-colors mb-6">
<i className="w-5 h-5" data-lucide="dollar-sign"></i>
</div>
<h4 className="text-xl font-medium tracking-tight text-gray-900 mb-3">Fixed Transparent Pricing</h4>
<p className="text-sm text-gray-500 leading-relaxed">Your quote is locked the moment you confirm. No hidden fees, no day-of surprises — period. What we quote is what you pay.</p>
</div>

<div className="border border-gray-200 rounded-xl p-6 md:p-8 relative overflow-hidden group hover:border-orange-200 transition-colors bg-white">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-transparent group-hover:bg-orange-500 transition-colors"></div>
<div className="w-10 h-10 rounded-lg bg-gray-50 group-hover:bg-orange-50 flex items-center justify-center text-gray-400 group-hover:text-orange-500 transition-colors mb-6">
<i className="w-5 h-5" data-lucide="sofa"></i>
</div>
<h4 className="text-xl font-medium tracking-tight text-gray-900 mb-3">Furniture Assembly Included</h4>
<p className="text-sm text-gray-500 leading-relaxed">We disassemble at your old home and reassemble everything at the new one — beds, wardrobes, desks, all major furniture.</p>
</div>
</div>
</div>

<div className="lg:col-span-1 space-y-8">

<div className="bg-[#121212] rounded-2xl p-8 text-white shadow-xl">
<div className="text-orange-500 text-xs font-medium uppercase tracking-wider mb-3">Get Started Today</div>
<h3 className="text-2xl font-medium tracking-tight mb-4">Book Your Local Move</h3>
<p className="text-sm text-gray-400 mb-6 leading-relaxed">Free quote in under 2 hours. Fixed price, no hidden fees. Available 7 days a week.</p>
<div className="flex items-baseline gap-2 mb-8">
<span className="text-sm text-gray-400">From</span>
<span className="text-4xl font-medium tracking-tight text-orange-500">$299</span>
<span className="text-sm text-gray-400">/ move</span>
</div>
<ul className="space-y-3.5 mb-8">
<li className="flex items-start gap-3 text-sm text-gray-200">
<i className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
                        2-3 professional movers
                    </li>
<li className="flex items-start gap-3 text-sm text-gray-200">
<i className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
                        Truck &amp; protective equipment
                    </li>
<li className="flex items-start gap-3 text-sm text-gray-200">
<i className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
                        Furniture disassembly included
                    </li>
<li className="flex items-start gap-3 text-sm text-gray-200">
<i className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
                        Basic liability coverage
                    </li>
<li className="flex items-start gap-3 text-sm text-gray-200">
<i className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
                        Free cancellation (48hrs)
                    </li>
</ul>
<button className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full py-3.5 text-sm font-medium transition-colors mb-4">
                    Get a Free Quote
                </button>
<p className="text-xs text-center text-gray-500">No commitment required. We respond in 2 hours.</p>
</div>

<div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-6">Prefer to Talk First?</h3>
<div className="space-y-6 mb-8">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full border border-orange-200 bg-white flex items-center justify-center text-orange-500 shrink-0">
<i className="w-4 h-4" data-lucide="phone"></i>
</div>
<div>
<div className="text-base font-medium text-gray-900">(123) 456-7890</div>
<div className="text-xs text-gray-500">Mon-Sat, 7am-8pm</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full border border-orange-200 bg-white flex items-center justify-center text-orange-500 shrink-0">
<i className="w-4 h-4" data-lucide="mail"></i>
</div>
<div>
<div className="text-base font-medium text-gray-900">hello@shifty.com</div>
<div className="text-xs text-gray-500">Response within 2 hours</div>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full py-2.5 text-sm font-medium transition-colors flex items-center justify-center gap-2">
                        Contact <i className="w-3.5 h-3.5" data-lucide="arrow-right"></i>
</button>
<button className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 rounded-full py-2.5 text-sm font-medium transition-colors flex items-center justify-center gap-2">
                        Call Now <i className="w-3.5 h-3.5 text-gray-400" data-lucide="phone"></i>
</button>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="bg-gray-50 border border-gray-100 rounded-xl p-5 flex flex-col items-center justify-center text-center gap-3">
<i className="w-6 h-6 text-orange-500" data-lucide="shield"></i>
<span className="text-xs font-medium text-gray-700">Licensed &amp; Bonded</span>
</div>
<div className="bg-gray-50 border border-gray-100 rounded-xl p-5 flex flex-col items-center justify-center text-center gap-3">
<i className="w-6 h-6 text-orange-500" data-lucide="clock"></i>
<span className="text-xs font-medium text-gray-700">On-Time Guarantee</span>
</div>
<div className="bg-gray-50 border border-gray-100 rounded-xl p-5 flex flex-col items-center justify-center text-center gap-3">
<i className="w-6 h-6 text-orange-500" data-lucide="badge-dollar"></i>
<span className="text-xs font-medium text-gray-700">Price Lock Promise</span>
</div>
<div className="bg-gray-50 border border-gray-100 rounded-xl p-5 flex flex-col items-center justify-center text-center gap-3">
<i className="w-6 h-6 text-orange-500" data-lucide="check-square"></i>
<span className="text-xs font-medium text-gray-700">10+ Years Experience</span>
</div>
</div>
</div>
</section>

<section className="relative py-24 bg-[#1F1D1B] overflow-hidden">
<div className="absolute inset-0 z-0 opacity-20">
<img alt="Movers" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#1F1D1B] via-transparent to-[#1F1D1B]"></div>
</div>
<div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
<div className="text-center mb-16">
<div className="inline-block px-3 py-1.5 border border-gray-700 bg-gray-800/50 rounded-full text-xs font-medium text-gray-300 mb-6 backdrop-blur-sm">
                    How It Works
                </div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">
                    Simple and Organized Moving Process
                </h2>
<p className="text-base text-gray-400 max-w-2xl mx-auto">
                    Every relocation is managed through a structured process to ensure safe handling, timely delivery, and clear communication.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 mt-20">

<div className="bg-white rounded-2xl p-8 pt-12 relative text-center shadow-lg">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-sm text-xl font-medium text-gray-900">
                        1
                    </div>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-4">Request a Quote</h3>
<p className="text-sm text-gray-500 leading-relaxed">Share your moving details, location, and preferred schedule. Our team reviews the information and prepares a clear estimate.</p>
</div>

<div className="bg-white rounded-2xl p-8 pt-12 relative text-center shadow-lg">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-sm text-xl font-medium text-gray-900">
                        2
                    </div>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-4">Schedule &amp; Planning</h3>
<p className="text-sm text-gray-500 leading-relaxed">We confirm timelines, assess logistics, and prepare the required packing materials and transport arrangements.</p>
</div>

<div className="bg-white rounded-2xl p-8 pt-12 relative text-center shadow-lg">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-sm text-xl font-medium text-gray-900">
                        3
                    </div>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-4">Packing &amp; Transport</h3>
<p className="text-sm text-gray-500 leading-relaxed">Items are securely packed, labeled, loaded carefully, and transported using appropriate equipment.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-gray-100">
<div className="max-w-5xl mx-auto px-4 md:px-8">
<div className="text-center mb-16">
<div className="inline-block px-3 py-1.5 border border-gray-200 rounded-full text-xs font-medium text-gray-600 mb-6">
                    Plan Details
                </div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-4">
                    What's Included as Standard
                </h2>
<p className="text-base text-gray-500 max-w-2xl mx-auto">
                    Every local move includes the essentials. Add-ons can be layered on top at transparent per-unit pricing.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

<div className="border border-gray-200 rounded-2xl p-8 md:p-10 hover:shadow-md transition-shadow">
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-8 text-center md:text-left">Always Included</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-gray-600">
<i className="w-5 h-5 text-orange-500 shrink-0" data-lucide="check-circle-2"></i>
                            2-3 professional, vetted movers
                        </li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<i className="w-5 h-5 text-orange-500 shrink-0" data-lucide="check-circle-2"></i>
                            GPS-equipped moving truck
                        </li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<i className="w-5 h-5 text-orange-500 shrink-0" data-lucide="check-circle-2"></i>
                            Furniture blankets &amp; moving pads
                        </li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<i className="w-5 h-5 text-orange-500 shrink-0" data-lucide="check-circle-2"></i>
                            Furniture disassembly &amp; reassembly
                        </li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<i className="w-5 h-5 text-orange-500 shrink-0" data-lucide="check-circle-2"></i>
                            Shrink wrap for large items
                        </li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<i className="w-5 h-5 text-orange-500 shrink-0" data-lucide="check-circle-2"></i>
                            Floor &amp; door frame protection
                        </li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<i className="w-5 h-5 text-orange-500 shrink-0" data-lucide="check-circle-2"></i>
                            Basic liability coverage
                        </li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<i className="w-5 h-5 text-orange-500 shrink-0" data-lucide="check-circle-2"></i>
                            Free quote in under 2 hours
                        </li>
</ul>
</div>

<div className="border border-gray-200 rounded-2xl p-8 md:p-10 hover:shadow-md transition-shadow">
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-8 text-center md:text-left">Available as Add-Ons</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-gray-600">
<i className="w-5 h-5 text-orange-500 shrink-0" data-lucide="plus-circle"></i>
                            Professional packing service
                        </li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<i className="w-5 h-5 text-orange-500 shrink-0" data-lucide="plus-circle"></i>
                            Packing materials &amp; boxes
                        </li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<i className="w-5 h-5 text-orange-500 shrink-0" data-lucide="plus-circle"></i>
                            Unpacking &amp; room setup
                        </li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<i className="w-5 h-5 text-orange-500 shrink-0" data-lucide="plus-circle"></i>
                            Climate-controlled storage
                        </li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<i className="w-5 h-5 text-orange-500 shrink-0" data-lucide="plus-circle"></i>
                            Full-value insurance upgrade
                        </li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<i className="w-5 h-5 text-orange-500 shrink-0" data-lucide="plus-circle"></i>
                            Specialty item handling
                        </li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<i className="w-5 h-5 text-orange-500 shrink-0" data-lucide="plus-circle"></i>
                            Rush/same-day surcharge
                        </li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<i className="w-5 h-5 text-orange-500 shrink-0" data-lucide="plus-circle"></i>
                            Junk removal &amp; disposal
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<div className="text-center mb-16">
<div className="inline-block px-3 py-1.5 border border-gray-200 bg-white rounded-full text-xs font-medium text-gray-600 mb-6">
                    Client Reviews
                </div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-4">
                    Why Clients Trust Shiftly for Their Move
                </h2>
<p className="text-base text-gray-500 max-w-2xl mx-auto">
                    We focus on delivering structured relocation services with careful handling, trained professionals, and organized planning.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between h-full">
<div>
<div className="text-orange-500 text-xs font-medium mb-4">Apartment Relocation</div>
<p className="text-sm text-gray-600 mb-8 leading-relaxed">"The team arrived as scheduled, packed everything carefully, and handled the entire move in an organized manner. The process felt smooth from pickup to final placement."</p>
</div>
<div className="flex items-center gap-4">
<img alt="James" className="w-10 h-10 rounded-full object-cover bg-gray-100" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div>
<div className="text-sm font-medium text-gray-900">James Rehman.</div>
<div className="flex gap-0.5 mt-0.5">
<i className="w-3.5 h-3.5 text-orange-400 fill-orange-400" data-lucide="star"></i>
<i className="w-3.5 h-3.5 text-orange-400 fill-orange-400" data-lucide="star"></i>
<i className="w-3.5 h-3.5 text-orange-400 fill-orange-400" data-lucide="star"></i>
<i className="w-3.5 h-3.5 text-orange-400 fill-orange-400" data-lucide="star"></i>
<i className="w-3.5 h-3.5 text-orange-400 fill-orange-400" data-lucide="star"></i>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between h-full">
<div>
<div className="text-orange-500 text-xs font-medium mb-4">Long Distance Move</div>
<p className="text-sm text-gray-600 mb-8 leading-relaxed">"The move was planned properly, and delivery was completed as scheduled. The team maintained organization and handled our belongings responsibly."</p>
</div>
<div className="flex items-center gap-4">
<img alt="Sophia" className="w-10 h-10 rounded-full object-cover bg-gray-100" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div>
<div className="text-sm font-medium text-gray-900">Sophia L.</div>
<div className="flex gap-0.5 mt-0.5">
<i className="w-3.5 h-3.5 text-orange-400 fill-orange-400" data-lucide="star"></i>
<i className="w-3.5 h-3.5 text-orange-400 fill-orange-400" data-lucide="star"></i>
<i className="w-3.5 h-3.5 text-orange-400 fill-orange-400" data-lucide="star"></i>
<i className="w-3.5 h-3.5 text-orange-400 fill-orange-400" data-lucide="star"></i>
<i className="w-3.5 h-3.5 text-orange-400 fill-orange-400" data-lucide="star"></i>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between h-full">
<div>
<div className="text-orange-500 text-xs font-medium mb-4">Apartment Move</div>
<p className="text-sm text-gray-600 mb-8 leading-relaxed">"Shiftly coordinated our relocation efficiently and ensured every item was packed and transported safely. Communication throughout the move was clear and consistent."</p>
</div>
<div className="flex items-center gap-4">
<img alt="Olivia" className="w-10 h-10 rounded-full object-cover bg-gray-100" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div>
<div className="text-sm font-medium text-gray-900">Olivia M.</div>
<div className="flex gap-0.5 mt-0.5">
<i className="w-3.5 h-3.5 text-orange-400 fill-orange-400" data-lucide="star"></i>
<i className="w-3.5 h-3.5 text-orange-400 fill-orange-400" data-lucide="star"></i>
<i className="w-3.5 h-3.5 text-orange-400 fill-orange-400" data-lucide="star"></i>
<i className="w-3.5 h-3.5 text-orange-400 fill-orange-400" data-lucide="star"></i>
<i className="w-3.5 h-3.5 text-orange-400 fill-orange-400" data-lucide="star"></i>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-20 bg-[#1A1A1A] overflow-hidden border-b border-gray-800">
<div className="absolute inset-0 z-0 opacity-30">
<img alt="Moving truck" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80"/>
<div className="absolute inset-0 bg-[#1A1A1A]/80"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="text-center md:text-left">
<h2 className="text-3xl font-medium tracking-tight text-white mb-3">Ready to Make Your Move With Us?</h2>
<p className="text-base text-gray-400 max-w-xl">Get a free, no-obligation quote today. Our team is standing by to plan your perfect move — stress-free, on time, and within budget.</p>
</div>
<div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
<a className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white rounded-full pl-6 pr-2 py-2.5 text-sm font-medium transition-colors flex items-center justify-between gap-3" href="#">
                    Free Quote
                    <div className="bg-gray-900 rounded-full p-1.5">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</div>
</a>
<a className="w-full sm:w-auto bg-transparent border border-gray-600 hover:border-gray-400 text-white rounded-full pl-6 pr-2 py-2.5 text-sm font-medium transition-colors flex items-center justify-between gap-3" href="#">
                    Call Now
                    <div className="bg-orange-500 rounded-full p-1.5">
<i className="w-4 h-4" data-lucide="phone"></i>
</div>
</a>
</div>
</div>
</section>

<footer className="bg-[#121212] pt-20 pb-8 border-t border-gray-800">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-6">
<a className="flex items-center gap-2" href="#">
<div className="text-orange-500">
<i className="w-8 h-8" data-lucide="boxes"></i>
</div>
<span className="text-2xl font-medium tracking-tight text-white">Shifty</span>
</a>
<p className="text-sm text-gray-400 leading-relaxed max-w-xs">
                        Professional moving services for homes and businesses with secure packing and reliable transport.
                    </p>
<div className="flex items-center gap-3">
<a className="w-8 h-8 rounded-full bg-orange-500/10 hover:bg-orange-500 text-orange-500 hover:text-white flex items-center justify-center transition-colors" href="#">
<i className="w-4 h-4" data-lucide="facebook"></i>
</a>
<a className="w-8 h-8 rounded-full bg-orange-500/10 hover:bg-orange-500 text-orange-500 hover:text-white flex items-center justify-center transition-colors" href="#">
<i className="w-4 h-4" data-lucide="linkedin"></i>
</a>
<a className="w-8 h-8 rounded-full bg-orange-500/10 hover:bg-orange-500 text-orange-500 hover:text-white flex items-center justify-center transition-colors" href="#">
<i className="w-4 h-4" data-lucide="twitter"></i>
</a>
<a className="w-8 h-8 rounded-full bg-orange-500/10 hover:bg-orange-500 text-orange-500 hover:text-white flex items-center justify-center transition-colors" href="#">
<i className="w-4 h-4" data-lucide="youtube"></i>
</a>
</div>
</div>

<div>
<h4 className="text-white font-medium mb-6">Quick Links</h4>
<ul className="space-y-4">
<li><a className="text-sm text-gray-400 hover:text-white transition-colors" href="#">Home</a></li>
<li><a className="text-sm text-gray-400 hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="text-sm text-gray-400 hover:text-white transition-colors" href="#">Our Services</a></li>
<li><a className="text-sm text-gray-400 hover:text-white transition-colors" href="#">Pricing Plans</a></li>
<li><a className="text-sm text-gray-400 hover:text-white transition-colors" href="#">Contact Us</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-6">Our Services</h4>
<ul className="space-y-4">
<li><a className="text-sm text-gray-400 hover:text-white transition-colors" href="#">Local Home Moving</a></li>
<li><a className="text-sm text-gray-400 hover:text-white transition-colors" href="#">Long Distance Moving</a></li>
<li><a className="text-sm text-gray-400 hover:text-white transition-colors" href="#">Office Relocation</a></li>
<li><a className="text-sm text-gray-400 hover:text-white transition-colors" href="#">Packing &amp; Unpacking</a></li>
<li><a className="text-sm text-gray-400 hover:text-white transition-colors" href="#">Furniture Handling</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-6">Contact Info</h4>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm text-gray-400">
<i className="w-4 h-4 text-gray-500 shrink-0 mt-0.5" data-lucide="phone"></i>
                            (123) 456-7890
                        </li>
<li className="flex items-start gap-3 text-sm text-gray-400">
<i className="w-4 h-4 text-gray-500 shrink-0 mt-0.5" data-lucide="mail"></i>
                            hello@shifty.com
                        </li>
<li className="flex items-start gap-3 text-sm text-gray-400">
<i className="w-4 h-4 text-gray-500 shrink-0 mt-0.5" data-lucide="map-pin"></i>
                            123 Main Street, Your City
                        </li>
</ul>
<div className="space-y-3">
<p className="text-xs text-gray-400">Sign up for our newsletter &amp; receive offers</p>
<div className="relative">
<input className="w-full bg-white text-gray-900 text-sm rounded-full py-2.5 pl-4 pr-24 outline-none border border-transparent focus:border-orange-500 transition-colors placeholder:text-gray-400" placeholder="Your Email" type="email"/>
<button className="absolute right-1 top-1 bottom-1 bg-orange-500 hover:bg-orange-600 text-white text-xs font-medium px-4 rounded-full transition-colors">
                                Subscribe
                            </button>
</div>
</div>
</div>
</div>

<div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-gray-500">
                    Copyright © 2026 Shifty | Powered by Redclitco.
                </p>
<div className="flex items-center gap-6 text-xs text-gray-500">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms &amp; Conditions</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
