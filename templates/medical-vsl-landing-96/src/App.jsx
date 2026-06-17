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
      

<header className="py-12 flex justify-center px-6">
<img alt="Leonard Hair Transplant Associates" className="h-16 w-auto" src="https://www.hairdr.com/wp-content/themes/hairdr-2015/images/svg/logo-leonard2.svg"/>
</header>

<section className="max-w-5xl mx-auto px-6 text-center pb-24">
<h1 className="text-4xl lg:text-6xl font-semibold tracking-tight text-zinc-950 mb-6">
            New England's Most Trusted Hair Restoration Team Is Now Taking New Patients
        </h1>
<p className="text-lg lg:text-xl text-zinc-500 mb-12 max-w-3xl mx-auto">
            30 years. 5 locations. Real results. Watch the short video and book your free consultation below.
        </p>

<div className="relative w-full aspect-video bg-zinc-50 border border-zinc-200 rounded-3xl flex items-center justify-center shadow-sm mb-12 overflow-hidden">
<div className="flex flex-col items-center">
<iconify-icon className="text-zinc-300 text-[5rem] mb-4" icon="solar:play-circle-linear"></iconify-icon>
<span className="text-zinc-400 font-medium tracking-wide text-sm uppercase">VSL Video Goes Here</span>
</div>
</div>

<div className="flex justify-center">
<button className="w-full md:w-auto bg-[#008080] hover:bg-[#006666] text-white text-lg font-semibold px-12 py-5 rounded-xl transition-all duration-300 shadow-lg shadow-[#008080]/20">
                Click Here to Book Your Free Consultation
            </button>
</div>
</section>

<div className="bg-[#008080] py-4">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-white text-sm font-medium uppercase tracking-[0.2em]">
                5.0 Stars — 178 Google Reviews — Trusted by New England Patients for Over 30 Years
            </p>
</div>
</div>

<section className="max-w-6xl mx-auto px-6 py-32">
<div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
<div className="text-center flex flex-col items-center">
<iconify-icon className="mb-6" icon="solar:history-linear" style={{color: '#008080', fontSize: '2.5rem'}}></iconify-icon>
<h3 className="text-xl font-semibold tracking-tight mb-3">30+ Years</h3>
<p className="text-zinc-500 text-sm leading-relaxed max-w-[240px]">
                    Helping New England patients restore their hair and confidence
                </p>
</div>
<div className="text-center flex flex-col items-center">
<iconify-icon className="mb-6" icon="solar:map-point-linear" style={{color: '#008080', fontSize: '2.5rem'}}></iconify-icon>
<h3 className="text-xl font-semibold tracking-tight mb-3">5 Locations</h3>
<p className="text-zinc-500 text-sm leading-relaxed max-w-[240px]">
                    Newton, Boston, Braintree, Warwick RI, and Salem NH
                </p>
</div>
<div className="text-center flex flex-col items-center">
<iconify-icon className="mb-6" icon="solar:health-linear" style={{color: '#008080', fontSize: '2.5rem'}}></iconify-icon>
<h3 className="text-xl font-semibold tracking-tight mb-3">FUE and PRP</h3>
<p className="text-zinc-500 text-sm leading-relaxed max-w-[240px]">
                    Advanced surgical and non-surgical options for men and women
                </p>
</div>
</div>
</section>

<section className="bg-zinc-50 py-32">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-4">What Patients Are Saying</h2>
<p className="text-zinc-500 text-lg">Real people. Real results. Watch their stories.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="aspect-video bg-black rounded-2xl overflow-hidden shadow-md">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="w-full h-full" frameborder="0" src="https://www.youtube.com/embed/RGl-yJsnglM"></iframe>
</div>
<div className="aspect-video bg-black rounded-2xl overflow-hidden shadow-md">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="w-full h-full" frameborder="0" src="https://www.youtube.com/embed/4OzmwQPIVII"></iframe>
</div>
<div className="aspect-video bg-black rounded-2xl overflow-hidden shadow-md">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="w-full h-full" frameborder="0" src="https://www.youtube.com/embed/BMJ1K3CmIk4"></iframe>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-32">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-4">In Their Own Words</h2>
</div>
<div className="space-y-8">

<div className="bg-white p-8 md:p-10 border-l-[6px] border-[#008080] shadow-sm rounded-r-2xl">
<p className="text-lg text-zinc-700 italic mb-6 leading-relaxed">
                    "Dr. Lopresti and his staff provided an exceptional experience in the FUE procedure at their Newton location. Pre-visit consultation, communication, flexibility in scheduling and post-op support were all 5 stars. I'm just now starting to see exciting results, about 4 months out and as expected."
                </p>
<p className="font-semibold text-zinc-950 uppercase tracking-wider text-xs">— Nir Soudry, Google Review</p>
</div>

<div className="bg-white p-8 md:p-10 border-l-[6px] border-[#008080] shadow-sm rounded-r-2xl">
<p className="text-lg text-zinc-700 italic mb-6 leading-relaxed">
                    "I have not regretted having the surgeries once and I would urge anyone who is losing their hair to go for a consultation and decide for yourself. It was worth every penny."
                </p>
<p className="font-semibold text-zinc-950 uppercase tracking-wider text-xs">— Jan Park Kenerson, Patient</p>
</div>

<div className="bg-white p-8 md:p-10 border-l-[6px] border-[#008080] shadow-sm rounded-r-2xl">
<p className="text-lg text-zinc-700 italic mb-6 leading-relaxed">
                    "I cannot stress the importance of getting ahead of this before it's too late. I'm so glad that I went to Dr. Lopresti and started the process."
                </p>
<p className="font-semibold text-zinc-950 uppercase tracking-wider text-xs">— Matt Grzelcyk, Chicago Blackhawks Defenseman</p>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-32 border-t border-zinc-100">
<div className="text-center">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-8">About Leonard Hair Transplant Associates</h2>
<div className="space-y-6 text-lg text-zinc-600 leading-relaxed">
<p>Dr. Matthew Lopresti and Dr. Mary Lopresti have spent decades helping men and women across New England get their hair back.</p>
<p>Dr. Matthew Lopresti completed his subspecialty training through Harvard Medical School. He is a Fellow of the International Society of Hair Restoration Surgery.</p>
<p>The practice offers FUE hair transplant surgery, NeoGraft restoration, PRP with ACell treatment, and non-surgical options. A free consultation is available at all five locations.</p>
<p className="text-zinc-900 font-medium">This isn't a chain. It's a practice that's been in your community for over 30 years.</p>
</div>
</div>
</section>

<section className="bg-[#008080] py-24 text-center px-6">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-4">Ready to Get Started?</h2>
<p className="text-white/80 text-lg mb-10">Book your free consultation today. The team will walk you through your options with zero pressure.</p>
<button className="w-full md:w-auto bg-white text-[#008080] hover:bg-zinc-50 text-lg font-semibold px-12 py-5 rounded-xl transition-all duration-300 shadow-xl">
                Click Here to Book Your Free Consultation
            </button>
</div>
</section>

<footer className="bg-zinc-950 py-20 text-center px-6">
<div className="max-w-4xl mx-auto">
<div className="mb-8">
<p className="text-white font-semibold tracking-widest uppercase text-sm mb-4">Leonard Hair Transplant Associates</p>
<p className="text-zinc-400 text-lg font-medium mb-6">1-800-GET-HAIR</p>
<p className="text-zinc-500 text-sm mb-4">Newton | Boston | Braintree | Warwick RI | Salem NH</p>
<a className="text-[#008080] hover:text-[#00a0a0] transition-colors font-medium" href="https://hairdr.com">hairdr.com</a>
</div>
<div className="pt-8 border-t border-zinc-800">
<p className="text-zinc-600 text-xs">
                    © 2026 Leonard Hair Transplant Associates. All rights reserved.
                </p>
</div>
</div>
</footer>

    </>
  );
}
