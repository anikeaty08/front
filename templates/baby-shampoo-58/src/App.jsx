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
      

<header className="relative bg-white overflow-hidden">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="px-6 py-20 lg:py-32 lg:pr-0 z-10">
<h1 className="text-4xl lg:text-6xl font-medium tracking-tight text-slate-900 leading-[1.1] mb-6">
                        Pure, Gentle Care for <br className="hidden lg:block"/> Your Baby’s Hair — <br className="hidden lg:block"/> No Harsh Chemicals
                    </h1>
<p className="text-lg text-slate-500 font-normal mb-8 max-w-lg leading-relaxed">
                        The only baby shampoo your family needs. Gentle, effective, and safe for delicate skin.
                    </p>
<button className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold tracking-wide text-white bg-[#73DBCF] hover:bg-[#5BCac0] rounded-md transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5">
                        BUY NOW
                    </button>
</div>
<div className="relative h-64 lg:h-auto lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
<img alt="Baby in bath" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent lg:via-white/0"></div>
</div>
</div>
</div>
</header>

<section className="py-24 px-6 bg-white">
<div className="max-w-4xl mx-auto space-y-12">
<div className="space-y-2">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">SoCal Suds Baby Shampoo:</h2>
<p className="text-slate-500">Soft, tear-free cleansing that cares for sensitive scalps.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-slate-100 group">
<img alt="Baby smiling" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-slate-100 relative group bg-slate-100">
<img alt="Video thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" src="https://images.unsplash.com/photo-1596464700080-60655d648b79?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-14 h-14 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-black/30 transition-colors cursor-pointer">
<i className="text-white fill-white ml-1 w-6 h-6" data-lucide="play"></i>
</div>
</div>
</div>
</div>
<div className="space-y-6">
<h3 className="text-xl font-semibold tracking-tight text-slate-900">More Product Clean in Action?</h3>
<p className="text-slate-500 max-w-2xl">Delivering the tear-free safety for our purest formulas. Only gentle formula that you can trust.</p>
<button className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold tracking-wide text-white bg-[#73DBCF] hover:bg-[#5BCac0] rounded-md transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5">
                    BUY NOW
                </button>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#6CD4CD] text-white overflow-hidden relative">
<div className="max-w-5xl mx-auto relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="space-y-10">
<h2 className="text-3xl font-semibold tracking-tight">Why Choose Gentle <br/> Clean Shampoo?</h2>
<ul className="space-y-8">
<li className="flex items-center gap-4 group">
<div className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center bg-white/10 group-hover:bg-white/20 transition-colors">
<i className="w-6 h-6 text-white" data-lucide="hand"></i>
</div>
<span className="text-lg font-medium tracking-tight">Gentle on Skin</span>
</li>
<li className="flex items-center gap-4 group">
<div className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center bg-white/10 group-hover:bg-white/20 transition-colors">
<i className="w-6 h-6 text-white" data-lucide="smile"></i>
</div>
<span className="text-lg font-medium tracking-tight">No Discomfort for Baby</span>
</li>
<li className="flex items-center gap-4 group">
<div className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center bg-white/10 group-hover:bg-white/20 transition-colors">
<i className="w-6 h-6 text-white" data-lucide="shield-check"></i>
</div>
<span className="text-lg font-medium tracking-tight">Safer, Cleaner Clean</span>
</li>
<li className="flex items-center gap-4 group">
<div className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center bg-white/10 group-hover:bg-white/20 transition-colors">
<i className="w-6 h-6 text-white" data-lucide="sprout"></i>
</div>
<span className="text-lg font-medium tracking-tight">Good for Family &amp; Planet</span>
</li>
</ul>
</div>

<div className="relative flex justify-center items-center mt-12 lg:mt-0">

<div className="absolute -right-4 -top-10 w-24 h-24 md:w-32 md:h-32 bg-white rounded-full overflow-hidden border-4 border-[#6CD4CD] shadow-xl z-20">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1545558014-a69f9a5bbe6d?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -bottom-10 -right-10 w-36 h-36 bg-white text-[#6CD4CD] rounded-full flex items-center justify-center text-center p-4 shadow-xl z-20">
<p className="text-sm font-semibold leading-tight">No sulfates,<br/>no dyes,<br/>no parabens</p>
</div>

<div className="relative z-10 w-48 md:w-56 bg-white rounded-t-full rounded-b-3xl shadow-2xl p-4 pb-8 text-center mx-auto transform hover:scale-105 transition-transform duration-300">

<div className="w-16 h-8 bg-slate-200 mx-auto -mt-8 rounded-t-lg relative">
<div className="absolute top-1/2 left-0 w-8 h-1 bg-slate-200 -translate-x-full"></div>
</div>
<div className="mt-8 space-y-4">
<h3 className="text-2xl font-bold text-[#6CD4CD] tracking-tighter">SoCal<br/>suds™</h3>
<div className="w-8 h-0.5 bg-slate-200 mx-auto"></div>
<p className="text-[10px] text-slate-400 uppercase tracking-widest">Pure Shampoo</p>
<p className="text-[9px] text-slate-300 px-2 leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-b border-slate-100">
<div className="max-w-4xl mx-auto text-center space-y-12">
<div className="space-y-4">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Loved by Parents Everywhere</h2>
<div className="flex items-center justify-center gap-2">
<div className="flex text-yellow-400 gap-0.5">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<span className="text-sm font-medium text-slate-500">5 Star Rating</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
<div className="p-6 rounded-xl border border-slate-200 hover:border-[#6CD4CD]/50 transition-colors shadow-sm bg-white">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="flex justify-between items-center mb-2">
<h4 className="text-sm font-semibold text-slate-900">Sarah K.</h4>
<span className="text-xs text-slate-400">Verified</span>
</div>
<p className="text-sm text-slate-600 leading-relaxed">"My baby's skin has never been softer! Finally a bath time without tears."</p>
</div>
</div>
</div>
<div className="p-6 rounded-xl border border-slate-200 hover:border-[#6CD4CD]/50 transition-colors shadow-sm bg-white">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="flex justify-between items-center mb-2">
<h4 className="text-sm font-semibold text-slate-900">Michael R.</h4>
<span className="text-xs text-slate-400">Verified</span>
</div>
<p className="text-sm text-slate-600 leading-relaxed">"Tear-free and smells amazing. It really calmed him down before bed."</p>
</div>
</div>
</div>
</div>

<div className="flex flex-wrap justify-center gap-12 pt-8 border-t border-slate-100">
<div className="flex flex-col items-center gap-3">
<div className="w-16 h-16 rounded-full border border-[#6CD4CD] flex items-center justify-center text-[#6CD4CD] bg-[#6CD4CD]/5">
<i className="w-8 h-8 stroke-1.5" data-lucide="baby"></i>
</div>
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Sensitive Skin Friendly</span>
</div>
<div className="flex flex-col items-center gap-3">
<div className="w-16 h-16 rounded-full border border-[#6CD4CD] flex items-center justify-center text-[#6CD4CD] bg-[#6CD4CD]/5">
<i className="w-8 h-8 stroke-1.5" data-lucide="leaf"></i>
</div>
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Eco-Friendly</span>
</div>
<div className="flex flex-col items-center gap-3">
<div className="w-16 h-16 rounded-full border border-[#6CD4CD] flex items-center justify-center text-[#6CD4CD] bg-[#6CD4CD]/5">
<i className="w-8 h-8 stroke-1.5" data-lucide="shield"></i>
</div>
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Dermatologist Tested</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-5xl mx-auto">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-12">Give Your Baby the Gentle, Calming Bath <br className="hidden md:block"/> Experience They Deserve</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

<div className="relative bg-white border border-slate-200 p-8 rounded-2xl rounded-bl-sm shadow-lg max-w-md">
<div className="absolute -left-3 -top-3 w-12 h-12 rounded-full border-2 border-white overflow-hidden shadow-md">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-slate-600 italic leading-relaxed pt-2">
                        "So gentle on my baby's skin - no more red spots or irritation! I love knowing exactly what I'm putting on her scalp."
                    </p>
<p className="text-xs text-slate-400 font-medium mt-4 text-right">— Allyson Bellamy</p>
</div>

<div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square md:aspect-auto md:h-80 bg-slate-100">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
</div>

<div className="text-center mt-20 space-y-6">
<h3 className="text-sm font-bold tracking-[0.2em] text-slate-900 uppercase">SAFE. GENTLE. TRUSTED.</h3>
<p className="text-slate-500 text-sm">Your baby deserves care without compromise — SoCal Suds is pure &amp; simple.</p>
<button className="inline-flex items-center justify-center px-12 py-3 text-sm font-semibold tracking-wide text-white bg-[#73DBCF] hover:bg-[#5BCac0] rounded-md transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5">
                    BUY NOW
                </button>
</div>
</div>
</section>

<section className="py-16 px-6 bg-slate-50 border-t border-slate-200">
<div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
<div className="space-y-4">
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Trusted by Pediatricians and <br/> Parents Alike</h3>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-sm text-slate-600">
<i className="w-4 h-4 text-[#6CD4CD]" data-lucide="check-circle-2"></i>
<span>Fast, reliable shipping to your door</span>
</li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<i className="w-4 h-4 text-[#6CD4CD]" data-lucide="check-circle-2"></i>
<span>Not satisfied? Easy returns with no hassle!</span>
</li>
</ul>
</div>
<div className="flex items-center gap-4">
<div className="w-20 h-20 rounded-full border border-slate-200 bg-white flex flex-col items-center justify-center text-center p-2">
<span className="text-[10px] font-bold text-[#6CD4CD] uppercase">Exceeds<br/>Criteria</span>
</div>
<div className="w-20 h-20 rounded-full border border-slate-200 bg-white flex flex-col items-center justify-center text-center p-2">
<span className="text-[10px] font-bold text-[#6CD4CD] uppercase">Dermatologist<br/>Tested</span>
</div>
</div>
<button className="w-full md:w-auto px-8 py-3 text-sm font-semibold text-white bg-[#73DBCF] hover:bg-[#5BCac0] rounded-md transition-all duration-200 shadow-sm">
                BUY NOW
            </button>
</div>
</section>

<div className="fixed bottom-6 left-6 z-50 flex items-end gap-3 animate-fade-in-up">
<div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-lg">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
</div>
<div className="bg-[#73DBCF] text-white p-4 rounded-t-2xl rounded-br-2xl shadow-lg max-w-xs mb-2 relative">
<p className="text-xs font-medium leading-relaxed">
                "Have questions about baby care or ingredients? Chat with our SoCal Suds Specialist here!"
            </p>
<div className="absolute -bottom-1 -left-1 w-4 h-4 bg-[#73DBCF] transform rotate-45"></div>
</div>
</div>


    </>
  );
}
