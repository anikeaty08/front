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
      

<nav className="fixed w-full z-50 top-0 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center gap-2">
<span className="text-xl font-semibold tracking-tighter text-slate-900">AL&amp;N</span>
<span className="text-xs font-medium text-slate-400 uppercase tracking-widest border-l border-slate-300 pl-2">Painting</span>
</div>

<div className="flex items-center gap-6">
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors" href="tel:4709541270">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
                        (470) 954-1270
                    </a>
<a className="bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-medium py-2 px-4 rounded-lg transition-all shadow-sm" href="#quote">
                        Get a Quote
                    </a>
</div>
</div>
</div>
</nav>

<section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-slate-50 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 opacity-40 pointer-events-none">
<div className="absolute top-0 left-0 w-[800px] h-[800px] bg-indigo-100/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 mix-blend-multiply"></div>
<div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 mix-blend-multiply"></div>
</div>
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">

<div className="lg:col-span-7 flex flex-col justify-center">

<div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full pl-1 pr-4 py-1 mb-6 w-fit animate-fade-in">
<span className="bg-indigo-600 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded-full tracking-wide">Offer</span>
<span className="text-xs font-medium text-indigo-900 tracking-tight">$500 OFF Projects $3,000+</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-slate-900 tracking-tight leading-[1.1] mb-6">
                        Trusted Painting Services for North Metro Atlanta Homeowners
                    </h1>
<p className="text-lg text-slate-500 font-light leading-relaxed mb-8 max-w-2xl">
                        Interior &amp; exterior painting done right — clean prep, professional finishes, and results that last.
                    </p>

<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-600 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-slate-700 text-sm sm:text-base">Interior &amp; exterior residential painting</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-600 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-slate-700 text-sm sm:text-base">Clean lines, detailed prep, no mess</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-600 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-slate-700 text-sm sm:text-base">Local, experienced painting team</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-600 flex-shrink-0 mt-0.5" icon="solar:map-point-linear" width="20"></iconify-icon>
<span className="text-slate-700 text-sm sm:text-base">Serving Marietta &amp; North Metro Atlanta</span>
</li>
</ul>
<div className="flex flex-col sm:flex-row gap-4 mt-2">
<div className="flex items-center gap-2 text-xs text-slate-400">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-slate-200 border border-white"></div>
<div className="w-6 h-6 rounded-full bg-slate-300 border border-white"></div>
<div className="w-6 h-6 rounded-full bg-slate-400 border border-white"></div>
</div>
<span>Trusted by neighbors in Marietta</span>
</div>
</div>
</div>

<div className="lg:col-span-5 relative" id="quote">
<div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 ring-1 ring-slate-100 p-6 sm:p-8">
<div className="mb-6">
<h3 className="text-xl font-medium text-slate-900 tracking-tight">Get Your Painting Quote</h3>
<p className="text-sm text-slate-500 mt-1">Fast response • No pressure • Local team</p>
</div>
<form action="#" className="space-y-4" method="POST">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="name">Full Name</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
<iconify-icon icon="solar:user-linear" width="18"></iconify-icon>
</div>
<input className="block w-full rounded-lg border-0 py-2.5 pl-10 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" id="name" name="name" placeholder="John Doe" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="phone">Phone</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
<iconify-icon icon="solar:phone-linear" width="18"></iconify-icon>
</div>
<input className="block w-full rounded-lg border-0 py-2.5 pl-10 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" id="phone" name="phone" placeholder="(470) 000-0000" type="tel"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="email">Email</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
<iconify-icon icon="solar:letter-linear" width="18"></iconify-icon>
</div>
<input className="block w-full rounded-lg border-0 py-2.5 pl-10 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" id="email" name="email" placeholder="john@example.com" type="email"/>
</div>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="project-type">Type of Project</label>
<select className="block w-full rounded-lg border-0 py-2.5 pl-3 pr-10 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" id="project-type" name="project-type">
<option>Interior Painting</option>
<option>Exterior Painting</option>
<option>Both Interior &amp; Exterior</option>
<option>Cabinet Painting</option>
</select>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="message">Short Message (Optional)</label>
<textarea className="block w-full rounded-lg border-0 py-2.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" id="message" name="message" placeholder="Tell us about your project..." rows="2"></textarea>
</div>
<button className="w-full flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-3 py-3 text-sm font-medium text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all" type="submit">
<span>Request My Quote</span>
<iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<p className="text-[10px] text-center text-slate-400 mt-2">By submitting, you agree to receive a response via phone or email.</p>
</form>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-y border-slate-100">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl mx-auto text-center mb-16">
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-4">A Local Painting Company You Can Trust</h2>
<p className="text-slate-500 text-lg font-light leading-relaxed">
                    AL&amp;N Painting Services is proud to serve homeowners across Marietta and the North Metro Atlanta area. We’re not a national franchise or a crew you’ll never see again. We’re a local team that believes quality work matters.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-6 rounded-xl bg-slate-50 border border-slate-100 hover:border-indigo-100 transition-colors">
<div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
<iconify-icon icon="solar:medal-ribbon-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2">Experienced Team</h3>
<p className="text-sm text-slate-500">Years of hands-on residential painting experience in North Metro Atlanta.</p>
</div>

<div className="p-6 rounded-xl bg-slate-50 border border-slate-100 hover:border-indigo-100 transition-colors">
<div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2">Property Protection</h3>
<p className="text-sm text-slate-500">We meticulously protect your floors, fixtures, and furniture before we start.</p>
</div>

<div className="p-6 rounded-xl bg-slate-50 border border-slate-100 hover:border-indigo-100 transition-colors">
<div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
<iconify-icon icon="solar:stopwatch-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2">No Rushing</h3>
<p className="text-sm text-slate-500">We don’t rush jobs or cut corners. Quality takes the right amount of time.</p>
</div>

<div className="p-6 rounded-xl bg-slate-50 border border-slate-100 hover:border-indigo-100 transition-colors">
<div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
<iconify-icon icon="solar:heart-angle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2">Respectful Service</h3>
<p className="text-sm text-slate-500">Your home is treated like it’s our own. Clean, courteous, and professional.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl font-medium text-slate-900 tracking-tight">Our Recent Projects</h2>
<p className="text-slate-500 mt-2">See the standard of quality we bring to every home.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="relative group overflow-hidden rounded-xl aspect-[4/3] bg-slate-200">
<img alt="Interior Living Room Painting" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
<span className="text-white text-sm font-medium">Interior Living Space</span>
</div>
</div>
<div className="relative group overflow-hidden rounded-xl aspect-[4/3] bg-slate-200">
<img alt="Exterior Home Painting" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
<span className="text-white text-sm font-medium">Full Exterior Repaint</span>
</div>
</div>
<div className="relative group overflow-hidden rounded-xl aspect-[4/3] bg-slate-200">
<img alt="Bedroom Painting" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
<span className="text-white text-sm font-medium">Bedroom Refresh</span>
</div>
</div>
<div className="relative group overflow-hidden rounded-xl aspect-[4/3] bg-slate-200">
<img alt="Kitchen Cabinet Painting" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
<span className="text-white text-sm font-medium">Cabinet Refinishing</span>
</div>
</div>
<div className="relative group overflow-hidden rounded-xl aspect-[4/3] bg-slate-200">
<img alt="Exterior Trim Work" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1574359411659-15573a27fd0c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
<span className="text-white text-sm font-medium">Detailed Trim Work</span>
</div>
</div>
<div className="relative group overflow-hidden rounded-xl aspect-[4/3] bg-slate-200">
<img alt="Bathroom Painting" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1628744876497-eb30460be9f6?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
<span className="text-white text-sm font-medium">Bathroom Modernization</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium text-slate-900 tracking-tight">Why Most Paint Jobs Fail</h2>
<p className="text-slate-500 mt-2 text-lg font-light">And how we do it differently to ensure lasting results.</p>
</div>
<div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">

<div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-red-100 text-red-600 rounded-lg">
<iconify-icon icon="solar:danger-triangle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900">Common Issues</h3>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-red-400 mt-0.5 flex-shrink-0" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span className="text-slate-600 text-sm">Peeling bathroom paint due to moisture</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-red-400 mt-0.5 flex-shrink-0" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span className="text-slate-600 text-sm">Uneven lines on high ceilings</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-red-400 mt-0.5 flex-shrink-0" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span className="text-slate-600 text-sm">Exterior paint that fades too fast</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-red-400 mt-0.5 flex-shrink-0" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span className="text-slate-600 text-sm">Sloppy trim work and missed details</span>
</li>
</ul>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg shadow-slate-100/50 ring-1 ring-slate-100 relative overflow-hidden">
<div className="absolute top-0 right-0 w-20 h-20 bg-indigo-50 rounded-bl-full -mr-4 -mt-4 z-0"></div>
<div className="flex items-center gap-3 mb-6 relative z-10">
<div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg">
<iconify-icon icon="solar:verified-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900">The AL&amp;N Standard</h3>
</div>
<ul className="space-y-4 relative z-10">
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-600 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-slate-700 font-medium text-sm">Proper prep before the first coat touches the wall</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-600 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-slate-700 font-medium text-sm">The right premium materials specific to each space</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-600 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-slate-700 font-medium text-sm">Experienced painters who genuinely care about the finish</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-600 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-slate-700 font-medium text-sm">Results that look better and last significantly longer</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden">

<div className="absolute inset-0 z-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-500 to-transparent opacity-20"></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">See the Difference Professional Painting Makes</h2>
<p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto font-light">
                If your paint feels outdated, worn, or rushed — this is your chance to fix it properly. Make your home feel clean, updated, and well cared for.
            </p>
<div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 inline-block w-full max-w-lg">
<div className="flex flex-col items-center">
<span className="text-indigo-400 text-sm font-semibold tracking-wider uppercase mb-2">Limited-Time Offer</span>
<h3 className="text-3xl sm:text-4xl font-semibold mb-2">Save $500</h3>
<p className="text-slate-300 text-sm mb-8">On Interior or Exterior Projects $3,000+</p>
<a className="bg-white text-slate-900 w-full sm:w-auto px-8 py-3.5 rounded-lg font-medium hover:bg-slate-100 transition-colors flex items-center justify-center gap-2" href="#quote">
<span>Request Your Quote Today</span>
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 py-12 text-slate-400 text-sm border-t border-slate-800">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-white text-lg font-semibold tracking-tight">AL&amp;N</span>
<span className="border-l border-slate-700 pl-2 text-xs uppercase tracking-widest">Painting Services</span>
</div>
<div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
<a className="hover:text-white transition-colors flex items-center gap-2" href="mailto:Alnpaintingservicesllc@gmail.com">
<iconify-icon icon="solar:letter-linear" width="16"></iconify-icon>
                    Alnpaintingservicesllc@gmail.com
                </a>
<a className="hover:text-white transition-colors flex items-center gap-2" href="tel:4709541270">
<iconify-icon icon="solar:phone-calling-linear" width="16"></iconify-icon>
                    (470) 954-1270
                </a>
</div>
<div className="text-slate-600 text-xs">
                © 2024 AL&amp;N Painting Services LLC.
            </div>
</div>
</footer>

    </>
  );
}
