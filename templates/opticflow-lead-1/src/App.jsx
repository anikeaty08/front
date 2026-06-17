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
gtag('config', 'G-W5W5HSDERC');

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
      

<nav className="fixed top-0 w-full z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-3 cursor-pointer">
<div className="w-8 h-8 bg-slate-900 flex items-center justify-center rounded-sm">
<span className="text-white font-normal text-base">OF</span>
</div>
<span className="text-2xl font-normal tracking-tight text-slate-900">OpticFlow</span>
</div>
<a className="hover:bg-emerald-800 transition-colors text-sm font-normal text-white bg-emerald-700 rounded-full py-2.5 px-6 shadow-sm" href="https://cal.com/wildjy-dorestan-v7bebc/discovery-call">
                Book a 15-Min Call
            </a>
</div>
</nav>

<section className="overflow-hidden bg-slate-50 border-slate-200 border-b pt-48 pb-32 px-6 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/[0.08] blur-[100px] rounded-full pointer-events-none"></div>
<div className="z-10 text-center max-w-5xl mx-auto relative">
<div className="mb-8">
<span className="text-xs font-medium tracking-widest uppercase text-emerald-700 bg-emerald-100/50 border border-emerald-200/50 py-2 px-4 rounded-full">
                    REVENUE RECOVERY FOR SERVICE DEPARTMENTS
                </span>
</div>
<h1 className="leading-[1.05] text-5xl md:text-6xl lg:text-7xl font-normal text-slate-900 tracking-tight mb-8">
                We Install Revenue Recovery Systems in Franchised Service Departments.
            </h1>
<p className="text-xl md:text-2xl leading-relaxed font-light text-slate-600 max-w-4xl mx-auto mb-12">
                OpticFlow works with franchised car dealerships to recover the service revenue they're already losing — from <span className="font-normal text-slate-900">missed calls, slow lead response, and no-shows</span> — without adding headcount or replacing existing software.
            </p>
<div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
<a className="w-full sm:w-auto hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 text-lg font-normal text-slate-800 bg-white border-slate-200 border rounded-full py-4 px-8 shadow-sm" href="https://dealership.opticflow.io/">
                    See How It Works for Dealerships →
                </a>
<a className="w-full sm:w-auto hover:bg-emerald-800 transition-colors flex items-center justify-center gap-2 text-lg font-normal text-white bg-emerald-700 rounded-full py-4 px-8 shadow-sm" href="https://cal.com/wildjy-dorestan-v7bebc/discovery-call">
                    Book a 15-Min Call
                </a>
</div>
</div>
</section>

<section className="bg-white border-slate-200 border-b pt-32 pb-32 px-6">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-4xl mx-auto mb-20">
<h2 className="text-4xl md:text-5xl font-normal text-slate-900 tracking-tight">
                    Three things. That's it.
                </h2>
</div>
<div className="grid lg:grid-cols-3 gap-6 mb-16">

<div className="hover:border-emerald-300 hover:bg-emerald-50/30 transition-colors bg-slate-50 border-slate-200 border rounded-3xl p-10 shadow-sm">
<div className="w-14 h-14 rounded-full border border-emerald-200 flex items-center justify-center mb-8 bg-emerald-100">
<iconify-icon className="text-2xl text-emerald-600" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="mb-6">
<h3 className="text-2xl font-normal text-slate-900 tracking-tight mb-4">Missed Call Recovery</h3>
<p className="text-lg font-light text-slate-600 leading-relaxed">
                            Every missed service call gets an automatic callback within 2–5 minutes. VIN intake handled. Appointment confirmed.
                        </p>
</div>
</div>

<div className="hover:border-emerald-300 hover:bg-emerald-50/30 transition-colors bg-slate-50 border-slate-200 border rounded-3xl p-10 shadow-sm">
<div className="w-14 h-14 rounded-full border border-emerald-200 flex items-center justify-center mb-8 bg-emerald-100">
<iconify-icon className="text-2xl text-emerald-600" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="mb-6">
<h3 className="text-2xl font-normal text-slate-900 tracking-tight mb-4">5-Minute Lead Response</h3>
<p className="text-lg text-slate-600 font-light leading-relaxed">
                            Web inquiries get outreach immediately — not 30 minutes later. Dealers who respond in under 5 minutes convert at 100x the rate.
                        </p>
</div>
</div>

<div className="hover:border-emerald-300 hover:bg-emerald-50/30 transition-colors bg-slate-50 border-slate-200 border rounded-3xl p-10 shadow-sm">
<div className="w-14 h-14 rounded-full border border-emerald-200 flex items-center justify-center mb-8 bg-emerald-100">
<iconify-icon className="text-2xl text-emerald-600" icon="solar:calendar-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="mb-6">
<h3 className="text-2xl font-normal text-slate-900 tracking-tight mb-4">No-Show Reduction</h3>
<p className="text-lg text-slate-600 font-light leading-relaxed">
                            Automated reminders 24 hours and 2 hours before every appointment. Reschedule link included. Empty bays get filled.
                        </p>
</div>
</div>
</div>

<div className="text-center max-w-3xl mx-auto">
<p className="text-xl font-light text-slate-600 leading-relaxed">
                    Works with your existing DMS — <span className="font-normal text-slate-900">CDK, Reynolds &amp; Reynolds, PBS Systems, Xtime.</span>
<br/>
                    No rip-and-replace. Live in 14 business days.
                </p>
</div>
</div>
</section>

<section className="bg-slate-50 border-slate-200 border-b py-32 px-6">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-4xl md:text-5xl font-normal text-slate-900 tracking-tight mb-10">
                Built for Single-Rooftop Franchise Dealerships.
            </h2>
<div className="space-y-6 text-xl md:text-2xl font-light text-slate-600 leading-relaxed max-w-3xl mx-auto">
<p>
                    We work with franchised new-car dealerships — Toyota, Honda, Ford, GM, Hyundai, Kia, and other OEM brands — writing 400 to 1,000+ repair orders per month in Canada and the United States.
                </p>
<p>
                    We're currently focused exclusively on <span className="font-normal text-slate-900">Fixed Operations</span>. If you're in a different industry, reach out directly.
                </p>
</div>
</div>
</section>

<section className="bg-white border-slate-200 border-b py-32 px-6 relative overflow-hidden">
<div className="absolute inset-0 bg-emerald-50/30 pointer-events-none"></div>
<div className="max-w-3xl mx-auto text-center relative z-10 animate-float">
<h2 className="text-4xl md:text-6xl font-normal text-slate-900 tracking-tight mb-12 leading-[1.1]">
                If you run a franchised service department, this page is for you.
            </h2>
<a className="inline-flex items-center justify-center hover:bg-emerald-800 transition-colors text-xl font-normal text-white bg-emerald-700 rounded-full mb-8 py-5 px-10 shadow-md hover:shadow-lg" href="https://dealership.opticflow.io/">
                See the Full System →
            </a>
<p className="text-lg font-light text-slate-500">
                Or book a 15-minute call directly: 
                <a className="font-normal text-emerald-700 hover:text-emerald-900 underline decoration-emerald-200 underline-offset-4 transition-colors" href="https://cal.com/wildjy-dorestan-v7bebc/discovery-call">
                    Find a time here
                </a>
</p>
</div>
</section>

<footer className="py-12 px-6 bg-slate-50">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
<div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
<div className="flex items-center gap-3">
<div className="w-6 h-6 bg-slate-900 flex items-center justify-center rounded-sm">
<span className="text-white font-normal text-xs">OF</span>
</div>
<span className="text-base font-normal text-slate-900 tracking-tight">OpticFlow <span className="text-slate-300 mx-2">·</span> Fixed Ops Revenue Recovery</span>
</div>
</div>
<div className="flex flex-col md:flex-row items-center gap-6">
<div className="flex gap-6">
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors font-light" href="mailto:hello@opticflow.io">Email</a>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors font-light" href="#">LinkedIn</a>
</div>
<p className="text-sm font-light text-slate-400">© 2026 OpticFlow</p>
</div>
</div>
</footer>

    </>
  );
}
