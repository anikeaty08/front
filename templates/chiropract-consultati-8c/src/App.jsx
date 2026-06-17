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
      

<header className="py-6 px-6 max-w-screen-xl mx-auto flex items-center justify-between">
<a className="block" href="#">
<img alt="McIntyre Family Chiropractic" className="h-12 w-auto object-contain" src="https://www.mcintyrechirosc.com/wp-content/uploads/2024/03/mcintyre-family-Chiropractic-Logo-Light-.webp"/>
</a>
</header>

<section className="pt-12 pb-8 px-6 max-w-4xl mx-auto text-center">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#3599AF] tracking-tight leading-tight mb-6">
            Still In Pain After Seeing Multiple Doctors?
        </h1>
<p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
            Dr. Mike McIntyre has helped 2,900+ patients in Summerville find real relief using the Gonstead System. Watch the short video below and see if this is the right fit for you.
        </p>
<div className="flex justify-center mb-12">
<a className="bg-[#F49D1A] text-white px-8 py-5 rounded-full text-lg font-semibold btn-shadow transition-transform hover:scale-105 active:scale-95 inline-flex items-center gap-2" href="#">
                Click Here to Book Your Consultation
                <iconify-icon icon="solar:calendar-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</section>

<section className="px-6 max-w-screen-lg mx-auto mb-16">
<div className="relative w-full aspect-video bg-slate-100 rounded-2xl border border-slate-200 flex flex-col items-center justify-center overflow-hidden group cursor-pointer">
<div className="absolute inset-0 bg-slate-900/5 transition-colors group-hover:bg-slate-900/0"></div>
<div className="z-10 bg-white/90 backdrop-blur-sm p-6 rounded-full shadow-xl">
<iconify-icon className="text-6xl text-[#3599AF]" icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="mt-6 font-medium text-slate-400 tracking-widest uppercase text-xs">[ VSL VIDEO GOES HERE ]</p>
</div>
<p className="text-center mt-4 text-sm text-slate-500 italic">
            Watch this short video before you book.
        </p>
</section>

<section className="py-12 px-6 flex flex-col items-center border-y border-slate-50">
<a className="bg-[#F49D1A] text-white px-8 py-5 rounded-full text-lg font-semibold btn-shadow transition-transform hover:scale-105 active:scale-95" href="#">
            Click Here to Book Your Consultation
        </a>
<p className="mt-4 text-sm text-slate-500">
            Complimentary consultation. No pressure. Just answers.
        </p>
</section>

<section className="py-24 px-6 max-w-screen-xl mx-auto">
<div className="text-center mb-16">
<span className="text-xs font-semibold tracking-widest text-[#3599AF] uppercase block mb-4">What Patients Are Saying</span>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">Real People. Real Results.</h2>
<p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                These are actual patients of McIntyre Family Chiropractic in Summerville, SC.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-slate-50 p-8 rounded-2xl border-l-4 border-[#F49D1A] flex flex-col justify-between">
<p className="text-slate-700 leading-relaxed mb-6 italic">
                    "Over 11 doctors and specialists, I still had no answers. I was losing the ability for basic functions without extreme exhaustion and vertigo. McIntyre was my last resort, although I wish it was my first. The moment I met Dr. Mike, I knew I was in the right place. He took X-rays and immediately said I see what's going on. I haven't felt this good in 3 years and I am slowly getting back to normal."
                </p>
<div className="flex items-center gap-3">
<div className="h-px w-8 bg-[#F49D1A]"></div>
<span className="text-xs font-semibold tracking-wider text-slate-900 uppercase">Rebecca H.</span>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-2xl border-l-4 border-[#F49D1A] flex flex-col justify-between">
<p className="text-slate-700 leading-relaxed mb-6 italic">
                    "Dr. Mike got my sciatica issue ironed out. I was in a lot of pain when I showed up and now I feel absolutely amazing, no pain at all. Best chiropractor I have ever seen personally. 10 out of 10 do recommend."
                </p>
<div className="flex items-center gap-3">
<div className="h-px w-8 bg-[#F49D1A]"></div>
<span className="text-xs font-semibold tracking-wider text-slate-900 uppercase">Tyler C.</span>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-2xl border-l-4 border-[#F49D1A] flex flex-col justify-between">
<p className="text-slate-700 leading-relaxed mb-6 italic">
                    "I began seeing Dr. McIntyre for my neck and a leg issue. He was the first to actually diagnose an issue with the vertebrae in my neck. I have regained much movement in my neck, as well as experienced relief of discomfort in my leg. I went to see him after the recommendations of no less than 4 of my close friends. So glad I did."
                </p>
<div className="flex items-center gap-3">
<div className="h-px w-8 bg-[#F49D1A]"></div>
<span className="text-xs font-semibold tracking-wider text-slate-900 uppercase">Kimberley S.</span>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-2xl border-l-4 border-[#F49D1A] flex flex-col justify-between">
<p className="text-slate-700 leading-relaxed mb-6 italic">
                    "Dr. Mike has literally changed my daughter's life. 2 years of trying elsewhere and after just 1 visit with Dr. Mike she felt relief. He literally gave her her life and passion back."
                </p>
<div className="flex items-center gap-3">
<div className="h-px w-8 bg-[#F49D1A]"></div>
<span className="text-xs font-semibold tracking-wider text-slate-900 uppercase">Dan B.</span>
</div>
</div>
</div>
<div className="mt-12 p-12 bg-slate-50 border border-dashed border-slate-300 rounded-2xl flex flex-col items-center justify-center text-slate-400">
<iconify-icon className="text-3xl mb-2" icon="solar:videocamera-record-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<p className="text-sm">Video testimonials block placeholder</p>
</div>
</section>

<section className="py-24 px-6 bg-slate-50">
<div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1">
<span className="text-xs font-semibold tracking-widest text-[#3599AF] uppercase block mb-4">Meet Your Doctor</span>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-8">Dr. Mike McIntyre, D.C.</h2>
<div className="space-y-6 text-slate-600 leading-relaxed">
<p>Dr. Mike is a Gonstead Chiropractor based in Summerville, SC. He focuses on foundational correction, not just symptom relief.</p>
<p>He has worked with patients dealing with sciatica, chronic pain, vertigo, and complex conditions that other doctors couldn't figure out.</p>
<p>He graduated from Sherman College of Chiropractic and has helped over 2,900 patients in the Summerville and Charleston area.</p>
<p>His team also offers functional medicine for patients with more complex metabolic conditions.</p>
</div>
</div>
<div className="order-1 md:order-2 bg-slate-200 aspect-[4/5] rounded-2xl overflow-hidden relative shadow-2xl">
<img alt="Dr. Mike McIntyre" className="absolute inset-0 w-full h-full object-cover" src="https://www.mcintyrechirosc.com//wp-content/uploads/2024/07/Chiropractor-Bio-1.webp"/>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-screen-xl mx-auto text-center">
<span className="text-xs font-semibold tracking-widest text-[#3599AF] uppercase block mb-4">The Gonstead System</span>
<div className="max-w-3xl mx-auto space-y-8">
<p className="text-xl md:text-2xl font-light text-slate-800 leading-relaxed">
                Most chiropractors adjust everything. <span className="text-[#3599AF] font-medium">Dr. Mike adjusts only what needs to be adjusted.</span>
</p>
<p className="text-slate-600 leading-relaxed">
                The Gonstead System uses X-rays, temperature scans, and precise palpation to find the exact cause of your problem. Then he corrects it with accuracy and care.
            </p>
<p className="text-lg font-semibold text-slate-900">No guessing. No cookie cutter adjustments.</p>
</div>
</section>

<section className="py-24 px-6 bg-white border-t border-slate-100 text-center">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Ready to Finally Get Some Answers?</h2>
<p className="text-lg text-slate-600 mb-10">Book your complimentary consultation with Dr. Mike today.</p>
<a className="bg-[#F49D1A] text-white px-10 py-5 rounded-full text-lg font-semibold btn-shadow transition-transform hover:scale-105 active:scale-95 inline-block mb-8" href="#">
                Click Here to Book Your Consultation
            </a>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-slate-500">
<span className="flex items-center gap-1">
<iconify-icon icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    613 Old Trolley Road Suite F, Summerville, SC
                </span>
<span className="hidden md:block opacity-30">|</span>
<span className="flex items-center gap-1">
<iconify-icon icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    (843) 708-6683
                </span>
</div>
</div>
</section>

<footer className="bg-[#3599AF] py-16 px-6 text-white">
<div className="max-w-screen-xl mx-auto flex flex-col items-center text-center">
<img alt="McIntyre Family Chiropractic" className="h-10 w-auto brightness-0 invert mb-8" src="https://www.mcintyrechirosc.com/wp-content/uploads/2024/03/mcintyre-family-Chiropractic-Logo-Light-.webp"/>
<div className="space-y-2 mb-8">
<p className="text-sm font-light opacity-90">613 Old Trolley Road Suite F, Summerville, SC 29485</p>
<p className="text-sm font-light opacity-90">(843) 708-6683</p>
</div>
<div className="pt-8 border-t border-white/10 w-full max-w-xs">
<p className="text-[10px] uppercase tracking-widest opacity-60">
                    © 2024 McIntyre Family Chiropractic. All rights reserved.
                </p>
</div>
</div>
</footer>

    </>
  );
}
