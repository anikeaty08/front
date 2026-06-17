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
      

<nav className="py-8 flex justify-center">
<div className="text-xl font-semibold tracking-tighter text-slate-900 uppercase">
            Koch Chiropractic
        </div>
</nav>

<section className="py-16 md:py-24 px-6 max-w-5xl mx-auto text-center">
<h1 className="text-4xl md:text-6xl font-semibold text-slate-800 tracking-tight leading-tight mb-6">
            Your Pain Has a Root Cause. <br className="hidden md:block"/> We Find It.
        </h1>
<p className="text-lg md:text-xl font-medium text-[#1e3a8a] max-w-3xl mx-auto mb-10 leading-relaxed">
            Koch Chiropractic has helped Waupaca patients get out of pain, get off meds, and get back to their lives, for over 28 years.
        </p>
<div className="flex flex-col items-center gap-4">
<a className="bg-[#1e3a8a] text-white px-8 py-4 rounded-full text-base font-medium transition-all hover:bg-[#1a337a] hover:shadow-lg active:scale-95" href="#">
                Click Here to Book Your Consultation
            </a>
<p className="text-sm text-slate-500">
                Free consultation. No pressure. Just answers.
            </p>
</div>
</section>

<section className="px-6 pb-24 max-w-5xl mx-auto">
<div className="relative aspect-video bg-slate-100 rounded-3xl overflow-hidden flex items-center justify-center border border-slate-200 group cursor-pointer">
<div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-xl transition-transform group-hover:scale-110">
<iconify-icon className="text-[#1e3a8a] text-3xl md:text-4xl" icon="solar:play-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<p className="text-center mt-6 text-sm italic text-slate-500">
            Watch Dr. Gina explain how we find the root cause of your pain and build a plan that actually works.
        </p>
</section>

<section className="py-16 border-y border-slate-100">
<div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
<div className="space-y-1">
<div className="text-2xl font-semibold text-[#1e3a8a] tracking-tight">28+ Years</div>
<div className="text-sm text-slate-500 uppercase tracking-widest">In Practice</div>
</div>
<div className="space-y-1">
<div className="text-2xl font-semibold text-[#1e3a8a] tracking-tight">75+ Years</div>
<div className="text-sm text-slate-500 uppercase tracking-widest">Combined Team Experience</div>
</div>
<div className="space-y-1">
<div className="text-2xl font-semibold text-[#1e3a8a] tracking-tight">Patients, Pets, &amp; Horses</div>
<div className="text-sm text-slate-500 uppercase tracking-widest">Welcome</div>
</div>
</div>
</section>

<section className="bg-slate-50 py-24 px-6">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-3xl font-semibold text-slate-800 tracking-tight mb-8">Sound familiar?</h2>
<div className="space-y-6 text-base md:text-lg text-slate-600 leading-relaxed">
<p>
                    Chronic back pain that just won't quit. Neck stiffness that's been there for years. Sciatica that shoots down your leg. Headaches that come back no matter what you try. Knee pain that stopped you from doing what you love.
                </p>
<p>
                    You've probably tried pain meds. Maybe physical therapy. Maybe you were told surgery was next.
                </p>
<p className="font-medium text-slate-800">
                    Dr. Gina takes a different approach. She finds the root cause and builds a care plan around you.
                </p>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-3xl font-semibold text-slate-800 tracking-tight mb-8">This isn't just an adjustment.</h2>
<div className="space-y-6 text-base md:text-lg text-slate-600 leading-relaxed">
<p>
                    Dr. Gina Koch is trained in chiropractic care, functional medicine, Class IV laser therapy, and medical weight loss. She also does in-house lab work and food sensitivity testing so nothing gets missed.
                </p>
<p>
                    She's been doing this since 1997. She's seen a lot. She knows what works.
                </p>
</div>
</div>
</section>

<section className="bg-slate-50 py-24 px-6">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl font-semibold text-center text-slate-800 tracking-tight mb-16">What patients are saying.</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
<iconify-icon className="text-[#1e3a8a] text-3xl mb-4 rotate-180" icon="solar:double-alt-arrow-right-linear"></iconify-icon>
<p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">
                        "She explained what she was doing during the whole treatment and how it affected my body. She quickly put at ease any apprehension I had regarding chiropractic treatment. When she added laser treatment, she felt it would greatly benefit my knee issues. After completing the laser treatment I was very satisfied with the results."
                    </p>
<div className="font-medium text-slate-800 text-sm">— Pam S.</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
<iconify-icon className="text-[#1e3a8a] text-3xl mb-4 rotate-180" icon="solar:double-alt-arrow-right-linear"></iconify-icon>
<p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">
                        "Since starting laser I've had decreased pain and decreased swelling. I'm now off pain meds with only five treatments. So I'm very pleased so far."
                    </p>
<div className="font-medium text-slate-800 text-sm">— Stan E.</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
<iconify-icon className="text-[#1e3a8a] text-3xl mb-4 rotate-180" icon="solar:double-alt-arrow-right-linear"></iconify-icon>
<p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">
                        "I've been having neck pain for several years and have not had anything help me like the laser treatments. Not pain meds, not muscle relaxers, not electric pulse. I highly recommend it."
                    </p>
<div className="font-medium text-slate-800 text-sm">— Pat J.</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 text-center">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl font-semibold text-slate-800 tracking-tight mb-4">Ready to find out what's actually going on?</h2>
<p className="text-base text-slate-600 mb-10">
                Book a free consultation with Dr. Gina. We'll look at what's causing your pain and put together a real plan to fix it.
            </p>
<div className="flex flex-col items-center gap-6">
<a className="bg-[#1e3a8a] text-white px-8 py-4 rounded-full text-base font-medium transition-all hover:bg-[#1a337a] hover:shadow-lg active:scale-95" href="#">
                    Click Here to Book Your Consultation
                </a>
<div className="space-y-1 text-sm text-slate-500">
<p className="font-medium text-slate-700">Koch Chiropractic &amp; Holistic Pain Solutions</p>
<p>815 W. Fulton St. Suite 6, Waupaca, WI</p>
<p>(715) 256-9616</p>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-slate-100 px-6">
<div className="max-w-5xl mx-auto text-center">
<p className="text-xs text-slate-400">
                Koch Chiropractic &amp; Holistic Pain Solutions | Waupaca, WI | (715) 256-9616
            </p>
</div>
</footer>

    </>
  );
}
