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
      

<header className="absolute top-0 w-full z-50 px-6 py-8 md:px-12 flex justify-between items-center">
<div className="text-2xl tracking-tight text-slate-900 uppercase" style={{fontFamily: '\'Playfair Display\', serif'}}>Támara Hughes</div>
<nav className="hidden md:flex gap-10 text-lg font-light text-slate-600">
<a className="hover:text-slate-900 transition-colors duration-300" href="#about">About</a>
<a className="hover:text-slate-900 transition-colors duration-300" href="#brands">Partners</a>
<a className="hover:text-slate-900 transition-colors duration-300" href="#education">Education</a>
<a className="hover:text-slate-900 transition-colors duration-300" href="#services">Services</a>
</nav>
<button className="md:hidden text-slate-900">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</header>

<section className="relative min-h-screen flex items-center pt-32 pb-20 px-6 md:px-12 lg:px-24 overflow-hidden bg-white">
<div className="absolute inset-0 bg-gradient-to-b from-stone-50/80 to-transparent z-0 pointer-events-none"></div>
<div className="relative z-10 max-w-5xl space-y-8 mt-12 md:mt-0">
<div className="flex items-center gap-4">
<div className="h-[1px] w-12 bg-amber-700/50"></div>
<span className="text-lg tracking-[0.2em] uppercase text-amber-700/80 font-light">Esthetics &amp; Education</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight text-[#0f172a] leading-[1.1]" style={{fontFamily: '\'Playfair Display\', serif'}}>
                Elevating the <br/>Standard of <br/><span className="text-amber-700/90 italic font-light">Clinical Skincare</span>
</h1>
<p className="text-xl md:text-2xl text-slate-500 max-w-2xl font-light leading-relaxed pt-4">
                Támara Hughes bridges the gap between advanced clinical treatments and premium skincare education for professionals, representing industry-leading brands.
            </p>
<div className="pt-8 flex flex-col sm:flex-row gap-6">
<a className="inline-flex items-center justify-center px-8 py-4 bg-[#0f172a] text-white text-lg font-light hover:bg-slate-800 transition-colors duration-300" href="#education">
                    Explore Education
                </a>
<a className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-stone-200 text-slate-900 text-lg font-light hover:border-slate-400 transition-colors duration-300" href="#brands">
                    Discover Partners
                </a>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-stone-50" id="about">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
<div className="lg:col-span-5 relative">
<div className="aspect-[3/4] bg-stone-200 w-full relative overflow-hidden group shadow-lg shadow-stone-200/50">
<img alt="Támara Hughes" className="absolute inset-0 w-full h-full object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2bd077fb-4a00-4e71-b46c-967070aeecf1_800w.png"/>
</div>
<div className="absolute -bottom-8 -right-8 w-48 h-48 border border-amber-700/20 -z-10 hidden md:block"></div>
</div>
<div className="lg:col-span-7 space-y-10">
<h2 className="text-3xl md:text-5xl tracking-tight text-[#0f172a]" style={{fontFamily: '\'Playfair Display\', serif'}}>Authority in Skin Health</h2>
<div className="space-y-6 text-xl text-slate-600 font-light leading-relaxed">
<p>With an unwavering commitment to efficacy and luxury, Támara Hughes has cultivated a reputation as a leading clinical esthetician and respected industry voice. Her methodology integrates advanced scientific principles with a refined, meticulous approach to treatment.</p>
<p>Beyond the treatment room, Támara serves as a trusted educator and brand representative. She empowers fellow estheticians and professionals, imparting the nuanced skills required to deliver transformative results and command premium value in their practices.</p>
</div>
<div className="grid grid-cols-2 gap-8 pt-8 border-t border-stone-200/60">
<div>
<p className="text-4xl text-[#0f172a] mb-2 tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>Expertise</p>
<p className="text-lg text-slate-500 font-light">Advanced Modalities &amp; Ingredients</p>
</div>
<div>
<p className="text-4xl text-[#0f172a] mb-2 tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>Education</p>
<p className="text-lg text-slate-500 font-light">Professional Training &amp; Certification</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-[#0f172a]">
<div className="max-w-5xl mx-auto text-center space-y-12">
<span className="text-lg tracking-[0.2em] uppercase text-amber-500/80 font-light">Premier Partnership</span>
<h2 className="text-5xl md:text-7xl tracking-tight text-white" style={{fontFamily: '\'Playfair Display\', serif'}}>Lumapharm</h2>
<p className="text-xl md:text-2xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
                Representing the pinnacle of clinical skincare. Lumapharm delivers uncompromising efficacy through innovative formulations, designed specifically for the most discerning esthetics professionals.
            </p>
<div className="pt-8 flex justify-center">
<a className="group inline-flex items-center gap-3 text-xl text-white font-light border-b border-amber-500/40 pb-2 hover:border-amber-500 transition-colors duration-300" href="https://www.lumapharm.com" target="_blank">
                    Discover the Collection 
                    <span className="group-hover:translate-x-1 transition-transform duration-300 flex items-center">
<iconify-icon height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</span>
</a>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-white" id="brands">
<div className="max-w-7xl mx-auto space-y-20">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
<div className="max-w-2xl space-y-6">
<h2 className="text-3xl md:text-4xl tracking-tight text-[#0f172a]" style={{fontFamily: '\'Playfair Display\', serif'}}>Curated Brand Portfolio</h2>
<p className="text-xl text-slate-500 font-light leading-relaxed">Partnering exclusively with industry-leading lines that meet rigorous standards of clinical performance and ingredient integrity.</p>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-stone-100 border border-stone-100">

<div className="aspect-square bg-white flex flex-col items-center justify-center p-8 group hover:bg-stone-50 transition-colors duration-300">
<span className="text-2xl tracking-tight text-slate-300 group-hover:text-[#0f172a] transition-colors duration-300" style={{fontFamily: '\'Playfair Display\', serif'}}>LUMAPHARM</span>
</div>
<div className="aspect-square bg-white flex flex-col items-center justify-center p-8 group hover:bg-stone-50 transition-colors duration-300">
<span className="text-xl tracking-tight text-slate-300 group-hover:text-slate-600 transition-colors duration-300 font-light uppercase">Partner Brand</span>
</div>
<div className="aspect-square bg-white flex flex-col items-center justify-center p-8 group hover:bg-stone-50 transition-colors duration-300">
<span className="text-xl tracking-tight text-slate-300 group-hover:text-slate-600 transition-colors duration-300 font-light uppercase">Partner Brand</span>
</div>
<div className="aspect-square bg-white flex flex-col items-center justify-center p-8 group hover:bg-stone-50 transition-colors duration-300">
<span className="text-xl tracking-tight text-slate-300 group-hover:text-slate-600 transition-colors duration-300 font-light uppercase">Partner Brand</span>
</div>
<div className="aspect-square bg-white flex flex-col items-center justify-center p-8 group hover:bg-stone-50 transition-colors duration-300 lg:hidden xl:flex">
<span className="text-xl tracking-tight text-slate-300 group-hover:text-slate-600 transition-colors duration-300 font-light uppercase">Partner Brand</span>
</div>
<div className="aspect-square bg-white flex flex-col items-center justify-center p-8 group hover:bg-stone-50 transition-colors duration-300 lg:hidden xl:flex">
<span className="text-xl tracking-tight text-slate-300 group-hover:text-slate-600 transition-colors duration-300 font-light uppercase">Partner Brand</span>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-stone-50" id="education">
<div className="max-w-7xl mx-auto space-y-20">
<div className="text-center space-y-6 max-w-3xl mx-auto">
<span className="text-lg tracking-[0.2em] uppercase text-amber-700/80 font-light">Professional Development</span>
<h2 className="text-3xl md:text-5xl tracking-tight text-[#0f172a]" style={{fontFamily: '\'Playfair Display\', serif'}}>Advanced Modalities Training</h2>
<p className="text-xl text-slate-500 font-light leading-relaxed">Elevate your practice and enhance patient outcomes with comprehensive, hands-on education in specialized clinical techniques.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

<div className="bg-white p-10 md:p-14 border border-stone-200/60 flex flex-col h-full group hover:shadow-xl hover:shadow-stone-200/20 transition-all duration-500">
<div className="w-14 h-14 bg-stone-50 flex items-center justify-center mb-10 text-[#0f172a]">
<iconify-icon height="24" icon="solar:stars-linear" width="24"></iconify-icon>
</div>
<h3 className="text-3xl tracking-tight text-[#0f172a] mb-6" style={{fontFamily: '\'Playfair Display\', serif'}}>Advanced Dermaplaning</h3>
<p className="text-xl text-slate-500 font-light leading-relaxed mb-10 flex-grow">Master the technique of manual exfoliation. This curriculum covers critical blade handling precision, advanced skin preparation, contraindications, and specialized post-treatment protocols for optimal safety and radiant results.</p>
<a className="inline-flex items-center gap-2 text-lg font-light text-[#0f172a] group-hover:text-amber-700 transition-colors mt-auto border-b border-transparent group-hover:border-amber-700/30 pb-1 self-start" href="#contact">
                        Inquire About Dates <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="bg-white p-10 md:p-14 border border-stone-200/60 flex flex-col h-full group hover:shadow-xl hover:shadow-stone-200/20 transition-all duration-500">
<div className="w-14 h-14 bg-stone-50 flex items-center justify-center mb-10 text-[#0f172a]">
<iconify-icon height="24" icon="solar:target-linear" width="24"></iconify-icon>
</div>
<h3 className="text-3xl tracking-tight text-[#0f172a] mb-6" style={{fontFamily: '\'Playfair Display\', serif'}}>Clinical Microneedling</h3>
<p className="text-xl text-slate-500 font-light leading-relaxed mb-10 flex-grow">Comprehensive instruction on collagen induction therapy. Learn precise depth protocols based on anatomical regions, strict safety measures, and strategies for combining modalities to achieve transformative skin rejuvenation.</p>
<a className="inline-flex items-center gap-2 text-lg font-light text-[#0f172a] group-hover:text-amber-700 transition-colors mt-auto border-b border-transparent group-hover:border-amber-700/30 pb-1 self-start" href="#contact">
                        Inquire About Dates <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-white border-t border-stone-100" id="services">
<div className="max-w-4xl mx-auto text-center space-y-10">
<h2 className="text-4xl md:text-5xl tracking-tight text-[#0f172a]" style={{fontFamily: '\'Playfair Display\', serif'}}>Collaborate &amp; Elevate</h2>
<p className="text-xl md:text-2xl text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
                Available for clinical treatments, bespoke educational seminars, and strategic brand partnership opportunities.
            </p>
<div className="pt-8">
<a className="inline-flex items-center justify-center px-10 py-5 bg-[#0f172a] text-white text-lg font-light hover:bg-slate-800 transition-colors duration-300" href="mailto:contact@example.com">
                    Request Consultation
                </a>
</div>
</div>
</section>

<footer className="py-12 px-6 md:px-12 lg:px-24 bg-stone-50 border-t border-stone-200/60">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="text-xl tracking-tight text-slate-900 uppercase" style={{fontFamily: '\'Playfair Display\', serif'}}>Támara Hughes</div>
<div className="flex gap-8 text-lg text-slate-400 font-light">
<a className="hover:text-slate-900 transition-colors" href="#">Instagram</a>
<a className="hover:text-slate-900 transition-colors" href="#">LinkedIn</a>
<a className="hover:text-slate-900 transition-colors" href="#">Email</a>
</div>
<div className="text-base text-slate-400 font-light">
                © 2024 Támara Hughes. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
