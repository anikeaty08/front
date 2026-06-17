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

        // Scroll Observer Setup
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                threshold: 0.15,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal, .reveal-scale');
            revealElements.forEach(el => observer.observe(el));
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
      

<nav className="lg:px-12 flex sticky transition-all duration-300 z-50 bg-[#FFFCF4]/90 w-full border-transparent border-b pt-5 pr-6 pb-5 pl-6 top-0 backdrop-blur-md items-center justify-between" id="navbar">

<div className="hidden lg:flex items-center gap-8 animate-on-load delay-100">
<a className="group flex items-center gap-1 text-base font-medium text-slate-900 hover:text-slate-600 transition-colors nav-link" href="#">
                Solutions <svg className="lucide lucide-chevron-down w-4 h-4 text-slate-500 group-hover:text-slate-900 transition-colors" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</a>
<a className="group flex items-center gap-1 text-base font-medium text-slate-900 hover:text-slate-600 transition-colors nav-link" href="#">
                Partner Program <svg className="lucide lucide-chevron-down w-4 h-4 text-slate-500 group-hover:text-slate-900 transition-colors" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</a>
<a className="group flex items-center gap-1 text-base font-medium text-slate-900 hover:text-slate-600 transition-colors nav-link" href="#">
                Pricing <svg className="lucide lucide-chevron-down w-4 h-4 text-slate-500 group-hover:text-slate-900 transition-colors" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</a>
</div>

<button className="lg:hidden p-2 text-slate-900 animate-on-load">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center animate-on-load">
<a className="flex items-center gap-2" href="#">
<div className="flex flex-col leading-none group items-center justify-center text-center">
<span className="font-serif text-2xl lg:text-3xl text-slate-900 tracking-tight group-hover:opacity-80 transition-opacity">Nationwide</span>
<span className="font-medium text-[10px] uppercase tracking-[0.2em] text-[#0070BA] mt-1">Professional</span>
</div>
</a>
</div>

<div className="hidden lg:flex items-center gap-8 animate-on-load delay-100">
<a className="text-base font-medium text-slate-900 hover:text-slate-600 transition-colors nav-link" href="#">Support</a>
<a className="text-base font-medium text-slate-900 hover:text-slate-600 transition-colors nav-link" href="#">Pro Portal</a>
<a className="group flex items-center gap-1 text-base font-semibold text-slate-900 hover:opacity-70 transition-all" href="#">
                Request Demo <svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="lg:hidden w-8"></div>
</nav>

<main className="flex-grow lg:px-12 w-full max-w-[1400px] mr-auto ml-auto pt-12 pr-6 pb-20 pl-6">
<div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20">

<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8 animate-on-load">
<span className="flex h-2 w-2 rounded-full bg-[#0070BA]"></span>
<span className="text-sm font-medium text-slate-600">New: Advanced Wealth Logic Update</span>
</div>
<h1 className="font-serif text-5xl lg:text-[5.5rem] leading-[1.1] text-slate-900 tracking-tight mb-8 animate-on-load delay-200">
                The operating system for modern <span className="italic font-light text-slate-600">estate planning</span>.
            </h1>
<p className="text-xl lg:text-2xl text-slate-600 leading-relaxed mb-10 font-light max-w-2xl mx-auto animate-on-load delay-300">
                Empower your firm with attorney-built software that streamlines drafting, simplifies client intake, and ensures 50-state compliance.
            </p>
<div className="flex flex-col sm:flex-row gap-4 mb-16 animate-on-load delay-400">
<a className="inline-flex items-center justify-center bg-[#0070BA] hover:bg-[#005ea6] text-white text-lg font-medium px-8 py-4 rounded-full transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-95" href="#">
                    Book a Platform Demo
                </a>
<a className="inline-flex items-center justify-center bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 text-slate-900 text-lg font-medium px-8 py-4 rounded-full transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-95" href="#">
                    View Partner Benefits
                </a>
</div>

<div className="relative w-full rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 animate-on-load delay-500 group">

<div className="bg-slate-50 p-4 lg:p-8">
<img alt="Professional meeting in conference room" className="lg:h-[600px] object-center group-hover:scale-105 transition-transform duration-[1.5s] opacity-90 w-full h-[400px] object-cover rounded-2xl" src="https://images.unsplash.com/photo-1636717944781-df5647104479?w=2560&amp;q=80"/>
</div>

<div className="absolute bottom-8 right-8 z-10 bg-white/95 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-slate-100 max-w-xs w-full text-left reveal delay-500">
<div className="flex items-center gap-4 mb-4">
<div className="p-3 bg-[#13322F] rounded-full text-white">
<svg className="lucide lucide-clock w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
</div>
<div>
<div className="text-sm text-slate-500 font-medium">Efficiency Gain</div>
<div className="text-xl font-bold text-slate-900">80% Faster</div>
</div>
</div>
<p className="text-sm text-slate-600 leading-snug">
                        Average drafting time reduced from 4 hours to 45 minutes per client.
                    </p>
</div>
</div>
</div>

<div className="mt-24 border-b border-slate-200 pb-16 reveal">
<p className="text-center text-sm font-semibold uppercase tracking-widest text-slate-500 mb-10">Trusted by 2,000+ Advisors &amp; Attorneys</p>
<div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-50 grayscale">
<div className="flex items-center gap-2 text-xl font-bold font-serif text-slate-900"><div className="w-6 h-6 bg-slate-800 rounded-full"></div> Beacon Hill Law</div>
<div className="flex items-center gap-2 text-xl font-bold font-sans text-slate-900 tracking-tight">PARAMOUNT</div>
<div className="flex items-center gap-2 text-xl font-bold font-serif italic text-slate-900">Miller &amp; Associates</div>
<div className="flex items-center gap-2 text-xl font-bold font-sans text-slate-900 uppercase">Sterling Wealth</div>
<div className="flex items-center gap-2 text-xl font-bold font-serif text-slate-900">Vanguard Legal</div>
</div>
</div>
</main>

<section className="w-full bg-[#FFFCF4] pt-16 pb-24">
<div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12">
<div className="grid lg:grid-cols-3 gap-8">

<div className="bg-white rounded-[2rem] p-10 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal delay-100">
<div className="w-14 h-14 bg-[#F0F7FF] rounded-2xl flex items-center justify-center text-[#0070BA] mb-8">
<svg className="lucide lucide-zap w-7 h-7" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
</div>
<h3 className="font-serif text-2xl font-semibold text-slate-900 mb-4">Intelligent Drafting</h3>
<p className="text-slate-600 leading-relaxed font-light">
                        Our logic-based engine populates complex trusts and wills instantly based on a simple intake questionnaire, reducing drafting errors by 99%.
                    </p>
</div>

<div className="bg-white rounded-[2rem] p-10 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal delay-200">
<div className="w-14 h-14 bg-[#F0F7FF] rounded-2xl flex items-center justify-center text-[#0070BA] mb-8">
<svg className="lucide lucide-users w-7 h-7" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
<h3 className="font-serif text-2xl font-semibold text-slate-900 mb-4">Client Collaboration</h3>
<p className="text-slate-600 leading-relaxed font-light">
                        Invite clients to a secure portal to complete intake forms, upload assets, and review drafts. Eliminate the back-and-forth email chains.
                    </p>
</div>

<div className="bg-white rounded-[2rem] p-10 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal delay-300">
<div className="w-14 h-14 bg-[#F0F7FF] rounded-2xl flex items-center justify-center text-[#0070BA] mb-8">
<svg className="lucide lucide-shield-check w-7 h-7" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="font-serif text-2xl font-semibold text-slate-900 mb-4">50-State Compliance</h3>
<p className="text-slate-600 leading-relaxed font-light">
                        Our legal team monitors legislative changes across all 50 states. Documents update automatically, keeping your practice compliant.
                    </p>
</div>
</div>
</div>
</section>

<section className="w-full bg-[#13322F] py-24 lg:py-32 relative overflow-hidden">

<div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-10">
<div className="absolute top-[10%] right-[-10%] w-[800px] h-[800px] bg-[#2A4F4C] rounded-full blur-[120px]"></div>
</div>
<div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="reveal">
<h2 className="font-serif text-4xl lg:text-6xl text-white tracking-tight mb-8 leading-[1.1]">
                        Scale your practice without increasing headcount.
                    </h2>
<p className="text-lg lg:text-xl text-slate-300 font-light leading-relaxed mb-12">
                        The Nationwide Pro dashboard gives you a bird's-eye view of every case in your pipeline. Track progress, automate reminders, and generate revenue through our competitive referral program or white-label solutions.
                    </p>
<ul className="space-y-6 mb-12">
<li className="flex items-center gap-4 text-white">
<div className="bg-[#2A4F4C] p-2 rounded-full text-[#dbeafe]">
<svg className="lucide lucide-check w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-lg font-medium">Unlimited client storage &amp; management</span>
</li>
<li className="flex items-center gap-4 text-white">
<div className="bg-[#2A4F4C] p-2 rounded-full text-[#dbeafe]">
<svg className="lucide lucide-check w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-lg font-medium">White-label branding options</span>
</li>
<li className="flex items-center gap-4 text-white">
<div className="bg-[#2A4F4C] p-2 rounded-full text-[#dbeafe]">
<svg className="lucide lucide-check w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-lg font-medium">Dedicated account manager support</span>
</li>
</ul>
<a className="inline-flex items-center gap-2 text-white border-b border-white pb-1 hover:text-[#dbeafe] hover:border-[#dbeafe] transition-colors font-medium group" href="#">
                        Explore Enterprise Solutions <svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-[#2A4F4C] group reveal-scale delay-200">
<img alt="Modern office architecture" className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-[1.5s]" src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&amp;q=80"/>

<div className="absolute inset-0 bg-black/40 flex items-center justify-center">
<div className="bg-white/95 backdrop-blur w-[90%] rounded-xl p-6 shadow-2xl">
<div className="flex items-center justify-between mb-6 border-b border-slate-200 pb-4">
<div className="flex items-center gap-3">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
</div>
<div className="text-xs font-mono text-slate-400">dashboard.nationwide.com</div>
</div>

<div className="space-y-4">
<div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#0070BA] text-white flex items-center justify-center text-xs font-bold">JD</div>
<div className="text-sm font-semibold text-slate-800">John Doe Trust</div>
</div>
<span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">Completed</span>
</div>
<div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center text-xs font-bold">AS</div>
<div className="text-sm font-semibold text-slate-800">Smith Estate Plan</div>
</div>
<span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold rounded">In Review</span>
</div>
<div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-300 text-white flex items-center justify-center text-xs font-bold">MR</div>
<div className="text-sm font-semibold text-slate-800">Roe Will &amp; Test</div>
</div>
<span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded">Drafting</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-[#FFFCF4] py-24 lg:py-32">
<div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="order-2 lg:order-1 rounded-[2.5rem] overflow-hidden h-[500px] shadow-lg reveal-scale">
<img alt="Client signing documents on tablet" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1600&amp;q=80"/>
</div>

<div className="order-1 lg:order-2 reveal">
<div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-[#0070BA] text-xs font-bold uppercase tracking-wider mb-6">Client Intake</div>
<h2 className="font-serif text-4xl lg:text-5xl text-slate-900 tracking-tight mb-6 leading-tight">
                        A modern intake experience your clients will love.
                    </h2>
<p className="text-lg text-slate-600 font-light leading-relaxed mb-8">
                        Replace the 40-page PDF questionnaire with a sleek, mobile-friendly digital interview. Clients can start on their phone and finish on their desktop. Data syncs instantly to your dashboard.
                    </p>
<a className="text-[#0070BA] font-semibold hover:underline decoration-2 underline-offset-4" href="#">See intake demo →</a>
</div>
</div>
</div>
</section>

<section className="w-full bg-[#FFFCF4] pb-24 lg:pb-32">
<div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="reveal">
<div className="inline-block px-3 py-1 rounded-full bg-green-100 text-[#13322F] text-xs font-bold uppercase tracking-wider mb-6">Security First</div>
<h2 className="font-serif text-4xl lg:text-5xl text-slate-900 tracking-tight mb-6 leading-tight">
                        Bank-level security for peace of mind.
                    </h2>
<p className="text-lg text-slate-600 font-light leading-relaxed mb-8">
                        We understand the liability you carry. That's why our platform is SOC 2 Type II compliant, encrypted with AES-256, and features granular permission settings for your staff.
                    </p>
<div className="flex gap-4">
<div className="border border-slate-200 rounded px-3 py-1.5 flex items-center gap-2">
<svg className="lucide lucide-lock w-4 h-4 text-slate-900" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
<span className="text-xs font-bold text-slate-900">SOC 2 Certified</span>
</div>
<div className="border border-slate-200 rounded px-3 py-1.5 flex items-center gap-2">
<svg className="lucide lucide-server w-4 h-4 text-slate-900" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
<span className="text-xs font-bold text-slate-900">Data Encryption</span>
</div>
</div>
</div>

<div className="rounded-[2.5rem] overflow-hidden h-[500px] shadow-lg reveal-scale">
<img alt="Secure data concept" className="w-full h-full object-cover object-center grayscale-[20%]" src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&amp;q=80"/>
</div>
</div>
</div>
</section>

<section className="w-full bg-[#F2EEE2] py-24 border-t border-slate-200">
<div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12">
<div className="flex flex-col items-center text-center max-w-4xl mx-auto reveal">
<svg className="w-12 h-12 text-[#0070BA] mb-8 opacity-20" fill="currentColor" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path></svg>
<blockquote className="text-2xl lg:text-4xl font-serif text-slate-900 leading-snug mb-10">
                    "Nationwide Pro allowed us to productize our estate planning offering. We've increased our volume by 3x without hiring a single additional paralegal."
                </blockquote>
<div className="flex flex-col items-center">
<div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md mb-4">
<img alt="Attorney headshot" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&amp;h=150&amp;fit=crop&amp;crop=faces"/>
</div>
<div className="font-bold text-slate-900 text-lg">James L. Peterson</div>
<div className="text-sm text-slate-600 font-medium uppercase tracking-wide">Managing Partner, Peterson Law Group</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-[#FFFCF4] py-24 relative">
<div className="lg:px-12 w-full max-w-[1400px] mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16 reveal">
<h2 className="font-serif text-4xl lg:text-5xl text-slate-900 tracking-tight font-semibold">
                    Common questions from providers.
                </h2>
</div>
<div className="max-w-4xl mx-auto border-t border-slate-200 reveal delay-100">

<div className="border-b border-slate-200">
<button className="w-full flex items-center justify-between py-6 group text-left focus:outline-none" onclick="const p=this.nextElementSibling;p.classList.toggle('hidden');">
<span className="text-xl font-medium text-slate-900 group-hover:text-[#0070BA] transition-colors">Does this integrate with Clio or MyCase?</span>
<svg className="lucide lucide-plus w-5 h-5 text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
<div className="hidden pb-6 text-slate-600 leading-relaxed">
                        Yes, we offer native integrations with Clio, MyCase, and PracticePanther. Client data entered in Nationwide syncs directly to your matter management system.
                    </div>
</div>

<div className="border-b border-slate-200">
<button className="w-full flex items-center justify-between py-6 group text-left focus:outline-none" onclick="const p=this.nextElementSibling;p.classList.toggle('hidden');">
<span className="text-xl font-medium text-slate-900 group-hover:text-[#0070BA] transition-colors">Can I modify the legal language in the templates?</span>
<svg className="lucide lucide-plus w-5 h-5 text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
<div className="hidden pb-6 text-slate-600 leading-relaxed">
                        Absolutely. While our standard templates are 50-state compliant, Pro users have access to the "Clause Library" to insert custom provisions or modify specific language to suit firm preferences.
                    </div>
</div>

<div className="border-b border-slate-200">
<button className="w-full flex items-center justify-between py-6 group text-left focus:outline-none" onclick="const p=this.nextElementSibling;p.classList.toggle('hidden');">
<span className="text-xl font-medium text-slate-900 group-hover:text-[#0070BA] transition-colors">What is the pricing model for firms?</span>
<svg className="lucide lucide-plus w-5 h-5 text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
<div className="hidden pb-6 text-slate-600 leading-relaxed">
                        We offer flexible tiers: a pay-per-document model for smaller firms and a monthly subscription for high-volume practices. Contact sales for a custom quote.
                    </div>
</div>
</div>
</div>
</section>

<section className="w-full bg-[#13322F] py-20 border-t border-[#2A4F4C]">
<div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 text-center reveal">
<h2 className="font-serif text-4xl lg:text-5xl text-white tracking-tight mb-8">
                Ready to modernize your practice?
            </h2>
<p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto">
                Join thousands of forward-thinking attorneys and advisors. Set up your firm account today or schedule a personalized demo.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="inline-flex items-center justify-center bg-[#dbeafe] hover:bg-white text-[#13322F] text-lg font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl active:scale-[0.98] min-w-[200px]" href="#">
                    Request Demo
                </a>
<a className="inline-flex items-center justify-center bg-transparent border border-white/30 hover:bg-white/10 text-white text-lg font-bold px-8 py-4 rounded-full transition-all shadow-lg min-w-[200px]" href="#">
                    View Pricing
                </a>
</div>
</div>
</section>
<footer className="bg-[#0d2422] text-white pt-16 pb-24 relative border-t border-[#1f4541]">
<div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16 reveal">

<div className="max-w-sm">
<a className="flex items-center gap-3 mb-6" href="#">
<div className="flex flex-col leading-none text-white">
<span className="font-serif text-3xl tracking-tight">Nationwide</span>
<span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#0070BA] mt-1 font-bold">Professional</span>
</div>
</a>
<p className="text-slate-400 text-sm leading-relaxed">
                        The leading estate planning infrastructure for legal and financial professionals. Built by attorneys, for attorneys.
                    </p>
</div>

<div className="flex gap-16 flex-wrap">
<div className="flex flex-col gap-4">
<h4 className="text-xs font-bold uppercase tracking-widest text-white/40">Platform</h4>
<a className="text-sm text-slate-300 hover:text-white" href="#">Drafting Engine</a>
<a className="text-sm text-slate-300 hover:text-white" href="#">Client Portal</a>
<a className="text-sm text-slate-300 hover:text-white" href="#">Integrations</a>
<a className="text-sm text-slate-300 hover:text-white" href="#">Security</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-xs font-bold uppercase tracking-widest text-white/40">Company</h4>
<a className="text-sm text-slate-300 hover:text-white" href="#">About Us</a>
<a className="text-sm text-slate-300 hover:text-white" href="#">Careers</a>
<a className="text-sm text-slate-300 hover:text-white" href="#">Contact Sales</a>
</div>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500 reveal">
<p>© 2024 Nationwide Legal Services, LLC. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-slate-300" href="#">Privacy Policy</a>
<a className="hover:text-slate-300" href="#">Terms of Service</a>
<a className="hover:text-slate-300" href="#">SLA</a>
</div>
</div>
</div>
</footer>

<button className="fixed bottom-8 right-8 bg-[#0070BA] text-white p-4 rounded-full shadow-xl hover:scale-110 hover:bg-[#005ea6] transition-all duration-200 z-50 animate-on-load delay-500">
<svg className="lucide lucide-message-square w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
</button>


    </>
  );
}
