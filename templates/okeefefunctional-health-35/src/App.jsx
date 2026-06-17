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
      

<header className="w-full px-6 py-8">
<div className="max-w-7xl mx-auto">
<img alt="O'Keefe Matz Logo" className="h-12 w-auto object-contain" src="https://d2t6o06vr3cm40.cloudfront.net/2026/03/26/10/59/23/5e21c7dd-0e19-4288-aae7-aaecacd526b5/file"/>
</div>
</header>
<section className="py-20 md:py-32 px-6">
<div className="max-w-4xl mx-auto text-center">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-plum mb-6 leading-tight">
                Tired of Being Told Your Labs Are Normal?
            </h1>
<p className="text-lg md:text-xl text-zinc-600 font-light mb-10 leading-relaxed max-w-2xl mx-auto">
                O'Keefe Matz Functional Health Clinic in Saint Paul helps people find real answers. We look at root causes. Not just symptoms.
            </p>
<div className="flex flex-col items-center gap-4">
<a className="bg-plum hover:opacity-90 transition-opacity text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg" href="https://improveurhealth.janeapp.com">
                    Click Here to Book Your Free Consultation
                </a>
<span className="text-xs text-zinc-400 font-normal">Free 15-minute phone consultation. No obligation.</span>
</div>
</div>
</section>

<section className="bg-plum py-20 px-6">
<div className="max-w-5xl mx-auto text-center">
<span className="inline-block text-xs font-medium tracking-widest text-white/70 mb-6 uppercase">Watch This First</span>
<div className="aspect-video bg-zinc-900/20 border border-white/10 rounded-2xl flex items-center justify-center mb-10 overflow-hidden relative">
<div className="absolute inset-0 flex flex-col items-center justify-center text-white/40">
<iconify-icon height="64" icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}} width="64"></iconify-icon>
<span className="mt-4 text-sm font-light">[Insert VSL video here]</span>
</div>
</div>
<a className="bg-white text-plum hover:bg-zinc-100 transition-colors px-8 py-4 rounded-full text-lg font-medium shadow-lg inline-block" href="https://improveurhealth.janeapp.com">
                Click Here to Book Your Free Consultation
            </a>
</div>
</section>

<section className="py-24 px-6 bg-zinc-50">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
<div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 overflow-hidden rounded-full border-4 border-white shadow-xl">
<img alt="Dr. Shannon A. O'Keefe" className="w-full h-full object-cover" src="https://improveurhealth.com/df_media/W1siZiIsIjIwMjYvMDMvMjYvMTAvNTQvNTEvY2Y1ODMxZjEtNDE2Yy00MTRlLTljN2MtOGQ0YzM5MTYxNWQzL2ZpbGUiXSxbInAiLCJ0aHVtYiIsIjI0MHgyNDAjIl1d?sha=eb2d5d40464fe359"/>
</div>
<div className="text-center md:text-left">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-plum mb-2">Dr. Shannon A. O'Keefe</h2>
<p className="text-sage font-medium text-sm md:text-base mb-4 tracking-wide">DC, DCBCN, Functional Medicine &amp; Internal Diagnosis Specialty</p>
<p className="text-zinc-500 text-xs font-medium uppercase tracking-widest mb-6">Founding Admin</p>
<p className="text-zinc-600 font-light leading-relaxed max-w-xl">
                    With decades of clinical experience, Dr. O'Keefe leads our team with a focus on uncovering the physiological imbalances that keep patients from feeling their best. Her expertise in clinical nutrition and internal diagnosis ensures that every patient receives a scientifically-backed, personalized path to recovery.
                </p>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6">
<div className="max-w-2xl mx-auto text-center">
<h2 className="text-xs font-semibold tracking-widest text-sage uppercase mb-12">Our Mission</h2>
<div className="space-y-8 text-lg md:text-xl text-zinc-800 font-light leading-relaxed">
<p>You've been exhausted for a while now.</p>
<p>Maybe you have brain fog. Maybe your hormones feel completely off. Maybe you've been told everything looks fine on paper but you know something isn't right.</p>
<p className="font-medium text-plum">You deserve real answers.</p>
<p>At O'Keefe Matz Functional Health Clinic we go deeper than a standard lab panel. We look at hormones, gut health, inflammation, and how your body systems are working together.</p>
<p>Then we build a plan that's specific to you.</p>
</div>
</div>
</section>

<section className="py-24 bg-white px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="bg-zinc-50 p-10 rounded-3xl shadow-sm border border-zinc-100 transition-transform hover:-translate-y-1">
<div className="text-sage mb-6">
<iconify-icon height="40" icon="solar:magnifer-zoom-in-linear" style={{strokeWidth: '1.5'}} width="40"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-plum mb-4">Find the Root Cause</h3>
<p className="text-zinc-600 font-light leading-relaxed">Advanced lab testing that goes beyond what most doctors order.</p>
</div>

<div className="bg-zinc-50 p-10 rounded-3xl shadow-sm border border-zinc-100 transition-transform hover:-translate-y-1">
<div className="text-sage mb-6">
<iconify-icon height="40" icon="solar:user-rounded-linear" style={{strokeWidth: '1.5'}} width="40"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-plum mb-4">Treat the Whole Person</h3>
<p className="text-zinc-600 font-light leading-relaxed">Functional Medicine, Neurofeedback, Chiropractic, Acupuncture. All under one roof.</p>
</div>

<div className="bg-zinc-50 p-10 rounded-3xl shadow-sm border border-zinc-100 transition-transform hover:-translate-y-1">
<div className="text-sage mb-6">
<iconify-icon height="40" icon="solar:calendar-check-linear" style={{strokeWidth: '1.5'}} width="40"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-plum mb-4">A Plan Built for You</h3>
<p className="text-zinc-600 font-light leading-relaxed">No cookie cutter protocols. Every plan is personalized to your history and your body.</p>
</div>
</div>
</div>
</section>

<section className="bg-plum py-24 px-6">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-2">Hear From Real Patients</h2>
<div className="h-1 w-12 bg-sage mx-auto"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="space-y-4 text-center">
<div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
<iframe allow="autoplay; fullscreen" allowfullscreen="" className="w-full h-full" frameborder="0" src="https://player.vimeo.com/video/208750357"></iframe>
</div>
<p className="text-white/60 text-xs font-medium uppercase tracking-wider">Patient Experience 01</p>
</div>
<div className="space-y-4 text-center">
<div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
<iframe allow="autoplay; fullscreen" allowfullscreen="" className="w-full h-full" frameborder="0" src="https://player.vimeo.com/video/208750524"></iframe>
</div>
<p className="text-white/60 text-xs font-medium uppercase tracking-wider">Patient Experience 02</p>
</div>
<div className="space-y-4 text-center">
<div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
<iframe allow="autoplay; fullscreen" allowfullscreen="" className="w-full h-full" frameborder="0" src="https://player.vimeo.com/video/208750870"></iframe>
</div>
<p className="text-white/60 text-xs font-medium uppercase tracking-wider">Patient Experience 03</p>
</div>
</div>
</div>
</section>

<section className="bg-sage py-8 px-6 text-white text-center">
<div className="max-w-5xl mx-auto">
<p className="text-sm md:text-base font-medium leading-relaxed tracking-wide">
                Nearly 35 years serving Saint Paul. Board-certified clinical expertise. Functional Medicine, Neurofeedback, Chiropractic, and Acupuncture.
            </p>
</div>
</section>

<section className="bg-plum py-24 px-6 text-center text-white">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6 leading-tight">Ready to Finally Get Some Answers?</h2>
<p className="text-lg md:text-xl font-light text-white/80 mb-10 leading-relaxed">
                Book a free 15-minute phone consultation. We'll talk about what's going on and whether we can help.
            </p>
<div className="flex flex-col items-center gap-4">
<a className="bg-white text-plum hover:bg-zinc-100 transition-colors px-10 py-5 rounded-full text-lg font-medium shadow-xl" href="https://improveurhealth.janeapp.com">
                    Click Here to Book Your Free Consultation
                </a>
<span className="text-xs text-white/50 font-normal">No pressure. No obligation. Just a real conversation.</span>
</div>
</div>
</section>

<footer className="bg-zinc-50 border-t border-zinc-200 py-20 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
<div className="space-y-6">
<img alt="Logo" className="h-10 w-auto opacity-80 grayscale brightness-0" src="https://d2t6o06vr3cm40.cloudfront.net/2026/03/26/10/59/23/5e21c7dd-0e19-4288-aae7-aaecacd526b5/file"/>
<div className="text-zinc-500 space-y-1 text-sm leading-relaxed">
<p className="font-medium text-zinc-900">O'Keefe Matz Chiropractic &amp; Functional Health Clinic</p>
<p>1053 Ashland Ave, Saint Paul, MN 55104</p>
<p>(651) 292-8072</p>
<p>info@improveurhealth.com</p>
</div>
</div>
<div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm min-w-[280px]">
<h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-4">Clinic Hours</h4>
<ul className="text-sm space-y-2 text-zinc-600 font-light">
<li className="flex justify-between"><span>Mon, Wed, Thu, Fri</span> <span>9am – 6pm</span></li>
<li className="flex justify-between text-zinc-400"><span>Tuesday</span> <span>Closed</span></li>
<li className="flex justify-between text-zinc-400"><span>Sat - Sun</span> <span>Closed</span></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-zinc-200">
<p className="text-[10px] text-zinc-400 uppercase tracking-widest">© 2024 O'Keefe Matz Clinic. All Rights Reserved.</p>
</div>
</footer>

    </>
  );
}
