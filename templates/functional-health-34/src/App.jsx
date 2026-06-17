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
<div className="max-w-7xl mx-auto px-6">
<img alt="Functional Health Center" className="h-16 w-auto object-contain" src="https://cdcssl.ibsrv.net/ibimg/smb/225x75_80/webmgr/0f/x/9/logo_final.png.webp?13c21569e2af208131b13b73d9b63d69"/>
</div>
</header>

<section className="pt-12 pb-20 px-6">
<div className="max-w-4xl mx-auto text-center">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-8">
                Your Labs Say You're Fine. <br className="hidden md:block"/> But You Don't Feel Fine.
            </h1>
<p className="text-lg md:text-xl text-slate-600 font-normal mb-10 max-w-2xl mx-auto">
                Dr. Jared Allomong helps people in Longmont get to the actual root cause. Watch the short video below and book a free consultation.
            </p>
<a className="inline-block bg-[#60B2BD] text-white text-lg font-medium px-10 py-5 rounded-full shadow-lg shadow-[#60B2BD]/20 hover:bg-[#4d97a0] transition-all transform hover:-translate-y-0.5 active:scale-95" href="#booking">
                Click Here to Book Your Consultation
            </a>
</div>
</section>

<section className="pb-24 px-6">
<div className="max-w-5xl mx-auto">
<div className="aspect-video bg-slate-900 rounded-3xl shadow-2xl flex items-center justify-center border-8 border-slate-50 overflow-hidden">
<div className="text-center">
<iconify-icon className="text-6xl text-white/20 mb-4" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-white/40 font-medium tracking-wide uppercase text-sm">[VIDEO PLACEHOLDER — Insert VSL here]</p>
</div>
</div>
</div>
</section>

<section className="pb-32 px-6 text-center">
<div className="max-w-xl mx-auto">
<p className="text-sm text-slate-500 mb-6 font-medium">Ready to get some real answers? Grab a spot on the calendar.</p>
<a className="inline-block bg-[#60B2BD] text-white text-lg font-medium px-10 py-5 rounded-full shadow-lg shadow-[#60B2BD]/20 hover:bg-[#4d97a0] transition-all transform hover:-translate-y-0.5 active:scale-95" href="#booking">
                Click Here to Book Your Consultation
            </a>
</div>
</section>

<section className="py-32 bg-slate-50/50 border-y border-slate-100 px-6">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-20">This Isn't Your Average Chiropractic Visit</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-16">
<div className="space-y-4">
<h3 className="text-xl font-semibold leading-snug">We find the root cause.</h3>
<p className="text-slate-600 leading-relaxed text-base">
                        Most doctors treat symptoms. Dr. Allomong looks at the whole picture. Structure, diet, genetics, and biochemistry all together.
                    </p>
</div>
<div className="space-y-4">
<h3 className="text-xl font-semibold leading-snug">You get a real plan.</h3>
<p className="text-slate-600 leading-relaxed text-base">
                        Not a prescription. Not a referral. A personalized protocol built around your body and your history.
                    </p>
</div>
<div className="space-y-4">
<h3 className="text-xl font-semibold leading-snug">You finally feel like yourself again.</h3>
<p className="text-slate-600 leading-relaxed text-base">
                        Patients come in frustrated and dismissed. They leave with answers and a path forward.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<img alt="Dr. Jared Allomong" className="rounded-3xl shadow-xl w-full object-cover" src="https://cdcssl.ibsrv.net/ibimg/smb/656x810_80/webmgr/0f/x/9/jared-professional-pic.jpg.webp?e89b130c328a3432891382f865c98c37"/>
<div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block border border-slate-100">
<p className="text-[#60B2BD] font-semibold text-xl">15+ Years</p>
<p className="text-xs text-slate-500 uppercase tracking-widest">Clinical Experience</p>
</div>
</div>
<div className="space-y-6">
<div>
<h2 className="text-3xl font-semibold tracking-tight mb-2">Dr. Jared Allomong, DC, CAK, QN</h2>
<p className="text-[#60B2BD] font-medium text-lg italic">Founder, Functional Health Center</p>
</div>
<div className="space-y-4 text-slate-700 leading-relaxed text-base">
<p>Dr. Allomong has been practicing in Longmont since 2009.</p>
<p>He created his own clinical method called Functional Methylation. It maps your genetic patterns and uses nutrition and lifestyle to address the root causes that conventional medicine misses.</p>
<p>He teaches this technique to other doctors across the country.</p>
<p>He's not just treating symptoms. He's looking at why your body stopped working the way it should.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-slate-50/30 px-6">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl font-semibold tracking-tight text-center mb-20">Real Patients. Real Results.</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex gap-1 text-orange-400 mb-6">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-lg text-slate-800 leading-relaxed mb-6">"Dr. Jared was able to diagnose me after only 2 visits by reviewing my past testing and raw DNA. Since then my health has drastically changed."</p>
<p className="text-sm font-semibold text-slate-500">— Larae Jones, Google Review</p>
</div>

<div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex gap-1 text-orange-400 mb-6">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-lg text-slate-800 leading-relaxed mb-6">"Three separate GI doctors claimed they would help. They didn't. At 67, I finally have my life back."</p>
<p className="text-sm font-semibold text-slate-500">— Bob Fishman, Google Review</p>
</div>

<div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex gap-1 text-orange-400 mb-6">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-lg text-slate-800 leading-relaxed mb-6">"He managed to get my lupus under control. Something my rheumatologist was unable to do for the last 9 years."</p>
<p className="text-sm font-semibold text-slate-500">— Bethany Kuenne, Google Review</p>
</div>

<div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex gap-1 text-orange-400 mb-6">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-lg text-slate-800 leading-relaxed mb-6">"Dr. Jared has been a life saver, helping me recover from traumatic brain injury, cognitive dysfunction, and dyslexia."</p>
<p className="text-sm font-semibold text-slate-500">— Susan Mara, Facebook Review</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-4xl mx-auto">
<div className="aspect-video bg-slate-100 rounded-3xl border border-slate-200 flex items-center justify-center">
<p className="text-slate-400 font-medium text-sm tracking-wide uppercase">[VIDEO TESTIMONIAL PLACEHOLDER — Insert patient video here]</p>
</div>
</div>
</section>

<section className="py-32 bg-[#60B2BD] px-6" id="booking">
<div className="max-w-4xl mx-auto text-center text-white">
<h2 className="text-4xl font-semibold tracking-tight mb-6">Ready to Finally Get Some Answers?</h2>
<p className="text-lg text-white/90 mb-12 max-w-xl mx-auto">
                Book a free consultation with Dr. Allomong. It starts with a conversation. No pressure. No runaround.
            </p>
<a className="inline-block bg-white text-[#60B2BD] text-lg font-semibold px-12 py-5 rounded-full shadow-xl hover:bg-slate-50 transition-all transform hover:-translate-y-0.5 active:scale-95" href="#">
                Click Here to Book Your Consultation
            </a>
</div>
</section>

<footer className="py-20 px-6 border-t border-slate-100">
<div className="max-w-6xl mx-auto flex flex-col items-center text-center">
<img alt="Functional Health Center" className="h-12 w-auto mb-10 grayscale opacity-50" src="https://cdcssl.ibsrv.net/ibimg/smb/225x75_80/webmgr/0f/x/9/logo_final.png.webp?13c21569e2af208131b13b73d9b63d69"/>
<div className="space-y-2 text-slate-500 text-sm">
<p className="font-semibold text-slate-900">Functional Health Center</p>
<p>2050 Terry Street, Suite 102, Longmont, CO 80501</p>
<p>(303) 827-3772</p>
</div>
<div className="mt-12 pt-12 border-t border-slate-50 w-full">
<p className="text-xs text-slate-400">© 2024 Functional Health Center. All rights reserved.</p>
</div>
</div>
</footer>

    </>
  );
}
