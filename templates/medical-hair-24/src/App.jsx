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
      

<header className="py-12 flex justify-center">
<img alt="McGrath Medical" className="h-14 md:h-16 w-auto object-contain" src="https://cdn-ilaakkn.nitrocdn.com/OYunJDLsStKsFbfYdZbFOHHWptsuAQoB/assets/images/optimized/rev-f559d52/mcgrathmedical.com/wp-content/uploads/MM-Website-logo2021.png"/>
</header>

<section className="max-w-4xl mx-auto px-6 text-center pb-16">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900 leading-tight">
            Get Your Hair Back. For Good.
        </h1>
<p className="mt-8 text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Dr. Daniel McGrath is one of fewer than 200 board-certified hair restoration surgeons in the world. He's helped hundreds of men and women stop losing hair and start living again. Watch the short video below and book your free consultation today.
        </p>
<div className="mt-10">
<a className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-medium text-base md:text-lg px-10 py-5 rounded-full shadow-lg shadow-orange-600/20 transition-all transform hover:-translate-y-1 active:scale-95" href="#">
                Click Here to Book Your Free Consultation
            </a>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 pb-24">
<div className="aspect-video bg-slate-100 rounded-3xl flex flex-col items-center justify-center border border-slate-200 vsl-shadow group cursor-pointer overflow-hidden relative">
<div className="absolute inset-0 bg-slate-900/5 transition-opacity group-hover:opacity-0"></div>
<iconify-icon className="text-orange-600 text-7xl md:text-8xl transition-transform group-hover:scale-110" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
<p className="mt-4 text-slate-500 font-medium tracking-wide text-sm uppercase">Your VSL Goes Here</p>
</div>
</section>

<section className="border-y border-slate-100 bg-slate-50/50 py-8 mb-24">
<div className="max-w-5xl mx-auto px-6 text-center">
<p className="text-xs font-semibold tracking-[0.2em] text-slate-400 uppercase leading-loose">
                Fellow, International Society of Hair Restoration Surgery. Past-President, American Board of Hair Restoration Surgery.<br className="hidden md:block"/> Serving Austin, Dallas and Houston, TX.
            </p>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 pb-32">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center text-slate-900 mb-16">
            Real Patients. Real Results.
        </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
<div className="space-y-4">
<div className="aspect-video rounded-2xl overflow-hidden bg-slate-200 shadow-xl shadow-slate-200/50">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="w-full h-full" frameborder="0" src="https://www.youtube.com/embed/znmRHmcYJb8" title="Patient Testimonial"></iframe>
</div>
<p className="text-xs italic text-slate-500 text-center px-4">
                    Patient shares his hair restoration experience with Dr. McGrath.
                </p>
</div>
<div className="space-y-4">
<div className="aspect-video rounded-2xl overflow-hidden bg-slate-200 shadow-xl shadow-slate-200/50">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="w-full h-full" frameborder="0" src="https://www.youtube.com/embed/zqzCrVJrzAI" title="Patient Testimonial"></iframe>
</div>
<p className="text-xs italic text-slate-500 text-center px-4">
                    Another McGrath Medical patient on how the procedure changed his life.
                </p>
</div>
</div>
</section>

<section className="bg-white pb-32">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center text-slate-900 mb-16">
                What Patients Are Saying
            </h2>
<div className="space-y-12">

<div className="bg-slate-50 p-10 md:p-12 rounded-[2.5rem] border border-slate-100">
<iconify-icon className="text-slate-200 text-4xl mb-4" icon="solar:quote-bold-duotone" strokeWidth="1.5"></iconify-icon>
<blockquote className="text-lg md:text-xl italic text-slate-700 leading-relaxed font-light">
                        "My barber couldn't even tell I had a procedure until I told him. I have zero negative things to say."
                    </blockquote>
<p className="mt-8 text-sm font-semibold tracking-wide text-slate-900 uppercase">— Alex Johnson</p>
</div>

<div className="bg-slate-50 p-10 md:p-12 rounded-[2.5rem] border border-slate-100">
<iconify-icon className="text-slate-200 text-4xl mb-4" icon="solar:quote-bold-duotone" strokeWidth="1.5"></iconify-icon>
<blockquote className="text-lg md:text-xl italic text-slate-700 leading-relaxed font-light">
                        "The internet makes this procedure confusing. Dr. McGrath makes this procedure an easy decision. Anyone considering a hair transplant, this is what I call a no brainer."
                    </blockquote>
<p className="mt-8 text-sm font-semibold tracking-wide text-slate-900 uppercase">— Roman Johnson</p>
</div>

<div className="bg-slate-50 p-10 md:p-12 rounded-[2.5rem] border border-slate-100">
<iconify-icon className="text-slate-200 text-4xl mb-4" icon="solar:quote-bold-duotone" strokeWidth="1.5"></iconify-icon>
<blockquote className="text-lg md:text-xl italic text-slate-700 leading-relaxed font-light">
                        "Never once did he rush me, never once did he attempt to sell me or push me into anything I didn't want. You can rest assured knowing you're in good hands at McGrath Medical."
                    </blockquote>
<p className="mt-8 text-sm font-semibold tracking-wide text-slate-900 uppercase">— Kyle M.</p>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-24 border-t border-slate-100">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="absolute -inset-4 bg-orange-100/50 rounded-[3rem] -z-10 blur-2xl"></div>
<img alt="Dr. Daniel McGrath" className="w-full h-auto rounded-[2rem] shadow-2xl" src="https://cdn-ilaakkn.nitrocdn.com/OYunJDLsStKsFbfYdZbFOHHWptsuAQoB/assets/images/optimized/rev-f559d52/mcgrathmedical.com/wp-content/uploads/McGrath_Consult.jpg"/>
</div>
<div className="space-y-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
                    About Dr. McGrath
                </h2>
<div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed">
<p>Dr. Daniel McGrath has dedicated his entire career to one thing: <span className="text-slate-900 font-medium">Helping people get their hair back.</span></p>
<p>He's fellowship-trained, board-certified, and a past-president of the American Board of Hair Restoration Surgery.</p>
<p>He's also been through hair loss himself. So he knows what it feels like. And he knows how much a result like this can change your life.</p>
<p>He performs FUE and FUT hair transplants for men and women across Texas.</p>
</div>
<div className="pt-4">
<iconify-icon className="text-blue-900 text-4xl" icon="solar:verified-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="bg-blue-950 py-32">
<div className="max-w-4xl mx-auto px-6 text-center text-white">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
                Ready to Take the First Step?
            </h2>
<p className="text-lg md:text-xl text-blue-100/80 mb-12 font-light">
                Book your free consultation with Dr. McGrath. No pressure. No obligation. <br className="hidden md:block"/> Just a real conversation about what's possible for you.
            </p>
<a className="inline-block bg-orange-600 hover:bg-orange-500 text-white font-medium text-base md:text-lg px-12 py-6 rounded-full shadow-2xl shadow-orange-600/30 transition-all transform hover:-translate-y-1" href="#">
                Click Here to Book Your Free Consultation
            </a>
</div>
</section>

<footer className="py-12 bg-white">
<div className="max-w-5xl mx-auto px-6 text-center">
<div className="text-xs font-medium tracking-[0.15em] text-slate-400 uppercase">
                McGrath Medical • Austin, TX • 512-474-4247
            </div>
</div>
</footer>

    </>
  );
}
