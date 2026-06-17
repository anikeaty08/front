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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
50: '#eff6ff',
100: '#dbeafe',
500: '#3b82f6', // Primary Blue
600: '#2563eb',
700: '#1d4ed8',
900: '#1e3a8a',
},
navy: {
900: '#0f172a', // Deep navy for footer
950: '#020617',
}
}
}
}
}

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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2" href="#">
<div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:bar-chart-2" data-width="20"></span>
</div>
<span className="text-xl font-bold tracking-tight text-slate-900">LEADVALUE</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-brand-600 transition-colors" href="#services">Our Solutions</a>
<a className="hover:text-brand-600 transition-colors" href="#testimonials">Success Stories</a>
<a className="hover:text-brand-600 transition-colors" href="#faq">FAQ</a>
</div>

<div className="hidden md:flex items-center gap-4">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900" href="#">Log in</a>
<a className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-all shadow-sm" href="#contact">
                    Get Started
                </a>
</div>

<button className="md:hidden text-slate-900 p-2">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
<div className="absolute top-20 left-20 w-72 h-72 bg-brand-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
<div className="absolute top-20 right-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">

<div className="inline-flex flex-wrap items-center justify-center gap-3 mb-8">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-700 border border-green-100 text-xs font-medium">
<span className="iconify" data-icon="lucide:trending-up" data-width="14"></span>
                    Improve conversion by 25%
                </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-brand-700 border border-brand-100 text-xs font-medium">
<span className="iconify" data-icon="lucide:users" data-width="14"></span>
                    Reduce lead churn by 30%
                </span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight mb-6 leading-[1.1] max-w-4xl mx-auto">
                Convert More Leads Without Increasing Prospecting Efforts.
            </h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Specialist Lead Management for Real Estate, Construction, and Banking professionals. We provide high-quality leads and the SaaS tools to close them faster.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3.5 bg-brand-600 text-white rounded-lg text-sm font-semibold hover:bg-brand-700 transition-all shadow-lg shadow-brand-500/20 flex items-center justify-center gap-2">
                    Buy Qualified Leads
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<button className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-700 border border-slate-200 rounded-lg text-sm font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:layout-dashboard" data-width="16"></span>
                    Process My Leads (SaaS Demo)
                </button>
</div>

<div className="mt-16 relative mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-slate-50/50 p-2 shadow-xl shadow-slate-200/50">
<div className="rounded-xl overflow-hidden bg-white border border-slate-200 aspect-[16/9] md:aspect-[2/1] relative flex items-center justify-center">
<img alt="Dashboard Analytics" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-20"></div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-slate-100 bg-slate-50/50">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-sm font-medium text-slate-400 mb-8 uppercase tracking-wider">Trusted by industry leaders</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 text-xl font-bold text-slate-800"><span className="iconify" data-icon="lucide:building-2" data-width="24"></span> Cogedim</div>
<div className="flex items-center gap-2 text-xl font-bold text-slate-800"><span className="iconify" data-icon="lucide:landmark" data-width="24"></span> C&amp;K Patrimoine</div>
<div className="flex items-center gap-2 text-xl font-bold text-slate-800"><span className="iconify" data-icon="lucide:briefcase" data-width="24"></span> GD Consulting</div>
<div className="flex items-center gap-2 text-xl font-bold text-slate-800"><span className="iconify" data-icon="lucide:home" data-width="24"></span> Nexity</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">Two Ways We Grow Your Business</h2>
<p className="text-lg text-slate-500 max-w-2xl mx-auto">Whether you need fuel for your sales team or the engine to process it, we have the solution.</p>
</div>
<div className="grid md:grid-cols-2 gap-8 lg:gap-12">

<div className="group relative p-8 rounded-3xl border border-slate-200 bg-white hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500 to-brand-300 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-14 h-14 bg-blue-50 text-brand-600 rounded-2xl flex items-center justify-center mb-6">
<span className="iconify" data-icon="lucide:target" data-width="28"></span>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-4">High-Intent Lead Generation</h3>
<p className="text-slate-500 mb-8 leading-relaxed">
                        Exclusive access to prospects actively seeking services in Real Estate, Finance, and Construction.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="mt-1 min-w-[20px] text-brand-600">
<span className="iconify" data-icon="lucide:check-circle-2" data-width="20"></span>
</div>
<div>
<span className="block font-medium text-slate-900 text-sm">Fresh &amp; Untapped</span>
<span className="text-sm text-slate-500">Leads distributed in real-time, shared max 2 times to ensure highest quality.</span>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 min-w-[20px] text-brand-600">
<span className="iconify" data-icon="lucide:shield-check" data-width="20"></span>
</div>
<div>
<span className="block font-medium text-slate-900 text-sm">Verified Data</span>
<span className="text-sm text-slate-500">80% of phone numbers verified via SMS. Suspicious leads are automatically filtered.</span>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 min-w-[20px] text-brand-600">
<span className="iconify" data-icon="lucide:layers" data-width="20"></span>
</div>
<div>
<span className="block font-medium text-slate-900 text-sm">Sector Specialized</span>
<span className="text-sm text-slate-500">Tailored sourcing for Pinel, LMNP, Credit Consolidation, and Renovation.</span>
</div>
</li>
</ul>
</div>

<div className="group relative p-8 rounded-3xl border border-slate-200 bg-white hover:border-purple-200 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-purple-300 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
<span className="iconify" data-icon="lucide:cpu" data-width="28"></span>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-4">Leadvalue SaaS (CRM)</h3>
<p className="text-slate-500 mb-8 leading-relaxed">
                        A powerful ecosystem to manage, track, and close your leads faster than ever before.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="mt-1 min-w-[20px] text-purple-600">
<span className="iconify" data-icon="lucide:zap" data-width="20"></span>
</div>
<div>
<span className="block font-medium text-slate-900 text-sm">Live Assignment</span>
<span className="text-sm text-slate-500">Leads are automatically routed to the right salesperson instantly.</span>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 min-w-[20px] text-purple-600">
<span className="iconify" data-icon="lucide:smartphone" data-width="20"></span>
</div>
<div>
<span className="block font-medium text-slate-900 text-sm">Mobile &amp; Web App</span>
<span className="text-sm text-slate-500">Handle calls, emails, and SMS directly from our unified interface.</span>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 min-w-[20px] text-purple-600">
<span className="iconify" data-icon="lucide:bar-chart-3" data-width="20"></span>
</div>
<div>
<span className="block font-medium text-slate-900 text-sm">Performance Tracking</span>
<span className="text-sm text-slate-500">Real-time dashboards to measure ROI and individual team performance.</span>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-2">Why Clients Trust Us</h2>
<p className="text-slate-500">We don't just supply leads; we measure ROI from sourcing to signature.</p>
</div>
<a className="inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700" href="#">
                    View all case studies <span className="iconify ml-1" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
<div className="flex gap-1 text-yellow-400 mb-4">
<span className="iconify" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
</div>
<blockquote className="text-lg text-slate-800 font-medium mb-6 leading-relaxed">
                        "Leadvalue is incredibly effective. The quality of the data allows our teams to focus on closing rather than filtering junk."
                    </blockquote>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600">OB</div>
<div>
<div className="font-semibold text-slate-900">Olivier Baussard</div>
<div className="text-sm text-slate-500">Director, Cogedim</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
<div className="flex gap-1 text-yellow-400 mb-4">
<span className="iconify" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
</div>
<blockquote className="text-lg text-slate-800 font-medium mb-6 leading-relaxed">
                        "Our best source of potential Pinel real estate investors. The SaaS integration made the lead flow seamless for our advisors."
                    </blockquote>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600">CK</div>
<div>
<div className="font-semibold text-slate-900">Management Team</div>
<div className="text-sm text-slate-500">C&amp;K Patrimoine</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-bold text-slate-900 tracking-tight text-center mb-12">Common Questions for Professionals</h2>
<div className="space-y-4">

<details className="group border border-slate-200 rounded-xl bg-white open:ring-1 open:ring-slate-900/5 open:shadow-sm overflow-hidden transition-all duration-300">
<summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-slate-50 transition-colors list-none">
<span className="font-medium text-slate-900">How many times are leads shared?</span>
<span className="iconify text-slate-400 group-open:rotate-180 transition-transform duration-300" data-icon="lucide:chevron-down" data-width="20"></span>
</summary>
<div className="px-5 pb-5 pt-0 text-sm text-slate-600 leading-relaxed">
                        We prioritize quality over quantity. Our leads are shared a maximum of 2 times to ensure you have the highest possible appointment rate and reduced competition.
                    </div>
</details>

<details className="group border border-slate-200 rounded-xl bg-white open:ring-1 open:ring-slate-900/5 open:shadow-sm overflow-hidden transition-all duration-300">
<summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-slate-50 transition-colors list-none">
<span className="font-medium text-slate-900">Are the leads verified?</span>
<span className="iconify text-slate-400 group-open:rotate-180 transition-transform duration-300" data-icon="lucide:chevron-down" data-width="20"></span>
</summary>
<div className="px-5 pb-5 pt-0 text-sm text-slate-600 leading-relaxed">
                        Yes. Our algorithms verify 80% of phone numbers via SMS ping mechanisms and automatically filter out junk data or suspicious entries before they reach your dashboard.
                    </div>
</details>

<details className="group border border-slate-200 rounded-xl bg-white open:ring-1 open:ring-slate-900/5 open:shadow-sm overflow-hidden transition-all duration-300">
<summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-slate-50 transition-colors list-none">
<span className="font-medium text-slate-900">Can Leadvalue SaaS integrate with my current system?</span>
<span className="iconify text-slate-400 group-open:rotate-180 transition-transform duration-300" data-icon="lucide:chevron-down" data-width="20"></span>
</summary>
<div className="px-5 pb-5 pt-0 text-sm text-slate-600 leading-relaxed">
                        Absolutely. Our SaaS connects easily via Web Services, manual CSV entry, or website widgets. We can act as your central CRM or feed data into your existing tools.
                    </div>
</details>

<details className="group border border-slate-200 rounded-xl bg-white open:ring-1 open:ring-slate-900/5 open:shadow-sm overflow-hidden transition-all duration-300">
<summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-slate-50 transition-colors list-none">
<span className="font-medium text-slate-900">How do I receive the leads?</span>
<span className="iconify text-slate-400 group-open:rotate-180 transition-transform duration-300" data-icon="lucide:chevron-down" data-width="20"></span>
</summary>
<div className="px-5 pb-5 pt-0 text-sm text-slate-600 leading-relaxed">
                        You can receive leads in real-time via Web Service (API), Email notification, or view them directly on the Leadvalue SaaS dashboard/mobile app.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-navy-900 text-slate-400 py-16" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="col-span-1">
<div className="flex items-center gap-2 text-white mb-6">
<span className="iconify" data-icon="lucide:bar-chart-2" data-width="20"></span>
<span className="text-lg font-bold tracking-tight">LEADVALUE</span>
</div>
<p className="text-sm leading-relaxed mb-6 text-slate-400">
                        Part of the Monama Group. Dedicated to empowering professionals with superior data and tools.
                    </p>
<div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10 text-xs text-slate-300">
<span className="iconify" data-icon="lucide:shield" data-width="12"></span>
                        Member of CPA
                    </div>
</div>

<div className="col-span-1">
<h4 className="text-white text-sm font-semibold mb-6 uppercase tracking-wider">Contact Us</h4>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3">
<span className="iconify mt-0.5 text-brand-500" data-icon="lucide:map-pin" data-width="16"></span>
<span>Leadvalue SAS, Monama Group<br/>Tour Montparnasse - 52nd floor<br/>33 Avenue du Maine, 75015 PARIS</span>
</li>
<li className="flex items-center gap-3">
<span className="iconify text-brand-500" data-icon="lucide:phone" data-width="16"></span>
                            01 89 16 41 47
                        </li>
<li className="flex items-center gap-3">
<span className="iconify text-brand-500" data-icon="lucide:clock" data-width="16"></span>
                            Mon-Fri (9:00 AM - 5:30 PM)
                        </li>
</ul>
</div>

<div className="col-span-1">
<h4 className="text-white text-sm font-semibold mb-6 uppercase tracking-wider">Solutions</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">SaaS Software</a></li>
<li><a className="hover:text-white transition-colors" href="#">Lead Generation</a></li>
<li><a className="hover:text-white transition-colors" href="#">Finance Leads</a></li>
<li><a className="hover:text-white transition-colors" href="#">Construction Leads</a></li>
<li><a className="hover:text-white transition-colors" href="#">Affiliate Program</a></li>
</ul>
</div>

<div className="col-span-1">
<h4 className="text-white text-sm font-semibold mb-6 uppercase tracking-wider">Legal</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Company Presentation</a></li>
<li><a className="hover:text-white transition-colors" href="#">Legal Notice</a></li>
<li><a className="hover:text-white transition-colors" href="#">Data Protection (GDPR)</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
<p>© 2026 LeadValue. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
