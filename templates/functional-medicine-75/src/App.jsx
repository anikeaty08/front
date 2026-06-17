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
      

<header className="max-w-6xl mx-auto py-8 px-6">
<img alt="Logo" className="h-16 w-auto object-contain" src="https://cdcssl.ibsrv.net/ibimg/smb/197x200_80/webmgr/0f/d/6/5eb57da1a97f8_a1.png.webp"/>
</header>

<section className="max-w-4xl mx-auto text-center px-6 py-12 md:py-20">
<h1 className="text-3xl md:text-5xl font-semibold text-teal-700 tracking-tight leading-tight mb-6">
            Your Labs Say You're Fine. <br className="hidden md:block"/> You Know Something Is Wrong.
        </h1>
<p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Dr. Jin Sung has spent 27 years helping chronically ill patients find real answers. Not symptom management. Root causes.
        </p>
<p className="text-sm md:text-base text-slate-500 mb-8">
            Watch the short video below. Then book your free consultation.
        </p>
<a className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg py-4 px-10 rounded-lg transition-all transform hover:scale-105 shadow-lg" href="#book">
            Click Here to Book Your Consultation
        </a>
</section>

<section className="max-w-5xl mx-auto px-6 pb-20">
<div className="aspect-video w-full bg-slate-50 border-2 border-teal-600 rounded-2xl flex items-center justify-center relative overflow-hidden shadow-inner">
<div className="text-center">
<iconify-icon className="text-teal-600 text-6xl mb-2" data-stroke="1.5" icon="solar:play-circle-linear"></iconify-icon>
<p className="text-teal-800 font-medium text-lg tracking-tight">VSL Video Goes Here</p>
</div>

<div className="absolute inset-0 bg-slate-900/5 pointer-events-none"></div>
</div>
</section>

<section className="bg-slate-50 py-16 px-6">
<div className="max-w-3xl mx-auto text-center">
<p className="text-lg md:text-xl text-slate-600 font-medium mb-12">
                Here's what patients say after working with Dr. Sung.
            </p>

<div className="space-y-6 text-left">

<div className="bg-white p-8 rounded-r-xl border-l-4 border-teal-600 shadow-sm">
<p className="text-lg md:text-xl italic text-slate-700 mb-4 leading-relaxed">
                        "After 40 years of seeking medical advice and trying various alternative methods I had some basic knowledge but it was Dr. Sung that put it all together for me."
                    </p>
<p className="text-sm font-semibold text-teal-700 uppercase tracking-wider">Anita B., Salisbury MA</p>
</div>

<div className="bg-white p-8 rounded-r-xl border-l-4 border-teal-600 shadow-sm">
<p className="text-lg md:text-xl italic text-slate-700 mb-4 leading-relaxed">
                        "I went to see Dr. Sung after not being able to get any answers for why I was still feeling off even though thyroid lab tests seemed to indicate my Hashimoto's Disease was being properly treated."
                    </p>
<p className="text-sm font-semibold text-teal-700 uppercase tracking-wider">Tracy S.M.</p>
</div>

<div className="bg-white p-8 rounded-r-xl border-l-4 border-teal-600 shadow-sm">
<p className="text-lg md:text-xl italic text-slate-700 mb-4 leading-relaxed">
                        "In six months I have dropped 30 pounds, all my levels are back to normal, my hair is growing back, my blurry vision has disappeared, and my energy is back."
                    </p>
<p className="text-sm font-semibold text-teal-700 uppercase tracking-wider">Linda B.</p>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto py-24 px-6 text-center">
<h2 className="text-3xl font-semibold text-teal-700 tracking-tight mb-12">This is for you if...</h2>
<div className="space-y-8 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
<p>You've been told your labs are normal but you still feel awful.</p>
<p>You have Hashimoto's, autoimmune issues, gut problems, or chronic fatigue.</p>
<p>You've tried medications that treat the symptom but never the cause.</p>
<p className="font-medium text-slate-800">You're ready for a real plan.</p>
</div>
</section>

<section className="max-w-6xl mx-auto py-20 px-6 border-t border-slate-100">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div>
<img alt="Dr. Jin Sung" className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 shadow-xl w-full object-cover aspect-[4/3]" src="https://i.ytimg.com/vi/o192Amo9e7w/hq720.jpg"/>
</div>
<div className="space-y-6">
<p className="text-lg text-slate-700 leading-relaxed">
<span className="font-semibold text-teal-700">Dr. Jin Sung</span> is a Fellow in Functional Neurology with 27 years in private practice.
                </p>
<p className="text-lg text-slate-600 leading-relaxed">
                    He specializes in complex chronic conditions. Thyroid disorders. Autoimmunity. Gut dysfunction. Peripheral neuropathy. Neuroinflammation.
                </p>
<p className="text-lg text-slate-600 leading-relaxed">
                    He uses a whole-person approach. Not just symptoms. The actual root cause.
                </p>
<p className="text-lg text-slate-600 italic">
                    His practice is in Methuen, MA. Patients travel hours to see him.
                </p>
</div>
</div>
</section>

<section className="bg-teal-900 py-24 px-6 text-center" id="book">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
                Ready to Find Out What's Really Going On?
            </h2>
<p className="text-teal-100 text-lg mb-10">
                Book a free consultation with Dr. Sung's team. No pressure. Just answers.
            </p>
<a className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg py-4 px-12 rounded-lg transition-all transform hover:scale-105 shadow-2xl mb-6" href="#">
                Click Here to Book Your Consultation
            </a>
<p className="text-teal-200/70 text-xs tracking-widest uppercase">
                (978) 688-6999
            </p>
</div>
</section>

<footer className="bg-white py-12 px-6 border-t border-slate-100">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<img alt="Logo" className="h-10 opacity-60 grayscale" src="https://cdcssl.ibsrv.net/ibimg/smb/197x200_80/webmgr/0f/d/6/5eb57da1a97f8_a1.png.webp"/>
<address className="not-italic text-sm text-slate-400 text-center md:text-right">
                126 Merrimack Street, Methuen, MA 01844
            </address>
</div>
</footer>

    </>
  );
}
