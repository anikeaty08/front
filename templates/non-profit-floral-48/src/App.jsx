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
      

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] opacity-40 pointer-events-none" style={{background: 'radial-gradient(circle at 50% 0%, #FFFFFF 0%, transparent 70%)'}}></div>

<nav className="relative z-10 w-full border-b border-[#EBE8E0]/60 bg-[#F9F8F6]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
<div className="flex items-center gap-3 cursor-pointer">
<iconify-icon className="text-xl text-[#8A7E6B]" icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-lg font-medium tracking-tighter text-[#1C1A18]">L O T F</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-[#6B5E4F] hover:text-[#1C1A18] transition-colors" href="#">Our Mission</a>
<a className="text-sm font-medium text-[#6B5E4F] hover:text-[#1C1A18] transition-colors" href="#">Impact</a>
<a className="text-sm font-medium text-[#6B5E4F] hover:text-[#1C1A18] transition-colors" href="#">Partner</a>
<a className="text-sm font-medium text-[#6B5E4F] hover:text-[#1C1A18] transition-colors" href="#">Stories</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex text-sm font-medium text-[#1C1A18] hover:text-[#6B5E4F] transition-colors" href="#">Sign in</a>
<button className="bg-[#2C2A28] text-[#F9F8F6] px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#1C1A18] transition-all shadow-sm flex items-center gap-2">
                    Donate Florals
                </button>
</div>
</div>
</nav>

<main className="relative z-10 flex-grow flex flex-col justify-center pt-16 pb-24 md:pt-24 md:pb-32">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">

<div className="flex flex-col items-start max-w-2xl">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#EBE8E0] shadow-sm mb-8 transition-transform hover:scale-[1.02] cursor-pointer">
<div className="w-1.5 h-1.5 rounded-full bg-[#8A7E6B] animate-pulse"></div>
<span className="text-xs font-medium text-[#6B5E4F]">Now accepting wedding &amp; event donations</span>
<iconify-icon className="text-sm text-[#8A7E6B] ml-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>

<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter leading-[1.05] text-[#1C1A18]">
                    Give flowers a <br className="hidden md:block"/>
<span className="text-[#8A7E6B]">second life.</span>
</h1>

<p className="text-base md:text-lg font-normal text-[#6B5E4F] leading-relaxed mt-6 max-w-lg">
                    Lillies of the Field is a non-profit rescuing event florals and transforming them into beautiful bouquets to bring joy to hospitals, care homes, and community centers.
                </p>

<div className="flex flex-col sm:flex-row items-center gap-4 mt-10 w-full sm:w-auto">
<button className="w-full sm:w-auto bg-[#2C2A28] text-[#F9F8F6] px-6 py-3.5 rounded-full text-sm font-medium hover:bg-[#1C1A18] transition-all shadow-sm flex justify-center items-center gap-2">
<iconify-icon className="text-lg" icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
                        Partner With Us
                    </button>
<button className="w-full sm:w-auto bg-white text-[#2C2A28] px-6 py-3.5 rounded-full text-sm font-medium border border-[#EBE8E0] hover:bg-[#F3F1EC] transition-all shadow-sm flex justify-center items-center gap-2">
                        View Our Impact
                    </button>
</div>

<div className="mt-12 flex items-center gap-6 border-t border-[#EBE8E0]/80 pt-8 w-full">
<div className="flex -space-x-3">
<img alt="Volunteer" className="w-10 h-10 rounded-full border-2 border-[#F9F8F6] object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;q=80&amp;w=150"/>
<img alt="Volunteer" className="w-10 h-10 rounded-full border-2 border-[#F9F8F6] object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;q=80&amp;w=150"/>
<img alt="Volunteer" className="w-10 h-10 rounded-full border-2 border-[#F9F8F6] object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;q=80&amp;w=150"/>
<div className="w-10 h-10 rounded-full border-2 border-[#F9F8F6] bg-[#EBE8E0] flex items-center justify-center text-xs font-medium text-[#6B5E4F]">+2k</div>
</div>
<div className="text-sm font-normal text-[#6B5E4F]">
                        Join <span className="font-medium text-[#1C1A18]">2,000+</span> volunteers <br/>spreading kindness daily.
                    </div>
</div>
</div>

<div className="relative w-full h-[500px] md:h-[600px] grid grid-cols-2 grid-rows-3 gap-4 lg:gap-6 mt-10 lg:mt-0">

<div className="col-start-1 col-end-2 row-start-1 row-end-3 rounded-3xl bg-[#EBE8E0] overflow-hidden relative shadow-sm border border-black/5 group cursor-pointer">
<img alt="Repurposed Flowers" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full inline-flex items-center gap-2 shadow-sm">
<iconify-icon className="text-[#8A7E6B]" icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium text-[#2C2A28]">Sustainable Floristry</span>
</div>
</div>
</div>

<div className="col-start-2 col-end-3 row-start-1 row-end-2 rounded-3xl bg-[#D5D1C8] overflow-hidden relative shadow-sm border border-black/5 group cursor-pointer">
<img alt="Delivering Joy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>

<div className="col-start-2 col-end-3 row-start-2 row-end-4 rounded-3xl bg-white p-6 md:p-8 shadow-sm border border-[#EBE8E0] flex flex-col justify-between hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-full bg-[#F9F8F6] flex items-center justify-center border border-[#EBE8E0]">
<iconify-icon className="text-xl text-[#8A7E6B]" icon="solar:box-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-4xl md:text-5xl font-semibold tracking-tighter text-[#1C1A18] mb-2">15k+</h3>
<p className="text-sm font-normal text-[#6B5E4F] leading-snug">
                            Bouquets repurposed and delivered to those in need this year.
                        </p>
</div>
</div>

<div className="col-start-1 col-end-2 row-start-3 row-end-4 rounded-3xl bg-[#8A7E6B] p-6 shadow-sm border border-black/5 relative overflow-hidden flex items-center justify-center group">
<div className="absolute inset-0 opacity-10 transition-opacity group-hover:opacity-20" style={{backgroundImage: 'radial-gradient(circle at center, #F9F8F6 2px, transparent 2px)', backgroundSize: '16px 16px'}}></div>
<iconify-icon className="text-6xl text-[#F9F8F6]/90 transition-transform duration-500 group-hover:rotate-12" icon="solar:flower-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto w-full px-6 mt-20 pt-10">
<p className="text-xs font-medium text-[#8A7E6B] text-center mb-8 uppercase tracking-widest">Partnering with leading venues &amp; florists</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 mix-blend-multiply">
<div className="flex items-center gap-2 text-[#2C2A28]">
<iconify-icon className="text-xl" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-base font-semibold tracking-tighter">The Grand Venue</span>
</div>
<div className="flex items-center gap-2 text-[#2C2A28]">
<iconify-icon className="text-xl" icon="solar:crown-star-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-base font-semibold tracking-tighter">Hotel Estate</span>
</div>
<div className="flex items-center gap-2 text-[#2C2A28]">
<iconify-icon className="text-xl" icon="solar:home-smile-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-base font-semibold tracking-tighter">Mercy Care Homes</span>
</div>
<div className="flex items-center gap-2 text-[#2C2A28]">
<iconify-icon className="text-xl" icon="solar:cup-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-base font-semibold tracking-tighter">Bloom &amp; Co.</span>
</div>
</div>
</div>
</main>

    </>
  );
}
