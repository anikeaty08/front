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
      

<header className="pt-12 pb-8 flex justify-center">
<img alt="Logo" className="h-16 md:h-20 w-auto opacity-90" src="https://www.chiroandosteopathy.com/wp-content/uploads/2024/07/fadedlogo-540x540.png"/>
</header>

<section className="max-w-4xl mx-auto px-6 py-16 text-center">
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-8">
            Most Clinics Treat the Symptom.<br className="hidden md:block"/> We Find the Cause.
        </h1>
<p className="text-lg md:text-xl text-zinc-500 font-normal leading-relaxed max-w-2xl mx-auto mb-10">
            Dr. Charlie and Dr. Aimee Oliver are a DC and a DO working together under one roof in San Antonio. Chiropractic. Functional medicine. Hormone health. All of it, together, built around you.
        </p>
<div className="flex justify-center">
<a className="inline-flex items-center justify-center w-full md:w-auto bg-teal-accent text-white px-10 py-5 rounded-full font-semibold text-lg hover:brightness-105 transition-all shadow-sm" href="#">
                Click Here to Book Your Consultation
                <iconify-icon className="ml-2" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 py-8">
<div className="aspect-video w-full border border-teal-accent rounded-3xl flex flex-col items-center justify-center bg-zinc-50 shadow-sm group transition-all">
<iconify-icon className="teal-accent mb-4 opacity-80" icon="solar:play-circle-linear" strokeWidth="1.5" width="64"></iconify-icon>
<span className="text-zinc-400 font-medium tracking-widest text-xs uppercase">Watch the video to see how we help</span>
</div>
</section>

<section className="bg-teal-accent py-4 mt-12">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-white text-xs md:text-sm font-medium tracking-widest uppercase">
                100% Recommended · 52 Five-Star Reviews · San Antonio's Premier Team
            </p>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 py-24 text-center">
<h2 className="text-3xl font-semibold tracking-tight mb-12">Sound familiar?</h2>
<div className="space-y-6 text-lg md:text-xl text-zinc-600 font-normal">
<p>You have been dealing with pain for months. Maybe years.</p>
<p>You have seen doctors. You got adjustments. You tried medications.</p>
<p>And you still don't feel right.</p>
<p>That's because most care treats the symptoms. Not the source.</p>
<p>At Comprehensive Chiropractic and Osteopathy, we do it differently.</p>
<p>We look at the whole picture. Spine. Hormones. Gut health. Weight. All of it.</p>
</div>
</section>

<section className="bg-teal-subtle py-24 border-y border-zinc-50">
<div className="max-w-5xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-center mb-16">
                He's a DC. She's a DO. Together, they cover what most clinics can't.
            </h2>
<div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 mb-16">

<div className="text-center group">
<div className="relative mb-6">
<img alt="Dr. Charles Oliver" className="w-64 h-80 object-cover rounded-2xl shadow-md grayscale group-hover:grayscale-0 transition-all duration-700" src="https://www.chiroandosteopathy.com/wp-content/uploads/2024/01/Dr-Charles-Oliver-of-Chiropractic-and-Osteopathy-in-San-Antonio-422x540.png"/>
</div>
<p className="text-xs font-semibold tracking-widest uppercase text-zinc-400 mb-2">Manual Therapy Expert</p>
<h3 className="text-xl font-semibold">Dr. Charles Oliver, DC</h3>
</div>

<div className="text-center group">
<div className="relative mb-6">
<img alt="Dr. Aimee Oliver" className="w-64 h-80 object-cover rounded-2xl shadow-md grayscale group-hover:grayscale-0 transition-all duration-700" src="https://www.chiroandosteopathy.com/wp-content/uploads/2024/12/Dr-Aimee-Oliver-DO.png"/>
</div>
<p className="text-xs font-semibold tracking-widest uppercase text-zinc-400 mb-2">Osteopathy &amp; Hormone Specialist</p>
<h3 className="text-xl font-semibold">Dr. Aimee Oliver, DO</h3>
</div>
</div>
<div className="space-y-6 text-zinc-600 leading-relaxed text-base md:text-lg max-w-2xl mx-auto text-center">
<p>
                    Dr. Charlie Oliver is a chiropractor and physical therapist. He also wrote the textbook on combined manual therapy. Literally.
                </p>
<p>
                    Dr. Aimee Oliver is a Doctor of Osteopathy. She was voted Top Physician in San Antonio two years in a row.
                </p>
<p className="font-medium text-zinc-900 pt-4">
                    They are husband and wife. They work together every day to build a plan that actually makes sense for you.
                </p>
</div>
</div>
</section>

<section className="max-w-2xl mx-auto px-6 py-24 text-center">
<h2 className="text-3xl font-semibold tracking-tight mb-12">How we can help you today.</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-zinc-800 text-base md:text-lg">
<div className="flex items-center space-x-3"><iconify-icon className="teal-accent" icon="solar:check-circle-linear" width="20"></iconify-icon><span>Chronic back &amp; neck pain</span></div>
<div className="flex items-center space-x-3"><iconify-icon className="teal-accent" icon="solar:check-circle-linear" width="20"></iconify-icon><span>Sciatica &amp; nerve pain</span></div>
<div className="flex items-center space-x-3"><iconify-icon className="teal-accent" icon="solar:check-circle-linear" width="20"></iconify-icon><span>Spinal decompression</span></div>
<div className="flex items-center space-x-3"><iconify-icon className="teal-accent" icon="solar:check-circle-linear" width="20"></iconify-icon><span>Hormone imbalance</span></div>
<div className="flex items-center space-x-3"><iconify-icon className="teal-accent" icon="solar:check-circle-linear" width="20"></iconify-icon><span>Fatigue &amp; brain fog</span></div>
<div className="flex items-center space-x-3"><iconify-icon className="teal-accent" icon="solar:check-circle-linear" width="20"></iconify-icon><span>Weight loss plans</span></div>
<div className="flex items-center space-x-3"><iconify-icon className="teal-accent" icon="solar:check-circle-linear" width="20"></iconify-icon><span>Auto injury recovery</span></div>
<div className="flex items-center space-x-3"><iconify-icon className="teal-accent" icon="solar:check-circle-linear" width="20"></iconify-icon><span>Functional medicine</span></div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-24 border-t border-zinc-100">
<h2 className="text-3xl font-semibold tracking-tight text-center mb-20">Real results from real people.</h2>
<div className="space-y-24">

<div className="text-center">
<blockquote className="text-xl md:text-2xl italic tracking-tight text-zinc-700 mb-6 leading-relaxed max-w-3xl mx-auto">
                    "He's all about educating patients and establishing a unique and individual care plan. He's not just cracking backs and sending you home. He is genuinely trying to fix the problem."
                </blockquote>
<p className="text-xs tracking-widest uppercase font-semibold text-zinc-400">— Michael D., San Antonio</p>
</div>

<div className="text-center">
<blockquote className="text-xl md:text-2xl italic tracking-tight text-zinc-700 mb-6 leading-relaxed max-w-3xl mx-auto">
                    "I didn't feel listened to anywhere else. They never wanted to help me find the problem. Then I came across Dr. Oliver. He immediately caught my attention when he talked about getting to the root of the problem."
                </blockquote>
<p className="text-xs tracking-widest uppercase font-semibold text-zinc-400">— Morgan N., San Antonio</p>
</div>

<div className="text-center">
<blockquote className="text-xl md:text-2xl italic tracking-tight text-zinc-700 mb-6 leading-relaxed max-w-3xl mx-auto">
                    "I have lost over 40 pounds since starting with Dr. Aimee and have felt an overall general level of happiness due to balanced hormone health. They genuinely care about your wellbeing."
                </blockquote>
<p className="text-xs tracking-widest uppercase font-semibold text-zinc-400">— Angela H., San Antonio</p>
</div>
</div>
</section>

<section className="bg-teal-accent text-white py-32">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl font-semibold tracking-tight mb-8 leading-tight">Ready to feel better?</h2>
<div className="space-y-4 text-lg md:text-xl font-normal opacity-95 max-w-2xl mx-auto mb-12 leading-relaxed">
<p>Book a free consultation with Dr. Charlie and Dr. Aimee.</p>
<p>No pressure. No commitment. Just answers.</p>
</div>
<div className="flex justify-center mb-16">
<a className="inline-flex items-center justify-center w-full md:w-auto bg-white text-[#97C9D0] px-12 py-6 rounded-full font-semibold text-xl hover:bg-zinc-50 transition-all shadow-xl" href="#">
                    Click Here to Book Your Consultation
                </a>
</div>
<div className="space-y-2 opacity-90 text-sm md:text-base">
<p className="font-medium tracking-wide">930 Proton Rd Ste 104, San Antonio, TX 78258</p>
<p className="font-medium tracking-wide">(210) 545-1810</p>
</div>
</div>
</section>

    </>
  );
}
