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
      

<nav className="fixed top-0 w-full z-50 bg-[#F2E8D9]/95 backdrop-blur-md border-b border-[#3D2817]/10 px-4 py-3 flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded bg-[#D4691F] text-[#F2E8D9] flex items-center justify-center border border-[#3D2817] shadow-sm">
<i className="w-5 h-5" data-lucide="train-front"></i>
</div>
<span className="font-display font-bold text-lg tracking-tight text-[#3D2817]">SAATH</span>
</div>
<button className="bg-[#3D2817] text-[#F2E8D9] px-4 py-2 rounded-md text-xs font-semibold hover:bg-[#2a1c10] transition-colors flex items-center gap-2">
<span>Join</span>
<i className="w-3 h-3" data-lucide="ticket"></i>
</button>
</nav>
<main className="pt-20 max-w-5xl mx-auto">

<section className="px-4 mb-8">
<div className="bg-[#F2E8D9] border-2 border-[#3D2817] rounded-2xl p-8 md:p-16 text-center relative overflow-hidden card-shadow isolate">

<div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(#3D2817 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] pointer-events-none -z-10 opacity-10">
<div className="w-full h-full relative animate-spin-slow">
<span className="absolute top-0 left-1/2 -translate-x-1/2 text-4xl font-hindi">साथ</span>
<span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-4xl font-tamil">சாத்</span>
<span className="absolute top-1/2 right-0 -translate-y-1/2 text-4xl font-bengali">সাথ</span>
<span className="absolute top-1/2 left-0 -translate-y-1/2 text-4xl font-urdu">ساتھ</span>
<span className="absolute top-[20%] right-[20%] text-4xl font-sinhala">සාථ්</span>
</div>
</div>
<div className="relative z-10">
<div className="inline-flex items-center justify-center gap-2 border border-[#3D2817]/30 rounded-full px-3 py-1 mb-4 bg-[#F2E8D9]">
<span className="w-2 h-2 rounded-full bg-[#2C5F4D] animate-pulse"></span>
<span className="text-xs font-semibold uppercase tracking-wide text-[#3D2817]/70">Community Fund</span>
</div>
<h1 className="font-display text-4xl md:text-6xl font-semibold text-[#3D2817] leading-tight mb-4 tracking-tight">
                        Your journey home <br/>
<span className="italic text-[#D4691F]">starts together.</span>
</h1>
<p className="text-[#3D2817]/80 text-sm md:text-lg max-w-md mx-auto leading-relaxed mb-8">
                        A collective fund mobilizing the South Asian diaspora to back bold projects in Nepal, India, Pakistan, Bangladesh, and Sri Lanka.
                    </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<button className="w-full md:w-auto bg-[#D4691F] text-[#F2E8D9] border-2 border-[#3D2817] px-6 py-3 rounded-xl font-semibold card-shadow-hover transition-all flex items-center justify-center gap-2 group">
<span>Become a Member</span>
<i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</section>

<div className="border-y-2 border-[#3D2817] bg-[#2C5F4D] py-3 overflow-hidden whitespace-nowrap mb-12">
<div className="animate-marquee inline-block text-[#F2E8D9]">
<span className="mx-4 font-display font-bold uppercase tracking-widest text-sm">The Diaspora Mobilized</span> • 
                <span className="mx-4 font-hindi text-sm">साथ</span> • 
                <span className="mx-4 font-urdu text-sm pt-1">ساتھ</span> • 
                <span className="mx-4 font-bengali text-sm">সাথ</span> • 
                <span className="mx-4 font-tamil text-sm">சாத்</span> • 
                <span className="mx-4 font-sinhala text-sm">සාථ්</span> • 
                
<span className="mx-4 font-display font-bold uppercase tracking-widest text-sm">The Diaspora Mobilized</span> • 
                <span className="mx-4 font-hindi text-sm">साथ</span> • 
                <span className="mx-4 font-urdu text-sm pt-1">ساتھ</span> • 
                <span className="mx-4 font-bengali text-sm">সাথ</span> • 
                <span className="mx-4 font-tamil text-sm">சாத்</span> • 
                <span className="mx-4 font-sinhala text-sm">සාථ්</span> • 
                <span className="mx-4 font-display font-bold uppercase tracking-widest text-sm">The Diaspora Mobilized</span> • 
                <span className="mx-4 font-hindi text-sm">साथ</span> • 
                <span className="mx-4 font-urdu text-sm pt-1">ساتھ</span> • 
                <span className="mx-4 font-bengali text-sm">সাথ</span> • 
                <span className="mx-4 font-tamil text-sm">சாத்</span> • 
                <span className="mx-4 font-sinhala text-sm">සාථ්</span> • 
            </div>
</div>

<section className="mb-16 relative">
<div className="px-6 mb-4 flex justify-between items-end">
<div>
<h2 className="font-display text-2xl text-[#3D2817]">The Journey</h2>
<p className="text-xs text-[#3D2817]/60 mt-1 uppercase tracking-wide">Swipe to explore</p>
</div>
<div className="flex gap-2 text-[#D4691F] md:hidden">
<i className="w-4 h-4" data-lucide="arrow-left"></i>
<i className="w-4 h-4" data-lucide="move-horizontal"></i>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</div>
</div>

<div className="flex overflow-x-auto gap-4 px-4 pb-8 snap-x snap-mandatory no-scrollbar">

<div className="snap-center shrink-0 w-[85vw] md:w-[300px] bg-[#F2E8D9] border-2 border-[#3D2817] rounded-xl p-6 card-shadow flex flex-col justify-between relative">
<div className="absolute -top-3 -right-3 bg-[#D4691F] text-[#F2E8D9] w-8 h-8 rounded-full border-2 border-[#3D2817] flex items-center justify-center font-bold font-mono text-sm">1</div>
<div className="mb-4">
<div className="w-12 h-12 bg-[#3D2817]/5 rounded-full flex items-center justify-center mb-4 text-[#D4691F]">
<i className="w-6 h-6" data-lucide="coins"></i>
</div>
<h3 className="font-display text-xl font-bold text-[#3D2817]">Contribute</h3>
<div className="flex gap-2 mt-1 opacity-40 text-xs">
<span className="font-hindi">योगदान</span> <span className="font-urdu">تعاون</span> <span className="font-tamil">பங்களிப்பு</span>
</div>
</div>
<p className="text-sm text-[#3D2817]/80">Members contribute $5/month into a collective pool. Small amount, massive impact.</p>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[300px] bg-[#F2E8D9] border-2 border-[#3D2817] rounded-xl p-6 card-shadow flex flex-col justify-between relative">
<div className="absolute -top-3 -right-3 bg-[#2C5F4D] text-[#F2E8D9] w-8 h-8 rounded-full border-2 border-[#3D2817] flex items-center justify-center font-bold font-mono text-sm">2</div>
<div className="mb-4">
<div className="w-12 h-12 bg-[#3D2817]/5 rounded-full flex items-center justify-center mb-4 text-[#2C5F4D]">
<i className="w-6 h-6" data-lucide="vote"></i>
</div>
<h3 className="font-display text-xl font-bold text-[#3D2817]">Vote</h3>
<div className="flex gap-2 mt-1 opacity-40 text-xs">
<span className="font-hindi">वोट</span> <span className="font-urdu">ووٹ</span> <span className="font-bengali">ভোট</span>
</div>
</div>
<p className="text-sm text-[#3D2817]/80">We vet projects. You vote on where the funds go. A truly democratic process.</p>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[300px] bg-[#F2E8D9] border-2 border-[#3D2817] rounded-xl p-6 card-shadow flex flex-col justify-between relative">
<div className="absolute -top-3 -right-3 bg-[#3D2817] text-[#F2E8D9] w-8 h-8 rounded-full border-2 border-[#3D2817] flex items-center justify-center font-bold font-mono text-sm">3</div>
<div className="mb-4">
<div className="w-12 h-12 bg-[#3D2817]/5 rounded-full flex items-center justify-center mb-4 text-[#3D2817]">
<i className="w-6 h-6" data-lucide="heart-handshake"></i>
</div>
<h3 className="font-display text-xl font-bold text-[#3D2817]">Impact</h3>
<div className="flex gap-2 mt-1 opacity-40 text-xs">
<span className="font-hindi">प्रभाव</span> <span className="font-urdu">اثر</span> <span className="font-sinhala">බලපෑම</span>
</div>
</div>
<p className="text-sm text-[#3D2817]/80">See exactly where your money went with photos, GPS coordinates, and stories.</p>
</div>

<div className="snap-start shrink-0 w-4"></div>
</div>
</section>

<section className="px-4 mb-16 relative">

<div className="absolute left-8 top-0 bottom-0 w-0.5 railway-track -z-10"></div>
<div className="flex items-center gap-4 mb-8">
<div className="w-8 h-8 rounded-full bg-[#3D2817] flex items-center justify-center text-[#F2E8D9] z-10">
<i className="w-4 h-4" data-lucide="map-pin"></i>
</div>
<h2 className="font-display text-2xl text-[#3D2817] bg-[#F2E8D9] px-2">Active Projects</h2>
</div>
<div className="space-y-6 pl-4 md:pl-12">

<article className="bg-white border border-[#3D2817]/20 rounded-lg overflow-hidden shadow-lg group hover:border-[#D4691F] transition-colors">
<div className="relative h-48 bg-[#3D2817]/10 overflow-hidden">
<div className="absolute inset-0 bg-neutral-200 flex items-center justify-center">
<i className="w-8 h-8 text-neutral-400" data-lucide="image"></i>
</div>

<div className="absolute top-4 left-4 bg-[#D4691F] text-[#F2E8D9] text-xs font-bold px-2 py-1 rounded shadow-sm">
                            EDUCATION
                        </div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="font-display text-lg font-semibold text-[#3D2817]">Coding Camp for Girls</h3>
<div className="text-xs text-[#3D2817]/50 flex items-center gap-1 mt-1">
<i className="w-3 h-3" data-lucide="map-pin"></i>
<span>Dhaka, Bangladesh</span>
<span className="mx-1 text-[#D4691F]">•</span>
<span className="font-bengali">ঢাকা</span>
</div>
</div>
<div className="text-right">
<div className="text-sm font-bold text-[#3D2817]">$450</div>
<div className="text-[10px] uppercase text-[#3D2817]/50">Raised</div>
</div>
</div>

<div className="w-full bg-[#3D2817]/10 h-2 rounded-full mt-3 mb-4">
<div className="bg-[#2C5F4D] h-2 rounded-full" style={{width: '75%'}}></div>
</div>
<button className="w-full border border-[#3D2817]/20 text-[#3D2817] py-2 rounded text-sm font-medium hover:bg-[#F2E8D9] transition-colors">
                            View Details
                        </button>
</div>
</article>

<article className="bg-white border border-[#3D2817]/20 rounded-lg overflow-hidden shadow-lg group hover:border-[#D4691F] transition-colors">
<div className="relative h-48 bg-[#3D2817]/10 overflow-hidden">
<div className="absolute inset-0 bg-neutral-200 flex items-center justify-center">
<i className="w-8 h-8 text-neutral-400" data-lucide="image"></i>
</div>
<div className="absolute top-4 left-4 bg-[#2C5F4D] text-[#F2E8D9] text-xs font-bold px-2 py-1 rounded shadow-sm">
                            INFRASTRUCTURE
                        </div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="font-display text-lg font-semibold text-[#3D2817]">Clean Water Pump</h3>
<div className="text-xs text-[#3D2817]/50 flex items-center gap-1 mt-1">
<i className="w-3 h-3" data-lucide="map-pin"></i>
<span>Sindh, Pakistan</span>
<span className="mx-1 text-[#D4691F]">•</span>
<span className="font-urdu pt-1">سندھ</span>
</div>
</div>
<div className="text-right">
<div className="text-sm font-bold text-[#3D2817]">$1,200</div>
<div className="text-[10px] uppercase text-[#3D2817]/50">Raised</div>
</div>
</div>

<div className="w-full bg-[#3D2817]/10 h-2 rounded-full mt-3 mb-4">
<div className="bg-[#2C5F4D] h-2 rounded-full" style={{width: '40%'}}></div>
</div>
<button className="w-full border border-[#3D2817]/20 text-[#3D2817] py-2 rounded text-sm font-medium hover:bg-[#F2E8D9] transition-colors">
                            View Details
                        </button>
</div>
</article>
</div>
<div className="mt-8 text-center">
<button className="text-sm font-medium text-[#D4691F] border-b border-[#D4691F] pb-0.5 hover:opacity-80">
                    See all 12 projects
                </button>
</div>
</section>

<section className="py-12 bg-[#3D2817] text-[#F2E8D9] -mx-4 md:rounded-xl md:mx-0 px-4">
<div className="mb-6">
<h2 className="font-display text-2xl text-[#F2E8D9]">Where we focus</h2>
<p className="text-xs text-[#F2E8D9]/60 mt-1">Areas of impact</p>
</div>

<div className="flex md:grid md:grid-cols-3 overflow-x-auto gap-4 snap-x snap-mandatory no-scrollbar pb-4">

<div className="snap-start shrink-0 w-40 h-40 md:w-auto md:h-auto bg-[#F2E8D9]/10 border border-[#F2E8D9]/20 rounded-lg p-4 flex flex-col justify-between hover:bg-[#F2E8D9]/20 transition-colors">
<i className="w-6 h-6 text-[#D4691F]" data-lucide="book-open"></i>
<div>
<h4 className="font-bold text-sm">Education</h4>
<div className="text-[10px] opacity-60 mt-1 font-hindi">शिक्षा / تعليم / கல்வி</div>
</div>
</div>

<div className="snap-start shrink-0 w-40 h-40 md:w-auto md:h-auto bg-[#F2E8D9]/10 border border-[#F2E8D9]/20 rounded-lg p-4 flex flex-col justify-between hover:bg-[#F2E8D9]/20 transition-colors">
<i className="w-6 h-6 text-[#2C5F4D]" data-lucide="droplets"></i>
<div>
<h4 className="font-bold text-sm">Clean Water</h4>
<div className="text-[10px] opacity-60 mt-1 font-urdu">पानी / پانی / நீர்</div>
</div>
</div>

<div className="snap-start shrink-0 w-40 h-40 md:w-auto md:h-auto bg-[#F2E8D9]/10 border border-[#F2E8D9]/20 rounded-lg p-4 flex flex-col justify-between hover:bg-[#F2E8D9]/20 transition-colors">
<i className="w-6 h-6 text-[#C9877C]" data-lucide="users"></i>
<div>
<h4 className="font-bold text-sm">Women-Led</h4>
<div className="text-[10px] opacity-60 mt-1 font-bengali">महिला / خواتین / নারী</div>
</div>
</div>

<div className="snap-start shrink-0 w-40 h-40 md:hidden bg-[#F2E8D9]/10 border border-[#F2E8D9]/20 rounded-lg p-4 flex flex-col justify-between">
<i className="w-6 h-6 text-[#E8C547]" data-lucide="wheat"></i>
<div>
<h4 className="font-bold text-sm">Farming</h4>
<div className="text-[10px] opacity-60 mt-1 font-tamil">खेती / زراعت / விவசாயம்</div>
</div>
</div>
</div>
</section>

<section className="px-4 mt-16 mb-20">
<div className="bg-[#D4691F] rounded-2xl p-1 shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
<div className="bg-[#F2E8D9] rounded-xl border-2 border-[#3D2817] ticket-punch-l ticket-punch-r relative flex flex-col md:flex-row">

<div className="p-6 md:p-8 flex-1 border-b-2 md:border-b-0 md:border-r-2 border-dashed border-[#3D2817]/30 relative">

<div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[#3D2817]"></div>
<div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-[#3D2817]"></div>
<div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-[#3D2817]"></div>
<div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-[#3D2817]"></div>
<div className="flex justify-between items-start">
<span className="font-mono text-xs text-[#3D2817]/60 tracking-widest">ADMIT ONE</span>
<span className="font-mono text-xs text-[#3D2817]/60 tracking-widest">SAATH-2025</span>
</div>
<div className="my-6 text-center">
<h2 className="font-display text-3xl text-[#3D2817] font-bold">Board the Train</h2>
<p className="text-sm text-[#3D2817]/70 mt-2">Join the collective for $5/month.</p>
</div>
<div className="flex justify-center gap-4 opacity-50">
<span className="font-hindi text-sm">शामिल हों</span>
<span className="font-urdu text-sm pt-1">شامل ہوں</span>
<span className="font-bengali text-sm">যোগ দিন</span>
</div>
</div>

<div className="p-6 md:w-48 flex items-center justify-center bg-[#3D2817]/5">
<button className="w-full bg-[#3D2817] text-[#F2E8D9] font-bold py-3 px-4 rounded shadow hover:bg-[#2a1c10] transition-colors flex items-center justify-center gap-2">
<span>Join Now</span>
</button>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-[#3D2817]/10 py-10 bg-[#F2E8D9] px-6 text-center">
<div className="flex justify-center items-center gap-2 mb-6">
<i className="w-5 h-5 text-[#3D2817]" data-lucide="train-front"></i>
<span className="font-display font-bold text-[#3D2817]">SAATH</span>
</div>

<div className="flex flex-wrap justify-center gap-6 text-sm text-[#3D2817]/70 mb-8">
<a className="hover:text-[#D4691F]" href="#">Manifesto</a>
<a className="hover:text-[#D4691F]" href="#">Projects</a>
<a className="hover:text-[#D4691F]" href="#">Login</a>
</div>
<div className="text-xs text-[#3D2817]/40 font-mono">
            © 2025 Saath Fund. Built for the Diaspora.
        </div>
<div className="mt-2 flex justify-center gap-3 text-[10px] text-[#3D2817]/30">
<span className="font-hindi">प्यार से बनाया</span> • <span className="font-urdu">محبت سے بنایا</span>
</div>
</footer>


    </>
  );
}
