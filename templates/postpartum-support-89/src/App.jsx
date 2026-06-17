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
      

<nav className="fixed top-0 w-full h-[72px] bg-white border-b border-black z-50 flex items-center justify-between px-6 md:px-12">
<div className="text-3xl font-semibold tracking-[-0.05em]">4TH.</div>
<div className="hidden md:flex space-x-12">
<a className="nav-link text-sm font-medium uppercase tracking-widest" href="#">The Plan</a>
<a className="nav-link text-sm font-medium uppercase tracking-widest" href="#">The Reality</a>
<a className="nav-link text-sm font-medium uppercase tracking-widest" href="#">Pricing</a>
</div>
<div className="flex items-center gap-6">
<button className="md:hidden font-mono uppercase text-xs tracking-widest">[MENU]</button>
<a className="hidden md:flex bg-black text-white px-6 py-3 text-[13px] font-bold uppercase tracking-wide hover:bg-[#FF3300] transition-colors duration-200" href="#">
                Get Help
            </a>
</div>
</nav>

<header className="relative min-h-[90vh] flex flex-col justify-center items-center bg-white overflow-hidden pt-[72px]">

<div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>

<div className="absolute top-32 right-6 md:right-20 bg-zinc-50 border border-black p-4 w-64 shadow-[4px_4px_0px_#000000] z-20 animate-[slideIn_1s_ease-out]">
<div className="flex items-start gap-3">
<div className="w-2 h-2 rounded-full bg-[#FF3300] mt-1.5 shrink-0"></div>
<div>
<p className="text-xs font-bold uppercase tracking-wide text-zinc-500 mb-1">Alert</p>
<p className="text-sm font-medium leading-tight">3AM Feed due in 10 mins.</p>
</div>
</div>
</div>
<div className="absolute bottom-20 left-6 md:left-20 bg-zinc-50 border border-black p-4 w-72 shadow-[4px_4px_0px_#000000] z-20 hidden md:block">
<div className="flex items-start gap-3">
<i className="w-4 h-4 text-zinc-950 mt-0.5" data-lucide="moon"></i>
<div>
<p className="text-xs font-bold uppercase tracking-wide text-zinc-500 mb-1">Status</p>
<p className="text-sm font-medium leading-tight">Mom is napping. Do not disturb.</p>
</div>
</div>
</div>

<div className="container mx-auto px-6 relative z-10 text-center">
<h1 className="text-[12vw] md:text-[8rem] lg:text-[10rem] font-semibold leading-[0.85] tracking-[-0.04em] text-zinc-950 text-reveal cursor-default mb-8">
                THE BABY IS<br/>FINE. YOU ARE<br/>A WRECK.
            </h1>
<p className="max-w-xl mx-auto text-base md:text-lg text-zinc-600 leading-[140%] mb-12 font-normal">
                The fourth trimester is a war zone. We are the logistics team. Laundry, meals, and sleep protection for the first 90 days.
            </p>
<button className="bg-[#FF3300] text-white px-8 py-4 text-[13px] font-bold uppercase tracking-wider shadow-[4px_4px_0px_#000000] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_#000000] transition-all border border-black">
                Deploy The Team
            </button>
</div>
</header>

<section className="border-y border-black bg-white overflow-hidden py-8">
<div className="marquee-container w-full flex whitespace-nowrap overflow-hidden group">
<div className="animate-marquee flex gap-12 group-hover:paused pl-12">

<div className="flex items-center gap-4 p-4 border border-black hover:border-[#FF3300] transition-colors bg-white">
<i className="w-4 h-4 text-[#FF3300]" data-lucide="quote"></i>
<span className="text-lg font-medium tracking-tight">They did my laundry while I cried.</span>
</div>
<div className="flex items-center gap-4 p-4 border border-black hover:border-[#FF3300] transition-colors bg-white">
<i className="w-4 h-4 text-[#FF3300]" data-lucide="quote"></i>
<span className="text-lg font-medium tracking-tight">I slept for 6 hours straight.</span>
</div>
<div className="flex items-center gap-4 p-4 border border-black hover:border-[#FF3300] transition-colors bg-white">
<i className="w-4 h-4 text-[#FF3300]" data-lucide="quote"></i>
<span className="text-lg font-medium tracking-tight">Cheaper than a divorce.</span>
</div>
<div className="flex items-center gap-4 p-4 border border-black hover:border-[#FF3300] transition-colors bg-white">
<i className="w-4 h-4 text-[#FF3300]" data-lucide="quote"></i>
<span className="text-lg font-medium tracking-tight">No judgment, just folded clothes.</span>
</div>

<div className="flex items-center gap-4 p-4 border border-black hover:border-[#FF3300] transition-colors bg-white">
<i className="w-4 h-4 text-[#FF3300]" data-lucide="quote"></i>
<span className="text-lg font-medium tracking-tight">They did my laundry while I cried.</span>
</div>
<div className="flex items-center gap-4 p-4 border border-black hover:border-[#FF3300] transition-colors bg-white">
<i className="w-4 h-4 text-[#FF3300]" data-lucide="quote"></i>
<span className="text-lg font-medium tracking-tight">I slept for 6 hours straight.</span>
</div>
<div className="flex items-center gap-4 p-4 border border-black hover:border-[#FF3300] transition-colors bg-white">
<i className="w-4 h-4 text-[#FF3300]" data-lucide="quote"></i>
<span className="text-lg font-medium tracking-tight">Cheaper than a divorce.</span>
</div>
<div className="flex items-center gap-4 p-4 border border-black hover:border-[#FF3300] transition-colors bg-white">
<i className="w-4 h-4 text-[#FF3300]" data-lucide="quote"></i>
<span className="text-lg font-medium tracking-tight">No judgment, just folded clothes.</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-black">
<div className="max-w-7xl mx-auto">
<h2 className="text-4xl md:text-5xl font-medium tracking-[-0.02em] mb-12 text-center md:text-left">
                WE DON'T DO BIRTH PLANS.<br/>WE DO SURVIVAL PLANS.
            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-0 border border-black bg-black">

<div className="md:col-span-2 md:row-span-2 bg-white p-8 md:p-12 border border-black group hover:bg-zinc-950 hover:text-white transition-all duration-300 relative overflow-hidden">
<div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
<i className="w-8 h-8 text-[#FF3300]" data-lucide="arrow-up-right"></i>
</div>
<div className="h-full flex flex-col justify-between relative z-10">
<div className="w-16 h-16 bg-zinc-100 border border-black mb-8 flex items-center justify-center group-hover:bg-zinc-800 group-hover:border-zinc-700">
<i className="w-8 h-8" data-lucide="box"></i>
</div>
<div>
<h3 className="text-3xl font-medium tracking-tight mb-4">Household Reset</h3>
<p className="text-lg opacity-80 leading-relaxed">We clear the chaos so you can clear your mind. Bottle washing, pump part sterilization, and laundry folding. We turn the nursery back into a room, not a storage unit.</p>
</div>
</div>
</div>

<div className="bg-white p-8 border border-black group hover:bg-zinc-950 hover:text-white transition-all duration-300">
<div className="flex justify-between items-start mb-6">
<i className="w-8 h-8" data-lucide="moon"></i>
<span className="text-xs font-bold uppercase tracking-widest border border-current px-2 py-1">2200 - 0600</span>
</div>
<h3 className="text-xl font-medium tracking-tight mb-2">Sleep Defense</h3>
<p className="text-sm opacity-80">We watch the monitor. You enter REM. No interruptions unless necessary.</p>
</div>

<div className="bg-white p-8 border border-black group hover:bg-zinc-950 hover:text-white transition-all duration-300">
<div className="flex justify-between items-start mb-6">
<i className="w-8 h-8" data-lucide="soup"></i>
<span className="text-xs font-bold uppercase tracking-widest text-[#FF3300]">Hot</span>
</div>
<h3 className="text-xl font-medium tracking-tight mb-2">Actual Food</h3>
<p className="text-sm opacity-80">Bone broth and nutrient-dense meals you can eat with one hand while holding a baby.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-b border-black">
<div className="container mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-4xl md:text-5xl font-medium tracking-[-0.02em] mb-4">DISPATCHES FROM THE TRENCHES</h2>
<p className="text-lg text-zinc-600">Real stories from parents who stopped pretending it was easy.</p>
</div>
<a className="px-6 py-3 border border-black text-[13px] font-bold uppercase hover:bg-black hover:text-white transition-colors" href="#">
                    Read The Logs
                </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<article className="group cursor-pointer hover-glitch">
<div className="aspect-[4/3] w-full border border-black bg-zinc-200 overflow-hidden mb-6 relative">
<img alt="Messy room" className="w-full h-full object-cover grayscale mix-blend-multiply contrast-125" src="https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&amp;w=800&amp;auto=format&amp;fit=crop&amp;grayscale"/>
<div className="absolute top-4 left-4 bg-white border border-black px-3 py-1 text-xs font-bold uppercase">Day 4</div>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-3 group-hover:underline decoration-1 underline-offset-4">The Hormonal Crash</h3>
<p className="text-sm text-zinc-600 leading-relaxed line-clamp-3">Why I sobbed because the cat looked at me wrong. The estrogen drop is real, and it feels like falling off a cliff without a parachute.</p>
</article>

<article className="group cursor-pointer hover-glitch">
<div className="aspect-[4/3] w-full border border-black bg-zinc-200 overflow-hidden mb-6 relative">
<img alt="Coffee" className="w-full h-full object-cover grayscale mix-blend-multiply contrast-125" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 left-4 bg-white border border-black px-3 py-1 text-xs font-bold uppercase">Day 14</div>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-3 group-hover:underline decoration-1 underline-offset-4">Breastfeeding is a Job</h3>
<p className="text-sm text-zinc-600 leading-relaxed line-clamp-3">I calculated the hours. It's a 40-hour work week. My nipples are bleeding, but the baby gained 3 ounces, so I guess we are winning?</p>
</article>

<article className="group cursor-pointer hover-glitch">
<div className="aspect-[4/3] w-full border border-black bg-zinc-200 overflow-hidden mb-6 relative">
<img alt="Quiet room" className="w-full h-full object-cover grayscale mix-blend-multiply contrast-125" src="https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&amp;w=800&amp;auto=format&amp;fit=crop&amp;grayscale"/>
<div className="absolute top-4 left-4 bg-white border border-black px-3 py-1 text-xs font-bold uppercase">Day 45</div>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-3 group-hover:underline decoration-1 underline-offset-4">The First Full Night</h3>
<p className="text-sm text-zinc-600 leading-relaxed line-clamp-3">I woke up in a panic because it was too quiet. I checked the monitor three times. She was just sleeping. I felt like a new human.</p>
</article>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-black relative overflow-hidden">
<div className="container mx-auto px-6 relative">
<h2 className="text-4xl font-medium text-center mb-16 tracking-tight">THE 90-DAY ROADMAP</h2>

<div className="absolute left-1/2 top-32 bottom-0 w-px bg-gradient-to-b from-black via-[#FF3300] to-black -translate-x-1/2 hidden md:block"></div>
<div className="space-y-24 relative z-10">

<div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-24 group">
<div className="w-full md:w-1/2 md:text-right">
<div className="inline-block border border-black bg-zinc-50 px-4 py-1 text-xs font-bold uppercase tracking-widest mb-4">Days 0-14</div>
<h3 className="text-3xl font-medium mb-3">The Fog</h3>
<p className="text-zinc-600 leading-relaxed">Adrenaline crash. Physical healing. We handle 100% of household chores so you can bond without the burden.</p>
</div>
<div className="w-4 h-4 bg-black border-2 border-white outline outline-1 outline-black rounded-full hidden md:block group-hover:bg-[#FF3300] group-hover:scale-125 transition-all"></div>
<div className="w-full md:w-1/2 md:pl-8"></div>
</div>

<div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:gap-24 group">
<div className="w-full md:w-1/2 md:text-left">
<div className="inline-block border border-black bg-zinc-50 px-4 py-1 text-xs font-bold uppercase tracking-widest mb-4">Days 15-45</div>
<h3 className="text-3xl font-medium mb-3">The Learning Curve</h3>
<p className="text-zinc-600 leading-relaxed">Lactation struggles and sleep regression. We implement the shift system to ensure parents get at least 4 hours of consecutive sleep.</p>
</div>
<div className="w-4 h-4 bg-black border-2 border-white outline outline-1 outline-black rounded-full hidden md:block group-hover:bg-[#FF3300] group-hover:scale-125 transition-all"></div>
<div className="w-full md:w-1/2 md:pr-8"></div>
</div>

<div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-24 group">
<div className="w-full md:w-1/2 md:text-right">
<div className="inline-block border border-black bg-zinc-50 px-4 py-1 text-xs font-bold uppercase tracking-widest mb-4">Days 45-90</div>
<h3 className="text-3xl font-medium mb-3">The New Normal</h3>
<p className="text-zinc-600 leading-relaxed">Transitioning back to autonomy. We slowly fade out support, empowering you to manage the schedule independently.</p>
</div>
<div className="w-4 h-4 bg-black border-2 border-white outline outline-1 outline-black rounded-full hidden md:block group-hover:bg-[#FF3300] group-hover:scale-125 transition-all"></div>
<div className="w-full md:w-1/2 md:pl-8"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-b border-black">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-4xl md:text-5xl font-medium text-center mb-16 tracking-tight">SURVIVAL KITS</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

<div className="bg-white border border-black p-8 flex flex-col h-full shadow-[4px_4px_0px_#000000] hover:translate-y-[-2px] transition-transform">
<h3 className="text-xl font-bold uppercase tracking-wide mb-2">The Weekend</h3>
<div className="text-4xl font-semibold mb-6">$500 <span className="text-base font-normal text-zinc-500">/ one-off</span></div>
<p className="text-sm text-zinc-600 mb-8 border-b border-zinc-200 pb-8 flex-grow">
                        For when you are about to snap. 2 Nights of Sleep Guard so you can reset.
                    </p>
<ul className="space-y-4 mb-8 text-sm font-medium">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-[#FF3300]" data-lucide="check"></i> 2 Nights Coverage</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-[#FF3300]" data-lucide="check"></i> Morning Debrief</li>
<li className="flex items-center gap-2 text-zinc-400 line-through"><i className="w-4 h-4" data-lucide="x"></i> Meal Prep</li>
</ul>
<button className="w-full py-3 border border-black font-bold text-[13px] uppercase hover:bg-black hover:text-white transition-colors">Select</button>
</div>

<div className="bg-white border border-black p-8 flex flex-col h-full shadow-[8px_8px_0px_#000000] transform md:-translate-y-4 relative overflow-hidden">
<div className="absolute inset-0 bg-hashed opacity-[0.03] pointer-events-none"></div>
<div className="absolute top-0 inset-x-0 bg-black text-white text-center py-1 text-[10px] font-bold uppercase tracking-widest">Recommended</div>
<h3 className="text-xl font-bold uppercase tracking-wide mb-2 mt-4">Trimester</h3>
<div className="text-4xl font-semibold mb-6">$2,500 <span className="text-base font-normal text-zinc-500">/ mo</span></div>
<p className="text-sm text-zinc-600 mb-8 border-b border-zinc-200 pb-8 flex-grow">
                        Daily support. We manage the logistics, you manage the baby.
                    </p>
<ul className="space-y-4 mb-8 text-sm font-medium relative z-10">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-[#FF3300]" data-lucide="check"></i> Night Doula (3x/week)</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-[#FF3300]" data-lucide="check"></i> Daily Laundry</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-[#FF3300]" data-lucide="check"></i> Nutrient Delivery</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-[#FF3300]" data-lucide="check"></i> Lactation Consults</li>
</ul>
<button className="w-full py-3 bg-[#FF3300] text-white border border-black font-bold text-[13px] uppercase hover:bg-black transition-colors relative z-10">Select</button>
</div>

<div className="bg-white border border-black p-8 flex flex-col h-full shadow-[4px_4px_0px_#000000] hover:translate-y-[-2px] transition-transform">
<h3 className="text-xl font-bold uppercase tracking-wide mb-2">The Village</h3>
<div className="text-4xl font-semibold mb-6">$5,000 <span className="text-base font-normal text-zinc-500">/ mo</span></div>
<p className="text-sm text-zinc-600 mb-8 border-b border-zinc-200 pb-8 flex-grow">
                        24/7 Coverage. We basically move in. Total immersion support.
                    </p>
<ul className="space-y-4 mb-8 text-sm font-medium">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-[#FF3300]" data-lucide="check"></i> 24/7 Doula Shift</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-[#FF3300]" data-lucide="check"></i> Full Meal Service</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-[#FF3300]" data-lucide="check"></i> Household Management</li>
</ul>
<button className="w-full py-3 border border-black font-bold text-[13px] uppercase hover:bg-black hover:text-white transition-colors">Select</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-black">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-4xl font-medium mb-12 tracking-tight">NO STUPID QUESTIONS</h2>
<div className="border-t border-black">
<details className="group border-b border-black">
<summary className="flex justify-between items-center py-6 cursor-pointer hover:bg-zinc-50 transition-colors px-2">
<span className="text-lg font-medium">Will you judge my messy house?</span>
<i className="icon-plus w-5 h-5 transition-transform duration-300" data-lucide="plus"></i>
</summary>
<div className="pb-6 text-zinc-600 px-2 leading-relaxed">
                        We have seen things you wouldn't believe. We are unshockable. We are not there to inspect; we are there to fix.
                    </div>
</details>
<details className="group border-b border-black">
<summary className="flex justify-between items-center py-6 cursor-pointer hover:bg-zinc-50 transition-colors px-2">
<span className="text-lg font-medium">Do you do medical checks?</span>
<i className="icon-plus w-5 h-5 transition-transform duration-300" data-lucide="plus"></i>
</summary>
<div className="pb-6 text-zinc-600 px-2 leading-relaxed">
                        No. We are non-medical support. We support the parent, not the patient. If you need a doctor, we will call one.
                    </div>
</details>
<details className="group border-b border-black">
<summary className="flex justify-between items-center py-6 cursor-pointer hover:bg-zinc-50 transition-colors px-2">
<span className="text-lg font-medium">Can I sleep while you are here?</span>
<i className="icon-plus w-5 h-5 transition-transform duration-300" data-lucide="plus"></i>
</summary>
<div className="pb-6 text-zinc-600 px-2 leading-relaxed">
                        That is literally the point. We take the baby, you take the bed. Earplugs recommended.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-white pt-24 pb-0 relative overflow-hidden">
<div className="container mx-auto px-6 text-center relative z-20">
<h3 className="text-2xl font-medium mb-8">You don't have to do this alone.</h3>
<div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-24">
<a className="text-sm font-bold uppercase tracking-widest border-b border-transparent hover:border-black transition-all" href="#">Instagram (Real)</a>
<a className="text-sm font-bold uppercase tracking-widest border-b border-transparent hover:border-black transition-all" href="#">Email Us</a>
<a className="text-sm font-bold uppercase tracking-widest border-b border-transparent hover:border-black transition-all" href="#">Manifesto</a>
</div>
<div className="text-xs text-zinc-400 uppercase tracking-widest mb-12">
                © 2026 4TH Trimester Support. No Instagram Filters Allowed.
            </div>
</div>

<div className="w-full flex justify-center overflow-hidden border-t border-black">
<h1 className="text-[20vw] leading-[0.8] font-bold tracking-[-0.05em] text-zinc-950 translate-y-[10%] select-none hover:text-zinc-800 transition-colors">
                4TH.
            </h1>
</div>
</footer>


    </>
  );
}
