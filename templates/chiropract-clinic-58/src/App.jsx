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
      

<header className="py-12 flex justify-center">
<img alt="Middletown Clinic of Chiropractic Logo" className="h-20 w-auto object-contain" src="https://static.wixstatic.com/media/a84e9c_b9db56a93ff84448b15286b83e72b936~mv2.png"/>
</header>

<section className="max-w-5xl mx-auto px-6 text-center pb-20">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#0D008B] tracking-tight mb-6 leading-tight">
            Still Hurting After Trying Everything?
        </h1>
<p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Dr. Todd Worthington has helped thousands of Middletown families get out of pain — without more surgeries, more pills, or more guessing. Watch the short video below and see if this is right for you.
        </p>

<div className="relative w-full aspect-video bg-slate-100 rounded-3xl overflow-hidden vsl-shadow border border-slate-200 group cursor-pointer mb-12">
<div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
<div className="w-20 h-20 bg-[#82BD41] rounded-full flex items-center justify-center text-white transition-transform group-hover:scale-110">
<iconify-icon height="40" icon="solar:play-linear" style={{strokeWidth: '1.5'}} width="40"></iconify-icon>
</div>
<p className="text-sm font-medium text-slate-500 uppercase tracking-widest">VSL Video — upload here</p>
</div>
</div>

<a className="inline-block bg-[#82BD41] text-white text-base md:text-lg font-semibold px-10 py-5 rounded-full shadow-lg shadow-[#82BD41]/30 hover:bg-[#74a93a] transition-all transform hover:-translate-y-1 active:scale-95" href="#booking">
            Click Here to Book Your Consultation
        </a>
</section>

<div className="bg-slate-50 border-y border-slate-100 py-10">
<div className="max-w-5xl mx-auto px-6 text-center">
<p className="text-sm md:text-base font-medium text-[#0D008B] tracking-wide uppercase opacity-80">
                25+ Years Serving Middletown Families.  •  Thousands of Patients Helped.  •  Faith-Driven Care.
            </p>
</div>
</div>

<section className="py-24 max-w-4xl mx-auto px-6 text-center">
<h2 className="text-2xl font-semibold text-[#0D008B] mb-16 tracking-tight">Sound familiar?</h2>
<div className="space-y-8 text-lg md:text-xl text-slate-700">
<p>You've tried stretching. <span className="font-medium">Still tight.</span></p>
<p>You've taken ibuprofen every morning just to function.</p>
<p>You're scared of another surgery.</p>
<p>Your back, neck, or hips are holding you back from life.</p>
<p>You just want someone to actually explain what's going on.</p>
</div>
<div className="mt-16">
<p className="text-base font-medium text-[#82BD41] italic">
                If any of that sounds like you — you're in the right place.
            </p>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100 px-6">
<div className="max-w-5xl mx-auto">
<h2 className="text-3xl font-semibold text-[#0D008B] text-center mb-16 tracking-tight">Real Patients. Real Results.</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

<div className="aspect-video bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-center group cursor-pointer hover:bg-slate-100 transition-colors">
<div className="text-center">
<iconify-icon className="text-slate-300 group-hover:text-[#82BD41] transition-colors mb-2" height="48" icon="solar:play-circle-linear" width="48"></iconify-icon>
<p className="text-xs font-medium text-slate-400 uppercase tracking-tighter">Patient Video Testimonial 1</p>
</div>
</div>

<div className="aspect-video bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-center group cursor-pointer hover:bg-slate-100 transition-colors">
<div className="text-center">
<iconify-icon className="text-slate-300 group-hover:text-[#82BD41] transition-colors mb-2" height="48" icon="solar:play-circle-linear" width="48"></iconify-icon>
<p className="text-xs font-medium text-slate-400 uppercase tracking-tighter">Patient Video Testimonial 2</p>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="bg-[#82BD41]/10 p-10 rounded-3xl border border-[#82BD41]/20">
<iconify-icon className="text-[#82BD41] mb-6 opacity-40" height="32" icon="solar:quote-bold-duotone" width="32"></iconify-icon>
<p className="text-base text-slate-800 leading-relaxed mb-6 italic">
                        "I have had 2 surgeries and still have pain. I came to Dr. Worthington to avoid a 3rd. He came up with a plan and started my treatment soon after. I was surprised at the relief I felt. I cleaned my whole house — something I couldn't do before without a break."
                    </p>
<p className="text-sm font-semibold text-[#0D008B] uppercase tracking-wider">— Amber W., Middletown OH</p>
</div>
<div className="bg-[#82BD41]/10 p-10 rounded-3xl border border-[#82BD41]/20">
<iconify-icon className="text-[#82BD41] mb-6 opacity-40" height="32" icon="solar:quote-bold-duotone" width="32"></iconify-icon>
<p className="text-base text-slate-800 leading-relaxed mb-6 italic">
                        "I was afraid my leg might give out. The pain was so intense I was taking ibuprofen every morning. Now I have no sharp pains. No ibuprofen. I can do my routine without fear."
                    </p>
<p className="text-sm font-semibold text-[#0D008B] uppercase tracking-wider">— Sandra, Middletown OH</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
<div className="w-full md:w-1/2">
<div className="relative">
<div className="absolute -inset-4 bg-[#82BD41]/10 rounded-3xl -z-10 transform rotate-3"></div>
<img alt="Dr. Todd Worthington" className="w-full h-auto rounded-2xl shadow-xl" src="https://static.wixstatic.com/media/a84e9c_aa4e4b7422144ad9a0bad93697414443~mv2.png"/>
</div>
</div>
<div className="w-full md:w-1/2 space-y-6">
<div>
<h2 className="text-3xl font-semibold text-[#0D008B] tracking-tight">Dr. Todd Worthington</h2>
<p className="text-[#82BD41] font-medium tracking-wide">Middletown Clinic of Chiropractic</p>
</div>
<div className="space-y-4 text-base text-slate-600 leading-relaxed">
<p>Dr. Worthington has been helping families in the Middletown area for over 25 years. He taught anatomy and wellness at Miami University for 16 years. He's treated thousands of patients — people dealing with back pain, neck pain, sciatica, neuropathy, and more.</p>
<p>He offers care you won't find everywhere: chiropractic adjustments, dry needling, shockwave therapy, and spinal decompression — all under one roof.</p>
<p>He grew up nearby. He raised his family here. This isn't just his practice. It's his community.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0D008B] text-white" id="booking">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-4xl font-semibold mb-4 tracking-tight">Claim Your $60 New Patient Special</h2>
<p className="text-lg opacity-90 mb-2">Includes a full consultation, comprehensive exam, and report of findings.</p>
<p className="text-sm font-medium text-[#82BD41] uppercase tracking-widest mb-10">A $220 value.</p>
<p className="text-base italic opacity-70 mb-10">No pressure. No obligation. Just answers.</p>
<a className="inline-block bg-[#82BD41] text-white text-lg font-semibold px-12 py-5 rounded-full shadow-2xl hover:scale-105 transition-transform" href="#">
                Click Here to Book Your Consultation
            </a>
</div>
</section>

<section className="py-24 bg-white px-6">
<div className="max-w-5xl mx-auto">
<h2 className="text-2xl font-semibold text-[#0D008B] mb-12 text-center tracking-tight">Dr. Worthington works with patients dealing with:</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-12">

<div className="flex items-center space-x-3 text-slate-700 font-medium">
<iconify-icon className="text-[#82BD41]" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Back Pain</span>
</div>
<div className="flex items-center space-x-3 text-slate-700 font-medium">
<iconify-icon className="text-[#82BD41]" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Neck Pain</span>
</div>
<div className="flex items-center space-x-3 text-slate-700 font-medium">
<iconify-icon className="text-[#82BD41]" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Sciatica</span>
</div>
<div className="flex items-center space-x-3 text-slate-700 font-medium">
<iconify-icon className="text-[#82BD41]" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Neuropathy</span>
</div>
<div className="flex items-center space-x-3 text-slate-700 font-medium">
<iconify-icon className="text-[#82BD41]" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Headaches</span>
</div>
<div className="flex items-center space-x-3 text-slate-700 font-medium">
<iconify-icon className="text-[#82BD41]" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Disc Conditions</span>
</div>
<div className="flex items-center space-x-3 text-slate-700 font-medium">
<iconify-icon className="text-[#82BD41]" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Auto Injuries</span>
</div>
<div className="flex items-center space-x-3 text-slate-700 font-medium">
<iconify-icon className="text-[#82BD41]" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Hip &amp; Knee Pain</span>
</div>
<div className="flex items-center space-x-3 text-slate-700 font-medium">
<iconify-icon className="text-[#82BD41]" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Scoliosis</span>
</div>
<div className="flex items-center space-x-3 text-slate-700 font-medium">
<iconify-icon className="text-[#82BD41]" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Fibromyalgia</span>
</div>
<div className="flex items-center space-x-3 text-slate-700 font-medium">
<iconify-icon className="text-[#82BD41]" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Sports Injuries</span>
</div>
<div className="flex items-center space-x-3 text-slate-700 font-medium">
<iconify-icon className="text-[#82BD41]" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Posture Issues</span>
</div>
<div className="flex items-center space-x-3 text-slate-700 font-medium">
<iconify-icon className="text-[#82BD41]" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Stress &amp; Tension</span>
</div>
<div className="flex items-center space-x-3 text-slate-700 font-medium">
<iconify-icon className="text-[#82BD41]" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Pregnancy Discomfort</span>
</div>
<div className="flex items-center space-x-3 text-slate-700 font-medium">
<iconify-icon className="text-[#82BD41]" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Pediatric Care</span>
</div>
</div>
</div>
</section>

<footer className="py-24 border-t border-slate-100 bg-slate-50 text-center px-6">
<div className="max-w-4xl mx-auto space-y-12">
<div className="space-y-4">
<p className="text-xl font-semibold text-[#0D008B] tracking-tight">Middletown Clinic of Chiropractic</p>
<div className="text-slate-600 text-sm md:text-base space-y-2">
<p>210 South Breiel Blvd, Suite A — Middletown, OH 45044</p>
<p className="font-medium text-[#0D008B]">(513) 822-7373</p>
<p>Monday–Thursday: 8am–12pm and 2pm–6pm | Friday: Closed</p>
</div>
</div>
<div className="pt-8">
<a className="inline-block bg-[#82BD41] text-white text-base font-semibold px-10 py-5 rounded-full shadow-lg hover:bg-[#74a93a] transition-all transform hover:-translate-y-1" href="#booking">
                    Click Here to Book Your Consultation
                </a>
</div>
<p className="text-xs text-slate-400 pt-12">© 2024 Middletown Clinic of Chiropractic. All rights reserved.</p>
</div>
</footer>

    </>
  );
}
