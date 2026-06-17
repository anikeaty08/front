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
      

<nav className="w-full py-8 px-6 md:px-12 flex justify-between items-center border-b border-white/5">
<div className="text-sm md:text-base font-semibold tracking-tighter uppercase">
            McAndrews Chiropractic &amp; Functional Medicine
        </div>
</nav>

<section className="py-24 px-6 md:px-12 flex flex-col items-center text-center max-w-5xl mx-auto">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight mb-8">
            You've Tried Everything. Your Labs Say Fine. <span className="text-[#4CBB17]">But You Still Don't Feel Like Yourself.</span>
</h1>
<p className="text-lg md:text-xl text-white/70 max-w-3xl mb-12 font-light leading-relaxed">
            Dr. Mary McAndrews has helped hundreds of patients in Palatine finally get real answers, and a real plan, after years of being passed from specialist to specialist.
        </p>
<a className="bg-[#4CBB17] text-black px-8 py-5 rounded-full font-semibold text-base transition-transform hover:scale-105 active:scale-95 cta-shadow" href="#">
            Click Here to Book Your Free Consultation
        </a>
</section>

<section className="w-full bg-black py-12 px-6">
<div className="max-w-6xl mx-auto aspect-video bg-[#0A0A0A] border border-white/10 rounded-2xl flex flex-col items-center justify-center group cursor-pointer overflow-hidden relative">
<div className="absolute inset-0 bg-[#4CBB17]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon icon="solar:play-circle-linear" strokeWidth="1.5" style={{fontSize: '4rem', color: '#4CBB17'}}></iconify-icon>
<span className="mt-4 text-white/40 tracking-widest uppercase text-xs">Video goes here</span>
</div>
</section>

<section className="py-8 flex flex-col items-center justify-center border-b border-white/5">
<div className="flex items-center gap-1 mb-2">
<iconify-icon className="text-[#4CBB17] text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#4CBB17] text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#4CBB17] text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#4CBB17] text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#4CBB17] text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-xs md:text-sm text-white/50 tracking-wide">
            4.9 Stars on Google, 201 Reviews, Palatine, IL
        </p>
</section>

<section className="py-24 px-6 text-center max-w-4xl mx-auto">
<h2 className="text-[#4CBB17] text-2xl md:text-3xl font-semibold tracking-tight mb-16">This is for you if...</h2>
<div className="space-y-8 text-lg md:text-xl font-light text-white/90">
<p>You've been dealing with chronic pain, fatigue, or brain fog for years.</p>
<p>Your doctors keep telling you everything looks normal.</p>
<p>You've tried medications, other specialists, and nothing has stuck.</p>
<p>You want someone who actually looks at the whole picture.</p>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-black">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="relative group">
<div className="absolute -inset-4 border border-[#4CBB17]/20 rounded-2xl -z-10 group-hover:inset-0 transition-all"></div>
<img alt="Dr. Mary McAndrews" className="rounded-xl grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl w-full object-cover" src="https://cdcssl.ibsrv.net/ibimg/smb/767x511_80/webmgr/0g/x/x/Mary_20220606_2230.jpg.webp"/>
</div>
<div className="space-y-6">
<h2 className="text-[#4CBB17] text-2xl md:text-4xl font-semibold tracking-tight">
                    Dr. Mary McAndrews, DC, BS, FACMUAP
                </h2>
<div className="space-y-6 text-base md:text-lg text-white/70 font-light leading-relaxed">
<p>Dr. Mary is a Biomechanical Spine Specialist and Chiropractic Physician with 28 years of experience.</p>
<p>She combines chiropractic, functional medicine, acupuncture, and integrative healthcare to find what's actually going on.</p>
<p>Physicians across specialties send their most complex cases to her.</p>
<p className="text-white font-normal italic">She's not guessing. She's diagnosing.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-black border-t border-white/5">
<div className="max-w-6xl mx-auto">
<h2 className="text-[#4CBB17] text-center text-3xl font-semibold tracking-tight mb-16">Real patients. Real results.</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">

<div className="bg-[#0A0A0A] p-10 rounded-2xl border border-white/5 hover:border-[#4CBB17]/30 transition-colors">
<div className="flex gap-1 mb-6">
<iconify-icon className="text-[#4CBB17] text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#4CBB17] text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#4CBB17] text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#4CBB17] text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#4CBB17] text-xs" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm md:text-base leading-relaxed text-white/80 font-light mb-6">"Dr Mary has helped me regain mobility and eliminated stiffness and pain through her adjustments. I no longer need pain killers on a regular basis. She is able to explain the body mechanics and stretching for additional self care."</p>
<p className="text-xs font-semibold tracking-wider uppercase text-[#4CBB17]">Abigail B.</p>
</div>

<div className="bg-[#0A0A0A] p-10 rounded-2xl border border-white/5 hover:border-[#4CBB17]/30 transition-colors">
<div className="flex gap-1 mb-6">
<iconify-icon className="text-[#4CBB17] text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#4CBB17] text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#4CBB17] text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#4CBB17] text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#4CBB17] text-xs" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm md:text-base leading-relaxed text-white/80 font-light mb-6">"I have seen many specialists over time, and to no avail, seen any true improvements. Within days of working with her, I am already feeling better and have real answers to my medical problems."</p>
<p className="text-xs font-semibold tracking-wider uppercase text-[#4CBB17]">Jennifer L.</p>
</div>

<div className="bg-[#0A0A0A] p-10 rounded-2xl border border-white/5 hover:border-[#4CBB17]/30 transition-colors">
<div className="flex gap-1 mb-6">
<iconify-icon className="text-[#4CBB17] text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#4CBB17] text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#4CBB17] text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#4CBB17] text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#4CBB17] text-xs" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm md:text-base leading-relaxed text-white/80 font-light mb-6">"She took the time to go over my situation and explained to me in complete detail how she will go about the healing process. My symptoms have improved."</p>
<p className="text-xs font-semibold tracking-wider uppercase text-[#4CBB17]">Rick</p>
</div>
</div>
<p className="text-center text-xs text-white/40 tracking-widest uppercase">4.9 Stars, 201 Google Reviews</p>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-black border-t border-white/5">
<div className="max-w-4xl mx-auto">
<h2 className="text-[#4CBB17] text-center text-3xl font-semibold tracking-tight mb-20">Here's how it works</h2>
<div className="flex flex-col gap-16">
<div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
<div className="w-12 h-12 rounded-full border border-[#4CBB17] flex items-center justify-center text-[#4CBB17] font-semibold shrink-0">1</div>
<p className="text-lg md:text-xl font-light">Book your free consultation using the button below.</p>
</div>
<div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
<div className="w-12 h-12 rounded-full border border-[#4CBB17] flex items-center justify-center text-[#4CBB17] font-semibold shrink-0">2</div>
<p className="text-lg md:text-xl font-light">Dr. Mary reviews your full health history and goals.</p>
</div>
<div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
<div className="w-12 h-12 rounded-full border border-[#4CBB17] flex items-center justify-center text-[#4CBB17] font-semibold shrink-0">3</div>
<p className="text-lg md:text-xl font-light">You leave with a real plan and real answers.</p>
</div>
</div>
</div>
</section>

<section className="bg-[#4CBB17] py-24 px-6 md:px-12 text-center text-black">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">Ready to finally feel like yourself again?</h2>
<p className="text-lg md:text-xl font-normal mb-12 opacity-80">Book a free consultation with Dr. Mary today. No pressure. No runaround. Just answers.</p>
<a className="inline-block bg-black text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-black/90 transition-all shadow-xl" href="#">
                Click Here to Book Your Free Consultation
            </a>
</div>
</section>

<footer className="bg-black py-16 px-6 border-t border-white/5 text-center">
<div className="max-w-6xl mx-auto space-y-4">
<p className="text-sm font-semibold tracking-tighter uppercase">McAndrews Chiropractic &amp; Functional Medicine</p>
<div className="text-xs text-white/50 space-y-2">
<p>236 E Northwest Highway, Suite B, Palatine, IL 60067</p>
<p>224-544-5777</p>
</div>
</div>
</footer>

    </>
  );
}
