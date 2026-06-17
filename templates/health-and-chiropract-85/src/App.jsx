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
      

<header className="py-6 px-6 md:px-12">
<div className="max-w-7xl mx-auto flex items-center justify-between">
<img alt="Professional Chiropractic Logo" className="h-10 md:h-12 w-auto object-contain" src="https://static.wixstatic.com/media/a84e9c_c052a0dd590f42e09fc93b966e412802~mv2.png/v1/fill/w_272,h_74,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Tryphonas%20Logo%20.png"/>
</div>
</header>

<section className="py-16 md:py-24 px-6">
<div className="max-w-4xl mx-auto text-center">
<h1 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight leading-tight mb-8">
                32 Years of Helping Virginia Beach Patients Get Out of Pain. Without Surgery. Without Medication.
            </h1>
<p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
                If you've tried everything and still can't get relief, there's a reason. And we know how to fix it.
            </p>
<div className="flex flex-col items-center gap-4">
<a className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-8 rounded-full transition-all duration-300 shadow-lg shadow-blue-200 text-base" href="#">
                    Click Here to Book Your Free Consultation
                </a>
<p className="text-xs text-slate-400">
                    $70 New Patient Special — Consultation + Digital X-Rays Included
                </p>
</div>
</div>
</section>

<section className="py-16 md:py-20 px-6 bg-slate-50">
<div className="max-w-4xl mx-auto text-center">
<span className="text-blue-600 font-semibold tracking-widest text-xs uppercase mb-6 block">
                See how we do it
            </span>
<div className="bg-slate-200 rounded-2xl aspect-video w-full flex items-center justify-center relative overflow-hidden group cursor-pointer border border-slate-200">
<div className="absolute inset-0 bg-slate-900/5 group-hover:bg-slate-900/10 transition-colors"></div>
<div className="flex flex-col items-center z-10">
<iconify-icon className="text-6xl text-white/90 drop-shadow-md mb-3" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-white font-medium text-lg drop-shadow-sm">Watch This Short Video First</span>
</div>
</div>
<p className="mt-6 text-slate-500 italic text-sm">
                Dr. Speros Tryphonas, Virginia Beach, VA
            </p>
</div>
</section>

<section className="py-20 md:py-32 px-6">
<div className="max-w-3xl mx-auto">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">Still Living With the Pain?</h2>
<div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed">
<p>You've probably already tried painkillers.</p>
<p>Maybe physical therapy.</p>
<p>Maybe you've seen a specialist or two... or five.</p>
<p>And you still wake up every morning in pain.</p>
<p className="font-medium text-slate-900">That's not bad luck. That's a system that treats symptoms instead of causes.</p>
<p>At Professional Chiropractic and Rehab Center, we find the root of the problem.</p>
<p className="text-blue-600 font-semibold">Then we fix it.</p>
</div>
</div>
</section>

<section className="py-20 px-6 bg-blue-50/50">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="order-2 md:order-1">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">More Than a Chiropractic Adjustment</h2>
<div className="space-y-5 text-slate-600 text-base md:text-lg">
<div className="flex items-start gap-3">
<iconify-icon className="text-blue-600 text-xl mt-1" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<p>We have two certified doctors on staff.</p>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-blue-600 text-xl mt-1" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<p>We offer Spinal Decompression, Shockwave Therapy, Graston Technique, and more.</p>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-blue-600 text-xl mt-1" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<p>All under one roof.</p>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-blue-600 text-xl mt-1" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<p>No bouncing between specialists.</p>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-blue-600 text-xl mt-1" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<p>No referrals to someone who doesn't know your case.</p>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-blue-600 text-xl mt-1" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<p>Just one focused team that actually gets you better.</p>
</div>
</div>
</div>
<div className="order-1 md:order-2">
<div className="rounded-2xl overflow-hidden shadow-xl shadow-blue-100">
<img alt="Dr. Speros Tryphonas" className="w-full h-auto object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" src="https://static.wixstatic.com/media/a84e9c_eef084ff3da749a7b87b23ad70aa65d6~mv2.jpeg/v1/fill/w_301,h_407,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/DSC01497.jpeg"/>
</div>
<p className="mt-4 text-center text-xs text-slate-500 font-medium">
                    Dr. Speros Tryphonas — Doctor of Chiropractic, 32 Years in Practice
                </p>
</div>
</div>
</section>

<section className="py-20 px-6">
<div className="max-w-3xl mx-auto">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center mb-12">What Patients Are Saying</h2>
<div className="space-y-6">

<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
<iconify-icon className="text-blue-200 text-3xl mb-4" icon="solar:chat-square-quote-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-slate-800 italic text-base md:text-lg mb-6">"30 years of back pain was stealing many of the activities that I love. Dr. T and his wonderful staff got me out of pain and feeling hopeful for the future."</p>
<span className="text-slate-500 font-medium text-xs tracking-widest uppercase">— Jake Metz</span>
</div>

<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
<iconify-icon className="text-blue-200 text-3xl mb-4" icon="solar:chat-square-quote-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-slate-800 italic text-base md:text-lg mb-6">"I was passed around to 5 specialists who just tested my blood and sent me out the door. I have only felt that Dr. T and his staff care about my well being."</p>
<span className="text-slate-500 font-medium text-xs tracking-widest uppercase">— Angela Ness</span>
</div>

<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
<iconify-icon className="text-blue-200 text-3xl mb-4" icon="solar:chat-square-quote-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-slate-800 italic text-base md:text-lg mb-6">"Awesome doctor. Very smart. Prevented me from having surgery and got me out of pain without medications."</p>
<span className="text-slate-500 font-medium text-xs tracking-widest uppercase">— Anna Manning</span>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-blue-50/50">
<div className="max-w-5xl mx-auto">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center mb-12">We Help With</h2>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
<div className="bg-white border border-blue-100 p-4 rounded-xl flex items-center gap-3">
<iconify-icon className="text-blue-600" icon="solar:health-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">Back Pain</span>
</div>
<div className="bg-white border border-blue-100 p-4 rounded-xl flex items-center gap-3">
<iconify-icon className="text-blue-600" icon="solar:health-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">Neck Pain</span>
</div>
<div className="bg-white border border-blue-100 p-4 rounded-xl flex items-center gap-3">
<iconify-icon className="text-blue-600" icon="solar:health-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">Sciatica</span>
</div>
<div className="bg-white border border-blue-100 p-4 rounded-xl flex items-center gap-3">
<iconify-icon className="text-blue-600" icon="solar:health-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">Headaches</span>
</div>
<div className="bg-white border border-blue-100 p-4 rounded-xl flex items-center gap-3">
<iconify-icon className="text-blue-600" icon="solar:health-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">Neuropathy</span>
</div>
<div className="bg-white border border-blue-100 p-4 rounded-xl flex items-center gap-3">
<iconify-icon className="text-blue-600" icon="solar:health-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">Disc Conditions</span>
</div>
<div className="bg-white border border-blue-100 p-4 rounded-xl flex items-center gap-3">
<iconify-icon className="text-blue-600" icon="solar:health-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">Herniated Discs</span>
</div>
<div className="bg-white border border-blue-100 p-4 rounded-xl flex items-center gap-3">
<iconify-icon className="text-blue-600" icon="solar:health-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">Plantar Fasciitis</span>
</div>
<div className="bg-white border border-blue-100 p-4 rounded-xl flex items-center gap-3">
<iconify-icon className="text-blue-600" icon="solar:health-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">Arthritis</span>
</div>
<div className="bg-white border border-blue-100 p-4 rounded-xl flex items-center gap-3">
<iconify-icon className="text-blue-600" icon="solar:health-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">Hip &amp; Knee Pain</span>
</div>
<div className="bg-white border border-blue-100 p-4 rounded-xl flex items-center gap-3">
<iconify-icon className="text-blue-600" icon="solar:health-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">Sports Injuries</span>
</div>
<div className="bg-white border border-blue-100 p-4 rounded-xl flex items-center gap-3">
<iconify-icon className="text-blue-600" icon="solar:health-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">Auto Injuries</span>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-blue-600 text-white">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Ready to Finally Get Relief?</h2>
<p className="text-lg md:text-xl text-blue-50 mb-10 opacity-90">
                Book your $70 New Patient Special today. Includes your consultation and two digital X-rays.
            </p>
<div className="flex flex-col items-center gap-6">
<a className="bg-white text-blue-600 font-semibold py-4 px-10 rounded-full transition-transform hover:scale-105 shadow-xl shadow-blue-900/20 text-base" href="#">
                    Click Here to Book Your Free Consultation
                </a>
<div className="flex flex-col gap-1 items-center">
<p className="text-sm text-blue-100 italic">
                        Professional Chiropractic and Rehab Center — 810 Kempsville Road Suite 1, Virginia Beach, VA
                    </p>
<a className="text-base font-semibold text-white" href="tel:7574242626">(757) 424-2626</a>
</div>
</div>
</div>
</section>

<footer className="py-12 px-6 bg-white border-t border-slate-50 text-center">
<p className="text-xs text-slate-400 font-medium tracking-wide">
            © 2024 PROFESSIONAL CHIROPRACTIC AND REHAB CENTER. ALL RIGHTS RESERVED. VIRGINIA BEACH, VA.
        </p>
</footer>

    </>
  );
}
