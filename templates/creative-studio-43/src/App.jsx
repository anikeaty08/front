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
      

<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md rounded-full bg-[#F5F5F0]/70 backdrop-blur-md border border-[#1A1A1A]/10 px-6 py-4 flex justify-between items-center shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
<a className="tracking-tighter text-xl font-medium text-[#1A1A1A]" href="#" style={{fontFamily: '\'Playfair Display\', serif'}}>C/S</a>
<div className="flex items-center gap-6" style={{fontFamily: '\'Montserrat\', sans-serif'}}>
<a className="text-xs tracking-widest uppercase font-medium text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors duration-300" href="#work">Work</a>
<a className="text-xs tracking-widest uppercase font-medium text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors duration-300" href="#studio">Studio</a>
</div>
<a className="text-xs tracking-widest uppercase font-medium text-[#4F46E5] hover:text-[#4F46E5]/70 transition-colors duration-300" href="#contact" style={{fontFamily: '\'Montserrat\', sans-serif'}}>Contact</a>
</nav>
<main>

<section className="max-w-[90rem] mx-auto px-4 pt-32 md:pt-40 pb-24">
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">

<div className="md:col-span-8 p-8 md:p-14 rounded-3xl bg-white/40 backdrop-blur-sm border border-[#1A1A1A]/5 flex flex-col justify-center">
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-[#1A1A1A] leading-[1.1]" style={{fontFamily: '\'Playfair Display\', serif'}}>
                        Curating visual poetry for the modern era.
                    </h1>
<p className="mt-8 text-sm md:text-base text-[#1A1A1A]/60 max-w-md font-light leading-relaxed" style={{fontFamily: '\'Montserrat\', sans-serif'}}>
                        An independent atelier bridging the gap between classical artistry and contemporary digital experiences.
                    </p>
</div>

<div className="md:col-span-4 p-8 rounded-3xl bg-[#1A1A1A] text-[#F5F5F0] flex flex-col justify-between group relative overflow-hidden">
<div className="z-10">
<div className="flex items-center gap-2 mb-4">
<div className="w-2 h-2 rounded-full bg-[#4F46E5] animate-pulse"></div>
<span className="text-xs uppercase tracking-widest font-medium text-[#F5F5F0]/60" style={{fontFamily: '\'Montserrat\', sans-serif'}}>Accepting Commissions</span>
</div>
<h2 className="text-3xl font-medium tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>Initiate a Dialogue</h2>
</div>
<button className="mt-12 z-10 w-full bg-[#4F46E5] hover:bg-white hover:text-[#1A1A1A] text-[#F5F5F0] rounded-full py-5 px-6 flex items-center justify-between transition-all duration-500">
<span className="text-xs font-medium tracking-widest uppercase" style={{fontFamily: '\'Montserrat\', sans-serif'}}>Hire Us</span>
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</button>

<div className="absolute -bottom-16 -right-16 w-64 h-64 bg-[#4F46E5]/20 blur-3xl rounded-full transition-transform duration-1000 group-hover:scale-150"></div>
</div>

<div className="md:col-span-8 h-[50vh] min-h-[400px] rounded-3xl overflow-hidden relative group">
<img alt="19th Century Landscape" className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105 filter saturate-50 contrast-125 sepia-[.2]" src="https://images.unsplash.com/photo-1580136608260-4eb11f4b24fe?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/40 to-transparent mix-blend-multiply"></div>
<div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-[#F5F5F0]">
<span className="text-xs tracking-widest uppercase font-medium backdrop-blur-md bg-black/20 px-3 py-1.5 rounded-full" style={{fontFamily: '\'Montserrat\', sans-serif'}}>Archive Vol. IV</span>
<iconify-icon className="text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" icon="solar:maximize-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<div className="md:col-span-4 grid grid-rows-[auto_1fr] gap-4 md:gap-6">

<div className="bg-white/40 backdrop-blur-sm border border-[#1A1A1A]/5 rounded-3xl p-6 flex items-center overflow-hidden h-full">
<marquee className="text-xs tracking-[0.2em] font-medium uppercase whitespace-nowrap text-[#1A1A1A]" scrollamount="3" style={{fontFamily: '\'Montserrat\', sans-serif'}}>
                            ART DIRECTION <span className="text-[#4F46E5] mx-4">✦</span> BRAND IDENTITY <span className="text-[#4F46E5] mx-4">✦</span> EDITORIAL DESIGN <span className="text-[#4F46E5] mx-4">✦</span> WEB EXPERIENCES <span className="text-[#4F46E5] mx-4">✦</span> CREATIVE STRATEGY <span className="text-[#4F46E5] mx-4">✦</span>
</marquee>
</div>

<div className="bg-[#1A1A1A] rounded-3xl p-8 flex flex-col justify-between text-[#F5F5F0]">
<p className="text-sm text-[#F5F5F0]/60 font-light leading-relaxed" style={{fontFamily: '\'Montserrat\', sans-serif'}}>
                            Headquartered in Paris.<br/>Operating without borders.
                        </p>
<div className="flex justify-between items-end mt-8">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full bg-white/10 border border-[#1A1A1A] flex items-center justify-center backdrop-blur-sm"><iconify-icon className="text-sm" icon="solar:user-rounded-linear" strokeWidth="1.5"></iconify-icon></div>
<div className="w-10 h-10 rounded-full bg-white/10 border border-[#1A1A1A] flex items-center justify-center backdrop-blur-sm"><iconify-icon className="text-sm" icon="solar:camera-linear" strokeWidth="1.5"></iconify-icon></div>
<div className="w-10 h-10 rounded-full bg-white/10 border border-[#1A1A1A] flex items-center justify-center backdrop-blur-sm"><iconify-icon className="text-sm" icon="solar:pen-new-square-linear" strokeWidth="1.5"></iconify-icon></div>
</div>
<iconify-icon className="text-5xl text-[#F5F5F0]/20" icon="solar:global-linear" strokeWidth="1"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 md:py-40 overflow-hidden" id="work">
<div className="text-center max-w-3xl mx-auto mb-32 md:mb-48">
<p className="text-xs tracking-[0.2em] uppercase font-medium text-[#4F46E5] mb-6" style={{fontFamily: '\'Montserrat\', sans-serif'}}>Selected Works</p>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#1A1A1A] leading-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>
                    Where classical discipline encounters radical vision.
                </h2>
</div>

<div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center md:items-start mb-32 md:mb-56">
<div className="w-full md:w-[55%] group cursor-pointer">
<div className="overflow-hidden rounded-2xl bg-black/5">
<img alt="Fashion Editorial" className="w-full h-auto aspect-[4/5] object-cover transition-transform duration-[1.5s] group-hover:scale-105 filter grayscale-[30%]" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&amp;fit=crop&amp;q=80&amp;w=1200" />
</img></div>
</div>
<div className="w-full md:w-[35%] md:mt-64 flex flex-col">
<span className="text-xs tracking-widest uppercase font-medium text-[#1A1A1A]/40 mb-4" style={{fontFamily: '\'Montserrat\', sans-serif'}}>01 — Editorial</span>
<h3 className="text-3xl font-medium tracking-tight mb-6 text-[#1A1A1A]" style={{fontFamily: '\'Playfair Display\', serif'}}>Sartorial Elegance</h3>
<p className="text-sm text-[#1A1A1A]/60 font-light leading-loose" style={{fontFamily: '\'Montserrat\', sans-serif'}}>
                        Exploring the boundaries of form and fabric. Our latest editorial campaign strips away the superfluous to reveal the raw, structural essence of modern tailoring.
                    </p>
<a className="inline-flex items-center gap-2 mt-8 text-xs tracking-widest uppercase font-medium text-[#4F46E5] hover:text-[#1A1A1A] transition-colors" href="#" style={{fontFamily: '\'Montserrat\', sans-serif'}}>
                        View Project <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>

<div className="flex flex-col md:flex-row-reverse gap-12 md:gap-24 items-center md:items-start">
<div className="w-full md:w-[45%] group cursor-pointer">
<div className="overflow-hidden rounded-2xl bg-black/5">
<img alt="Sculptural Architecture" className="w-full h-auto aspect-[3/4] object-cover transition-transform duration-[1.5s] group-hover:scale-105 filter contrast-125" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
</div>
<div className="w-full md:w-[40%] md:mt-32 flex flex-col md:items-end md:text-right">
<span className="text-xs tracking-widest uppercase font-medium text-[#1A1A1A]/40 mb-4" style={{fontFamily: '\'Montserrat\', sans-serif'}}>02 — Spatial</span>
<h3 className="text-3xl font-medium tracking-tight mb-6 text-[#1A1A1A]" style={{fontFamily: '\'Playfair Display\', serif'}}>Sculptural Minimalism</h3>
<p className="text-sm text-[#1A1A1A]/60 font-light leading-loose max-w-sm" style={{fontFamily: '\'Montserrat\', sans-serif'}}>
                        A study in light, shadow, and void. We craft physical environments that speak softly but resonate deeply, allowing the subject to effortlessly command the space.
                    </p>
<a className="inline-flex items-center gap-2 mt-8 text-xs tracking-widest uppercase font-medium text-[#4F46E5] hover:text-[#1A1A1A] transition-colors" href="#" style={{fontFamily: '\'Montserrat\', sans-serif'}}>
                        View Project <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</section>

<div className="max-w-7xl mx-auto px-6">
<div className="w-full h-px bg-[#1A1A1A]/10"></div>
</div>

<footer className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="tracking-tighter text-2xl font-medium text-[#1A1A1A]" style={{fontFamily: '\'Playfair Display\', serif'}}>C/S</div>
<p className="text-xs text-[#1A1A1A]/40 font-light tracking-wide" style={{fontFamily: '\'Montserrat\', sans-serif'}}>© 2024 Creative Studio. All rights reserved.</p>
<div className="flex gap-4 text-[#1A1A1A]/60">
<a className="hover:text-[#1A1A1A] transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:figma-linear" strokeWidth="1.5"></iconify-icon></a>
<a className="hover:text-[#1A1A1A] transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:basketball-linear" strokeWidth="1.5"></iconify-icon></a>
<a className="hover:text-[#1A1A1A] transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:link-linear" strokeWidth="1.5"></iconify-icon></a>
</div>
</footer>
</main>

    </>
  );
}
