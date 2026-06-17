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
      

<header className="pt-12 pb-20 px-6">
<div className="max-w-screen-xl mx-auto flex flex-col items-center text-center">
<img alt="Partners Dentures &amp; Implants" className="h-16 md:h-20 mb-12 object-contain" src="https://lirp.cdn-website.com/10263d3e/dms3rep/multi/opt/dentures-near-me-woodlands-tx-logo-1920w.png"/>
<h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 max-w-4xl leading-tight">
                Get All New Teeth in One Day at Partners Dentures &amp; Implants
            </h1>
<p className="mt-6 text-base md:text-lg text-slate-600 max-w-2xl leading-relaxed">
                Dr. Richard Wilson and his team in The Woodlands, TX have helped hundreds of patients eat, smile, and speak with confidence again. Watch the short video below and book your free consultation today.
            </p>
<a className="mt-10 w-full md:w-auto px-10 py-5 bg-[#F2623E] hover:bg-[#e05633] text-white font-semibold rounded-full transition-all transform hover:scale-105 text-center shadow-lg shadow-orange-200" href="#">
                Click Here to Book Your Free Consultation
            </a>
</div>
</header>

<section className="pb-24 px-6">
<div className="max-w-4xl mx-auto">
<p className="text-center text-sm font-medium text-slate-500 mb-4 uppercase tracking-widest">Watch This First</p>
<div className="video-aspect w-full bg-[#1e293b] rounded-2xl flex items-center justify-center cursor-pointer group relative overflow-hidden shadow-2xl">
<div className="absolute inset-0 bg-gradient-to-tr from-slate-900 to-slate-800 opacity-90"></div>
<div className="z-10 bg-white/10 p-6 rounded-full backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-white text-5xl md:text-6xl" icon="solar:play-bold"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-16 bg-slate-50 border-y border-slate-100 px-6">
<div className="max-w-screen-xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
<div className="flex flex-col items-center">
<iconify-icon className="text-[#3686C6] text-4xl mb-4" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-sm md:text-base text-slate-700 font-normal leading-relaxed">
<span className="font-semibold block mb-1">In-House Digital Lab.</span> 
                        Everything is made right here. No delays. No third parties.
                    </p>
</div>
<div className="flex flex-col items-center">
<iconify-icon className="text-[#3686C6] text-4xl mb-4" icon="solar:calendar-date-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-sm md:text-base text-slate-700 font-normal leading-relaxed">
<span className="font-semibold block mb-1">Same-Day Service Available.</span> 
                        In some cases you leave with new teeth the same day.
                    </p>
</div>
<div className="flex flex-col items-center">
<iconify-icon className="text-[#3686C6] text-4xl mb-4" icon="solar:medal-ribbon-star-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-sm md:text-base text-slate-700 font-normal leading-relaxed">
<span className="font-semibold block mb-1">#1 Digital Design Center in TX.</span> 
                        Dr. Wilson holds a Mastership with the ICOI.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-screen-xl mx-auto">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center text-slate-900 mb-16">Real Patients. Real Results.</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 bg-white border-l-4 border-[#3686C6] shadow-sm rounded-r-xl flex flex-col justify-between hover:shadow-md transition-shadow">
<p className="italic text-slate-600 leading-relaxed mb-6">"My teeth are beautiful. They fit well. I look good and I am just so glad. Thank you thank you thank you Dr. Wilson and staff."</p>
<div className="text-sm font-semibold text-[#3686C6] uppercase tracking-wide">— Tina Knox, Google Review</div>
</div>

<div className="p-8 bg-white border-l-4 border-[#3686C6] shadow-sm rounded-r-xl flex flex-col justify-between hover:shadow-md transition-shadow">
<p className="italic text-slate-600 leading-relaxed mb-6">"Very compassionate. Takes the time to listen to your concerns and worries. Explains his recommendations. And VERY reasonably priced."</p>
<div className="text-sm font-semibold text-[#3686C6] uppercase tracking-wide">— Tammy Caradine, Facebook Review</div>
</div>

<div className="p-8 bg-white border-l-4 border-[#3686C6] shadow-sm rounded-r-xl flex flex-col justify-between hover:shadow-md transition-shadow">
<p className="italic text-slate-600 leading-relaxed mb-6">"Dr. Wilson and his team get a 5 star rating. My second set of dentures. The first set 4 years ago and they were great with no problems. This set is even better."</p>
<div className="text-sm font-semibold text-[#3686C6] uppercase tracking-wide">— Cotton Wells, Google Review</div>
</div>
</div>
</div>
</section>

<section className="pb-24 px-6">
<div className="max-w-4xl mx-auto">
<h2 className="text-xl md:text-2xl font-semibold tracking-tight text-center text-slate-900 mb-10">More From Our Patients</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="video-aspect w-full bg-slate-800 rounded-xl flex items-center justify-center shadow-lg group cursor-pointer overflow-hidden relative">
<div className="absolute inset-0 bg-slate-900 opacity-20 group-hover:opacity-10 transition-opacity"></div>
<iconify-icon className="text-white text-5xl opacity-80" icon="solar:play-circle-linear"></iconify-icon>
</div>
<div className="video-aspect w-full bg-slate-800 rounded-xl flex items-center justify-center shadow-lg group cursor-pointer overflow-hidden relative">
<div className="absolute inset-0 bg-slate-900 opacity-20 group-hover:opacity-10 transition-opacity"></div>
<iconify-icon className="text-white text-5xl opacity-80" icon="solar:play-circle-linear"></iconify-icon>
</div>
</div>
<p className="text-center text-xs text-slate-400 mt-6 tracking-wide italic">Video testimonials coming soon</p>
</div>
</section>

<section className="py-24 px-6 bg-slate-50">
<div className="max-w-2xl mx-auto text-center">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-8">About Dr. Richard Wilson</h2>
<div className="space-y-6 text-slate-600 leading-relaxed text-base md:text-lg font-light">
<p>Dr. Wilson has been serving The Woodlands and Conroe area for years.</p>
<p>He graduated from Howard University College of Dentistry.</p>
<p>He holds fellowships in both the American Academy of Implant Prosthodontics and the Academy of General Dentistry.</p>
<p>He earned his Mastership with the International Congress of Oral Implantologists. <span className="text-slate-900 font-medium italic">That is a pretty rare credential.</span></p>
<p>His in-house digital lab means your treatment never leaves the office. No waiting on a third-party lab. No delays.</p>
<p>He and his team treat every patient like family. You can see that in the reviews.</p>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#3686C6] text-white">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Ready to Get Your Smile Back?</h2>
<p className="text-lg md:text-xl opacity-90 mb-10 font-light">Book a free consultation with Dr. Wilson today. No pressure. No hidden fees. Just a conversation about what's possible for you.</p>
<a className="inline-block w-full md:w-auto px-10 py-5 bg-[#F2623E] hover:bg-[#e05633] text-white font-semibold rounded-full transition-all shadow-xl shadow-blue-900/20 text-center" href="#">
                Click Here to Book Your Free Consultation
            </a>
<div className="mt-12 text-xs md:text-sm text-blue-100/80 leading-loose space-y-1">
<p className="font-medium text-white">Partners Dentures &amp; Implants</p>
<p>9420 College Park Drive #230 · The Woodlands, TX 77384</p>
<p>(936) 756-9015</p>
</div>
</div>
</section>

<footer className="py-8 px-6 border-t border-slate-100">
<div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center">
<p className="text-lg font-semibold tracking-tighter text-[#3686C6]">PARTNERS</p>
</div>
<div className="text-xs text-slate-500 font-normal">
                © 2026 Partners Dentures &amp; Implants. All rights reserved.
            </div>
<div className="flex items-center text-sm font-semibold text-slate-700">
<iconify-icon className="mr-2 text-[#3686C6]" icon="solar:phone-linear"></iconify-icon>
                (936) 756-9015
            </div>
</div>
</footer>

    </>
  );
}
