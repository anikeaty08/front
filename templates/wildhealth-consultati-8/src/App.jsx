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
      

<section className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-4 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_#0f172a_0%,_transparent_70%)] -z-10"></div>
<div className="max-w-4xl mx-auto text-center">
<div className="mb-8 flex justify-center">
<span className="text-xl font-semibold tracking-tighter text-white">WILD HEALTH</span>
</div>
<h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tight leading-tight mb-6 text-balance">
                Your Doctor Is Treating You Like the Average of a Million Other People.
            </h1>
<p className="text-lg md:text-xl text-[#ecfccb] font-medium mb-4 text-balance opacity-90">
                Wild Health builds your care plan around your genetics. Not population data. Not guesswork. You.
            </p>
<p className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-10">
                Trusted by executives, CEOs, and high-performers across all 50 states.
            </p>
<div className="flex flex-col items-center gap-4">
<a className="inline-flex items-center justify-center px-8 py-4 bg-[#ecfccb] hover:bg-white text-[#020617] font-semibold rounded-full transition-all transform hover:scale-105 lime-glow text-sm md:text-base" href="#booking">
                    Take the 60-Second Quiz to See If You Qualify
                    <iconify-icon className="ml-2" icon="solar:alt-arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-12 px-4">
<div className="max-w-5xl mx-auto">
<div className="relative aspect-video w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="absolute inset-0 w-full h-full" frameborder="0" src="https://www.youtube.com/embed/-oU2dXUyJys">
</iframe>
</div>
<p className="text-center mt-6 text-xs text-slate-500 italic">
                Watch this before booking your free consultation.
            </p>
</div>
</section>

<section className="py-24 px-4 border-y border-slate-900 bg-slate-950/20">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
<div className="text-center">
<div className="text-4xl md:text-5xl font-semibold text-[#ecfccb] mb-2 tracking-tight">69%</div>
<p className="text-sm font-medium text-white uppercase tracking-wide">Reduction in Cardiovascular Inflammation</p>
</div>
<div className="text-center">
<div className="text-4xl md:text-5xl font-semibold text-[#ecfccb] mb-2 tracking-tight">47%</div>
<p className="text-sm font-medium text-white uppercase tracking-wide">Improvement in Diabetic Markers</p>
</div>
<div className="text-center">
<div className="text-4xl md:text-5xl font-semibold text-[#ecfccb] mb-2 tracking-tight">58%</div>
<p className="text-sm font-medium text-white uppercase tracking-wide">Drop in LDL-P Cholesterol Risk</p>
</div>
</div>
<p className="text-center mt-12 text-xs text-slate-500">
                Published clinical outcomes from real Wild Health members.
            </p>
</div>
</section>

<section className="py-32 px-4">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-16 text-center">
                What a Wild Health Peak Membership Includes
            </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-16">
<div className="flex items-start gap-4">
<div className="mt-1">
<iconify-icon className="text-[#ecfccb]" icon="solar:check-read-linear" width="20"></iconify-icon>
</div>
<p className="text-base md:text-lg text-slate-300">Custom Genetic Analysis</p>
</div>
<div className="flex items-start gap-4">
<div className="mt-1">
<iconify-icon className="text-[#ecfccb]" icon="solar:check-read-linear" width="20"></iconify-icon>
</div>
<p className="text-base md:text-lg text-slate-300">200-Biomarker Diamond Lab Panel</p>
</div>
<div className="flex items-start gap-4">
<div className="mt-1">
<iconify-icon className="text-[#ecfccb]" icon="solar:check-read-linear" width="20"></iconify-icon>
</div>
<p className="text-base md:text-lg text-slate-300">Unlimited Physician Visits</p>
</div>
<div className="flex items-start gap-4">
<div className="mt-1">
<iconify-icon className="text-[#ecfccb]" icon="solar:check-read-linear" width="20"></iconify-icon>
</div>
<p className="text-base md:text-lg text-slate-300">Direct Cell Access to Your Precision Medicine Doctor</p>
</div>
<div className="flex items-start gap-4">
<div className="mt-1">
<iconify-icon className="text-[#ecfccb]" icon="solar:check-read-linear" width="20"></iconify-icon>
</div>
<p className="text-base md:text-lg text-slate-300">Advanced Cancer Screening and Full Body MRI</p>
</div>
<div className="flex items-start gap-4">
<div className="mt-1">
<iconify-icon className="text-[#ecfccb]" icon="solar:check-read-linear" width="20"></iconify-icon>
</div>
<p className="text-base md:text-lg text-slate-300">Dedicated Care Team and Health Coaching</p>
</div>
</div>
<p className="text-center text-xs text-slate-500 font-medium uppercase tracking-widest">
                Peak membership starts at $25,000 annually. Elite tier available on request.
            </p>
</div>
</section>

<section className="py-24 px-4 bg-[#0f172a]/40">
<div className="max-w-4xl mx-auto text-center">
<iconify-icon className="text-[#ecfccb]/20 mb-6 rotate-180" icon="solar:double-alt-arrow-right-linear" width="48"></iconify-icon>
<blockquote className="text-2xl md:text-3xl font-medium text-white italic tracking-tight leading-relaxed mb-8">
                "Wild Health is, in my opinion, the most cutting-edge medical service in America."
            </blockquote>
<cite className="not-italic text-xs font-semibold text-[#ecfccb] uppercase tracking-widest">
                BEN GREENFIELD — BIOHACKER, AUTHOR, WILD HEALTH MEMBER
            </cite>
</div>
</section>

<section className="py-32 px-4">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-20 text-center">
                Here Is What Happens Next
            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-16">
<div className="relative">
<div className="text-5xl font-semibold text-[#ecfccb]/10 mb-6">01</div>
<h3 className="text-xl font-semibold text-white mb-4">Take the Quiz</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        60 seconds. Tells us if Wild Health is the right fit for where you are right now.
                    </p>
</div>
<div className="relative">
<div className="text-5xl font-semibold text-[#ecfccb]/10 mb-6">02</div>
<h3 className="text-xl font-semibold text-white mb-4">Book Your Free Consultation</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        A 20-minute call with our team. No commitment. Just a clear picture of what membership looks like for you.
                    </p>
</div>
<div className="relative">
<div className="text-5xl font-semibold text-[#ecfccb]/10 mb-6">03</div>
<h3 className="text-xl font-semibold text-white mb-4">Get Your Personalized Health Plan</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        Your physician reviews your genetic data and biomarkers and builds a care plan around your body specifically.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-4 bg-[radial-gradient(circle_at_bottom,_#0f172a_0%,_transparent_70%)]" id="booking">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                Ready to Stop Guessing About Your Health?
            </h2>
<p className="text-lg text-slate-400 mb-12">
                The consultation is free. The call is 20 minutes. The decision is yours.
            </p>
<div className="flex flex-col items-center gap-6">
<a className="inline-flex items-center justify-center px-10 py-5 bg-[#ecfccb] hover:bg-white text-[#020617] font-semibold rounded-full transition-all transform hover:scale-105 lime-glow text-base md:text-lg" href="#">
                    Book My Free Consultation →
                </a>
<p className="text-xs text-slate-500 italic mt-4 uppercase tracking-widest">
                    No pressure. No commitment. Just the plan.
                </p>
</div>
</div>
</section>

<footer className="py-12 px-4 border-t border-slate-900/50 bg-[#020617]">
<div className="max-w-6xl mx-auto text-center space-y-6">
<p className="text-xs text-slate-600 font-medium tracking-wide">
                Wild Health | wildhealth.com | support@wildhealth.com | Available in all 50 states
            </p>
<div className="flex justify-center gap-6 text-[10px] text-slate-700 uppercase tracking-widest font-semibold">
<span>Privacy Policy</span>
<span className="text-slate-800">•</span>
<span>Terms of Service</span>
</div>
</div>
</footer>

    </>
  );
}
