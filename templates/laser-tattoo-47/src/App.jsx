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



        lucide.createIcons();
    
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
      
<section className="relative py-24 md:py-32 px-6 lg:px-8 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#D49A6A]/5 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">

<div className="max-w-3xl mb-16 md:mb-24">
<h2 className="text-4xl md:text-5xl lg:text-6xl text-stone-100 font-light tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>
                    The Technology Behind <br className="hidden sm:block"/> <span className="italic text-[#D49A6A]">Your Results</span>
</h2>
</div>

<div className="mb-16 lg:mb-24 bg-[#1A1A1A] rounded-3xl p-8 md:p-12 border border-stone-800/60 shadow-2xl">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div>
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D49A6A]/10 border border-[#D49A6A]/20 mb-8">
<i className="w-5 h-5 text-[#D49A6A]" data-lucide="sparkles" strokeWidth="1.5"></i>
<span className="text-sm text-[#D49A6A] font-light tracking-widest uppercase">Premium Equipment</span>
</div>
<h3 className="text-3xl md:text-4xl text-stone-100 font-light tracking-tight mb-6" style={{fontFamily: '\'Playfair Display\', serif'}}>
                            Picosecond Laser Tattoo Removal Machine
                        </h3>
<p className="text-lg font-light text-stone-400 mb-8 max-w-lg">
                            Experience the pinnacle of ink clearance with our state-of-the-art system, engineered for maximum safety and efficiency across all procedures.
                        </p>
</div>
<div className="bg-[#141414] rounded-2xl p-6 md:p-8 border border-stone-800/40">
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-[#D49A6A]/10 flex items-center justify-center shrink-0 mt-0.5">
<i className="w-5 h-5 text-[#D49A6A]" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<div>
<span className="block text-lg font-normal text-stone-200 mb-1">Advanced ND:YAG Technology</span>
<span className="block text-base font-light text-stone-500">Utilizing picosecond laser precision for optimal breakdown of ink particles.</span>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-[#D49A6A]/10 flex items-center justify-center shrink-0 mt-0.5">
<i className="w-5 h-5 text-[#D49A6A]" data-lucide="user" strokeWidth="1.5"></i>
</div>
<div>
<span className="block text-lg font-normal text-stone-200 mb-1">Universal Compatibility</span>
<span className="block text-base font-light text-stone-500">Carefully calibrated and suitable for all skin types and tones.</span>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-[#D49A6A]/10 flex items-center justify-center shrink-0 mt-0.5">
<i className="w-5 h-5 text-[#D49A6A]" data-lucide="timer" strokeWidth="1.5"></i>
</div>
<div>
<span className="block text-lg font-normal text-stone-200 mb-1">Accelerated Results</span>
<span className="block text-base font-light text-stone-500">Designed for faster, significantly more effective tattoo removal sessions.</span>
</div>
</li>
</ul>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

<div className="group bg-[#171717] hover:bg-[#1A1A1A] transition-colors duration-300 rounded-2xl p-8 border border-stone-800/50 hover:border-stone-700/50">
<div className="mb-8">
<i className="w-8 h-8 text-[#D49A6A]" data-lucide="waves" strokeWidth="1.5"></i>
</div>
<h4 className="text-2xl text-stone-100 font-light tracking-tight mb-6" style={{fontFamily: '\'Playfair Display\', serif'}}>Wavelengths</h4>
<ul className="space-y-5">
<li className="flex flex-col gap-1">
<div className="flex items-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-[#D49A6A]"></span>
<span className="text-lg font-normal text-stone-200">1064nm</span>
</div>
<span className="text-base font-light text-stone-500 pl-4.5 ml-1">Targets dark &amp; black inks</span>
</li>
<li className="flex flex-col gap-1">
<div className="flex items-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-[#D49A6A]"></span>
<span className="text-lg font-normal text-stone-200">532nm</span>
</div>
<span className="text-base font-light text-stone-500 pl-4.5 ml-1">Targets red &amp; orange toned pigments</span>
</li>
</ul>
</div>

<div className="group bg-[#171717] hover:bg-[#1A1A1A] transition-colors duration-300 rounded-2xl p-8 border border-stone-800/50 hover:border-stone-700/50">
<div className="mb-8">
<i className="w-8 h-8 text-[#D49A6A]" data-lucide="activity" strokeWidth="1.5"></i>
</div>
<h4 className="text-2xl text-stone-100 font-light tracking-tight mb-6" style={{fontFamily: '\'Playfair Display\', serif'}}>Performance</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-[#D49A6A] mt-2.5 shrink-0"></span>
<span className="text-lg font-light text-stone-300 leading-relaxed">Up to 1200mJ (single pulse) / 2350mJ (dual pulse)</span>
</li>
<li className="flex items-start gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-[#D49A6A] mt-2.5 shrink-0"></span>
<span className="text-lg font-light text-stone-300 leading-relaxed">Pulse rate: 1–10Hz</span>
</li>
<li className="flex items-start gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-[#D49A6A] mt-2.5 shrink-0"></span>
<span className="text-lg font-light text-stone-300 leading-relaxed">Ultra-fast pulse duration: 450–800ps</span>
</li>
</ul>
</div>

<div className="group bg-[#171717] hover:bg-[#1A1A1A] transition-colors duration-300 rounded-2xl p-8 border border-stone-800/50 hover:border-stone-700/50">
<div className="mb-8">
<i className="w-8 h-8 text-[#D49A6A]" data-lucide="crosshair" strokeWidth="1.5"></i>
</div>
<h4 className="text-2xl text-stone-100 font-light tracking-tight mb-6" style={{fontFamily: '\'Playfair Display\', serif'}}>Precision</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-[#D49A6A] mt-2.5 shrink-0"></span>
<span className="text-lg font-light text-stone-300 leading-relaxed">Adjustable spot size: 2–10mm</span>
</li>
<li className="flex items-start gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-[#D49A6A] mt-2.5 shrink-0"></span>
<span className="text-lg font-light text-stone-300 leading-relaxed">Top-hat beam profile for even energy delivery</span>
</li>
<li className="flex items-start gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-[#D49A6A] mt-2.5 shrink-0"></span>
<span className="text-lg font-light text-stone-300 leading-relaxed">Articulated arm with zoom handpiece</span>
</li>
</ul>
</div>

<div className="group bg-[#171717] hover:bg-[#1A1A1A] transition-colors duration-300 rounded-2xl p-8 border border-stone-800/50 hover:border-stone-700/50">
<div className="mb-8">
<i className="w-8 h-8 text-[#D49A6A]" data-lucide="cpu" strokeWidth="1.5"></i>
</div>
<h4 className="text-2xl text-stone-100 font-light tracking-tight mb-6" style={{fontFamily: '\'Playfair Display\', serif'}}>System</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-[#D49A6A] mt-2.5 shrink-0"></span>
<span className="text-lg font-light text-stone-300 leading-relaxed">10-inch touchscreen interface</span>
</li>
<li className="flex items-start gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-[#D49A6A] mt-2.5 shrink-0"></span>
<span className="text-lg font-light text-stone-300 leading-relaxed">Water + air cooling system</span>
</li>
<li className="flex items-start gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-[#D49A6A] mt-2.5 shrink-0"></span>
<span className="text-lg font-light text-stone-300 leading-relaxed">Clinic-grade, reliable performance</span>
</li>
</ul>
</div>
</div>
</div>
</section>


    </>
  );
}
