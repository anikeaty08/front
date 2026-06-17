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
      

<header className="w-full max-w-2xl px-6 pt-12 flex justify-center opacity-0 animate-fade">
<span className="font-serif text-2xl tracking-tighter text-stone-900">M.</span>
</header>
<main className="w-full max-w-2xl px-6 pb-32">

<section className="min-h-[70vh] flex flex-col justify-center text-center space-y-6 opacity-0 animate-fade delay-100">
<div className="flex justify-center mb-4 text-stone-400">
<iconify-icon icon="solar:stars-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[0.9] tracking-tight text-stone-900">
                The world gets quieter<br/>
<span className="italic text-stone-500">when you are here.</span>
</h1>
<p className="font-sans text-sm md:text-base text-stone-500 max-w-md mx-auto leading-relaxed pt-4">
                It’s not just your presence. It’s the way the static fades, leaving room for something real, something steady.
            </p>
</section>

<div className="w-full flex justify-center py-12 opacity-50">
<div className="h-16 w-px bg-stone-300"></div>
</div>

<section className="py-16 md:py-24 space-y-12">
<div className="space-y-2">
<h2 className="font-sans text-xs uppercase tracking-widest text-stone-400 font-medium">Why it works</h2>
<h3 className="font-serif text-3xl md:text-4xl tracking-tight text-stone-800">The gravity of you.</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 font-sans text-stone-600 leading-loose text-sm md:text-base">
<div className="space-y-6">
<p>
                        I notice how you listen. Not just waiting for your turn to speak, but actually absorbing the words, holding them carefully before offering them back. In a noisy world, your attention feels like a rare gift.
                    </p>
<p>
                        You make the ordinary feel significant. Sunday mornings aren't just hours to kill; they become rituals. Coffee feels warmer. The silence feels companionable, not empty. You don't occupy space; you create a kind of home wherever you stand.
                    </p>
</div>
<div className="space-y-6">
<p>
                        There is a gentleness to your strength. You handle difficult things with a grace that I admire more than I say. You don't demand to be the center of the room, yet somehow, everything seems to orbit around your calm.
                    </p>
</div>
</div>
</section>

<section className="py-16 md:py-24">
<div className="mb-12 flex items-end justify-between">
<h2 className="font-serif text-3xl md:text-4xl tracking-tight text-stone-800">Moments I keep.</h2>
<iconify-icon className="text-stone-400" icon="solar:camera-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="bg-white/60 border border-stone-200 p-8 rounded-sm hover:border-stone-300 transition-colors duration-500">
<div className="text-stone-400 mb-4">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<p className="font-serif text-xl tracking-tight text-stone-800 mb-2">The 2 AM conversation</p>
<p className="font-sans text-sm text-stone-500 leading-relaxed">
                        When we were too tired to make sense, but you said exactly what I needed to hear. No pretense, just truth.
                    </p>
</div>

<div className="bg-white/60 border border-stone-200 p-8 rounded-sm hover:border-stone-300 transition-colors duration-500 md:translate-y-12">
<div className="text-stone-400 mb-4">
<iconify-icon icon="solar:cup-hot-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<p className="font-serif text-xl tracking-tight text-stone-800 mb-2">Morning ritual</p>
<p className="font-sans text-sm text-stone-500 leading-relaxed">
                        The specific way you hold your mug with both hands. It’s a small thing, but it always looks like you're protecting something precious.
                    </p>
</div>

<div className="bg-white/60 border border-stone-200 p-8 rounded-sm hover:border-stone-300 transition-colors duration-500">
<div className="text-stone-400 mb-4">
<iconify-icon icon="solar:music-note-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<p className="font-serif text-xl tracking-tight text-stone-800 mb-2">The drive back</p>
<p className="font-sans text-sm text-stone-500 leading-relaxed">
                        October. Windows down. You humming along to a song you pretended not to know. I remember thinking: <span className="italic">I could stay here.</span>
</p>
</div>
</div>
</section>

<section className="py-24 md:py-32">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
<div className="group">
<div className="mb-4 text-stone-400 group-hover:text-rose-900/60 transition-colors">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h4 className="font-serif text-xl text-stone-800 mb-2">Safety</h4>
<p className="font-sans text-xs text-stone-500 leading-relaxed max-w-xs mx-auto md:mx-0">
                        The feeling of exhaling fully. knowing I don't have to perform or impress. Just be.
                    </p>
</div>
<div className="group">
<div className="mb-4 text-stone-400 group-hover:text-rose-900/60 transition-colors">
<iconify-icon icon="solar:compass-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h4 className="font-serif text-xl text-stone-800 mb-2">Curiosity</h4>
<p className="font-sans text-xs text-stone-500 leading-relaxed max-w-xs mx-auto md:mx-0">
                        You are a landscape I want to keep exploring. There is always more to learn, more to understand.
                    </p>
</div>
<div className="group">
<div className="mb-4 text-stone-400 group-hover:text-rose-900/60 transition-colors">
<iconify-icon icon="solar:heart-angle-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h4 className="font-serif text-xl text-stone-800 mb-2">Calm</h4>
<p className="font-sans text-xs text-stone-500 leading-relaxed max-w-xs mx-auto md:mx-0">
                        A steady rhythm in a chaotic year. You ground me without holding me down.
                    </p>
</div>
</div>
</section>

<section className="py-16 md:py-24 border-t border-stone-200">
<h2 className="font-sans text-xs uppercase tracking-widest text-stone-400 font-medium mb-12 text-center">My intentions</h2>
<div className="max-w-md mx-auto space-y-8">
<div className="flex items-start gap-4">
<div className="mt-1 text-stone-400 shrink-0">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div>
<p className="font-serif text-lg text-stone-800">To keep paying attention.</p>
<p className="font-sans text-sm text-stone-500 mt-1">To the stories you tell, and the ones you don't.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 text-stone-400 shrink-0">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div>
<p className="font-serif text-lg text-stone-800">To show up.</p>
<p className="font-sans text-sm text-stone-500 mt-1">On the easy days, and especially on the hard ones.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 text-stone-400 shrink-0">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div>
<p className="font-serif text-lg text-stone-800">To choose you.</p>
<p className="font-sans text-sm text-stone-500 mt-1">Again and again. With intention.</p>
</div>
</div>
</div>
</section>

<footer className="pt-24 pb-12 text-center space-y-6">
<p className="font-serif text-3xl md:text-4xl italic text-stone-800 tracking-tight">
                "You are my favorite silence."
            </p>
<div className="flex justify-center items-center gap-2 pt-8">
<span className="h-px w-8 bg-stone-300"></span>
<iconify-icon className="text-rose-900/70" icon="solar:heart-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span className="h-px w-8 bg-stone-300"></span>
</div>
<p className="font-sans text-xs text-stone-400 tracking-widest uppercase mt-4">Always</p>
</footer>
</main>

    </>
  );
}
