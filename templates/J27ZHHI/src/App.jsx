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



    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons({ strokeWidth: 1.5 });

      const animated = [...document.querySelectorAll('[data-animate]')];
      animated.forEach((el, i) => {
        el.classList.add('opacity-0', 'translate-y-8', 'blur-sm');
        el.style.transition = 'opacity .7s ease-out, transform .7s ease-out, filter .7s ease-out';
        setTimeout(() => {
          el.classList.remove('opacity-0', 'translate-y-8', 'blur-sm');
        }, i * 150 + 300);
      });
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
      

<header className="relative isolate overflow-hidden">
<img alt="Pixel art valley" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<nav className="flex items-center justify-between max-w-7xl mx-auto px-6 py-5 lg:px-8">
<span className="text-2xl font-semibold tracking-tight">PB</span>
<a className="inline-flex items-center gap-2 rounded-md bg-rose-600/90 px-4 py-2 text-sm font-medium text-white shadow-md ring-1 ring-rose-700/50 transition hover:bg-rose-600" href="#wishlist">
<i className="w-4 h-4" data-lucide="heart" strokeWidth="1.5"></i>
        Wishlist on Steam
      </a>
</nav>
<section className="flex flex-col items-center text-center py-24 sm:py-32" data-animate="">
<h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight mb-5">
        Pixel Bloom
      </h1>
<p className="max-w-xl text-lg sm:text-xl mb-8">
        A cozy farming simulator where magic meets pixel-perfect seasons.
      </p>
<div className="flex gap-4">
<a className="inline-flex items-center gap-2 rounded-md bg-white/80 px-4 py-2 text-sm font-medium shadow ring-1 ring-slate-300/60 backdrop-blur hover:bg-white" href="#trailer">
<i className="w-4 h-4" data-lucide="play-circle" strokeWidth="1.5"></i>
          Watch Trailer
        </a>
<a className="inline-flex items-center gap-2 rounded-md bg-rose-600/90 px-4 py-2 text-sm font-medium text-white shadow-md ring-1 ring-rose-700/50 transition hover:bg-rose-600" href="#wishlist">
<i className="w-4 h-4" data-lucide="heart" strokeWidth="1.5"></i>
          Wishlist on Steam
        </a>
</div>
</section>
</header>

<section className="max-w-7xl mx-auto px-6 py-20" data-animate="">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center mb-12">
      Meet the Locals
    </h2>
<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

<article className="rounded-lg bg-white shadow-sm ring-1 ring-slate-200 p-6 flex flex-col items-center text-center" data-animate="" style={{transition: 'all .7s ease-out'}}>
<img alt="Lyra portrait" className="mb-4 h-32 w-32 rounded-full object-cover shadow" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<h3 className="text-xl font-medium mb-1">Lyra</h3>
<p className="text-sm text-slate-600">
          A spritely witch who brews fertilizers that make crops sparkle.
        </p>
</article>

<article className="rounded-lg bg-white shadow-sm ring-1 ring-slate-200 p-6 flex flex-col items-center text-center" data-animate="" style={{transition: 'all .7s ease-out'}}>
<img alt="Brumble portrait" className="mb-4 h-32 w-32 rounded-full object-cover shadow" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<h3 className="text-xl font-medium mb-1">Brumble</h3>
<p className="text-sm text-slate-600">
          A gentle golem who tends orchards and loves autumn leaves.
        </p>
</article>

<article className="rounded-lg bg-white shadow-sm ring-1 ring-slate-200 p-6 flex flex-col items-center text-center" data-animate="" style={{transition: 'all .7s ease-out'}}>
<img alt="Pip portrait" className="mb-4 h-32 w-32 rounded-full object-cover shadow" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<h3 className="text-xl font-medium mb-1">Pip</h3>
<p className="text-sm text-slate-600">
          A mischievous sprite convinced every day is spring equinox.
        </p>
</article>
</div>
</section>

<section className="bg-gradient-to-b from-rose-50 to-white py-20" data-animate="">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6">
        Seasons in Full Bloom
      </h2>
<p className="mb-10 text-slate-700">
        From snowy starfalls in Winterglow to cherry-bright Springtide,
        each season transforms your farm and unlocks unique creatures.
      </p>
<div className="flex flex-col sm:flex-row justify-center gap-6" data-animate="">
<img alt="Winterglow" className="w-full sm:w-1/3 rounded-lg shadow ring-1 ring-slate-200 object-cover" src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<img alt="Springtide" className="w-full sm:w-1/3 rounded-lg shadow ring-1 ring-slate-200 object-cover" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<img alt="Summerglimmer" className="w-full sm:w-1/3 rounded-lg shadow ring-1 ring-slate-200 object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 py-24" data-animate="" id="trailer">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center mb-8">
      Gameplay Trailer
    </h2>
<div className="relative pb-[56.25%] h-0 rounded-lg overflow-hidden shadow ring-1 ring-slate-200" data-animate="">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="absolute top-0 left-0 w-full h-full" frameborder="0" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&amp;rel=0" title="Pixel Bloom Trailer"></iframe>
</div>
</section>

<section className="bg-rose-600/90 py-16 px-6" data-animate="" id="wishlist">
<div className="max-w-3xl mx-auto text-center text-white">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
        Grow the magic—add Pixel Bloom to your wishlist!
      </h2>
<p className="mb-8 text-rose-100">
        Be the first to know when the farm gates open.
      </p>
<a className="inline-flex items-center gap-2 bg-white text-rose-600 px-6 py-3 rounded-md font-medium shadow-md ring-1 ring-white/20 transition hover:shadow-lg" href="https://store.steampowered.com" target="_blank">
<i className="w-5 h-5" data-lucide="shopping-bag" strokeWidth="1.5"></i>
        Wishlist on Steam
      </a>
</div>
</section>

<footer className="bg-white border-t border-slate-200 py-8 text-center text-sm text-slate-500">
    © 2024 Pixel Bloom Studios. All rights reserved.
  </footer>



    </>
  );
}
