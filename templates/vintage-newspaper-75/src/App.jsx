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
      

<div className="max-w-7xl mx-auto bg-paper shadow-[0_2px_40px_rgba(0,0,0,0.4)] relative overflow-hidden">

<div className="flex justify-between items-center px-6 py-2 border-b border-stone-800 text-xs uppercase tracking-widest font-semibold text-stone-600">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:cloud-sun" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v2m-7.07.93l1.41 1.41M20 12h2m-2.93-7.07l-1.41 1.41m-1.713 6.31a4 4 0 0 0-5.925-4.128M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>Fair, High 72°F</span>
</div>
<div className="font-typewriter text-stone-900">Est. 1892</div>
<div className="flex items-center gap-2">
<span>2 Cents</span>
</div>
</div>

<header className="px-6 py-6 text-center border-b-4 border-double border-stone-800">
<h1 className="md:text-7xl lg:text-8xl leading-none uppercase text-5xl font-bold text-stone-900 tracking-tighter font-masthead mb-2">
                The Daily Chronicle
            </h1>
<div className="flex items-center justify-center gap-4 mt-4 py-2 border-t border-b border-stone-800 w-full max-w-4xl mx-auto">
<div className="flex-1 text-center border-r border-stone-300 text-sm font-bold uppercase tracking-wide text-stone-700">
                    Vol. XCII No. 14,203
                </div>
<div className="flex-1 text-center text-sm font-bold uppercase tracking-wide text-stone-700">
                    New York, Tuesday, October 24, 1929
                </div>
<div className="flex-1 text-center border-l border-stone-300 text-sm font-bold uppercase tracking-wide text-stone-700">
                    Late Edition
                </div>
</div>
</header>

<main className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-8 px-6 py-6">

<aside className="col-span-1 lg:col-span-2 flex flex-col gap-8 vertical-separator pb-8 lg:pb-0 border-b lg:border-b-0 border-stone-300">

<div className="border border-stone-800 p-3 bg-stone-200/50">
<h4 className="font-masthead font-bold text-center border-b border-stone-400 pb-1 mb-2 text-sm">Weather Forecast</h4>
<div className="flex text-stone-800 mt-2 mb-2 justify-center">add a picture
</div>
<p className="text-xs text-center leading-tight">Strong winds expected from the north-east. Rain likely by evening.</p>
</div>

<article>
<h3 className="font-headline font-semibold text-xl leading-tight mb-2 tracking-tight">Council Approves New Bridge Plans</h3>
<div className="w-8 h-0.5 bg-stone-800 mb-3"></div>
<p className="text-xs leading-relaxed text-justify-newspaper">
<span className="float-left text-3xl font-masthead mr-1 leading-[0.8]">T</span>he municipal council met yesterday evening to discuss the proposed infrastructure changes. In a unanimous vote, the plans for the new suspension bridge were approved, marking a significant milestone for the city's development. Construction is slated to begin early next spring, provided that funding remains secure.
                    </p>
<p className="text-xs leading-relaxed text-justify-newspaper mt-2">
                        Local residents have expressed concerns regarding traffic congestion during the construction phase.
                    </p>
</article>

<div className="border-t-2 border-b-2 border-stone-800 py-4 text-center">
<p className="font-masthead text-xs uppercase tracking-widest mb-1">Authentic Tonics</p>
<h4 className="font-headline text-2xl font-bold italic mb-1">Dr. Smith's Elixir</h4>
<p className="font-typewriter text-xs mb-2">Cures all ailments!</p>
<span className="border border-stone-800 px-2 py-0.5 text-xs font-bold inline-block rounded-sm">50¢</span>
</div>
</aside>

<section className="col-span-1 lg:col-span-7 pb-8 lg:pb-0 border-b lg:border-b-0 border-stone-300">

<div className="text-center mb-6">
<h2 className="font-headline text-5xl md:text-6xl font-semibold leading-[0.9] tracking-tight mb-3 text-stone-900 uppercase">
                        Industrial Age Reaches New Peak
                    </h2>
<p className="font-headline text-2xl italic text-stone-600 font-light">
                        Factories Report Record Output Across All Sectors
                    </p>
</div>

<figure className="mb-6 relative group">
<div className="w-full aspect-video bg-stone-300 relative overflow-hidden border border-stone-800 shadow-sm">

<img alt="Factory workers" className="w-full h-full object-cover img-vintage" src="https://images.unsplash.com/photo-1516550893923-42d28e5677af?q=80&amp;w=2072&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.2)]"></div>
</div>
<figcaption className="text-xs text-center mt-2 italic font-serif text-stone-600">
                        Fig 1. Workers leaving the central plant at dusk. (Staff Photo)
                    </figcaption>
</figure>

<div className="md:columns-2 gap-8 text-sm leading-relaxed text-stone-800 text-justify-newspaper">
<p className="mb-4">
<span className="float-left text-6xl font-masthead mr-2 mt-[-10px] text-stone-900">I</span>ndustrial production has soared to unprecedented levels this quarter, defying the expectations of even the most optimistic economists. The steady hum of machinery has become the heartbeat of the city, driving growth and employment to record highs. Reports from the Ministry of Commerce indicate a 15% increase in steel output alone.
                    </p>
<p className="mb-4">
                        "It is a dawn of a new era," declared Mayor Thompson during his address at the City Hall plaza yesterday. "We are witnessing the transformation of our humble town into a metropolis of the future." The crowd, estimated at nearly five thousand, cheered as the new factory whistle blew for the first time.
                    </p>
<h5 className="font-headline font-bold text-lg my-4 text-center uppercase tracking-widest border-t border-b border-stone-300 py-1">Economic Impact</h5>
<p className="mb-4">
                        However, this rapid expansion is not without its critics. Labor unions are calling for improved safety standards, citing a rise in workplace incidents over the past month. "Production cannot come at the cost of human welfare," stated union representative John D. Miller. Negotiations are set to resume on Monday.
                    </p>
<p className="mb-4">
                        Market analysts predict that if the current trend continues, the city could become the primary export hub for the entire region by the end of the decade. Railroad stocks have already seen a sharp incline in anticipation of increased freight volume.
                    </p>
<p>
                        As winter approaches, the demand for coal and raw materials is expected to tighten supply chains. Local merchants are advising citizens to stock up early to avoid potential shortages. Despite these warnings, the mood on the street remains jubilantly optimistic.
                    </p>
</div>
<div className="flex justify-center mt-8">
<span className="font-typewriter text-xs text-stone-500 tracking-[0.5em]">• • •</span>
</div>
</section>

<aside className="col-span-1 lg:col-span-3 flex flex-col gap-6 lg:pl-8 lg:border-l border-stone-300">

<div className="border-2 border-stone-900 p-4 relative">
<div className="absolute -top-3 left-4 bg-paper px-2 font-masthead font-bold text-sm uppercase">Market Watch</div>
<ul className="space-y-2 text-xs font-typewriter mt-2">
<li className="flex justify-between border-b border-stone-300 pb-1">
<span>STEEL</span>
<span className="font-bold">▲ 42.50</span>
</li>
<li className="flex justify-between border-b border-stone-300 pb-1">
<span>RAIL</span>
<span className="font-bold">▲ 18.25</span>
</li>
<li className="flex justify-between border-b border-stone-300 pb-1">
<span>COAL</span>
<span className="font-bold text-stone-500">▼ 11.00</span>
</li>
<li className="flex justify-between">
<span>GOLD</span>
<span className="font-bold">▬ 20.67</span>
</li>
</ul>
</div>

<article>
<h3 className="font-headline font-semibold text-2xl leading-none mb-3">Library Opens New Wing</h3>
<img alt="Library" className="w-full h-32 object-cover img-vintage mb-3 border border-stone-800" src="https://images.unsplash.com/photo-1524578271613-d550eacf6090?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<p className="text-xs leading-relaxed text-justify-newspaper">
                        The Public Library unveiled its new reading room dedicated to classical literature. The architecture features high vaulted ceilings and mahogany furnishings imported directly from Europe.
                    </p>
</article>

<div className="bg-stone-200/30 p-4 border border-stone-400">
<h4 className="font-masthead font-bold text-center text-sm mb-3 uppercase tracking-wider">Classifieds</h4>
<div className="grid grid-cols-1 gap-3">
<div className="text-[10px] leading-snug">
                             Small pocket watch, gold chain. Reward offered. Contact Mr. Hughes at 44 West St.
                        </div>
<div className="w-full h-px bg-stone-300"></div>
<div className="text-[10px] leading-snug">
                             1924 Model T. Good condition. Needs new tires. Inquire at the mechanic shop.
                        </div>
<div className="w-full h-px bg-stone-300"></div>
<div className="text-[10px] leading-snug">
                             Typist needed for law firm. Must be punctual.
                        </div>
</div>
</div>

<div className="border border-stone-800 p-1">
<div className="bg-stone-300 h-32 flex items-center justify-center relative overflow-hidden">
<img alt="Illustration" className="absolute inset-0 w-full h-full object-cover img-vintage opacity-80" src="https://images.unsplash.com/photo-1550935114-99de2f488f47?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<span className="relative z-10 bg-paper px-2 py-1 text-[10px] font-bold border border-stone-800">Political Cartoon</span>
</div>
</div>
</aside>
</main>

<footer className="border-t-4 border-double border-stone-900 mt-2 mx-6 py-4 flex justify-between items-end mb-6">
<div className="text-[10px] uppercase font-bold tracking-widest text-stone-500">
                Printed in the U.S.A.
            </div>
<div className="text-center">
<p className="font-headline italic text-lg">"Truth Above All"</p>
</div>
<div className="text-[10px] uppercase font-bold tracking-widest text-stone-500">
                Page 1
            </div>
</footer>
</div>

<div className="fixed bottom-4 right-4 text-stone-500 text-xs font-typewriter opacity-50 hidden lg:block">
        Viewing: Archive #4922A
    </div>

    </>
  );
}
