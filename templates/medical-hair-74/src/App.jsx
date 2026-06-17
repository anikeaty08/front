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
      

<nav className="py-12 flex justify-center items-center">
<img alt="California Hair MD" className="h-12 md:h-16 object-contain invert brightness-200" src="https://californiahairmd.com/wp-content/webp-express/webp-images/doc-root/wp-content/themes/californiahairmd_com/static/images/logo.png.webp"/>
</nav>

<header className="max-w-5xl mx-auto px-6 pt-12 pb-24 text-center">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight gold-accent leading-tight mb-8">
            The Only Practice in America With a Triple Board-Certified Plastic Surgeon and Dermatologist on Staff.
        </h1>
<p className="text-lg md:text-xl font-light text-zinc-400 mb-12 max-w-2xl mx-auto">
            Natural results. No linear scar. A personalized plan built around you.
        </p>
<div className="flex justify-center">
<a className="gold-bg text-black px-10 py-5 rounded-full font-semibold text-base hover:scale-105 transition-transform duration-300 flex items-center gap-2 shadow-lg shadow-[#D4AF37]/10" href="#">
                Click Here to Book Your Free Consultation
                <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</header>

<section className="max-w-6xl mx-auto px-6 mb-32">
<div className="relative group cursor-pointer aspect-video bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="relative z-10 flex flex-col items-center gap-4">
<div className="w-20 h-20 gold-bg rounded-full flex items-center justify-center pl-1 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-black text-4xl" icon="solar:play-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
<p className="text-center mt-6 text-xs uppercase tracking-widest text-zinc-500 font-medium">Watch This First</p>
</section>

<section className="border-y border-zinc-800 py-10 mb-32 bg-zinc-950/50">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-wrap justify-center items-center gap-y-6 md:gap-x-0">
<div className="px-8 text-center border-zinc-800 flex-1 min-w-[250px]">
<span className="text-xs font-semibold gold-accent tracking-[0.2em]">VOTED #1 HAIR SURGEON IN CALIFORNIA</span>
</div>
<div className="hidden md:block h-4 w-[1px] bg-zinc-800"></div>
<div className="px-8 text-center border-zinc-800 flex-1 min-w-[250px]">
<span className="text-xs font-semibold gold-accent tracking-[0.2em]">TRIPLE BOARD-CERTIFIED PLASTIC SURGEON</span>
</div>
<div className="hidden md:block h-4 w-[1px] bg-zinc-800"></div>
<div className="px-8 text-center border-zinc-800 flex-1 min-w-[250px]">
<span className="text-xs font-semibold gold-accent tracking-[0.2em]">TOP HAIR LOSS CLINICS IN THE WORLD</span>
</div>
<div className="hidden md:block h-4 w-[1px] bg-zinc-800"></div>
<div className="px-8 text-center border-zinc-800 flex-1 min-w-[250px]">
<span className="text-xs font-semibold gold-accent tracking-[0.2em]">50 COMBINED YEARS OF EXPERIENCE</span>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 mb-32">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="absolute -inset-4 gold-border border rounded-2xl opacity-20"></div>
<img alt="Dr. Richard Chaffoo" className="relative z-10 rounded-xl w-full grayscale hover:grayscale-0 transition-all duration-700" src="https://californiahairmd.com/wp-content/uploads/sites/197/2022/08/Chaffoo-Resize.png.webp"/>
</div>
<div className="space-y-8">
<h2 className="text-3xl font-semibold tracking-tight leading-snug">
                    Excellence in Surgical <br/><span className="gold-accent">Hair Restoration</span>
</h2>
<div className="space-y-6 text-zinc-400 font-light leading-relaxed">
<p>Dr. Richard Chaffoo has over 30 years of surgical experience. He is one of the only triple board-certified plastic surgeons in the country focused exclusively on hair restoration.</p>
<p>Together with Dr. Susan Stuart, a nationally recognized board-certified dermatologist, California Hair MD is the only practice in the USA with both specialties under one roof.</p>
<p className="text-white font-medium border-l-2 gold-border pl-4">Your consultation is with the doctor directly. Not a consultant.</p>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 mb-32">
<div className="bg-zinc-950 border gold-border p-12 md:p-20 rounded-3xl text-center relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 gold-bg opacity-50"></div>
<iconify-icon className="text-4xl gold-accent mb-8" icon="solar:quote-left-linear" strokeWidth="1.5"></iconify-icon>
<blockquote className="text-2xl md:text-3xl italic font-light leading-relaxed mb-10">
                "From the first consultation with Doctor Chaffoo you know straight away you have come to the right place. I very highly recommend this hair clinic and Doctor Chaffoo."
            </blockquote>
<cite className="not-italic block">
<span className="text-xs tracking-[0.3em] gold-accent font-semibold">DINA BENHAMDAN — VERIFIED PATIENT</span>
</cite>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32">
<h2 className="text-3xl font-semibold tracking-tight text-center mb-16">Hear From Real Patients</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group relative aspect-[9/16] md:aspect-video bg-zinc-900 rounded-xl overflow-hidden border gold-border/30 hover:border-[#D4AF37] transition-colors duration-500">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center bg-black/40 backdrop-blur-sm group-hover:scale-110 transition-transform">
<iconify-icon className="text-3xl text-white" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<p className="absolute bottom-4 left-4 text-xs font-medium tracking-wide">Patient Story 01</p>
</div>

<div className="group relative aspect-[9/16] md:aspect-video bg-zinc-900 rounded-xl overflow-hidden border gold-border/30 hover:border-[#D4AF37] transition-colors duration-500">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center bg-black/40 backdrop-blur-sm group-hover:scale-110 transition-transform">
<iconify-icon className="text-3xl text-white" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<p className="absolute bottom-4 left-4 text-xs font-medium tracking-wide">Patient Story 02</p>
</div>

<div className="group relative aspect-[9/16] md:aspect-video bg-zinc-900 rounded-xl overflow-hidden border gold-border/30 hover:border-[#D4AF37] transition-colors duration-500">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center bg-black/40 backdrop-blur-sm group-hover:scale-110 transition-transform">
<iconify-icon className="text-3xl text-white" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<p className="absolute bottom-4 left-4 text-xs font-medium tracking-wide">Patient Story 03</p>
</div>
</div>
</section>

<section className="bg-zinc-950 border-t border-zinc-800 py-32">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight gold-accent mb-8">Ready to Restore Your Hairline?</h2>
<div className="text-lg text-zinc-400 font-light mb-12 space-y-2">
<p>Book your free consultation today.</p>
<p>You'll speak directly with one of our physicians.</p>
<p>No sales pitch. No pressure. Just a real plan for your hair.</p>
</div>
<div className="flex justify-center">
<a className="gold-bg text-black px-12 py-6 rounded-full font-semibold text-base hover:scale-105 transition-all duration-300 shadow-xl shadow-[#D4AF37]/20" href="#">
                    Click Here to Book Your Free Consultation
                </a>
</div>
</div>
</section>

<footer className="py-16 border-t border-zinc-900">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs tracking-[0.2em] text-zinc-500 mb-4 uppercase">
                California Hair MD. La Jolla. Newport Beach. Beverly Hills. San Diego.
            </p>
<a className="text-zinc-400 text-sm hover:text-[#D4AF37] transition-colors" href="tel:8585001116">
                (858) 500-1116
            </a>
</div>
</footer>

    </>
  );
}
