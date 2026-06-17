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
      

<header className="py-10 flex justify-center px-6">
<img alt="Tampa Bay Hair Restoration" className="h-14 w-auto" src="https://tampabayhairrestoration.com/wp-content/uploads/2022/05/cropped-tampa-bay-hair-restoration-logo-300x91-1.webp"/>
</header>

<section className="max-w-4xl mx-auto text-center px-6 pt-12 pb-16">
<h1 className="text-4xl md:text-6xl font-semibold navy-text tracking-tight leading-tight">
            31 Years. One Doctor. Real Results.
        </h1>
<p className="text-lg md:text-xl text-slate-600 mt-6 max-w-2xl mx-auto leading-relaxed">
            Dr. Michael Markou personally handles every consultation and every procedure at Tampa Bay Hair Restoration. No hand-offs. No sales staff. Just honest answers and a plan that's built for you.
        </p>
<div className="mt-10">
<a className="inline-flex items-center justify-center bg-black text-white px-8 py-4 rounded-full font-medium text-base hover:bg-slate-800 transition-all duration-300 shadow-lg shadow-slate-200" href="#booking">
                Click Here to Book Your Free Consultation
                <iconify-icon className="ml-2" icon="solar:arrow-right-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</a>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 pb-24">
<div className="relative group">
<div className="aspect-video bg-slate-100 border border-slate-200 rounded-3xl flex flex-col items-center justify-center relative overflow-hidden transition-all group-hover:border-slate-300">
<div className="absolute inset-0 flex items-center justify-center bg-slate-900/5 backdrop-blur-sm">
<div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl">
<iconify-icon className="text-black ml-1" icon="solar:play-bold" style={{fontSize: '2rem'}}></iconify-icon>
</div>
</div>
<span className="absolute bottom-6 left-6 text-xs font-semibold uppercase tracking-widest text-slate-500">Watch This First</span>
</div>
</div>
</section>

<section className="border-y border-slate-100 py-10 bg-slate-50/50">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-center">
<div className="flex items-center gap-2">
<iconify-icon className="navy-text" icon="solar:calendar-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-widest navy-text">31+ Years in Business</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="navy-text" icon="solar:global-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-widest navy-text">Patients From 20+ Countries</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="navy-text" icon="solar:verified-check-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-widest navy-text">ISHRS Fellow Since 1994</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="navy-text" icon="solar:hand-stars-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-widest navy-text">Free Consultations</span>
</div>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto py-24 px-6">
<h2 className="text-3xl font-semibold navy-text tracking-tight mb-10 text-center md:text-left">Hair Restoration That Actually Lasts</h2>
<div className="space-y-6 text-slate-600 text-lg leading-relaxed">
<p>You've probably looked around. You've seen the big chains. You've read the ads.</p>
<p><span className="font-semibold text-slate-900">Here's the thing:</span> Tampa Bay Hair Restoration is not a chain.</p>
<p>Dr. Markou founded this practice in 1994. He's been doing this for over 31 years. And he still personally meets with every single patient before any procedure.</p>
<p>We offer ARTAS Robotic Hair Transplant, NeoGraft, FUT, non-surgical treatments, and laser therapy. All under one roof. All with the same doctor.</p>
<p className="font-medium navy-text">You get a real plan. Not a package.</p>
</div>
</section>

<section className="bg-slate-50 py-24 px-6">
<div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
<img alt="Dr. Michael Markou" className="w-full h-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlOElqeMjPxCD8qY3L5iZP_O0NM7dqNiNX7g&amp;s"/>
</div>
<div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
<p className="text-xs font-semibold navy-text uppercase tracking-widest mb-1">Board Certified</p>
<p className="text-slate-500 text-sm">3+ Decades Experience</p>
</div>
</div>
<div>
<h3 className="text-2xl font-semibold navy-text tracking-tight mb-6">Dr. Michael Markou, DO, FACOFP, FISHRS</h3>
<ul className="space-y-5 text-slate-600">
<li className="flex items-start gap-4">
<iconify-icon className="text-emerald-500 mt-1" icon="solar:check-circle-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
<span>Founded Tampa Bay Hair Restoration in 1994.</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-emerald-500 mt-1" icon="solar:check-circle-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
<span>One of the first physicians in the world to use PRP for hair restoration.</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-emerald-500 mt-1" icon="solar:check-circle-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
<span>Published the first research on low-level laser therapy for hair loss.</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-emerald-500 mt-1" icon="solar:check-circle-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
<span>2024-2025 President of the Florida Osteopathic Medical Association.</span>
</li>
</ul>
<div className="mt-8 pt-8 border-t border-slate-200">
<p className="text-slate-900 font-medium italic">"He conducts every consult personally. He performs every procedure himself."</p>
</div>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto py-24 px-6">
<h2 className="text-3xl font-semibold navy-text tracking-tight mb-12 text-center">Here's What Patients Are Saying</h2>
<div className="space-y-6">

<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
<div className="flex gap-1 mb-4 text-amber-400">
<iconify-icon icon="solar:star-bold" style={{fontSize: '1rem'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{fontSize: '1rem'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{fontSize: '1rem'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{fontSize: '1rem'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{fontSize: '1rem'}}></iconify-icon>
</div>
<p className="text-slate-700 leading-relaxed mb-6 italic">"If you want the best doctor, staff, and best outcome, well then forget all the rest. If you are serious and want to pay a lot less than Bosley, who by the way is not better, just more expensive, Dr. Markou should be your choice period."</p>
<p className="text-xs font-semibold navy-text tracking-widest uppercase">— THOMAS GOLDBERG</p>
</div>

<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
<div className="flex gap-1 mb-4 text-amber-400">
<iconify-icon icon="solar:star-bold" style={{fontSize: '1rem'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{fontSize: '1rem'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{fontSize: '1rem'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{fontSize: '1rem'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{fontSize: '1rem'}}></iconify-icon>
</div>
<p className="text-slate-700 leading-relaxed mb-6 italic">"He never makes you feel rushed and gives every option open to me. Dr. Markou, my wife and I think that you and your staff are wonderful and will recommend you to everyone."</p>
<p className="text-xs font-semibold navy-text tracking-widest uppercase">— M.R., TAMPA</p>
</div>

<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
<div className="flex gap-1 mb-4 text-amber-400">
<iconify-icon icon="solar:star-bold" style={{fontSize: '1rem'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{fontSize: '1rem'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{fontSize: '1rem'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{fontSize: '1rem'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{fontSize: '1rem'}}></iconify-icon>
</div>
<p className="text-slate-700 leading-relaxed mb-6 italic">"Chose him not only because of having the most experience by far in the Tampa Bay area but also because of the personal attention he gave me during the consultation. No pushy sales people to deal with."</p>
<p className="text-xs font-semibold navy-text tracking-widest uppercase">— VERIFIED PATIENT</p>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto py-24 px-6">
<h2 className="text-3xl font-semibold navy-text tracking-tight mb-12 text-center">Real Patients. Real Results.</h2>
<div className="grid md:grid-cols-2 gap-8">
<div className="aspect-video bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center group cursor-pointer hover:border-slate-300 transition-all">
<div className="flex flex-col items-center">
<iconify-icon className="text-slate-300 group-hover:text-slate-400 mb-2" icon="solar:play-circle-linear" style={{fontSize: '3rem'}}></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-widest text-slate-400">Patient Story 1</span>
</div>
</div>
<div className="aspect-video bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center group cursor-pointer hover:border-slate-300 transition-all">
<div className="flex flex-col items-center">
<iconify-icon className="text-slate-300 group-hover:text-slate-400 mb-2" icon="solar:play-circle-linear" style={{fontSize: '3rem'}}></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-widest text-slate-400">Patient Story 2</span>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 pb-24" id="booking">
<div className="navy-bg rounded-[2.5rem] p-12 md:p-24 text-center text-white relative overflow-hidden">

<div className="absolute inset-0 opacity-10 pointer-events-none">
<svg height="100%" width="100%"><rect fill="url(#grid)" height="100%" width="100%"></rect></svg>
</div>
<div className="relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">Ready to Start?</h2>
<p className="text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto mb-12 leading-relaxed">
                    Your free consultation is one step away. Dr. Markou will personally sit down with you and walk through every option. No pressure. No sales pitch.
                </p>
<div className="flex flex-col items-center gap-6">
<a className="bg-white text-[#002147] px-10 py-5 rounded-full font-semibold text-lg hover:bg-slate-100 transition-all shadow-xl shadow-black/20" href="tel:7274460608">
                        Click Here to Book Your Free Consultation
                    </a>
<div className="flex flex-col gap-2">
<p className="text-xs font-medium uppercase tracking-widest text-blue-200/60">
                            Free consultations available for men and women. Clearwater, FL.
                        </p>
<p className="text-xs font-medium uppercase tracking-widest text-blue-200/60">
                            Virtual consults also available.
                        </p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white py-16 border-t border-slate-100">
<div className="max-w-6xl mx-auto px-6 text-center">
<p className="text-xs text-slate-400 font-medium tracking-wide">
                Tampa Bay Hair Restoration • 1266 Turner St. Suite B, Clearwater, FL 33756 • (727) 446-0608
            </p>
<div className="mt-8 flex justify-center gap-6 opacity-30">
<iconify-icon icon="solar:shield-check-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
<iconify-icon icon="solar:user-speak-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
<iconify-icon icon="solar:hospital-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
</div>
</div>
</footer>

    </>
  );
}
