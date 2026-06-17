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
      

<section className="min-h-screen flex flex-col items-center justify-between py-12 px-6">
<div className="w-full flex justify-center mb-12">
<img alt="Derm &amp; Hair Restoration Specialists" className="h-16 md:h-20 object-contain" src="https://igethair.com/wp-content/uploads/2019/12/hair-transplant-logo-250x121.jpg"/>
</div>
<div className="max-w-3xl w-full text-center flex-grow flex flex-col justify-center items-center">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-black mb-6 leading-tight">
                One Doctor. One Patient. One Day.
            </h1>
<p className="text-base md:text-xl text-neutral-600 mb-10 max-w-2xl leading-relaxed">
                Dr. Sean Behnam does one surgery a day. Every extraction, done personally by him. Over 2,500 procedures. Natural results. No shortcuts.
            </p>
<a className="bg-brand-green text-white text-base md:text-lg font-semibold py-4 px-10 rounded-full transition-transform hover:scale-105 shadow-sm" href="#">
                Click Here to Book Your Free Consultation
            </a>
</div>
<div className="mt-8 animate-bounce">
<iconify-icon className="text-neutral-300 text-3xl" icon="solar:double-alt-arrow-down-linear"></iconify-icon>
</div>
</section>

<section className="py-24 px-6 bg-neutral-50 border-y border-neutral-100">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-xl font-semibold mb-8 tracking-tight">Watch This First</h2>
<div className="aspect-video bg-neutral-800 rounded-2xl flex items-center justify-center relative group cursor-pointer shadow-2xl overflow-hidden">
<div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center transition-all group-hover:scale-110">
<iconify-icon className="text-white text-4xl" icon="solar:play-bold"></iconify-icon>
</div>

</div>
<p className="mt-4 text-xs text-neutral-400 uppercase tracking-widest">
                Turn sound on. Watch until the end.
            </p>
</div>
</section>

<section className="py-32 px-6">
<div className="max-w-6xl mx-auto">
<h2 className="text-2xl md:text-3xl font-semibold text-center mb-16 tracking-tight">Real Patients. Real Results.</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="space-y-4">
<div className="aspect-video bg-neutral-100 rounded-xl overflow-hidden border border-neutral-200 shadow-sm">
<iframe allowfullscreen="" className="w-full h-full" frameborder="0" src="https://www.youtube.com/embed/_4jxB2nDRfc"></iframe>
</div>
<p className="text-sm font-medium text-center text-neutral-500">Patient Testimonial</p>
</div>

<div className="space-y-4">
<div className="aspect-video bg-neutral-100 rounded-xl overflow-hidden border border-neutral-200 shadow-sm">
<iframe allowfullscreen="" className="w-full h-full" frameborder="0" src="https://www.youtube.com/embed/ZwtIibMV0ck"></iframe>
</div>
<p className="text-sm font-medium text-center text-neutral-500">Patient Testimonial</p>
</div>

<div className="space-y-4">
<div className="aspect-video bg-neutral-100 rounded-xl overflow-hidden border border-neutral-200 shadow-sm">
<iframe allowfullscreen="" className="w-full h-full" frameborder="0" src="https://www.youtube.com/embed/71RqGhs9MTY"></iframe>
</div>
<p className="text-sm font-medium text-center text-neutral-500">Patient Testimonial</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-white">
<div className="max-w-4xl mx-auto">
<h2 className="text-2xl md:text-3xl font-semibold text-center mb-20 tracking-tight">Why Patients Choose Dr. Sean</h2>
<div className="grid grid-cols-2 gap-x-12 gap-y-20">
<div className="text-center">
<div className="text-4xl md:text-5xl font-semibold text-brand-green mb-3">2,500+</div>
<div className="text-sm md:text-base text-neutral-900 leading-snug">Hair transplants performed</div>
</div>
<div className="text-center">
<div className="text-4xl md:text-5xl font-semibold text-brand-green mb-3 text-sm">Since 2008</div>
<div className="text-sm md:text-base text-neutral-900 leading-snug">Performing FUE hair restoration</div>
</div>
<div className="text-center">
<div className="text-4xl md:text-5xl font-semibold text-brand-green mb-3">#1</div>
<div className="text-sm md:text-base text-neutral-900 leading-snug">Named best hair transplant doctor in the world by Ape to Gentleman</div>
</div>
<div className="text-center">
<div className="text-4xl md:text-5xl font-semibold text-brand-green mb-3">~95%</div>
<div className="text-sm md:text-base text-neutral-900 leading-snug">Graft survival rate</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-neutral-50">
<div className="max-w-6xl mx-auto">
<h2 className="text-2xl md:text-3xl font-semibold text-center mb-20 tracking-tight">Here's What Happens Next</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-full border-2 border-brand-green text-brand-green flex items-center justify-center font-semibold text-lg mb-6">1</div>
<h3 className="text-lg font-semibold mb-3">Book Your Call</h3>
<p className="text-neutral-500 text-sm leading-relaxed">Takes 60 seconds. Pick a time that works for you.</p>
</div>
<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-full border-2 border-brand-green text-brand-green flex items-center justify-center font-semibold text-lg mb-6">2</div>
<h3 className="text-lg font-semibold mb-3">Talk to Dr. Sean</h3>
<p className="text-neutral-500 text-sm leading-relaxed">He will walk you through your options. No pressure. No surprises.</p>
</div>
<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-full border-2 border-brand-green text-brand-green flex items-center justify-center font-semibold text-lg mb-6">3</div>
<h3 className="text-lg font-semibold mb-3">Get Your Plan</h3>
<p className="text-neutral-500 text-sm leading-relaxed">Leave with a clear picture of what your results could look like.</p>
</div>
</div>
</div>
</section>

<section className="bg-brand-green py-24 px-6 text-white text-center">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight">Ready to See What's Possible?</h2>
<p className="text-base md:text-lg opacity-90 mb-10 leading-relaxed">
                Dr. Sean performs one surgery a day. That means your consultation gets real attention, not a rushed five minutes.
            </p>
<a className="inline-block bg-white text-brand-green text-base md:text-lg font-semibold py-4 px-12 rounded-full transition-shadow hover:shadow-xl" href="#">
                Click Here to Book Your Free Consultation
            </a>
</div>
</section>

<footer className="py-16 px-6 text-center text-neutral-500">
<div className="max-w-2xl mx-auto space-y-2">
<p className="text-sm font-medium text-black">Derm &amp; Hair Restoration Specialists</p>
<p className="text-xs">11669 Santa Monica Blvd Suite 110, Los Angeles, CA 90025</p>
<p className="text-xs">Call or Text: (888) 443-8424</p>
</div>
</footer>

    </>
  );
}
