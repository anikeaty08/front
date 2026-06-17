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
      

<div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none -z-10">
<div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-rose-200/50 to-transparent mix-blend-multiply blur-[120px] animate-pulse" style={{animationDuration: '4s'}}></div>
<div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tl from-pink-100/60 to-transparent mix-blend-multiply blur-[100px]"></div>
</div>

<nav className="absolute top-0 w-full p-8 md:p-12 flex justify-center z-20">
<span className="text-xs font-medium tracking-tighter text-stone-400 uppercase">E L E V E N</span>
</nav>

<main className="relative z-10 flex flex-col items-center px-6 max-w-3xl mx-auto w-full">

<section className="min-h-screen flex flex-col items-center justify-center text-center w-full pt-16 pb-20">

<div className="mb-10 flex items-center justify-center gap-6 text-rose-400">
<iconify-icon height="20" icon="solar:leaf-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
<iconify-icon height="24" icon="solar:flower-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
<iconify-icon className="animate-pulse text-rose-500" height="20" icon="solar:heart-angle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>

<div className="space-y-4 mb-12">
<span className="text-xs font-medium uppercase tracking-widest text-rose-500/80 block">To my absolute everything</span>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-stone-800 drop-shadow-sm" style={{fontFamily: '\'Playfair Display\', serif'}}>
                    Happy <span className="text-rose-500/90 italic pr-2">Flower</span> Day
                </h1>
</div>

<p className="text-base md:text-lg text-stone-500/90 font-light leading-relaxed max-w-lg mx-auto mb-16">
                Every moment with you feels like a delicate bloom unfolding in the soft morning light. You bring a profound, beautiful peace to my soul. Today, and always, I celebrate the love we share.
            </p>

<div className="relative group cursor-default w-full max-w-md mx-auto">

<div className="absolute -inset-0.5 bg-gradient-to-r from-rose-200 to-pink-100 rounded-2xl blur-md opacity-60 group-hover:opacity-100 transition duration-700"></div>

<div className="relative px-8 py-10 bg-white/70 backdrop-blur-xl ring-1 ring-stone-900/5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col items-center transition duration-500 hover:bg-white/90">
<div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center mb-5 text-rose-500">
<iconify-icon height="20" icon="solar:stars-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-stone-800 mb-3" style={{fontFamily: '\'Playfair Display\', serif'}}>
                        You are my 11.11 wish, come true.
                    </h2>
<p className="text-sm text-stone-400 font-light tracking-wide">
                        The one my heart always waited for.
                    </p>
</div>
</div>

<div className="absolute bottom-8 animate-bounce text-stone-300">
<iconify-icon height="20" icon="solar:arrow-down-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
</section>

<section className="w-full py-24 md:py-32 flex flex-col items-center border-t border-stone-200/50">
<h3 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-800 mb-12" style={{fontFamily: '\'Playfair Display\', serif'}}>
                The Little Things
            </h3>
<p className="text-base text-stone-500/90 font-light text-center max-w-md mx-auto mb-16">
                It's in the quiet, unspoken moments where I find myself falling for you all over again.
            </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

<div className="p-8 rounded-2xl bg-white/40 backdrop-blur-md ring-1 ring-stone-900/5 hover:bg-white/60 transition duration-500">
<div className="w-10 h-10 rounded-full bg-rose-50/80 flex items-center justify-center mb-6 text-rose-400">
<iconify-icon height="20" icon="solar:cup-hot-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-stone-800 mb-2 tracking-tight">Morning Coffee</h4>
<p className="text-sm text-stone-500 font-light leading-relaxed">
                        The way you smile before the world wakes up. It's my favorite way to start any day.
                    </p>
</div>

<div className="p-8 rounded-2xl bg-white/40 backdrop-blur-md ring-1 ring-stone-900/5 hover:bg-white/60 transition duration-500 md:mt-8">
<div className="w-10 h-10 rounded-full bg-rose-50/80 flex items-center justify-center mb-6 text-rose-400">
<iconify-icon height="20" icon="solar:moon-stars-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-stone-800 mb-2 tracking-tight">Late Night Talks</h4>
<p className="text-sm text-stone-500 font-light leading-relaxed">
                        Whispered secrets and shared dreams under the moonlight. My safe haven.
                    </p>
</div>
</div>
</section>

<section className="w-full py-24 md:py-32 flex flex-col items-center border-t border-stone-200/50">
<h3 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-800 mb-16" style={{fontFamily: '\'Playfair Display\', serif'}}>
                My Promises to You
            </h3>
<div className="w-full max-w-lg space-y-10 relative before:absolute before:inset-y-0 before:left-6 before:w-[1px] before:bg-gradient-to-b before:from-rose-100 before:via-rose-300/50 before:to-transparent">

<div className="relative flex gap-8">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-white ring-1 ring-stone-900/5 shadow-sm flex items-center justify-center text-rose-500 z-10">
<iconify-icon height="20" icon="solar:sun-2-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div className="pt-2">
<h4 className="text-lg font-medium text-stone-800 mb-2 tracking-tight">To be your light</h4>
<p className="text-sm text-stone-500 font-light leading-relaxed">
                            Even on the darkest days, I promise to hold your hand and guide you through.
                        </p>
</div>
</div>

<div className="relative flex gap-8">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-white ring-1 ring-stone-900/5 shadow-sm flex items-center justify-center text-rose-500 z-10">
<iconify-icon height="20" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div className="pt-2">
<h4 className="text-lg font-medium text-stone-800 mb-2 tracking-tight">To be your peace</h4>
<p className="text-sm text-stone-500 font-light leading-relaxed">
                            To create a world for us where you always feel safe, seen, and unconditionally loved.
                        </p>
</div>
</div>

<div className="relative flex gap-8">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-white ring-1 ring-stone-900/5 shadow-sm flex items-center justify-center text-rose-500 z-10">
<iconify-icon height="20" icon="solar:infinity-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div className="pt-2">
<h4 className="text-lg font-medium text-stone-800 mb-2 tracking-tight">To never stop trying</h4>
<p className="text-sm text-stone-500 font-light leading-relaxed">
                            To choose you, over and over again. Every single day, for all of our days.
                        </p>
</div>
</div>
</div>
</section>
</main>

<footer className="w-full text-center pb-16 pt-8 z-20">
<iconify-icon className="text-rose-300 mb-4" height="16" icon="solar:heart-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<p className="text-xs text-stone-400/80 font-light tracking-widest uppercase">Forever and always yours</p>
</footer>

    </>
  );
}
