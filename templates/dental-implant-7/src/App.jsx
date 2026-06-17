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
      

<nav className="w-full py-6 px-6 md:px-12 bg-white">
<div className="max-w-7xl mx-auto">
<img alt="Deluxe Dentistry" className="h-10 md:h-12" src="https://irp.cdn-website.com/1e56079d/dms3rep/multi/Dentistry-LogoFullColor.svg"/>
</div>
</nav>

<section className="bg-[#4E3079] text-white py-20 md:py-32 px-6">
<div className="max-w-4xl mx-auto text-center">
<h1 className="text-3xl md:text-6xl font-semibold tracking-tight leading-tight mb-8">
                Missing Teeth Are Costing You More Than You Think.
            </h1>
<p className="text-base md:text-xl font-normal opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
                Deluxe Dentistry helps Mercer County patients get their smile, confidence, and life back. With same-day implant options and a team that actually listens.
            </p>
<a className="inline-block w-full md:w-auto bg-white text-[#4E3079] font-semibold py-5 px-10 rounded-full text-base transition-transform hover:scale-105 shadow-lg" href="tel:6094001393">
                Click Here to Book Your Consultation
            </a>
</div>
</section>

<section className="bg-white py-24 px-6">
<div className="max-w-5xl mx-auto text-center">
<h2 className="text-xl font-semibold mb-8 text-zinc-800 tracking-tight">Watch: Real Patients. Real Results.</h2>
<div className="aspect-video w-full bg-zinc-100 rounded-2xl flex items-center justify-center border border-zinc-200 shadow-inner relative overflow-hidden group">
<iconify-icon className="text-6xl text-[#4E3079] opacity-80 group-hover:scale-110 transition-transform cursor-pointer" icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="absolute inset-0 bg-zinc-900/5 pointer-events-none"></div>
</div>
<p className="text-sm text-zinc-500 mt-6 mb-10">
                Hear directly from patients who came in nervous and left with a brand new smile.
            </p>
<a className="inline-block w-full md:w-auto bg-[#4E3079] text-white font-semibold py-5 px-10 rounded-full text-base transition-transform hover:scale-105 shadow-md" href="tel:6094001393">
                Click Here to Book Your Consultation
            </a>
</div>
</section>

<section className="bg-zinc-50 py-24 px-6 border-y border-zinc-100">
<div className="max-w-6xl mx-auto">
<h2 className="text-2xl md:text-3xl font-semibold text-center mb-16 tracking-tight">What Patients Are Saying</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

<div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-zinc-100 flex flex-col justify-between">
<p className="text-lg text-zinc-700 italic mb-8 leading-relaxed">
                        "I recommend this place to anyone looking for a dentist!"
                    </p>
<p className="text-[#4E3079] font-semibold text-sm tracking-wide uppercase">
                        — Barbara, Dental Implant Patient
                    </p>
</div>

<div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-zinc-100 flex flex-col justify-between">
<p className="text-lg text-zinc-700 italic mb-8 leading-relaxed">
                        "For the past 3 years, my family has trusted Deluxe Dentistry with our smiles."
                    </p>
<p className="text-[#4E3079] font-semibold text-sm tracking-wide uppercase">
                        — Irene, Family Patient
                    </p>
</div>
</div>
<p className="text-center text-zinc-400 font-medium tracking-wide text-sm uppercase">
                Real patients. Real results. Real confidence.
            </p>
</div>
</section>

<section className="bg-white py-24 px-6">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1">
<img alt="Dr. Maxim Godko" className="rounded-2xl w-full grayscale-[20%] hover:grayscale-0 transition-all duration-500 shadow-xl" src="https://lirp.cdn-website.com/1e56079d/dms3rep/multi/opt/Dr.+Maxim+Godko-1920w.png"/>
</div>
<div className="order-1 md:order-2">
<h2 className="text-2xl md:text-4xl font-semibold mb-8 tracking-tight leading-tight">
                    All Under One Roof.<br/>No Referrals. No Runaround.
                </h2>
<div className="space-y-6 text-zinc-600 leading-relaxed text-base md:text-lg">
<p>Dr. Maxim Godko is a general dentist, implant surgeon, cosmetic dentist, and IV sedation specialist.</p>
<p>Most practices send you to three different offices. <strong>Deluxe Dentistry handles everything in one place.</strong></p>
<p>You see the same trusted team from your first visit to your final result.</p>
<p>That is pretty rare. And it matters.</p>
</div>
</div>
</div>
</section>

<section className="bg-[#4E3079] text-white py-24 px-6">
<div className="max-w-6xl mx-auto">
<h2 className="text-2xl md:text-3xl font-semibold text-center mb-20 tracking-tight">Here's What a Consultation Includes</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

<div className="flex flex-col items-center">
<div className="mb-6 opacity-80">
<iconify-icon className="text-5xl" icon="solar:calendar-date-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="text-lg font-normal leading-snug max-w-xs">
                        A full exam with no pressure and no upsells.
                    </p>
</div>

<div className="flex flex-col items-center">
<div className="mb-6 opacity-80">
<iconify-icon className="text-5xl" icon="solar:smile-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="text-lg font-normal leading-snug max-w-xs">
                        A clear explanation of your best implant options.
                    </p>
</div>

<div className="flex flex-col items-center">
<div className="mb-6 opacity-80">
<iconify-icon className="text-5xl" icon="solar:bill-list-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="text-lg font-normal leading-snug max-w-xs">
                        A real plan with real numbers so you can decide with confidence.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-white py-24 md:py-32 px-6 text-center">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl md:text-5xl font-semibold mb-8 tracking-tight leading-tight text-zinc-900">
                Your New Smile Starts With One Phone Call.
            </h2>
<p className="text-base md:text-lg text-zinc-600 mb-12 leading-relaxed">
                Deluxe Dentistry is open 6 days a week with morning, afternoon, and evening hours.<br className="hidden md:block"/>
                Lawrenceville, NJ. Easy to get to from anywhere in Mercer County.<br/>
                No pressure. Just answers.
            </p>
<a className="inline-block w-full md:w-auto bg-[#4E3079] text-white font-semibold py-6 px-12 rounded-full text-lg transition-all hover:shadow-xl hover:-translate-y-1 mb-10" href="tel:6094001393">
                Click Here to Book Your Consultation
            </a>
<div className="text-xs text-zinc-400 leading-relaxed uppercase tracking-widest font-medium">
                Deluxe Dentistry — 100 Federal City Rd, Suite 104B, Lawrenceville, NJ 08648 — (609) 400-1393
            </div>
</div>
</section>

<footer className="bg-zinc-950 text-white py-12 px-6 border-t border-zinc-900">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="invert brightness-0 grayscale">
<img alt="Deluxe Dentistry" className="h-8" src="https://irp.cdn-website.com/1e56079d/dms3rep/multi/Dentistry-LogoFullColor.svg"/>
</div>
<div className="text-center md:text-right text-xs text-zinc-500 leading-relaxed tracking-tight">
<p>(609) 400-1393</p>
<p>100 Federal City Rd, Suite 104B</p>
<p>Lawrenceville, NJ 08648</p>
</div>
</div>
</footer>

    </>
  );
}
