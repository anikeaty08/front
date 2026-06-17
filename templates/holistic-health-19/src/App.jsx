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
      

<header className="py-8 flex justify-center border-b border-zinc-100">
<img alt="Innovative Health Logo" className="h-12 w-auto" src="https://www.innovativehealthdallas.com/wp-content/uploads/2019/08/innovative-logo.png"/>
</header>

<section className="max-w-4xl mx-auto px-6 py-16 md:py-24 text-center">
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 leading-tight">
            Your Labs Say You're Fine.<br className="hidden md:block"/> But You Don't Feel Fine.
        </h1>
<p className="mt-6 text-lg md:text-xl text-zinc-500 font-normal max-w-2xl mx-auto">
            At Innovative Health &amp; Wellness Group in Dallas, we find the root cause of what's actually going on, and build a plan around you, not a symptom checklist.
        </p>
<div className="mt-10">
<a className="inline-block w-full md:w-auto bg-[#0B9444] text-white font-medium text-lg px-8 py-4 rounded-lg hover:bg-[#097d39] transition-colors duration-200 shadow-sm" href="#">
                Click Here to Book Your Consultation
            </a>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 pb-20">
<div className="relative aspect-video bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer flex items-center justify-center border border-zinc-200">

<div className="absolute inset-0 bg-zinc-800 flex items-center justify-center">
<iconify-icon className="text-white opacity-80" icon="solar:play-circle-linear" strokeWidth="1.5" style={{fontSize: '5rem'}}></iconify-icon>
</div>

</div>
<p className="mt-6 text-sm text-zinc-500 text-center max-w-3xl mx-auto italic">
            Watch Dr. Erin explain how the Innovative Health approach works, and why so many Dallas patients finally got answers here after years of being told nothing was wrong.
        </p>
</section>

<section className="bg-zinc-50 py-16">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
<div className="flex flex-col items-center">
<iconify-icon className="text-[#0B9444] mb-4" icon="solar:leaf-linear" strokeWidth="1.5" style={{fontSize: '2rem'}}></iconify-icon>
<p className="text-base font-medium text-zinc-800">We treat the root cause, not just the symptoms.</p>
</div>
<div className="flex flex-col items-center">
<iconify-icon className="text-[#0B9444] mb-4" icon="solar:user-rounded-linear" strokeWidth="1.5" style={{fontSize: '2rem'}}></iconify-icon>
<p className="text-base font-medium text-zinc-800">Personalized care for your body, your history, your goals.</p>
</div>
<div className="flex flex-col items-center">
<iconify-icon className="text-[#0B9444] mb-4" icon="solar:heart-pulse-linear" strokeWidth="1.5" style={{fontSize: '2rem'}}></iconify-icon>
<p className="text-base font-medium text-zinc-800">Traditional medicine and holistic methods, together.</p>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 max-w-3xl mx-auto px-6 text-center">
<h2 className="text-3xl font-semibold tracking-tight mb-12">This is for you if...</h2>
<div className="space-y-8 text-lg text-zinc-600">
<p>You've been told your bloodwork looks normal but you still feel terrible.</p>
<p>You're dealing with fatigue, brain fog, weight shifts, or hormone issues that nobody has been able to explain.</p>
<p>You've tried the standard approach and it hasn't worked.</p>
<p>You want someone to actually listen and build a real plan around you.</p>
</div>
</section>

<section className="py-20 bg-white border-t border-zinc-100">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div>
<img alt="Meet the team" className="rounded-2xl shadow-xl w-full object-cover" src="https://www.innovativehealthdallas.com/wp-content/uploads/2023/12/meet-team.jpg"/>
</div>
<div className="space-y-6">
<p className="text-lg font-medium text-zinc-900">Dr. Erin Van Veldhuizen has spent over half her life in healthcare.</p>
<p className="text-base text-zinc-600 leading-relaxed">
                        She holds credentials across the nervous system, the endocrine system, and the immune system. That combination is rare. Most clinics treat one. Innovative Health treats all three.
                    </p>
<p className="text-base text-zinc-600 leading-relaxed">
                        She built this practice because she kept seeing patients who were getting better but not fully well. She wanted to change that.
                    </p>
<p className="text-base text-zinc-600 leading-relaxed font-medium">
                        Over 500 hours of functional medicine training. Over 500 hours of functional neurology. And a real commitment to finding what's actually going on with your health.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-center mb-16">What Patients Are Saying</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-[#0B9444]">
<p className="text-zinc-600 italic mb-6 leading-relaxed">"Dr Erin has been my chiropractor for over 8 years. Couldn't be happier with the staff, care, and expertise of this team."</p>
<p className="text-sm font-semibold text-zinc-900">— Elaine Henderson</p>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-[#0B9444]">
<p className="text-zinc-600 italic mb-6 leading-relaxed">"Dr Hart and Innovative Health and Wellness has been a Gift from God. They have been working with our 5 year old son who struggled tremendously with anxiety, fear, focus, impulse control, and obedience. After 3 months we have seen huge growth in him."</p>
<p className="text-sm font-semibold text-zinc-900">— Randi Wideman</p>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-[#0B9444]">
<p className="text-zinc-600 italic mb-6 leading-relaxed">"Both Dr. Erin and Dr. Skylar are gifted doctors. They make me feel seen and heard and answer all questions patiently. They offer a wide range of therapies to help achieve whole body healing through a holistic approach."</p>
<p className="text-sm font-semibold text-zinc-900">— D Harrison</p>
</div>
</div>
</div>
</section>

<section className="bg-[#0B9444] py-16">
<div className="max-w-4xl mx-auto px-6 text-center">
<p className="text-white text-lg font-medium mb-8">Ready to find out what's actually going on?</p>
<a className="inline-block w-full md:w-auto bg-white text-[#0B9444] font-semibold text-lg px-10 py-4 rounded-lg hover:bg-zinc-100 transition-colors duration-200" href="#">
                Click Here to Book Your Consultation
            </a>
</div>
</section>

<footer className="py-16 text-center">
<img alt="Innovative Health Logo" className="h-8 w-auto mx-auto mb-6 opacity-80 grayscale" src="https://www.innovativehealthdallas.com/wp-content/uploads/2019/08/innovative-logo.png"/>
<div className="text-zinc-400 text-sm space-y-1">
<p className="font-medium text-zinc-500">Innovative Health &amp; Wellness Group</p>
<p>4001 McEwen Rd Suite 100, Dallas, TX 75244</p>
<p>(214) 295-9671</p>
</div>
</footer>

    </>
  );
}
