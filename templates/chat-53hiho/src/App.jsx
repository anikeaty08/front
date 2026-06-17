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
      

<nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-center">
<img alt="NSPAH Logo" className="h-10 md:h-12 w-auto object-contain" src="https://images.squarespace-cdn.com/content/v1/68e910cde490455d458c05cc/6ab0f298-a2e0-45c9-b628-44ce466f6571/NSPAH+Logo+1+2025.png.png?format=1500w"/>
</div>
</nav>

<section className="bg-[#002D62] text-white py-24 md:py-32 px-6">
<div className="max-w-4xl mx-auto text-center">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight mb-8">
                You've Been Told Everything Looks Normal. <br className="hidden md:block"/> But You Know Something's Off.
            </h1>
<p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed">
                At North Shore Pro-Active Health, Dr. Jordan and Dr. Jade dig deeper than routine labs. They find what conventional medicine misses. And they help you actually feel better.
            </p>
<div className="flex flex-col items-center gap-4">
<a className="gold-button bg-[#C5A059] text-white px-8 py-4 rounded-md font-semibold text-lg tracking-tight" href="https://drleasure.janeapp.com" target="_blank">
                    Click Here to Book Your Free Consultation
                </a>
<p className="text-sm text-slate-300">Free. No pressure. Just answers.</p>
</div>
</div>
</section>

<section className="bg-white py-24 px-6">
<div className="max-w-5xl mx-auto text-center">
<span className="text-xs font-semibold tracking-[0.2em] text-[#002D62] uppercase mb-8 block">WATCH THIS FIRST</span>
<div className="relative aspect-video w-full bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-center overflow-hidden shadow-sm group cursor-pointer mb-8">
<div className="absolute inset-0 flex items-center justify-center bg-slate-900/5 group-hover:bg-slate-900/0 transition-colors">
<iconify-icon className="text-6xl text-[#002D62]" icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-slate-400 font-medium">VSL Video Goes Here</span>
</div>
<p className="text-base md:text-lg text-[#002D62] font-medium">
                Dr. Jordan and Dr. Jade explain exactly how they help families in Libertyville feel better and live fully.
            </p>
</div>
</section>

<section className="bg-slate-50 py-24 px-6 border-y border-slate-100">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-semibold text-[#002D62] tracking-tight mb-16">Sound familiar?</h2>
<div className="space-y-12 mb-16">
<p className="text-xl md:text-2xl text-[#002D62] font-medium">Your labs came back normal. But you still feel terrible.</p>
<p className="text-xl md:text-2xl text-[#002D62] font-medium">You're exhausted by 3pm every day.</p>
<p className="text-xl md:text-2xl text-[#002D62] font-medium">You've tried everything and nothing sticks.</p>
<p className="text-xl md:text-2xl text-[#002D62] font-medium">You just want someone to actually listen.</p>
</div>
<div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200">
<p className="text-base md:text-lg leading-relaxed text-[#002D62]">
                    That's exactly why North Shore Pro-Active Health exists. Dr. Jordan and Dr. Jade are sisters who grew up in Libertyville and built this practice for people like you. They combine chiropractic care and functional medicine to find what's really going on. Not just manage it. <span className="font-semibold">Fix it.</span>
</p>
</div>
</div>
</section>

<section className="bg-[#002D62] text-white py-24 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white/5 border border-white/10 p-8 rounded-xl flex flex-col justify-between">
<div>
<iconify-icon className="text-3xl text-[#C5A059] mb-4" icon="solar:double-quotes-l-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<p className="text-base text-slate-200 leading-relaxed italic mb-6">
                            "I came in with chronic pain and digestion issues that no one else could explain. She listened carefully, asked thoughtful questions, and created a plan that actually worked. I felt supported and empowered throughout the process."
                        </p>
</div>
<span className="font-semibold tracking-tight">— Robin B.</span>
</div>

<div className="bg-white/5 border border-white/10 p-8 rounded-xl flex flex-col justify-between">
<div>
<iconify-icon className="text-3xl text-[#C5A059] mb-4" icon="solar:double-quotes-l-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<p className="text-base text-slate-200 leading-relaxed italic mb-6">
                            "I left in tears. Dr. Jordan was wonderful. This is a night and day experience comparing my regular medical care and what I received at North Shore. I left feeling heard, supported, and encouraged."
                        </p>
</div>
<span className="font-semibold tracking-tight">— Tatiana A.</span>
</div>

<div className="bg-white/5 border border-white/10 p-8 rounded-xl flex flex-col justify-between">
<div>
<iconify-icon className="text-3xl text-[#C5A059] mb-4" icon="solar:double-quotes-l-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<p className="text-base text-slate-200 leading-relaxed italic mb-6">
                            "Staff is so friendly and knowledgeable. They have really made my pregnancy pains easier to deal with and I couldn't be more thankful."
                        </p>
</div>
<span className="font-semibold tracking-tight">— Amanda V.</span>
</div>
</div>
</div>
</section>

<section className="bg-white py-24 px-6">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-semibold text-[#002D62] tracking-tight mb-16">
                Here's what you get when you book your free consultation.
            </h2>
<div className="space-y-8 text-left">
<div className="flex items-start gap-4">
<div className="w-1.5 h-8 bg-[#C5A059] shrink-0 mt-1"></div>
<p className="text-lg md:text-xl text-[#002D62]">A real conversation about what's going on in your body.</p>
</div>
<div className="flex items-start gap-4">
<div className="w-1.5 h-8 bg-[#C5A059] shrink-0 mt-1"></div>
<p className="text-lg md:text-xl text-[#002D62]">A clear explanation of what chiropractic and functional medicine can do for you.</p>
</div>
<div className="flex items-start gap-4">
<div className="w-1.5 h-8 bg-[#C5A059] shrink-0 mt-1"></div>
<p className="text-lg md:text-xl text-[#002D62]">No pressure. No rushing. No "everything looks fine."</p>
</div>
<div className="flex items-start gap-4">
<div className="w-1.5 h-8 bg-[#C5A059] shrink-0 mt-1"></div>
<p className="text-lg md:text-xl text-[#002D62]">A personalized next step that actually makes sense for your life.</p>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 py-24 px-6 border-t border-slate-100">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

<div className="flex flex-col gap-6">
<div className="flex items-center gap-4">
<iconify-icon className="text-3xl text-[#C5A059]" icon="solar:user-speak-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-2xl font-semibold text-[#002D62] tracking-tight">Dr. Jordan Leasure</h3>
</div>
<p className="text-base text-[#002D62] leading-relaxed">
                        Founding physician. Licensed chiropractor since 2006. Certified Chiropractic Wellness Practitioner. Pursuing her Diplomate in Nutrition through the Institute of Functional Medicine. Former collegiate athlete with a focus on functional medicine and sports injuries. Born and raised in Libertyville.
                    </p>
</div>

<div className="flex flex-col gap-6">
<div className="flex items-center gap-4">
<iconify-icon className="text-3xl text-[#C5A059]" icon="solar:user-heart-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-2xl font-semibold text-[#002D62] tracking-tight">Dr. Jade Dellinger</h3>
</div>
<p className="text-base text-[#002D62] leading-relaxed">
                        Licensed chiropractor since 2010. Webster Certified. Certified by the Academy Council of Chiropractic Pediatrics. B!RTHFIT Professional. IFM pediatric functional medicine certified in 2025. Specialist in prenatal care, pediatric chiropractic, and family wellness. Libertyville local, boy mom, and deeply committed to helping families thrive.
                    </p>
</div>
</div>
<div className="mt-20 text-center">
<p className="text-lg text-[#002D62] italic font-medium">
                    35 combined years of experience. One practice. One mission. Your family's health.
                </p>
</div>
</div>
</section>

<section className="bg-[#002D62] text-white py-24 px-6 text-center">
<div className="max-w-3xl mx-auto">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">Ready to finally feel better?</h2>
<p className="text-lg text-slate-200 mb-10 leading-relaxed">
                Book a free consultation with Dr. Jordan or Dr. Jade. It takes two minutes. And it might be the thing that changes everything.
            </p>
<div className="flex flex-col items-center gap-6">
<a className="gold-button bg-[#C5A059] text-white px-10 py-5 rounded-md font-semibold text-lg tracking-tight" href="https://drleasure.janeapp.com" target="_blank">
                    Click Here to Book Your Free Consultation
                </a>
<div className="text-sm text-slate-300 leading-relaxed">
<p className="font-medium">North Shore Pro-Active Health</p>
<p>112 W. Lake Street, Libertyville, IL 60048</p>
<p>(847) 362-4476</p>
</div>
</div>
</div>
</section>

<footer className="bg-white py-12 px-6 border-t border-slate-100">
<div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
<img alt="NSPAH Logo" className="h-8 w-auto grayscale opacity-50" src="https://images.squarespace-cdn.com/content/v1/68e910cde490455d458c05cc/6ab0f298-a2e0-45c9-b628-44ce466f6571/NSPAH+Logo+1+2025.png.png?format=1500w"/>
<p className="text-xs text-slate-500 text-center tracking-wide">
                North Shore Pro-Active Health. 112 W. Lake Street, Libertyville, IL 60048.
            </p>
</div>
</footer>

    </>
  );
}
