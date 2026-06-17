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
      

<nav className="py-6 border-b border-slate-50 flex justify-center sticky top-0 bg-white/90 backdrop-blur-md z-50">
<img alt="Logo" className="h-12 object-contain" src="https://www.healthytallahassee.com/img/site_assets/home/logo.jpg"/>
</nav>

<section className="py-20 md:py-32 px-6">
<div className="max-w-3xl mx-auto text-center space-y-8">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900 leading-tight">
                Is Your Child Struggling... <br className="hidden md:block"/> And Nothing Has Worked?
            </h1>
<p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
                Dr. Zaideman uses a brain-based approach to help kids with ADHD, autism, sensory issues, and developmental delays. No drugs. No guesswork. A real plan built for your child.
            </p>
<div className="pt-4">
<a className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-5 rounded-full text-lg font-medium transition-all shadow-xl shadow-emerald-100 hover:scale-105 active:scale-95" href="#">
                    Click Here to Book Your Free Consultation
                </a>
</div>
</div>
</section>

<section className="py-12 md:py-20 bg-slate-50/50">
<div className="max-w-5xl mx-auto px-6">
<div className="relative group aspect-video bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col items-center justify-center cursor-pointer border-8 border-white">

<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
<div className="relative z-10 flex flex-col items-center gap-6">
<div className="w-20 h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 transition-transform group-hover:scale-110">
<iconify-icon height="48" icon="solar:play-linear" style={{color: 'white'}} width="48"></iconify-icon>
</div>
<p className="text-white text-lg md:text-xl font-medium tracking-wide">
                        Watch This First — Dr. Zaideman Explains How It Works
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 text-center">
<div className="max-w-xl mx-auto">
<p className="text-slate-500 text-lg mb-6">Ready to take the first step?</p>
<a className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-5 rounded-full text-lg font-medium transition-all shadow-xl shadow-emerald-100 hover:scale-105" href="#">
                Click Here to Book Your Free Consultation
            </a>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-2xl mx-auto space-y-24">
<div className="space-y-4">
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">A Brain-Based Approach</h3>
<p className="text-lg text-slate-600 leading-relaxed">
                    Dr. Zaideman doesn't just treat symptoms. He finds the root cause. Then he builds a plan around it.
                </p>
</div>
<div className="space-y-4">
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">The Melillo Method</h3>
<p className="text-lg text-slate-600 leading-relaxed">
                    This is a cutting-edge, drug-free program. It targets retained primitive reflexes and brain imbalances. The same imbalances that drive ADHD, autism, and sensory issues.
                </p>
</div>
<div className="space-y-4">
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">Built for Your Child</h3>
<p className="text-lg text-slate-600 leading-relaxed">
                    Every plan is custom. No cookie-cutter programs. Dr. Zaideman has over 165 hours of advanced training in childhood neurodevelopmental disorders.
                </p>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6">
<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
<img alt="Dr. Matthew Zaideman" className="w-full h-full object-cover" src="https://www.healthytallahassee.com/img/site_assets/dr-zaiderman.jpg"/>
</div>
<div className="space-y-6">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Meet Dr. Zaideman</h2>
<div className="space-y-4 text-lg text-slate-600 leading-relaxed">
<p>Dr. Matthew Zaideman has been helping families in Tallahassee since 2012.</p>
<p>He is a certified Melillo Method practitioner and a Fellow of the International Board of Functional Neurology in Childhood Neurodevelopmental Disorders.</p>
<p className="font-medium text-slate-900 italic">That is a pretty rare credential. Most chiropractors don't have it.</p>
<p>He takes a drugless, non-surgical approach to every patient. His goal is to treat the cause... not just the symptoms.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-emerald-50/40">
<div className="max-w-3xl mx-auto space-y-12">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">What Parents Are Saying</h2>
</div>

<div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-emerald-100/50">
<p className="text-xl md:text-2xl text-slate-700 italic leading-snug">
                    "My child has made a lot of progress on her physical milestones and communication goals since we began our treatments. Dr. Z is wonderful with her, so kind and compassionate."
                </p>
<p className="mt-6 font-semibold text-emerald-800 text-sm tracking-wide uppercase">— Rachel Goodrich</p>
</div>
<div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-emerald-100/50">
<p className="text-xl md:text-2xl text-slate-700 italic leading-snug">
                    "Getting down to the grit of the source instead of slapping a bandaid on the problem. Love it."
                </p>
<p className="mt-6 font-semibold text-emerald-800 text-sm tracking-wide uppercase">— Kori Smith</p>
</div>
<div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-emerald-100/50">
<p className="text-xl md:text-2xl text-slate-700 italic leading-snug">
                    "Great with kids. Very thorough exam, report, and clear instructions. Great experience for my son with ASD and ADHD."
                </p>
<p className="mt-6 font-semibold text-emerald-800 text-sm tracking-wide uppercase">— Katie Bankston-Corbin</p>
</div>
<div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-emerald-100/50">
<p className="text-xl md:text-2xl text-slate-700 italic leading-snug">
                    "Dr. Zaideman knows just what to do. He's got a great sense of humor that in addition to the adjustments helps make the pain go away."
                </p>
<p className="mt-6 font-semibold text-emerald-800 text-sm tracking-wide uppercase">— Valerie Johnson-Dallas</p>
</div>
</div>
</section>

<section className="py-24 px-6 bg-emerald-600">
<div className="max-w-3xl mx-auto text-center space-y-8">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
                You've tried other things. This is different.
            </h2>
<div className="space-y-2 text-emerald-50 text-lg md:text-xl">
<p>Book a free consultation with Dr. Zaideman.</p>
<p>It takes 15 minutes.</p>
<p>You'll leave knowing exactly what the next step looks like for your child.</p>
</div>
<div className="pt-6">
<a className="inline-block bg-white text-emerald-700 px-10 py-5 rounded-full text-lg font-semibold transition-all shadow-2xl hover:bg-emerald-50 hover:scale-105 active:scale-95" href="#">
                    Click Here to Book Your Free Consultation
                </a>
</div>
</div>
</section>

<footer className="py-16 px-6 bg-white border-t border-slate-100">
<div className="max-w-xl mx-auto text-center space-y-4">
<div className="font-medium tracking-tighter text-slate-900 text-lg">NORTH FLORIDA SPINE AND WELLNESS</div>
<div className="text-slate-500 text-sm space-y-1">
<p>1610 West Plaza Drive, Tallahassee, FL 32308</p>
<p>(850) 877-6790</p>
<p className="text-emerald-600">info@healthytallahassee.com</p>
</div>
</div>
</footer>

    </>
  );
}
