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
      

<div className="py-12"></div>

<header className="max-w-4xl mx-auto px-6 pt-12 pb-32 text-center">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-8 leading-tight">
            How Fast Are You <br className="hidden md:block"/> Actually Aging?
        </h1>
<div className="space-y-2 mb-12">
<p className="text-lg md:text-xl text-zinc-400 font-normal">Most people assume they're aging normally.</p>
<p className="text-lg md:text-xl text-zinc-100 font-medium">Most are wrong.</p>
<p className="text-base md:text-lg text-zinc-400 mt-6 max-w-2xl mx-auto">
                Take the 2-minute biological age quiz and find out exactly where you stand, and what to do about it.
            </p>
</div>
<div className="flex justify-center">
<button className="bg-secondary-accent hover:opacity-90 transition-all text-white px-10 py-5 rounded-full text-lg font-medium shadow-xl shadow-teal-900/20">
                Take the Free Quiz
            </button>
</div>
</header>

<section className="bg-primary-accent py-16">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
<div className="space-y-1">
<p className="text-2xl md:text-3xl font-semibold tracking-tight">28+</p>
<p className="text-xs uppercase tracking-widest text-zinc-300">Years of Leadership</p>
</div>
<div className="space-y-1">
<p className="text-2xl md:text-3xl font-semibold tracking-tight">50,000+</p>
<p className="text-xs uppercase tracking-widest text-zinc-300">Members Served</p>
</div>
<div className="space-y-1">
<p className="text-2xl md:text-3xl font-semibold tracking-tight">270+</p>
<p className="text-xs uppercase tracking-widest text-zinc-300">Biomarkers Measured</p>
</div>
<div className="space-y-1">
<p className="text-2xl md:text-3xl font-semibold tracking-tight">27</p>
<p className="text-xs uppercase tracking-widest text-zinc-300">Locations Globally</p>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-6xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-center mb-16">Real People. Real Results.</h2>
<div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
<div className="space-y-6">
<div className="video-container shadow-2xl">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" frameborder="0" src="https://www.youtube.com/embed/EnVBVhhFoLc"></iframe>
</div>
<div className="text-center">
<p className="text-sm font-medium mb-1">Redefining Longevity</p>
<p className="text-xs text-zinc-400 italic">"The clarity I gained from Cenegenics was a turning point."</p>
</div>
</div>
<div className="space-y-6">
<div className="video-container shadow-2xl">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" frameborder="0" src="https://www.youtube.com/embed/kWclRQmcsS8"></iframe>
</div>
<div className="text-center">
<p className="text-sm font-medium mb-1">Optimizing Performance</p>
<p className="text-xs text-zinc-400 italic">"I feel like I've gained a decade of vitality back."</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/30">
<div className="max-w-5xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-center mb-20">Here's what happens after the quiz.</h2>
<div className="grid md:grid-cols-3 gap-12 relative">
<div className="relative z-10 text-center md:text-left">
<div className="w-10 h-10 rounded-full bg-secondary-accent flex items-center justify-center mb-6 mx-auto md:mx-0">
<span className="text-sm font-semibold text-white">1</span>
</div>
<p className="text-lg font-medium leading-relaxed">You get your biological age score.</p>
</div>
<div className="relative z-10 text-center md:text-left">
<div className="w-10 h-10 rounded-full bg-secondary-accent flex items-center justify-center mb-6 mx-auto md:mx-0">
<span className="text-sm font-semibold text-white">2</span>
</div>
<p className="text-lg font-medium leading-relaxed">A Cenegenics physician reviews your results with you.</p>
</div>
<div className="relative z-10 text-center md:text-left">
<div className="w-10 h-10 rounded-full bg-secondary-accent flex items-center justify-center mb-6 mx-auto md:mx-0">
<span className="text-sm font-semibold text-white">3</span>
</div>
<p className="text-lg font-medium leading-relaxed">You get a personalized plan built around your body, your goals, and your data.</p>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-6xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-center mb-16">What our members say.</h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-primary-accent p-8 rounded-3xl flex flex-col justify-between border border-white/5">
<p className="text-base italic leading-relaxed text-zinc-100 mb-8">
                    "I've changed and tracked my body composition, moved some key markers from bad to good, and love how my plan has been personalized and evolved over time as my priorities have changed."
                </p>
<p className="text-sm font-medium tracking-wide">— Tom G.</p>
</div>
<div className="bg-primary-accent p-8 rounded-3xl flex flex-col justify-between border border-white/5">
<p className="text-base italic leading-relaxed text-zinc-100 mb-8">
                    "Such a thorough assessment of my current health. They invite you to think deeply about your body's aging process and then give you tools, directions and motivation to improve."
                </p>
<p className="text-sm font-medium tracking-wide">— Cindy C.</p>
</div>
<div className="bg-primary-accent p-8 rounded-3xl flex flex-col justify-between border border-white/5">
<p className="text-base italic leading-relaxed text-zinc-100 mb-8">
                    "Great customer service. They seem to genuinely care about my well being. I've lost 25 pounds since starting my personalized protocol."
                </p>
<p className="text-sm font-medium tracking-wide">— Toni S.</p>
</div>
</div>
</section>

<section className="py-32 text-center border-t border-white/5">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-4xl font-semibold tracking-tight mb-4">How Fast Are You Actually Aging?</h2>
<p className="text-lg text-zinc-400 mb-12">It takes 2 minutes. The results might surprise you.</p>
<button className="bg-secondary-accent hover:opacity-90 transition-all text-white px-10 py-5 rounded-full text-lg font-medium shadow-xl shadow-teal-900/20">
                Take the Free Quiz
            </button>
</div>
</section>

<footer className="py-12 border-t border-white/5">
<div className="max-w-6xl mx-auto px-6 text-center">
<div className="mb-6 flex justify-center space-x-1 items-center">
<span className="text-zinc-500 tracking-tighter font-semibold">CENEGENICS</span>
</div>
<p className="text-xs text-zinc-500 mb-4">© 2026 Cenegenics. A division of BestLife Holdings.</p>
<div className="flex justify-center space-x-6 text-xs text-zinc-400">
<a className="hover:text-white transition-colors underline underline-offset-4 decoration-zinc-700" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors underline underline-offset-4 decoration-zinc-700" href="#">Terms and Conditions</a>
</div>
</div>
</footer>

    </>
  );
}
