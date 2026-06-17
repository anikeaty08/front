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



        // Initialize Lucide Icons
        lucide.createIcons();

        // Intersection Observer for Fade-In Animations
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach(el => {
                observer.observe(el);
            });
        });

        // Navbar Scroll Effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                navbar.classList.add('shadow-md');
                navbar.classList.remove('shadow-sm');
            } else {
                navbar.classList.remove('shadow-md');
                navbar.classList.add('shadow-sm');
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
      

<nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center gap-3">
<div className="w-10 h-10 bg-[#0D4E93] text-white flex items-center justify-center font-heading font-bold text-lg rounded-lg tracking-tighter">
                        JP
                    </div>
<div className="hidden sm:block">
<span className="block font-heading font-semibold text-[#1A1A1A] text-sm tracking-tight leading-none">JOSEPH POURSHALIMY</span>
<span className="block text-xs text-[#1565C0] font-medium tracking-wide mt-0.5">PERSONAL INJURY LAWYERS</span>
</div>
</div>

<div className="flex items-center gap-6">
<div className="hidden md:flex flex-col items-end">
<span className="text-[10px] uppercase tracking-wider text-green-600 font-bold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                            Available 24/7
                        </span>
<a className="flex items-center gap-1.5 text-[#0D4E93] font-heading font-semibold text-lg hover:text-[#1565C0] transition-colors" href="tel:8004420996">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="phone"></i>
                            (800) 442-0996
                        </a>
</div>
<a className="bg-[#0D4E93] hover:bg-[#1565C0] text-white text-sm font-medium py-2.5 px-5 rounded-lg transition-all shadow-lg hover:shadow-blue-900/20 transform hover:-translate-y-0.5 flex items-center gap-2" href="#consultation">
<span>Free Consultation</span>
<i className="w-4 h-4 stroke-[1.5]" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</nav>

<section className="relative pt-28 pb-20 lg:pt-32 lg:pb-24 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Los Angeles Skyline" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#0D4E93]/95 via-[#0D4E93]/85 to-[#0D4E93]/70 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#052c57] via-transparent to-transparent opacity-90"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start lg:items-center">

<div className="w-full lg:w-[55%] text-white reveal active">
<span className="inline-block py-1 px-3 rounded-full bg-[#1565C0]/30 border border-white/20 backdrop-blur-sm text-xs font-semibold tracking-wider uppercase mb-6 text-[#D4A84B]">
                        Los Angeles Personal Injury Attorneys
                    </span>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold tracking-tight leading-[1.1] mb-6 text-white">
                        Injured? Get the <span className="text-[#D4A84B]">Compensation</span> You Deserve.
                    </h1>
<p className="text-lg text-slate-200 leading-relaxed mb-8 font-light max-w-xl">
                        We've recovered over <strong className="text-white font-medium">$40 Million</strong> for accident victims across Los Angeles. No fees unless we win your case.
                    </p>

<div className="flex flex-wrap gap-4 mb-10">
<div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
<i className="w-5 h-5 text-[#D4A84B] stroke-[1.5]" data-lucide="check-circle-2"></i>
<span className="text-sm font-medium">No Recovery, No Fee</span>
</div>
<div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
<i className="w-5 h-5 text-[#D4A84B] stroke-[1.5]" data-lucide="clock"></i>
<span className="text-sm font-medium">Available 24/7</span>
</div>
<div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
<i className="w-5 h-5 text-[#D4A84B] stroke-[1.5]" data-lucide="shield-check"></i>
<span className="text-sm font-medium">Free Case Review</span>
</div>
</div>

<div>
<p className="text-xs text-slate-400 uppercase tracking-widest mb-4">As Seen On</p>
<div className="flex gap-6 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">

<div className="h-8 w-16 bg-white/20 rounded flex items-center justify-center text-[10px] font-bold">FOX</div>
<div className="h-8 w-16 bg-white/20 rounded flex items-center justify-center text-[10px] font-bold">CBS</div>
<div className="h-8 w-24 bg-white/20 rounded flex items-center justify-center text-[10px] font-bold">MarketWatch</div>
</div>
</div>
</div>

<div className="w-full lg:w-[45%] reveal delay-100" id="consultation">
<div className="bg-white rounded-2xl shadow-2xl shadow-blue-900/50 p-6 sm:p-8 border border-slate-100">
<div className="mb-6 text-center">
<h3 className="text-2xl font-heading font-semibold text-[#1A1A1A] mb-2 tracking-tight">Get Your Free Case Review</h3>
<p className="text-slate-500 text-sm">Speak with an attorney in minutes. 100% confidential.</p>
</div>
<form className="space-y-4" onsubmit="event.preventDefault(); alert('Thank you. We will contact you shortly.');">
<div>
<label className="sr-only">Full Name</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<i className="h-5 w-5 text-slate-400 stroke-[1.5]" data-lucide="user"></i>
</div>
<input className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 text-sm focus:ring-2 focus:ring-[#0D4E93] focus:border-transparent transition-all bg-slate-50 focus:bg-white" placeholder="Your Full Name" required="" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="sr-only">Email</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<i className="h-5 w-5 text-slate-400 stroke-[1.5]" data-lucide="mail"></i>
</div>
<input className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 text-sm focus:ring-2 focus:ring-[#0D4E93] focus:border-transparent transition-all bg-slate-50 focus:bg-white" placeholder="Email Address" required="" type="email"/>
</div>
</div>
<div>
<label className="sr-only">Phone</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<i className="h-5 w-5 text-slate-400 stroke-[1.5]" data-lucide="phone"></i>
</div>
<input className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 text-sm focus:ring-2 focus:ring-[#0D4E93] focus:border-transparent transition-all bg-slate-50 focus:bg-white" placeholder="Phone Number" required="" type="tel"/>
</div>
</div>
</div>
<div>
<label className="sr-only">Case Type</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<i className="h-5 w-5 text-slate-400 stroke-[1.5]" data-lucide="scale"></i>
</div>
<select className="block w-full pl-10 pr-10 py-3 border border-slate-200 rounded-lg text-slate-900 text-sm focus:ring-2 focus:ring-[#0D4E93] focus:border-transparent transition-all bg-slate-50 focus:bg-white cursor-pointer">
<option disabled="" selected="" value="">Select Case Type</option>
<option>Car Accident</option>
<option>Truck Accident</option>
<option>Motorcycle Accident</option>
<option>Pedestrian Accident</option>
<option>Slip and Fall</option>
<option>Wrongful Death</option>
<option>Bicycle Accident</option>
<option>Other</option>
</select>
</div>
</div>
<div>
<label className="sr-only">Description</label>
<textarea className="block w-full p-3 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 text-sm focus:ring-2 focus:ring-[#0D4E93] focus:border-transparent transition-all bg-slate-50 focus:bg-white resize-none" placeholder="Briefly describe your accident..." rows="3"></textarea>
</div>
<button className="w-full flex justify-center items-center gap-2 py-4 px-4 border border-transparent rounded-lg shadow-lg text-sm font-semibold text-white bg-[#D4A84B] hover:bg-[#c4983b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D4A84B] transition-all transform active:scale-[0.98]" type="submit">
                                GET MY FREE CONSULTATION
                                <i className="w-4 h-4 stroke-[2]" data-lucide="arrow-right"></i>
</button>
<div className="flex items-center justify-center gap-1.5 mt-4 text-xs text-slate-400">
<i className="w-3 h-3 stroke-[1.5]" data-lucide="lock"></i>
<span>Your information is 100% secure and confidential</span>
</div>
</form>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#1565C0] py-12 border-t border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x divide-white/10 reveal">
<div className="p-2">
<div className="text-3xl md:text-4xl font-heading font-bold text-white mb-1">10+</div>
<div className="text-blue-100 text-xs sm:text-sm font-medium uppercase tracking-wide">Years Experience</div>
</div>
<div className="p-2">
<div className="text-3xl md:text-4xl font-heading font-bold text-white mb-1">3,000+</div>
<div className="text-blue-100 text-xs sm:text-sm font-medium uppercase tracking-wide">Cases Handled</div>
</div>
<div className="p-2">
<div className="text-3xl md:text-4xl font-heading font-bold text-[#D4A84B] mb-1">$40M+</div>
<div className="text-blue-100 text-xs sm:text-sm font-medium uppercase tracking-wide">Recovered</div>
</div>
<div className="p-2">
<div className="text-3xl md:text-4xl font-heading font-bold text-white mb-1">24/7</div>
<div className="text-blue-100 text-xs sm:text-sm font-medium uppercase tracking-wide">Availability</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16 reveal">
<span className="text-[#1565C0] font-semibold tracking-wider text-xs uppercase mb-3 block">The Pourshalimy Difference</span>
<h2 className="text-3xl md:text-4xl font-heading font-semibold text-[#1A1A1A] tracking-tight">Why Thousands Trust Us With Their Cases</h2>
</div>
<div className="grid md:grid-cols-3 gap-10">

<div className="group p-8 rounded-2xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 reveal">
<div className="w-14 h-14 bg-[#0D4E93]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#0D4E93] transition-colors duration-300">
<i className="w-7 h-7 text-[#0D4E93] group-hover:text-white stroke-[1.5] transition-colors" data-lucide="trophy"></i>
</div>
<h3 className="text-xl font-heading font-semibold text-[#1A1A1A] mb-3">Proven Track Record</h3>
<p className="text-slate-600 text-sm leading-relaxed">
                        Over a decade of courtroom victories and favorable settlements. Our aggressive approach has recovered millions for injured clients throughout California.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 reveal delay-100">
<div className="w-14 h-14 bg-[#0D4E93]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#0D4E93] transition-colors duration-300">
<i className="w-7 h-7 text-[#0D4E93] group-hover:text-white stroke-[1.5] transition-colors" data-lucide="handshake"></i>
</div>
<h3 className="text-xl font-heading font-semibold text-[#1A1A1A] mb-3">Direct Attorney Access</h3>
<p className="text-slate-600 text-sm leading-relaxed">
                        No runaround. No assistants. You'll work directly with your attorney who knows every detail of your case and fights for your best outcome.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 reveal delay-200">
<div className="w-14 h-14 bg-[#0D4E93]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#0D4E93] transition-colors duration-300">
<i className="w-7 h-7 text-[#0D4E93] group-hover:text-white stroke-[1.5] transition-colors" data-lucide="shield"></i>
</div>
<h3 className="text-xl font-heading font-semibold text-[#1A1A1A] mb-3">Zero Risk, Zero Cost</h3>
<p className="text-slate-600 text-sm leading-relaxed">
                        We only get paid when you win. No hidden fees, no hourly rates. Our success is tied directly to yours—that's our promise.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-heading font-semibold text-[#1A1A1A] tracking-tight mb-4">We Handle All Types of Personal Injury Cases</h2>
<p className="text-slate-600 text-lg">From car accidents to wrongful death, our experienced team has the expertise to maximize your compensation.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

<div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md border border-slate-100 transition-all hover:-translate-y-1 reveal">
<i className="w-8 h-8 text-[#0D4E93] stroke-[1.5] mb-4" data-lucide="car"></i>
<h3 className="text-lg font-bold text-[#1A1A1A] mb-2">Car Accidents</h3>
<p className="text-sm text-slate-500">Rear-ends, head-ons, hit-and-runs—we fight insurance companies so you can focus on healing.</p>
</div>

<div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md border border-slate-100 transition-all hover:-translate-y-1 reveal delay-75">
<i className="w-8 h-8 text-[#0D4E93] stroke-[1.5] mb-4" data-lucide="truck"></i>
<h3 className="text-lg font-bold text-[#1A1A1A] mb-2">Truck Accidents</h3>
<p className="text-sm text-slate-500">18-wheelers cause catastrophic injuries. We take on trucking companies and their insurers.</p>
</div>

<div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md border border-slate-100 transition-all hover:-translate-y-1 reveal delay-100">
<i className="w-8 h-8 text-[#0D4E93] stroke-[1.5] mb-4" data-lucide="bike"></i>
<h3 className="text-lg font-bold text-[#1A1A1A] mb-2">Motorcycle Accidents</h3>
<p className="text-sm text-slate-500">Bikers deserve justice too. We understand the unique challenges of motorcycle injury claims.</p>
</div>

<div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md border border-slate-100 transition-all hover:-translate-y-1 reveal delay-150">
<i className="w-8 h-8 text-[#0D4E93] stroke-[1.5] mb-4" data-lucide="footprints"></i>
<h3 className="text-lg font-bold text-[#1A1A1A] mb-2">Pedestrian Accidents</h3>
<p className="text-sm text-slate-500">Struck while walking? Drivers must be held accountable for their negligence.</p>
</div>

<div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md border border-slate-100 transition-all hover:-translate-y-1 reveal">
<i className="w-8 h-8 text-[#0D4E93] stroke-[1.5] mb-4" data-lucide="alert-triangle"></i>
<h3 className="text-lg font-bold text-[#1A1A1A] mb-2">Slip and Fall</h3>
<p className="text-sm text-slate-500">Property owners have a duty to keep premises safe. We hold negligent parties responsible.</p>
</div>

<div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md border border-slate-100 transition-all hover:-translate-y-1 reveal delay-75">
<i className="w-8 h-8 text-[#0D4E93] stroke-[1.5] mb-4" data-lucide="heart-pulse"></i>
<h3 className="text-lg font-bold text-[#1A1A1A] mb-2">Wrongful Death</h3>
<p className="text-sm text-slate-500">Lost a loved one? Our compassionate team helps families seek justice and financial security.</p>
</div>

<div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md border border-slate-100 transition-all hover:-translate-y-1 reveal delay-100">
<i className="w-8 h-8 text-[#0D4E93] stroke-[1.5] mb-4" data-lucide="bicycle"></i>
<h3 className="text-lg font-bold text-[#1A1A1A] mb-2">Bicycle Accidents</h3>
<p className="text-sm text-slate-500">LA cyclists face serious risks. We help injured riders get full compensation.</p>
</div>

<div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md border border-slate-100 transition-all hover:-translate-y-1 reveal delay-150">
<i className="w-8 h-8 text-[#0D4E93] stroke-[1.5] mb-4" data-lucide="package-x"></i>
<h3 className="text-lg font-bold text-[#1A1A1A] mb-2">Product Defects</h3>
<p className="text-sm text-slate-500">Dangerous products cause real harm. We fight manufacturers who put profits over safety.</p>
</div>
</div>
<div className="text-center reveal">
<p className="text-slate-600 mb-4 font-medium">Not sure if you have a case?</p>
<a className="inline-flex items-center gap-2 text-[#0D4E93] font-bold text-lg hover:underline" href="tel:8004420996">
<i className="w-5 h-5 stroke-[2]" data-lucide="phone"></i>
                    Call us at (800) 442-0996 for a free evaluation.
                </a>
</div>
</div>
</section>

<section className="py-20 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-heading font-semibold text-[#1A1A1A] tracking-tight">What Our Clients Say</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative reveal">
<div className="absolute -top-4 left-8 text-6xl text-slate-200 font-serif leading-none">"</div>
<div className="flex gap-1 mb-4 text-[#D4A84B]">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-700 text-sm mb-6 leading-relaxed relative z-10 italic">
                        "After my car accident, I didn't know where to turn. Joseph and his team took over everything—dealt with insurance, got me to the right doctors, and secured a settlement that covered all my bills plus more."
                    </p>
<div className="pt-6 border-t border-slate-200">
<div className="font-bold text-[#1A1A1A] text-sm">Maria G.</div>
<div className="text-xs text-slate-500">Los Angeles</div>
<div className="mt-2 text-xs font-semibold text-green-600 bg-green-50 inline-block px-2 py-1 rounded">Car Accident - $287,000 Settlement</div>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative reveal delay-100">
<div className="absolute -top-4 left-8 text-6xl text-slate-200 font-serif leading-none">"</div>
<div className="flex gap-1 mb-4 text-[#D4A84B]">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-700 text-sm mb-6 leading-relaxed relative z-10 italic">
                        "They treated me like family, not just a case number. My attorney called me personally every week with updates. When the insurance company tried to lowball me, they fought back hard."
                    </p>
<div className="pt-6 border-t border-slate-200">
<div className="font-bold text-[#1A1A1A] text-sm">David R.</div>
<div className="text-xs text-slate-500">Westwood</div>
<div className="mt-2 text-xs font-semibold text-green-600 bg-green-50 inline-block px-2 py-1 rounded">Motorcycle Accident - $425,000 Settlement</div>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative reveal delay-200">
<div className="absolute -top-4 left-8 text-6xl text-slate-200 font-serif leading-none">"</div>
<div className="flex gap-1 mb-4 text-[#D4A84B]">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-700 text-sm mb-6 leading-relaxed relative z-10 italic">
                        "I was hesitant to hire a lawyer after my slip and fall. I'm so glad I called. They handled everything on contingency, so I paid nothing until we won. Professional, compassionate, and effective."
                    </p>
<div className="pt-6 border-t border-slate-200">
<div className="font-bold text-[#1A1A1A] text-sm">Sandra T.</div>
<div className="text-xs text-slate-500">Beverly Hills</div>
<div className="mt-2 text-xs font-semibold text-green-600 bg-green-50 inline-block px-2 py-1 rounded">Slip and Fall - $175,000 Settlement</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-heading font-semibold text-[#1A1A1A] tracking-tight">Getting Started Is Easy</h2>
</div>
<div className="grid md:grid-cols-3 gap-10 relative">

<div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-slate-200 z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center reveal">
<div className="w-24 h-24 bg-white rounded-full border-4 border-[#0D4E93] flex items-center justify-center mb-6 shadow-lg">
<span className="text-3xl font-bold text-[#0D4E93]">1</span>
</div>
<h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Free Consultation</h3>
<p className="text-sm text-slate-600 max-w-xs">
                        Call us or fill out the form. We'll review your case and answer all your questions—no obligation, no pressure.
                    </p>
</div>

<div className="relative z-10 flex flex-col items-center text-center reveal delay-100">
<div className="w-24 h-24 bg-white rounded-full border-4 border-[#0D4E93] flex items-center justify-center mb-6 shadow-lg">
<span className="text-3xl font-bold text-[#0D4E93]">2</span>
</div>
<h3 className="text-xl font-bold text-[#1A1A1A] mb-3">We Build Your Case</h3>
<p className="text-sm text-slate-600 max-w-xs">
                        Our team investigates, gathers evidence, handles all paperwork, and negotiates with insurance companies on your behalf.
                    </p>
</div>

<div className="relative z-10 flex flex-col items-center text-center reveal delay-200">
<div className="w-24 h-24 bg-white rounded-full border-4 border-[#0D4E93] flex items-center justify-center mb-6 shadow-lg">
<span className="text-3xl font-bold text-[#0D4E93]">3</span>
</div>
<h3 className="text-xl font-bold text-[#1A1A1A] mb-3">You Get Compensated</h3>
<p className="text-sm text-slate-600 max-w-xs">
                        We fight for maximum compensation. You don't pay us anything unless we win your case.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[#0D4E93] relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
<div className="max-w-4xl mx-auto px-4 text-center relative z-10 reveal">
<h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight mb-6">Don't Wait—California Has Strict Deadlines</h2>
<p className="text-lg text-blue-100 mb-10 leading-relaxed">
                In California, you only have 2 years from your accident to file a claim. Evidence disappears, witnesses forget, and insurance companies count on you waiting too long. Protect your rights today.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="w-full sm:w-auto bg-[#D4A84B] hover:bg-[#c4983b] text-white font-semibold py-4 px-8 rounded-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 text-center" href="#consultation">
                    GET MY FREE CASE REVIEW NOW →
                </a>
<a className="w-full sm:w-auto bg-transparent border-2 border-white/20 hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-lg transition-all text-center flex items-center justify-center gap-2" href="tel:8004420996">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="phone"></i>
                    Or call now: (800) 442-0996
                </a>
</div>
</div>
</section>

<footer className="bg-[#1A1A1A] text-slate-400 py-12 border-t border-white/5">
<div className="max-w-7xl mx-auto px-4 text-center">
<div className="mb-6">
<h3 className="text-white font-heading font-bold text-lg mb-2">The Law Offices of Joseph Pourshalimy PC</h3>
<div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6 text-sm">
<span className="flex items-center gap-2">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="map-pin"></i>
                        1429 Westwood Blvd, Los Angeles, CA 90024
                    </span>
<a className="flex items-center gap-2 hover:text-white transition-colors" href="tel:8004420996">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="phone"></i>
                        (800) 442-0996
                    </a>
</div>
</div>
<div className="text-xs text-slate-600 pt-8 border-t border-white/5">
<p>© 2025 All Rights Reserved | This is attorney advertising. Results vary by case.</p>
</div>
</div>
</footer>

<div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 p-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
<a className="flex items-center justify-center w-full bg-[#0D4E93] text-white font-bold py-3 rounded-lg shadow-lg" href="tel:8004420996">
<i className="w-5 h-5 mr-2 stroke-[2]" data-lucide="phone"></i>
            Free Consultation
        </a>
</div>



    </>
  );
}
