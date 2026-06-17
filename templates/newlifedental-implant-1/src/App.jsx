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
      

<header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 py-4">
<div className="flex items-center justify-start">
<img alt="New Life Dental Implant Center" className="h-10 w-auto object-contain" src="https://static.wixstatic.com/media/2cc3a3_ba246a1b67174802baa46aa2d694effe~mv2.png/v1/crop/x_619,y_0,w_7072,h_3092/fill/w_160,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Final%20FInal%20-%2011032021%20-%20FINAL%20LOG%20FOR%20NEW%20LIFE%20-%20FOR%20SURE.png"/>
</div>
</div>
</header>

<section className="min-h-screen flex flex-col justify-center px-6 pt-20">
<div className="max-w-4xl mx-auto w-full">
<h1 className="text-[#C9A84C] text-5xl md:text-7xl font-semibold tracking-tight leading-tight">
                Find Out If You Qualify for Full Mouth Dental Implants.
            </h1>
<p className="mt-6 text-lg md:text-xl text-white/90 font-light">
                Takes 60 seconds. No obligation. Get a clear answer today.
            </p>
<div className="mt-10">
<a className="inline-flex items-center bg-[#C9A84C] text-black px-8 py-4 rounded-full font-semibold transition-transform hover:scale-105" href="#">
                    Take the Free Quiz 
                    <iconify-icon className="ml-2" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</section>

<section className="border-y border-white/10 bg-black py-12 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="flex items-center justify-center space-x-3">
<iconify-icon className="text-[#C9A84C] text-2xl" icon="solar:map-point-linear"></iconify-icon>
<span className="text-sm font-medium">4 Locations Across Southern California</span>
</div>
<div className="flex items-center justify-center space-x-3">
<iconify-icon className="text-[#C9A84C] text-2xl" icon="solar:verified-check-linear"></iconify-icon>
<span className="text-sm font-medium">Lifetime Warranty on Every Restoration</span>
</div>
<div className="flex items-center justify-center space-x-3">
<iconify-icon className="text-[#C9A84C] text-2xl" icon="solar:smile-circle-linear"></iconify-icon>
<span className="text-sm font-medium">15,000+ Smiles Restored</span>
</div>
</div>
</section>

<section className="py-32 px-6">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-4xl text-center text-white font-semibold tracking-tight mb-16">Real Patients. Real Results.</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl">
<div className="aspect-video">
<iframe allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="w-full h-full" frameborder="0" src="https://www.youtube.com/embed/gQtO3C9zhS0" title="YouTube video player"></iframe>
</div>
</div>
<div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl">
<div className="aspect-video">
<iframe allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="w-full h-full" frameborder="0" src="https://www.youtube.com/embed/D6TVCHsmnqE" title="YouTube video player"></iframe>
</div>
</div>
</div>
<p className="mt-12 text-center text-xs text-white/60 max-w-lg mx-auto leading-relaxed">
                These are real New Life Dental Implant Center patients. Results are individual and vary per case.
            </p>
</div>
</section>

<section className="py-32 px-6 bg-zinc-950/50">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-[#C9A84C] text-3xl md:text-4xl font-semibold tracking-tight mb-12">Why New Life Is Different.</h2>
<div className="space-y-8 text-lg md:text-xl font-light leading-relaxed">
<p>Most dental implant practices charge $40,000 or more.</p>
<p>New Life designed a system that makes this treatment accessible.</p>
<p>The Zirkor™ process uses 6 implants and fully digital precision.</p>
<p>No bonded parts. No weak spots. Built to last a lifetime.</p>
<p>And it's backed by a lifetime warranty because they stand behind it.</p>
</div>
<div className="mt-16 text-white/40 text-sm uppercase tracking-widest font-medium">
                $9,990 per arch. Transparent. Final price. Guaranteed.
            </div>
</div>
</section>

<section className="py-40 px-6">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-[#C9A84C] text-4xl md:text-5xl font-semibold tracking-tight mb-6">See If You're a Candidate.</h2>
<p className="text-lg md:text-xl text-white/80 font-light mb-12">Answer 5 quick questions and get a personalized recommendation.</p>
<a className="inline-flex items-center bg-[#C9A84C] text-black px-10 py-5 rounded-full font-semibold transition-transform hover:scale-105" href="#">
                Start the Free Quiz 
                <iconify-icon className="ml-2" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</section>

<footer className="bg-black pt-32 pb-12 px-6 border-t border-white/5">
<div className="max-w-7xl mx-auto">
<div className="mb-12">
<h3 className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-10 text-center">4 Locations to Serve You.</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 text-sm text-white/70">
<div className="flex flex-col space-y-1">
<span className="text-white font-medium">Irvine, CA</span>
<span>4980 Barranca Pkwy, Suite 206</span>
</div>
<div className="flex flex-col space-y-1">
<span className="text-white font-medium">Fullerton, CA</span>
<span>2240 N Harbor Blvd, Suite 220</span>
</div>
<div className="flex flex-col space-y-1">
<span className="text-white font-medium">Torrance, CA</span>
<span>23000 Crenshaw Blvd, Suite 201</span>
</div>
<div className="flex flex-col space-y-1">
<span className="text-white font-medium">Temecula, CA</span>
<span>29645 Rancho California Rd, Suite 229</span>
</div>
</div>
</div>
<div className="text-center mt-20">
<a className="text-[#C9A84C] text-2xl md:text-3xl font-semibold tracking-tight" href="tel:9495697830">949-569-7830</a>
<p className="mt-12 text-xs text-white/30">
                    © New Life DIC, LLC. Individual results vary.
                </p>
</div>
</div>
</footer>

    </>
  );
}
