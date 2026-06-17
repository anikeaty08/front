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
      

<header className="py-10 px-6 md:px-12">
<div className="max-w-7xl mx-auto">
<div className="text-xl font-semibold tracking-tighter uppercase">
                Moleno <span className="gold-accent">Hair Restoration</span>
</div>
</div>
</header>

<section className="py-20 px-6 md:px-12">
<div className="max-w-4xl mx-auto text-center space-y-8">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
                Dallas Men Are Getting Their Hair Back. For Good.
            </h1>
<p className="text-lg md:text-xl gold-accent font-normal max-w-2xl mx-auto">
                Dr. Moleno is an ISHRS fellowship-trained hair restoration surgeon in Dallas. Natural results. No pluggy look. Just clean, permanent work.
            </p>
<div className="pt-4 space-y-6">
<p className="text-sm font-light text-zinc-400">
                    Book a free consultation call. Find out if you're a candidate.
                </p>
<a className="inline-block gold-bg text-black font-semibold py-5 px-10 rounded-full transition-transform hover:scale-105 active:scale-95 text-base" href="#">
                    Click Here to Book Your Consultation
                </a>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-zinc-950/50">
<div className="max-w-5xl mx-auto text-center">
<h2 className="text-xs uppercase tracking-widest text-zinc-500 mb-8 font-medium">Watch This First</h2>
<div className="relative aspect-video w-full bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center group cursor-pointer overflow-hidden">
<div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
<iconify-icon className="text-white text-3xl" icon="solar:play-bold"></iconify-icon>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
</div>
<p className="mt-6 text-sm text-zinc-400 font-light italic">
                Dr. Moleno explains exactly what to expect, start to finish.
            </p>
</div>
</section>

<section className="py-32 px-6 md:px-12">
<div className="max-w-7xl mx-auto">
<h2 className="text-2xl md:text-3xl font-semibold gold-accent tracking-tight text-center mb-16">
                Real Patients. Real Results.
            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-zinc-900/40 p-10 rounded-2xl border border-zinc-800 space-y-4">
<iconify-icon className="gold-accent text-3xl" icon="solar:quotation-marks-bold"></iconify-icon>
<p className="text-base leading-relaxed font-light">
                        "I feel and look like a new man and the process was painless and easy. Even after the procedure, Dr. Moleno had kept up with my progress."
                    </p>
<div className="pt-4 text-xs font-medium uppercase tracking-wider text-zinc-500">
                        — Rami R., Dallas
                    </div>
</div>

<div className="bg-zinc-900/40 p-10 rounded-2xl border border-zinc-800 space-y-4">
<iconify-icon className="gold-accent text-3xl" icon="solar:quotation-marks-bold"></iconify-icon>
<p className="text-base leading-relaxed font-light">
                        "Very meticulous and a master of his craft. I traveled from Florida, he helped with accommodations and made me feel like I never left home. I finally have the confidence to not wear a hat."
                    </p>
<div className="pt-4 text-xs font-medium uppercase tracking-wider text-zinc-500">
                        — Jacob F., Florida
                    </div>
</div>

<div className="bg-zinc-900/40 p-10 rounded-2xl border border-zinc-800 space-y-4">
<iconify-icon className="gold-accent text-3xl" icon="solar:quotation-marks-bold"></iconify-icon>
<p className="text-base leading-relaxed font-light">
                        "Top notch experience from start to finish. I traveled from Florida for my procedure and I can't say enough good things about my choice."
                    </p>
<div className="pt-4 text-xs font-medium uppercase tracking-wider text-zinc-500">
                        — Shane K., Florida
                    </div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-zinc-950">
<div className="max-w-7xl mx-auto text-center">
<h2 className="text-3xl font-semibold tracking-tight mb-20">Why Patients Choose Dr. Moleno</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="flex flex-col items-center space-y-4">
<iconify-icon className="gold-accent text-5xl" icon="solar:medal-ribbon-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-lg font-medium">ISHRS Fellowship Trained</h3>
<p className="text-sm text-zinc-400 font-light max-w-xs">Gold standard for hair restoration surgeons.</p>
</div>
<div className="flex flex-col items-center space-y-4">
<iconify-icon className="gold-accent text-5xl" icon="solar:layers-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-lg font-medium">FUE Specialist</h3>
<p className="text-sm text-zinc-400 font-light max-w-xs">Individual follicle extraction. No linear scar. Natural results.</p>
</div>
<div className="flex flex-col items-center space-y-4">
<iconify-icon className="gold-accent text-5xl" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-lg font-medium">Dallas, TX</h3>
<p className="text-sm text-zinc-400 font-light max-w-xs">Serving patients from across the country.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12">
<div className="max-w-7xl mx-auto">
<h2 className="text-2xl md:text-3xl font-semibold gold-accent tracking-tight text-center mb-16">
                The Results Speak for Themselves
            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="space-y-4">
<div className="aspect-[4/5] bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center text-zinc-700 text-sm italic">
                        [ Patient Photo 1 ]
                    </div>
<p className="text-xs text-center text-zinc-400 font-light">3,300 grafts — 12 months post-op</p>
</div>
<div className="space-y-4">
<div className="aspect-[4/5] bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center text-zinc-700 text-sm italic">
                        [ Patient Photo 2 ]
                    </div>
<p className="text-xs text-center text-zinc-400 font-light">2,305 grafts — natural hairline design</p>
</div>
<div className="space-y-4">
<div className="aspect-[4/5] bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center text-zinc-700 text-sm italic">
                        [ Patient Photo 3 ]
                    </div>
<p className="text-xs text-center text-zinc-400 font-light">1,772 grafts — 8 months, frontal density</p>
</div>
</div>
<p className="text-center mt-12 text-zinc-600 text-xs tracking-wide uppercase">Before and After Gallery — insert patient photos here</p>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-zinc-950">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl font-semibold tracking-tight text-center mb-20">Here's How It Works</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
<div className="relative">
<div className="text-5xl font-semibold gold-accent mb-6 opacity-50">01</div>
<h3 className="text-xl font-medium mb-3">Book a Free Call</h3>
<p className="text-zinc-400 font-light text-base leading-relaxed">Talk to the team. Find out if you're a candidate.</p>
</div>
<div className="relative">
<div className="text-5xl font-semibold gold-accent mb-6 opacity-50">02</div>
<h3 className="text-xl font-medium mb-3">Get Your Plan</h3>
<p className="text-zinc-400 font-light text-base leading-relaxed">Dr. Moleno designs a custom restoration plan for your hair loss pattern.</p>
</div>
<div className="relative">
<div className="text-5xl font-semibold gold-accent mb-6 opacity-50">03</div>
<h3 className="text-xl font-medium mb-3">Get Your Hair Back</h3>
<p className="text-zinc-400 font-light text-base leading-relaxed">Minimally invasive FUE. Back to normal in 3 to 5 days.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12">
<div className="max-w-3xl mx-auto text-center space-y-10">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Ready to find out if you're a candidate?</h2>
<div className="space-y-6">
<a className="inline-block gold-bg text-black font-semibold py-5 px-10 rounded-full transition-transform hover:scale-105 active:scale-95 text-base" href="#">
                    Click Here to Book Your Consultation
                </a>
<p className="text-sm text-zinc-500 font-light">
                    Free consultation. In-person or via Telehealth. No pressure.
                </p>
</div>
</div>
</section>

<footer className="py-20 px-6 md:px-12 border-t border-zinc-900 bg-black">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
<div className="space-y-4">
<div className="text-lg font-semibold tracking-tighter uppercase">
                    Moleno <span className="gold-accent">Hair Restoration</span>
</div>
<div className="text-sm text-zinc-500 leading-relaxed font-light">
                    3303 Lee Pkwy, STE 103, Dallas, TX 75219<br/>
                    (469) 414-9914<br/>
                    rb@molenohair.com
                </div>
</div>
<div className="md:text-right flex flex-col justify-end h-full">
<p className="text-xs text-zinc-600 italic">Individual results may vary.</p>
<p className="text-xs text-zinc-700 mt-4">© 2024 Moleno Hair Restoration. All rights reserved.</p>
</div>
</div>
</footer>

    </>
  );
}
