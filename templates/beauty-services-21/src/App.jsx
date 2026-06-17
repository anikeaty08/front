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



        // Initialize Lucide icons with custom stroke width
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });
    
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
      


<main className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">

<div className="fade-in-up inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-stone-200 shadow-sm mb-12">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500"></span>
</span>
<span className="text-sm font-medium text-stone-600">Upcoming Live: Masterclass on Facial Symmetry</span>
<i className="w-4 h-4 text-stone-400" data-lucide="arrow-right"></i>
</div>

<h1 className="fade-in-up max-w-5xl mx-auto text-4xl sm:text-5xl lg:text-7xl font-medium tracking-tight leading-[1.15] text-stone-900" style={{animationDelay: '0.1s'}}>
            Redefine your 
            <span className="inline-flex items-center align-bottom mx-1 sm:mx-2 bg-white rounded-full p-1.5 pr-5 shadow-sm border border-stone-200 transition-transform hover:scale-105 duration-300 cursor-default">
<img alt="Natural skin" className="w-10 h-10 sm:w-14 sm:h-14 rounded-full object-cover mr-3 border border-stone-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<span className="text-2xl sm:text-4xl lg:text-5xl tracking-tight text-stone-800 pb-1">natural harmony</span>
</span> 
            with 
            <br className="hidden lg:block"/>
            bespoke artistry 
            <span className="inline-flex items-center align-bottom mx-1 sm:mx-2 bg-[#F4ECEB] rounded-full px-5 py-2 sm:py-3 shadow-inner border border-[#EADDD7] text-[#8C6B66] transition-transform hover:scale-105 duration-300 cursor-default">
<i className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3" data-lucide="pen-tool"></i>
<span className="text-2xl sm:text-4xl lg:text-5xl tracking-tight pb-1">by Ludmila.</span>
</span>
</h1>

<p className="fade-in-up max-w-2xl mx-auto mt-8 text-xl sm:text-2xl text-stone-500 font-light leading-relaxed" style={{animationDelay: '0.2s'}}>
            Elevating self-esteem through high-end micro-pigmentation and facial design. We don't just shape eyebrows; we craft confidence.
        </p>

<div className="fade-in-up mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto" style={{animationDelay: '0.3s'}}>
<button className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-stone-900 text-[#FAFAF9] px-8 py-4 rounded-2xl text-lg font-medium shadow-[0_8px_30px_rgb(41,37,36,0.2)] hover:shadow-[0_8px_40px_rgb(41,37,36,0.3)] hover:bg-stone-800 hover:-translate-y-0.5 transition-all duration-300">
                Book Your Transformation
                <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="chevron-right"></i>
</button>
<button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-stone-900 border border-stone-200 px-8 py-4 rounded-2xl text-lg font-medium shadow-sm hover:bg-stone-50 transition-all duration-300">
<i className="w-5 h-5 text-stone-400 fill-stone-400" data-lucide="play"></i>
                See Client Results
            </button>
</div>

<div className="fade-in-up mt-12 flex items-center gap-6" style={{animationDelay: '0.4s'}}>
<div className="flex -space-x-4 border-[3px] border-[#FAFAF9] rounded-full bg-[#FAFAF9]">
<img alt="Client 1" className="w-12 h-12 rounded-full object-cover border-[3px] border-[#FAFAF9] shadow-sm" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
<img alt="Client 2" className="w-12 h-12 rounded-full object-cover border-[3px] border-[#FAFAF9] shadow-sm" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
<img alt="Client 3" className="w-12 h-12 rounded-full object-cover border-[3px] border-[#FAFAF9] shadow-sm" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
<div className="w-12 h-12 rounded-full border-[3px] border-[#FAFAF9] bg-stone-100 flex items-center justify-center text-sm font-medium text-stone-500 shadow-sm z-10">
                    +2k
                </div>
</div>
<div className="flex flex-col items-start">
<div className="flex items-center gap-1 text-[#D4AF37]">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<span className="text-lg font-medium text-stone-900 ml-2">5.0</span>
</div>
<span className="text-base text-stone-500 font-light mt-0.5">from happy women</span>
</div>
</div>
</main>

<section className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
<div className="fade-in-up relative rounded-[2.5rem] overflow-hidden bg-stone-200 aspect-[4/5] sm:aspect-[16/10] lg:aspect-[21/10] shadow-2xl ring-1 ring-stone-900/5" style={{animationDelay: '0.5s'}}>

<img alt="Detailed facial mapping" className="absolute inset-0 w-full h-full object-cover object-top filter contrast-105 brightness-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>

<div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-stone-900/10 mix-blend-multiply"></div>

<div className="absolute top-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
<div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-2 shadow-lg">
<span className="text-white font-medium tracking-tight text-lg shadow-sm">Facial Architecture Ready</span>
</div>
<div className="w-px h-16 bg-gradient-to-b from-white/60 to-transparent mt-2"></div>
</div>

<div className="absolute top-[25%] left-[10%] lg:left-[20%] animate-float group">

<div className="absolute top-1/2 -right-8 lg:-right-16 translate-x-full -translate-y-1/2 hidden md:block">
<div className="relative flex h-4 w-4">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40"></span>
<span className="relative inline-flex rounded-full h-4 w-4 bg-white/90 border-2 border-stone-300 shadow-sm"></span>
</div>

<svg className="absolute top-1/2 right-full -translate-y-1/2 w-8 lg:w-16 h-px text-white/60" preserveaspectratio="none" viewbox="0 0 100 1">
<line stroke="currentColor" stroke-dasharray="4 4" strokeWidth="2" x1="0" x2="100" y1="0" y2="0"></line>
</svg>
</div>

<div className="bg-white/95 backdrop-blur-xl border border-white shadow-xl rounded-2xl p-4 sm:p-5 w-48 sm:w-56 transition-transform group-hover:scale-105">
<div className="flex items-start gap-3">
<div className="p-2 bg-[#F4ECEB] rounded-xl text-[#8C6B66]">
<i className="w-5 h-5" data-lucide="move"></i>
</div>
<div>
<h3 className="text-base font-medium text-stone-900 tracking-tight">Alignment</h3>
<p className="text-sm text-stone-500 font-light mt-1">Golden ratio mapped for perfect symmetry.</p>
</div>
</div>
</div>
</div>

<div className="absolute top-[50%] right-[10%] lg:right-[15%] animate-float-delayed group">

<div className="absolute top-1/2 -left-8 lg:-left-16 -translate-x-full -translate-y-1/2 hidden md:block">
<div className="relative flex h-4 w-4">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40"></span>
<span className="relative inline-flex rounded-full h-4 w-4 bg-white/90 border-2 border-stone-300 shadow-sm"></span>
</div>

<svg className="absolute top-1/2 left-full -translate-y-1/2 w-8 lg:w-16 h-px text-white/60" preserveaspectratio="none" viewbox="0 0 100 1">
<line stroke="currentColor" stroke-dasharray="4 4" strokeWidth="2" x1="0" x2="100" y1="0" y2="0"></line>
</svg>
</div>

<div className="bg-white/95 backdrop-blur-xl border border-white shadow-xl rounded-2xl p-4 sm:p-5 w-48 sm:w-56 transition-transform group-hover:scale-105">
<div className="flex items-start gap-3">
<div className="p-2 bg-stone-100 rounded-xl text-stone-700">
<i className="w-5 h-5" data-lucide="droplets"></i>
</div>
<div>
<h3 className="text-base font-medium text-stone-900 tracking-tight">Pigmentation</h3>
<div className="flex items-center gap-1.5 mt-2">
<span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-medium border border-emerald-100">Flawless</span>
<span className="text-xs text-stone-400 font-light">Tone Match</span>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 lg:left-[30%] lg:translate-x-0 animate-float group">

<div className="bg-white/95 backdrop-blur-xl border border-white shadow-xl rounded-2xl p-3 sm:p-4 pr-6 flex items-center gap-4 transition-transform group-hover:scale-105">
<div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm">
<img alt="texture focus" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h3 className="text-sm font-medium text-stone-900 tracking-tight">Natural Finish</h3>
<p className="text-xs text-stone-500 font-light">Ultra-realistic strokes.</p>
</div>
</div>
</div>
</div>
</section>


    </>
  );
}
