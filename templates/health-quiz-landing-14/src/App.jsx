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
      

<header className="bg-[#0B517C] py-8 px-6 flex justify-center">
<img alt="Longevity Legacy Logo" className="h-16 md:h-20 object-contain" src="https://cdcssl.ibsrv.net/ibimg/smb/2800x1500_80/webmgr/1x/i/1/Longevity-Legacy-Logo-Full-Rez.png.webp?81591af8a14d7802e070052dd8d53352"/>
</header>

<section className="bg-[#0B517C] pt-12 pb-24 px-6 text-center text-white">
<div className="max-w-4xl mx-auto">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight mb-6">
                Your Labs Say Fine. <br className="hidden md:block"/> But You Don't Feel Fine.
            </h1>
<p className="text-lg md:text-xl text-slate-200 font-normal max-w-2xl mx-auto mb-10 leading-relaxed">
                Take the 60-second quiz and find out what's actually going on inside your body. 
                Dr. Gena Mastrogianakis, M.D. has helped patients in Atlanta finally get real answers after years of being brushed off.
            </p>
<div className="flex flex-col items-center gap-4">
<a className="bg-[#C5A059] hover:bg-[#b38f4d] transition-colors text-white text-lg font-semibold py-5 px-10 rounded-full inline-flex items-center gap-2 shadow-lg" href="#">
                    Take the Free Quiz 
                    <iconify-icon height="20" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<span className="text-xs tracking-wide text-slate-300 uppercase">
                    No insurance needed. No judgment. Just answers.
                </span>
</div>
</div>
</section>

<section className="bg-white py-20 px-6 border-y border-[#C5A059]/20">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<div className="h-px w-24 bg-[#C5A059] mx-auto mb-8"></div>
<h2 className="text-2xl md:text-3xl font-semibold text-[#0B517C] tracking-tight">
                    What Patients Are Saying About Longevity Legacy
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-slate-50 p-8 rounded-2xl border-l-4 border-[#C5A059] flex flex-col h-full">
<div className="flex gap-1 mb-4 text-[#C5A059]">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-slate-700 leading-relaxed mb-6 text-sm flex-grow">
                        "My daughter had seen numerous doctors over the last year, was hospitalized multiple times, even had her gallbladder removed trying to solve her GI problems. After one meeting with Dr. Gena, she was on a treatment plan that has her back to eating normal food and back to work."
                    </p>
<span className="font-semibold text-[#0B517C] text-sm">— V.W.</span>
</div>

<div className="bg-slate-50 p-8 rounded-2xl border-l-4 border-[#C5A059] flex flex-col h-full">
<div className="flex gap-1 mb-4 text-[#C5A059]">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-slate-700 leading-relaxed mb-6 text-sm flex-grow">
                        "After 49 years of great health I experienced several health issues. I had brain fog and no energy. I had been to all sorts of doctors. I felt like I needed a doctor to look at the entire picture. I started on supplements and a restricted diet."
                    </p>
<span className="font-semibold text-[#0B517C] text-sm">— R.S.</span>
</div>

<div className="bg-slate-50 p-8 rounded-2xl border-l-4 border-[#C5A059] flex flex-col h-full">
<div className="flex gap-1 mb-4 text-[#C5A059]">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-slate-700 leading-relaxed mb-6 text-sm flex-grow">
                        "I searched long and wide for a new doc after losing faith in my previous physician of 7 years. Dr. Mastro is compassionate, genuine, honest. She has and is working WITH me, thinking outside the boxes as we work to figure out MY puzzle."
                    </p>
<span className="font-semibold text-[#0B517C] text-sm">— Melanie M., RN</span>
</div>
</div>
<div className="h-px w-24 bg-[#C5A059] mx-auto mt-16"></div>
</div>
</section>

<section className="bg-[#F8FAFC] py-24 px-6">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-3xl font-semibold text-[#0B517C] tracking-tight mb-12">Sound familiar?</h2>
<ul className="space-y-8 text-left max-w-2xl mx-auto mb-16">
<li className="flex items-start gap-4">
<div className="mt-1 text-[#C5A059]">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-lg text-slate-700">You've seen multiple doctors and still don't have answers.</span>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 text-[#C5A059]">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-lg text-slate-700">You feel exhausted but your labs keep coming back "normal."</span>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 text-[#C5A059]">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-lg text-slate-700">You're dealing with brain fog, hormone issues, gut problems, or random aches and nobody has connected the dots.</span>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 text-[#C5A059]">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-lg text-slate-700 font-medium text-[#0B517C]">You're done guessing. You want a real plan.</span>
</li>
</ul>
<a className="bg-[#C5A059] hover:bg-[#b38f4d] transition-colors text-white text-lg font-semibold py-5 px-10 rounded-full inline-block shadow-lg" href="#">
                Take the Free Quiz and Find Out What's Going On →
            </a>
</div>
</section>

<section className="bg-white py-24 px-6">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="relative group">
<div className="aspect-[4/5] bg-slate-200 rounded-2xl overflow-hidden border border-slate-100 shadow-2xl">
<img alt="Dr. Gena Mastrogianakis" className="w-full h-full object-cover" src="https://cdcssl.ibsrv.net/ibimg/smb/711x1000_80/webmgr/1x/i/1/dr_Gena_Mastrogianakis_photo_1000.jpg.webp?6956e616d4cc5032c85de74734820352"/>
</div>
<div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-[#C5A059] hidden md:block"></div>
</div>
<div className="space-y-6">
<h2 className="text-3xl font-semibold text-[#0B517C] tracking-tight">Meet Dr. Gena</h2>
<div className="space-y-4 text-slate-700 leading-relaxed text-base font-normal">
<p>Dr. Gena Mastrogianakis is a board-certified Family Medicine physician and certified Functional Medicine practitioner.</p>
<p>She spent 5 years at Emory's Winship Cancer Institute before building Longevity Legacy in Marietta, Georgia.</p>
<p>She started this practice to do for her patients what no one could do for her. Give hope. And a real solution to chronic illness.</p>
<p className="font-medium text-[#0B517C]">She doesn't chase symptoms. She finds the root cause.</p>
</div>
<a className="inline-block bg-[#C5A059]/10 text-[#0B517C] border border-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-all text-sm font-semibold py-3 px-8 rounded-full" href="#">
                    Take the Quiz to See If We're a Fit →
                </a>
</div>
</div>
</section>

<section className="bg-[#0B517C] py-24 px-6 text-white">
<div className="max-w-6xl mx-auto text-center">
<h2 className="text-3xl font-semibold tracking-tight mb-20">Here's how it works.</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">

<div className="relative px-4">
<div className="text-6xl font-semibold text-white/10 absolute -top-12 left-1/2 -translate-x-1/2">1</div>
<div className="relative z-10">
<div className="w-12 h-12 bg-[#C5A059] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
<span className="text-white font-semibold">1</span>
</div>
<h3 className="text-xl font-semibold mb-3">Take the quiz.</h3>
<p className="text-slate-200 text-sm">60 seconds. Tell us what's been going on.</p>
</div>
</div>

<div className="relative px-4">
<div className="text-6xl font-semibold text-white/10 absolute -top-12 left-1/2 -translate-x-1/2">2</div>
<div className="relative z-10">
<div className="w-12 h-12 bg-[#C5A059] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
<span className="text-white font-semibold">2</span>
</div>
<h3 className="text-xl font-semibold mb-3">See your results.</h3>
<p className="text-slate-200 text-sm">We'll show you what your symptoms may be pointing to.</p>
</div>
</div>

<div className="relative px-4">
<div className="text-6xl font-semibold text-white/10 absolute -top-12 left-1/2 -translate-x-1/2">3</div>
<div className="relative z-10">
<div className="w-12 h-12 bg-[#C5A059] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
<span className="text-white font-semibold">3</span>
</div>
<h3 className="text-xl font-semibold mb-3">Book a discovery call.</h3>
<p className="text-slate-200 text-sm">Talk to Dr. Gena and get a real plan.</p>
</div>
</div>
</div>
<a className="bg-[#C5A059] hover:bg-[#b38f4d] transition-colors text-white text-lg font-semibold py-5 px-12 rounded-full inline-block shadow-lg" href="#">
                Start the Quiz Now →
            </a>
</div>
</section>

<footer className="bg-[#0B517C] border-t border-white/10 py-16 px-6 text-white text-center">
<div className="max-w-4xl mx-auto">
<div className="mb-8">
<span className="text-xl font-semibold tracking-tighter uppercase italic">Longevity Legacy</span>
</div>
<div className="text-slate-200 space-y-2 mb-10 text-sm">
<p>3417 Canton Rd Building 2, Marietta, GA 30066</p>
<p>(404) 807-0300</p>
<p className="text-[#C5A059] font-medium">mylongevitylegacy.com</p>
</div>
<p className="text-[10px] leading-loose text-slate-300 max-w-xl mx-auto uppercase tracking-widest opacity-80">
                This quiz is for informational purposes only and does not constitute medical advice. Longevity Legacy does not accept insurance.
            </p>
</div>
</footer>

    </>
  );
}
