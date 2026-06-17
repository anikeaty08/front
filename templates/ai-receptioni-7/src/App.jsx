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
50: '#fff7ed',
100: '#ffedd5',
500: '#f97316', // Orange-500
600: '#ea580c', // Orange-600 (Primary CTA)
700: '#c2410c',
}
},
boxShadow: {
'glow': '0 0 40px -10px rgba(234, 88, 12, 0.15)',
'card': '0 0 0 1px rgba(0,0,0,0.03), 0 2px 8px rgba(0,0,0,0.04)',
'card-hover': '0 0 0 1px rgba(234, 88, 12, 0.1), 0 8px 16px -4px rgba(234, 88, 12, 0.1)',
}
}
}
}



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
      

<nav className="fixed top-0 w-full z-50 glass-nav border-b border-slate-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-2xl font-semibold tracking-tight text-slate-900">digalook</span>
<span className="bg-brand-50 text-brand-700 text-xs px-2 py-0.5 rounded-full border border-brand-100 font-medium">AI Beta</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#features">Features</a>
<a className="hover:text-slate-900 transition-colors" href="#calculator">ROI Calculator</a>
<a className="hover:text-slate-900 transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900" href="#">Log in</a>
<a className="bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-sm hover:shadow-lg hover:shadow-brand-500/20" href="#contact">
                    Get Started
                </a>
</div>
</div>
</nav>

<header className="md:pt-40 md:pb-32 overflow-hidden mesh-gradient pt-32 pb-20 relative">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

<div className="lg:w-1/2 text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-8 animate-fade-in-up">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
<span className="text-xs font-medium text-slate-600 tracking-wide uppercase">Live 24/7 Availability</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold text-slate-900 tracking-tight leading-[1.05] mb-6">
                        Stop losing clients to <span className="text-slate-400 line-through decoration-brand-500/50 decoration-2">missed calls</span>.
                    </h1>
<p className="text-lg md:text-xl text-slate-500 leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0 font-light">
                        The AI receptionist that answers phone calls, replies to WhatsApp, and manages your calendar instantly. 
                        <span className="text-slate-900 font-normal">Recover 40% of lost revenue</span> without lifting a finger.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
<a className="bg-brand-600 sm:w-auto hover:bg-brand-700 shadow-brand-500/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 font-medium text-white w-full rounded-full pt-4 pr-8 pb-4 pl-8 shadow-lg" href="#contact">
                            Start Free Trial
                            <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-medium rounded-full transition-all flex items-center justify-center gap-2" href="#contact">
<svg className="lucide lucide-play-circle w-4 h-4" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                            See How It Works
                        </a>
</div>
<div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-500">
<div className="flex -space-x-2">
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<p className="">Trusted by <span className="font-semibold text-slate-900">500+ businesses</span></p>
</div>
</div>

<div className="lg:w-1/2 w-full relative">

<div className="absolute -top-10 -right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
<div className="absolute -bottom-10 -left-10 w-72 h-72 bg-brand-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

<div className="relative bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-700">

<div className="bg-slate-50 border-b border-slate-100 p-4 flex items-center justify-between">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-amber-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
</div>
<div className="text-xs font-medium text-slate-400">Live Dashboard</div>
</div>

<div className="p-6 space-y-4">

<div className="bg-white border border-slate-100 rounded-xl p-4 shadow-sm flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
<svg className="lucide lucide-phone-call w-5 h-5" data-lucide="phone-call" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 2a9 9 0 0 1 9 9"></path><path d="M13 6a5 5 0 0 1 5 5"></path><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<div className="flex-1">
<div className="flex justify-between items-center mb-1">
<h4 className="font-medium text-slate-900 text-sm">Incoming Call Answered</h4>
<span className="text-xs text-slate-400">Just now</span>
</div>
<p className="text-xs text-slate-500 mb-2">New client inquiring about pricing.</p>
<div className="bg-slate-50 rounded-lg p-2 border border-slate-100">
<p className="text-xs text-slate-600 italic">"Digalook AI: Hello! Yes, our basic haircut starts at €25. Would you like to book for today?"</p>
</div>
</div>
</div>

<div className="bg-white border border-slate-100 rounded-xl p-4 shadow-sm flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-500 shrink-0">
<svg className="lucide lucide-message-circle w-5 h-5" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</div>
<div className="flex-1">
<div className="flex justify-between items-center mb-1">
<h4 className="font-medium text-slate-900 text-sm">Appointment Confirmed</h4>
<span className="text-xs text-slate-400">2m ago</span>
</div>
<div className="flex items-center gap-2 mt-1">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-brand-50 text-brand-700">
                                            Booking Added
                                        </span>
<span className="text-xs text-slate-500">Marco D. • Tomorrow 10:00 AM</span>
</div>
</div>
</div>
</div>

<div className="absolute bottom-6 right-6 bg-slate-900 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-bounce-slow">
<div className="w-2 h-2 rounded-full bg-green-400"></div>
<div className="text-xs font-medium">Revenue Saved: <span className="text-green-400">+€45.00</span></div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 bg-white relative" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20 max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">You run the business.<br/>We run the front desk.</h2>
<p className="text-slate-500 text-lg">Replicate your best receptionist at a fraction of the cost, available 24/7/365.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-brand-200 transition-all duration-300 hover:shadow-card-hover">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-50 transition-colors">
<svg className="lucide lucide-phone w-6 h-6 text-slate-600 group-hover:text-brand-600 transition-colors" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">Instant Call Handling</h3>
<p className="text-slate-500 text-base leading-relaxed">Never let a call go to voicemail. Our AI answers naturally, understands context, and handles queries professionally.</p>
</div>

<div className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-brand-200 transition-all duration-300 hover:shadow-card-hover">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-50 transition-colors">
<svg className="lucide lucide-calendar-check w-6 h-6 text-slate-600 group-hover:text-brand-600 transition-colors" data-lucide="calendar-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">Zero-Error Scheduling</h3>
<p className="text-slate-500 text-base leading-relaxed">Syncs directly with your Google Calendar or CRM. Appointments are booked instantly without double-booking.</p>
</div>

<div className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-brand-200 transition-all duration-300 hover:shadow-card-hover">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-50 transition-colors">
<svg className="lucide lucide-message-square w-6 h-6 text-slate-600 group-hover:text-brand-600 transition-colors" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">WhatsApp Automation</h3>
<p className="text-slate-500 text-base leading-relaxed">Send automatic reminders to reduce no-shows. Answer WhatsApp inquiries instantly while you sleep.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200" id="calculator">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="">
<div className="inline-block px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-semibold uppercase tracking-wider mb-4 border border-red-100">Reality Check</div>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-6">
                        Yes, you are losing money.
                    </h2>
<p className="text-slate-500 text-lg mb-8 leading-relaxed">
                        40% of calls to local businesses go unanswered. Every missed call is a potential client going to your competitor.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<svg className="lucide lucide-x-circle w-5 h-5 text-red-500 mt-0.5" data-lucide="x-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
<span className="text-slate-700">Lost revenue from missed appointments</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-x-circle w-5 h-5 text-red-500 mt-0.5" data-lucide="x-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
<span className="text-slate-700">Time wasted on "what time are you open?" calls</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-x-circle w-5 h-5 text-red-500 mt-0.5" data-lucide="x-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
<span className="text-slate-700">Poor customer experience leading to bad reviews</span>
</li>
</ul>
<a className="text-brand-600 font-medium hover:text-brand-700 flex items-center gap-2 group" href="#">
                        Calculate your exact loss
                        <svg className="lucide lucide-arrow-right w-4 h-4 transform group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-brand-500"></div>
<div className="flex items-center justify-between mb-8 pb-8 border-b border-slate-100">
<div>
<p className="text-sm text-slate-400 font-medium uppercase tracking-wide">Missed Calls / Week</p>
<div className="text-3xl font-semibold text-slate-900 mt-1 flex items-center gap-4">
                                10
                                <span className="text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded">Avg</span>
</div>
</div>
<div className="h-10 w-px bg-slate-100"></div>
<div>
<p className="text-sm text-slate-400 font-medium uppercase tracking-wide">Avg Ticket</p>
<div className="text-3xl font-semibold text-slate-900 mt-1 flex items-center gap-4">
                                €50
                                <span className="text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded">Est</span>
</div>
</div>
</div>
<div className="space-y-6">
<div className="flex justify-between items-end">
<span className="text-slate-600 font-medium">Monthly Loss</span>
<span className="text-2xl font-bold text-slate-900">€2,000</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-2">
<div className="bg-slate-300 h-2 rounded-full" style={{width: '38%'}}></div>
</div>
<div className="flex justify-between items-end pt-4">
<span className="text-slate-600 font-medium">Yearly Loss</span>
<span className="text-4xl font-bold text-red-500">€24,000</span>
</div>
<div className="w-full bg-red-100 rounded-full h-3">
<div className="bg-red-500 h-3 rounded-full shadow-lg shadow-red-500/30" style={{width: '75%'}}></div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-slate-100 text-center">
<p className="text-sm text-slate-500 mb-4">Reclaim this revenue starting today.</p>
<button className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg transition-colors">
                            Stop The Bleeding
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-16 text-center">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Trusted by modern businesses</h2>
<p className="text-slate-500">Join 500+ local heroes growing their revenue.</p>
</div>
<div className="relative max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-6">

<div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
<div className="flex items-center gap-1 mb-4 text-brand-500">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-slate-700 mb-6 font-medium">"It's like having a receptionist who never sleeps, never gets sick, and costs a fraction of a salary."</p>
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=48&amp;h=48"/>
<div>
<div className="text-sm font-semibold text-slate-900">Marco Rossi</div>
<div className="text-xs text-slate-500">Owner, StyleStudio</div>
</div>
</div>
</div>

<div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
<div className="flex items-center gap-1 mb-4 text-brand-500">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-slate-700 mb-6 font-medium">"The WhatsApp integration is a game changer. My no-show rate dropped by 80% in the first month."</p>
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&amp;fit=crop&amp;w=48&amp;h=48"/>
<div>
<div className="text-sm font-semibold text-slate-900">Laura Bianchi</div>
<div className="text-xs text-slate-500">Manager, Dental Care</div>
</div>
</div>
</div>

<div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
<div className="flex items-center gap-1 mb-4 text-brand-500">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-slate-700 mb-6 font-medium">"Setup took 10 minutes. It simply works. I can finally focus on my clients without the phone ringing."</p>
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=48&amp;h=48"/>
<div>
<div className="text-sm font-semibold text-slate-900">Alessandro V.</div>
<div className="text-xs text-slate-500">Physiotherapist</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Tailored for your industry</h2>
<p className="text-slate-500">Digalook adapts its tone and knowledge base to your specific field.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer">
<img alt="Beauty" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
<span className="text-white font-medium text-lg">Beauty Salons</span>
</div>
</div>
<div className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer">
<img alt="Barber" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
<span className="text-white font-medium text-lg">Barbershops</span>
</div>
</div>
<div className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer">
<img alt="Medical" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
<span className="text-white font-medium text-lg">Medical Clinics</span>
</div>
</div>
<div className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer">
<img alt="Gym" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
<span className="text-white font-medium text-lg">Gyms &amp; Spas</span>
</div>
</div>
</div>
<div className="mt-12 p-8 bg-slate-900 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
<div>
<h3 className="text-2xl font-semibold text-white mb-2">Ready to work 24/7?</h3>
<p className="text-slate-400">No fatigue, no breaks, no missed opportunities.</p>
</div>
<a className="px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-medium rounded-full transition-all whitespace-nowrap shadow-[0_0_20px_rgba(234,88,12,0.5)] hover:shadow-[0_0_30px_rgba(234,88,12,0.6)]" href="#contact">
                    Get Started Now
                </a>
</div>
</div>
</section>

<section className="bg-slate-50 border-slate-200 border-t pt-24 pb-24" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-6">
                    Test our AI Receptionist instantly
                </h2>
<p className="text-lg text-slate-500 mb-10 leading-relaxed font-light">
                    Don't just take our word for it. Enter your details to trigger an instant call from our AI agent and experience how Digalook handles customer bookings in real-time.
                </p>
<div className="space-y-8">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center shrink-0 text-brand-600">
<svg className="lucide lucide-zap w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
</div>
<div className="">
<h3 className="text-lg font-semibold text-slate-900 mb-1">Instant Callback</h3>
<p className="text-slate-500 text-sm leading-relaxed">The AI will call your phone within 30 seconds to simulate a realistic appointment booking scenario.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center shrink-0 text-brand-600">
<svg className="lucide lucide-audio-lines w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 10v3"></path><path d="M6 6v11"></path><path d="M10 3v18"></path><path d="M14 8v7"></path><path d="M18 5v13"></path><path d="M22 10v4"></path></svg>
</div>
<div className="">
<h3 className="text-lg font-semibold text-slate-900 mb-1">Human-like Interaction</h3>
<p className="text-slate-500 text-sm leading-relaxed">Speak naturally. Interrupt. Ask questions. Our AI understands context and handles complex conversations with ease.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center shrink-0 text-brand-600">
<svg className="lucide lucide-shield-check w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="">
<h3 className="text-lg font-semibold text-slate-900 mb-1">No Setup Required</h3>
<p className="text-slate-500 text-sm leading-relaxed">Experience the full capabilities of our agent without creating an account or configuring any settings.</p>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xl relative overflow-hidden">
<div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-500 to-brand-600"></div>
<div className="mb-8">
<div className="flex items-center gap-3 mb-2">
<span className="relative flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
</span>
<h3 className="text-xl font-semibold text-slate-900">Try the Live Demo</h3>
</div>
<p className="text-sm text-slate-500 mt-1">Our agent will call you in ~30 seconds.</p>
</div>
<form className="space-y-5">
<div className="grid md:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="block text-xs font-medium text-slate-700 uppercase tracking-wide" htmlFor="first-name">First name</label>
<input className="block w-full rounded-lg border-slate-200 bg-slate-50 px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:ring-brand-500 text-sm transition-all outline-none border hover:border-slate-300 focus:bg-white" id="first-name" placeholder="Jane" type="text"/>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-medium text-slate-700 uppercase tracking-wide" htmlFor="last-name">Last name</label>
<input className="block w-full rounded-lg border-slate-200 bg-slate-50 px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:ring-brand-5-white" id="last-name" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-medium text-slate-700 uppercase tracking-wide" htmlFor="phone">Phone Number</label>
<div className="relative">
<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
<svg className="lucide lucide-phone" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
</div>
<input className="block w-full rounded-lg border-slate-200 bg-slate-50 pl-10 pr-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:ring-brand-500 text-sm transition-all outline-none border hover:border-slate-300 focus:bg-white" id="phone" placeholder="+1 (555) 000-0000" type="tel"/>
</div>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-medium text-slate-700 uppercase tracking-wide" htmlFor="email">Work Email</label>
<input className="block w-full rounded-lg border-slate-200 bg-slate-50 px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:ring-brand-500 text-sm transition-all outline-none border hover:border-slate-300 focus:bg-white" id="email" placeholder="jane@company.com" type="email"/>
</div>
<div className="pt-4">
<button 2000="" className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-lg shadow-lg shadow-brand-500/20 text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-50 xmlns=" fill="none" height="16" http:="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" svg"="" type="button" viewbox="0 0 24 24" width="16" www.w3.org=""><polyline points="23 7 23 1 17 1"></polyline><line x1="16" x2="23" y1="8" y2="1"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</button>
</div>
<p className="text-center text-xs text-slate-400 mt-4">
                        By clicking, you consent to receive an automated demo call.
                    </p>
</form>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight text-center mb-12">Common Questions</h2>
<div className="space-y-4">
<details className="group bg-white border border-slate-200 rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-slate-900 font-medium">
                        Does it sound like a robot?
                        <span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5 text-slate-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-slate-500 leading-relaxed text-sm">
                        Not at all. Digalook uses advanced natural language processing to understand context, pause naturally, and speak with a friendly, professional tone. Most callers don't realize they are speaking to an AI.
                    </div>
</details>
<details className="group bg-white border border-slate-200 rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-slate-900 font-medium">
                        Can it integrate with my specific booking software?
                        <span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5 text-slate-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-slate-500 leading-relaxed text-sm">
                        Yes! We integrate with Google Calendar, Outlook, Calendly, and most industry-specific CRM tools like Treatwell, Fresha, and more via API.
                    </div>
</details>
<details className="group bg-white border border-slate-200 rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-slate-900 font-medium">
                        How long does setup take?
                        <span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5 text-slate-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-slate-500 leading-relaxed text-sm">
                        You can be up and running in about 15 minutes. We guide you through connecting your phone line and training the AI with your basic business info (prices, hours, services).
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-24 pb-12">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-8">
                Ready? Now you can have the<br/>receptionist you always dreamed of.
            </h2>
<p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto">
                Dedicate your time and energy to what truly matters—your customers. We'll handle the rest.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<a className="px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white font-medium rounded-full shadow-lg shadow-brand-500/25 transition-all" href="#contact">
                    Start Free Trial
                </a>
<a className="px-8 py-4 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-900 font-medium rounded-full transition-all" href="#contact">
                    Book a Demo
                </a>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
<div className="flex items-center gap-2 mb-4 md:mb-0">
<span className="text-brand-600 font-bold text-lg">digalook</span>
<span>© 2024</span>
</div>
<div className="flex gap-6">
<a className="hover:text-slate-600" href="#">Privacy</a>
<a className="hover:text-slate-600" href="#">Terms</a>
<a className="hover:text-slate-600" href="#">Instagram</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
