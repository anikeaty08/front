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
      

<header className="fixed w-full top-0 z-50 border-b border-slate-200 glass-nav">

<div className="hidden md:block bg-slate-900 text-slate-300 text-xs py-2">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
<div className="flex items-center gap-4">
<span className="flex items-center gap-1.5">
<iconify-icon className="text-blue-400" icon="solar:verified-check-linear"></iconify-icon>
                        Serving Worcester Since 1896
                    </span>
<span className="flex items-center gap-1.5">
<iconify-icon className="text-blue-400" icon="solar:map-point-linear"></iconify-icon>
                        1035 Millbury St, Worcester, MA
                    </span>
</div>
<div className="flex items-center gap-4 font-medium">
<a className="hover:text-white transition-colors" href="tel:5087531463">Office: (508) 753-1463</a>
<span className="text-slate-600">|</span>
<a className="hover:text-white transition-colors" href="mailto:office@gustafsonplumbing.com">office@gustafsonplumbing.com</a>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">

<a className="flex flex-col leading-none group" href="#">
<span className="text-xl sm:text-2xl font-bold tracking-tighter text-slate-900 group-hover:opacity-80 transition-opacity">GUSTAFSON</span>
<span className="text-[0.65rem] uppercase tracking-[0.2em] text-slate-500 font-medium">Plumbers, Inc.</span>
</a>

<nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="hover:text-slate-900 transition-colors" href="#process">Process</a>
<a className="hover:text-slate-900 transition-colors" href="#about">Our History</a>
<a className="hover:text-slate-900 transition-colors" href="#reviews">Reviews</a>
</nav>

<div className="flex items-center gap-3">
<a className="hidden sm:flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors" href="tel:5087531463">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
<span className="hidden lg:inline">(508) 753-1463</span>
</a>
<a className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium py-2.5 px-5 rounded-full transition-all shadow-sm hover:shadow-md flex items-center gap-2" href="#contact">
<span>Request Service</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</header>
<main className="pt-24 sm:pt-32">

<section className="relative px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24 overflow-hidden">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

<div className="max-w-2xl relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-800 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
</span>
                        Available for Emergency Service
                    </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                        Plumbing, Drain &amp; Sewer Experts in Worcester. <br/>
<span className="text-slate-400">Since 1896.</span>
</h1>
<p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                        From emergency repairs to advanced sewer camera diagnostics and vacuum truck services. We are Worcester’s oldest and most trusted plumbing team.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-base font-medium py-3.5 px-8 rounded-lg transition-all shadow-md shadow-blue-200" href="tel:5087531463">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
                            Call Now
                        </a>
<a className="inline-flex justify-center items-center gap-2 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 text-base font-medium py-3.5 px-8 rounded-lg transition-all hover:bg-slate-50" href="#contact">
                            Request Estimate
                        </a>
</div>

<div className="mt-10 pt-8 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm font-medium text-slate-500">
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-600 text-lg" icon="solar:shield-check-linear"></iconify-icon>
                            Licensed &amp; Insured
                        </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-600 text-lg" icon="solar:city-linear"></iconify-icon>
                            Local Family Run
                        </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-600 text-lg" icon="solar:medal-ribbon-linear"></iconify-icon>
                            125+ Years Exp.
                        </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-600 text-lg" icon="solar:settings-minimalistic-linear"></iconify-icon>
                            Modern Tech
                        </div>
</div>
</div>

<div className="relative lg:h-full min-h-[400px] w-full bg-slate-100 rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
<img alt="Gustafson Plumber Technician" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&amp;w=2662&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-8">
<p className="text-white font-medium text-sm">Serving Worcester County &amp; Surrounding Towns</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-y border-slate-200" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">Complete Plumbing &amp; Sewer Solutions</h2>
<p className="text-slate-600">Combining generations of experience with state-of-the-art hydro jetting and camera inspection technology.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">

<a className="group p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-lg border border-slate-100 hover:border-slate-200 transition-all duration-300" href="#">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-blue-600">
<iconify-icon icon="solar:wrench-linear" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-1">Plumbing Repair</h3>
<p className="text-sm text-slate-500">Leaks, faucets, toilets &amp; pipes</p>
</a>

<a className="group p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-lg border border-slate-100 hover:border-slate-200 transition-all duration-300" href="#">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-blue-600">
<iconify-icon icon="solar:water-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-1">Drain Cleaning</h3>
<p className="text-sm text-slate-500">Clog removal &amp; maintenance</p>
</a>

<a className="group p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-lg border border-slate-100 hover:border-slate-200 transition-all duration-300" href="#">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-blue-600">
<iconify-icon icon="solar:water-drops-linear" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-1">Hydro Jetting</h3>
<p className="text-sm text-slate-500">High-pressure line cleaning</p>
</a>

<a className="group p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-lg border border-slate-100 hover:border-slate-200 transition-all duration-300" href="#">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-blue-600">
<iconify-icon icon="solar:videocamera-record-linear" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-1">Camera Inspection</h3>
<p className="text-sm text-slate-500">Sewer line diagnostics</p>
</a>

<a className="group p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-lg border border-slate-100 hover:border-slate-200 transition-all duration-300" href="#">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-blue-600">
<iconify-icon icon="solar:bus-linear" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-1">Vacuum Truck</h3>
<p className="text-sm text-slate-500">Pumping &amp; waste removal</p>
</a>

<a className="group p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-lg border border-slate-100 hover:border-slate-200 transition-all duration-300" href="#">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-blue-600">
<iconify-icon icon="solar:sledgehammer-linear" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-1">Excavation</h3>
<p className="text-sm text-slate-500">Sewer &amp; water line work</p>
</a>

<a className="group p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-lg border border-slate-100 hover:border-slate-200 transition-all duration-300" href="#">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-blue-600">
<iconify-icon icon="solar:flame-linear" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-1">Water Heaters</h3>
<p className="text-sm text-slate-500">Installation &amp; repair</p>
</a>

<a className="group p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-lg border border-slate-100 hover:border-slate-200 transition-all duration-300" href="#">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-blue-600">
<iconify-icon icon="solar:danger-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-1">Backflow</h3>
<p className="text-sm text-slate-500">Testing &amp; prevention</p>
</a>
</div>
</div>
</section>

<section className="py-20 lg:py-28 overflow-hidden" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<div className="inline-block text-blue-600 font-semibold tracking-wider text-sm uppercase mb-3">Why Choose Gustafson?</div>
<h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 mb-6">
                            Old-School Integrity Meets Modern Technology.
                        </h2>
<div className="space-y-6 text-slate-600 text-lg leading-relaxed">
<p>
                                Founded in 1896, Gustafson Plumbers, Inc. has served Worcester families and businesses through generations. We aren't a franchise; we are your neighbors.
                            </p>
<p>
                                While our values remain traditional, our equipment is cutting-edge. We utilize high-resolution video inspection cameras, powerful hydro jetters, and heavy-duty vacuum trucks to solve problems that other plumbers can't reach.
                            </p>
</div>
<ul className="mt-8 space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-600 mt-1 flex-shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Multi-generation family business expertise.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-600 mt-1 flex-shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Upfront communication—no "salesy" tactics.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-600 mt-1 flex-shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Equipped for large residential and commercial jobs.</span>
</li>
</ul>
</div>
<div className="order-1 lg:order-2 relative">
<div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-slate-200 relative">

<img alt="Plumbing Pipes" className="w-full h-full object-cover grayscale opacity-90" src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-xl border border-slate-100 shadow-lg">
<div className="flex items-center gap-4">
<div className="bg-blue-100 text-blue-700 font-bold text-xl px-4 py-3 rounded-lg">1896</div>
<div>
<div className="font-bold text-slate-900">Established in Worcester</div>
<div className="text-sm text-slate-500">Over a century of trust</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-900 text-white" id="process">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-bold tracking-tight mb-4">Straightforward Service</h2>
<p className="text-slate-400 max-w-xl mx-auto">No hidden fees, no guessing games. Just honest work done right the first time.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="relative p-8 rounded-2xl bg-slate-800 border border-slate-700">
<div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold shadow-lg">1</div>
<h3 className="text-xl font-semibold mb-3">Call or Request</h3>
<p className="text-slate-400">Contact our office. We’ll listen to the issue and schedule a time that works for you.</p>
</div>

<div className="relative p-8 rounded-2xl bg-slate-800 border border-slate-700">
<div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold shadow-lg">2</div>
<h3 className="text-xl font-semibold mb-3">Diagnose</h3>
<p className="text-slate-400">Our team arrives with the right tools—including cameras if needed—to find the root cause.</p>
</div>

<div className="relative p-8 rounded-2xl bg-slate-800 border border-slate-700">
<div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold shadow-lg">3</div>
<h3 className="text-xl font-semibold mb-3">Solve</h3>
<p className="text-slate-400">We fix the problem efficiently, clean up our workspace, and ensure everything flows perfectly.</p>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28" id="contact">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<div className="bg-blue-600 rounded-3xl overflow-hidden shadow-2xl grid lg:grid-cols-2">

<div className="bg-white p-8 sm:p-12">
<h2 className="text-2xl font-bold text-slate-900 mb-2">Request Service</h2>
<p className="text-slate-500 mb-8 text-sm">Fill out the form below or call us directly. We respond quickly.</p>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-semibold text-slate-700 mb-1">First Name</label>
<input className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition text-sm text-slate-900 placeholder-slate-400" placeholder="John" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-700 mb-1">Last Name</label>
<input className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition text-sm text-slate-900 placeholder-slate-400" placeholder="Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number</label>
<input className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition text-sm text-slate-900 placeholder-slate-400" placeholder="(508) 753-1463" type="tel"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-700 mb-1">Service Address</label>
<input className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition text-sm text-slate-900 placeholder-slate-400" placeholder="Street Address in Worcester area" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-700 mb-1">How can we help?</label>
<textarea className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition text-sm text-slate-900 placeholder-slate-400" placeholder="Describe your plumbing issue..." rows="3"></textarea>
</div>
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 rounded-lg transition-all shadow-lg mt-2" type="button">
                                Send Request
                            </button>
<p className="text-xs text-slate-400 text-center mt-3">We respect your privacy. No spam.</p>
</form>
</div>

<div className="bg-slate-900 p-8 sm:p-12 text-white flex flex-col justify-between relative overflow-hidden">

<div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
<div>
<h3 className="text-xl font-bold mb-6">Contact Information</h3>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm text-slate-400 mb-1">Phone</div>
<a className="text-lg font-semibold hover:text-blue-300 transition" href="tel:5087531463">(508) 753-1463</a><br/>
<a className="text-sm text-slate-400 hover:text-white transition" href="tel:5089877997">(508) 987-7997 (Alt)</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm text-slate-400 mb-1">Email</div>
<a className="font-medium hover:text-blue-300 transition" href="mailto:office@gustafsonplumbing.com">office@gustafsonplumbing.com</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm text-slate-400 mb-1">Locations</div>
<p className="font-medium">1035 Millbury St,<br/>Worcester, MA 01607</p>
<p className="text-sm text-slate-400 mt-2">273 SW Cutoff,<br/>Worcester, MA 01604</p>
</div>
</div>
</div>
</div>
<div className="mt-10 pt-8 border-t border-slate-700">
<h4 className="font-semibold mb-2">Service Area</h4>
<p className="text-sm text-slate-400 leading-relaxed">
                                Proudly serving Worcester, Auburn, Millbury, Shrewsbury, Grafton, Holden, and surrounding communities in Worcester County.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-t border-slate-200" id="reviews">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-bold tracking-tight text-slate-900">What Our Neighbors Say</h2>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
<div className="flex gap-1 text-yellow-400 mb-4">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-slate-600 mb-4 text-sm leading-relaxed">"Gustafson has been our go-to plumber for years. They recently replaced our water main and handled the excavation professionally. The yard was left neat and the price was fair."</p>
<div className="font-semibold text-slate-900 text-sm">- Sarah Jenkins, Worcester</div>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
<div className="flex gap-1 text-yellow-400 mb-4">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-slate-600 mb-4 text-sm leading-relaxed">"Had a serious backup in our commercial building. Their hydro jetting truck cleared it out in no time. Fast response and knowledgeable crew."</p>
<div className="font-semibold text-slate-900 text-sm">- Mark D., Business Owner</div>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
<div className="flex gap-1 text-yellow-400 mb-4">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-slate-600 mb-4 text-sm leading-relaxed">"Honest, reliable, and they actually answer the phone! It’s hard to find tradesmen with this level of legacy and trust anymore."</p>
<div className="font-semibold text-slate-900 text-sm">- Robert T., Auburn</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="md:col-span-1">
<a className="flex flex-col leading-none mb-4" href="#">
<span className="text-xl font-bold tracking-tighter text-slate-900">GUSTAFSON</span>
<span className="text-[0.6rem] uppercase tracking-[0.2em] text-slate-500 font-medium">Plumbers, Inc.</span>
</a>
<p className="text-sm text-slate-500 mb-4">
                        Providing premier plumbing, excavation, and drain services to Worcester County since 1896.
                    </p>
<div className="flex gap-4 text-slate-400">
<a className="hover:text-blue-600 transition" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="hover:text-blue-600 transition" href="#"><iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm">Services</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-blue-600" href="#">Plumbing Repair</a></li>
<li><a className="hover:text-blue-600" href="#">Drain Cleaning</a></li>
<li><a className="hover:text-blue-600" href="#">Hydro Jetting</a></li>
<li><a className="hover:text-blue-600" href="#">Sewer Camera Insp.</a></li>
<li><a className="hover:text-blue-600" href="#">Excavation</a></li>
<li><a className="hover:text-blue-600" href="#">Vacuum Truck</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm">Company</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-blue-600" href="#about">About Us (1896)</a></li>
<li><a className="hover:text-blue-600" href="#reviews">Testimonials</a></li>
<li><a className="hover:text-blue-600" href="#contact">Contact Us</a></li>
<li><a className="hover:text-blue-600" href="#">Privacy Policy</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm">Contact</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li className="flex items-center gap-2">
<iconify-icon icon="solar:phone-linear" width="16"></iconify-icon>
                            (508) 753-1463
                        </li>
<li className="flex items-center gap-2">
<iconify-icon icon="solar:letter-linear" width="16"></iconify-icon>
                            office@gustafsonplumbing.com
                        </li>
<li className="flex items-start gap-2 mt-2">
<iconify-icon className="mt-0.5" icon="solar:map-point-linear" width="16"></iconify-icon>
<span>1035 Millbury St,<br/>Worcester, MA 01607</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
<p>© 2024 Gustafson Plumbers, Inc. All rights reserved.</p>
<p>Designed for Performance.</p>
</div>
</div>
</footer>

<div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] md:hidden z-50 flex gap-3">
<a className="flex-1 bg-blue-600 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 shadow-sm" href="tel:5087531463">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
            Call Now
        </a>
<a className="flex-1 bg-slate-100 text-slate-900 font-semibold py-3 rounded-lg flex items-center justify-center gap-2" href="#contact">
            Get Quote
        </a>
</div>

    </>
  );
}
