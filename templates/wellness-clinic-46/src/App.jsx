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
      

<header className="bg-violet-brand text-white pt-8 pb-24 px-6 text-center">
<div className="mb-12 flex justify-center">
<div className="bg-white px-6 py-3 rounded-xl shadow-sm">
<img alt="World Health Wellness Logo" className="h-10 md:h-12 w-auto object-contain" src="https://cdcssl.ibsrv.net/ibimg/smb/1440x576_80/webmgr/03/v/c/images/Whwlogo1.png.webp?e1b9212cf4cf688e42dc537b0bf0ec4b"/>
</div>
</div>
<div className="max-w-4xl mx-auto">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight mb-6">
                Your Body Is Trying to Tell You Something. We Know How to Listen.
            </h1>
<p className="text-base md:text-xl font-normal text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                Dr. Sadat Smith helps people in the Ocoee area find the real reason they're in pain, exhausted, or just not feeling right. No guesswork. No rushed appointments. Real answers.
            </p>
<a className="bg-orange-cta hover-orange-cta text-white font-semibold text-lg py-4 px-10 rounded-full transition-all inline-block shadow-lg" href="#">
                Click Here to Book Your Consultation
            </a>
</div>
</header>

<section className="py-20 px-6 bg-white">
<div className="max-w-4xl mx-auto text-center">
<span className="text-xs font-semibold text-violet-brand tracking-widest uppercase mb-6 block">WATCH THIS FIRST</span>
<div className="relative aspect-video bg-violet-brand rounded-2xl flex flex-col items-center justify-center group cursor-pointer shadow-2xl overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
<div className="relative z-10 w-20 h-20 bg-white/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform backdrop-blur-sm">
<iconify-icon className="text-white text-4xl" icon="solar:play-bold"></iconify-icon>
</div>
<p className="relative z-10 text-white font-medium mt-4 tracking-tight">Video coming soon</p>
</div>
<p className="mt-6 text-slate-500 text-sm">
                Dr. Sadat walks you through exactly how this works and what you can expect.
            </p>
</div>
</section>

<section className="py-24 px-6 bg-slate-50">
<div className="max-w-3xl mx-auto text-center space-y-8">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-violet-brand">
                Most doctors tell you everything looks fine.
            </h2>
<div className="text-lg md:text-xl text-slate-600 space-y-6 font-normal leading-relaxed">
<p>But you still don't feel right.</p>
<p>You're tired. You're in pain. Your body is off.</p>
<p>And nobody has given you a real answer yet.</p>
<p className="text-violet-brand font-semibold">That changes here.</p>
</div>
<div className="pt-8">
<a className="bg-orange-cta hover-orange-cta text-white font-semibold py-3 px-8 rounded-full transition-all inline-block shadow-md" href="#">
                    Book Your Consultation
                </a>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white overflow-hidden">
<div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
<div className="space-y-6 order-2 md:order-1">
<h2 className="text-3xl font-semibold tracking-tight text-violet-brand">
                    26 Years of Getting to the Root of It
                </h2>
<div className="space-y-4 text-base md:text-lg text-slate-600 leading-relaxed">
<p>Dr. Sadat Smith is a Chiropractic Neurologist and Functional Medicine Practitioner based in Ocoee, FL.</p>
<p>He runs advanced nerve and electrodiagnostic testing in-house.</p>
<p>He does GI, allergy, and full blood chemistry analysis.</p>
<p>He treats the whole picture. Not just the symptom.</p>
<p className="font-semibold text-slate-900">250 five-star Google reviews. And counting.</p>
</div>
</div>
<div className="order-1 md:order-2 flex justify-center">
<div className="relative">
<div className="absolute -inset-4 bg-orange-cta/10 rounded-full blur-2xl"></div>
<div className="relative w-64 h-80 md:w-80 md:h-[450px] overflow-hidden rounded-2xl shadow-xl border border-slate-100">
<img alt="Dr. Sadat Smith" className="w-full h-full object-cover" src="https://cdcssl.ibsrv.net/ibimg/smb/285x425_80/webmgr/03/v/c/CLIENT/09c532_ad1d19c19e7a4511b396976c48ef1940.png.webp?0266efafd983a39720e2e8f576c56a5f"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-violet-brand">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white text-center mb-16">
                What Patients Are Saying
            </h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-orange-cta">
<div className="flex gap-1 mb-4">
<iconify-icon className="text-orange-cta text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-orange-cta text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-orange-cta text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-orange-cta text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-orange-cta text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-700 italic mb-6 leading-relaxed">
                        "Dr. Smith Always provides great service, answers all my questions and most importantly gets me feeling better!!!"
                    </p>
<p className="font-semibold text-violet-brand">— Cassandra Rivero</p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-orange-cta">
<div className="flex gap-1 mb-4">
<iconify-icon className="text-orange-cta text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-orange-cta text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-orange-cta text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-orange-cta text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-orange-cta text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-700 italic mb-6 leading-relaxed">
                        "After being hit by a semi truck, Dr. Sadat was the only doctor able to give me any relief. Every session I left feeling amazing..."
                    </p>
<p className="font-semibold text-violet-brand">— Realtor Reneka</p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-orange-cta">
<div className="flex gap-1 mb-4">
<iconify-icon className="text-orange-cta text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-orange-cta text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-orange-cta text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-orange-cta text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-orange-cta text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-700 italic mb-6 leading-relaxed">
                        "Dr. Smith is amazing and has been instrumental in helping me minimize the aches and pains that come with life's bumps and bruises."
                    </p>
<p className="font-semibold text-violet-brand">— Latonia Green</p>
</div>
</div>
<div className="mt-16 text-center">
<a className="bg-orange-cta hover-orange-cta text-white font-semibold py-3 px-8 rounded-full transition-all inline-block" href="#">
                    Book Your Consultation
                </a>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-5xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-violet-brand text-center mb-16">
                Here's How It Works
            </h2>
<div className="grid md:grid-cols-3 gap-12">
<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-violet-brand font-semibold mb-6">1</div>
<h3 className="text-xl font-semibold mb-3">Book your consultation.</h3>
<p className="text-slate-500 text-sm">Takes 60 seconds online or by phone.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-violet-brand font-semibold mb-6">2</div>
<h3 className="text-xl font-semibold mb-3">Expert analysis.</h3>
<p className="text-slate-500 text-sm">Dr. Sadat reviews your history and runs the right tests.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-violet-brand font-semibold mb-6">3</div>
<h3 className="text-xl font-semibold mb-3">You get a real plan.</h3>
<p className="text-slate-500 text-sm">Built for your body. Not a generic template.</p>
</div>
</div>
</div>
</section>

<footer className="bg-violet-brand text-white py-24 px-6 text-center">
<div className="max-w-4xl mx-auto space-y-10">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
                Ready to Finally Feel Like Yourself Again?
            </h2>
<p className="text-lg md:text-xl text-slate-300 font-normal">
                Spots are limited. Book your consultation today.
            </p>
<div className="pt-4">
<a className="bg-orange-cta hover-orange-cta text-white font-semibold text-lg py-4 px-12 rounded-full transition-all inline-block shadow-2xl" href="#">
                    Click Here to Book Your Consultation
                </a>
</div>
<div className="pt-12 text-slate-400 text-xs space-y-4">
<div className="bg-white/5 inline-block px-4 py-2 rounded-lg">
<img alt="Logo" className="h-6 w-auto grayscale brightness-200" src="https://cdcssl.ibsrv.net/ibimg/smb/1440x576_80/webmgr/03/v/c/images/Whwlogo1.png.webp?e1b9212cf4cf688e42dc537b0bf0ec4b"/>
</div>
<p>2741 Maguire Road, Ocoee, FL 34761</p>
<p>(407) 574-8542</p>
</div>
</div>
</footer>

    </>
  );
}
