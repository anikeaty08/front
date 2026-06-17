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
      

<header className="py-6 px-6 md:px-12">
<div className="max-w-7xl mx-auto flex items-center">
<img alt="NuArch Logo" className="h-8 md:h-10" src="https://nuarchbydrsal.com/wp-content/uploads/2024/12/logo_white.png"/>
</div>
</header>

<section className="pt-16 pb-24 px-6 md:px-12 text-center">
<div className="max-w-4xl mx-auto">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 leading-tight">
                Missing Teeth Are Costing You <span className="gold-accent">More Than You Think</span>
</h1>
<p className="text-base md:text-xl text-zinc-300 font-light max-w-2xl mx-auto leading-relaxed mb-10">
                Find out in 60 seconds if you qualify for same-day full arch dental implants at NuArch by Dr. Sal in Ashland, MA.
            </p>
<div className="flex flex-col items-center gap-4">
<button className="bg-gold text-black px-10 py-5 rounded-full font-medium text-lg hover:opacity-90 transition-all transform hover:scale-105">
                    Take the Free Quiz
                </button>
<p className="text-xs text-zinc-500 tracking-wide uppercase">
                    Takes 60 seconds. No obligation. No pressure.
                </p>
</div>
</div>
</section>

<section className="bg-zinc-900/50 border-y border-zinc-800/50 py-6 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<p className="text-[10px] md:text-xs text-center font-medium tracking-[0.2em] text-zinc-400 uppercase">
                4.9 Stars across 186 Reviews · Listed on the American Academy of Implant Dentistry · 700+ Procedures under Sedation · One Doctor. One Location. One Day.
            </p>
</div>
</section>

<section className="py-24 px-6 md:px-12">
<div className="max-w-6xl mx-auto">
<div className="mb-12">
<div className="w-12 h-px bg-gold mb-6"></div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Real Patients. Real Results.</h2>
<p className="text-base text-zinc-400 font-light">These are real people who came to Dr. Sal with failing teeth, dentures, or nothing at all. Watch what happened.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="space-y-4">
<div className="aspect-video bg-zinc-900 border border-zinc-800 overflow-hidden rounded-sm group">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="w-full h-full" frameborder="0" src="https://www.youtube.com/embed/eyiceb6_Ieo" title="NuArch Patient Testimonial">
</iframe>
</div>
<div>
<p className="text-sm font-medium tracking-tight gold-accent uppercase">Full Arch Transformation</p>
<p className="text-[10px] text-zinc-500 uppercase tracking-widest">Patient Success Story</p>
</div>
</div>

<div className="space-y-4">
<div className="aspect-video bg-zinc-900 border border-zinc-800 overflow-hidden rounded-sm group">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="w-full h-full" frameborder="0" src="https://www.youtube.com/embed/Wwt9RNv0rNA" title="NuArch Patient Testimonial">
</iframe>
</div>
<div>
<p className="text-sm font-medium tracking-tight gold-accent uppercase">Same-Day Results</p>
<p className="text-[10px] text-zinc-500 uppercase tracking-widest">Patient Success Story</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] px-6 md:px-12">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-16">What Patients Are Saying</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-zinc-900 p-8 rounded-sm border border-zinc-800/50 relative">
<iconify-icon className="text-3xl gold-accent mb-6 opacity-40" icon="solar:double-quotes-l-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-base text-zinc-200 font-light leading-relaxed mb-6">
                        "The joy of smiling freely, without self-consciousness or fear, is an indescribable gift. Their expertise and empathy have not only restored my smile but have also profoundly enriched my life."
                    </p>
<p className="text-xs text-zinc-500 font-medium tracking-wider uppercase">— Karen A.</p>
</div>

<div className="bg-zinc-900 p-8 rounded-sm border border-zinc-800/50 relative">
<iconify-icon className="text-3xl gold-accent mb-6 opacity-40" icon="solar:double-quotes-l-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-base text-zinc-200 font-light leading-relaxed mb-6">
                        "I never thought I'd find myself looking forward to my dentist appointments. But that's actually the case since I started seeing Dr. Sal. He is in a class by himself."
                    </p>
<p className="text-xs text-zinc-500 font-medium tracking-wider uppercase">— Tom J.</p>
</div>

<div className="bg-zinc-900 p-8 rounded-sm border border-zinc-800/50 relative">
<iconify-icon className="text-3xl gold-accent mb-6 opacity-40" icon="solar:double-quotes-l-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-base text-zinc-200 font-light leading-relaxed mb-6">
                        "My upper and lower arch is just finalized and locked down perfection. 1000% worth your while to reach out to Dr. Sal."
                    </p>
<p className="text-xs text-zinc-500 font-medium tracking-wider uppercase">— Verified Patient</p>
</div>

<div className="bg-zinc-900 p-8 rounded-sm border border-zinc-800/50 relative">
<iconify-icon className="text-3xl gold-accent mb-6 opacity-40" icon="solar:double-quotes-l-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-base text-zinc-200 font-light leading-relaxed mb-6">
                        "I've never looked so good since I was young. Now at 73 years old I feel young again with a great smile. Thank you Dr. Sal and James."
                    </p>
<p className="text-xs text-zinc-500 font-medium tracking-wider uppercase">— Anna R.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12">
<div className="max-w-6xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Here's How It Works</h2>
<p className="text-base text-zinc-400 font-light mb-16">Simple. Fast. No dentist anxiety required.</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
<div>
<span className="text-5xl font-light gold-accent mb-6 block">01</span>
<h3 className="text-lg font-medium tracking-tight mb-3">Take the Quiz</h3>
<p className="text-sm text-zinc-400 leading-relaxed font-light">60 seconds. Answer a few simple questions about your teeth and goals.</p>
</div>
<div>
<span className="text-5xl font-light gold-accent mb-6 block">02</span>
<h3 className="text-lg font-medium tracking-tight mb-3">Get Your Results</h3>
<p className="text-sm text-zinc-400 leading-relaxed font-light">We tell you right away if you're a good candidate for same-day implants.</p>
</div>
<div>
<span className="text-5xl font-light gold-accent mb-6 block">03</span>
<h3 className="text-lg font-medium tracking-tight mb-3">Book a Free Consult</h3>
<p className="text-sm text-zinc-400 leading-relaxed font-light">Dr. Sal reviews your case personally. No hard sell. Just answers.</p>
</div>
</div>
<button className="bg-gold text-black px-10 py-5 rounded-full font-medium text-lg hover:opacity-90 transition-all shadow-xl">
                Take the Free Quiz
            </button>
</div>
</section>

<section className="py-24 bg-zinc-900 px-6 md:px-12">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
<div className="w-full md:w-1/2">
<div className="aspect-[4/5] bg-zinc-800 rounded-sm overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
<div className="absolute inset-0 flex items-center justify-center text-zinc-600">
<iconify-icon className="text-8xl" icon="solar:user-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
<div className="w-full md:w-1/2">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">One Doctor. Your Whole Journey.</h2>
<div className="space-y-6 text-base text-zinc-300 font-light leading-relaxed">
<p>Dr. Sal has been placing implants in the Greater Boston area for over two decades.</p>
<p>He developed the Nuarch Process himself. It is a four-step system built for precision, comfort, and same-day results.</p>
<p>He studied under Dr. Hilt Tatum, one of the pioneers of dental implantology, and is listed on the American Academy of Implant Dentistry.</p>
<p>Pretty much everything is done under one roof. One doctor. One location. No outsourcing. He even calls you personally the night before your procedure.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 text-center bg-black border-t border-zinc-800">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight gold-accent mb-6">Find Out If You Qualify in 60 Seconds</h2>
<p className="text-base md:text-lg text-white font-light mb-10 opacity-80">No obligation. No pressure. Just clarity on what your options are.</p>
<div className="flex flex-col items-center gap-6">
<button className="bg-gold text-black px-12 py-5 rounded-full font-medium text-lg hover:opacity-90 transition-all shadow-2xl">
                    Take the Free Quiz
                </button>
<div className="text-xs text-zinc-500 font-light flex flex-col items-center gap-2">
<p>NuArch by Dr. Sal · 214 Main Street, Ashland, MA 01721</p>
<p className="text-zinc-400 font-medium">(508) 881-1290</p>
</div>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t border-zinc-900 bg-black">
<div className="max-w-7xl mx-auto flex flex-col items-center text-center">
<img alt="NuArch Logo" className="h-6 mb-6 opacity-60" src="https://nuarchbydrsal.com/wp-content/uploads/2024/12/logo_white.png"/>
<p className="text-[10px] text-zinc-600 tracking-widest uppercase">
                © NuArch by Dr. Sal Dental Implant Center · Ashland, MA
            </p>
</div>
</footer>

    </>
  );
}
