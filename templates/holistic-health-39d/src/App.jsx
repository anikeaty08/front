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
      

<header className="py-10 border-b border-slate-50">
<div className="container mx-auto px-6 flex justify-center">
<img alt="Hollis-tic Health Logo" className="h-16 md:h-20 w-auto object-contain" src="https://cdcssl.ibsrv.net/ibimg/smb/3000x1026_80/webmgr/1z/3/x/New-Logo25.png.webp?ac96d98ae5d5e7a0d7a8443b599a53ba"/>
</div>
</header>

<section className="py-16 md:py-24 px-6 text-center">
<div className="max-w-4xl mx-auto">
<h1 className="text-3xl md:text-5xl font-semibold text-[#1A3A6B] tracking-tight mb-6">
                You've Tried the Doctors Who Treat Symptoms.<br className="hidden md:block"/> This Is Different.
            </h1>
<p className="text-base md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                Dr. Scott Hollis is Blue Springs' only Board-Certified Chiropractic Internist. He treats the whole body. No drugs. No guesswork. No 2-minute appointments.
            </p>
<div className="flex justify-center">
<a className="inline-flex items-center justify-center px-8 py-5 bg-[#1A3A6B] text-white text-lg font-medium rounded-xl hover:bg-[#122a4d] transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg" href="#">
                    Click Here to Book Your Consultation
                </a>
</div>
<p className="mt-4 text-xs text-slate-400 font-medium uppercase tracking-widest">Takes less than 2 minutes</p>
</div>
</section>

<section className="pb-20 px-6">
<div className="max-w-5xl mx-auto">
<div className="bg-slate-50 p-4 md:p-8 rounded-3xl border border-slate-100 vsl-shadow">
<div className="aspect-video w-full bg-slate-200 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden group border border-slate-300">
<iconify-icon icon="solar:play-circle-linear" strokeWidth="1.5" style={{color: '#1A3A6B', fontSize: '4rem'}}></iconify-icon>
<p className="mt-4 text-slate-500 font-medium tracking-wide">[VSL Video Goes Here]</p>
</div>
<p className="mt-6 text-center text-sm text-slate-500 max-w-xl mx-auto">
                    Watch this short video to see how Dr. Hollis helps patients heal naturally, without prescriptions.
                </p>
</div>
</div>
</section>

<div className="border-y border-slate-100 py-12 bg-white">
<div className="container mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
<div className="space-y-1">
<h3 className="text-2xl font-semibold text-[#1A3A6B] tracking-tight">20 Years</h3>
<p className="text-sm text-slate-500">Serving Blue Springs, MO</p>
</div>
<div className="space-y-1">
<div className="flex items-center justify-center gap-1">
<h3 className="text-2xl font-semibold text-[#1A3A6B] tracking-tight">4.9 Stars</h3>
</div>
<p className="text-sm text-slate-500">48 Google Reviews</p>
</div>
<div className="space-y-1">
<h3 className="text-2xl font-semibold text-[#1A3A6B] tracking-tight">Board-Certified</h3>
<p className="text-sm text-slate-500">Chiropractic Internist</p>
</div>
</div>
</div>
</div>

<section className="py-24 px-6 bg-white">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-2xl md:text-4xl font-semibold text-[#1A3A6B] tracking-tight mb-8">
                This Is Not Your Average Chiropractor
            </h2>
<div className="space-y-6 text-base md:text-lg text-slate-600 leading-relaxed">
<p>Dr. Scott Hollis is a Primary Care Chiropractic Physician and Board-Certified Internist. He combines chiropractic care and internal medicine under one roof.</p>
<p>No prescriptions. No endless treatment plans. No cookie-cutter adjustments. He looks at your whole body. Then he builds a plan around you.</p>
<p>Most patients start feeling better within their first few visits. And the average active care plan wraps up in 8 to 10 visits.</p>
<p>He has been doing this in Blue Springs for 20 years. He even offers a 24/7 on-call line, weekends, holidays, and house calls.</p>
</div>
<div className="mt-12">
<a className="inline-flex items-center justify-center px-8 py-5 bg-[#1A3A6B] text-white text-lg font-medium rounded-xl hover:bg-[#122a4d] transition-all transform hover:scale-[1.02] shadow-md" href="#">
                    Click Here to Book Your Consultation
                </a>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-2xl md:text-4xl font-semibold text-[#1A3A6B] tracking-tight">What Patients Are Saying</h2>
</div>
<div className="space-y-6">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
<div className="flex text-yellow-400 mb-4">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base text-slate-700 italic mb-6 leading-relaxed">
                        "Dr. Hollis and his whole staff have been kind, caring and professional. As an RN, I appreciate their holistic approach. Medications only mask the pain, and what they offer addresses pain at the root cause."
                    </p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-[#1A3A6B]/10 flex items-center justify-center text-[#1A3A6B] font-semibold text-xs">MD</div>
<span className="text-sm font-semibold text-[#1A3A6B]">Maria Dort, <span className="font-normal text-slate-500">Verified Patient</span></span>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
<div className="flex text-yellow-400 mb-4">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base text-slate-700 italic mb-6 leading-relaxed">
                        "It's not easy to find someone who combines chiropractic care and internal medicine, and that made a huge difference for me. I always felt like Dr. Hollis looked at the bigger picture instead of just treating symptoms. I still haven't found anyone who compares."
                    </p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-[#1A3A6B]/10 flex items-center justify-center text-[#1A3A6B] font-semibold text-xs">DN</div>
<span className="text-sm font-semibold text-[#1A3A6B]">Danielle Needham, <span className="font-normal text-slate-500">Patient for 10+ Years</span></span>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
<div className="flex text-yellow-400 mb-4">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base text-slate-700 italic mb-6 leading-relaxed">
                        "After just a few visits, I've noticed a huge difference in my overall health and wellbeing. My lower back pain is gone, and I feel more energized than ever. My body feels like it has had a systemic reboot."
                    </p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-[#1A3A6B]/10 flex items-center justify-center text-[#1A3A6B] font-semibold text-xs">BD</div>
<span className="text-sm font-semibold text-[#1A3A6B]">Brittney Dennis, <span className="font-normal text-slate-500">Verified Patient</span></span>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
<div className="flex text-yellow-400 mb-4">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base text-slate-700 italic mb-6 leading-relaxed">
                        "I've been seeing Dr. Scott Hollis for over 15 years. His approach provided me with long-term relief and real healing, not just a temporary fix."
                    </p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-[#1A3A6B]/10 flex items-center justify-center text-[#1A3A6B] font-semibold text-xs">JL</div>
<span className="text-sm font-semibold text-[#1A3A6B]">Jonathan Lombardi, <span className="font-normal text-slate-500">15-Year Patient</span></span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-2xl md:text-4xl font-semibold text-[#1A3A6B] tracking-tight mb-8">One Practice. Full Body Care.</h2>
<div className="space-y-6 text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
<p>Dr. Hollis treats a wide range of conditions. Chronic pain. Fatigue. Thyroid issues. Herniated discs. Hormone imbalances. Auto injuries. Weight loss. And a lot more.</p>
<p>He uses natural therapies including chiropractic adjustments, hyperbaric oxygen, cold laser, spinal decompression, acupuncture, StemWave, and functional lab testing.</p>
<div className="pt-4 text-[#1A3A6B] font-medium">
                    No drugs. No surgery referrals unless absolutely needed. Just real care, built around you.
                </div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#1A3A6B] text-white">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">Ready to Feel Better?</h2>
<p className="text-base md:text-lg opacity-90 mb-10 max-w-xl mx-auto">
                Book your first consultation with Dr. Hollis today. It takes less than 2 minutes. No commitment required.
            </p>
<div className="flex justify-center mb-12">
<a className="px-10 py-5 bg-white text-[#1A3A6B] text-lg font-semibold rounded-xl hover:bg-slate-50 transition-all transform hover:scale-[1.02] shadow-xl" href="#">
                    Click Here to Book Your Consultation
                </a>
</div>
<div className="space-y-2 opacity-70 text-xs md:text-sm">
<p className="font-medium uppercase tracking-widest">Hollis-tic Health &amp; Hyperbaric Healing Center</p>
<p>1209 NW North Ridge Dr, Blue Springs, MO 64015</p>
<p>(816) 228-5433</p>
</div>
</div>
</section>

<footer className="py-12 px-6 bg-white border-t border-slate-100">
<div className="max-w-6xl mx-auto flex flex-col items-center">
<img alt="Logo" className="h-12 w-auto grayscale opacity-50 mb-6" src="https://cdcssl.ibsrv.net/ibimg/smb/3000x1026_80/webmgr/1z/3/x/New-Logo25.png.webp?ac96d98ae5d5e7a0d7a8443b599a53ba"/>
<p className="text-xs text-slate-400 tracking-wide text-center">
                Hollis-tic Health &amp; Hyperbaric Healing Center | Blue Springs, MO | (816) 228-5433
            </p>
</div>
</footer>

    </>
  );
}
