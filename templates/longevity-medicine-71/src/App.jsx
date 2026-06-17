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
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
<div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
<img alt="Logo" className="h-10 md:h-12 w-auto" src="https://www.californiacenteroflongevitymedicine.com/images/logo.png"/>
<div className="hidden md:flex items-center gap-6">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Woodland Hills, CA</span>
<a className="flex items-center gap-2 text-sm font-semibold text-zinc-900" href="tel:818-346-1440">
<iconify-icon className="text-teal-600" icon="solar:phone-linear"></iconify-icon>
                    818-346-1440
                </a>
</div>
</div>
</nav>

<section className="py-20 md:py-32 px-6">
<div className="max-w-3xl mx-auto text-center space-y-8">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-zinc-900 leading-[1.1] text-balance">
                Is Your Body Aging Faster Than It Should Be?
            </h1>
<p className="text-lg md:text-xl text-zinc-600 leading-relaxed text-balance">
                Most people over 45 feel tired, foggy, and off. Their doctor says the labs look fine. But fine is not optimal. Take this 2-minute quiz and find out what is actually going on inside your body.
            </p>
<div className="pt-4">
<button className="group relative inline-flex items-center justify-center px-10 py-5 bg-[#0f2a2e] text-white rounded-full text-lg font-semibold transition-all hover:bg-zinc-800 hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-teal-900/10">
                    Take the Free Quiz Now
                    <iconify-icon className="ml-2 text-xl transition-transform group-hover:translate-x-1" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-zinc-100">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16 space-y-3">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900">Real Patients. Real Results.</h2>
<p className="text-base text-zinc-500">Here is what people say after working with Dr. Kurtz.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group relative aspect-[9/16] bg-zinc-100 rounded-3xl overflow-hidden flex items-center justify-center border border-zinc-200 shadow-sm">
<img alt="Patient Story" className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 to-transparent"></div>
<div className="relative z-10 flex flex-col items-center gap-4">
<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#0f2a2e] shadow-lg transition-transform group-hover:scale-110">
<iconify-icon icon="solar:play-linear" style={{fontSize: '2rem'}}></iconify-icon>
</div>
<span className="text-xs font-semibold text-white uppercase tracking-widest">[VIDEO TESTIMONIAL 1]</span>
</div>
</div>

<div className="group relative aspect-[9/16] bg-zinc-100 rounded-3xl overflow-hidden flex items-center justify-center border border-zinc-200 shadow-sm">
<img alt="Patient Story" className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1581579186913-45ac3e6efe93?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 to-transparent"></div>
<div className="relative z-10 flex flex-col items-center gap-4">
<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#0f2a2e] shadow-lg transition-transform group-hover:scale-110">
<iconify-icon icon="solar:play-linear" style={{fontSize: '2rem'}}></iconify-icon>
</div>
<span className="text-xs font-semibold text-white uppercase tracking-widest">[VIDEO TESTIMONIAL 2]</span>
</div>
</div>

<div className="group relative aspect-[9/16] bg-zinc-100 rounded-3xl overflow-hidden flex items-center justify-center border border-zinc-200 shadow-sm">
<img alt="Patient Story" className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 to-transparent"></div>
<div className="relative z-10 flex flex-col items-center gap-4">
<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#0f2a2e] shadow-lg transition-transform group-hover:scale-110">
<iconify-icon icon="solar:play-linear" style={{fontSize: '2rem'}}></iconify-icon>
</div>
<span className="text-xs font-semibold text-white uppercase tracking-widest">[VIDEO TESTIMONIAL 3]</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 overflow-hidden">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="absolute -top-10 -left-10 w-40 h-40 bg-teal-50 rounded-full blur-3xl opacity-50"></div>
<div className="relative bg-zinc-200 rounded-[2rem] overflow-hidden aspect-square shadow-2xl">
<img alt="Vibrant Health" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560365163-3e8d64e762ef?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
<div className="space-y-8">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 leading-tight">This Is Not Your Average Doctor's Office.</h2>
<div className="space-y-6 text-base md:text-lg text-zinc-600 leading-relaxed">
<p>Dr. Allan Kurtz has been in private practice since 1984.</p>
<p>He is Board Certified in Internal Medicine and fellowship trained in Functional Medicine and Anti-Aging Regenerative Medicine.</p>
<p>He does not just treat symptoms. He finds the root cause of why you feel the way you feel.</p>
<p>His practice covers hormone optimization, advanced cardiovascular testing, stem cell therapy, IV nutrition therapy, and full longevity planning.</p>
<p className="font-medium text-zinc-900">If you have been told your labs are normal but you still feel exhausted and foggy... this is the place for you.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-teal-900 text-white rounded-[3rem] mx-4 md:mx-10 mb-20 overflow-hidden relative">
<div className="absolute inset-0 opacity-10 pointer-events-none">
<iconify-icon className="absolute -right-20 -bottom-20" icon="solar:dna-linear" style={{fontSize: '40rem'}}></iconify-icon>
</div>
<div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-16">Here Is What You Will Find Out.</h2>
<div className="space-y-12 mb-20">
<div className="space-y-3">
<div className="flex justify-center text-teal-300">
<iconify-icon icon="solar:test-tube-minimalistic-linear" style={{fontSize: '2.5rem'}}></iconify-icon>
</div>
<p className="text-lg md:text-xl font-light leading-relaxed">Whether your hormones are working against you.</p>
</div>
<div className="space-y-3">
<div className="flex justify-center text-teal-300">
<iconify-icon icon="solar:heart-pulse-linear" style={{fontSize: '2.5rem'}}></iconify-icon>
</div>
<p className="text-lg md:text-xl font-light leading-relaxed">Whether your cardiovascular risk is higher than your cholesterol number suggests.</p>
</div>
<div className="space-y-3">
<div className="flex justify-center text-teal-300">
<iconify-icon icon="solar:bolt-circle-linear" style={{fontSize: '2.5rem'}}></iconify-icon>
</div>
<p className="text-lg md:text-xl font-light leading-relaxed">Whether your body has the energy and resilience of someone your age or someone much older.</p>
</div>
</div>
<button className="inline-flex items-center justify-center px-10 py-5 bg-white text-teal-950 rounded-full text-lg font-semibold transition-all hover:bg-teal-50 hover:scale-[1.02] active:scale-[0.98] shadow-2xl">
                Take the Free Quiz Now
            </button>
</div>
</section>

<section className="py-12 px-6 border-t border-zinc-100">
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs md:text-sm font-medium text-zinc-500 uppercase tracking-widest">
<span>40+ Years in Private Practice</span>
<span className="w-1.5 h-1.5 rounded-full bg-zinc-200 hidden md:block"></span>
<span>Fellowship Trained in Functional Medicine</span>
<span className="w-1.5 h-1.5 rounded-full bg-zinc-200 hidden md:block"></span>
<span>Serving Woodland Hills, Calabasas, Sherman Oaks, Encino, and Greater Los Angeles</span>
</div>
</div>
</section>

<footer className="py-16 bg-white border-t border-zinc-100">
<div className="max-w-6xl mx-auto px-6 text-center space-y-6">
<div className="flex justify-center">
<img alt="Logo" className="h-8 w-auto opacity-80 grayscale" src="https://www.californiacenteroflongevitymedicine.com/images/logo.png"/>
</div>
<div className="text-xs text-zinc-400 space-y-1">
<p className="font-medium text-zinc-600">California Center of Longevity Medicine</p>
<p>Woodland Hills, CA</p>
<p>818-346-1440</p>
</div>
<p className="text-[0.65rem] text-zinc-400 pt-8 border-t border-zinc-50 max-w-lg mx-auto">
                © 2024 California Center of Longevity Medicine. All rights reserved. The information on this site is for educational purposes only and not medical advice.
            </p>
</div>
</footer>

    </>
  );
}
