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



        function navigateTo(pageId) {
            // Hide all pages
            const pages = document.querySelectorAll('.page-section');
            pages.forEach(page => {
                page.style.display = 'none';
                page.classList.remove('animate-fade-in'); // Reset animation
            });

            // Show selected page
            const selectedPage = document.getElementById(pageId);
            if (selectedPage) {
                selectedPage.style.display = 'flex';
                // Trigger reflow to restart animation
                void selectedPage.offsetWidth; 
                selectedPage.classList.add('animate-fade-in');
                window.scrollTo(0, 0);
            }
        }
    
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
      

<main className="w-full max-w-lg mx-auto min-h-screen flex flex-col relative border-x border-stone-200/50 shadow-2xl shadow-stone-200/50 bg-white/40">

<div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-teal-50/50 to-transparent pointer-events-none z-0"></div>

<section className="page-section flex-col items-center justify-center min-h-screen p-8 text-center animate-fade-in relative z-10" id="page-home">
<div className="mb-8 text-amber-600/80 animate-fade-in">
<iconify-icon icon="solar:sun-fog-linear" strokeWidth="1.5" width="48"></iconify-icon>
</div>
<span className="uppercase tracking-widest text-xs font-medium text-stone-500 mb-6 animate-fade-in delay-100">
                Shree Ganeshay Namah
            </span>
<div className="relative mb-8 animate-fade-in delay-200">
<h1 className="text-6xl md:text-7xl font-medium text-teal-900 leading-none serif-font tracking-tight">
                    Mona<br/>
<span className="text-3xl text-amber-600/60 font-light italic">&amp;</span><br/>
                    Narendra
                </h1>
</div>
<p className="text-sm md:text-base text-stone-600 font-light leading-relaxed max-w-xs mx-auto mb-12 animate-fade-in delay-300">
                With the blessings of our family,<br/> we lovingly invite you to celebrate<br/> the beginning of our forever.
            </p>
<button className="btn-primary bg-teal-800 text-stone-50 px-8 py-3 rounded-full text-sm font-medium tracking-wide flex items-center gap-2 group animate-fade-in delay-300" onclick="navigateTo('page-ceremonies')">
                View Wedding Details
                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</section>

<section className="page-section flex-col min-h-screen p-6 pt-12 animate-fade-in" id="page-ceremonies">
<header className="text-center mb-10">
<span className="text-xs uppercase tracking-widest text-teal-700 mb-2 block">Celebrations</span>
<h2 className="text-4xl text-teal-950 serif-font tracking-tight font-medium">Ceremonies</h2>
</header>
<div className="space-y-4 flex-grow">

<div className="glass-card p-6 rounded-2xl flex items-start gap-4 hover:border-teal-200/50 transition-colors">
<div className="p-3 rounded-full bg-teal-50 text-teal-700">
<iconify-icon icon="solar:calendar-mark-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl serif-font text-teal-900 font-medium">Tilak Ceremony</h3>
<p className="text-sm text-stone-500 mt-1 font-light">Monday, 16 February 2026</p>
</div>
</div>

<div className="glass-card p-6 rounded-2xl flex items-start gap-4 hover:border-amber-200/50 transition-colors">
<div className="p-3 rounded-full bg-amber-50 text-amber-600">
<iconify-icon icon="solar:stars-minimalistic-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl serif-font text-teal-900 font-medium">Mandap &amp; Haldi</h3>
<p className="text-sm text-stone-500 mt-1 font-light">Tuesday, 24 February 2026</p>
</div>
</div>

<div className="glass-card p-6 rounded-2xl flex items-start gap-4 hover:border-teal-200/50 transition-colors">
<div className="p-3 rounded-full bg-teal-50 text-teal-700">
<iconify-icon icon="solar:heart-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl serif-font text-teal-900 font-medium">Barat Aagman</h3>
<p className="text-sm text-stone-500 mt-1 font-light">Wednesday, 25 February 2026</p>
</div>
</div>

<div className="pt-6">
<button className="w-full glass-card border border-teal-200 bg-gradient-to-br from-teal-50/80 to-white hover:to-teal-50 transition-all duration-300 p-5 rounded-2xl group text-center shadow-lg shadow-teal-900/5" onclick="navigateTo('page-venue')">
<div className="flex items-center justify-center gap-2 mb-1">
<span className="text-teal-900 font-semibold text-lg tracking-tight">View Venue Details</span>
<iconify-icon className="text-teal-600 group-hover:scale-110 transition-transform" icon="solar:map-point-wave-linear"></iconify-icon>
</div>
<span className="text-xs uppercase tracking-widest text-stone-400">Jaysinghnagar, Bansa</span>
</button>
</div>
</div>
<div className="mt-8 flex justify-center items-center pt-6 pb-8">
<button className="text-stone-400 hover:text-stone-600 text-sm font-medium flex items-center gap-1 transition-colors" onclick="navigateTo('page-home')">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Back to Home
                </button>
</div>
</section>

<section className="page-section flex-col min-h-screen p-6 pt-12 animate-fade-in" id="page-venue">
<header className="text-center mb-8">
<span className="text-xs uppercase tracking-widest text-teal-700 mb-2 block">Location</span>
<h2 className="text-4xl text-teal-950 serif-font tracking-tight font-medium">The Venue</h2>
</header>
<div className="flex-grow flex flex-col items-center justify-center">
<div className="w-full glass-card p-8 rounded-3xl text-center relative overflow-hidden group">

<div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-100/50 rounded-full blur-2xl group-hover:bg-amber-100/80 transition-all duration-700"></div>
<div className="mb-6 mx-auto w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center text-teal-800 relative z-10">
<iconify-icon icon="solar:map-point-linear" width="32"></iconify-icon>
</div>

<h3 className="text-2xl serif-font text-teal-900 font-semibold mb-2 leading-tight">
                        Jaysinghnagar, Bansa
                    </h3>
<p className="text-stone-600 font-normal text-base mb-8">
                        District Sahdol (Madhya Pradesh)
                    </p>
<button className="w-full py-3 mb-8 bg-teal-800 text-white rounded-xl text-sm font-medium hover:bg-teal-900 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-teal-900/10">
<iconify-icon icon="solar:map-arrow-right-linear"></iconify-icon>
                        Open in Google Maps
                    </button>

<div className="pt-6 border-t border-stone-200/70">
<p className="text-xs text-stone-400 uppercase tracking-widest mb-3">For more information</p>
<a className="inline-flex items-center gap-2 text-teal-900 text-lg font-medium hover:text-amber-600 transition-colors bg-stone-50 px-4 py-2 rounded-lg border border-stone-100" href="tel:8103170114">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
                            contact: 8103170114
                        </a>
</div>
</div>
</div>
<div className="mt-8 flex justify-between items-center pt-6 border-t border-stone-200/60">
<button className="text-stone-500 hover:text-teal-800 text-sm font-medium flex items-center gap-1 transition-colors" onclick="navigateTo('page-ceremonies')">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Back
                </button>
<button className="bg-stone-100 hover:bg-stone-200 text-teal-900 px-6 py-2 rounded-full text-sm font-medium transition-colors" onclick="navigateTo('page-couple')">
                    Meet Couple
                </button>
</div>
</section>

<section className="page-section flex-col min-h-screen p-6 pt-12 animate-fade-in" id="page-couple">
<header className="text-center mb-12">
<div className="inline-flex items-center justify-center p-2 rounded-full bg-amber-50 text-amber-600 mb-4">
<iconify-icon icon="solar:heart-shine-linear" width="20"></iconify-icon>
</div>
<h2 className="text-4xl text-teal-950 serif-font tracking-tight font-medium">The Happy Couple</h2>
</header>
<div className="flex-grow space-y-6">

<div className="glass-card p-8 rounded-t-[3rem] rounded-b-2xl text-center border-b-4 border-b-teal-100/50">
<div className="text-xs uppercase tracking-widest text-stone-400 mb-2">The Bride</div>
<h3 className="text-3xl serif-font text-teal-900 font-medium mb-3">Mona</h3>
<p className="text-sm text-stone-500 font-light leading-relaxed">
                        Full of grace and kindness, looking forward to starting this beautiful journey.
                    </p>
</div>

<div className="glass-card p-8 rounded-t-2xl rounded-b-[3rem] text-center border-b-4 border-b-amber-100/50">
<div className="text-xs uppercase tracking-widest text-stone-400 mb-2">The Groom</div>
<h3 className="text-3xl serif-font text-teal-900 font-medium mb-3">Narendra</h3>
<p className="text-sm text-stone-500 font-light leading-relaxed">
                        With love in his heart and dreams for the future, ready for a lifetime of togetherness.
                    </p>
</div>
</div>
<div className="mt-8 flex justify-between items-center pt-6 pb-8">
<button className="text-stone-500 hover:text-teal-800 text-sm font-medium flex items-center gap-1 transition-colors" onclick="navigateTo('page-venue')">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Back
                </button>
<button className="text-teal-800 hover:text-teal-950 text-sm font-medium flex items-center gap-1 transition-colors" onclick="navigateTo('page-home')">
                    Back to Home <iconify-icon icon="solar:home-smile-linear"></iconify-icon>
</button>
</div>
</section>
</main>


    </>
  );
}
