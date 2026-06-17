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
      

<header className="pt-20 pb-32 px-6">
<div className="max-w-screen-xl mx-auto flex flex-col items-center">
<img alt="Restorative Wellness Center" className="h-16 mb-20 object-contain" src="https://images.squarespace-cdn.com/content/v1/578c1e8303596ee7136cbcaf/1614881060581-JR8Z0T68EW1747VZZNMX/RWC_white.png"/>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-center max-w-4xl leading-tight">
                You've Tried Everything. You Still Don't Feel Right. There's a Reason For That.
            </h1>
<p className="text-lg md:text-xl gold-text text-center mt-8 max-w-2xl font-normal">
                Restorative Wellness Center finds the root cause. Not just the symptom. Book a free consultation with Dr. Kevin Turner in Exton, PA.
            </p>
<a className="mt-12 gold-bg text-black px-10 py-5 rounded-full text-base font-semibold transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-[#D4AF37]/20" href="#">
                Click Here to Book Your Consultation
            </a>
</div>
</header>

<section className="pb-32 px-6">
<div className="max-w-5xl mx-auto">
<div className="vsl-placeholder aspect-video rounded-2xl flex items-center justify-center group cursor-pointer overflow-hidden relative">
<div className="absolute inset-0 bg-zinc-900/10 group-hover:bg-zinc-900/0 transition-colors"></div>
<div className="flex flex-col items-center gap-4 z-10">
<iconify-icon className="gold-text" height="64" icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}} width="64"></iconify-icon>
<span className="text-zinc-500 uppercase tracking-widest text-xs font-semibold">VSL Video Goes Here</span>
</div>
</div>
</div>
</section>

<div className="bg-zinc-900/50 border-y border-zinc-800 py-8 px-6">
<p className="text-center text-xs md:text-sm tracking-widest font-medium uppercase text-zinc-300">
            100% Recommended on Facebook <span className="mx-3 text-zinc-600">·</span> 9+ Years Serving Chester County <span className="mx-3 text-zinc-600">·</span> Chiropractic, Functional Medicine, and Primary Care Under One Roof
        </p>
</div>

<section className="py-32 px-6">
<div className="max-w-3xl mx-auto text-center">
<h2 className="gold-text text-xs font-semibold tracking-[0.2em] uppercase mb-12">Why Patients Come To Us</h2>
<div className="space-y-8 text-lg md:text-xl font-light leading-relaxed">
<p>Most doctors treat the symptom. We find what's actually causing it.</p>
<p>
                    Dr. Kevin Turner has spent over 1,000 hours training in functional medicine on top of his chiropractic degree. 
                    Dr. Ashley Turner applies nutrition and supplement plans based on your actual genetic profile. 
                    Dr. Mike Warner brings 25+ years of personal family medicine. 
                    <span className="block mt-4 text-zinc-400">No rush. No insurance hoops.</span>
</p>
<p className="font-normal">This is whole-person care. Root cause first. Always.</p>
</div>
</div>
</section>

<section className="py-32 px-6 bg-zinc-950">
<div className="max-w-5xl mx-auto">
<h2 className="gold-text text-xs font-semibold tracking-[0.2em] uppercase mb-16 text-center">We Help With Conditions Like These</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-6 text-center md:text-left border-y border-zinc-900 py-16">
<div className="space-y-6 text-base tracking-wide">
<div>Chronic fatigue</div>
<div>Digestive disorders</div>
<div>Autoimmune disease</div>
<div>Hormonal imbalances</div>
<div>Thyroid disorders</div>
<div>Lyme disease</div>
<div>Anxiety and depression</div>
</div>
<div className="space-y-6 text-base tracking-wide">
<div>Migraines</div>
<div>Adrenal disorders</div>
<div>Skin conditions</div>
<div>Sleep disorders</div>
<div>Mold and biotoxin illness</div>
<div>Allergies</div>
<div>Diabetes and metabolic syndrome</div>
</div>
</div>
<p className="mt-12 text-center text-zinc-400 italic text-sm">
                If you've seen doctors and still have no explanation for why you don't feel well... it's probably time to go deeper.
            </p>
</div>
</section>

<section className="py-32 px-6">
<div className="max-w-6xl mx-auto">
<h2 className="gold-text text-xs font-semibold tracking-[0.2em] uppercase mb-16 text-center">Hear From Patients</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="gold-border border rounded-2xl overflow-hidden aspect-video">
<iframe allowfullscreen="" className="w-full h-full" frameborder="0" src="https://www.youtube.com/embed/cWhmxg0828A"></iframe>
</div>
<div className="gold-border border rounded-2xl overflow-hidden aspect-video">
<iframe allowfullscreen="" className="w-full h-full" frameborder="0" src="https://www.youtube.com/embed/J_oUCWGZu4U"></iframe>
</div>
</div>
</div>
</section>

<section className="py-32 px-6">
<div className="max-w-6xl mx-auto">
<h2 className="gold-text text-xs font-semibold tracking-[0.2em] uppercase mb-16 text-center">What Patients Are Saying</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-zinc-900/30 gold-border-subtle border p-10 rounded-2xl flex flex-col h-full">
<iconify-icon className="gold-text mb-6 opacity-50" height="32" icon="solar:quotes-linear" width="32"></iconify-icon>
<p className="text-base leading-relaxed mb-8 flex-grow">"Her pediatricians and other providers got us nowhere and made her worse. Thanks to Dr. Kevin she finally got properly diagnosed and is on the mend. He is truly a miracle worker for our kiddo."</p>
<div className="text-xs tracking-wider uppercase gold-text font-semibold">— Amber S., Facebook Review</div>
</div>

<div className="bg-zinc-900/30 gold-border-subtle border p-10 rounded-2xl flex flex-col h-full">
<iconify-icon className="gold-text mb-6 opacity-50" height="32" icon="solar:quotes-linear" width="32"></iconify-icon>
<p className="text-base leading-relaxed mb-8 flex-grow">"For the first time, he gave me hope that I won't have to feel awful the rest of my life. Through something I have never thought possible, he was able to relieve my severe nausea."</p>
<div className="text-xs tracking-wider uppercase gold-text font-semibold">— L.R., Downingtown PA</div>
</div>

<div className="bg-zinc-900/30 gold-border-subtle border p-10 rounded-2xl flex flex-col h-full">
<iconify-icon className="gold-text mb-6 opacity-50" height="32" icon="solar:quotes-linear" width="32"></iconify-icon>
<p className="text-base leading-relaxed mb-8 flex-grow">"After three weeks of being in pain I had a diagnosis. After the very first visit I finally felt some relief."</p>
<div className="text-xs tracking-wider uppercase gold-text font-semibold">— C.F., Malvern PA</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
<div className="w-full md:w-2/5">
<img alt="Dr. Kevin Turner" className="w-full rounded-2xl grayscale hover:grayscale-0 transition-all duration-700" src="https://images.squarespace-cdn.com/content/v1/578c1e8303596ee7136cbcaf/dc9c355c-061a-4a60-9ec0-5cd0c46c6605/RS+BN2A1518.jpg"/>
</div>
<div className="w-full md:w-3/5 space-y-6">
<h2 className="gold-text text-xs font-semibold tracking-[0.2em] uppercase">Your Provider</h2>
<h3 className="text-2xl font-semibold tracking-tight">Dr. Kevin Turner, DC, CFMP</h3>
<div className="space-y-4 text-zinc-300 leading-relaxed text-base font-light">
<p>Dr. Kevin founded Restorative Wellness Center to do medicine differently. He's a chiropractor and certified functional medicine practitioner with 1,000+ hours of specialized training.</p>
<p>He has helped patients with chronic illness, autoimmune disease, gut disorders, Lyme disease, and conditions that left them feeling hopeless inside the conventional system.</p>
<p>He's also a husband, father of three girls, and small-scale farmer in Downingtown, PA. He gets it. He lives it.</p>
</div>
</div>
</div>
</section>

<section className="py-40 px-6 border-t border-zinc-900">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">Ready to Find the Root Cause?</h2>
<p className="text-xl gold-text mb-12 font-light">Book your consultation with Dr. Kevin Turner. No insurance required. No rush. Just real answers.</p>
<a className="inline-block gold-bg text-black px-12 py-6 rounded-full text-lg font-semibold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[#D4AF37]/20" href="#">
                Click Here to Book Your Consultation
            </a>
<div className="mt-16 text-zinc-500 text-sm flex flex-col gap-2 font-light">
<span>161 Dowlin Forge Road, Exton, PA 19341</span>
<span>610-458-0500</span>
<span>info@restorativewellnesscenters.com</span>
</div>
</div>
</section>

<footer className="py-12 border-t border-zinc-900 px-6">
<p className="text-center text-zinc-600 text-xs tracking-widest uppercase">
            © Restorative Wellness Center. All rights reserved.
        </p>
</footer>

    </>
  );
}
