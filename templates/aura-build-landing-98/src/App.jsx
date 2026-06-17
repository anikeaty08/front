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
      

<header className="py-6 px-6 md:px-12 bg-white">
<div className="max-w-7xl mx-auto flex items-center justify-start">
<img alt="Transformation Wellness Center" className="h-12 md:h-16 w-auto object-contain" src="https://mytransformationwellness.com/wp-content/uploads/2024/02/2325306.jpg"/>
</div>
</header>

<section className="py-20 px-6 md:px-12 bg-white text-center">
<div className="max-w-4xl mx-auto">
<h1 className="text-4xl md:text-6xl font-semibold text-[#002d5b] tracking-tight leading-tight mb-8">
                Your Labs Say You're Fine.<br/>But You Don't Feel Fine.
            </h1>
<h2 className="text-lg md:text-xl font-medium text-slate-600 leading-relaxed mb-10 max-w-3xl mx-auto">
                Dr. Andrea Jordheim has helped hundreds of patients in Western Colorado finally get real answers, after years of being dismissed, misdiagnosed, and handed more prescriptions.
                <span className="block mt-4 text-slate-500 font-normal">If you're dealing with fatigue, brain fog, gut issues, chronic pain, or symptoms no one can explain... this is for you.</span>
</h2>
<a className="inline-block bg-[#4b8b3b] text-white font-medium text-lg py-5 px-10 rounded-xl btn-transition shadow-lg shadow-emerald-900/10" href="#">
                Click Here to Book Your Free Consultation
            </a>
</div>
</section>

<section className="py-20 px-6 md:px-12 bg-slate-50">
<div className="max-w-5xl mx-auto text-center">
<p className="text-xs font-semibold tracking-widest text-[#4b8b3b] uppercase mb-6">WATCH THIS FIRST</p>
<div className="aspect-video w-full bg-slate-200 rounded-3xl overflow-hidden vsl-shadow relative group cursor-pointer border border-slate-200">

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center text-[#4b8b3b] transition-transform group-hover:scale-110">
<iconify-icon height="40" icon="solar:play-linear" style={{strokeWidth: '1.5'}} width="40"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-300">
<div className="h-full bg-[#4b8b3b] w-1/3"></div>
</div>
</div>
<p className="mt-6 text-sm italic text-slate-500">
                Watch to learn how the root-cause approach works, and why it gets results when nothing else has.
            </p>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-white">
<div className="max-w-[720px] mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-semibold text-[#002d5b] tracking-tight mb-12">
                You've Tried Everything. Here's Why It Hasn't Worked.
            </h2>
<div className="space-y-8 text-lg text-slate-600 leading-relaxed font-normal">
<p>Most doctors treat your symptoms.</p>
<p>They don't look for what's causing them.</p>
<p>So you get a medication. Or a referral. Or told your results look normal. But you still don't feel normal.</p>
<p>At <span className="font-medium text-slate-900">Transformation Wellness Center</span>, Dr. Andrea Jordheim does something different.</p>
<p className="text-xl font-medium text-[#002d5b]">She investigates.</p>
<p>She looks at your gut, your hormones, your inflammation levels, your nutrient status, your structural alignment. And she builds a plan around you specifically.</p>
<p className="font-medium text-slate-900">Not a template. Not a protocol off a shelf. <br/>A real answer.</p>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-white border-t border-slate-100">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
<div className="w-full md:w-5/12">
<div className="relative">
<div className="absolute -inset-4 bg-emerald-50 rounded-3xl -z-10"></div>
<img alt="Dr. Andrea Jordheim" className="w-full h-auto rounded-2xl shadow-sm grayscale-[20%] hover:grayscale-0 transition-all duration-700" src="https://mytransformationwellness.com/wp-content/uploads/2024/02/254615-1.jpg"/>
</div>
</div>
<div className="w-full md:w-7/12">
<h3 className="text-3xl font-semibold text-[#002d5b] tracking-tight mb-6">Dr. Andrea Jordheim, DC, CFMP</h3>
<div className="space-y-4 text-base text-slate-600 leading-relaxed">
<p>Dr. Jordheim is an upper cervical chiropractic specialist and certified functional medicine practitioner.</p>
<p>She works with patients who have complex, chronic conditions—the kind of conditions that have stumped other doctors for years.</p>
<p>She graduated with honors from Life Chiropractic College West and holds certifications in functional medicine, mold illness and CIRS, the Bredesen Protocol for brain health, and gluten-related disorders.</p>
<p>She also serves on the CIRS Research Foundation Scientific Advisory Board, contributing to the research that defines the field.</p>
<div className="pt-4 flex items-center gap-2 text-[#4b8b3b] font-medium">
<iconify-icon height="20" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span>Grand Junction, CO • Telehealth available</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-emerald-50/50">
<div className="max-w-7xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-semibold text-[#002d5b] tracking-tight mb-16">Real People. Real Results.</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-10 rounded-2xl shadow-sm border border-emerald-100 flex flex-col justify-between text-left">
<p className="text-slate-600 italic leading-relaxed mb-8">"I saw multiple doctors who couldn't help and just referred me to a neurosurgeon or neurologist. After seeing her regularly, my neck pain and migraines are completely gone, and I'm back to lifting weights without any issues."</p>
<p className="text-xs font-semibold tracking-widest text-[#4b8b3b] uppercase">Jordan Crites</p>
</div>

<div className="bg-white p-10 rounded-2xl shadow-sm border border-emerald-100 flex flex-col justify-between text-left">
<p className="text-slate-600 italic leading-relaxed mb-8">"Within six weeks of seeing Dr. Andrea Jordheim, all those symptoms are gone. I was afraid I might die soon. I feel alive and vibrant again. I really do believe she saved my life."</p>
<p className="text-xs font-semibold tracking-widest text-[#4b8b3b] uppercase">Peggy Beatty</p>
</div>

<div className="bg-white p-10 rounded-2xl shadow-sm border border-emerald-100 flex flex-col justify-between text-left">
<p className="text-slate-600 italic leading-relaxed mb-8">"She gets to the source of your health issue instead of treating just the symptoms. Dr. Jordheim is very thorough and I genuinely enjoy going through this journey with her."</p>
<p className="text-xs font-semibold tracking-widest text-[#4b8b3b] uppercase">Deena Bell Stanley</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-white">
<div className="max-w-[680px] mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-semibold text-[#002d5b] tracking-tight mb-12">Here's What Happens When You Book</h2>
<div className="space-y-6 text-lg text-slate-600 mb-12">
<p>You get a free, no-obligation health assessment.</p>
<p>Dr. Andrea will review what you've been dealing with.</p>
<p>She'll tell you what she sees and what she would investigate.</p>
<p>No pressure. No pitch. Just real information.</p>
<p className="text-[#002d5b] font-medium italic">You'll leave the call knowing more than you did before.</p>
</div>
<a className="inline-block bg-[#4b8b3b] text-white font-medium text-lg py-5 px-10 rounded-xl btn-transition shadow-lg shadow-emerald-900/10" href="#">
                Click Here to Book Your Free Consultation
            </a>
</div>
</section>

<div className="bg-[#002d5b] py-6 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-4 md:gap-8 text-white/90 text-xs font-medium tracking-wide">
<span>GRAND JUNCTION, CO</span>
<div className="h-1 w-1 bg-white/30 rounded-full"></div>
<span>TELEHEALTH AVAILABLE</span>
<div className="h-1 w-1 bg-white/30 rounded-full"></div>
<span>FREE CONSULTATION</span>
<div className="h-1 w-1 bg-white/30 rounded-full"></div>
<span>ROOT-CAUSE APPROACH</span>
<div className="h-1 w-1 bg-white/30 rounded-full"></div>
<span>UPPER CERVICAL + FUNCTIONAL MEDICINE</span>
</div>
</div>

<footer className="py-16 px-6 bg-white text-center">
<div className="max-w-2xl mx-auto space-y-4">
<h4 className="text-sm font-semibold text-slate-900 tracking-tight">TRANSFORMATION WELLNESS CENTER</h4>
<div className="text-sm text-slate-500 space-y-1">
<p>2501 Blichmann Avenue, Suite 110, Grand Junction, CO 81505</p>
<p>(970) 812-5559</p>
<p className="hover:text-[#4b8b3b] transition-colors"><a href="https://mytransformationwellness.com">mytransformationwellness.com</a></p>
</div>
<div className="pt-10 border-t border-slate-100">
<p className="text-[0.7rem] text-slate-400 uppercase tracking-widest leading-relaxed">
                    Content on this page is for educational and informational purposes only and does not constitute medical diagnosis or treatment. Always consult your licensed medical provider.
                </p>
</div>
</div>
</footer>

    </>
  );
}
