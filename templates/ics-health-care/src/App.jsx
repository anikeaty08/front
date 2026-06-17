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
      

<nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="h-8 w-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<svg className="lucide lucide-activity w-5 h-5" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<span className="text-lg font-semibold tracking-tighter text-slate-900 group-hover:opacity-80 transition-opacity">ICS Healthcare</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#resources">Resources</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#about">About Us</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-slate-500 hover:text-slate-900" href="#">Sign In</a>
<a className="inline-flex items-center justify-center h-9 px-4 text-sm font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2" href="#">
                    Get Care
                </a>
</div>
</div>
</nav>

<section className="md:pt-20 md:pb-32 overflow-hidden pt-12 pb-20 relative">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-100/50 via-white to-white pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 items-center">

<div className="text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 mb-8 mx-auto lg:mx-0">
<span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
<span className="text-xs font-medium text-slate-600 uppercase tracking-wide">Accepting New Patients</span>
</div>
<h1 className="text-5xl md:text-6xl font-semibold text-slate-900 tracking-tight mb-6 leading-[1.1]">
                        Care that feels <br/>like home.
                    </h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal mb-8">
                        We bridge the gap between medical necessities and daily living comfort, ensuring your loved ones maintain independence with dignity.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-6 text-sm font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-colors" href="#services">
                            View Services
                        </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-6 text-sm font-medium text-slate-600 bg-slate-50 border border-slate-200 rounded-full hover:bg-slate-100 transition-colors" href="#about">
                            Meet Our Team
                        </a>
</div>
</div>

<div className="relative">
<div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100">
<img alt="Senior woman smiling with caregiver" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e4e05d3c-16f2-4668-8d94-dd3c9c849d1f_1600w.webp?w=800&amp;q=80" style={{}}/>
</div>

<div className="absolute -bottom-6 -left-6 md:bottom-8 md:-left-8 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 max-w-xs hidden md:block">
<div className="flex items-center gap-3 mb-2">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64" style={{}}/>
</div>
</div>
<span className="text-xs font-semibold text-slate-900">4.9/5 Rating</span>
</div>
<p className="text-xs text-slate-500">Trusted by 2,000+ families for compassionate in-home care services.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white scroll-mt-16" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Understanding Your Care Options</h2>
<p className="text-slate-500 text-lg">Healthcare is complex. We simplify the choice between medical support and daily living assistance.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">

<div className="group relative rounded-3xl border border-slate-200 bg-white p-8 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 flex flex-col h-full">
<div className="absolute top-8 right-8 text-slate-300 group-hover:text-blue-500 transition-colors">
<svg className="lucide lucide-stethoscope w-8 h-8" data-lucide="stethoscope" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 2v2"></path><path d="M5 2v2"></path><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path><path d="M8 15a6 6 0 0 0 12 0v-3"></path><circle cx="20" cy="10" r="2"></circle></svg>
</div>
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-2">Home Health Care</h2>
<p className="text-sm font-medium text-blue-600 mb-6 uppercase tracking-wide">Medical &amp; Clinical Support</p>
<div className="mb-6 rounded-xl overflow-hidden aspect-video border border-slate-100">
<img alt="Nurse checking patient" className="group-hover:opacity-100 transition-opacity opacity-90 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4f7d9f91-9982-428d-b575-a4d182afffda_1600w.jpg?w=800&amp;q=80"/>
</div>
<p className="text-slate-500 mb-8 leading-relaxed">
                        Skilled clinical care provided by registered nurses, physical therapists, and medical professionals. Typically prescribed by a doctor after a hospital stay or injury.
                    </p>
<ul className="space-y-4 mb-8 mt-auto">
<li className="flex items-start gap-3">
<div className="mt-0.5 rounded-full bg-blue-50 p-1">
<svg className="lucide lucide-check w-3 h-3 text-blue-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-sm text-slate-600">Administering injections and medications</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 rounded-full bg-blue-50 p-1">
<svg className="lucide lucide-check w-3 h-3 text-blue-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-sm text-slate-600">Wound care and dressing changes</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 rounded-full bg-blue-50 p-1">
<svg className="lucide lucide-check w-3 h-3 text-blue-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-sm text-slate-600">Physical and occupational therapy</span>
</li>
</ul>
<div className="pt-6 border-t border-slate-100">
<span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">Typical Payment</span>
<div className="flex items-center gap-2 text-slate-900 font-medium">
<svg className="lucide lucide-wallet w-4 h-4 text-slate-400" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
                            Medicare, Medicaid, Private Insurance
                        </div>
</div>
</div>

<div className="group relative rounded-3xl border border-slate-200 bg-white p-8 hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 flex flex-col h-full">
<div className="absolute top-8 right-8 text-slate-300 group-hover:text-emerald-500 transition-colors">
<svg className="lucide lucide-heart-handshake w-8 h-8" data-lucide="heart-handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"></path></svg>
</div>
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-2">In-Home Care</h2>
<p className="text-sm font-medium text-emerald-600 mb-6 uppercase tracking-wide">Personal &amp; Companion Care</p>
<div className="mb-6 rounded-xl overflow-hidden aspect-video border border-slate-100">
<img alt="Caregiver helping senior" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c2cc4f01-9bb9-488f-9e0f-2e202e7e219c_1600w.jpg?w=800&amp;q=80" style={{}}/>
</div>
<p className="text-slate-500 mb-8 leading-relaxed">
                        Non-medical assistance focusing on helping individuals with Activities of Daily Living (ADLs) to maintain independence and safety at home.
                    </p>
<ul className="space-y-4 mb-8 mt-auto">
<li className="flex items-start gap-3">
<div className="mt-0.5 rounded-full bg-emerald-50 p-1">
<svg className="lucide lucide-check w-3 h-3 text-emerald-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-sm text-slate-600">Help with bathing, dressing, and grooming</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 rounded-full bg-emerald-50 p-1">
<svg className="lucide lucide-check w-3 h-3 text-emerald-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-sm text-slate-600">Meal preparation and light housekeeping</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 rounded-full bg-emerald-50 p-1">
<svg className="lucide lucide-check w-3 h-3 text-emerald-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-sm text-slate-600">Companionship and safety supervision</span>
</li>
</ul>
<div className="pt-6 border-t border-slate-100">
<span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">Typical Payment</span>
<div className="flex items-center gap-2 text-slate-900 font-medium">
<svg className="lucide lucide-credit-card w-4 h-4 text-slate-400" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
                            Private Pay, Long-Term Care Insurance
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 scroll-mt-16" id="resources">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<h3 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Comparison at a Glance</h3>
<p className="text-slate-500">A detailed look at eligibility, providers, and costs.</p>
</div>
<div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">

<div className="grid grid-cols-3 bg-slate-50 border-b border-slate-200 p-6">
<div className="col-span-1 text-xs font-semibold text-slate-500 uppercase tracking-wider pt-1">Feature</div>
<div className="col-span-1 text-xs font-semibold text-blue-600 uppercase tracking-wider pt-1">Home Health Care</div>
<div className="col-span-1 text-xs font-semibold text-emerald-600 uppercase tracking-wider pt-1">In-Home Care</div>
</div>

<div className="grid grid-cols-3 border-b border-slate-100 p-6 hover:bg-slate-50/50 transition-colors">
<div className="col-span-1 pr-4">
<h4 className="text-sm font-semibold text-slate-900">Primary Focus</h4>
</div>
<div className="col-span-1 pr-4">
<p className="text-sm text-slate-600">Treating an illness or injury. Medical recovery.</p>
</div>
<div className="col-span-1">
<p className="text-sm text-slate-600">Helping with daily living. Safety &amp; comfort.</p>
</div>
</div>

<div className="grid grid-cols-3 border-b border-slate-100 p-6 hover:bg-slate-50/50 transition-colors">
<div className="col-span-1 pr-4">
<h4 className="text-sm font-semibold text-slate-900">Eligibility</h4>
</div>
<div className="col-span-1 pr-4">
<p className="text-sm text-slate-600">Must be "homebound". Doctor referral required.</p>
</div>
<div className="col-span-1">
<p className="text-sm text-slate-600">Anyone needing assistance. No referral needed.</p>
</div>
</div>

<div className="grid grid-cols-3 border-b border-slate-100 p-6 hover:bg-slate-50/50 transition-colors">
<div className="col-span-1 pr-4">
<h4 className="text-sm font-semibold text-slate-900">Providers</h4>
</div>
<div className="col-span-1 pr-4">
<p className="text-sm text-slate-600">RNs, LPNs, Physical/Occupational Therapists.</p>
</div>
<div className="col-span-1">
<p className="text-sm text-slate-600">Home Care Aides, CNAs, Companions.</p>
</div>
</div>

<div className="grid grid-cols-3 p-6 hover:bg-slate-50/50 transition-colors">
<div className="col-span-1 pr-4">
<h4 className="text-sm font-semibold text-slate-900">Duration</h4>
</div>
<div className="col-span-1 pr-4">
<p className="text-sm text-slate-600">Short-term, episodic visits (e.g., 1 hour, 3x a week).</p>
</div>
<div className="col-span-1">
<p className="text-sm text-slate-600">Ongoing, hourly shifts (4 hours to 24/7 care).</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white scroll-mt-16" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1">
<div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100 aspect-[5/6] md:aspect-auto md:h-[600px]">
<img alt="Kind caregiver holding hands with patient" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
<div className="absolute bottom-8 left-8 text-white max-w-sm">
<p className="text-lg font-medium">"ICS provided the peace of mind our family desperately needed."</p>
<p className="text-sm opacity-80 mt-2">— Sarah Mitchell, Daughter of Patient</p>
</div>
</div>
</div>
<div className="order-1 md:order-2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 mb-6">
<span className="text-xs font-medium text-slate-600 uppercase tracking-wide">About Us</span>
</div>
<h3 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-6">More than just care.<br/>We are family.</h3>
<p className="text-lg text-slate-500 mb-6 leading-relaxed">
                        Founded in 2010, ICS Healthcare started with a simple mission: to treat every patient with the same level of care and respect we would want for our own parents.
                    </p>
<p className="text-lg text-slate-500 mb-8 leading-relaxed">
                        We understand that inviting a stranger into your home requires immense trust. That’s why we don’t just hire for skills—we hire for heart. Our vetting process is rigorous, ensuring only the most compassionate and reliable professionals wear our badge.
                    </p>
<div className="space-y-6">

<div className="flex gap-4">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center flex-shrink-0 border border-slate-100 text-slate-900">
<svg className="lucide lucide-shield-check w-6 h-6" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900 mb-1">Vetted Professionals</h4>
<p className="text-sm text-slate-500">Rigorous background checks, drug screening, and personality assessments.</p>
</div>
</div>

<div className="flex gap-4">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center flex-shrink-0 border border-slate-100 text-slate-900">
<svg className="lucide lucide-clock w-6 h-6" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900 mb-1">24/7 Availability</h4>
<p className="text-sm text-slate-500">Care doesn't stop at 5 PM. We have on-call support available around the clock.</p>
</div>
</div>

<div className="flex gap-4">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center flex-shrink-0 border border-slate-100 text-slate-900">
<svg className="lucide lucide-users w-6 h-6" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900 mb-1">Family Focused</h4>
<p className="text-sm text-slate-500">Digital care updates and transparent communication for the whole family.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-slate-900 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0 100 C 20 0 50 0 100 100 Z" fill="white"></path>
</svg>
</div>

<div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay">
<img className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&amp;fit=crop&amp;w=1500&amp;q=80"/>
</div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">Not sure which care is right for you?</h2>
<p className="text-slate-400 text-lg mb-10">Our care coordinators are here to listen to your situation and guide you to the appropriate resources, completely free of charge.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 text-base font-medium text-slate-900 bg-white rounded-full hover:bg-slate-100 transition-colors" href="#">
                            Contact a Care Coordinator
                        </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 text-base font-medium text-white border border-slate-700 rounded-full hover:bg-slate-800 transition-colors" href="#">
                            Browse Locations
                        </a>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-16 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="h-6 w-6 bg-slate-900 rounded-md flex items-center justify-center text-white">
<svg className="lucide lucide-activity w-3 h-3" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<span className="text-base font-semibold tracking-tighter text-slate-900">ICS Healthcare</span>
</a>
<p className="text-sm text-slate-500 mb-6">Compassionate care, delivered home. Enhancing quality of life for seniors and patients.</p>
</div>
<div>
<h5 className="text-sm font-semibold text-slate-900 mb-4">Services</h5>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-slate-900" href="#services">Home Health</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900" href="#services">Personal Care</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900" href="#">Dementia Care</a></li>
</ul>
</div>
<div>
<h5 className="text-sm font-semibold text-slate-900 mb-4">Company</h5>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-slate-900" href="#about">About</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900" href="#">Careers</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900" href="#">Locations</a></li>
</ul>
</div>
<div>
<h5 className="text-sm font-semibold text-slate-900 mb-4">Resources</h5>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-slate-900" href="#">Blog</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900" href="#">Care Guides</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900" href="#">FAQ</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2023 ICS Healthcare. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-xs text-slate-400 hover:text-slate-900" href="#">Privacy Policy</a>
<a className="text-xs text-slate-400 hover:text-slate-900" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
