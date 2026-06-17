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
      

<header className="pt-12 pb-8 px-6 text-center">
<img alt="The UltraWellness Center" className="mx-auto h-12 md:h-14 mb-16" src="https://www.ultrawellnesscenter.com/wp-content/uploads/2024/09/uwc___logo-1-300x71.png"/>
<div className="max-w-4xl mx-auto">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 leading-tight">
                Your Labs Say Normal. <span className="block">You Don't Feel Normal.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-500 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
                The UltraWellness Center finds what conventional medicine misses. Root causes. Real answers. A plan built for you.
            </p>
<div className="flex flex-col items-center">
<a className="w-full md:w-auto bg-[#42B884] hover:bg-[#39a374] text-white text-lg font-medium py-4 px-10 rounded-full transition-all duration-300 shadow-lg shadow-[#42B884]/20 text-center" href="#">
                    Click Here to Book Your Consultation
                </a>
<span className="text-sm text-zinc-400 mt-4 font-light">Free consultation call. No obligation.</span>
</div>
</div>
</header>

<section className="max-w-5xl mx-auto px-6 py-12">
<div className="border-t border-[#42B884] pt-8 mb-6">
<p className="text-center text-xs font-semibold tracking-widest text-[#42B884] uppercase mb-8">WATCH THIS FIRST</p>
<div className="aspect-video bg-zinc-900 rounded-2xl flex items-center justify-center relative overflow-hidden group cursor-pointer shadow-2xl">
<iconify-icon className="text-white/40 group-hover:text-[#42B884] transition-colors" icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}} width="84"></iconify-icon>
<div className="absolute bottom-6 left-6 flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-[#42B884] animate-pulse"></div>
<span className="text-white/60 text-xs font-medium uppercase tracking-widest">Live Experience</span>
</div>
</div>
<p className="text-center text-sm text-zinc-400 mt-6 font-light italic">
                Hear from real patients about their experience at The UltraWellness Center.
            </p>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-16">
<p className="text-center text-xs font-semibold tracking-widest text-[#42B884] uppercase mb-12">REAL PATIENTS. REAL RESULTS.</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="aspect-video rounded-xl overflow-hidden bg-zinc-100 shadow-sm">
<iframe allow="autoplay; fullscreen" allowfullscreen="" className="w-full h-full" frameborder="0" src="https://player.vimeo.com/video/268487509"></iframe>
</div>
<div className="aspect-video rounded-xl overflow-hidden bg-zinc-100 shadow-sm">
<iframe allow="autoplay; fullscreen" allowfullscreen="" className="w-full h-full" frameborder="0" src="https://player.vimeo.com/video/268484527"></iframe>
</div>
<div className="aspect-video rounded-xl overflow-hidden bg-zinc-100 shadow-sm">
<iframe allow="autoplay; fullscreen" allowfullscreen="" className="w-full h-full" frameborder="0" src="https://player.vimeo.com/video/267484253"></iframe>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-24 text-center">
<div className="border-t border-[#42B884] pt-12 mb-12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12">This Is Not a Typical Doctor's Visit.</h2>
<div className="space-y-8 text-lg md:text-xl text-zinc-600 font-light leading-relaxed">
<p>Most doctors treat your symptoms.</p>
<p className="text-zinc-900 font-medium">We find out why you have them.</p>
<p>The UltraWellness Center has over <span className="text-[#42B884] font-medium">100 years</span> of combined functional medicine experience.</p>
<p>The team was built by <span className="text-zinc-900 font-medium">Dr. Mark Hyman</span>, a 15-time New York Times bestselling author and Head of Strategy and Innovation at the Cleveland Clinic Center for Functional Medicine.</p>
<p>We look at your full history. Your lifestyle. Your environment. Your labs.</p>
<p className="text-zinc-900 font-medium">Then we build a plan that actually fits you.</p>
</div>
</div>
</section>

<section className="bg-zinc-50 py-24 px-6">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-20">Here's What Happens When You Book a Call.</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-16">
<div className="text-center">
<div className="mb-6 flex justify-center">
<iconify-icon className="text-[#42B884]" icon="solar:chat-line-linear" style={{strokeWidth: '1.5'}} width="48"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight">Step 1: You tell us what's going on.</h3>
<p className="text-zinc-500 font-light">We listen to your full story, not just your symptoms.</p>
</div>
<div className="text-center">
<div className="mb-6 flex justify-center">
<iconify-icon className="text-[#42B884]" icon="solar:user-plus-linear" style={{strokeWidth: '1.5'}} width="48"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight">Step 2: We match you with the physician.</h3>
<p className="text-zinc-500 font-light">Someone who specializes in exactly what you're dealing with.</p>
</div>
<div className="text-center">
<div className="mb-6 flex justify-center">
<iconify-icon className="text-[#42B884]" icon="solar:clipboard-check-linear" style={{strokeWidth: '1.5'}} width="48"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight">Step 3: You get a personalized plan.</h3>
<p className="text-zinc-500 font-light">Built around the root cause of what's holding you back.</p>
</div>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 py-24">
<div className="border-t border-[#42B884]/30 pt-16">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
<div>
<div className="text-4xl md:text-5xl font-semibold text-[#42B884] mb-2 tracking-tight">20+</div>
<p className="text-sm font-medium text-zinc-900 uppercase tracking-wider">Years of Practice</p>
</div>
<div>
<div className="text-4xl md:text-5xl font-semibold text-[#42B884] mb-2 tracking-tight">100+</div>
<p className="text-sm font-medium text-zinc-900 uppercase tracking-wider">Combined Team Experience</p>
</div>
<div>
<div className="text-4xl md:text-5xl font-semibold text-[#42B884] mb-2 tracking-tight">Thousands</div>
<p className="text-sm font-medium text-zinc-900 uppercase tracking-wider">Patients Treated Worldwide</p>
</div>
</div>
</div>
</section>

<section className="bg-[#42B884] py-24 px-6 text-white text-center">
<div className="max-w-3xl mx-auto">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">Ready to Find Out What's Really Going On?</h2>
<p className="text-lg md:text-xl font-light opacity-90 mb-12">
                Book a free consultation call with our patient care team today.
            </p>
<div className="flex flex-col items-center">
<a className="w-full md:w-auto bg-white text-[#42B884] text-lg font-semibold py-5 px-12 rounded-full hover:bg-zinc-100 transition-all duration-300 shadow-xl" href="#">
                    Click Here to Book Your Consultation
                </a>
<p className="mt-6 text-sm font-light opacity-80">
                    Spots are limited. We review every inquiry personally.
                </p>
</div>
</div>
</section>

    </>
  );
}
