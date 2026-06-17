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
      

<header className="py-6 px-6 lg:px-12 border-b border-gray-50">
<div className="max-w-7xl mx-auto">
<img alt="Zeal Integrated Health" className="h-12 lg:h-16 w-auto" src="https://doc.vortala.com/childsites/uploads/4412/files/Logo.jpg"/>
</div>
</header>

<section className="py-16 lg:py-24 px-6">
<div className="max-w-4xl mx-auto text-center">
<h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-gray-900 mb-6">
                Still Tired. Still Struggling. And Your Doctor Says <span className="teal-accent">Everything Looks Fine.</span>
</h1>
<p className="text-base md:text-xl font-normal text-gray-500 mb-10 leading-relaxed">
                There's a reason you feel this way. And it's fixable. Zeal Integrated Health in Springfield has helped hundreds of patients get to the root cause of their thyroid issues, diabetes, and chronic fatigue, without more medications.
            </p>
<div className="flex justify-center">
<a className="bg-teal-accent text-white px-8 py-4 rounded-full text-base md:text-lg font-medium hover:opacity-90 transition-all w-full md:w-auto shadow-lg shadow-teal-900/10" href="#">
                    Click Here to Book Your Free Consultation
                </a>
</div>
</div>
</section>

<section className="pb-16 lg:pb-24 px-6">
<div className="max-w-5xl mx-auto">
<div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden border border-teal-500/20 shadow-2xl flex items-center justify-center relative">

<div className="text-center">
<iconify-icon className="text-6xl mb-4" icon="solar:play-circle-linear" style={{color: '#008080'}}></iconify-icon>
<p className="text-sm font-medium tracking-wide uppercase text-gray-400">VSL Placeholder Content</p>
</div>
</div>
<p className="text-center mt-6 text-sm italic text-gray-400">
                Watch this short video to learn how we find what's really going on.
            </p>
</div>
</section>

<section className="bg-teal-accent/90 py-8 px-6">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
<div className="flex flex-col items-center">
<iconify-icon className="text-2xl mb-2" icon="solar:calendar-date-linear"></iconify-icon>
<span className="text-sm font-medium">In Practice Since 2001</span>
</div>
<div className="flex flex-col items-center">
<iconify-icon className="text-2xl mb-2" icon="solar:users-group-rounded-linear"></iconify-icon>
<span className="text-sm font-medium text-center px-4">Springfield's Trusted Functional Medicine Team</span>
</div>
<div className="flex flex-col items-center">
<iconify-icon className="text-2xl mb-2" icon="solar:heart-pulse-linear"></iconify-icon>
<span className="text-sm font-medium">96% of Patients Recommend Us</span>
</div>
</div>
</section>

<section className="py-20 lg:py-32 px-6">
<div className="max-w-4xl mx-auto">
<h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-10 text-center md:text-left">Does This Sound Like You?</h2>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<iconify-icon className="text-2xl mt-1 flex-shrink-0" icon="solar:check-circle-linear" style={{color: '#008080'}}></iconify-icon>
<p className="text-base md:text-lg text-gray-600">You've been told your labs are normal but you still feel exhausted.</p>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-2xl mt-1 flex-shrink-0" icon="solar:check-circle-linear" style={{color: '#008080'}}></iconify-icon>
<p className="text-base md:text-lg text-gray-600">You've tried different medications but nothing is really working.</p>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-2xl mt-1 flex-shrink-0" icon="solar:check-circle-linear" style={{color: '#008080'}}></iconify-icon>
<p className="text-base md:text-lg text-gray-600">You're dealing with stubborn weight, brain fog, or unpredictable blood sugar.</p>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-2xl mt-1 flex-shrink-0" icon="solar:check-circle-linear" style={{color: '#008080'}}></iconify-icon>
<p className="text-base md:text-lg text-gray-600">You want real answers, not another prescription.</p>
</li>
</ul>
</div>
</section>

<section className="py-20 lg:py-32 px-6 bg-gray-50/50">
<div className="max-w-6xl mx-auto">
<h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-16 text-center">Here's How We Help</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
<div className="text-teal-accent font-semibold text-sm tracking-widest uppercase mb-4">Step 1</div>
<h3 className="text-xl font-semibold mb-3 text-gray-900">Find the Root Cause</h3>
<p className="text-sm md:text-base text-gray-500 leading-relaxed">We run thorough diagnostic testing to find what's actually going on.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
<div className="text-teal-accent font-semibold text-sm tracking-widest uppercase mb-4">Step 2</div>
<h3 className="text-xl font-semibold mb-3 text-gray-900">Build a Plan Just for You</h3>
<p className="text-sm md:text-base text-gray-500 leading-relaxed">No cookie-cutter programs. Every care plan is built around your specific results.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
<div className="text-teal-accent font-semibold text-sm tracking-widest uppercase mb-4">Step 3</div>
<h3 className="text-xl font-semibold mb-3 text-gray-900">Get Your Life Back</h3>
<p className="text-sm md:text-base text-gray-500 leading-relaxed">Patients reduce or eliminate medications. Energy comes back. Life gets better.</p>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 px-6">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-12">Real People. Real Results.</h2>
<div className="aspect-video rounded-2xl overflow-hidden shadow-xl border border-gray-100">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="w-full h-full" frameborder="0" src="https://www.youtube.com/embed/gQYjqhJv4y0" title="Patient Testimonial"></iframe>
</div>
<p className="mt-6 text-sm text-gray-500">
                Jackie shares her experience overcoming hypothyroidism at Zeal Integrated Health.
            </p>
</div>
</section>

<section className="py-20 lg:py-32 px-6 bg-white">
<div className="max-w-3xl mx-auto space-y-8">

<div className="border-l-4 border-teal-accent bg-gray-50 p-8 rounded-r-xl">
<p className="italic text-base md:text-lg text-gray-700 leading-relaxed">
                    "Dr Crockett and Dr Crocker have changed my life. I lost my brain fog, am no longer perpetually tired, back pain went away, hormones are more regulated, and I lost 30 pounds before I ever started at a gym."
                </p>
<p className="mt-4 text-xs font-semibold tracking-widest uppercase text-teal-accent">— Briana H.</p>
</div>

<div className="border-l-4 border-teal-accent bg-gray-50 p-8 rounded-r-xl">
<p className="italic text-base md:text-lg text-gray-700 leading-relaxed">
                    "Before I started, my blood sugars averaged 250 and that was on medication. After 2 weeks they average 125. I was lethargic and suffered from reflux. Now I have energy and no reflux."
                </p>
<p className="mt-4 text-xs font-semibold tracking-widest uppercase text-teal-accent">— Bill</p>
</div>

<div className="border-l-4 border-teal-accent bg-gray-50 p-8 rounded-r-xl">
<p className="italic text-base md:text-lg text-gray-700 leading-relaxed">
                    "I tried every variety and combo of medications and nothing worked. I urge you to make the call. They CAN help."
                </p>
<p className="mt-4 text-xs font-semibold tracking-widest uppercase text-teal-accent">— Kate</p>
</div>
</div>
</section>

<section className="py-20 lg:py-32 px-6 bg-gray-50">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-8">Serving Springfield Since 2001</h2>
<div className="space-y-6 text-base md:text-lg text-gray-600 leading-relaxed">
<p>
                    Zeal Integrated Health was founded by Dr. Jason Crockett right here in Southwest Missouri. The practice has grown to include a team of three doctors who specialize in functional medicine and chiropractic care.
                </p>
<p>
                    They focus on finding the underlying cause of your condition, not just managing symptoms.
                </p>
<p className="font-medium text-gray-900">
                    Most patients come in as a last resort. Most leave wondering why they waited so long.
                </p>
</div>
</div>
</section>

<section className="bg-teal-accent py-20 lg:py-32 px-6 text-center">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">Ready to Finally Feel Like Yourself Again?</h2>
<p className="text-base md:text-xl text-teal-50 mb-10 opacity-90">
                Book a free consultation with the Zeal Integrated Health team. We'll talk through what's going on and tell you honestly if we can help.
            </p>
<a className="inline-block bg-white text-teal-accent px-10 py-5 rounded-full text-lg font-semibold hover:bg-gray-50 transition-colors shadow-xl" href="#">
                Click Here to Book Your Free Consultation
            </a>
<p className="mt-6 text-xs text-teal-100 uppercase tracking-widest">No pressure. No obligation. Just answers.</p>
</div>
</section>

<footer className="py-12 px-6 border-t border-gray-100">
<div className="max-w-4xl mx-auto text-center">
<img alt="Zeal Logo" className="h-10 mx-auto grayscale opacity-50 mb-6" src="https://doc.vortala.com/childsites/uploads/4412/files/Logo.jpg"/>
<div className="text-sm text-gray-400 space-y-1">
<p className="font-medium text-gray-500">Zeal Integrated Health</p>
<p>733 W Kearney Street, Springfield, MO 65803</p>
<p>(417) 831-7575</p>
<div className="pt-4">
<a className="hover:text-teal-accent transition-colors underline decoration-gray-200 underline-offset-4" href="#">Privacy Policy</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
