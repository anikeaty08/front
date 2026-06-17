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



        lucide.createIcons({
            attrs: {
                class: "lucide",
                "stroke-width": 1.5
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
      

<nav className="sticky top-0 z-50 bg-[#fdfbf7]/95 backdrop-blur-md border-b border-stone-200 py-4">
<div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="bg-amber-900 text-orange-50 p-2 rounded-lg">
<i className="w-6 h-6" data-lucide="armchair"></i>
</div>
<span className="font-serif text-2xl text-amber-950 tracking-tight group-hover:text-amber-800 transition-colors">Armchair Memories</span>
</a>
<div className="hidden md:flex items-center gap-8 text-lg font-medium text-stone-600">
<a className="hover:text-amber-900 transition-colors" href="#services">Services</a>
<a className="hover:text-amber-900 transition-colors" href="#portfolio">Portfolio</a>
<a className="text-amber-900 hover:text-amber-700" href="#contact">Contact</a>
</div>
<a className="md:hidden text-amber-900" href="#contact">
<i className="w-6 h-6" data-lucide="phone"></i>
</a>
</div>
</nav>

<header className="relative w-full min-h-[650px] lg:h-[90vh] flex items-end justify-start overflow-hidden bg-stone-900">

<div className="absolute inset-0 flex pointer-events-none select-none">

<div className="relative w-1/2 h-full overflow-hidden border-r-[3px] border-white/80 shadow-2xl z-10">

<img alt="Vintage original hands holding photo" className="absolute top-0 left-0 w-[200%] h-full max-w-none object-cover object-center grayscale sepia-[.3] contrast-125 brightness-90 filter" src="https://images.unsplash.com/photo-1531844251246-9a1bfaae09fc?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-40 mix-blend-overlay"></div>

<div className="absolute top-8 left-8 bg-stone-900/70 backdrop-blur-md text-white/90 px-4 py-2 rounded-lg text-sm font-medium tracking-wide shadow-lg border border-white/10">
                    FADED MEMORY
                </div>
</div>

<div className="relative w-1/2 h-full overflow-hidden z-0">

<img alt="Restored version hands holding photo" className="absolute top-0 left-[-100%] w-[200%] h-full max-w-none object-cover object-center saturate-[1.1] brightness-105" src="https://images.unsplash.com/photo-1531844251246-9a1bfaae09fc?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-8 right-8 bg-amber-900/80 backdrop-blur-md text-white px-4 py-2 rounded-lg text-sm font-medium tracking-wide shadow-lg border border-amber-500/20">
                    RESTORED CLARITY
                </div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white text-amber-900 p-3 rounded-full shadow-[0_0_0_4px_rgba(255,255,255,0.3)]">
<i className="w-6 h-6" data-lucide="move-horizontal"></i>
</div>
</div>

<div className="relative z-30 w-full md:max-w-xl md:ml-12 md:mb-12">
<div className="bg-[#fdfbf7]/95 backdrop-blur-xl p-8 md:p-10 rounded-t-[2rem] md:rounded-[2rem] shadow-2xl border border-stone-200/50 ring-1 ring-stone-900/5 text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/80 text-amber-900 text-sm font-medium mb-5 border border-orange-200/50">
<i className="w-3.5 h-3.5" data-lucide="sparkles"></i>
<span>Serving seniors in the metro area</span>
</div>
<h1 className="font-serif text-4xl md:text-5xl text-amber-950 leading-[1.1] tracking-tight mb-5">
                    New life for your old photos, <span className="italic text-amber-800">right at home.</span>
</h1>
<p className="text-lg text-stone-600 mb-8 leading-relaxed">
                    We bring the studio to your living room. Expert restoration, colorization, and digital archiving.
                </p>
<div className="flex flex-col sm:flex-row items-start gap-4">
<a className="w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-amber-900 hover:bg-amber-800 text-orange-50 text-lg font-medium px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300" href="#contact">
                        Book a Home Visit
                        <i className="w-5 h-5" data-lucide="calendar-check"></i>
</a>
<a className="w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-white hover:bg-stone-50 text-stone-700 border border-stone-200 text-lg font-medium px-6 py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300" href="#portfolio">
                        See Examples
                    </a>
</div>
</div>
</div>
</header>

<section className="bg-stone-100 border-y border-stone-200 py-8 px-6">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center md:text-left">
<div className="p-3 bg-white rounded-full shadow-sm text-green-700">
<i className="w-8 h-8" data-lucide="shield-check"></i>
</div>
<div>
<h3 className="text-xl font-serif text-stone-800 tracking-tight">Safe &amp; Secure Guarantee</h3>
<p className="text-lg text-stone-600">Your original photos never leave your sight. We scan them right at your kitchen table.</p>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="services">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="font-serif text-4xl md:text-5xl text-amber-950 mb-4 tracking-tight">The Magic We Bring</h2>
<p className="text-xl text-stone-600 max-w-2xl mx-auto">Professional editing with a personal touch.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-[#fdfbf7] p-8 rounded-2xl border border-stone-100 hover:border-amber-200 transition-colors group">
<div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-amber-800 mb-6 border border-stone-100 group-hover:scale-110 transition-transform">
<i className="w-8 h-8" data-lucide="wand-2"></i>
</div>
<h3 className="font-serif text-2xl text-amber-950 mb-3">Restoration &amp; Color</h3>
<p className="text-lg text-stone-600 leading-relaxed">
                        We gently digitally repair tears, scratches, and water damage. Watch your black and white memories bloom into full color.
                    </p>
</div>

<div className="bg-[#fdfbf7] p-8 rounded-2xl border border-stone-100 hover:border-amber-200 transition-colors group">
<div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-amber-800 mb-6 border border-stone-100 group-hover:scale-110 transition-transform">
<i className="w-8 h-8" data-lucide="users"></i>
</div>
<h3 className="font-serif text-2xl text-amber-950 mb-3">The Family Reunion</h3>
<p className="text-lg text-stone-600 leading-relaxed">
                        Have photos of loved ones from different times? We can seamlessly merge them into one single, heartwarming family portrait.
                    </p>
</div>

<div className="bg-[#fdfbf7] p-8 rounded-2xl border border-stone-100 hover:border-amber-200 transition-colors group">
<div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-amber-800 mb-6 border border-stone-100 group-hover:scale-110 transition-transform">
<i className="w-8 h-8" data-lucide="brush"></i>
</div>
<h3 className="font-serif text-2xl text-amber-950 mb-3">Photo Art</h3>
<p className="text-lg text-stone-600 leading-relaxed">
                        Transform a simple photograph into a digital oil painting or watercolor masterpiece, suitable for framing and gifting.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#fdfbf7]" id="portfolio">
<div className="max-w-5xl mx-auto space-y-20">
<div className="text-center mb-12">
<h2 className="font-serif text-4xl md:text-5xl text-amber-950 mb-4 tracking-tight">Examples of Our Work</h2>
<p className="text-xl text-stone-600">Drag the slider handle mentally to see the transformation.</p>
</div>

<div className="space-y-4">
<div className="flex items-center gap-3 mb-2">
<div className="h-px flex-1 bg-stone-300"></div>
<h3 className="font-serif text-2xl text-amber-900">Scrapbook Restoration</h3>
<div className="h-px flex-1 bg-stone-300"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="relative group rounded-xl overflow-hidden shadow-lg">
<div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-md text-sm font-medium">Original Condition</div>

<img alt="Old photo albums on wooden table" className="w-full h-64 object-cover opacity-90 grayscale" src="https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative group rounded-xl overflow-hidden shadow-lg ring-2 ring-amber-900/10">
<div className="absolute top-4 left-4 bg-amber-900/80 backdrop-blur-sm text-white px-3 py-1 rounded-md text-sm font-medium">Preserved</div>

<img alt="Preserved albums" className="w-full h-64 object-cover brightness-110 contrast-105" src="https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<p className="text-lg text-stone-600 italic">"We stabilized the fading colors of Mr. Thompson's 1960s travel albums."</p>
</div>

<div className="space-y-4">
<div className="flex items-center gap-3 mb-2">
<div className="h-px flex-1 bg-stone-300"></div>
<h3 className="font-serif text-2xl text-amber-900">Warmth &amp; Color</h3>
<div className="h-px flex-1 bg-stone-300"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="relative group rounded-xl overflow-hidden shadow-lg">
<div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-md text-sm font-medium">Black &amp; White</div>

<img alt="Grandmother reading in B&amp;W" className="w-full h-64 object-cover grayscale" src="https://images.unsplash.com/photo-1516733968668-dbdce39c4651?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative group rounded-xl overflow-hidden shadow-lg ring-2 ring-amber-900/10">
<div className="absolute top-4 left-4 bg-amber-900/80 backdrop-blur-sm text-white px-3 py-1 rounded-md text-sm font-medium">Colorized</div>

<img alt="Grandmother reading in golden light" className="w-full h-64 object-cover saturate-125" src="https://images.unsplash.com/photo-1516733968668-dbdce39c4651?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<p className="text-lg text-stone-600 italic">"Bringing the golden afternoon light back into a cherished memory."</p>
</div>

<div className="space-y-4">
<div className="flex items-center gap-3 mb-2">
<div className="h-px flex-1 bg-stone-300"></div>
<h3 className="font-serif text-2xl text-amber-900">Cherished Moments</h3>
<div className="h-px flex-1 bg-stone-300"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="relative group rounded-xl overflow-hidden shadow-lg">
<div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-md text-sm font-medium">Snapshot</div>

<img alt="Looking at photo" className="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1529209074120-1c2e304e513e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative group rounded-xl overflow-hidden shadow-lg ring-2 ring-amber-900/10">
<div className="absolute top-4 left-4 bg-purple-900/80 backdrop-blur-sm text-white px-3 py-1 rounded-md text-sm font-medium">Enhanced</div>
<img alt="Enhanced Art" className="w-full h-64 object-cover brightness-110 contrast-125" src="https://images.unsplash.com/photo-1529209074120-1c2e304e513e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-amber-900/10 mix-blend-overlay"></div>
</div>
</div>
<p className="text-lg text-stone-600 italic">"Enhancing the natural warmth of a quiet Sunday afternoon."</p>
</div>
</div>
</section>

<section className="py-24 px-6 bg-stone-100" id="contact">
<div className="max-w-2xl mx-auto">
<div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-stone-200">
<div className="text-center mb-10">
<h2 className="font-serif text-4xl text-amber-950 mb-4 tracking-tight">Book a Home Visit</h2>
<p className="text-xl text-stone-600">Fill out the form below, or give us a call. We love to chat.</p>
</div>
<div className="flex flex-col items-center justify-center mb-10 bg-orange-50 rounded-2xl py-8 border border-orange-100">
<span className="text-stone-500 uppercase tracking-widest text-sm font-semibold mb-2">Call Anytime</span>
<a className="font-serif text-4xl md:text-5xl text-amber-900 hover:text-amber-700 transition-colors font-semibold" href="tel:+15550199">
                        (555) 123-4567
                    </a>
</div>
<form className="space-y-6">
<div>
<label className="block text-lg font-medium text-stone-700 mb-2" htmlFor="name">Your Name</label>
<input className="w-full p-4 text-lg rounded-xl border border-stone-300 bg-stone-50 text-stone-900 placeholder:text-stone-400 transition-all" id="name" placeholder="e.g. Martha Jenkins" type="text"/>
</div>
<div>
<label className="block text-lg font-medium text-stone-700 mb-2" htmlFor="phone">Phone Number</label>
<input className="w-full p-4 text-lg rounded-xl border border-stone-300 bg-stone-50 text-stone-900 placeholder:text-stone-400 transition-all" id="phone" placeholder="e.g. (555) 123-4567" type="tel"/>
</div>
<div>
<label className="block text-lg font-medium text-stone-700 mb-2" htmlFor="city">City</label>
<input className="w-full p-4 text-lg rounded-xl border border-stone-300 bg-stone-50 text-stone-900 placeholder:text-stone-400 transition-all" id="city" placeholder="e.g. Springfield" type="text"/>
</div>
<button className="w-full bg-amber-900 hover:bg-amber-800 text-white text-xl font-medium py-5 rounded-xl shadow-lg hover:shadow-xl transform active:scale-[0.99] transition-all duration-200 mt-4" type="button">
                        Request a Call Back
                    </button>
</form>
<p className="mt-6 text-center text-stone-500 text-base">
<i className="inline w-4 h-4 mr-1 align-text-bottom" data-lucide="lock"></i>
                    Your information is private and secure.
                </p>
</div>
</div>
</section>

<footer className="bg-[#292524] text-stone-400 py-12 px-6">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<i className="w-6 h-6 text-amber-700" data-lucide="armchair"></i>
<span className="font-serif text-2xl text-stone-200">Armchair Memories</span>
</div>
<div className="text-lg">
                © 2024 Armchair Memories. Built with care.
            </div>
</div>
</footer>


    </>
  );
}
