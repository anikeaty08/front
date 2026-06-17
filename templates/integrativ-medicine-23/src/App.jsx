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
      

<header className="py-10 flex justify-center">
<img alt="Agapé Integrative Medicine" className="h-16 md:h-20 object-contain" src="https://images.squarespace-cdn.com/content/v1/61e09d219ff58c6324c14ba1/32cd7aae-4c1d-469a-9fa8-9c37dc161573/Agape-Integrative-Medicine-Horizontal-Logo-Primary-Med.jpg?format=1500w"/>
</header>

<section className="px-6 py-16 md:py-24 text-center max-w-4xl mx-auto">
<h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-charcoal leading-tight">
            Your Labs Say You're Fine.<br/>
            But You Don't Feel Fine.
        </h1>
<p className="mt-6 text-lg md:text-xl font-normal text-charcoal max-w-2xl mx-auto leading-relaxed">
            Dr. Jordan and Dr. Kari help people in the Treasure Valley find the real reason they feel stuck. Not a band-aid. The root cause.
        </p>
<div className="mt-10">
<a className="inline-block bg-primary text-white font-semibold py-4 px-8 rounded-full text-lg shadow-sm hover:opacity-90 transition-opacity" href="#">
                Click Here to Book Your Free Discovery Call
            </a>
<p className="mt-4 text-xs text-gray-400">
                No obligation. 100% free. Takes less than 60 seconds to schedule.
            </p>
</div>
</section>

<section className="px-6 mb-24">
<div className="max-w-4xl mx-auto">
<img alt="Dr. Kari and Dr. Jordan" className="w-full rounded-xl shadow-sm" src="https://images.squarespace-cdn.com/content/v1/61e09d219ff58c6324c14ba1/489759c6-6e0c-4df1-a242-ef3a4d928039/dr-kari-dr-jordan-greenbelt-agape-integrative-medicine.jpg"/>
<p className="mt-4 text-xs text-center text-charcoal opacity-75">
                Dr. Jordan Robertson + Dr. Kari Robertson | Agapé Integrative Medicine | Boise, Idaho
            </p>
</div>
</section>

<section className="px-6 py-16 max-w-4xl mx-auto text-center">
<h2 className="text-base font-semibold text-charcoal mb-6">Watch This First (It's Short)</h2>
<div className="aspect-video w-full bg-zinc-50 border border-zinc-200 rounded-2xl flex items-center justify-center group cursor-pointer relative overflow-hidden">
<div className="flex flex-col items-center gap-3">
<iconify-icon className="text-primary text-6xl" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium opacity-50">VSL Video Goes Here</span>
</div>
</div>
</section>

<section className="bg-soft py-20 md:py-32 px-6">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-primary mb-10">Here's How We Help</h2>
<div className="space-y-6 text-lg text-charcoal leading-relaxed">
<p>Most doctors look at your symptoms and treat what they see.</p>
<p>We do something different.</p>
<p>We dig into the root cause of what is actually going on in your body.</p>
<p className="font-medium">Hormones. Gut health. Thyroid. Adrenal stress. Autoimmunity.</p>
<p>We run the labs most doctors skip.</p>
<p>Then we build a plan that is actually built for you.</p>
<p>Not a cookie cutter protocol. Your plan.</p>
</div>
</div>
</section>

<section className="py-20 md:py-32 px-6 max-w-5xl mx-auto">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-charcoal mb-12 text-center">We Help With Things Like...</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 text-center md:text-left">
<div className="text-lg font-medium text-primary py-2 border-b border-zinc-100">Hormone Issues</div>
<div className="text-lg font-medium text-primary py-2 border-b border-zinc-100">Thyroid Problems</div>
<div className="text-lg font-medium text-primary py-2 border-b border-zinc-100">Digestive Issues</div>
<div className="text-lg font-medium text-primary py-2 border-b border-zinc-100">Adrenal Stress</div>
<div className="text-lg font-medium text-primary py-2 border-b border-zinc-100">Autoimmunity</div>
<div className="text-lg font-medium text-primary py-2 border-b border-zinc-100">Food Allergies and Sensitivities</div>
<div className="text-lg font-medium text-primary py-2 border-b border-zinc-100">Anxiety and Depression</div>
<div className="text-lg font-medium text-primary py-2 border-b border-zinc-100">Sleep Disturbance</div>
<div className="text-lg font-medium text-primary py-2 border-b border-zinc-100">Detoxification</div>
<div className="text-lg font-medium text-primary py-2 border-b border-zinc-100">Chronic Fatigue</div>
<div className="text-lg font-medium text-primary py-2 border-b border-zinc-100">Stubborn Body Fat</div>
<div className="text-lg font-medium text-primary py-2 border-b border-zinc-100">Overall Wellness</div>
</div>
</section>

<section className="bg-primary py-24 px-6 text-white text-center">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10">Two Doctors. One Roof. One Goal.</h2>
<div className="space-y-6 text-lg md:text-xl opacity-90 leading-relaxed">
<p>Dr. Jordan holds his diplomate in functional medicine.</p>
<p>Dr. Kari is certified in chiropractic, functional medicine, and acupuncture.</p>
<p>You get both of them working on your case.</p>
<p>That does not happen anywhere else in Boise.</p>
<p>And everything they do comes from one place.</p>
<p className="font-medium text-white opacity-100">They genuinely care about getting you better.</p>
</div>
</div>
</section>

<section className="py-20 md:py-32 px-6 max-w-6xl mx-auto">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-charcoal mb-16 text-center">What Patients Are Saying</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-white border border-zinc-100 p-8 rounded-2xl shadow-sm flex flex-col justify-between">
<p className="text-lg italic text-charcoal leading-relaxed">"I've never felt more seen, heard and known by a doctor before. Dr. Kari is amazing and an absolute answer to prayer. She is putting together pieces no other doctor has connected before and I already feel like I'm getting my health back."</p>
<p className="mt-8 text-xs font-semibold tracking-widest text-primary uppercase">— Emily</p>
</div>

<div className="bg-white border border-zinc-100 p-8 rounded-2xl shadow-sm flex flex-col justify-between">
<p className="text-lg italic text-charcoal leading-relaxed">"Talking to Dr. Kari is like talking to a great friend. She truly cares and has your best interests in mind. I never knew that I could love to visit with my doctor, and I still learn something every time."</p>
<p className="mt-8 text-xs font-semibold tracking-widest text-primary uppercase">— Taylor</p>
</div>

<div className="bg-white border border-zinc-100 p-8 rounded-2xl shadow-sm flex flex-col justify-between">
<p className="text-lg italic text-charcoal leading-relaxed">"Cannot rave about Jordan enough. The amount of time he has spent with my wife on her medical needs and the in depth explanations on why things are happening a certain way makes me smile. I know she is in the best hands available."</p>
<p className="mt-8 text-xs font-semibold tracking-widest text-primary uppercase">— Phillip Wright</p>
</div>

<div className="bg-white border border-zinc-100 p-8 rounded-2xl shadow-sm flex flex-col justify-between">
<p className="text-lg italic text-charcoal leading-relaxed">"I feel like I can be honest with Dr. Kari. She listens and offers support, as well as her expertise. She helps ease my concerns and validates them while helping find real solutions."</p>
<p className="mt-8 text-xs font-semibold tracking-widest text-primary uppercase">— Tori</p>
</div>
</div>
</section>

<section className="bg-soft py-20 md:py-32 px-6">
<div className="max-w-4xl mx-auto">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-charcoal mb-16 text-center">How It Works</h2>
<div className="flex flex-col md:flex-row gap-12 text-center items-start">
<div className="flex-1 px-4">
<div className="mb-6 flex justify-center">
<span className="w-12 h-12 rounded-full border border-primary text-primary flex items-center justify-center font-semibold text-xl">1</span>
</div>
<h3 className="text-lg font-semibold mb-2">Book a free discovery call.</h3>
<p className="text-sm opacity-80 leading-relaxed">We find out where you're at and what you're dealing with.</p>
</div>
<div className="flex-1 px-4">
<div className="mb-6 flex justify-center">
<span className="w-12 h-12 rounded-full border border-primary text-primary flex items-center justify-center font-semibold text-xl">2</span>
</div>
<h3 className="text-lg font-semibold mb-2">Come in for your first appointment.</h3>
<p className="text-sm opacity-80 leading-relaxed">We run the right labs and build your personalized plan.</p>
</div>
<div className="flex-1 px-4">
<div className="mb-6 flex justify-center">
<span className="w-12 h-12 rounded-full border border-primary text-primary flex items-center justify-center font-semibold text-xl">3</span>
</div>
<h3 className="text-lg font-semibold mb-2">Start feeling like yourself again.</h3>
<p className="text-sm opacity-80 leading-relaxed">Real answers. Real progress. No guessing.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-40 px-6 text-center">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-charcoal mb-4">Ready to Find Out What's Actually Going On?</h2>
<p className="text-lg text-charcoal opacity-80 mb-10">The discovery call is free. No pressure. Just answers.</p>
<a className="inline-block bg-primary text-white font-semibold py-4 px-10 rounded-full text-lg shadow-md hover:opacity-90 transition-opacity" href="#">
                Click Here to Book Your Free Discovery Call
            </a>
<div className="mt-12 space-y-2">
<p className="text-sm text-charcoal opacity-70">Agapé Integrative Medicine | 6200 N Meeker Place, Suite 220 | Boise, ID 83713</p>
<p className="text-sm font-semibold text-charcoal">(208) 994-2931</p>
</div>
</div>
</section>

<footer className="py-12 border-t border-zinc-50 text-center">
<div className="flex flex-col items-center gap-6">
<img alt="Agapé" className="h-10 opacity-80" src="https://images.squarespace-cdn.com/content/v1/61e09d219ff58c6324c14ba1/32cd7aae-4c1d-469a-9fa8-9c37dc161573/Agape-Integrative-Medicine-Horizontal-Logo-Primary-Med.jpg?format=1500w"/>
<p className="text-xs text-charcoal opacity-50 tracking-wide uppercase">
                © 2026 Agapé Integrative Medicine. All rights reserved.
            </p>
</div>
</footer>

    </>
  );
}
