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
      

<header className="py-6 px-6 md:px-12">
<div className="max-w-7xl mx-auto">
<img alt="Chicago Hair Institute" className="h-8 md:h-10 w-auto" src="https://einstein-clients.imgix.net/3094/459471/original_logo-2024.svg?1718649806"/>
</div>
</header>

<section className="px-6 py-16 md:py-24 text-center">
<div className="max-w-3xl mx-auto">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
                Are You a Candidate for a <span className="teal-accent">Hair Transplant?</span>
</h1>
<p className="mt-6 text-base md:text-xl font-medium text-neutral-600 max-w-xl mx-auto leading-relaxed">
                Take our 60-second quiz. Find out if FUE is right for you. No pressure. No sales call unless you want one.
            </p>
<div className="mt-10">
<a className="inline-block w-full md:w-auto teal-bg text-white px-10 py-5 rounded-lg text-lg font-semibold transition-transform active:scale-95" href="#">
                    Take the Quiz
                </a>
</div>
</div>
</section>

<section className="border-t teal-border border-opacity-20 py-12 px-6">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
<div className="flex items-center gap-2">
<iconify-icon className="teal-accent text-xl" icon="solar:calendar-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs font-medium uppercase tracking-wider">30+ Years in Practice</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="teal-accent text-xl" icon="solar:verified-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs font-medium uppercase tracking-wider">Board-Certified Surgeons</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="teal-accent text-xl" icon="solar:user-hand-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs font-medium uppercase tracking-wider">Surgeons Perform Every Procedure</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="teal-accent text-xl" icon="solar:medal-ribbon-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs font-medium uppercase tracking-wider">Castle Connolly Top Doctors</span>
</div>
</div>
</div>
</section>

<section className="py-20 px-6">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight">Real patients. Real results.</h2>
<p className="text-base text-neutral-500 mt-2 font-light">These are people just like you who were unsure at first.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="aspect-video bg-neutral-50 border border-neutral-200 rounded-2xl flex flex-col items-center justify-center group cursor-pointer hover:border-teal-500/30 transition-colors">
<div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm teal-accent">
<iconify-icon className="text-3xl" icon="solar:play-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="mt-4 text-sm font-medium text-neutral-400">Patient Story 1</span>
</div>

<div className="aspect-video bg-neutral-50 border border-neutral-200 rounded-2xl flex flex-col items-center justify-center group cursor-pointer hover:border-teal-500/30 transition-colors">
<div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm teal-accent">
<iconify-icon className="text-3xl" icon="solar:play-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="mt-4 text-sm font-medium text-neutral-400">Patient Story 2</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-4xl mx-auto">
<p className="teal-accent font-medium text-lg mb-4">Most clinics hand off your procedure to a technician.</p>
<div className="space-y-6 text-lg md:text-xl leading-relaxed">
<p>At Chicago Hair Institute your surgeon personally performs every stage of your transplant. Dr. Konior helped found the American Board of Hair Restoration Surgery. That's the body that sets the standards for the whole field.</p>
<p className="font-semibold tracking-tight text-2xl">You deserve care from someone who wrote the rulebook.</p>
</div>
</div>
</section>

<section className="bg-neutral-50 py-24 px-6">
<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

<div className="relative">
<iconify-icon className="teal-accent text-5xl opacity-30 absolute -top-8 -left-4" icon="solar:double-quotes-l-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<blockquote className="relative z-10">
<p className="text-lg italic leading-relaxed text-neutral-800">
                        "I just got an FUE hair transplant with them and I am very happy with how the procedure went. Nothing felt rushed."
                    </p>
<cite className="block mt-6 not-italic text-xs font-semibold tracking-widest uppercase text-neutral-500">— BMO</cite>
</blockquote>
</div>

<div className="relative">
<iconify-icon className="teal-accent text-5xl opacity-30 absolute -top-8 -left-4" icon="solar:double-quotes-l-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<blockquote className="relative z-10">
<p className="text-lg italic leading-relaxed text-neutral-800">
                        "I give the highest marks possible to Dr. Nadimi and her staff. My experience was A+++. I would highly recommend this clinic to anyone."
                    </p>
<cite className="block mt-6 not-italic text-xs font-semibold tracking-widest uppercase text-neutral-500">— A J</cite>
</blockquote>
</div>
</div>
</section>

<section className="py-24 px-6 text-center">
<div className="max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Still not sure? The quiz will tell you.</h2>
<p className="text-base text-neutral-500 mt-4 font-light">It takes 60 seconds. No commitment. Just clarity.</p>
<div className="mt-10">
<a className="inline-block w-full md:w-auto teal-bg text-white px-10 py-5 rounded-lg text-lg font-semibold transition-transform active:scale-95" href="#">
                    Take the Quiz
                </a>
<p className="mt-4 text-xs text-neutral-400">No credit card. No obligation.</p>
</div>
</div>
</section>

<footer className="border-t teal-border border-opacity-20 py-16 px-6 text-center">
<div className="max-w-7xl mx-auto">
<img alt="Chicago Hair Institute" className="h-8 w-auto mx-auto mb-8" src="https://einstein-clients.imgix.net/3094/459471/original_logo-2024.svg?1718649806"/>
<div className="text-sm leading-loose text-neutral-600">
<p className="font-medium text-black">Chicago Hair Institute</p>
<p>Oakbrook Terrace, IL</p>
<p>(630) 937-3667</p>
<a className="hover:text-teal-600 transition-colors" href="https://chicagohairinstitute.com">chicagohairinstitute.com</a>
</div>
</div>
</footer>

    </>
  );
}
