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
<img alt="PNW Hair Restoration" className="h-16 w-auto object-contain" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkUuHXQTiBUlCxpBG8wonbfrTUYDUUkdr9-Q&amp;s"/>
</header>

<section className="max-w-4xl mx-auto px-6 text-center mb-12">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-6">
            Oregon's Only Robotic Hair Restoration Clinic Is Taking New Patients in Tigard and Bend
        </h1>
<p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Watch the short video below. Then book your free consultation with Dr. Higgins or Dr. Fallon.
        </p>
<a className="inline-block bg-[#0D678A] text-white text-lg font-medium py-4 px-10 rounded-full transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-teal-900/10" href="#booking">
            Click Here to Book Your Free Consultation
        </a>
</section>

<section className="max-w-5xl mx-auto px-6 mb-16">
<div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black">

<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="absolute inset-0 w-full h-full" frameborder="0" src="https://www.youtube.com/embed/xSRLBuFG5Us" title="YouTube video player"></iframe>
</div>
<p className="text-center text-sm text-slate-500 mt-6 flex items-center justify-center gap-2">
<iconify-icon icon="solar:play-circle-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
            Real patients. Real results. ARTAS iX Robotic Hair Restoration with Dr. Andy Higgins.
        </p>
</section>

<section className="bg-[#0D678A] text-white py-12 mb-24">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
<div className="flex flex-col items-center">
<iconify-icon className="text-3xl mb-3" icon="solar:verified-check-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-lg font-medium">20+ Years of Surgical Experience</span>
</div>
<div className="flex flex-col items-center">
<iconify-icon className="text-3xl mb-3" icon="solar:cpu-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-lg font-medium">Oregon's Only ARTAS iX® Robotic System</span>
</div>
<div className="flex flex-col items-center">
<iconify-icon className="text-3xl mb-3" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-lg font-medium">Two Locations — Tigard and Bend</span>
</div>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 text-center mb-32 space-y-8">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Most hair clinics are still using the same manual tools from 20 years ago.
        </h2>
<div className="text-lg md:text-xl text-slate-700 leading-loose space-y-6">
<p>PNW Hair Restoration is different.</p>
<p>Dr. Higgins and Dr. Fallon use the <span className="font-medium text-[#0D678A]">ARTAS iX® Robotic Hair Restoration System</span>.</p>
<p>It is the only one in the state of Oregon.</p>
<p>It finds and selects the best follicles with robotic precision.</p>
<p className="font-medium">Less scarring. More natural results. Faster recovery.</p>
<p>This is not a chain clinic. This is two experienced surgeons who care about your results.</p>
</div>
</section>

<section className="bg-slate-50 py-24 mb-32">
<div className="max-w-4xl mx-auto px-6 text-center">
<iconify-icon className="text-5xl text-[#0D678A] mb-8" icon="solar:chat-square-quote-linear" strokeWidth="1.5"></iconify-icon>
<blockquote className="text-2xl md:text-3xl italic font-light text-slate-800 leading-snug mb-8">
                "Dr. Higgins is great. Very easy to communicate with. The procedure was way easier than I expected and recovery has been very easy and fast. I see new hair growing already. I feel I made a good decision choosing PNW Hair Restoration. I highly recommend them."
            </blockquote>
<p className="text-[#0D678A] font-medium text-base mb-16">— T&amp;M Dryden, PNW Hair Restoration Patient</p>
<div className="max-w-2xl mx-auto aspect-video bg-slate-200 rounded-2xl flex items-center justify-center border-2 border-dashed border-slate-300">
<div className="text-center text-slate-500">
<iconify-icon className="text-4xl mb-2" icon="solar:videocamera-record-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-sm font-medium">[Video Testimonial Placeholder]</p>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 mb-32 text-center">
<div className="grid grid-cols-1 md:grid-cols-3 gap-16">
<div className="space-y-4">
<div className="w-12 h-12 bg-slate-100 text-[#0D678A] rounded-full flex items-center justify-center mx-auto mb-6">
<span className="text-xl font-semibold">1</span>
</div>
<h3 className="text-xl font-semibold tracking-tight">Book Your Free Consultation</h3>
<p className="text-slate-600 leading-relaxed">Talk with the team about your hair loss and your goals.</p>
</div>
<div className="space-y-4">
<div className="w-12 h-12 bg-slate-100 text-[#0D678A] rounded-full flex items-center justify-center mx-auto mb-6">
<span className="text-xl font-semibold">2</span>
</div>
<h3 className="text-xl font-semibold tracking-tight">Get Your Custom Plan</h3>
<p className="text-slate-600 leading-relaxed">Dr. Higgins or Dr. Fallon builds a restoration plan just for you.</p>
</div>
<div className="space-y-4">
<div className="w-12 h-12 bg-slate-100 text-[#0D678A] rounded-full flex items-center justify-center mx-auto mb-6">
<span className="text-xl font-semibold">3</span>
</div>
<h3 className="text-xl font-semibold tracking-tight">See Real Results</h3>
<p className="text-slate-600 leading-relaxed">Most patients see new growth starting within six months.</p>
</div>
</div>
</section>

<section className="bg-[#0D678A] py-24 px-6 text-center text-white" id="booking">
<div className="max-w-3xl mx-auto">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">Ready to Get Started?</h2>
<p className="text-xl text-teal-50/80 mb-12">Consultations are free. Both locations available. Financing options too.</p>
<a className="inline-block bg-white text-[#0D678A] text-lg font-medium py-4 px-12 rounded-full transition-transform hover:scale-105 active:scale-95 shadow-xl" href="#">
                Click Here to Book Your Free Consultation
            </a>
</div>
</section>

<footer className="py-16 px-6 bg-white border-t border-slate-100 text-center">
<div className="max-w-4xl mx-auto">
<p className="font-semibold tracking-widest text-xs uppercase mb-8 text-slate-400">Pacific Northwest Hair Restoration</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-slate-500 mb-12 leading-relaxed">
<div>
<p className="font-medium text-slate-900 mb-1">Tigard Clinic</p>
<p>9735 SW Shady Ln, Suite 200, Tigard, OR 97223</p>
<p className="mt-1">(503) 941-5029</p>
</div>
<div>
<p className="font-medium text-slate-900 mb-1">Bend Clinic</p>
<p>2450 NE Mary Rose Pl, Suite 205, Bend, OR 97701</p>
<p className="mt-1">(541) 749-4247</p>
</div>
</div>
<a className="text-xs text-[#0D678A] hover:underline font-medium" href="https://pnwhairrestoration.com" target="_blank">pnwhairrestoration.com</a>
</div>
</footer>

    </>
  );
}
