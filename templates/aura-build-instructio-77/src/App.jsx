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
      

<header className="w-full py-8 px-6 lg:px-12">
<div className="max-w-7xl mx-auto">
<img alt="Turnpaugh Health" className="h-10 lg:h-12 w-auto" src="https://turnpaughhwc.com/wp-content/uploads/2022/08/All-White-Horizontal.svg"/>
</div>
</header>

<section className="py-16 lg:py-24 px-6 text-center">
<div className="max-w-4xl mx-auto">
<h1 className="text-4xl lg:text-6xl font-semibold tracking-tight leading-tight mb-6">
                Your Labs Say You're Fine. <br className="hidden lg:block"/> But You Don't Feel Fine.
            </h1>
<p className="text-[#59ACBD] text-lg lg:text-xl font-medium max-w-3xl mx-auto mb-12">
                Turnpaugh Health has been finding the real answers for patients just like you since 1999. Book a consultation and let's figure out what's actually going on.
            </p>
<div className="flex justify-center">
<a className="bg-[#59ACBD] hover:bg-[#4a93a1] transition-colors text-[#20043E] font-semibold text-base lg:text-lg py-5 px-10 rounded-xl shadow-lg inline-flex items-center gap-2" href="#">
                    Click Here to Book Your Consultation
                    <iconify-icon height="20" icon="solar:calendar-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="pb-24 px-6">
<div className="max-w-5xl mx-auto">
<div className="aspect-video w-full bg-[#2a0652] border-2 border-[#59ACBD] rounded-3xl flex flex-col items-center justify-center relative overflow-hidden shadow-2xl">
<div className="absolute inset-0 bg-gradient-to-tr from-[#20043E] to-transparent opacity-50"></div>
<iconify-icon className="text-[#59ACBD] mb-4" height="80" icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}} width="80"></iconify-icon>
<span className="text-[#59ACBD] font-medium tracking-widest text-sm">[VSL VIDEO GOES HERE]</span>
</div>
<p className="text-center mt-6 text-sm lg:text-base text-gray-300">
                Watch this short video to see how Turnpaugh Health finds answers when other doctors haven't.
            </p>
</div>
</section>

<section className="bg-white py-24 px-6">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-[#20043E] text-3xl lg:text-4xl font-semibold tracking-tight mb-4">Real Patients. Real Results.</h2>
<p className="text-[#20043E]/70 text-base">These are actual Turnpaugh Health patients in their own words.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="bg-white p-8 border-l-4 border-[#59ACBD] shadow-sm flex flex-col justify-between">
<p className="text-[#20043E] text-sm lg:text-base leading-relaxed italic mb-8">
                        "After enduring a decade of unexplained and debilitating symptoms... Dr. Shannon delved deep into my health concerns, conducting comprehensive bloodwork and other tests that my GP had never even considered. The results were enlightening, pinpointing the root causes of my chronic ailments."
                    </p>
<div className="flex items-center gap-3">
<div className="h-px w-8 bg-[#59ACBD]"></div>
<span className="text-[#20043E] font-semibold text-xs tracking-wide uppercase">Daphne, Turnpaugh Health Patient</span>
</div>
</div>

<div className="bg-white p-8 border-l-4 border-[#59ACBD] shadow-sm flex flex-col justify-between">
<p className="text-[#20043E] text-sm lg:text-base leading-relaxed italic mb-8">
                        "Traditional doctors couldn't help me. I was devastated. Dr. Ross spent one solid hour just talking to me. They ran tons of blood work and got to the root of my problem. Traditional medicine just wants to give you a pill and cover it up."
                    </p>
<div className="flex items-center gap-3">
<div className="h-px w-8 bg-[#59ACBD]"></div>
<span className="text-[#20043E] font-semibold text-xs tracking-wide uppercase">Kim Ludwig, Turnpaugh Health Patient</span>
</div>
</div>

<div className="bg-white p-8 border-l-4 border-[#59ACBD] shadow-sm flex flex-col justify-between">
<p className="text-[#20043E] text-sm lg:text-base leading-relaxed italic mb-8">
                        "3 months after starting the recommended diet and taking the prescribed supplements, I am feeling better than I have in years. My hormones are balanced, I have lost weight, and I am feeling so much more stable emotionally."
                    </p>
<div className="flex items-center gap-3">
<div className="h-px w-8 bg-[#59ACBD]"></div>
<span className="text-[#20043E] font-semibold text-xs tracking-wide uppercase">Sarah, Turnpaugh Health Patient</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#20043E]">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-[#59ACBD] text-2xl lg:text-3xl font-semibold tracking-tight mb-12">Hear It Directly From a Patient</h2>
<div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="w-full h-full" frameborder="0" src="https://www.youtube.com/embed/FcYQN-7TmdM" title="YouTube video player">
</iframe>
</div>
<p className="text-white/60 text-sm mt-6">
                One patient's journey back to health through functional medicine at Turnpaugh Health.
            </p>
</div>
</section>

<section className="bg-white py-24 px-6">
<div className="max-w-6xl mx-auto">
<h2 className="text-[#20043E] text-3xl lg:text-4xl font-semibold tracking-tight text-center mb-16">Here's What Happens When You Book</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 bg-[#59ACBD] text-[#20043E] rounded-full flex items-center justify-center text-2xl font-semibold mb-6">1</div>
<h3 className="text-[#20043E] text-xl font-semibold mb-3">The Listening Phase</h3>
<p className="text-[#20043E]/80 text-sm lg:text-base leading-relaxed">
                        You book a consultation. We set aside real time to hear your full story.
                    </p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 bg-[#59ACBD] text-[#20043E] rounded-full flex items-center justify-center text-2xl font-semibold mb-6">2</div>
<h3 className="text-[#20043E] text-xl font-semibold mb-3">Deep Diagnostics</h3>
<p className="text-[#20043E]/80 text-sm lg:text-base leading-relaxed">
                        We run advanced diagnostics. Not the standard workup. The deep stuff that finds what others miss.
                    </p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 bg-[#59ACBD] text-[#20043E] rounded-full flex items-center justify-center text-2xl font-semibold mb-6">3</div>
<h3 className="text-[#20043E] text-xl font-semibold mb-3">Your Personalized Plan</h3>
<p className="text-[#20043E]/80 text-sm lg:text-base leading-relaxed">
                        You get a personalized plan. Built for your body, your history, your goals. Not a template.
                    </p>
</div>
</div>
</div>
</section>

<section className="flex flex-col md:flex-row min-h-[500px]">
<div className="w-full md:w-1/2 bg-[#20043E] p-12 lg:p-24 flex flex-col justify-center">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-8">25 Years of Finding Answers</h2>
<p className="text-white/80 text-base lg:text-lg leading-relaxed">
                Turnpaugh Health was founded in 1999, when functional medicine was barely on the map. Today the practice has 30-plus providers across 5 Central Pennsylvania locations. The approach has always been the same. Find the root cause. Build a real plan. Get you better.
            </p>
</div>
<div className="w-full md:w-1/2 bg-[#59ACBD] p-12 lg:p-24 flex flex-col justify-center">
<h2 className="text-[#20043E] text-3xl lg:text-4xl font-semibold tracking-tight mb-8">Conditions We Support</h2>
<p className="text-[#20043E] text-base lg:text-lg leading-relaxed">
                Thyroid conditions, Lyme disease, autoimmunity, hormonal imbalance, chronic fatigue, mood disorders, gastrointestinal disorders, neurobehavioral conditions, and more. If you've been told your labs are normal but you still don't feel well, this is the place.
            </p>
</div>
</section>

<section className="py-24 px-6 text-center">
<div className="max-w-4xl mx-auto">
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-6">Ready to Find Out What's Actually Going On?</h2>
<p className="text-[#59ACBD] text-lg lg:text-xl font-medium mb-12">
                Book your consultation with Turnpaugh Health today. No guessing. No runaround. Just answers.
            </p>
<div className="flex flex-col items-center gap-8">
<a className="bg-[#59ACBD] hover:bg-[#4a93a1] transition-colors text-[#20043E] font-semibold text-base lg:text-lg py-5 px-10 rounded-xl shadow-lg inline-flex items-center gap-2" href="#">
                    Click Here to Book Your Consultation
                    <iconify-icon height="20" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</a>
<div className="flex flex-col items-center gap-2">
<p className="text-white/70 text-sm">Turnpaugh Health &amp; Wellness Center, Mechanicsburg, PA</p>
<a className="text-white font-medium hover:text-[#59ACBD] transition-colors" href="tel:7177959566">(717) 795-9566</a>
</div>
</div>
</div>
</section>

<footer className="py-16 px-6 border-t border-white/10 text-center">
<div className="max-w-7xl mx-auto">
<img alt="Turnpaugh Health" className="h-8 w-auto mx-auto mb-6" src="https://turnpaughhwc.com/wp-content/uploads/2022/08/All-White-Horizontal.svg"/>
<p className="text-white/40 text-xs tracking-widest uppercase">Turnpaugh Health &amp; Wellness © 2026</p>
</div>
</footer>

    </>
  );
}
