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
      

<header className="pt-12 pb-8 flex justify-center">
<img alt="Power of Life Logo" className="h-24 md:h-32 object-contain" src="https://static.wixstatic.com/media/2643f3_66bc1bff865549ff9f4d939a57f45b36~mv2.jpg/v1/fill/w_602,h_378,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/2643f3_66bc1bff865549ff9f4d939a57f45b36~mv2.jpg"/>
</header>

<section className="max-w-4xl mx-auto px-6 pt-12 pb-24 text-center">
<h1 className="text-brown text-4xl md:text-6xl font-semibold tracking-tight leading-tight mb-8">
            You Don't Have to Keep Living With Pain, Fatigue, or Guesswork.
        </h1>
<p className="accent-blue text-lg md:text-2xl font-medium mb-12 max-w-3xl mx-auto">
            Dr. Kandace Johnson has spent 20 years helping families in Victoria find the root cause of what's holding them back, and get their lives back for good.
        </p>
<div className="flex flex-col items-center gap-4">
<a className="bg-accent-blue hover:opacity-90 text-white text-lg md:text-xl font-semibold py-5 px-10 rounded-full transition-all shadow-lg" href="#">
                Click Here to Book Your Free Consultation
            </a>
<p className="text-slate-400 text-sm">
                No obligation. No pressure. Just answers.
            </p>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 pb-32">
<div className="aspect-video bg-slate-100 rounded-3xl flex items-center justify-center relative overflow-hidden group cursor-pointer border border-slate-100 shadow-sm">
<iconify-icon icon="solar:play-linear" style={{color: '#4B3832', fontSize: '5rem', strokeWidth: '1.5'}}></iconify-icon>
<div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors"></div>
</div>
<p className="text-brown italic text-center mt-6 text-lg">
            Watch: How Power of Life Helps Families Heal Naturally
        </p>
</section>

<section className="max-w-3xl mx-auto px-6 py-32 border-t border-slate-100">
<h2 className="text-brown text-3xl md:text-4xl font-semibold tracking-tight text-center mb-10">
            You might be dealing with one of these right now.
        </h2>
<div className="text-slate-600 text-xl md:text-2xl leading-relaxed text-center font-light">
            Back pain or neck pain that won't quit. Headaches that keep coming back. Fatigue that sleep doesn't fix. Digestive problems your doctor can't explain. Hormone imbalances. Anxiety or trouble sleeping. Kids who can't focus or sit still. You've tried the usual stuff. It hasn't worked. There's a reason for that.
        </div>
</section>

<section className="bg-sky-50 py-32 px-6">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-brown text-3xl md:text-5xl font-semibold tracking-tight mb-12">
                Most doctors treat the symptom. We find the cause.
            </h2>
<div className="bg-white p-10 md:p-16 rounded-3xl shadow-sm mb-12">
<p className="text-slate-700 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                    At Power of Life we use chiropractic care and Nutrition Response Testing to figure out what is actually going on in your body. Not just what hurts. But why it hurts. Once we find that, we build a plan just for you. A lot of patients feel different within weeks.
                </p>
</div>
<a className="inline-block bg-accent-blue hover:opacity-90 text-white text-lg md:text-xl font-semibold py-5 px-10 rounded-full transition-all shadow-lg" href="#">
                Click Here to Book Your Free Consultation
            </a>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-40">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1">
<img alt="Dr. Kandace Johnson" className="rounded-3xl shadow-2xl w-full max-w-md mx-auto" src="https://static.wixstatic.com/media/2643f3_16f732518495484ebdac24b2e759592f~mv2.jpg/v1/crop/x_0,y_108,w_1066,h_1071/fill/w_432,h_434,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Kandace%252520website%252520photo%2525202020_e.jpg"/>
</div>
<div className="order-1 md:order-2">
<h2 className="text-brown text-3xl md:text-4xl font-semibold tracking-tight mb-6">
                    Dr. Kandace Johnson, D.C.
                </h2>
<div className="text-slate-600 text-lg space-y-6 leading-relaxed">
<p>Dr. Kandace knows what it feels like to be stuck. She dealt with IBS and migraines for years. She tried the conventional route. It didn't get her there. So she went deeper.</p>
<p>She studied the nervous system. She got her Doctorate in Chiropractic and an Advanced Certification in Nutrition Response Testing. She fixed her own health using the exact methods she uses with patients today. That was 20 years ago. She hasn't looked back.</p>
<p>She built Power of Life so families in Victoria could have access to that same kind of care.</p>
</div>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 py-32 border-t border-slate-100">
<h2 className="text-brown text-3xl md:text-4xl font-semibold tracking-tight text-center mb-12">
            Hear it from a real patient.
        </h2>
<div className="aspect-video rounded-3xl overflow-hidden shadow-2xl bg-slate-200">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="w-full h-full" frameborder="0" src="https://www.youtube.com/embed/ULxPg4kODMg" title="Patient Testimonial">
</iframe>
</div>
</section>

<section className="bg-warm py-32 px-6">
<div className="max-w-6xl mx-auto">
<h2 className="text-brown text-3xl md:text-4xl font-semibold tracking-tight text-center mb-16">
                Real people. Real results.
            </h2>
<div className="grid md:grid-cols-3 gap-8 mb-16">

<div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
<p className="text-slate-600 italic leading-relaxed text-lg mb-8">
                        "After 4 months of adjustments and nutrition response testing, I have been able to stop taking my medication. I am free of anxiety and insomnia, lost weight, and feel great."
                    </p>
<p className="text-brown text-xs font-semibold tracking-widest uppercase">
                        — L.B., Power of Life Patient
                    </p>
</div>

<div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
<p className="text-slate-600 italic leading-relaxed text-lg mb-8">
                        "Power of Life and Dr. Kandace have taken the time to get to know me and my health goals. My nutrition appointments, along with the chiropractic care, have quite literally changed the way I feel."
                    </p>
<p className="text-brown text-xs font-semibold tracking-widest uppercase">
                        — Jessica S., Power of Life Patient
                    </p>
</div>

<div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
<p className="text-slate-600 italic leading-relaxed text-lg mb-8">
                        "I have experienced significant improvement in my overall health, reduction and elimination of aches and pains, and elimination of medications including cholesterol medication. What a great feeling."
                    </p>
<p className="text-brown text-xs font-semibold tracking-widest uppercase">
                        — J.J., Victoria
                    </p>
</div>
</div>
<div className="flex flex-col items-center gap-3">
<div className="accent-blue flex items-center gap-2 font-medium">
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<span>98% of patients recommend Power of Life. 35 reviews.</span>
</div>
<p className="accent-blue text-sm uppercase tracking-widest font-semibold">Featured in Victoria Living Magazine</p>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-40 text-center">
<h2 className="text-brown text-4xl md:text-5xl font-semibold tracking-tight mb-8">
            Ready to feel like yourself again?
        </h2>
<p className="text-slate-500 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            It starts with one conversation. Book your free consultation with Dr. Kandace today. No pressure. Just a real look at what's going on and whether we can help. If we can't, we'll point you to someone who can.
        </p>
<div className="mb-24">
<a className="bg-accent-blue hover:opacity-90 text-white text-lg md:text-xl font-semibold py-5 px-10 rounded-full transition-all shadow-lg" href="#">
                Click Here to Book Your Free Consultation
            </a>
</div>
<footer className="pt-16 border-t border-slate-100 text-slate-400 text-xs md:text-sm">
<p className="font-medium text-slate-500 mb-2">Power of Life Alternative &amp; Holistic Health</p>
<p className="mb-4">1700 Stieger Lake Ln, Victoria, MN 55386</p>
<p>952-443-9000 | frontdesk@poweroflifehealth.com</p>
</footer>
</section>

    </>
  );
}
