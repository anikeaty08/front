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
      

<header className="py-12 md:py-16">
<div className="container mx-auto px-6 flex justify-center">
<img alt="ABA Family Chiropractic" className="h-20 md:h-24 w-auto object-contain" src="https://doc.vortala.com/childsites/uploads/410/files/logo2@2x.png"/>
</div>
</header>

<section className="pb-16 md:pb-24">
<div className="container mx-auto px-6 max-w-4xl text-center">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-8">
                You've Seen the Doctors. Tried the Medications. Still Don't Feel Right.
            </h1>
<p className="text-lg md:text-xl text-stone-600 mb-10 font-normal leading-relaxed max-w-3xl mx-auto">
                ABA Family Chiropractic in Toledo has helped hundreds of patients finally get answers, and get their life back, without relying on drugs or guesswork.
            </p>
<div className="flex justify-center">
<a className="bg-green-brand text-white px-8 md:px-10 py-5 rounded-full text-base font-medium shadow-lg shadow-emerald-900/10 hover:shadow-xl hover:scale-[1.02] transition-all duration-300" href="#">
                    Click Here to Book Your Consultation
                </a>
</div>
</div>
</section>

<section className="pb-24">
<div className="container mx-auto px-6">
<div className="max-w-4xl mx-auto">
<div className="vsl-placeholder aspect-video rounded-3xl shadow-2xl flex flex-col items-center justify-center group cursor-pointer overflow-hidden relative">
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
<iconify-icon className="text-white/90 text-7xl mb-4 relative z-10" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-white/80 text-sm font-medium tracking-widest uppercase relative z-10">Watch This First</span>
</div>
</div>
</div>
</section>

<section className="bg-stone-50 border-y border-stone-100 py-6">
<div className="container mx-auto px-6">
<div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-16 text-xs font-semibold tracking-[0.2em] text-stone-500 uppercase">
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-600 text-sm" icon="solar:star-bold"></iconify-icon>
                    5.0 Stars on Google
                </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-600 text-sm" icon="solar:users-group-two-rounded-linear"></iconify-icon>
                    50 Reviews
                </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-600 text-sm" icon="solar:calendar-minimalistic-linear"></iconify-icon>
                    40+ Years Serving Toledo
                </div>
</div>
</div>
</section>

<section className="py-24 md:py-32">
<div className="container mx-auto px-6 max-w-3xl text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight green-brand mb-12">Sound Familiar?</h2>
<div className="space-y-8 text-lg text-stone-600 leading-relaxed font-normal">
<p>You've been to the specialists. You've had the tests. They tell you everything looks fine.</p>
<p className="text-stone-900 font-medium italic">But you don't feel fine.</p>
<p>You're tired. You're in pain. You're dealing with stuff that nobody seems to have an answer for.</p>
<p>That's exactly the kind of patient we work with here.</p>
</div>
</div>
</section>

<section className="py-24 bg-stone-50">
<div className="container mx-auto px-6 max-w-6xl">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900 mb-8 leading-tight">This Is Not a Typical Chiropractic Clinic</h2>
<div className="space-y-6 text-stone-600 text-base leading-relaxed">
<p>Dr. Michael Pickens is one of only 3 <span className="text-stone-900 font-medium">Gonstead-certified</span> chiropractors in all of Ohio. The only one in Toledo.</p>
<p>The Gonstead Method goes deeper than a standard adjustment. It finds the exact source of your problem and corrects it precisely.</p>
<p>His wife Nancy brings a Master's degree in Nutrition and a certificate from the Functional Medicine University. She works right alongside Dr. Pickens in the same office.</p>
<p>You get chiropractic care and root-cause nutrition under one roof. That combination is basically unmatched in this area.</p>
<p>Your first visit runs about 90 minutes. Because they actually want to understand your full picture before they do anything.</p>
</div>
</div>
<div className="order-1 md:order-2 flex justify-center">
<div className="relative">
<div className="absolute -inset-4 bg-green-brand/5 rounded-full blur-2xl"></div>
<img alt="Dr. Michael Pickens" className="relative rounded-2xl shadow-2xl w-full max-w-sm grayscale-[20%] hover:grayscale-0 transition-all duration-500" src="https://doc.vortala.com/childsites/uploads/410/files/Mike-headshot.jpg"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32">
<div className="container mx-auto px-6 max-w-3xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight green-brand text-center mb-16">What Patients Are Saying</h2>
<div className="space-y-8">

<div className="bg-white p-10 rounded-3xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
<iconify-icon className="text-emerald-100 text-5xl mb-4 block" icon="solar:double-quotes-l-bold"></iconify-icon>
<p className="text-lg text-stone-700 leading-relaxed mb-6">"Chiropractic has changed my life in ways I never thought possible. Not only am I pain-free, but I have an improved quality of life and wellness that could never have been possible without Dr. Pickens' care."</p>
<div className="text-xs font-semibold tracking-widest uppercase text-stone-400">— Adam S.</div>
</div>

<div className="bg-emerald-50/30 p-10 rounded-3xl border border-emerald-100/50 shadow-sm hover:shadow-md transition-shadow">
<iconify-icon className="text-emerald-100 text-5xl mb-4 block" icon="solar:double-quotes-l-bold"></iconify-icon>
<p className="text-lg text-stone-700 leading-relaxed mb-6">"I struggled for over 20 years with multiple ailments. I had over 6 specialists and still never felt good. If you're someone who is always at the doctor, never feels well, yet all your test results say you're fine... then you need to see Nancy."</p>
<div className="text-xs font-semibold tracking-widest uppercase text-stone-400">— Lexy Y.</div>
</div>

<div className="bg-white p-10 rounded-3xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
<iconify-icon className="text-emerald-100 text-5xl mb-4 block" icon="solar:double-quotes-l-bold"></iconify-icon>
<p className="text-lg text-stone-700 leading-relaxed mb-6">"I am now completely off my asthma medication. Not bad for a side effect. Dr. Pickens gave me my life back."</p>
<div className="text-xs font-semibold tracking-widest uppercase text-stone-400">— Jeanne H.</div>
</div>
</div>
</div>
</section>

<section className="pb-24">
<div className="container mx-auto px-6 max-w-6xl">
<div className="grid md:grid-cols-2 gap-8">
<div className="bg-stone-50 p-8 rounded-2xl border border-stone-100">
<p className="text-base text-stone-600 italic mb-4">"Dr. Pickens has helped me control my migraines. He seriously is a miracle worker."</p>
<div className="text-xs font-semibold tracking-widest uppercase text-stone-400">— Heidi M.</div>
</div>
<div className="bg-stone-50 p-8 rounded-2xl border border-stone-100">
<p className="text-base text-stone-600 italic mb-4">"I'm currently off the synthroid I've been taking for the past five and a half years. I would encourage anyone with a health issue to see Nancy Pickens."</p>
<div className="text-xs font-semibold tracking-widest uppercase text-stone-400">— Aliya H.</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-900 text-white rounded-t-[3rem] md:rounded-t-[5rem]">
<div className="container mx-auto px-6 max-w-4xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-16">This Is For You If...</h2>
<div className="space-y-8 text-center text-lg md:text-xl text-stone-300 font-light max-w-2xl mx-auto leading-relaxed">
<p className="flex flex-col items-center gap-4">
<iconify-icon className="text-emerald-500 text-2xl" icon="solar:check-circle-linear"></iconify-icon>
                    You've been told your labs are normal but you still feel terrible.
                </p>
<div className="h-px bg-white/10 w-12 mx-auto"></div>
<p className="flex flex-col items-center gap-4">
<iconify-icon className="text-emerald-500 text-2xl" icon="solar:check-circle-linear"></iconify-icon>
                    You're dealing with chronic pain, fatigue, allergies, digestive issues, or hormonal stuff that nobody has solved.
                </p>
<div className="h-px bg-white/10 w-12 mx-auto"></div>
<p className="flex flex-col items-center gap-4">
<iconify-icon className="text-emerald-500 text-2xl" icon="solar:check-circle-linear"></iconify-icon>
                    You're tired of being handed a prescription and sent home.
                </p>
<div className="h-px bg-white/10 w-12 mx-auto"></div>
<p className="flex flex-col items-center gap-4">
<iconify-icon className="text-emerald-500 text-2xl" icon="solar:check-circle-linear"></iconify-icon>
                    You want real answers and a real plan.
                </p>
</div>
</div>
</section>

<section className="py-24 bg-green-brand text-white">
<div className="container mx-auto px-6 max-w-4xl text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Ready to Finally Get Answers?</h2>
<p className="text-lg text-emerald-50 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
                Book a free consultation with the team at ABA Family Chiropractic. No pressure. No guessing. Just a real conversation about what's going on and what might actually help.
            </p>
<div className="flex justify-center">
<a className="bg-white text-emerald-900 px-10 py-5 rounded-full text-base font-medium shadow-2xl hover:bg-stone-50 transition-colors" href="#">
                    Click Here to Book Your Consultation
                </a>
</div>
</div>
</section>

<footer className="py-16 md:py-24 bg-white">
<div className="container mx-auto px-6 text-center">
<div className="mb-8 flex justify-center">
<img alt="ABA Family Chiropractic" className="h-12 w-auto grayscale opacity-50" src="https://doc.vortala.com/childsites/uploads/410/files/logo2@2x.png"/>
</div>
<div className="text-sm font-medium tracking-tight text-stone-900 mb-2 uppercase">
                ABA FAMILY CHIROPRACTIC HOLISTIC HEALTH CENTER
            </div>
<div className="text-xs text-stone-500 space-y-1">
<p>2439 N. Reynolds Rd, Toledo, OH 43615</p>
<p>(419) 535-7818</p>
</div>
</div>
</footer>

    </>
  );
}
