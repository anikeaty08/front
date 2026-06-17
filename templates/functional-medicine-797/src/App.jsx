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
      

<header className="pt-8 pb-4">
<div className="container mx-auto px-6 text-center">
<img alt="Active Edge Logo" className="h-16 w-auto mx-auto" src="https://columbuschiropractors.com/wp-content/uploads/2021/10/Active-Edge-Chiropractic-and-Functional-Medicine-Columbus-Ohio-logo.png"/>
</div>
</header>

<section className="py-16 md:py-24 px-6">
<div className="max-w-4xl mx-auto text-center">
<h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#323D20] leading-tight">
                Your Labs Say You're Fine. <br className="hidden md:block"/> But You Don't Feel Fine.
            </h1>
<p className="mt-6 text-lg md:text-xl font-normal text-[#323D20]/90 max-w-2xl mx-auto">
                Active Edge Chiropractic and Functional Medicine in Columbus finds the root cause of what's actually going on. And gets you feeling like yourself again.
            </p>
<div className="mt-10">
<a className="inline-block bg-[#689966] text-white px-8 py-5 rounded-full text-base md:text-lg font-medium shadow-sm hover:opacity-90 transition-opacity" href="#">
                    Click Here to Book Your Free Evaluation
                </a>
<p className="mt-4 text-xs font-normal opacity-80">
                    No obligation. Takes 60 seconds to schedule.
                </p>
</div>
</div>
</section>

<section className="pb-20 px-6">
<div className="max-w-5xl mx-auto">
<div className="bg-[#323D20] aspect-video w-full rounded-xl flex items-center justify-center shadow-2xl border border-[#323D20]/10">
<div className="text-center">
<iconify-icon icon="solar:play-circle-linear" strokeWidth="1.5" style={{color: '#F1EBDB', fontSize: '4rem'}}></iconify-icon>
<p className="text-[#F1EBDB] mt-4 font-medium tracking-wide">[VSL Video Goes Here]</p>
</div>
</div>
<p className="mt-6 text-center text-sm font-normal text-[#323D20]/80">
                Watch this short video to see how Active Edge is different from anything you've tried before.
            </p>
</div>
</section>

<section className="py-16 px-6 bg-[#689966]/5">
<div className="max-w-2xl mx-auto text-center">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Real People. Real Results.</h2>
<div className="mt-6 space-y-4 text-base md:text-lg leading-relaxed font-normal">
<p>These are patients who came to Active Edge frustrated. They had tried other doctors. They were told their results looked normal.</p>
<p className="font-medium">They weren't feeling normal.</p>
<p>Here is what happened when someone finally looked for the root cause.</p>
</div>
</div>
</section>

<section className="py-20 px-6">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
<div className="video-container shadow-lg">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" frameborder="0" src="https://www.youtube.com/embed/ABGgwZKGLX8"></iframe>
</div>
<div className="video-container shadow-lg">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" frameborder="0" src="https://www.youtube.com/embed/hcDd0rKeZJ0"></iframe>
</div>
<div className="video-container shadow-lg">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" frameborder="0" src="https://www.youtube.com/embed/fSbv3O3E5hM"></iframe>
</div>
<div className="video-container shadow-lg">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" frameborder="0" src="https://www.youtube.com/embed/6bLaeyVFrcY"></iframe>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-[#323D20]/5">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-[#F1EBDB] p-8 rounded-2xl border border-[#323D20]/10 shadow-sm flex flex-col justify-between">
<p className="text-base italic leading-relaxed">"Active Edge has completely changed my life. Prior to going there 3 years ago, I was facing chronic back pain, was always sick, could barely stay awake at work. The doctors and staff at Active Edge are the first people that took the time to look at me as a whole person and find the root causes of my ailments."</p>
<p className="mt-6 text-sm font-medium text-[#323D20]/70 uppercase tracking-widest">— Michelle L.</p>
</div>

<div className="bg-[#F1EBDB] p-8 rounded-2xl border border-[#323D20]/10 shadow-sm flex flex-col justify-between">
<p className="text-base italic leading-relaxed">"In just 6 months time, I went from barely being able to walk around the block once a week to being able to walk a mile on a daily basis. I never thought I would see that day again. After 9 years of suffering, I finally feel that I'm healing."</p>
<p className="mt-6 text-sm font-medium text-[#323D20]/70 uppercase tracking-widest">— Krista F.</p>
</div>

<div className="bg-[#F1EBDB] p-8 rounded-2xl border border-[#323D20]/10 shadow-sm flex flex-col justify-between">
<p className="text-base italic leading-relaxed">"Active Edge is one of those places I can go and exhale. It's a place to be seen and heard, it's a place to be nurtured."</p>
<p className="mt-6 text-sm font-medium text-[#323D20]/70 uppercase tracking-widest">— K.L. via Google</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 text-center">
<div className="max-w-3xl mx-auto">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-12">This Is Not a Standard Chiropractic Visit.</h2>
<div className="space-y-8 text-base md:text-lg">
<p>Most practices treat the symptom.</p>
<p className="font-medium text-[#689966]">Active Edge treats the cause.</p>
<p>They combine chiropractic care, functional medicine, and lifestyle medicine all in one place.</p>
<p>They look at your whole history. Your stress. Your gut. Your movement. Your labs.</p>
<p className="font-medium">They find what everyone else missed.</p>
<p>And they build a plan around you. <span className="border-b-2 border-[#689966]">Not a template. You.</span></p>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white/30">
<div className="max-w-4xl mx-auto">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center mb-16">Here Is What Your First Evaluation Looks Like.</h2>
<div className="grid grid-cols-1 gap-12">
<div className="flex flex-col md:flex-row items-start gap-6">
<div className="bg-[#323D20] text-[#F1EBDB] w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-medium">1</div>
<div>
<h3 className="text-xl font-medium tracking-tight mb-2">You get heard.</h3>
<p className="text-base opacity-90">Not rushed. Not dismissed. The team listens to your full history before anything else happens.</p>
</div>
</div>
<div className="flex flex-col md:flex-row items-start gap-6">
<div className="bg-[#323D20] text-[#F1EBDB] w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-medium">2</div>
<div>
<h3 className="text-xl font-medium tracking-tight mb-2">You get assessed.</h3>
<p className="text-base opacity-90">Movement, neurology, and internal health markers are all reviewed to find what is actually going on.</p>
</div>
</div>
<div className="flex flex-col md:flex-row items-start gap-6">
<div className="bg-[#323D20] text-[#F1EBDB] w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-medium">3</div>
<div>
<h3 className="text-xl font-medium tracking-tight mb-2">You get a real plan.</h3>
<p className="text-base opacity-90">Not a generic recommendation. A personalized care path built for your situation.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 text-center">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#323D20]">Ready to Finally Get Some Answers?</h2>
<p className="mt-4 text-lg md:text-xl font-normal opacity-90">Spots are limited. Book your evaluation with Active Edge today.</p>
<div className="mt-10">
<a className="inline-block bg-[#689966] text-white px-10 py-5 rounded-full text-base md:text-lg font-medium shadow-lg hover:shadow-xl transition-all" href="#">
                    Click Here to Book Your Free Evaluation
                </a>
<div className="mt-8 text-xs md:text-sm font-medium tracking-wide opacity-70 uppercase">
                    1400 Dublin Road, Columbus, OH 43215 · (614) 892-9889
                </div>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t border-[#323D20]/5">
<div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
<img alt="Active Edge Logo" className="h-10 w-auto opacity-80 grayscale hover:grayscale-0 transition-all" src="https://columbuschiropractors.com/wp-content/uploads/2021/10/Active-Edge-Chiropractic-and-Functional-Medicine-Columbus-Ohio-logo.png"/>
<p className="text-xs text-center opacity-60">
                Active Edge Chiropractic and Functional Medicine. Columbus, Ohio. <br/>
                © 2024 All Rights Reserved.
            </p>
</div>
</footer>

    </>
  );
}
