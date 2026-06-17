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
      

<header className="py-8 flex justify-center">
<img alt="Dr. Sten Ekberg Logo" className="h-16 w-auto object-contain" src="https://cdcssl.ibsrv.net/ibimg/smb/400x124_80/webmgr/0f/e/k/dr-sten-ekberg-wellness-for-life.png.webp?2a99409e033677f0c21b1e0d75152441"/>
</header>

<main className="max-w-4xl mx-auto px-6 pt-12 pb-20 text-center">
<h1 className="text-4xl md:text-6xl font-semibold text-[#0974AA] tracking-tight leading-tight">
            Your Doctor Treats the Symptom. <br className="hidden md:block"/> We Find the Cause.
        </h1>
<p className="mt-6 text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Dr. Sten Ekberg helps people in Cumming, GA finally get answers after years of being told their labs look fine.
        </p>
<div className="mt-10">
<a className="inline-block bg-[#0974AA] text-white text-lg font-semibold px-10 py-5 rounded-full transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-200" href="#">
                Click Here to Book Your Consultation
            </a>
</div>

<div className="mt-16 w-full aspect-video rounded-3xl border-2 border-[#0974AA]/20 bg-slate-50 flex items-center justify-center relative overflow-hidden group cursor-pointer vsl-shadow">
<div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
<div className="w-20 h-20 bg-[#0974AA] rounded-full flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform">
<iconify-icon height="40" icon="solar:play-linear" width="40"></iconify-icon>
</div>
<span className="text-[#0974AA] font-semibold text-lg tracking-tight">Watch This Before You Book</span>
</div>
</div>
</main>

<div className="max-w-4xl mx-auto px-6">
<div className="h-px bg-[#85C183]/30"></div>
</div>

<section className="max-w-5xl mx-auto px-6 py-24">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="relative">
<div className="absolute -inset-4 bg-[#85C183]/10 rounded-3xl -rotate-2"></div>
<img alt="Dr. Sten Ekberg" className="relative w-full aspect-[4/5] object-cover rounded-2xl shadow-xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo174rES-CF71q95qMIOl1H12vW-oDVRc20A&amp;s"/>
</div>
<div className="space-y-6 text-slate-600">
<p className="text-lg leading-relaxed">Dr. Sten Ekberg is a former Olympic decathlete and board-certified chiropractor.</p>
<p className="text-lg leading-relaxed">He spent decades studying how the body really works.</p>
<p className="text-lg leading-relaxed font-semibold text-slate-800">Not how to mask pain. How to fix what's causing it.</p>
<p className="text-lg leading-relaxed">He's been voted Best Atlanta Chiropractor 10 years in a row.</p>
<p className="text-lg leading-relaxed">And patients fly in from across the country, and even from overseas, to see him.</p>
<p className="text-lg leading-relaxed">At Wellness For Life in Cumming, GA, the goal is simple.</p>
<p className="text-xl font-semibold text-[#0974AA] tracking-tight">Find the root cause. Fix it naturally. Get your life back.</p>
</div>
</div>
</section>

<div className="max-w-4xl mx-auto px-6">
<div className="h-px bg-[#85C183]/30"></div>
</div>

<section className="max-w-3xl mx-auto px-6 py-24">
<h2 className="text-3xl font-semibold text-[#0974AA] text-center tracking-tight mb-16">
            Real People. Real Results.
        </h2>
<div className="flex flex-col gap-8">

<div className="p-8 rounded-2xl border border-[#0974AA]/10 bg-white shadow-sm hover:shadow-md transition-shadow">
<p className="text-lg text-slate-600 leading-relaxed italic">"I came into this program a knotted up ball of yarn and came out feeling better than ever. Thank you Wellness For Life for giving me my life back."</p>
<div className="mt-6 flex items-center gap-2">
<div className="h-px w-8 bg-[#85C183]"></div>
<span className="text-xs font-semibold uppercase tracking-widest text-slate-400">Vanessa Escobar</span>
</div>
</div>

<div className="p-8 rounded-2xl border border-[#0974AA]/10 bg-white shadow-sm hover:shadow-md transition-shadow">
<p className="text-lg text-slate-600 leading-relaxed italic">"I talked to several doctors and chiropractors back in Sweden with no results. His approach is mind-blowing. I'm already seeing changes in my second week."</p>
<div className="mt-6 flex items-center gap-2">
<div className="h-px w-8 bg-[#85C183]"></div>
<span className="text-xs font-semibold uppercase tracking-widest text-slate-400">Philip Nidler</span>
</div>
</div>

<div className="p-8 rounded-2xl border border-[#0974AA]/10 bg-white shadow-sm hover:shadow-md transition-shadow">
<p className="text-lg text-slate-600 leading-relaxed italic">"He teaches you how to fix the underlying problem versus just putting a temporary band aid over the symptoms. I have now been off my Crohn's medication for 18 months."</p>
<div className="mt-6 flex items-center gap-2">
<div className="h-px w-8 bg-[#85C183]"></div>
<span className="text-xs font-semibold uppercase tracking-widest text-slate-400">Gayle Marie Knolls</span>
</div>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 py-24 bg-slate-50 rounded-[3rem]">
<h2 className="text-3xl font-semibold text-slate-700 text-center tracking-tight mb-12">
            Hear It From Patients Directly
        </h2>
<div className="grid md:grid-cols-2 gap-8">
<div className="aspect-video bg-white border-2 border-[#85C183]/30 rounded-2xl flex flex-col items-center justify-center gap-3 group cursor-pointer hover:border-[#85C183] transition-colors">
<iconify-icon className="text-[#85C183]" height="32" icon="solar:videocamera-record-linear" width="32"></iconify-icon>
<span className="text-sm font-medium text-slate-500">Patient Video Testimonial</span>
</div>
<div className="aspect-video bg-white border-2 border-[#85C183]/30 rounded-2xl flex flex-col items-center justify-center gap-3 group cursor-pointer hover:border-[#85C183] transition-colors">
<iconify-icon className="text-[#85C183]" height="32" icon="solar:videocamera-record-linear" width="32"></iconify-icon>
<span className="text-sm font-medium text-slate-500">Patient Video Testimonial</span>
</div>
</div>
</section>

<div className="max-w-4xl mx-auto px-6 my-12">
<div className="h-px bg-[#0974AA]/20"></div>
</div>

<section className="max-w-5xl mx-auto px-6 py-20">
<h2 className="text-3xl font-semibold text-[#0974AA] text-center tracking-tight mb-16">
            What Happens When You Book
        </h2>
<div className="grid md:grid-cols-3 gap-12">
<div className="text-center group">
<div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#85C183]/10 text-[#85C183] group-hover:scale-110 transition-transform">
<iconify-icon height="28" icon="solar:magnifer-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-800 tracking-tight mb-3">We Find the Root Cause</h3>
<p className="text-slate-500 leading-relaxed">Not just the symptoms. The actual reason you feel the way you do.</p>
</div>
<div className="text-center group">
<div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#85C183]/10 text-[#85C183] group-hover:scale-110 transition-transform">
<iconify-icon height="28" icon="solar:notes-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-800 tracking-tight mb-3">We Build a Plan for You</h3>
<p className="text-slate-500 leading-relaxed">Chiropractic, nutrition, and functional health. All working together.</p>
</div>
<div className="text-center group">
<div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#85C183]/10 text-[#85C183] group-hover:scale-110 transition-transform">
<iconify-icon height="28" icon="solar:heart-pulse-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-800 tracking-tight mb-3">You Start Feeling Better</h3>
<p className="text-slate-500 leading-relaxed">Real results. Not a temporary fix.</p>
</div>
</div>
</section>

<div className="max-w-4xl mx-auto px-6">
<div className="h-px bg-[#85C183]/30"></div>
</div>

<section className="py-32 text-center px-6">
<h2 className="text-2xl md:text-3xl text-slate-600 tracking-tight mb-10">
            Ready to stop guessing and start healing?
        </h2>
<a className="inline-block bg-[#0974AA] text-white text-xl font-semibold px-12 py-6 rounded-full transition-all hover:shadow-2xl hover:-translate-y-1 active:scale-95 shadow-xl shadow-blue-200" href="#">
            Click Here to Book Your Consultation
        </a>
<div className="mt-12 text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
            Wellness For Life Chiropractic, 5920 Odell St, Cumming, GA 30040. <br/>
            Call us at <span className="text-[#0974AA] font-medium">(678) 638-0898</span>.
        </div>
</section>

<footer className="py-12 border-t border-slate-100 text-center">
<p className="text-xs text-slate-400 uppercase tracking-widest">
            Wellness For Life Chiropractic, Cumming, GA. <a className="hover:text-[#0974AA] transition-colors" href="https://drEkberg.com">drEkberg.com</a>
</p>
</footer>

    </>
  );
}
