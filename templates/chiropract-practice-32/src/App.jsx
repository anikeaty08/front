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
      

<header className="max-w-7xl mx-auto px-6 py-8">
<img alt="Chiropractic Family Practice" className="h-16 w-auto object-contain" src="https://cfp4wellness.com/wp-content/uploads/2023/12/cropped-cfpwebLOGO10.jpg"/>
</header>

<section className="max-w-4xl mx-auto px-6 py-12 md:py-20 text-center">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight text-zinc-900 mb-6">
            Your Back Has Been Hurting Long Enough.
        </h1>
<p className="text-lg md:text-xl text-zinc-600 font-normal mb-10 max-w-2xl mx-auto">
            Dr. Eric Stofman has helped Cherry Hill families get out of pain and stay that way for nearly 30 years. Watch the short video below. Then book your free consultation.
        </p>
<a className="inline-block bg-[#50A53D] text-white text-lg font-medium px-10 py-5 rounded-full shadow-lg shadow-green-900/10 hover:bg-[#459035] transition-all transform hover:scale-[1.02] active:scale-[0.98]" href="#booking">
            Click Here to Book Your Consultation
        </a>
</section>

<section className="max-w-5xl mx-auto px-6 mb-24">
<div className="bg-zinc-100 aspect-video rounded-3xl flex flex-col items-center justify-center border border-zinc-200 shadow-inner overflow-hidden">
<iconify-icon className="text-6xl text-[#50A53D] mb-4" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-zinc-500 font-medium text-base tracking-tight uppercase">[VSL VIDEO GOES HERE — embed your video link when ready]</p>
</div>
<p className="text-center mt-4 text-sm text-zinc-400">
            Watch this short video to see how we help families in Cherry Hill feel better fast.
        </p>
</section>

<section className="max-w-7xl mx-auto px-6 py-12 border-t border-zinc-100">
<div className="text-center mb-16">
<span className="text-xs font-semibold tracking-widest text-[#50A53D] uppercase mb-3 block">What Patients Are Saying</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Real People. Real Results.</h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
<div className="bg-white p-8 rounded-2xl border-l-4 border-[#50A53D] shadow-sm ring-1 ring-zinc-100">
<p className="text-zinc-700 leading-relaxed mb-6 text-base italic">"Dr. Eric is the absolute best at what he does. Always kind, effective, and knowledgeable."</p>
<p className="text-sm font-semibold text-zinc-900">— Tessa J.</p>
</div>
<div className="bg-white p-8 rounded-2xl border-l-4 border-[#50A53D] shadow-sm ring-1 ring-zinc-100">
<p className="text-zinc-700 leading-relaxed mb-6 text-base italic">"Professional, beautiful office. The doctor is extremely knowledgeable and I truly left feeling like I was going to get something accomplished towards easing my back issues. A+ in my book."</p>
<p className="text-sm font-semibold text-zinc-900">— Pam R.</p>
</div>
<div className="bg-white p-8 rounded-2xl border-l-4 border-[#50A53D] shadow-sm ring-1 ring-zinc-100">
<p className="text-zinc-700 leading-relaxed mb-6 text-base italic">"This was by far one of the best experiences I have ever had going to a medical appointment. Very professional and educational yet with the vibe of relaxed fun. The entire experience was above and beyond."</p>
<p className="text-sm font-semibold text-zinc-900">— Brooke J.</p>
</div>
<div className="bg-white p-8 rounded-2xl border-l-4 border-[#50A53D] shadow-sm ring-1 ring-zinc-100">
<p className="text-zinc-700 leading-relaxed mb-6 text-base italic">"Dr. Eric and his staff are always very sincere and caring. They ease your mind and give you confidence that they are going to get you feeling better soon. Highly recommend to young and old."</p>
<p className="text-sm font-semibold text-zinc-900">— Michael L.</p>
</div>
</div>
</section>

<section className="bg-zinc-50 py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<span className="text-xs font-semibold tracking-widest text-[#50A53D] uppercase mb-3 block">Video Testimonials</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
<iframe allowfullscreen="" className="w-full aspect-video rounded-2xl shadow-lg" frameborder="0" src="https://www.youtube.com/embed/2PVwCRKQYXI"></iframe>
<iframe allowfullscreen="" className="w-full aspect-video rounded-2xl shadow-lg" frameborder="0" src="https://www.youtube.com/embed/lcyCSiz0Do4"></iframe>
<iframe allowfullscreen="" className="w-full aspect-video rounded-2xl shadow-lg" frameborder="0" src="https://www.youtube.com/embed/2A53txOra10"></iframe>
<iframe allowfullscreen="" className="w-full aspect-video rounded-2xl shadow-lg" frameborder="0" src="https://www.youtube.com/embed/telqWlvxipI"></iframe>
<div className="md:col-span-2 flex justify-center">
<iframe allowfullscreen="" className="w-full md:w-1/2 aspect-video rounded-2xl shadow-lg" frameborder="0" src="https://www.youtube.com/embed/XyDZ0lWeC7s"></iframe>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-24">
<div className="flex flex-col md:flex-row items-center gap-12">
<div className="w-full md:w-1/2">
<img alt="Dr. Eric Stofman" className="rounded-3xl shadow-2xl w-full object-cover" src="https://cfp4wellness.com/wp-content/uploads/2023/12/Chiropractic-Family-Practice_002.jpg"/>
</div>
<div className="w-full md:w-1/2 space-y-6">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 leading-tight">Meet Dr. Eric Stofman</h2>
<div className="space-y-4 text-zinc-600 text-lg leading-relaxed">
<p>Dr. Eric Stofman has been serving Cherry Hill families since 1996.</p>
<p>He holds a Fellowship in the International Chiropractic Pediatric Association. He is one of only a handful of chiropractors in Southern New Jersey with an Advanced Proficiency Rating in Activator Methods.</p>
<p>He has led over 1,000 wellness workshops across the country.</p>
<p>He has helped patients with back pain, pregnancy care, and children's wellness for nearly 30 years.</p>
<p className="font-medium text-[#50A53D]">His first visit for new patients is free.</p>
</div>
</div>
</div>
</section>

<section className="bg-[#50A53D] py-24 text-white">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-16">Here's What Happens on Your Free Visit</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="text-center space-y-4">
<iconify-icon className="text-5xl opacity-80" icon="solar:chat-line-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-xl font-semibold">We sit down and talk.</h3>
<p className="opacity-90">Dr. Eric listens. No rushing. No pressure.</p>
</div>
<div className="text-center space-y-4">
<iconify-icon className="text-5xl opacity-80" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-xl font-semibold">We examine your spine.</h3>
<p className="opacity-90">We find what's actually causing the problem.</p>
</div>
<div className="text-center space-y-4">
<iconify-icon className="text-5xl opacity-80" icon="solar:map-arrow-square-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-xl font-semibold">We give you a clear plan.</h3>
<p className="opacity-90">You leave knowing exactly what to do next.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 text-center" id="booking">
<div className="max-w-3xl mx-auto">
<h2 className="text-4xl font-semibold tracking-tight mb-4">Ready to Feel Better?</h2>
<p className="text-xl text-zinc-600 mb-10">Your first visit is free. No obligation. Just answers.</p>
<a className="inline-block bg-[#50A53D] text-white text-lg font-medium px-10 py-5 rounded-full shadow-xl shadow-green-900/20 hover:bg-[#459035] transition-all transform hover:scale-[1.05] active:scale-[0.98] mb-12" href="#">
                Click Here to Book Your Consultation
            </a>
<div className="pt-12 border-t border-zinc-100">
<p className="text-sm text-zinc-400 font-medium tracking-tight leading-relaxed">
                    Chiropractic Family Practice<br/>
                    1040 Kings Highway North, Suite 101, Cherry Hill, NJ 08034<br/>
<span className="text-zinc-600">(856) 667-4567</span>
</p>
</div>
</div>
</section>

    </>
  );
}
