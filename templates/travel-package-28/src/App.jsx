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



        // Initialize Icons
        lucide.createIcons();

        // Scroll Logic for Indicators
        const scrollContainer = document.getElementById('scroll-container');
        const dots = [
            document.getElementById('dot-0'),
            document.getElementById('dot-1'),
            document.getElementById('dot-2')
        ];

        scrollContainer.addEventListener('scroll', () => {
            const scrollLeft = scrollContainer.scrollLeft;
            const width = scrollContainer.clientWidth;
            // Calculate active index (0, 1, or 2)
            const activeIndex = Math.round(scrollLeft / width);

            // Update dots
            dots.forEach((dot, index) => {
                if (index === activeIndex) {
                    dot.classList.remove('w-2', 'bg-white/40', 'opacity-50');
                    dot.classList.add('w-8', 'bg-white', 'opacity-100');
                } else {
                    dot.classList.remove('w-8', 'bg-white', 'opacity-100');
                    dot.classList.add('w-2', 'bg-white/40', 'opacity-50');
                }
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
      

<main className="relative w-full h-screen overflow-hidden">

<header className="absolute top-0 left-0 w-full z-20 p-6 flex justify-between items-center bg-gradient-to-b from-black/60 to-transparent pointer-events-none">
<span className="text-lg font-medium tracking-tighter text-white drop-shadow-md pointer-events-auto">VOYAGE.</span>
<button className="pointer-events-auto p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white/20 transition-colors">
<i className="w-5 h-5" data-lucide="search"></i>
</button>
</header>

<div className="flex w-full h-full overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth" id="scroll-container">

<section className="min-w-full h-full relative snap-center flex-shrink-0 group">

<div className="absolute inset-0">
<img alt="Kyoto" className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"></div>

<div className="absolute bottom-0 w-full p-8 pb-12 flex flex-col justify-end h-full">
<div className="flex items-center space-x-2 text-zinc-400 mb-2">
<i className="w-3 h-3" data-lucide="map-pin"></i>
<span className="text-xs uppercase tracking-widest font-medium">Japan</span>
</div>
<h1 className="text-4xl font-medium text-white tracking-tight mb-3 leading-tight">
                        Kyoto<br/><span className="text-zinc-400">Arashiyama</span>
</h1>
<p className="text-sm text-zinc-300 font-light leading-relaxed max-w-[90%] mb-8">
                        Experience the ethereal beauty of the bamboo grove. A path of tranquility that whispers the ancient secrets of the east.
                    </p>

<button className="w-full py-3 bg-white text-black text-sm font-medium rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
                        Explore Location <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</section>

<section className="min-w-full h-full relative snap-center flex-shrink-0 group">
<div className="absolute inset-0">
<img alt="Cinque Terre" className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&amp;w=2633&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"></div>
<div className="absolute bottom-0 w-full p-8 pb-12 flex flex-col justify-end h-full">
<div className="flex items-center space-x-2 text-zinc-400 mb-2">
<i className="w-3 h-3" data-lucide="map-pin"></i>
<span className="text-xs uppercase tracking-widest font-medium">Italy</span>
</div>
<h1 className="text-4xl font-medium text-white tracking-tight mb-3 leading-tight">
                        Cinque<br/><span className="text-zinc-400">Terre</span>
</h1>
<p className="text-sm text-zinc-300 font-light leading-relaxed max-w-[90%] mb-8">
                        Vibrant houses cascading down rugged cliffs into the Mediterranean. A masterpiece of color, culture, and coastal charm.
                    </p>
<button className="w-full py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium rounded-lg hover:bg-white/20 transition-colors flex items-center justify-center gap-2">
                        View Details
                    </button>
</div>
</section>

<section className="min-w-full h-full relative snap-center flex-shrink-0 group">
<div className="absolute inset-0">
<img alt="Swiss Alps" className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"></div>
<div className="absolute bottom-0 w-full p-8 pb-12 flex flex-col justify-end h-full">
<div className="flex items-center space-x-2 text-zinc-400 mb-2">
<i className="w-3 h-3" data-lucide="map-pin"></i>
<span className="text-xs uppercase tracking-widest font-medium">Switzerland</span>
</div>
<h1 className="text-4xl font-medium text-white tracking-tight mb-3 leading-tight">
                        Alpine<br/><span className="text-zinc-400">Summit</span>
</h1>
<p className="text-sm text-zinc-300 font-light leading-relaxed max-w-[90%] mb-8">
                        Breath the crisp mountain air atop the world. Where majestic peaks meet the sky in a symphony of snow and rock.
                    </p>
<button className="w-full py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium rounded-lg hover:bg-white/20 transition-colors flex items-center justify-center gap-2">
                        Book Tour
                    </button>
</div>
</section>
</div>

<div className="absolute bottom-6 left-0 w-full flex justify-center items-center space-x-2 z-20 pointer-events-none">
<div className="h-1 rounded-full bg-white transition-all duration-300 ease-out w-8 opacity-100" id="dot-0"></div>
<div className="h-1 rounded-full bg-white/40 transition-all duration-300 ease-out w-2 opacity-50" id="dot-1"></div>
<div className="h-1 rounded-full bg-white/40 transition-all duration-300 ease-out w-2 opacity-50" id="dot-2"></div>
</div>
</main>


    </>
  );
}
