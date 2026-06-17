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
      

<nav className="w-full py-6 px-6 lg:px-12 border-b border-zinc-100">
<div className="max-w-7xl mx-auto flex justify-start items-center">
<img alt="McCawley Center Logo" className="h-10 lg:h-12 w-auto object-contain" src="https://www.mccawley.com/wp-content/uploads/2023/10/cropped-logo_dark_text-200x93.png"/>
</div>
</nav>

<section className="py-20 lg:py-32 px-6">
<div className="max-w-4xl mx-auto text-center">
<h1 className="text-4xl lg:text-6xl font-semibold tracking-tight leading-tight mb-6">
                Are Your Gums Trying to Tell You Something?
            </h1>
<p className="text-lg lg:text-xl text-zinc-800 mb-4 max-w-2xl mx-auto leading-relaxed">
                Take our 60-second quiz. Find out if your gum disease, bad breath, or implant pain can be treated without surgery or removal.
            </p>
<p className="text-sm text-zinc-500 mb-10">
                Used by patients at McCawley Center for Laser Periodontics &amp; Implants in Fort Lauderdale, FL.
            </p>
<div className="flex flex-col items-center gap-4">
<a className="inline-flex items-center justify-center bg-[#CC0000] text-white font-medium text-lg py-4 px-10 rounded-full transition-transform hover:scale-[1.02] active:scale-100 shadow-lg shadow-red-900/10" href="#">
                    Take the Free Quiz 
                    <iconify-icon className="ml-2" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<span className="text-xs text-zinc-400">No cost. No obligation. Takes less than a minute.</span>
</div>
</div>
</section>

<section className="py-20 bg-zinc-50 px-6">
<div className="max-w-7xl mx-auto text-center">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-4">Real Patients. Real Results.</h2>
<p className="text-zinc-500 mb-12 max-w-lg mx-auto">These are patients who were told they might lose their teeth or implants. Watch what happened.</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

<div className="flex flex-col">
<div className="aspect-video w-full rounded-2xl overflow-hidden shadow-sm bg-black mb-4">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="w-full h-full" frameborder="0" src="https://www.youtube.com/embed/uTtLemD1p0U"></iframe>
</div>
<p className="text-sm font-medium text-zinc-700">Heiko — Laser Gum Disease Treatment</p>
</div>

<div className="flex flex-col">
<div className="aspect-video w-full rounded-2xl overflow-hidden shadow-sm bg-black mb-4">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="w-full h-full" frameborder="0" src="https://www.youtube.com/embed/iyBYZR_y7UE"></iframe>
</div>
<p className="text-sm font-medium text-zinc-700">Belkis — How Dr. McCawley Saved Her Smile</p>
</div>

<div className="flex flex-col">
<div className="aspect-video w-full rounded-2xl overflow-hidden shadow-sm bg-black mb-4">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="w-full h-full" frameborder="0" src="https://www.youtube.com/embed/zviIACwe1GI"></iframe>
</div>
<p className="text-sm font-medium text-zinc-700">Lisa — Gum Recession with the Pinhole Technique</p>
</div>
</div>
<a className="inline-flex items-center justify-center bg-[#CC0000] text-white font-medium text-base py-4 px-10 rounded-full transition-transform hover:scale-[1.02]" href="#">
                Take the Free Quiz
                <iconify-icon className="ml-2" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</section>

<section className="py-20 px-6 border-b border-zinc-100">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
<div className="space-y-4">
<div className="h-1 w-12 bg-[#CC0000] mx-auto md:mx-0"></div>
<div className="text-4xl lg:text-5xl font-semibold tracking-tight">50+ Years</div>
<p className="text-zinc-500">Serving Fort Lauderdale and Broward County</p>
</div>
<div className="space-y-4">
<div className="h-1 w-12 bg-[#CC0000] mx-auto md:mx-0"></div>
<div className="text-4xl lg:text-5xl font-semibold tracking-tight">500,000+</div>
<p className="text-zinc-500">Microscopic slides analyzed</p>
</div>
<div className="space-y-4">
<div className="h-1 w-12 bg-[#CC0000] mx-auto md:mx-0"></div>
<div className="text-4xl lg:text-5xl font-semibold tracking-tight">First in the U.S.</div>
<p className="text-zinc-500">To adopt the Nd:YAG laser for periodontal treatment</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-16 text-center">Here's How It Works</h2>
<div className="space-y-12 mb-16">
<div className="flex gap-6 items-start">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center border border-zinc-100">
<iconify-icon className="text-[#CC0000] text-xl" icon="solar:clipboard-list-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold mb-2">Step 1: Answer 5 quick questions</h3>
<p className="text-zinc-500">Share a few details about your symptoms and history in a private format.</p>
</div>
</div>
<div className="flex gap-6 items-start">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center border border-zinc-100">
<iconify-icon className="text-[#CC0000] text-xl" icon="solar:bill-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold mb-2">Step 2: Get a personalized result</h3>
<p className="text-zinc-500">Receive insights based on your specific situation immediately after finishing.</p>
</div>
</div>
<div className="flex gap-6 items-start">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center border border-zinc-100">
<iconify-icon className="text-[#CC0000] text-xl" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold mb-2">Step 3: See if you qualify for minimally invasive care</h3>
<p className="text-zinc-500">Explore options that avoid traditional surgery and extractions.</p>
</div>
</div>
</div>
<div className="text-center">
<a className="inline-flex items-center justify-center bg-[#CC0000] text-white font-medium text-base py-4 px-10 rounded-full transition-transform hover:scale-[1.02]" href="#">
                    Start the Quiz Now
                    <iconify-icon className="ml-2" icon="solar:play-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-zinc-100">
<div className="max-w-2xl mx-auto text-center">
<p className="text-lg text-zinc-700 leading-relaxed mb-6">
                McCawley Center has been a family-owned practice in Fort Lauderdale for over 50 years. Dr. Tom and Dr. Mark McCawley specialize in saving teeth and implants that other offices say can't be saved. They use laser therapy, live bacteria diagnosis, and targeted antimicrobial treatment — not traditional surgery.
            </p>
<p className="text-lg font-semibold tracking-tight text-zinc-900">
                Second opinions are always welcome.
            </p>
</div>
</section>

<section className="bg-[#CC0000] py-20 px-6">
<div className="max-w-4xl mx-auto text-center text-white">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-4">Don't Wait Until It Gets Worse.</h2>
<p className="text-white/80 text-lg mb-10 max-w-lg mx-auto">Find out what's really going on in 60 seconds.</p>
<div className="flex flex-col items-center gap-6">
<a className="bg-white text-zinc-900 font-medium text-lg py-4 px-12 rounded-full transition-shadow hover:shadow-xl" href="#">
                    Take the Free Quiz →
                </a>
<p className="text-sm text-white/70">
                    New patient exam special available. Call (954) 807-4829 to ask.
                </p>
</div>
</div>
</section>

<footer className="bg-black text-white py-16 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
<div className="space-y-6">
<div className="bg-white p-2 inline-block rounded">
<img alt="Logo" className="h-8 brightness-0" src="https://www.mccawley.com/wp-content/uploads/2023/10/cropped-logo_dark_text-200x93.png"/>
</div>
<div className="space-y-1 text-zinc-400 text-sm">
<p>800 East Broward Boulevard #706</p>
<p>Fort Lauderdale, FL 33301</p>
</div>
</div>
<div className="flex flex-col md:items-end">
<p className="text-xs uppercase tracking-widest text-zinc-500 mb-2 font-medium">New Patients</p>
<a className="text-2xl lg:text-3xl font-semibold hover:text-[#CC0000] transition-colors" href="tel:9548074829">(954) 807-4829</a>
<p className="mt-8 text-xs text-zinc-600">© 2024 McCawley Center for Laser Periodontics &amp; Implants.</p>
</div>
</div>
</footer>

    </>
  );
}
